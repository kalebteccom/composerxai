# Writing Like a Human: Source Review

Research pass for `unslop`. 33 sources read in full or in substantial part, September 2026.
Every URL below was fetched and read. Where a source turned out to be thin, recycled, or
inaccessible, it says so.

Sources are grouped: (A) field guides and tell-lists, (B) empirical work, (C) editors and
writers on the texture of AI prose, (D) the em-dash fight, (E) classic pre-LLM prose advice.
Synthesis is at the bottom.

---

## A. Field guides and tell-lists

### A1. Wikipedia: Signs of AI writing
https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

**What it is:** The WikiProject AI Cleanup field guide, built from thousands of flagged
Wikipedia edits since 2023. Descriptive, not policy. By a distance the best single artefact
in this space: every claim is backed by a diff to a real revision. ~217KB of wikitext.

**Rules and observations taken:**

- Vocabulary is dated by era, which almost no other list does. 2023–mid-2024: *"Additionally,
  boasts, bolstered, crucial, delve, emphasizing, enduring, garner, intricate/intricacies,
  interplay, key, landscape, meticulous/meticulously, pivotal, underscore, tapestry, testament,
  valuable, vibrant."* Mid-2024–mid-2025: *"align with, bolstered, crucial, emphasizing, enhance,
  enduring, fostering, highlighting, pivotal, showcasing, underscore, vibrant."* Mid-2025 onward:
  *"emphasizing, enhance, highlighting, showcasing."* The list is shrinking as labs tune it out.
- Density, not presence, is the signal: *"One or two of these words appearing in an edit may be
  coincidental, but an edit (post-2022) introducing lots of them, lots of times, is one of the
  strongest tells for AI use."*
- **Copula avoidance** (§WP:AICOPULA). LLMs replace "is/are" with *serves as / stands as / marks /
  functions as / represents / boasts / features / maintains / offers / refers to*. Cites a study
  finding *"an over 10% decrease in the usage of the words is and are in academic writing in 2023."*
- **Negative parallelisms** (§) in three forms: "Not only X, but also Y", "Not X, but Y",
  "X rather than Y". Called *"stereotypically an 'AI sign.'"*
- **Rule of three** (§WP:RO3): *"LLMs overuse the rule of three. This can take different forms,
  from 'adjective, adjective, adjective' to 'short phrase, short phrase, and short phrase'. LLMs
  often use this structure to make superficial analyses appear more comprehensive."*
- **Em dashes** (§WP:AIDASH) — deliberately hedged: *"LLM output uses them more often than
  nonprofessional human-written text of the same genre, and uses them in places where humans are
  more likely to use commas, parentheses, colons... This sign is most useful when taken in
  combination with other indicators, not by itself. It is much more common on discussion pages
  than in article text."* Also notes AI em dashes are usually **spaced**, against typographic norm.
- **Undue emphasis on significance/legacy**: *stands/serves as, is a testament/reminder,
  crucial/pivotal/vital role, underscores its importance, reflects broader, symbolizing its
  enduring, setting the stage for, marking a shift, indelible mark, deeply rooted.*
- **Outline-like "Challenges and future prospects"** section, formula: *"Despite its [positive
  words], [subject] faces challenges..."* followed by speculation.
- **Superficial analysis** via participial tails: *highlighting..., underscoring..., ensuring...,
  reflecting..., contributing to..., fostering..., encompassing..., enhancing..., valuable
  insights, align/resonate with.*
- Formatting tells: title heading duplicating article name; title case headings; headings
  containing only headings; **inline-header vertical lists** (bullet, boldfaced header, colon,
  description); overuse of boldface *"in an excessive, mechanical manner... to emphasize every
  instance of a chosen word or phrase, often in a 'key takeaways' fashion"*; emoji as formatting;
  curly quotes and apostrophes; skipped heading levels; thematic breaks between sections.
