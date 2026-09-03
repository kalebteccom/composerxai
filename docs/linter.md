<!-- composerxai-lint mode=reference -->

# composerxai-lint, rule reference

The README covers install and first use. This file covers what the 26 rules are, which ones gate a
build, and which checks the tool refuses to implement.

`--list-rules` prints every rule with its class and its source. `--verbose` prints the source under
each finding as it fires.

## Rule families

**Typographic.** These survive paraphrasing, which is why they are worth the least code. Nothing
that rewrites a sentence removes a zero-width space. Spaced em dashes, invisible and bidi Unicode,
mixed curly and straight quotes in one file, Title Case headings, bolded labels at the head of
bullets, emoji in headings.

**Structural.** Rhetorical template density per thousand words, present participial clause rate,
nominalization density, sentence-length variance, uniform paragraph length, negative parallelism,
rule-of-three triads, copula avoidance, closing summaries. Vocabulary cues collapse under
adversarial prompting. Structural cues hold, which is most of the point of the tool.

**Lexical.** Scored as a density over a dated list. Every entry records the era its
overrepresentation was measured in, because tells decay and a 2023 word list is already wrong.

**Controlled-language.** Four rules that only run in `instrument` mode, where reference material is
supposed to be tenseless, impersonal and unhedged.

## Enforceable or judgement

Every rule is one or the other and the tool prints which. Enforceable rules gate the exit code.
Judgement rules report and never fail a build unless you pass `--strict`.

Of the 26 rules, 20 gate and 6 are suggestions.

The split is load-bearing. `struct/rule-of-three` finds the triad; whether the third item does work
or pads the list is not something a regex decides. `struct/rhythm-floor` started as a gate and was
demoted when the Gettysburg Address failed it.

## What each mode changes

`--show-relaxed` prints it for the run you just did. For `instrument`:

```
relaxed in instrument mode: typo/bold-inline-list-label (disabled in instrument mode);
struct/template-density (threshold 9 -> 16 in instrument mode); struct/participial-clause-rate
(threshold 7 -> 10 in instrument mode); struct/nominalization-rate (threshold 42 -> 62 in
instrument mode); struct/sentence-length-variance (disabled in instrument mode);
struct/rhythm-floor (disabled in instrument mode); struct/uniform-paragraph-length (disabled in
instrument mode); struct/rule-of-three (threshold 4 -> 9 in instrument mode);
lex/dated-vocabulary-density (threshold 5.5 -> 8 in instrument mode)
```

Reference material is meant to be regular, repetitive and tonally dead, entry identical to entry.
`instrument` tightens one rule in exchange: unmeasured superlatives become a gate there, because
reference material forbids evaluation outright.

## What it refuses to check

`--explain-omissions` prints the list with the evidence. The two that matter:

**No passive-voice check.** Reinhart et al. measured GPT-4o using agentless passive at roughly half
the human rate, so the rule points the wrong way. Pullum documents that people misidentify the
passive routinely. Microsoft and Google ship the same leaky regex.

**`delve` is not flagged by default.** Two corpus checks killed the Nigerian-English explanation, so
the spike is real. Liang et al. measured detector bias against non-native English writers, which
makes the harm of flagging one word on one writer real whatever the spike says. It sits behind
`--include-opt-in`, and even enabled it can only move the density number. It can never produce a
finding that points at the word. The reasoning sits in a comment above the entry in
`src/data/lexicon.mjs`.

## Precision

`npm test` runs 35 assertions over the fixtures in `test/fixtures/`: hand-written human control
prose, machine-written samples, and the Gettysburg Address, which is there to break a rule.

That is separation on eight documents, not measured precision. Per-rule precision against a real
corpus of professional human writing is the unclaimed contribution in this category
(`research/02` §9.3) and this repo does not claim it. Known cost: `typo/spaced-em-dash` fires on
humans who type spaced em dashes, and many do.

Sources for every rule live in [`../PRIOR_ART.md`](../PRIOR_ART.md) and in the rule definitions
under `src/rules/`.
