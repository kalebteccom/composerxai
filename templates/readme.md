<!-- composerxai-lint mode=direction -->

# README template

The front door. A reader arrives cold from a link and decides in about thirty seconds whether to keep
reading, so the order is set by how quickly each section lets them bail.

This follows standard-readme, which is the only README specification with a conformance checker and a
published spec rather than a preferred layout. Its ordering rationale comes from art-of-readme's
cognitive funnel: usage before API, and both before installation, because somebody evaluating your
project wants to see it work before they learn to build it.

## Section order

```markdown
# <Title>

<badges, no heading, newline-delimited>

<Short description. No heading. One line. Under 120 characters.>

<Long description. No heading. Caveats and limitations belong here, up front.>

## Table of contents
## Background
## Install
## Usage
## API
## Status
## Support
## Contributing
## License
```

Required by the spec: Title, Short description, Install, Usage, Contributing, License. The table of
contents is required once the file passes 100 lines. License is last, always.

`Status` and `Support` are not in standard-readme. They come from make-a-readme, and they are here
because the two questions a reader has after "what is this" are "is it alive" and "where do I ask".

## What each section is for, and what makes it fail

| Section | What goes in it | Fails when |
|---|---|---|
| Title | Matches the repo, the folder and the package-manager name, or explains why not. | It is a tagline. |
| Badges | Only badges that carry information. No heading. | They point at a CI workflow, a coverage service or an npm version that does not exist. |
| Short description | Under 120 characters, on its own line, no heading, does not open with `> `. Matches the package-manager and forge descriptions. | It describes the category. "A modern, lightweight, flexible library for building X" fits a thousand repos. Strip the project name; if it still parses, rewrite it. |
| Long description | A few paragraphs. What this does that the obvious alternative does not. Caveats and limitations, up front. | It has no caveats anywhere. A generated README never volunteers what a thing cannot do, and that absence is the single most reliable tell in this format. |
| Table of contents | Links every H2. Starts at the section after itself. | Anchors do not resolve. |
| Background | Motivation, provenance, the abstract dependencies a reader needs to have heard of. | It becomes the design doc. |
| Install | At least one fenced code block. Two lines for the basic case. | The command was never run. |
| Usage | At least one runnable fenced code block, before the API section. | The example uses plausible method names that do not exist, an import from the wrong path, or a config object with invented keys. This is the highest-value thing to check and the thing a model gets wrong most often, because to a model the code block is prose too. |
| API | Signatures, return types, callbacks, events, caveats. Link out when it is generated. | It duplicates generated reference and drifts from it. |
| Status | Maintained, maintenance-only, or unmaintained with a pointer to the fork people should use. | Absent, so a reader spends an afternoon on something abandoned in 2023. |
| Support | Where to ask a question, which is not where to contribute. | Merged into Contributing, so users are told to open a pull request when they had a question. |
| Contributing | Where to ask, whether pull requests are accepted, and any requirement such as sign-off. | "Contributions are welcome! Please feel free to submit a Pull Request." That sentence contains no process, no answer on whether PRs are accepted, and no place to ask. |
| License | SPDX identifier and the owner. Last section. | It names MIT and there is no LICENSE file. |

## Two failures worth naming separately

**A features section that is marketing.** `Blazing fast`, `secure by default`, `zero dependencies`,
each with no benchmark, no threat model, and sometimes contradicting the manifest. Nielsen Norman
measured promotional copy of this kind reducing usability by 27%. If a claim has a number, give the
number; if it does not, cut the claim.

**Sections emitted because the template had them.** `## Roadmap` followed by "TBD". A person writes
the four sections they have something to say about. The machine failure is never a missing section.
It is a present section with nothing in it, formatted correctly.

## Enforceable and judgement

| Rule | Class | Gate |
|---|---|---|
| Required sections present | Enforceable | Heading scan |
| Sections in spec order | Enforceable | Index comparison |
| License is the last section | Enforceable | Position check |
| Short description under 120 characters, own line, no leading `> ` | Enforceable | Line measure |
| Short description matches the package-manager and forge descriptions | Enforceable | Cross-file compare |
| Table of contents present when the file exceeds 100 lines | Enforceable | Line count trigger |
| Table of contents anchors resolve | Enforceable | Anchor resolve |
| No broken links | Enforceable | HTTP and filesystem check |
| Install contains a fenced code block | Enforceable | Block scan |
| Usage contains a fenced code block | Enforceable | Block scan |
| Usage appears before API | Enforceable | Position check |
| License named matches the LICENSE file | Enforceable | Cross-file compare |
| Badge targets exist in the repo or resolve over HTTP | Enforceable | Resolve |
| Sentence-case headings, no emoji in headings | Enforceable | The linter already does this |
| No critical information carried only by an image | Enforceable, weakly | Flag an image with no adjacent prose. Whether the prose is equivalent is not checkable |
| Does the usage example run | Judgement | Executing it is the only real check, and whether it is the representative example is a human call |
| Does the description describe this project or its category | Judgement | None |
| Are the caveats honest | Judgement | Their absence is checkable. Their truthfulness is not |
| Is a section present but empty | Judgement | Word count under a heading is a proxy and a bad one. A three-word section can be complete |

## Scaling down

standard-readme's full shape is for a published library with outside users. Most repos are not that.

The floor for an internal repo: Title, short description, Install, Usage. Four sections, no table of
contents, no badges. Add License when the repo is public or the licence is not obvious from the org.

`Contributing` is required by the spec and it should not be, for a repo nobody outside the team can
contribute to. Either write the real process, which is often one line about the branch convention, or
drop the heading. A `Contributing` section describing a process that does not exist is worse than
none.

For an operator or client repo the genre inverts. Nobody is evaluating whether to adopt it; they need
to run it. The order becomes stack, then auth, then environment variables, then URLs, then
architecture. The cognitive funnel is an adoption argument, and there is no adoption decision here.

Every repo gets a human README, even a short one. A repo whose front door is an agent instruction
file has no front door.
