<!-- composerxai-lint mode=direction -->

# ADR template

One architecture decision, recorded so nobody re-litigates it. The reason it exists: code shows what,
and only the record preserves why.

Nygard's four sections are the whole minimum format, and the brevity is the point. MADR's option
comparison gets added when the decision was contested, and not before.

## Section order

Minimum, which is most ADRs:

```markdown
# NNNN. <Present-tense imperative verb phrase>

Date: <ISO date>

## Status
## Context
## Decision
## Consequences
```

Add when the decision was genuinely contested, in this order, between Context and Decision:

```markdown
## Decision drivers
## Considered options
## Pros and cons of the options
```

`Decision` then becomes `Decision outcome` and opens with `Chosen option: "<X>", because <reason>`.

Add when the ADR is a hypothesis rather than a settled call:

```markdown
## To be measured
```

## What each section is for, and what makes it fail

| Section | What goes in it | Fails when |
|---|---|---|
| Title | A present-tense imperative verb phrase. `Choose Postgres over DynamoDB`. Filename matches: `0007-choose-postgres-over-dynamodb.md`. | It is a noun phrase, so the file reads as a topic and collects several decisions. |
| Date | ISO 8601. Timestamp anything that will age: costs, scaling numbers, schedules. | Fabricated, or in a regional format. |
| Status | One of `Proposed`, `Accepted`, `Deprecated`, `Superseded by ADR-NNNN`. | It says `Accepted` on a decision nobody accepted. `Proposed` is a real state; use it. |
| Context | The issue motivating the decision, and the constraints that bound it. Two or three sentences is often enough. You may state it as a question. | It restates the decision. Context that already contains the answer was written backwards. |
| Decision | The change proposed or agreed, stated as a fact. `Engine core is LLM-agnostic`, not `Should we make the engine LLM-agnostic?`. | It is a discussion. The decision is one sentence and everything else is elsewhere. |
| Decision drivers | The forces that actually decided it: a deadline, a licence, an existing contract, a skill the team has. | It lists generic engineering virtues. |
| Considered options | The alternatives that were real at the time. | Two of the three exist to be rejected. A straw man in this section is the most common machine failure in ADRs, and it is invisible to any check. |
| Pros and cons of the options | Per option, bullets prefixed `Good, because`, `Neutral, because`, `Bad, because`. | Prefixes dropped, so a bullet states a property with no reason attached. The prefix convention exists to force the reason. |
| Consequences | What becomes easier, what becomes harder, what risk appears, what this triggers next. Same three prefixes. | Four `Good, because` bullets and one `Bad, because` about a slight learning curve. If the decision has no real cost, it was not a decision. |
| To be measured | The test that would kill this ADR, and when it will run. | Absent on a `Proposed` ADR, which then quietly becomes permanent without ever being checked. |

## The rules that make it work

**One decision per record.** If the title needs "and", it is two ADRs.

**Immutable.** Never edit an accepted ADR. Amend it by appending, or supersede it with a new one that
names it. The log is the value; a rewritten log is worth nothing.

**Every consequence carries a reason.** The `Good, because` prefix is the enforcement seam, and it is
the most useful thing MADR contributes.

**At least one honest cost.** Not a slot to fill. If you cannot name what got harder, either the
decision is not a decision or you have not thought about it.

**A hypothesis states its own falsifier.** An ADR sitting at `Proposed` because it is waiting on
evidence has to say what evidence, or the status is decoration.

**Keep the provenance out.** No ticket IDs, no review-round tags, no "applied by X on Y" trailers.
The artefact carries no trace of the process that produced it. Revision history lives in the commit
log.

## Enforceable and judgement

| Rule | Class | Gate |
|---|---|---|
| The four headings present, in order | Enforceable | Heading scan |
| Filename matches `^[0-9]{4}-[a-z0-9-]+\.md$` | Enforceable | Regex |
| Filename first token is an imperative verb | Enforceable, weakly | Verb list. Ship as a warning |
| `Date:` is a real ISO 8601 date | Enforceable | Regex plus parse |
| Status drawn from the closed vocabulary | Enforceable | Enum |
| `Superseded by ADR-NNNN` resolves to a file that exists | Enforceable | Cross-file resolve |
| The superseding ADR names this one back | Enforceable | Bidirectional check |
| Every consequence bullet starts `Good, because` / `Neutral, because` / `Bad, because` | Enforceable | Line prefix regex |
| At least one `Bad, because` bullet | Enforceable | Count |
| `To be measured` present when Status is `Proposed` | Enforceable, conditional | Status-triggered heading check |
| Decision outcome opens `Chosen option: "` when Considered options is present | Enforceable, conditional | Line prefix |
| Title contains no ` and ` | Enforceable, weakly | Regex. Some verbs take it legitimately |
| An accepted ADR is not modified | Enforceable | CI diff against git history, allowing only appended amendment blocks and a status change |
| No ticket, plan or review identifiers in the body | Enforceable | Pattern, not a word list |
| Are the considered options real alternatives | Judgement | The straw-man failure passes every structural check |
| Is the `Bad, because` honest | Judgement | Its presence is checkable, its weight is not |
| Was this decision hard enough to record | Judgement | A reasonable alternative had to exist for this to be a decision at all |
| Does Context explain why, or restate what | Judgement | The least tractable check in the whole set |

## Scaling down

Nygard's four sections are already the small version, and for a two-person project they are the whole
format. A one-paragraph Context, a one-sentence Decision, four consequence bullets with two of them
`Bad, because`. That fits on half a screen and it is a complete ADR.

MADR's full shape reaches nine sections. That is correct for a decision several people argued about
over a week, where the rejected options need to stay rejected. It is wrong for a decision one person
made in ten minutes, and emitting `Considered options` with two straw men to satisfy the template is
worse than not having the section.

The trigger for the long form: somebody disagreed, or the decision is expensive to reverse. Neither
is true most of the time.

Do not record every choice. A decision qualifies when a reasonable alternative existed and you picked
one over the others. Typos, rewordings and pure compression do not qualify, and an ADR directory that
contains them stops being read.
