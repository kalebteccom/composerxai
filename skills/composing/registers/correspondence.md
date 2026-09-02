<!-- composerxai-lint mode=direction -->

<!-- composerxai-lint disable lex/throat-clearing,lex/hollow-close -->
<!-- Those two rules only: this file has to quote the openers and closes it bans. -->

# Correspondence

Mode: Address (`research/03` §3.5.6). Dials P3 / F3 / G3. Lint: `--mode=address`.

Recruiter replies, founder messages, cold outreach, follow-ups. Nobody else covers this genre, which
is part of why the tells in it are so uniform.

## What the reader is doing

Deciding something about you, in about eight seconds, on a phone, between two other messages. One
named person, who knows they were written to.

## Demands

🔴 First person is mandatory. You are one person writing to one person, so `I`. And `we` is usually
wrong: it is either a company mask or the impersonal machine `we`, and it fools nobody. Use it only
where the thing genuinely belongs to a team.

🔴 Contractions are correct here. `I've`, `don't`, `that's`. A message without them reads as a legal
notice.

- Sentence one says why you are writing. Not context, not pleasantry.
- Exactly one ask, with an owner, an action and a date. Two asks means two messages.
- Everything needed to answer without a second round trip: the link, the number, the constraint. A
  message that provokes "which one?" has failed.
- Something only you could have written. A detail from the shared history, a specific from their
  situation, a fact you had to know.
- Under 150 words in the body. Detail goes below a line, or in an attachment.
- Tense: free. Real correspondence moves across time constantly, and this is the one register where
  tense discipline is not a virtue.
- Mean sentence under 15 words, longest under 30. Fragments are fine.
- Hedging: one at most, and only around the recipient's freedom to say no. Zero around your position.
- Read it aloud. If you would not say it to their face in those words, rewrite it.

## Forbids

🔴 The applicant-flattery register, which is the real tell. "I have been really impressed by the work
your team is doing in this space." "Thank you for your time and consideration." "I would be more than
happy to." It is politeness pitched above the level anyone uses with someone they know, and it reads
as auditioning rather than corresponding. Flattery with nothing verifiable in it is the loudest signal
in the genre.

- The wellness opener. "I hope this email finds you well." "I wanted to reach out."
- Filler transitions. "Just circling back", "Following up on my previous email".
- The service register. "Please don't hesitate to", "Feel free to".
- Softening your own claim. Hedge their autonomy if you like, never your own competence. No "I might
  be wrong but", no "sorry to bother you".
- Your reasoning at length before the ask. Ask, then justify in one line.
- Enthusiasm you do not have. "Excited", "thrilled", "delighted", unless true.
- Asking for a meeting when you could ask for interest, a yes or no, or a pointer.

## Opening and ending

**Opening.** The reason for writing, in the first clause. A greeting is a greeting line, not a
sentence of the body: "Hi Sam," and then the reason.

**Ending.** The single ask, restated as an action with a date. Or nothing at all. "Can you confirm by
Thursday?" is an ending. "Looking forward to hearing from you" is filler unless a real next step has
already been named.

## Section order

Cold email: 50 to 125 words, five sentences or fewer, one ask (`research/05` §3.1).

| # | Element | Rule |
|---|---|---|
| 1 | Subject | 3 to 4 words, 65 characters maximum. Specific out of context. Sentence case. Not "Question", not "Quick chat" |
| 2 | Sentence 1 | The purpose. Start with the thing |
| 3 | Sentences 2–3 | The one verifiable detail that could only have been written to this recipient. A business consequence, not a technical fact |
| 4 | Sentence 4 | The ask. Direct, singular, unhedged, for the smallest thing that works |
| 5 | Sentence 5 | Optional one-clause exit: "If this isn't for you, no reply needed" |

Follow-up: one, after about three days, carrying new substance and a reason to be writing today. A
second is marginal. A third costs you the reply.

Reply, including recruiter replies:

| # | Element | Rule |
|---|---|---|
| 1 | Line 1 | The answer. Not thanks, not their question restated. Asked your rate, line one is a number |
| 2 | Body | The qualification the answer needs. One idea per paragraph, three to seven lines |
| 3 | The ask back | One explicit ask, with a named deliverable and a date |
| 4 | Quote | Trimmed to enough to be understood, no more. Distinct questions get inline replies under each quoted point |
| 5 | Signature | Four lines at most |

Founder message: a cold email where the specific detail has to be about their problem, not their
product.

## The failure signature

The lexical tells are listed under Forbids, and they are the cheap half. The shape is the other half:
three sentences of context inside a five-sentence budget, the ask buried in the middle and over-hedged
when it arrives, a gratitude close, no contractions, and flat-neutral sentiment, which is the
worst-performing register there is. Plus spaced em dashes and curly apostrophes pasted out of a chat
window into a plain-text client.

Above all: nothing in it could only apply to this recipient. Everything else here is cosmetic by
comparison.

## Acceptance check

- [ ] The find-and-replace test. Swap the name and the company. If it still works, it is not
  correspondence, and it needs rewriting.
- [ ] Body under 150 words, with at least two contractions.
- [ ] Exactly one ask, and it carries a date.
- [ ] First sentence contains a first-person verb of intent.
- [ ] Zero pleasantries, zero service-register phrases, no gratitude close.
- [ ] Read aloud without wincing.

## Lint

```sh
npx composerxai-lint <file> --mode=address
```

Aliases: `email`, `letter`, `outreach`, `message`.
