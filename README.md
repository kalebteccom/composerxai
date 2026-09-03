<!-- composerxai-lint mode=readme -->

# composerxai

composerxai is a Claude Code plugin that stops Claude writing like a machine. It adds two slash
commands, a skill Claude loads before it drafts anything, an output style that governs how it
reports back to you, and a prose linter with 26 rules. Once it is installed, the specs and READMEs
and replies you asked for come back sounding like a person wrote them, and one command tells you
whether they do.

Five minutes, start to finish. The install is two lines.

## Install

Inside Claude Code, add the marketplace:

```
/plugin marketplace add kalebteccom/composerxai
```

Then install the plugin from it. The name before the `@` is the plugin, the name after it is the
marketplace, and here they happen to be the same word:

```
/plugin install composerxai@composerxai
```

If Claude Code says the plugin is active, you are done. If it tells you to reload, run
`/reload-plugins`. If `/compose` still does not appear in the slash-command list, quit Claude Code
and start it again, because plugin components are read at session start.

Nothing else installs. The linter is bundled and has no runtime dependencies.

## Check it worked

From a shell, not from inside Claude Code:

```sh
claude plugin list
```

Look for this stanza in the output:

```
  ❯ composerxai@composerxai
    Version: 0.1.0
    Scope: user
    Status: ✔ enabled
```

If the version reads `0.1.0` and the status reads `enabled`, everything below will work.

## First use

### Lint something you already wrote

Point `/lint` at a file:

```
/lint docs/architecture.md
```

Claude runs the bundled linter, infers the mode from the file, and then fixes or defends every
finding that gates. You get the findings and the repairs in the same reply.

### Draft something new

```
/compose a README for the billing service
```

Before it writes a word, `/compose` tells you which audience it picked, which of the six modes it is
writing in, and what it does not know. Unknowns arrive as one numbered list split three ways:
`needs-input` for facts that exist somewhere, `open-question` for calls that are yours to make, and
`assumption` for the ones it picked and is proceeding on. Then it drafts and lints, and reports back
against the numbers so you can answer by number.

It never blocks waiting for you.

### The moment it clicks

Here is a paragraph that reads fine until you run it through. Save it as `draft.md`:

```markdown
## Getting Started With The Cache

The cache is not just a performance optimisation but a correctness boundary.
Leveraging a robust, comprehensive invalidation strategy — one that seamlessly
handles stale reads — is crucial for delivering a frictionless user experience.
It serves as the single source of truth for session state.

Let me know if you have any questions.
```

Run the linter over it:

```sh
node src/cli.mjs draft.md
```

```
draft.md  [passage] 56 words, 4 sentences
     1:1   warning gate  typo/title-case-heading          Title Case heading: "Getting Started With The Cache". Sentence case ("Getting started with the cache").
     3:14  error   gate  struct/negative-parallelism      Negative parallelism: "not just a performance optimisation but". Judgement call the linter cannot make for you: does the second half say something the first half did not? If not, delete the first half.
     4:57  error   gate  typo/spaced-em-dash              Spaced em dash. Close it up ("word—word") or use a comma, colon or full stop.
     5:20  error   gate  typo/spaced-em-dash              Spaced em dash. Close it up ("word—word") or use a comma, colon or full stop.
     8:1   error   gate  lex/hollow-close                 Hollow close: "Let me know if you have any questions". Replace with one ask, an owner and a date, or delete it.

5 gated findings across 1 file.
```

Five findings, and not one of them is a typo. They are all habits. Here is the same paragraph with
those habits taken out:

```markdown
## Getting started with the cache

The cache is a correctness boundary. Invalidation has to handle stale reads,
because a stale read hands one user another user's session. Session state
lives here and nowhere else.

Ship it Tuesday, or tell me what is blocking.
```

```
no gated findings across 1 file.
```

The second version is shorter and exits 0. That exit code is why the linter drops straight into CI.

## The linter on its own

You do not need Claude Code to use it. Clone the repo and run it directly. Node 18.18 or newer, no
dependencies, no config file:

```sh
git clone https://github.com/kalebteccom/composerxai.git
cd composerxai
node src/cli.mjs draft.md
node src/cli.mjs docs/ --mode=reference
cat reply.eml | node src/cli.mjs --mode=email --json
```

It is not on npm yet, so `npx composerxai-lint` will fail. The `bin` entry is in `package.json` for
when it is published. From a clone, `npx .` works from the repository root.

Exit code 1 means an enforceable rule fired. `--json` gives you the findings, the metrics and the
per-file verdict.

### Mode picks the rules

This is the one concept that has to land. There is no single correct voice, so there is no single
rule set. **Mode decides which rules run**, and getting it wrong is the most common reason the tool
seems useless.

