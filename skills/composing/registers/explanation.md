<!-- composerxai-lint mode=direction -->

# Explanation

Mode: Account (`research/03` §3.5.4). Dials P1–P2 / F1 / G2. Lint: `--mode=account`.

## What the reader is doing

Trying to understand why a thing is the way it is, usually because they disagree with it or are about
to change it. They want the reasoning, the alternatives that lost, and what the choice cost.

## Demands

- Open on the question or the tension. The reader must see what made this hard before they see what
  you concluded.
- State your position plainly inside the first 15%, then spend the rest earning it. Withholding a
  thesis is evasion, not suspense.
- One concrete instance per substantive claim. An argument with no instances is a mood.
- The counter-position in its strongest form, phrased so its holder would recognise themselves in it.
- The cost of your position: what you give up, and what would change your mind.
- Bound the topic. Say what you are not discussing, then do not discuss it.
- Person: `we` for ADRs, design docs and post-mortems. `I` for essays and review. Pick one at the top
  and hold it. Sliding between them shows nobody is behind the text.
- Tense: past for what happened, present for what holds now. In an ADR the decision takes Nygard's
  "We will use X", and the consequences take the future.
- Contractions: occasional. Mean sentence 15 to 25 words, and variance is mandatory. At least one
  sentence under nine words per 150.
- Hedging: calibrated hedges are required and unlimited. A stated confidence, a named reason, and a
  named thing that would move it. Bare hedges: zero.
- Examples: one instance per claim, and at least one counter-example where the position does badly.

## Forbids

- Bare hedging. "It could be argued", "some might say", "there are pros and cons".
- Balance standing in for judgement. Three options at equal weight when you would obviously pick one.
- Definition-first openings. "X is a technique used to…" Nobody in doubt wants a dictionary.
- Bullets carrying the argument. Bullets here enumerate alternatives; they do not reason.
- Instructions. Link to a how-to.
- A summarising conclusion.

## Opening and ending

**Opening.** A thing that happened, a thing that does not add up, or a decision that had to be made.
Worst openings: a definition, a history of the field, a statement of importance.

**Ending.** The cost, the limit, or the thing that would change your mind. Or the consequence that
follows if the reader accepts your position. Never a recap.

## Section order

Explanation page, from `research/05` §3.1.

| # | Section | Rule |
|---|---|---|
| 1 | Title | Passes the *about* test. "About X", "Why X works this way" |
| 2 | Overview | The one-paragraph answer, so a reader can leave here satisfied |
| 3 | Glossary | Optional. `term:: definition`, for anything the reader may not share |
| 4 | The discussion | Design decisions, historical reasons, constraints. Must weigh alternatives, counter-examples or contrary opinions |
| 5 | Further reading | |

ADR, minimum viable, from Nygard and `adr-tools`:

```
# NNNN. <Title as an imperative verb phrase>
Date: YYYY-MM-DD
## Status        proposed | accepted | deprecated | superseded by ADR-NNNN
## Context       The issue motivating this decision, and the constraints
## Decision      The change we are proposing or have agreed to
## Consequences  What becomes easier, what becomes harder, what risks appear
```

Add from MADR when the decision was contested: `Decision Drivers`, `Considered Options`, `Decision
Outcome` opening `Chosen option: "X", because …`, `Consequences` with every bullet prefixed `Good,
because` / `Bad, because` / `Neutral, because`, `Confirmation` naming the test or review that would
detect a violation, `Pros and Cons of the Options`, `More Information`. Front matter: `status`,
`date`, `decision-makers`, `consulted`, `informed`.

Hard rules: the filename is a lowercase-dashed present-tense imperative verb phrase
(`choose-database.md`). One decision per record. Never edit an accepted ADR. Amend it, or supersede
it. Timestamp anything that ages.

## The failure signature

The most recognisable of the six. It takes a position nobody disputes. It presents two sides at equal
weight. It simulates depth with negative parallelism. It has no counter-example and names no cost, and
it closes by restating its opening in different words.

In an ADR the same disease has a specific shape. Three considered options where one is obviously right
and two exist to be rejected. Four `Good, because` bullets against one anodyne `Bad, because` about a
slight learning curve. No `Confirmation`, because no test can be named. No date and no
decision-makers, so nothing marks it as the artefact of a real meeting. Significance inflation where
the reasoning should be.

## Acceptance check

- [ ] One first-person commitment verb appears: "I think", "we chose", "we decided".
- [ ] A concessive block of at least 40 words states the case against.
- [ ] At least one counter-example, where the position loses.
- [ ] The cost is named, and so is the condition that would change the author's mind.
- [ ] One number or date per 200 words.
- [ ] The final paragraph shares under 30% of its content words with the first.
- [ ] ADRs only: `Confirmation` names a test, a review or a fitness function.

## Lint

```sh
npx composerxai-lint <file> --mode=account
```

Aliases: `explanation`, `adr`, `essay`, `postmortem`.
