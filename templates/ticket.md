<!-- composerxai-lint mode=direction -->

# Ticket template

The lead-to-engineer handoff, for one unit of work. Written by whoever planned it, executed by
somebody or something that was not in the planning conversation.

The floor below is not a design. It is what a real validator enforced across 756 tickets in a
production monorepo, and it is deliberately smaller than the template that repo published.

## What held, and what did not

`validate-plan.sh` hard-failed on five metadata fields, three sections and an estimate enum. It
warned on everything else. Section frequency across 756 tickets:

| Section | Share | Validator |
|---|---|---|
| Acceptance criteria | 81% | hard fail |
| Testing strategy | 80% | warn |
| Problem statement | 79% | hard fail |
| Implementation strategy | 78% | hard fail |
| Documentation impact | 11% | warn, while the skill file called it a hard check |
| Decisions and rationale | 6% | warn |
| Edge cases and integration points | 5% | warn |

Three of the four sections that held were gated. The fourth, Testing strategy, was not, and it held
anyway at 80%. So the gate is not the only thing that carries a section. An engineer will write the
tests section unprompted because they wanted the tests. What the data does support is the negative:
every section that was neither gated nor independently wanted collapsed to single digits.

Documentation impact is the sharpest case. It was called a hard check in the skill file and wired to
nothing, and it landed at 11%. A rule described as mandatory and enforced nowhere is worse than an
absent rule, because the process document now misrepresents the process.

## Section order

```markdown
# TASK-NNN: <imperative one-line outcome, not a topic>

- **Estimate**: 0 | 0.2 | 0.5 | 1 | 2
- **Priority**: P0 | P1 | P2
- **Depends on**: TASK-002, TASK-005 | None
- **Blocks**: TASK-007 | None
- **Owner**: <role or person>

## Problem statement
## Ground truth
## Implementation strategy
## Testing strategy
## Acceptance criteria
```

Conditional sections, inserted where marked, only when the trigger fires:

```markdown
## Edge cases and integration points     <- after Implementation strategy, when anything else observes the change
## Decisions and rationale               <- after Implementation strategy, when a reasonable alternative was rejected
## Caller reconciliation                 <- after Implementation strategy, when an exported signature changes
## Docs impact                           <- last, when the change alters a documented contract
```

Problem before approach, tests before criteria, docs last. That order survived contact.

## What each section is for, and what makes it fail

| Section | What goes in it | Fails when |
|---|---|---|
| Title | The outcome, as an imperative. `Return the client secret from the upgrade branch`, not `Upgrade branch issues`. | It names a topic, so nobody can tell when it is done. |
| Estimate | One value from the enum. Anything above 2 gets split into tickets that are not. | Values drift outside the enum. A single plan with five out-of-enum estimates is the recorded case, and it was the plan that needed decomposition most. |
| Depends on and Blocks | Both directions, always, `None` when there is none. | Only one direction is filled, and the graph stops being orderable by machine. |
| Owner | The role that owns the edit. | Left blank, so the ticket has no addressee. |
| Problem statement | What is broken or missing, what the end state is, every claim anchored to `path/to/file.ext:line`. | It stays abstract. If the request said "the epoch thing", the ticket names the identifier that maps to. |
| Ground truth | Facts already verified against the codebase: current signatures, schema fields, config keys, existing consumers, real limits. | It is skipped, so the doer re-derives it. This section is what makes the ticket cheap to act on. |
| Implementation strategy | Numbered steps, concrete files and functions, compile-valid snippets using symbols that exist. | It contains two mutually exclusive branches. Where a local structuring choice is genuinely open, state the choice and give the default: "prefer (a) for testability". |
| Testing strategy | A table of concrete stimulus to concrete assertion. | It says "add unit tests". |
| Acceptance criteria | A checkbox list, each item independently verifiable, at least one machine-checkable. | The criteria restate the strategy. "Implemented as described" is not a criterion. |
| Edge cases and integration points | Ordering, races, failure modes, side effects, everything else that observes this change. | Absent on a change that touches a shared path. |
| Decisions and rationale | The alternatives considered and why this one won, including the rejected options with their reason. | Rationale by assertion. "Because it is better" is not a rationale. |
| Caller reconciliation | Every call site that breaks, with its current code and its required fix. | Omitted, and the contract change lands as a compile error in somebody else's PR. This section was invented for one ticket and was the highest-value part of it. |
| Docs impact | Which docs change, or which were checked and are unaffected. | "Code only". Recording "checked, unaffected" is the point. |

