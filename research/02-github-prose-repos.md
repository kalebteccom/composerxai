# GitHub survey: prose linters, style-as-code, and AI-slop tooling

Research pass for the `unslop` project. Date of survey: 2026-09-01.

**Method.** Every repo below was resolved through the GitHub API (existence, star count,
license, last push date confirmed), and its README fetched and read. For roughly thirty of
them I also read the actual rule files — Vale YAML, JSON rule packs, JS word lists, Python
check modules — and those file paths are recorded so we can borrow from them directly.

**Count.** 102 repos, all live and all genuinely in scope. Star counts are as of the survey
date. Four are flagged in place as dead, archived, or out of scope; I've left them in and
labelled them rather than quietly dropping them, because two of them (`client9/misspell`,
`openai/gpt-2-output-dataset`) are still widely depended on.

Note on naming: `errata-ai/*` now redirects to `vale-cli/*`. Both spellings resolve; the
tables use the current canonical name.

---

## 1. Prose linter engines

| Repo | Stars | Licence | One line | Rule set / path |
|---|---|---|---|---|
| [amperser/proselint](https://github.com/amperser/proselint) | 4.6k | BSD-3 | Python prose linter distilled from Garner, Orwell, Pinker, DFW | `proselint/checks/**` — 87 modules across `cliches/`, `redundancy/`, `hedging.py`, `weasel_words.py`, `uncomparables.py`, `industrial_language/`, `typography/`, `terms/`, `restricted/` |
| [btford/write-good](https://github.com/btford/write-good) | 5.1k | MIT | Naive nine-check English prose linter | `write-good.js` defines `weasel, illusion, so, thereIs, passive, adverb, tooWordy, cliches, eprime`; the word lists live in npm deps `weasel-words`, `passive-voice`, `adverb-where`, `too-wordy`, `no-cliches`, `e-prime`. `eprime` is off by default. |
| [get-alex/alex](https://github.com/get-alex/alex) | 5.1k | MIT | Catches insensitive/inconsiderate phrasing; a thin CLI over retext | Delegates entirely to `retext-equality` + `retext-profanities`; no rules of its own |
| [textlint/textlint](https://github.com/textlint/textlint) | 3.2k | MIT | Pluggable natural-language linter, ESLint-shaped, AST-based | Engine only; rules ship as npm packages |
| [retextjs/retext](https://github.com/retextjs/retext) | 2.4k | MIT | unified-ecosystem natural-language processor; CST over prose | Engine only |
| [vale-cli/vale](https://github.com/vale-cli/vale) | 6.1k | MIT | Markup-aware Go prose linter; the de-facto standard for style-as-code | Rules are YAML: `extends: existence | substitution | occurrence | capitalization | readability | consistency | conditional | sequence | script`, plus `action: replace/remove/edit` for autofix |
| [languagetool-org/languagetool](https://github.com/languagetool-org/languagetool) | 14.9k | LGPL-2.1 | Grammar and style checker, 25+ languages, huge XML rule base | `languagetool-language-modules/en/src/main/resources/.../en/grammar.xml` — thousands of pattern rules. LGPL. |
| [Automattic/harper](https://github.com/Automattic/harper) | 14.9k | Apache-2.0 | Rust, offline, privacy-first grammar checker; the fast LanguageTool alternative | `harper-core/src/linting/**` — rules are Rust structs, not data; WASM build available |
| [jxmorris12/language_tool_python](https://github.com/jxmorris12/language_tool_python) | 529 | GPL-3.0 | Python bindings for LanguageTool | Wrapper only. GPL-3 — do not link. |
| [beyondcode/laravel-prose-linter](https://github.com/beyondcode/laravel-prose-linter) | 114 | MIT | Vale wrapped for Laravel blade/translation files | Ships Vale styles; useful as an embedding pattern |
| [rowanmanning/joblint](https://github.com/rowanmanning/joblint) | 1.9k | MIT | Lints tech job posts for sexism, bro culture, unrealistic expectations | `lib/rules/*.js` — `bro`, `sexism`, `benefits`, `visionary`, `meritocracy`, `derogatory`, `legacy-tech`, `dev-env` |
| [iddl/hemingway-vscode](https://github.com/iddl/hemingway-vscode) | 14 | none | Reverse-engineered Hemingway editor as a VS Code LSP | Built on `retext-english`; thresholds = sentence length + adverb + passive + complex-word. **No licence file — cannot borrow.** Last push 2021. |
| [justinritchie/prose-rich-mcp](https://github.com/justinritchie/prose-rich-mcp) | 2 | MIT | MCP server wrapping proselint + alex + write-good + blocklint + textstat + a small AI-tell detector | Good architectural reference: `audit_all` merges six linters into one JSON report with line/col |
| [vale-cli/vale-action](https://github.com/vale-cli/vale-action) | 249 | MIT | Official GitHub Action for Vale | CI reference |
| [vale-cli/vale-vscode](https://github.com/vale-cli/vale-vscode) | 51 | MIT | VS Code extension for Vale | Editor integration reference |
| [vale-cli/vale-boilerplate](https://github.com/vale-cli/vale-boilerplate) | 43 | MIT | Canonical example repo showing Vale config layout | `.vale.ini` + `styles/` layout to copy |

### Hemingway note

There is no credible open-source Hemingway. `iddl/hemingway-vscode` is the only reverse
engineering worth reading, and it's unlicensed and four years stale. The searchable
"Hemingway" repos on GitHub are overwhelmingly crack-download SEO spam. The actual Hemingway
algorithm is reproducible from `retext-readability` + `retext-passive` + an adverb list —
which is what that extension does.

---

## 2. retext plugin ecosystem — the reusable word lists

All MIT, all by `wooorm`, all ESM, all shipping their data as plain JS/YAML you can lift.
This is the cleanest set of borrowable word lists on GitHub.

| Repo | Stars | What it enforces | Data file |
|---|---|---|---|
| [retextjs/retext-equality](https://github.com/retextjs/retext-equality) | 162 | Insensitive/inconsiderate language, with suggested alternatives | `data/en/*.yml` — 425 rule blocks total: `gender.yml` (257), `ablist.yml` (79), `race.yml` (45), `lgbtq.yml` (24), `condescending.yml` (9), `suicide.yml` (6), plus `press`, `slogans`, `misc`. Each block is `type` + `condition` + `considerate:` list + `inconsiderate:` map. |
| [retextjs/retext-simplify](https://github.com/retextjs/retext-simplify) | 98 | Overlong words/phrases → simpler alternatives (`utilize` → `use`) | `lib/patterns.js` |
| [retextjs/retext-passive](https://github.com/retextjs/retext-passive) | 17 | Passive voice — `be`-verb followed by a listed participle | `lib/list.js` |
| [retextjs/retext-intensify](https://github.com/retextjs/retext-intensify) | 20 | Weasels, hedges, filler | Pulls from the `words/` org packages |
| [retextjs/retext-readability](https://github.com/retextjs/retext-readability) | 101 | Dale–Chall, ARI, Coleman-Liau, Flesch, Gunning fog, SMOG, Spache, per sentence | `lib/index.js`; formulas from `words/*` |
| [retextjs/retext-profanities](https://github.com/retextjs/retext-profanities) | 45 | Profanity, ranked 0–2 by likelihood of offence | `lib/en.js` (+ ar, es, fr, it, pt) |
| [retextjs/retext-repeated-words](https://github.com/retextjs/retext-repeated-words) | 15 | `the the` duplication | Algorithmic |
| [retextjs/retext-indefinite-article](https://github.com/retextjs/retext-indefinite-article) | 20 | `a`/`an` by pronunciation, including digits | Algorithmic |
| [retextjs/retext-quotes](https://github.com/retextjs/retext-quotes) | 12 | Straight vs smart quote consistency and nesting | Algorithmic — **directly relevant: curly-quote detection is a common AI tell** |
| [retextjs/retext-contractions](https://github.com/retextjs/retext-contractions) | 9 | Missing/misplaced apostrophes in elisions | Algorithmic |

Supporting data packages, all MIT, all from `words/` and `wooorm`:

| Repo | Stars | Contents |
|---|---|---|
| [words/syllable](https://github.com/words/syllable) | 248 | English syllable estimator — the dependency under every syllable-based readability formula |
| [words/dale-chall](https://github.com/words/dale-chall) | 32 | The New Dale–Chall (1995) list of ~3,000 easy words |
| [words/flesch](https://github.com/words/flesch) | 32 | Flesch Reading Ease formula |
| [words/gunning-fog](https://github.com/words/gunning-fog) | 20 | Gunning fog index formula |

---

## 3. textlint rule ecosystem

| Repo | Stars | Licence | What it does | Rule path |
|---|---|---|---|---|
| [textlint-ja/textlint-rule-preset-ai-writing](https://github.com/textlint-ja/textlint-rule-preset-ai-writing) | **1,115** | MIT | **The most-starred purpose-built AI-writing linter preset.** Japanese-first but the structural rules are language-agnostic | `src/rules/` — `no-ai-list-formatting.ts` (bold-label bullet lists), `no-ai-hype-expressions.ts`, `no-ai-emphasis-patterns.ts` (bolded headings), `no-ai-colon-continuation.ts` (the `Label: sentence` construction), `ai-tech-writing-guideline.ts`. Regex patterns are user-extensible via `.textlintrc`. |
| [textlint-ja/textlint-rule-preset-ja-technical-writing](https://github.com/textlint-ja/textlint-rule-preset-ja-technical-writing) | 548 | MIT | Technical-writing preset: sentence length caps, no double negatives, no successive conjunctions, max commas per sentence | Preset of ~25 npm rules; the *shape* of the rules transfers even though the language doesn't |
| [sapegin/textlint-rule-terminology](https://github.com/sapegin/textlint-rule-terminology) | 56 | MIT | Correct product/tech term spelling (`Javascript`→`JavaScript`, `NPM`→`npm`, `front-end`→`frontend`) | **`terms.jsonc`** — single-file, machine-readable, well-curated. Easy vendor. |
| [textlint-rule/textlint-rule-preset-google](https://github.com/textlint-rule/textlint-rule-preset-google) | 15 | MIT | Partial Google developer-docs style guide for textlint | README is a checkbox audit of which Google rules are/aren't implemented — a useful coverage map |
| [textlint-rule/textlint-rule-write-good](https://github.com/textlint-rule/textlint-rule-write-good) | 23 | **none** | write-good wrapped as a textlint rule | No licence file |
| [textlint-rule/textlint-rule-alex](https://github.com/textlint-rule/textlint-rule-alex) | 12 | MIT | alex wrapped as a textlint rule | Wrapper |
| [textlint-rule/textlint-rule-no-start-duplicated-conjunction](https://github.com/textlint-rule/textlint-rule-no-start-duplicated-conjunction) | 6 | MIT | Flags consecutive sentences starting with the same conjunction | Small but relevant — sentence-start repetition is a documented LLM tell |

---

## 4. Style guides as code (Vale packages)

| Repo | Stars | Licence | Rules | Notes |
|---|---|---|---|---|
| [vale-cli/Microsoft](https://github.com/vale-cli/Microsoft) | 111 | MIT | 47 rules in `Microsoft/*.yml` | The Microsoft Writing Style Guide. Big substitution tables in `Wordiness.yml` (119 swaps), `Terms.yml` (94 swaps, from the A–Z word list), `Adverbs.yml` (264 tokens), `Avoid.yml`, `Jargon.yml`, `BiasFree.yml`, `GenderBias.yml`. `coverage/*.yml` maps rules to guide sections. |
| [vale-cli/Google](https://github.com/vale-cli/Google) | 89 | MIT | 36 rules in `Google/*.yml` | Google developer documentation style guide. `WordList.yml` + `WordListCase.yml`, `Latin.yml`, `Will.yml`, `Timeless.yml`, `ExcessiveClaims.yml`, `Anthropomorphism.yml`, `Slang.yml`. Rule comments document empirical false-positive tuning against a 950-file corpus — unusually rigorous. |
| [vale-cli/IBM](https://github.com/vale-cli/IBM) | 26 | MIT | 10 rules | IBM Developer Editorial Style Guide. `Terms.yml` (usage swaps), `Abbreviations.yml`, `SentenceLength.yml`, `Latin.yml`. Thin; last push 2025-02. |
| [vale-cli/Joblint](https://github.com/vale-cli/Joblint) | 14 | MIT | 17 rules | Joblint ported to Vale — `Bro.yml`, `Meritocracy.yml`, `Visionary.yml`, `Gendered.yml`, `DumbTitles.yml`, `Sexualised.yml`, `LegacyTech.yml`, `Reassure.yml`. Directly relevant if unslop ever lints job-post or recruiter text. |
| [vale-cli/write-good](https://github.com/vale-cli/write-good) | 49 | MIT | 8 rules | write-good's checks as Vale YAML: `Cliches`, `E-Prime`, `Illusions`, `Passive`, `So`, `ThereIs`, `TooWordy`, `Weasel`. **The cleanest existing translation of a JS word list into Vale YAML** — a good template. |
| [vale-cli/proselint](https://github.com/vale-cli/proselint) | 45 | BSD-3 | 33 rules | proselint's checks as Vale YAML. `Cliches.yml`, `Hedging.yml`, `Hyperbole.yml`, `CorporateSpeak.yml`, `Nonwords.yml`, `Uncomparables.yml`, `Very.yml`, `RASSyndrome.yml`. |
| [vale-cli/alex](https://github.com/vale-cli/alex) | 25 | MIT | 13 rules | alex/retext-equality as Vale YAML |
| [vale-cli/readability](https://github.com/vale-cli/readability) | 29 | MIT | 7 metrics | `FleschKincaid`, `FleschReadingEase`, `GunningFog`, `SMOG`, `ColemanLiau`, `AutomatedReadability`, `LIX` as `extends: metric` rules |
| [vale-cli/packages](https://github.com/vale-cli/packages) | 122 | MIT | — | **`library.json` is the official Vale package index** (18 packages: AiTells, AsciiDoc, AsciiDocDITA, Elastic, Google, Harper, Hugo, Joblint, MDX, Microsoft, OpenShiftAsciiDoc, Readability, RedHat, Salesforce, alex, neighbor, proselint, write-good). If we publish a Vale package, this is where it goes. |
| [redhat-documentation/vale-at-red-hat](https://github.com/redhat-documentation/vale-at-red-hat) | 56 | MIT | 4 styles, ~70 rules | Red Hat + AsciiDoc + OpenShiftAsciiDoc styles. `.vale/styles/RedHat/` — `SimpleWords.yml` (107-entry plain-English swap table), `EmDash.yml` (bans em dashes outright), `Contractions.yml` (bans contractions), `PassiveVoice.yml`, `ReadabilityGrade.yml`, `SelfReferentialText.yml`, `ConsciousLanguage.yml`, `Terms{Errors,Warnings,Suggestions}.yml`. |
| [splunk/vale-splunk-style-guide](https://github.com/splunk/vale-splunk-style-guide) | 21 | Apache-2.0 | 66 rules | `styles/Splunk/*.yml`. `DontUse.yml` bans `just`, `please`, `note that`, `it is recommended that`, `and/or`, `quite`. `Dashes.yml` bans em and en dashes. Strongest opinionated corporate set after Red Hat. |
| [DataDog/datadog-vale](https://github.com/DataDog/datadog-vale) | 29 | Apache-2.0 | ~30 rules | `styles/Datadog/` — `words_case_insensitive.yml`, `words_case_sensitive.yml`, `abbreviations_latin.yml`, `recommendations.yml`, `endash.yml`, `sentencelength.yml`. Actively maintained. |
| [elastic/vale-rules](https://github.com/elastic/vale-rules) | 11 | Apache-2.0 | 32 rules | `DontUse.yml`, `WordChoice.yml`, `Wordiness.yml`, `MeaningfulCTAs.yml`, `DeviceAgnosticism.yml`, `DirectionalLanguage.yml`, `Negations.yml`. Recently maintained. |
| [canonical/documentation-style-guide](https://github.com/canonical/documentation-style-guide) | 23 | **CC-BY-SA-4.0** | Vale rules + prose guide | Ubuntu/Canonical style. Copyleft licence — see §9. |
| [alphagov/gds-vale-styles](https://github.com/alphagov/gds-vale-styles) | 6 | MIT (code) / OGL 3.0 (content) | 6 rules | GDS content style guide. `Contractions`, `NoCapsInSpecs`, `Repetition`, `UnexpandedAcronym`, `TooWordy`, `WeaselWords`. Abandoned since 2019 but the GDS plain-English position is well-argued. |
| [testthedocs/vale-styles](https://github.com/testthedocs/vale-styles) | 48 | MIT | ~80 rules across 8 styles | Aggregator: Joblint, Openly, proselint, write-good, MartinFowler, Readability, Homebrew, TTD. Last push 2020 — largely superseded by `vale-cli/packages`. |
| [ChrisChinchilla/Openly](https://github.com/ChrisChinchilla/Openly) | 175 | MIT | 21 rules | "Open-source Grammarly." `Clarity.yml`, `Hedging.yml`, `UnclearAntecedent.yml`, `VerbingNouns.yml`, `Anthropomorphism.yml`, `E-Prime.yml`, `FutureTense.yml`, `Readability.yml`. Most-starred independent Vale style. |
| [jargonLint/jargonLint](https://github.com/jargonLint/jargonLint) | 20 | MIT | 2 rules | Explicitly building *permissively licensed*, exhaustively sourced Vale rules. Currently only `Technology.yml` + `Licenses.yml`. Right ambition, almost no content yet. |
| [theletterf/valegen](https://github.com/theletterf/valegen) | 23 | NOASSERTION | — | LLM + RAG tool that generates Vale rule YAML from a plain-English request. Useful for *authoring* our own rules fast. Licence unclear. |
| [google/styleguide](https://github.com/google/styleguide) | 39.6k | CC-BY-3.0 | — | **Mostly code style, not prose.** Included for completeness and to say plainly: this is not the Google developer documentation style guide. That one lives at developers.google.com/style and its machine-readable form is `vale-cli/Google`. |
| [18F/content-guide](https://github.com/18F/content-guide) | 84 | NOASSERTION | — | **Archived and moved** to `18F/guides`. Plain-language US-government content guide, adapted from GOV.UK. Prose only, no rule files. Historical value. |

---

## 5. AI-slop detection and removal

This is the crowded, fast-moving category. Ranked roughly by how much borrowable material
each ships.

### 5a. Machine-readable rule sets

| Repo | Stars | Licence | What it ships | Path |
|---|---|---|---|---|
| **[tbhb/vale-ai-tells](https://github.com/tbhb/vale-ai-tells)** | 82 | MIT | **The most complete AI-tell rule set in existence: 111 prose rules + 15 commit-message rules + 18 experimental structural rules.** Actively developed (pushed 2026-08-31), v1.31.0 | `styles/ai-tells/*.yml`, `styles/ai-tells-commits/*.yml`, `styles/ai-tells-experimental/*.yml` |
| [mandakan/llm-slop-detector](https://github.com/mandakan/llm-slop-detector) | 1 | MIT | VS Code extension + CLI + browser extension sharing one JSON rule engine. **Per-model rule packs** — the only repo doing this | `builtin-rules.json` (invisible-Unicode table: ZWSP, ZWNJ, ZWJ, LRM/RLM, word joiner, BOM, soft hyphen, NBSP, NNBSP, bidi overrides — each with severity + replacement), `builtin-packs/{claudeisms,openai,gemini,grok,llama,qwen,deepseek,academic,cliches,fiction,puffery,security,structural}.json` |
| [walidboulanouar/anti-ai-slop](https://github.com/walidboulanouar/anti-ai-slop) | 22 | MIT (file) | CLI + skill; phrase → replacement dictionary with severity tiers | `skill/scripts/anti_ai_slop/patterns.json` — `{text, replace, severity}` triples. Directly vendorable. |
| [woerndl/unsloppify](https://github.com/woerndl/unsloppify) | 16 | MIT (file) | Agent skill with a grep-able regex list, grouped by failure mode | `references/phrases.txt` — one POSIX ERE per line, BSD-grep-safe, with `# mode:` group comments (`importance-inflation`, etc.). Plus `scripts/scan.sh` and 18 test cases. |
| [Syntaf/vale-llm-slop](https://github.com/Syntaf/vale-llm-slop) | 22 | MIT (file) | Two Vale styles: `Slop` (16 rules) and `STE` (12 rules, ASD-STE100-inspired, opt-in) | `Slop/{Anthropomorphism,Assistant,Ceremony,EmDash,EmptyQualifiers,Headers,Hedging,Metaphor,NegativeParallelism,Overused,RestatesCode,SelfPraise,Transitions,Tricolon,VagueReasons,Vocabulary}.yml`. `RestatesCode` — a docstring that just repeats the signature — is a rule nobody else has. |
| [krishnasunkam/vale-ai-tells](https://github.com/krishnasunkam/vale-ai-tells) | 1 | MIT | The `AiTells` package listed in the official Vale hub. 17 rules | `AiTells/*.yml` — `AbstractTriad`, `EpigramContrast`, `NegParallel`, `VirtueHonest`, `NeverTag`, `CopulaInflation`, `HiddenVerb`, `WeakResume`, `Dash`, `Cliche`, `Adverb`, `Passive`, `LinkText`. **Name collision with tbhb's package — this is the one Vale's `library.json` points at.** |
| [SicariusSicariiStuff/SLOP_Detector](https://github.com/SicariusSicariiStuff/SLOP_Detector) | 101 | Apache-2.0 | Dictionary-driven slop scorer for ShareGPT JSON and plaintext | Upstream source of `mandakan`'s per-model packs |
| [sam-paech/slop-forensics](https://github.com/sam-paech/slop-forensics) | 371 | MIT | Toolkit that *derives* slop lists empirically from multi-model output, then builds phylogenetic trees of model idiolect | `data/slop_list.json`, `slop_list_bigrams.json`, `slop_list_trigrams.json`, plus per-domain lists under `results_by_domain/{essays,creative_writing}/slop_lists/`. **Caveat below.** |
| [sam-paech/antislop-sampler](https://github.com/sam-paech/antislop-sampler) | 355 | Apache-2.0 | Backtracking sampler that retries generation when a banned phrase appears | Inference-time prevention, not post-hoc detection. Adopted upstream by koboldcpp. |

### 5b. Agent skills (markdown, not machine-readable)

| Repo | Stars | Licence | Notes |
|---|---|---|---|
| **[hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop)** | **16.7k** | MIT | The origin point of most of this category. `references/phrases.md` (throat-clearing openers, emphasis crutches, business-jargon swap table, a blanket "kill all adverbs" rule), `references/structures.md` (binary contrasts, negative listing, dramatic fragmentation, rhetorical setups, false agency, narrator-from-a-distance), `references/examples.md`. Ships a 5-axis 1–10 rubric: Directness, Rhythm, Trust, Authenticity, Density; below 35/50 revise. |
| [mshumer/unslop](https://github.com/mshumer/unslop) | 539 | MIT | **Different idea and the most interesting one.** Doesn't ship a word list — it *measures* a model's defaults by generating 50–100 samples in a domain, analysing repeated patterns, and emitting a bespoke `skill.md`. Then runs a before/after comparison. `profiles/writing.md`, `profiles/react-design.md`. |
| [stephenturner/skill-deslop](https://github.com/stephenturner/skill-deslop) | 381 | MIT | Scientific/technical-writing focus; knows methods sections legitimately use passive voice. `references/{phrases,structures,tropes,examples}.md`. Synthesised from stop-slop + tropes.fyi. |
| [theclaymethod/unslop](https://github.com/theclaymethod/unslop) | 316 | **none** | The most methodologically serious skill: three deterministic Python scanners, `/unslop teach|cleanup|rewrite|mimic`, and a published benchmark (`evals/CORE-BENCHMARK.md`) reporting detection precision/recall, repair success, preservation, collateral damage, and byte-exact no-op on clean prose. Latest public result is an honest **no-ship** — recall improved, precision and damage bars not met. **No licence file: read it, don't copy it.** |
| [lynote-ai/humanize-text-skill](https://github.com/lynote-ai/humanize-text-skill) | 234 | MIT | Bilingual zh/en; splits the job into subtraction (remove AI shape) and addition (pull toward a target voice: casual/professional/technical) |
| [MohamedAbdallah-14/unslop](https://github.com/MohamedAbdallah-14/unslop) | 121 | MIT | Multi-agent packaging (Claude Code, Cursor, Windsurf, Codex, Cline, Copilot, Gemini) from one source. `.cursor/skills/unslop/anti-aiisms.md` is a tiered ban list (high/medium/low severity); `scripts/scan.py` is the deterministic layer; ships adversarial-paraphrasing benchmarks. Preserves code/URLs/headings. |
| [asavvin-pixel/unslop](https://github.com/asavvin-pixel/unslop) | 60 | MIT | `references/blacklist.md` — 19 categories, and **the only list that explicitly dates itself**: notes "delve" peaked 2023–24 and collapsed in 2025, that GPT-5.1 suppresses em dashes, and instructs the reader to target the habit not the word. Category 19, "clean slop," is the residue left after the other 18 are fixed. Also ships `references/style-profile-template.md` for voice calibration. |
| [badmuriss/unslop](https://github.com/badmuriss/unslop) | 17 | **CC-BY-SA-4.0** | Two-layer: surface tells (Wikipedia "Signs of AI writing") + narrative tells (StoryScope). Copyleft — see §9. |
| [adamdunkels/deslop-text](https://github.com/adamdunkels/deslop-text) | 15 | MIT | 32 numbered checks (W1–W32) in three severity bands, plus a **regression corpus** of 30+ AI-generated documents under `tests/regression/corpus/{chatgpt,claude}/` — blog post, product page, newsletter, LinkedIn post, corporate memo, tutorial, pitch, review, landing page, meeting summary. That corpus is arguably more valuable than the rules. |
| [JuanMarchetto/doc-standards-skill](https://github.com/JuanMarchetto/doc-standards-skill) | 16 | MIT | Five-layer stack: Diátaxis + ISO 24495-1 → ASD-STE100 → Google/Microsoft house style → llms.txt retrievability → Vale gate. The clearest articulation of how these standards compose. |
| [ai-that-works/deslop](https://github.com/ai-that-works/deslop) | 21 | MIT | BAML-based CLI that rewrites documents via an LLM. Prompt-driven, no rule data. |
| [jere-mie/unslop](https://github.com/jere-mie/unslop) | 6 | MIT | Zig CLI, deliberately minimal: curly quotes, em dashes, non-breaking spaces. Nothing else. |
| [peteromallet/desloppify](https://github.com/peteromallet/desloppify) | 3.0k | NOASSERTION | **Out of scope** — code quality, not prose. Included because it dominates "deslop" search results. |

### 5c. Statistical / model-based detection

| Repo | Stars | Licence | Approach |
|---|---|---|---|
| [ahans30/Binoculars](https://github.com/ahans30/Binoculars) | 410 | BSD-3 | ICML 2024. Zero-shot, no training data: ratio of perplexity to cross-perplexity between two closely related LLMs. Fixed global threshold tuned on Falcon-7B / Falcon-7B-Instruct. |
| [eric-mitchell/detect-gpt](https://github.com/eric-mitchell/detect-gpt) | 476 | MIT | Probability-curvature method. Needs token logprobs from the generating model. |
| [vivek3141/ghostbuster](https://github.com/vivek3141/ghostbuster) | 187 | NOASSERTION | NAACL 2024. Passes text through weak LMs, structured feature search, then a classifier. 99.0 F1 cross-domain. Black-box — no target-model access needed. Ships three benchmark datasets (student essays, creative writing, news). |
| [Hello-SimpleAI/chatgpt-comparison-detection](https://github.com/Hello-SimpleAI/chatgpt-comparison-detection) | 1.4k | **none** | The HC3 corpus (Human ChatGPT Comparison Corpus) + detectors. Widely cited. No licence file. |
| [openai/gpt-2-output-dataset](https://github.com/openai/gpt-2-output-dataset) | 2.0k | MIT | **Archived.** The original GPT-2 output dataset + RoBERTa detector baseline. Historical. |
| [distil-labs/distil-ai-slop-detector](https://github.com/distil-labs/distil-ai-slop-detector) | 93 | Apache-2.0 | Gemma-3 270M distilled from a 120B teacher, quantised to 242 MB, runs in-browser via Wllama. Claims 100% test accuracy full-precision, ~95% quantised. Treat the accuracy claim sceptically — it's on their own held-out split. |

---

## 6. Readability and metrics

| Repo | Stars | Licence | Formulas |
|---|---|---|---|
| [textstat/textstat](https://github.com/textstat/textstat) | 1.4k | MIT | Flesch Reading Ease, Flesch-Kincaid, SMOG, Coleman-Liau, ARI, Dale-Chall, Linsear Write, Gunning Fog, `text_standard` consensus, plus Spanish (Fernández Huerta, Szigriszt-Pazos) and other languages. The Python default. |
| [cdimascio/py-readability-metrics](https://github.com/cdimascio/py-readability-metrics) | 407 | MIT | Same nine formulas plus SPACHE, with per-formula grade-level objects. Needs NLTK punkt. |
| [vale-cli/readability](https://github.com/vale-cli/readability) | 29 | MIT | The formulas as Vale rules (see §4) |
| `words/*` and `retext-readability` | — | MIT | JS equivalents (see §2) |

---

## 7. Markdown, docs, and spelling linting

| Repo | Stars | Licence | What it enforces |
|---|---|---|---|
| [DavidAnson/markdownlint](https://github.com/DavidAnson/markdownlint) | 6.3k | MIT | ~55 rules `MD001`–`MD059`: heading increment, heading style, list indent, line length, trailing spaces, hard tabs, bare URLs, emphasis style, table pipe style. Rules and docs in `doc/Rules.md`; each rule is a JS module in `lib/`. |
| [DavidAnson/markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2) | 911 | MIT | Config-first CLI for the above; the one to use in CI |
| [igorshubovych/markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) | 1.1k | MIT | The older CLI; still the most widely wired into pre-commit |
| [remarkjs/remark-lint](https://github.com/remarkjs/remark-lint) | 1.0k | MIT | ~70 rules as individual npm packages, plus `remark-preset-lint-{consistent,recommended,markdown-style-guide}`. AST-based, so it composes with retext in one unified pipeline. |
| [get-woke/woke](https://github.com/get-woke/woke) | 516 | MIT | Non-inclusive language in source code. **`pkg/rule/default.yaml`** — only 11 rules, but each carries `terms`, `alternatives`, `severity`, and a long sourced `note` explaining the reasoning. The note field is the interesting part. Last push 2024-05. |
| [crate-ci/typos](https://github.com/crate-ci/typos) | 4.1k | Apache-2.0 / MIT | Rust source-code spell checker built for low false positives on monorepos. Corrections dictionary is generated, not hand-written. |
| [codespell-project/codespell](https://github.com/codespell-project/codespell) | 2.4k | **GPL-2.0** | Common-misspelling dictionaries in `codespell_lib/data/dictionary*.txt`. GPL — see §9. |
| [client9/misspell](https://github.com/client9/misspell) | 1.4k | MIT | **Archived.** Go misspelling corrector. Still vendored widely; `words.go` is a large, permissive correction table. |
| [streetsidesoftware/cspell](https://github.com/streetsidesoftware/cspell) | 1.7k | MIT | Code-aware spell checker; monorepo of dictionaries (`cspell-bundled-dicts`) and a trie format |
| [tcort/markdown-link-check](https://github.com/tcort/markdown-link-check) | 712 | ISC | Dead-link checking. Adjacent, not prose quality. |

---

## 8. Prompts, skills, and agent configs

| Repo | Stars | Licence | Relevance |
|---|---|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | 172.9k | **none** | Anthropic's reference Agent Skills. No licence file — treat as read-only reference for skill *structure*, not content to copy. |
| [danielmiessler/Fabric](https://github.com/danielmiessler/Fabric) | 43.7k | MIT | 200+ prompt "patterns." Writing-relevant: `data/patterns/{improve_writing,humanize,clean_text,analyze_prose,analyze_prose_pinker,analyze_prose_json,improve_academic_writing,write_essay,write_essay_pg,write_micro_essay}/system.md`. `analyze_prose_pinker` scores against Pinker's *Sense of Style* categories and is the most substantive of them. |
| [PatrickJS/awesome-cursorrules](https://github.com/PatrickJS/awesome-cursorrules) | 40.7k | CC0-1.0 | Cursor rule files. Overwhelmingly code-style, not prose. CC0, so freely usable — but there's little here for us. |
| [f/prompts.chat](https://github.com/f/prompts.chat) (f.k.a. awesome-chatgpt-prompts) | 168.4k | NOASSERTION | Community prompt collection. Contains editor/proofreader personas. Low signal-to-noise for rule extraction. |

---

## 9. Synthesis

### 9.1 What to vendor, and what is noise

**Vendor directly.**

1. **`tbhb/vale-ai-tells`** (MIT). This is the reference implementation of the entire
   problem space and nothing else is close. 111 prose rules, each with a written rationale,
   most gated with lookarounds and subject/complement constraints to hold down false
   positives. It has rules nobody else has thought of: `IncompleteComparison` (an intensified
   comparative with no second term — "significantly faster" than *what*), `NominalizedScopeChange`
   ("the widening covers the inflections"), `NounString` (four consecutive common nouns),
   `VerbTricolonDensity` (multiple three-item verb lists in one paragraph), `StackedHedges`
   ("could potentially"), and about thirty `Figurative*` rules that each isolate one overused
   metaphorical verb with a gate on its complement. The commit-message style is a separate,
   genuinely novel contribution. **Take the token lists and the rationales; re-derive the
   regexes against our own corpus.**

2. **`retextjs/retext-*` data files** (MIT). `retext-equality/data/en/*.yml` is the
   best-structured bias word list on GitHub — 425 blocks of `inconsiderate`/`considerate` maps rather than a
   flat ban list, which means it can drive suggestions and not just flags. `retext-simplify`'s
   `lib/patterns.js` and `retext-passive`'s `lib/list.js` are small and clean.

3. **`sapegin/textlint-rule-terminology` → `terms.jsonc`** (MIT). Single-file, 154 entries,
   curated and maintained. Nothing else does this as cleanly.

4. **`redhat-documentation/vale-at-red-hat` → `RedHat/SimpleWords.yml`** (MIT). 107-entry
   plain-English substitution table. Unlike Microsoft's, it isn't tied to a corporate style
   guide's own copyright. Pair it with Microsoft's 119-swap `Wordiness.yml` and dedupe.

5. **`mandakan/llm-slop-detector` → `builtin-rules.json`** (MIT). The invisible-Unicode
   table specifically. ZWSP, ZWNJ, ZWJ, LRM/RLM, word joiner, BOM, soft hyphen, NBSP, NNBSP,
   bidi embeds/overrides/isolates — each with a severity and a deterministic replacement.
   That's a solved problem we should not re-solve. The per-model packs
   (`claudeisms.json` and friends) are also worth taking, with the Apache-2.0 attribution
   chain back to `SLOP_Detector` preserved.

6. **`walidboulanouar/anti-ai-slop` → `patterns.json`** (MIT) and
   **`woerndl/unsloppify` → `references/phrases.txt`** (MIT). Both are already in the right
   shape: phrase, replacement, severity. Cheap to merge, cheap to dedupe.

7. **`adamdunkels/deslop-text` → `tests/regression/corpus/`** (MIT). Thirty-plus
   AI-generated documents across ten genres, split by generating model. This is a test
   fixture, not a rule set, and it is more useful than most of the rule sets.

8. **`vale-cli/write-good`** (MIT) as a *template*. It's the tidiest existing example of
   translating a JS word list into Vale YAML — worth reading before writing our own.

**Read but do not vendor.**

- **`theclaymethod/unslop`** — no licence file, so legally untouchable, but
  `evals/CORE-BENCHMARK.md` is the best thinking published on how to evaluate this class of
  tool, and its honest "no-ship" verdict is the most useful data point in the whole survey.
- **`mshumer/unslop`** — the *method* (empirically measure a model's defaults, emit a bespoke
  profile) is worth stealing conceptually. There is no static rule set to copy; that's the point.
- **`asavvin-pixel/unslop`** — the dating-and-decay framing, and category 19 ("clean slop":
  what's left after you fix the other eighteen).

**Noise — skip.**

- **`sam-paech/slop-forensics` `data/slop_list.json`.** The methodology is excellent; the
  shipped list is not usable for our purpose. It's derived largely from creative-writing
  generation, so the top of the alphabet reads `absently, abuzz, ached, acrid, adira, aedan,
  aelara, aeldrin, aeliana, aelion, aelius, aella, aeloria, aelric, aelwyn, aerion` — fantasy
  character names. Useless for professional prose. The per-domain `essays/` list is closer
  to relevant; the toolkit re-run against our own corpus would be better than either.
- **`vale-cli/readability`.** Readability metrics as lint alerts produce a number with no
  actionable fix. Compute them, report them, don't lint on them.
- **`Microsoft/Adverbs.yml`.** Bans an enormous adverb list including `beautifully`,
  `bitterly`, `bleakly`, `bashfully`. Correct for Azure docs, wrong for anything with a voice.
  Same for `stop-slop`'s blanket "kill all adverbs, no -ly words" — it's a good instinct
  stated as an absolute rule, and as an absolute rule it damages good writing.
- **Regex passive-voice detection generally.** Microsoft's and Google's `Passive.yml` are the
  *same* file — `\b(am|are|were|being|is|been|was|be)\b\s*` followed by a 200-entry participle
  list. It has a well-known false-positive rate and neither guide has fixed it in years.
  If we want passive detection we need a POS tagger, not a regex.
- **`Microsoft/OxfordComma.yml`.** A single 600-character regex with four documented guards
  and it still leaks. Impressive engineering, bad idea.
- **proselint's `cliches/garner` and `restricted/top1000`.** Thousands of literary entries
  with a near-zero hit rate on technical or professional prose. High cost, low yield.
- **`google/styleguide`** and **`18F/content-guide`.** The first is code style; the second is
  archived and prose-only. Neither ships anything machine-readable.
- **`peteromallet/desloppify`.** Code quality. Wrong problem.
- **`deniseli/StrunkAndWhiteLinter`** (last commit 2016, 7 stars, no licence). Dead. Named
  here only so nobody else wastes an hour finding it.

### 9.2 Where the major style packages actually disagree

The interesting finding is that the corporate style guides do not agree with each other on
several of the exact points AI-slop tools care about. Any tool that stacks them will
contradict itself.

| Question | Microsoft | Google | Red Hat | Splunk | AI-tell tools |
|---|---|---|---|---|---|
| **Contractions** | **Required.** `Contractions.yml` at `level: error`, and it also rewrites `it's.` back to `it is.` at sentence end | **Encouraged**, same swap table but `level: suggestion` | **Forbidden.** `Contractions.yml` swaps every contraction *back* to the long form | Not ruled on | **Required** — uncontracted forms are listed as a tell (`deslop-text` W26, `tbhb/ContractionAvoidance`) |
| **Em dash** | Allowed; `Dashes.yml` only removes the surrounding spaces | Allowed; `EmDash.yml` only removes surrounding spaces | **Banned outright** (`EmDash.yml`, warning) | **Banned outright**, em and en (`Dashes.yml`) | **Banned outright** — near-universal across the category |
| **Capital after a colon in a heading** | **Yes.** `Headings.yml` sets `indicators: [':']` | **No.** Google's `Headings.yml` carries an explicit comment removing that indicator, because "the first word after a colon is generally lowercase," enforced by `Colons.yml` | — | — | `tbhb/ColonUsage` flags `Label: Sentence` regardless, and says so — it explicitly replaces `Google.Colons` |
| **First person singular** | "Use sparingly" (`warning`); permits `I'd`, `I'll`, `I've` | "Avoid" (`warning`); only `I'm` listed | — | — | Not ruled on; but `SelfReference` and `Metacommentary` cover the adjacent failure |
| **Oxford comma** | Required, `level: suggestion` | Required, `level: warning` | Required | Required | — |
| **Future tense / "will"** | No rule | `Will.yml` flags every `will` at `warning` | — | `FutureTense.yml` | — |
| **`e.g.` / `i.e.`** | `Foreign.yml`, softer | `Latin.yml` at `level: error` — always expand | `Abbreviations.yml` | `Latin.yml`, `LatinEtc.yml` | — |
| **"leverage"** | `Jargon.yml` swaps it to "take advantage of" | Not listed | — | — | Flagged as a signature AI verb (`OverusedVocabularyVerbs`, `anti-aiisms.md` HIGH tier) |
| **Anthropomorphism** | No rule | `Anthropomorphism.yml` — deliberately only two verbs, `sees` and `tells`, with a comment recording that broader lists produced 8 false positives per 2 real ones on a 950-file corpus | — | — | `tbhb/AnthropomorphicCognition` + `AnthropomorphicJustification` go much broader, with determiner gates and human-subject exceptions |
| **"best", "fastest", "guarantees"** | No rule | `ExcessiveClaims.yml`, but deliberately excludes `never`/`always`/`ensure` because they accounted for 125 of 142 corpus hits | — | `Recommendations.yml` | `AbsoluteAssertions`, `UniversalObject`, `UniversalSubject` |

Three things follow.

First, **the contraction rule is a genuine fork in the road.** Microsoft and Google want
contractions because they read as human; Red Hat forbids them because they read as informal.
The AI-slop tools side with Microsoft and Google. A tool that ships "Red Hat mode" and
"unslop mode" together will emit contradictory advice on every second sentence, and there is
no neutral default — it depends on the register the user is writing in.

Second, **the em-dash consensus is real but recent and shallow.** Red Hat and Splunk banned
em dashes long before LLMs, for translation and terminal-rendering reasons. The AI-tell tools
ban them because ChatGPT overused them. `asavvin-pixel/unslop` is the only repo that notices
this is now stale: GPT-5.1 suppresses em dashes, so the signal is decaying, and banning them
outright will soon just make prose worse for no detection benefit.

Third, **Google's package is the only one that documents its false-positive tuning.** Rules
in `vale-cli/Google` carry comments recording exactly what was excluded and why, with hit
counts from a 950-file corpus. Microsoft's does not. Neither do any of the AI-slop rule sets
except `tbhb/vale-ai-tells`, which documents its gating decisions in prose. That's the
practice worth copying, more than any individual rule.

### 9.3 The actual gap

I want to be honest here: **the detection gap is small.** `tbhb/vale-ai-tells` has 111 rules
covering essentially every lexical and structural tell that has been publicly identified, is
actively developed, is MIT-licensed, and installs in Vale in three lines. If the plan for
`unslop` is "build a better list of AI-sounding phrases," that plan is already dead — it was
finished by someone else, better, and the marginal rule we'd add is worth roughly nothing.

What is actually missing:

1. **Nobody measures precision on human-written control text.** One repo — `theclaymethod/unslop`
   — publishes a benchmark with precision, collateral damage, and byte-exact no-op on clean
   prose, and its own honest verdict is that it fails those bars. Everyone else reports rule
   *counts*. There is no shared public corpus of good human professional prose against which
   to measure false positives, and without one every rule set in §5 is unfalsifiable. Building
   that corpus, and publishing per-rule precision against it, is a real and unclaimed
   contribution. It is also unglamorous, which is presumably why it's unclaimed.

2. **Rule sets are undated and unversioned against model generations.** The tells decay.
   "Delve" peaked in 2023–24 and has largely gone; GPT-5.1 suppresses em dashes; each model
   generation has its own idiolect. Two repos have half of the answer —
   `mandakan/llm-slop-detector` ships per-model packs, `sam-paech/slop-forensics` derives
   packs empirically — and nobody has joined them into a pipeline that regenerates dated,
   per-model, per-genre rule packs on a schedule. `mshumer/unslop` has the generation half of
   that loop but throws away the artefact.

3. **Genre coverage stops at technical documentation and blog prose.** `tbhb/vale-ai-tells`
   says so explicitly in its own README: "targets technical documentation… less useful for
   creative writing, marketing copy." Nothing here targets first-person professional
   correspondence — cover letters, application answers, recruiter replies, founder outreach.
   That register inverts several of the standard rules: first person singular is mandatory
   rather than discouraged, "we" is usually wrong, contractions are correct, and the dominant
   failure mode isn't `delve` but the applicant-flattery register ("I was thrilled to see",
   "your mission deeply resonates with", "I would be excited to bring my passion for"). Only
   `vale-cli/Joblint` is in the neighbourhood, and it lints the employer's side of the page.
   This is the gap that matters for the repo this research sits next to.

4. **Flag-only versus rewrite is unresolved.** Vale supports `action: replace/remove/edit`,
   and Microsoft, Red Hat, and Google use it heavily for substitutions. But the structural
   tells — negative parallelism, tricolon, staccato fragments, `Label: sentence` — have no
   mechanical fix, so every tool either flags and stops, or hands off to an LLM whose rewrite
   nobody verifies. `theclaymethod`'s framing (deterministic detection as a *constitution*
   over generative rewriting, with any rewrite that reintroduces a tell counted as a failure)
   is the right architecture and is not implemented well anywhere yet.

5. **No interchange format.** Vale YAML is the closest thing to a standard and the Vale
   package hub (`vale-cli/packages/library.json`) is the closest thing to a registry. The
   entire agent-skill half of §5 ships markdown prose lists that no tool can execute, so the
   same fifty phrases have been retyped by hand across a dozen repos with no shared source and
   no way to diff them. A single normalised, dated, attributed JSON corpus with a Vale
   exporter would let all of them stop duplicating work. That is a packaging contribution, not
   a research one, but it's the one with the clearest payoff.

### 9.4 Licensing

**Safe to vendor (permissive, attribution only):**

- MIT: `tbhb/vale-ai-tells`, all `retextjs/*` and `words/*`, `get-alex/alex`,
  `btford/write-good`, all `vale-cli/*` style packages, `redhat-documentation/vale-at-red-hat`,
  `alphagov/gds-vale-styles` (code), `ChrisChinchilla/Openly`, `get-woke/woke`,
  `sapegin/textlint-rule-terminology`, `textlint-ja/textlint-rule-preset-ai-writing`,
  `hardikpandya/stop-slop`, `stephenturner/skill-deslop`, `adamdunkels/deslop-text`,
  `MohamedAbdallah-14/unslop`, `asavvin-pixel/unslop`, `mshumer/unslop`,
  `mandakan/llm-slop-detector`, `sam-paech/slop-forensics`, `client9/misspell`,
  `streetsidesoftware/cspell`, `DavidAnson/markdownlint`, `remarkjs/remark-lint`, `textstat`.
- MIT by LICENSE file even though the GitHub API reports NOASSERTION (I checked each):
  `Syntaf/vale-llm-slop`, `woerndl/unsloppify`, `walidboulanouar/anti-ai-slop`.
- BSD-3: `amperser/proselint`, `vale-cli/proselint`, `ahans30/Binoculars`.
- Apache-2.0: `splunk/vale-splunk-style-guide`, `DataDog/datadog-vale`, `elastic/vale-rules`,
  `SicariusSicariiStuff/SLOP_Detector`, `sam-paech/antislop-sampler`, `Automattic/harper`,
  `crate-ci/typos`. Apache-2.0 carries a patent grant and a NOTICE obligation — fine for a
  permissive project, needs the notice preserved.
- CC0-1.0: `PatrickJS/awesome-cursorrules`. No obligations at all.

**Copyleft — will contaminate; keep out of the codebase:**

- `badmuriss/unslop` — **CC-BY-SA-4.0**. Derivatives of the word lists must be
  share-alike. Read for ideas, don't copy strings.
- `canonical/documentation-style-guide` — **CC-BY-SA-4.0**. Same.
- `codespell-project/codespell` — **GPL-2.0**. Its dictionaries are covered. Use `typos`
  (Apache/MIT) or `misspell` (MIT) instead.
- `languagetool-org/languagetool` — **LGPL-2.1**. Fine to shell out to; do not statically
  link or copy `grammar.xml` rules into a permissive tree.
- `jxmorris12/language_tool_python` — **GPL-3.0**. Avoid entirely in a permissive project.

**No licence at all — legally all-rights-reserved, do not copy:**

- `theclaymethod/unslop` (316 stars, and the most interesting evals work in the category —
  worth asking the author to add a licence)
- `anthropics/skills`
- `Hello-SimpleAI/chatgpt-comparison-detection`
- `textlint-rule/textlint-rule-write-good`
- `iddl/hemingway-vscode`
- `deniseli/StrunkAndWhiteLinter`

**Ambiguous, check before use:**

- `google/styleguide` — **CC-BY-3.0**. Attribution required. Note that the Google *developer
  documentation* style guide (the one that matters for prose) is separately licensed CC-BY-4.0
  on developers.google.com; `vale-cli/Google` is an independent MIT implementation of it, which
  is why that package is the safe route.
- `vale-cli/Microsoft` and `vale-cli/IBM` — the Vale YAML is MIT, but the *content* encodes
  the Microsoft Writing Style Guide and the IBM Style Guide respectively. Microsoft's guide is
  CC-BY-4.0; IBM's is not open-licensed. Copying IBM's `Terms.yml` swap table wholesale is a
  risk the MIT wrapper does not remove.
- `theletterf/valegen`, `vivek3141/ghostbuster`, `peteromallet/desloppify` — NOASSERTION and I
  did not confirm a LICENSE file. Verify before use.
- `alphagov/gds-vale-styles` — MIT code, but the documentation is Crown copyright under
  Open Government Licence 3.0. The YAML is fine.
