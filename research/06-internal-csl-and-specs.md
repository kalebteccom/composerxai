# 06 — Internal sources: the Context Specification Language and the GPD spec framework

Research note. Two internal Kalebtec repos mined for anything prosexai can reuse:

1. `Kalebtec/context-specification-language` — an eval-gated R&D project on
   whether structured meta-tags beat markdown as the format for specs handed to AI agents. Read in
   full: README, `docs/`, `docs/adr/`, `research/`, `corpus/`, `eval/` reports, the pinned prompts,
   and the git log.
2. `Kalebtec/project-ideas` — the portfolio repo, which carries the **GPD
   (GetProjectDone)** plugin at `.claude/gpd/`: the idea → spec → roadmap → progress framework,
   its templates, its ten skills, and its enforcement hooks.

The short version, before the detail:

- The CSL project **measured its own headline hypothesis and did not confirm it**. Phase 0 is
  paused. Structured XML tags did not beat markdown on any axis by enough to matter, and
  markdown-with-explicit-headings matched the typed format at roughly a quarter of the tokens.
  The half of the author's stated finding that survives is the markdown half; the XML half is
  **borrowed vendor guidance that this repo never tested**.
- GPD is the more directly reusable artefact. It is a working, hook-enforced, seven-stage
  specification framework with four artefact templates whose section orders are stable across a
  dozen real projects.

---

# Source 1 — Context Specification Language (CSL)

## 1.1 What the project was

From `Kalebtec/context-specification-language/README.md`:

> An **abstract meta-tag model** for encoding spec / epic / task content as structured,
> machine-addressable context for AI agents — instead of markdown prose the agent has to re-parse.

The problem statement, from the portfolio spec
(`Kalebtec/project-ideas/projects/context-specification-language/spec.md`):

> When people write specs, epics, and tasks for AI coding agents, they write markdown prose. The
> agent then has to re-derive structure from that prose every time: which paragraph is a hard
> constraint vs. background, which file a sentence refers to, what the acceptance criteria actually
> are, what depends on what. None of that is machine-addressable — it lives in the wording.

The whole thing was gated on a pre-registered A/B eval. It shipped a five-crate Rust reference
implementation (model / syntax / core / cli / eval-harness), a ~27-fragment dual corpus, two eval
harnesses, four ADRs, three research reports and four analysis documents — and then stopped.

## 1.2 Where it ended up — the outcome that frames everything else

`projects/context-specification-language/roadmap.md`, Decisions log, 2026-05-13:

> **Phase 0 paused. Cumulative evidence has converged** […] The cumulative empirical picture across
> four measurement axes (comprehension `xml ≈ markdown`; decomposition `csl ≈ headings`;
> review-round single-classifier `~12% of CRITs, no cycles eliminated`; multi-plan mechanism
> evaluation as above) all say the same thing: **the structure itself is not where the value is;
> the tooling around the structure is.**

And from `docs/mechanism-evaluation-prompt.md`, the one-line summary of the whole programme:

> The empirical picture so far: `csl ≈ markdown-with-headings + rg + tsc + a migration-name lint`
> on every axis.

The owner explicitly refused to re-target the GO bar a third time. `docs/review-round-reduction.md`
records the reasoning: *"A pre-registration that you keep re-targeting until it passes is worse than
admitting the empirical answer."*

## 1.3 The headline claim, tested

> **Stated claim:** XML tags are better for providing context and instructions to a model, while
> actual spec-writing is better parsed via markdown.

**Verdict: the claim is half-borrowed and half-inverted, and it is weaker than stated.** Split it:

### (a) "XML tags are better for context and instructions" — borrowed from vendor guidance, never measured here

The provenance is explicit and traceable to a single source. `projects/context-specification-language/spec.md`,
Related work:

> Anthropic's guidance on using XML tags in prompts — Claude responds well to tagged structure.
> **The empirical hook for the whole idea.**

`research/html-as-binding.md` repeats it:

> Anthropic's *own* prompt-engineering guidance recommends **XML tags** for structuring
> prompts/outputs ("Claude responds to XML-tag structure") — which is the empirical hook the CSL
> project was already betting on.

The sources list in `research/token-efficiency.md` cites the Anthropic doc directly
(`docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags`). `docs/syntax-bakeoff.md`
leans on it as reason #2 for picking XML:

> **It plays to the consumer's strength.** Current LLMs — Claude especially — handle well-formed
> tagged markup unusually well; the project's empirical hook is literally "Claude responds to
> XML-tag structure". Closing tags are a built-in emission self-check.

Three things must be said plainly about this:

1. **Nothing in this repo measures instruction or context framing.** Every experiment measures the
   *document content* handed to an agent, or the document an agent emits. There is no arm anywhere
   comparing an XML-tagged prompt against a markdown-formatted prompt. The claim's first half is
   entirely inherited.
2. **The one piece of external evidence the repo found points the other way.** From
   `research/html-as-binding.md` §1: *StructEval* (arXiv 2505.20139) "puts JSON, HTML, CSV,
   Markdown, and YAML generation all in the 'saturated' 90%+ band — HTML and XML are both *easy*;
   nothing separates them." The repo's conclusion: *"There is no published evidence that an LLM will
   emit `<csl-requirement kind="functional">…</csl-requirement>` more reliably than
   `<requirement kind="functional">…</requirement>`. Anyone asserting otherwise is extrapolating."*
   The same scepticism should apply one level up.
3. **The repo's own instruction prompts are markdown, not XML.** `grep -c '^<'` returns **0** for
   both `docs/mechanism-evaluation-prompt.md` and `docs/review-round-second-classifier-prompt.md`.
   The three pinned eval prompts in `corpus/refinement/prompts/` are markdown bullets with a
   plain-text delimiter pair, `--- REQUEST ---` / `--- END REQUEST ---`. `docs/generator-prompt.md`
   — the prompt whose *output* is XML — is itself a markdown document with a markdown mapping
   table. Revealed preference across the project: markdown for the instruction, tags only for the
   artefact.

So: the XML-for-instructions half is **reasoned and vendor-endorsed, not evidenced in this repo.**
Treat it as a plausible default, not a finding.

### (b) "Spec-writing is better parsed via markdown" — this is the repo's measured result, and it emerged *against* the author's intent

The project set out to demonstrate the opposite and could not. Three measurements:

**Comprehension track** — same content as markdown vs XML vs KDL vs HTML, agent performs a build
task. `eval/2026-05-12-rerun/report.md` (11 fragments):

| format | mean correctness | clarifying round-trips | total tokens |
|---|---:|---:|---:|
| `markdown` | 98.9% | 0.27 | 189,111 |
| `xml` | 100.0% | 0.09 | 195,645 |
| `kdl` | 99.9% | 0.18 | 191,645 |
| `xml-min` | 98.6% | 0.18 | 192,054 |
| `html` | 91.4% | 0.18 | 212,924 |

Paired: `xml` beats `markdown` by **+1.1 pp**, 5 wins / 0 losses / 6 ties, **sign-test p = 0.062**.
Verdict recorded in the report: **NO-GO** — *"a near-miss is a NO-GO, not a GO."* The report itself
diagnoses why: markdown scored ~99%, so there is no headroom. `docs/refinement-eval-plan.md`:
*"a well-formed spec is easy for any competent model to parse; markdown sits at ~99%; there's
almost no headroom for a structured form to pull statistically ahead."* Note also that HTML —
the "LLMs are native at HTML" candidate — **regressed to 91.4%**.

