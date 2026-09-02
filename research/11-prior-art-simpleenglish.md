# AminBlg/SimpleEnglish — the closest prior art, and what it leaves open

Found 2026-09-01 via a dev.to article and a Reddit thread, both recommending it independently as the
fix for Opus 5's register. **3,074 stars, MIT, last pushed the same day it was found.** Not installed;
read as prior art.

- Repo: https://github.com/AminBlg/SimpleEnglish
- Article: https://dev.to/altryne/its-not-just-you-opus-5-is-a-jargon-douche-but-theres-a-fix-3d8m

## What it is

An agent skill that constrains output to **ASD-STE100 Simplified Technical English**, the aerospace
controlled language in use since 1983. 53 numbered rules across 9 sections.

Sample of what it enforces: 20 words maximum per instruction and 25 per description, one word carries
one meaning throughout a document, simple tenses only, active voice only, no hedging (`should`,
`would`, `may`, `might`), conditions stated before commands, one instruction per sentence.

Two modes: **Plain** by default, **Strict** adding dictionary discipline for compliance contexts.

## 🔴 Three things it has that we planned and had not built

**1. The packaging layout, already solved.** `.claude-plugin/` and `.codex-plugin/` as sibling
manifests over one shared `skills/` tree, plus `output-styles/`, `hooks/`, `prompts/`, `.agents/`.
That is exactly what `04-harness-formats.md` recommended after verifying the formats. Installable
three ways: `npx skills add`, `claude plugin marketplace add`, `codex plugin marketplace add`, with a
paste-the-prompt fallback for harnesses with no skill support.

**2. An `evals/` directory with a measured result: 74.6% violation reduction.** `02-github-prose-repos.md`
concluded that nobody in this category measures their tool against a corpus, and named that as the
open contribution. This project measures. That finding needs revising.

**3. A real standard instead of an invented one.** ASD-STE100 has forty years of aviation use behind
it. Weave was invented last week and failed its own validation. Where the two overlap, the standard
wins on evidence.

## What it explicitly does not cover

From its own README: it excludes **marketing copy, personal blogs, and non-technical writing**. It
reproduces none of the proprietary ASD specification text or dictionary.

So it owns one register and says so. It is silent on:

| Gap | Whose |
|---|---|
| Non-technical registers: correspondence, narrative, argument, persuasion | composerxai |
| **Agent-to-operator communication** — status, findings, gaps, escalation, disagreement | composerxai |
| Voice extracted from a specific person's prior art | composerxai |
| The audience-and-mode decision before writing | composerxai |
| Gap extraction and surfacing unknowns up front | composerxai |

## What this means for composerxai

**It shrinks the product and improves it.** Reference and technical documentation is a solved problem
with a shipped, measured, MIT-licensed answer. Building a competing STE implementation would be
rebuilding something better than we would manage.

The honest framing: **composerxai routes, SimpleEnglish is one of the things it routes to.** Weave's
own claim is that reference writing is where sounding mechanical is correct — and ASD-STE100 is that
claim, formalised, forty years earlier.

What remains genuinely ours is surface 2, the operator conversation, plus the non-technical registers
and the voice extraction. That is a smaller product than the one being designed this morning, and a
defensible one.

## Not installed

Registered globally, then removed. Prior art is for reading, not adopting. If it is used later it
should be as a declared dependency with attribution, not a silent install.
