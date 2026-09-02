// Tests.
//
// Honest scope note, because research/02 §9.3 names this exact gap: the fixture
// set below is not a corpus. `human/` is hand-written control prose, three
// documents. `control/gettysburg.txt` is genuinely human and genuinely public
// domain, and it is here specifically to break a rule (see the rhythm-floor
// test). Per-rule precision against a real corpus of professional human writing
// is the unclaimed contribution in the category, and these tests do not make it.
// What they do establish is separation on this set, and the mode behaviour.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { lintText, RULES, OMITTED_RULES, resolveMode } from '../src/lint.mjs';
import { LEXICON } from '../src/data/lexicon.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const FIX = join(HERE, 'fixtures');

const load = (group) => readdirSync(join(FIX, group)).sort().map((name) => ({
  name: `${group}/${name}`,
  raw: readFileSync(join(FIX, group, name), 'utf8'),
}));

const AI = load('ai');
const HUMAN = load('human');
const gated = (r) => r.counts.enforceable;

// --- the headline claim -----------------------------------------------------

test('separates AI fixtures from human control text', () => {
  const ai = AI.map((f) => ({ ...f, r: lintText(f.raw, { path: f.name }) }));
  const human = HUMAN.map((f) => ({ ...f, r: lintText(f.raw, { path: f.name }) }));

  for (const h of human) {
    assert.equal(gated(h.r), 0, `${h.name} should have no gated findings, got: ${h.r.findings.map((f) => f.rule).join(', ')}`);
  }
  const worstHuman = Math.max(...human.map((h) => gated(h.r)));
  const bestAi = Math.min(...ai.map((a) => gated(a.r)));
  assert.ok(bestAi > worstHuman, `weakest AI fixture (${bestAi}) must beat strongest human (${worstHuman})`);
  assert.ok(bestAi >= 8, `AI fixtures should trip many rules, weakest was ${bestAi}`);
});

test('every AI fixture trips at least one structural rule, not just vocabulary', () => {
  for (const f of AI) {
    const r = lintText(f.raw, { path: f.name });
    const structural = r.findings.filter((x) => x.category === 'structural' && x.class === 'enforceable');
    assert.ok(structural.length > 0, `${f.name} caught only by lexical/typographic rules`);
  }
});

// --- mode awareness ---------------------------------------------------------

test('reference mode relaxes the anti-machine rules', () => {
  const raw = readFileSync(join(FIX, 'control/api-reference.md'), 'utf8');
  const prose = lintText(raw, { path: 'api-reference.md', mode: 'passage' });
  const reference = lintText(raw, { path: 'api-reference.md', mode: 'reference' });

  assert.ok(gated(prose) > 0, 'a reference page read as prose should be flagged');
  assert.equal(gated(reference), 0, `read as reference it should be clean, got: ${reference.findings.map((f) => f.rule).join(', ')}`);

  const off = reference.relaxed.map((x) => x.id);
  assert.ok(off.includes('struct/sentence-length-variance'));
  assert.ok(off.includes('struct/uniform-paragraph-length'));
  assert.ok(off.includes('typo/bold-inline-list-label'));
});

test('reference mode does not relax the typographic rules that survive paraphrasing', () => {
  const raw = '# Config\n\nSet `timeout`. Default: 30 — seconds.​\n';
  const r = lintText(raw, { mode: 'reference' });
  const ids = r.findings.map((f) => f.rule);
  assert.ok(ids.includes('typo/invisible-unicode'));
  assert.ok(ids.includes('typo/spaced-em-dash'));
});

test('reference mode tightens the empty-superlative rule instead of relaxing it', () => {
  const raw = '# Config\n\n`timeout` is a powerful option. Default: `30`. Range: `1`-`3600`.\n';
  const prose = lintText(raw, { mode: 'passage' }).findings.find((f) => f.rule === 'lex/empty-superlative');
  const reference = lintText(raw, { mode: 'reference' }).findings.find((f) => f.rule === 'lex/empty-superlative');
  assert.equal(prose.class, 'judgement');
  assert.equal(reference.class, 'enforceable');
});

