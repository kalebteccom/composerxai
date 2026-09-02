<!-- composerxai-lint mode=readme -->

# composerxai

A writing framework for agent output. `research/` holds the source material; `CONTRIBUTING.md`
holds the rules about rules.

## templates/

Section orders for the artefacts an agent is asked to produce: `spec`, `ticket`, `adr`, `readme`,
`changelog`. Each file gives the order, what belongs in each section, what makes that section fail,
and a table splitting the rules into enforceable and judgement. Each also says what comes out for a
small project, because a two-person change does not need a fifteen-section document.

These are the specification side. They are written for an agent to execute rather than for a person
to enjoy, so `templates/readme.md` is the spec for writing a README, not this repo's own README.

Sources are named per template: standard-readme, Common Changelog, Nygard and MADR for the public
ones, and `research/06` and `research/07` for the spec and ticket orders, which come from a
hook-enforced internal framework and a validator measured across 756 real tickets.

## agents/

Subagent definitions in the Claude Code format. `composer` runs the audience, mode and gap decisions
then drafts and lints. `gap-extractor` resolves what a repo can answer and emits the rest as one
numbered list under the three-way taxonomy. `voice-extractor` derives a voice profile from somebody's
prior writing and is forbidden from copying any of it into a tracked file. `register-auditor` reads a
document and reports which register it is actually in against the one it claims.

They are pointers, not copies. Where an agent file and the skill or reference it links to disagree,
the linked file wins.

## composerxai-lint

A prose linter for AI tells. Node built-ins only, no runtime dependencies, no config file.

```sh
npx composerxai-lint draft.md
npx composerxai-lint docs/ --mode=reference
cat reply.eml | npx composerxai-lint --mode=email --json
```

Not published yet, so from a clone that is `node src/cli.mjs` with the same arguments, or
`npx .` from the repository root. The `bin` entry is in place for when it is.

Exit code is 1 when an enforceable rule fires, so it drops into CI as it stands. `--json` gives you
the findings, the metrics and the per-file verdict.

### What it checks

**Typographic**, which is where the value per line of code is highest, because these survive
paraphrasing. Nothing that rewrites a sentence removes a zero-width space. Spaced em dashes,
invisible and bidi Unicode, mixed curly and straight quotes in one file, Title Case headings,
bolded labels at the head of bullets, emoji in headings.

**Structural**, which matters more than vocabulary and is most of the point. Rhetorical template
density per thousand words, present participial clause rate, nominalization density,
sentence-length variance, uniform paragraph length, negative parallelism, rule-of-three triads,
copula avoidance, closing summaries.

**Lexical**, scored as a density over a dated list. Every entry records the era its
overrepresentation was measured in, because tells decay and a 2023 list is already wrong.

`--list-rules` prints all of them with their sources.

### Modes, and how a file declares its own

Mode decides which rules run. Reference material is supposed to sound mechanical, so the
anti-machine rules switch off in Instrument mode; a framework that cannot say where it stops
applying is a mood. `--mode` sets it for the run, and a file can override that from inside:

```
<!-- composerxai-lint mode=reference -->
```

That line exists because a recursive run has one `--mode` and a repository has many registers.
Without it, `composerxai-lint .` lints your API tables as prose and your prose as API tables, and the
number it prints at the end means nothing. Aliases work here too, so `mode=howto`, `mode=adr` and
`mode=readme` all resolve. An unknown name is an error rather than a silent fall back to the default.

Two more directives, both file-level:

```
<!-- composerxai-lint disable -->                          skip the file
<!-- composerxai-lint disable lex/hollow-close,typo/* -->  skip those rules here
```

A ban list has to contain the words it bans, and a style guide quotes the phrasing it forbids. Those
files can never pass, and a linter nobody can satisfy is a linter everybody turns off. Prefer the
scoped form, and say in a comment why. This repository lints clean under `npm run lint:self`, with
one scoped exception in `PRIOR_ART.md`, which catalogues tells and therefore quotes them.

### Enforceable or judgement

Every rule is one or the other, and the tool prints which. Enforceable rules gate the exit code.
Judgement rules report and never fail a build unless you pass `--strict`, because a rule without a
gate is a suggestion and should look like one.

The split is load-bearing, not decorative. `struct/rule-of-three` finds the triad; whether the
third item is doing work or padding the list is not something a regex decides.
`struct/rhythm-floor` started as a gate and was demoted when the Gettysburg Address failed it.

### Modes

There is no single correct voice, so there is no single rule set. Modes are the six from
`research/03` §3.5, with aliases:

| Mode | Alias | Covers |
|---|---|---|
| `instrument` | `reference`, `api`, `changelog` | Reference pages, config tables, schemas |
| `direction` | `howto`, `runbook`, `guide` | How-to guides, procedures |
| `orientation` | `readme`, `overview` | READMEs, landing pages, index pages |
| `account` | `adr`, `explanation`, `essay` | ADRs, design docs, post-mortems |
| `passage` | `prose`, `blog` (default) | General prose, long-form, reports |
| `address` | `email`, `letter`, `outreach` | Email, replies, cover letters |

`--mode=reference` switches off sentence-length variance, paragraph uniformity and the rhythm
floor, and raises the density thresholds. Reference material is supposed to be regular, repetitive
and tonally dead, entry identical to entry. It tightens one rule in exchange: unmeasured
superlatives become a gate there, because reference material forbids evaluation outright.

`--show-relaxed` prints what the mode changed.

### What it refuses to check

`--explain-omissions` prints the list with the evidence. The two that matter:

There is **no passive-voice check**. Reinhart et al. measured GPT-4o using agentless passive at
roughly half the human rate, so the rule points the wrong way, and Pullum documents that people
misidentify the passive routinely. Microsoft and Google ship the identical leaky regex.

**`delve` is not flagged by default.** Two corpus checks killed the Nigerian-English explanation,
so the spike is real. But Liang et al. measured detector bias against non-native English writers,
which makes the harm of flagging one word on one writer real regardless. It sits behind
`--include-opt-in`, and even enabled it can only move the density number, never produce a finding
that points at the word. The reasoning is in the comment above the entry in
`src/data/lexicon.mjs`.

### Precision

`npm test` asserts separation on the fixture set in `test/fixtures/`: hand-written human control
prose, machine-written samples, and the Gettysburg Address, which is there to break a rule rather
than pass one.

That is separation on eight documents, not measured precision. Per-rule precision against a real
corpus of professional human writing is the unclaimed contribution in this category
(`research/02` §9.3) and this does not claim it. Known cost: the spaced em dash fires on humans who
type them, which many do.

Sources for every rule are in `PRIOR_ART.md` and in the rule definitions.