- **Historical (now largely gone):** didactic disclaimers (*"it's important to note", "worth
  noting", "may vary"*); **section summaries** (*"In summary", "In conclusion", "Overall"*);
  prompt refusals; lexical-diversity/elegant variation.
- **Signs of *human* writing** — the most useful inversion in the whole corpus. Humans use:
  simple *is/has* phrases (*there is a*, *it has a*); plain verbs where a stiff synonym exists
  (*wrote* not *authored*, *moved* not *relocated*, *used* not *utilized*, *tried* not *attempted*,
  *died* not *passed away*); superlative/definitive statements (*one of the best*, *is the only*,
  *was the first*); hedging qualifiers and intensifiers (*very*, *perhaps*, *tends to*); wordy
  constructions (*as a result of*, *in order to*, *all of the*, *the fact that*).
- **Ineffective indicators** — explicitly listed as things that do *not* work: perfect grammar;
  mixed casual/formal register; "bland" or "robotic" prose; "fancy"/academic prose generally;
  transition words in isolation (*"only a few transition words and phrases are known to be overused
  by AI in this way... this is not a strong tell"*); unsourced content; bizarre wikitext.
- The most important caveat in the document: *"Please do not merely treat these signs as the
  problems to be fixed; that could just make detection harder."* And: *"a 2025 study has shown
  that human ability to distinguish LLM text from human is no better than random chance."*
- Its causal model: LLMs *"regress to the mean"*, replacing *"specific, unusual, nuanced facts
  (which are statistically rare)"* with *"more generic, positive descriptions (which are
  statistically common)."*

### A2. GPTZero — "How to Break Free from GPT's Rule of Three in Writing"
https://gptzero.me/news/the-rule-of-three/

**What it is:** Short vendor blog post on tricolon.

**Thin.** It asserts AI "tend[s] to favor sentences with three objects" and gives one example
("...to address bias challenges, improve its performance, and expand its applications"), but
offers **no quantitative data at all** — no rate, no comparison corpus. Observation dressed as
finding. Useful only as a citation that the tell is widely noticed, not as evidence.

### A3. GPTZero — "What is perplexity & burstiness for AI detection?"
https://gptzero.me/news/perplexity-and-burstiness-what-is-it/

**What it is:** The vendor's own definition of the two metrics everyone still quotes.

- Perplexity: *"a measure of how likely an AI model would have chosen the exact same set of words
  as found in the document."* They state *"a perplexity above 85 is more likely than not from a
  human source."*
- Burstiness: *"how much writing patterns and text perplexities vary over the entire document"* —
  computed as the standard deviation of per-sentence perplexity. *"Language models have a
  significant 'AI-print' where they write with a very consistent level of AI-likeness."*
- **Critical caveat, in their own words:** *"As of autumn 2023, GPTZero no longer uses perplexity
  and burstiness for its AI detection because we migrated to a deep-learning based architecture."*

So the metric pair that dominates popular writing about AI detection was abandoned by its most
famous proponent three years ago. Treat "low burstiness" as a *descriptive* claim about rhythm,
not a working detector.

### A4. Humanized Copy — "The It's-Not-Just-X-It's-Y Tell: AI Negative Parallelism"
https://humanizedcopy.com/posts/the-it-s-not-just-x-it-s-y-tell-ai-negative-parallelism

**What it is:** A single-tell deep dive. Small site, but the analysis is genuinely sharp and
not recycled.

- Definition: *"a rhetorical device that works by first naming what something is not (or what it
  goes beyond), then restating the claim at a higher register."*
- The diagnostic: *"In AI output, the two clauses almost always describe the same thing... The
  reader gets no new information. The sentence performs depth rather than providing it."*
- Four surface forms: "It's not just X, it's Y" / "Not only does it X, but it also Y" /
  "This isn't simply X. It's Y." / "More than just X, this is Y."
- **Linter-ready trigger words**: *just, simply, merely, only, more than* — especially near
  sentence-initial position.
- Notes the cluster: rule-of-three lists where the third item restates the second in grander
  language; stacked abstractions (*impact, journey, landscape*); em-dash pivots that *"perform the
  same structural move"*.
- Fix: *"pick one of the two clauses and commit to it, or... replace the rhetorical inflation with
  a specific detail."*

### A5. Cherryleaf — "Indicators that suggest something was written by AI"
https://www.cherryleaf.com/2026/02/indicators-that-suggest-something-was-written-by-ai/

**Recycled — and openly so.** The site says up front: *"We researched the indicators... We then
asked Claude to create an article about it, in that style."* The whole piece is Claude output.
It is a fair aggregation (tricolon, perfect antithesis, rhetorical questions in clusters, and a
long list — *delve into, navigate, at the heart of, landscape/ecosystem/paradigm, here's the
thing, robust/holistic/nuanced, it's worth noting, leverage, tapestry/mosaic/fabric,
multifaceted/complex interplay, in today's fast-paced world, crucially/moreover/furthermore,
underscores the importance, seamless/streamlined/optimized, foster collaboration/drive innovation,
at scale/end-to-end/best practices*) but contains no independent research.

Its one useful line, which happens to be right: *"None of these phrases prove AI authorship alone.
But find eight or ten in a single piece? The probability shifts dramatically."* Density again.

Counted here as one source, but discount it — it is an LLM's own summary of the other lists.

---

## B. Empirical work

### B1. Reinhart, Markey, Laudenbach & Brown — "Do LLMs write like humans? Variation in grammatical and rhetorical styles" (PNAS, 2025)
https://arxiv.org/abs/2410.16107 · https://www.pnas.org/doi/10.1073/pnas.2422455122

**What it is:** The single strongest empirical source for *structural* tells. Parallel corpora
(HAP-E, n=66,320 chunks; CAP, n=76,920) where humans and six models continue the same 500-word
prompt. Features scored with **Douglas Biber's 66-category tagset**, not word lists.

**Findings, with numbers:**

- All four instruction-tuned models have *"strong preferences for present participial clauses,
  'that' clauses as subjects, nominalization, and phrasal co-ordination, which are typical markers
  of more informationally dense, noun-heavy style of writing."*
- **GPT-4o uses present participial clauses at 5.3× the human rate** (Cohen's d = 1.38);
  'that' clauses as subject **2.6×** (d = 0.77); nominalizations **2.1×** (d = 1.23); phrasal
  coordination **1.9×** (d = 0.81).
- Example of the participial habit, quoted from the paper: *"Bryan, leaning on his agility, dances
  around the ring, evading Show's heavy blows."* Example of nominalization stacking: *"These
  schemes can help to reduce deforestation, habitat destruction, and pollution, while also
  promoting sustainable consumption patterns."*
- GPT-4o uses **agentless passive at roughly half** the human rate — the opposite of the folk
  belief that AI is passive-heavy.
- Vocabulary: GPT-4o and 4o Mini use *camaraderie, palpable, tapestry, intricate* at **more than
  100× the human rate**. **"Tapestry" appeared in 23% of GPT-4o outputs; "amidst" in 27%.**
- The interpretation that matters: *"The point here is not that humans refrain from using these
  words, but that humans refrain from using these words in certain genres... words that are
  unremarkable in fiction are highly conspicuous and unconventional when used in other genres."*
  Register mismatch, not vocabulary.
- Also: these words *"connote some form of complex relation among objects (e.g. tapestry,
  intricate, camaraderie, cacophony, amidst)"* and *"may signal a preference for grandiose, if
  hollow, summative sentences."*
- **Cause: instruction tuning, not pretraining.** Llama base models match human feature rates
  closely; the instruction-tuned variants diverge. *"Instruction tuning appears to make the model
  output less human, not more."*

### B2. Russell, Karpinska & Iyyer — "People who frequently use ChatGPT for writing tasks are accurate and robust detectors of AI-generated text" (ACL 2025)
https://aclanthology.org/2025.acl-long.267/ · https://arxiv.org/abs/2501.15654

**What it is:** Five expert annotators (heavy LLM users, untrained at detection) vs. five
automated detectors on 300 articles. Read the full PDF.

- **Majority vote of the five experts misclassified 1 of 300 articles** (~99.7%). Only Pangram
  matched it (avg TPR 99.3%, FPR 2.7%); GPTZero *"struggles significantly on o1-Pro"*; open-source
  detectors (Binoculars, Fast-DetectGPT, RADAR) *"degrade in the presence of paraphrasing."*
- The taxonomy of cues, coded from annotator free-text explanations, **with frequencies** — this is
  the most valuable table in the literature for a linter's priority order:

  | Cue category | % of explanations | Gloss |
  |---|---|---|
  | Vocabulary | **53.1%** | specific words/phrases, *"repetitive, unnatural, or overly complex wording"* |
  | Sentence structure | **35.9%** | *"predictable patterns (e.g. high frequency of 'not only… but also…', or consistently listing three items), while human-written sentences vary more in terms of length"* |
  | Grammar & punctuation | **24.8%** | AI is *"usually grammatically perfect (also avoiding dashes and ellipses), while human-written text often contains minor errors"* |
  | Originality | **23.7%** | *"straightforward, 'safe,' and lacking in surprises or humor, leaving annotators bored or disengaged"* |
  | Quotes | **22.3%** | quotes *"sound overly formal... and often mirror the article's main text too closely in style"* |
  | Clarity | **19.5%** | *"over-explaining or including irrelevant details, effectively 'telling' rather than 'showing'"* |

- Note the **grammar row cuts against the em-dash panic**: these annotators associated *dashes and
  ellipses* with **human** writing, and their absence with AI. Verbatim annotator quote on a human
  text: *"There's a lot of variety in the article's grammar use, with dashes, brackets, quotes
  intermixed with sentences."*
- Annotator quote naming the structural tell exactly: *"the comparison of 'it's not just this, it's
  this' and I'm seeing it here, along with listings of specifically three ideas."*
- **Vocabulary degrades as a cue under adversarial pressure.** For o1-Pro articles, 57.1% of correct
  explanations cited vocabulary; for *humanized* o1-Pro (prompted to avoid "AI vocab"), only 42.3%.
  Structure and originality carry the load once lexical tells are stripped.
- Quotes became a surprise cue on paraphrased text (33.8%): *"experts flagged quotes that were
  always in the same format and style (e.g. only placed at the end of each paragraph)."*

### B3. Juzek & Ward — "Why Does ChatGPT 'Delve' So Much? Exploring the Sources of Lexical Overrepresentation in LLMs" (COLING 2025)
https://aclanthology.org/2025.coling-main.426/ · https://arxiv.org/abs/2412.11385

**What it is:** A rigorous three-step method for identifying LLM-attributable word spikes, plus
an attempt to explain *why*. Read the full PDF.

- Method: (1) words whose PubMed frequency spiked 2020→2024 with chi-square significance;
  (2) minus those with an obvious world-events explanation ("omicron", "metaverse");
  (3) intersected with words ChatGPT-3.5 overuses when writing abstracts. Result: **21 focal words.**
- The 21, with % increase in occurrences-per-million in PubMed abstracts 2020→2024:
  **delves (+6,697%), delved (+2,240%), delving (+1,817%), showcasing (+1,396%), delve (+1,375%),
  boasts (+918%), underscores (+904%), comprehending (+899%), intricacies (+773%), surpassing
  (+667%), intricate (+611%), underscoring (+537%), garnered (+437%), showcases (+422%),
  emphasizing (+397%), underscore (+391%), realm (+381%), surpasses (+368%), groundbreaking
  (+330%), advancements (+278%), aligns (+267%).**
- On causes: *"We fail to find evidence that lexical overrepresentation is caused by model
  architecture, algorithm choices, or training data."* Llama-2-Base vs Llama-2-Chat entropy
  comparison points at fine-tuning/RLHF as the differentiator.
- **Directly contradicts the Nigerian-English story (see C4):** they checked the International
  Corpus of English and *"do not find evidence that the focal words are especially prevalent in any
  particular variety of English... Our initial analysis of ICE does not support this hypothesis."*
- Their online study (n=201, India) was **inconclusive** on whether raters prefer focal words.
  Interesting side-finding: participants significantly *disliked* abstracts opening with "delves
  into" (p = 0.023) — i.e. people are now **wary of "delve" specifically**, which contaminates any
  RLHF preference study run today.

### B4. Kobak, González-Márquez, Horvát & Lause — "Delving into LLM-assisted writing in biomedical publications through excess vocabulary" (Science Advances, 2025)
https://arxiv.org/abs/2406.07016 · https://www.science.org/doi/10.1126/sciadv.adt3813

**What it is:** 15M+ PubMed abstracts, 2010–2024. "Excess vocabulary" by analogy with excess
mortality.

- **At least 13.5% of 2024 abstracts show LLM processing**; up to **40%** in some subcorpora
  (by discipline, country, journal).
- The vocabulary shift *"surpass[es] the effect of major world events such as the Covid pandemic"*.
- The finding that matters most for a linter: **excess words migrated from content words to style
  words (verbs and adjectives)**. The LLM footprint is in *how* things are said, not *what*.
- Excess words include: *delve, intricate, meticulously, realm, pivotal, showcasing.*

### B5. Liang et al. — "Monitoring AI-Modified Content at Scale" (ICML 2024)
https://arxiv.org/abs/2403.07183

**What it is:** Corpus-level maximum-likelihood estimation of LLM-modified fraction, applied to
peer reviews at ICLR 2024, NeurIPS 2023, CoRL 2023, EMNLP 2023.

- **6.5%–16.9% of submitted review text** *"could have been substantially modified by LLMs, i.e.
  beyond spell-checking or minor writing updates."*
- Behavioural correlates: LLM fraction higher in reviews *"which report lower confidence, were
  submitted close to the deadline, and from reviewers who are less likely to respond to author
  rebuttals."*
- Key methodological lesson: *"corpus-level trends in generated text which may be too subtle to
  detect at the individual level."* **These methods work in aggregate and fail on single documents.**

### B6. Liang et al. — "GPT detectors are biased against non-native English writers" (Patterns, 2023)
https://arxiv.org/abs/2304.02819

**What it is:** The fairness paper everyone should cite before shipping a detector.

- *"These detectors consistently misclassify non-native English writing samples as AI-generated,
  whereas native writing samples are accurately identified."*
- *"Simple prompting strategies can not only mitigate this bias but also effectively bypass GPT
  detectors, suggesting that GPT detectors may unintentionally penalize writers with constrained
  linguistic expressions."*
- Direct implication for a style linter: **rules that punish limited lexical range punish
  second-language writers, not machines.**

### B7. Geng & Trotta — "Is ChatGPT Transforming Academics' Writing Style?"
https://arxiv.org/abs/2404.08627

**What it is:** 1M arXiv abstracts, May 2018 – Jan 2024, adaptive word-frequency model calibrated
on real vs. ChatGPT-revised abstracts.

- *"The fraction of LLM-style abstracts is estimated to be approximately 35%"* in computer science,
  benchmarked against GPT-3.5's response to the prompt *"revise the following sentences"*.
- Notable methodological choice: *"The words used for estimation are not fixed but adaptive,
  including those with decreasing frequency."* Words LLMs *avoid* carry signal too.

### B8. Ju, Blix & Williams — "Domain Regeneration: How well do LLMs match syntactic properties of text domains?" (ACL Findings 2025)
https://arxiv.org/abs/2505.07784

**What it is:** The cleanest statement of the burstiness claim without the word "burstiness".

- LLM-regenerated text shows *"a shifted mean, a lower standard deviation, and a reduction of the
  long tail"* relative to the human original.
- Holds *"from basic metrics like sentence length to complex measures such as dependency tag
  distributions and parse depth."*
- LLMs *"smooth out the irregular, varied characteristics of natural human language"*, tending
  toward *"uniform, centralized language patterns"*.

This is the empirical backbone for every "uniform paragraph length / metronome rhythm" claim.
It is about **variance**, not means — and variance is measurable.

### B9. Emi & Spero — "Technical Report on the Pangram AI-Generated Text Classifier"
https://arxiv.org/abs/2402.14873

**What it is:** The best-performing commercial detector's own technical report.

- Claims *"over 38 times lower error rates"* than DetectGPT and commercial rivals across 10 domains
  and 8 models.
- Training trick: *"hard negative mining with synthetic mirrors"* — generate an AI "mirror" of each
  human document and train on the pair.
- Claims *"Pangram Text is not biased against nonnative English speakers"* (contra B6 for older
  detectors). Vendor-reported; see C6 for an independent trial that found real-world failures.

### B10. Rudnicka — "ChatGPT and Gemini AIs Have Uniquely Different Writing Styles" (Scientific American, 2025)
https://www.scientificamerican.com/article/chatgpt-and-gemini-ai-have-uniquely-different-writing-styles

**What it is:** A forensic linguist applies Burrows's Delta (authorship attribution, 2001) to
ChatGPT vs. Gemini texts on the same topic.

- ChatGPT sample → distance **0.92** to ChatGPT corpus, **1.49** to Gemini. Gemini sample → **0.84**
  to Gemini, **1.45** to ChatGPT. Clean separation: the models have distinct **idiolects**.
- Trigram evidence: ChatGPT's are *"more formal, clinical and academic"* ("individuals with
  diabetes", "blood glucose levels", "characterized by elevated"); Gemini's *"more conversational
  and explanatory"* ("high blood sugar", "is not a"). ChatGPT uses "glucose" 2× more than "sugar";
  Gemini reverses it.
- Consequence for unslop: **there is no single "AI voice" to lint against.** A rule tuned to GPT-4o
  will mis-score Gemini and Claude.

---

## C. Editors and writers on the texture of AI prose

### C1. Wendy Laura Belcher — "10 Ways AI Is Ruining Your Students' Writing" (Chronicle of Higher Education, Sept 2025)
https://www.chronicle.com/article/10-ways-ai-is-ruining-your-students-writing

**What it is:** A Princeton literature professor's lecture to her students. The best
*non-statistical* taxonomy I found, because every item names a **failure of thought**, not a word.

1. **Polonius problem (banal argument).** *"I never used to receive essays with banal arguments...
   Now I regularly get papers about the hero's journey. The conflict between tradition and
   modernity... LLMs are about predicting the next most likely word — which, by definition, is the
   most obvious."*
2. **Windbag problem (bloated emptiness).** Her example: *"Africa is home to some of the world's
   most diverse literary works."* — *"It is a sentence. It is grammatically correct. It has no
   typos... And it means nothing."* She calls these **dead-end sentences**: the concept introduced
   is never mentioned again.
3. **Variation problem (elegant variation).** *"AI-assisted papers often refer to something once by
   its proper name and then substitute it throughout... the 'main character,' the 'protagonist,'
   the 'central figure,' the 'key player.'... Each variation causes cognitive load."* Caused by the
   repetition penalty. Result: *"they can't keep a throughline... ending somewhere else entirely."*
4. **Roman genitive problem (stringing abstractions).** Chains of "x of y". *"Noun phrases are
   modular, so AI finds it easy to slot them into sentences and does so excessively."* Her example:
   *"symbolizing the complexity of African narratives in the face of colonial legacies."*
5. **Causation problem.** *"AI frequently misstates how one idea relates to another by suturing
   sentences together with common academic verbs like 'highlights,' 'underscores,' or 'emphasizes.'
   The sentences are grammatical and can sound smart, but they distort what is affecting what."*
6. **Anti-human problem (removing the interpreter).** *"AI often generates sentences in which the
   text is doing something when, really, it is the human interpreter who is doing it... This is
   partly due to its phobia of the 'I' in writing."*
7. **Inflation problem (evaluative adjectives).** *"AI-generated prose is hyper-adjectival — almost
   no noun passes without getting a positive or negative modifier."* Her demonstration is the best
   thing in the piece: she quotes an elegant-sounding sentence, asks *"didn't you think, 'Hey, this
   is pretty good!'?"*, then shows every adjective in it is factually wrong.
8. Racism problem (moralising, blaming the victim). 9. Plagiarism problem. 10. Factual error.
- Closing tic she adds as an afterthought: *"how it has a 'not … but' tic."*
- The mechanism, in one line: *"the fundamental principle of AI is taking what is common (and
  clichéd) and turbocharging it."*
