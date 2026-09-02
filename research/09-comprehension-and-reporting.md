# Comprehension, scanning, and how a machine reports to a person

Research note for Weave. Two surfaces, two metrics.

**Comprehension** — does the reader end up understanding, and can they act without a follow-up
question. **Intelligibility** — can the thing be scanned and parsed at all: structure, ordering,
density, what the eye hits first.

Everything here is a generation question, not a detection question. Detection is
`research/01`–`research/08` and is not revisited.

**117 distinct URLs, every one fetched**, plus roughly forty further works cited by citation only —
paywalled, out of print, or reached through a source that read them. Dead, redirected, paywalled and
bot-blocked links are named where they occur and collected in §8. Where a number could not be traced to
a primary source it is marked as such rather than repeated.

---

## Verdict first

**1. The best-known numbers in this field are worse-sourced than the worst-known ones.** "79% of users
scan" is fifteen people out of nineteen in a study its own authors labelled exploratory. "Users read
20% of a page" is an unexplained downward nudge off a hypothetical ceiling derived from dwell time on
25 people's 2004 browser logs. "Whitespace improves comprehension by 20%" is fabricated, and the cited
author says so on the record. "Chunk at 7±2" was disowned by the man who introduced it to the field, in
a footnote, in 1998.

**2. Four independent literatures converge on one claim, and it is the only claim in this document
strong enough to build on.** Text difficulty is not a property of text. It is a relation between a text
and a specific reader's prior knowledge. Cognitive load theory says it (Sweller et al. 2019: "measures
that ignore knowledge when determining complexity are largely useless"). Expertise reversal says it
(Kalyuga et al. 2003). The reverse cohesion effect says it (McNamara et al. 1996: added coherence helped
low-knowledge readers and *harmed* high-knowledge readers). The plain-language evidence says it from
inside its own data (Redish's FCC rewrite: +102% for novices, +29% for experts). Any single-number
readability or clarity score is measuring the wrong object because it has no reader term.

**3. Comprehension and scanning are in tension, and the field pretends they are not.** The inverted
pyramid, the layer-cake heading pattern, the fact box — every intervention that makes a document
scannable also pre-decides what matters, and one participant in Shebilske & Rotondo (1981) named the
cost precisely: *"I like to pick out what I believe is important and not be forced to see what someone
else thinks is important."* The one measured comparison of inverted-pyramid against chronological news
structure found the front-loaded version produced *worse* cognitive engagement. Scannability is not free.

**4. Diátaxis is silent on both metrics, by construction rather than oversight.** Its axes are derived
from the structure of craft, not from the structure of a reader's attention. It types the document; it
says nothing about ordering inside a type, nothing about density, nothing about the reader who does not
read, and it explicitly disclaims visual design. It also has no cell for the artefact this project
most needs to govern: a time-indexed, incomplete-by-design, decision-forcing report from an agent to
its operator.

**5. The operator literature is not thin. The agent-operator literature is.** Aviation alerting,
process-safety alarm management, military briefing doctrine and clinical handoff have between them
about seventy years of regulation, incident data and controlled trials, and they converge hard —
three severity tiers, three levels of understanding, no alert without a defined response, bottom line
first, report deviation immediately. What is genuinely absent is research on how an *autonomous
software agent* should write a status report to a human. There are two or three relevant HCI papers
from 2024–2026 and a great deal of engineering convention. Section 5 says which is which.

**6. The single most transferable idea found anywhere in this research is aviation's alert-inhibition
doctrine.** FAA AC 25.1322-1 withholds true, correct information from the flight crew when
"an alert could cause a hazard if the flightcrew was distracted by or responded to the alert." The
information is not destroyed; it reappears when the phase ends. An agent that reports everything it
knows the moment it knows it has not understood the problem.

---

# Part 1 — Diátaxis, re-read through the comprehension and scanning lens

`research/03` read Diátaxis as a mode framework and got the mode framework out of it. Asked a different
question — *does this help the reader understand, and can they scan it* — it returns almost nothing,
and the reason is structural.

## 1.1 What Diátaxis is a theory of

The two axes are **action/cognition** and **acquisition/application**. Procida derives them from the
structure of craft: a practitioner both does and thinks, and both studies and works. Cross them and you
get four kinds of *need*. Ask what documentation must be to serve each need and you get four kinds of
*document*.

Every term in that derivation is on the **producer's** side of the page. Need, purpose, mode, boundary.
Nothing in the axes refers to the reader's eye, the reader's attention budget, the reader's prior
knowledge, or the reader's working memory. Diátaxis is a taxonomy of **purpose**, not a theory of
**reception**. It answers "what is this document for", and it answers it well. It does not answer "will
this land".

Procida is explicit that this is the boundary, not an omission:

> "Diátaxis cannot address functional quality in documentation. It is concerned only with certain
> aspects of deep quality."

> "It certainly cannot offer a short-cut to success, bypassing the skills and insights of disciplines
> such as user experience or user interaction design, or even visual design."

## 1.2 The eight silences

**(1) Ordering inside a mode.** Diátaxis says a how-to is a sequence of actions and a reference is
information-oriented. It does not say the conditions go before the instruction, or that the conclusion
goes first, or that the most decision-relevant fact is hoisted. Every other source in this document
does. Google, the Federal Plain Language Guidelines, the Good Docs Project and ISO 24495-1 all state
conditions-before-instructions independently (`research/03` §2.15). AR 25-50 makes bottom-line-up-front
a regulation. Diátaxis has no position.

**(2) Density.** No word count, no paragraph length, no sentence length, no page budget. A 40,000-word
tutorial is perfectly conformant Diátaxis. NN/g's measured paragraph-position cliff — 81% / 71% / 63% /
**32%** of readers looking at paragraphs 1 to 4 — has no analogue anywhere in the framework.

**(3) The reader who does not read.** Diátaxis assumes a reader who reads. Carroll & van der Meij
(1996) measured that about **1 in 20** readers process a manual linearly. NN/g's whole corpus is about
the other nineteen. Reference is the only mode that gestures at random access ("lists and tables"), and
that is an observation about content shape, not about scanning behaviour.

**(4) Visual and structural form.** Headings, bold, tables, lists, whitespace, code blocks. Explicitly
out of scope, and it is the area where the measured evidence is strongest (§4).

**(5) Prior knowledge, beyond the acquisition/application proxy.** Acquisition-vs-application is a
proxy for *what the reader is doing*, not for *what the reader already knows*. It has no account of the
expertise reversal effect, in which the same document helps a novice and harms an expert. This is the
sharpest gap, because it is the one finding that four literatures agree on.

**(6) A test.** Functional quality "can be checked or measured" but Diátaxis cannot deliver it. Deep
quality "cannot be checked or measured, but... can still be clearly identified". So the framework
offers no acceptance criterion at either level. Its loop is author-side introspection: choose
something, assess it, decide, act. ISO 24495-1's position is the opposite and blunter: "The only way to
be sure a document is working for its readers is to ask them." Robyn Penman's 1993 critique of plain
language made the same point, and Kimble conceded it.

**(7) The doorway artefact.** Already recorded in `research/03` §1.7. A README must orient across all
four quadrants and the only available advice is to split it.

**(8) The report.** Diátaxis has no cell for a machine-to-human status report. Run it through the
compass: it informs cognition, in the application of skill, therefore **reference**. That answer is
wrong in every particular. Reference is atemporal, complete, neutral and consulted on demand. A status
report is time-indexed, deliberately incomplete, evaluative, and pushed. §6 develops this.

## 1.3 The one place Diátaxis touches reception

Flow. Under deep quality, Procida says Diátaxis contributes by "preventing the kind of disruption of
rhythm that occurs when something runs across our purpose and steady progress towards it (for example
when a digression into explanation interrupts a how-to guide)."

That is a genuine reception claim, and it now has an independent measurement behind it that Procida
does not cite. NN/g's 2019–2020 eyetracking found that pull quotes and inline messages **terminate
reading that was already happening**: "participants began reading articles nearly linearly and
completely until they hit a pull quote or inline ad. After reaching one of those elements, the
participants abandoned their reading and fell into light scanning." Mode-mixing is not only a
maintenance problem. Interruption measurably drops the reader out of the commitment pattern, and they
do not come back.

That is the whole of Diátaxis's contribution to comprehension and scanning: one correct claim about
interruption, with the evidence supplied from elsewhere.

---

# Part 2 — The sources

Per source: URL and fetch status, what it is, the transferable rules, and whether the claim is
**MEASURED** (a study with a stated method and sample), **RECEIVED WISDOM** (asserted, repeated, never
tested) or **REGULATORY** (a rule someone is obliged to follow, which is not the same as evidence).

## 2.1 The structured-writing lineage

Diátaxis descends from this line. Read for comprehension and scanning, it has one strong body of
evidence, one vendor-manufactured body, and a forty-year gap where the research should be.

### Robert E. Horn — Information Mapping / structured writing

**Primary text.** <https://faculty.washington.edu/farkas/TC510-Fall2011/Horn-StructuredWritingParadigm.pdf>
— live, 6pp. Horn, "Structured Writing as a Paradigm", in *Instructional Development: State of the Art*,
Educational Technology Publications, 1998. The most reliable free copy of Horn in his own words, hosted
on David Farkas's UW course page.

**The efficacy review.** *How High Can It Fly? Examining the Evidence on Information Mapping's Method
of High Performance Communication*, Lexington Institute, 1992. Horn's own site
`bobhorn.us` is **an entirely suspended domain** — every citation pointing at it is dead. Full OCR text
survives at <https://archive.org/details/book-1992-how-high-can-it-fly> (live).

**Vendor.** `infomap.com` 301s to <https://informationmapping.com/> (live).

**What it is.** A structured-writing method from 1963–65, commercialised through Information Mapping,
Inc., of which **Horn was CEO and Chairman 1967–1995**. The 1992 evidence review is therefore the
sitting CEO of the vendor reviewing his own product, published through his own imprint, not peer
reviewed.

**The four principles (Horn 1998 — four, not the vendor's six or the folklore's seven):** chunking,
labelling, relevance, consistency. Plus seven information types: procedure, process, concept,
structure, classification, principle, fact.

**Definitions, verbatim.** An information block is "composed of one or more sentences and/or diagrams
about a limited topic. They usually have no more than nine sentences. They are always identified
clearly by a label." An information map is "more than one but usually not more than nine information
blocks about a limited topic", typically one to two pages.

**Horn on scanning, verbatim:** "Much reading in the Age of Information Overload is actually scanning.
We must continually identify that which we don't have to read... This makes the requirement for aiding
scanning paramount in the specification of formatting." And: "If the chunks are clearly and functionally
labeled the reader will be able to scan the labels and get a gist of the document as a whole."
Both **RECEIVED WISDOM**. No study cited at either point.

**The chunking principle is retracted by its own author.** Horn attributes chunking to Miller (1956),
then in Note 2 writes, verbatim:

> "Originally I took Miller's dictum of 7 plus or minus 2 quite literally. Subsequent research on
> chunking has indicated that the ideas must be retained but in using them as a basis for structured
> writing guidelines, **to consider them on a more metaphorical basis.**"

Every downstream "chunks of 7±2 because Miller" is citing a number its own author disowned.

**Horn quotes his own reviewer against himself.** Ruth Clark (1993), on Horn's survey of the research:

> "most of the research done on the method has evaluated its effectiveness on learning outcomes, not
> retrieval speed or accuracy... **Of the ten studies summarized, seven focused on learning and only two
> on retrieval time.**"

Information Mapping is marketed on scanning and retrieval. It was validated, to whatever degree, as
instructional design. Those are different claims and the evidence does not transfer. Horn does not
dispute Clark; he explains why.

**What the studies actually found.**

| Study | n | Result | Status |
|---|---|---|---|
| Jonassen & Falk 1980, *Programmed Learning & Educational Technology* 17(1) | 41 | **32% more accurate** retrieval — number of correct answers *located within one hour*, i.e. accuracy at fixed time, not speed. Baseline was a programmed-learning text, not ordinary prose | MEASURED, peer-reviewed |
| Same | 41 | **"Approximately equal initial learning"** | MEASURED NULL |
| Schaffer 1982, *NSPI Journal* | 10 | **54.5% fewer errors** on a real 140-page manual | MEASURED |
| Same | 10 | **"No significant effect on the time required to complete the tasks."** And the restructured manual was **185pp vs 140pp — 32% longer** | MEASURED NULL |
| Holding 1985, Pacific Bell | 180 | "**All of the supervisors surveyed** state that the amount of time it takes to read a document... has decreased. The mean decrease... was 32%." Horn's own significance field: **"Not reported."** | Supervisor opinion survey |
| Soyster 1980 | — | **No difference** on delayed recall | MEASURED NULL |

**Schaffer 1982 is the finding the vendor buried.** The only test in a real business setting, on a real
manual, with real employees doing real look-up tasks, found **no time effect**. It found accuracy, and
it cost 32% more pages. The "up to 30% decrease in reading time" headline comes from the supervisor
survey, not from anyone with a stopwatch.

**The vendor's current claims chart is falsely attributed.**
<https://informationmapping.com/cdn/shop/files/benefits.png?v=1613531788> (live) states nine
percentages "based on Robert E. Horn's study at Harvard and Columbia universities about how readers deal
with large amounts of information." **No such study produced them.** +32% retrieval accuracy is
Jonassen & Falk 1980 at UNC Greensboro. −54% error rate is Schaffer's N=10. −51% reading time matches
nothing in Horn's own review, whose figure is 32%. −91% supervisor questions appears nowhere.
A licensed distributor sheet (<https://www.globaltna.com/upload/InformationMapping.pdf>, live) gives
**57%** word reduction where the parent company gives **30%** — same claim set, 27 points apart — and
its "Reader benefits" section cites, verbatim, "**(cf. ).**" An empty citation.

**What survives, stripped of the marketing:**

1. **One chunk, one purpose.** Horn's sharpest observation is that ordinary paragraphs "mix
   introductory and definitional functions."
2. **Every chunk gets a functional label.** In structured writing, labels carry the cohesion that
   connectives carry in prose. Horn says so: "much of the burden of coherence is placed on the labeling
   structure". This is the method's real bet and its real fragility.
3. **Type the content, and let the type impose mandatory parts.** A concept owes you definition +
   example + optional non-example. Horn calls these "key blocks". **This is the mechanic Diátaxis
   lacks** — Diátaxis names four types and specifies no required components for any of them.
4. **The topic × block-type matrix as a completeness check.** "Examination of the blank spaces show the
   analyst what information may still be not known." Cheap, mechanical, and it works.
5. **Structuredness is multi-dimensional** — chunked / labelled / formatted / consistent / sequenced
   are five independent dials, not one switch.

**Independent critique of the 7±2 chain.** Geoff Hart, "The mythical, magical number 7", *Intercom*,
April 2006, <https://www.geoff-hart.com/articles/2006/magic7.htm> (live): "few people have actually
read Miller's article. As a result, many myths have arisen from partial and incorrect understanding of
secondhand accounts." Tufte, same point:
<https://www.edwardtufte.com/notebook/the-magical-number-seven-plus-or-minus-two-not-relevant-for-design/>
(live) — Miller's paper "neither states nor implies rules for the amount of information to be shown in a
presentation."

The decisive structural objection: Miller measured **recall** of items held in the head. Reading a
document is **recognition** — the items are on the page. The immediate-memory span constrains recall,
not reading.

### John M. Carroll — minimalism

**The primary experiment.**
<http://swcarpentry.github.io/swc-releases/2017.02/instructor-training/files/papers/carroll-minimal-manual-1987.pdf>
— live, 10pp, full text. Carroll, Smith-Kerker, Ford & Mazur-Rimetz, "The Minimal Manual",
*Human–Computer Interaction* 3(2), 1987, 123–153. Peer-reviewed, control conditions, inferential
statistics, realistic task environment. **This is the strongest empirical evidence in the entire
structured-writing lineage and it is not close.**

**The numbers, with provenance.**

| Finding | Value | Statistic | n |
|---|---|---|---|
| Learning time | **40% less** | t(17) = 3.06, p < .01 | 19 (10 MM / 9 SS) |
| Task subtasks accomplished | **2.7×** | t(16) = 3.63, p < .01 | 19 |
| Efficiency (subtasks/min) | "more than twice as efficient" | t(16) = 2.90, p < .01 | 19 |
| Subtasks completed, Exp 2 | **+58%** | F(1,28) = 5.31, p < .05 | 32 |
| "Learn while doing" framing | **+52%** | F(1,28) = 4.48, p < .05 | 32 |
| Manual size | **~1/8 the verbiage** | — | design fact |

**Scope it honestly.** Every participant was a computer novice learning a word processor in the
mid-1980s, over one to a few days. Nothing here tests minimalism for reference material, for expert
readers, for API docs, or for scanning a corpus. Three subjects quit in frustration under guided
exploration, which the paper reports.

**The four principles**, from van der Meij & Carroll, "Principles and Heuristics for Designing
Minimalist Instruction", *Technical Communication* 42(2), 1995, 243–261. ERIC EJ504916,
<https://eric.ed.gov/?id=EJ504916> (live record; full text paywalled at IngentaConnect, and
thefreelibrary's copy 403s to automated fetch):

1. Choose an action-oriented approach — immediate opportunity to act, support exploration.
2. Anchor the tool in the task domain — instructional activities are *real* tasks.
3. Support error recognition and recovery — error information located where the error occurs.
4. **Support reading to do, study and locate.**

**Principle 4 is the one that matters here.** It names three distinct reading *acts* and says a
document must serve all three. That is precisely the axis Diátaxis does not have: not *what kind of
document is this*, but *what is the reader's eye doing right now*.

- **Reading to do** — executing. Steps must be findable and in order.
- **Reading to study** — building a model. Concepts and rationale.
- **Reading to locate** — scanning for one fact. Labels, headings, closure.

The authors also refuse the checklist reading of their own framework: "neither the principles nor the
heuristics of minimalism are rules that should be followed blindly."

**The best critical survey.** Virtaluoto, Suojanen & Isohella, "Minimalism Heuristics Revisited",
*Technical Communication*, 2021. <https://osuva.uwasa.fi/bitstreams/e96bd3f9-c878-49ae-9cc0-e5774f840bdf/download>
— live, 1.1 MB, full text. Five findings worth carrying:

- **Guided exploration is contested**, unlike the other three principles. Williams & Farkas (1992)
  argue it "may be inefficient and frustrating for the learner... and it focuses on declarative
  knowledge rather than the acquisition of procedural knowledge."
- **Minimalist manuals cost about 30% more to produce** (van der Meij 2017). The reader saves 40% of
  learning time; the writer pays 30% more production time. Only one of those numbers gets repeated.
- **The research literature went silent.** A search of six technical-communication journals for
  2014–2019 "came out empty handed. Articles dealing with minimalism in these journals dated back to the
  1990s–early 2000s." Minimalism has not been refuted. It has been abandoned as a research topic.
- **It is not a general prescription.** Rosenbaum (1998): works for installation instructions, not all
  document types. Van der Meij (1992): "legal requirements may turn minimalists into maximalists."
- **An unresolved internal contradiction, and every topic-based framework inherits it:** "If all topics
  in a minimalist manual are standalone modules to be read in any order, how can the information for
  recurring actions be faded as the guide progresses?" You cannot both assume the reader arrived cold
  *and* assume they absorbed the earlier pages.

**Carroll & van der Meij, "Ten Misconceptions about Minimalism", *IEEE Transactions on Professional
Communication* 39(2), June 1996, 72–86.** <https://ris.utwente.nl/ws/files/249663536/Caroll1996ten.pdf>
— live, full text. Contains the best citable non-linear-reading number in existence, verbatim:

> "we do not expect users to process the manual in [a] linear fashion. Indeed, such reading is quite
> uncommon; **in our studies about 1 of every 20 subjects reads everything in this order.**"

**~5% read linearly. MEASURED**, published, attributed. Use this instead of the uncited "80% bounce
rate" that circulates in documentation blogs. Scope: print manuals for word-processing software, early
1990s, and Carroll gives no n for that aggregate.

### David Farkas — layering as the fix for minimalism

<https://faculty.washington.edu/farkas/dfpubs/Farkas-Layering%20as%20a%20Safety%20Net%20for%20Minimalist%20Doc.pdf>
— live, author's preprint. In *Minimalism Beyond the Nurnberg Funnel*, MIT Press, 1998, 247–74.

Farkas is both one of minimalism's principal critics and a contributor to Carroll's own volume, which
makes this the point where the minimalism and progressive-disclosure lineages join.

**The best definition of layering found anywhere, verbatim:**

> "Layering... means providing clearly marked **channels through the information that accommodate
> different needs**."

> "in many print and electronic documents headings and subheadings only approximate a layering
> strategy. A clarifying perspective is to say that **true layering exists when the channels through
> the document are part of an explicit strategy for accommodating selective reading.**"

**Headings are not layering.** A document is layered only if there is a designed path for the reader who
wants less and a different path for the reader who wants more. Test: for each layer, name which reader
stops there and why.

**His three risks of minimalism, verbatim:**

> "1. The user may be unable to successfully complete the task.
> 2. The user may complete the task but expend more time and energy than he or she wished to.
> 3. In the process of completing the task (or attempting to) **the user may develop an incorrect
> mental model of the system that will cause difficulties later on.**"

Risk 3 is the one brevity advocates never price. Under-documenting does not only slow people down; it
can leave them with a wrong model that costs more later.

**And he demolishes minimalism's safety mechanism.** Minimalism's defence against cutting too much is
iterative usability testing. Farkas: "because documentation departments are often understaffed and
because software development schedules are often very demanding, documentors often lack the opportunity
to test and re-test." **In practice minimalism is deployed without the thing that makes it safe.** Any
framework in this space should assume the testing will not happen and design accordingly.

**The synthesis, and it is directly implementable:** cut the main path to the bone, and put everything
you cut behind an explicit marked channel rather than deleting it.

### Mark Baker — Every Page is Page One

*Every Page is Page One: Topic-Based Writing for Technical Communication and the Web*, XML Press, 2013.
ISBN 9781937434281.

**Authoritative table of contents:** <https://everypageispageone.com/the-book/> — live.
**Warning:** the publisher's own outline at <https://xmlpress.net/publications/eppo/> (live)
**lists only six characteristics, omitting "Link Richly"**, verified by grepping the raw HTML. A
techwhirl conference report lists five. Use Baker's own page.

**The seven characteristics, in Baker's chapter order:** self-contained (7), specific and limited
purpose (8), conforms to a type (9), establishes its context (10), assumes the reader is qualified (11),
stays on one level (12), links richly (13).

Note that "EPPO topics are the narrative minim" is a 2012 blog concept, **not** one of the seven. Some
automated summaries insert it as #7. That is an error.

**Status: RECEIVED WISDOM throughout.** Craft reasoning, argued by exhibit and analogy, zero studies.
Baker knows it — on "stays on one level" he writes "Why produce so many exhibits to demonstrate this
simple point?" He is arguing by accumulation of examples.

**The four rules worth taking anyway:**

1. **Context means position in the subject matter, not position in the information structure.**
   Verbatim: "It means locating the subject of the topic in the real world. **Placing an 'Up to TOC'
   link on a topic is not placing it in context.**" Breadcrumbs are navigation, not orientation. Budget:
   "A lead paragraph of a sentence or two will suffice" — the only number in the seven characteristics,
   and it is a stylistic judgement.
2. **Write to the qualified reader; make unqualification self-diagnosable.** "provide unqualified
   readers with enough context so that they can recognize that they are unqualified, and links to
   material they can use to qualify themselves." This is in direct tension with Carroll's *measured*
   findings about novice error recovery. Baker resolves it by pushing novice support to other pages
   rather than eliminating it.
3. **Hold one altitude per page.** "Books drill down." When a draft wants to drill down, that is a
   signal to create a child page and link, not to add a subsection. Detection heuristic: if consecutive
   sections would suit different audiences, the page has broken level.
4. **Link richly, and generate the links.** Baker's own observation from his example collection: "In
   very many cases, we find content that meets most EPPO criteria but **misses the criteria of linking
   richly**", which he blames on tooling. His exemplars are Wikipedia and Stack Overflow — and he notes
   Stack Overflow's linking is **machine-generated**. If a framework enforces exactly one thing the
   others do not, make it this, and generate rather than hand-curate.

**Baker refuses to give a topic size.** No word count, no page count, anywhere. A topic is a "narrative
minim: the smallest narrative that can be written and still be a narrative". The refusal is deliberate.

### DITA and topic-based authoring

**Spec:** OASIS DITA 1.3 architectural specification, `archSpec/base/topicorientation.html` — live.

**The smoking gun.** DITA's own spec, section 2.2.1.3, verbatim:

> "**Links in the content are best used for cross-references within a topic. Links from within a topic to
> additional topics or external resources should be avoided because they limit the reusability of the
> topic.** To link from a term or keyword to its definition, use the DITA keyref facility to avoid
> creating topic-to-topic dependencies that are difficult to maintain."

Set against Baker's chapter 13, "Link Richly", this is a direct, unresolved conflict between the two
dominant topic-based frameworks — and the justifications reveal what each optimises for:

| | Baker / EPPO | OASIS DITA spec 2.2.1.3 |
|---|---|---|
| Instruction | **Link richly** | **Links should be avoided** |
| Justification | Readers self-qualify, change level, continue their journey | Links "limit the **reusability** of the topic"; create "dependencies that are difficult to maintain" |
| Optimising for | Reader comprehension and navigation | Reuse and maintenance cost |

**Every justification the spec offers for suppressing links is an authoring-cost argument. Not one is a
reader argument.** You do not need a critic to make this point; OASIS made it.

**Is there any empirical study showing DITA or topic typing improves reader comprehension? No.** The
spec cites nothing. The canonical ROI model has no reader variable. Vendor blogs repeat the phrase
"usability studies have shown that presenting information consistently improves reader comprehension"
verbatim across companies **with no citation attached by any of them** — a textbook case of a claim
laundered into fact by repetition.

**The closest thing to a real study is a null result.** Gattis, "A Study of Lexical Repetition and the
Comprehensibility of Single-Sourced Technical Documents", *Journal of Technical Writing and
Communication* 53(4), 2023. DOI 10.1177/00472816231172904 — **all Sage URLs 403; abstract only.**
n = 65 graduate students, two passages manipulated to maximise vs minimise internal lexical repetition.
**Readers rated repetitive texts as significantly more cohesive, but repetition did not significantly
affect the accuracy of task-based responses.** A perception effect with no performance effect. And a
peer-reviewed researcher in the field, writing in 2023, describes reader comprehension of managed
content as an open question.

---

## 2.2 Progressive disclosure, layering, and the inverted pyramid

### Progressive disclosure

<https://www.nngroup.com/articles/progressive-disclosure/> — live. Jakob Nielsen, 3 December 2006.

Definition: show "only a few of the most important options" initially, then "a larger set of
specialized options upon request." Two design rules: split features by frequency of need, and make the
route to the second level obvious with strong information scent.

**No quantitative data or measured evidence is provided in the article.** It cites the "training
wheels" interface work — which is Carroll again, closing the loop. Carroll & Rosson (1997) are quoted
in the secondary literature as saying flatly that **"no empirical evidence exists regarding the
effectiveness of progressive disclosure."** The primary for that quotation could not be retrieved.

**Status: RECEIVED WISDOM with a plausible mechanism.** Universally adopted, never tested as such. The
adjacent evidence that *is* real is Farkas on layering and the expertise-reversal literature, both of
which say the same thing from firmer ground: a single document for a mixed-expertise audience is
choosing whom to harm.

### The inverted pyramid — origin myth and missing evidence

**Errico et al., "The Evolution of the Summary News Lead", *Media History Monographs* 1(1).** The
canonical URL `http://blogs.elon.edu/mhm/files/2017/03/Media-History-Monographs-Volume-1.pdf`
**returns HTTP 200 and silently serves the Elon University homepage.** It is the URL every citation
still points at and it no longer serves the paper. Working archive:
`http://web.archive.org/web/20260218055148/https://blogs.elon.edu/mhm/files/2017/03/Media-History-Monographs-Volume-1.pdf`
— live on GET (Wayback 503s on HEAD).

**Method:** 21 American newspapers, every fifth year 1860–1910, seven randomly selected issues per
paper per year. Coding rule, verbatim: "A summary news lead consisted of a first sentence that included
the core facts of the story, answering the questions of who, what, where, when and why or how."

**Result, n = 46,841 stories:**

| Year | Stories | Summary leads | % |
|---|---|---|---|
| 1860 | 2,043 | 2 | 0.10% |
| **1865** | **2,002** | **0** | **0.00%** |
| 1880 | 4,475 | 12 | 0.27% |
| 1895 | 6,736 | 77 | 1.14% |
| 1910 | 4,689 | 517 | **11.03%** |
| **Total** | **46,841** | **1,163** | **2.48%** |

Verbatim: "**In fact during 1865, when the Civil War ended, no examples of stories that used the summary
news lead or inverted pyramid writing were found.**" The "broken telegraph wire" story that appears in
mainstream journalism textbooks is **RECEIVED WISDOM**, contradicted by a content analysis with zero
instances in the year it supposedly began. Pöttker (2003, *Journalism Studies*, T&F **403**, abstract
second-hand) reaches the same conclusion from the *New York Herald* and *New York Times* and adds the
better story: the form spread 1880–1910 as part of a **deliberate comprehensibility reform**, alongside
headlines and illustrations.

**That is the honest warrant for front-loading. Not "survive transmission failure" — "help the reader
understand faster."**

### Nielsen, "Inverted Pyramids in Cyberspace" (1996) — and the retraction

<https://www.nngroup.com/articles/inverted-pyramids-in-cyberspace/> — live (useit.com URLs 301 here
correctly). 31 May 1996. Roughly 800 words, **containing not a single number.**

The argument has two premises. Verbatim:

> "Inverted-pyramid writing is useful for newspapers because **readers can stop at any time and will
> still get the most important parts of the article.**"

> "On the Web, the inverted pyramid becomes even more important since we know from **several user
> studies that users don't scroll(\*)**"

**The footnote is an update Nielsen added in 2003, verbatim:**

> "In 1996, I said that 'users don't scroll.' This was true at the time... **The evolution of the Web
> has changed this conclusion.** As users got more experience with scrolling pages, many of them started
> scrolling... It is still a good guideline to ensure that all the most important information appears
> above the fold."

**Premise 2 is retracted by its author; the guideline is kept.** Premise 1 — that a reader who stops
early is better served by an inverted pyramid than by any alternative — is asserted, uncited, and as far
as this research can determine **has never been directly tested**. Attention decay down a page is
measured and robust. The inference from attention decay to "therefore front-load and readers get the
gist" is the step nobody has run the experiment on.

The one structural idea worth keeping from the 1996 piece, verbatim: "split their writing into smaller,
coherent pieces to avoid long scrolling pages. **Each page would be structured as an inverted pyramid,
but the entire work would seem more like a set of pyramids floating in cyberspace than as a traditional
'article'.**"

### Where the inverted pyramid was actually tested, and lost

<https://pdfs.semanticscholar.org/f2eb/ad1fa4020d0647314314457ec2c003516087.pdf> — live, but a
compressed-stream PDF that resisted extraction; findings below are from indexed summaries and are
**second-hand**. "Cognitive processing of news as a function of structure", comparing two inverted-pyramid
and two chronological news stories on secondary-task reaction times, cued recall, recognition and
comprehension.

The reported finding: **chronological stories facilitated better cognitive engagement than inverted
pyramid stories**, with no significant memory differences. The proposed mechanism is that inverted
pyramid readers "have to constantly access long-term memory to contextualize new bits of information and
make more inferences due to a shortage of causal connections."

Treat this as weak and gendered in its effects, not as a refutation. But note what it does to the frame:
**the inverted pyramid is a scanning intervention that may cost comprehension.** That is the tension
this whole document is about, and it appears in the very first place anyone looks for a
comprehension-versus-scanning trade-off.

**NN/g's own inverted-pyramid article** (<https://www.nngroup.com/articles/inverted-pyramid/>, live, Amy
Schade, 11 February 2018) claims comprehension as the first of five benefits and **cites no data at
all** — only cross-references to other NN/g articles about reading behaviour.