**Refinement / decomposition track** — the one the project called its real thesis: does the typed
structure make *turning a rough request into a spec* sharper? Three arms, `eval/refine-2026-05-12/report.md`:

| arm | classification acc. | open-Q recall | needs-input recall | hallucinated reqs | total tokens |
|---|---:|---:|---:|---:|---:|
| `markdown` (unscaffolded) | 62.3% | 93.1% | 20.8% | 6 | 156,009 |
| `csl` (XML) | 74.4% | 75.0% | 79.2% | 4 | 594,345 |
| `markdown-scaffolded` (control) | **76.7%** | 68.1% | **82.3%** | **3** | **147,073** |

The control — *the same checklist as headings instead of tags* — **beat CSL on classification
accuracy by 2.2 pp and used a quarter of the tokens.** Paired: `csl` − `markdown-scaffolded` =
−2.2 pp classification, 2 wins / 5 losses / 2 ties, p = 0.453. The portfolio spec's own summary:

> `csl ≈ markdown-scaffolded ≫ markdown` — **the headings carry most of the gain**; the typed
> structure's marginal edge is exactly the two mechanisms this proxy can't see.

The control arm was designed to be load-bearing and it did its job. `docs/refinement-eval-plan.md`:

> C is load-bearing. If **B beats A but ties C**, the win is *prompting for the categories*, which
> is real and useful but cheap — **ship a heading convention, not a DSL.**

**Review-round track** — would a CSL-shaped spec front-load what plan review currently catches?
Measured against a real production plan-review corpus (anonymised). `docs/review-round-analysis-001.md`:
a partisan first pass scored ~60% of CRIT findings front-loadable; an independent conservative
second classifier, blind to the first, scored **3/26 CRIT (~12%)** and 5/41 overall. The
conservative pass is recorded as "the better-argued of the two on the specifics". Its single biggest
reservation, as recorded:

> the only findings CSL catches here are cheap referential typos and stale paths — things `rg`,
> `tsc`, and a migration-name lint already catch — while *every review-round-gating finding* is
> irreducible design correctness.

### (c) So where does the boundary actually sit?

The author's framing ("XML for context, markdown for specs") is directionally usable but names the
wrong causal variable. What the evidence supports is:

> **The gain comes from named, explicit slots — not from the syntax that carries them.** Markdown
> headings supply those slots at ~1/4 the token cost of tags and score at least as well on every
> completeness metric measured. Tags buy exactly three things headings do not: *referential
> integrity* (name a thing once, reference it everywhere, so it cannot drift), *machine-checkable
> grounding* (a `<file path>` a validator can resolve against a real repo), and *addressability*
> (a tool can enumerate every unresolved item). None of those is about how well a model reads the
> document.

`docs/review-round-reduction.md` states the three mechanisms in exactly those terms:

> **CSL's value mechanism, made concrete, is three things:** (1) **referential consistency** —
> id-once / reference-everywhere kills the name-drift class outright; (2) **grounding in reality** —
> typed `<file>`/`<ticket>` references the validator can check against the actual repo turn "spec'd
> against fiction" into a hard error; (3) **completeness via required slots** — a schema whose
> absences are visible […] And a hard ceiling: **deep design correctness is not in scope**.

