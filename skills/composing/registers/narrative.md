<!-- composerxai-lint mode=direction -->

# Narrative

Mode: **Passage** (`research/03` §3.5.5). Dials P2 / F0–F1 / G2–G3. Lint: `--mode=passage`.

The default. Status writing, incident narrative, reports, profiles, notes, blog posts with no thesis
to defend.

## What the reader is doing

Reading, in sequence, for its own sake. Nothing forces them onward. No numbered steps, no field table,
no question they arrived with. They stop the moment the prose stops paying.

## Demands

- Something concrete in the first sentence: a person, a place, a number, a time, an object. Never an
  abstraction.
- One checkable particular per paragraph, minimum.
- Rhythm carries the whole load here, because no structure does. Mean sentence 12–22 words, and the
  standard deviation matters more than the mean. In any ten sentences the shortest is under eight
  words and the longest is over thirty.
- Paragraph lengths vary by at least a factor of two across the piece.
- Verbs do the work. Prose built on `is`, `has`, `provides` and `enables` is inert.
- Person: `I` where the writer was there, third person where they were not.
- Tense: consistent within a passage. Past for narrative, present for description and standing states.
- Contractions: free.
- Hedging: one bare hedge per 200 words at most, and it must mark a real boundary of knowledge rather
  than soften a claim the writer is nervous about.
- Examples are woven in, not sectioned off. One specific per paragraph is the floor.
- Read it aloud. If you run out of breath or trip, cut.

## Forbids

- Meta-narration. "In this section", "Let's explore", "As mentioned above", "Now that we've covered".
- Nominalisation. "Made a decision" is "decided". "Provides support for" is "supports". "Is reflective
  of" is "reflects".
- The tricolon default, which is three items because three sounds finished. Use the number there are.
- An abstract subject and an abstract object in the same sentence.
- Adverbs propping up weak verbs. "Significantly improved", "dramatically reduced". Give the number.
- `we` meaning people in general. That is the impersonal machine `we`.
- The one-sentence paragraph used as a rhetorical drop. Vary paragraph length because the thoughts are
  different sizes, not to make a line land.
- Restating the opening at the close.

## Opening and ending

**Opening.** The most concrete thing available. A scene, a number, a name, a thing that happened.
Delete the first sentence you wrote; the second is usually the real opening, and this holds often
enough to apply without thinking about it.

**Ending.** A concrete image, a consequence, or a fact the reader did not have. Never a summary, never
a moral, never "time will tell", never a rhetorical question.

## Section order

There is none, and that is the register's defining problem. Every other mode gets an order from
somewhere, whether a spec, a template or a numbered sequence, and that order does part of the work of
holding the reader. Here the sentences do all of it.

So the discipline moves into the rhythm rules above. If a piece of narrative needs headings to be
followable, it is probably an explanation or a how-to wearing narrative clothes. Check the mode before
you add them.

Status writing is the exception worth naming: it takes a shape, and the shape is what happened, what
it cost, and what is now true. Not a list of activities.

## The failure signature

The most familiar shape of generated prose, and the one people mean when they say text sounds like
an LLM wrote it.

Uniform eighteen-word sentences, four to a paragraph, paragraph after paragraph. Em-dash pivots
manufacturing emphasis. Abstract nouns as subjects, so nobody does anything and things merely occur.
Adjective stacks. Negative parallelism where a claim should be. Present participles trailing every
clause, measured at five times the human rate. Then a final paragraph that says what the piece already
said, in the register of a conclusion.

The tell underneath all of them: no particular that could be checked. "The migration process presented
a number of significant challenges" is what you write when you were not there. "The migration ran for
six hours and failed at 04:12, on a foreign key nobody had looked at since 2019" is what you write
when you were.

## Acceptance check

- [ ] Sentence-length standard deviation clears the linter's floor.
- [ ] No three consecutive sentences within four words of each other.
- [ ] At least one paragraph of one sentence, and it is earning its place.
- [ ] Every paragraph carries a name, a number, a date or an object.
- [ ] The final paragraph shares under 30% of its content words with the first.
- [ ] Zero meta-narration, zero inflated vocabulary.
- [ ] Cut 30%. If nothing was lost, the cut was right and there is more to take.

## Lint

```sh
npx composerxai-lint <file> --mode=passage
```

Aliases: `prose`, `blog`, `default`. This is the linter's default mode, so the flag can be omitted.
Every gate is on and every threshold is at its tightest here.
