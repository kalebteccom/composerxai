// Controlled-language rule tests.
//
// The load-bearing property is not that these rules fire. It is that they are
// silent everywhere except Instrument mode. They demand the opposite of what the
// rest of the linter demands — no hedging, no narrator, simple tenses only — and
// a leak into any other mode would have the tool contradicting itself on the
// same sentence. Every rule below is tested twice: once where it should fire and
// once in a mode where it must not.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lintText } from '../src/lint.mjs';
import { MODES } from '../src/modes.mjs';
import { readFile } from 'node:fs/promises';

const STE = (raw, mode) =>
  lintText(raw, { path: 'x.md', mode }).findings.filter((f) => f.rule.startsWith('ste/'));

const CASES = [
  ['ste/hedge-modal', 'The server may retry the request.\n'],
  ['ste/compound-tense', 'The token has been revoked.\n'],
  ['ste/first-person', 'We return a token.\n'],
  ['ste/vague-frequency', 'Typically returns 200.\n'],
];

for (const [rule, text] of CASES) {
  test(`${rule} fires in reference mode`, () => {
    const hits = STE(text, 'reference').filter((f) => f.rule === rule);
    assert.ok(hits.length >= 1, `expected ${rule} to fire on: ${text.trim()}`);
    assert.doesNotMatch(hits[0].message, /\n/, 'a quoted match must not carry a newline');
  });
}

test('no controlled-language rule fires outside Instrument mode', () => {
  const all = CASES.map(([, t]) => t).join('\n');
  for (const mode of Object.keys(MODES)) {
    if (mode === 'instrument') continue;
    const hits = STE(all, mode);
    assert.equal(hits.length, 0, `${mode} leaked ${hits.length} controlled-language findings`);
  }
});

test('reference prose written to the rules passes', () => {
  const clean = 'Creates a session and returns a token. Returns 200 on success, 409 when a session exists.\n';
  assert.equal(STE(clean, 'reference').length, 0);
});

// The bold-label rule has to tell a chat answer from a glossary. Both are a
// bolded label at the head of a bullet; only one is a tell. The separator is
// body length, and the wrapped case is the one that broke: a glossary entry
// wrapping across lines measured as one short line and got flagged.
test('a chat-shape bulleted list is caught', () => {
  const raw = '- **Fast**: very quick\n- **Robust**: very solid\n- **Scalable**: scales well\n';
  const hits = lintText(raw, { path: 'x.md' }).findings.filter((f) => f.rule === 'typo/bold-inline-list-label');
  assert.equal(hits.length, 3);
});

test('a glossary of wrapped entries is not', () => {
  const entry = (n) =>
    `- **Entry ${n}.** This one carries a real body of prose that runs past the end of the\n` +
    `  first line and keeps going, which is what separates a glossary from a chat answer.\n`;
  const raw = entry(1) + entry(2) + entry(3) + entry(4);
  const hits = lintText(raw, { path: 'x.md' }).findings.filter((f) => f.rule === 'typo/bold-inline-list-label');
  assert.equal(hits.length, 0, `flagged ${hits.length} glossary entries`);
});

// The gitignore keeps a private corpus out of commits. It does nothing about the
// linter's own output, and a finding quotes the text that matched it, so a
// recursive --json run over a corpus directory would write that corpus into a
// report. These names must stay in the default walk exclusions.
test('the default walk excludes private corpus directories', async () => {
  const src = await readFile(new URL('../src/cli.mjs', import.meta.url), 'utf8');
  const list = src.match(/const DEFAULT_IGNORE = new Set\(\[([\s\S]*?)\]\)/);
  assert.ok(list, 'DEFAULT_IGNORE not found');
  for (const name of ['corpus', 'voice-profiles', 'node_modules', 'fixtures', 'research']) {
    assert.match(list[1], new RegExp(`'${name}'`), `${name} missing from DEFAULT_IGNORE`);
  }
});
