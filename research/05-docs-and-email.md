# 05 — Documentation and Email

Research pass over two adjacent problems: how to structure written technical
documentation, and how to write short professional correspondence. Both are
formats where the shape of the artefact carries most of the meaning, and both
are formats an LLM will happily produce in a recognisably wrong shape.

Star counts are as of the 2026-09-01 research pass, read from the GitHub API.
Every URL below was checked. Links that are dead, redirected, bot-blocked or
paywalled are flagged as such at the point of citation rather than quietly
dropped — see §2.8 for the list.

---

# Job 1 — GitHub repos on writing better documentation

28 repos. Grouped by what they actually do rather than by star count. Prose
linters (Vale, textlint, write-good, alex, proselint) are deliberately excluded
— they belong in the linter research, not here.

## 1.1 Frameworks — how to decide what kind of page you are writing

### evildmp/diataxis-documentation-framework
- **URL:** https://github.com/evildmp/diataxis-documentation-framework · site https://diataxis.fr/
- **Stars:** ~1,210
- **What:** Daniele Procida's Diátaxis. The source repo for the framework that
  now underpins Django, Cloudflare, Gatsby and Canonical docs.
- **Structural rules:** Four modes, and the central claim is that mixing them is
  the defect. Diátaxis names four needs and four matching forms — *tutorials*,
  *how-to guides*, *technical reference*, *explanation* — and addresses
  "documentation *content* (what to write), *style* (how to write it) and
  *architecture* (how to organise it)."
  - **How-to guide:** serves "the work of the already-competent user, whom you
    can assume to know what they want to do." Rule: "no digression, explanation,
    teaching." Title must say exactly what it shows — "How to integrate
    application performance monitoring", not "Application performance
    monitoring." "Practical usability is more helpful than completeness."
  - **Reference:** must "describe and only describe." Style is "austere and
    uncompromising"; qualities are "neutrality, objectivity, factuality."
    "The structure of the documentation should mirror the structure of the
    product." Examples are allowed as illustration; instruction, explanation,
    opinion, speculation and marketing claims are not — link out instead.
  - **Explanation:** "understanding-oriented", "a discursive treatment of a
    subject, that permits *reflection*." Title test: you should be able to place
    an implicit *about* in front of it — "About user authentication."
    Explanation "can and must consider alternatives, counter-examples or
    multiple different approaches" and must "explain *why* things are so —
    design decisions, historical reasons, technical constraints." Instruction
    and technical description must not "creep in."
- **Why it matters here:** this is the single most load-bearing rule set. Most
  bad docs — human or machine — are a how-to with explanation smeared through
  it, or a reference page that has started editorialising.

### thegooddocsproject/templates
- **URL:** https://github.com/thegooddocsproject/templates
- **Stars:** ~703
- **What:** The Good Docs Project. Diátaxis made concrete: fill-in-the-blank
  templates plus a companion `about-*.md` guide explaining when and how to use
  each. Directories: `tutorial/`, `how-to/`, `reference/`, `explanation/`,
  `quickstarts/`, `api-overview/`, `api-quickstart/`, `api-reference/`,
  `ia-guide/`, `style-guide/`, `logging/`.
- **How-to template — exact section order:**
  1. `# Title`
  2. `## Overview` — "Summarize what this How To article is about in a sentence
     or two." Optional `**Keywords:**` line.
  3. `## Before you start` — bulleted prerequisites; deletable if there are
     genuinely none. Also holds known issues/bugs.
  4. `## Step-by-step guide` with `### Step N: <title>` subsections. Each step
     is one of: screenshot-led, ordered list, or code snippet. Rule for images:
     "When an image, such as a screenshot, is quicker to interpret than
     descriptive text, put the screenshot first, otherwise lead with the text."
     Every code snippet gets a lead-in sentence.
  5. Final step is a conclusion — summarise what the reader achieved, link to
     related articles.
- **Reference template — exact section order:** `# {reference article title}` →
  `## Overview` (explain "what all the entries defined on the page have in
  common"; this text is reused as the site overview and the HTML description
  tag) → `## {subset of reference entries}` (one H2 per logical group, e.g.
  "General Requirements", "Request Parameters", "Responses") → each subset
  rendered as a table or other structured form. Explicit note that different
  subsets may use different formats — bullets for requirements, tables for
  parameters.
- **Explanation template (AsciiDoc) — exact section order:** title →
  `:description:` and `:keywords:` attributes → `== Overview` (reuses
  `{description}`) → `== Glossary` (a `[glossary]` block of `term:: definition`,
  because "You may know what a term means, but your audience may not") →
  `== Explanation Topic`.
- **Notable rule:** the how-to guide states plainly, "Don't use How To articles
  to teach concepts… Readers should already have read a concept about the topic
  in an About article. Ensure you link to the relevant About article in the
  overview."

### github/docs
- **URL:** https://github.com/github/docs · content model at
  https://docs.github.com/en/contributing/style-guide-and-content-model
- **Stars:** ~20,763
- **What:** the open-source repo behind docs.github.com. The interesting part is
  not the docs, it is `content/contributing/style-guide-and-content-model/`,
  which is the most prescriptive published content model of any of these repos.
  Content types: concepts, how-to, reference, tutorial, quickstart, get-started,
  troubleshooting, release-note.
- **Structural rules — article anatomy, in fixed order:** title → intro →
  permissions statement → product callout → tool switcher → table of contents →
  conceptual content → referential content → prerequisites → how-to content →
  troubleshooting content → next steps → further reading.
- **Hard numeric limits:** article titles 80 characters ("60 if possible"),
  `shortTitle` 30 characters, "ideally 20-25". Category titles 67 chars,
  shortTitle 26. Map topic titles 63 chars, shortTitle 29. Quickstarts: "about
  600 words long or take about five minutes to read."
