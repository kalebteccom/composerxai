<!-- composerxai-lint mode=account -->
<!-- composerxai-lint disable lex/significance-inflation,struct/negative-parallelism -->
<!-- A survey of tell detectors has to quote the tells. Both rules above fire only on
     catalogued examples, never on this file's own prose. Scoped, not disabled. -->

# Prior art

Everything here was built on other people's work. This file records whose, what was taken from each,
and what may legally be copied into this repository.

About 180 sources sit under `research/`. Listed below are the ones that changed a decision.

---

## 1. What this project does not claim

**AI-tell detection is essentially solved, and someone else solved it.**

[`tbhb/vale-ai-tells`](https://github.com/tbhb/vale-ai-tells) ships 111 prose rules, 15
commit-message rules and 18 experimental structural rules. Each carries a written rationale. Most are
gated with lookarounds and subject or complement constraints to hold the false-positive rate down. It
has rules nobody else thought to write: `IncompleteComparison` (an intensified comparative with no
second term, "significantly faster" than *what*), `NominalizedScopeChange`, `NounString` (four
consecutive common nouns), `VerbTricolonDensity`, `StackedHedges` ("could potentially"), and around
thirty `Figurative*` rules that each isolate one overused metaphorical verb and gate it on its
complement. It is MIT, it is actively developed, and it installs into Vale in three lines.

If the plan for this project were "build a better list of AI-sounding phrases", that plan is dead.
Tony Burns finished it, and the marginal rule anyone else adds is worth roughly nothing. This project
treats `vale-ai-tells` as the reference implementation for lexical and structural tell detection
and does not compete with it.

Two more things are not claimed here.

**Documentation mode theory belongs to Daniele Procida.** Diátaxis derives four documentation modes
from a closed 2×2 of craft, and argues that there could not be three or five. That derivation is the
source of its authority. Nothing in this project has an equivalent argument, and any framework that
copies the *form* of that claim without the derivation is borrowing the aesthetics of rigour rather
than the rigour.

**Plain-language rules predate all of this by eighty years.** Orwell's six rules (1946), Gowers's
*Plain Words* (1948), the Federal Plain Language Guidelines and Joseph Williams's *Style* cover most
of the ground the AI-slop repositories rediscovered after 2023. The Guardian style guide banned
*key*, *landmark*, *major* and *boost* years before ChatGPT existed. Much of what gets called AI slop
is journalistic and corporate cliché that a model absorbed and amplified.

---

## 2. Licences

This repository will be open source under a permissive licence, so the boundary matters. Every
licence below was read at the LICENSE file on the default branch, not taken from the GitHub API
field. Where the API and the file disagree, the file is recorded and the disagreement noted.

Papers, blog posts and style-guide websites are cited, never copied, so they sit outside these
tables. Their claims and numbers are facts, and facts are not licensable. Their sentences are not.

### 2.1 Safe to vendor

Permissive. Attribution at most. Copy the data, keep the notice.

| Source | Licence (verified at) | What we would take |
|---|---|---|
| [tbhb/vale-ai-tells](https://github.com/tbhb/vale-ai-tells) | MIT — `main/LICENSE`, © 2025-2026 Tony Burns | Token lists and rule rationales. Regexes get re-derived against our own corpus |
| [krishnasunkam/vale-ai-tells](https://github.com/krishnasunkam/vale-ai-tells) | MIT — `main/LICENSE` | The 17 `AiTells` rules. Note the name collision: this is the package Vale's `library.json` points at |
| [mandakan/llm-slop-detector](https://github.com/mandakan/llm-slop-detector) | MIT — `main/LICENSE` | `builtin-rules.json`, the invisible-Unicode table. ZWSP, ZWNJ, ZWJ, LRM/RLM, word joiner, BOM, soft hyphen, NBSP, NNBSP, bidi overrides, each with a severity and a deterministic replacement. A solved problem we should not re-solve. Also the per-model packs |
| [walidboulanouar/anti-ai-slop](https://github.com/walidboulanouar/anti-ai-slop) | MIT — `main/LICENSE`. **API reports NOASSERTION** | `patterns.json`, already shaped as `{text, replace, severity}` |
| [woerndl/unsloppify](https://github.com/woerndl/unsloppify) | MIT — `main/LICENSE`. **API reports NOASSERTION** | `references/phrases.txt`, one POSIX ERE per line, grouped by failure mode |
| [Syntaf/vale-llm-slop](https://github.com/Syntaf/vale-llm-slop) | MIT — `main/LICENSE`. **API reports NOASSERTION** | The `RestatesCode` rule, a docstring that only repeats the signature. Nobody else has it |
| [adamdunkels/deslop-text](https://github.com/adamdunkels/deslop-text) | MIT — `main/LICENSE` | `tests/regression/corpus/` — thirty-plus AI-generated documents across ten genres, split by generating model. More valuable than the rules |
| [retextjs/*](https://github.com/retextjs) and [words/*](https://github.com/words) | MIT — `main/license` (lowercase), © Titus Wormer | `retext-equality/data/en/*.yml` — 425 blocks of `inconsiderate`/`considerate` maps rather than a flat ban list, so it can drive suggestions. Plus `retext-simplify` patterns and `retext-passive` lists |
| [sapegin/textlint-rule-terminology](https://github.com/sapegin/textlint-rule-terminology) | MIT — `master/License.md`, © 2019 Artem Sapegin | `terms.jsonc`, single-file and curated |
| [redhat-documentation/vale-at-red-hat](https://github.com/redhat-documentation/vale-at-red-hat) | MIT — `main/LICENSE` | `RedHat/SimpleWords.yml`, a 107-entry plain-English substitution table not tied to a corporate guide's own copyright |
| [vale-cli/write-good](https://github.com/vale-cli/write-good), [/Google](https://github.com/vale-cli/Google), [/Microsoft](https://github.com/vale-cli/Microsoft), [/packages](https://github.com/vale-cli/packages) | MIT — `master/LICENSE`, © errata.ai / Joseph Kato | `write-good` as the template for translating a JS word list into Vale YAML. Google's rules for the false-positive tuning recorded in their comments |
| [textlint-ja/textlint-rule-preset-ai-writing](https://github.com/textlint-ja/textlint-rule-preset-ai-writing) | MIT — `main/LICENSE`, © 2025 azu | The structural rules, which are language-agnostic: bold-label bullet lists, bolded headings, the `Label: sentence` construction |
| [hardikpandya/stop-slop](https://github.com/hardikpandya/stop-slop) | MIT — `main/LICENSE` | The five-axis rubric (Directness, Rhythm, Trust, Authenticity, Density) and the structure catalogue |
| [asavvin-pixel/unslop](https://github.com/asavvin-pixel/unslop) | MIT — `main/LICENSE` | The dating-and-decay framing, and category 19, "clean slop" — what is left after the other eighteen are fixed |
| [mshumer/unslop](https://github.com/mshumer/unslop) | MIT — `main/LICENSE` | The method, not a rule set: generate 50–100 samples, measure the model's own defaults, emit a bespoke profile |
| [stephenturner/skill-deslop](https://github.com/stephenturner/skill-deslop), [MohamedAbdallah-14/unslop](https://github.com/MohamedAbdallah-14/unslop) | MIT — `main/LICENSE` | Scientific-register carve-outs; multi-harness packaging from one source |
| [sam-paech/slop-forensics](https://github.com/sam-paech/slop-forensics) | MIT — `main/LICENSE`, © 2025 Sam Paech | The toolkit, to re-run against our own corpus. **Not the shipped list** — see §2.4 |
| [amperser/proselint](https://github.com/amperser/proselint) | BSD-3 — `main/LICENSE.md` | `hedging.py`, `weasel_words.py`, `uncomparables.py`. Not `cliches/garner` — see §2.4 |
| [SicariusSicariiStuff/SLOP_Detector](https://github.com/SicariusSicariiStuff/SLOP_Detector) | Apache-2.0 — `main/LICENSE` | Upstream of mandakan's per-model packs. Preserve the NOTICE |
| [splunk/vale-splunk-style-guide](https://github.com/splunk/vale-splunk-style-guide), [DataDog/datadog-vale](https://github.com/DataDog/datadog-vale), [elastic/vale-rules](https://github.com/elastic/vale-rules) | Apache-2.0 — `main/LICENSE` | Splunk's `DontUse.yml` is the strongest opinionated corporate set after Red Hat |
| [thegooddocsproject/templates](https://github.com/thegooddocsproject/templates) | **0BSD** — `main/LICENSE.txt`. Zero-Clause BSD, no attribution required. *(Not MIT-0, as our own research note said.)* | The five-file template convention (template / guide / resources / process / example), the section orders, the sentence formulas, and the numeric ceilings |
| [ddbeck/readme-checklist](https://github.com/ddbeck/readme-checklist) | CC0 — `main/LICENSE` | "Describe the project in terms of what it does, not what it's made out of." The screen-count thresholds. "A comprehensive README is a bad README" |
| [GSA/plainlanguage.gov](https://github.com/GSA/plainlanguage.gov) | US Government work, public domain, plus CC0 — `main/LICENSE.md` | The Federal Plain Language Guidelines. The single richest source of defensible numeric thresholds, and free of every restriction |
| [adr/madr](https://github.com/adr/madr) | MIT OR CC0-1.0 — `main/LICENSE` | The `Good, because` / `Bad, because` / `Neutral, because` prefix, which forces every consequence to carry a reason. And `### Confirmation` — how compliance will be verified |
| [MicrosoftDocs/microsoft-style-guide](https://github.com/MicrosoftDocs/microsoft-style-guide) | **CC BY 4.0** — `main/LICENSE` | Voice/tone split, the top-ten tips, the scannable-content numbers. Attribution only, no share-alike |
| [github/docs](https://github.com/github/docs) | CC BY 4.0 — `main/LICENSE` | The content model: article anatomy in fixed order, title grammar by content type, the character limits |
| [RichardLitt/standard-readme](https://github.com/RichardLitt/standard-readme) | MIT — `main/LICENSE` | The ordering spec, which is the one README standard that is actually machine-checkable |
| [olivierlacan/keep-a-changelog](https://github.com/olivierlacan/keep-a-changelog), [vweevers/common-changelog](https://github.com/vweevers/common-changelog) | MIT — `main/LICENSE` | Six change types and seven principles; Common Changelog's stricter four categories and its entry grammar |
| [conventional-commits](https://github.com/conventional-commits/conventionalcommits.org) | MIT — `master/LICENSE` | The commit grammar |
| [jamescooke/restapidocs](https://github.com/jamescooke/restapidocs) | **Unlicense** — `master/UNLICENSE`, public-domain dedication. *(Our research note said "unlicensed", which reads as the opposite of what it is.)* | The (condition, code, content) triple, one per distinct response condition |
| [OAI/OpenAPI-Specification](https://github.com/OAI/OpenAPI-Specification) | Apache-2.0 — `main/LICENSE` | The `summary` versus `description` split, and the field list as a reference-completeness checklist |
| [dguo/make-a-readme](https://github.com/dguo/make-a-readme) | MIT — `main/LICENSE` | Support, Roadmap and Project status as first-class sections |
| [npryce/adr-tools](https://github.com/npryce/adr-tools) | **Split licence.** The tool is GPL-3.0. The *content it adds to your project* is CC BY 4.0 — stated in `master/LICENSE.txt` | The four-section Nygard template, under CC BY 4.0. **Do not link or bundle the tool** — see §2.3 |
| [google/styleguide](https://github.com/google/styleguide) | CC BY 3.0 — `gh-pages/LICENSE` | Listed for completeness. Mostly code style. The Google *developer documentation* guide is a different thing, and `vale-cli/Google` is its safe MIT route |
| [textstat](https://github.com/textstat/textstat), [markdownlint](https://github.com/DavidAnson/markdownlint), [write-good](https://github.com/btford/write-good), [alex](https://github.com/get-alex/alex), [vale](https://github.com/vale-cli/vale), [Openly](https://github.com/ChrisChinchilla/Openly), [woke](https://github.com/get-woke/woke), [misspell](https://github.com/client9/misspell) | MIT — verified individually | Readability formulas, markdown rules, engine. `woke`'s sourced `note` field per rule is the pattern worth copying |
| [crate-ci/typos](https://github.com/crate-ci/typos) | Apache-2.0 OR MIT — `LICENSE-APACHE` / `LICENSE-MIT` | Spell checking, in place of codespell. See §2.3 |
| [Automattic/harper](https://github.com/Automattic/harper) | Apache-2.0 — `master/LICENSE` | Offline grammar checking, in place of LanguageTool. See §2.3 |

### 2.2 Safe to cite only

Read it, quote it with attribution, credit it. Do not copy its text into this repository as project
content.

Two different reasons land in this bucket, and they are worth keeping apart.

**No licence at all.** Absent a licence, the work is all-rights-reserved by default. Being on GitHub
is not a grant.

| Source | Status | Why it still matters |
|---|---|---|
| [theclaymethod/unslop](https://github.com/theclaymethod/unslop) | **No LICENSE file** — confirmed on `main` | `evals/CORE-BENCHMARK.md` is the best published thinking on how to evaluate this class of tool: detection precision and recall, repair success, preservation, collateral damage, byte-exact no-op on clean prose. Its latest public verdict is an honest **no-ship**. That verdict is the single most useful data point in the entire survey, and it belongs to its author. Worth asking him to add a licence |
| [hackergrrl/art-of-readme](https://github.com/hackergrrl/art-of-readme) | **No LICENSE file** — `master` | "Cognitive funneling": order README sections by how quickly a reader can bail. Usage before API, API before installation |
| [anthropics/skills](https://github.com/anthropics/skills) | **No LICENSE file** — `main` | Reference for skill *structure* only |
| [Hello-SimpleAI/chatgpt-comparison-detection](https://github.com/Hello-SimpleAI/chatgpt-comparison-detection), [iddl/hemingway-vscode](https://github.com/iddl/hemingway-vscode), [textlint-rule-write-good](https://github.com/textlint-rule/textlint-rule-write-good) | No licence | HC3 corpus; the only credible Hemingway reverse-engineering; a wrapper |
| Michael Nygard, ["Documenting Architecture Decisions"](https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions) (2011) | Blog post, no licence | The ADR format, and the best writing rules in that literature: one or two pages; write it as a conversation with a future developer; "Bullets are acceptable only for visual style, not as an excuse for writing sentence fragments." The *template* reaches us cleanly through adr-tools under CC BY 4.0 |

**Proprietary, and the reason `registers/reference.md` paraphrases rather than quotes.**

| Source | Status | What was taken, and how |
|---|---|---|
| **ASD-STE100, Simplified Technical English** ([asd-ste100.org](https://www.asd-ste100.org/)) | Proprietary specification, ASD. Free for non-commercial use on request; the text and the controlled dictionary are **not** open-licensed | The aerospace controlled language in use since 1983, and forty years of evidence for the one claim this project makes about reference writing: that sounding mechanical there is correct. `skills/composing/registers/reference.md` restates eight of its principles **in our own words** — short sentences, one word for one meaning, active voice, simple tenses, condition before command, one instruction per sentence, terms defined at first use, no hedging. No specification text and no dictionary entry is reproduced anywhere in this repository |
| [AminBlg/SimpleEnglish](https://github.com/AminBlg/SimpleEnglish) | MIT — `main/LICENSE` | The closest prior art in this category, and it implements STE as an agent skill. Read, not installed. Full assessment in `research/11`. Two things taken as findings: the sibling `.claude-plugin/` and `.codex-plugin/` manifest layout over one shared `skills/` tree, and its `evals/` result of 74.6% violation reduction, which corrected our claim that nobody in this category measures. It covers one register and says so, which is why it is prior art rather than a competitor |

**Copyleft—ShareAlike will propagate into any derivative.** Short attributed quotation for
commentary, as in this file, is ordinary use and not what these licences regulate. Lifting the text
wholesale as project content is what triggers them.

| Source | Licence (verified at) | What was taken, and how |
|---|---|---|
| [Wikipedia: Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing) | CC BY-SA 4.0 (Wikipedia) | The best single artefact in this space, and the most-cited source in our research. Every claim is backed by a diff to a real revision. Three things were taken as *findings*, not as text: era-dated vocabulary lists (2023–mid-2024, mid-2024–mid-2025, mid-2025 onward, each shorter than the last); the density principle, that one or two words are coincidence and many are diagnostic; and the **signs of human writing** inversion, which is the most useful idea in the whole corpus. Also its own caveat, which this project adopts: "Please do not merely treat these signs as the problems to be fixed; that could just make detection harder" |
| [Diátaxis](https://diataxis.fr) / [evildmp/diataxis-documentation-framework](https://github.com/evildmp/diataxis-documentation-framework) | **CC BY-SA 4.0** — `main/LICENSE.rst`. The API reports NOASSERTION, which is why our own research note carried no licence for it | The load-bearing framework in this project. Taken as ideas, which are not licensable: mode discipline; blur as the central defect; needs-first derivation; the compass as a doubt-detector rather than a classifier; the functional/deep quality split with its one-way dependency; the small-step anti-plan workflow; "complete, not finished". **Its "language of…" sentence stems are its expression, not its ideas.** Our research quotes several verbatim; anything shipped in a template must be paraphrased or the ShareAlike obligation accepted |
| [Write the Docs](https://www.writethedocs.org/guide/) / [writethedocs/www](https://github.com/writethedocs/www) | CC BY-NC-SA 4.0 — `main/LICENSE.md` | ARID, "Accept (some) Repetition In Documentation", with the best paragraph in that guide. "Consider incorrect documentation to be worse than missing documentation." The fifty-fire-hydrants map analogy for partial coverage. Ideas only — NC and SA both bite |
| [badmuriss/unslop](https://github.com/badmuriss/unslop) | CC BY-SA 4.0 — `main/LICENSE` | The surface-tells / narrative-tells two-layer split. Read for the shape, do not copy strings |
| [canonical/documentation-style-guide](https://github.com/canonical/documentation-style-guide) | CC BY-SA 4.0 — `main/LICENSE.txt` | Canonical's blog restatement of Diátaxis contains a line worth carrying and paraphrasing: adopting the framework makes existing documentation look *worse* first, because it exposes what was already missing. Any tool built on this should warn its users in those terms |
| [arc42/arc42-template](https://github.com/arc42/arc42-template) | CC BY-SA 4.0 — `master/LICENSE.txt` | The twelve-section architecture skeleton, and the observation that section 9 is where ADRs live, which makes arc42 and MADR complementary rather than competing |

### 2.3 Do not touch

| Source | Licence | Why |
|---|---|---|
| [codespell-project/codespell](https://github.com/codespell-project/codespell) | **GPL-2.0** — `main/COPYING` | The misspelling dictionaries are covered. Use `crate-ci/typos` (Apache/MIT) or `client9/misspell` (MIT) instead |
| [languagetool-org/languagetool](https://github.com/languagetool-org/languagetool) | LGPL-2.1 | Fine to shell out to as a separate process. Do not statically link, do not copy `grammar.xml` rules into a permissive tree |
| [jxmorris12/language_tool_python](https://github.com/jxmorris12/language_tool_python) | GPL-3.0 | Avoid entirely |
| [npryce/adr-tools](https://github.com/npryce/adr-tools), *the tool* | GPL-3.0 — `master/LICENSE.txt` | Do not bundle or link the shell scripts. The template content it emits is separately CC BY 4.0 and is fine |
| [joelparkerhenderson/architecture-decision-record](https://github.com/joelparkerhenderson/architecture-decision-record) | **CC BY-NC-SA 4.0** — `main/LICENSE.md` | NonCommercial. Our research note recorded no licence for this repo, which was an omission. Its own README says the third-party templates it collects carry their own licences, so those must be checked at source. The ideas taken from it (present-tense imperative filenames; one decision per record; timestamp anything that ages; the honest admission that "in theory immutability is ideal, in practice mutability has worked better") are attributed here and not reproduced |
| [vale-cli/IBM](https://github.com/vale-cli/IBM) | MIT wrapper — `master/LICENSE`, © errata.ai | **The MIT on the wrapper does not clear IBM's copyright in the IBM Style Guide, which is not open-licensed.** Copying `Terms.yml` wholesale is a risk the wrapper does not remove. The same caution applies in weaker form to `vale-cli/Microsoft`, except that Microsoft's guide is itself CC BY 4.0, so that one is clean |
| [theletterf/valegen](https://github.com/theletterf/valegen), [vivek3141/ghostbuster](https://github.com/vivek3141/ghostbuster), [peteromallet/desloppify](https://github.com/peteromallet/desloppify) | NOASSERTION, not verified at file | Verify before any use. `desloppify` is about code quality and is the wrong problem anyway |

### 2.4 Available but rejected on merit

Not a licence question. These are permissively licensed and still should not be used.

- **`sam-paech/slop-forensics` `data/slop_list.json`.** The derivation method is excellent. The
  shipped list is derived largely from creative-writing generation, so the top of the alphabet reads
  *absently, abuzz, ached, acrid, adira, aedan, aelara, aeldrin*—fantasy character names. Useless
  for professional prose. Re-run the toolkit against our own corpus instead.
- **`Microsoft/Adverbs.yml`.** Bans an enormous adverb list including *beautifully*, *bitterly*,
  *bleakly*. Correct for Azure docs, wrong for anything with a voice. Same objection to
  `stop-slop`'s blanket "kill all adverbs"—a good instinct stated as an absolute rule, and as an
  absolute rule it damages good writing.
- **Regex passive-voice detection.** Microsoft's and Google's `Passive.yml` are the same file: a
  `be`-verb followed by a 200-entry participle list. Geoffrey Pullum showed that three of the four
  examples Strunk and White give under "use the active voice" are not passives at all. Worse,
  Reinhart et al. measured GPT-4o using agentless passive at roughly *half* the human rate, so
  flagging the passive pushes text toward AI style, not away from it. If we want passive detection we
  need a POS tagger.
- **Readability metrics as lint alerts.** They produce a number with no actionable fix. Compute them,
  report them, do not fail on them.
- **`proselint`'s `cliches/garner` and `restricted/top1000`.** Thousands of literary entries with a
  near-zero hit rate on professional prose.

---

## 3. The evidence base

These are papers and articles. They are cited, not copied, and they are the reason particular rules
exist rather than others.

**Reinhart, Markey, Laudenbach and Brown, "Do LLMs write like humans?" (PNAS, 2025).** The strongest
source for structural rather than lexical tells, scored with Biber's 66-category tagset over parallel
human/model corpora. GPT-4o uses present participial clauses at **5.3×** the human rate,
`that`-clauses as subject at **2.6×**, nominalisations at **2.1×**, phrasal coordination at **1.9×**.
It also gives the register argument that reframes every word list: "humans refrain from using these
words *in certain genres*". And the cause: instruction tuning, not pretraining. Base Llama models
match human feature rates; the instruction-tuned variants diverge.

**Russell, Karpinska and Iyyer (ACL 2025).** Five expert annotators misclassified 1 of 300 articles by
majority vote. Their coded explanations give the priority order a linter should use: vocabulary 53.1%,
sentence structure 35.9%, grammar and punctuation 24.8%, originality 23.7%, quotes 22.3%, clarity
19.5%. Two findings changed our design directly. Vocabulary cues drop from 57.1% to 42.3% of correct
detections once a model is told to avoid AI vocabulary, so lexical rules are the first thing an
adversary fixes. And their annotators associated *dashes and ellipses* with **human** writing.

**Juzek and Ward (COLING 2025).** The 21 focal words, each with a measured PubMed frequency change:
*delves* +6,697%, *showcasing* +1,396%, *delve* +1,375%, *underscores* +904%, *intricate* +611%. They
also checked the International Corpus of English and found no support for the theory that these words
come from a particular variety of English. Sean Goedecke checked ICE-Nigeria for em dashes separately
and found the same null. Two corpus checks against one plausible story.

**Kobak, González-Márquez, Horvát and Lause (Science Advances, 2025).** 15M+ PubMed abstracts. At
least 13.5% of 2024 abstracts show LLM processing. The finding that matters most: the excess
vocabulary migrated from content words to **style words**, 66% verbs and 18% adjectives. The tell is
in how things are said, not what is discussed.

**Liang et al. (ICML 2024; Nature Human Behaviour; 2025).** Corpus-level estimation across peer
reviews, papers, and then professional correspondence. Their own methodological caveat is the one this
project adopts as a hard rule: these methods work in aggregate and are **unreliable on a single
document**. Their earlier paper on detector bias against non-native English writers is the reason no
rule here punishes limited lexical range.

**Ju, Blix and Williams (ACL Findings 2025).** The variance finding, stated without the word
burstiness: LLM-regenerated text shows "a shifted mean, a lower standard deviation, and a reduction of
the long tail", from sentence length up to parse depth. This is the empirical backbone for every
uniform-rhythm rule, and it is about variance, which is measurable.

**Joel Gladd, "A Better Way to Identify AI Slop".** The most directly useful source for building
anything. He measures *rhetorical template density* rather than presence, and publishes a controlled
comparison: his own post at 2.83 templates per thousand words against Gemini's summary of the same
article at 26.7. Roughly a 9× gap. Density is the number one tell and nobody's linter measures it.

**Wendy Laura Belcher, "10 Ways AI Is Ruining Your Students' Writing" (Chronicle, 2025).** The best
non-statistical taxonomy, because every item names a failure of *thought*: the banal argument, the
dead-end sentence, elegant variation caused by the repetition penalty, chained abstractions, misstated
causation, the interpreter removed from the sentence, hyper-adjectival prose.

**Hollis Robbins, "How to tell if something is AI-written".** The visualization test—"If you can't
see anything, if nothing springs to mind, it's probably AI"—is the best single rule in the corpus
and is completely unautomatable. Said here rather than buried.

**Jill Walker Rettberg, "Genre glitches".** Coins the useful term: a word heavily associated with a
genre markedly different from the text it appears in. Food-blog register in a business story;
tourism-brochure register in a court filing. Sharpest in operational writing.

**Geoffrey Pullum, "50 Years of Stupid Grammar Advice" (2009).** Read before writing rule one of any
linter. "Omit needless words" is useless advice, because the students who know which words are
needless do not need the instruction. That objection applies with full force to every AI word list.

**Orwell (1946), Gowers (1948), Williams's *Style*, the Guardian style guide.** Orwell's rule (i) does
not proscribe a list, it proscribes familiarity itself, and it is the only rule that survives the arms
race. Williams's *Actions and Characters* lessons are the exact inverse of Reinhart's measured
findings, which is a strong signal about which classic to build on. Our research read Williams and
Gowers through Wikipedia and says so; both books should be bought before the style rules are finished.

**The em-dash dispute.** Noreen Malone's anti-em-dash polemic ran in *Slate* in May 2011, eleven years
before ChatGPT. That single fact settles more of the argument than any measurement. What survives is
narrower and better: spaced em dashes are a copy-paste artefact, and the em-dash *pivot* is a
structural tell that happens to use a dash. Lint the pivot, not the glyph.

**Email and correspondence.** Boomerang's 40M-email dataset gives the length floor as well as the
ceiling (50–125 words), the 1–3 question band, and the finding that matters most: slightly positive
*or* slightly negative sentiment both beat neutral by 10–15%. Flat, hedged, affectless prose is the
worst-performing register and it is exactly the model default. Flynn and Bohns (2008) found people
underestimate by about half how likely a stranger is to say yes to a **direct** request, and the
mechanism explains why over-hedging hurts: the requester over-weights the instrumental cost of saying
yes and misses the social cost of saying no. Michael Seibel's investor-email post supplies the
escalation rule—ask for the smallest thing and let the recipient upgrade it. Paul Graham's "Write
Like You Talk" is a manual de-AI-ifier: nobody says "serves as a testament to" out loud to a friend.
Mike Davidson's 2007 post is the origin of the five-sentence convention; cite the post, because the
`sentenc.es` domains are dead.

**Sources that could not be read**, recorded because the alternative is pretending. The Economist's
July 2026 em-dash study, cited only second-hand through Wikipedia, and its finding is load-bearing.
Sam Kriss in the *NYT Magazine*. The *Washington Post* interactive, from which only the methodology was
recoverable. ISO 24495-1 itself, which is paywalled at CHF 96—the four principles below are from the
International Plain Language Federation, not from the standard. One number from the Federation is
worth more than most of the word lists: the standard contains roughly 485 ideas and **only 7% concern
word choice**. Any framework that is a banned-word list is addressing seven percent of the problem.

---

## 4. Internal prior art

Four bodies of work from Kalebtec and one client engagement. Each is credited for a specific contribution, and each
is credited most for the place where its own evidence contradicted its own headline claim. That is
what made them usable.

### 4.1 The founding case

A paid CTO test case delivered to a founder, written almost entirely by agents over four days, then
rescued by hand. Ten documents went from 60,853 words to 15,337—a 75% cut with no loss of substance.
Every fact that mattered survived. That ratio is the finding: three quarters of what was written
should never have been written.

The rescue worked and the result was still not good, and the reason is the founding premise of this
project. The prose tells were real and were fixable in an afternoon. The structural failure was not:
nobody decided who each document was for before writing it. A working log, an audit trail, a defect
register and a client deliverable were the same file. Project-internal vocabulary reached filenames the
client would see. A private index headed "PRIVATE, never commit any of this" went into the repository
the client was invited to.

The full post-mortem is `research/00-why-this-exists.md`. It is the specification this repository is
written against, including the rules about how this file itself is written.

### 4.2 `Kalebtec/context-specification-language`

An eval-gated R&D project asking whether structured XML tags beat markdown as the format for specs
handed to AI agents. It shipped a five-crate Rust implementation, a dual corpus, two eval harnesses,
four ADRs—and then measured its own hypothesis and refused it.

XML beat markdown on comprehension by 1.1 points at p = 0.062, recorded as **NO-GO** on the grounds
that a near-miss is a no-go. On the decomposition track, a control arm using *the same checklist as
markdown headings instead of tags* beat the tagged format on classification accuracy, 76.7% against
74.4%, with fewer hallucinated requirements, at roughly a quarter of the token cost. The owner
declined to re-target the pre-registered bar a third time, and wrote down why: "A pre-registration that
you keep re-targeting until it passes is worse than admitting the empirical answer."

That refusal is why this source is worth more than a positive result would have been.

What this project takes:

- **The gain comes from named, explicit slots, not from the syntax that carries them.** Markdown
  headings supply those slots. Every format rule here follows from that, and it is measured rather
  than asserted.
- **The slot-naming result.** Recall on "we need this information from someone outside the team" went
  from 20.8% to about 80% once the category was *named*—in both the tagged arm and the heading arm.
  Naming a category is free in markdown.
- **Token facts**, measured with tiktoken: a tag pair costs a fixed two-token bracket tax twice over;
  hyphenated element names are punished on open and close (`out-of-scope` is six tokens); attribute
  syntax alone is about 28% of a tagged document; 60% of a fully tagged document is markup.
- **Three renderings of one document, chosen by consumer**—canonical for git and human diff,
  compressed for the model, read-optimised for human review.
- **The distinction between an assumption, an open question and a request for input.** If the answer
  is looked up or handed over, it needs input. If it is chosen, it is an open question.
- **The honest half of the headline claim.** "XML tags are better for context and instructions" is
  vendor guidance from Anthropic's prompt-engineering docs that this repository never tested. Its own
  eleven instruction prompts contain zero XML tags. Revealed preference: markdown for the instruction,
  tags only for the artefact. This project treats that half as a plausible default and labels it as
  unmeasured wherever it appears.
- **The ceiling.** A sceptical evaluator audited real plan reviews and found that 50–85% of findings
  are author-supplied substance that no format change touches, and that five of eleven proposed
  structural mechanisms caught nothing at all. The line worth keeping: "the author satisfies the lint
  with vague text." A required section is a prompt, not a guarantee. Any check this project ships that
  verifies a section exists must be described as verifying that a section exists.

### 4.3 GPD, the specification framework in `Kalebtec/project-ideas`

A hook-enforced, seven-stage idea → spec → roadmap → progress framework with a dozen real projects
behind it. Its bar is the clearest statement of what a spec is for that either internal source
contains: *a competent agent should be able to execute a phase without making architectural decisions
of their own.*

Taken from it:

- **Four artefact templates in their working section orders**, and the agent-ready phase in
  particular: Goal, Business rationale, Scope, Requirements split into functional and non-functional,
  a decisions table with an *Alternatives considered* column, Milestones carrying Intent and
  Acceptance, Deliverables, verifiable Exit criteria, Dependencies, Rough effort.
- **Stage transitions enforced by tooling rather than instruction.** A `PreToolUse` hook blocks
  writing a roadmap when no spec exists, blocks editing an idea once a spec exists, and blocks any
  surviving `{{placeholder}}` or literal `YYYY-MM-DD`. The ordering constraint between artefact types
  is a mechanism, not a convention.
- **Rationale by assertion is not rationale.** "Because it's better" fails. "Because Apache-2.0's
  patent grant matters for an OSS tool sitting under a commercial SaaS" passes.
- **The milestone/exit-criterion test.** "Flow 1 tested" is a task. "Flow 1 proves the
  agent-integration contract under under-specified input" is a milestone. "User happy with output" is
  a wish; "user accepts the PR with no structural changes" is verifiable.
- **Six separate anti-sprawl mechanisms**, where most frameworks have one. The best of them is a
  compression-only cycle that is *forbidden from changing any decision*, with a grep-based
  verification that the locked facts survived. That is the closest existing answer to the problem in
  §4.1.
- **Never fabricate to avoid an empty heading.** Unanswered items go in Open questions, not as invented
  answers. No invented personas, no invented numbers.

Where it contradicts itself, and where that is useful: one skill says fill every section, another says
"any subsection with nothing to say stays out, don't pad." Both are right about different artefacts,
and the distinguishing principle is worth more than either rule. **A missing section in a spec is
information**—it says the decision has not been made. A missing subsection in a phase is not.

And the honest limit: GPD's effectiveness has never been measured. There is no comparative evidence
that a fourteen-section spec produces better outcomes than a shorter one. It is adopted here for its
design quality and its enforcement mechanisms, not on evidence.

### 4.4 A client production monorepo

The client is not named, and the engagement's confidentiality terms are why. What can be said is the
shape: a production monorepo where the lead/engineer split is expressed in machine-validated
documents. It is the load-bearing internal source, because it is the only one with a real team, a
real system, and enough artefacts to count.

**The measurement that shaped this repository's rules about rules.** Across 756 ticket files, sections
the validator hard-fails on appear in about 80% of tickets. Sections it merely warns about appear in
6–11%. Documentation-impact is described as a "hard check" in the skill definition and appears in 11%.
Decisions-and-rationale—the thing that makes a spec re-readable a year later—appears in 6%, under
three different spellings. **An unenforced template section is decoration.** That number is why every
rule this project ships is classified as enforceable or judgement when it is written.

Also taken:

- **Each document class declares its own trust level.** A table of Docs / Audience / Contract, in
  which `plans/` is explicitly allowed to go stale and local review memory is explicitly
  non-authoritative. A spec that admits it expires is more useful than one that silently rots. Paired
  with a published source-of-truth precedence order and a tie-break for the live case: if the prompt
  and the spec file disagree, the file wins.
- **Tracked spec, untracked working memory, split at the VCS boundary.** Plans are committed; review
  notes, orientation briefs and worker logs are gitignored. Only cross-boundary handoffs get promoted
  to tracked. This is the cleanest available answer to where agent output goes, and it is the
  `plans/` versus ignored-scratch split in this repository's `CONTRIBUTING.md`.
- **The hallucination registry.** A repository-specific list of wrong things agents have actually
  written, each paired with the real API. A negative-knowledge cache. It has no human equivalent—a
  human engineer who does not know an API looks it up, while a model produces a plausible wrong one —
  and it is the highest-leverage agent-only artefact in either internal source.
- **The durable failure-mode register**, where every entry cites the incident that produced it, gated
  by an admission threshold: only patterns confirmed across multiple interactions, never a single
  observation. That threshold is what stops the register becoming a junk drawer.
- **The inversion for a non-engineer reader.** The design-handoff format bans `string | null`
  and `Ref<T>`, mandates "show" and "hide" over "render", and puts component structure and wireframes
  first with the full field reference last. For an engineer or an agent the reference goes first. Same
  facts, inverted order.
- **A brake on severity inflation**: if you cannot articulate which production behaviour an issue
  breaks, it is not critical.
- **Ratchet, don't bankrupt.** Legacy violations are grandfathered per file on a list that only
  shrinks, with diff-scoped checking so grandfathered files still fail on *new* violations.

**Where its evidence contradicts its own rules**, which is the more useful half:

- The clean-document rule enumerates specific forbidden strings and scores zero violations on exactly
  those, while 68 review-round references leak into three plans' ticket bodies in a form the rule did
  not list. The two worst offenders are an overnight autonomous run and the largest plan in the repo.
  **Write rules as principles, then enforce with a pattern, not a word list. And route unattended agent
  output to the ephemeral tier with a human-reviewed promotion step.**
- The repository has no root `README.md`. The de facto front door for a human is a file written for
  agents.
- The automatically-loaded agent instruction file duplicates the authoritative one, is 3.5× its
  length, declares itself subordinate, and is wrong on two of the commands it duplicates. **If a fact
  appears in two files it will diverge, and the copy the tool loads automatically will be the wrong
  one.**

### 4.5 The wider Kalebtec survey, and one skill

Six repositories surveyed for which conventions survive when nobody enforces them.

The strongest finding is a convergence. **Four repositories independently arrived at the same shape:
a decision spine separated from the evidence depth behind it**—RFCs beside references, ADRs beside
research, live docs beside an archive, plans beside working context. Nobody copied anybody. That is
the documentation layout in `CONTRIBUTING.md`.

A second convergence: append-only, dated, quote-justified convention logs, arrived at independently
three times. And a near-universal habit worth adopting outright—**rules are justified inline, never
merely asserted**. Five of six repositories do this, using a `Why` column or a fixed rule → **Why** →
**How to apply** template. The justification serves both audiences: a human can disagree with the rule
intelligently, and an agent stops over-applying it outside its intended scope.

The counter-evidence in the same survey is equally useful. One repository's decisions section is empty
in 26 of 27 files, which is worse than not having one because it manufactures false confidence that
decisions were captured. One repository ships enforcement hooks with no documented rules anywhere, so
an agent is hard-blocked by a rule it was never given. A "mirror" that a banner says not to edit
directly has already drifted, because a comment saying "re-mirror" is not a mechanism. And a personal
repository gives two commit conventions, two push policies and two directory maps across two files an
agent reads on the same turn.

Finally, **`rowin-profile/.claude/skills/human-voice`**, a production linter for outbound
correspondence, arrived independently at most of the structural tell list—the rule of three,
"not just X but Y", the dramatic one-line paragraph, antithesis pairs, uniform paragraph length, the
closing summary, two-sided hedging, signposting. Two of its lines are imported here directly:

> The linter catches vocabulary. It cannot catch rhythm, and rhythm is what actually gives it away.

> The linter passing is the floor, not the finish.

Both belong at the top of anything built from this, not the bottom.

---

## 5. What is actually new here

Conservatively, and separating invention from recombination.

**Genuinely unclaimed: measuring precision against human-written control text.**
Every rule set surveyed reports rule *counts*. One repository, `theclaymethod/unslop`, publishes a
real benchmark with precision, collateral damage and byte-exact no-op on clean prose, and its own
honest verdict is that it fails those bars. There is no shared public corpus of good human
professional prose against which to measure false positives, and without one every rule set is
unfalsifiable. Building that corpus and publishing per-rule precision against it is a real
contribution. It is also unglamorous, which is presumably why it is unclaimed.

Two caveats stated plainly. The *gap* is real; the corpus does not exist yet, and claiming the
contribution before building it would be exactly the failure mode this project exists to fix.
`adamdunkels/deslop-text` already ships a regression corpus of AI-generated documents, which is the
other half of the same instrument.

**Recombination: dated, per-model, per-genre rule packs.**
Every component exists. Wikipedia already version-stamps its vocabulary by era. `asavvin-pixel/unslop`
already dates its own list and tells the reader to target the habit rather than the word.
`mandakan/llm-slop-detector` already ships per-model packs. `sam-paech/slop-forensics` already derives
packs empirically. `mshumer/unslop` already has the generation half of the loop and throws the
artefact away. Joining these into one pipeline that regenerates dated packs on a schedule is
unclaimed, and it is engineering, not research. It is called recombination here because it is.

**Closest to new: first-person professional correspondence as a covered genre.**
`vale-ai-tells` says in its own README that it targets technical documentation and is less useful for
other registers. Nothing surveyed targets cover letters, application answers, recruiter replies or
founder outreach. That register *inverts* several standard rules: first person singular is mandatory
rather than discouraged, "we" is usually wrong, contractions are correct rather than forbidden, and
the dominant failure mode is not *delve* but applicant flattery—"I was thrilled to see", "your
mission deeply resonates with". `vale-cli/Joblint` is the only thing in the neighbourhood and it lints
the employer's side of the page.

Even this is applying known rules to an uncovered register rather than discovering new rules, and it
has internal prior art in the `human-voice` skill described above. The honest claim is coverage, not
discovery.

**Recombination: the audience-and-mode decision happening before writing.**
Diátaxis already does exactly this for documentation. *Docs for Developers* already heads an empty
draft with Audience, Purpose and Pattern. The Federal Plain Language Guidelines already open with
"the first rule of plain language is: write for your audience." Nothing new in the idea.

Two things about the application are less common. First, enforcing it as a **gate** rather than
advice, for a reader that has no taste—a human given "vary your sentence length" does something
sensible, while a model produces uniform sentences and believes it complied. Second, extending the mode
set past the boundary Diátaxis draws, to cover the README (which cannot obey the instruction to split
itself) and correspondence (which Procida excludes explicitly and honestly, since Diátaxis serves the
practitioner consulting documentation, not one person writing to another). Crossing a boundary someone
else drew honestly is not a discovery.

**Recombination, and credited: gap extraction.**
Stripping the hedges out of a paragraph and finding nothing left. Removing the summary conclusion and
finding the piece now has no ending. This is Diátaxis's own reported property—moving explanatory
verbiage out of a tutorial highlights the section where the reader was left to work something out —
transferred to a different property. Canonical states the same effect more sharply: the first thing the
framework does is make existing documentation look worse. The friction log in *Docs for Developers*
reaches the same instrument by a third route. The transfer is ours; the mechanism is not.

**A framing, not a finding: the cost model.**
`research/03` proposes that every AI tell is a specific refusal to pay a cost the writer would
otherwise pay—the cost of being wrong, of being checked, of being disagreed with, of leaving
something out. It generates: any new tell can be classified by asking which cost it dodges, and the
repair follows from the classification. That is a better property than a word list has.

Nothing has been measured against it. It is a way of organising other people's findings, and it should
be described that way until something tests it.

---

## 6. Packaging

`research/04-harness-formats.md` verified every claim against live documentation, and two findings
shape the repository layout. Only Claude Code has real style switching, so an always-on voice has to
ride the persistent-instructions channel everywhere else and the deliberate-invocation case has to be
a separate manually-invoked skill; budget for two artefacts, not one. And `AGENTS.md` plus
`.agents/skills/<name>/SKILL.md` between them cover five and four of seven harnesses respectively with
byte-identical files, provided the frontmatter stays inside the Agent Skills spec.

The consequence is the rule this repository is built on: **prose lives in exactly one place per idea,
and every harness file is generated from it.** Nothing under a harness-specific path is hand-edited.
The alternative, copying prose into seven trees, is the same failure documented in §4.4—a fact that
appears twice will diverge.

---

## 7. Corrections to our own research

Recorded because the research files under `research/` are checked into this repository and someone will
read them.

| Where | Our note said | The LICENSE file says |
|---|---|---|
| `05` §1.1 | Diátaxis carried no licence entry | **CC BY-SA 4.0**, `LICENSE.rst`. The API reports NOASSERTION, which is why it was missed. Contaminating for verbatim text |
| `05` §1.4 | `joelparkerhenderson/architecture-decision-record` carried no licence entry | **CC BY-NC-SA 4.0**. NonCommercial |
| `05` §1.4 | `npryce/adr-tools` carried no licence entry | **GPL-3.0** for the tool; **CC BY 4.0** for the content it emits. The split is stated in the licence file itself |
| `05` §1.5 | `jamescooke/restapidocs` — "Unlicensed — copy freely" | **The Unlicense**, a public-domain dedication. Correct in substance, but "unlicensed" reads as the exact opposite of what it is |
| `03` §2.5 | The Good Docs Project is MIT-0 | **0BSD** (Zero-Clause BSD). Functionally equivalent, wrong identifier |
| `02` §9.4 | `vale-cli/Microsoft` content risk, unresolved | Microsoft's own guide is **CC BY 4.0**, so that package is clean. The IBM caution stands and is stronger than recorded |

Three NOASSERTION reports in `02` were confirmed as MIT at the file, as our research predicted:
`Syntaf/vale-llm-slop`, `woerndl/unsloppify`, `walidboulanouar/anti-ai-slop`.

---

## 8. What `composerxai-lint` actually vendored

Sections 1 to 7 record what may be taken. This one records what was. Everything else in the
linter is written against the measurements in §3.

| What | From | Licence | Lands in |
|---|---|---|---|
| The invisible and formatting Unicode table: ZWSP, ZWNJ, ZWJ, LRM/RLM, word joiner, BOM, soft hyphen, NBSP, NNBSP, and the bidi embeds, overrides and isolates, each with a severity and a deterministic replacement | [mandakan/llm-slop-detector](https://github.com/mandakan/llm-slop-detector) `builtin-rules.json` | MIT | `src/data/invisible-unicode.mjs` |

**Provenance caveat, stated because the alternative is a false citation.** The code points,
severities and replacement semantics were reconstructed from that file's documented contents as
catalogued in `research/02` §5a and §9.1. The upstream JSON was not fetched byte for byte. Four
entries are marked `addition: true` in the source and are ours, not upstream. Re-sync by diffing
against the list rather than by trusting it.

MIT notice, preserved as required:

```
MIT License

Copyright (c) mandakan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

### Ideas taken without code

| Idea | From | Licence | Where it shows up |
|---|---|---|---|
| Dating every lexical entry with the era its overrepresentation was observed in, because tells decay | [asavvin-pixel/unslop](https://github.com/asavvin-pixel/unslop) | MIT, read only | `era` and `decayed` on every entry in `src/data/lexicon.mjs` |
| Recording per-rule false-positive tuning in the rule itself, in prose | [vale-cli/Google](https://github.com/vale-cli/Google), and `tbhb/vale-ai-tells` for the rationale style | MIT, read only | The comment block above every gated rule |
| Deterministic detection as a constitution over generative rewriting, and publishing an honest no-ship verdict rather than a rule count | [theclaymethod/unslop](https://github.com/theclaymethod/unslop) `evals/CORE-BENCHMARK.md` | **No licence. Read only, nothing copied** | The enforceable/judgement split, and `--explain-omissions` |
| Phrase, replacement, severity as the shape of a rule record | [walidboulanouar/anti-ai-slop](https://github.com/walidboulanouar/anti-ai-slop), [woerndl/unsloppify](https://github.com/woerndl/unsloppify) | MIT, read only | Rule record shape across `src/rules/` |

### Fixture provenance

`test/fixtures/control/gettysburg.txt` is the Gettysburg Address, Abraham Lincoln, 1863, public
domain. It is in the fixture set to break a rule rather than to pass one, and it succeeds: three
consecutive sentences of 19, 21 and 21 words fail the rhythm floor from `research/03` §3.4. That
measurement demoted the rule from a gate to a suggestion.

`test/fixtures/human/*` and `test/fixtures/ai/*` were written for this repository. The human set is
hand-written control prose. Three documents, not a sampled corpus.

`research/02` §9.3 identifies per-rule precision against real human professional writing as the
unclaimed contribution in this category. A fixture set of eight documents does not claim it, and
the tests say so at the top. `adamdunkels/deslop-text` `tests/regression/corpus/` is MIT, ships
thirty-plus AI-generated documents across ten genres split by generating model, and is the obvious
next thing to pull in.

---

If something here is credited wrongly, or a licence has changed, open an issue. The rule for this file
is the rule for the project: no claim without a source, and no source without saying what was taken.