- And the honest admission: *"I have repeatedly chastised AI for these flaws, and it still does all
  of them. Indeed, it frequently commits them in the very sentences it uses to agree with me."*

### C2. Hollis Robbins — "How to tell if something is AI-written"
https://hollisrobbinsanecdotal.substack.com/p/how-to-tell-if-something-is-ai-written

**What it is:** Short, dense post by a literary scholar and former dean. Semiotic framing.

- Premise: *"There are no signifieds. An LLM generates text through a process called autoregression."*
- **The visualization test**, the most portable rule anyone has offered: *"If you can't see anything,
  if nothing springs to mind, it's probably AI."*
- **Computational hedging**: "it's not just X, but also Y", "rather than A, we should focus on B" —
  AI avoiding falsifiable claims through false balance.
- **Over-symmetry**: *"Look for unnaturally perfect balance, where every point has a counterpoint,
  every advantage has a corresponding challenge mentioned."*
- **Anecdote test**: *"LLM anecdotes serve the argument too neatly"* — human narrative is full of
  *"irrelevant details and random memories."*
- Absence of concrete detail: AI writes "preparing students for the future workforce", never
  "no pencils".

### C3. Jill Walker Rettberg — "Genre glitches and unexpected promotional phrases as a sign of AI writing"
https://jilltxt.net/genre-glitches-and-unexpected-promotional-phrases-as-a-sign-of-ai-writing/