## 2.3 How people actually read on screens

This is the largest single body of practitioner evidence in documentation, and its most-quoted numbers
are traceable to three tiny studies and one borrowed dataset of 25 people.

| Famous number | What it actually is | Real n |
|---|---|---|
| "79% scan, 16% read word-by-word" | 15 of 19 people scanned; 3 read word-by-word, in a study its authors called exploratory and qualitative | **19** |
| "Concise 58% / scannable 47% / objective 27% / combined 124% better" | Geometric mean of five normalised ratio scores across incommensurable measures | **51**, ~10 per cell |
| "Users read 18% / 20% / 28% of a page" | A re-analysis of someone else's browser logs. Not eyetracking | **25 people** |
| "F-shaped pattern" | Eyetracking; method never published beyond one sentence | **232** (2006), "over 300" (2020), "more than 45" (2017) — three figures for the same study |

### Morkes & Nielsen 1997 — the source of "79%"

<https://www.nngroup.com/articles/concise-scannable-and-objective-how-to-write-for-the-web/> — live,
full text with tables. Sun Microsystems usability labs, 1997. **Not peer-reviewed.** Three studies,
81 users total: 11, 19, and 51.

**Study 2, verbatim:** "During the study, **15 participants** always approached unfamiliar Web text by
trying to scan it before reading it. **Only 3 participants** started reading text word by word."

15/19 = 78.95% → "79%". 3/19 = 15.79% → "16%". At n = 19 the 95% CI on 79% is roughly 54%–94%. The
single most-cited statistic in web writing is fifteen people and three people, and it has never, as far
as this research can find, been reported that way downstream.

Study 1 used and then abandoned a **marble-dropping boredom metric**: "Participants were instructed to
pick up a marble... whenever they felt bored... the 11 participants moved 12 marbles."

**Study 3 problems, in order of severity.**

1. **"Overall usability" is an invented composite** — the geometric mean of five normalised ratios
   across seconds, error counts, percentages and Likert points. No distribution, no CI, no significance
   test.
2. **The 124% is driven by one near-zero denominator.** Task errors normalise to 818 because the mean
   fell from 0.82 to 0.10 on n≈10. Recomputing: `geomean(242, 818, 162, 142, 122) = 223.3` reproduces
   "124% better" exactly; dropping the error ratio gives `161.4`, i.e. "61% better". **Removing one of
   five measures halves the headline.**
3. **The 27% "objective" figure has no significant performance backing.** The paper, verbatim: "**We did
   not predict (nor did we find) significant differences** between objective users' and control users'
   measures for task time, task errors, memory, or sitemap time." Only satisfaction was significant.
   NN/g's summary page says the opposite. That is the exact point where a finding became folklore.
4. **The scannable condition made memory worse** — normalised 94, the only sub-100 cell in the table.
   Never quoted.
5. One-tailed tests throughout, ~10 per cell, one fabricated website, recruited by the sponsor.

**They asked for replication and published their materials. Twenty-nine years later there is none.**

One thing from the paper genuinely worth keeping — their mechanism claim for why objective language
helped: "promotional language imposes a cognitive burden on users who have to spend resources on
filtering out the hyperbole to get at the facts. When people read a paragraph that starts 'Nebraska is
filled with internationally recognized attractions,' **their first reaction is no, it's not, and this
thought slows them down.**"

### Nielsen 2008, "How Little Do Users Read?"

<https://www.nngroup.com/articles/how-little-do-users-read/> — live. Archived 2008 original at
<https://faculty.washington.edu/farkas/TC510-Fall2011/NielsenHowLittleDoUsersRead.pdf> — live; the two
were diffed and the text is identical, no silent revision.

**Not Nielsen's data and not eyetracking.** Verbatim: "This wasn't an eyetracking study." The dataset is
Weinreich et al.'s browser logs, handed over: 59,573 page views from **25 German and Dutch participants,
mostly university employees, logged 2004–2005.**

**The published regressions**, read off the chart images rather than the prose
(<https://media.nngroup.com/media/editor/alertbox/page-visit-time-per-word-count.gif> and
`percent-of-text-read.gif`, both live):

```
y = 0.044x + 25.0        visit seconds vs words on page
y = 2.48x^-0.34          max share readable at 250 WPM
```

**The 18% is a marginal rate, not a proportion.** 0.044 s/word × (250/60 words/s) = 0.183. It means: of
each *extra* 100 words you add, readers get through about 18. It does not mean readers read 18% of your
page. Nearly every downstream citation gets this wrong.

**The three numbers are different quantities:** 18% marginal; 28% the theoretical ceiling on a 593-word
page if 100% of dwell were reading; **20% is Nielsen's undocumented judgement call** — "More
realistically, users will read about 20%" with no derivation. The 20% is the one that entered folklore,
and NN/g still quotes it unqualified in April 2025
(<https://www.nngroup.com/articles/genai-write-for-the-web/>, live).

The 250 WPM figure is assumed; Nielsen's own default is 200. That single unmeasured choice moves the
headline from 14.7% to 18%.

Also worth noting: removing the 17% of visits under 4 seconds **biases the estimate upward**. "Users
read 20%" is conditional on the reader not having bounced.

### The peer-reviewed source underneath it

**Weinreich, Obendorf, Herder & Mayer, "Not Quite the Average: An Empirical Study of Web Use", *ACM
Transactions on the Web* 2(1), Article 5, Feb 2008.** ACM DL paywalled; free author copy at
<https://www.eelcoherder.com/images/publications/2008/not_quite_the_average.pdf> — live, full text.

**The only genuinely peer-reviewed study underneath "users read 20%."** 25 participants, naturalistic
client-side logging, 52–195 days each (mean 105), **137,272 confirmed user-initiated page visits.**

Verbatim: "**25% of all documents were displayed for less than 4 seconds, and 52% of all visits were
shorter than 10 seconds (median: 9.4s).** However, nearly 10% of the page visits were longer than two
minutes." Average page: **551 words** outlier-trimmed, 648 untrimmed. (Nielsen's cleaned figure is 593.
Three different "average page length" numbers from one dataset.)

And: "pages visited for less than 12 seconds (which contribute about 50% of all requests) had an
average number of 430 words... **it is apparent that no person can read a full page of this length that
quickly**" (t = 36.197, p = 0.000).

**The caveat Nielsen omitted, verbatim:** "**we could not identify if users actively used a Web page,
which implies that the attention times per page were definitely shorter than the stay times we
recorded.**"

The paper is called *Not Quite the Average* because the authors warn against averaging. Nielsen then
produced the most-cited average in web writing from their data.

### The F-pattern, and NN/g's own reversal

**2006 original:** <https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content-discovered/>
— live. **URL trap:** the slug ending `-discovered` is the 2006 original; the slug *without* it is the
2017 revision. Counter-intuitive and easy to mis-cite.

The entire method section is one sentence: "we recorded how 232 users looked at thousands of Web pages."
No recruitment, no tasks, no operationalisation, no statistics. Three heatmaps, and: "**If you squint**
and focus on the red areas, all three heatmaps show the expected F pattern."

**2017 revision, Kara Pernice:** <https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/>
— live. It retracts nothing factual and inverts the normative frame completely:

> "**The F-pattern is negative for users and businesses.**"
> "**Good design can prevent F-shape scanning.**"
> "If your pages have big chunks of unformatted text, people will scan it in an F-shape."
> "The F-pattern is the default pattern **when there are no strong cues** to attract the eyes towards
> meaningful information."

Three preconditions, all required: unformatted wall of text; user trying to be efficient; user not
committed enough to read every word.

And the point that makes designing *for* the F incoherent: "a user who scans in an F-shape on his phone
would not fixate on the same words if he F-scanned the same page on a desktop — just because of the way
the content flows in different viewport sizes." **The words caught by the F are arbitrary.**

**Independent replication.** Chaparro, Shrestha & Lenz (2007), *Usability News* 9.1, SURL, Wichita
State. Original domain defunct; archived at
<https://web.archive.org/web/20160303090353/http://usabilitynews.org/eye-gaze-patterns-while-searching-vs-browsing-a-website/>
— live. n = 20 undergraduates, Tobii 1750, three 20-second tasks each. **The F replicated on the
text-based page** for both searching and browsing. **It did not hold on a picture-based page** — there
users scanned in a lawn-mower pattern or a random path. The peer-reviewed HFES version
(DOI 10.1177/154193120705101831) is SAGE-**403** with the abstract explicitly elided by the publisher.

As far as this research can determine, **this is the only independent instrumented replication attempt
on the F-pattern.** Two small studies from independent labs agreeing is worth more than one large study
from an interested party.

### The pattern you actually want: layer-cake

<https://www.nngroup.com/articles/layer-cake-pattern-scanning/> — live. Pernice, 2019.

> "The layer-cake scanning pattern consists of fixations made mostly on the page's headings and
> subheadings, with deliberate occasional fixations on the (body) text in between."

Two preconditions, verbatim: "people can only engage in this pattern if (1) they can identify the
subheadings easily and (2) **the subheadings correctly summarize the sections of text associated with
them.**"

**This is the single most actionable NN/g finding, because layer-cake is purchasable.** It is caused by
descriptive, visually distinct subheadings. Condition (2) is the one people forget: clever or
decorative subheadings destroy the mechanism outright.

NN/g ranks it "by far the most effective way in which users can scan pages" — asserted, not quantified.

### The other named patterns

<https://www.nngroup.com/articles/text-scanning-patterns-eyetracking/> — live. Also relevant:

- **Bypassing** — "people deliberately skip the first words of the line when multiple lines of text in a
  list start all with the same word(s)." This is a **direct counter-rule to "front-load
  information-carrying words"**: front-loading the *same* word across list items defeats the mechanism
  you were relying on.
- **Spotted** — skipping chunks, hunting for a distinctive shape (a link, digits, an address).
- **Marking** — eyes fixed while scrolling. More common on mobile.
- **Commitment** — reading nearly everything. And the finding that matters most here, verbatim:
  "**even for the commitment pattern, text comprehension is improved when the content is chunked and
  calls out its main points in subheadings.** So, just because we know users may want to read or need to
  read certain content doesn't give us a pass to load webpages with walls of text."

Structure helps the people who *are* reading properly, not only the scanners.

### The best-quantified NN/g numbers

**Paragraph position.** <https://www.nngroup.com/articles/website-reading/> — live. Nielsen 2013,
"we analyzed 1.5 million eyetracking fixations from hundreds of sites."

| Paragraph | % of users who looked at it |
|---|---|
| 1 | **81%** |
| 2 | **71%** |
| 3 | **63%** |
| 4 | **32%** |

"This table counts only whether a user looked at a paragraph — that is, had at least one fixation within
it." **The cliff is between paragraph 3 and 4: a 31-point drop.** Far more usable than "users read 20%".

**Horizontal attention.** <https://www.nngroup.com/articles/horizontal-attention-leans-left/> — live.
Fessenden 2017, **120+ participants, 130,000+ fixations** classified by coordinate. **80% of fixations
in the left half** (69% in 2010 — the lean *increased* as screens widened). The leftmost 10% got only
6%. **Zero fixations right of the screen edge.**

**Vertical attention.** <https://www.nngroup.com/articles/scrolling-and-attention/> — live. Fessenden
2018, same dataset. **57% of viewing time above the fold; 74% in the first two screenfuls; 42% in the
top 20% of the page.** Down from 80% above the fold in 2010 — so the trend across eight years is toward
*more* scrolling, which further erodes the 1996 premise. NN/g state the confound themselves: "This
analysis disregards the maximum page length — the result can be due to short page lengths or to people
giving up."

**Long-form formatting.** <https://www.nngroup.com/articles/formatting-long-form-content/> — live,
2023. Long-form is defined as >1,000 words. One quantified guideline, with no derivation given:
"The highlighted text should make up **no more than 30% of an article's text.**" And: "**Do not bold
just to strengthen your tone, as it can slow down scanning and cause confusion.**"

### Experts read the same way, with two inversions

<https://www.nngroup.com/articles/writing-domain-experts/> and
<https://www.nngroup.com/articles/plain-language-experts/> — both live. **No sample size stated in
either.** All evidence is participant quotes. Medical professionals, scientists, engineers, an
oceanographer, a professor.

Headline, verbatim: "highly educated professionals want content that is digestible, concise, and
scannable — that is, formatted according to the rules of writing for the web. **The major difference in
preference, however, lies in the substance of the content** and the importance of credibility."

The two inversions matter for Weave:

1. **Domain jargon is a compression device and should be kept.** For a physician "ventricular
   tachycardia" is shorter and more precise than the plain-language expansion. **Organisational and
   branded jargon should be killed** — *MessageSight*, *SF424*. These are different things and most
   plain-language advice conflates them.
2. **Over-explaining actively repels experts**, verbatim: "you do not need to explain basic terminology
   or concepts for experts. In fact, doing so may work against you. **If a term is so common that any
   member of the field should know it, users who see it explained at the beginning of a piece of content
   may conclude that the content is not meant for them.**" An oceanography PhD hit a subtitle explaining
   climate versus weather and said: "This is for the general public, I don't need that."

NN/g's own reading-level numbers are **not stable between their own articles** — one says 8th grade for
consumers and 12th for degree-holders, another says 6–8th and 10–12th. Neither cites a study.

### The screen-inferiority meta-analyses

**Delgado, Vargas, Ackerman & Salmerón (2018), "Don't throw away your printed books", *Educational
Research Review* 25, 23–38.** Preprint at
<https://www.uv.es/lasalgon/papers/Delgado%202018%20dont%20throw%20away%20your%20printed%20books.pdf>
— live (a naive fetch returns raw streams; needs proper PDF extraction). Peer-reviewed.

54 studies, 76 media comparisons, 2000–2017. Coding reliability κ = .89.

- **Headline: Hedges' g = −.21** (paper over screen), 95% CI [−.28, −.14]. **Small by Cohen's
  conventions.**
- **Heterogeneity is high and the prediction interval crosses zero:** I² = 72.24, prediction interval
  **−.56 to .14**. Verbatim: "the effects are large in some populations, but moderated and trivial in
  other populations." **Screen inferiority is an average, not a law.**