test('mode aliases resolve to the six Ledger modes', () => {
  assert.equal(resolveMode('reference'), 'instrument');
  assert.equal(resolveMode('email'), 'address');
  assert.equal(resolveMode('adr'), 'account');
  assert.equal(resolveMode(undefined), 'passage');
  assert.equal(resolveMode('nonsense'), null);
});

// --- the rules that must not be in it ---------------------------------------

test('there is no passive-voice rule', () => {
  for (const r of RULES) {
    assert.ok(!/passive/i.test(r.id), `found a passive rule: ${r.id}`);
    assert.ok(!/passive/i.test(r.summary), `found a passive rule: ${r.id}`);
  }
  assert.ok(OMITTED_RULES.some((o) => o.id === 'omitted/passive-voice'));
});

test('a document full of agentless passives is not flagged for it', () => {
  const raw = [
    'The keys were rotated on Tuesday. The migration was run by the on-call engineer.',
    'The alert was acknowledged at 04:19 and the config was rolled back at 04:52.',
    'No data was lost. The incident was closed on Thursday after the review was completed.',
    'The runbook has been updated. Two follow-up tickets were filed and both were assigned.',
  ].join(' ');
  const r = lintText(raw);
  assert.equal(r.findings.filter((f) => /passive/i.test(f.message)).length, 0);
});

test('delve is not flagged by default', () => {
  const raw = `We delve into the numbers below. ${'The team delved further into the data. '.repeat(6)}`;
  const off = lintText(raw);
  assert.equal(off.findings.filter((f) => /delv/i.test(f.message)).length, 0);
});

test('delve is opt-in, and even then only moves the density number', () => {
  const entry = LEXICON.find((e) => e.term === 'delve');
  assert.ok(entry.optIn, 'delve must be opt-in');
  assert.ok(/Liang/.test(entry.source), 'the bias citation must travel with the entry');

  const raw = `${'We delve into the intricate detail and delve again. '.repeat(12)}`;
  const on = lintText(raw, { includeOptIn: true });
  // The density number moves...
  const withOpt = on.metrics['lex/dated-vocabulary-density'];
  const without = lintText(raw).metrics['lex/dated-vocabulary-density'];
  assert.ok(withOpt.rate > without.rate, 'opt-in should raise the density');
  // ...but no finding ever points at the word itself.
  assert.equal(on.findings.filter((f) => /delv/i.test(f.message)).length, 0);
});

test('a bare em dash is not flagged, only a spaced one', () => {
  assert.equal(lintText('The cache fell over at 04:12—it came back at 09:40. That is the whole story.').findings.length, 0);
  assert.ok(lintText('The cache fell over — it came back. That is the story.').findings.some((f) => f.rule === 'typo/spaced-em-dash'));
});

// --- classification and provenance ------------------------------------------

test('every rule carries a source and a class', () => {
  for (const r of RULES) {
    assert.ok(r.source && r.source.length > 20, `${r.id} has no usable source`);
    assert.ok(['enforceable', 'judgement'].includes(r.class), `${r.id} has class ${r.class}`);
    assert.ok(['typographic', 'structural', 'lexical', 'controlled-language'].includes(r.category), `${r.id} has category ${r.category}`);
    assert.equal(typeof r.check, 'function');
  }
});

test('every lexicon entry carries an era and a source', () => {
  for (const e of LEXICON) {
    assert.ok(/^\d{4}-\d{4}$/.test(e.era), `${e.term} has era ${e.era}`);
    assert.ok(e.source && e.source.length > 10, `${e.term} has no source`);
  }
});

test('only enforceable rules gate the exit code', () => {
  const raw = readFileSync(join(FIX, 'control/gettysburg.txt'), 'utf8');
  const r = lintText(raw, { path: 'gettysburg.txt' });
  assert.ok(r.counts.judgement > 0, 'Gettysburg should raise at least one suggestion');
  assert.equal(r.counts.enforceable, 0, `Gettysburg must not be gated, got: ${r.findings.filter((f) => f.class === 'enforceable').map((f) => f.rule).join(', ')}`);
});

