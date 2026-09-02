<!-- composerxai-lint mode=direction -->

# Calibrated confidence

Loaded from [`SKILL.md`](SKILL.md) when an answer is uncertain enough that the operator needs to
know how much to trust it.

This is the best-evidenced part of the operator-communication research. Four institutional
standards (ICD 203, IPCC, the UK PHIA yardstick, and Kent's 1964 original) converged independently
on the same two-axis design, and there is real experimental work on how readers misread the words.

## The one rule

🔴 **The word never appears without its band, inline, in the same clause.**

> ✅ `likely (60–80%) that the deadlock is in the connection pool`
> ❌ `likely`
> ❌ `likely (see the confidence scale above)`

Budescu et al. tested this directly. Readers given a **separate translation table** achieved
**18.81%** consistency between the author's intended probability and their own reading. Readers
given **no table at all** achieved **20.76%**: statistically indistinguishable, and nominally
better. Readers given the **word and number together** achieved **30.12%**.

The obvious implementation, defining the vocabulary once at the top of the output style and then
using bare terms, is the implementation the evidence rules out.

## Axis 1, likelihood

| Term | Band | Provenance |
|---|---|---|
| **almost no chance** | 1–5% | ICD 203, exact |
| **unlikely** | 5–20% | ICD 203's "very unlikely" band, renamed to the word people use |
| **probably not** | 20–40% | Between ICD 203's 20–45% and PHIA's 25–35% |
| **roughly even** | 40–60% | Between ICD 203's tight 45–55% and IPCC's wide 33–66% |
| **likely** | 60–80% | ICD 203's 55–80%, shifted up to clear "roughly even" |
| **very likely** | 80–95% | ICD 203, exact; PHIA's "highly likely" nests inside |
| **almost certain** | 95–99% | ICD 203, exact |

### Why a partition and not nested floors

ICD 203 uses contiguous exclusive bands. IPCC uses one-sided floors, so its "likely" means 66–100%
and stays technically true when "virtually certain" (99–100%) also applies. The two schemes cannot
be combined: under IPCC, reporting "likely" tells the reader only that the estimate is somewhere
above two thirds, which is the imprecision Kent set out to remove. A partition is unambiguous by
construction, so the partition wins.

Below 1% and above 99%, drop the vocabulary and state the thing as a fact. Kent's chart puts 0% and
100% outside the scale, and IPCC's own guidance says findings with overwhelming evidence get stated
without qualifiers. **Hedging a certainty is a defect.**

## Axis 2, confidence

Confidence is about the basis, not the world. It answers: how much should you trust that estimate,
given what I had to work with?

| Level | Meaning |
|---|---|
| **high confidence** | Read it directly in the source, or ran it and observed the result |
| **moderate confidence** | Inferred from strong, consistent, but indirect evidence |
| **low confidence** | Pattern-matched, recalled, or reasoned from a single weak signal |

Three levels, not five. An agent's evidence base is usually thinner than a research programme's and
five levels would be false precision.

## Three supporting rules

**Name the reference class.** The number is never the ambiguous part. The *event* is. "70%
confident" is not a statement.

> ✅ `likely (60–80%) that this specific null deref is the crash cause`
> ❌ `likely that this is the problem`

**Never combine confidence and likelihood in one clause.** ICD 203's explicit rule. Separate
sentences, or separate clauses with a full stop between.

> ✅ `Likely (60–80%) that the race is in the cache writer. Low confidence: I inferred it from log
> ordering and have not reproduced it.`
> ❌ `I'm highly confident this is likely the cache writer.`

**Never mix lexicons.** One vocabulary per output. If a second is unavoidable, say explicitly that
the terms mean the same thing.

## Point estimates inside the band

Tetlock's superforecasters used **57 distinct probability values** against 29–30 for everyone else,
and rounding *their* forecasts to the nearest 10% measurably worsened their Brier scores while
rounding everyone else's changed nothing. Granularity is a symptom of real calibration, and a fixed
seven-word lexicon throws away information a well-calibrated estimator has.

So the band is mandatory and a point estimate inside it is welcome where one genuinely exists.

> `likely (60–80%, call it 70%) that the deadlock is in the connection pool`

⚠️ Reasoned, not measured: do not manufacture the precision. If the estimate is "somewhere in the
60s", give the band and stop. A spuriously exact number on a vague judgement is the opposite
failure and it is just as misleading.

## Hedging that informs versus hedging that evades

A hedge is informative when it is anchored to a specific, checkable reason. It is evasive when it
is untethered.

| Evasive | Informative |
|---|---|
| "It's possible that this could be related to caching." | "Probably not (20–40%) caching. The timings do not correlate with cache TTL, but I have not tested with the cache disabled." |
| "This may or may not work in production." | "Untested under load. It works at 10 rps; I have no data above that." |
| "There might be some edge cases." | "Two edge cases I did not handle: empty input, and timezone-crossing dates. Both are now Opens 4 and 5." |
| "I believe this is correct." | "High confidence: I ran it and the three failing tests now pass." |
| "Roughly." | "±2 days, driven by whether the vendor API supports batch reads. I have not checked." |

**The test:** could the hedge be checked later against an outcome? If not, it is cover.

## Why the number, and not an instruction to be honest

> "RL finetuning tends to collapse language model predictions towards behaviors that receive the
> most reward." (Kadavath et al.)

The agent's default register is miscalibrated in a known direction, too confident and too
agreeable, and RLHF-trained preference for agreement "sometimes sacrifices truthfulness in favor of
sycophancy" (Sharma et al.). Instructing the model to be honest does not fix this. It is honest and
still miscalibrated.

**The band is the fix because it does not bend.** "Likely" can be softened under pushback. "60–80%"
either changes because the evidence changed or it does not change at all. The number forces a
commitment that would have to be visibly revised.

**The behavioural corollary:** if the operator disagrees and no new evidence has arrived, the band
does not move. "You're right, I was probably wrong" with no reason attached is the sycophancy
failure, and it retroactively devalues every estimate that came before it.

## What is checkable and what is not

Checkable, and worth enforcing. This is the cheapest high-value gate in the framework.

- Any term from the axis-1 table appearing without an adjacent numeric band. Hard fail.
- A confidence level and a likelihood term in the same clause. Hard fail.
- Two different probability lexicons in one output.
- A band asserted outside 1–99%.
- Untethered hedges (`it's possible that`, `may or may not`, `there might be some`, `roughly
  speaking`, `I believe`) where no reason, number or named alternative follows in the sentence.

🔴 Not checkable, and the largest hole in the specification: **whether the band is honest.** Its
presence is mechanical, its accuracy is not. The only real check is outcome tracking over time,
scoring stated bands against what turned out to be true, and this framework has no such machinery.
Part E therefore enforces a *form* of calibration. Do not mistake that for calibration.