- **Title grammar by type:** how-to titles "begin with a gerund" ("Applying for
  a student developer pack"); short titles use "short, non-gerund verb phrases"
  ("Manage your plan"). Reference titles "generally begin with nouns" and
  "avoid stacked nouns — use prepositions to break up long strings of nouns."
  Conceptual section headers start with "About [subject]" and use a noun —
  "About code scanning", not "About scanning your code for vulnerabilities".
  All titles use sentence case.
- **Intro rule:** "Intros should be concise, ideally one sentence long." Write
  the title and intro at the same time.
- **Amount-of-explanation rule:** how-tos and tutorials may have "1-2 brief
  introductory sentences before the steps. If more explanation beyond a couple
  of sentences is needed, consider adding the information instead as a
  conceptual article."
- **Further reading rule:** "Only include links to articles that have not
  already been linked to within the content of the article."
- **Reference formatting rule:** single element to explain → list; multiple
  elements → table; long reference → H2 per distinct section, H3 for examples.

## 1.2 README standards and templates

### RichardLitt/standard-readme
- **URL:** https://github.com/RichardLitt/standard-readme · spec at
  https://github.com/RichardLitt/standard-readme/blob/main/spec.md
- **Stars:** ~6,355
- **What:** a formal, conformance-checkable README specification with a linter
  (`standard-readme-spec`) and a badge.
- **Exact section order (mandatory where required):**
  Title (required) → Banner (optional, no heading, must be a local image,
  directly after title) → Badges (optional, no heading, newline-delimited) →
  Short Description (required, no heading, **<120 characters**, on its own line,
  must not start with `> `, must match the package manager and GitHub
  descriptions) → Long Description (optional, no heading) → Table of Contents
  (required unless the README is under 100 lines; must link to all sections;
  must start at the section after the ToC; must capture all H2s) → Security
  (optional) → Background (optional; motivation, abstract dependencies,
  intellectual provenance) → Install (required by default; must contain a code
  block) → Usage (required by default; must contain a code block; `CLI`
  subsection required if a CLI exists) → Extra Sections (0..n, placed after
  Usage and before API) → API (optional; signatures, return types, callbacks,
  events, caveats) → Maintainers (optional; must be titled `Maintainer` or
  `Maintainers`, with one contact method each) → Thanks (optional; must be
  titled `Thanks`, `Credits` or `Acknowledgements`) → Contributing (**required**;
  must state where to ask questions, whether PRs are accepted, and any
  contribution requirements such as commit sign-off) → License (**required**,
  **must be the last section**, must state an SPDX identifier and the owner).
- **Global requirements:** the file must be named `README` with capitals; i18n
  variants use BCP 47 tags (`README.de.md`) and `README.md` is reserved for
  English where multiple languages exist; "Sections must appear in order given
  below"; "Must not contain broken links"; code examples in the README must be
  linted the same way as the project's code.
- **This is the one that is actually machine-checkable.** The ordering,
  required-section, title-wording, 120-character and broken-link rules are all
  mechanical.

### hackergrrl/art-of-readme
- **URL:** https://github.com/hackergrrl/art-of-readme
- **Stars:** ~7,149
- **What:** Kira (formerly noffle)'s essay on why READMEs are shaped the way
  they are. The reasoning behind standard-readme's ordering.
- **The rule it contributes — "cognitive funneling":** order sections by how
  quickly they let a reader "short circuit" and bail. Order: Name → One-liner →
  Usage → API → Installation → License. Note that Usage comes *before* API and
  *before* Installation: "rather than starting to delve into the API docs, it'd
  be great to see what the module looks like in action." And: "your job… isn't
  to 'sell' people on your work. It's to let them evaluate what your creation
  does as objectively as possible."
- **The checklist it ships:** one-liner explaining the purpose; necessary
  background context and links; unfamiliar terms link to informative sources; a
  clear *runnable* example of usage; installation instructions; extensive API
  documentation; performs cognitive funneling; caveats and limitations mentioned
  up-front; **doesn't rely on images to relay critical information**; license.
- **Quotes perlmodstyle** as the ancestor of the whole convention: "Ideally,
  someone who's slightly familiar with your module should be able to refresh
  their memory without hitting 'page down'."

### dguo/make-a-readme
- **URL:** https://github.com/dguo/make-a-readme · site https://makeareadme.com
- **Stars:** ~733
- **What:** the repo behind makeareadme.com — an editable README template with
  live Markdown rendering, explicitly modelled on Keep a Changelog.
- **Template sections:** Name → Description → Badges → Visuals → Installation →
  Usage → Support → Roadmap → Contributing → Authors and acknowledgment →
  License → Project status. The differentiators from standard-readme are
  **Support** (where to get help), **Roadmap** and **Project status** (say
  explicitly if the project is unmaintained and point at forks).

### othneildrew/Best-README-Template
- **URL:** https://github.com/othneildrew/Best-README-Template
- **Stars:** ~16,325
- **What:** the most-copied "attractive README" template. Presentation-heavy —
  centred logo block, shields.io badge row, collapsible `<details>` ToC,
  back-to-top anchors.
- **Exact section order:** logo/title block + badges → `## About The Project`
  (with product screenshot) → `### Built With` (badge list of the stack) →
  `## Getting Started` → `### Prerequisites` → `### Installation` (numbered) →
  `## Usage` (with "_For more examples, please refer to the [Documentation]_")
  → `## Roadmap` (checkbox list, links to the open-issues page) →
  `## Contributing` → `### Top contributors` → `## License` → `## Contact`
  → `## Acknowledgments`.
- **Worth noting the tension:** this template puts *About* and *screenshots*
  before usage, which is the opposite of art-of-readme's funnel. It optimises
  for a browsing human evaluating a product; art-of-readme optimises for a
  developer evaluating a dependency. Pick deliberately.

### PurpleBooth/a-good-readme-template
- **URL:** https://github.com/PurpleBooth/a-good-readme-template
- **Stars:** ~493
- **What:** Billie Thompson's template, originally a widely-forked gist. The
  ancestor of a large fraction of README templates in the wild.
- **Exact section order:** Project Title → one-paragraph description →
  `## Getting Started` → `### Prerequisites` → `### Installing` ("A step by step
  series of examples… End with an example of getting some data out of the system
  or using it for a little demo") → `## Running the tests` → `### Sample Tests`
  → `### Style test` → `## Deployment` → `## Built With` → `## Contributing` →
  `## Versioning` (SemVer + link to tags) → `## Authors` → `## License` →
  `## Acknowledgments`.
- **Distinctive element:** it is the only common README template that reserves
  first-class sections for **running the tests** and **deployment**.

### race2infinity/The-Documentation-Compendium
- **URL:** https://github.com/race2infinity/The-Documentation-Compendium
  (formerly kylelobo/…)
- **Stars:** ~6,030
- **What:** a bundle of templates — README, PR, issue, CONTRIBUTING, code of
  conduct, coding guidelines, **codebase structure**, changelog, TODO — plus a
  best-practices list.
- **Rules it states:** "Keep things brief." "Use headings frequently. This
  breaks things up when reading and often it is good for linking to specific
  information." "Link to other places in the documentation often but only for
  additional information. Readers should not have to navigate through several
  pages to find information regarding one specific thing. Just inline the
  immediately relevant information and link off if they want to know more."
  "Use as many code snippets, CLI, etc. examples as possible."
  Avoid list: "Don't assume prior knowledge about the topic." "Don't use idioms.
  Write using more formal terms that are well defined. This makes it easier for
  non-native English speakers and for translations." "Don't clutter explanations
  with overly detailed examples." Gender-neutral pronouns throughout.

### matiassingers/awesome-readme
- **URL:** https://github.com/matiassingers/awesome-readme
- **Stars:** ~21,397
- **What:** a curated list of ~200 exemplary READMEs, each annotated with *what
  specifically makes it good*.
- **Value as a source:** the annotations are effectively a frequency count of
  what reviewers notice. The elements that recur across almost every entry:
  project banner/logo, a small set of *relevant* badges, a clear one-line
  description of what the project does, a demo (GIF or screenshot), a table of
  contents, simple install instructions, code snippets, links for further
  reading. Several entries explicitly praise "selected badges that only show
  relevant information" — badge sprawl is a noted negative.

## 1.3 Changelog conventions

### olivierlacan/keep-a-changelog
- **URL:** https://github.com/olivierlacan/keep-a-changelog · spec at
  https://keepachangelog.com/en/1.1.0/
- **Stars:** ~6,686
- **What:** the de facto changelog standard.
- **Guiding principles (verbatim):** "Changelogs are *for humans*, not
  machines." "There should be an entry for every single version." "The same
  types of changes should be grouped." "Versions and sections should be
  linkable." "The latest version comes first." "The release date of each version
  is displayed." Mention adherence to Semantic Versioning.
- **Exact structure:** `# Changelog` → intro paragraph → `## [Unreleased]` →
  `## [X.Y.Z] - YYYY-MM-DD` (newest first) → grouped `### <Type>` headings.
- **The six types, in this order:** `Added`, `Changed`, `Deprecated`,
  `Removed`, `Fixed`, `Security`.
- **Date format:** ISO 8601 only, "the order of largest to smallest units:
  year, month, and day."
- **Yanked releases:** `## [0.0.5] - 2014-12-13 [YANKED]`.
- **Named antipatterns:** commit-log dumps ("noise" from merge commits and
  obscure titles); ignoring deprecations (breaking changes must be "painfully
  clear"); regional date formats; selectively omitting changes.

### vweevers/common-changelog
- **URL:** https://github.com/vweevers/common-changelog · spec at
  https://common-changelog.org
- **Stars:** ~193
- **What:** a deliberately stricter alternative to Keep a Changelog. Low star
  count, but it is the most *specific* changelog document that exists and its
  rules are the ones a linter can actually enforce.
- **Principles:** "Changelogs are for humans. Communicate the impact of changes.
  Sort content by importance. Skip content that isn't important. Link each change
  to further information."
- **Only four categories, in this order:** `Changed`, `Added`, `Removed`,
  `Fixed`. No `Deprecated` (fold into `Changed`), no `Security`, **no
  `Unreleased` section** — with a three-point argument for why an Unreleased
  section is "an unproductive workflow".
- **Entry grammar:** "Write a change using the imperative mood. It must start
  with a present-tense verb" — `Add`, `Fix`, `Bump`, `Document`, `Deprecate`,
  `Refactor`. "Each change must be self-describing, as if no category heading
  exists": write `Add write() method`, not `write() method` under an `Added`
  heading.
- **Length:** "A change should be brief and to the point, no more than one line
  long." Long descriptions belong in the commit or a linked upgrade guide.
- **References:** every change "must reference relevant commits, and should
  reference tickets or pull requests when available" — the rationale being that
  changelog entries get surfaced out of context by Dependabot.
- **Sorting:** "breaking changes first, then by other importance, then
  latest-first."
- **Noise to exclude:** dotfile changes, dev-only dependency bumps, minor code
  style, docs formatting. Noise **not** to exclude: refactorings, changes to
  supported runtime environments, code style changes that use new language
  features, and newly-added documentation for a previously-undocumented feature.
- **Rephrasing rules:** merge related changes (two bumps of the same dep become
  one range); drop no-op changes that cancel each other out; normalise
  specificity — `Bump json-parser from 2.x to 3.x`, not `Upgrade json-parser
  from 2.2.0 to 3.0.1` and not `Bump xml-parser`.

### conventional-commits/conventionalcommits.org
- **URL:** https://github.com/conventional-commits/conventionalcommits.org ·
  spec at https://www.conventionalcommits.org/en/v1.0.0/
- **Stars:** ~9,201
- **What:** the commit-message convention that most changelog automation reads.
- **Shape:** `<type>[optional scope]: <description>` / blank line / `[optional
  body]` / blank line / `[optional footer(s)]`.
- **Rules:** `feat` → MINOR, `fix` → PATCH. Scope is "a noun describing a
  section of the codebase surrounded by parenthesis". Breaking changes signalled
  either by `!` before the colon or a `BREAKING CHANGE:` footer; `BREAKING
  CHANGE` must be uppercase, everything else is case-insensitive; `BREAKING-
  CHANGE` is a synonym in footers. Footer tokens use hyphens rather than spaces
  (`Reviewed-by`).
- **Caveat worth carrying:** Common Changelog explicitly names Conventional
  Commits as an *antipattern* for changelogs — machine-generated changelogs from
  commit types reproduce the commit-log-dump problem. Use it for commits, do not
  use it as your changelog.

## 1.4 ADR tooling and templates

### npryce/adr-tools
- **URL:** https://github.com/npryce/adr-tools
- **Stars:** ~5,647
- **What:** Nat Pryce's shell CLI (`adr new`, `adr link`, `adr generate toc`)
  implementing Michael Nygard's ADR format. The reference implementation.
- **Template — exact section order, verbatim:**
  ```
  # NUMBER. TITLE

  Date: DATE

  ## Status
  ## Context     — "The issue motivating this decision, and any context that
                    influences or constrains the decision."
  ## Decision    — "The change that we're proposing or have agreed to implement."
  ## Consequences— "What becomes easier or more difficult to do and any risks
                    introduced by the change that will need to be mitigated."
  ```
  Four sections. That is the whole format, and its brevity is the point.

### adr/madr
- **URL:** https://github.com/adr/madr · https://adr.github.io/madr/
- **Stars:** ~2,439
- **What:** Markdown Any Decision Records. Nygard plus explicit option
  comparison. Ships both a minimal and a full template.
- **Full template — exact order:** YAML front matter (`status`, `date`,
  `decision-makers`, `consulted`, `informed`) → `# {short title, representative
  of solved problem and found solution}` → `## Context and Problem Statement`
  ("two to three sentences… You may want to articulate the problem in form of a
  question") → `## Decision Drivers` (optional) → `## Considered Options` →
  `## Decision Outcome` (must open with `Chosen option: "<X>", because <reason>`)
  → `### Consequences` (bulleted, each prefixed `Good, because` / `Bad,
  because`) → `### Confirmation` (how compliance will be verified — an
  ArchUnit test, a code review, a fitness function) → `## Pros and Cons of the
  Options` (per option, bullets prefixed `Good, because` / `Neutral, because` /
  `Bad, because`) → `## More Information`.
- **The `Good, because` / `Bad, because` / `Neutral, because` prefix is a
  genuinely enforceable rule** and the most distinctive thing MADR contributes:
  it forces every listed consequence to carry a reason.

### architecture-decision-record/architecture-decision-record
- **URL:** https://github.com/joelparkerhenderson/architecture-decision-record
  (redirects to the `architecture-decision-record` org)
- **Stars:** ~16,798
- **What:** Joel Parker Henderson's collection — the largest set of ADR
  templates in one place: Nygard, Tyree & Akerman, Alexandrian pattern, business
  case, MADR, Planguage, and ITD.
- **File-naming convention:** "The name has a present tense imperative verb
  phrase" — `choose-database.md`, `format-timestamps.md`, `handle-exceptions.md`
  — lowercase, dash-separated, `.md`.
- **Characteristics of a good ADR:** *Rationale* (reasons, context, pros/cons,
  cost/benefit); *Specific* ("Each ADR should be about one AD, not multiple
  ADs"); *Timestamps*; *Immutable* — "Don't alter existing information in an
  ADR. Instead, amend the ADR by adding new information, or supersede the ADR by
  creating a new ADR."
- **Consequences section rules:** state what follows from the decision; note any
  subsequent ADRs it triggers; include after-action review process ("It's
  typical for teams to review each ADR one month later, to compare the ADR
  information with what's happened in actual practice").

### arc42/arc42-template
- **URL:** https://github.com/arc42/arc42-template · https://arc42.org/overview
- **Stars:** ~1,275
- **What:** the standard architecture-documentation template, in AsciiDoc,
  Markdown, docx and more, CC BY-SA 4.0, in use since 2005. Where ADRs cover one
  decision, arc42 covers the whole system.
- **Exact section order (12, fixed):** 1 Introduction & Goals · 2 Constraints ·
  3 Context & Scope · 4 Solution Strategy · 5 Building Block View · 6 Runtime
  View · 7 Deployment View · 8 Crosscutting Concepts · 9 Architectural
  Decisions · 10 Quality Requirements · 11 Risks & Technical Debt · 12 Glossary.
- Section 9 is where ADRs live, which makes arc42 and MADR complementary rather
  than competing.

## 1.5 API documentation

### jamescooke/restapidocs
- **URL:** https://github.com/jamescooke/restapidocs
- **Stars:** ~549
- **What:** Markdown templates for hand-written REST endpoint docs, derived from
  iros's widely-copied documentation gist. Unlicensed — copy freely.
- **Exact per-endpoint structure:**
  ```
  # <Verb-phrase title>
  <One or two sentences on what this does and when.>

  **URL** : `/api/accounts/`
  **Method** : `GET`
  **Auth required** : YES
  **Permissions required** : None
  **Data constraints** : `{}`

  ## Success Responses
  **Condition** : ...
  **Code** : `200 OK`
  **Content** : <example JSON>
  ### OR              ← repeated per distinct success condition

  ## Error Responses
  **Condition** : ...
  **Code** : `401 UNAUTHORIZED`
  **Content** : <example JSON>
  ```
- **The rule that carries:** every response is stated as a
  *(condition, code, content)* triple, and there is one triple per distinct
  condition. This is the thing hand-written API docs almost always get wrong —
  they document the happy path and one generic error.

### OAI/OpenAPI-Specification
- **URL:** https://github.com/OAI/OpenAPI-Specification
- **Stars:** ~31,198
- **What:** the machine-readable schema most API reference sites are generated
  from. Included here because it defines the *field set* a reference entry is
  expected to carry — `summary`, `description`, `operationId`, `parameters`
  (each with `name`, `in`, `required`, `schema`, `description`), `requestBody`,
  `responses` keyed by status code, `examples`, `deprecated`.
- **Transferable rule:** OpenAPI's `summary` (short, one line) versus
  `description` (long, CommonMark) split is the same intro/body split that
  GitHub's content model enforces. If you are writing reference prose by hand,
  the OpenAPI field list is a good completeness checklist.

## 1.6 Style guides published as repos

### MicrosoftDocs/microsoft-style-guide
- **URL:** https://github.com/MicrosoftDocs/microsoft-style-guide · rendered at
  https://learn.microsoft.com/en-us/style-guide/welcome/
- **Stars:** ~191
- **What:** the public contribution repo for the Microsoft Writing Style Guide.
  Low stars, high authority — this is the guide most enterprise docs teams
  default to.
- **Core rules it is known for:** the "top 10 tips" — use bigger ideas and fewer
  words; write like you speak; use contractions; lead with verbs; use second
  person and the imperative; prefer active voice; use sentence case for headings
  and titles; keep sentences short (aim under 25 words); avoid "please", "simply"
  and "just"; write for scanning, with the most important information first.

### writethedocs/www
- **URL:** https://github.com/writethedocs/www · guide at
  https://www.writethedocs.org/guide/
- **Stars:** ~1,366
- **What:** the Write the Docs community site and documentation guide — the
  closest thing the discipline has to a canonical reading list.
- **Structural rules from the beginner's guide:** the six things a project's
  docs must contain — a **problem statement** ("clearly state what your project
  does and why"), a **code example** ("Show a common example use case"),
  **installation** ("Keep your install instructions to a couple of lines for the
  basic case"), **contribution guidelines**, **support/community information**,
  and a **licence** ("only pick one standard license").
- **Named antipattern:** FAQs as primary documentation — they "become quickly
  outdated" and "accumulate disparate content on unrelated topics."

### google/season-of-docs
- **URL:** https://github.com/google/season-of-docs
- **Stars:** ~575
- **What:** the supporting-materials repo for Google's Season of Docs
  programme — project-proposal templates, case studies, and the docs-metrics
  guidance. Adjacent to it and worth naming: Google's free technical writing
  courses at https://developers.google.com/tech-writing, whose rules ("Use
  active voice", "Use short sentences", "Focus each paragraph on a single
  topic", "Answer what, why, how", the who/what/when/where/why/how discipline)
  are the most widely-cited baseline for technical prose.

### cncf/techdocs
- **URL:** https://github.com/cncf/techdocs
- **Stars:** ~56
- **What:** the CNCF Technical Documentation team's repo. Small, but it contains
  something none of the others do: **published documentation analyses of real
  open-source projects**, scored against a repeatable rubric, under
  `analyses/`.
- **Value:** the analysis checklist is an evaluation instrument rather than a
  template — it grades docs on comprehensiveness, structure/information
  architecture, maintainability, website mechanics, and contributor
  documentation. Useful as an audit rubric rather than as a writing template.

## 1.7 Curated lists

### matheusfelipeog/beautiful-docs
- **URL:** https://github.com/matheusfelipeog/beautiful-docs (formerly
  PharkMillups/…)
- **Stars:** ~9,524
- **What:** pointers to "useful, well-written, and otherwise beautiful
  documentation" — full doc sites, not just READMEs. The counterpart to
  awesome-readme at the site level.

### BolajiAyodeji/awesome-technical-writing
- **URL:** https://github.com/BolajiAyodeji/awesome-technical-writing
- **Stars:** ~2,297
- **What:** a curated list of technical-writing resources — articles, books,
  videos, tools, courses, podcasts, communities, and style guides. The best
  single index for finding the primary sources behind everything above.

## 1.8 Documentation-about-documentation (the generators)

### squidfunk/mkdocs-material
- **URL:** https://github.com/squidfunk/mkdocs-material
- **Stars:** ~27,359
- **What:** the most-used MkDocs theme, and one of the best-documented projects
  on GitHub — its own docs are a worked example of the reference/how-to split.
- **Conventions it imposes:** YAML front matter with `title`, `description`,
  `icon`, `status` (`new` / `deprecated`), `subtitle`, `template`. A reference
  section per authoring primitive: admonitions, annotations, buttons, code
  blocks, content tabs, data tables, diagrams, footnotes, formatting, grids,
  icons/emoji, images, lists, math, tooltips. Navigation is declared explicitly
  in `mkdocs.yml` — the nav tree is a hand-authored artefact, not derived from
  the filesystem.

### facebook/docusaurus
- **URL:** https://github.com/facebook/docusaurus
- **Stars:** ~66,142
- **What:** the React documentation framework. Relevant here for the structure
  it forces on you.
- **Conventions it imposes:** a four-level hierarchy — individual pages →
  sidebars → versions → plugin instances. Docs live in `docs/`; the route
  structure mirrors the folder structure. Front matter: `id`, `title`,
  `sidebar_label`, `sidebar_position`, `slug`. First-class **versioned docs**,
  which is the structural feature most hand-rolled docs sites lack and then
  regret.

### docsifyjs/docsify
- **URL:** https://github.com/docsifyjs/docsify
- **Stars:** ~31,494
- **What:** a runtime Markdown site generator — no build step, no generated HTML.
- **Convention it imposes:** the whole site structure is three files —
  `index.html` (config), `README.md` (home page), `_sidebar.md` (the nav tree,
  hand-written as a nested Markdown list). The extreme opposite of Docusaurus:
  structure is a single hand-maintained list, which makes drift between the
  sidebar and the files on disk the characteristic failure mode.

---
# Job 2 — Email and short professional correspondence

29 sources, all opened and verified. Grouped by the question they answer.
Where a famous source is dead or blocked, that is stated rather than papered
over — see §2.8.

## 2.1 Brevity conventions

### Mike Davidson — the origin of the sentenc.es convention
- **URL:** https://mikeindustries.com/blog/archive/2007/07/fight-email-overload-with-sentences
- **What:** "A Low-Fi Solution to E-Mail Overload: Sentenc.es", Mike Industries,
  17 July 2007. This is the post that created the whole five.sentenc.es family.
- **Rules:** "Every e-mail I send to anyone, regardless of subject or recipient,
  will be five sentences or less." The rationale is the useful part: email's
  cost is asymmetric — cheap to send, expensive to receive — and inboxes get
  triaged by *ease of reply*, not by importance, so hard-to-answer emails rot.
  A fixed cap removes the reply barrier. Set expectations with a signature line
  pointing at the convention.
- **⚠️ The sentenc.es domains are dead.** `five.sentenc.es`, `four.`, `three.`
  and `two.` all resolve but serve a DreamHost "Site Not Found" placeholder
  behind a self-signed certificate (curl returns TLS failure / `000`).
  `one.sentenc.es` is NXDOMAIN. The widely-quoted line "Less than five sentences
  is often abrupt and rude, more than five sentences wastes time" could not be
  verified against any live primary page. **Cite Davidson's post, not the
  domains.**

### The Email Charter — Chris Anderson (TED) and Jane Wulf
- **URL:** https://www.emailcharter.info/ (the original `emailcharter.org` is
  NXDOMAIN). Adapted 11-rule version at https://email-charter.github.io/
- **What:** the 10-rule charter written to attack email overload as a
  collective-action problem rather than a personal-productivity one.
- **Rules that transfer:**
  - "Short or Slow Responses are Not Rude." "It's ok to be brief. Don't take
    brevity personally and know that others won't." — this is the permission
    slip the five-sentence rule depends on.
  - "Start with a subject line that clearly labels the topic. Try including a
    status category `[Info]`, `[Action]`, `[Time Sens]`, `[Low Priority]`."
  - "Stop Open-Ended Questions… Email generosity requires simplifying
    easy-to-answer questions." Replace "Thoughts?" with a menu: "Can I help by
    a) calling, b) visiting, or c) staying out of it?"
  - "If your email message can be expressed in half a dozen words, just put it
    in the subject line, followed by EOM."
  - "If you need to include the email trail showing the context, cut what's not
    relevant."
  - "You don't need to reply to every email, especially not those that are
    themselves clear responses."
  - From the adapted version: "if exceeding five sentences, lead with your
    primary purpose" (an explicit BLUF trigger), and "Limit email threads to
    three messages maximum" — after three, switch to a call.

## 2.2 The empirical data on what gets replies

### Boomerang — "7 Tips for Getting More Responses to Your Emails (With Data!)"
- **URL:** https://blog.boomerangapp.com/2016/02/7-tips-for-getting-more-responses-to-your-emails-with-data/
- **What:** Boomerang blog, 12 Feb 2016, n = **40+ million emails**. Ten years
  old and still the largest published dataset on email structure. Vendor
  research, so treat as directional — but the sample size is real and the
  findings are the most-replicated in this space.
- **Numbers:**
  | Variable | Finding |
  |---|---|
  | Reading level | **3rd grade is optimal — 36% lift over college level**, 17% over high-school |
  | Length | **50–125 words** is the sweet spot (~50% response). ~44% at 500 words. **Under 50 words falls off as hard as 2,000 words** (~44%) |
  | Subject length | **3–4 words** got the most replies (~48%). No subject at all: 14% |
  | Questions | Asking **1–3 questions is 50% more likely** to get a reply than asking none. 8+ questions is 20% *worse* than 3 |
  | Sentiment | Slightly-to-moderately positive **or** negative both beat neutral by **10–15%** (optimum ≈ 0.35 either way) |
  | Subjectivity | Opinionated beats purely objective |
- **The sentiment finding is the most important one in this whole document.**
  Flat, hedged, affectless prose is the single worst-performing register — and
  it is exactly the LLM default. Having an opinion is simultaneously a
  response-rate lever *and* an anti-AI tell.

### Boomerang — ALL CAPS subject lines
- **URL:** https://blog.boomerangapp.com/2017/05/the-one-thing-you-should-never-do-in-an-email-subject-based-on-data/
- **What:** 9 May 2017. n = 1,687 all-caps subjects out of 300,129+ emails.
- **Rule:** all-caps subject lines "received a reply 30% less often" —
  **34.6% vs 50.0%**. Also raises spam-filter risk.

### Nielsen Norman Group — "How Users Read on the Web"
- **URL:** https://www.nngroup.com/articles/how-users-read-on-the-web/
- **What:** Jakob Nielsen, 30 Sept 1997. Old, and still the reference citation.
- **Numbers and rules:** "79 percent of our test users always scanned any new
  page they came across; only 16 percent read word-by-word." Measured usability
  lifts against a control: **concise text +58%, scannable layout +47%,
  objective (non-promotional) language +27%, all three combined +124%.**
  "one idea per paragraph (users will skip over any additional ideas if they are
  not caught by the first few words)." Inverted pyramid — conclusion first.
  "half the word count (or less) than conventional writing." Users "detested
  'marketese'"; promotional language "imposes a cognitive burden."

### Nielsen Norman Group — "Plain Language Is for Everyone, Even Experts"
- **URL:** https://www.nngroup.com/articles/plain-language-experts/
- **What:** Hoa Loranger, 8 Oct 2017.
- **Rules:** "Sentences should be no more than 15–20 words." For expert
  audiences "Writing at the 10–12th grade reading level is appropriate", but
  "text beyond the 12th grade reading level requires too much mental effort,
  even for highly educated people." "aim to use fewer than 50% of the words you
  would use in a printed publication." Directly rebuts the write-densely-for-
  senior-people instinct: educated readers "crave succinct information that is
  easy to scan, just like everyone else."

### Writing for Busy Readers — Todd Rogers & Jessica Lasky-Fink (Harvard)
- **URL:** https://writingforbusyreaders.com/ai-prompt/
- **What:** companion site to the book, "drawn from hundreds of scientific
  studies", behavioural-science-based, field-experiment-backed.
- **The six principles, verbatim:** "Use enough formatting, but no more" ·
  "Design for navigation (everyone skims!)" · "Less is more" · "Make reading
  easy" · "Tell readers why they should care" · "Make responding easy".
- **⚠️** The free pages give principle *names* only. The underlying experiment
  data is in the book and journal articles, not on the site.

## 2.3 Plain-language style manuals

### Plain English Campaign — *How to write in plain English*
- **URL:** https://www.plainenglish.co.uk/free-guides (the guide is the
  `howto.pdf` link on that page; the older
  `plainenglish.co.uk/how-to-write-in-plain-english.html` **404s**)
- **Rules (verbatim):** "Keep your sentence length down to an average of 15 to
  20 words." "This does not mean making every sentence the same length. Be
  punchy. Vary your writing by mixing short sentences (like the last one) with
  longer ones (like this one)." "Follow the basic principle of sticking to one
  main idea in a sentence, plus perhaps one other related point." "Prefer short
  words. Long words will not impress your customers." "Use active verbs as much
  as possible. Say *we will do it* rather than *it will be done by us*."
  "Imagine you are talking to your reader."
  On apologies: "If you are going to apologise, do so early. If the problem is
  your fault, say so. Apologise completely and concisely, sympathetically and
  sincerely."
  Explicitly permits starting sentences with *and*, *but*, *because*, *so*,
  *however*; splitting infinitives; ending on a preposition.
- **The varied-sentence-length rule is worth flagging** — it is the one
  plain-English rule LLMs reliably break, because their output has unusually
  uniform sentence length.

### GOV.UK / Government Digital Service
- **URLs (all verified; the old `gov.uk/guidance/content-design/writing-for-gov-uk`
  now 301s here):**
  - Clear language: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-language/
  - Clear structure: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-structure/
  - Clear titles: https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/writing-guidelines/clear-titles/
- **Language rules:** "Try to split up sentences that are over 25 words long."
  "Paragraphs should have no more than 5 sentences each." Active voice. "Do not
  use formal or long words when easy or short ones will do" — *purchase*→*buy*,
  *assist*→*help*, *approximately*→*about*. Avoid nominalisations (words ending
  "–ion" and "–ment"). Reserve **must** for obligations, **need** for
  requirements, **can** for options.
- **Structure rules:** "Put the most important information first. The quicker
  you get to the point, the greater the chance your users will see the
  information you want them to." Headings must be descriptive ("avoid generic
  headings like 'Introduction'"), front-loaded, and active — "start them with a
  verb when possible, like 'Apply for a driving licence'". Not questions.
  Users "only read 20 to 28% of text on a webpage" and read in an F-shape.
  **"Do not repeat summary content in the first paragraph"** — i.e. don't
  restate the subject line as your opening sentence.
- **Title rules (transfer directly to subject lines):** "Your title should be 65
  characters or less (including spaces)" because search truncates around there —
  the same truncation logic governs inbox preview panes. Must make sense by
  itself, out of context. Active verb ("Submit") when the reader acts; present
  participle ("Submitting") for guidance. Don't repeat words; don't include the
  content type; use the words your audience actually uses.

### Microsoft Writing Style Guide
- **URLs:** https://learn.microsoft.com/en-us/style-guide/top-10-tips-style-voice
  and https://learn.microsoft.com/en-us/style-guide/scannable-content/
  (public contribution repo: https://github.com/MicrosoftDocs/microsoft-style-guide)
- **Rules:** "Use bigger ideas, fewer words… Shorter is always better." Their
  worked example is the single best demonstration in any of these guides: "If
  you're ready to purchase Office 365 for your organization, contact your
  Microsoft account representative." → **"Ready to buy? Contact us."**
  "Get to the point fast. Lead with what's most important. Front-load keywords
  for scanning." "**Prune every excess word.**" "Write like you speak. Read your
  text aloud." "Project friendliness. Use contractions like *it's*, *you'll*,
  *you're*, *we're*, and *let's*." "Most of the time, start each statement with
  a verb. Edit out *you can* when it isn't necessary. Avoid weak phrasing like
  *there is*, *there are*, and *there were*." Sentence case, not Title Case.
  From the scannable-content page: **"1. Use short, simple words. 2. Get to the
  point. 3. Then stop."** and "**Three to seven lines is about the right length
  for a paragraph.**"

### Federal Plain Language Guidelines (Digital.gov)
- **URL:** https://digital.gov/guides/plain-language — note
  `plainlanguage.gov/guidelines/` now **301s** here. Sub-pages:
  `/principles` and `/writing`.
- **Rules:** "write for your audience" is rule one — calibrate to "your
  audience's current level of knowledge, expertise, and interest." "Organize
  the information. Prepare readers for what to expect. **Summarize lengthy
  documents up-front.**" "Have a topic sentence." Active voice. Present tense —
  "the simplest and strongest form of a verb… makes your writing simpler, more
  direct, and more forceful." Kill hidden verbs (nominalisations ending "-ment,
  -tion, -sion, -ance"). The framing line worth keeping: "people do not curl up
  in front of the fire with a federal regulation."
- **⚠️** The rebuilt Digital.gov version is noticeably thinner than the old
  plainlanguage.gov PDF and has lost most of the specific numeric rules.

### Mailchimp Content Style Guide — email chapter
- **URL:** https://styleguide.mailchimp.com/writing-email-newsletters/ (note the
  `writing-` prefix; `/email-newsletters/` **404s**) and
  https://styleguide.mailchimp.com/writing-principles/
- **Rules:** "Keep your subject line descriptive. There's no perfect length, but
  some email clients display only the first words." — a useful counterweight to
  Boomerang's "3–4 words": front-load regardless of length. Sentence case.
  **"Tell—don't sell—what's inside."** Preheader gives "the info readers need
  when they're deciding if they should open." Body: "connect each paragraph to
  your main idea"; most important content first. "Make the next step clear" —
  one CTA. "Limit links to the most important resources to focus your call to
  action." Principles: "Clear: Use simple words and sentences." "Write like a
  human." "Tell readers what they need to know, not just what we want to say."
  "Avoid dramatic storytelling and grandiose claims."

### UNC Writing Center — Effective Email Communication
- **URL:** https://writingcenter.unc.edu/tips-and-tools/effective-e-mail-communication/
  (note the hyphen in `e-mail`; the un-hyphenated slug 404s. The page 403s to
  curl but loads fine in a browser/fetcher — it is UA-gated, not dead.)
- **Rules:** **"Briefly state your purpose for writing in the very beginning of
  your message."** — the cleanest citable anti-throat-clearing rule found.
  "Email subject lines are like newspaper headlines. They should convey the main
  point of your message or the idea that you want the reader to take away."
  Avoid one-word subjects like "Hi" or "Question". One idea per email: use
  "separate emails if you have many unrelated points or questions." Email is the
  wrong medium when "Your message is long and complicated or requires additional
  discussion that would best be accomplished face-to-face." Tone warning: "your
  words are not supported by gestures, voice inflections, or other cues, so it
  may be easier for someone to misread your tone."

## 2.4 Cold outreach

### Y Combinator — "How to Email Early Stage Investors" (Michael Seibel)
- **URL:** https://www.ycombinator.com/blog/how-to-email-early-stage-investors/
- **Rules — the whole email is three sentences:**
  1. "Clearly explain what you do. Avoid any jargon or complex terms."
  2. "Sell me on why I should be excited" — traction, market, launch, notable
     people. Explicitly **not** your credentials or background.
  3. "Ask for what you want" directly — and **do not ask for a call or
     meeting**: "Let me escalate things."
- **Omit:** walls of text ("Walls of text result in slow/no replies"), résumé
  detail, awards, personal story, compliments, persuasion tactics, requests for
  warm intros. Don't email from a non-company address. Don't substitute LinkedIn
  or Twitter for email.
- **The escalation rule is the sharpest idea in this section:** ask for the
  *smallest* thing and let the recipient upgrade the interaction themselves.

### Paul Graham — "Write Like You Talk"
- **URL:** https://paulgraham.com/talk.html
- **Rules:** one test, applied sentence by sentence in revision — **"Is this the
  way I'd say this if I were talking to a friend?"** Three mechanics: read the
  whole thing aloud before sending and "fix everything that doesn't sound like
  conversation"; if a draft is stiff, explain it to a friend out loud and
  "replace the draft with what you said"; fix phonetically awkward phrases even
  when they're grammatical. Reject words nobody says aloud. "Complex sentences
  aren't necessary for complex ideas."
- **Why it belongs here:** this is a manual de-AI-ifier. Almost every tell in
  §2.7 fails the read-aloud test — nobody says "serves as a testament to" out
  loud to a friend.

### Patrick McKenzie — "Don't Call Yourself A Programmer, And Other Career Advice"
- **URL:** https://www.kalzumeus.com/2011/10/28/dont-call-yourself-a-programmer/
- **What:** kalzumeus.com, 28 Oct 2011. Career advice, not a cold-email post
  specifically — no dedicated patio11 cold-email essay was found at kalzumeus
  or bitsaboutmoney.
- **Rules that transfer to outreach:** "You should be able to explain what you
  do to a bright 8 year old, the CFO of your company, or a programmer in a
  different specialty." Translate technical fact into business consequence —
  "Reduced 99th percentile query times by 200 ms" becomes "made the system
  faster for customers." "The dominant quality which gets you jobs is the
  ability to give people the perception that you will create value." "Modesty is
  not a career-enhancing character trait" — target "restrained, confident
  professionalism." "Networking just means a) meeting people who at some point
  can do things for you (or vice versa) and b) making a favorable impression on
  them."