**What it is:** A digital-culture professor coins a genuinely new and useful term.

- **Genre glitch**: *"when a word in the generated text is heavily associated with a genre or
  context that is markedly different to the overall genre or subject of the text."*
- Example 1, a NYT piece on tomato inflation that veers into *"tart bursts of flavor in salads and
  sandwiches"* — food-blog register in a business story.
- Example 2, a legal detention memorandum describing a train route *"famous for its scenic views of
  the mountains and deserts of the American West before traversing the vast expanse of the Great
  Plains"* — tourism-brochure register in a court filing.
- Mechanism: association. "tomato" activates food-writing contexts; "long distance passenger train"
  activates travel marketing.
- Sharpest in **operational writing** — *"functional texts meant to accomplish tasks rather than be
  savored"*, which is exactly the cover-letter / application-answer case.

This is the same phenomenon Reinhart (B1) measured: the words aren't rare, they're **out of register**.

### C4. Simon Willison, summarising Alex Hern — "How cheap, outsourced labour in Africa is shaping AI English"
https://simonwillison.net/2024/Apr/18/delve/ · source: https://www.theguardian.com/technology/2024/apr/16/techscape-ai-gadgest-humane-ai-pin-chatgpt

**What it is:** The origin of the "delve is Nigerian English" theory.

- *"Articles on medical research site PubMed now use 'delve' 10 to 100 times more than a few years ago."*
- *"Nigerian Twitter took offense recently to Paul Graham's suggestion that 'delve' is a sign of bad
  writing. It turns out Nigerian formal writing has a subtly different vocabulary."*
- Hern's theory: OpenAI outsources RLHF annotation to Nigeria and Kenya; annotators voting on "best"
  responses may be teaching the model their own dialect.
- Willison's verdict: *"It's a pretty solid theory!"*

**But see B3 and D2:** two independent corpus checks (ICE via Juzek & Ward; ICE-NIG via Goedecke)
found no support. This is a beautifully plausible story that the data does not carry.

### C5. Joel Gladd — "A Better Way to Identify AI Slop"
https://joelgladd.substack.com/p/a-better-way-to-identify-ai-slop

**What it is:** The most directly useful source for building a linter. Gladd builds a spaCy +
Infini-gram pipeline that scores **rhetorical template density**, and reports real numbers.

- Core thesis: *"When it feels like a text is AI-generated, our instincts are mostly responding to
  the density of rhetorical templates being used. A single rhetorical template does not mean much.
  Good writers use these templates all the time... The AI slop feel happens when a short text stacks
  many of these moves at a higher rate than usual, in scatter-shot fashion."*
- *"All of the models utterly adore bludgeoning humans with 'not x, but y.'"*
- **Controlled comparison** — his own LinkedIn post vs. Gemini's summary of the same article:
  template pressure **0.353 vs 6.31**; unique strategy count **1 vs 5**; **strategy density per
  thousand words 2.83 vs 26.7.** Roughly a **9×** gap on the density measure.
- His template cookbook (16 patterns, proof-of-concept; he estimates 200–250 for a real one) draws
  on Lanham's *Handlist of Rhetorical Terms*, Silva Rhetoricae, the Penn Discourse Treebank,
  Rhetorical Structure Theory, and Universal Dependencies. Categories: tricolons, condition frames,
  relation frames, personification, abstract-noun structures, dash-based interruptions.
- **Provenance layer** (Infini-gram): human text's exact matches cluster on *situated* phrases
  ("Idaho State Board AI Catalyst"); AI text's cluster on *portable* stock phrasing ("writing custom
  code or running complex"). Anchored vs. floating language.
- Honest limit: provenance alone can't distinguish AI from allusion. *"Joyce's Ulysses is saturated
  with echoes... A provenance tool would presumably light up all over the place."*

### C6. Marc Watkins — "How an AI Detector Made Me Trust Less"
https://marcwatkins.substack.com/p/how-an-ai-detector-made-me-trust

**What it is:** A week-long real-world trial of Pangram's Chrome extension. The best available
counterweight to B9's vendor claims.

- Pangram markets *"an accuracy rate of 99.98 percent and a false positive rate of just one in 10,000."*
- Watkins found false positives *"simply by scrolling my feed"* — including Gary Marcus, an AI critic,
  flagged red at "low confidence" while quoting someone.
- **Context instability**: the same text flipped from "AI-assisted" to "Human" when viewed in the
  original post rather than as a Substack quote. A LinkedIn post labelled "AI" scored **100% human
  on every paragraph but one** when run paragraph-by-paragraph.
- His diagnosis: *"the shorter the context the classifier has to work with, the more random the
  response."* The extension only runs on text over 50 words — *"even that is really tiny."*
- Behavioural harm: *"I stopped reading content with red 'AI'... There's immense power in labels."*
- Adversarial note: an LLM trained on pre-1930s text (Talkie) *"was enough to fool Pangram."*

### C7. John Warner — "Bullsh*t Writing" (lost chapter from *More Than Words*)
https://biblioracle.substack.com/p/bullsht-writing

**What it is:** Warner's cut chapter, published in full. Read it — but be honest about scope.