- **Time pressure amplifies it:** g = −.26 under time constraints vs **−.09 self-paced** (QB = 4.12,
  p = .04).
- **Genre is the largest moderator, explaining 31% of variance:** informational/expository **g = −.27**;
  **narrative only g = +.01 — no effect at all.**
- **The penalty grew, 2000 → 2017:** b = −.01/year, QR = 4.95, p = .03, **R² = .64.** Digital natives
  did not close the gap.

**Clinton (2019), *Journal of Research in Reading* 42(2), 288–325.** Wiley **403**; free ERIC record at
<https://eric.ed.gov/?id=EJ1212958> — live. Independent of the Delgado group, **random assignment
required**, 33 experimental studies.

| Outcome | Effect | Reading |
|---|---|---|
| Reading performance | **g = −0.25** | paper better |
| — expository | **g = −0.32** | paper clearly better |
| — narrative | **g = −0.04** | no difference |
| Reading time | **g = 0.08** | **no reliable difference** |
| Calibration / metacognition | **g = 0.20** | paper self-judgements more accurate |

**Three things this adds.** Two independent meta-analyses agree the penalty is an **expository-text**
phenomenon. **Screens are not slower** — same time, less understood, so it is an attention/processing
effect. And the one that should change design: **screen readers are worse at knowing whether they
understood.** The comprehension failure is **silent**. A reader who skims your documentation and
misunderstands will not report confusion; they will report confidence and then do the wrong thing.

**The limitation that is decisive here, verbatim:** "given that our purpose was to isolate the effect of
media, per se... **we excluded digital affordances (except for scrolling) such as hypertext reading or
navigation through webpages. Their effect on reading comprehension is still an open question.**"

The screen-inferiority effect is measured on documents that did *nothing* to adapt to the screen. It
says unstructured prose does worse on screens. It does not say structured digital documents do worse
than paper. That experiment has not been run.

**Liu (2005), "Reading behavior in the digital environment", *Journal of Documentation* 61(6).**
Emerald: abstract free, **full text paywalled at EUR 38; sample size not obtainable.** The origin of the
vocabulary — "screen-based reading behavior", "one-time reading", "non-linear reading", "keyword
spotting". One underrated finding: **annotating and highlighting did not migrate to screens.** Readers
lost the tool that supports self-monitoring, which connects directly to Clinton's calibration result.

### The critique of the corpus

No published academic critique of Nielsen's reading research could be found. That absence is itself a
finding: the most influential claims in web content design have never been formally criticised.

Documented misquotation in the wild: **UX Myths**, <https://uxmyths.com/post/647473628/myth-people-read-on-the-web>
— live, one of the highest-ranking pages on the topic — states "Jakob Nielsen's **2008 eye-tracking
study**". Nielsen says explicitly it was not an eyetracking study. A top-ranked educational resource has
attached the wrong method to the most-cited number in the field. Its source list contains no
peer-reviewed citation.

**One number in the brief that does not exist.** A "0.24 slope" was searched for in the live page, the
2008 archived PDF and both chart images. It is not there. The published coefficients are **0.044** and
**−0.34**. Do not cite a 0.24 slope.

---

## 2.4 Plain language as an empirical field

`research/03` §2.13 covers the *guidelines*. This covers the *evidence*, which is a different and less
flattering subject.

### Kimble, the field's own evidence review

**Joseph Kimble, "Writing for Dollars, Writing to Please", 6 *Scribes Journal of Legal Writing* 1
(1996–97).** <https://scribes.org/wp-content/uploads/2022/12/Scribes_vol6_04_Writing_for_Dollars.pdf>
— live, full text. Book editions 2012 and 2024 (Carolina Academic Press pages **403** to automated
fetch).

**Kimble's own methodological caveat, verbatim, and it should be quoted whenever this corpus is cited:**

> "Most of them have been done not by accountants, not by managers, but by persons with a concern for
> writing — **consultants, technical writers, and proponents of plain language.**"

**The evidence base is largely advocate-generated, and its leading advocate says so.**

**"Answering the Critics of Plain Language", 5 *Scribes J.* 51 (1994–95).**
<https://scribes.org/wp-content/uploads/2022/12/Scribes_vol5_06_Answering_the_Critics_of_Plain_Language.pdf>
— live, 36pp. More useful than the first paper, because it states the opposing case and contains
genuine negative results.

**The critique it answers** is Robyn Penman, "Unspeakable Acts and Other Deeds: A Critique of Plain
Legal Language", 7 *Information Design Journal* 121 (1993). Four claims, of which Kimble concedes two
almost entirely:

1. There is no hard evidence that plain language improves comprehension.
2. Advocates take a text-based rather than a reader-based approach.
3. **The only way to be sure readers understand a document is to test it on the readers.**
4. It will not reduce litigation.

**Claim 3 is the strongest transferable rule in the entire plain-language literature, and it comes from
the critic.**

**Kimble's own randomised experiments**, reported in the same paper — stronger design than most of the
25 case studies he collects:

| Test | n | Accuracy orig → plain | Speed (min) | Perceived difficulty (1–10) |
|---|---|---|---|---|
| Contract, agency staff | 27 | 53.6% → 78% | 14.8 → 12.4 | — |
| Contract, law students | 38 | 65.6% → 81% | 15.7 → 12.6 | — |
| Statute, law students | 43 | 59.9% → 70% | 34.3 → 32.7 | 6.3 → 3.7 |
| Statute, law-school staff | 24 | 55.6% → 67.5% | 39.7 → 36.15 | 6.75 → 5.0 |

Three things follow that are usually dropped. **Accuracy gains never reach high absolute levels** — the
best plain-language result is 81% and the statute tops out at 70%. **Speed gains on complex content are
trivial** (+4.7%, +8.9%). And **perceived ease moves far more than performance does** — the statute
group's difficulty rating fell 41% while accuracy rose 17%. Subjective ease and objective comprehension
dissociate. Never use satisfaction as a comprehension proxy.

**The null and negative results, stated by the advocate himself.**

- **Plain-language revision made a document worse.** Swaney et al. (1991): four legal documents,
  reader errors halved on three — "**On the fourth document, an insurance policy, errors increased.**"
  Recovery required further revision "including the use of examples". **Rewriting is not monotonically
  beneficial.**
- **Cutts's Timeshare Act was a near-null in aggregate** — 87% → 91% across twelve questions. The gain
  was concentrated in one item (48% → 94%). **Aggregate scores hide what actually got fixed.**
- **Redish's FCC administrative rule, scored separately by reader expertise:** inexperienced readers
  **+102%**, experienced readers **+29%**. The overall study result was **+58%**. The "+102%" that
  circulates in advocacy is a **subgroup**, quoted as if it were the population. And the novice-to-expert
  ratio of roughly 3.5:1 corroborates expertise reversal from inside the plain-language literature.
- **A carefully designed plain-language insurance policy still failed its own bar.** Kelly & Balmford
  aimed for ≥70% correct per question and hit it "**on six of ten questions.**"
- **Regression to the mean is acknowledged:** "the degree of improvement on a revised document will
  depend on how well the original scores." Large percentage deltas partly measure how bad the baseline
  was.
- **Shorter is not the mechanism.** Kimble's own preferred jury instruction "**is no shorter than
  version A**". His words: "**plain language does not always mean the fewest possible words.**"

**The most-cited plain-language statistic in existence has retrospective-self-report provenance.** The
Veterans Affairs letter result — 1,128 calls on the old letter, 192 on the new — is reported by Kimble
with the caveat: "**The counsellors hadn't kept a log, but their individual estimates were quite
consistent.**" Five benefits counsellors recalling call volumes.

**The one number worth adopting as an acceptance criterion.** Kimble, on jury instructions: "The testing
should have a target goal — say **70-75 percent comprehension** overall." It converges with Kelly &
Balmford's ≥70%-per-question bar. It is the only explicit acceptance threshold anywhere in this corpus.

**The strongest single study Kimble cites** is not a legal one. Davis et al., "Parent Comprehension of
Polio Vaccine Information Pamphlets", *Pediatrics* 97:804 (1996). **n = 522 parents.** Reading time
~14 min → ~4 min. Rating the chance they would read it as "very good to excellent": **49% → 81%.**
Peer-reviewed, health-literacy domain, and it measures the outcome nobody else measures: **willingness
to read the thing at all.** That is arguably the largest real-world effect in the corpus and the least
studied.

## 2.5 Readability formulas and their critics

### The provenance of Flesch-Kincaid

**Kincaid, Fishburne, Rogers & Chissom (1975), *Derivation of New Readability Formulas... for Navy
Enlisted Personnel*, Research Branch Report 8-75.** Landing page live at
<https://stars.library.ucf.edu/istlibrary/56/>; the direct PDF **403s** and the ERIC record ECONNRESETs.

Abstract, verbatim: "Three readability formulas were recalculated to be more suitable for Navy use...
They were derived from test results of **531 Navy enlisted personnel** enrolled in four technical
training schools... they were tested for their comprehension of **18 passages taken from Rate Training
Manuals.**"

Four things follow directly. The derivation sample was 531 adult US Navy trainees in 1975. The criterion
texts were 18 passages of military technical instruction. Every coefficient is a least-squares fit to
*that* genre read by *that* population. And "grade level" is an extrapolation through the
Gates-MacGinitie test, so "grade 8" means "predicted comprehensible to a Navy trainee whose
Gates-MacGinitie score maps to grade 8" — **not** that an eighth-grader can read it. The report's own
framing is "recalculated to be more suitable for Navy use": a local recalibration, since embedded in
Microsoft Word and government mandates as if universal.

### Redish — the primary critic source

**Janice (Ginny) Redish, "Readability formulas have even more limitations than Klare discusses", *ACM
Journal of Computer Documentation* 24(3), Aug 2000, 132–137.** DOI 10.1145/344599.344637.
<https://redish.net/wp-content/uploads/Redish_on_Readability_Formulas.pdf> — live, full text, author's
own site. (Note: Redish's PDF running head says 24(1); ACM's DOI record says 24(3). Cite 24(3).)

**Her core position, verbatim:** "Readability formulas are based on **correlations** with some measure
of comprehension... **They say nothing about the causes** of any problems people might have in
understanding a document... **Readability formulas give you no help in finding or fixing problems.**"

And: "How valid are readability formulas for technical material for adult readers? **No one knows.**"

**The single most important number in this section, and it comes from the formulas' leading proponent.**
Klare (1976) reviewed **36 studies** that tried to improve comprehension by improving readability
scores. **Only about half succeeded**, and where they did, they had to move the score by an average of
**6.5 grade levels.** A coin flip, requiring a swing six times larger than any style checker reports.

**Klare's own thermometer analogy:** expecting comprehension to improve by writing to a formula is
"**like lighting a match under a thermometer to warm up a room.**"

**Redish's summary of the field's own position:** "Klare, Flesch, Gunning, and all the other developers
of readability formulas **insist that the formulas are not to be used for revision.**"

**What "grade level" actually means, via Duffy (1985):** "the accepted correlation in the grade-level
formulas is that **if 50% of the children at a given grade level got 50% of the questions on a reading
passage correct, that passage was considered acceptable at that grade level. Should we be happy if 50%
of our readers understand 50% of our documents?**"

**Two counterexamples worth memorising.** To Flesch Reading Ease these score identically: "I wave my
hand" / "I waive my rights". And from Redish & Selzer (1985,
<https://redish.net/wp-content/uploads/Redish_Selzer_1985.pdf>, live):

> "He is the defendant. He is fifteen years old. He is in his teens. Someone says he stole from the
> store."
> vs
> "The defendant is a fifteen-year old teenager who is accused of shoplifting."
> "**The second, longer sentence is actually easier to understand, although it has the poorer
> readability score.**"

**And the finding that is fatal for applying these formulas to technical documentation at all:** they
count sentences period-to-period. "If you use bulleted lists to chunk your material and lay your text
out with white space, **readability formulas will say you have long sentences.** ... A good web page
might have not a single complete prose sentence."

### The chopped-sentence problem, measured

**Charrow & Charrow (1979)** revised jury instructions and tested them. Comprehension went up. "**In
many cases, their revisions got better comprehension scores but WORSE readability scores.** (This
happened primarily because they **added words to show the relationships among the information items**.)"
Comprehension and score moved in opposite directions, and the mechanism is named.

**Duffy & Kabance (1982), *Journal of Educational Psychology* 74(5), 733–748.** APA paywalled; design
and results reported in full by Kern 1980. Eight Nelson-Denny passages rewritten three ways: vocabulary
only (FK 11.5 → 10.1), sentences only (→ 7.3), both (→ 5.5). Four experiments varying time limits,
question preview, cloze, and reading-to-learn.

**Result across all four: "Easier versions did not produce improved comprehension at any of the three
reading skill levels."** The only gain, in the lowest-skill group in experiment 4, came from **the least
simplified rewrite** (10th-grade version, 38% → 53%). **Driving Flesch-Kincaid from 11.5 to 5.5 bought
nothing.**

**Davison, Kantor et al. (1980), *Limitations of Readability Formulas in Guiding Adaptations of Texts*,
Technical Report 162, Center for the Study of Reading.** ERIC ED184090,
<https://files.eric.ed.gov/fulltext/ED184090.pdf> — live, 157pp. The mechanism, verbatim:

> "when splitting into independent sentences takes place, **a subordinate clause no longer has an
> expressed grammatical relationship to the main clause.** A relative clause no longer functions as a
> modifier of a noun phrase, an adverbial no longer modifies a verb or whole proposition."

And their concluding position: "**sentence length always contributes to complexity, which is not the
case.** Sentence length may be reduced by splitting up complex sentences into components, but **the
relationships between them may then have to be spelled out, requiring the addition of more words.**"
Also: "**Deletion of topic sentences, summaries, and transitions clearly places a premium on the
reader's inferencing ability.**" Their own caveat is honest — this is qualitative linguistic analysis,
not a controlled comprehension experiment. Cite Duffy & Kabance for the measured null.

### The single best demonstration

**Karen Schriver (2017), "Plain language in the United States gains momentum: 1940–2015", *IEEE
Transactions on Professional Communication* 60(4), 343–383.**
<https://www.karenschriverassociates.com/wp-content/uploads/2020/03/1-Schriver-Plain-Language-in-US-Gains-Momentum-1940-to-2015-1.pdf>
— live, 58pp.

She takes a passage and produces two versions with **exactly the same sentences**, one in original order
and one scrambled. Verbatim: "Poor structure makes it difficult to put the story together. **Even so,
the Flesch Reading-Ease formula assigns both paragraphs a score of 60.6, deeming the scrambled version
plain English.**"

**Word order and discourse coherence are invisible to the metric by construction.** That is the whole
argument in one demonstration.

**And the tools do not even agree with each other.** Zhou, Jeong & Green (2017), *IEEE Trans. Prof.
Comm.* 60(1): five tools computing the same Flesch-Kincaid test on 18 passages produced "average grade
levels [that] differed by as much as **two grade levels** — although the scores should have been
identical." They are "especially unreliable for short texts — that is, those with fewer than 500 words."
The Gettysburg Address through eight online tools returns Flesch Reading Ease from **45 to 73.1** and
grade level from **9.7 to 16.18**; the tools "couldn't even agree on whether there were 10 or 11
sentences."

**Schriver's steelman**, worth keeping because it is fair: the formulas remind people who would
otherwise not think about readability to think about it, they give novice writers in health literacy a
threshold to aim at, and they "helped catapult the development of usability testing methods."

**Redish's one concession, which is the only defensible use:** "If you do use a readability formula and
your document gets a **very poor** score, that probably indicates that people will have problems...
**The poor score is a red flag.** ... 1. A good score does not mean you have a usable or useful
document. 2. Rewriting to get a better score is misusing the formula."

**Bailin & Grafstein (2001), "The linguistic assumptions underlying readability formulae: A critique",
*Language & Communication* 21(3), 285–301.** ERIC EJ629584 (live record); **ScienceDirect paywalled and
the full text was not obtained.** Their position, per the abstract and citing sources: surface-structure
approaches capture word and sentence length while ignoring idea complexity, schemata, background
knowledge and textual coherence. Cited here as a citation, not as a source that was read.

## 2.6 Cognitive load, and the finding that reorganises everything else

### Sweller — and get the germane-load retraction right

**Sweller, van Merriënboer & Paas (2019), "Cognitive Architecture and Instructional Design: 20 Years
Later", *Educational Psychology Review* 31, 261–292.** DOI 10.1007/s10648-019-09465-5. Springer 303s to
an auth wall despite being open access; working mirror at
<https://leadinglearner.me/wp-content/uploads/2019/02/sweller2019_article_cognitivearchitectureandinstru.pdf>
— live, 32pp.

**Verbatim, and this is the correction most people need:**

> "**This characterisation of germane cognitive load is a departure from the 1998 paper.** ... we assume
> that rather than contributing to the total load, germane cognitive load **redistributes** working
> memory resources from extraneous activities to activities directly relevant to learning..."

> "As a result of this reconceptualisation, **only intrinsic and extraneous cognitive load are
> distinguished as basic categories of cognitive load.**"

**Anyone still teaching "three types of cognitive load, maximise the germane" is citing a model its own
authors abandoned.** "Increase germane load" is not an actionable instruction under the current theory.
Germane load is what happens to freed capacity when you reduce extraneous load.

**Intrinsic load is not a property of the material.** Verbatim: "**Complexity or element interactivity
depends on a combination of both the nature of the information and the knowledge of the person
processing the information**... **measures that ignore knowledge when determining complexity are largely
useless.**" That sentence is a direct refutation of readability formulas, from a different literature.

**Two boundary conditions that limit the whole theory** and are worth stating because they cut against
over-application:

- **Element interactivity effect:** "Cognitive load effects that are found for high element
  interactivity materials are typically not found for low element interactivity materials. **Actually,
  cognitive load theory is only relevant for complex learning.**" If the material is simple, none of
  this applies.
- **Transient information effect** (Leahy & Sweller 2011): effects found for transient information
  (narration, animation) are typically **not** found for non-transient information. **Documents are
  non-transient.** Findings from video and narration do not transfer to text for free.

And the authors' own honesty about their evidence base: most experiments "did not attempt to directly
measure comparative cognitive load; rather... if these techniques produced the expected effects on
learning outcomes they were assumed to strengthen the theory." **Learning outcomes were measured. Load
was usually inferred.**

### Mayer's principles — the two that transfer to text

**Mayer & Fiorella, ch. 12 in *The Cambridge Handbook of Multimedia Learning*, 2nd ed., 2014, 279–315.**
Cambridge Core paywalled; full PDF at
<https://edtechuvic.ca/wp-content/uploads/sites/11/2022/09/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles.pdf>
— live, 37pp.

| Principle | Supported in | Median d |
|---|---|---|
| **Coherence** — exclude extraneous material | **23 of 23** tests | **0.86** |
| **Signalling** — cue the organisation of essential material | 24 of 28 | **0.41** |
| Redundancy | 16 of 16 | 0.86 |
| Spatial contiguity | 22 of 22 | 1.10 |
| Temporal contiguity | 9 of 9 | 1.22 |

**Only coherence and signalling transfer to a pure text document with any confidence.** The other three
are defined over graphics and narration. Do not quote d = 1.22 for temporal contiguity as if it were a
rule about documentation.

Verbal signalling specifically — headings, outlines, pointer words — is **d = 0.50**.

**The boundary conditions are the honest half.** Coherence is stronger for **low**-working-memory
learners, stronger when **system-paced** rather than learner-paced, and stronger when the extraneous
material is highly distracting. Documents are learner-paced, so expect coherence at the weak end.
Signalling "applies more strongly to low-knowledge learners than high-knowledge learners... **when it is
used sparingly**". Redundancy "can be eliminated or even **reversed** when the learners are experienced".

### The expertise reversal effect

**Kalyuga, Ayres, Chandler & Sweller (2003), "The Expertise Reversal Effect", *Educational
Psychologist* 38(1), 23–31.** T&F paywalled; open copy at
<https://mrbartonmaths.com/resourcesnew/8.%20Research/Explicit%20Instruction/The%20Expertise%20Reversal%20Effect.pdf>
— live, 10pp.

**A genuine crossover interaction, not a diminishing return.** If Design A beats Design B for novices,
with increased expertise Design B can become superior. The mechanism: experts bring activated schemas,
and guidance that overlaps an existing schema must be cross-referenced and reconciled. "**Redundant
information is frequently difficult to ignore.**"

**The evidence in text materials specifically.** Yeung, Jin & Sweller (1998): integrating explanatory
notes into the primary text helped learners with low language competence, and "**the same format
retarded learning for more knowledgeable learners because the integrated notes, although redundant,
were difficult to ignore when integrated into the primary text.**"

Their conclusion, verbatim: "**Text that is minimally coherent for novices may well be fully coherent
for experts.**"

### The keystone study

**McNamara, Kintsch, Songer & Kintsch (1996), "Are Good Texts Always Better? Interactions of Text
Coherence, Background Knowledge, and Levels of Understanding in Learning From Text", *Cognition and
Instruction* 14(1), 1–43.** T&F **403**, JSTOR paywalled; abstract verified via
<https://asu.elsevierpure.com/en/publications/are-good-texts-always-better-interactions-of-text-coherence-backg/>
— live.

Experiment 2 **orthogonally crossed local and global coherence** against reader background knowledge — a
proper factorial design, not a before/after rewrite. Abstract, verbatim:

> "**We found that readers who know little about the domain of the text benefit from a coherent text,
> whereas high-knowledge readers benefit from a minimally coherent text.** We argue that the poorly
> written text forces the knowledgeable readers to engage in compensatory processing to infer unstated
> relations in the text."

**And the qualifier that is almost always dropped when this study is cited:**

> "**These findings, however, depended on the level of understanding, text base or situational, being
> measured** ... **This study provides evidence that the rewards to be gained from active processing are
> primarily at the level of the situation model rather than at the superficial level of text-base
> understanding.**"

| Measure | Level tapped |
|---|---|
| Free recall, text-based questions | **Text base** — did they retain it, can they find a stated fact |
| Inference questions, problem-solving, key-word sorting | **Situation model** — can they derive, apply, restructure |

**If you measure comprehension with recall or fact-lookup, you will not see the reverse cohesion effect
at all, and you will conclude that more coherence is simply better.**

This reframes the whole measurement problem. Nearly every study in the plain-language corpus measures
**text-base** comprehension: multiple-choice retrieval, error rates on forms, time-to-find-an-answer.
That is entirely appropriate for forms, procedures and reference, where finding and applying a stated
fact *is* the task. It is **not** evidence that plain-language revision improves deep understanding.

The interpretive dispute is live and should be recorded as open. McNamara's account is compensatory
processing producing deeper situation-model learning, which predicts **higher** effort in the winning
condition. Kalyuga and Sweller's account is redundancy and expertise reversal, which predicts **lower**
effort. The two camps are partly measuring different outcomes.

### Miller, Cowan, and why chunking advice is backwards

**Miller (1956), "The Magical Number Seven, Plus or Minus Two", *Psychological Review* 63(2), 81–97.**
<https://psychclassics.yorku.ca/Miller/> — live, full classic text.

The paper opens: "My problem is that I have been persecuted by an integer." It is, by its own framing,
partly a joke.

