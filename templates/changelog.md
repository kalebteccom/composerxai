<!-- composerxai-lint mode=direction -->

# Changelog template

What changed between releases, for the person deciding whether to upgrade.

This follows Common Changelog rather than Keep a Changelog. Keep a Changelog is the better known of
the two and the looser. Common Changelog closes the categories, fixes the entry grammar, requires
references and forbids the Unreleased section, which makes most of it mechanically checkable.

## Shape

```markdown
# Changelog

## [1.4.0] - 2026-08-14

### Changed

- **Breaking:** Drop support for Node 18 ([#399](...)) (`15d5a9e`)
- Bump `json-parser` from 2.x to 3.x ([#412](...)) (`a1b2c3d`)

### Added

- Add `write()` method ([#408](...)) (`c4d5e6f`)

### Removed

- Remove the deprecated `legacy` option ([#401](...)) (`7a8b9c0`)

### Fixed

- Prevent buffer overflow on empty input ([#403](...)) (`1d2e3f4`)
```

Four categories, in that order: `Changed`, `Added`, `Removed`, `Fixed`. Nothing else. Deprecations
fold into `Changed`; security fixes are `Fixed` with the severity in the entry.

Emit only the categories that have entries. A release with one bug fix has one heading.

There is no `Unreleased` section. Write the entries when you cut the release.

## The five rules

**Imperative mood, present-tense verb first.** `Add`, `Fix`, `Bump`, `Remove`, `Document`,
`Deprecate`, `Refactor`. Never a bare noun phrase.

**Self-describing without the heading.** `Add write() method`, not `write() method` filed under
`Added`. Dependabot and release tooling surface entries out of context, and an entry that only makes
sense under its heading is unreadable everywhere it actually appears.

**One line.** A change that needs a paragraph gets a linked upgrade guide. The changelog entry points
at it.

**A reference on every entry.** A commit hash at minimum, and a pull request or issue where one
exists. This is the rule that stops the entry being unverifiable prose.

**Breaking changes first within their category, prefixed `**Breaking:**`.** Sorting inside a category
is breaking, then importance, then latest-first.

## What goes in, and what does not

Exclude: dotfile changes, dev-only dependency bumps, minor code style, documentation formatting.

Do not exclude, though the instinct is to: refactorings, because they can have unintended side
effects. Changes to supported runtime environments. Style changes that adopt a new language feature,
because they move the minimum version. Newly written documentation for a feature that had none.

Rephrase before you publish. Merge two bumps of the same dependency into one range. Drop a pair of
changes that cancel out. Normalise specificity: `Bump json-parser from 2.x to 3.x`, not `Upgrade
json-parser from 2.2.0 to 3.0.1` and not `Bump xml-parser`.

**Do not generate the changelog from the commit log.** Both specifications name that as the primary
antipattern, and Common Changelog names Conventional Commits specifically. Use the commit convention
for commits. A generated changelog reproduces merge commits, obscure subjects and dependency noise,
which is the problem the format exists to solve.

## What makes it fail

Every release carrying all four categories, because the template has four. Real releases have one or
two.

Entries that restate the commit subject verbatim, `chore(deps):` prefix and all.

"Various bug fixes and improvements." "Improved performance and stability." Content-free entries that
exist to fill a category that should have been omitted.

No references anywhere, because the writer had no provenance and wrote prose where a link was
required.

A genuinely breaking change filed under `Changed` with no prefix, because judging breakage needs
knowledge of the consumers.

Fabricated dates, or dates in a regional format.

## Enforceable and judgement

| Rule | Class | Gate |
|---|---|---|
| Version heading matches `^## \[\d+\.\d+\.\d+.*\] - \d{4}-\d{2}-\d{2}$` | Enforceable | Regex |
| Dates are ISO 8601 and parse | Enforceable | Parse |
| Versions in descending order | Enforceable | Semver sort compare |
| Versions match the git tags | Enforceable | Cross-check against `git tag` |
| Category names drawn from the closed set of four | Enforceable | Enum |
| Categories in the specified order within a release | Enforceable | Index compare |
| No `Unreleased` heading | Enforceable | Regex |
| No empty category heading | Enforceable | Content check |
| Every entry is one line | Enforceable | Line measure |
| Every entry starts with a present-tense imperative from the verb list | Enforceable | First-token check |
| Every entry carries at least one reference link or commit hash | Enforceable | Link scan |
| Breaking entries prefixed `**Breaking:**` and sorted first | Enforceable | Prefix regex plus position |
| Content-free entries rejected | Enforceable | Denylist: "various bug fixes", "improved performance and stability", "minor improvements" |
| Entry does not restate a conventional-commit subject | Enforceable, weakly | Flag a leading `feat(`, `fix(`, `chore(` |
| Is the change notable enough to list | Judgement | The include and exclude lists are close to rules, but "a refactor with possible side effects" against "a minor style change" is a call about blast radius |
| Is it genuinely breaking | Judgement | Requires knowing the consumers |
| Is the entry self-describing | Judgement | A leading noun phrase is checkable. Whether the sentence means anything to somebody who has not read the diff is not |
| Have related changes been merged correctly | Judgement | None |

## Scaling down

A project with no releases has no changelog. Do not create one. `git log` is the changelog for
unversioned work, and an empty `CHANGELOG.md` with a single `## [0.1.0]` heading is a file that will
be stale within a month.

The threshold is somebody else depending on a version of your code. Below that, the cost is real and
the reader does not exist.

Where a changelog is warranted, the format does not scale down further. Four categories, one line per
entry, one reference. That is already minimal, and every rule that was dropped in the loose variants
is the rule a reader needed.

The typographic note: `**Breaking:**` at the head of a list item is a bolded inline label, which the
composerxai linter gates against in most modes. A changelog resolves to `instrument`, where that rule
is switched off. Run it as `--mode=changelog` and the conflict does not arise.