## 2.5 Follow-ups

### HubSpot — "Stop sending 'just checking in' emails. Here are 22 alternatives"
- **URL:** https://blog.hubspot.com/sales/follow-up-sales-email-templates-instead-checking-in
- **Why it fails:** "just checking in" "doesn't add new value or pique the
  prospect's curiosity" and reads as "a guilt trip." The deeper problem is that
  it offloads the work — it asks the recipient to summarise their own position
  back to you.
- **The replacement pattern:** every alternative supplies *a reason to be
  writing today*. Verbatim openers worth adapting:
  - "Last time we spoke, you mentioned you're currently focused on…"
  - "Great post on [network] about [topic]. Your comment about X was…"
  - "I saw that [competitor] has been doing [initiative] lately…"
  - "You likely deal with [pain], so I thought I'd share a quick tip…"
  - The graceful exit: "I haven't heard back from you, so you must be busy or no
    longer interested…"
- **Cadence data:** average cold-email reply rate **5.6%**; after the first
  follow-up **6.9%** (a ~49% relative lift); **optimal wait ≈ 3 days**;
  **three or more follow-ups has a negative effect on reply rate.** So: one
  follow-up is clearly worth it, a second is marginal, a third is
  counterproductive.

### Gong — "6 Cold Email Follow-Ups that Speed Up Deals"
- **URL:** https://www.gong.io/blog/sales-email-follow-up
- **Rules:** explicit prohibition — **"no following up, circling back, or
  touching base."** CTA: don't ask for a meeting, ask for *interest*; Gong
  states this is **"TWICE as effective for cold emails."** Counterintuitively,
  **"longer emails perform 15X BETTER for cold outreach follow up"** — the
  follow-up should carry new substance, not be a shorter nudge. Post-call:
  individual emails per participant, never a group email; anchor to the buyer's
  own timeline; state next steps explicitly.
