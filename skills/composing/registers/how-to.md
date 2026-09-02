<!-- composerxai-lint mode=direction -->

# How-to

Mode: Direction (`research/03` §3.5.2). Dials P0–P1 / F2 / G1. Lint: `--mode=direction`.

## What the reader is doing

Executing. They already know what they want and are part-way through a task with a terminal open. They
are competent, and they are not here to learn the subject.

## Demands

- Outcome in the first sentence. Preconditions in the second.
- One action per numbered step. Two verbs means two steps.
- Every step that can fail states its observable success signal, or the guide states one at the end.
- Forks are explicit and conditional. "If x, do y. Otherwise skip to step 6."
- One complete worked path with real values. `<your-value>` appears only where the value is genuinely
  per-reader, and the text shows what a real one looks like.
- Person: imperative for actions, second person for states. "Run `x`." / "You now have a container."
- Tense: present throughout. Never "you will then want to".
- Contractions: rare. Imperatives under 20 words, ideally under 12. Each step at most two sentences.
- Examples are mandatory: one worked instance of the whole path, plus a per-step example wherever the
  command is not obvious.

## Forbids

- Explanation. Any "because" over eight words belongs in an explanation page, with a link to it.
- Teaching voice. No "notice that", no "as you can see", no reassurance.
- Alternatives weighed inline. Pick one. Link the rest.
- Machine-perspective framing. "To save the file, click Save" tells the reader nothing.
- Callouts that restate the step above them.
- Trailing participial padding: "…, ensuring your configuration is applied correctly."
- Hedges. `may`, `might`, `you could consider`. Conditionals are free and are the native form here.
- Completeness for its own sake.

## Opening and ending

**Opening.** "This guide shows you how to [outcome]." Nothing above that sentence: no context
paragraph, no history, no statement of importance.

**Ending.** The verification, then at most one line routing onward. "Confirm with `x`; you should see
`y`." No recap of the steps just taken.

## Section order

From `github/docs` and Diátaxis, via `research/05` §3.1.

| # | Section | Rule |
|---|---|---|
| 1 | Title | Task-based, sentence case, under 80 characters. "How to \<do the thing\>", or a gerund in GitHub house style |
| 2 | Overview | One or two sentences stating the outcome. If it needs three, the extra belongs on a concept page |
| 3 | Before you start | Prerequisites as a bulleted list, each with a link: prior articles, credentials, software, network access. Delete the section only if there genuinely are none |
| 4 | Steps | Numbered. Every code block gets a lead-in sentence. Screenshot only where the image is faster to read than the words |
| 5 | Troubleshooting | Optional, short, sited at known pain points |
| 6 | Next steps | Links not already used inline |

## The Breza test

🔴 **A how-to fails if a reader who copy/pastes straight down the page ends up with an error.** That is
the acceptance criterion, not a stylistic preference.

It fails on a command that depends on a directory never created, an environment variable first used in
step 7 and never set, a version flag that changed, a placeholder no reader can resolve, and any step
whose output the next step assumes but never states.

Run the page yourself, in order, from a clean state.

## The failure signature

A paragraph before step 1 explaining what the tool is. Then "It is important to note that…" wedged
between steps. Steps that cannot be checked: "Configure your environment variables appropriately",
where a person would have written the variable names. Every option listed at every choice point,
because selection costs something and listing does not. Prerequisites either missing or filled with
"Basic familiarity with the command line". A Conclusion section summarising what the reader just did.
No verification at the end, because verification requires knowing what actually happens.

## Acceptance check

- [ ] The Breza test passes on a clean machine.
- [ ] First numbered step appears within 80 words of the title.
- [ ] Every step has one imperative verb.
- [ ] At least one command and its real output appear together.
- [ ] The guide ends on a verification the reader can perform.
- [ ] Zero occurrences of `may`, `might`, `could consider`, `It is important to`.
- [ ] No section titled Conclusion, Summary or Recap.

## Lint

```sh
npx composerxai-lint <file> --mode=direction
```

Aliases: `howto`, `how-to`, `guide`, `runbook`, `tutorial`.
