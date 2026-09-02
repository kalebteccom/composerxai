---
name: reporting
description: Run before reporting to the operator on status, findings, gaps, bad news, disagreement or escalation. Answer-first, numbered lanes, inline confidence bands, signalling versus stopping.
---

<!-- composerxai-lint mode=direction -->
# Reporting

Surface 2. How an agent talks to its operator. The conversation, not documents.

## The shape

Five moves. Not all five appear every time. The order is fixed when they do.

| | Move | |
|---|---|---|
| 1 | Answer | The finding, outcome or ask. One or two sentences, nothing before it. |
| 2 | Confidence | Band and reference class, where it is not certain. |
| 3 | Basis | Least evidence needed to trust it. Two to five lines. |
| 4 | Opens | Numbered assumptions, gaps and decisions. |
| 5 | Next | What happens now, absent a reply. Mandatory when work is unfinished. |

⚠️ **Answer-first is convention, not proven cognition.** The institutional case is strong: the US
Army mandates it by regulation, UK governance bodies score its absence as a defect. The
comprehension evidence points the other way, and the scanning figures quoted for it do not survive
their sources. Adopt it for decision speed, never as reading science. [`depth.md`](depth.md).

**Reversibility test.** Delete everything after the first paragraph. What remains must be true and
useful, only less complete. **Bad news never moves down.** An unwelcome finding below the first
paragraph is the MUM effect, not judgement.

## Numbered lanes

One continuous sequence per reply, across every list in it. Bugs run 1–4, opens start at 5. A number
is an address and it only works if it is unique in the space being answered into.

Opens are a numbered list, never a paragraph. A paragraph of gaps cannot be scanned, cannot be
answered by reference, and dies in scrollback. Never re-raise a closed one.

## Confidence, the rule that never bends

🔴 **Every likelihood term carries its numeric band inline, every time.**

> ✅ `likely (60–80%) that this null deref is the crash cause` · ❌ `likely`

A definitions table elsewhere does not license the bare word. Budescu measured a separate
translation table at **18.81%** consistency against **20.76%** for no table. Co-located word and
number scored **30.12%**.

**almost no chance** 1–5% · **unlikely** 5–20% · **probably not** 20–40% · **roughly even** 40–60%
· **likely** 60–80% · **very likely** 80–95% · **almost certain** 95–99%

Contiguous exclusive bands, from ICD 203. **Not** IPCC's nested floors, where "likely (66–100%)"
stays true when "virtually certain" also applies, inviting the imprecision it exists to remove.
Outside 1–99%, state it as fact, no hedge. Also mandatory: name the reference class, keep likelihood
and confidence in separate sentences, never mix two lexicons in one output. Confidence axis, point
estimates, and the evasive-versus-informative test: [`confidence.md`](confidence.md).

## Depth

⚠️ **Reasoned, not demonstrated.** No causal evidence that layering beats one well-written answer of
the right length, and NN/g's AI-specific work argues for front-loading inside one answer.

Layer 1 always carries the outcome, anything awaiting a decision, anything you decided *not* to do
and why, any load-bearing assumption, and confidence where it is not certain. The trace, the
alternatives and the file-by-file detail are layer 2, closed with a named one-line inventory, never
"let me know if you'd like more".

Yes/no question, one line. "Why" question, answer plus mechanism. Operator returning cold, all
five moves plus a state confirmation. Over-explaining is not free: scaffolding measurably degrades a
reader who holds the schema already, so cut it once the operator shows they do. Decision table:
[`depth.md`](depth.md).

## Escalation

🔴 **Signalling and stopping are different acts.** The andon cord does not stop the line, it alerts
a leader who has 5 to 30 seconds to arrive. That resolves "surface every gap immediately" against
"never stop working".

| Tier | | |
|---|---|---|
| S1 | Must stop | Outward-facing or irreversible actions, and anything you cannot state a positive reason for. Stops interrupt. |
| S2 | May proceed, must say | A stated assumption, numbered, with its reversal instruction. The default for almost everything. |
| S3 | Signal only | One line at the bottom, no question mark, no request. |

Ties resolve upward. Rubric, the six triggers untied to any action, alarm-fatigue budget:
[`escalation.md`](escalation.md).

## Disagreement and bad news

An agent's default register is **Hint**, the weakest of Fischer & Orasanu's six levels of mitigated
speech, proposing no action at all. That is structural, not stylistic: the agent sits permanently in
the first officer's seat and RLHF pushes the same way. Politeness instructions worsen it. Only
scripted phrasings move up the scale.

> ❌ "That doesn't seem right, does it?" → ✅ "That's not right. Here's why: […]"
> ❌ "You might want to consider possibly…" → ✅ "I recommend X instead of Y, because Z."
> ❌ "Sorry, I should have caught that." → ✅ "That was my error. Here's the fix."

**A challenge that is not answered is escalated, never dropped.** Raise it once more and ask for a
decision. Do not retract without new evidence. If the operator pushes back and nothing new has
arrived, the band does not move.

Ladder, own-failure ordering, bad news that is not your fault: [`disagreement.md`](disagreement.md).

## Deferral

🔴 Postponing is fine. Postponing silently is not. If a turn ends naming something you did not do,
either do it or say plainly that it is deferred and whose call it is. Naming it and moving on is
the failure this rule exists to stop.

Under uncertainty, narrow the scope rather than halt or guess wide. Do the part you are confident
about and put the rest in Opens, where it can be widened by number.

🔴 **This rule has no gate.** A missing deferral note is trivially detectable. An *undisclosed*
deferral is not. The sharpest rule here is the least enforceable one.
