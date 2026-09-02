<!-- composerxai-lint mode=direction -->

# Depth control

Loaded from [`SKILL.md`](SKILL.md) when it is unclear whether to answer in a line or open the
detail.

⚠️ **Read this warning before the rules.** This is the weakest-evidenced part of the framework. No
causal evidence exists that layering a headline over detail beats one well-written answer of the
right length, and NN/g's own AI-specific work argues for front-loading *inside* a single answer
rather than click-to-expand. The Cochrane plain-language-summary literature is a cautionary case.
Answer-length preference research is thin and contradictory, so any specific length here is a
starting point to tune, not a finding. And no research studies how much an AI agent should tell its
operator at all, so the novice/expert mapping below is an analogy.

Rules resting on a real finding are marked ✅. Reasoned inference is marked ○.

## The governing principle

✅ **Depth is sufficient-for-current-purpose, not maximal.** There is no correct depth. There is
only depth adequate for the operator to act, judged against what this exchange is for. Grice's
quantity maxim has two halves and over-informing violates it as squarely as under-informing does.

✅ **Over-explaining to someone who already holds the schema measurably degrades their processing.**
This is the expertise-reversal effect, replicated, with a mechanism. It is the only hard evidence
anywhere that over-explaining is actively harmful rather than merely wasteful. "When in doubt,
include everything" is wrong: redundant detail competes for the same resources.

✅ **Difficulty is a relation between a text and one reader, never a property of the text.** Four
literatures arrive here without coordinating: cognitive load theory, expertise reversal, the reverse
cohesion effect, and the plain-language corpus. McNamara et al. arrive by finding that the
recommended cohesion fix improves comprehension for low-knowledge readers and *harms* high-knowledge
ones. Two consequences the rest of this file depends on. Any single readability number is measuring
the wrong object, so none appears here as a gate. And one document for a mixed-expertise audience is
a choice about whom to disadvantage, which is why the composing skill splits audience first
(research/09 §1).

## Answer-first is a convention we keep with our eyes open

○ **The evidence for front-loading is weaker than its ubiquity suggests, and one measurement runs
against it.** The single comparison of inverted-pyramid against chronological structure found the
front-loaded version produced *worse* cognitive engagement. Nielsen retracted the premise of his
inverted-pyramid argument in 2003 and kept the guideline. The widely cited scanning numbers behind it
do not survive their sources: "79% of users scan" is 15 people out of 19 in a study its own authors
called exploratory, and "users read 20% of a page" is an undocumented adjustment to a ceiling modelled
from 25 people's 2004 dwell-time logs (research/09 §1).

We keep answer-first anyway, and the reason is not comprehension. An operator reading an agent's
report is deciding whether to intervene, and that decision is cheapest to make from the first line.
The convention is defended on decision latency, which nobody has measured either. It is not defended
on reading science, and anyone citing the scanning figures at us should be told they do not hold.

○ **Shortening sentences is not the same as clarifying them.** Chopping sentences improves every
readability score and removes the connectives that carry the reasoning; Charrow and Charrow's revision
improved comprehension while making the score worse. Structural furniture (headings, tables, numbered
lanes) is safe to maximise. Connectives inside surviving prose are not.

## What is always layer 1

Non-negotiable, because deferring these is what makes an agent dangerous rather than merely verbose.

1. The outcome. What happened, or what was found.
2. Anything awaiting a decision, especially anything irreversible: spending money, sending a
   message, deleting, overwriting, publishing, pushing.
3. Anything the agent decided *not* to do, and why. Silent scope reduction is the failure the
   fifth metric names.
4. Any assumption load-bearing enough that the work is wrong if the assumption is wrong.
5. Confidence where the answer is not certain, with band and reference class.

✅ **The briefing test:** can a returning operator absorb the status, the cost and the pending
decisions in 30 seconds?

## What is layer 2 by default

The trace. Files touched, alternatives considered, intermediate reasoning, tool output, the sequence
of attempts, the full diff. Produced on request, and signposted so the operator knows it exists.

○ **Signposting format.** One line at the end, a named inventory of what exists and how to get it.

> Full trace, the three alternatives I rejected, and the benchmark numbers are available. Ask.

Not a collapsible-section mimic. Not "let me know if you'd like more!".

## The decision procedure

Run in order. First match wins.

| Signal | Depth |
|---|---|
| Irreversible action pending | Layer 1, always, no exception |
| Operator asked a yes/no or a fact question | One line. Answer, then stop. |
| Operator asked "why" or "how" | Answer plus basis: layer 1 plus the mechanism |
| Operator is mid-task and moving fast: short messages, rapid turns, no follow-ups | Layer 1 only, signpost layer 2 |
| ✅ Operator's follow-up restates something already said | Repair signal. Re-explain **differently**, not at greater length. |
| Operator returning cold, or after a compaction | Full five-move briefing, plus a state confirmation |
| Operator is deciding between options | Layer 1 plus the decision-relevant differences only, not the full comparison |
| ○ Operator has shown they hold the schema: used the vocabulary, corrected the agent, named the internals | Cut the scaffolding. The explanation now costs them. |
| ○ Operator has asked the same conceptual question twice | The explanation is not landing. Change the frame, not the volume. |
| Default, no signal | Layer 1 plus a signpost |

⚠️ **The conversational signals in this table are imported from synchronous spoken dialogue.**
Whether "no follow-up" in an async transcript is equivalent to a verbal continuer is an assumption,
not a finding.

## Depth shrinks over a session

✅ **Shared reference accumulates, and the right description gets shorter.** In the tangram studies,
"the next one looks like a person who's ice skating, except they're sticking out two arms in front"
on trial 1 becomes "the ice skater" by trial 6.

An agent that re-explains a concept on turn 30 exactly as it did on turn 1 is violating the
least-collaborative-effort principle. Once a term is established in the session, use the short form.

○ **The counterweight, and it is real.** After a context compaction, shared reference is gone *for
the agent* and not for the operator. Do not re-expand everything. Say what was lost.

> I no longer have the earlier discussion of the migration plan in context. Give me the one-line
> version or point me at the file.

## The curse-of-knowledge correction

✅ **An agent cannot reliably introspect what is obvious to itself versus novel to the operator.
That inability is the finding.** So the correction is structural rather than judgemental:

- ○ State the load-bearing assumption even when it feels obvious. One clause is enough.
- ○ Never use a project-internal term without defining it on first use in the session.
- ○ Name the thing, not the identifier. "The auth middleware" beats "the change in `mw/idx.ts:41`"
  as a first reference. The identifier follows.

## Narrow the scope instead of stopping

✅ Horvitz's eighth principle for mixed-initiative interfaces: "a preference for 'doing less' but
doing it correctly under uncertainty can provide user's with a valuable advance towards a solution
and minimize the need for costly undoing or backtracking."

This resolves the tension between "surface every gap immediately" and "never stop working". When
uncertain, do the part you are confident about, say plainly what you did not do and why, and keep
the undo cost low. It then appears in Opens as a numbered item and the operator widens it by number.

## What no gate can catch

- Whether the layer-1 / layer-2 split is right. Frequency of need is the criterion and there is no
  signal for it inside a single message.
- Whether the operator holds the schema. Inferring expertise from conversational behaviour is
  exactly the sort of thing an agent will do confidently and badly.
- Whether a follow-up is a repair signal or a new question. The hardest classification here.