- **⚠️** Gong publishes no sample sizes on this page. Treat the "15X" and "2x"
  as vendor-reported, unlike Boomerang's stated n.

## 2.6 Asking clearly

### Flynn & Bohns (2008) — "If you need help, just ask"
- **URL:** https://www.vanessabohns.com/research (the author's research index,
  carrying the full citation. The SSRN page **403s** to automated fetch.)
- **What:** Flynn, F. J. & Bohns, V. K. (2008), *Journal of Personality and
  Social Psychology*, 95, 128–143. Peer-reviewed. The research programme has
  made requests of 14,000+ strangers.
- **Findings:** people **underestimate by as much as 50%** (~48% average) how
  likely a stranger is to say yes to a **direct** request.
- **The mechanism is the usable part:** requesters fixate on the *instrumental*
  cost to the helper of saying yes, and fail to appreciate the *social* cost to
  the helper of saying no. The awkwardness of refusing a direct, face-value
  request is doing the work — not your pitch.
- **Implication:** the ask should be **direct, singular and unhedged.**
  Elaborate justification and pre-emptive apology ("I know you're incredibly
  busy, so absolutely no pressure at all…") is the requester over-weighting a
  cost the recipient isn't feeling, and it dilutes the thing that actually
  drives compliance.
- Companion papers on the same index: Bohns & Flynn (2010) "Why didn't you just
  ask?", *JESP* 46, 402–409; Bohns (2016), *Current Directions in Psychological
  Science* 25, 119–123.

### Tim Ferriss — "5 Tips for E-mailing Busy People"
- **URL:** https://tim.blog/2008/05/19/5-tips-for-e-mailing-busy-people/
- **Rules:** short, with a clear ask — specifically **"No 'let's jump on the
  phone for 10 minutes; it'll be worth your time.'"** An unspecified call is not
  an ask. Don't overstay: make one impression, then stop sending contentless
  "keeping in touch" messages. **"Explicitly state what you've done to get
  answers or help yourself."** Use indirect framing — ask if they know *anyone*
  suitable rather than whether *they* are interested; it gives an easy out and
  often gets you them anyway. **Make declining comfortable** — explicitly signal
  it's fine if they can't help; this raises response rate because it removes
  obligation.
- **Note the apparent conflict with Bohns:** Ferriss says make refusal easy;
  Bohns says don't hedge the ask. They are compatible — state the ask flatly and
  once, then give a one-clause exit. What Bohns warns against is hedging *the
  ask itself*, not offering an exit after it.

### Julia Evans — "How to ask good questions"
- **URL:** https://jvns.ca/blog/good-questions/
- **Rules, all portable to making an email answerable in under two minutes:**
  - **State what you already believe and ask "is that right?"** rather than
    posing an open question. Her worked example: instead of "Why does rkt use
    more disk space than Docker?", write out your understanding of how both
    store containers, offer hypotheses, and ask for confirmation.
  - **Ask questions with factual answers.** Not "How do SQL joins work?" but
    "Does MySQL always sort join columns first?"
  - Ask about unknown terms explicitly, so later questions are sharper.
  - Do the obvious research first, so the question you send is the one that
    actually needs a human.
  - Pick the right person — consider their time cost, and whether someone less
    senior can answer just as well.

## 2.7 Reply conventions

### useplaintext.email
- **URL:** https://useplaintext.email/
- **Rules:** top-posting is "discouraged" — "Because it reverses the logical flow
  of conversation." Prefer inline replying: "edit the original email more,
  quoting it several times to make it clear what points you are responding to."
  "Quote each line of the original message with `>` and a single space." Wrap at
  **72 columns**. Use `*asterisks*`, `/slashes/`, `_underscores_` or UPPERCASE
  for emphasis rather than rich text.

### RFC 1855 — Netiquette Guidelines
- **URL:** https://www.rfc-editor.org/rfc/rfc1855.txt (IETF, FYI 28, Oct 1995)
- **Rules (verbatim):** **"Be brief without being overly terse. When replying to
  a message, include enough original material to be understood but no more."**
  **"It is extremely bad form to simply reply to a message by including all the
  previous message: edit out all the irrelevant material."** "Mail should have a
  subject heading which reflects the content of the message." "If you are
  forwarding or re-posting a message you've received, do not change the
  wording." "If you include a signature keep it short. Rule of thumb is no
  longer than 4 lines." "Limit line length to fewer than 65 characters." "In
  general, it's a good idea to at least check all your mail subjects before
  responding to a message." Governing maxim: **"Be conservative in what you send
  and liberal in what you receive."** Don't fire off an emotional reply.

### Wikipedia — "Posting style"
- **URL:** https://en.wikipedia.org/wiki/Posting_style
- **What:** the neutral both-sides reference on top-posting vs bottom-posting.
- **Rules:** *For top-posting (TOFU)* — mobile/bandwidth, preserves an apparent
  unmodified transcript for business records, is the Outlook/Gmail default, and
  is "less jarring when power dynamics exist (manager–employee)." *Against* —
  disrupts reading order, needs scrolling for context.
  *Interleaved/inline* — keeps each quote adjacent to its answer, clarifies
  exactly which point is addressed, "catches misunderstandings or ignored
  points", but costs labelling effort.
  *Trimming* — trim to only the necessary context; in later replies strip
  previously-quoted material. **Exceptions where you quote in full:** adding a
  new recipient unfamiliar with the thread, and customer-service contexts.
- **Workable synthesis:** the business-records argument for top-posting is real,
  so the defensible hybrid is — **answer in the first line, top-posted, then
  trim the quote to only what's needed.** That satisfies RFC 1855's "enough
  original material to be understood but no more" without fighting Gmail.

## 2.8 How AI-written email gives itself away

This is the best-sourced part of the whole document, because it now has
peer-reviewed backing rather than vibes.

### ★ Wikipedia: Signs of AI writing
- **URL:** https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing
  (raw wikitext verified directly for the quotes below)
- **What:** Wikipedia project-space guidance, continuously updated by editors
  doing LLM cleanup at scale, with academic citations attached to individual
  claims. By a wide margin the most detailed and specific source on this topic
  that exists in public.

**Vocabulary watch-list, by era (their own split):**
| Era | Words |
|---|---|
| 2023 – mid-2024 (GPT-4) | *Additionally, boasts, bolstered, crucial, delve, emphasizing, enduring, garner, intricate/intricacies, interplay, key, landscape, meticulous/meticulously, pivotal, underscore, tapestry, testament, valuable, vibrant* |
| mid-2024 – mid-2025 | *align with, bolstered, crucial, emphasizing, enhance, enduring, fostering, highlighting, pivotal, showcasing, underscore, vibrant* |
| mid-2025 onward | *emphasizing, enhance, highlighting, showcasing* |

Calibration note from the page: "One or two of these words appearing in an edit
may be coincidental, but an edit (post-2022) introducing lots of them, lots of
times, is one of the strongest tells for AI use." The full current list also
includes *deep dive*, *highlight* (as a verb), *robust*, *showcase*.

**Significance-inflation phrases (their "words to watch" box, verbatim):**
*stands/serves as, is a testament/reminder, a crucial/pivotal/vital/significant/
key role/moment, underscores/highlights its importance/significance, reflects
broader, symbolizing its ongoing/enduring/lasting, contributing to the, setting
the stage for, marking/shaping the, represents/marks a shift, key turning point,
evolving landscape, focal point, indelible mark, deeply rooted.*

**Superficial-analysis markers (verbatim):** *highlighting/underscoring/
emphasizing…, ensuring…, reflecting/symbolizing…, contributing to…,
cultivating/fostering…, encompassing…, enhancing…, valuable insights,
align/resonate with.* The page notes this is "often done by attaching a present
participle ('-ing') phrase at the end of sentences."

**Copula avoidance — the most mechanical tell.** LLMs won't write *is* or *has*.
They write "serves as a, stands as, marks, functions as, operates as,
represents a" instead of *is*, and "boasts / features / maintains / offers a"
instead of *has*.

**Negative parallelism**, in three templates: "Not only … but …" / "It is not
just …, it's …"; "Not X, but Y" ("not a mirror but a portal"); "X rather than
Y". Verbatim from the page: this construction "is common among human writers…
but it is stereotypically an 'AI sign.'"

**Rule of three.** "LLMs overuse the rule of three… from 'adjective, adjective,
adjective' to 'short phrase, short phrase, and short phrase'. LLMs often use
this structure to make superficial analyses appear more comprehensive."

**Typographic tells — these survive paraphrasing and are trivially greppable:**
- **Em dashes.** "AI-generated em dashes are usually surrounded by spaces,
  contrary to common typographic guidelines (which most human users of em dashes
  will be familiar with)." The page notes GPT-5.1 has been tuned to suppress
  them, so absence proves nothing.
- **Curly quotes and apostrophes.** "ChatGPT and DeepSeek typically use curly
  quotation marks (“…” or ‘…’) instead of straight quotation marks… They also
  tend to use the curly apostrophe (’)… In some cases, AI chatbots
  inconsistently use pairs of curly and straight quotation marks in the same
  response." Caveat the page makes itself: Chicago style, Word smart quotes and
  macOS defaults all produce curly quotes, so this is corroborating, not
  conclusive.
- **Title Case headings** — "In section headings, AI chatbots strongly tend to
  capitalize all main words."
- **Boldface overuse** — "emphasize every instance of a chosen word or phrase,
  often in a 'key takeaways' fashion", inherited from "readmes, fan wikis,
  how-tos, sales pitches, slide decks, listicles."
- **Headings that contain only other headings.**
- **Section summaries** — "In summary", "In conclusion", "Overall", and a
  closing "Conclusion" section restating what was just said.
- **"X and Y" section headers**, especially "Awards and recognition".
- **Inline-header vertical lists** — bulleted items of the form
  `**Bolded label:** explanatory sentence`.

**Honest caveat the page makes about itself:** "Not all text featuring these
indicators is AI-generated." It cites a 2025 study putting untrained human
detection near chance (~57%), with heavy LLM users reaching ~90%.

### Reinhart et al. (2025) — "Do LLMs write like humans? Variation in grammatical and rhetorical styles"
- **URL:** https://pmc.ncbi.nlm.nih.gov/articles/PMC11874169/ (open access; the
  publisher DOI at pnas.org **403s** to automated fetch)