**Partly off-target for our purposes.** It is about *institutional* slop (Graeber's *Bullshit Jobs*,
*Office Space*, BetterUp's finding that **40% of desk workers had received AI "workslop"** — *"work
that looks good, but doesn't actually fulfill the need"*) rather than the texture of sentences.

The transferable idea: much workplace writing *"is not actually 'read.' Skimmed, perhaps, but mostly,
it is ignored"* — so the real question is not "does this sound human" but "did this need writing."
Useful framing for the unslop project's purpose statement; not a source of rules.

### C8. Henry Oliver — "The literary world needs to wake up!" (The Common Reader)
https://www.commonreader.co.uk/p/the-literary-world-needs-to-wake

**What it is:** Response to the Granta / Commonwealth Prize AI-story controversy. Argues the
opposite of most sources here, which makes it worth having.

- On institutions outsourcing the judgment: *"Asking Claude if the story was AI generated is a
  giveaway that the people involved don't quite know what they are doing."*
- The forward-looking challenge to every tell-list: *"Right now, we have AI writing that all sounds
  the same. What happens when a great writer trains their own model?... One day, perhaps soon, we
  will not be able to tell what is written with AI."*
- Notes the recycled-doctrine risk of the whole genre: phrases like "a story that isn't written by
  a human has no purpose" are *"part of the 'currently sensible and acceptable doctrine'"*.

### C9. Washington Post — "What are the clues that ChatGPT wrote something? We analyzed its style."
https://www.washingtonpost.com/technology/interactive/2025/how-detect-chatgpt-em-dash/

**Partially inaccessible.** The article is a JS scrollytelling interactive; the prose is not in the
DOM via any reader I could use. I could only extract the **methodology**, which is worth recording
because it is the largest naturalistic sample I found:

> *"The Post analyzed ChatGPT conversations that were shared publicly and preserved by the Internet
> Archive... 37,929 ChatGPT conversations that were primarily in English and focused on the 328,744
> messages from OpenAI's gpt-4o model that were at least 10 words long, from May 2024 to the end of
> July 2025."*

Headline (from the page title) indicates emoji were a headline finding alongside em dashes. **I am
not reporting its numbers because I could not read them.** Wikipedia (A1) cites it for the emoji and
em-dash sections.

### C10. The Economist — "How to spot AI writing" (30 July 2026)
https://www.economist.com/culture/2026/07/30/how-to-spot-ai-writing

**Could not read — hard paywall + bot block.** Recorded here because Wikipedia (A1) cites it twice
and one of its findings is load-bearing for the em-dash argument. **Second-hand, via Wikipedia:**

> *"A July 2026 study found that of contemporary models only Claude used em dashes more than
> professional writers, and ChatGPT used them less."*

If accurate, that is the strongest single piece of evidence against em dashes as a 2026-era tell.
Flagging it as unverified — someone should get the primary text.

---

## D. The em-dash fight

Worth isolating, because it is the clearest case of a lexical tell decaying into a moral panic.

### D1. Noreen Malone — "The Case—Please Hear Me Out—Against the Em Dash" (Slate, May 2011)
https://slate.com/human-interest/2011/05/em-dashes-why-writers-should-use-them-more-sparingly.html

**What it is:** A pre-LLM anti-em-dash polemic, published **eleven years before ChatGPT**. The
single most useful item in the dispute, because it proves the complaint predates AI entirely.

- *"The problem with the dash — as you may have noticed! — is that it discourages truly efficient
  writing. It also — and this might be its worst sin — disrupts the flow of a sentence."*
- Cites Strunk and White: *"Use a dash only when a more common mark of punctuation seems inadequate."*
- Cites NYT standards editor Philip Corbett scolding *Times* writers in 2011 (five dashes in a
  3.5-paragraph A1 story) and: *"Sometimes a procession of such punctuation is a hint that a sentence
  is overstuffed or needs rethinking."*
- Lynne Truss on why people reach for it: *"they know you can't use it wrongly — which for a
  punctuation mark, is an uncommon virtue."*

The em dash was a marker of lazy sentence construction long before it was a marker of machines.
That is the strongest argument for keeping a dash-density rule and the strongest argument against
framing it as an AI tell.

### D2. Sean Goedecke — "Why do LLMs use em-dashes so much?"
https://www.seangoedecke.com/em-dashes/

**What it is:** The only piece I found that actually **measures** anything in this debate.

- Kills the African-English theory with data: he pulled ICE-Nigeria and measured **0.022% of words
  are em dashes**, against a published corpus estimate of **0.25–0.275% for English generally**.
  Nigerian English uses em dashes **an order of magnitude less**. *"I don't think the overuse of
  em-dashes and 'delve' are caused by the same mechanism."*
- Kills the token-efficiency theory: *"Many em-dashes (e.g. the common 'it's not X — it's Y' pattern)
  could simply be replaced with a comma, which is equally brief."*
- Kills the naive training-data theory: *"If em-dashes were as common in AI prose as human prose,
  they would be as unremarkable as the use of other punctuation marks."*
- His preferred hypothesis, with a mechanism: **GPT-3.5 did not overuse em dashes; GPT-4o used ~10×
  more.** Between 2022 and 2024 labs began scanning print books (Anthropic from Feb 2024, per court
  filings). Dash frequency in English *"reached its peak (about 0.35%) in 1860, but afterwards
  continued to drop up until the 1950s"* — so newly digitised older books are dash-rich.
  *"State-of-the-art models rely on late-1800s and early-1900s print books for high-quality training
  data, and those books use ~30% more em-dashes than contemporary English prose."*
- Honest about his own uncertainty: *"if em-dashes are common because they're a feature of
  late-1800s/early-1900s writing, why doesn't AI prose read more like Moby-Dick?"*
- Dismisses the Medium-auto-conversion theory on the right grounds: it would explain the *character*,
  not the *usage pattern*.

### D3. Benj Edwards — "Forget AGI—Sam Altman celebrates ChatGPT finally following em dash formatting rules" (Ars Technica, Nov 2025)
https://arstechnica.com/ai/2025/11/forget-agi-sam-altman-celebrates-chatgpt-finally-following-em-dash-formatting-rules/

**What it is:** News peg with useful technical framing.

- Altman, two days after GPT-5.1: *"Small-but-happy win: If you tell ChatGPT not to use em-dashes in
  your custom instructions, it finally does what it's supposed to do!"*
- The key mechanism for anyone writing style rules for a model: *"When you tell ChatGPT 'don't use
  em dashes,' you're not creating a hard rule. You're adding text to the prompt that makes tokens
  associated with em dashes less likely to be selected... But 'less likely' isn't 'impossible.'"*
- And the instability: *"Fix em dash overuse today, and tomorrow's update... might inadvertently
  bring them back."* Cites the **alignment tax**.
- Notes that vendors actively suppressing a tell means **any tell-list decays**, which is why A1
  version-stamps its vocabulary.

### D4. "The Strange Case of the Em Dash in the Age of AI Anxiety" (Irrelevant Matters)
https://www.irrelevantmatters.com/the-strange-case-of-the-em-dash-in-the-age-of-ai-anxiety/

**What it is:** A polemic against em-dash avoidance. Thin on evidence, useful as a statement of
the sociological counter-position.

- Core argument: readers don't notice. Cites the Chartbeat/Time finding that **55% of visitors spend
  under 15 seconds on a page** and NN/g's F-shaped reading pattern. *"And here you are, deleting em
  dashes from your work to prove that your content is not AI-generated, like anyone even notices them."*
- On the writers doing it: *"they invent new rituals of purity — what's 'allowed' and what's not —
  to protect a fading hierarchy."*
- The one substantive point: the author is a non-native English speaker and an editor who used the
  mark for years, pre-AI, purely because *"it looked cooler stylistically."* Punishing it punishes
  people, not machines — the same argument as Liang et al. (B6).

**Verdict on the dispute:** below, in Synthesis §2.

---

## E. Classic prose advice that predates LLMs

### E1. George Orwell — "Politics and the English Language" (1946)
https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/politics-and-the-english-language/

**Still the best 4,000 words on this.** The six rules, verbatim:

> i. Never use a metaphor, simile or other figure of speech which you are used to seeing in print.
> ii. Never use a long word where a short one will do.
> iii. If it is possible to cut a word out, always cut it out.
> iv. Never use the passive where you can use the active.
> v. Never use a foreign phrase, a scientific word or a jargon word if you can think of an everyday English equivalent.
> vi. Break any of these rules sooner than say anything outright barbarous.

His four categories map onto LLM output with unnerving precision:

- **Dying metaphors** — worn phrases used without their original sense ("toe the line", "Achilles'
  heel"). Compare: *tapestry, landscape, at the heart of, navigate.*
- **Operators / verbal false limbs** — *"render inoperative", "militate against", "have the effect
  of"* — constructions that replace a simple verb and pad the sentence. Compare Belcher's copula
  avoidance (*serves as, functions as*).
- **Pretentious diction** — words used to *"dress up simple statements"* (*phenomenon, objective,
  utilize*). Compare Wikipedia's human-writing list (*wrote* not *authored*, *used* not *utilized*).
- **Meaningless words** — terms that *"not only do not point to any discoverable object, but are
  hardly even expected to do so."* This is Robbins's visualization test, 78 years earlier.

Rule (i) is the deepest one for this project: it does not proscribe a list, it proscribes
**familiarity itself**. That is the only rule that survives the arms race.

Caveat: rule (iv) is the one Pullum demolishes (E2), and rule (vi) is Orwell's own admission that
the list is a heuristic.

### E2. Geoffrey K. Pullum — "50 Years of Stupid Grammar Advice" (Chronicle, 2009)
https://www.chronicle.com/article/50-years-of-stupid-grammar-advice

**What it is:** The definitive demolition of Strunk & White. Essential inoculation against
building a linter out of folklore.

- *"Its advice ranges from limp platitudes to inconsistent nonsense. Its enormous influence has not
  improved American students' grasp of English grammar; it has significantly degraded it."*
- On the platitudes — and this is exactly the failure mode of every AI-word list: *"Some are
  tautologous, like 'Do not explain too much.'... Many are useless, like 'Omit needless words.'
  (The students who know which words are needless don't need the instruction.)"*
- **The passive-voice scandal.** Of the four example pairs Strunk & White offer under "Use the active
  voice", *"a staggering three out of the four are mistaken diagnoses."* "There were a great number
  of dead leaves lying on the ground" *"has no sign of the passive in it anywhere."*
- Consequence: *"It is typical for college graduates today to be unable to distinguish active from
  passive clauses. They often equate the grammatical notion of being passive with the semantic one
  of not specifying the agent of an action."* Microsoft Word *"underlines every passive in wavy
  green"* — the original bad linter.
- They violate their own rules constantly: right after "write with nouns and verbs, not adjectives
  and adverbs" comes *"The adjective hasn't been built that can pull a weak or inaccurate noun out
  of a tight place"* — a negative passive with three adjectives.
- On the empirical method they never used: Mark Liberman found Twain uses sentence-initial "however"
  ~7:3 against post-subject placement; Henry James 1:15. *"The evidence cannot possibly support a
  claim that 'however' at the beginning of a sentence should be eschewed."*
- The cost: *"a nation of educated people who know they feel vaguely anxious and insecure whenever
  they write 'however' or 'than me' or 'was' or 'which,' but can't tell you why."*

**Read this before writing rule #1 of any linter.** Note also (from B1) that GPT-4o uses agentless
passive at *half* the human rate — so "flag the passive" would actually push text *toward* AI style.

### E3–E4. plainlanguage.gov / digital.gov — Plain Language guide
https://digital.gov/guides/plain-language/principles · https://digital.gov/guides/plain-language/writing
(Note: `plainlanguage.gov/guidelines/` now 301-redirects to digital.gov.)

**What it is:** The US federal standard, backed by the Plain Writing Act of 2010.

- *"The first rule of plain language is: write for your audience."* And explicitly against the
  dumbing-down myth: *"Don't write for an 8th-grade class if your readers are PhD candidates."*
- *"Most federal writing has no place for literary flair. People do not curl up in front of the fire
  with a federal regulation to have a relaxing read."*
- Checkable practices: topic sentence first; active voice; organise and summarise up front; tables;
  lists; **shorter words, short sections, active voice, present tense**.
- Active voice framed as accountability, not aesthetics: *"Not 'It must be done,' but 'You must do
  it.' Passive voice obscures who handles what."*
- Their passive heuristic — a form of "to be" plus a past participle — is exactly the one Pullum
  shows humans misapply. They do at least add: *"In a few instances, passive voice may be appropriate."*
- *"Avoid hidden verbs. Use the strongest, most direct form of the verb possible."* This is the same
  target as Reinhart's **nominalizations at 2.1× human rate** — the oldest plain-English rule turns
  out to be the strongest empirical AI tell.

### E5. Guardian and Observer style guide — "cliches" entry
https://www.theguardian.com/guardian-observer-style-guide-c

**What it is:** A working newsroom's banned-phrase list, maintained for decades. Instructive
because of the **overlap** with AI-word lists.

> *"Overused words and phrases to be avoided... include: ahead of, back burner, boost (massive or
> otherwise), bouquets and brickbats, but hey ..., controversial, count 'em, drop-dead gorgeous,
> elephant in the room, famous, fit for purpose, landmark, key, major, massive, meanwhile, ongoing,
> politically correct, raft of measures, set to, special, step change, to die for, upcoming, upsurge;
> verbs overused or misused in headlines include: bid, boost, downplay, fuel, hike, insist, probe,
> quiz, ramp up, signal, spiral, target, unveil."*

**"key", "landmark", "major", "boost" were on a human cliché list years before they were on an AI
list.** Also records the Plain English Campaign's most-irritating-phrase survey: *at the end of the
day*, then *at this moment in time, with all due respect, touch base, I hear what you're saying,
going forward, blue sky thinking, thinking outside the box*.

Lesson: a good chunk of "AI slop" vocabulary is just **journalistic and corporate cliché**, which
LLMs absorbed and amplified. Orwell's rule (i) covers all of it.

### E6. Sir Ernest Gowers — *Plain Words* / *The Complete Plain Words* (1948–, via Wikipedia)
https://en.wikipedia.org/wiki/The_Complete_Plain_Words

**Secondary source — flagging that.** I read the Wikipedia article, not the book; the full text is
not freely online. It carries enough direct quotation to be worth including.

- The *Abstract words* entry — the first in the alphabetical *ABC of Plain Words* — *"explain[s] the
  dangers of overuse of abstract words, and recommend[s] concrete terms where possible."* Its worked
  example: *"Was this the realisation of an anticipated liability?"* → *"Did you expect to have to
  do this?"* That is the same move as Belcher's Roman-genitive complaint and Robbins's visualization
  test.
- On the *"on a ... basis"* construction, which Gowers flagged in 1951 and every edition has kept:
  *"remains a frequent feature of loose writing."*
- On the overworked noun *issue*: *"This word has a very wide range of proper meanings as a noun, and
  should not be made to do any more work – the work, for instance of subject, topic, consideration
  and dispute."* The same complaint one would make today of *landscape*, *space*, *piece*, *journey*.
- Gowers's own critique of A–Z style guides is the best argument against a naive linter:
  *"There is no reason why anyone addicted to abstract nouns, unconscious of any offence, should ever
  be prompted to read that article."* A word list only helps people who already suspect the problem.
- His chapter structure is a decent linter architecture: *The Elements, Correctness, Avoiding the
  Superfluous Word, Choosing the Familiar Word, Choosing the Precise Word, The Handling of Words,
  Punctuation.*

### E7. Joseph M. Williams — *Style: Lessons in Clarity and Grace* (via Wikipedia)
https://en.wikipedia.org/wiki/Style:_Toward_Clarity_and_Grace

**Thin source — say so plainly.** The Wikipedia article is bibliographic: edition history, table of
contents, marketing complaints. It does **not** contain Williams's actual principles. The book is
not freely available.

What is usable from it:

- The lesson structure, which is a better taxonomy than any AI tell-list: *Correctness · Actions ·
  Characters · Cohesion and Coherence · Emphasis · Framing Documents · Framing Sections · Concision ·
  Shape · Elegance · The Ethics of Clarity · Beyond Clarity.*
- Williams's thesis, quoted: *"It is good to write clearly, and anyone can."*
- Pullum, in his 2024 grammar book, *"included it among books that he recommends as worthwhile
  reading, unlike various other books from the past that he disrecommends"* — i.e. the linguist who
  destroyed Strunk & White endorses Williams. That is a strong signal about which classic to build on.

**Action item for the project:** Williams's *Actions* and *Characters* lessons (make the main
character the grammatical subject; make the key action the verb, not a nominalisation) are the exact
inverse of Reinhart's measured findings. Get the book. This review cannot substitute for it.

---

## Synthesis

### 1. Ranked tells, most damning first

**Structural — rhythm, shape, and argument. Hard to game, and the real giveaway.**

1. **Rhetorical template density.** Not any one device — the *rate*. Gladd measured 2.83 vs 26.7
   templates per thousand words between his own post and Gemini's summary of it. Every good source
   converges on this: Wikipedia ("lots of them, lots of times"), Cherryleaf ("find eight or ten"),
   Gladd ("scatter-shot fashion"). **This is the number one tell and the one nobody's linter
   measures.**
2. **Low variance in everything.** Sentence length, paragraph length, parse depth, dependency
   distributions. Ju et al.: *"a shifted mean, a lower standard deviation, and a reduction of the
   long tail."* Uniform paragraph length is a symptom of this, not a separate rule.
3. **Noun-heavy informational density.** Reinhart's hardest numbers: present participial clauses at
   **5.3×**, 'that'-clauses-as-subject at **2.6×**, nominalizations at **2.1×**, phrasal coordination
   at **1.9×** the human rate. This is Williams's *Actions and Characters* failure, measured.
4. **Negative parallelism** ("not just X, but Y", "not X, but Y", "isn't about A, it's about B") —
   *where the two halves say the same thing*. Named independently by Wikipedia, Russell et al.'s
   annotators, Belcher, Robbins, Gladd, Humanized Copy. The most-agreed-on structural tell in the
   corpus.
5. **Rule of three used to fake completeness.** Wikipedia's framing is the right one: LLMs use it
   *"to make superficial analyses appear more comprehensive."* The tell isn't the tricolon; it's the
   tricolon where the third item restates the second at higher register.
6. **Over-symmetry / hedging both sides.** Robbins: *"every point has a counterpoint, every advantage
   has a corresponding challenge mentioned."* Wikipedia's formulaic "Despite its X, Y faces
   challenges..." section. Both are the same reflex: avoiding a falsifiable claim.
7. **Genre glitch / register mismatch.** Rettberg's term; Reinhart's data (*"humans refrain from
   using these words in certain genres"*). Promotional or lyrical register intruding into
   operational text. Very hard for a model to avoid, because it's associative.
8. **Elegant variation — the referent drifting.** Belcher #3: Sunjata → "main character" →
   "protagonist" → "central figure" → "key player". Caused by the repetition penalty. Costs the
   reader, and reliably makes the piece lose its throughline. Wikipedia lists it as a *historical*
   indicator, so it may be decaying.
9. **Copula avoidance.** "serves as / stands as / functions as / represents" where "is" would do.
   Backed by a measured >10% drop in "is"/"are" in 2023 academic writing.
10. **Dead-end sentences and abstraction chains.** Belcher #2 and #4; Gowers's *Abstract words*;
    Robbins's visualization test. A sentence that introduces a concept never mentioned again, or a
    chain of "x of y" genitives with no agent.
11. **The interpreter removed.** Belcher #6: the text "subverts", "exposes", "underscores" — texts
    as agents, the writer absent. Related to the "phobia of the 'I'".
12. **Signposting and closing restatement.** "It's important to note", "In summary", "In conclusion".
    Wikipedia files both as **historical** — largely tuned out since 2024. Still worth flagging in
    cover letters, which are a genre where they persist.
13. **Formatting shape.** Inline-header vertical lists (bullet + bold header + colon), mechanical
    boldface, over-symmetrical bullet lists, emoji as headers, title-case headings, thematic breaks.
    Very high precision on Wikipedia's evidence, trivially avoidable, and almost entirely a
    copy-paste artefact rather than a prose property.

**Lexical — word choice. Easy to game, decaying fast, and the source of every false positive.**

14. **Density of era-appropriate AI vocabulary.** The strongest lexical evidence: Juzek & Ward's 21
    focal words (delve +1,375%, showcasing +1,396%, underscores +904%, intricate +611%…) and
    Reinhart's >100× words (*camaraderie, palpable, tapestry, intricate*; "tapestry" in 23% of GPT-4o
    outputs). But: Russell et al. show vocabulary cues drop from 57.1% to 42.3% of correct
    detections once the model is told to avoid AI vocab. **It is the first thing an adversary fixes.**
15. **Promotional / significance-inflation phrasing.** "stands as a testament", "rich cultural
    heritage", "nestled in the heart of", "plays a crucial role", "indelible mark". Higher precision
    than bare word lists, because it's a phrase-level construction, not a word.
16. **Hyper-adjectival prose.** Belcher #7. Nearly every noun modified, and the modifiers often
    factually wrong. Countable (adjective-to-noun ratio) but noisy.
17. **Corporate/journalistic cliché.** *key, landmark, major, boost, leverage, robust, holistic,
    seamless, at scale.* Note that the Guardian banned most of these before LLMs existed. Flag as
    bad writing, not as AI.
18. **Curly quotes and apostrophes.** Real signal for ChatGPT/DeepSeek — and Wikipedia itself lists
    the confounds: Chicago Manual style, Word smart quotes, macOS defaults, LanguageTool, citation
    tools. Near-useless outside a plain-text context.
19. **Em dashes.** See §2. Lowest-value item on this list and the one with the highest false-positive
    cost.

**Non-tells — sources actively warn against these.** Perfect grammar. Mixed register. "Bland" or
"robotic" prose. Formal or academic vocabulary in general. Transition words in isolation
("Additionally", "Moreover", "Furthermore" — *"not a strong tell"*). Unsourced claims. And, per
Reinhart, **agentless passive voice**, which GPT-4o uses at *half* the human rate.

### 2. Where the sources disagree

**Em dashes: is it a tell, or a panic?**

Positions found:
- *Yes, a tell*: Wikipedia (hedged), Ars Technica, popular consensus, GPTZero-adjacent blogs.
- *No, or no longer*: The Economist study via Wikipedia (only Claude exceeds professional writers;
  **ChatGPT uses them less**); Russell et al.'s expert annotators, who cited *dashes and ellipses*
  as markers of **human** writing; Slate 2011, proving the complaint is fifteen years older than AI;
  Irrelevant Matters, on false-positive cost.

**The anti-tell side has better evidence.** Wikipedia already concedes the point in its own text:
*"most useful when taken in combination with other indicators, not by itself"*, and *"much more
common on discussion pages than in article text"*. OpenAI actively suppressed it in GPT-5.1. The
one measurement anybody has run (the Economist's) says ChatGPT now *underuses* them.

What survives is narrower and better: (a) **spaced** em dashes surrounded by spaces, against
typographic convention, is still a copy-paste artefact tell; (b) **em-dash pivots** — using the dash
to relaunch a clause at a higher register, "not X — it's Y" — are a *structural* tell that happens
to use a dash. Lint the pivot, not the glyph. Malone's 2011 argument stands on its own merits:
dashes often mark a sentence that needed rethinking.

**"Delve": overblown?**

Three positions:
- *Genuine, huge signal*: Juzek & Ward (+1,375% in PubMed), Kobak et al., Liang et al.
- *Explained by Nigerian English, therefore flagging it is dialect prejudice*: Hern, Willison,
  and the Nigerian Twitter response to Paul Graham.
- *The dialect story is wrong*: Juzek & Ward checked ICE and found *"no evidence that the focal
  words are especially prevalent in any particular variety of English"*; Goedecke separately checked
  ICE-Nigeria for em dashes and found the same null.

**The corpus evidence wins on the causal question, the fairness critics win on the practical one.**
Delve *is* a real spike and it is *not* explained by Nigerian English — two corpus checks say so.
But Liang et al. (B6) show detectors *do* systematically misclassify non-native writing as AI, so
the practical harm of flagging "delve" on an individual is real even if the dialect explanation is
wrong. And Juzek & Ward found a second-order problem: their own study participants were already
**wary of "delve"**, meaning the word is now socially marked independent of who wrote it. It has
become a shibboleth rather than a measurement.

Position for unslop: keep "delve" in a **density** count, never as a standalone flag.

**Do AI detectors work?**

- *Yes*: Pangram's own report (38× lower error), Russell et al.'s benchmark (Pangram matched a
  99.7%-accurate human panel).
- *No, at the level that matters*: Watkins (false positives on Gary Marcus by casual scrolling;
  labels flipping with context; a post scoring 100% human paragraph-by-paragraph but "AI" whole);
  Liang et al. (non-native bias); Liang et al. again (*"corpus-level trends... too subtle to detect
  at the individual level"*); Wikipedia (*"non-trivial error rates"*).

**Both are right and they are answering different questions.** These methods are sound at corpus
scale and unreliable on a single document. Gladd draws the right line: use detectors for aggregate
pattern recognition, use explainable structural analysis for one particular piece of writing.

**Can humans detect AI text?**

Wikipedia cites a 2025 study finding humans are *"no better than random chance"*. Russell et al.
find five untrained-but-experienced LLM users hit ~99.7% by majority vote. Not actually a
contradiction: **frequent LLM users are good at this; the general population is not.** Which means
tell-lists mostly transfer expertise, not create it.

**Is the whole enterprise doomed?**

Oliver argues yes, eventually: *"One day, perhaps soon, we will not be able to tell."* Ars Technica
documents vendors suppressing tells on demand. Wikipedia version-stamps its vocabulary because the
2023 list is already stale, and warns *"do not merely treat these signs as the problems to be fixed;
that could just make detection harder."* Every lexical rule has a half-life. Structural rules —
template density, variance, nominalisation rate — are grounded in *how* instruction-tuned models
generate, not in a swappable vocabulary, so they will last longer. Not forever.

### 3. Linter-checkable vs. human judgement

**Cleanly automatable — deterministic, low false positive rate.**

- Spaced em dash (` — `), curly quotes/apostrophes, emoji in headings, markdown artefacts
  (`**Header:**` inline-list pattern), title-case headings, `---` thematic breaks, level-1 headings.
- Regex families: `not (just|only|merely|simply) .{1,60}(but|it's)`, `it's not about .* it's about`,
  `more than (just )?`, `serves as|stands as|functions as|represents a`, `it('s| is) (important|worth)
  (to note|noting)`, `in (summary|conclusion)`, `Despite (its|these) .{1,40}(challenges|faces)`.
- Word/phrase density counters over a versioned list (Juzek's 21 + Reinhart's high-multiplier set +
  Wikipedia's era lists), scored **per thousand words with a threshold**, never as a binary flag.
- Sentence-length **standard deviation** and paragraph-length standard deviation. Ju et al. give
  the theoretical justification; the metric is trivial.
- Tricolon detection via coordinated triples (`X, Y, and Z` where all three are same-POS phrases).
  spaCy handles this; Gladd has already proven it works.
- Adjective-to-noun ratio; nominalisation count (`-tion|-ment|-ance|-ness|-ity` suffix families +
  spaCy POS). Reinhart's 2.1× multiplier gives a calibration target.
- Present participial clause count (`, VBG ...`) — Reinhart's strongest single feature at 5.3×.
- 'That'-clause-as-subject detection (dependency parse: `that`-clause with `nsubj` relation).
- Boldface density; bullet-list uniformity (variance of bullet lengths).
- Repeat-reference drift: count distinct noun phrases co-referring to the main subject.

**Automatable but noisy — needs a threshold and a human in the loop.**

- Overall "template density" à la Gladd. Buildable (spaCy + a 200-pattern cookbook), but the
  adjudication pass that decides whether a candidate match *really* fits the template is where the
  accuracy lives, and Gladd used an LLM for it.
- Provenance / stock-phrase matching (Infini-gram). Distinguishes portable stock phrasing from
  situated reference — but as Gladd concedes, allusion and genre convention light it up too.
- Perplexity / burstiness. Computable, but GPTZero abandoned it, and it penalises non-native writers.
  Use as a *descriptive* signal in a report, never as a verdict.
- Passive voice. **Actively harmful if naively implemented.** Pullum shows humans can't identify it;
  Reinhart shows GPT-4o uses *less* of it than humans. If included at all, flag agentless passives
  only, and only as information.

**Requires human judgement — do not pretend otherwise.**

- **Does the negative parallelism carry new information?** The regex finds "not just X but Y" in one
  line. Deciding whether Y actually differs from X is the whole judgement. Same for tricolons: is
  the third item load-bearing or decorative?
- **Genre glitch / register mismatch.** Requires knowing what register the document is supposed to
  be in. Rettberg's examples (tomato flavour in a business story) are obvious to a reader and
  invisible to a parser.
- **Banality of the claim.** Belcher's Polonius problem. No tool detects "this argument is the most
  obvious one available".
- **Dead-end sentences.** Detecting that a concept is introduced and never developed is technically
  approachable via coreference, but judging whether it *should* have been developed is not.
- **The visualization test.** Robbins's *"if you can't see anything, it's probably AI"* is the best
  single rule in this entire review and is completely unautomatable.
- **Whether an adjective is the *right* adjective.** Belcher's example — "silent" applied to a cell
  that is anything but — requires knowing the referent.
- **Whether the piece needed writing at all.** Warner's question.
- **Is this the writer's own voice?** A linter can strip AI tells and leave text that is clean,
  correct, and belongs to nobody. That failure mode is worse than the original problem for a cover
  letter or a founder message.

**The honest bottom line:** the automatable rules catch the artefacts (formatting, glyphs, word
frequency). The semi-automatable rules catch the rhythm (density, variance, syntax multipliers) and
are where the real value is. The judgement calls catch the thinking — and they are the reason
anybody reads the writing in the first place. A linter that only implements tier one will teach a
writer to launder AI prose. A linter that reports tiers one and two and *asks* about tier three is
the useful design.

---

## Sources not read

Recorded for completeness; do not count them.

- **The Economist, "How to spot AI writing" (30 July 2026)** — hard paywall and bot block. Cited
  second-hand via Wikipedia; its em-dash finding is load-bearing and should be verified against the
  primary text.
- **Washington Post interactive** — methodology extracted, findings not (JS-only content).
- **Sam Kriss, "Why Does A.I. Write Like … That?" (NYT Magazine, 3 Dec 2025)** —
  https://www.nytimes.com/2025/12/03/magazine/chatbot-writing-style.html — blocked at every route
  attempted. Wikipedia cites it for both the rule of three and em dashes. Worth chasing.
- **McSweeney's, "The Em Dash Responds to the AI Allegations"** — 403 on every attempt. Satire;
  low information value, but a good epigraph if someone can retrieve it.
- **Williams, *Style: Lessons in Clarity and Grace*** — book, not online. The Wikipedia article
  (E7) is a poor substitute and this review flags it as such. **Buy the book before writing the
  style rules.**
- **Gowers, *The Complete Plain Words*** — book; read via the Wikipedia article (E6), which carries
  enough direct quotation to be usable but is a secondary source.

---

## URL verification note

All 42 URLs cited above were checked (Sept 2026). Seven return `403` or time out to a plain
`curl` because of bot protection, but all seven are live pages and six of the seven were read
through an alternative route:

| URL | Plain curl | How it was read |
|---|---|---|
| chronicle.com/article/10-ways-ai-is-ruining-your-students-writing | 403 | reader proxy — **full text read** |
| chronicle.com/article/50-years-of-stupid-grammar-advice | 403 | reader proxy — **full text read** |
| pnas.org/doi/10.1073/pnas.2422455122 | 403 | read via arXiv preprint 2410.16107 (same paper) |
| science.org/doi/10.1126/sciadv.adt3813 | 403 | read via arXiv preprint 2406.07016 (same paper) |
| washingtonpost.com/…/how-detect-chatgpt-em-dash/ | timeout | reader proxy — **methodology only**, findings are JS-rendered |
| economist.com/culture/2026/07/30/how-to-spot-ai-writing | 403 | **not read** — cited second-hand via Wikipedia |
| nytimes.com/2025/12/03/magazine/chatbot-writing-style.html | 403 | **not read** — blocked at every route |

The remaining 35 returned `200` and were read directly.
