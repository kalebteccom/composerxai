<!-- composerxai-lint mode=orientation -->

<!-- composerxai-lint disable -->
# State, 2026-09-01

Where composerxai stands after the session that created it. Read this before continuing.

## What it is

A communication framework for agentic work, covering **two surfaces**:

1. **What an agent writes**—docs, specs, email, narrative
2. **How an agent reports to its operator**—status, findings, gaps, escalation

Surface 2 is the part nobody builds and where most agentic work fails. It is also where this started:
Rowin was configuring a Claude output style, which *is* surface 2.

## The five metrics

Every piece of agentic communication is judged on these.

| | |
|---|---|
| **a. Comprehension** | Does the reader understand, and can they act without a follow-up |
| **b. Intelligibility** | Can it be scanned and parsed at all |
| **c. Naturality** | Does it read as written by a person |
| **d. Expressivity** | Right register and force for the purpose |
| **e. Scope and semantics** | Does the text know what it is for, and does it achieve the goal **without silently deferring work that should be done now** |

(e) is the largest, least served, and carries the sharpest rule. Postponing is fine. Postponing
without telling the operator is not.

## Decisions taken, do not relitigate

- **One plugin, encapsulated.** Ships with everything needed. No dependency a user must install
  separately. Anything we need from elsewhere gets implemented or bundled, credited in `PRIOR_ART.md`.
