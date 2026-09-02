<!-- composerxai-lint mode=direction -->

# Spec template

A spec is a commitment record for one feature or change. One audience: whoever builds the thing,
person or agent. The bar it has to clear, from GPD, is that a competent agent can execute from it
without making architectural decisions of its own.

A spec is not documentation. Diátaxis governs docs; it puts planning artefacts outside its own scope,
so the "one document serves one need" rule does not apply here. The fourteen sections below are
facets of a single need.

## Section order

```markdown
# <Feature name>

**Stage:** idea | specced | planned | in-progress | shipped | paused | archived
**Owner:** <name or role>
**Last refined:** <ISO date>

## Problem
## Gaps
## Target users
## Primary use cases
## Success criteria
## In scope
## Out of scope
## Functional requirements
## Non-functional requirements
## Technical approach
## Integrations and dependencies
## Commercial framing
## Risks and mitigations
## Resolved questions
## Related work
```

The order is GPD's, verified against three production specs, with one deviation. GPD puts its open
questions at position thirteen. Here the gap block sits second, because an assumption the document
rests on has to precede the document that rests on it. GPD's own ordering has never been measured
against an alternative, so this deviation costs no evidence.

## What each section is for, and what makes it fail

| Section | What goes in it | Fails when |
|---|---|---|
| Problem | One paragraph. Who feels it today and what they do instead. | It describes a solution. It describes a category rather than this case. |
| Gaps | Every unknown, typed and numbered. See below. | It is empty because the writer guessed instead. |
| Target users | Primary and secondary, each with what they are trying to accomplish. Also who is explicitly not the user. | The persona was invented. "Sarah, 32, product manager" is the tell. If nobody said who the user is, that is a `needs-input`. |
| Primary use cases | `<user> does <action> to achieve <outcome>`. | The action is an interaction rather than an outcome. "User clicks Save" is not a use case. |
| Success criteria | An outcome metric, a usage metric, a quality bar. Numbers where numbers exist. | Adjectives instead of numbers. Where the number is unknown, say it is unknown; do not invent one. |
| In scope | The smallest thing worth shipping. Each bullet independently testable. | It grew during drafting. Re-read after writing and cut anything not forced by an earlier section. |
| Out of scope | A real list, each item pointing at where it went. | It is a platitude. An out-of-scope bullet that has grown a design is scope that escaped the fence. |
| Functional requirements | One requirement per bullet. | Two requirements joined by "and", so neither can be signed off separately. |
| Non-functional requirements | Performance, reliability, security, accessibility, i18n, platform. | Present as a heading with generic content underneath. Omit the ones that do not apply. |
| Technical approach | Enough to estimate effort and surface risk. Not a design doc. | It became the design doc, or it silently locks a decision that belongs in an ADR. |
| Integrations and dependencies | External APIs, internal systems, anything with a licence consequence. | `None yet` is a valid answer here. An invented integration is not. |
| Commercial framing | Internal tool, client deliverable, product, or open source. Who pays for the build, who pays for the outcome. | Skipped, so scope is argued about later with no shared frame. |
| Risks and mitigations | Table: risk, likelihood, impact, mitigation. Include the assumption that, if wrong, invalidates the project. | Every risk is technical. The one that kills projects is usually not. |
| Resolved questions | Questions that were open and are now closed, with the answer and the date. Append-only. | Compressed away in a later tightening pass. This section exists to stop the same question being asked twice. |
| Related work | Prior art, adjacent internal projects, the thing this replaces. | It lists links nobody read. |

## The gap block

Required. It carries the three-way taxonomy and it is the section most specs are missing.

```markdown
## Gaps

1. needs-input: Stripe account tier for the sandbox. Expected from: Ops. Blocks: Technical approach.
2. open-question: retry on the webhook path, either bounded queue or dead-letter. Both work; the choice is
   an operational commitment, not ours. Recommendation: dead-letter. Blocks: Non-functional requirements.
3. assumption: under 500 concurrent sessions at launch, from the current analytics. If it is wrong,
   the single-process design in Technical approach is wrong with it.
```

Rules that hold:

One continuous numbered sequence. A number is an address, so a reply of "3 is wrong" has to resolve
to one thing.

The type test: if the answer is **looked up or handed over**, it is `needs-input`. If it is
**chosen**, it is an `open-question`. If you already chose and are proceeding, it is an `assumption`.
Naming the `needs-input` category is the one part of this with a number behind it. Recall of
looked-up facts went from 20.8% to around 80% in the refinement eval once the category had a name,
in both the tagged and the plain-markdown arms.

Every item says what it blocks. An unblocking gap is a note, not a gap.

Fill what you can before you list anything. A gap that the repo could have answered is a failure of
the writer, not an input from the reader.

Then keep working on the stated assumptions. Blocking is for outward-facing and destructive actions
only.

## Enforceable and judgement

Enforceable rules ship with the check. Judgement rules ship labelled, and never gate a build.

| Rule | Class | Gate |
|---|---|---|
| All required headings present, in order | Enforceable | Heading scan against the list above |
| Metadata block present, `Stage` in the closed vocabulary | Enforceable | Regex plus enum |
| `Last refined` is a real ISO date, not `YYYY-MM-DD` | Enforceable | Regex |
| No `{{placeholder}}` survives | Enforceable | Regex |
| Gaps section present, non-empty or an explicit `None` | Enforceable | Heading plus content check |
| Every gap item typed `needs-input`, `open-question` or `assumption` | Enforceable | Line prefix regex |
| Gap numbering is one unbroken sequence | Enforceable | Sequence check |
| Every `needs-input` names a source; every `open-question` names the options | Enforceable | Line contains `Expected from:` / two or more options |
| One requirement per bullet | Enforceable, weakly | Flag a bullet containing ` and ` plus a second verb. Noisy; ship it as a warning |
| Out-of-scope items name a destination | Enforceable | Each bullet links or says `not planned` |
| Success criteria contain a number or the word `unknown` | Enforceable | Digit scan per bullet |
| Is the problem real | Judgement | None |
| Are the users real, or invented to fill the heading | Judgement | None |
| Is the MVP the smallest thing that proves the core assumption | Judgement | None |
| Is a gap typed correctly at the margin | Judgement | The test is stated; applying it is not mechanical |
| Are the risks the ones that would actually kill it | Judgement | None |
| Is the technical approach locking a decision that belongs in an ADR | Judgement | None |

A required section is a prompt, not a guarantee. The check verifies a heading exists. It cannot
verify the content under it is worth reading, and the internal evidence is that a writer will satisfy
a structural lint with vague text. Anything built against this table has to describe what it checks in
exactly those terms.

## Scaling down

Fourteen sections is right for a project someone is funding. It is wrong for a change two people are
making this week.

The floor, which is what a two-person spec should actually be: **Problem**, **Gaps**, **In scope**,
**Out of scope**, **Success criteria**. Five headings, often under a page.

Drop first, in this order: Commercial framing, when the answer is the same for everything the team
does. Related work, when there is none. Non-functional requirements, when nothing about the change
touches them. Target users and Primary use cases collapse into Problem when there is one user and
one use case.

Never drop: Gaps and Out of scope. Those two are the whole anti-sprawl mechanism and they cost four
lines.

A missing section in a spec carries information. It says the thing has not been decided. Keep the
heading with an explicit `Open, see Gaps` or `None yet` where the absence means something, and drop
the heading where it is merely empty. Filling a section with invented content to avoid an empty
heading is the failure this template exists to prevent.
