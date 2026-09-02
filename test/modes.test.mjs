// Mode tests.
//
// These guard the join between two vocabularies for one idea. The composing
// skill teaches six *registers* by name and gives each one a file. The linter
// switches rules by *mode*. Nothing structural connects them, so they drifted:
// `correspondence` and `narrative` shipped as register files with no mode to
// resolve to, and anyone who followed the skill and typed the register name got
// "unknown mode". The first test below is that missing join.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';
import { resolveMode, MODES } from '../src/modes.mjs';
import { lintText } from '../src/lint.mjs';

test('every register file name resolves to a mode', () => {
  const dir = new URL('../skills/composing/registers/', import.meta.url);
  const registers = readdirSync(dir).filter((f) => f.endsWith('.md'));
  assert.ok(registers.length >= 6, 'expected the six register files');
  for (const f of registers) {
    const register = f.replace(/\.md$/, '');
    assert.ok(resolveMode(register), `register "${register}" resolves to no mode`);
  }
});

test('a file declares its own mode, and it outranks the command line', () => {
  const raw = '<!-- composerxai-lint mode=reference -->\n\nThe endpoint returns a token.\n';
  const r = lintText(raw, { path: 'x.md', mode: 'address' });
  assert.equal(r.mode, 'instrument', 'the directive should win over the passed mode');
});

test('the mode directive accepts aliases as well as canonical names', () => {
  for (const [alias, canonical] of [['howto', 'direction'], ['adr', 'account'], ['correspondence', 'address']]) {
    const r = lintText(`<!-- composerxai-lint mode=${alias} -->\n\nA sentence.\n`, { path: 'x.md' });
    assert.equal(r.mode, canonical, `${alias} should resolve to ${canonical}`);
  }
});

test('an unknown mode in a directive fails loudly rather than silently defaulting', () => {
  assert.throws(
    () => lintText('<!-- composerxai-lint mode=nonsense -->\n\nA sentence.\n', { path: 'x.md' }),
    /unknown mode "nonsense"/,
  );
});

test('every mode carries a label, dials and a sentence band', () => {
  for (const [name, m] of Object.entries(MODES)) {
    assert.ok(m.label, `${name} has no label`);
    assert.ok(m.dials, `${name} has no dials`);
    assert.ok(Array.isArray(m.meanSentenceWords) && m.meanSentenceWords.length === 2, `${name} band malformed`);
  }
});