- **Open source**, `composerxai`, Kalebtec. Published at
  [kalebteccom/composerxai](https://github.com/kalebteccom/composerxai).
- **Voice corpus is local**, three layers: shipped defaults, user tuning, extraction from the user's
  own prior art. 🔴 Rowin's corpus is private email and **must never reach the public repo**. The
  boundary is a property of the repo layout, not a habit.
- **The codebase-reading pass lives here.** Deriving practice from a repo and deriving voice from
  prior art are the same machinery on different corpora.
- **Autonomous by default.** Gaps surface once at the start as a numbered list, then work proceeds on
  stated assumptions. Never block except for outward-facing or destructive actions.
- **Numbered lanes**, one continuous sequence per reply. A number is an address.
- **Generalise, do not accumulate.** Two tiers: an append log of raw unvalidated findings, and
  generalised rules. Promotion fires on contradiction. Generalisation is attempted at append time.
  Size ceiling as backstop.
- **Eager/lazy boundary decides whether the tool gets used.** Eager: mode selection, gap extraction,
  voice summary, output rules. Everything else lazy.
- **House voice is tech advocate**, not corporate. Microsoft/Google family, never Red Hat (which
  forbids contractions and banned em dashes years before LLMs).
- **EPPO adopted** (Every Page is Page One), and the **Breza test** is the how-to acceptance
  criterion: a how-to fails if someone copy/pasting straight down the page hits an error.
- **Every rule is classified** enforceable (ships with its gate) or judgement (labelled
  unenforceable). f3 evidence: hard-failed sections hold at ~80% across 756 tickets, warn-only
  sections at 6–11%.

## Findings that changed the design

**Weave failed as a detector.** AUC 0.705 against a 0.773 baseline of three regexes and a standard
deviation. Its best-looking feature was counting inline code spans, which detected "is this about
code", not "is this AI". Stripped, it fell to chance. See `research/08`.

**That was the wrong test.** composerxai is a generation framework. A cost model that cannot detect
AI text can still be a sound account of how to repair it, and only the first was tested.

**Detection is solved.** `tbhb/vale-ai-tells` does it better than a new word list would. Do not
rebuild it.

**Template density is the one measurement that works.** ~3 per thousand words human, ~27 machine.

**Structural tells beat vocabulary.** Vocabulary cues collapse under adversarial prompting; structural
cues hold. Reinhart et al.: present participial clauses at 5.3x human rate, nominalizations 2.1x.

**Two rules are actively harmful.** Naive passive-voice flagging (GPT-4o uses *less* passive than
humans) and default `delve` flagging (measured bias against non-native speakers).

**CSL's XML claim does not hold.** Untested vendor guidance, and the repo writes its own prompts in
markdown with zero tags. What is measured: named explicit slots carry the gain, markdown headings
supply them at a quarter of the token cost.

**SimpleEnglish is the closest prior art.** 3,074 stars, MIT, ASD-STE100. It has the packaging layout
we planned and an `evals/` directory with 74.6% violation reduction, which contradicts our finding
that nobody measures. It covers one register and says so. See `research/11`.

## Built

- `.claude-plugin/` + `.codex-plugin/` manifests over one shared `skills/` tree
- `skills/composing/SKILL.md`—eager, 2,942 chars, under Windsurf's 6,000 cap. Audience, mode, gaps
- `reference/voice.md`—seven grammatical rules, structure, words, and the two deliberate omissions
- `output-styles/composed.md`—surface 2. `keep-coding-instructions: true` is mandatory or it strips
  Claude Code's engineering instructions
- `commands/compose.md`, `commands/lint.md`
- `src/`—the linter. 22 rules, zero runtime deps, 19 tests. File-level `<!-- composerxai-lint
  disable -->` directive
- `templates/`—spec, ticket, adr, readme, changelog. Section order, per-section failure mode, and
  an enforceable/judgement split per template, with what scales down
- `agents/`—`composer`, `gap-extractor`, `voice-extractor`, `register-auditor`. Lean pointers into
  the skill and reference files, per f3's persona pattern
- `research/`—11 files, ~11k lines, ~180 sources

## Built and verified, 2026-09-01

Both surfaces ship. `npm run lint:self` is clean across all 29 shipped files and `npm test` is 24/24.

| | |
|---|---|
| `skills/composing/` | `SKILL.md` plus the six registers: how-to, reference, explanation, correspondence, orientation, narrative |
| `skills/reporting/` | `SKILL.md` plus confidence, escalation, disagreement, depth |
| `templates/` | spec, ticket, adr, readme, changelog |
| `agents/` | composer, gap-extractor, voice-extractor, register-auditor |
| `src/` | 22 rules, mode directive, whole-repo self-lint |

Registered locally in `~/.claude/settings.json` as a directory marketplace, and published as a
GitHub marketplace at [kalebteccom/composerxai](https://github.com/kalebteccom/composerxai).

## 🔴 How this repo is published

**`main` is never pushed to `origin`.** The public repo carries a curated subset on unrelated
history, and local `main` holds material that must not ship: `research/07`, `research/08` and
`scripts/weave-validation/` cite internal client repositories by path, and `corpus/` and
`voice-profiles/private/` are gitignored for the same reason.

The `public` branch tracks `origin/main`. To publish, check it out in a worktree, copy across only
the files that should ship, commit there, and push. Never `git pull --rebase origin main` on
`main`, and never force-push `main` to `origin`; both would replay the excluded files into public
history.

Install, for anyone reading this cold:

```
/plugin marketplace add kalebteccom/composerxai
/plugin install composerxai@composerxai
```

Three defects the verification pass found and closed:

1. **The register and mode vocabularies had drifted.** `correspondence` and `narrative` shipped as
   register files with no mode to resolve to, so following the skill and typing the register name
   raised "unknown mode". Both are aliases now, and a test walks the register directory so the two
   lists cannot separate again.
2. **A recursive run had one mode.** Every file now declares its own with
   `<!-- composerxai-lint mode=... -->`, which outranks `--mode`. Before this, `lint .` applied one
   register's rules to all of them and the total it printed meant nothing.
3. **A recursive run walked its own negative fixtures.** `test/fixtures/` is deliberately bad prose
   and `research/` was never written to ship. Both are skipped by default, and still lint when named.

## Next, in order

1. **Validate the voice profile.** `voice-profiles/private/rowin.md` exists and nothing has been
   generated against it or confirmed by a human. It is measurement without a check.
2. **A control corpus.** The frequency list says what he uses often, not what he uses more than
   other people. Without a baseline, "distinctive" is not a claim the profile can make.
3. **Publish**, once 1 and 2 land.

## Open, genuinely

1. What triggers the generalisation pass: count, cadence, or judgement at capture. Contradiction-
   triggered is the current best answer and is unproven.
2. Where the suite boundary falls internally. Narrative and spec share only gap extraction.
3. Whether "Weave" survives as the name now that it means the generation framework.
4. Whether to vendor `adamdunkels/deslop-text`'s regression corpus (MIT, verified) to measure
   precision against human control text, which the research says nobody does.