**The sentence people who cite Miller routinely omit:** "**the span of absolute judgment and the span of
immediate memory are quite different kinds of limitations**... Absolute judgment is limited by the
amount of information. Immediate memory is limited by the number of items." Two different limits that
happen to land near 7. Not one general cognitive limit.

**Miller's own verdict on his number:** "Perhaps there is something deep and profound behind all these
sevens... But I suspect that it is only **a pernicious, Pythagorean coincidence.**"

**Chunking is used backwards in style guides.** For Miller, chunking means **recoding into larger, more
informative units**, which *increases* what you can hold. Style guides use "chunking" to mean *breaking
content into smaller pieces* — the opposite operation, justified by citing him. The genuinely
Miller-derived rule is: **give the reader units that map onto structures they already hold in long-term
memory.** Which is an audience-knowledge instruction, not a length instruction — and lands in exactly
the same place as Sweller, Kalyuga and McNamara.

**Cowan (2001), "The magical number 4 in short-term memory", *Behavioral and Brain Sciences* 24(1),
87–114.** Open PDF via Cambridge Core (bronze OA) — live. Abstract, verbatim: Miller's number "**was
meant more as a rough estimate and a rhetorical device than as a real capacity limit.**"

And the boundary conditions demolish the document-design application even harder. Cowan's ~4 holds
specifically when **rehearsal and recoding are blocked**. Reading a document is the paradigm case where
rehearsal is available, long-term memory is available, and the stimulus is **continuously visible**.
**The 4-chunk limit is a floor observed under deliberately impoverished laboratory conditions. It is not
a budget for how many ideas a paragraph may contain.**

### Signalling in text

**Lorch (1989), "Text-signaling devices and their effects on reading and memory processes",
*Educational Psychology Review* 1(3), 209–234.** DOI 10.1007/BF01320135. **Springer 303s to an auth
wall; Semantic Scholar returns `"abstract": null` — elided by the publisher. Full text not obtained;
the findings below are second-hand and flagged.**

Signals are "writing devices that emphasize aspects of a text's content or structure **without adding to
the content**": titles, headings, previews, overviews, summaries, typographic cues.

**The headline generalisation:** "virtually all types of signals produce better memory for information
they cue in a text, whereas **memory for unsignaled information often is unaffected.**"

Three specifics that matter more than the headline:

- **Signalling does not make reading faster.** "Readers read target sentences **more slowly** if they
  were signaled." It is an attention-*budget* instrument, not a speed instrument.
- **Null on simple text.** "When text topic structure was simple, signaling had **no effect**, but when
  structure was complex, signaling affected the distribution and organization of recall."
- **Partial signalling has a measured cost.** "Signaled content was recalled equally well for
  half-signaled and fully signaled texts, but **unsignaled content was recalled more poorly for
  half-signaled text than for fully unsignaled text.**" Inconsistent heading coverage is worse than
  none.

Because this source could not be read in full, treat the third finding as the weakest link in this
document that still influences a rule.

---

## 2.7 Typography and layout for comprehension

Weave emits Markdown, so most typographic decisions are made downstream by a renderer. What follows is
filtered to what is expressible in the source: headings, bold, lists, tables, code blocks, blank lines,
and line breaks in the source file.

Typography is also the discipline where craft tradition is most reliably mistaken for evidence, and it
supplies the cleanest cautionary tales in this document.

### The epistemic frame — the best source found in this whole research pass

**van der Waarde & Thiessen (2025), "Nineteen questions to evaluate typographic research: Chaff and
wheat", *Visible Language* 59(1), 77–99.**
<https://www.visible-language.org/Issue-59-1/nineteen-questions-to-evaulate-typographic-research-chaff-and-wheat.pdf>
— live, open access, full text. (The URL contains the typo "evaulate". That is correct, not an error
here.)

Their three observations from practice:

1. Teaching evidence-based typography is difficult because published recommendations do not apply.
2. **Reviews keep re-citing the same, sometimes outdated experiments, uncritically.** This is the
   mechanism by which folklore is laundered into fact.
3. **Carefully applying the recommendations does not make texts more readable.** Recommendations
   conflict, are not prioritised, ignore genre and reader, and specify neither context nor language.

Questions worth applying to every source in this document: **Q4** — are the participants university
students (almost always yes). **Q7** — are recommendations generalised without genre limits. **Q8** — is
the language and script defined. **Q11** — does the study rely on outdated science. **Q14** — is reading
*speed* even an appropriate measure. **Q5** — are the test materials available.

Their verdict: "any of these 19 questions, in any combination, should place serious doubt on the
validity of original data experiments in typography research."

### The central finding: preference and performance dissociate

| Study | Speed | Comprehension | Preference |
|---|---|---|---|
| Dyson & Kipping 1998 | 100 cpl **fastest** | **no difference** | 55 cpl rated easiest; 100 cpl **least** easy |
| Shaikh & Chaparro 2005 | 95 cpl **fastest** | **no difference** | preference for the **extremes** |
| Bernard et al. 2003 | **no difference** | — | adults prefer 76 cpl, children 45 cpl |
| Chaparro et al. 2004 (margins) | margins **slower** | margins **better** | margins preferred |
| Chaparro, Shaikh & Baker 2005 | no difference | no difference | enhanced layout strongly preferred |
| Taylor et al. 2020 (Sans Forgetica) | — | equal or **worse** | rated **harder** |

**If you A/B a formatting change and measure which version readers prefer, you have measured preference
and learned nothing about comprehension.**

### Line length — the rule with no evidence