| Mode | Aliases | Covers |
|---|---|---|
| `instrument` | `reference`, `api`, `changelog`, `schema` | Reference pages, config tables, schemas |
| `direction` | `howto`, `how-to`, `guide`, `runbook`, `tutorial` | How-to guides, procedures |
| `orientation` | `readme`, `overview` | READMEs, landing pages, index pages |
| `account` | `adr`, `explanation`, `essay`, `postmortem` | ADRs, design docs, post-mortems |
| `passage` | `prose`, `blog`, `narrative`, `default` | General prose, long-form, reports |
| `address` | `email`, `letter`, `outreach`, `correspondence`, `message` | Email, replies, cover letters |

`passage` is the default. Watch what changes when you name the right one:

```sh
$ node src/cli.mjs test/fixtures/control/api-reference.md --mode=passage
test/fixtures/control/api-reference.md  [passage] 124 words, 27 sentences
     3:1   warning gate  struct/uniform-paragraph-length  Paragraph lengths are uniform: 6 paragraphs, mean 17.3 words, coefficient of variation 0.25 (gate 0.26). Paragraph length should vary by at least a factor of two across the piece.
  metrics: uniform-paragraph-length=0.25/0.26

1 gated finding across 1 file.

$ node src/cli.mjs test/fixtures/control/api-reference.md --mode=reference
no gated findings across 1 file.
```

That file is an API reference. API references are supposed to be uniform, entry identical to entry,
so the anti-machine structural rules switch off in `instrument` mode. Run it under the default and
the tool is wrong. `--show-relaxed` prints exactly what a mode changed.

### A file can declare its own mode

Put this on the first line and `--mode` no longer overrides it:

```
<!-- composerxai-lint mode=readme -->
```

Do that and `node src/cli.mjs .` becomes meaningful across a whole repository, because a repository
has many registers and a recursive run has only one `--mode`. This README carries that directive,
which is why the commands above need no flag.

## Troubleshooting

**The plugin does not appear after installing.** Run `/reload-plugins`. If the slash commands are
still missing, restart Claude Code. Components are read at session start, so an install mid-session
does not always take.

**The linter reports nothing on a file you know is bad.** You are almost certainly in the wrong
mode. `instrument` disables sentence-length variance, paragraph uniformity and the rhythm floor, and
raises five other thresholds. Run it again with `--mode=passage`, or run `--show-relaxed` to see
what the mode switched off.

**`npx composerxai-lint` fails.** Not published yet. Use `node src/cli.mjs` from a clone, or
`node "${CLAUDE_PLUGIN_ROOT}/src/cli.mjs"` if you have the plugin installed.

**`unknown mode: reference-docs`.** An unrecognised mode name is an error, never a silent fall back
to the default. The message prints every valid name and alias.

**A file legitimately quotes the phrasing it bans.** Style guides and ban lists can never pass, and a
linter nobody can satisfy is a linter everybody turns off. Turn off the specific rules, on that file
only, and say why in a comment:

```
<!-- composerxai-lint disable lex/hollow-close,typo/* -->
```

The unscoped form, `<!-- composerxai-lint disable -->`, skips the whole file. Prefer the scoped one.
This repository lints clean under `npm run lint:self` with one scoped exception, in `PRIOR_ART.md`,
which catalogues the tells and therefore quotes them.

**A finding you disagree with.** Check whether it gates. Enforceable rules fail the build.
Judgement rules print and never do, unless you pass `--strict`. The tool prints the class next to
every finding, so `sugg` means you can walk away from it.

## What is in the repo

`skills/composing/` runs before anything gets written. It settles the audience, the mode and the
register, then surfaces what it does not know. The six register files under it are loaded one at a
time.

`skills/reporting/` is the other half, and the one that gets built least often: how an agent talks
to its operator. Answer first, numbered lanes, confidence bands carrying their numbers inline,
signalling kept separate from stopping.

`output-styles/composed.md` applies the reporting protocol to every reply in a session. Run
`/output-style` and pick `composed` from the list.

`commands/` holds `/compose` and `/lint`. `agents/` holds four subagents: `composer` runs the whole
decision-then-draft loop, `gap-extractor` emits the numbered unknowns, `voice-extractor` derives a
voice profile from someone's prior writing, and `register-auditor` reports which register a document
is actually in against the one it claims.

`templates/` gives section orders for `spec`, `ticket`, `adr`, `readme` and `changelog`. Each one
says what belongs in a section, what makes that section fail, and what drops out on a small project,
because a two-person change does not need fifteen sections. These are written for an agent to
execute, so `templates/readme.md` is the specification for writing a README. It is not this file.

`src/` is the linter. `research/` holds the source material every rule is drawn from, and
`PRIOR_ART.md` credits everything the tool borrows. `CONTRIBUTING.md` holds the rules about rules,
and `docs/linter.md` covers every rule, what each mode changes, and the two checks the tool refuses
to implement and why.
