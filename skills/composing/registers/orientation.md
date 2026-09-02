<!-- composerxai-lint mode=direction -->

# Orientation

Mode: Orientation (`research/03` §3.5.3). Dials P1 / F1 / G1. Lint: `--mode=orientation`.

READMEs, landing pages, project overviews, abstracts, index pages, release notes.

## What the reader is doing

Arriving cold and deciding, in about thirty seconds, whether this thing is for them. They do not yet
know what they want. They leave at the first sentence that tells them nothing.

## Every Page is Page One

🔴 The reader did not come through your front door. They arrived from a search result, a link in a
chat, or a dependency listing, and they will leave the same way. So the page has to be:

- Self-contained. It works as the only page they read.
- Context-establishing. Say what this is and where it sits, even though you said it elsewhere. The
  reader has not been elsewhere.
- Written for a qualified reader. They know the field. They do not know your project.
- On one level throughout. No parameter tables, no step sequences. A page that changes altitude loses
  the reader who arrived at the wrong one.
- Richly linked. Every neighbouring concept gets a link, labelled by the reader's situation.

## Demands

- Sentence one says what the thing is and who it is for, in 25 words or fewer, with no metaphor. If a
  stranger cannot repeat it back, rewrite it.
- Sentence two or three says what it is not, or what it replaces, or what it competes with. Contrast
  orients faster than description.
- One runnable or observable proof within the first screen: an install line, a three-line example, a
  screenshot. Proof beats description.
- Route, do not cover. Destinations labelled by the reader's situation, not by document type.
- A status line, dated. Maturity, stability, who maintains it, whether changes are accepted.
- Person: second for the reader, `we` or the project name for the maintainers. `I` only where it
  genuinely is one person's project and that matters.
- Tense: present. Future only for a roadmap, labelled and dated.
- Contractions: occasional. Opening sentence 25 words maximum, body sentences 20, bullets 12 and
  parallel. Symmetry is a virtue here and nowhere else, because these bullets are navigation.
- Examples: none. One proof-of-life snippet, then links. A proof shows the thing runs; an example
  teaches, and teaching belongs on another page.

## Forbids

- A history or philosophy paragraph above the fold.
- Marketing adjectives with no measurement behind them.
- Feature lists standing in for a claim about who it is for.
- Duplicating reference, how-to or explanation content. A README that grows a full API table has
  stopped being a doorway.
- Badge walls above the first sentence of prose.
- Hedges, except dated status hedges: "Alpha as of 2026-08; the config format will change."

## Opening and ending

**Opening.** The definitional sentence. Nothing above it but the name.

**Ending.** A routed list of destinations, plus licence, maintainership and where to get help. This is
the one register where a closing list is not a banned summary, because it is navigation and it carries
information the body did not.

## Section order

Library README, from `standard-readme` and the cognitive funnel in `art-of-readme` (`research/05`
§3.1). Ordered by how quickly a reader can bail.

| # | Section | Required | Rule |
|---|---|---|---|
| 1 | Title | Yes | Matches the repo, folder and package-manager name |
| 2 | Badges | No | No heading, newline-delimited, only badges carrying information |
| 3 | Short description | Yes | No heading, under 120 characters, own line, matches the package-manager description |
| 4 | Long description | No | No heading. Caveats and limitations go here, up front |
| 5 | Table of contents | Over 100 lines | Links every H2, starts after itself |
| 6 | Install | Yes | Must contain a code block |
| 7 | Usage | Yes | Must contain a runnable code block. Comes before API |
| 8 | API | No | Signatures, returns, callbacks, caveats. Link out if generated |
| 9 | Contributing | Yes | Where to ask, whether PRs are accepted |
| 10 | Licence | Yes | SPDX identifier and owner. Always last |

Product README: About and screenshot, Built With, Getting Started, Prerequisites, Installation, Usage,
Roadmap, Contributing, Licence, Contact. Both orders carry project status, where to get help as
distinct from where to contribute, and no information conveyed only by an image.

Release notes are Orientation per item: second person, present tense except past for bug fixes,
describe the benefit rather than the change, and link to the documentation, which becomes the source
of truth.

## The failure signature

It opens on the importance of the problem space. "In today's fast-paced development environment…" Then
adjectives with nothing behind them, features where an audience should be, and a description that
describes the category rather than this project. Strip the name and it fits a thousand repos.

Then the template artefacts. Every section emitted, including the empty ones. `## Roadmap` followed by
"TBD". A Contributing section inviting pull requests to a project accepting none. Badges for CI that
does not exist. A Licence section naming MIT where there is no LICENSE file. Usage examples that do
not run, with plausible method names that were never defined. No caveats anywhere, because a model
does not volunteer what a thing cannot do.

## Acceptance check

- [ ] Strip the project name from the description. If it fits any other project, rewrite it.
- [ ] First prose sentence is 25 words or fewer and classifies the thing with a noun.
- [ ] The first 200 words contain a code block, or a link labelled by reader situation.
- [ ] Every code block runs, as written, today.
- [ ] A dated status line is present, and one caveat appears above the fold.
- [ ] Every section has something in it. Delete the ones that do not.
- [ ] The page works for someone who read no other page.

## Lint

```sh
npx composerxai-lint <file> --mode=orientation
```

Aliases: `readme`, `overview`.