- **What:** *PNAS* vol. 122 no. 8, 25 Feb 2025. Peer-reviewed. This is the
  strongest academic source on the *grammatical* rather than lexical tells, and
  the one most useful for a linter.
- **Findings — grammatical constructions LLMs overuse:**
  | Construction | Rate vs human |
  |---|---|
  | Present participial clauses | **2–5×** |
  | Nominalisations | **1.5–2×** |
  | "That" clauses as sentence subjects | **2.6×** (GPT-4o) |
  | Phrasal coordination | **1.9×** |
- **Underused:** agentless passive voice — GPT-4o uses it "at roughly half the
  rate as human texts."
- **The structural finding:** instruction-tuned models produce
  "informationally dense, noun-heavy" writing **even when prompted to match
  informal styles**, and this persists across model sizes — so it comes from
  instruction tuning, not scale. Prompting your way out of it does not work.
- **Vocabulary:** GPT-4o uses "camaraderie", "tapestry" and "palpable" at over
  **100×** human rates; "tapestry" appeared in **23%** of GPT-4o outputs.
- **The register finding:** LLM output resembles "grandiose, if hollow,
  summative sentences", misaligned with human genre conventions across academic,
  journalistic *and* conversational contexts.

### Kobak, González-Márquez, Horvát & Lause (2025) — "Delving into LLM-assisted writing in biomedical publications through excess vocabulary"
- **URLs:** https://arxiv.org/abs/2406.07016 · open-access full text
  https://pmc.ncbi.nlm.nih.gov/articles/PMC12219543/ (the *Science Advances* DOI
  **403s** to automated fetch)
