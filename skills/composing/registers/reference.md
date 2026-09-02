<!-- composerxai-lint mode=direction -->

# Reference

Mode: Instrument (`research/03` §3.5.1). Dials P0 / F0 / G0. Lint: `--mode=instrument`.

## This register is the exception. Switch the anti-machine rules off.

🔴 [`reference/voice.md`](../../../reference/voice.md) does not apply here, and applying it damages the
page. Everywhere else, prose that reads as machine-written is a defect. Here it is the target.

- No varied rhythm. Low sentence-length variance is correct. The linter switches its rhythm, variance
  and paragraph-uniformity gates off in this mode for that reason.
- No personality. No voice, no judgement, no reader.
- Ruthless consistency. Do not find a second way to say "Returns". Say "Returns" every time.
- One term for one thing, and one thing for one term.

A framework that cannot say where it does not apply is a mood. This is where it does not apply.

## What the reader is doing

Looking one thing up, mid-task, under time pressure. They consult this page. They do not read it.

## Demands

Structure mirrors the structure of the thing described.

- One entry per thing. Identical skeleton, identical order, no exceptions.
- Every field present on one entry is present on all of them, with an explicit `None` rather than an
  absence.
- State defaults, units, ranges and failure behaviour. An unstated unit is a bug.
- Each entry carries one minimal usage example that shows form. It does not teach a task.
- Person: third. The subject of every sentence is the thing, not the reader.
- Tense: simple present, indicative. "returns", never "will return".
- Contractions: never. Sentences 8 to 20 words, one clause preferred. Fragments are fine in fields.
- Hedging budget: zero. A condition is not a hedge. "On Linux only." "Ignored when `strict` is false."

## Controlled-language principles

Taken from ASD-STE100, the aerospace controlled English in use since 1983, restated in our own words
because the specification text is proprietary. Credited in `PRIOR_ART.md`.

1. Keep sentences short. Roughly 20 words for an instruction, 25 for a description.
2. One word carries one meaning across the whole document, and one meaning gets one word.
3. Write in the active voice, with the actor named.
4. Use simple tenses. No perfect, no progressive, no future.
5. Put the condition before the command. "Before the engine starts, close the valve."
6. One instruction per sentence.
7. Define a term where it first appears, then never vary it.
8. Do not hedge. `should`, `would`, `may` and `might` state nothing a reader can act on.

## Forbids

- First person, of any kind.
- Evaluation: `powerful`, `simple`, `convenient`, `recommended`, `best practice`, `elegant`.
- Instruction sequences (link to a how-to) and any "why" (link to an explanation).
- Rhetorical variety.
- `typically`, `usually`, `generally`. Replace with the real condition, or a stated unknown.

## Opening and ending

**Opening.** The name of the thing and its signature or type. No sentence before it.

**Ending.** The last field. No conclusion, no summary, no "see also" prose, just a bare list of links.

## Section order

From `research/05` §3.1.

| # | Section | Rule |
|---|---|---|
| 1 | Title | A noun phrase. No stacked nouns; use prepositions |
| 2 | Overview | One paragraph stating what every entry here has in common. Doubles as the meta description |
| 3 | Body | One H2 per logical subset. One element takes a list, several take a table, a syntax reference takes an H3 per example |

Per entry: name, type, required or optional, default, units, constraints, description. The description
adds information the name does not already carry.

Changelogs are Instrument with a date attached. Latest version first, `## [X.Y.Z] - YYYY-MM-DD`.
Categories: `Changed, Added, Removed, Fixed` from Common Changelog, or the six from Keep a Changelog.
Pick one set and never deviate. One line per entry, imperative verb first, self-describing without its
heading, linked to a commit, with `**Breaking:**` on the breaking ones. Never generate the file from
the commit log; both specifications name that as the primary antipattern.

## The failure signature

Generated reference goes wrong by becoming interesting. An example that starts explaining. An entry
that acquires a paragraph the others do not have. An adjective.

Then the four that come from having no access to the thing: tautological descriptions, where `timeout`
is documented as "The timeout"; invented parameters formatted identically to the real ones, which
makes them harder to spot; missing defaults, units and nullability; hedging in a format that forbids
it.

## Acceptance check

- [ ] The field set is identical across sibling entries, `None` included.
- [ ] Every entry states a default and a unit, or says explicitly that neither applies.
- [ ] Delete the name column: every description still carries information.
- [ ] Every parameter exists in the code. Check them against the source, one by one.
- [ ] Zero first-person pronouns, evaluative adjectives or future auxiliaries.
- [ ] No paragraph over three sentences, and each term appears in exactly one form throughout.

## Lint

```sh
npx composerxai-lint <file> --mode=instrument
```

Aliases: `reference`, `api`, `changelog`, `schema`. The mode promotes `lex/empty-superlative` to an
error and switches the rhythm and variance gates off.