test('the rhythm floor is a suggestion because the control corpus breaks it', () => {
  // Lincoln writes three consecutive sentences of 19, 21 and 21 words. The
  // framework states the rhythm rule as a hard floor; the control text says it
  // cannot be one. The demotion is the measurement doing its job.
  const raw = readFileSync(join(FIX, 'control/gettysburg.txt'), 'utf8');
  const hit = lintText(raw).findings.find((f) => f.rule === 'struct/rhythm-floor');
  assert.ok(hit, 'expected the rhythm floor to fire on Gettysburg');
  assert.equal(hit.class, 'judgement');
});

// --- masking ----------------------------------------------------------------

test('code blocks, inline code and URLs are not linted', () => {
  const raw = [
    '# Heading',
    '',
    '```sh',
    'echo "It is not just a test — it is a powerful, seamless, robust demo"',
    '```',
    '',
    'Run `serves as a testament to` to see the output.',
    '',
    'See https://example.com/not-just-a-url-but-a-tapestry for more.',
    '',
  ].join('\n');
  assert.deepEqual(lintText(raw).findings.map((f) => f.rule), []);
});

test('findings point at the right line', () => {
  const raw = 'First line is fine.\n\nSecond paragraph is fine.\n\nThis one is not just fine, but excellent.\n';
  const hit = lintText(raw).findings.find((f) => f.rule === 'struct/negative-parallelism');
  assert.equal(hit.line, 5);
});

// --- CLI contract -----------------------------------------------------------

test('exit code is 1 on gated findings and 0 on clean text', async () => {
  const { execFileSync } = await import('node:child_process');
  const cli = join(HERE, '..', 'src', 'cli.mjs');
  const run = (args) => {
    try {
      execFileSync(process.execPath, [cli, ...args], { encoding: 'utf8', stdio: 'pipe' });
      return 0;
    } catch (err) {
      return err.status;
    }
  };
  assert.equal(run([join(FIX, 'human/plain-guide.md'), '--no-color']), 0);
  assert.equal(run([join(FIX, 'ai/blog-post.md'), '--no-color']), 1);
  assert.equal(run([join(FIX, 'control/gettysburg.txt'), '--no-color']), 0);
  assert.equal(run([join(FIX, 'control/gettysburg.txt'), '--no-color', '--strict']), 1);
  assert.equal(run(['--mode=nonsense', join(FIX, 'human/plain-guide.md')]), 2);
});

test('--json emits parseable output with the same verdict', async () => {
  const { execFileSync } = await import('node:child_process');
  const cli = join(HERE, '..', 'src', 'cli.mjs');
  let out;
  try {
    out = execFileSync(process.execPath, [cli, join(FIX, 'ai/adr.md'), '--json'], { encoding: 'utf8', stdio: 'pipe' });
  } catch (err) {
    out = err.stdout;
  }
  const parsed = JSON.parse(out);
  assert.equal(parsed.tool, 'composerxai-lint');
  assert.equal(parsed.summary.failed, true);
  assert.ok(parsed.results[0].findings.length > 0);
  assert.ok(parsed.results[0].findings.every((f) => f.source && f.class && f.line));
});

// One sentence, two patterns. "It's not just X, it's Y" satisfies both the
// generic not-just form and the it's-not form, and emitting once per pattern
// reported it twice. The count is what the exit code gates on, so a doubled
// count is a wrong answer, not a cosmetic one.
test('negative parallelism reports one sentence once', () => {
  const r = lintText("It's not just a tool—it's a platform.\n", { path: 'x.md' });
  const hits = r.findings.filter((f) => f.rule === 'struct/negative-parallelism');
  assert.equal(hits.length, 1, `expected one finding, got ${hits.length}`);
  assert.match(hits[0].message, /It'?s not just a tool/);
});

test('two separate negative-parallelism sentences still report twice', () => {
  const r = lintText("It's not just a tool—it's a platform.\n\nNot merely fast but correct.\n", { path: 'x.md' });
  const hits = r.findings.filter((f) => f.rule === 'struct/negative-parallelism');
  assert.equal(hits.length, 2, `expected two findings, got ${hits.length}`);
});