- **What:** *Science Advances* vol. 11 no. 27, 2 July 2025. 15M+ PubMed
  abstracts, 2010–2024, using the "excess word" method borrowed from
  excess-mortality analysis.
- **Findings:** at least **13.5% of 2024 biomedical abstracts** show LLM
  processing, up to **40%** in some subcorpora. The effect on scientific
  vocabulary exceeded that of the Covid pandemic.
- **The key insight for writing:** in Covid years the excess words were *content*
  words ("respiratory", "remdesivir"). In 2024 the excess vocabulary is
  **"almost entirely style words"** — the tell is not what is discussed but how
  it is phrased.
- Highest frequency **ratios** (rare words that exploded): **"delves" (r = 28.0),
  "underscores" (13.8), "showcasing" (10.7)**. Highest frequency **gaps**
  (common words that surged in absolute terms): **"potential" (δ = 0.052),
  "findings" (0.041), "crucial" (0.037)**.
- Their hand-picked 10-word marker set: *across, additionally, comprehensive,
  crucial, enhancing, exhibited, insights, notably, particularly, within.*
- **Part-of-speech shift:** of 280 excess style words in 2024, **66% were verbs
  and 18% adjectives** — a reversal from prior years, where excess words were
  mostly nouns. Practical read: AI tells cluster in verbs and adjectives.

### Liang et al. (2024) — "Mapping the Increasing Use of LLMs in Scientific Papers"
- **URL:** https://arxiv.org/abs/2404.01268
- **What:** Stanford (Weixin Liang, Diyi Yang, Christopher Potts, Christopher D.
  Manning, James Zou et al.), 1 April 2024; later in *Nature Human Behaviour*.
  950,965 papers, Jan 2020 – Feb 2024.
- **Rules:** LLM modification up to **17.5%** in CS, **6.3%** in maths/Nature.
  Higher LLM modification correlates with **shorter papers**, **more crowded
  fields**, and authors who post frequently. Marker words independently derived:
  *pivotal, intricate, realm, showcasing.*
- **Methodological caveat the authors state explicitly:** their method is
  corpus-level statistical estimation, and **individual-instance detection is
  unreliable.** Any per-document "AI detector" claim should be read against this.

### Liang et al. (2025) — "The Widespread Adoption of LLM-Assisted Writing Across Society"
- **URL:** https://arxiv.org/html/2502.09747v1
- **What:** 13 Feb 2025. The most directly relevant of the three, because it
  studies business correspondence rather than papers.
- **Findings:** by late 2024, LLM-assisted share was **~18% of consumer
  complaints** (687,241 CFPB records), **~24% of corporate press releases**
  (537,413), **~10% of small-firm job postings** (out of 304.3M LinkedIn
  postings), **~14% of UN press releases**. Adoption surged 3–4 months after
  ChatGPT launched, then **plateaued by late 2023**. Firms founded after 2015
  hit 10–15% AI-modified text vs under 5% for pre-1980 firms.
- **Practical read for outreach:** roughly a fifth to a quarter of the
  professional correspondence in your recipient's inbox is already AI-shaped.
  The tells are recognised as a *category* signal — recipients are pattern-
  matching a genre, not accusing an individual.

### ⚠️ What could not be sourced
- **Recruiter- and sales-side commentary on spotting AI outreach:** searched
  and abandoned. The entire visible results page is AI-humanizer vendors
  (coverlettercopilot.ai, phrasly.ai, textora, wasitaigenerated) recycling
  unsourced statistics to sell detection evasion. None of their numbers are
  reproduced here. The one recurring folk claim — that "I am writing to express
  my strong interest in the [Position] role at [Company]" is the most-recognised
  AI cover-letter opener, alongside "proven track record" and "detail-oriented
  professional" — is **unverified**. Getting real evidence here needs named
  recruiters on Substack/LinkedIn, not open web search.
- **18F Content Guide:** `content-guide.18f.gov`, `18f.gsa.gov` and
  `guides.18f.gov` are all **NXDOMAIN**. 18F was shut down and the guide is gone
  from the open web; the GitHub raw path 404s too.
- **HBR, "How to Write Email with Military Precision"** (Kabir Sehgal, 2016):
  loads but is **paywalled**. Only the intro is readable. The BLUF and
  subject-line-tag rules everyone quotes from it are behind the wall — do not
  cite specifics.
- **Matt Angriffel, "How to get a busy person to respond to your email"**
  (Medium): **403** to automated fetch. Widely cited, unverified here.
- **Nicely Said** (Fenton & Kiefer Lee): no free authoritative source found.

## 2.9 Where the sources conflict

Worth carrying forward, because a naive synthesis would paper over these.

| Question | Conflict | Reconciliation |
|---|---|---|
| Subject-line length | Boomerang: 3–4 words. GOV.UK: ≤65 chars. Mailchimp: "no perfect length" | All three agree the **first few words must carry the meaning**. Front-load; length is secondary |
| Is shorter always better? | Microsoft: "Shorter is always better." Boomerang: under 50 words performs as badly as 2,000 | There is a **floor as well as a ceiling**. 50–125 words. This cuts against a naive reading of five.sentenc.es |
| Reading level | Boomerang: 3rd grade optimal. NN/g: 10th–12th fine for experts | Audience-dependent. Cold outreach → simplify hard. Docs for practitioners → 10th–12th is fine |
| Follow-up length | HubSpot: shorter nudges. Gong: "15X BETTER" for longer follow-ups | Gong publishes no n. But both agree the follow-up must carry **new substance**, not just a nudge |
| How direct is the ask? | Bohns: direct, singular, unhedged. Ferriss: make declining comfortable | State the ask flatly and once, **then** give a one-clause exit. Don't hedge the ask itself |
| Top vs bottom posting | useplaintext/RFC 1855: bottom or inline. Wikipedia: top-posting has real business-records and hierarchy arguments | Answer first (top), then **trim the quote** |

---

# Part 3 — Synthesis

## 3.1 Section orders and required elements

### README

Two defensible orders, and you must pick which reader you are serving.

**A — library/dependency README** (art-of-readme's cognitive funnel, formalised
by standard-readme). Optimises for a developer deciding in 30 seconds whether to
adopt.

| # | Section | Required? | Rule |
|---|---|---|---|
| 1 | Title | Yes | Matches repo, folder and package-manager name, or explains why not |
| 2 | Badges | No | No heading, newline-delimited, only badges that carry information |
| 3 | Short description | **Yes** | No heading, **<120 chars**, own line, doesn't start with `> `, matches the package-manager and GitHub description |
| 4 | Long description | No | No heading. A few paragraphs. Caveats and limitations belong here, up front |
| 5 | Table of contents | Yes if >100 lines | Links to every H2, starts at the section after itself |
| 6 | Install | Yes | **Must contain a code block.** Two lines for the basic case |
| 7 | Usage | Yes | **Must contain a runnable code block.** Comes *before* API |
| 8 | API | No | Signatures, return types, callbacks, events, caveats. Link out if generated |
| 9 | Contributing | **Yes** | Where to ask questions, whether PRs are accepted, any requirements |
| 10 | Licence | **Yes** | SPDX identifier + owner. **Must be the last section** |