**Bringhurst's 45–75 characters** (verified via Rutter's web adaptation, <http://webtypography.net/2.1.2>,
live) is stated as "widely regarded as satisfactory". No citation, no study, no sample. **Butterick's
version is 45–90** (<https://practicaltypography.com/line-length.html>, live), which he explicitly calls
"a rule of thumb". **The canonical range is not stable even between craft authorities.** And the 4th
edition of Lynch & Horton's *Web Style Guide* (<https://webstyleguide.com/9-typography.html>, live) has
**abandoned a numeric rule entirely**: "there is no magic number representing a comfortable line length."

The on-screen measurements point the other way. Dyson & Kipping (1998, *Visible Language* 32(2); ERIC
EJ573260 live, full text paywalled) found **long lines (100 cpl) read faster than short (25 cpl) with no
comprehension difference**. Shaikh & Chaparro (2005, n = 20) found **95 cpl fastest, no comprehension
effect**. Bernard et al. (2003) found **no performance difference at all** for adults or children.

Dyson & Haselgrove (2001), *Int. J. Human-Computer Studies* 54(4) — **paywalled everywhere, all five
access routes 403 or 404, findings second-hand** — is the study that supports a moderate measure:
55 cpl best for both speed and comprehension. It is routinely misattributed as the source of the
"longer lines are faster" finding. That is Dyson & Kipping.

Mary Dyson's own current synthesis is the best free source in this area:
<https://legible-typography.com/en/6-overview-of-research-typography> — live. Her methodological demand
is the useful part: **rely on the operational definition — "what is measured in the study" — not the
label.** Two papers both claiming to measure "readability" may be measuring letter-identification
threshold and delayed free recall.

Her own honest summary: "**Designer defaults appear sound despite lacking empirical foundation.**"

**Rule for Weave:** do not hard-wrap prose in Markdown source, because hard-wrapping bakes in a measure
the reader did not choose and breaks reflow. Never cite 45–75 as evidence-based. If a house style
demands wrapping, semantic line breaks are a diff-quality argument, not a comprehension one — say so.

### Headings — the best-evidenced intervention available

**Hartley & Trueman (1983), "The effects of headings in text on recall, search and retrieval", *British
Journal of Educational Psychology* 53, 205–214.** ResearchGate **403**; no open copy located. Findings
corroborated across three independent secondary sources.

- **Headings aided recall, search and retrieval.** MEASURED.
- **Position had no effect** — marginal vs embedded produced no accuracy difference.
- **Heading type had no differential effect overall** — questions vs statements — except that low-ability
  participants did better with question-form headings on recall.

**Lorch & Lorch (1996), *Contemporary Educational Psychology* 21, 261–278.** ScienceDirect paywalled;
findings second-hand, participant n not recoverable. **Headings improved recall of UNFAMILIAR topics but
not familiar ones.** And headings mattered more for whether a topic reached a summary **only when that
topic was briefly discussed.**

That boundary condition is precise and useful: **headings buy most for unfamiliar material and for
topics covered briefly.** In a document aimed at experts on material they know, headings are near-free
and near-useless.

**The best free synthesis:** Lemarié, Lorch & Péry-Woodley (2012), "Understanding how headings influence
text processing", *Discours* 10. <https://journals.openedition.org/discours/8600?lang=en> — live, open
access.

**The null:** "When memory is tested by assessing readers' abilities to **recognize** specific content
from a text, headings are typically **not** found to influence performance." Headings help you
*reconstruct* structure and *find* things; they do not help you say "yes, I saw that sentence."

**The search finding:** readers located target sentences faster when **headings identified the topic**
than with non-identifying headings (Lorch, Lemarié & Grant 2011). "Overview", "Notes", "Details" waste
the mechanism.

**And the risk, which is the most important caveat in this section:** users given documents whose titles
only partially reflect the content **fail to identify topics not represented in the headings** (Eyrolle,
Virbel & Lemarié 2008). **A heading is a promise about scope, and content outside the promise can become
invisible rather than merely under-weighted. A misleading heading is worse than no heading.**

### Space as a cue — the closest thing to a direct experiment on what Weave does

**Shebilske & Rotondo (1981), "Typographical and spatial cues that aid learning from textbooks",
*Visible Language* 15(1), 41–54.**
<https://journals.uc.edu/index.php/vl/article/download/5313/4177> — live, open access, fully
extractable.

n = 96 undergraduates, 2,866-word biology excerpt, ~19 minutes' study. The "special format" is three
cues with direct Markdown analogues: **idea units separated by one blank line**; the **gist of each unit
set off**; **important gist statements emphasised** (they used capitals only because it was easier on a
typewriter and note that bold is what they would otherwise have used).

| Measure | Standard | Special | Statistic |
|---|---|---|---|
| Reading time | 18 min 29 s | 19 min 5 s | t(62)=0.89, **n.s. — no time cost** |
| Idea units recalled | .17 | **.23** | t(94)=2.42, **p<.01** |
| — unimportant ideas | .12 | .15 | t(94)=1.49, **n.s.** |
| — **important ideas** | .22 | **.29** | t(94)=2.50, **p<.01** |
| Multiple choice | 59% | 63% | **n.s.** |

**Blank-line segmentation plus emphasis on the important units raised recall of important content by
about seven percentage points at zero time cost, without reducing recall of the unimportant material.**
That is almost exactly the intervention Weave can make in Markdown.

**And the dissent is worth carrying.** Of 36 usable questionnaire responses, 30 said the format helped
while reading and 6 opposed it, with this objection: "**I like to pick out what I believe is important
and not be forced to see what someone else thinks is important. Part of the learning process is figuring
out what is important.**"

That is not a footnote. Pre-emphasising for a reader removes their job of deciding what matters. For a
framework that will emit millions of pre-emphasised documents, it is a live design tension.

### Tables versus prose — the strongest single piece of evidence in this section

**Brick, McDowell & Freeman (2020), "Risk communication in tables versus text: a registered report
randomized trial on 'fact boxes'", *Royal Society Open Science* 7(3), 190876.**
<https://pmc.ncbi.nlm.nih.gov/articles/PMC7137953/> — live, open access, fully read.

**Preregistered, census-matched RCT. N = 2,305 UK residents; 1,666 completed follow-up at ~6 weeks
(72.3% retention).** Same content, two formats.

| Outcome | Fact box | Text | Effect |
|---|---|---|---|
| Baseline comprehension | **79.6%** (SD 23.1) | 69.7% (SD 27.6) | **d = 0.39** [0.31, 0.47], p < .0001 |
| Recall at ~6 weeks, materials absent | 29.8% | 27.7% | **d = 0.12** [0.09, 0.15], p = .006 |
| Comprehension at 6 weeks, materials present | 77.5% | 65.4% | **d = 0.43** [0.33, 0.52], p < .0001 |
| Treatment decisions | 63.4% | 61.3% | **p = 0.29 — null** |
| Feeling informed | 5.51 | 5.43 | **p = 0.09 — null** |
| Trust | 3.56 | 3.59 | **p = 0.47 — null** |

**About ten percentage points of comprehension, from format alone, persisting six weeks. And nulls on
trust, felt-informedness and decisions.** Format improved understanding **without** improving
confidence. That last row is the honest half and it should be stated whenever the d = 0.4 is.

**Patricia Wright's foundational work could not be retrieved.** Wright & Reid (1973), *Journal of
Applied Psychology* 57(2), 160–166 — the key study for conditional information, comparing flowcharts,
decision tables, prose and short sentences — has **no open copy anywhere** and no citing source
reproduces its numbers. Cite it as a citation, never as a statistic. The title remembered as "The
instructions clearly state... Can't people read?" **could not be confirmed.**

### Lists versus prose

**Morrow, Leirer, Andrassy, Hier & Menard (1998), "The influence of list format and category headers on
age differences in understanding medication instructions", *Experimental Aging Research* 24(3),
231–256.** PubMed returns a cookie wall to automated fetch; findings from indexed abstract summaries.
**Exact effect sizes not obtainable.**

- **List instructions were better understood and recalled than paragraphs**, and queried faster.
- **Lists reduced age differences** in answer time and span-related differences in accuracy. **The
  format benefit is largest for readers with the least working-memory headroom.**
- Preference order: categorised list > simple list > paragraph.

**The honest limit:** this is measured for **procedural and conditional** content. For *expository*
content — converting an argument or a causal chain into bullets — no controlled evidence was found in
either direction.

**Tufte, *The Cognitive Style of PowerPoint* (2003)** is the famous case against, and it is a **polemic,
not a study**: character-count comparisons, no control condition, no participants, no comprehension
measure. The Columbia slide analysis is a consequential case study — the Columbia Accident Investigation
Board adopted it — and it is not causal evidence that bullets impair comprehension. Cite it as a famous
argument.

The argument itself is sound as far as it goes: bullets remove the words that encode relationships —
"because", "unless", "which means" — which is the same mechanism Davison et al. identified for chopped
sentences, arriving from a different direction.

### Justification and emphasis

**Gregory & Poulton (1970), "Even versus uneven right-hand margins and the rate of comprehension in
reading", *Ergonomics* 13(4), 427–434.** T&F **403**; findings second-hand and consistent across
sources. n = 86, pre-divided by reading ability. **For good readers, no difference. For poorer readers,
justified text was significantly worse (p ≤ 0.02).**

**Asymmetric risk: no benefit for skilled readers, measurable harm for poor readers.** Never justify.
This is an accessibility argument, not a general-comprehension one, and should be framed that way.

**Poulton (1967):** bold lowercase headlines were **located faster** than all-capitals. In Markdown,
`**bold**` beats ALL CAPS as a scan target.

### The field's cautionary tale — disfluency

This is the most instructive section for anyone building rules from small studies.

**Diemand-Yauman, Oppenheimer & Vaughan (2011), "Fortune favors the bold (and the italicized)",
*Cognition* 118(1), 114–118.** <http://languagelog.ldc.upenn.edu/myl/FortuneFavorsTheBold.pdf> — live,
full PDF.

Study 1: **N = 28** (27 analysed) Princeton subject pool. Fluent 72.8% correct, disfluent 86.5%,
t(26) = 2.3, p < .05. Study 2: **N = 222** high school students at one Ohio school; average Z-scores
−0.295 control vs .164 disfluent — with **Chemistry going the wrong way**, an internal inconsistency
about whether five or six classrooms were usable, and a Physics Regular control value of −1.13 driving
the average.

**Then it was replicated properly, three times, and died.**

- **Meyer et al. (2015), "Disfluent fonts don't help people solve math problems", *JEP: General* 144(2),
  e16–e30.** <https://digitalcommons.chapman.edu/esi_pubs/96/> — live record. **16 replication attempts
  pooled, total N = 7,365. No effect on solution rates. No moderator produced one.**
- **Xie, Zhou & Liu (2018), "Null effects of perceptual disfluency on learning outcomes in a text-based
  educational context: a meta-analysis", *Educational Psychology Review* 30(3), 745–771.** ERIC
  EJ1186638 live; Springer paywalled. **25 articles, 39 experiments, N = 3,135.** Recall **d = −0.01**.
  Transfer **d = 0.03**. Judgments of learning **d = −0.43**. Learning time **d = 0.52**.
- **The meta-analysis was itself audited and the null survived.** Weissgerber, Brunmair & Rummer (2021),
  *Educational Psychology Review* 33, 1221–1233. <https://pmc.ncbi.nlm.nih.gov/articles/PMC7854329/> —
  live, open access. Coding errors were found in both directions; the corrected transfer effect moved
  from +0.026 to **−0.008**.

**Read that together: disfluency reliably costs time and confidence and buys nothing.**

**Sans Forgetica** was a typeface purpose-built to exploit the effect, launched by RMIT in 2018 on
unpublished internal results (a lab study where the "effect" was 69% vs 68% recall, and an online study
of 303 students). It won a design award and got Guardian, BBC, Smithsonian and NPR coverage. **The
findings were never published in a peer-reviewed journal.**

**Taylor, Sanson, Burnell, Wade & Garry (2020), "Disfluent difficulties are not desirable difficulties",
*Memory* 28(7), 850–857.**
<https://wrap.warwick.ac.uk/id/eprint/136656/1/WRAP-disfluent-difficulties-not-desirable-difficulties-the-(lack%20of)-effect-Sans-Forgetica-memory-Wade-2020.pdf>
— live, full accepted manuscript. Data and R code at <https://osf.io/b6wd9/>. **Four experiments, 882
people.**

- **E1** — the manipulation works: Sans Forgetica rated harder to read, M_diff = 0.71 [0.19, 1.24].
- **E2** — word pairs: Sans Forgetica **40.26% vs Arial 50.51%**, M_diff = 10.26% [6.36, 14.15]. **Ten
  points worse.**
- **E3** — factual prose: 74.73% vs 73.24%. **Equivalence test p = .002.**
- **E4** — preregistered, conceptual integrative questions, n = 275: 37.64% vs 37.06%. **Equivalence
  test p < .001.**

Independently replicated as null or harmful by Geller, Davis & Peterson (2020), Wetzler, Pyke & Werner
(2021, open access at <https://journals.sagepub.com/doi/full/10.1177/21582440211056624>), Cushing &
Bodner (2022, impaired proofreading error detection), and others.

**Dyslexia fonts fail the same way.** Wery & Diliberto (2017), *Annals of Dyslexia* 67(2), 114–127.
<https://pmc.ncbi.nlm.nih.gov/articles/PMC5629233/> — live, open access. n = 12 students with confirmed
dyslexia, alternating-treatment design. **Every Improvement Rate Difference was negative** — OpenDyslexic
was worse than Arial and Times New Roman on rate and accuracy across all three tasks, worst at −88.65%.
**And no participant preferred it.** The authors' theoretical point is the important one: "four decades
of research on dyslexia suggests reading difficulties stem from more basic deficits in **alphabetic and
phonological coding**" — the font is built on a wrong model of the disorder.

What *does* help dyslexic readers, per Rello & Baeza-Yates (2013, ASSETS '13): sans-serif, roman not
italic, monospaced, and increased letter spacing. **Arial and Verdana outperformed both serif fonts and
the specialist fonts.**

**The transferable lesson is epistemic, not typographic.** Every finding in this subsection fits one
profile: a surprisingly cheap intervention, a large claimed effect, a small study, a product, no
replication. Treat that profile as a red-flag category.

### The fabricated statistic

**"Whitespace improves comprehension by almost 20% (Lin, 2004)"** circulates widely in design writing,
propagated by Galitz (2007), *The Essential Guide to User Interface Design*.

Carl Myhill traced it and contacted Professor Lin directly.
<https://www.linkedin.com/pulse/lin-2004-did-discover-margins-white-space-increase-20-carl-myhill> —
live. **Lin's reply, verbatim: "The said publication of mine has nothing to do with whitespace, not to
mention the so-called increase of comprehension by 20%."** Lin (2004) studied 24 older adults aged 62–80
and retention across Chinese-language UI designs.

**If that number appears anywhere in the Weave corpus, delete it.**

### Markdown and code — where the evidence runs out

**There is essentially no peer-reviewed evidence on how Markdown formatting affects scanning in
technical documentation.** The search space is dominated by vendor content marketing making
untraceable claims — "62% of developers abandon API documentation when they cannot find a specific
parameter within 30 seconds", attributed to a survey that could not be located. Treat as unsourced.

**The 80-column limit is pure path dependence.** IBM's 80-column punched card, 1928
(<https://www.ibm.com/history/punched-card>, live), one card ≈ one line ≈ 80 bytes. It survived into
teletypes, terminals, editor defaults and linters. **The Linux kernel dropped it** — the checkpatch.pl
patch is titled "remove the punch card limit"
(<https://lkml.iu.edu/hypermail/linux/kernel/1001.0/01646.html>, live) and Torvalds relaxed the rule in
5.7. There is no comprehension study underneath it. The honest arguments are practical: side-by-side
diffs, no horizontal scrolling.

Also: several developer blogs apply Dyson & Haselgrove's 55-cpl **prose** finding directly to source
code. That is an invalid transfer. Code is not read linearly, is scanned structurally, and is set in
monospace.

**Syntax highlighting is contested.** Sarkar (2015, PPIG): improves task completion **time**, and the
effect **weakens with experience**. Hannebauer, Hesenius & Gruhn (2018), *Empirical Software
Engineering* 23, controlled experiment **N = 390**: **no evidence it improves correctness of
comprehension.** Different dependent variables, so they do not strictly conflict — highlighting may buy
speed, not accuracy, and the speed benefit fades.

---

## 2.8 The operator literature — alerting, alarm fatigue, situation awareness, trust

This is the part of the research that was expected to be thin and is not. Aviation regulators,
process-safety engineers, human-factors researchers and emergency services have between them about
seventy years of regulation, incident data and controlled trials on the question of how to put
information in front of a person who has other things to do. They converge, and they were not
coordinating.

### FAA 14 CFR 25.1322 and AC 25.1322-1 — flightcrew alerting

**Regulation.** <https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-25/subpart-F/subject-group-ECFR3043e8882f16d6e/section-25.1322>
— the normal page **302-redirects to a bot-block**; retrievable via the eCFR renderer API. Amendment
25-131, 75 FR 67209, 2 November 2010. **The modern three-tier rule is only from 2010**, much younger
than the practice it codifies.

**Advisory Circular.** <https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_25.1322-1.pdf>
— WebFetch **403**; retrievable by curl with a browser user-agent. 42pp, 13 December 2010.
**EASA CS-25.1322 is word-for-word harmonised with the FAA rule.**

**The three tiers decompose into two independent axes, and this is the most transferable structural
idea found anywhere in this research:**

| Level | Awareness required | Response required |
|---|---|---|
| **Warning** | Immediate | Immediate |
| **Caution** | Immediate | **Subsequent** — deferred, but certain |
| **Advisory** | Not immediate | **May** be required — uncertain |

Urgency-of-attention and urgency-of-action are **separate variables**. Caution exists precisely because
"you must know this right now" and "you must act right now" are different claims. Almost every agent
status report collapses them into one axis and loses the middle tier.

**The gating rule, verbatim (AC para 5a):** "**Conditions that do not require flightcrew awareness
should not generate an alert.**"

**And the doctrine in miniature (para 5c(1)):** "the failure of a single sensor in a multi-sensor system
may not necessarily result in an alert condition that requires pilot awareness. However, for a single
sensor system, such a failure should result in an alert condition..." **The same underlying event is
alert-worthy or not depending on whether the operator's action changes.**

**Four definitions that do real work.**

- **False alert** — "An incorrect or spurious alert caused by a failure of the alerting system."
- **Nuisance alert** — "An alert generated by a system that is functioning as designed but which is
  **inappropriate or unnecessary** for the particular condition." The detector worked perfectly and the
  alert was still not worth the operator's attention. **This is the harder problem and it is exactly the
  failure mode of AI agent reporting.**
- **Umbrella message** — one message in place of two or more that **share a common cause**.
- **Collector message** — one message replacing two or more related messages that **do not** share a
  cause. A "DOORS" message when several doors are open.

**The trust paragraph (para 7e), verbatim — cry-wolf written into a certification document:**

> "The integrity of the alerting system should be examined because **it affects the flightcrew's trust
> and response when assessing an alert.** ... **the impact of frequent false or nuisance alerts increases
> the flightcrew's workload, reduces the flightcrew's confidence in the alerting system, and affects
> their reaction in case of a real alert.**"

The damage is not the wasted time on the noise. It is the destroyed response to signal.

**Inhibition — the sharpest idea in the corpus (para 8d(2)):** alerts should be inhibited "**(a) When an
alert could cause a hazard if the flightcrew was distracted by or responded to the alert. (b) When the
alert provides unnecessary information... (c) When a number of consequential alerts may be combined into
a single higher-level alert.**"

During takeoff and final approach the crew is in a high-workload, irreversible-in-seconds regime. An
alert about something they cannot act on right now does not add information, it **subtracts attention
from the thing that will kill them**. So the system deliberately withholds true information because the
*timing* makes it net harmful. **The information is not destroyed. It reappears when the phase ends.**

**Three states, and they are not the same thing.** *Inhibit* — never shown, for this phase. *Suppress* —
shown, then silenced. *Clear* — dismissed but recallable. Para 9: "a means should be provided to
**identify if alert messages are stored (or otherwise not in view)**." **Dismissal is not deletion, and
the operator must always be able to see that things are hidden.**

**Two mute rules, in tension and both right.** The suppression control "**must not be readily available
to the flightcrew so that it could be operated inadvertently or by habitual reflexive action**" —
muting is deliberately made awkward so it cannot become a habit. And: "**Pulling circuit breakers is not
an acceptable primary means for the flightcrew to suppress a false alert**" — if you do not give the
operator a sanctioned mute, they will invent a destructive one.

**Priority is contextual.** Para 8a(3): "Depending on the phase of flight, there may be a need to
**re-categorize certain alerts from a lower urgency level to a higher urgency level.**" Severity is not
a property of the event. It is a property of the event in the current situation.

**Serialise the loud channel.** Para 8b: "only one aural alert is presented at a time"; an active alert
should finish before another begins; higher urgency pre-empts; the pre-empted alert repeats afterwards.

**Suppression carries an evidential burden.** Para 8a(5): "Documentation should include the results of
analyses and tests that show that **any delayed or inhibited alerts do not adversely impact safety.**"

### Alarm fatigue in medicine — the real number

**The Joint Commission, Sentinel Event Alert 50 (2013)** is the standard citation and its headline range
— **85–99% of alarm signals do not require clinical intervention** — is hedged as "it is estimated" and
cites a trade magazine, not a study. The commonly repeated "72–99%" does not match the source.

**Use this instead. Drew et al. (2014), "Insights into the Problem of Alarm Fatigue with Physiologic
Monitor Devices", *PLoS ONE* 9(10): e110274.**
<https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0110274> — live, open access.

**31 days, 77 ICU beds, 461 consecutive patients, 2,558,760 unique alarms.** 381,560 audible alarms,
giving **187 audible alarms per bed per day** — roughly one every 7.7 minutes, continuously, per
patient. **12,671 arrhythmia alarms adjudicated by nurse scientists at 95% inter-rater reliability:
88.8% were false positives.**

**That is the number: 88.8%, on 12,671 expert-adjudicated alarms, with the adjudication reliability
stated.**

The failure mode is not "operator missed it". It is **"operator turned it off"** — a substantial share
of fatal alarm-related sentinel events involved alarms that had been inappropriately silenced. Design
assuming your operator will mute you, and make muting safe and visible rather than trying to prevent it.

### Process-industry alarm management — the rate budget

**Texaco Milford Haven, 24 July 1994.** HSE case study,
<https://www.hse.gov.uk/comah/sragtech/casetexaco94.htm> — live. **275 alarms in the last 11 minutes,
for two operators.**

**EEMUA Publication 191** is paywalled. Band values verified from a secondary source that cites 3rd-ed.
page numbers: <https://www.processvue.com/downloads/Alarm_system_performance_KPIs_V1_0.pdf> — live.

| Long-term average rate, per operator | Verdict |
|---|---|
| < 1 per **10 minutes** | Very likely acceptable |
| 1 per **5 minutes** | Manageable |
| 1 per **2 minutes** | Likely over-demanding |
| > 1 per **minute** | Very likely unacceptable |

| Alarms in the first 10 min after a major upset, per operator | Verdict |
|---|---|
| < 10 | Manageable |
| 20–100 | **Hard to cope with** |
| > 100 | **Excessive; very likely to lead to the operator abandoning the use of the system** |

**Milford Haven was ~137 per operator. Squarely in the "operator abandons the system" band, which is
exactly what happened.**

**And the thing that is always lost when this benchmark is quoted, verbatim:**

> "It must be remembered that these benchmarks were set to make sure the alarm rate should not exceed
> that which the operator is capable of handling... **the time required for other activities of the
> operator often imposes severe limits on what alarm handling workload is acceptable.**"
>
> "**with a rate of one alarm per ten minutes, the operator can spend up to ten minutes on dealing with
> each alarm.**"

**"One per ten minutes" is not a magic number about alarms. It is a time budget** — detect, diagnose,
decide, act, confirm, *and do the rest of the job*. The correct rate for any system is derived from how
long its alarms take to handle.

**And the corruption of the KPI is documented in the same source.** "One alarm per ten minutes was
quickly translated to six alarms per hour", then to ~144/day in IEC 62682. "**One alarm per ten minutes
cannot be converted to six alarms per hour and certainly not extrapolated**" — because averaging over a
long window hides floods. Six an hour is satisfiable by 55 minutes of silence and then six alarms in ten
seconds, which is the failure case. **ISA-18.2 dropped several of these KPIs in its 2016 revision.**

**ISA-18.2's definition of an alarm, via ABB
(<https://library.e.abb.com/public/72f20c70c7b44d889d463db81df5c38d/SCADA%20Alarm%20Management%20White%20Paper.pdf>,
live):** "An alarm is an audible and/or visible means of indicating to the operator an equipment
malfunction, process deviation, or abnormal condition **requiring a response.** ... **The target audience
of an alarm should be operators, not engineers, maintenance technicians, or managers.**"

That second sentence is a sharp and underused test. **Who is this message for?** Vast quantities of
agent output are diagnostics addressed to the developer, emitted into a channel watched by the operator.
ISA-18.2 says that is a category error.

And: "**There should be no alarm without a predefined operator response.**"

**Flood definition:** a 10-minute period with more than 10 new alarms per operating position,
continuing until the rate falls below 5 per 10 minutes. **Priority distribution target:** roughly
**5% high / 15% medium / 80% low** — described in the source as conventional wisdom, so treat it as a
calibration heuristic rather than a measurement. If your severity distribution is top-heavy, your
severities are miscalibrated.

### Situation awareness and the ironies of automation

**Endsley (1995), "Toward a theory of situation awareness in dynamic systems", *Human Factors* 37(1).**
Three levels: **perception** (what is the state), **comprehension** (what does it mean for my goal),
**projection** (what happens next).

**Bainbridge (1983), "Ironies of Automation", *Automatica* 19(6), 775–779.** Wrote the agent-operator
problem forty years early. Three lines that transfer directly:

> "**people can write down numbers without noticing what they are.**"

> the operator can only "monitor the computer's decisions at some meta-level, **to decide whether the
> decisions are 'acceptable'**"

> automation "can **'camouflage' system failure by controlling against the variable changes**, so that
> trends do not become apparent until they are beyond control."

**Three consequences for agent reporting.** A transcript is not oversight — logs create the appearance
of monitoring without the substance. The operator cannot re-derive the agent's reasoning in real time,
so the report must support **acceptability judgement**, not step verification: intent, assumptions,
confidence, reversibility, consequences. And the compensating effort must be surfaced — retries,
fallbacks, workarounds, degraded paths — because the trend *is* the alarm and automation absorbs it.

Billings, via Endsley: monitoring failure spikes "**when devices behave reasonably but incorrectly**."
That is an exact description of a confidently wrong language model, written before language models.

**And the final irony applies without modification: the more reliable the agent, the more the operator's
skill and situation awareness decay, so the reporting burden goes up, not down.**

### Trust in automation

**Lee & See (2004), "Trust in automation: designing for appropriate reliance", *Human Factors* 46(1),
50–80.** SAGE **paywalled**; abstract verified via NCBI E-utilities, PMID 15151155.

Abstract, verbatim: "**Automation is often problematic because people fail to rely upon it
appropriately.** ... **trust guides reliance when complexity and unanticipated situations make a complete
understanding of the automation impractical.**"

**The three bases of trust.** The three-term structure is confirmed in the abstract's "dimension of
attributional abstraction"; the definitions below are the standard formulation from the secondary
literature, since the body is paywalled — flag them as such.

| Basis | What the operator is asking | What the agent must expose |
|---|---|---|
| **Performance** | Does it work? How reliably? | Track record, success and failure rates, competence boundaries |
| **Process** | How does it work? Is its method right for my situation? | The approach taken, and why this method |
| **Purpose** | Why does it exist? Was it designed for what I am using it for? | Intended use, out-of-scope conditions |

**The normative claim is that the goal is not maximum trust but appropriate trust.** Overtrust →
**misuse** (relying where the system is not competent). Undertrust → **disuse** (ignoring a system that
would have helped — the alarm-fatigue failure). And **resolution**: how finely trust distinguishes
between the system's capability in *different* situations. Low resolution means the operator trusts it
uniformly across contexts where competence actually varies a lot. **That is the dominant failure mode
for a language model, whose competence varies wildly between tasks that look alike.**

### Automation bias

**Mosier, Skitka, Heers & Burdick (1997)**, PMID 11540946, and **Skitka, Mosier, Burdick & Rosenblatt
(2000)**, PMID 11543300 — abstracts verified via NCBI; full papers closed-access and **percentages could
not be verified, so none are quoted here**.

**Definition, verbatim:** automation bias is "**omission and commission errors resulting from the use of
automated cues as a heuristic replacement for vigilant information seeking and processing.**"

- **Omission errors** — failures to respond to events **because the automation did not indicate them**.
- **Commission errors** — following an automated directive without verifying it, or in spite of
  contra-indications from other sources.

**Three verified findings that should change design decisions.**

1. **Training reduces commission errors but not omission errors.** Verbatim: "Training that focused on
   automation bias and associated errors **successfully reduced commission, but not omission, errors.**"
   You can teach people not to follow a wrong recommendation. **You cannot teach them to notice
   something the automation never mentioned. Omission is a design problem, not a training problem.**
2. **Adding a second human does not fix it.** "**Teams and solo performers were equally likely** to fail
   to respond to system irregularities... and to incorrectly follow automated directives when they
   contradicted other system information." **Review-by-a-second-person is not a control.**
3. **Operators confabulate having verified.** Verbatim: "**Pilots were also likely to erroneously
   'remember' the presence of expected cues when describing their decision-making processes.**" Any
   design that relies on the operator self-reporting that they checked is unreliable.

And the headline that needs no percentage: participants **without** an automated aid **out-performed**
those with a very-but-not-perfectly-reliable aid on a monitoring task, on a task where all the
information they needed was available to them throughout. **A good-but-imperfect aid made people worse
than no aid at all.**

On accountability: experimentally *manipulated* accountability did not reach significance; only
**internalised** perceived accountability predicted verification behaviour and lower error rates.
Accountability works, but it has to be felt, not announced.

### Checklists — and the honestly mixed evidence

**Haynes et al. (2009), *NEJM*.** WHO Surgical Safety Checklist, 8 hospitals, n = 7,688. Death
**1.5% → 0.8%** (P = 0.003); complications **11.0% → 7.0%** (P < 0.001).

**Urbach et al. (2014), *NEJM*.** Ontario, **n = 215,711 procedures, 101 hospitals**. Mortality
**OR 0.91, P = 0.13**. Complications **OR 0.97, P = 0.29**. **Both null.**

The difference is not the checklist. It is that Ontario **mandated the artefact** without the training,
observation and sustained attention that surrounded the original trial. **Mandating a format without the
programme around it produced approximately nothing.** Any framework that ships a template and expects
the template to do the work should read both papers.

## 2.9 Briefing formats

### BLUF, and the primary source people never cite

**AR 25-50, *Preparing and Managing Correspondence*, 10 October 2020.**
<https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN42124-AR_25-50-007-WEB-13.pdf> — live via curl, 109pp.

**The acceptance criterion, verbatim (para 1–38a):**

> "**Effective Army writing is understood by the reader in a single rapid reading** and is clear,
> concise, and well-organized in accordance with PL 111–274."

Not "accurate". Not "complete". **Comprehended on one pass, at speed.** That is a testable standard.

**Para 1–38b, verbatim:** "Two essential requirements include **putting the main point at the beginning
of the correspondence (bottom line up front)** and using the active voice."

**The hard numbers, para 1–39b, verbatim:**

> "(2) **Keep sentences short. The average length of a sentence should be about 15 words.**
> (3) **Write paragraphs that, with few exceptions, are no more than 10 lines.**
> ...
> (6) **Use "I," "you," and "we" as subjects of sentences** instead of this office, this headquarters...
> (7) **Write one-page letters and memorandums for most correspondence. Use enclosures for additional
> information.**
> (8) **Avoid sentences that begin with "It is," "There is," or "There are."**"

Item 8 is the sharpest, because it is mechanical and it is BLUF at sentence scale: expletive
constructions structurally postpone the subject.

**Honest provenance note.** The BLUF *rule* is primary-sourced to AR 25-50 para 1–38b. The BLUF *origin
story* — attributions to ATTP 5-0.1 or the intelligence community — **could not be sourced**, and
armypubs actively rotates filenames such that old links return HTTP 200 with a 1,226-byte error page.
Cite the regulation; do not repeat the origin claims.

### SITREP

**FM 6-99, *U.S. Army Report and Message Formats*, 19 August 2013.**
<https://www.globalsecurity.org/military/library/policy/army/fm/6-99/fm6-99.pdf> — live, 262pp,
~160 standardised templates.

The Commander's SITREP is 18 numbered lines in fixed order. Five structural features are worth taking
whole:

1. **Fixed numbered fields, same order every time.** The receiver knows LINE 7 is combat effectiveness
   without reading LINE 6. Fixed position gives O(1) lookup, and it makes **absence detectable** — a
   missing LINE 12 is a visible gap, whereas a missing paragraph in prose is invisible.
2. **LINE 16, "CDR'S EVAL", is a bottom line appended at the end** — "summary of key points from lines 9
   through 15 **highlighting areas requiring [higher] actions or decisions**". Note the filter: not what
   is interesting, what **requires a decision at the level above**.
3. **LINE 12's escalation threshold is the cleanest filter in the whole corpus**, verbatim: report
   "significant deficiencies affecting support for planned operations or problem areas **beyond the
   commander's or service's capability to overcome or alleviate in a timely manner.**" Problems you can
   fix yourself do not go up.
4. **LINE 13 requires an impact assessment, not a fact**: "assessment of the mission impact caused by
   communications outages and degradations." Endsley Level 2, mandated by template.
5. **LINE 10 names deviation as a required field**: "deviations or variations from previously reported
   intentions or plans." Reporting where you departed from the plan is a line item, not an optional
   confession.

And the stated purpose is the acceptance test: "**providing commanders and staffs with sufficient
information for the receiving mission command facility to act on the report.**" **Sufficiency is defined
by the receiver's ability to act, not by the sender's thoroughness.**

### Commander's intent

**FM 6-0, *Commander and Staff Organization and Operations*, 5 May 2014.**
<https://www.milsci.ucsb.edu/sites/default/files/sitefiles/fm6_0.pdf> — live, 392pp. (The current
armypubs URL for the 2022 edition **hung and timed out**; the 2014 edition is used and labelled.)

**Para 9–75, verbatim:**

> "**The commander's intent must be easy to remember and clearly understood by leaders two echelons
> lower in the chain of command. The shorter the commander's intent, the better it serves these
> purposes. Typically, the commander's intent statement is three to five sentences long and contains the
> purpose, key tasks, and end state.**"

| Component | What it is |
|---|---|
| **Purpose** | The broader *why*, beyond the mission statement |
| **Key tasks** | The activities without which the end state is unreachable. Not a full task list |
| **End state** | The **conditions that define** success. A description of the world when you are done, not of the work |

**The two-echelon rule is verified in three separate places** in FM 6-0 — para 9-75, the mission-analysis
briefing outline (9-71), and the OPORD format itself (Figure C-2, 1d(1)). It is structural, not
rhetorical.

**Three passages that transfer directly to agent design.**

- **Para A-6:** "Leaders determine the mission and commander's intent of their higher echelon... **When
  these are unavailable, leaders infer them based on available information. When they receive the actual
  mission and commander's intent, leaders revise their plan, if necessary.**" That is the doctrinal
  sanction for an agent making a **documented** assumption and continuing rather than blocking — but note
  it requires the assumption to be stated, not silently held.
- **ADP 6-0:** subordinates inform their superiors as soon as possible when they have deviated from
  orders. **Autonomy and disclosure are one mechanism, not two.**
- **OPORD Figure C-2, para 3a:** "**Commanders develop their intent statement personally.**" Intent is
  the one thing that cannot be delegated to the staff. **An agent must never manufacture the operator's
  intent — only elicit, restate, and check it.**

### SBAR, I-PASS, and an honest look at the evidence

**SBAR** — Situation, Background, Assessment, Recommendation. Universally adopted in healthcare.

**Müller et al. (2018), "Impact of the communication and patient hand-off tool SBAR on patient safety:
a systematic review", *BMJ Open* 8(8): e022202.**
<https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6112409/> — live, open access.

| | Count |
|---|---|
| Studies meeting inclusion criteria, five databases, all years to Jan 2017 | **11** |
| — before-after design, no control | **8** |
| — controlled clinical trials | **3** |
| Distinct patient outcomes measured | **26** |
| Statistically significantly improved | **8** |
| "Described as improved" with **no statistical test reported** | **11** |
| No significant change | **6** |
| Worse | **1** |

**Eleven studies for a tool adopted by health systems worldwide. Eight of eleven had no control group.
Forty-two percent of reported outcomes had no inferential statistics at all.** The reviewers' own
concession: "**there is a lack of high-quality research on this widely used communication tool.**"

The strongest signal is narrow and makes mechanistic sense: "**especially when used to structure
communication over the phone**" — the channel where there are no shared visual artefacts and the sender
cannot see the receiver's state.

**Plain SBAR also has no closed loop.** Nothing in S, B, A or R requires the receiver to demonstrate
they understood. The ISBAR/ISBARR variants add read-back; I-PASS formalises it as Synthesis.

**I-PASS is the strongest study in this whole section. Starmer et al. (2014), *NEJM*.** n = 10,740
patient admissions across nine sites. **Medical errors −23%; preventable adverse events −30%; both
P < 0.001.** And it has a clean internal negative control: **non-preventable adverse events were
unchanged, P = 0.79** — exactly what you would predict if the intervention worked through communication
rather than through general secular improvement.

**Two caveats that matter.** **Three of the nine sites showed no effect.** And **the intervention was a
four-component programme** — training, a mnemonic, a printed handoff document, and faculty observation
— **not a mnemonic.** The mnemonic is the part that gets cited and the least likely part to be doing the
work.

**The "80% of serious medical errors involve handoff miscommunication" claim does not hold up.** It
traces to a two-page news item in *Joint Commission Perspectives*, August 2012, promoting a Joint
Commission product. **The article contains no citations.** The Joint Commission's own sentinel-event
root-cause data for the adjacent period shows communication as *a* contributing cause in 59–65% of
reviewed events — a narrower, voluntary, explicitly non-epidemiological population, of which handoffs
are a subset — and the Joint Commission prints a warning against drawing exactly this inference.
**Do not use the figure.**

### METHANE — the incomplete-information doctrine

**JESIP Joint Doctrine, Edition 2 (July 2016) and Edition 3 (October 2021).**
<https://www.jesip.org.uk/uploads/resources/JESIP-Joint-Doctrine.pdf> and
<https://www.jesip.org.uk/wp-content/uploads/2022/09/JESIP-Joint-Doctrine-October-2021_ACCESSIBLE.pdf>
— both live. **`https://www.jesip.org.uk/methane/` is a 404**; the live page is
`/joint-doctrine/early-stages-of-an-incident-m-ethane/`.

**The fields, verbatim, in question form:**

> **M** — Has a major incident or standby been declared? **(Yes / No – if no, then complete ETHANE message)**
> **E** — What is the exact location or geographical area of the incident?
> **T** — What kind of incident is it?
> **H** — What hazards or potential hazards can be identified?
> **A** — What are the best routes for access and egress?
> **N** — How many casualties are there, and what condition are they in?
> **E** — Which, and how many, emergency responder assets and personnel are required or are already on-scene?

**ETHANE is the base format; METHANE is ETHANE with a declaration flag prepended.** And the flag is
re-evaluated: "there should be **periodic consideration of the 'M'**... to establish whether a developing
situation has become a major incident."

**This is the doctrine the brief asked after, and it is explicit and it is the opposite of what most
agent design assumes. Verbatim:**

> "During the early stages of an incident it takes time for operational structures, resources and
> protocols to be put in place... **All the required information may not be available** and commanders may
> have insufficient resources to deal with the incident."

> "**It is recommended that this format is used for all incidents and be updated as the incident
> develops.**"

> "The first resources to arrive on scene should consider their own safety and send the M/ETHANE message
> so that situational awareness can be established quickly. **The information received through multiple
> M/ETHANE messages will gradually build to support shared situational awareness.**"

**Send early and incomplete. Send repeatedly. Awareness accumulates across messages rather than arriving
in one perfect report.** A field you cannot fill is reported as unknown, which is itself information.

**And the report is an act, not a description.** "**Declaring a 'major incident' triggers a predetermined
strategic and tactical response** from each emergency service... Declaring that a major incident is in
progress as soon as possible means these arrangements can be put in place as quickly as possible."

**JESIP's own Common Operating Picture questions are Endsley's three levels, reached independently:**

> "• **What is happening now and what is being done about it?**
> • **So what does all of that mean and what effects will it have?**
> • **What might happen next or in the future?**"

Plus the design constraint: "geared to the requirements of **busy decision makers who are under
pressure**." And the vocabulary rule: "Information shared should be **free of acronyms and terms used by
only one agency.**"

---

## 2.10 Machine-to-human reporting in software

Engineering convention, mostly. Where a claim is convention rather than research, it says so.

### Google SRE — the strongest available principle for agent reporting

**Chapter 6, "Monitoring Distributed Systems", <https://sre.google/sre-book/monitoring-distributed-systems/>
— live.**

> "**Your monitoring system should address two questions: what's broken, and why?** The 'what's broken'
> indicates the symptom; the 'why' indicates a (possibly intermediate) cause."

> "**Every page should be actionable.**"

> "**Every page response should require intelligence. If a page merely merits a robotic response, it
> shouldn't be a page.**"

> "It's better to spend much more effort on catching symptoms than causes; when it comes to causes, only
> worry about very definite, very imminent causes."

> "Email alerts are of very limited value and tend to easily become overrun with noise."

**Rob Ewaschuk, "My Philosophy on Alerting"** — the document behind that chapter. The canonical Google
Doc **returns only a title to automated fetch**; a mirrored copy is at
<https://gist.github.com/msgodf/86a3fc7fcd3ce663ff37> — live.

> "**Pages should be urgent, important, actionable, and real.** They should represent either ongoing or
> imminent problems with your service."

> "**Every page should require intelligence to deal with: no robotic, scriptable responses.**"

> "**Alerts that are less than 50% accurate are broken; even those that are false positives 10% of the
> time merit more consideration.**"

Three channels, and the distinction is the useful part: **pages** for urgent actionable issues,
**tickets** for things needing "attention soon, but not right now", **dashboards** for cause-based
context you look at when debugging. Most agent output puts all three in one stream.

**Note the convergence, arrived at independently.** "Every page should be actionable" is ISA-18.2's "no
alarm without a predefined operator response" is AC 25.1322-1's "conditions that do not require
flightcrew awareness should not generate an alert." Three industries, three decades, same rule.

**SRE Workbook postmortem chapter**, <https://sre.google/workbook/postmortem-culture/> — live. Template
sections: Executive Summary, Problem Summary, Background, Impact, Root Causes and Trigger,
Timeline/Recovery, Lessons Learned, Action Items, Glossary, Appendix. Rules worth taking: use
"**verifiable data to justify the severity of a statement**"; produce a "**factual artifact**" free from
"personal judgments and subjective language"; avoid "animated language" and "dramatic descriptions";
action items get a **single owner**, a specific measurable end state, a priority and a tracking bug.
And: "**Your audience extends beyond the immediate team.**"

### PagerDuty — severity and the anti-pattern

<https://response.pagerduty.com/before/severity_levels/> — live.

| Severity | Definition |
|---|---|
| SEV-1 | "Critical issue that warrants public notification and liaison with executive teams" |
| SEV-2 | "Critical system issue actively impacting many customers' ability to use the product" |
| SEV-3 | "Stability or minor customer-impacting issues that require immediate attention from service owners" |
| SEV-4 | "Minor issues requiring action, but not affecting customer ability to use the product" |
| SEV-5 | "Cosmetic issues or bugs, not affecting customer ability to use the product" |

**Note the axis: every level is defined by customer impact, not by technical severity.** And the tie-break
rule: when uncertain, treat as the more severe level rather than debating during an active incident.

<https://response.pagerduty.com/during/external_communication_guidelines/> — live. Status updates should
"indicate any changes to impact and/or scope", say whether recovery or mitigation has begun, and
"**provide an expectation of when the next update will be posted.**" It warns explicitly against
"**content-less updates**" and against notification fatigue. Cadence: initial within 5 minutes, second
within 5 minutes after that, then at least every 20 minutes for the first two hours.

**The two rules worth stealing: always say when the next update is coming, and never send an update
with no content in it just because the clock said so.**

### Grafana — the dashboard test

<https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/> — live.

"**A dashboard should tell a story or answer a question.** ... **What is the goal for this dashboard?**
(Hint: If the dashboard doesn't have a goal, then ask yourself if you really need the dashboard.)"

And the selection rule: "if your question is 'which servers are in trouble?', then maybe you don't need
to show all the server data. **Just show data for the ones in trouble.**"

Also the warning about "the uncontrolled growth of dashboards" — the same standing-alarm problem the
process industries measure. Items that are always present train the operator to ignore the channel.

### Structured logging

**Twelve-factor, factor XI**, <https://12factor.net/logs> — live. "**A twelve-factor app never concerns
itself with routing or storage of its output stream.**" The application emits an event stream; routing
and retention are somebody else's problem. For an agent: emit structured events; do not decide what the
operator's inbox looks like.

**Canonical log lines**, <https://stripe.com/blog/canonical-log-lines> — live. One wide,
key-value-structured line per request at the end, rather than telemetry scattered across many lines.
Rationale: spreading relevant information "across many individual log lines" makes extraction "slow and
requires intricate query syntax"; colocating it makes queries "faster to write, and faster to run."

**The transferable shape is exactly the SITREP shape** — fixed fields, one record, position carries
meaning, absence is detectable. Arrived at from the query-performance direction rather than the
human-comprehension direction.

**RFC 5424 syslog severities**, <https://www.rfc-editor.org/rfc/rfc5424.html> — live. A genuine
standardised severity taxonomy: 0 Emergency (system is unusable), 1 Alert (action must be taken
immediately), 2 Critical, 3 Error, 4 Warning, 5 Notice (normal but significant), 6 Informational,
7 Debug. **And its own caveat, verbatim: "severities are very subjective, a relay or collector should
not assume that all originators have the same definition of severity."**

Eight levels is far more than the three that aviation, process control and clinical triage all converge
on. Note that levels 0 and 1 are distinguished by *urgency of action*, and 5 and 6 by *significance* —
so RFC 5424 is not a single axis either.

**The "WARN is useless" argument is blog folklore, not attributable.** A search for a Dan North source
found nothing. The citable version is Nicole Tietz, "The only two log levels you need are INFO and
ERROR", <https://ntietz.com/blog/the-only-two-log-levels-you-need-are-info-and-error/> — live: "we
really do only care if something should alert us or not. For all the other uses of logs, we want to see
all the context." **A blog post with a good argument. Cite it as that.**

### Code review, PRs and commits as machine-to-human reporting

**Google's CL description guide**, <https://google.github.io/eng-practices/review/developer/cl-descriptions.html>
— live. First line: "Short summary of what is being done", "Complete sentence, written as though it was
an order", followed by a blank line, and it must **stand alone**. Body: the problem, the rationale, and
"any shortcomings to the solution". And the rule: **what and why, not how** — "reading source code
reveals function but not intent."

Its list of bad descriptions is a useful negative test set: "Fix bug", "Fix build", "Add patch",
"Moving code from A to B", "Phase 1", "Add convenience functions", "kill weird URLs."

**Chris Beams, "How to Write a Git Commit Message"**, <https://chris.beams.io/posts/git-commit/> —
live. Seven rules, with the two numbers everyone cites: **50-character subject** (72 absolute maximum),
**wrap the body at 72**. The imperative-mood test is the good part: "**If applied, this commit will
_[your subject line]_**" should read naturally.

**Linux kernel submitting-patches**, <https://docs.kernel.org/process/submitting-patches.html> — live.
Three rules that transfer: "**Describe your problem.** Whether your patch is a one-line bug fix or 5000
lines of a new feature, there must be an underlying problem that motivated you." Describe **user-visible
impact**. And: "**If you claim improvements in performance, memory consumption, stack footprint, or
binary size, include numbers that back them up. But also describe non-obvious costs.**"

That last clause is the one nobody follows and the one an agent most needs: **quantified claims must
carry their costs.**

**Conventional Commits**, <https://www.conventionalcommits.org/en/v1.0.0/> — live. Sixteen numbered
MUST/SHOULD rules over `<type>[scope]: <description>`. Machine-parseable by construction, which is the
point — the stated benefits are automated changelogs and semantic version bumps. **A format designed for
a machine reader that happens to be readable by humans, which is the inverse of everything else here.**

**Bacchelli & Bird (2013), "Expectations, Outcomes, and Challenges of Modern Code Review", ICSE.**
Microsoft Research; the MSR-TR URL **404s**, working copy at <https://sback.it/publications/icse2013.pdf>.
The finding that matters: **finding defects is the stated motivation, but reviews deliver less of it than
expected**, and **"code and change understanding is the key aspect of code reviewing"**, with developers
using a wide range of mechanisms to meet understanding needs that current tools do not serve.
**The reviewer's bottleneck is comprehension, not defect-spotting.**

**Google's Tricorder (Sadowski et al., ICSE-SEIP 2015)**, <https://research.google.com/pubs/archive/43322.pdf>
— live. **The hard number: an analyser that surfaces results in the developer workflow must keep its
false-positive rate low — the operational threshold used is around 10% — or it is removed.** Developer
trust in automated output is measured by explicit fix-versus-dismiss signals, and analysers that fail
the threshold get demoted to a nightly run instead.

**This is the closest thing in software engineering to aviation's nuisance-alert doctrine, and it has a
number attached to it.**

## 2.11 Autonomous-system transparency, and where the literature is genuinely thin

### What exists

**Chen et al., Situation Awareness-based Agent Transparency (SAT), US Army Research Laboratory,
ARL-TR-6905, 2014.** DTIC record at <https://apps.dtic.mil/sti/html/trecms/AD1143367/> — live. Extended
in *Theoretical Issues in Ergonomics Science*, 2018.

**Three levels of agent transparency**, mapping onto Endsley's three levels of situation awareness:

1. The agent's **current action or plan** — what am I doing.
2. The agent's **reasoning** — why am I doing it.
3. The agent's **projections of future outcomes**, including uncertainty — what do I expect, and how
   confident am I.

**This is the closest thing to a purpose-built framework for agent-to-human reporting, and it is a
human-factors model for autonomous vehicles and robotic squad members, not for text.** It tells you what
to include. It says nothing about how to write it.

**Tim Miller (2019), "Explanation in Artificial Intelligence: Insights from the Social Sciences",
*Artificial Intelligence* 267, 1–38.** <https://arxiv.org/abs/1706.07269> — live abstract; the PDF is a
compressed-stream document that resisted extraction, so the four findings below are from the widely
reported formulation rather than the verbatim text.

Abstract, verbatim: "**most work in explainable artificial intelligence uses only the researchers'
intuition of what constitutes a 'good' explanation.**"

The four findings:

1. **Explanations are contrastive.** People do not ask "why P"; they ask "why P **rather than Q**". An
   agent report that justifies what it did without naming what it did not do is answering a question
   nobody asked.
2. **Explanations are selected.** People pick one or two causes from many, in a biased way, and are
   satisfied. Exhaustive causal accounts are not better explanations, they are worse ones.
3. **Probabilities probably do not matter.** Referring to statistical relationships is less effective
   than referring to causes. A confidence percentage is not an explanation.
4. **Explanations are social.** A conversational transfer of knowledge, shaped by what the explainer
   believes the listener already knows.

**Kim, Liao, Vorvoreanu, Ballard & Wortman Vaughan (2024), "'I'm Not Sure, But...': Examining the Impact
of Large Language Models' Uncertainty Expression on User Reliance and Trust", FAccT '24.**
<https://dl.acm.org/doi/10.1145/3630106.3658941> — live.

**Large-scale, pre-registered, N = 404.** Participants answered medical questions with or without a
fictional LLM-infused search engine.

- **First-person expressions of uncertainty ("I'm not sure, but...") decreased participants' confidence
  in the system and their tendency to agree with it, and increased their accuracy.**
- The accuracy gain is attributable to **reduced but not eliminated** overreliance on incorrect answers.
- **Impersonal expressions ("It's not clear, but...") produced weaker, non-significant effects.**

**The precise language matters, and first-person hedging outperforms impersonal hedging.** That is a
directly actionable, measured finding about agent prose, and it is one of very few.

**Buçinca, Malaya & Gajos (2021), "To Trust or to Think: Cognitive Forcing Functions Can Reduce
Overreliance on AI in AI-assisted Decision-Making", CSCW.**
<https://dl.acm.org/doi/10.1145/3449287> **403**; <https://arxiv.org/abs/2102.09692> — live.

Cognitive forcing interventions **significantly reduced overreliance** compared with standard
explainable-AI designs. **And the designs that most successfully reduced overreliance received the least
favourable subjective ratings.** They also benefited participants with higher need for cognition more
than others.

**The trade-off is explicit: making people think works, and they do not like it.** Combined with the
preference/performance dissociation in §2.7, that is the same finding arriving from a third direction.

**Dragan, Lee & Srinivasa (2013), "Legibility and Predictability of Robot Motion", HRI '13.**
<https://www.ri.cmu.edu/pub_files/2013/3/legiilitypredictabilityIEEE.pdf> — live.

They formalise **legibility** (intent-expressive — an observer can infer the goal) and
**predictability** (matches what an observer expected) and prove they are **different properties**, with
the main result that **a departure from predictability is often necessary to increase legibility.**

For agent reporting: a report that faithfully mirrors what happened, in the order it happened, is
*predictable*. It is not the same as *legible*. Making intent clear sometimes requires deviating from a
literal chronological account — which is a principled argument for BLUF that does not rely on Nielsen's
retracted premise.

**"So There's a Catch-22 Here": How Early Adopters Who Build Multi-Agent LLM Systems Conceptualize
Transparency**, <https://arxiv.org/html/2606.08323v1> — live. 13 early adopters (8 technical, 5
non-technical) at a large technology organisation, ~9 hours of semi-structured interviews, thematic
analysis.

The central tension they identify: **developers require deep system exposure for debugging while users
benefit from high-level summaries**, and developer-focused mechanisms such as audit logs "confuse
non-technical users", creating over-reliance without understanding. Their design recommendations are
**layered explanations** — proof-of-functionality for users, step-by-step traces for developers — and
explicit boundary communication, making the "dos and don'ts" visible to prevent misaligned expectations.

That is Farkas's layering, rediscovered in an agent context 28 years later, by practitioners who
presumably had not read him.

### Where it is thin, stated plainly

**There is no research literature on how an autonomous software agent should write a status report to a
human operator.** Not a thin one. There is essentially nothing addressing the artefact directly.

Sorting what exists:

| | Examples |
|---|---|
| **(a) Real research, directly on point** | Kim et al. 2024 (uncertainty phrasing, N=404). Buçinca et al. 2021 (cognitive forcing). The Catch-22 interview study (N=13). That is close to the complete list |
| **(b) Real research, adjacent and transferable with care** | The entire operator literature in §2.8 — aviation alerting, alarm management, situation awareness, automation bias, trust calibration. Tricorder's false-positive threshold. Bacchelli & Bird on comprehension as the reviewer's bottleneck. Dragan on legibility |
| **(c) Engineering convention with no research behind it** | Google SRE alerting philosophy, PagerDuty severities, RFC 5424, Conventional Commits, canonical log lines, twelve-factor logging, the entire agent-observability tooling literature. Sensible, widely adopted, untested |
| **(d) Nothing at all** | How long an agent status report should be. Whether structured or prose reports are better understood. Whether confidence should be numeric, verbal, or per-claim. Whether operators read agent reports at all, and if so which parts. How report frequency affects trust calibration. What an agent should say when it is unsure whether to interrupt |

**Category (d) is where the interesting questions are, and it is empty.** The honest position is that
Weave's agent-reporting rules are transfers from operator domains with different failure costs and
different operators, plus three HCI papers, plus convention. That is a defensible basis for a
framework. It is not an evidence base, and it should not be described as one.

One more absence worth recording: **no NN/g article was found on how AI-generated content changes
reading *behaviour***, as opposed to how AI should write. As of September 2026 that gap is real.

---

# Part 3 — What actually aids comprehension

## 3.1 The finding that reorganises the other findings

**Text difficulty is not a property of text. It is a relation between a text and a specific reader's
prior knowledge.**

Four literatures, four methods, one answer:

| Source | Statement |
|---|---|
| Sweller et al. 2019 (cognitive load) | "Complexity or element interactivity depends on a combination of both the nature of the information and the knowledge of the person processing the information... **measures that ignore knowledge when determining complexity are largely useless.**" |
| Kalyuga et al. 2003 (expertise reversal) | "**Text that is minimally coherent for novices may well be fully coherent for experts.**" |
| McNamara et al. 1996 (reverse cohesion) | "readers who know little about the domain of the text benefit from a coherent text, whereas **high-knowledge readers benefit from a minimally coherent text.**" |
| Redish / Kimble (plain language) | Same FCC rewrite: novices **+102%**, experts **+29%**. Benefit decays monotonically with reader expertise |
| Miller 1956 (chunking, read correctly) | Capacity is extended by **recoding into units already held in long-term memory** — i.e. by what the reader already knows |

**Three consequences.**

1. **Any single-number readability or clarity score is measuring the wrong object**, because it has no
   reader term. This is not a stylistic objection; it is why the formulas fail.
2. **A single document for a mixed-expertise audience is choosing whom to harm.** That is arithmetic,
   not taste. Layering and progressive disclosure are the structural response.
3. **"Explain more" is not a safe default.** For an expert reader it is a measured cost, and it also
   signals "this content is not for you" (NN/g's oceanographer, §2.3).

## 3.2 Measured — safe to build on

| Finding | Evidence | Strength |
|---|---|---|
| **Delete what the reader does not need** | Coherence principle, **23 of 23** tests, median **d = 0.86** (Mayer & Fiorella 2014). Corroborated by Redish's FCC rewrite: "select only the content that the audience needs", 10.66 → 16.85 of 20 | Strongest general rule available |
| **Tabulate conditional and comparative information** | **d ≈ 0.39–0.43** on comprehension, preregistered RCT, **N = 2,305**, persisting **6 weeks** at d = 0.12 (Brick et al. 2020) | Strongest single study in the corpus |
| **Lists for procedures, steps, options, conditions** | Better understood, better recalled, faster to query; **benefit largest for readers with least working-memory headroom** (Morrow & Leirer 1998). Effect sizes not obtainable | Measured, magnitude unknown |
| **Signal the structure — headings, previews, summaries** | Verbal signalling **d = 0.50**; signalling overall **d = 0.41**, 24 of 28 tests (Mayer). Headings aid recall, search and retrieval (Hartley & Trueman 1983) | Measured, well replicated |
| **Blank-line segmentation plus emphasis on the important units** | Recall of **important** ideas .22 → .29, t(94)=2.50, p<.01, **at zero time cost** (Shebilske & Rotondo 1981, n=96) | Measured, directly Markdown-expressible |
| **Keep subject, verb and object together; put multiple conditions in a list at the end of the sentence** | High-impact vs bureaucratic naval memos, **n = 262**: better on all seven comprehension questions, **17–23% less reading time**, half as many needing to reread (Suchan & Colucci 1989) | Measured, largest properly-controlled n in the plain-language corpus |
| **Add worked examples when a rewrite fails** | The specific intervention that rescued the Swaney insurance policy after revision made it worse. Corroborated by the worked-example effect (1985) | Measured |
| **Present interacting elements in isolation before presenting them together** | Isolated elements effect (Pollock, Chandler & Sweller 2002) | Measured |
| **Plain-language revision helps low-knowledge readers of complex documents** | +15 to +45 percentage points on accuracy in the better-designed studies (Kimble's own randomised tests) | Measured, but see the caveats in §2.4 |
| **Format changes willingness to read at all** | Polio pamphlet, **n = 522**: 49% → 81% saying a "very good to excellent" chance they would read it (Davis et al. 1996) | Measured. Arguably the largest real-world effect in the corpus and the least studied |
| **Expository text suffers on screen; narrative does not** | Delgado 2018 **g = −.27** vs **+.01**; Clinton 2019 **g = −0.32** vs **−0.04**. Two independent meta-analyses | Strongest converging evidence here |
| **Screen readers are worse at knowing whether they understood** | Calibration **g = 0.20** favouring paper (Clinton 2019, k=11, n=698) | Measured. Changes what a document has to do |

## 3.3 Measured, and conditional on expertise

These flip. State the reader before applying them.

- **Fade guidance as expertise rises.** Guidance-fading effect (Renkl & Atkinson 2003).
- **Do not add cohesion for expert readers.** McNamara et al. 1996; Yeung et al. 1998.
- **Signal sparingly for high-knowledge readers, more for novices.** Naumann et al. 2007, via Mayer.
- **Keep domain jargon, kill organisational jargon.** For a physician "ventricular tachycardia" is a
  compression device; *MessageSight* and *SF424* are not (NN/g 2017).
- **Do not explain what the reader should already know**, because it signals the document is not for
  them.

## 3.4 Received wisdom — use if you like, never cite as fact

- **"79% scan, 16% read word-by-word."** 15 and 3 people out of 19, in a study its authors called
  exploratory.
- **"Users read 20% of a page."** An undocumented downward nudge off a hypothetical ceiling, derived
  from dwell time on 25 people's 2004 browser logs. Also: 18% is a *marginal rate*, not a proportion.
- **"58% / 47% / 27% / 124% better usability."** Composite indices, ~10 per cell, one-tailed. Removing
  one of five measures halves the headline.
- **"Objective writing is 27% more usable."** Non-significant on every performance measure, in the
  source paper.
- **"Half the word count of print."** Asserted 1997. The authors asked for the dose-response study and
  nobody ran it.
- **"Aim for grade 8" / any reading-level target.** The Federal Plain Language Guidelines explicitly
  reject fixed grade targets. NN/g's own numbers vary between its own articles. And the criterion
  underneath a grade level is that 50% of readers at that grade got 50% of the questions right.
- **"Chunk at 7±2."** Disowned by Horn in 1998, and Miller called the number "a pernicious, Pythagorean
  coincidence."
- **"45–75 characters per line."** Bringhurst's taste. Butterick says 45–90. Lynch & Horton's 4th
  edition abandoned a number entirely.
- **"Highlight no more than 30% of the text."** No derivation given.
- **"A comprehensive README is a bad README" / most length rules.** Craft, and often contradicted by
  other craft sources (`research/03` §2.15).
- **All seven EPPO characteristics, Baker's four domains, DITA's benefit claims.** Craft reasoning,
  zero studies.

## 3.5 Actively contradicted — do not repeat

- **"Whitespace improves comprehension by 20% (Lin 2004)."** Fabricated. The cited author denies it on
  the record.
- **"Making text harder to read aids retention."** N = 7,365 pooled null on reasoning; N = 3,135
  meta-analytic null on learning (recall d = −0.01, transfer d = 0.03) with a **measured cost** in time
  (d = 0.52) and learner confidence (d = −0.43). Sans Forgetica: N = 882, equivalent on prose,
  **ten points worse** on paired associates.
- **"Dyslexia fonts help."** Every Improvement Rate Difference negative, worst −88.65%, and no
  participant preferred it (Wery & Diliberto 2017).
- **"Shorter is clearer."** Kimble's own preferred jury instruction is no shorter than the original.
  Duffy & Kabance drove Flesch-Kincaid from 11.5 to 5.5 across four experiments and got nothing.
- **"Rewriting to a readability score improves comprehension."** Klare's own review of 36 studies: about
  half succeeded, and those needed a **6.5 grade-level** swing. Charrow & Charrow's revisions improved
  comprehension **and worsened the readability score**, because they added connectives.
- **"More cohesion and explanation is always better."** False for experts (McNamara 1996, Yeung 1998).
- **"Signalling helps, so add some headings."** Half-signalled text produced **worse** recall of the
  unsignalled remainder than fully unsignalled text (Lorch 1989 — second-hand, flagged).
- **"Plain language always improves a document."** Swaney et al.: rewriting an insurance policy
  **increased** errors until examples were added.
- **"Cognitive load has three types; maximise germane load."** Retracted by its own authors.
- **"80% of serious medical errors involve handoff miscommunication."** Traces to an uncited two-page
  product-promotion news item.

## 3.6 The measurement problem, which comes before the style problem

McNamara et al. 1996 is the reason this section exists. **Whether you see an effect at all depends on
which level of comprehension you test.**

| You measure | You are testing | You will conclude |
|---|---|---|
| Free recall, fact-lookup, error rates on forms, time-to-answer | **Text base** | More coherence is simply better |
| Inference questions, transfer, problem-solving, conceptual sorting | **Situation model** | More coherence harms expert readers |

**Nearly the entire plain-language evidence base measures text-base comprehension.** That is exactly
right for forms, procedures, reference and API docs, where finding and applying a stated fact *is* the
task. It is not evidence about deep understanding.

**A framework that validates itself with fact-retrieval questions can claim findability. It cannot claim
understanding.** And the two acceptance thresholds available from this corpus — Kimble's "70–75 percent
comprehension overall" and Kelly & Balmford's ≥70% per question — are both text-base thresholds.

Three further cautions, each from a source that had every incentive to omit it:

- **Baseline dependence.** "the degree of improvement on a revised document will depend on how well the
  original scores" (Kimble). Large percentage deltas partly measure how bad the original was.
- **Perceived ease is not comprehension.** Kimble's statute test: difficulty rating improved ~41% while
  accuracy improved 17%. Brick et al.: d ≈ 0.4 on comprehension, **null** on felt-informedness.
  Gattis 2023: perceived cohesion up, task accuracy flat.
- **Aggregate scores hide item-level effects.** Cutts's Timeshare Act: 87% → 91% overall, 48% → 94% on
  the one question that mattered.

---

# Part 4 — What actually aids scanning

Scanning is not the enemy and it is not a degraded form of reading. It is the routing layer. NN/g's own
best example is a user who read one paragraph on duck behaviour exhaustively, because clear headings let
her find it, "while treating the other paragraphs to ruthlessly abbreviated scanning." **That is a
success.** The goal is not to make people read more. It is to let them find the one part they need and
read that properly.

## 4.1 The measured floor

- **Attention falls off a cliff after the third paragraph.** 81% / 71% / 63% / **32%** of users looking
  at paragraphs 1–4 (NN/g, 1.5M fixations). **A 31-point drop between 3 and 4. If a section runs more
  than three paragraphs before its next structural marker, the fourth is invisible to two thirds of
  readers.** This is the most useful number in this whole document and it is not the famous one.
- **Attention leans hard left and falls fast down.** 80% of fixations in the left half; only 6% in the
  leftmost 10%; **zero** right of the screen edge (120+ participants, 130,000+ fixations). 57% of
  viewing time above the fold, 74% in the first two screenfuls, 42% in the top 20% of the page.
- **Page visits are far shorter than the content.** Median 9.4 s; 52% under 10 s; pages under 12 seconds
  averaged 430 words — "**no person can read a full page of this length that quickly**" (Weinreich et
  al., 137,272 visits, peer-reviewed).
- **About 1 in 20 readers process a manual linearly** (Carroll & van der Meij 1996).

## 4.2 What buys scannability

**Layer-cake is the pattern you want, and it is purchasable.** Fixations land mostly on headings and
subheadings, with occasional deliberate drops into the body. Two preconditions, both required:
subheadings must be **easy to identify visually**, and they must **correctly summarise the section
below**. Decorative or clever subheadings destroy the mechanism.

**The F-pattern is a diagnostic, not a target.** Per NN/g's own 2017 reversal, the F appears exactly when
text has "little or no formatting for the web... a 'wall of text' but no bolding, bullets, or
subheadings", and responsive reflow makes the words it catches arbitrary. **If your content produces an
F, that is a bug report about your formatting.**

**The mechanisms with measured support:**

| Move | Evidence |
|---|---|
| Topic-identifying headings | Readers located target sentences faster with identifying than non-identifying headings (Lorch, Lemarié & Grant 2011) |
| Blank line between idea units | Shebilske & Rotondo 1981; Hartley, Burnhill & Davis 1978 |
| `**bold**` over ALL CAPS as a scan target | Poulton 1967 — bold lowercase located faster |
| Generous vertical spacing | Double > 1.5 > single for accuracy and speed on a **visual search** task (Ling & van Schaik 2007). This is the closest analogue to how docs are read |
| Tables for comparison | Brick et al. 2020 |
| Ragged right, never justified | Gregory & Poulton 1970 — no benefit for skilled readers, measurable harm for poor ones |

## 4.3 The counter-rules — things that cost scannability

These matter more than the positive list, because they are less known.

- **Signalling is zero-sum.** "virtually all types of signals produce better memory for information they
  cue... whereas memory for **unsignaled** information often is unaffected" (Lorch 1989). Emphasis is a
  budget, not a decoration. **Emphasising everything emphasises nothing**, and that is now an empirical
  claim rather than a slogan.
- **Partial signalling is worse than none.** Half-signalled text produced worse recall of the
  unsignalled remainder than fully unsignalled text. Signal completely or not at all.
- **Signalling does nothing on structurally simple text**, and cognitive load theory only applies to
  high element-interactivity material at all.
- **A heading is a promise about scope, and content outside it can become invisible.** Users given
  documents whose titles only partly reflect the content failed to identify the unrepresented topics
  (Eyrolle et al. 2008). **A misleading heading is worse than no heading.**
- **Bypassing.** If every list item starts with the same word, readers deliberately skip the start of
  every line — the exact position "front-load the information-carrying words" was relying on. Vary
  list-item openings.
- **Pull quotes and callouts terminate reading in progress.** Participants read linearly "until they hit
  a pull quote or inline ad. After reaching one of those elements, the participants **abandoned their
  reading and fell into light scanning**." Admonition boxes, banners and inline CTAs plausibly behave
  the same way. This cuts against NN/g's own house style, which is why it deserves weight.
- **Scannable formatting made memory worse in the one study that measured it** — normalised 94 against a
  control of 100, the only sub-100 cell in Morkes & Nielsen's table, never quoted.
- **Structuring costs length.** The one real-world test of structured writing produced a document
  **32% longer** and no faster to use.
- **Pre-emphasising takes the reader's job away.** Six of 36 participants objected to being told what
  mattered.

## 4.4 The tension, stated plainly

Scannability and comprehension are not the same objective and they are not always aligned.

- The **inverted pyramid** is the canonical scanning intervention. The one measured comparison against
  chronological structure found the front-loaded version produced **worse cognitive engagement**, and
  the mechanism offered is a "shortage of causal connections" forcing more inference.
- **Chopping sentences** improves every readability score and removes the connectives that carry the
  relationships. Charrow & Charrow's comprehension-improving revision **worsened** the score, because
  they added connective words.
- **Bulleting an argument** strips "because", "unless", "which means" — the same mechanism Davison et al.
  identified for chopped sentences.
- **Structure helps even committed readers**, so this is not a simple trade — "even for the commitment
  pattern, text comprehension is improved when the content is chunked."

**The resolution is not a compromise. It is that scanning aids and comprehension aids operate on
different parts of the document.** Headings, bold, blank lines, tables and lists are navigation
furniture and they are safe to maximise. Sentence structure, connectives, causal ordering and worked
examples are comprehension machinery and they must not be sacrificed to make the navigation furniture
denser. **Cut prose to reach the structure. Do not cut the connectives inside the prose that survives.**

---

# Part 5 — Rules for agent-to-human reporting

Derived from the operator literature, with the source named for each rule and the honest caveat that
these are **transfers** from domains with different failure costs. Where a rule rests on a real study
about agents rather than a transfer, it says so.

## 5.1 The convergences — worth more than any single source

Five things were arrived at independently by aviation regulators, process-safety engineers,
human-factors researchers, military doctrine writers, emergency services and site reliability
engineers, in different decades, without coordination.

| Convergent finding | Independent arrivals |
|---|---|
| **Three severity levels, no more** | FAA/EASA 25.1322 (Warning/Caution/Advisory); HSE guidance ("use about three priorities"); I-PASS (Stable/Watcher/Unstable); ECAM Level 1/2/3 |
| **Three levels of understanding: state → meaning → projection** | Endsley 1995; JESIP's Common Operating Picture questions; FM 6-99 SITREP lines 6 / 9 / 10; Chen et al.'s SAT model |
| **No alert without a defined response** | ISA-18.2 ("requiring a response"); EEMUA 191 ("no alarm without a predefined operator response"); AC 25.1322-1 5a; Google SRE ("every page should be actionable") |
| **Bottom line first** | AR 25-50 1-38b; FM 6-99 LINE 16; SBAR's S; I-PASS's I |
| **Report deviation from plan immediately** | ADP 6-0; FM 6-99 SITREP LINE 10; Boorman's checklist error modes |

Convergence across six unrelated fields is the strongest evidence available in a domain with no direct
studies. It is not proof, and it should not be dressed up as proof, but it is what there is.

## 5.2 The rules

### Grade every item on two axes, not one

Urgency of **awareness** and urgency of **response** are different variables. That is why Caution exists.

| Tier | Operator must know | Operator must act | Channel |
|---|---|---|---|
| **Warning** | Now | Now | Interrupt. Two channels |
| **Caution** | Now | Later, but certainly | Interrupt. Two channels |
| **Advisory** | Eventually | Maybe never | One channel, somewhere they already scan |
| **Status** | Never pushed | — | Queryable log only |

*Source: 14 CFR 25.1322(b), AC 25.1322-1 Appendix 5.* Most agent output is a flat stream that answers
neither question. The fourth row is the important one: **"Conditions that do not require flightcrew
awareness should not generate an alert."**

### Report at all three levels of understanding, always

1. **State** — what is the case.
2. **Meaning** — what it implies for the operator's goal.
3. **Projection** — what happens next, or what breaks if nothing changes.

*Sources: Endsley 1995; JESIP COP; FM 6-99 LINE 13's mandated "assessment of the mission impact";
Chen et al. SAT.*

**Level 2 is the level automation destroys.** Operators retain raw awareness and lose comprehension when
they delegate. So comprehension is precisely the part the agent must actively supply — it is the part
the operator gave up. An agent report that stops at Level 1 has done the easy part.

### Say what you did not do

**This is a hard requirement, not a nicety, and the reason is measured.** Skitka et al. 2000: training
reduced **commission** errors but **not omission** errors. **The operator cannot notice what you never
mentioned.** Omission is a design problem, not a training problem.

So: an explicit "not checked / not covered / assumed / deliberately skipped / out of scope" section.
Reinforced from a second direction by Miller 2019 — **explanations are contrastive**, so an account of
what was done without what was *not* done is answering a question nobody asked.

### Send early and incomplete; update

*Source: JESIP Joint Doctrine, explicitly.* "All the required information may not be available" is the
**expected** condition and you send anyway. Unknown fields are reported as unknown. "The information
received through multiple M/ETHANE messages will **gradually build**."

**The complete report that arrives after the decision window is worth nothing.** An agent that stays
silent until it has a full picture has optimised the wrong variable.

Corollary from PagerDuty: **always state when the next update is coming**, and never send a
content-less update just because the clock said so.

### Use fixed, ordered fields — because absence must be visible

*Sources: FM 6-99 (18 numbered lines); Stripe canonical log lines; RFC 5424.*

Position carries meaning. The receiver knows what LINE 7 is without reading LINE 6. And the property
that matters most: **a missing field in a fixed template is a visible gap, whereas a missing paragraph
in prose is invisible.** Free text goes last and clearly bounded (SITREP LINE 17), for what the
structure cannot carry.

### Escalate only what exceeds your own capacity to fix

*Source: FM 6-99 SITREP LINE 12 — report problems "beyond the commander's or service's capability to
overcome or alleviate in a timely manner."*

The cleanest escalation filter found anywhere. Problems the agent fixed itself go in the record, not in
the report. Problems that exceed its authority or capacity are the operator's business.

### Severity is contextual; recompute it against the operator's phase

*Source: AC 25.1322-1 para 8a(3) — "Depending on the phase of flight, there may be a need to
re-categorize certain alerts from a lower urgency level to a higher urgency level."*

The same failure is an advisory during exploration and a warning during a deploy. Severity is not a
property of the event.

### Inhibit by phase — and distinguish inhibit, suppress and clear

*Source: AC 25.1322-1 para 8d and para 9.*

**Inhibit** when the operator cannot act, or when interrupting them is itself the hazard — "when an
alert could cause a hazard if the flightcrew was distracted by or responded to the alert." Re-present
when the phase ends.

Three distinct states, and conflating them is where systems go wrong:

| State | Meaning |
|---|---|
| **Inhibit** | Never shown, for this phase |
| **Suppress** | Shown, then silenced |
| **Clear** | Dismissed, but recallable |

**Never silently delete. Always show that hidden items exist** — "a means should be provided to identify
if alert messages are stored (or otherwise not in view)." And any inhibit must carry a visible
indication that it is active.

And the evidential burden: if you suppress or delay, you must be able to show the suppression was safe.
Suppression is not a free optimisation.

### Collapse cascades

**Umbrella** — N symptoms, one cause: report the cause, suppress the symptoms. **Collector** — N related
items, no shared cause: report one grouped item. Keep the expansion path available in both cases.
*Source: AC 25.1322-1 Appendix 5.*

### Serialise the loud channel

One interrupting item at a time. Let it finish. Higher priority pre-empts, and the pre-empted item
repeats afterwards. *Source: AC 25.1322-1 para 8b.*

### Set a rate budget derived from handling time, and measure the peak

*Source: EEMUA 191 and its own commentary.*

"One per ten minutes" is a **time budget**, not a rate: it is the time to detect, diagnose, decide, act,
confirm, **and do the rest of the job**. Compute your own from `(operator attention available) ÷ (time
to handle one item)`.

**Never average over a long window.** "Six an hour" is satisfiable by 55 minutes of silence and six
items in ten seconds, which is the failure case. Measure the peak in the shortest meaningful window.

**Define your flood condition and change behaviour inside it.** In a flood the right move is to stop
enumerating and start summarising: one umbrella message and a pointer. The bands are worth internalising
even though they were set for control rooms: **under 10 items in the first ten minutes is manageable;
20–100 is hard to cope with; above 100 the operator abandons the system.**

**Track standing items.** Things that are always present are noise that trains the operator to ignore
the channel. Target: few.

### Treat your own nuisance rate as a safety parameter

*Sources: AC 25.1322-1 para 7e; Drew et al. 2014; Ewaschuk; Sadowski et al. 2015.*

**False** means your detector broke. **Nuisance** means your detector worked perfectly and the item was
still not worth the operator's attention. The second is the harder problem and it is the agent failure
mode.

The measured anchors: **88.8%** of expert-adjudicated ICU arrhythmia alarms were false positives, and
that system is regarded as broken. Ewaschuk: "**Alerts that are less than 50% accurate are broken; even
those that are false positives 10% of the time merit more consideration.**" Google's Tricorder removes
an analyser from the developer workflow if its false-positive rate exceeds roughly **10%**.

**Roughly 10% is the working threshold that two independent software organisations landed on. Use it
until something better exists.**

And the causal chain is regulatory text, not opinion: frequent low-value alerts → higher workload →
lower confidence → **degraded response to the alerts that matter**. The damage is not the wasted time.

### Address the operator, not yourself

*Source: ISA-18.2 via ABB — "The target audience of an alarm should be operators, not engineers,
maintenance technicians, or managers."*

Vast quantities of agent output are diagnostics addressed to the developer, emitted into a channel
watched by the operator. That is a category error, and it is the single most common one.

Reinforced by the multi-agent transparency interview study: developers need deep traces, users need
high-level summaries, and audit logs shown to non-technical users "confuse" them and produce
over-reliance without understanding. **Two audiences, two artefacts.** Which is the Control+ failure in
`research/00`, arriving from a different direction.

### Aim at calibrated trust, not high trust — and build resolution

*Source: Lee & See 2004.*

The report's job is to make the operator's confidence track the agent's **task-specific** competence,
including downward. Overtrust produces misuse; undertrust produces disuse; both are failures.

**Resolution matters more than calibration for a language model**, because competence varies wildly
between tasks that look alike. **State confidence per claim and per sub-task. Uniform confidence is
always wrong.** And expose all three bases: **performance** (what happened, how reliably), **process**
(how I went about it), **purpose** (what I was trying to do, and what I am not for). Most agent output
gives performance only.

### Hedge in the first person

**The one measured finding about agent prose in this document.** Kim et al. 2024, N = 404,
pre-registered: first-person uncertainty ("I'm not sure, but...") **decreased** agreement with the
system and **increased** user accuracy. Impersonal uncertainty ("It's not clear, but...") produced
weaker, non-significant effects.

**The precise wording matters, and first-person hedging outperforms impersonal hedging.**

### Make variance visible; do not launder a shaky result into a confident register

*Sources: Bainbridge 1983 (automation camouflages failure by absorbing it); Parasuraman & Riley 1997
(salience as a design variable).*

Surface the compensating effort — retries, fallbacks, workarounds, degraded paths — because **the trend
is the alarm** and automation hides it. Show target values alongside current ones: "3 tests failing"
without "expected 0" makes the operator supply the baseline from memory.

And: uncertainty buried in prose is functionally invisible. Over-reliance caused by low salience is the
designer's fault, not the operator's.

### Expect to be wrong plausibly

Billings, via Endsley: monitoring failure spikes "**when devices behave reasonably but incorrectly**."
That is the dominant failure mode of a language model, described before language models existed.

Design the report so that plausible-but-wrong is detectable: **surface the assumption that would have to
be true, not just the conclusion.**

### Do not rely on a second reviewer, or on the operator's word that they checked

*Source: Skitka et al. 2000.* Two-person crews were **equally** susceptible to automation bias as solo
performers, on both error types. And pilots "erroneously '**remember**' the presence of expected cues"
— they sincerely misremember having verified.

**Review-by-a-second-person is not a control, and verification must be a state the system observes, not
a claim the human makes.**

### Restate the operator's intent; never invent it

*Source: FM 6-0, OPORD Figure C-2 para 3a — "**Commanders develop their intent statement personally.**"*

Intent is the one thing that cannot be delegated. The agent's job is to **elicit, restate and check**.
Opening a report by restating what the agent understands the goal to be is doctrine, not politeness —
every OPORD restates the intent one *and* two levels up.

**And when intent is missing: infer it, act, document the inference, revise on receipt.** FM 6-0 A-6
explicitly authorises this. But it requires the assumption to be **stated**, not silently held.

### Structure intent as purpose, key tasks, end state — in three to five sentences

*Source: FM 6-0 para 9-75, verified in three separate places in primary doctrine.*

"Must be easy to remember and clearly understood by leaders **two echelons lower**. The shorter the
commander's intent, the better."

The agent-side test: **could a sub-agent, or a colleague of the operator who has not been in the
conversation, act correctly on this alone?**

### Report deviation as a named field

*Sources: ADP 6-0; FM 6-99 SITREP LINE 10.* "Subordinates inform their superiors as soon as possible
when they have deviated from orders." **Autonomy and disclosure are one mechanism, not two.** Deviation
gets a line item, not a buried confession.

### Make mute deliberate, and provide one

The suppression control "must not be readily available... so that it could be operated inadvertently or
by habitual reflexive action." **And**: "Pulling circuit breakers is not an acceptable primary means" —
if you do not provide a sanctioned mute, the operator will invent a destructive one.

Design assuming your operator will mute you, and make muting **safe and visible** rather than trying to
prevent it. A substantial share of fatal alarm-related sentinel events involved alarms that had been
inappropriately silenced.

### Explain contrastively and selectively

*Source: Miller 2019.* People ask "why P **rather than Q**", they are satisfied by one or two selected
causes, and **probabilities are not explanations**. An exhaustive causal account is a worse explanation,
not a better one.

Which means: a confidence percentage is not a substitute for saying what the agent considered and
rejected.

### Answer the three questions the receiver is actually asking

*Source: JESIP Common Operating Picture, which is Endsley's three levels reached independently.*

> "What is happening now and what is being done about it? / So what does all of that mean and what
> effects will it have? / What might happen next or in the future?"

Written for "busy decision makers who are under pressure", free of "acronyms and terms used by only one
agency."

### The format is not the intervention

*Sources: Urbach et al. 2014 (n = 215,711, both endpoints null after mandating the artefact without the
programme); Starmer et al. 2014 (the I-PASS effect came from a four-component programme, not a
mnemonic); USMC TACT 3020 — "it is the action that follows your order that counts, not the format
itself."*

**This is the caution that should sit over the whole of Part 5.** A template plus the training,
observation and sustained attention around it produced measurable reductions in medical error. The same
template mandated on its own, across 101 hospitals, produced nothing.

**Anything Weave ships as a report template must ship with the checks that enforce it, or it should be
labelled as a suggestion.** That is already this repository's stated position on rules
(`CONTRIBUTING.md`), and the strongest external evidence for it is a null result across 215,711
surgical procedures.

## 5.3 What none of this tells you

Stated so the gaps are not papered over.

- **How long an agent report should be.** No evidence. AR 25-50's "one page for most correspondence" is
  the nearest thing, and it is about memoranda.
- **Whether operators read agent reports at all**, and which parts. Nobody has measured it.
- **Whether structured or prose agent reports are better understood.** Untested.
- **Whether confidence should be numeric, verbal, or per-claim.** Kim et al. 2024 says the *phrasing* of
  verbal uncertainty matters; it does not compare formats.
- **How report frequency affects trust calibration over a long engagement.** Nothing.
- **What an agent should say when it is unsure whether to interrupt.** The aviation inhibition doctrine
  is the closest analogue and it assumes known, enumerable flight phases.

---

# Part 6 — Where Diátaxis is silent, and what fills the gap

## 6.1 The silences, with a replacement for each

| Diátaxis says nothing about | Filled by | Status |
|---|---|---|
| **Ordering within a mode** | Conditions before instructions (four sources agree, `research/03` §2.15). Bottom line up front (AR 25-50 1-38b). Escalation filter = beyond own capacity (FM 6-99 LINE 12) | REGULATORY + convergent convention |
| **Density** | Paragraph-position cliff: 81/71/63/**32%** (NN/g, 1.5M fixations). AR 25-50: ~15-word sentences, ≤10-line paragraphs, one page. Long-form threshold >1,000 words (NN/g) | One measured, rest regulatory |
| **The reader who does not read** | ~1 in 20 read linearly (Carroll & van der Meij 1996). Median visit 9.4 s on 551-word pages (Weinreich et al.). Layer-cake as the target pattern; F-pattern as the diagnostic | MEASURED |
| **Visual and structural form** | Headings (Hartley & Trueman; Lorch & Lorch; Lemarié et al.). Tables **d ≈ 0.4** (Brick et al., N=2,305). Lists for procedures (Morrow & Leirer). Blank-line segmentation + emphasis (Shebilske & Rotondo). Bold over caps (Poulton) | MEASURED |
| **Prior knowledge and expertise reversal** | Sweller 2019; Kalyuga 2003; McNamara 1996; Redish's 102%/29% split. **Text difficulty is a relation, not a property** | MEASURED, four literatures |
| **A test** | ISO 24495-1: "The only way to be sure a document is working for its readers is to ask them." Penman 1993, conceded by Kimble. Acceptance threshold: **70–75% comprehension** (Kimble), ≥70% per item (Kelly & Balmford). Redish: usability testing, "even testing with a few people is much more informative than a readability score" | The field's own answer |
| **Required components per type** | Horn's "key blocks" — a concept owes you definition + example (+ optional non-example). **Diátaxis names four types and specifies no required parts for any of them** | RECEIVED WISDOM, but mechanically useful |
| **What a layer is** | Farkas: "**true layering exists when the channels through the document are part of an explicit strategy for accommodating selective reading.**" Headings are not layering | RECEIVED WISDOM, sharply stated |
| **The reading act, as distinct from the document type** | van der Meij & Carroll principle 4: **reading to do / to study / to locate**. Diátaxis types the document; this types the act | The single best structural addition available |
| **The doorway artefact** | Nothing adequate. Recorded as an open problem in `research/03` §1.7 and unresolved here | Gap |
| **The agent-to-human report** | §6.2 | Gap, and the important one |

## 6.2 The report has no cell, and the compass gives the wrong answer

Run an agent status report through the Diátaxis compass. It informs cognition. It serves the
application of skill, not its acquisition. Therefore: **reference**.

That is wrong in every particular.

| Reference, per Diátaxis | An agent-to-operator report |
|---|---|
| Atemporal — describes the machinery as it is | **Time-indexed.** True at 14:03 and possibly false at 14:11 |
| Complete — mirrors the structure of the thing it documents | **Deliberately incomplete.** "All the required information may not be available" is the expected condition (JESIP) |
| Neutral, austere, no evaluation | **Evaluative by construction.** Level 2 of situation awareness *is* an assessment. LINE 13 of a SITREP mandates "assessment of the mission impact" |
| Consulted on demand | **Pushed**, and the pushing is the decision. Warning, Caution and Advisory are three different push behaviours |
| Read by a practitioner at work | Read by an **operator under load** who has delegated the work and lost Level 2 awareness by delegating it (Bainbridge) |
| Blur is repaired by splitting the document | **A single message cannot be split.** Every Diátaxis remedy is a corpus-level remedy, and a report is a stream with one shot |
| Success = the fact is findable | Success = **"understood by the reader in a single rapid reading"** (AR 25-50) and "sufficient information for the receiving facility to act on the report" (FM 6-99) |

**The deeper mismatch is that Diátaxis governs a corpus and a report is a stream.** Diátaxis's central
prescription for a document trying to do two jobs is to make it two documents. That option does not
exist for a message. Its central quality mechanism is iteration over a growing body of pages. A status
report is written once, read once, and superseded.

**And Diátaxis has no vocabulary for the two decisions that dominate agent reporting.** Whether to
report at all — the whole of aviation's "conditions that do not require flightcrew awareness should not
generate an alert", ISA-18.2's "requiring a response", and Google SRE's "every page should be
actionable". And how loudly — the Warning/Caution/Advisory axis, and the inhibition doctrine that
withholds true information when the timing makes it harmful.

Those are not gaps in Diátaxis's coverage. They are outside its territory, because its axes are derived
from a practitioner's relationship to their craft, and an operator supervising an agent is not in that
relationship at all.

## 6.3 What a replacement axis would have to be

Three candidates emerged, and the third is the one to take.

1. **Reading act, not document type** — doing / studying / locating (van der Meij & Carroll). Useful and
   underused, but still about a reader consulting a corpus.
2. **Reader expertise** — the crossover in McNamara, Kalyuga and Redish. Real, measured, and it says the
   same document cannot serve both ends. But it is a parameter, not an axis.
3. **Urgency of awareness × urgency of response** — the two axes underneath 14 CFR 25.1322. **This is
   the closest thing found to a Diátaxis-shaped derivation for the reporting surface**: two independent
   binary-ish variables, crossed, generating a small closed set of categories, each with different
   obligations on the writer, and derived from the structure of the operator's situation rather than
   from the shape of documents.

It even generates the fourth cell Diátaxis-style frameworks usually lose. Know-now × act-now is a
Warning. Know-now × act-later is a Caution. Know-later × maybe-act is an Advisory. **Know-never ×
act-never is Status, and its rule is that it is never pushed and always retrievable.** That fourth cell
is where most agent output belongs and where almost none of it goes.

Whether that generalises beyond reporting to the whole of what an agent writes is not established here.
It is the most promising thing this research turned up.

---

# Part 7 — Every rule, split checkable versus judgement

Per `CONTRIBUTING.md`: **checkable** ships with the check that enforces it, or it is a suggestion.
**Judgement** ships as guidance, explicitly labelled unenforceable. The f3 evidence quoted there is the
reason the split matters — sections a validator hard-fails on appear in ~80% of tickets; sections it
merely warns about appear in 6–11%.

## 7.1 Checkable — a linter or a template validator can enforce these

| # | Rule | Check | Source |
|---|---|---|---|
| C1 | No more than three paragraphs before the next structural marker | Count paragraphs between headings, lists, tables and code blocks | NN/g paragraph-position cliff, 81/71/63/**32%** |
| C2 | Every heading is topic-identifying — reject "Overview", "Notes", "Details", "Introduction", "Miscellaneous" | Deny-list plus a check that the heading contains a content noun | Lorch, Lemarié & Grant 2011 |
| C3 | Heading coverage is complete or absent within a document — no half-signalled documents | Compare headed against unheaded body length | Lorch 1989 (second-hand; flagged) |
| C4 | Emphasis budget: bold under 30% of body text | Ratio of emphasised to total words | NN/g 2023 (no derivation — a plausible cap on a real mechanism) |
| C5 | No ALL-CAPS runs used as emphasis | Regex for capitalised spans over ~3 words | Poulton 1967 |
| C6 | Conditional and comparative information with three or more dimensions is a table, not prose | Detect enumerated conditions in running prose | Brick et al. 2020 |
| C7 | Procedures, steps, options and conditions are lists | Detect ordinal prose sequences | Morrow & Leirer 1998 |
| C8 | Blank line between idea units; no wall paragraphs | Paragraph word count and blank-line density | Shebilske & Rotondo 1981 |
| C9 | No hard-wrapped prose in Markdown source | Detect fixed-column wrapping in prose blocks | Line-length nulls plus reflow and accessibility |
| C10 | Never emit justified text; never centre body text | CSS and renderer config | Gregory & Poulton 1970 |
| C11 | List items do not all start with the same word | Compare first tokens across siblings | NN/g bypassing pattern |
| C12 | No readability score is reported as a quality claim | Grep the output for grade-level and Flesch claims | Klare 1976; Redish 2000 |
| C13 | Every quantified claim carries its cost or its counter-evidence | Detect a number with no adjacent qualifier | Linux kernel submitting-patches |
| C14 | Sentence average ≈15 words; paragraphs ≤10 lines, in **report** mode only | Word and line counts, mode-scoped | AR 25-50 1-39b |
| C15 | No sentence in a report opens with "It is", "There is", "There are" | Regex | AR 25-50 1-39b(8) |
| C16 | Every report carries a severity tier from a closed set of three, plus Status | Enum validation | 14 CFR 25.1322(b) |
| C17 | Every reported item has a named operator action, or it is demoted to Status | Field presence check | ISA-18.2; AC 25.1322-1 5a; Google SRE |
| C18 | Every report has a "not checked / assumed / out of scope" section, and it is non-empty or explicitly "nothing" | Field presence check | Skitka et al. 2000; Miller 2019 |
| C19 | Report fields are fixed and ordered; unknown fields are emitted as "unknown", never omitted | Template validation | FM 6-99; JESIP |
| C20 | Every report states when the next update is due, or that there will not be one | Field presence check | PagerDuty |
| C21 | Deviation from the stated plan is a named field, not prose | Field presence check | ADP 6-0; FM 6-99 LINE 10 |
| C22 | Confidence is stated per claim, not once per document | Detect a single document-level confidence statement | Lee & See 2004 (resolution) |
| C23 | Hedges are first-person ("I'm not sure...") rather than impersonal ("It's not clear...") | Regex over hedge constructions | Kim et al. 2024, N=404 |
| C24 | Nuisance rate is measured and reported; items above ~10% dismissal get demoted or removed | Instrument dismiss-versus-act signals | Sadowski et al. 2015; Ewaschuk |
| C25 | Peak item rate in the shortest meaningful window, never a long-window average | Rolling window over emitted items | EEMUA 191 commentary |
| C26 | Nothing is silently deleted; hidden or inhibited items carry a visible indicator | State-machine check over inhibit / suppress / clear | AC 25.1322-1 para 9, 8d(4) |
| C27 | One interrupting item at a time | Serialisation check on the loud channel | AC 25.1322-1 8b |
| C28 | Working notes and deliverables are physically separated | Path and VCS boundary | `research/00` failure 4 |
| C29 | Intent statements are 3–5 sentences and contain purpose, key tasks, end state | Sentence count plus field presence | FM 6-0 9-75 |
| C30 | No unsourced statistic. Every number carries a citation or is deleted | Detect bare percentages | Myhill/Lin; the whole of §3.5 |

## 7.2 Judgement — ships as guidance, explicitly unenforceable

| # | Rule | Why it cannot be checked | Source |
|---|---|---|---|
| J1 | Write to the reader's actual prior knowledge; a single document for a mixed-expertise audience is choosing whom to harm | No machine knows the reader's expertise | Sweller 2019; Kalyuga 2003; McNamara 1996 |
| J2 | Fade guidance as expertise rises; do not add cohesion for expert readers | Same | Renkl & Atkinson 2003; Yeung et al. 1998 |
| J3 | Keep domain jargon; kill organisational and branded jargon | The boundary is a judgement about the field | NN/g 2017 |
| J4 | Do not explain what the reader should already know — it signals the document is not for them | Same | NN/g 2017 |
| J5 | A heading is a promise about scope. If a section holds a caveat the heading does not imply, fix the heading or hoist the caveat | Requires reading both | Eyrolle et al. 2008 |
| J6 | Cut prose to reach the structure; do not cut the connectives inside the prose that survives | A regex cannot tell a load-bearing "because" from a filler one | Charrow & Charrow 1979; Davison et al. 1980 |
| J7 | Do not bullet an argument | No controlled evidence either way; Tufte is a polemic | Tufte 2003 |
| J8 | Layer by cutting to the bone and putting the offcuts behind a marked channel. For each layer, name which reader stops there and why | Requires an audience model | Farkas 1998 |
| J9 | Hold one altitude per page. When the draft wants to drill down, create a child page | Judgement about altitude | Baker 2013 |
| J10 | Link on subject affinity, and prefer generated links to hand-curated ones | Affinity is semantic | Baker 2013 |
| J11 | Establish context in one or two sentences, locating the subject in the world, not in the doc tree | Judgement about what the world is | Baker 2013 |
| J12 | Pre-emphasising takes the reader's job away. Weigh it | An explicit unresolved tension, not a rule | Shebilske & Rotondo's six dissenters |
| J13 | Severity is contextual — recompute against the operator's current phase | Requires knowing the phase | AC 25.1322-1 8a(3) |
| J14 | Inhibit when the report itself would be the hazard | Requires judging the hazard | AC 25.1322-1 8d(2)(a) |
| J15 | Escalate only what exceeds your own capacity to fix | Requires knowing your own capacity | FM 6-99 LINE 12 |
| J16 | Address the operator, not yourself. Two audiences, two artefacts | Requires knowing who reads the channel | ISA-18.2; the Catch-22 study |
| J17 | Restate the operator's intent; never invent it. When it is missing, infer, act, document, revise | Judgement about what was meant | FM 6-0 A-6 and C-2 3a |
| J18 | Explain contrastively — say what you did not do and why — and selectively | Selecting the right one or two causes is the whole skill | Miller 2019 |
| J19 | Surface the assumption that would have to be true, not just the conclusion | Requires knowing which assumption is load-bearing | Bainbridge 1983 |
| J20 | Report the compensating effort — retries, fallbacks, degraded paths — because the trend is the alarm | Judgement about what counts as compensation | Bainbridge 1983 |
| J21 | Test on real readers. It is the only way to be sure | Not a property of text | ISO 24495-1; Penman 1993; Redish 2000 |
| J22 | Do not treat brevity as the objective | Kimble's own winning example was not shorter | Kimble 1996 |
| J23 | Assume the iterative usability testing will not happen, and design for that | Organisational, not textual | Farkas 1998 |
| J24 | The format is not the intervention. A template without its programme does nothing | The programme is people | Urbach 2014; Starmer 2014 |

## 7.3 Two things that look checkable and are not

**"Reading level."** It is trivially computable and it measures the wrong object. Klare's own review:
about half of 36 attempts to improve comprehension by improving the score succeeded, and those needed a
6.5 grade-level swing. Charrow & Charrow improved comprehension and **worsened** the score. Schriver
scrambled a passage's sentence order and got the **identical** 60.6. Five tools computing the same
Flesch-Kincaid on the same passages disagreed by up to two grade levels. And the formulas count
sentences period-to-period, so lists and tables — the two best-evidenced interventions in this document
— register as long sentences.

**A very poor score is a red flag worth surfacing. Anything beyond that is misuse, and every formula's
author says so.**

**"Word count."** Available, tempting, and it points the wrong way often enough to be dangerous.
Structuring made the one real-world test document **32% longer** and more accurate to use. Kimble's
preferred jury instruction is no shorter than the original. Duffy & Kabance halved the grade level across
four experiments and got nothing. Minimalism's 1/8 size reduction was a **consequence** of task-anchored
deletion, not a target — and it cost 30% more to produce.

Cut what the reader does not need. That has d = 0.86 behind it. Cutting to a number does not.

---

# Part 8 — Sources, link status, and what could not be obtained

## 8.1 The true count

**117 distinct URLs are cited in this file and every one was fetched.** Roughly forty further works are
cited by citation only — paywalled, out of print, or reached through a secondary source that read them.
Those are flagged inline as second-hand wherever a claim rests on them.

The count is not the point. **Of the sources here, the ones with real controlled evidence behind them
number eighteen**, and they are worth naming, because everything else in this document either
rests on them, contradicts folklore, or is convention:

Carroll et al. 1987 · Brick et al. 2020 · Shebilske & Rotondo 1981 · McNamara et al. 1996 ·
Kalyuga et al. 2003 · Sweller et al. 2019 · Mayer & Fiorella 2014 · Delgado et al. 2018 ·
Clinton 2019 · Weinreich et al. 2008 · Duffy & Kabance 1982 · Taylor et al. 2020 · Xie et al. 2018 ·
Wery & Diliberto 2017 · Kim et al. 2024 · Drew et al. 2014 · Starmer et al. 2014 · Urbach et al. 2014.

Everything else is a guideline, a regulation, a craft manual, a vendor claim, or an uncontrolled
practitioner study.

## 8.2 Dead links, and the ones that lie about being dead

The last category is the dangerous one: URLs that return HTTP 200 and serve something other than the
document.

| URL | Status |
|---|---|
| `http://www.bobhorn.us/*` | **Entire domain suspended.** Every citation to Robert Horn's own site is dead |
| `http://blogs.elon.edu/mhm/files/2017/03/Media-History-Monographs-Volume-1.pdf` | **HTTP 200, silently serves the Elon University homepage.** This is the URL in every citation of Errico et al. |
| `https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN*-ADP_6-0-*.pdf` | **HTTP 200 with a 1,226-byte HTML error page.** armypubs rotates ARN filenames and old links rot silently |
| `https://www.jesip.org.uk/methane/` | **404.** Live page is `/joint-doctrine/early-stages-of-an-incident-m-ethane/` |
| `https://www.nngroup.com/articles/reading-content-mobile-devices/` | **404** — and it is linked from NN/g's own related-articles list |
| `https://response.pagerduty.com/during/status_updates/` | **404.** Status-update guidance lives under `/during/external_communication_guidelines/` |
| `usabilitynews.org` (SURL archive) | **Defunct.** Chaparro et al. 2004 and Bernard et al. 2002 are no longer available at source; exact n and effect sizes are unrecoverable |
| `https://www.renevanmaarsseveen.nl/.../effectief lezen van scherm.pdf` | **404.** Was the only full-text mirror of Dyson & Haselgrove 2001 |
| `https://www.simplificationcentre.org.uk/blog/try-to-forgetica` | **404** |
| `https://legible-typography.com/en/about` | **404** (the rest of the site is live and excellent) |
| `https://webstyleguide.com/wsg3/8-typography/2-legibility.html` and `/1-characteristics-of-type.html` | **404.** Use `https://webstyleguide.com/9-typography.html` |
| `https://www.microsoft.com/.../MSR-TR-2012-83.pdf` | **404.** Bacchelli & Bird is live at `https://sback.it/publications/icse2013.pdf` |
| `http://www.languageandlaw.org/JURYINST.HTM` | **Connection refused** |
| `https://core.ac.uk/download/pdf/69995.pdf` | **404.** Was an open copy of Cowan 2001 |
| Skitka's UIC publications page | **ECONNREFUSED** |
| `plainlanguage.gov/guidelines/*` | **301s to a Digital.gov landing page.** Content survives at `github.com/GSA/plainlanguage.gov` (`research/03` §2.13) |

**Bot-blocked but retrievable by another route**, worth recording because it wastes time otherwise:
eCFR 302s to a block page but the renderer API works with a browser user-agent. The FAA Advisory
Circular PDF 403s to one fetcher and works via curl. Poynter 403s to curl and works via WebFetch. TIME
returns 406 to curl and works via WebFetch. Springer 303s open-access articles to an auth wall.
ResearchGate, Academia.edu, SAGE, Taylor & Francis, Wiley, ACM DL, IEEE Xplore, JSTOR, Emerald, APA
PsycNet, MIT Press and Carolina Academic Press all 403 automated fetches.

**Paywalled standards, not obtained:** EEMUA 191 (values sourced from a secondary quoting page numbers),
ISA-18.2, IEC 62682, ISO 24495-1, NATO APP-11.

## 8.3 Numbers that could not be verified — do not cite these

- **Wright & Reid (1973)** — the canonical if/then table study. **No open copy exists anywhere and no
  citing source reproduces its numbers.** Cite it as a citation. The title often given as "The
  instructions clearly state... Can't people read?" **could not be confirmed.**
- **"0.24 slope"** in Nielsen 2008. Searched the live page, the archived 2008 PDF and both chart images.
  **It does not exist.** The published coefficients are 0.044 and −0.34.
- **"80% of serious medical errors involve handoff miscommunication."** Traced to an uncited two-page
  product-promotion item in *Joint Commission Perspectives*, August 2012.
- **"Whitespace improves comprehension by 20% (Lin 2004)."** Fabricated; author denies it on the record.
- **Skitka, Mosier & Burdick (1999) percentages.** Paper closed-access; findings above are qualitative
  only.
- **"46% error reduction" for Boeing electronic checklists.** Not present in Boorman 2001.
- **Lorch (1989) full text.** Springer 303s; Semantic Scholar's abstract is elided by the publisher. The
  half-signalling harm finding is second-hand and it is the weakest link in this document that still
  drives a rule (C3).
- **Bailin & Grafstein (2001) full text.** Cited as a citation only.
- **Dyson & Haselgrove (2001) full text.** All five access routes 403 or 404; findings second-hand from
  three independent readers, two of whom draw different emphasis from it.
- **Carroll & Rosson (1997)**, the source of "no empirical evidence exists regarding the effectiveness
  of progressive disclosure". Quoted at one remove; primary not retrieved.
- **Morrow & Leirer (1998) effect sizes.** PubMed cookie-walls automated fetch; direction only.
- **Boeing EICAS and Airbus ECAM implementation detail.** Trade and encyclopaedic sources only.
- **Chaparro et al. (2004) whitespace study n and effect sizes.** Original host defunct; direction only.
- Any Information Mapping percentage attributed to "Horn's study at Harvard and Columbia universities."
  **No such study produced them**, and the vendor's own two documents give 30% and 57% for the same
  metric.

## 8.4 What this changes elsewhere in the repository

- **`research/03` Part 1 should carry a forward reference to §1.2 here.** Its §1.7 records that Diátaxis
  has no slot for the doorway artefact, correspondence or changelogs. The larger silence is that it has
  no theory of reception at all, and that is now documented.
- **`research/03` §2.14's numbers table needs an evidence column.** Several of its rows are traceable to
  the sources demolished here — the 79%/16% row is 15 and 3 people out of 19; the 18%/28% row is a
  marginal rate and a hypothetical ceiling from 25 people's browser logs; the reading-level rows rest on
  a criterion of 50% of readers getting 50% correct. The table is a good collection of *what the sources
  say*. It should not read as a collection of *what is true*.
- **The linter's mode set is missing a mode.** `src/modes.mjs` has six, derived from `research/03` §3.5,
  and none of them is a report from an agent to its operator. Part 6.2 argues that this artefact is
  outside the Diátaxis-derived taxonomy entirely, and Part 5 supplies its rules.
- **`research/08`'s recommendation stands and is reinforced.** The four costs should be relabelled from
  a diagnosis to a hypothesis about repair. Nothing here rescues them as a detector, and §3.6 adds a
  reason to be careful about how any future test is scored: fact-retrieval questions can validate
  findability and cannot validate understanding.
- **One rule should be added to `context/working-conventions.md`-style house conventions:** no unsourced
  statistic in any output. The Lin/whitespace case has a full provenance chain and an on-the-record
  denial, and it is in circulation because nobody checked. §3.5 is a list of numbers this project should
  refuse to emit.

## 8.5 The three things worth remembering if nothing else survives

**1. There is no such thing as "the clear version" of a document.** Clarity is a relation between text
and reader knowledge. Four literatures agree, one of them by finding that the recommended intervention
actively harms half the audience. Every rule in Part 3 that is not conditioned on the reader is
conditioned on the reader implicitly, and hiding that is where the field goes wrong.

**2. Scanning is the routing layer, not the failure.** The goal is not more reading. It is letting a
reader find the one part they need and read that properly. Headings, blank lines, bold, lists and tables
are navigation furniture and they are cheap and well-evidenced. The connectives inside the surviving
prose are comprehension machinery and they are the thing that gets destroyed when a document is
optimised for scannability.

**3. The report is an act, not a description.** JESIP: "Declaring a 'major incident' **triggers** a
predetermined strategic and tactical response." FM 6-99: sufficiency is defined by "the receiving
facility's ability to act on the report." AC 25.1322-1: conditions that require no awareness generate no
alert. **An agent report is not a record of what happened. It is a request for a decision, or it should
not have been sent.**