## The rules that make it work

**Resolve facts at plan time.** Hedges of the form "verify during implementation", where the answer
could have been found before planning, turn into extra review cycles. That is a measured pattern in
the review history, not a preference.

**Uncertainty gets its own ticket.** If the answer is genuinely unknown, the plan carries a spike or
a blocking question. It never carries an implementation ticket with two mutually exclusive branches.

**Every abstract term maps to a real identifier** before the ticket is finished.

**Investigate before asking, then ask once.** Never ask what the code can tell you, and batch what is
left rather than opening a back-and-forth.

**The estimate enum is closed.** It is the only rule in the set that forces decomposition.

## Enforceable and judgement

| Rule | Class | Gate |
|---|---|---|
| Five metadata fields present | Enforceable | Line regex per field |
| Estimate in `0 \| 0.2 \| 0.5 \| 1 \| 2` | Enforceable | Enum check |
| Priority in `P0 \| P1 \| P2` | Enforceable | Enum check |
| `Depends on` and `Blocks` both present, `None` allowed | Enforceable | Both keys required |
| Referenced ticket IDs exist in the same plan | Enforceable | Cross-file resolve |
| Dependency graph is acyclic | Enforceable | Topological sort |
| Problem statement, Implementation strategy, Testing strategy, Acceptance criteria present | Enforceable | Heading scan |
| Title starts with an imperative verb | Enforceable, weakly | First-token check against a verb list. Fails on unusual verbs; ship it as a warning |
| Acceptance criteria are checkboxes | Enforceable | `- [ ]` prefix |
| At least one acceptance criterion names a command, a test or a type | Enforceable | Token scan for backticks or a test path |
| Problem statement contains at least one `file:line` anchor | Enforceable | Regex. Skip for tickets with no code target |
| Caller reconciliation present when an exported signature changes | Enforceable, conditional | Diff the declaration in the strategy snippet against the current export |
| Testing strategy is a table | Enforceable | Table parse |
| No `{{placeholder}}` survives | Enforceable | Regex |
| Docs impact present | Judgement | It was called a hard check, wired to nothing, and reached 11%. Either gate it on the same trigger as Caller reconciliation or stop claiming it is required |
| Edge cases present | Judgement | The trigger, "something else observes this change", is not detectable from the ticket alone |
| Decisions and rationale present | Judgement | Whether a reasonable alternative existed is the writer's call |
| Is the ground truth actually true | Judgement | None |
| Is the estimate right | Judgement | The enum is checkable, the value is not |
| Are the acceptance criteria falsifiable | Judgement | Their shape is checkable, their bite is not |
| Is this one unit of work | Judgement | None |

## Scaling down

The floor above is already the floor. Five metadata lines and four sections is about a screen of
text, and the metadata block costs five lines whether the team is two people or twenty.

What comes off for a small team: the four conditional sections, unless their trigger fires. Ground
truth folds into Problem statement when the ticket touches one file. Diagrams are never required.

What does not come off: `Depends on` and `Blocks`, even on a two-person project, because `None` is
one word and it keeps the ordering machine-derivable. The estimate enum stays, because the moment it
lapses the tickets stop being decomposed.

If a project is small enough that tickets are unnecessary, do not write tickets. A spec with a scoped
`In scope` list and an issue tracker is enough. This template earns its cost when the planner and the
doer are different, and it does not earn it when they are the same person on the same afternoon.