**B — product/application README** (Best-README-Template). Optimises for a human
browsing. About + screenshot → Built With → Getting Started → Prerequisites →
Installation → Usage → Roadmap → Contributing → Licence → Contact →
Acknowledgments.

**Elements both orders should carry but templates usually omit:**
- **Caveats and limitations, stated up front** (art-of-readme's checklist item).
- **Project status** — say if it's unmaintained and point at forks (make-a-readme).
- **Support** — where to get help, distinct from where to contribute.
- **No critical information conveyed only by an image** (art-of-readme).

### How-to guide

| # | Section | Rule |
|---|---|---|
| 1 | Title | Task-based. Diátaxis: "How to \<do the thing\>". GitHub: gerund — "Applying for a student developer pack". Sentence case. ≤80 chars |
| 2 | Overview / intro | **One or two sentences.** States the outcome — which is usually the title restated as a result. If it needs more than two sentences of explanation, that explanation belongs in a separate concept page |
| 3 | Before you start | Prerequisites as a bulleted list: prior articles, credentials, software, network. Each with a link. Delete the section only if there genuinely are none |
| 4 | Step-by-step | Numbered. One action per step. Every code block gets a lead-in sentence. Screenshot first only when the image is faster to read than the text |
| 5 | Troubleshooting | Optional, short, at known pain points |
| 6 | Next steps / Further reading | Links not already used inline |

**Prohibitions:** no digression, no teaching, no conceptual background beyond two
sentences, no comprehensive reference material. Serve "the already-competent
user, whom you can assume to know what they want to do."

### Reference page

| # | Section | Rule |
|---|---|---|
| 1 | Title | Noun phrase. No stacked nouns — use prepositions |
| 2 | Overview | One paragraph stating what all entries on this page have in common. This is also the meta description |
| 3..n | One H2 per logical subset | Single element → list. Multiple elements → **table**. Long syntax reference → H2 per section, H3 per example |
| — | Per entry | Name · type · required/optional · **default** · **units** · constraints · description. Description must add information the name doesn't already carry |

**Prohibitions:** "describe and only describe." No instruction, no explanation,
no opinion, no speculation, no marketing. Link out instead. Structure mirrors
the structure of the product. Consistency beats variety — "Standard patterns are
what allow us to use reference material effectively."

### Explanation

| # | Section | Rule |
|---|---|---|
| 1 | Title | Passes the *about* test — "About X", "Why X works this way" |
| 2 | Overview | The one-paragraph answer, so a reader can leave here |
| 3 | Glossary | Optional but recommended: `term:: definition` for anything the reader may not share |
| 4..n | The discussion | Why things are so — design decisions, historical reasons, technical constraints. Must consider alternatives, counter-examples, or multiple approaches. May weigh contrary opinions |
| n+1 | Further reading | |

**Prohibitions:** no instructions, no technical description. If you find yourself
listing parameters or numbering steps, you are writing a different page.

### ADR

Minimum viable (Nygard / adr-tools), four sections:

```
# NNNN. <Title as an imperative verb phrase>
Date: YYYY-MM-DD
## Status        proposed | accepted | deprecated | superseded by ADR-NNNN
## Context       The issue motivating this decision, and the constraints
## Decision      The change we're proposing or have agreed to
## Consequences  What becomes easier, what becomes harder, what risks appear
```

Add from MADR when the decision was contested:
`## Decision Drivers` · `## Considered Options` · `## Decision Outcome`
(opening `Chosen option: "X", because …`) · `### Consequences` (every bullet
prefixed `Good, because` / `Bad, because` / `Neutral, because`) ·
`### Confirmation` (how compliance will be verified — a test, a review, a
fitness function) · `## Pros and Cons of the Options` · `## More Information`.
Front matter: `status`, `date`, `decision-makers`, `consulted`, `informed`.

**Hard rules:** filename is a lowercase-dashed present-tense imperative verb
phrase (`choose-database.md`). One decision per ADR. **Immutable** — never edit
an accepted ADR; amend it or supersede it with a new one. Timestamp anything
that will age (costs, scaling numbers, schedules).

### Changelog

```
# Changelog

## [1.4.0] - 2026-08-14
### Changed
- Bump `json-parser` from 2.x to 3.x (#412) (`a1b2c3d`)
### Added
- Add `write()` method (#408)
### Removed
- **Breaking:** Remove the `unsafe` option (#399) (`15d5a9e`)
### Fixed
- Prevent buffer overflow (#401) (Alice, Henry)
```

| Element | Rule |
|---|---|
| Ordering | Latest version first |
| Version heading | `## [X.Y.Z] - YYYY-MM-DD`. ISO 8601 only |
| Categories | Keep a Changelog: `Added, Changed, Deprecated, Removed, Fixed, Security`. Common Changelog: `Changed, Added, Removed, Fixed` only. Pick one and never deviate |
| Entry grammar | Imperative present-tense verb first. **Self-describing without its heading** — `Add write() method`, not `write() method` |
| Entry length | **One line.** Long descriptions live in the commit or a linked upgrade guide |
| References | Every entry links a commit; prefer also a PR or issue |
| Sorting within a group | Breaking first, then importance, then latest-first |
| Breaking changes | Prefixed `**Breaking:**` and made "painfully clear" |
| Exclude | Dotfiles, dev-only dependency bumps, code style, docs formatting, no-op pairs |
| Do **not** exclude | Refactorings, runtime-environment changes, style changes using new language features, newly-added docs for a previously-undocumented feature |

Do not generate the changelog from the commit log. Both specs name that as the
primary antipattern.

### Cold email

Total target: **50–125 words**, five sentences or fewer, **one ask**.

| # | Element | Rule |
|---|---|---|
| 1 | Subject | 3–4 words if possible, ≤65 chars regardless. Specific and meaningful out of context. Sentence case. Never all caps. Not "Question" or "Quick chat" |
| 2 | Sentence 1 | **The purpose.** No greeting-paragraph, no "I hope this finds you well", no "I wanted to reach out". Start with the thing |
| 3 | Sentence 2–3 | The one specific, verifiable, non-generic detail that could only have been written to *this* recipient. Business consequence, not technical fact |
| 4 | Sentence 4 | **The ask. Direct, singular, unhedged.** Ask for the smallest thing — interest, a yes/no, a pointer — not a meeting or "15 minutes" |
| 5 | Sentence 5 | Optional one-clause exit ("If this isn't for you, no reply needed"). One clause, not a paragraph |
| — | Register | 3rd-grade reading level. Contractions. Non-neutral sentiment — have an opinion. Read it aloud; fix anything you wouldn't say to a friend |
| — | Follow-up | **One**, after ~3 days, carrying new substance and a reason to be writing today. A second is marginal. A third hurts |

### Reply email

| # | Element | Rule |
|---|---|---|
| 1 | Line 1 | **The answer.** Not "Thanks for reaching out", not a restatement of their question |
| 2 | Body | Any qualification the answer needs. One idea per paragraph, 3–7 lines |
| 3 | The ask back | If you need something, one explicit ask with a named deliverable and a date |
| 4 | Quote | Trimmed to "enough original material to be understood but no more". Strip previously-quoted material in later replies. Quote in full only when adding a new recipient |
| — | Multiple points | If they asked several distinct questions, reply **inline** under each quoted point rather than as one prose blob |
| — | Signature | ≤4 lines |
| — | Don't | Restate the question. Answer every point at equal weight. Add a summary at the end. Close with "Let me know if you have any other questions!" |

## 3.2 Failure modes when an LLM writes each format

The pattern underneath all of these: **an LLM fills the template rather than
serving the reader.** It has the shape and not the content, so it produces
completeness where a human would produce selection. The concrete symptoms:

### README
- **Emits every section in the template, including the empty ones.**
  `## Roadmap` followed by "TBD". `## Contributing` followed by "Contributions
  are welcome! Please feel free to submit a Pull Request" — with no actual
  process, no statement of whether PRs are accepted, no place to ask questions.
  A human writes the four sections they have something to say about.
- **A Features section that is marketing, not information.** "🚀 Blazing fast",
  "🔒 Secure by default", "🎯 Type-safe", "⚡ Zero dependencies" — with no
  benchmark, no threat model, and sometimes contradicting `package.json`. This
  is exactly NN/g's "marketese", which measurably *reduced* usability by 27%.
- **A description that describes the category, not the project.** "A modern,
  lightweight, and flexible library for building X." Strip the project name and
  it fits a thousand repos. A human README says what this one does that the
  obvious alternative doesn't.
- **Usage examples that aren't runnable.** Plausible method names that don't
  exist, imports from the wrong path, a config object with invented keys. The
  single highest-value thing to check, and the thing an LLM gets wrong most
  often, because a README is prose to it and the code block is prose too.
- **No caveats, no limitations, no "doesn't do X".** LLMs do not volunteer what
  a thing can't do. art-of-readme puts caveats up front; machine READMEs have
  none anywhere.
- **Badge rows for CI, coverage and npm versions that don't exist.**
- **Title Case headings**, emoji per heading, bolded labels on every bullet.
- **Tricolon in the one-liner** — "fast, flexible, and framework-agnostic".
- A `## License` section naming MIT when there is no LICENSE file.

### How-to guide
- **Explanation smeared through the steps.** Each step arrives with a paragraph
  of background it can't help adding, which is the exact Diátaxis failure.
- **Steps that aren't verifiable.** "Configure your environment variables
  appropriately." A human writes the actual variable names.
- **`> **Note:** ` callouts that restate the step just given.**
- **A Conclusion section** summarising what the reader just did — Wikipedia
  lists closing summaries as a distinct AI sign, and no good how-to has one.
- **No prerequisites**, because the model doesn't know the environment, so it
  either omits the section or fills it with generic filler ("Basic familiarity
  with the command line").
- **Present participles trailing every step** — "…, ensuring your configuration
  is applied correctly", "…, allowing the service to start cleanly." Reinhart
  measured these at 2–5× human rates, and they are pure padding.

### Reference page
- **Tautological descriptions.** `timeout` — "The timeout." `retryCount` — "The
  number of retries." A reference page whose description column restates the
  name has zero information content, and it is the machine default because the
  name is the only input.
- **Invented parameters and options**, formatted identically to the real ones.
  Consistency of format makes hallucination *harder* to spot, not easier.
- **Missing defaults, units and nullability** — the three things a reference
  entry exists to provide and the three an LLM has no access to.
- **Hedging in a format that forbids it.** "This typically returns…", "may
  vary depending on configuration." Diátaxis: "neutrality, objectivity,
  factuality" — a hedge in reference material is a defect.
- **Explanation creeping in** — a "Why this matters" paragraph under a
  parameter table.

### Explanation / ADR
- **Straw-man alternatives.** `## Considered Options` lists three options where
  one is obviously correct and two exist to be rejected. A real ADR records a
  decision that was genuinely hard.
- **Consequences with no "Bad, because".** The MADR prefix convention exists
  precisely to force this, and machine ADRs will list four `Good, because`
  bullets and one anodyne `Bad, because` about "a slight learning curve".
- **The decision restated three times** — in Context, in Decision, in
  Consequences — via the rule of three and closing summaries.
- **No Confirmation section**, because the model cannot name a test that would
  detect a violation.
- **No date, no decision-makers, no consulted/informed** — the metadata that
  makes an ADR an artefact of a real meeting rather than a document.
- **Significance inflation instead of reasoning.** "This decision represents a
  pivotal shift in our architectural approach, underscoring our commitment to
  scalability." Every phrase in that sentence is on Wikipedia's watch-list, and
  it contains no reason.
- **Explanation pages that explain *what* rather than *why*.** The mode's whole
  job is design decisions, historical reasons and technical constraints — none
  of which are recoverable from the code, so a model writing from the code
  produces a description dressed as an explanation.

### Changelog
- **Every release has all six categories**, because the template has six. Real
  releases have one or two.
- **Entries that restate the commit subject verbatim**, including
  `chore(deps): bump …` and merge commits. The commit-log-dump antipattern,
  arrived at by a different route.
- **Entries that aren't self-describing** — bare noun phrases under a heading
  ("Support for CentOS", "New `write()` method").
- **"Improved performance and stability"** and "Various bug fixes and
  improvements" — content-free entries that exist to fill a category.
- **No references.** No commit hash, no PR number. The model has no
  provenance, so it writes prose where a link is required.
- **Dotfile and dev-dependency noise promoted to user-visible changes**, and
  conversely, a genuinely breaking change filed under `Changed` without a
  `**Breaking:**` prefix — because judging breakage requires knowing the
  consumers.
- **Fabricated dates**, or dates in a regional format.

### Cold email
- **Throat-clearing opener.** "I hope this email finds you well." "I wanted to
  reach out because…" "My name is X and I'm a Y at Z." Three sentences before
  the point, in a format with a five-sentence budget.
- **Flattery paragraph** with nothing verifiable in it — "I've been really
  impressed by the work your team is doing in this space."
- **No detail that could only apply to this recipient.** This is the definitive
  tell. Find-and-replace the company name and it works on anyone. Everything
  else on this list is cosmetic by comparison.
- **Asks for a meeting rather than for interest** — "Would you be open to a
  quick 15-minute call next week to explore synergies?" Every credible source
  in §2.4–2.6 says ask for the smaller thing.
- **Negative parallelism as a value proposition.** "It's not just about faster
  deployments — it's about giving your team their time back."
- **Tricolon everywhere** — "faster, safer, and more maintainable."
- **Perfectly uniform sentence length**, no contractions, flat-neutral
  sentiment — the empirically worst-performing register (Boomerang: any
  sentiment beats none by 10–15%).
- **Spaced em dashes and curly apostrophes** pasted straight out of the chat
  window into a plain-text mail client.
- **"Looking forward to hearing from you!"** as a close, which is an obligation
  placed on the recipient rather than an exit offered to them.
- **Over-hedged ask.** "I completely understand if you're too busy, and please
  don't feel any obligation whatsoever, but I was wondering if perhaps…" —
  Bohns's finding is that this dilutes the exact mechanism that produces a yes.

### Reply email
- **Restates the question before answering it.** "Thanks for reaching out about
  the deployment timeline! You asked whether we'd be able to ship by the 14th."
  The recipient wrote that sentence; they don't need it back.
- **"Thank you for reaching out!"** as a mandatory first line.
- **Answers every point at equal length**, including the rhetorical ones,
  because the model can't tell which one they actually care about.
- **Adds a closing summary** — "To recap: yes on the timeline, no on the budget,
  and I'll follow up on the third item." Only useful above about six points, and
  machine replies add it at two.
- **"Let me know if you have any other questions!"** on every reply.
- **Hedges a direct answer into uselessness.** Asked "can we ship by the 14th?"
  it produces three sentences of qualification and never says yes or no.
- **Never trims the quote**, because trimming requires deciding what the
  recipient already knows.
- **Won't reply inline** even when the message has five distinct questions,
  because prose is its default mode.

## 3.3 What a linter can check, and what needs judgement

### Mechanically checkable — build these

**Structure and order**
- Required sections present, correct titles, correct order (standard-readme,
  Keep a Changelog, Nygard ADR, Good Docs templates).
- Licence is the last section. ToC present when the file exceeds 100 lines.
  ToC anchors resolve. All links resolve (HTTP check).
- Short description <120 chars, on its own line, doesn't begin `> `.
- Install and Usage sections each contain at least one fenced code block.
- Headings that contain only other headings, with no prose between.
- Changelog: version-heading regex, ISO 8601 dates, latest-first ordering,
  category names drawn from the chosen closed set and appearing in the specified
  order, one line per entry, every entry carries a reference link, every entry
  starts with a present-tense imperative verb from a known list.
- ADR: the four required headings; filename matches
  `^[0-9]{4}-[a-z0-9-]+\.md$` with an imperative-verb first token; consequence
  bullets start with `Good, because` / `Bad, because` / `Neutral, because`.
- Commit messages against the Conventional Commits grammar.

**Countable prose properties**
- Sentence length >25 words (GOV.UK). Average sentence length outside 15–20
  (Plain English, NN/g).
- Paragraph >5 sentences (GOV.UK) or >7 lines (Microsoft).
- Email body outside 50–125 words. Sentence count >5.
- Subject line: word count, >65 chars, ALL CAPS, one-word subjects on a
  denylist ("Hi", "Question", "Quick chat", "Following up").
- Question count outside 1–3.
- Reading level (Flesch-Kincaid) against a configured target — with the target
  differing by artefact, since Boomerang and NN/g disagree for good reason.
- **Sentence-length variance.** Uniformly-lengthed sentences are a strong tell
  and nobody lints for it. Plain English explicitly asks for variance.

**Typography — highest value per line of code, because these survive
paraphrasing**
- Em dash surrounded by spaces: `\s—\s`.
- Curly quotes and apostrophes: `[""''‛‟]`; and mixed curly/straight within one
  document.
- Title Case in headings (multiple capitalised non-function words).
- Bolded inline list labels: `^\s*[-*]\s+\*\*[^*]+:\*\*\s`.
- Emoji in headings.
- Line length >72 (plain-text mail) or >65 (RFC 1855).
- Signature >4 lines.

**Lexical and syntactic denylists**
- The Wikipedia AI-vocabulary list, era-weighted, scored by *density* rather
  than presence — the page's own calibration is that one or two are
  coincidental, many are diagnostic.
- Significance-inflation phrases ("stands as a testament to", "plays a crucial
  role in", "underscores the importance of", "marks a pivotal", "indelible
  mark", "evolving landscape").
- Copula avoidance: `\b(serves as|stands as|functions as|operates as|represents
  a|boasts|features a|maintains a)\b`.
- Negative parallelism: `not (just|only) .{0,80}(but|it's|—)`,
  `isn't .{0,60} (it's|but)`, `rather than` in a summative clause.
- Closing summaries: `^(In summary|In conclusion|Overall)`, a trailing
  `## Conclusion` heading.
- Email throat-clearing: "I hope this email finds you well", "I wanted to reach
  out", "I hope you're doing well", "Just circling back", "Just checking in",
  "Just following up", "Touching base", "Per my last email".
- Email closes: "Looking forward to hearing from you", "Let me know if you have
  any other questions", "Please don't hesitate to reach out".
- Weak phrasing (Microsoft): "there is", "there are", "there were", unnecessary
  "you can".
- Nominalisations: words ending `-tion|-ment|-sion|-ance` above a density
  threshold (GOV.UK, plainlanguage.gov, Reinhart's 1.5–2× finding).
- Trailing present participial clauses: `,\s+\w+ing\b` at sentence end —
  Reinhart's 2–5× finding, and the single best-evidenced syntactic tell.
- Tricolon: `\w+, \w+,? and \w+` — noisy, so score it, don't fail on it.
- Passive voice — flag, don't fail.
- Content-free changelog entries: "Various bug fixes", "Improved performance
  and stability", "Minor improvements".
- Reply openers: `^(Thanks for reaching out|Thank you for reaching out|Great
  question)`.

**Cross-file consistency**
- README short description vs `package.json` description vs the GitHub repo
  description (standard-readme requires all three to match).
- Licence named in the README vs the LICENSE file.
- Badges pointing at CI workflows / coverage services that exist in the repo.
- Changelog versions vs git tags.
- Docusaurus/MkDocs nav entries vs files on disk.

### Needs judgement — do not pretend to automate

- **Is the usage example actually runnable and correct?** Executing it is the
  only real check, and even then, whether it's the *representative* example is a
  human call.
- **Is a reference description tautological?** Detecting that `timeout` —
  "The timeout." adds nothing requires knowing what the parameter does.
- **Are the defaults, units and nullability correct**, as opposed to present?
- **Are the considered options in the ADR real alternatives**, or straw men?
- **Is this change notable enough for the changelog?** Common Changelog's
  include/exclude lists are close to rules, but "refactorings, which may have
  unintentional side effects" versus "minor code style changes" is a judgement
  about blast radius.
- **Is this genuinely breaking?** Requires knowing the consumers.
- **Is the document in the right Diátaxis mode at all?** A linter can flag a
  numbered list inside a page filed as reference; it cannot tell you the page
  should have been three pages.
- **Is the caveats section honest?** Its absence is checkable; its truthfulness
  is not.
- **Does the cold email contain a specific, true detail about this recipient?**
  You can detect the *absence* of proper nouns and numbers. You cannot verify
  that the detail is real, current, or relevant — and this is the difference
  between an email that works and one that doesn't.
- **Is the ask the smallest useful ask?** "Are you interested?" versus "Can we
  book 30 minutes?" — both parse fine.
- **Sentiment calibration.** Boomerang says non-neutral wins by 10–15%. A
  sentiment classifier can score polarity, but "have an actual opinion, and let
  it show" is not a thing a linter can install.
- **Is the trimmed quote still enough context?** Under-trimming is detectable
  by ratio; over-trimming is not.
- **Does the explanation explain *why* or merely restate *what*?** The most
  important distinction in this document and the least tractable one.
- **Tone appropriateness for the specific relationship.** UNC's warning stands:
  "your words are not supported by gestures, voice inflections, or other cues."

### The honest summary

The linter catches **shape, count and surface**. Every typographic tell, every
denylisted phrase, every structural rule from standard-readme and Keep a
Changelog and Nygard — those are cheap and worth building, and they will remove
most of the machine smell.

What the linter cannot catch is the thing that actually distinguishes good
documentation and good email from bad: **selection**. A human writes four README
sections because they have four things to say. A human ADR records a decision
that was hard. A human cold email contains one fact the sender had to go and
find. The machine failure is never a missing section — it is a present section
with nothing in it, formatted correctly.