Mechanism (3) is the one headings already deliver. Mechanisms (1) and (2) need machinery, not
markup — and the mechanism evaluation found even those are largely `rg` and `tsc` in fancier
clothing (`docs/mechanism-evaluation-001.md` §4: *"'C' and 'A4' are essentially `tsc` + `rg` in
fancier clothing"*).

### (d) What failure looks like in each direction

**Markdown used where structure is genuinely load-bearing** — the failure is *convention soup*.
From `research/serialization-candidates-survey.md` on a MyST-style markdown profile:

> nesting depth forces escalating fence lengths (`:::` → `::::` → `:::::`), and *all* the validation
> semantics […] become things your custom parser enforces rather than properties of the format — at
> which point "how much structure can you push into Markdown before it stops being Markdown?"
> answers itself: **about 2–3 levels, after which it's an XML tree with `:::` for `<>`** and you've
> also inherited CommonMark's parsing quirks.

`docs/syntax-bakeoff.md` rules markdown+frontmatter out entirely on this basis: frontmatter
*"cannot nest"*, so you end up with *"markdown headings carrying semantics by convention — which is
the markdown-prose situation we're replacing."* `docs/model.md` §2 is the rule that follows:
*"Anything **structural** (a role, a reference, a defined relationship) **must** be an element."*

**Tags used where prose belongs** — four measured failures:

1. **Token blow-up.** `research/token-efficiency.md` §3, measured with `tiktoken`: **60% of a CSL
   document is markup overhead** — opening/self-closing tags 41%, of which attribute syntax alone is
   28%; closing tags 13%; pretty-print indentation 8%. Only 40% is the actual prose. In the
   refinement eval that came out as a **4× token bill for a 2-point accuracy loss**.
2. **Human review degrades.** `docs/adr/0003-human-review-rendering.md`, written after the owner
   read generated CSL by eye: *"`id` attributes are noise to a human reader"*; no inter-section
   spacing, so *"a long doc is a single dense block"*; *"Eight consecutive `<requirement>`s or
   `<deliverable>`s read as a wall."*
3. **Slots get satisfied, not filled.** `docs/mechanism-evaluation-001.md` §2, on the mechanisms
   that force authoring rituals: *"the author satisfies the lint with vague text"*; §3.5: *"CSL
   forces `<test>` slots; the slots are filled by the author. **Vague test prose passes the lint.**"*
   §4 lists five of eleven proposed mechanisms with **zero clean catches across every plan audited**,
   including one where *"an author saying 'idempotent' in the slot doesn't make the design idempotent."*
4. **Lenient markup is worse than either.** `research/html-as-binding.md` §3 — the argument for HTML
   over XML gets the failure mode backwards: *"a parser that *invents* structure on malformed input
   is the worst possible property"* for an artefact whose value proposition is that structure need
   not be inferred. XML's fail-loud well-formedness is load-bearing for the conformance story.

## 1.4 The full CSL grammar

Defined serialisation-agnostically in `docs/model.md` (v0.1-draft); the reference binding is XML
(`.csl.xml`), provisional per `docs/adr/0001-serialization-binding.md`. Worked examples:
`docs/examples/widget-spec.csl.xml` and `docs/examples/widget-roadmap.csl.xml`.

**Root and organisation**

| Element | Rule |
|---|---|
| `document` | Root. Required: `version` (e.g. `0.1`), `id` (stable), `kind` ∈ `spec` \| `roadmap` \| `ticket` \| `epic`. Children: exactly one `meta`, then the body. |
| `meta` | Children: `title` (required, non-empty), `docset id=` (optional — declares document-set membership), and plain-text `owner` / `date` / `status` (not model-load-bearing; present so markdown headers survive conversion). |
| `section` | Pure grouping. `title=`, `id=` optional. Optional — content elements may sit directly under `document` / `phase`. |
| `item` | A sub-list item *within one* content element. "Use only when items aren't individually role-significant; otherwise prefer one role element each." |

**Content-role elements** (all take `id=`, mixed content, inline refs): `problem`, `goal`,
`business-rationale`, `constraint`, `assumption`, `rationale` (`for=`), `requirement`
(`kind=functional|non-functional`, **required**), `acceptance-criterion`, `success-criterion`,
`exit-criterion`, `in-scope`, `out-of-scope`, `risk` (`likelihood=low|medium|high`,
`impact=low|medium|high|fatal`) with child `mitigation`, `open-question` (`blocks=`), `needs-input`
(`from=`, `blocks=`), `decision` (children: `statement` **required**, `rationale` **required**,
zero-or-more `alternative` each with optional `why-not`), `use-case`, `dependency`, `deliverable`,
`rough-effort`, `note`.

**Roadmap structure**: `phase` (`id=`, `number=`, `status=`) whose children may appear **in any
order**: `goal`, `business-rationale`, `in-scope`*, `out-of-scope`*, `requirement`*, `decision`*,
`milestone`*, `deliverable`*, `exit-criterion`*, `dependency`*, `depends-on`*, `rough-effort`.
`milestone` requires exactly `intent` + `acceptance`.

**Entities**: `persona` (`id=` required, `role=`, `kind=primary|secondary|anti`). Only one entity
type ships in v0.1 "to keep the surface small".

**Typed references** (all **leaf** elements, usable inline mid-sentence *or* as block children):

| Element | Attributes |
|---|---|
| `ref` | `to=` required (`elem-id`, or `docID#elemID` cross-document); `rel=` ∈ `satisfied-by`, `satisfies`, `mitigates`, `blocks`, `blocked-by`, `supersedes`, `superseded-by`, `realizes`, `deferred-to`, `relates-to` |
| `file` | `path=` required (repo-relative); `rev=`; `anchor=` (line `N` / range `N-M` / `#heading` / symbol name) |
| `ticket` | `id=` required; `system=`; `url=` |
| `depends-on` | `to=` required. A hard ordering edge; feeds the acyclicity check |

**Conformance** (`docs/model.md` §6 — `crates/core::validate` is the canonical authority, **no
schema ships**): well-formed; root `document` with `version`/`id`/`kind` and exactly one `meta` with
non-empty `title`; `id` unique within a document; required attributes present and enumerated values
in range; every within-document `ref/@to` and `depends-on/@to` resolves; cross-document refs resolve
at document-set level; the `depends-on` graph is acyclic across the set; **must-ignore** for unknown
vocabulary (`x-`-prefixed = allowed and ignored; unknown non-`x-` = warning if the document's
`version` is newer than the validator's, error otherwise).

**Containment exclusivity** (enforced, per the README's M2 notes and `docs/generator-prompt.md`):
`statement`/`alternative` only inside `decision`; `why-not` only inside `alternative`;
`intent`/`acceptance` only inside `milestone`; `mitigation` only inside `risk`;
`title`/`docset`/`owner`/`date`/`status` only inside `meta`.

**Two model distinctions worth stealing verbatim.** First, `open-question` vs `needs-input` vs
`assumption` (`docs/adr/0004-needs-input-element.md`):

> - *Assumption* → "we'll act as if X" (no one is blocked).
> - *Open question* → "X is undecided; **decide** it" (resolver: the team / more thought).
> - *Needs-input* → "X is unknown; **fetch** it from `from`" (resolver: someone outside the loop).
> When in doubt: **if the answer is *looked up / handed over*, it's `needs-input`; if it's *chosen*,
> it's `open-question`.**

Second, `dependency` vs `depends-on`: *"`depends-on` alone = the bare ordering edge; `dependency`
alone = the description"* — and a `dependency` that also implies ordering **contains** a `depends-on`.

**Text-content rule** (`docs/model.md` §2) — the actual XML/markdown boundary inside a CSL document:

> Inside a content element, free text **may** use lightweight Markdown inline formatting
> (`` `code` ``, `*emphasis*`, links); the model treats it as **opaque text** […] Anything
> **structural** (a role, a reference, a defined relationship) **must** be an element […] Block
> structure […] is expressed as **one element per atomic thing**, not as a markdown list inside one
> element.

## 1.5 Token efficiency — the most reusable measurements in the repo

`research/token-efficiency.md`, measured with `tiktoken` 0.12 (`cl100k_base`, cross-checked against
`o200k_base` — within 1.5% throughout), on one representative ~15-element spec fragment.

**How BPE treats markup:**
- `<goal>` = 3 tokens (`<`, `goal`, `>`) — **every time; there is no state, repetition is not free**,
  it is merely cheap because the substrings are common.
- `<` and `>` are their own tokens and essentially never merge with the tag name — a **fixed ~2-token
  bracket tax per tag**, paid again on the closing tag. *"a leaf element `<x>text</x>` carries ~5–6
  tokens of pure markup around its text."*
- **Hyphens are punished.** `requirement` = 2 tokens; `success-criterion` = 5; `out-of-scope` = 6 —
  paid twice, open and close.
- Attribute syntax: `kind="functional"` = 4 tokens; `id="g-quote"` = 5 (the hyphenated value splits);
  `rel="satisfied-by"` = 6; an inline `<ref to="buyer"/>` = 6.
- **"Markdown sigils are very cheap."** `#`, `*`, `-` = 1 token each; `---\n` = 1 token;
  `# goal {#g-quote}` = 7 tokens for a heading *with* an id. *"Markdown is the cheapest structural
  skin because its structure is mostly single-char sigils, not paired multi-char tags."*

**Cross-format, same content:**

| Format | cl100k tokens | vs XML-pretty |
|---|---:|---:|
| Terse sigil DSL | 440 | −30% |
| Markdown-extended (`# goal {#id}` + `[ref]{rel=…}`) | 477 | **−24%** |
| XML minified | 551 | −12.5% |
| YAML run-array | 594 | −5.7% |
| XML short tags, pretty | 606 | −3.8% |
| JSON run-array | 617 | −2.1% |
| **XML pretty, 2-space indent** | **630** | baseline |
| HTML custom elements | 630 | ±0% |

**Cost decomposition of the XML-pretty document:** text content 253 tok (40%); markup 377 tok (60%),
of which opening/self-closing tags 41%, attribute syntax alone 28%, closing tags 13%, indentation 8%.
The headline: **"closing tags are *not* the dominant cost (13%) — attribute repetition (≈28%) and
element-name length (twice over) dominate."**

**Mitigations, with the repo's own verdicts:**
- Short tag names (`<g>` for `<goal>`) — **rejected**: only −3.8%, *"you trade a 1-token word for a
  1-token cryptic stub"*, at severe legibility cost.
- Attributes over child elements — **keep**: `kind="functional"` ≈ 4 tok vs `<kind>functional</kind>`
  ≈ 7 tok.
- Omit `id` on anything nothing references — ~3–5% free.
- **Minify for the wire** — the single best action: ~12.5% from whitespace, plus 5–10% more from
  dropping the prolog and comments.
- **"the cheapest token is the one you don't send"** — transmit the referenced subtree plus resolved
  cross-refs, not the whole document set.

And the warning against importing headline numbers from elsewhere: TOON-class "30–60% savings" come
*"almost entirely from collapsing repeated keys in uniform arrays of records"*, a shape a
heterogeneous spec tree does not have. *"the TOON-class 40% number does **not** transfer."*

The conclusion (`docs/adr/0001` §4): **token cost is a reported tiebreaker, not a gate** — because
the spread among model-faithful options is only ±6%, and the real ~12–20% win lives *inside* the
chosen format.

## 1.6 Three forms of the same document — a genuinely good idea

`docs/adr/0002-canonical-and-wire-forms.md` (**Accepted**) and `docs/adr/0003-human-review-rendering.md`
(**Proposed, explicitly unvalidated**) split one document into three renderings by *consumer*:

| Form | Consumer | Shape |
|---|---|---|
| **canonical** (`normalize`) | git, storage, human diff | pretty-printed 2-space; attribute order `id`, `version`, `kind`, then alphabetical; whitespace-only text dropped; mixed content verbatim; idempotent and `validate`-stable |
| **wire** (`minify`) | the LLM | no insignificant whitespace, no prolog, no comments, unreferenced `id`s omitted. Invariant: `parse(minify(t)) ≡ parse(normalize(t))` up to unreferenced-id removal |
| **review** (`csl review`) | the human reader | grouping wrappers around runs of same-tag siblings, blank lines between blocks, unreferenced `id`s hidden. **Never parsed back, never sent to a model.** |

ADR-0002 notes the design survives a format change: *"the two-forms design (canonical pretty +
minified wire) survives the swap unchanged."*

## 1.7 Ordering, nesting depth, delimiters, prompt position — what is and isn't there

Asked for directly, so answered directly:

- **On degradation with distance from the top of a prompt: nothing.** Not measured, not discussed,
  not cited. No lost-in-the-middle work appears anywhere in the repo. Any prosexai rule about
  instruction placement cannot claim support from this source.
- **On nesting depth:** one real finding, and it is about markdown, not tags —
  `research/serialization-candidates-survey.md`: convention-based markdown structure holds to
  **about 2–3 levels**, beyond which fences escalate and it becomes an XML tree in disguise. YAML is
  called out separately for whitespace fragility *"at the depth a roadmap reaches (phase → milestone
  → acceptance → inline ref ≈ 5 levels)"*. TOML breaks past ~2 levels.
- **On ordering:** the model deliberately makes `phase` children order-*insensitive* ("in any
  order"), and `normalize` imposes a canonical *attribute* order (`id`, `version`, `kind`, then
  alphabetical) purely for diff stability. Progress logs are strictly reverse-chronological; ADRs
  and decision logs are strictly **append-only** — *"supersede, don't rewrite"* (`docs/adr/README.md`).
  None of that is a model-behaviour claim.
- **On delimiters:** no experiment. The observed practice is that the repo's own prompts use
  `--- REQUEST ---` / `--- END REQUEST ---` plain-text fences and markdown `---` rules, never tags.
- **On parse reliability:** the one external data point the repo found is *StructEval*, which puts
  JSON / HTML / CSV / Markdown / YAML all in a saturated 90%+ band. The other is the DeRose Balisage
  paper: Claude *"generally produces well-formed XML but 'occasionally needs a reminder that
  well-formedness matters'"* — a dropped closing tag in long quoted passages. The repo's own emit
  runs were clean: **11/11 fragments produced valid CSL, 97% element overlap** with the
  human-authored version — but the report is careful that this is *"a machine check, not the real
  generation-fidelity gate"*, which was human-graded and never completed.

## 1.8 What the mechanism evaluation says structure can and cannot do

`docs/mechanism-evaluation-001.md` — produced by a sceptical evaluator with no design stake,
auditing four plans line-by-line (41, 50, 150 and 20 CRIT/HIGH findings) plus samples of several
more, from a real production plan-review corpus.

- Baseline CSL catches **4–15%** of review findings on most plans; peaks at **50–65% on pure
  documentation-accuracy plans** (the citation-checking case is where structure genuinely shines).
- The full proposed structural bundle raises the ceiling to **14–49%** on suitable shapes, but
  **5 of 11 proposed mechanisms produced zero clean catches on every plan audited**.
- **50–85% of findings are author-supplied substance** — distributed-systems correctness, schema
  enumeration, infra-resource correctness, security/auth, test substance — *"that no format change
  touches."*
- Cycle-multiplication is **plan-shape-dependent**: pivot-heavy plans benefit from stale-prose
  detection; growth-heavy plans need *incremental scope review* (a workflow change), not a format.
  *"One-size-fits-all 'CSL reduces review cycles' does not hold."*
- The honest closing (§7): *"'Strictly better than the current process' is not supported on any plan
  in the audited corpus. […] The realistic claim is 'fewer mechanical findings reaching review, more
  reviewer attention on the design substance' — real, smaller than 'reduce review-round count by N'."*
- The highest-leverage augmentation is **not a format change**: *"a codebase-aware authoring advisor
  that surfaces relevant facts […] as the author writes — turning 'the author had to know' into 'the
  tool surfaced what to consider'."*

---

# Source 2 — the GPD spec framework (`project-ideas`)

## 2.1 What it is

`Kalebtec/project-ideas/.claude/gpd/README.md`:

> A lightweight portfolio framework for capturing project ideas, refining them into implementable
> specs and roadmaps, tracking stage transitions, and preserving decision history at the level of
> individual cycles.

Its stated bar, and the sentence that most shapes the artefacts (`.claude/gpd/README.md`,
"Specification orientation"):

> GPD is **not an implementation tracker** — it's a specification tool. […] The bar is: **a
> competent agent should be able to execute a phase without making architectural decisions of their
> own.**

Ten skills at `.claude/gpd/skills/*/SKILL.md`, four templates at `.claude/gpd/templates/`, two
enforcement hooks at `.claude/gpd/bin/`, plus a CI validator at `scripts/validate-portfolio.mjs`.

## 2.2 The lifecycle and its gates

```
idea  →  specced  →  planned  →  in-progress  →  shipped
              ↘                              ↘
              archived                       paused
```

Each stage is *defined by an artefact existing*, not by an assertion: **idea** = `idea.md` exists;
**specced** = `spec.md` exists; **planned** = `roadmap.md` exists **with real exit criteria on every
phase**; **in-progress** = recent `progress.md` entries; **shipped** = deliverable links captured.
*"You can't jump from `idea` to `shipped` without the artifacts that prove the intermediate work
happened."*

Enforcement is a `PreToolUse` hook, `.claude/gpd/bin/validate-write.sh`, which **blocks the write**
(exit 2) on: writing `spec.md` when no `idea.md` exists; writing `roadmap.md` when no `spec.md`
exists; editing `idea.md` once `spec.md` exists; any `{{placeholder}}` surviving into a real file;
any literal `YYYY-MM-DD` left as a value; any `**Stage:**` outside the fixed vocabulary. The
vocabulary is closed — `idea`, `specced`, `planned`, `in-progress`, `shipped`, `paused`, `archived`.
`scripts/validate-portfolio.mjs` re-checks stage consistency and ISO dates in CI.

This is the mechanism worth noting: **the ordering constraint between artefact types is enforced by
tooling, not by instruction.** You cannot write a roadmap before a spec.

## 2.3 Section orders, per artefact

### `idea.md` — `.claude/gpd/templates/project-idea.md`

Header: `**Captured:**` (ISO), `**Captured by:**`. Then:

1. **Short description** — one or two sentences: what it is and what it does.
2. **Input** — what the user/operator feeds in.
3. **Output** — what the system produces.
4. **Ideas & notes** — loose thoughts, sketches, alternative directions, prior art.
5. **Requirements** — unclassified at this stage; functional / non-functional / integration mixed.
6. **Open questions** — "What we don't yet know. Decisions that need a human."

Banner on the template: *"Raw idea capture. This file is a historical record — do not edit after the
idea has been refined into `spec.md`."* Capture deliberately does **not** fill it in — from
`capture-idea/SKILL.md` anti-patterns: *"**Overfilling `idea.md` during capture.** Capture is for
scaffolding, not for the idea's substance."*

### `spec.md` — `.claude/gpd/templates/project-spec.md`

Header: `**Stage:**`, `**Owner:**`, `**Last refined:**`. Then, in this order:

1. **Problem** — *"One paragraph. Include who feels it today and what they currently do instead."*
2. **Target users** — primary and secondary personas, each with what they're trying to accomplish.
3. **Primary use cases** — *"Each as '{{user}} does {{action}} to achieve {{outcome}}'."*
4. **Success criteria** — *"Quantitative where possible"*: outcome metric, usage metric, quality bar.
5. **In scope (MVP)** — *"The smallest thing worth shipping. **Each bullet is testable.**"*
6. **Out of scope / non-goals** — *"Link to a roadmap phase if deferred."*
7. **Functional requirements**
8. **Non-functional requirements** — perf, reliability, security, accessibility, i18n, platform.
9. **Technical approach** — *"Not a full design doc — enough to estimate effort and surface risks."*
10. **Integrations & dependencies** — external APIs, internal systems, licensing-relevant libraries.
11. **Commercial framing** — one of internal tool / client deliverable / product / open source.
12. **Risks & mitigations** — table: Risk | Likelihood | Impact | Mitigation.
13. **Open questions** — *"Blockers that need a human decision before the next phase can start."*
14. **Related work / prior art**

Verified against real specs: `projects/automated-site-documentation-bot/spec.md` and
`projects/agent-browser-bridge/spec.md` follow this order exactly. Two organic additions recur and
are worth adopting: **"Resolved questions (logged for history)"** after Open questions, and
**"Assumptions"** — the latter is mandated by `refine-idea/SKILL.md` (*"Flag any assumption you're
making in an **Assumptions** bullet list"*) though the template omits it.

### `roadmap.md` — `.claude/gpd/templates/project-roadmap.md`

1. **At a glance** — table: Phase | Goal | Status | Target.
2. **Phase 0 — Discovery & validation** … through **Phase 4 — Future** (*"Ideas that don't belong in
   v1 but we want remembered. **Not committed.**"*)
3. **Assumptions** — *"When one breaks, revisit the affected phase."*
4. **Decisions log** — table: Date | Decision | Why.

Per phase, baseline order: **Goal** → **Scope** → **Deliverables** → **Exit criteria** (a checkbox
list) → **Rough effort** (a range).

### The agent-ready phase — `specify-phase/SKILL.md` §4

This is the strongest artefact in the repo: the expanded phase shape a phase must reach before it is
handed to an implementing agent.

1. **Goal** — one sentence.
2. **Business rationale** — outcome, stakeholder, strategic fit.
3. **Scope** — bullets.
4. **Requirements** — split explicitly into *Functional* and *Non-functional*.
5. **Tech / style / code decisions** — a table: Decision | Rationale | Alternatives considered.
6. **Milestones** — `**<Title>** — *Intent:* … *Acceptance:* …`
7. **Deliverables**
8. **Exit criteria** — checkbox list, *"Every criterion must be objectively verifiable."*
9. **Dependencies** — external inputs / other phases / open questions that block.
10. **Rough effort** — a range.

With the closing rule: *"Any subsection with nothing to say stays out. Don't pad."*

The decision categories the skill probes, unless the spec has locked them project-wide: language /
runtime, framework / major libraries, directory structure, testing approach, style guide / linting,
commit & branching conventions, CI expectations, data / config format conventions. Rationale for the
alternatives column: *"this is what makes the spec useful to an agent later when they hit an edge
case."*

### `progress.md` — `.claude/gpd/templates/project-progress.md`

Reverse-chronological, **append at the top**: `## YYYY-MM-DD — <event title>`, a short paragraph
(what happened, who, what changed, links), then `**Stage after:** <stage>`, then `---`.

### The decision record — `record-decision/SKILL.md`

What qualifies: *"Something is a decision if a reasonable alternative existed and you picked one over
the others."* Architectural commitments, scope boundaries, approach trade-offs, scope reframings,
consequential defaults. What does not: typos, rewordings, pure compression.

Fields: **Decision** (*"stated as a fact ('Engine core is LLM-agnostic' not 'Should we make the
engine LLM-agnostic?')"*), **Rationale**, **Alternatives considered**, **Implications**, **Date**.

Two rules worth lifting whole:
- *"**Rationale by assertion.** 'Because it's better' isn't a rationale. 'Because Apache-2.0's patent
  grant matters for an OSS tool that sits under a commercial SaaS' is."*
- *"**Silent edits to older decisions.** Don't rewrite existing rows. If a decision is reversed, add
  a *new* row ('Reversed: X → Y'). The log is append-only, like progress."*

### Milestones vs exit criteria — `add-milestone/SKILL.md`

> **Milestones** — intent-carrying checkpoints within a phase. Often celebratable […] Each milestone
> says *why it matters*. **Exit criteria** — phase gates. Objectively verifiable. Leaving the phase
> requires all of them checked.

The test: *"**Milestone without intent.** 'Flow 1 tested' is a task. 'Flow 1 proves the
agent-integration contract under under-specified input' is a milestone. If you can't write the
intent, it's probably an exit criterion or a task."* And: *"'User happy with output' is a wish. 'User
accepts the PR with no structural changes' is verifiable."*

## 2.4 What the framework demands before writing starts

`refine-idea/SKILL.md` requires a **batched clarifying-question interview** before drafting — 2–4
questions per call, adapted to the previous batch, with a restatement of the working model between
batches. The mandated themes:

- **Problem & users** — who specifically feels the pain (internal / one client / a market); what they
  do today instead and why it isn't enough; **"Who is explicitly *not* the user?"**
- **Commercial framing** — internal / client deliverable / product / OSS; who pays for the build, who
  pays for the outcome.
- **Success** — what "worked" looks like at 3 months and at a year; a metric, a milestone, or a
  specific deploy.
- **MVP boundary** — smallest version that proves the core assumption end to end; what's tempting but
  can wait; *"What's in the idea that we'd drop if it made us miss the first demo by a month?"*
- **Technical** — stack constraints; hard-requirement vs nice-to-have integrations; data/privacy
  constraints.
- **Risk** — *"the single biggest thing that could kill this project"*; the assumption that, if wrong,
  invalidates everything.

With an explicit skip rule: *"skipping any that `idea.md` already answers clearly — **repeating
settled questions burns trust**."*

The hard constraint on fabrication is a repo-level rule (`CLAUDE.md`):

> **Don't fabricate.** If the idea or conversation doesn't tell you who the users are, the commercial
> framing, or what success looks like — **ask**. Unanswered items go in the spec's `Open questions`
> block, not as invented answers.

Reinforced in `refine-idea/SKILL.md`: *"Fill every section. If a section genuinely can't be answered
yet, keep the heading and write `Open — see [Open questions](#open-questions)`. Don't delete
sections; don't fabricate content."* And: *"**Fabricating personas.** If the user didn't tell you who
the user is, ask — don't make up a 'Sarah, 32, product manager'."*

## 2.5 How scope is stopped from sprawling

Six distinct mechanisms, and they are worth counting because most frameworks have one:

1. **A dedicated non-goals section with deferral targets.** "Out of scope / non-goals" is mandatory
   and *"must be a real list, not a platitude"*; deferred items link to the roadmap phase that will
   carry them.
2. **A post-draft cut pass.** *"**MVP creep.** The MVP section tends to grow during drafting. After
   writing it, re-read and cut anything not proven essential by something earlier in the spec."*
3. **Phase 1 is fenced.** *"Phase 1 is the **MVP** from the spec — nothing more. Resist bundling
   Phase 2 work in."* And Phase 0 must be discovery: *"If the idea has no validation risk, say so
   explicitly and make Phase 0 trivial."*
4. **A parking lot with no commitment.** "Phase 4 — Future": *"Ideas that don't belong in v1 but we
   want remembered. Not committed."* Sprawl gets recorded rather than argued about.
5. **Exit criteria as the gate on calling a roadmap "planned".** *"A roadmap with phases but no exit
   criteria is worse than no roadmap."* and *"A phase without exit criteria is a wish list."*
6. **A compression-only cycle that is forbidden from changing anything.** `tighten-spec/SKILL.md`:
   *"**No decision changes.** If a tightening feels like it's modifying a commitment — even a small
   one — stop and flag it to the user as a refinement question, not a tightening edit. The commit
   message must say `(no decision changes)` and mean it."* Its redundancy taxonomy — cross-section
   repetition, literal duplicates, narrative parentheticals, verbose phrasing, scope creep inside
   out-of-scope bullets, stale "we're considering X" notes — is a ready-made checklist. Its
   verification step is grep-based: *"for each major locked decision (pick 5–10), grep the new file
   to confirm the fact is still present."*

Related, from `docs/mechanism-evaluation-001.md` §6 (a workflow proposal, not shipped): a **plan
growth budget** — *"Set N ± 20% at plan start; new tickets require a `<scope-amendment>` with PM
ack."*

## 2.6 Idea vs spec vs roadmap — the boundaries

| | Idea | Spec | Roadmap |
|---|---|---|---|
| Question | What is it, roughly? | What are we building and why? | In what order, and how do we know each stage is done? |
| Status | Historical record — **immutable** once a spec exists | Current source of truth | Phased plan, **append not rewrite** |
| Written by | The human, after scaffolding | The refinement interview | Derived from the spec |
| Preconditions | none | `idea.md` must exist (hook-enforced) | `spec.md` must exist (hook-enforced) |

`CLAUDE.md`: *"**`idea.md` is immutable after refinement.** Once `spec.md` exists for a project, edit
the spec, not the idea."* Roadmap template: *"Update this file as phases complete or as scope shifts
— **don't rewrite history, append.**"*

Three routing rules the skills enforce between artefacts:
- A decision goes in the **Decisions log**, not inline in the spec. *"Facts go in the spec, not the
  decisions log."* Narrative parentheticals in a spec are a tightening target: *"usually the
  narrative belongs in the Decisions log."*
- The *why* goes in `progress.md`, never in a commit body. `CLAUDE.md`: *"The *why* lives in the
  `progress.md` entry, not the commit body."* Commit subjects are single-line, ≤72 chars, no body —
  hook-enforced by `.claude/hooks/block-long-commits.sh`.
- Day-to-day tasks are **out of scope for the framework entirely** — they belong in Linear or GitHub
  Issues. Also deliberately excluded: cross-project dependency graphs (*"If A depends on B, say so in
  A's `spec.md` — don't build a dependency graph"*).

## 2.7 Agent versus human consumption

GPD is unusual in being explicit that the reader is an agent:

- The bar (`.claude/gpd/README.md`): *"a competent agent should be able to execute a phase without
  making architectural decisions of their own."*
- `specify-phase/SKILL.md`: *"Anything missing or weak is a gap **the agent will have to invent
  answers for** — which defeats the point of GPD."*
- The alternatives column exists specifically for the agent's later edge case, not for the human's
  audit.
- `review-roadmap/SKILL.md` is a **read-only audit** producing a per-phase readiness verdict against
  the eight elements, scored `Present + strong` / `Weak` / `Missing`, ending in an explicit
  READY / NOT READY call. Its anti-pattern list includes *"**Vague verdicts.** 'Phase looks mostly
  ready' is useless."*

Human-facing constraints run in parallel: clarifying questions must go through `AskUserQuestion` in
batches of 2–4, never a plain-text wall; each option's description must *"read like a one-sentence
architectural-decision note"*; a recommendation is flagged only when genuine, because *"false
confidence is worse than none"*.

House prose rules (`refine-idea/SKILL.md` § Style rules) are short and directly transferable:

> - Prefer plain language over consulting-speak. **"Ship it to our docs site" beats "deliver the
>   capability to the documentation surface".**
> - One idea per bullet.
> - No filler sections. If there's nothing to say about integrations, write `None yet` — don't invent.
> - Never invent numbers (user counts, revenue, timelines) the user didn't give you.

One related artefact outside GPD: `guidelines/architecture-principles.md` §6 "The decision record" —
*"When an architecture decision is non-obvious […] **write down why.** Code shows what; the record
preserves the reasoning a future reader needs to not re-litigate it."* Plus a provenance rule worth
copying: *"Keep provenance out of the code and the public docs (no ticket IDs, no phase / cycle
tags); keep it in the commit body, the RFC, and the `ai-context/` tree."*

---

# What prosexai takes from this

## 1. The format rule

Stated tightly enough to become a skill instruction, with its exclusions:

> **Format rule.**
>
> **(a) Use XML-style tags to delimit *material the model is being handed* inside an instruction:**
> the user's raw request, a document under review, retrieved context, prior output being critiqued,
> examples. One tag per block, lowercase, hyphen-free where possible, opened and closed. This
> separates "here is the thing" from "here is what to do with it" so neither can be read as the
> other. Provenance: Anthropic's published prompt-engineering guidance, and Claude's tag affinity —
> **reasoned and vendor-endorsed, not measured by us.** Treat it as a default, not a finding.
>
> **(b) Do not use tags for the instruction itself.** Write instructions as markdown: headings,
> bullets, short paragraphs. Markdown sigils are ~1 token each against ~5–6 tokens of pure markup
> per tagged leaf (`research/token-efficiency.md`), and no measurement anywhere in the internal
> corpus shows a tagged instruction outperforming a markdown one. The CSL repo's own eleven
> instruction prompts contain **zero** XML tags.
>
> **(c) Do not use tags for the artefacts prosexai produces** — specs, tickets, roadmaps, ADRs,
> docs. Markdown with **explicit named headings** is the format. This is measured: the
> heading-scaffolded control matched or beat the typed XML format on classification accuracy and
> hallucination count at **~25% of the token cost** (`eval/refine-2026-05-12/report.md`), and the
> typed format's comprehension edge over markdown was +1.1 pp at p = 0.062 — a recorded NO-GO
> (`eval/2026-05-12-rerun/report.md`).
>
> **(d) The thing that actually carries the gain is the named slot, not the syntax.** Every rule
> that follows from this evidence is a rule about *which sections must exist and what belongs in
> each*, not about angle brackets.
>
> **Where (a) does NOT apply — do not reach for tags when:**
> - The content is short enough to be unambiguous inline. A tag pair on a one-line quote is 5–6
>   tokens of ceremony for nothing.
> - You are structuring *prose for a human*. Tags degrade human review: unreferenced ids read as
>   noise, runs of same-tag siblings read as a wall (`docs/adr/0003-human-review-rendering.md`).
> - The structure needs more than about three levels of nesting *and* the consumer is a human. Past
>   that, either flatten or accept that you have built a tree and should say so.
> - You are tempted to tag *roles inside prose* ("this sentence is a constraint"). That is the CSL
>   experiment, and it did not pay for itself.
> - **A lenient parser is on the other end.** If markup must be machine-parsed, strictness is the
>   feature — a parser that repairs malformed input silently corrupts the tree
>   (`research/html-as-binding.md` §3).
>
> **Cost facts to keep in the rule's back pocket** (all `tiktoken`-measured,
> `research/token-efficiency.md`): a tag pair costs a fixed ~2-token bracket tax twice over;
> hyphenated names are punished twice (`out-of-scope` = 6 tokens per occurrence, paid on open and
> close); attribute syntax is the single largest overhead component at ~28% of a tagged document;
> **60% of a fully tagged document is markup**; and short cryptic tag names save only 3.8% — never
> worth the legibility.

## 2. Planning-artefact templates worth adopting

Adopt four, in GPD's orders, with the amendments noted.

**Idea / intake** — `Short description` → `Input` → `Output` → `Ideas & notes` → `Requirements` →
`Open questions`. Header carries capture date and author. Rule: **capture scaffolds, it does not
fill**; and once a spec exists this file is frozen.

**Spec** — `Problem` → `Target users` → `Primary use cases` → `Success criteria` → `In scope (MVP)`
→ `Out of scope / non-goals` → `Functional requirements` → `Non-functional requirements` →
`Technical approach` → `Integrations & dependencies` → `Commercial framing` → `Risks & mitigations`
→ `Open questions` → `Related work / prior art`.

Three amendments from what real specs grew and from CSL's model work:
- Add **`Assumptions`** as a first-class section (mandated by the skill, missing from the template).
- Add **`Resolved questions (logged for history)`** after Open questions — two production specs grew
  it independently, and `tighten-spec` forbids ever compressing it away.
- **Split `Open questions` into two.** From `docs/adr/0004-needs-input-element.md`: *"if the answer
  is *looked up / handed over*, it's `needs-input`; if it's *chosen*, it's `open-question`."* The
  refinement eval is the one place this earned its keep numerically — needs-input recall went from
  20.8% (unscaffolded markdown) to 79–82% once the category was named, in **both** the tagged and
  heading arms. That is a slot-naming win, available for free in markdown.

**Roadmap** — `At a glance` table → `Phase N` blocks → `Assumptions` → `Decisions log`. Phase 0 is
discovery, Phase 1 is the MVP and nothing more, the last phase is an explicitly uncommitted parking
lot. Roadmaps append; they never rewrite.

**Agent-ready phase** (the strongest single template found) — `Goal` → `Business rationale` →
`Scope` → `Requirements` (functional / non-functional, split) → `Tech / style / code decisions`
(table: Decision | Rationale | Alternatives considered) → `Milestones` (Intent + Acceptance) →
`Deliverables` → `Exit criteria` (verifiable checklist) → `Dependencies` → `Rough effort` (a range).
Empty subsections are omitted, not padded.

**Decision record / ADR** — the two internal conventions agree and should be merged. Nygard shape
from `docs/adr/README.md`: **Title · Status · Context · Decision · Consequences**, with `Status` ∈
Proposed / Accepted / Superseded by ADR-NNNN / Deprecated, and *"ADRs are append-only — supersede,
don't rewrite."* GPD's field set adds what Nygard leaves implicit: **Alternatives considered** and
**Implications**, plus the rule that the decision is stated as a fact, not a question. CSL's ADRs add
a section prosexai should adopt outright: **"To be measured (this is why the status is *Proposed*)"**
— an ADR that is a hypothesis must carry the test that would kill it.

**Progress / changelog** — reverse-chronological, append at top, `## YYYY-MM-DD — <event>` + one
paragraph + `**Stage after:**`. The *why* lives here, not in commit bodies.

**Two cross-cutting mechanisms worth adopting beyond the templates:**
- **Three renderings of one document, chosen by consumer** (ADR-0002/0003): a canonical form for
  git and human diff, a compressed form for the model, and a read-optimised form for human review.
  Prosexai's version is not minification but *audience* — but the principle (one source, several
  renderings, the model's and the human's differ) transfers directly.
- **Compression as a separate cycle that may not change decisions.** `tighten-spec`'s rule, its
  six-category redundancy taxonomy, and its grep-based verification of preserved facts are the
  best-designed thing in either repo for the "AI wrote 60k words, cut it to 15k" problem prosexai
  exists to solve (see `research/00-why-this-exists.md`).

## 3. Where these frameworks conflict — and which wins

**Conflict 1 — CSL vs GPD, on whether markdown headings are enough.** CSL's premise
(`docs/model.md`, `docs/syntax-bakeoff.md`) is that heading-carried semantics are *"the markdown-prose
situation we're replacing"*. GPD is that situation, and it works. **GPD wins, on CSL's own data:**
`csl ≈ markdown-scaffolded ≫ markdown`, at 4× the tokens. Prosexai adopts headings; it may adopt
CSL's *vocabulary* (its role names are a good taxonomy) as heading names.

**Conflict 2 — CSL's "one element per atomic thing, never a markdown list" vs prose readability.**
`docs/model.md`: *"Block structure […] is expressed as **one element per atomic thing**, not as a
markdown list inside one element."* For a machine-addressable artefact this is right. For prose it
produces the wall ADR-0003 complains about. **Split the difference:** adopt the *discipline*
(one requirement per bullet — GPD says the same thing as *"One idea per bullet"*), reject the
*mechanism* (a tag per bullet).

**Conflict 3 — GPD "fill every section" vs Diátaxis "a document serves one need".** GPD's spec
template mandates fourteen sections and forbids deleting any of them
(*"If a section genuinely can't be answered yet, keep the heading and write `Open`"*). Diátaxis holds
that mixing modes in one document is the central failure. **Both are right about different
artefacts, and the resolution is that a spec is not documentation.** A spec has exactly one audience
(the person or agent who will build the thing) and one mode (a commitment record); its fourteen
sections are facets of one need, not four modes crammed together. Diátaxis's own stated limits
(`research/03-diataxis-and-frameworks.md` §1.7) put planning artefacts outside its scope. **Ruling:
Diátaxis governs docs; GPD governs planning artefacts; neither is imported into the other's
territory.** Where they genuinely collide — a README, an ADR, a changelog — Diátaxis has no slot
either (noted at the end of `03-diataxis-and-frameworks.md`), so those are prosexai's own problem.

**Conflict 4 — GPD's mandatory-section rule vs its own no-padding rule.** `refine-idea` says fill
every section; `specify-phase` says *"Any subsection with nothing to say stays out. Don't pad."*
**The phase rule wins for phases, the spec rule wins for specs**, and the distinguishing principle is
worth stating explicitly: **a missing section in a spec is information (it says "we have not decided
this yet"), a missing subsection in a phase is not.** Keep the heading with an explicit `Open —` or
`None yet` marker where absence is meaningful; drop it where it is merely empty. The prohibition that
binds in both cases: never fill a section with invented content to avoid an empty heading. That is
the failure `research/00-why-this-exists.md` documents at scale.

**Conflict 5 — CSL's "structure prevents errors" vs the mechanism evaluation's "the author satisfies
the lint with vague text".** The same repo holds both. **The evaluation wins**, and the consequence
for prosexai is a design constraint: a required section is a *prompt*, not a *guarantee*. Any
prosexai check that verifies a section exists must be described as verifying a section exists — never
as verifying the content is good.

**Conflict 6 — token thrift vs review legibility.** `research/token-efficiency.md` finds 24–30%
available by going terser; ADR-0002 refuses most of it, keeping *"the verbosity *is* the visible
structure"*, and takes only the lossless 12–20% from minification. **The refusal wins**, with a
clean rule: take savings that cost nothing (send the relevant slice not the whole document; strip
boilerplate; don't repeat what the reader already has) and refuse savings that cost legibility
(abbreviated headings, stripped connective prose, telegraphic bullets).

## 4. Unproven — flagged, not promoted

Things that read as good ideas in these repos but which the repos themselves have **not** validated.
Prosexai may adopt any of them; it must not cite them as evidence.

1. **"XML tags are better for context and instructions to a model."** Vendor guidance
   (Anthropic's prompt-engineering docs) plus Claude tag-affinity reasoning. **No experiment in
   either repo tests it.** The nearest external evidence the repo found (*StructEval*) shows no
   separation between markup formats on generation. **Unproven — plausible default only.**
2. **ADR-0003, the `csl review` rendering** (grouping wrappers, hidden ids, blank lines). Status
   *Proposed*, and the ADR is candid: *"exploratory; these are hypotheses to measure, not a ratified
   decision."* The measurement it was waiting for — the M5 human fidelity grade — never ran.
   **Unproven.**
3. **ADR-0004, `<needs-input>` as a *typed element*.** The *category* is validated (needs-input
   recall 20.8% → ~80% once named). The claim that it must be a *typed, validated element* rather
   than a heading is **not** — the ADR names the confound itself: *"Does the
   markdown-with-explicit-sections control arm (a 'Needs input' heading) get most of the benefit? If
   a plain heading does as well, ship the heading convention, not a typed element."* The control
   scored 82.3% needs-input recall against CSL's 79.2%. **The heading won.**
4. **The generation-fidelity gate was never run.** Every eval report carries the warning: *"The
   **real** generation-fidelity gate […] is a *human-graded* sample — not in this report. Grade it
   before trusting the build-task results."* It was not graded. The 97–99% figures are a
   machine-computed element-overlap proxy. **Treat all CSL emit-quality numbers as provisional.**
5. **The LLM judge was never human-spot-checked.** Stated in all three eval reports: *"The LLM-judge
   scores are not yet validated by a human spot-check of a ~20% sample."* Every correctness and
   classification number in this note inherits that caveat.
6. **The refinement track's gold decompositions were drafts.** *"The gold decompositions drive
   everything and most are still DRAFTS (agent-written, not owner-reviewed) — until they're reviewed,
   treat every number here as provisional and the verdict as inconclusive by construction."* The
   `csl ≈ markdown-scaffolded` result is the most-cited finding in this note and it rests on
   unreviewed golds. It is corroborated by the other three axes, which is why it is reported — but
   it is not clean.
7. **Statistical power throughout.** N = 8, 9 and 11 fragments; sign-tests only; *"A proper Wilcoxon
   signed-rank test + effect sizes are a refinement over the current mean-Δ + sign-test."* Nothing
   here reached significance in either direction. The honest summary is **"no detectable
   difference"**, not "markdown wins".
8. **Anything about prompt position, ordering effects, or instruction decay with distance.** Not
   studied, not cited, not present. Any prosexai rule on placement must be sourced elsewhere.
9. **GPD's own effectiveness has never been measured.** It is a well-designed, hook-enforced,
   dogfooded framework with a dozen real projects behind it — and zero comparative evidence that its
   fourteen-section spec produces better outcomes than a shorter one. Adopt it for its design
   quality and its enforcement mechanisms, not on evidence.
10. **The "codebase-aware authoring advisor" as the high-leverage answer.** `docs/mechanism-evaluation-001.md`
    §5 ranks it first and estimates *"plausibly pushes catch rates into the 60–80% range"*. Those are
    **estimates from an audit, not measurements** — the tool does not exist. Compelling direction,
    unbuilt and unproven.

---

## Files consulted

**CSL** (`Kalebtec/context-specification-language/`):
`README.md` · `docs/model.md` · `docs/syntax-bakeoff.md` · `docs/syntax-benchmark-plan.md` ·
`docs/generator-prompt.md` · `docs/refinement-eval-plan.md` · `docs/review-round-reduction.md` ·
`docs/review-round-analysis-001.md` · `docs/review-round-second-classifier-prompt.md` ·
`docs/mechanism-evaluation-001.md` · `docs/mechanism-evaluation-prompt.md` ·
`docs/adr/0001-serialization-binding.md` · `docs/adr/0002-canonical-and-wire-forms.md` ·
`docs/adr/0003-human-review-rendering.md` · `docs/adr/0004-needs-input-element.md` ·
`docs/adr/README.md` · `research/token-efficiency.md` · `research/html-as-binding.md` ·
`research/serialization-candidates-survey.md` · `research/README.md` · `corpus/README.md` ·
`corpus/refinement/README.md` · `corpus/refinement/prompts/arm-markdown.md` ·
`corpus/refinement/prompts/arm-markdown-scaffolded.md` · `corpus/refinement/prompts/arm-csl.md` ·
`eval/2026-05-12/report.md` · `eval/2026-05-12-rerun/report.md` · `eval/refine-2026-05-12/report.md` ·
`docs/examples/widget-spec.csl.xml` · `docs/examples/widget-roadmap.csl.xml` · full `git log`.

**project-ideas** (`Kalebtec/project-ideas/`):
`CLAUDE.md` · `GPD.md` · `README.md` · `.claude/gpd/README.md` ·
`.claude/gpd/templates/project-idea.md` · `.claude/gpd/templates/project-spec.md` ·
`.claude/gpd/templates/project-roadmap.md` · `.claude/gpd/templates/project-progress.md` ·
`.claude/gpd/skills/{capture-idea,refine-idea,specify-phase,add-milestone,record-decision,review-roadmap,tighten-spec}/SKILL.md` ·
`.claude/gpd/bin/validate-write.sh` · `scripts/validate-portfolio.mjs` ·
`guidelines/architecture-principles.md` · `guidelines/handcrafted-docs-graphics.md` ·
`projects/context-specification-language/{spec.md,roadmap.md}` ·
`projects/automated-site-documentation-bot/{idea.md,spec.md,roadmap.md}` ·
`projects/agent-browser-bridge/{idea.md,spec.md,roadmap.md}`.
