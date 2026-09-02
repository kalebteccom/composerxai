# Diátaxis, the documentation frameworks around it, and a prose framework for AI-generated text

Research note. Three parts:

1. **Diátaxis, read in full** — every page of diataxis.fr, including the theory and quality pages.
2. **Comparable sources** — Google, Microsoft, Write the Docs, The Good Docs Project, Divio, Procida's originals, Docs for Developers, README/ADR/changelog/API conventions, plain-language standards. URL, what it is, transferable rules.
3. **Ledger** — a prose framework for AI-generated text, built in the shape of Diátaxis but aimed at a different failure.

Part 3 is the deliverable. Parts 1 and 2 exist to earn it.

---

# Part 1 — Diátaxis

Source: <https://diataxis.fr/>. Author: Daniele Procida. Pages read: home, start-here, application, tutorials, how-to-guides, reference, explanation, theory, foundations, compass, map, quality, how-to-use-diataxis (workflow), tutorials-how-to, reference-explanation, colophon, news.

Diátaxis, from Ancient Greek διάταξις: *dia* ("across") and *taxis* ("arrangement"). It claims to solve three problems at once: **content** (what to write), **style** (how to write it), and **architecture** (how to organise it).

## 1.1 The two axes, and why they generate exactly four modes

The four modes are not a list. They are the four quadrants of a 2×2, and the whole theoretical weight of Diátaxis rests on the claim that the 2×2 is *closed* — that the two axes do not merely cover the territory, they **define** it.

The user Diátaxis serves is "the practitioner in a domain of skill". A domain of skill is defined by a craft. So the axes are derived from the structure of craft itself, not from the structure of documents:

**Axis 1 — action / cognition.**
> "A skill or craft or practice contains both action (practical knowledge, knowing how, what we do) and cognition (theoretical knowledge, knowing that, what we think). The two are completely bound up with each other, but they are counterparts, wholly distinct from each other, two different aspects of the same thing."

**Axis 2 — acquisition / application.**
> "the relationship of a practitioner with their practice is that it is something that needs to be both acquired, and applied. Being 'at work' (concerned with applying the skill and knowledge of their craft) and being 'at study' (concerned with acquiring them) are once again counterparts, distinct but bound up with each other."

Cross them and you get a map of the *territory of craft*. Ask what documentation must be to serve each quarter, and you get the map of *documentation*:

| need | addressed in | the user | the documentation |
|---|---|---|---|
| learning | tutorials | acquires their craft | informs action |
| goals | how-to guides | applies their craft | informs action |
| information | reference | applies their craft | informs cognition |
| understanding | explanation | acquires their craft | informs cognition |

The completeness claim, stated flatly:

> "This is a complete map. There are only two dimensions, and they don't just cover the entire territory, they define it. This is why there are necessarily four quarters to it, and there could not be three, or five. It is not an arbitrary number."

And:

> "This is why there are four and only four types of documentation. There is simply no other territory to cover."

This matters for Part 3. Diátaxis earns its four by an argument from the structure of craft. Any framework that copies the *form* without an equivalent derivation is borrowing the aesthetics of rigour, not the rigour. I say so explicitly later.

## 1.2 The four modes — what each demands and forbids

### Tutorials — learning-oriented

> "A tutorial is an **experience** that takes place under the guidance of a tutor."

Purpose is *not* to help the user get something done. It is to help them learn. "It's important to understand that while a student will learn by doing, what the student does is not necessarily what they learn."

The contract is asymmetric: "nearly all the responsibility falls upon the teacher... There is no responsibility on the pupil to learn, understand or remember."

The exercise must be **meaningful** (a sense of achievement), **successful** (completable), **logical** (the path makes sense), **usefully complete** (an encounter with every action, concept and tool the learner must become familiar with).

Named anti-pedagogical temptations to resist: **abstraction/generalisation, explanation, choices, information.**

Key principles:
- **"The first rule of teaching is simply: don't try to teach."** Provide an experience through which learning happens.
- **Show the learner where they'll be going.** "In this tutorial we will create and deploy a scalable web application." Explicitly *not* "In this tutorial you will learn…" — "which is presumptuous and a very poor pattern."
- **Deliver visible results early and often.** "Every step the learner follows should produce a comprehensible result, however small."
- **Maintain a narrative of the expected.** "You will notice that…"; "After a few moments, the server responds with…". Flag likely failure signs in advance. Warn about surprising output volumes.
- **Point out what the learner should notice.** Observation is an active part of craft and is usually neglected.
- **Target the feeling of doing** — purpose, action, thinking and result joined up.
- **Encourage and permit repetition.** "Repetition is not the best teacher — sometimes it's the only teacher."
- **Ruthlessly minimise explanation.** "We're using HTTPS because it's more secure" is enough; link out. "Explanation is only pertinent at the moment the user wants it. It is not for the documentation author to decide."
- **Focus on the concrete.** "All learning moves in one direction: from the concrete and particular, towards the general and abstract."
- **Ignore options and alternatives.**
- **Aspire to perfect reliability.** "You are required to be present, but condemned to be absent." Flaws are found only by watching real users.

The language of tutorials (verbatim patterns):
- "We…" — first-person plural affirms the tutor/learner relationship.
- "In this tutorial, we will…"
- "First, do x. Now, do y. Now that you have done y, do z." — no room for ambiguity or doubt.
- "We must always do x before we do y because… (see Explanation for more details)."
- "The output should look something like…"
- "Notice that… Remember that… Let's check…"
- "You have built a secure, three-layer hylomorphic stasis engine…" — describe and mildly admire what the learner accomplished.

### How-to guides — goal-oriented

> "How-to guides are **directions** that guide the reader through a problem or towards a result."

Scope test: "how to calibrate the radar array"; "how to use fixtures in pytest"; "how to configure reconnection back-off policies" — yes. "How to build a web application" — no, "that's a vastly open-ended sphere of skill."

**The perspective rule.** "How-to guides must be written from the perspective of the user, not of the machinery." The failure pattern is defining guides by operations the tool can perform:
- "To shut off the flow of water, turn the tap clockwise."
- "To deploy the desired database configuration, select the appropriate options and press Deploy."

> "The examples above look like examples of guidance, but they are not." They are disconnected from purpose. What the user needs is "how much water to run, and how vigorously to run it, for a certain purpose" — "what database configuration options align with particular real-world needs".

> "How-to guides are about goals, projects and problems, not about tools. Tools appear in how-to guides as incidental bit-players, the means to the user's end."

Characteristics: focused on tasks or problems; assume the user knows what they want to achieve; **action and only action**; no digression, explanation, teaching.

Other principles:
- **Address real-world complexity.** Stay adaptable; a guide useless outside one narrow case is rarely valuable.
- **Omit the unnecessary.** "practical usability is more helpful than completeness." Unlike a tutorial it need not be end-to-end: "It should start and end in some reasonable, meaningful place."
- **Provide a set of instructions** in the form of a contract. "'Actions' in this context includes physical acts, but also thinking and judgement."
- **Describe a logical sequence.** Ordering is sometimes forced by dependency, sometimes chosen because one step "helps set up the user's working environment or even their thinking" for another.
- **Seek flow.** Watch context-switching, pace and rhythm. "How long do you require the user to hold thoughts open before they can be resolved in action?" At its best: "the documentation equivalent of a helper who has the tool you were about to reach for, ready to place it in your hand."
- **Naming.** good: "How to integrate application performance monitoring". bad: "Integrating application performance monitoring" (whether, or how?). very bad: "Application performance monitoring".
- A how-to is **not** merely procedural. "The sequences of action in a how-to guide sometimes need to fork and overlap, and they have multiple entry and exit-points."

Language: "This guide shows you how to…" · conditional imperatives, "If you want x, do y. To achieve w, do z." · "Refer to the x reference guide for a full list of options."

Analogy: a recipe. "A good recipe follows a well-established format, that excludes both teaching and discussion."

### Reference — information-oriented

> "Reference guides are technical descriptions of the machinery and how to operate it."

> "The only purpose of a reference guide is to describe, as succinctly as possible, and in an orderly way. Whereas the content of tutorials and how-to guides are led by needs of the user, reference material is led by the product it describes."

> "It should be austere. One hardly reads reference material; one consults it. There should be no doubt or ambiguity in reference; it should be wholly authoritative."

Style and form: **austere and uncompromising; neutrality, objectivity, factuality; structured according to the structure of the machinery itself.**

- **Describe and only describe.** "Neutral description is the key imperative." And the honest admission: "one of the hardest things to do is to describe something neutrally. It's not a natural way of communicating. What's natural on the other hand is to explain, instruct, discuss, opine."
- **Adopt standard patterns.** "Reference material is useful when it is consistent." And, pointedly: **"There are many opportunities in writing to delight your readers with your extensive vocabulary and command of multiple styles, but reference material is definitely not one of them."**
- **Respect the structure of the machinery.** Documentation structure mirrors product structure, like a map to territory.
- **Provide examples** — "a succinct way of illustrating it and its context, without falling into the trap of trying to explain or instruct."

Language: state facts ("Django's default logging configuration inherits Python's defaults…") · list commands, options, flags, limitations, error messages · "You must use a. You must not apply b unless c. Never d."

Analogy: the information panel on food packaging. "You will certainly not expect to find for example recipes or marketing claims mixed up with this information; that could be literally dangerous. The way reference material is presented on food products is so important that it's usually governed by law, and the same kind of seriousness should apply to all reference documentation."

### Explanation — understanding-oriented

> "Explanation is a discursive treatment of a subject, that permits reflection."

"The perspective of explanation is higher and wider than that of the other three types." Its scope is "a topic — 'an area of knowledge'". It answers "Can you tell me about…?" It is "the only kind of documentation that it might make sense to read in the bath."

- **Make connections** — including outside the immediate topic.
- **Provide context** — "design decisions, historical reasons, technical constraints".
- **Talk about the subject.** Things to discuss: the bigger picture; history; choices, alternatives, possibilities; why — reasons and justifications. Title test: you should be able to put an implicit *about* in front of it. "About user authentication."
- **Admit opinion and perspective.** "all human activity and knowledge is invested within opinion… Explanation can and must consider alternatives, counter-examples or multiple different approaches to the same question." Think of it as **discussion**.
- **Keep explanation closely bounded.** "One risk of explanation is that it tends to absorb other things."

Language: "The reason for x is because historically, y…" · "W is better than z, because…" · "An x in system y is analogous to a w in system z. However…" · "Some users prefer w (because z). This can be a good approach, but…"

Explanation may be titled Discussion, Background, Conceptual guides, or Topics.

Analogy: Harold McGee's *On Food and Cooking* (1984). No recipes, not reference — food in the context of history, society, science and technology.

## 1.3 Why mixing modes in one document is the central failure

This is the diagnosis the whole framework exists to deliver.

> "Crossing or blurring the boundaries described in the map is at the heart of a vast number of problems in documentation."

The mechanism is **affinity**. Each mode shares an axis-value with two neighbours, and that shared value is the bridge over which contamination travels:

| shared property | modes that share it |
|---|---|
| guide action | tutorials, how-to guides |
| serve the application of skill | reference, how-to guides |
| contain propositional knowledge | reference, explanation |
| serve the acquisition of skill | tutorials, explanation |

> "When these distinctions are allowed to blur, the different kinds of documentation bleed into each other. Writing style and content make their way into inappropriate places. It also causes structural problems, which make it even more difficult to maintain the discipline of appropriate writing. In the worst case there is a complete or partial collapse of tutorials and how-to guides into each other, making it impossible to meet the needs served by either."

Note the causal claim: **blur is not only a content problem, it is a style problem and then a structural problem, and the structural damage then makes the style problem harder to fix.** It compounds.

The 2017 talk states this far more sharply than the current site does, and the sharper version is the one worth carrying:

> "as soon as the characteristics of one of these quadrants starts appearing in another, the quality of the documentation as a whole will start to decline. In other words, if you add new material to the documentation, but you add it in the wrong place, **you're going to make your documentation worse, not better, by adding more material** — it'll be less useful for the reader, and it'll be harder for the author to maintain. **You'll literally be incurring technical debt.**"

And: "there's this kind of **gravitational pull** between all these quadrants… **your job as a documentation writer is to resist those inward tensions and that temptation to allow these things to blur.**" (PyCon AU 2017, ~26:21.) Today's `/map/` page flattens this to "a natural tendency to blur the distinctions." The claim that *adding correct material in the wrong place makes documentation worse* is the load-bearing one, and it is no longer stated anywhere on diataxis.fr.

The two dedicated essays spell the failure out:

**Tutorial vs how-to** (the most common conflation in software documentation). They look alike — both are practical, both are sequences, both promise a successful conclusion, both only make sense for a user with hands on the machinery. The difference is entirely in the need: **study vs work**. The full contrast, from the medical example (learning to suture, vs a clinical manual for an appendectomy):

| tutorial | how-to guide |
|---|---|
| helps the pupil acquire basic competence | helps the already-competent user perform a task correctly |
| provides a learning experience | directs the user's work |
| a carefully-managed path to a conclusion | aims at a result; the path can't be managed — it's the real world |
| familiarises the learner with tools, language, processes | assumes familiarity with all of them |
| a contrived setting, set up in advance for success | the real world, "where you have to deal with what it throws at you" |
| eliminates the unexpected | must prepare for the unexpected |
| a single line, no choices or alternatives | forks and branches: "If this, then that" |
| must be safe; always possible to start again | cannot promise safety; often one chance |
| responsibility lies with the teacher | the user is responsible for getting in and out of trouble |
| the learner may not be competent enough to ask the questions it answers | can assume the user is asking the right question |
| explicit about basic and embodied things — how hard to press, where to type | relies on implicit, even bodily, knowledge |
| concrete and particular | general — real-world specifics are unknowable in advance |
| teaches skills applicable to many later cases | is used to complete one particular task |

And the correction of the most common wrong intuition: **the difference is not basic vs advanced.** How-to guides can and should cover mundane basics (paperwork, disposal procedures). Tutorials can be highly advanced ("Difficult neonatal intubations" for an experienced anaesthetist). "The difference between the two lies in the need they serve: the user's study, or their work."

The stakes, stated without hedging:

> "A clinical manual that conflated education with practice, that tried to teach while at the same time providing a guide to a real-world procedure would be a literally deadly document. It would kill people. In disciplines such as software documentation, we get away with a great deal, because our conflations and mistakes rarely kill anyone."

**Reference vs explanation.** Both are theory-half. Rules of thumb: "If it's boring and unmemorable it's probably reference." Lists and tables → reference. "If you can imagine reading something in the bath, probably, it's explanation." The slippage mechanism is specific and worth memorising, because it is exactly the failure mode of a generative model:

> "It usually happens while writing reference material that starts to become expansive. For example, it's perfectly reasonable to include illustrative examples in reference… but examples are fun things to develop, and it can be tempting to develop them into explanation (using them to say why, or show what if, or how it came to be). As a result one often finds explanatory material sprinkled into reference. This is bad for the reference, interrupted and obscured by digressions. But it's bad for the explanation too, because it's not allowed to develop appropriately and do its own work."

Blur damages **both** sides. That is the load-bearing claim.

## 1.4 The compass

The map is reference; it tells you where things are but not what to do. "A map is most powerful in unfamiliar territory when we also have a compass to guide us."

> "The Diátaxis compass is something like a truth-table or decision-tree of documentation. It reduces a more complex, two-dimensional problem to its simpler parts, and provides the author with a course-correction tool."

| If the content… | …and serves the user's… | …then it must belong to… |
|---|---|---|
| informs action | acquisition of skill | a tutorial |
| informs action | application of skill | a how-to guide |
| informs cognition | application of skill | reference |
| informs cognition | acquisition of skill | explanation |

Two questions only: **action or cognition? acquisition or application?**

Use the terms loosely — action = practical steps, doing; cognition = theoretical/propositional knowledge, thinking; acquisition = study; application = work. "Especially when you are trying to find your initial bearings, use the compass's terms flexibly; don't get fixated on the exact names."

The questions can be posed four ways: *Do I think I am writing for x or y? Is this writing in front of me engaged in x or y? Does the user need x or y? Do I want to x or y?*

Two features that matter for anyone building a tool from this:

1. **It applies at any granularity.** "try applying them close-up, at the level of sentences and words, or from a wider perspective, considering an entire document." A sentence has a mode, not just a page.
2. **It is a doubt-detector, not a classifier.** "The compass is particularly effective when you think that you (or even the documentation in front of you) are doing one thing — but you are troubled by a sense of doubt, or by some difficulty in the work. The compass forces you to stop and reconsider." And: "Like many good tools, it's surprisingly banal."

Its stated reason for existing is that intuition fails: "sometimes intuition provides an immediate answer that is also wrong."

## 1.5 Quality — functional and deep

The most transferable page on the site, and the one most people skip.

Procida opens by conceding that "quality" is "a word in danger of losing some of its meaning", then splits it in two.

**Functional quality** — accuracy, completeness, consistency, usefulness, precision.
- The properties are **independent of each other**: "Documentation can be accurate without being complete. It can be complete, but inaccurate and inconsistent. It can be accurate, complete, consistent and also useless."
- Objectively measurable, sometimes literally numeric.
- "any failure to meet all of these standards is readily apparent to the user."

**Deep quality** — feeling good to use; having flow; fitting to human needs; being beautiful; anticipating the user.
- "Unlike the characteristics of functional quality, they cannot be checked or measured, but they can still be clearly identified."
- **Interdependent**, not independent: "Having flow and anticipating the user are aspects of each other."
- "Instead of taking measurements, we must make judgements."

The contrast table, verbatim:

| Functional quality | Deep quality |
|---|---|
| independent characteristics | interdependent characteristics |
| objective | subjective |
| measured against the world | assessed against the human |
| a condition of deep quality | conditional upon functional quality |
| aspects of constraint | aspects of liberation |

The dependency is one-directional and strict:

> "deep quality is conditional upon functional quality. Documentation can be accurate and complete and consistent without being truly excellent — but it will never have deep quality without being accurate and complete and consistent. No user of documentation will experience it as beautiful, if it's inaccurate, or enjoy the way it anticipates their needs if it's inconsistent. The moment we run into such lapses the experience of documentation is tarnished."

And the psychological asymmetry, which is why teams under-invest in deep quality:

> "all of the characteristics of functional quality appear to us, as documentation creators, as burdens and constraints… Characteristics such as anticipating needs or flow, on the other hand, represent liberation, the work of creativity or taste. To attain functional quality in our work, we must conform to constraints; to attain deep quality we must invent."

The clothing analogy: you need no expertise to judge whether clothing keeps water out, and no expertise to feel that it's comfortable and moves with you — but you need a trained eye to say *why* it hangs well. "Perhaps you need to be a connoisseur to recognise what it is that makes some documentation excellent, but that's not necessary to be able to realise that it is excellent." Users don't need the vocabulary; **creators do**.

Where Diátaxis sits:
- **It cannot deliver functional quality.** "Diátaxis cannot address functional quality in documentation. It is concerned only with certain aspects of deep quality."
- **But it exposes functional lapses.** Mirroring reference structure to code structure "makes gaps in the documentation much more clearly visible". Moving explanatory verbiage out of a tutorial "often has the effect of highlighting a section where the reader has been left to work something out for themselves." Diátaxis's role in functional quality is "only an analytical role".
- **It contributes to deep quality** by deriving its categories from needs, and by preserving flow — "preventing the kind of disruption of rhythm that occurs when something runs across our purpose and steady progress towards it (for example when a digression into explanation interrupts a how-to guide)."

## 1.6 Workflow

Diátaxis has an explicit anti-plan stance, and it is unusual enough to be worth quoting:

> "it discourages planning and top-down workflows, preferring instead small, responsive iterations from which overall patterns emerge."

The loop: **choose something → assess it → decide what to do → do it → repeat.**

- Choose *anything*. "If you don't already have something that you know you want to put right, don't go looking for outstanding problems… If there isn't one just choose something, literally at random."
- Assess it small. "Preferably it's a small thing, nothing bigger than a page — or better, even smaller, a paragraph or a sentence." Challenge it: *What user need is represented by this? How well does it serve that need? What can be added, moved, removed or changed to serve that need better? Do its language and logic meet the requirements of this mode of documentation?*
- Decide **one** next action.
- Do it and consider it done — publish or at least commit. "Don't feel that you need to do anything else to make a worthy improvement."

Structure is an **output**, not an input:
> "Diátaxis changes the structure of your documentation from the inside."
> "Getting started with Diátaxis does not require you to think about dividing up your documentation into four sections. It certainly does not mean that you should create empty structures for tutorials/howto guides/reference/explanation with nothing in them. Don't do that. It's horrible."

The organic-growth model: "The structure of the organism as a whole is guaranteed by the healthy development of cells, according to rules that are appropriate to each kind of cell. It's not the other way round."

**Complete, not finished.** "a plant is never finished… But, at every stage of its development, from seed to a fully-mature tree, it's always complete — there's never something missing from it."

## 1.7 Stated limits — where Diátaxis says it does not apply

Procida is unusually candid about the boundaries. Collected:

**On scope of origin.** From the colophon: *"The original context for the Diátaxis approach was limited to software product documentation."* Applications to scientific research (a 2021 Software Sustainability Institute fellowship), internal corporate documentation, organisational management, education, and at-scale documentation are described as exploration, "on-going" — not settled. Note-taking systems and household management are mentioned as things *other people* reported doing, not as endorsed extensions.

**On who it serves.** The foundations page defines the user narrowly: "The user whose needs Diátaxis serves is the practitioner in a domain of skill." Everything outside the practitioner relationship — marketing, sales collateral, executive narrative, persuasion, correspondence — is simply not in the territory the two axes define. Diátaxis is silent there by construction, not by oversight.

**On functional quality.** "Diátaxis cannot address functional quality in documentation." It will not make anything accurate. It only exposes inaccuracy.

**On deep quality.** The limits section is explicit:
> "It's important to understand that Diátaxis can never be all that is required in the pursuit of deep quality. For example, while it can help attain beauty in documentation, at least in its overall form, it doesn't by itself make documentation beautiful. Diátaxis offers a set of principles — it doesn't offer a formula. It certainly cannot offer a short-cut to success, bypassing the skills and insights of disciplines such as user experience or user interaction design, or even visual design. Using Diátaxis does not guarantee deep quality… what Diátaxis can do is lay down some conditions for the possibility of deep quality."

**On being a plan.** "the structure it proposes is not intended to be a plan, something you must complete in your documentation. It's a guide."

**On the cycle.** The learning → goals → information → understanding cycle "should not be understood too literally. It is not the case that a user must encounter the different kinds of documentation in the order tutorials > how-to guides > technical reference > explanation."

**On itself.** From "Start here": *"You can do what you like with Diátaxis. You don't have to believe in it and there is no exam. It is a wholly pragmatic approach. I think it's true, but what matters is that it actually helps people create better documentation. If you find one idea or insight in it that seems to be worthwhile, help yourself to that."* And: "There is an extensively elaborated theory around Diátaxis, but you don't need to subscribe to it, or even read about it."

**On his own earlier version.** Of the 2014–2021 Divio-era presentation: "I still agree with most of it, though there are several aspects that I now think I got wrong."

**The gaps Diátaxis does not name but leaves open** (my observation, not his): it has no slot for the **doorway artifact** — README, landing page, project overview, "start here". These are single files that must legitimately do orientation work across all four quadrants, and the framework's only available advice is to split them, which real READMEs cannot do. It also has no account of **release notes and changelogs**, of **correspondence**, or of anything where the reader is not a practitioner of the documented craft. Part 3 picks up the doorway and correspondence directly; changelogs it treats as Instrument mode with a date attached.

---

# Part 2 — Comparable sources

Twenty sources, read at page level rather than landing-page level. For each: URL, what it is, and the specific transferable rules. Verbatim quotes where the exact wording is load-bearing. Every numeric threshold is collected with its provenance in §2.14, and the places the sources contradict each other are recorded in §2.15 rather than silently merged.

## 2.1 Google Technical Writing One and Two

<https://developers.google.com/tech-writing> · TW1 <https://developers.google.com/tech-writing/one> · TW2 <https://developers.google.com/tech-writing/two>

Free courses Google runs internally and publishes. TW1 covers words, active voice, clear sentences, short sentences, lists and tables, paragraphs, audience, documents, punctuation. TW2 covers editing, large documents, illustrations, sample code. Two URLs commonly cited don't exist: self-editing lives at `/two/editing`, not `/one/self-editing`; there is no "describing markup" unit.

**Words** (`/one/words`)
- Unfamiliar term: link to an existing definition or define it. Many new terms → build a glossary.
- Use the same unambiguous term throughout. "Once you've named a component `thingy`, don't rename it `thingamabob`." Rationale: "When I encounter two words that seem to be synonyms, I wonder if the author is trying to signal a subtle distinction that I need to track down and understand."
- Acronyms: spell out in full on first use with the acronym in parentheses, **both in bold**; then never cycle back. Define an acronym only if it is "significantly shorter than the full term" **and** "appears many times in the document."
- Pronouns: "Using pronouns improperly causes the cognitive equivalent of a null pointer error." **If more than five words separate a noun from its pronoun, repeat the noun.** If a second noun intervenes, repeat the noun. Fix *this*/*that* by putting a noun immediately after: "This **user ID** lets users authenticate."

**Active voice** (`/one/active-voice`)
- `Active = actor + verb + target`. `Passive = target + verb + actor`. `passive verb = form of be + past participle`.
- Detector: a preposition — *by*, *as* — usually follows a passive verb that names its actor.
- Imperative sentences are **active** with an implied *you*. Don't mis-flag them.
- "Active voice is generally shorter than passive voice." Readers convert passive to active mentally anyway — it is an extra preprocessor stage.

**Clear sentences** (`/one/clear-sentences`)
- "In technical writing, clarity takes precedence over all other rules."
- Weak verbs to hunt: forms of *be*, plus **occur** and **happen**. "The exception occurs when dividing by zero" → "Dividing by zero **raises** the exception."
- Generic verbs signal two deeper defects: an imprecise or missing actor, and passive voice.
- Kill `There is` / `There are` three ways: delete it; move the real subject and verb to the front; or invent the missing subject. "There is no guarantee that the updates will be received in sequential order" → "**Clients** might not receive the updates in sequential order."
- **Refactor adjectives and adverbs into numbers.** "run screamingly fast" → "run **225-250% faster**". Loose modifiers "can make technical documentation sound dangerously like marketing material."
- Hard boundary: "don't intersperse publicity or sales material inside educational material."

**Short sentences** (`/one/short-sentences`)
- One sentence, one idea — explicitly analogised to the single-responsibility principle. "Extra lines of documentation introduce additional points of failure."
- **List triggers**: the conjunction *or* in a long sentence, or an embedded list inside a sentence, means refactor into a bulleted or numbered list.
- Wordy → concise: `at this point in time` → `now`; `determine the location of` → `find`; `is able to` → `can`; `causes the triggering of` → `triggers`; `provides a detailed description of` → `describes`.
- Subordinate-clause test: "Do the subordinate clauses extend the single idea or do they branch off into a separate idea? If the latter, divide."
- *that* vs *which* (US): *that* for essential clauses, *which* for nonessential. Read-aloud test — a pause before the clause means *which*. **Comma before *which*, no comma before *that*.**

**Lists and tables** (`/one/lists-and-tables`)
- Test: "If you rearrange the items in a bulleted list, the list's meaning does not change. If you rearrange the items in a numbered list, the list's meaning changes."
- **Parallelism has exactly four axes: grammar, logical category, capitalization, punctuation.** "The first item in a list establishes a pattern that readers expect to see repeated."
- Start every numbered-list item with an imperative verb.
- "Avoid putting too much text into a table cell. **If a table cell holds more than two sentences**, ask yourself whether that information belongs in some other format."
- Introduce every list and table with a sentence ending in a **colon**, ideally containing the word *following*.

**Paragraphs** (`/one/paragraphs`)
- "The opening sentence is the most important sentence of any paragraph. Busy readers focus on opening sentences and sometimes skip over subsequent sentences."
- **"Readers generally welcome paragraphs containing three to five sentences, but will avoid paragraphs containing more than about seven sentences."** And the reverse: "If your document contains plenty of one-sentence paragraphs, your organization is faulty."
- "When revising, ruthlessly delete (or move to another paragraph) any sentence that doesn't directly relate to the current topic."
- Every good paragraph answers: what are you telling the reader; why does it matter to them; how should they use it (or how do they know it's true).

**Audience** (`/one/audience`)
- The equation: `good documentation = knowledge and skills your audience needs − your audience's current knowledge and skills`.
- Define audience by role **and** proximity to the knowledge; roles alone are insufficient and proximity decays with time.
- **Curse of knowledge**: "their expert understanding of a topic ruins their explanations to newcomers." Idioms are a form of it: "Idioms are so deeply ingrained in our speech that the special nonliteral meaning of idioms becomes invisible to us."
- Cultural neutrality: no NASCAR, cricket, sumo, baseball metaphors, *sticky wicket*, *a piece of cake*, *Bob's your uncle*.

**Documents** (`/one/documents`)
- **State the non-scope**, not just the scope — "the topics not covered that the target audience might reasonably expect your document to cover." Constrained to reasonable expectations only.
- Self-edit against it: "When reviewing your first draft, delete any sections that don't help satisfy the scope statement."
- "Imagine that your peers might only read the first paragraph… Be prepared to revise page one many times."

**Punctuation** (`/one/punctuation`)
- Serial comma recommended, but "we actually prefer circumventing the controversy by converting embedded lists into bulleted lists."
- **Place a comma between the condition and the consequence**: "If the program runs slowly, try the `--perf` flag."
- Comma splice is "a punctuation felony."
- Semicolon test: the sentence should still make sense with the clauses flipped, and both sides must be complete sentences. "You should almost always use commas, not semicolons, to separate items in an embedded list."
- En dashes: the style guide's advice is quoted as literally **"Don't use."**

**Editing** (`/two/editing`) — the real self-editing unit
- Read it out loud. Come back to it later — an hour or more. Change the context: print it, or paste into a different document and change font, size and colour.
- Peer editor "doesn't need to be a subject matter expert… but they do need to be familiar with the style guide you follow."
- Persona = role + end goal + a set of explicit assumptions. Warning: "relying too heavily on a persona (or two) can result in a document that is too narrowly focused."

**Large documents** (`/two/large-docs`)
- Short docs suit how-tos, overviews, conceptual guides, newcomers. Long docs suit in-depth tutorials, best-practice guides, command-line reference, experienced readers. "Many longer documents aren't designed to be read in one sitting."
- "Before you ask your reader to perform a task, explain to them why they are doing it."
- Introduction must state three things: what the document covers; what prior knowledge is expected; what it doesn't cover. Then: "After you've completed the first draft, check your entire document against the expectations you set in your overview" — "documentation quality assurance."
- **Task-based headings**: prefer "Creating the site" over "Running the `carambola` command."
- Project history goes at the **end**, as a link.
- "Avoid placing a level three heading immediately after a level two heading."
- Progressive disclosure, four techniques: introduce terminology near the instructions that need it; break up walls of text; break up large series of steps; start simple and escalate.

**Illustrations** (`/two/illustrations`)
- Sung and Mayer (2012): "providing any graphics—good or bad—makes readers like the document more; however, **only instructive graphics help readers learn**."
- **Write the caption first**, then build the illustration to match. Captions are brief, explain the takeaway, focus attention. "The caption always follows the diagram."
- **"Don't put more than one paragraph's worth of information in a single diagram."** Alternative threshold: "avoid illustrations that require more than five bulleted items to explain."
- "Callouts in pictures are often better than paragraph long explanations of the pictures."
- Export as SVG.

**Sample code** (`/two/sample-code`)
- Six properties: **correct, concise, understandable, commented, reusable**, and **sequenced** for sets.
- "Always test your sample code." Unit tests make bad samples: "The primary goal of a unit test is to test; the only goal of a sample program is to educate."
- "Snippet-heavy documentation often degrades over time because teams tend not to test snippets as rigorously as full sample programs."
- "Always prefer correctness over conciseness"; "never use bad practices to shorten your code."
- Comments: "Focus your commenting energy on anything non-intuitive in the code." For experienced readers, "don't explain *what* the code is doing, explain *why*."
- **Placement rule**: descriptions that belong in the pasted code go in code comments, because readers copy the comments with the code; lengthy or tricky concepts go in prose **before** the sample.
- Show the anti-example alongside the example where a distinction is subtle.
- Sample sets must "demonstrate a range of complexity"; "Resist the temptation to rush towards very complex sample programs."

## 2.2 Google developer documentation style guide

<https://developers.google.com/style> · highlights <https://developers.google.com/style/highlights>

Google's public house style for developer documentation. Much larger and more prescriptive than the courses, with an A–Z word list.

**Highlights** — the one-page distillation. Second person, not *we*. Active voice, make clear who acts. **"Put conditions before instructions, not after."** Sentence case for titles and headings. Numbered lists for sequences, bulleted for most others, description lists for pairs. Serial commas. Code font for code-related text, bold for UI elements. Alt text on images. "Don't pre-announce anything in documentation."

**Voice and tone** (`/style/tone`)
- Target: "casual, natural, and approachable, not pedantic or pushy. Try to sound like a knowledgeable friend who understands what the developer wants to do."
- **"Don't try to write exactly the way you speak; you probably speak more colloquially and verbosely than you should write."**
- Avoid-list, verbatim items: buzzwords and jargon · being too cutesy · **figurative language** · **placeholder phrases like *please note* and *at this time*** · choppy or long-winded sentences · **starting all sentences with the same phrase (such as *You can* or *To do*)** · pop-culture references · **exclamation marks** · wackiness · **phrasing in terms of *let's do something*** · **"Using phrases like *simply*, *It's that simple*, *It's easy*, or *quickly* in a procedure"** · internet slang such as *tl;dr* or *ymmv*.
- On transitions: *Though* and *This way* make paragraphs less stilted; *However* and *Nonetheless* make them **more** stilted.
- "It's great to be polite, but using *please* in a set of instructions is overdoing the politeness."

**Person** (`/style/person`)
- "Use *you* or *your* instead of *we*, *our*, or *us*." "Use the word *user* only to refer to the user of the software that your reader is developing."
- The split rule: **"Use the second person to address what the reader does, but use the third person for what the software or an end user does."**
- First-person plural only for the authoring organisation, with a clear antecedent.
- "Address your audience consistently… identify who the *you* is that you're addressing."

**Tense** (`/style/tense`)
- Present tense by default. "The server **sends** an acknowledgment", not "will send".
- Future tense allowed **only** to distinguish a genuinely later or asynchronous action.
- "Don't use future tense to describe how a product or feature will work after the next release."
- "Also avoid the hypothetical future *would*."

**Sentence structure** (`/style/sentence-structure`)
- "Mention the circumstance, conditions, or goal **before** you provide the instruction. Mentioning the circumstance first lets the reader skip the instruction if it doesn't apply." — "For more information, see [link]", not "See [link] for more information."

**Procedures** (`/style/procedures`) — the densest page for instruction writing
- Don't repeat the heading in the introductory sentence; omit it if no extra context is needed.
- **"Don't introduce a procedure with a partial sentence that's completed by the numbered steps."** Recommended: "To customize the buttons, follow these steps:". Not recommended: "To customize the buttons:".
- Single-step procedure → format as a bulleted list, one sentence.
- Sub-steps use lowercase letters; sub-sub-steps use lowercase Roman numerals.
- **Order of components within a complex step**: 1. describe the action; 2. the command; 3. explain placeholders; 4. explain the command further; 5. the output; 6. in a separate paragraph, the result.
- **Optional steps: prefix with `Optional:`**, not "(Optional)".
- **Location before action.** "In Google Docs, click **File** > **New**." Restate the context in each heading-split section.
- **Goal before action.** "To start a new document, click…"
- Result belongs in the same paragraph as the action, or folded into the next step rather than repeated.
- "**Don't use directional language** (*above*, *below*, *right-hand side*)." Use *preceding* / *following*.
- "Avoid using *run the following command* to introduce code. Instead, focus on what the command does."
- **"Don't include keyboard shortcuts."** Say "Copy the command, and then paste it", not "Press Ctrl+C".
- **"When there's more than one way to do something, give only the best way. Giving alternate ways can confuse readers."**
- "Include as few steps as possible… Limit interruptions in the path." "Focus on one reader decision at a time."

**Prescriptive documentation** (`/style/prescriptive-documentation`)
- Definition: "It tells the reader what to do instead of giving them a list of options to choose from."
- **The modal decision table**: required → **must** or an imperative · recommended → **"We recommend…"** · optional → **can** · expected outcome → describe it · possible outcome → **might** or **can** · actual state → don't write "should be", write "you must set" or "the server sets".
- **"Generally avoid the word *should*. The word can create ambiguity and uncertainty for readers."**

**Excessive claims** (`/style/excessive-claims`)
- An excessive claim is one not verifiable from data available to the reader, or one a single incident would falsify.
- "Avoid superlatives like *best*, *simplest*, *fastest*, *never*, and *always*." Use *ensure* and *guarantee* "only when something can truly be ensured or guaranteed."
- Security hedging pattern: **"It's safer to suggest that a feature 'helps with security' or 'is designed for security' because those statements are true even if a security incident occurs."**
- Comparative claims must cite a source.

**Timeless documentation** (`/style/timeless-documentation`)
- Ban list for product docs: *as of this writing · currently · does not yet · eventually · existing · future, in the future · latest · new, newer · now · old, older · presently, at present · soon*.
- Four categories of failure: promises about plans; words that are already implied ("we assume our documentation is current"); words that go stale; words assuming knowledge of earlier versions. "If you must use words like *new*, give a reference point such as a date or version release number."
- These words are fine in release notes, blog posts and press releases — a mode distinction Diátaxis would recognise.

**Jargon** (`/style/jargon`)
- Four decision questions: can you write around it? can you replace it with a more specific term? used once → describe in plain language with the term in parentheses. used throughout → define in parentheses on first reference.
- Worked: "Hold a post-mortem" → "When the project is finished, review what processes worked or didn't work." *blast radius* → *affected area*. *ingest* → *import* / *load*.
- Also flags "vaguely defined or overloaded terms like *solution*, *support*, or *workload*."

**Anthropomorphism** (`/style/anthropomorphism`) — "Don't attribute human qualities to software or hardware." "The PC **detects** a new device", not "**sees**".

**Contractions** (`/style/contractions`) — "we recommend using common two-word contractions". Specifically recommends **negation contractions**: "It's easy for a reader to miss the word *not* when they're scanning, whereas it's harder to misread *don't* as *do*." No invented or three-word contractions.

**Accessibility** (`/style/accessibility`)
- **"Use shorter sentences. Try to use fewer than 26 words per sentence."**
- "Place distinguishing and important information of a paragraph in the first sentence."
- "Avoid the use of double negatives and exceptions for exceptions" — "You can continue without a path", not "A missing path won't prevent you from continuing."
- "Links should make sense when read out of context." No *click here*.
- "Don't present new information in images." "Don't use images of text, code samples, or terminal output. Use actual text."
- "Don't use color, size, location, or other visual cues as the primary way of communicating information."
- "Don't force line breaks (hard returns) within sentences and paragraphs."
- Colour contrast 4.5:1 for text.
- **The rendering test** — verify the document still conveys everything without sound; using only sound; without images; without colour; using a keyboard; with screen magnification; without punctuation.

**Write for a global audience** (`/style/translation`)
- Simple words: not *commence*, *consequently*, *utilize*, *leverage*. "Use a single word when it conveys the same idea as a phrase."
- "Write shorter sentences. The shorter the sentence, the easier it is to translate."
- Avoid phrasal verbs: "This document **uses**", not "makes use of". Exceptions: *set up*, *log in*, *sign in*.
- **"Don't use more than two nouns as modifiers of another noun."**
- Place *only* immediately before what it modifies.
- **Avoid participles and gerunds.** Replace *using* with *by using*, *that use*, or *you use*. "This guide describes **how to set up** database replication", not "describes setting up".
- Avoid words with multiple senses in close proximity: *once*, *while*, *as*, *since*. Don't use the same word as noun and verb nearby.
- **Include the helper words English drops**: *then*, *that*, *of*. "assumes **that** you have…" · "Start the profiler, **and then** run the app."
- Don't omit relative pronouns: "the rules **that** you previously defined."
- Standard word order, subject + verb + object; keep subject and verb near the start; conditional clause first.
- "Avoid humor. Most humor is difficult to translate." Avoid seasons — "August isn't summer in the southern hemisphere."
- "Images don't get translated. Any new information should be conveyed through text."

**Inclusive documentation** (`/style/inclusive-documentation`)
- "Don't use metaphors, and don't use a term in a metaphorical sense." Named bad metaphor: *pets versus cattle*.
- Ableist terms to replace: *crazy, insane, blind to, cripple, dumb, sanity-check, dummy variable*.
- **Prefer rewriting over one-for-one substitution**: "You can **allow requests from** a range of IP addresses", not "You can **allowlist** a range."
- The parenthetical-once pattern for replacing an established term: introduce the preferred term with the old one in parentheses on first mention, then use only the preferred term.
- "Don't use a non-inclusive name or keyword unless it's in code font."

**API reference comments** (`/style/api-reference-comments`) — see §2.13.

**Word list** (`/style/word-list`), highest-value entries
- `allows you to` → **lets you** · `and so on` / `etc.` → "Avoid… wherever possible" · `click here` → don't use · `could`/`would` → "Avoid using. Instead, use *can*" · `easy, easily` → "What might be easy for you might not be easy for others. Try eliminating this word" · `in order to` → **to** · **`just`** → "Usually, *just* is a filler word that you can delete without affecting your meaning" · `leverage` → *use*, *build on* · `once` → "If you mean *after*, then use *after*" · `please` → don't use in instructions · `simple, simply` → try eliminating · `since` → "If you mean *because*, then use *because*. *Since* is ambiguous" · `utilize` → *use* · **`via`** → "Don't use." · `while` → don't use for contrast, use *although*.
- Modal set: **can** = permission or ability · **might** = possibility · **must** = requirement · **may** = "reserve for official policy or legal considerations."

## 2.3 Microsoft Writing Style Guide

<https://learn.microsoft.com/en-us/style-guide/welcome/>

Microsoft's public house style. Shorter and more voice-driven than Google's; the brand-voice pages are the part worth stealing.

**Top 10 tips** (`/top-10-tips-style-voice`)
1. **"Use bigger ideas, fewer words… Shorter is always better."** Worked: "If you're ready to purchase Office 365 for your organization, contact your Microsoft account representative." → **"Ready to buy? Contact us."**
2. **Write like you speak.** "Read your text aloud." "Invalid ID" → "You need an ID that looks like this: someone@example.com"
3. **Project friendliness. "Use contractions like *it's*, *you'll*, *you're*, *we're*, and *let's*."**
4. **Get to the point fast.** "Lead with what's most important. Front-load keywords for scanning."
5. **Be brief. "Prune every excess word."**
6. Sentence-style capitalization by default. No Title Case.
7. No period or colon at the end of titles, headings, subheadings and UI titles.
8. Serial comma.
9. One space after a period. No spaces around dashes.
10. **"Most of the time, start each statement with a verb. Edit out *you can* when it isn't necessary. Avoid weak phrasing like *there is*, *there are*, and *there were*."** Worked: "You can access Office apps across your devices, and you get online file storage and sharing." → "**Store** files online, **access** them from all your devices, and **share** them with coworkers."

**Brand voice** (`/brand-voice-above-all-simple-human`)
- Three principles: **"Warm and relaxed"** · **"Crisp and clear — We're to the point. We write for scanning first, reading second."** · **"Ready to lend a hand — We anticipate their real needs and offer great information at just the right time."**
- The slogan: **"Bigger ideas and fewer words. Less head, more heart."**
- "Voice is constant; tone adapts… from serious to empathetic to lighthearted—to fit the context and the customer's state of mind." This voice/tone split is the closest thing in the mainstream style guides to a mode system.

**Verbs** (`/grammar/verbs`)
- "The present tense is often easier to read and understand than the past or future tense. It's the best choice for most content."
- **Mood assignment**: indicative for statements of fact and explanation (most content); imperative for instructions, procedures, direct commands and action-column headings; **subjunctive — avoid**. "Don't switch moods within a sentence."
- Three sanctioned uses of passive: **avoiding blaming the customer** in errors and warnings ("That site can't be found"); avoiding awkward constructions; emphasising the receiver.

**Person** (`/grammar/person`)
- Second person by default; it "helps avoid passive voice by focusing the discussion on the reader." **"Omit *you can* whenever the sentence works without it."**
- **The one AI-specific rule in the guide**: "when AI-generated content is used, we should use past tense (to express action done behind the scenes) by explicitly saying 'for you' or by using words that convey uncertainty or subjectivity (to express that a judgment was applied that may or may not be correct)." Example: "Suggested for you."
- First person singular: never in marketing or support docs; allowed in UI labels to signal the person's control ("Remember my password", "I agree to the terms").
- **Avoid *we***: "can feel like a daunting corporate presence—the opposite of Microsoft's modern voice." "Change your password" beats "We recommend that you change your password". OK where Microsoft must be identified as the speaker (privacy and security settings).

**Word choice** (`/word-choice/`)
- Hub rule: "If you mean the same thing, use the same word."
- **Contractions** (`/use-contractions`): use common ones. "Don't mix contractions and their spelled-out equivalents in UI text." "Never form a contraction from a noun and a verb." "Avoid ambiguous or awkward contractions, such as *there'd*, *it'll*, and *they'd*."
- **Simple words** (`/use-simple-words-concise-sentences`): "avoid weak or vague verbs, such as *be*, *have*, *make*, and *do*." *use* not *utilize*; *remove* not *eliminate*; *tell* not *inform*. *to* not *in order to*; *also* not *in addition*; *connect* not *establish connectivity*. **"Omit unnecessary adverbs"** — named: *quite, very, quickly, easily, effectively*. "Use one term consistently to represent one concept."
- **New meanings** (`/dont-use-common-words-in-new-ways`): "Don't create a new word from an existing word" (*bucketize*). "Don't apply a new meaning to an ordinary word" (*graveyard* for *archive*). **"Don't use verbs as nouns or nouns as verbs"**: *affect* not *impact*; *respond to the request* not *respond to the ask*.
- **Jargon test** (`/avoid-jargon`): "If you think a term is jargon, it probably is… If a reviewer questions your use of a term, it may be jargon." Also: "Avoid business, marketing, and journalistic jargon, such as using *leverage* to mean *take advantage of*."
- No non-English phrases (*de facto*, *ad hoc*); no Latin abbreviations (*e.g.*, *i.e.*, *viz.*, *ergo*).

**Procedures** (`/procedures-instructions/`)
- Framing: **"The best procedure is the one you don't need."** Consider an illustration, a video, or a one-sentence instruction first.
- "An introductory sentence shouldn't just repeat what the heading says."
- "Use a separate step for each instruction. It's OK to combine short steps that occur in the same place in the UI." "Don't overwhelm customers with too many steps… Try to fit all the steps on the same screen."
- Every step: complete sentence, capitalised, ends with a period, starts with an imperative verb.
- **Location before action**: "For **Alignment**, select **Left**."
- **Input-neutral verbs** (`/describing-interactions-with-ui`) — "use generic verbs that work with any input method. Don't use input-specific verbs, such as *click* or *swipe*." The set: **Open · Close · Leave · Go to · Select · Select and hold · Clear · Choose · Enter · Specify · Move · Zoom.** "Avoid *press*, *press and hold*, and *right-click* if you can."
- "Avoid talking about UI elements. Instead, describe what the customer needs to do."

**Scannable content** (`/scannable-content/`)
- "Put first things first… In left-to-right languages, people read in an F shape."
- **"Be brief, be bold, be clear… Use short, simple words. Get to the point. Then stop."**
- **"Three to seven lines is about the right length for a paragraph."** "It's also fine to have a single-line paragraph now and then."
- "Establish patterns in content… Place important keywords near the beginning of headings, table entries, and paragraphs. Apply the same sentence structures to similar information."
- **Headings** (`/scannable-content/headings`): "If readers don't read the headings, they probably won't read the text that follows, either." Use a second level only if there are **at least two** subtopics. "One heading level is usually plenty for a page or two." "In most cases, don't talk about products, features, or commands in headings. Concentrate on what customers can achieve." **Parallel structure by level: noun phrases for first-level, verb phrases for second-level, infinitive phrases in instructions.** "If you can't fit a headline on two lines, rewrite it."
- **Lists** (`/scannable-content/lists`): **"A list should have at least two items but (if possible) no more than seven items."** "Each item should be fairly short—the reader should be able to see at least two, and preferably three, list items at a glance." No semicolons, commas or conjunctions at the end of items. No period unless items are complete sentences or complete the introductory sentence; **no periods if all items have three or fewer words**. "Avoid lists where the list items complete an introductory fragment. They can be difficult to translate."

**Punctuation** (`/punctuation/`)
- **"The more punctuation you add, the more complex a sentence becomes. If a sentence contains more than a comma or two and ending punctuation, consider rewriting it."**
- Exclamation points, entire page: "Use exclamation points sparingly. Save them for when they count."
- Semicolons: "Sentences that contain semicolons are often complex. Try to simplify the sentence… to eliminate the semicolon."

**Global writing tips** (`/global-communications/writing-tips`)
- "Include *that* and *who*. They help to clarify the sentence structure." "Include articles, such as *the*."
- **"Avoid modifier stacks."** Worked: "With an extremely well thought-out Windows migration project plan, your migration will go more smoothly" → "Your migration will proceed more smoothly if you have a project plan that's well thought out."
- **"Avoid linking more than three phrases or clauses by using coordinate conjunctions such as *and*, *or*, or *but*. Better yet, avoid linking more than two."**
- "Limit your use of sentence fragments. Sentence fragments can be hard to translate."
- "Use one word for a concept, and use it consistently. Avoid using synonyms to refer to the same concept."

**Accessibility** (`/accessibility/writing-all-abilities`)
- **"Keep paragraphs short and sentence structure simple. Aim for one verb per sentence. Read text aloud and imagine it spoken by a screen reader."**
- "Spell out words like *and*, *plus*, and *about*. Screen readers can misread or skip text that uses special characters."
- "Don't use directional terms as the only clue to location." Use "the first item in the following list" or "on the toolbar".

**Bias-free communication** (`/bias-free-communication`) and **militaristic language** (`/militaristic-language`)
- Ordered workarounds for generic gendered pronouns: rewrite to second person; use a plural noun and pronoun; use *the* or *a*; refer to the role; use *person*. Singular *they* acceptable; "Don't use constructions like *he/she* and *s/he*."
- "Don't make generalizations about people, countries, regions, and cultures, **not even positive or neutral generalizations**."
- "Avoid using terms associated with violence and military actions unless you are referring to physical combat operations." Substitutions: *blast radius* → *impact*; *defense-in-depth* → *multilayered*; *locked down* → *secured*. Never-use list: *air cover, bomb, enemy, go on the offensive, invade, missile, nuke, strike, troops*.

**Notable word-list entries**
- *above* / *below* — "Don't use to mean *earlier*/*later*."
- **`allows` / `enables` / `lets`** — "Don't use *allows* (or *enables* or *lets*) to describe things that Microsoft or Microsoft apps make possible for the customer." Rewrite from the customer's point of view.
- *and so on* — "Don't use. Instead, be specific."
- **`can`** — "When you see *can* in your writing, consider deleting it. *Can* implies ability but not action. Rewrite to describe the action if possible."
- **`should` vs `must`** — "Before using *should* or *must*, consider other ways to discuss recommendations or requirements… **Don't use *Microsoft recommends* or *it is recommended*.** Be careful to make your tone helpful, not bossy." "Don't use *should* to indicate probability."
- *navigate* — avoid; "they're formal words that might not localize well." Use *browse* or *go to*.
- **`user` / `end user`** — "Don't use *end user*. Avoid *user* when you can. Use *audience, customer, person, people, employee, coworker,* or *you*."
- *simply* — "Don't use to mean that something is easy to do."

**Two direct conflicts with Google, worth resolving rather than merging**
1. **`can`.** Google: use *can* for optional actions and ability. Microsoft: consider deleting it.
2. **Disability language.** Microsoft defaults to person-first. Google says research the community's preference and notes identity-first is preferred in autistic, blind and Deaf communities.

## 2.4 Write the Docs — Documentation Principles

<https://www.writethedocs.org/guide/writing/docs-principles/>

Community-maintained, CC BY-NC-SA, source in `github.com/writethedocs/www`. Fifteen one-line imperatives across five tiers: general, content, sources, publications, and body of publications. (There is no "skeptic" principle — the one commonly misremembered as such is **Skimmable**.)

**General**
1. **Precursory** — "Begin documenting before you begin developing." Requirements and specs are the first draft of the docs.
2. **Participatory** — "In the documentation process, include everyone from developers to end users." Reduce silos that solicit documentation from only a subset of contributors.

**Content**
3. **ARID — "Accept (some) Repetition In Documentation."** The best paragraph in the whole guide: "If you want to write good code, Don't Repeat Yourself. But if you adhere strictly to this DRY principle when writing documentation, you won't get far… **The best documentation is hand-written, which means that just by writing any documentation, you are repeating yourself.** ARID does not mean WET, hence the word choice. It means: try to keep things as DRY as possible but also recognize that you'll inevitably need some amount of 'moisture'."
4. **Skimmable** — "Structure content to help readers identify and skip over concepts which they already understand… **Save your readers' time by writing like a newspaper instead of a novel.**" Three sub-rules: descriptive concise headings; hyperlink text that describes the link itself, "never phrases like 'click here'"; "Paragraphs and list items should begin with identifiable concepts as early as possible."
5. **Exemplary** — "Include (some) examples and tutorials in content." But: "not for everything. **Too many examples can make the documentation less skimmable.**"
6. **Consistent** — "The more content editors you have, the more important a style guide becomes."
7. **Current** — **"Consider incorrect documentation to be worse than missing documentation."** Write version-agnostically where possible.

**Sources**
8. **Nearby** — "Store sources as close as possible to the code which they document… The goal is to merge (as much as possible) the workflows for development and documentation."
9. **Unique** — "Eliminate content overlap between separate sources." Multiple sources are fine "as long as the scope of each source is clearly defined and disjoint."

**Publications**
10. **Discoverable** — "Funnel users intuitively towards publications through all likely pathways." You only need pointers everywhere, not the docs themselves. "If a user manual is published in the woods, and no one is around to read it, does it exist? Discoverability says 'no'."
11. **Addressable** — "Provide addresses to readers that link directly to content at a granular level."
12. **Cumulative** — "Content should be ordered to cover prerequisite concepts first."
13. **Complete** — "Within each publication, cover concepts in full, or not at all." The map analogy is worth keeping: **"A map that displays fifty out of one hundred fire hydrants in a neighborhood is worse than a map that displays none."** Partial coverage must "clearly state, up front, that a particular concept is only covered partially."
14. **Beautiful** — "Visual style should be intentional and aesthetically pleasing." Applies to `--help` output too.

**Body**
15. **Comprehensive** — "Ensure that together, all the publications in the body of documentation can answer all questions the user is likely to have. **A body of documentation which answers very unlikely questions while failing to answer likely ones is somewhat out of balance.**"

### Related Write the Docs pages

**Beginner's guide** (<https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/>) — "Give users the information they need, but not too much." Two audiences: users who "don't care how it works" and developers who "want to contribute." An unusually blunt **anti-FAQ rule**, with five stated drawbacks: FAQs become quickly outdated; accumulate disparate content on unrelated topics; become hard to sort and search; "**Are rarely an actual list of frequently asked questions from real users**"; "**Tempt you to add content as a quick fix in lieu of creating actual, thorough documentation**." Install instructions: "Keep your install instructions to a couple of lines for the basic case."

**Docs as code** (<https://www.writethedocs.org/guide/docs-as-code/>) — "a philosophy that you should be writing documentation with the same tools as code." The five tools: **issue trackers · version control · plain text markup · code reviews · automated tests.** Three claimed benefits, of which only the third is a hard gate: "**You can block merging of new features if they don't include documentation, which incentivizes developers to write about features while they are fresh.**"

**Style guides** (<https://www.writethedocs.org/guide/writing/style-guides/>) — "A consistent tone and style makes your content easier to read, reducing your users' cognitive load and increasing their confidence in the content's authority." Concrete rules on the page: replace animal-violence idioms ("kill two birds with one stone" → "accomplish two things at once") because "They often confuse non-native English speakers and can be easily replaced with clearer alternatives at no cost to meaning," with an explicit scope exception for established technical terms (`kill`, "canary deployment", "monkey-patching"). On API docs: **"If a feature is not documented, it does not exist. If a feature is documented incorrectly, then it is broken."** And "Documentation cannot fix a poorly designed API." On documentation-driven design, reduced to one line: **"Documentation changes are cheap. Code changes are expensive."**

**Error messages — six rules, verbatim**: provide explicit indication that something has gone wrong · **write like a human, not a robot** · **don't blame the user, be humble** · make the message short and meaningful · include precise descriptions of exact problems · offer constructive advice on how to fix the problem.

**Release notes — a nine-question authoring checklist**: what is the specific change; why did we make it and why does it matter to users; what is the goal for users of this feature; do users have all the information they need to move forward; is there an article to link to; would an image help; which stakeholders must approve; does it need legal approval. Rule: "Release notes should be brief, linking out to more details as necessary."

**Mindshare** (<https://www.writethedocs.org/guide/writing/mindshare/>) — the closest thing WtD has to an IA page, and it contains the single best question in the guide: **"You need to have an answer to the 'Where do I put it?' question."** Plus: "A big problem with a lot of documentation systems is that they have been organized organically, AKA have no organization." And on templates: "It should take about 5 seconds to get a basic outline of the documentation for a project started."

## 2.5 The Good Docs Project

<https://www.thegooddocsproject.dev/> · templates at <https://gitlab.com/tgdp/templates>

A volunteer project publishing fill-in-the-blank documentation templates, MIT-0. Current release "Iron" v1.6.0.

**The structural convention is the most transferable thing here.** Every template ships as up to five files, each for a different reader:

| File | Purpose |
|---|---|
| `template_<type>.md` | the raw fill-in template with embedded writing tips — for the person who says "Just give me something easy I can fill out and nothing more" |
| `guide_<type>.md` | per-section explanation of how to fill it in |
| `resources_<type>.md` | the sources consulted, "to ethically cite their sources… and give credit where credit is due", and so a future maintainer can change it knowingly |
| `process_<type>.md` | best practices for researching, writing and maintaining this content type |
| `example_<type>.md` | a worked example, built afterwards as a usability test of the template |

Placeholder text is wrapped in `{curly brackets}`. Every template states that sections are reorderable and removable.

**README template** — skeleton in order: logo and badges (optional) · Project Name (with URL and owner) · Table of contents (optional) · Project description · **Who this project is for** · Project dependencies · Instructions for using {Project} (Install / Configure / Run / Troubleshoot) · Contributing guidelines · Additional documentation · How to get help · Terms of use.

The template supplies **sentence formulas**, which is unusual and directly useful for a generator:
- `With {Project Name} you can {verb} {noun}…`
- `{Project Name} helps you {verb} {noun}…`
- `Unlike {alternative}, {Project Name} {verb} {noun}…`
- `This project is intended for {target user} who wants to {user objective}.`

Rules: "Be succinct. READMEs can be long, but that doesn't mean users need to read pages to understand why they should be interested." · "**Avoid describing any languages, technologies, or tools that were used in the creation of your project until after you have given a strong description on why the user should engage.**" · start each instruction with a verb · avoid the passive.

The `process_readme.md` states the **four reader tasks** a README must enable — **identify · evaluate · use · engage** — and the **split signal**: "When your README starts to be long or overly complex, that's a signal that it's time to move some of the information out."

**Upstream of that, and worth citing directly: ddbeck's README checklist** — <https://github.com/ddbeck/readme-checklist>. Harder rules on the same four-task spine:
- "**Describe the project in terms of what the project does or achieves, not what it's made out of. Focus on why not what. This is the hardest part of writing a README.**"
- Warning: "You may be tempted to describe how the project is made — what languages, technologies, and tools — instead of what the project does."
- Micro-rules: second person; action verbs, no passive; "Avoid the verbs to be, to have, and (sometimes) to get."
- Use: "List the steps to install and use the project one time… **stop once the project works once.** Extended usage instructions belong in dedicated documentation files, not your README."
- **Numeric thresholds**: "If your README is more than three or four screens long" → add a table of contents. "If your README is more than ten or twelve screens long, move stuff into separate documents… **A comprehensive README is a bad README.**"

Note that this directly contradicts Make a README's "too long is better than too short," and it is the better rule.

**How-to template** — skeleton: Title · Overview ("This guide explains how to {task}") · Before you start (optional) · {Task name} with numbered steps · {Sub-task} (optional, "only if the task is big and complex") · See also.

Rules: "The how-to assumes that a user has basic knowledge of the application and has already read the quickstart and the tutorial." · **"Do not use a how-to to teach concepts."** · "Address one logical goal (task) per how-to page." · "Use conditional imperatives." · **"Avoid over-documenting multiple ways of achieving the same task"** — "By suggesting multiple ways to complete a task, you're asking users to think through the different ways and choose. Save your users' time and effort by eliminating the options." · "avoid providing too many links within the guide. Keep your users on a single page as much as possible and provide links to additional resources at the bottom." · **hard ceiling: "restrict to a maximum of 8-10 steps per task."** · task headings use the bare infinitive — "Don't use the -ing form of the verb because it is harder to translate." · one action per step, and provide sample output "so that the users can validate whether they performed the step correctly." · Prerequisites should include **escape hatches**: "provide cues that signal to a user that they're probably in the wrong place and offer more suitable options."

**Tutorial template** — Overview ("In this tutorial, you'll learn how to…", audience, assumptions, and **"By the end of this tutorial, you'll be able to:"**) · Background (optional) · Before you start · {Task name} · Summary · Next steps.

Rules: **"Ideally, your tutorial should take 15 to 60 minutes to complete."** · learning objectives are written **first**, before the content, and used to decide scope · **"Avoid writing procedures that are more than seven primary steps long"** and **"Aim for no more than four substeps in any primary step"** · "Express steps as a complete thought. Instead of saying, 'Set up access', you might say, 'Set up access to a Cloud Storage bucket'." · Summary must not repeat the learning objectives word for word.

**Reference template** — deliberately minimal: a reference description, then a `Field | Description | Example` table, then an optional `Command | Description | Argument | Example` table. Rules: "It aims to present concise, structured information that a user can quickly scan. **It is important to limit procedural or instructional content.**" · "Organize the tables or structured entries so that they appear in the same order as in the reference material."

**Concept template** — supplies sentence stems rather than instructions, which is its distinguishing feature: "This article explains the basics of {concept} and how it works in {the tool or context}" · `{X} is` / `{X} represents` / `{X} is similar to` / `{X} addresses the common pain points of…` / "The reason {X} is designed that way is because historically, …". Rules: one concept per document; "Avoid implementation details"; one primary diagram near the top; "Opt for universal metaphors that are culture, age, and background-independent"; related links "split them into a few groups… not more than 3-5 links each." Naming: acceptable titles are `Overview of {X}` / `Introduction to {X}` / `About {X}` / `Understanding {X}` — **"Avoid using titles such as 'Overview' or 'Introduction' without any additional nouns. Vague titles are less discoverable."** The project notes its own equivalence: "Concept (used in GitLab and DITA frameworks) or Explanation (used by Diataxis framework)… will be treated as synonyms."

**Release notes template** — Title (`Release notes - {Product} {0.0.0}`) · release date `YYYY-MM-DD` · summary · New features · New features requiring configuration updates · Improvements · API/Web service updates · Bug fixes · Known issues · Deprecation notice. Rules: **write in the second person** · **"Write in the present tense, except when you describe bug fixes; use the past tense for bug fixes."** · new features: describe how it **benefits** the stakeholder, then **link to the full documentation, which "becomes the source of truth"** · known issues must "describe a workaround if possible" · deprecations must name the replacement and **the date the feature is removed**.

**API reference template** — three-part structure: API overview · resource reference · endpoint reference. The **mood distinction** is the standout rule: "The name of the endpoint usually starts with a verb in the **imperative** mood, such as 'Retrieve a user.' By contrast, the description usually starts with a verb in the **indicative** mood, such as 'Retrieves a user by userID'." Parameter tables: "start the description with a noun and omit the articles (the/a/an). No need to write 'defines/specifies'." And: **"Do not leave cells empty in the table. If there is no content, fill with 'N/A'."**

**Cross-cutting writing tips** (`writing-tips.md`, `STYLE-GUIDE.md`)
- "**Avoid adding your own opinions, or the opinions of others.** Doing this clouds a reader's ability to draw conclusions from the documentation." (Note this is the exact opposite of Diátaxis's explanation rule — the two are talking about different modes and neither says so.)
- **Chunking**: "For procedures with numerous steps, consider 'chunking' content into sub-sections of 5-10 steps… gives the reader a sense of accomplishment after each chunk."
- "Each step is a single sentence (you should be able to read it aloud, and it should make grammatical sense)."
- Conditional steps: "**Always start the conditional steps with a condition** so that users who do not meet the condition can skip the step."
- "Create an outline of the headings you want to include in the document before you start writing… It's a lot easier to move things around with headings than to move blocks of content."
- **Link placement**: "Add any links you mention in the body of your content into the 'See also' section. The inline links may get lost in long articles, and scanning for links adds to your audience's cognitive load."
- **Inverted pyramid at sentence level**: three things go first — **goal, location, condition.** "To request a template, send a request to the TGDP" not "The process of requesting a template begins with…"
- "**Every word must have earned its place in a text. If you can cut a word because it is not justified in the text, cut it.**"
- **"Do not cluster more than 3 words."** "Readme documentation of the Terra service" not "Terra service readme documentation."
- **A three-tier link risk model** I have not seen elsewhere: **low risk** — don't hyperlink, explain how to find it ("go to the Firebase website and search for…"); **medium risk** — link the site and say what to search for; **high risk** — deep-link a specific topic. External links get an "Accessed on {date}".
- **Notes**: "Use notes sparingly… A rough guide is one note per topic." Placed **before** the thing they qualify, never after. Three severities: **Tip · Caution · Warning.**
- Tables: "prefer bullet lists over tables whenever possible."

## 2.6 Divio's version, and how it differs from Diátaxis

<https://docs.divio.com/documentation-system/>

The corporate-hosted descendant of Procida's 2017 post, effectively frozen 2017-era material with light editing. Worth reading precisely because the divergence from diataxis.fr shows what nine years of development added.

Framing, verbatim: "There is a secret that needs to be understood in order to write good software documentation: there isn't one thing called documentation, there are four." · "It doesn't matter how good your product is, because if its documentation is not good enough, people will not use it." · "documentation needs to include and be structured around its four different functions… **And documentation needs to be explicitly structured around them, and they all must be kept separate and distinct from each other.**" · "each of these kinds of documentation has **only one job**."

| | docs.divio.com | diataxis.fr today |
|---|---|---|
| Self-description | "a simple, comprehensive and nearly universally-applicable **scheme**" | "a way of thinking about and doing documentation" — a **map** plus a **compass** |
| Modality | **Prescriptive** — "documentation needs to be explicitly structured around them" | **Diagnostic and anti-plan** — "the structure it proposes is not intended to be a plan… It's a guide, a map", and "it discourages planning and top-down workflows" |
| Axes | "practical steps / theoretical knowledge" × "studying / working (coding)" | **action / cognition** × **acquisition / application**, grounded in *knowing how / knowing that* |
| Scope | software product documentation | "the practitioner in a domain of skill" — any craft |
| Tutorials | 8 workmanlike rules | 10 pedagogical principles with a theory of learning attached |
| How-to | procedural — steps, flexibility, naming | adds the critique of tool-shaped how-tos, and **flow** |
| "Language of…" stems | absent | present for all four modes |
| Quality theory | absent | the functional / deep split |
| Workflow | absent | the four-step loop, "don't worry about structure", "complete, not finished" |

Divio-only lines worth keeping: on tutorials, "It's perfectly acceptable if what you get the beginner to do is not the way an experienced person would, or even if it's not the 'correct' way — **a tutorial for beginners is not the same thing as a manual for best practice**. The point of a tutorial is to get your learner started on their journey, not to get them to a final destination." And: "If the learner's actions produce an error or unexpected results, your tutorial has failed — **even if it's not your fault**." And on how-tos: "A tutorial is what you decide a beginner needs to know. **A how-to guide is an answer to a question that only a user with some experience could even formulate.**"

## 2.7 Procida's originals — the 2017 post and talks

- 2017 blog post, archived: <https://web.archive.org/web/20191225004158/https://www.divio.com/blog/documentation/> (19 May 2017)
- PyCon AU 2017 talk, "What nobody tells you about documentation": <https://www.youtube.com/watch?v=t4vKPhjcMZg> · <https://pyvideo.org/pycon-au-2017/what-nobody-tells-you-about-documentation.html>
- Write the Docs EU 2017, retitled "The four kinds of documentation, and why you need to understand what they are": <https://www.writethedocs.org/conf/eu/2017/speakers/>
- EuroPython 2018 workshop deck, "Let's get your documentation right": <https://ep2018.europython.eu/media/conference/slides/get-your-documentation-right.pdf>

What is in the originals and not on diataxis.fr:

**The names and order were different.** The 2017 blog lists them as "tutorials, how-to guides, **explanation** and technical reference." The Write the Docs EU abstract calls the fourth type **"understanding-oriented discussions"** — "explanation" does not appear. In the talk he is audibly unsure: "And lastly, discussions. Which I think is probably the — I think **I should call this background or something like that**."

**How-to guides were "problem-oriented", not "goal-oriented."** The 2018 slides read `LEARNING-ORIENTED / PROBLEM-ORIENTED / UNDERSTANDING-ORIENTED / INFORMATION-ORIENTED`.

**The second axis was originally concrete.** 2017: "what we need when we are actually at work, **coding**." 2018 slides: "Most useful when we're **coding**." Then "working". Then, by 2024, "**application**." That is the largest single wording drift in the framework, and it is worth noticing: the axis got more abstract as the theory got more ambitious.

**The technical-debt framing, which is the strongest statement of the blur problem anywhere and is talk-only** (≈26:21):
> "as soon as the characteristics of one of these quadrants starts appearing in another, the quality of the documentation as a whole will start to decline. In other words, if you add new material to the documentation, but you add it in the wrong place, **you're going to make your documentation worse, not better, by adding more material** — it'll be less useful for the reader, and it'll be harder for the author to maintain. **You'll literally be incurring technical debt.**" And: "there's this kind of **gravitational pull** between all these quadrants… **your job as a documentation writer is to resist those inward tensions and that temptation to allow these things to blur.**"

Today's `/map/` flattens this to "a natural tendency to blur the distinctions."

**Craft, not machinery** (talk only, and he flags it as the key insight): "this is really **my only insight of the last couple of years**, that technology — we should stop thinking about technology as a matter of **machinery** and start thinking of technology as **craft or skill**."

**Tutorials, more pointed than anywhere since**: "**Your project probably right now lacks an adequate or a good tutorial and you're probably losing users as a result.** Even if your tutorial is pretty good, it's still probably not working for some users whom you are losing as a result."

**On developers who only write reference**: "For some developers, reference guides are the only kind of documentation they can imagine." And the consequence: "If you don't provide space for those other things, they're going to end up in your reference material and make your reference material less effective." On explanation: "Programmers love explaining things. So they need to shut down this instinct of needing to explain… **explanations get in the way of action**."

**The exclusion that matters most for Part 3** — 2017 blog only, and it is the clearest statement anywhere that the framework has a boundary:
> "where do things like **changelogs, contribution policies**, and other information about the project fit into this scheme? The answer is that **they do not** — because they are, strictly speaking, project documentation rather than documentation of the software itself. They can simply be kept in appropriately-named sections alongside the other material — as long as they are not mixed up in it."

**Chronology, reconstructed** (there is no history page; `diataxis.fr/history/` 404s and always has). Django ticket #26003, Dec 2015, ships the four-way split in Django 1.9 with the note "Thanks Daniele Procida for coauthoring" — labelled *Tutorials / Topic guides / Reference guides / How-to guides*. Blog post May 2017. PyCon AU Aug 2017. Write the Docs EU Sept 2017. EuroPython workshop July 2018. Standalone Sphinx site March 2020. **The name "Diátaxis" is adopted around April 2021.** Software Sustainability Institute fellowship 2021. Divio → Canonical 2021–22. **The compass, the map/foundations split and the quality page are 2023–24 inventions — six or more years after the original framing.** The `/complex-hierarchies/`, `/development/`, `/needs/` and `/adoption/` pages were all removed by 2025–26.

**Canonical's restatement adds one line with no diataxis.fr equivalent** (<https://ubuntu.com/blog/diataxis-a-new-foundation-for-canonical-documentation>):
> "**As a lens, Diátaxis is unforgiving.** The more thoroughly the structure is adopted, the more mercilessly it exposes gaps, missteps and conflations. Naturally this means that **the first thing Diátaxis does is make existing documentation look worse, not better.**"

## 2.8 Docs for Developers

<https://docsfordevelopers.com/> · Bhatti, Corleissen, Lambourne, Nunez, Waterhouse; Apress 2021, 2nd edition 2026. Springer: <https://link.springer.com/book/10.1007/978-1-4842-7217-6>

Eleven chapters, running on one worked example (Corg.ly, "a service that translates dog barks into human language"). The second edition adds guidance on "how to use AI in your writing process, without losing your own voice and experience."

Chapters: 1 Understanding your audience · 2 Planning your documentation · 3 Drafting · 4 Editing · 5 Integrating code samples · 6 Adding visual content · 7 Publishing · 8 Gathering and integrating feedback · 9 Measuring documentation quality · 10 Organizing documentation · 11 Maintaining and deprecating.

**The friction log** — the artifact the book is best known for:
> "A friction log is a journal in which you try your software as a user would and record your experiences… log each step sequentially, noting the behavior you expect and the actual behavior of your software. **The bigger the gap between expectation and reality, the bigger the opportunity to improve your docs or software.**"

Seven rules: tight scope with a clear beginning and end · a header block recording scenario, environment, version · **drop your own knowledge** ("How does it feel to complete a step? Did it seem easy? Are you reassured you're on the right track? Are you feeling unsure? Lost? Annoyed?") · numbered steps, one task per line · **colour code** green for easy, red for blocking · **split docs fixes from product fixes** and file bugs for the latter · rerun periodically.

**Personas are deliberately minimal** — five fields, not a marketing sheet: Developer skill · Programming languages · Developer environment · Operating system · Team role. User story format: `As a [type of user], I want [activity] so that I can [goal].` "The user story is not focused on knowing how to use the API… It's focused on the higher-level tasks users are trying to achieve."

**Drafting.** Head the empty document with three carried-over lines — **Audience · Purpose · Pattern** — then derive the title: "The title should be the shortest, clearest rephrasing of the document's purpose from the user's perspective." Then: **"Limit your document to only one goal. If your document has several goals, you probably need multiple documents."** The outline is "the pseudocode of a document."

Element rules: "Limit paragraphs to five sentences or fewer when possible." · procedures always numbered, one action per step, state the starting state, and **end with a verification step** — "This serves as a kind of unit test for the documentation, and prevents users from compounding any errors." · "If you find yourself listing more than ten items, consider dividing the list into smaller lists." · exactly three callout severities — **Warning** ("Readers might be in danger, personal data might be at stake, or the system may suffer irreversible damage"), **Caution** ("An action might have unexpected consequences"), **Note** — with alert fatigue named as the anti-pattern.

Writing for skimming, with the number: "based on the time readers spend on a page, they can read at most **28%** of the words on a page" (Nielsen). "Include any critical information in the first three paragraphs."

Getting unstuck: let go of perfectionism ("The first draft is a judgment-free zone") · highlight missing content with `[TODO]` · **write out of sequence** — "the first thing that people read — the introduction — is the last thing you write."

**Editing has two orthogonal taxonomies, and it is worth keeping them straight.**

*Four passes, in this order* — "Editing in this order lets you start with what you, the developer, know best (technical accuracy) and work toward what your users want":
1. **Technical accuracy** — "If someone follows these instructions, will they get the result you promised them?"
2. **Completeness** — with the caveat: "**Completeness is not the same as telling people everything.** It's as easy to lose readers with too much information as it is with too little."
3. **Structure**
4. **Clarity and brevity** — framed as "code refactoring for documentation."

*Three review stages*: self-review → peer review → technical review. Peer review is "similar to code reviews for code," with two request rules: say what kind of feedback you want, and say how you want to receive it.

**The "plussing" rule** (from Pixar) is the book's most quotable line on giving feedback:
> "**You may only criticize an idea if you also add a constructive suggestion.**"

Three parts: focus on the idea, not the person · follow up with a constructive suggestion · allow the recipient time to react. Say "I found this part unclear," not "You got this wrong."

**Code samples — five principles**: **Explained** ("your explanation shouldn't be a description of what it does, but **why** it does it") · **Concise** ("Aim for minimal reproducible examples") · **Clear** · **Usable/extensible** ("Make it clear where and how a reader needs to amend their own code") · **Trustworthy** ("Be consistent and test, test, and test again"). On autogeneration: "no matter which tool you use, autogenerated samples need human input and review. **Think before you automate!**"

**Visuals**: "simplify to amplify"; **one idea per diagram**; never use screenshots as the sole source of critical information "because readers can't copy them"; contrast at least 4.5:1; publish as SVG. Contrarian and worth quoting on alt text: "A better practice is to include a full description of what the image shows **within the body of your main text**… add a description of the content of the image as if the image wasn't there at all. For example, 'there is a small cog at the top of the menu' rather than 'an image of a small cog at the top of the menu.'" On video: "Beware anyone who tells you that videos are the solution to any software documentation problem… the path to success is littered with abandoned YouTube channels."

**Publishing**: assign **a single final approver**, with the rule —
> "No document is ever going to be perfect, but **no released document should be harmful.**"

Stop criteria decided in advance: "Will it cause harm to people? Damage to systems or software? Data loss?" Parity rule: "If your organization wouldn't release code without a peer review and some automated testing, you shouldn't release your documents that way, either." And: "**You can't automate toil away until you understand where toil exists.**"

**Measuring quality — and this is where it disagrees with Diátaxis.** Definition, from Macnamara et al.: **"A document is good when it fulfills its purpose."** Two categories, borrowed from software testing: **functional quality** = "whether or not a document accomplishes its purpose or goal"; **structural quality** = "whether a document is well written and well structured."

Functional quality has five attributes: **Accessible** ("the most essential aspect"; and the one hard readability number in the book — "**technical documentation should be written to a tenth grade level**") · **Purposeful** (with the metric **Time to Hello World**) · **Findable** (quoting Mark Baker: "The real findability problem is how to get readers from the wrong place deep within your content to the right place deep within your content") · **Accurate** · **Complete**.

Structural quality is the **three Cs: Clear · Concise · Consistent.**

The claim that matters:
> "Ideally, your documentation should have both high structural quality and high functional quality. **However, functional quality is more important.** A well-structured, well-written document that doesn't accomplish its goal is a poor piece of documentation. **A document with structural issues that still accomplishes its goal is a good document.**"

With the trap named: "it's easy to focus on structural quality instead of functional quality. Metrics for word count, time your users spend on a page, and consistency of language are easier to gather than whether or not a user is successful."

**Note the terminological collision.** Procida's *functional* quality (accuracy, completeness, consistency) maps roughly onto this book's *functional* quality plus part of its *structural* quality; Procida's *deep* quality has no equivalent here at all. What both agree on is the priority: substance before surface, and the easy-to-measure thing is not the important thing.

Nine metrics: unique visitors · page views · time on page · bounce rate · search keyword analysis · reading level · support issues related to documentation · link validation · Time to Hello World. Five tips: make a plan (Bob Watson's three questions — "Why do you want to measure? What will you do with the information? How will your effort advance the goals of your organization?") · **establish a baseline** · consider context · use clusters of metrics · mix qualitative and quantitative.

**IA**: three primitives — sequences, hierarchies, webs. Content audit asks three questions per page (is it useful, is it up to date, is it in the right place) and assigns one of five actions: **Keep · Remove · Review for accuracy · Merge · Split.** Introduces **escape hatches** as a named navigation cue. Warns against automated content reuse: "You're better off settling the document in a single best location and linking to it from multiple places."

**Maintenance**: **freshness metadata**, Google's format —
```html
<!-- Freshness: {owner: "karthik" reviewed: 2021-06-15} -->
```
> "If the document isn't updated in a set amount of time, for example six months, a reminder is sent to the document owner… Google found that **documentation that uses freshness checks is more trustworthy**."

Deprecation: "You might be tempted to hide the features that you're deprecating, but it's critical that your users know if something they're relying on is going to go away." Sequencing rule: **publish the migration guide before you announce the deprecation.** Deletion: "If a particular page has a very low number of page views, and a large number of issues filed against it, it might be worth deleting the content instead of trying to fix it." Set up redirects "to prevent users from being stranded."
## 2.9 README structure

### Make a README — <https://www.makeareadme.com/>

Danny Guo's guide plus a live-rendering Markdown template. Tagline: "Because no one can read your mind (yet)."

- Definition: "A README is a text file that introduces and explains a project."
- When: "Definitely before you show a project to other people or make it public. You might want to get into the habit of making it the first file you create in a new project."
- **The length rule, which inverts the usual advice**: "while a README can be too long and detailed, **too long is better than too short**. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information."
- Section list, in order: Name · Description · Badges · Visuals · Installation · Usage · Support · Roadmap · Contributing · Authors and acknowledgment · License · Project status.
- Description: "If there are alternatives to your project, this is a good place to list differentiating factors."
- Usage: "Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long."
- Contributing: document the **lint** and **test** commands specifically.
- Project status: "If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely."
- On standardisation: "Is there a standard README format? **Not really.**"

### standard-readme — <https://github.com/RichardLitt/standard-readme> (spec at `/spec.md`)

The one README source with a strict, compliance-checkable ordering. "Sections must appear in order given below. Optional sections may be omitted."

Ordered skeleton with status: **Title** (required; must match repo/folder/package names) · **Banner** (optional; local image; directly after the title) · **Badges** (optional; newline delimited; prefer locally hosted images "to avoid external requests, which can result in tracking") · **Short Description** (required; **under 120 characters**; own line; must match the package manager and GitHub descriptions) · **Long Description** (optional) · **Table of Contents** (required, but **optional for READMEs shorter than 100 lines**) · **Security** (optional) · **Background** (optional; motivation, abstract dependencies, intellectual provenance) · **Install** (required by default; must contain a code block) · **Usage** (required by default; must contain a code block; if importable, show **both import and usage**) · **Extra Sections** (optional; after Usage, before API) · **API** (optional) · **Maintainers** (optional; "the people who should be pinged", with one contact method each) · **Thanks** (optional) · **Contributing** (required; state whether PRs are accepted and any requirements; "Be as friendly as possible") · **License** (required; **must be last**; full name or SPDX identifier, and the owner).

Also: "Must not contain broken links." "If there are code examples, they should be linted in the same way as the code is linted in the rest of the project."

### Readme Driven Development — <https://tom.preston-werner.com/2010/08/23/readme-driven-development.html>

Tom Preston-Werner, 2010. The canonical argument for the README as a design artifact rather than a description.

- **"Write your Readme first. First. As in, before you write any code or tests or behaviors or stories or ANYTHING."**
- "A perfect implementation of the wrong specification is worthless."
- "Until you've written about your software, you have no idea what you'll be coding."
- Why a single file rather than a spec suite: "RDD keeps you safe from DDD-turned-waterfall syndrome by **punishing you for lengthy or overprecise specification**. At the same time, it rewards you for keeping libraries small and modularized."
- "Retroactively writing a Readme is an absolute drag, and you're sure to miss all kinds of important details when you do so."

### README vs docs site — Tom Johnson, <https://idratherbewriting.com/learnapidoc/docapis_doc_overview.html>

- **"As a rule of thumb, a README might be the length of a poem while your docs are the length of a novel."**
- Pattern when a docs site exists: "provide 1-2 sentences for each of the main sections and then point users back to your main docs for details."
- Content that belongs in the README and **not** in the docs site: code of conduct, contributor protocol, filing issues, pull requests, licence, team and contributors.
- "README files shouldn't contain so many doc details that the information begins to conflict or become outdated with your main documentation."

**Note the live conflict.** Make a README says too long beats too short; Tom Johnson says poem versus novel. The reconciling variable is whether a separate docs site exists — which is exactly the Orientation-mode question in Part 3.

## 2.10 Changelogs — Keep a Changelog

<https://keepachangelog.com/en/1.1.0/>

Olivier Lacan's spec. Subtitle, verbatim: **"Don't let your friends dump git logs into changelogs."**

- Definition: "a file which contains a **curated, chronologically ordered** list of **notable** changes for each version of a project."
- Why: "People do. Whether consumers or developers, the end users of software are human beings who care about what's in the software."

**The seven guiding principles**, verbatim and in order: 1. "Changelogs are for humans, not machines." 2. "There should be an entry for every single version." 3. "The same types of changes should be grouped." 4. "Versions and sections should be linkable." 5. "The latest version comes first." 6. "The release date of each version is displayed." 7. "Mention whether you follow Semantic Versioning."

**The six change types**, in order: `Added` · `Changed` · `Deprecated` · `Removed` · `Fixed` · `Security`.

Keep an `Unreleased` section at the top so upcoming changes are visible and release-time work is a move rather than a write.

**Four named antipatterns**
1. **Commit log diffs.** "they're full of noise. Things like merge commits, commits with obscure titles, documentation changes, etc." The distinction: "The purpose of a commit is to document a step in the evolution of the source code… The purpose of a changelog entry is to document the noteworthy difference, **often across multiple commits**, to communicate them clearly to end users."
2. **Ignoring deprecations.** "When people upgrade from one version to another, it should be painfully clear when something will break." → **"If you do nothing else, list deprecations, removals, and any breaking changes in your changelog."**
3. **Confusing dates.** ISO 8601 only: `2017-07-17`.
4. **Inconsistent changes.** "A changelog which only mentions some of the changes can be as dangerous as not having a changelog… your users may mistakenly think that the changelog is the single source of truth. **It ought to be.**"

Other rules: filename `CHANGELOG.md`, not `HISTORY`/`NEWS`/`RELEASES` — "why make it harder for your end users to consistently find notable changes?" · GitHub Releases are "a non-portable changelog" and "not very discoverable by end-users" · yanked releases must still appear, tagged `[YANKED]` — "Often these versions don't even appear in change logs. **They should.**" · remove empty sections: "they occupy too much space and create too much noise… People will have to assume that the missing sections were intentionally left out."

## 2.11 Architecture Decision Records

### Michael Nygard, "Documenting Architecture Decisions" (2011) — <https://www.cognitect.com/blog/2011/11/15/documenting-architecture-decisions>

The post that created the format. It is itself written as an ADR.

- "Agile methods are not opposed to documentation, only to valueless documentation."
- **"Large documents are never kept up to date. Small, modular documents have at least a chance at being updated."**
- The failure it prevents: without recorded rationale a newcomer can only **blindly accept** ("the development team becomes afraid to change anything and the project collapses under its own weight") or **blindly change** ("damaging the project's overall value without realizing it").
- Scope: decisions "that affect the **structure, non-functional characteristics, dependencies, interfaces, or construction techniques**."
- "ADRs will be numbered sequentially and monotonically. Numbers will not be reused." Reversal does not delete: mark the old one **superseded** — "It's still relevant to know that it *was* the decision, but is no longer *the* decision."

**The five-part template**
1. **Title** — "short **noun phrases**." e.g. "ADR 9: LDAP for Multitenant Integration".
2. **Context** — "describes the forces at play, including technological, political, social, and project local. These forces are probably in tension, and should be called out as such. **The language in this section is value-neutral. It is simply describing facts.**"
3. **Decision** — "stated in **full sentences, with active voice. 'We will …'**"
4. **Status** — proposed / accepted / deprecated / superseded, with a reference to the replacement.
5. **Consequences** — "the resulting context, after applying the decision. **All consequences should be listed here, not just the 'positive' ones.**"

**The writing rules — the highest-value passage in the ADR literature:**
> "**The whole document should be one or two pages long.** We will write each ADR **as if it is a conversation with a future developer**. This requires good writing style, with **full sentences organized into paragraphs. Bullets are acceptable only for visual style, not as an excuse for writing sentence fragments.** (Bullets kill people, even PowerPoint bullets.)"

Also: "The consequences of one ADR are very likely to become the context for subsequent ADRs."

### joelparkerhenderson/architecture-decision-record — <https://github.com/joelparkerhenderson/architecture-decision-record>

The most-linked practical collection.

- Filenames: `choose-database.md`, `format-timestamps.md`. "**The name has a present tense imperative verb phrase.** This helps readability and matches our commit message format."
- Four characteristics of a good ADR: **Rationale** (context, pros and cons, cost/benefit) · **Specific** ("Each ADR should be about **one** AD") · **Timestamps** ("especially important for aspects that may change over time, such as costs, schedules, scaling") · **Immutable** ("Don't alter existing information in an ADR. Instead, amend… or supersede").
- Good Context includes "rationale based on the **social and skills makeup** of your teams."
- Good Consequences includes subsequent ADRs triggered, and after-action review — "It's typical for teams to review each ADR one month later, to compare the ADR information with what's happened in actual practice."
- On process: "Decision records are **not valuable if they're just an after-the-fact forced paperwork requirement**."
- On naming: some teams prefer "decisions" to "ADRs" — "people learn faster with words ('decisions') over abbreviations, and people are more motivated to write work-in-progress docs when the word 'record' is removed, and also some developers and some managers dislike the word 'architecture'."
- **It contradicts its own immutability rule, and both positions are worth carrying**: "**In theory, immutability is ideal. In practice, mutability has worked better for our teams.** We insert the new info into the existing ADR, with a date stamp, and a note that the info arrived after the decision. This kind of approach leads to a 'living document'."

Tyree & Akerman is the heavyweight alternative skeleton: Issue · Decision · Status · Group · Assumptions · Constraints · Positions · Argument · Implications · Related decisions · Related requirements · Related artifacts · Related principles · Notes. Its standout line: "**Argument**: Outline why you selected a position… **This is probably as important as the decision itself.**"

### MADR — <https://adr.github.io/madr/>

"Markdown Architectural Decision Records" — "decisions that matter." Current release 4.0.0 (2024-09-17). Directory `docs/decisions/`, filename `NNNN-title-with-dashes.md`.

Ordered skeleton: YAML front matter (`status`, `date`, `decision-makers`, `consulted`, `informed`) · `# short title` · `## Context and Problem Statement` ("two to three sentences or… an illustrative story. You may want to articulate the problem in form of a question… **Make the scope of the decision explicit**") · `## Decision Drivers` (optional) · `## Considered Options` · `## Decision Outcome` — fixed sentence pattern **`Chosen option: "{title}", because {justification}`** · `### Consequences` (`* Good, because …` / `* Bad, because …`) · `### Confirmation` (optional but "included in many ADRs" — "Describe how the implementation / compliance of the ADR can/will be confirmed. Is there any automated or manual **fitness function**?") · `## Pros and Cons of the Options` (optional; Good / Neutral / Bad per option) · `## More Information`.

Note the scope caution: "**Do not take the term 'architecture' too seriously** or interpret it too strongly."

### adr.github.io — <https://adr.github.io/>

Vocabulary. **AD** = "a justified design choice that addresses a functional or non-functional requirement that is architecturally significant." **ADR** = "captures a single AD and its rationale." **Decision log** = the collection. Names the Y-statement format and Zdun et al., *Sustainable Architectural Decisions*.

## 2.12 API reference writing

### Tom Johnson, *Documenting APIs* — <https://idratherbewriting.com/learnapidoc/>

The most complete free course on API documentation. The five-section reference model, at `/docapis_api_reference_tutorial_overview.html`: **Resource description · Endpoints and methods · Parameters · Request example · Response example and schema.**

**Resource descriptions** (`/docapis_resource_descriptions.html`)
- **"Resource descriptions (as well as endpoint descriptions) are typically short, usually 1-3 sentences."**
- The mode split, stated cleanly: "**Reference documentation**: Concise, bare-bones information that developers can quickly reference." vs "**User guides/tutorials**: More elaborate detail… step-by-step instructions, code samples, concepts, and procedures."
- "The description of the resource is likely something you'll re-use in different places… As a result, **put a lot of effort into crafting it**. Consider storing the description in a **re-usable snippet**."

**Endpoints and methods** (`/docapis_resource_endpoints.html`)
- Represent path parameters in **curly braces** — `/campaigns/{campaign_id}/actions/send` — and reuse the same colour for them in the parameter table below.
- **"The endpoint shows the end path only."** Not the full URL. "Including the full resource URL would distract users." Base path and auth are explained once in Getting Started.
- Consolidate endpoints on one page if they are mostly the same; separate them if responses, parameters and errors are substantially unique. Long pages are a deliberate developer-docs pattern because of Ctrl+F.

**Parameters** (`/docapis_doc_parameters.html`)
- Four locations, using OpenAPI terminology deliberately ("Using industry standard terminology helps you develop a vocabulary"): **header · path** (never optional) **· query string** (order does not matter) **· request body**.
- **The core rule: "Regardless of the parameter type, define the following with each parameter: Data type. Max and min value."**
- Five common REST data types: string, integer, boolean, object, array.
- **"Omitting information about max/min values or other prohibited values (when applicable) is a common pitfall in docs."** Exceptions: booleans, and strings restricted to enums.
- Boundary testing as a documentation method: try a 300-character ID, an 80 MB attachment. "Many times your product team might not even know what limitations exist."
- "Try running an endpoint without the required parameters, or with the wrong parameters… See what kind of error response comes back. **Include that response in your status and error codes section.**"
- Standard columns: Parameter | Required/Optional | Data Type | Description.

**Request examples** (`/docapis_doc_sample_requests.html`)
- **"In general, use curl to show your sample request."** Three reasons: it is language-agnostic; it shows the required header information; it shows the method.
- **How many: "probably no more than a few… Users will usually understand the pattern after a few examples."** Add more only when parameters "wouldn't usually be used together."

**Response examples and schema** (`/docapis_doc_sample_responses_and_schema.html`)
- **You need both, and they differ**: "The example response should correspond with the example request… However, **the response schema is comprehensive of all possible properties returned**. This is why you need both."
- The schema must give three things: a description of each property, its data type, and whether it is required or optional.
- **"In the example response, the values should be realistic without being real."** Two failure modes: values "so fake they're distracting (such as users consisting of comic book character names)", and real customer data — "make sure it's not just from a cloned production database."

**Status and error codes** (`/docapis_doc_status_codes.html`)
- "Status codes are pretty subtle, but when a developer is working with an API, these codes may be the only 'interface' the developer has."
- **"All too often, status codes are uninformative, poorly written, and communicate little or no helpful information… Ultimately, status codes should assist users in recovering from errors."**
- **"comprehensively documenting all standard status codes, especially if rarely triggered by your API, is unnecessary."**
- Default placement is a **general page listing codes across the entire API**; link to it from endpoint pages that trigger particular codes.
- **"Where possible, document the exact text of the error in the documentation so that it easily surfaces in searches."**
- The exemplar is Twitter's 500: not "broken service" but "This is usually a temporary error, for example in a high load situation or if an endpoint is temporarily having issues. Check in the developer forums in case others are having similar issues, or try again later."

**Docs as code** (`/pubapis_docs_as_code.html`) — nine practices: plain text files; an open-source static site generator; a text editor rather than a black-box tool; version control, ideally the same repo as the code; branch/merge/pull rather than check-in/check-out; automated builds with continuous delivery; **validation checks via custom scripts** for broken links, improper terms and formatting "rather than spot checking the content manually"; managing docs with engineering process; "use the **same systems, processes, and workflows** with docs as you do with programming code." Heuristic: "If technical writers will create all the documentation, the choice of tools may not matter as much. But if **developers will be contributing**, it's generally advantageous to integrate your authoring and publishing tools into the developer's toolchain."

### Google API reference comments — <https://developers.google.com/style/api-reference-comments>

Covered in §2.2; the rules that matter most for a reference-writing skill:
- Every class, constant, field, enum, typedef and method described; every method with a description for **each parameter, the return value, and any exceptions thrown**.
- **A code sample of ~5–20 lines at the top of each unique page.**
- First sentence of a class description must be "unique and descriptive, yet short", must **not repeat the class name**, must not say "this class will…", and must contain **no period before its actual end** — generators truncate at the first period, so write "for example" rather than "e.g."
- **Present tense for all descriptions.**
- Opening-verb table: operation and return → a verb ("Adds…") · boolean getter → **"Checks whether…"** · non-boolean getter → **"Gets the…"** · no return → "Sets the…" / "Updates the…" / "Deletes the…" / "Registers…" · callback → **"Called by…"** · convenience constructor → **"Creates a…"**
- Parameters: capitalise, end with a period; non-boolean starts with "The" or "A"; boolean reporting state uses the fixed form **"True if …; false otherwise."**; defaults use the format `Default:`.
- Exceptions begin **"If …"** or **"Thrown when …"** depending on whether the generator inserts "Throws".
- Deprecations: name the replacement, name the version. "**Only the first sentence of a description appears in the summary section and index**, so put the most important information there."

### OpenAPI description conventions — <https://learn.openapis.org/specification/docs.html>

- **`summary` vs `description`**: "`summary` is used for **list view**, and should be kept short. **A single-sentence summary works well.** `description` is shown when the item is being viewed **in detail**… **Don't be afraid to add paragraph breaks, links, or even bullet lists in these fields.**"
- **The content rule, and it is the best statement of reference/description division I found anywhere**: "a parameter's **name, type and valid range of values are already present** in the API description. The description field can complement this by explaining the **purpose** of this parameter, the **effect of each value** or **possible interactions with other parameters**."
- Worked: a volume parameter typed `integer, 0–11` gets the description "0 means no audio output (mute). 10 is the maximum value. 11 enables the overdrive system (danger!). When set to 0 all other audio settings have no effect."
- Descriptions use CommonMark 0.27; keep formatting simple because "OpenAPI descriptions are meant to be included inside larger auto-generated documentation."
- Prefer explicit `example`/`examples` objects over examples embedded in prose — they render specially and can be used by mock servers.
- Best practices (`/best-practices.html`): design-first, not code-first — "The number of APIs that can be created in code is far superior to what can be described in OpenAPI." Single source of truth. Treat the description as a first-class source file in version control. DRY via `components` and `$ref`. "A good rule of thumb is to use the natural hierarchy present in URLs to build your directory structure."

## 2.13 Plain language

### Federal Plain Language Guidelines

**Availability finding, stated because it matters for citation.** Every `plainlanguage.gov/guidelines/*` URL now 301-redirects to a single Digital.gov landing page, and the PDF link is dead. The content survives at **<https://github.com/GSA/plainlanguage.gov>**, branch `main`, under `_pages/guidelines/` (50 Markdown files), and the 118-page March 2011 PDF is reachable at **<https://raw.githubusercontent.com/GSA/plainlanguage.gov/main/media/FederalPLGuidelines.pdf>**. Digital.gov confirms: "All of the original content from the PlainLanguage.gov website is archived in the PlainLanguage.gov GitHub repository."

**Stated purpose**: content should let users "**Find what they need / Understand what they find / Use what they find to meet their needs**." This is the direct ancestor of the ISO principles.

**Audience**
- "The first rule of plain language is: write for your audience."
- **The anti-grade-level rule**: "Don't write for an 8th-grade class if your audience is composed of PhD candidates, small business owners, working parents, or immigrants. **Only write for 8th graders if your audience is, in fact, an 8th-grade class.**" The guidelines explicitly reject a fixed reading-grade target.
- **"More than any other single technique, using 'you' pulls users into the information."** — "Copies of tax returns must be provided" → "You must provide copies of your tax returns."
- Q&A convention: the user asks with **I**, the agency answers with **we**.
- "Address separate audiences separately."

**Organisation**
- "Start by stating your purpose and the bottom line… Put the most important information at the beginning and include background information (when necessary) toward the end."
- **"Limit levels to three or fewer."**
- Three heading types, ranked: **question headings** (best) > **statement headings** ("next best choice") > **topic headings** ("most formal… sometimes they're so vague that they just aren't helpful").
- "With rare exceptions, **headings should be shorter than the content that follows them**."
- **Don't start every heading with "how to."** When they did, "users could not easily find the right section because their eyes stayed on the 'how to.'"
- One topic sentence per paragraph, up front: "Readers should be able to get good general understanding of your document by **skimming your topic sentences**."
- **"Place the main idea before exceptions and conditions."** Use "if" for conditions. Better still, restate positively: "All persons except those 18 years or older must…" → "Each person under 18 years of age must…"

**Words**
- A substitution table of roughly 229 pairs, of which **twelve are bolded as "the 12 offenders most likely to weaken your work"**: *addressees · assist/assistance · commence · implement · in accordance with · in order that · in the amount of · in the event of · it is · promulgate · this activity/command · utilize/utilization.*
- **Hidden verbs / nominalisations — two detection tells**: the endings **-ment, -tion, -sion, -ance**; or a linking verb — *achieve, effect, give, have, make, reach, take*. Also anything buried in "the … of". "**Verbs are the fuel of writing.**" — "make an application for" → "apply for"; "undertake the calculation of" → "calculate".
- **The four-word authority scheme**: **must** = obligation · **must not** = prohibition · **may** = discretionary · **should** = recommendation. On *shall*: Garner's rule is **"Delete every shall."** The guidelines note there are **76 pages in *Words and Phrases*** summarising hundreds of cases interpreting it.
- Contractions: "Write like you talk." But — "**Don't use them wherever possible, but wherever they sound natural.**"
- Jargon: "unnecessarily complicated language used to impress, rather than to inform." **"Readers complain about jargon more than any other writing fault."**
- **Abbreviations: "Limit the number of abbreviations you use in one document to no more than three, and preferably two."** Prefer a nickname over an acronym: `ESAC` → "the committee".
- **Noun strings, the threshold is three**: "Readability suffers when three words that are ordinarily separate nouns follow in succession. Once you get past three, the string becomes unbearable."
- Definitions: "We have one rule for dealing with definitions: **use them rarely**." Define at point of use. If a definitions section is unavoidable, put it at the **end**, unnumbered, alphabetical. **Never** put substantive material inside a definition.
- **"You don't need to use synonyms to make your writing more interesting. Federal writers are not creating literature."** Note this is the exact opposite of what a generative model does by default.

**Sentences — and an important negative finding**
The guidelines contain **no numeric sentence-length rule.** They say "Express only one idea in each sentence" and "Complexity is the greatest enemy of clear communication," but the widely-quoted "average 15–20 words" comes from elsewhere on the same site:
- **1998 guidance** accompanying President Clinton's plain-language memo: **"Your sentences should average 15–20 words, and never be longer than 40 words."**
- **Joe Kimble, "The Elements of Plain Language"** (Michigan Bar Journal, Oct 2002): "Prefer short and medium-length sentences. As a guideline, keep the average length to about 20 words."

Actual sentence rules: keep subject, verb and object close together — "The natural word order of an English sentence is subject-verb-object… When you put modifiers, phrases, or clauses between two or all three of these essential parts, you make it harder for the user to understand you." · **"Challenge every word — do you need it?"** with a flagship example cutting a 54-word sentence to 22 "with no loss of meaning" · cut the modifiers *absolutely, actually, completely, really, quite, totally, very* · cut doublets — "due and payable" → "due", "cease and desist" → "stop" · avoid double negatives ("no fewer than" → "at least"; "has not yet attained" → "is under") and "exceptions to exceptions", which are "just another form of a double negative."

**Paragraphs — the most useful number in the whole corpus**
> "Writing experts recommend paragraphs of **no more than 150 words in three to eight sentences**. Paragraphs should **never be longer than 250 words**. **Vary the lengths of your paragraphs to make them more interesting. As with sentence length, if all paragraphs are the same size your writing will be choppy.**"

Also: "There is nothing wrong with an occasional one-sentence paragraph." And: "Long sections are impossible to summarize meaningfully in a heading."

**Design and web**
- "Limit the document to five or six sections (about two per printed page)."
- Leading two points larger than type size. Ragged right margins. Bold for emphasis, not underline. Caps are shouting.
- **"Probably the most useful type of table is the 'if-then table.'"**
- **Cross-references: "keep them to no more than one in each section."** Three named anti-patterns: the **boomerang** (a cross-reference pointing at its own section), the **all-inclusive** ("and all other applicable laws and regulations"), the **never-ending story** (reference to reference to reference).
- Web numbers: users decide in as little as five seconds · they scan in an F-pattern and "on average, users only read the first two words on each line" · Nielsen and Morkes 1997 — **79% always scanned, only 16% read word-by-word** · Nielsen 2008 across 45,237 page views — **users read about 18% of what's on the page** · **"To get users to read half of your words, limit your page to 110 words or fewer"** · "you need to cut whatever you have in print form by 50 percent" · never "click here" or "read more" · **"Avoid FAQs. If you write clear web content that is easy to navigate and answers your readers questions, you will not need to create a FAQ."**

### ISO 24495-1:2023 — Plain language, Part 1

<https://www.iso.org/standard/78907.html> (bot-blocked; the abstract is readable via the Wayback Machine). International Plain Language Federation: <https://www.iplfederation.org/iso-standard/>

**What is paywalled, stated plainly**: the entire normative text — every guideline, all clause numbering, the roughly 485 individual ideas, and all examples. CHF 96. The standard is 14 pages. Edition 1, published 2023-06, ISO/TC 37.

**What is free**: the abstract, and the four principles as published by the federation that drafted the standard.

Abstract, verbatim on scope and limits:
> "This document is for anybody who creates or helps create documents. The widest use of plain language is for documents that are intended for the general public. However, it is also applicable, for example, to technical writing, legislative drafting or using controlled languages… While this document covers the essential elements of plain language, it has some intentional limits, as follows: — It does not cover all types of communication. It applies only to printed or digital information that is primarily in the form of text. — It does not include existing technical guidance about accessibility and digital documents, although the guidance can apply to both."

**The four governing principles**
1. **Readers get what they need** (relevant)
2. **Readers can easily find what they need** (findable)
3. **Readers can easily understand what they find** (understandable)
4. **Readers can easily use the information** (usable)

Note that ISO **splits** the older PLAIN triad's "find what they need" into *relevant* (the information is present at all) and *findable* (it can be located).

Underlying definition, adopted Antwerp 2014: "A communication is in plain language if its **wording, structure, and design** are so clear that the intended readers can easily find what they need, understand what they find, and use that information."

Free, quotable facts:
- **"The ISO plain language standard has roughly 485 ideas… but only 7% of these ideas focus on word choice."** This is the best available counter to "plain language means short words," and it is directly relevant to Part 3: banned-word lists are the smallest part of the problem.
- Drafted by 50 experts from 25 countries representing 19 languages; language-neutral by design.
- **Sentence-length targets are deliberately out of scope**: "Countries may also develop best practices to reflect what works within their own language, such as sentence length." ISO sets no numeric limit.
- The three methods, elaborated by the federation: **wording** ("Aim for one idea per sentence"; address readers directly), **structure** (logical order "according to the reader's logic (not the writer's logic)"; most important information first), **design** (headings "that reflect how the reader sees the content (not how the writer sees it)").
- On testing: "The only way to be sure a document is working for its readers is to ask them."
- Part 2 (legal communication) published August 2025; Part 3 (science writing) May 2026.
## 2.14 The numbers, collected

Every hard threshold from the sources above, with its provenance. These are the only defensible starting values for a linter; anything else is taste.

| Thing measured | Value | Source |
|---|---|---|
| Sentence length, average | 15–20 words, **never over 40** | 1998 guidance accompanying the Clinton plain-language memo, on plainlanguage.gov |
| Sentence length, average | about 20 words | Joe Kimble, "The Elements of Plain Language", 2002 |
| Sentence length, maximum | **fewer than 26 words** | Google style guide, accessibility |
| Sentence length | ISO sets **no** numeric limit, deliberately | ISO 24495-1 / IPLF |
| Paragraph length | **3–5 sentences welcomed; over ~7 avoided** | Google Technical Writing One, paragraphs |
| Paragraph length | **≤150 words in 3–8 sentences; never over 250** | Federal Plain Language Guidelines |
| Paragraph length | **3–7 lines** | Microsoft, scannable content |
| Paragraph length | **≤5 sentences where possible** | Docs for Developers, ch. 3 |
| Paragraph length | over 5 or 6 sentences "is often an indication that the paragraph is trying to convey too much" | Google style guide, paragraph structure |
| Paragraph variance | **"if all paragraphs are the same size your writing will be choppy"** | Federal Plain Language Guidelines |
| Noun-to-pronoun distance | **≤5 words**, else repeat the noun | Google Technical Writing One, words |
| Noun modifiers stacked | **≤2** | Google style guide, translation |
| Noun strings | **3 is the ceiling** — "Once you get past three, the string becomes unbearable" | Federal Plain Language Guidelines |
| Word clusters | **"Do not cluster more than 3 words"** | Good Docs Project style guide |
| Coordinate conjunctions per sentence | **≤3, ideally ≤2** | Microsoft, global communications |
| Abbreviations per document | **≤3, preferably 2** | Federal Plain Language Guidelines |
| List items | **≥2, ideally ≤7** | Microsoft, lists |
| List items | over 10 → split the list | Docs for Developers, ch. 3 |
| List nesting | **≤2 or 3 levels** | Federal Plain Language Guidelines |
| Document heading levels | **≤3** | Federal Plain Language Guidelines |
| Sections per document | **5 or 6** | Federal Plain Language Guidelines, design |
| Cross-references per section | **≤1** | Federal Plain Language Guidelines |
| Notes/callouts per topic | **~1** | Good Docs Project style guide |
| Table cell content | **≤2 sentences** | Google Technical Writing One |
| How-to steps | **maximum 8–10 per task** | Good Docs Project, how-to guide |
| Tutorial steps | **≤7 primary steps, ≤4 substeps each** | Good Docs Project, tutorial |
| Tutorial length | over 10 steps means the use case is too complex | Docs for Developers, ch. 2 |
| Tutorial duration | **15–60 minutes** | Good Docs Project, tutorial |
| Quickstart duration | **1–2 hours, shorter preferred** | Good Docs Project, quickstart |
| Procedure chunking | sub-sections of **5–10 steps** | Good Docs Project writing tips |
| Diagram complexity | **≤1 paragraph's worth of information**, or **≤5 explanatory bullets** | Google Technical Writing Two |
| Reference-page code sample | **~5–20 lines** at the top of each page | Google API reference comments |
| Resource/endpoint description | **1–3 sentences** | Tom Johnson, *Documenting APIs* |
| MADR problem statement | **2–3 sentences** | MADR 4 template |
| ADR total length | **1–2 pages** | Nygard |
| README short description | **under 120 characters** | standard-readme |
| README, add a ToC | over **3–4 screens** | ddbeck README checklist |
| README, split it up | over **10–12 screens** — "A comprehensive README is a bad README" | ddbeck README checklist |
| README, ToC optional below | **100 lines** | standard-readme |
| Interview sample size | **3–5 people per round** | Docs for Developers, citing Nielsen |
| Web page length for half-readership | **≤110 words** | plainlanguage.gov, web |
| Proportion of a page actually read | **~18%** (Nielsen 2008, 45,237 page views) / **at most 28%** (Docs for Developers) | plainlanguage.gov · Docs for Developers |
| Readers who scan rather than read | **79% scan, 16% read word-by-word** (Nielsen & Morkes 1997) | plainlanguage.gov, web |
| Print-to-web cut | **50%** | plainlanguage.gov, web |
| Reading level target | **10th grade** for technical documentation | Docs for Developers, ch. 9 |
| Reading level target | rejected — "Only write for 8th graders if your audience is, in fact, an 8th-grade class" | Federal Plain Language Guidelines |
| Colour contrast | **4.5:1** for text | Google accessibility · Docs for Developers |
| Freshness review interval | **6 months** | Docs for Developers, citing Google |
| ADR review interval | **1 month** after the decision, then at least yearly | joelparkerhenderson |
| Proportion of ISO 24495-1 about word choice | **7% of ~485 ideas** | International Plain Language Federation |

The last row deserves a moment. **Ninety-three percent of the leading international plain-language standard is about something other than which words you use.** Any framework that consists of a banned-word list is addressing seven percent of the problem.

## 2.15 Where the sources disagree

Worth recording, because a framework that merges them silently is hiding decisions it should be making explicitly.

1. **`can`.** Google: use *can* for optional actions and ability. Microsoft: "When you see *can* in your writing, consider deleting it."
2. **README length.** Make a README: "too long is better than too short." ddbeck and Tom Johnson: "A comprehensive README is a bad README"; poem versus novel. Resolved by asking whether a separate docs site exists.
3. **ADR immutability.** Nygard and joelparkerhenderson's stated rule: never alter an accepted ADR, supersede it. joelparkerhenderson's own practice section: "**In theory, immutability is ideal. In practice, mutability has worked better for our teams.**"
4. **Opinion in documentation.** Diátaxis, on explanation: "Admit opinion and perspective… Explanation can and must consider alternatives." The Good Docs Project, in its general writing tips: "**Avoid adding your own opinions, or the opinions of others.** Doing this clouds a reader's ability to draw conclusions." They are talking about different modes and neither says so — which is itself an argument for mode-scoped rules.
5. **Person-first vs identity-first disability language.** Microsoft defaults to person-first. Google says research the community and notes identity-first is preferred in autistic, blind and Deaf communities.
6. **Reading-grade targets.** Docs for Developers prescribes tenth grade. The Federal Plain Language Guidelines explicitly reject fixed grade targets in favour of audience analysis.
7. **What "functional quality" means.** Diátaxis: accuracy, completeness, consistency, usefulness, precision — measurable, and a precondition for deep quality. Docs for Developers: whether the document achieves its purpose — with *structural* quality (clear, concise, consistent) as the lesser sibling. The vocabulary collides; the priority ordering agrees.
8. **Sentence-length numbers.** Everyone quotes them; ISO deliberately declines to set any, on the grounds that they are language-specific.

Three things all of them agree on, which is worth more than any single rule:
- **Conditions before instructions.** Google ("Put conditions before instructions, not after"), the Federal Plain Language Guidelines ("Place the main idea before exceptions and conditions"), the Good Docs Project ("Always start the conditional steps with a condition"), and ISO/IPLF ("most important information first").
- **One term, one concept, forever.** Google, Microsoft, plainlanguage.gov and the Good Docs Project all state it, and plainlanguage.gov puts the sharpest edge on it: "**You don't need to use synonyms to make your writing more interesting. Federal writers are not creating literature.**"
- **Machine output is not documentation.** Keep a Changelog: "Don't let your friends dump git logs into changelogs." Nygard: "Bullets are acceptable only for visual style, not as an excuse for writing sentence fragments." Docs for Developers: "autogenerated samples need human input and review. Think before you automate!" Procida: "too many software developers think that auto-generated reference material is all the documentation required."

---

# Part 3 — Ledger: a prose framework for AI-generated text

**The name.** A ledger records what was paid. The framework's one claim is that every sentence has to be paid for, and that machine prose is what you get when nothing costs anything. No acronym, no Greek. A framework about unearned language should not open by inventing a word.

**At a glance**

- **Diagnosis:** costless prose. (Diátaxis diagnoses *blur*; Ledger diagnoses *costlessness*.)
- **Four Costs**, invariant across every mode: Commitment, Specificity, Preference, Omission.
- **Three dials**: Presence (how much author is on the page), Pressure (how hard it pushes the reader), Grain (rhythm and texture).
- **Six modes**, named settings on those dials: Instrument, Direction, Orientation, Account, Passage, Address.
- **Two Questions** as the compass, applied to a sentence: *what does this cost me if it's wrong?* and *could someone who wasn't here have written it?*
- **Functional voice quality** (checkable, lintable) and **deep voice quality** (not), with the same one-way dependency Diátaxis asserts.
- **One mode where it switches itself off**: Instrument. Reference should sound like a machine.

## 3.1 The problem this solves, and how it differs from the one Diátaxis solves

Diátaxis answers one question: **what kind of document is this?** Its diagnosis is *blur* — a document that is trying to be two things at once and therefore succeeds at neither. Its cure is separation.

Diátaxis assumes something it never has to state: that a human being wrote the text, and that the human is behind it. Every one of its prescriptions presumes an author with judgement, taste, embarrassment and stakes. "Ruthlessly minimise explanation" is advice to someone who *wants* to over-explain. "Admit opinion and perspective" is advice to someone who *has* opinions and is suppressing them. "Anticipate the user" is advice to someone who can imagine a user.

Machine-generated text breaks that assumption. It can be correctly sorted into the right Diátaxis quadrant, structurally clean, functionally accurate — and still unreadable, because nobody is behind it. You can apply Diátaxis perfectly to a corpus and end up with four beautifully separated piles of sludge.

So Ledger answers a second question, downstream of the first: **given that this is a how-to guide (or an email, or an argument), how does it read as though a person wrote it?**

The two frameworks compose. Diátaxis picks the pile. Ledger sets the voice.

## 3.2 The diagnosis: costless prose

Diátaxis's central failure is blur. Ledger's central failure is **costlessness**.

Every sentence a human writes costs the writer something:

- A claim can be **wrong**, and they will be the one who was wrong.
- A specific can be **checked**, and found not to be true.
- A preference can be **disagreed with**, and they will be the one with bad taste.
- An omission can be **criticised**, and they will be the one who left it out.

Machine prose is the prose you get when nothing costs anything. And every well-known "AI tell" turns out to be a specific refusal to pay one of those four costs:

| The tell | The cost being refused |
|---|---|
| Hedging — "may", "can", "often", "it's worth noting" | the cost of being **wrong** |
| Abstraction — no names, no numbers, no dates | the cost of being **checked** |
| Symmetry — "not just X, but Y"; every option weighed equally; tricolons | the cost of **preferring** |
| Comprehensiveness — cover everything, summarise at the end | the cost of **omitting** |
| Service register — "Great question!", "I hope this helps" | all four, plus the cost of just saying it |

That is a stronger diagnosis than a banned-word list, because it generates. Any new tell can be classified by asking which cost it dodges, and the repair follows from the classification. A banned-word list goes stale the moment the vocabulary shifts; the cost model does not.

The framework's one-line statement: **prose that costs the writer nothing is worth nothing to the reader.**

## 3.3 The Four Costs — invariants that hold in every mode

These are not modes. They apply everywhere, at intensities the mode sets. Diátaxis has exactly one cross-mode rule ("don't mix"); Ledger has four. This is a structural departure, flagged in §3.10.

### Cost 1 — Commitment (the cost of being wrong)

Assert. Do not gesture at an assertion.

**The hedge rule.** A hedge is permitted only when it can be replaced by a *named condition*. If you can name the condition, name it and drop the hedge. If you cannot name the condition, you do not know enough to hedge — you are performing caution, and you should either commit or delete the sentence.

- ✗ "This may cause performance issues in some cases."
- ✓ "This adds about 40 ms per request once the cache exceeds 10,000 keys."
- ✓ "I don't know how this behaves above 10,000 keys. Nobody has tested it."

Note that the second repair is *more* uncertain than the hedge, and better, because it is a commitment about the state of knowledge rather than a smear over it.

**Calibrated uncertainty is not hedging.** "I'd put this at about 60%, and the thing that would move it is whether the vendor supports SCIM" is a commitment. "This might potentially be an option worth considering" is not.

### Cost 2 — Specificity (the cost of being checked)

Every claim should be falsifiable by someone with access to the facts.

**The density floor.** At least one *checkable particular* per paragraph, and at least two per 200 words. A checkable particular is one of: a number, a date, a proper noun that isn't famous, a quoted string, a file path, a version, a measured result, a named person or team.

**The subject rule.** If the grammatical subject and the object of a sentence are both abstract nouns, the sentence is almost certainly empty. Rewrite so the subject is a person, a system, or a thing that can be pointed at.

- ✗ "Robust observability practices enable improved incident response outcomes."
- ✓ "After we added trace IDs to the error payloads, the median time to find the failing service dropped from 25 minutes to about 4."

### Cost 3 — Preference (the cost of being disagreed with)

Rank. Choose. Say which one is worse and why.

**The asymmetry rule.** When a text presents options, it must not present them as equally weighted unless they genuinely are — and they almost never are. Name the default, name the cases where the default is wrong, and say what you would do.

**The recommendation must have a loser.** If a recommendation costs nothing — if there is no case in which it is the wrong call — it is not a recommendation, it is a platitude.

- ✗ "Both approaches have their advantages and disadvantages depending on your use case."
- ✓ "Use the queue. The direct call is simpler to read and I'd still avoid it, because it couples deploy timing across two teams. That is exactly the failure we had in March."

### Cost 4 — Omission (the cost of leaving out)

Cut. Do not cover a field.

**The scope declaration.** State what the text does not cover, once, near the top or at the boundary — and then genuinely do not cover it. Coverage-by-mention ("a full treatment of X is beyond the scope of this document, but broadly…") is the omission cost refused with extra steps.

**The summary ban.** A closing section that restates what the document already said is the purest form of refusing to omit: it costs nothing to write and adds nothing. Banned in every mode except Orientation, where the equivalent is a routed list of destinations, not a recap. (See per-mode endings, §3.5.)

**Length is evidence.** A text longer than the argument it carries has refused to omit. If a section can lose 30% and lose nothing, it should.

## 3.4 The three dials

Diátaxis's axes *partition*: a document is in one quadrant, not two. Ledger's axes are **dials**, not partitions. Modes are named settings, and unnamed settings between them are legal. This is a deliberate departure (§3.10).

### Dial 1 — Presence: how much of the author is on the page

| | setting | what appears | what is forbidden |
|---|---|---|---|
| **P0** | Absent | no first person; no judgement; the artifact speaks | "I", "we", "in my view", any evaluation |
| **P1** | Attributed | "we" = the project or team; decisions owned with reasons | personal taste, personality, anecdote |
| **P2** | Present | "I"; judgement, preference, being wrong in public | speaking for people who didn't agree to it |
| **P3** | Engaged | P2 plus an acknowledged relationship with one named reader | pretending the relationship is warmer than it is |

### Dial 2 — Pressure: how hard the text pushes the reader

| | setting | what appears | what is forbidden |
|---|---|---|---|
| **F0** | Inert | makes no demand; the reader may consult or ignore | imperatives, calls to action, "you should" |
| **F1** | Available | offers a path; the reader chooses | "must", urgency, closing the reader's options |
| **F2** | Directive | imperatives; the reader is expected to do exactly this | argument, persuasion, alternatives inline |
| **F3** | Suasive | asks for a decision, from a specific person, by a specific time | more than one ask; a buried ask |

### Dial 3 — Grain: texture and rhythm

| | setting | rhythm | figurative language |
|---|---|---|---|
| **G0** | Flat | deliberately uniform; repetition of structure is a feature | none |
| **G1** | Even | short, regular, plain; mild variance | none except a standard analogy |
| **G2** | Varied | variance is **required** — see the rhythm rule below | sparing, and it must do work |
| **G3** | Spoken | fragments, contractions, interruption; passes the read-aloud test | whatever a person would actually say |

**The rhythm rule (G2 and G3 only).** No three consecutive sentences may be within four words of each other in length. Every paragraph of more than three sentences must contain at least one sentence under nine words. Paragraph lengths must vary by at least a factor of two across the piece.

This is crude and it is meant to be. It is a floor, not taste. It exists because uniform sentence length is the single most reliable surface signature of generated text, and because it is trivially checkable. The Federal Plain Language Guidelines got there first, on different grounds: "**Vary the lengths of your paragraphs to make them more interesting. As with sentence length, if all paragraphs are the same size your writing will be choppy.**" That is the only place in the mainstream style corpus where *variance* rather than *length* is named as the property, and it is the property that matters most here.

**The corollary that matters most.** At G0, sounding like a machine is *correct*. Reference material should be regular, repetitive, tonally dead and structurally identical entry to entry. Ledger's anti-machine rules are switched off in Instrument mode, on purpose. A framework that cannot say where it does not apply is a mood, not a framework.

## 3.5 The six modes

Coverage note: "general documentation" is not a mode, in the same way and for the same reason that Diátaxis refuses it. Documentation resolves into Instrument, Direction, Account and Orientation. If a document cannot be assigned, it is doing more than one thing and should be split — except Orientation, which is the deliberate exception (§3.5.3).

Summary:

| Mode | Covers | Presence | Pressure | Grain |
|---|---|---|---|---|
| **Instrument** | reference, API docs, config tables, error catalogues, schemas | P0 | F0 | G0 |
| **Direction** | how-to guides, runbooks, procedures, migration steps, install guides | P0–P1 | F2 | G1 |
| **Orientation** | READMEs, landing pages, project overviews, abstracts, tl;drs, index pages | P1 | F1 | G1 |
| **Account** | explanation, argument, essays, ADRs, design docs, post-mortems, RFCs | P1–P2 | F1 | G2 |
| **Passage** | general prose, narrative, blog, long-form, status writing, reports | P2 | F0–F1 | G2–G3 |
| **Address** | email, replies, messages, cover letters, outreach, anything to one person | P3 | F3 | G3 |

**Two artifacts that need placing, because Diátaxis explicitly excludes them.**

- **Changelogs** are **Instrument** with a date attached. Same austerity, same repetition, same six-heading skeleton every release. Keep a Changelog's "changelogs are for humans, not machines" is not a licence for voice — read it alongside "Don't let your friends dump git logs into changelogs" and it clearly means *curated*, not *lively*. G0 stands.
- **Release notes** are **Orientation per item**. The Good Docs Project's rules confirm it: second person, present tense except past for bug fixes, describe the benefit rather than the change, and **link to the full documentation, which "becomes the source of truth."** Each entry is a doorway to a document, which is exactly what Orientation is for. The one Ledger rule that bites hardest here is the empty-superlative ban: a release note that says a feature is "powerful" has said nothing.

Tutorial mode is deliberately absent: Diátaxis owns it, and it decomposes cleanly here as **Direction with Presence raised to P1 and a narration obligation** ("You will notice that…"). That decomposition is the best evidence that the dials are real dials — a mode Ledger never defined falls out of the settings.

---

### 3.5.1 Instrument — the artifact describes itself

**Definition.** Text whose only job is to state what is true about a thing, in a form the reader consults rather than reads. Dials: **P0 / F0 / G0**.

**Demands**
1. One entry per thing. Same skeleton for every entry, in the same order, with no exceptions.
2. Every field that exists on one entry exists on all of them — with an explicit "None" or "N/A" rather than an absence.
3. State defaults, units, ranges, and failure behaviour. Unstated units are a bug.
4. Every entry carries at least one minimal usage example, showing form only.
5. Structure mirrors the structure of the thing described (borrowed from Diátaxis).

**Forbids**
1. First person. Any first person.
2. Any evaluation: "powerful", "simple", "convenient", "recommended", "best practice", "elegant".
3. Any instruction sequence. Link to Direction instead.
4. Any "why". Link to Account instead.
5. Rhetorical variety. Do not find a second way to say "Returns". Say "Returns" every time.
6. Hedges of every kind, including "typically", "usually", "generally". Replace with the actual condition or a stated unknown.

**Voice and person.** Third person. No addressee. The subject of every sentence is the thing, not the reader.
**Tense.** Simple present, indicative. No future ("will return" → "returns"). No conditional except where genuinely conditional.
**Sentence length.** 8–20 words. Low variance is correct. One clause preferred. Fragments allowed in field values.
**Hedging budget.** Zero. Conditions are mandatory and are not hedges: "On Linux only." "Ignored when `strict` is false."
**Examples.** Required, one per entry, minimal, non-instructional. An example here illustrates form; it does not teach a task.
**Opening.** The name of the thing and its signature or type. No preamble, no sentence before it.
**Ending.** Ends when the last field is described. No conclusion, no summary, no "see also" prose — a bare list of links.

**Language patterns**
- "Returns `x`. Raises `Y` when `z`."
- "Default: `30`. Unit: seconds. Range: 1–3600."
- "You must set `a` before `b`. Never set `c` in production."
- "Deprecated in 4.2. Removed in 5.0. Use `q` instead."

**Failure signature.** Generated reference goes wrong by becoming *interesting*. Watch for an example that starts explaining, an entry that acquires a paragraph the others don't have, or an adjective. Procida names the exact mechanism: examples "are fun things to develop, and it can be tempting to develop them into explanation."

**Lintable.** No first-person pronouns. No words from the evaluation list. No future auxiliaries. Field-set identical across sibling entries. No paragraph over three sentences.

---

### 3.5.2 Direction — get the competent reader through

**Definition.** Text that moves a reader who already knows what they want from where they are to a verified result. Dials: **P0–P1 / F2 / G1**.

**Demands**
1. State the outcome in the first sentence, and the preconditions in the second.
2. One action per numbered step. If a step has two verbs, it is two steps.
3. Every step that can fail states the observable success signal, or the guide states one at the end.
4. Forks are explicit and conditional: "If x, do y. Otherwise, skip to step 6."
5. One complete worked path through the guide, with real values. Placeholders like `<your-value>` appear only where the value is genuinely per-reader, and the example shows what a real one looks like.
6. End at a verified result — how the reader knows it worked.

**Forbids**
1. Explanation. Any "because" longer than eight words moves to Account and gets a link.
2. Teaching. No "notice that", no "as you can see", no reassurance. That is tutorial voice and this reader does not need it.
3. Alternatives presented inline for the reader to weigh. Pick one; link the others.
4. Machine-perspective framing. "To save the file, click Save" is not guidance (borrowed directly from Diátaxis).
5. Completeness for its own sake. "practical usability is more helpful than completeness."

**Voice and person.** Imperative for actions; second person for states and conditions. "Run `x`." / "You now have a running container."
**Tense.** Present throughout. Never "you will then want to".
**Sentence length.** Imperative sentences ≤ 20 words. Prefer ≤ 12. Each numbered step ≤ 2 sentences; if a step needs three, it needs splitting.
**Hedging budget.** Zero epistemic hedges. Conditionals are unlimited and are the mode's native form. "If", "unless", "when", "on Windows" — all free. "Might", "may want to", "you could consider" — banned.
**Examples.** One worked instance of the whole path is required. Per-step examples where the command is non-obvious. No illustrative digressions.
**Opening.** "This guide shows you how to [outcome]." Then preconditions as a short list. Nothing before that sentence — no context paragraph, no history, no "in modern systems".
**Ending.** The verification ("Confirm with `x`; you should see `y`") and then at most one line routing onward. No summary of the steps just taken.

**Language patterns**
- "This guide shows you how to…" (Diátaxis, verbatim)
- "Before you start, you need: …"
- "If you want x, do y. To achieve w, do z." (Diátaxis, verbatim)
- "Confirm this worked: `…` returns `…`."
- "Refer to the x reference for the full list of options." (Diátaxis, verbatim)

**Failure signature.** Generated how-tos bloat with reassurance and context. The tells: a paragraph before step 1 explaining what the tool is; "It's important to note that…" between steps; every option listed at every choice point; no verification at the end because verification requires knowing what actually happens.

**Lintable.** First numbered step appears within 80 words of the title. No sentence beginning "It's important to". No step with more than one imperative verb. Guide contains at least one command/output pair. No occurrence of "may", "might", "could consider".

---

### 3.5.3 Orientation — the doorway

**Definition.** The single artifact a reader hits before they know what they want: README, landing page, project overview, abstract, index. Dials: **P1 / F1 / G1**.

**Why it exists.** This is the mode Diátaxis has no slot for, and Procida says so himself. From the 2017 original, on changelogs, contribution policies and the rest of the doorway material: "**The answer is that they do not** [fit into this scheme] — because they are, strictly speaking, project documentation rather than documentation of the software itself." A README legitimately touches all four quadrants plus that excluded category, and the framework's only available advice is to split it, which a README cannot obey because its whole function is to be the one file.

The Good Docs Project's `process_readme.md` supplies the missing spine — a README must let a reader **identify, evaluate, use and engage** — and ddbeck's checklist supplies the discipline: "**A comprehensive README is a bad README.**" Ledger's Orientation rules are mostly about **restraint and routing**, and they are built on those two.

**Demands**
1. Sentence one says what the thing is and who it is for, in ≤ 25 words, with no metaphor. If a stranger cannot repeat it back, rewrite.
2. Sentence two or three says what it is *not*, or what it replaces, or what it competes with. Contrast is the fastest orientation there is.
3. One runnable or observable proof within the first screen — an install line, a three-line example, a screenshot. Proof beats description.
4. Route, don't cover: a short list of destinations, each labelled by the reader's situation, not by document type. "You want to try it →", "You want to run it in production →".
5. State status honestly: maturity, stability, who maintains it, whether it is accepting changes.

**Forbids**
1. A history or philosophy paragraph above the fold.
2. Marketing adjectives with no measurement: "blazing fast", "powerful", "seamless", "battle-tested", "modern", "simple" as a boast.
3. Feature lists as a substitute for a claim about who it's for.
4. Duplicating any Instrument, Direction or Account content. Link. A README that grows a full API table has stopped being a doorway.
5. Badge walls before the first sentence of prose.

**Voice and person.** Second person for the reader, "we"/project name for the maintainers. Never "I" unless it genuinely is one person's project and that fact is load-bearing.
**Tense.** Present. Future only for a roadmap, clearly labelled and dated.
**Sentence length.** Opening sentence ≤ 25 words. Body sentences ≤ 20. Bullets ≤ 12 words and grammatically parallel — this is the one place symmetry is a virtue, because bullets here are navigation, not argument.
**Hedging budget.** Zero, except honest status hedges, which must be dated: "Alpha as of 2026-08; the config format will change."
**Examples.** No worked examples. One proof-of-life snippet, then links. The distinction matters: a proof shows the thing exists and runs; an example teaches, and teaching belongs elsewhere.
**Opening.** The definitional sentence. Nothing above it but the name.
**Ending.** A routed list of destinations plus licence, maintainership and how to get help. This is the only mode where a closing list is not a banned summary — because it is navigation, and it contains information the body did not.

**Language patterns**
- "`foo` is a *[noun]* for *[audience]* that *[does one thing]*."
- "It is not a replacement for x; if you need y, use z."
- "Install: `…`. Then: `…`. You should see `…`."
- "**You want to try it** → Tutorial. **You want to fix a specific problem** → How-to guides. **You want to know why it works this way** → Explanation."
- "Status: stable since 3.0. Maintained by …. Issues are triaged weekly; PRs may sit."

**Failure signature.** Generated READMEs open with a paragraph about the importance of the problem space ("In today's fast-paced development environment…"), stack adjectives, list features rather than audiences, and end with a Contributing section that is boilerplate for a project accepting no contributions.

**Lintable.** First prose sentence ≤ 25 words and contains a noun classifying the thing. First 200 words contain either a code block or a link labelled by reader situation. No occurrence of the marketing-adjective list. Contains a dated status line.

---

### 3.5.4 Account — why, and what I think

**Definition.** Text that takes a position on a question and defends it: explanation, argument, ADR, design doc, post-mortem, essay-with-a-thesis. Dials: **P1–P2 / F1 / G2**.

**Demands**
1. Open on the **question or the tension**, not the answer and not a definition. The reader must be able to see what would make this hard before they see what you concluded.
2. State the position plainly and early — within the first 15% — and then spend the text earning it. Withholding the thesis is not suspense, it is evasion.
3. At least one concrete instance per substantive claim. An argument with no instances is a mood.
4. **A counter-position, stated in its strongest form**, by someone who could recognise themselves in it. Not a straw version.
5. Name the cost of your position: what you give up by holding it, and what would change your mind.
6. Bound the topic. Say what you are not discussing and do not discuss it (borrowed from Diátaxis: "Keep explanation closely bounded").

**Forbids**
1. Bare hedging. "It could be argued", "some might say", "there are pros and cons".
2. Balance as a substitute for judgement. Presenting three options at equal weight when you would obviously pick one.
3. Definition-first openings: "X is a technique used to…". Nobody in doubt about a question needs a dictionary.
4. Bullet lists carrying the argument. If it can be bulleted, it is reference; if it is an argument, write it as prose. Bullets in Account are for enumerating alternatives, not for reasoning.
5. Instruction. No steps. Link to Direction.
6. A summarising conclusion.

**Voice and person.** P1 ("we decided", "the team chose") for institutional Account — ADRs, design docs, post-mortems. P2 ("I think", "I'd argue", "I got this wrong") for personal Account — essays, opinion, review. Pick one at the top and hold it; sliding between "I" and "we" is a tell that nobody is actually behind the text.
**Tense.** Past for what happened and what was decided; present for what holds now; conditional for consequences. ADRs specifically: context in past, decision in present ("We will use X" is the one accepted future — Nygard's convention), consequences in future.
**Sentence length.** Mean 15–25 words. **Variance is mandatory.** At least one sentence under nine words per 150. The rhythm rule (§3.4) applies in full.
**Hedging budget.** Hedging is *required* here — but only **calibrated** hedging: a stated confidence with a named reason and a named thing that would move it. Bare epistemic hedges are banned. Budget: unlimited calibrated, zero bare.
**Examples.** At least one concrete instance per claim, and at least one **counter-example** in the piece — a case where the position does badly. A text with only supporting examples has not paid the preference cost.
**Opening.** The question, the tension, or the incident. Best openings: a thing that happened; a thing that doesn't add up; a decision that had to be made. Worst: a definition, a history of the field, a statement of importance.
**Ending.** On the cost, the limit, or the thing that would change the author's mind. Alternatively, on the consequence that follows if the reader accepts the position. Never on a recap.

**Language patterns**
- "The reason for x is because historically, y…" (Diátaxis)
- "W is better than z, because…" (Diátaxis)
- "Some users prefer w (because z). This can be a good approach, but…" (Diátaxis)
- "I'd put this at about 60%. What would move it: …"
- "The case against this is real: …. I still think it's wrong, because …"
- "This costs us x. I think that's worth it. If y turns out to be true, it isn't."
- ADR frame (Nygard): **Context** — the forces in play, value-neutral. **Decision** — "We will…". **Status** — proposed / accepted / superseded by …. **Consequences** — what becomes easier and what becomes harder.

**Failure signature.** Generated argument is the most recognisable of all six. It states a position nobody disputes, presents two sides at equal weight, uses "not just X, but Y" to simulate depth, has no counter-example, names no cost, and closes with a paragraph that restates the opening in different words. It is also where inflated vocabulary clusters hardest — "crucial", "underscore", "landscape", "navigate", "at its core".

**Lintable.** Contains at least one first-person commitment verb ("I think", "we chose", "I'd argue", "we decided"). Contains at least one concessive block of ≥ 40 words. Contains at least one number or date per 200 words. Final paragraph shares fewer than 30% of its content words with the first paragraph. No occurrence of "not just … but"; no "it could be argued"; no "pros and cons".

---

### 3.5.5 Passage — general prose

**Definition.** The default mode. Anything that is not reference, not a procedure, not a doorway, not an argument with a thesis, and not addressed to a named person: narrative, reportage, status writing, blog posts without a claim to defend, profiles, notes. Dials: **P2 / F0–F1 / G2–G3**.

**Demands**
1. Something concrete in the first sentence: a person, a place, a number, a time, an object. Never an abstraction.
2. One checkable particular per paragraph, minimum.
3. Rhythm rule enforced (§3.4). This mode is where uniform sentence length is most damaging, because there is no structure — no numbered steps, no field table — to carry the reader.
4. Verbs do the work. If most sentences are "is"/"has"/"provides"/"enables", the prose is inert.
5. Paragraph lengths vary by at least a factor of two across the piece. Note the trap: a *single-sentence paragraph used as a rhetorical drop* is itself a tell (see #19). Vary paragraph length because the thoughts are different sizes, not to make a line land.
6. Read it aloud. If you run out of breath or trip, cut.

**Forbids**
1. Meta-narration: "In this section", "Let's explore", "It's worth noting", "As mentioned above", "Now that we've covered".
2. Nominalisation. "Made a decision" → "decided". "Provides support for" → "supports". "Is reflective of" → "reflects". (Plain-language rule; see Part 2.)
3. The tricolon default — three items because three sounds finished.
4. Abstract subject + abstract object in the same sentence.
5. Adverbs propping up weak verbs: "significantly improved", "dramatically reduced", "effectively eliminated". Give the number instead.
6. Restating the opening at the close.

**Voice and person.** P2. First person where the writer was there; third where they weren't. Do not use "we" to mean "people in general" — that is the impersonal machine "we" and it fools nobody.
**Tense.** Consistent within a passage. Past for narrative, present for description and for standing states. Present tense for immediacy where you have the choice.
**Sentence length.** Mean 12–22 words. **The standard deviation matters more than the mean.** Target a spread where the shortest sentence in any 10 is under 8 words and the longest is over 30.
**Hedging budget.** At most one bare hedge per 200 words, and it must be doing something — marking a genuine boundary of knowledge, not softening a claim the writer is nervous about.
**Examples.** Not "examples" as a section — instances woven in. One specific per paragraph is the floor.
**Opening.** The most concrete thing available. A scene, a number, a name, a thing that happened. Delete the first sentence you wrote; the second is usually the real opening. This is a genuinely reliable heuristic and it is worth automating.
**Ending.** A concrete image, a consequence, or a fact the reader didn't have. Never a summary, never a moral, never "time will tell", never a rhetorical question.

**Language patterns**
- Concrete open: "The migration ran for six hours and failed at 04:12."
- Short sentence as a hinge: "That was the mistake."
- Concession without hedging: "It worked. It also cost us the weekend."
- Naming rather than gesturing: "the Postgres upgrade", not "the database change".

**Failure signature.** The most familiar shape of generated prose. Uniform 18-word sentences. Every paragraph 4 sentences. Em-dash pivots to fake emphasis. Abstract nouns as subjects. "Not just a X — a Y." Adjective stacks. A final paragraph that says what the piece already said, in the register of a conclusion.

**Lintable.** Sentence-length standard deviation above a threshold. No three consecutive sentences within four words. Fewer than N nominalisations per 500 words. Zero occurrences from the meta-narration list. Zero from the inflated-vocabulary list. Final paragraph content-word overlap with the first below 30%. At least one paragraph of one sentence.

---

### 3.5.6 Address — writing to a person

**Definition.** Anything sent to a specific human who will read it as having been sent to them: email, replies, DMs, cover letters, outreach, follow-ups. Dials: **P3 / F3 / G3**.

**Demands**
1. Sentence one says why you are writing. Not context, not pleasantry, not throat-clearing — the reason.
2. Exactly **one** ask, and it has an owner, an action and a date. If there are two asks, send two messages or number them and say which one matters.
3. Everything the reader needs to answer without another round trip: the link, the number, the constraint. A message that provokes "which one?" has failed.
4. Something only you could have written: a detail from the shared history, a specific from their situation, a fact you had to know. This is what makes it correspondence rather than a template.
5. Under 150 words in the body. Detail goes below a line, or in an attachment, or in a doc.
6. Read it aloud. If you would not say it to their face in those words, rewrite it.

**Forbids**
1. The opening pleasantry as the first sentence: "I hope this email finds you well", "Hope you're having a great week", "I wanted to reach out".
2. Filler transitions: "Just circling back", "Following up on my previous email", "As per my last email", "Just wanted to check in".
3. The service register: "Please don't hesitate to", "Thank you for your time and consideration", "I'd be more than happy to", "Feel free to".
4. Softening your own claim. Hedge the *other person's* autonomy if you like ("if that doesn't work, say so") — never your own competence ("I might be wrong but", "just my two cents", "sorry to bother you").
5. Explaining your reasoning at length before the ask. Ask, then justify in one line if needed.
6. Enthusiasm you do not have. "Excited", "thrilled", "delighted" unless true.

**Voice and person.** First and second person, both heavily. Contractions **mandatory** — "I've", "don't", "that's". A message without contractions reads as either a legal notice or a machine.
**Tense.** Whatever the content needs, freely mixed. This is the one mode where tense discipline is not a virtue; real correspondence moves across time constantly.
**Sentence length.** Mean under 15. Fragments allowed and encouraged. Longest sentence in the message under 30 words.
**Hedging budget.** One, maximum, and only around the recipient's freedom to say no. Zero around your own position.
**Examples.** At most one, and one line. If it needs three lines, it goes below the signature or in an attachment.
**Opening.** The reason for writing, in the first clause. If a greeting is culturally required, it is a greeting line, not a sentence of the body — "Hi Sam," then the reason.
**Ending.** The single ask restated as an action with a date, or nothing at all. "Can you confirm by Thursday?" is an ending. "Looking forward to hearing from you" is an ending only when a real next step has already been named; on its own it is filler.

**Language patterns**
- "I'm writing because …"
- "Short version: …"
- "One ask: can you …, by …?"
- "Two options, and I'd pick the first: …"
- "If that doesn't work, tell me and I'll …"
- "No rush" — only when true, and then it must be paired with a real deadline or dropped.

**Failure signature.** Generated correspondence is the easiest of all to spot, because the tells are lexical and near-universal: the wellness opener, the "I wanted to reach out", the three-sentence paragraph of context before the ask, the ask buried in the middle, the gratitude close, no contractions, no specifics, and a level of politeness nobody uses with someone they actually know.

**Lintable.** Body under 150 words. Contains at least two contractions. Contains at least one date or named deadline. Exactly one question mark or one imperative ask. Zero occurrences from the pleasantry and service-register lists. First sentence contains a first-person verb of intent ("I'm writing", "I need", "I've", "Can you").

---

### 3.5.7 What actually changes between modes

| | Instrument | Direction | Orientation | Account | Passage | Address |
|---|---|---|---|---|---|---|
| **Person** | 3rd only | imperative + "you" | "you" + "we" | "we" or "I" | "I" / 3rd | "I" + "you" |
| **Tense** | present only | present only | present | past/present mixed | consistent, past or present | free |
| **Contractions** | never | rare | occasional | occasional | free | mandatory |
| **Mean sentence** | 8–20 | ≤ 20, prefer ≤ 12 | ≤ 20, open ≤ 25 | 15–25 | 12–22 | < 15 |
| **Variance** | low is correct | low | low | **required** | **required, highest** | free, fragments ok |
| **Bare hedges** | 0 | 0 | 0 | 0 | ≤ 1 / 200 words | ≤ 1, and only about the reader |
| **Calibrated hedges** | 0 | 0 | 0 | **required** | allowed | allowed |
| **Opinion** | forbidden | forbidden | forbidden | **required** | allowed | allowed |
| **Examples** | required, minimal | one full worked path | one proof, no examples | required + counter-example | woven, 1 specific/para | ≤ 1, one line |
| **Opens with** | name + signature | outcome + preconditions | what it is, ≤ 25 words | the question or tension | the most concrete thing | the reason for writing |
| **Ends with** | last field, then links | verification + one route | routed destinations | the cost, or what would change your mind | a consequence or image | one ask with a date |
| **Summary close** | banned | banned | navigation, not summary | banned | banned | banned |
| **Bullets** | the native form | numbered steps | navigation only | alternatives only, never argument | rare | rare |
| **Figurative language** | banned | banned | banned | sparing, must do work | allowed | as you'd speak |

### 3.5.8 Six rewrites

One pair per mode. The point of each pair is not that the second is nicer; it is that the second cost the writer something the first did not.

**Instrument.**
> ✗ The `timeout` option is a powerful setting that lets you control how long the client will wait before giving up, which can be useful in a variety of scenarios.
> ✓ `timeout` — Seconds to wait for a response before raising `TimeoutError`. Default: `30`. Range: `1`–`3600`. Ignored when `stream` is true.

*Paid:* Specificity (units, default, range, the interaction nobody documents). Removed: an adjective, a "can be useful", a reader.

**Direction.**
> ✗ In this guide, we'll walk through the process of setting up authentication. Authentication is an important part of any modern application, and there are several approaches you might want to consider.
> ✓ This guide shows you how to put your API behind OAuth device flow. You need: an app registered in the console, and `cli` v2.4 or later. If you're using service accounts instead, see *How to authenticate a service account*.

*Paid:* Omission (the importance paragraph, the several approaches). Commitment (one path, named). Specificity (a version number).

**Orientation.**
> ✗ `flume` is a powerful, flexible, and modern toolkit that makes it easy to build robust data pipelines with minimal effort.
> ✓ `flume` is a Python library for moving Postgres tables into S3 on a schedule. It is not a general ETL framework. If you need transforms, use dbt. Alpha as of 2026-08; the config format will change.

*Paid:* Preference (naming the competitor and conceding the case where you lose). Commitment (a dated status). Removed: four adjectives with no measurement.

**Account.**
> ✗ Choosing between a monolith and microservices is a crucial decision that depends on your specific context. Both approaches have advantages and disadvantages, and it's important to carefully consider your team's needs.
> ✓ We kept the monolith. The argument for splitting was real. Three teams were queueing behind one deploy pipeline, and that queue cost us roughly a day a week. We fixed the queue instead, with per-team deploy locks. The cost of that choice is that the locks are ours to maintain and nobody else has them. If we get to six teams I think it stops working.

*Paid:* Preference (a decision, with a loser). Specificity (three teams, a day a week). Commitment (a threshold at which the author expects to be wrong).

**Passage.**
> ✗ The migration process presented a number of significant challenges that required careful coordination across multiple teams, ultimately resulting in a successful outcome despite the difficulties encountered.
> ✓ The migration ran for six hours and failed at 04:12, on a foreign key nobody had looked at since 2019. We finished at nine the next morning. It worked. It also cost us the weekend.

*Paid:* Specificity (a duration, a timestamp, a year). Rhythm (34 words, then 9, then 3, then 7). Preference (admitting the cost rather than "successful outcome").

**Address.**
> ✗ I hope this email finds you well. I wanted to reach out regarding the proposal we discussed. Please let me know if you have any questions, and don't hesitate to get in touch. Looking forward to hearing from you.
> ✓ Hi Sam, I'm writing about the pricing on the proposal. I've moved the retainer to £9,000 a month and dropped the onboarding fee; revised version attached. One ask: can you confirm by Thursday so I can hold the September start? If the number doesn't work, tell me and I'll rework it.

*Paid:* Commitment (a number, stated flat). Specificity (a date, a month, an attachment). Omission (the wellness line, the two closing pleasantries). One ask, with an owner and a deadline.

## 3.6 The compass analogue — the Two Questions

Diátaxis's compass is a truth table with two questions. Ledger's has two questions as well, and they are applied to a **sentence**, not a document. Diátaxis says its compass works at sentence level too; Ledger's works *only* at sentence and paragraph level, because voice is not a document-level property.

**Question 1 — What does this sentence cost me if it's wrong?**
If the answer is "nothing", the sentence is carrying no weight. Either commit to something that could be wrong, or delete it.

**Question 2 — Could this have been written by someone who wasn't here?**
If yes, it is filler. Replace it with something that required being present: a number you had to look up, a name, a date, a thing that happened, a preference you can be criticised for.

That is the whole tool. Like the Diátaxis compass, it is surprisingly banal, and like the Diátaxis compass, its value is as a **doubt-resolver** rather than a classifier — you reach for it when a paragraph feels wrong and you can't say why.

A third question is worth having for Address and Passage specifically:

**Question 3 — Would I say this out loud, in these words, to this person?**
If no, that is the sentence to cut.

## 3.7 Quality — functional voice and deep voice

Directly borrowed from Diátaxis's quality page, and remapped. The structure holds; the contents change.

**Functional voice quality** — the checkable layer. Sentence-length distribution. Hedge count. Absence of banned constructions. Density of checkable particulars. Mode purity. Correct person and tense for the mode. Presence of the required opening and ending shapes.

Like Diátaxis's functional quality, these properties are **independent** of each other: text can have perfect rhythm and no specifics; perfect specificity and a dead summary ending; the right person and no commitment. They are **objective** and **measurable** — this is precisely what a linter can do, and the reason the mode specs above end with a "Lintable" line.

**Deep voice quality** — the unmeasurable layer. Whether it sounds like *this* writer rather than a generically competent one. Whether it has a reason to exist. Whether the writer would defend it. Whether there is a mind visible behind the sentences making choices you can disagree with. Whether it is worth reading a second time.

These are **interdependent** in exactly the way Procida describes: having a reason to exist and being defensible are aspects of each other.

**The dependency is one-directional and strict**, and I am claiming this by analogy with Diátaxis, not by proof. Text will never have deep voice quality while it fails functional voice quality — nobody experiences prose as authored while it is padded with costless hedges and closes with a summary. But passing every functional check guarantees nothing. **A text can satisfy every rule in §3.5 and still be dead.** The linter is a floor. It removes the reasons a reader would stop believing a person wrote this; it does not supply the person.

That is the honest limit and it should be stated at the top of any tool built from this, not buried.

**The asymmetry Procida notes applies here too.** Functional voice rules feel like constraints — a list of things you must not do, re-checkable on every edit. Deep voice feels like liberation — taking a position, saying the awkward true thing, cutting the paragraph you were proud of. The first can be enforced. The second has to be chosen, and for a generative system, has to be *made cheap enough to choose*.

**Two corroborations from outside Diátaxis.** *Docs for Developers* runs the same split under different names — **functional quality** ("whether or not a document accomplishes its purpose") versus **structural quality** ("whether a document is well written and well structured") — and states the priority flatly: "**However, functional quality is more important.** A well-structured, well-written document that doesn't accomplish its goal is a poor piece of documentation. A document with structural issues that still accomplishes its goal is a good document." It then names the exact trap Ledger has to avoid: "it's easy to focus on structural quality instead of functional quality. **Metrics for word count, time your users spend on a page, and consistency of language are easier to gather than whether or not a user is successful.**" A voice linter is a structural-quality instrument. It must never be mistaken for the other thing.

And Canonical, on adopting Diátaxis, states the diagnostic effect better than diataxis.fr does: "**As a lens, Diátaxis is unforgiving.** The more thoroughly the structure is adopted, the more mercilessly it exposes gaps, missteps and conflations. Naturally this means that **the first thing Diátaxis does is make existing documentation look worse, not better.**" Ledger inherits that property exactly, and anyone deploying it should be warned in the same terms.

**One place Ledger goes further than Diátaxis.** Diátaxis says it exposes lapses in functional quality without being able to fix them. Ledger does the same for a different property: **applying the mode rules makes missing substance visible.** Strip the hedges out of a paragraph and if nothing is left, there was nothing there. Remove the summary conclusion and if the piece now has no ending, it had no argument. Delete the balanced both-sides paragraph and if the recommendation vanishes, there wasn't one. This is the most useful diagnostic property the framework has, and it is borrowed wholesale from the way Diátaxis reports that moving explanation out of a tutorial reveals a hole.

## 3.8 The tell catalogue

Shared across all modes except Instrument, where G0 suspends them. Each entry: what it is, which cost it refuses, and the repair. The repair matters more than the ban, because a ban with no repair produces text that is merely shorter.

| # | Tell | Cost refused | Repair |
|---|---|---|---|
| 1 | **The costless hedge** — "may", "can", "often", "generally", "typically", "in some cases" with no named condition | Commitment | Name the condition, or state the unknown, or assert |
| 2 | **The not-just pivot** — "not just X, but Y"; "it isn't about A, it's about B" | Preference | Pick one. If both are true, say which matters more and why |
| 3 | **The tricolon default** — three items because three feels complete | Preference | Use the number of items there actually are. Two is fine. Five is fine |
| 4 | **The abstract sentence** — abstract subject, abstract object, "enables"/"facilitates"/"drives" as verb | Specificity | Make the subject a person, system or thing; give the verb something to act on |
| 5 | **Meta-narration** — "In this section", "Let's dive in", "It's worth noting", "As we've seen", "Now that we've covered" | Omission | Delete. The reader can see the heading |
| 6 | **The mirror close** — final paragraph restates the first | Omission | End on new information, a consequence, or a cost |
| 7 | **The service register** — "Great question", "Certainly", "I'd be happy to", "I hope this helps", "Please don't hesitate" | all four | Delete. Say the thing |
| 8 | **Inflated vocabulary** — delve, tapestry, testament, landscape, realm, navigate (figurative), underscore, crucial, pivotal, seamless, robust, comprehensive, meticulous, foster, harness, leverage, elevate, unlock, "at its core", "in today's" | Specificity | Replace with the plain verb, or with the measurement the adjective is standing in for |
| 9 | **Symmetric formatting** — every bullet the same length, every section the same depth, every paragraph four sentences | Preference | Let importance set length. The most important item should look different |
| 10 | **Unearned second person** — "You're probably wondering", "As you know", "We've all been there" | Specificity | Delete, or replace with what you actually know about this reader |
| 11 | **The empty superlative** — "powerful", "blazing fast", "game-changing", "best-in-class" | Specificity | Give the number, or cut the claim |
| 12 | **The everything-list** — all options presented at equal weight | Preference | Name the default and the exceptions. Ranking is the value you're adding |
| 13 | **The both-sides paragraph** — "there are advantages and disadvantages to each approach" | Preference | Say which you'd choose and what it costs you |
| 14 | **Nominalisation** — "make a decision", "provide support for", "is reflective of", "perform an analysis" | Specificity | decided, supports, reflects, analysed |
| 15 | **Adverb propping** — "significantly improved", "dramatically reduced", "vastly more efficient" | Specificity | Give the delta |
| 16 | **The em-dash reveal** — a dash used to manufacture emphasis on a sentence that doesn't earn it | Preference | Use a full stop. If the second half was the point, lead with it |
| 17 | **The rhetorical question opener** — "What makes good documentation good?" | Commitment | Answer it in the first sentence instead of asking it |
| 18 | **Scope-mentioning** — "a full treatment of X is beyond the scope of this document, but broadly…" | Omission | Either cover it or don't mention it. One clause of scope declaration, then silence |
| 19 | **The dramatic one-line paragraph** — a short sentence set alone to make it land | Preference | Put it back in the paragraph. If it is the point, lead with it |
| 20 | **The antithesis pair** — "The build is the easy half. Getting someone to open it is the hard one." Balanced, symmetrical, satisfying | Preference | One per piece is a flourish. Two is a signature. Cut to zero if in doubt |
| 21 | **Hedging both sides** — "While X is true, Y is also worth considering" | Preference · Commitment | Pick one and say why the other loses |

**Evidence of presence — the positive counterpart.** A bare prohibition list produces shorter machine text. What makes text read as authored is the presence of things a machine could not have produced. Require, per 500 words, at least two of:

1. A number that had to be looked up or measured.
2. A date, or a duration, or a time of day.
3. A proper noun that isn't famous — a person, a team, a branch, a file, a ticket.
4. A thing that went wrong, named, with the writer implicated.
5. A preference the writer can be criticised for.
6. A thing the writer doesn't know, named precisely.

Item 4 is the strongest single signal in the list and the hardest for a generator to fake, because it requires having a history.

## 3.9 Workflow

Borrowed from Diátaxis's workflow page almost unchanged, because it is right and because the same reasons apply:

1. **Choose one paragraph.** Not the document. If you don't know which one, take the one in front of you.
2. **Identify its mode.** If it has two, that is the finding — split it.
3. **Apply the Two Questions to each sentence.**
4. **Make one change.** Commit it.
5. **Repeat.**

And the same anti-plan stance: do not restructure a corpus into six mode-folders before there is anything to put in them. The voice of a body of text improves from the sentence outward, not from the taxonomy inward. Diátaxis's line applies verbatim — creating empty structures is "horrible".

One addition specific to generated text: **the pass order matters.** Run cost-payment before rhythm. Fixing rhythm on text with no commitments produces well-paced emptiness, which is worse than badly-paced emptiness because it is harder to spot. Order: (1) mode purity, (2) Commitment and Specificity, (3) Preference and Omission, (4) rhythm and opening/ending shape, (5) the tell catalogue as a final sweep.

## 3.10 What is borrowed and what departs

### Borrowed from Diátaxis, deliberately

| What | Why |
|---|---|
| **Mode discipline: one artifact, one mode; blur is the enemy** | It is the correct diagnosis and it transfers directly. A paragraph that is half argument and half instruction has no correct voice |
| **The "language of…" pattern lists** | Concrete sentence stems per mode are the single most usable thing on diataxis.fr. Every mode spec above ends with one, and several stems are lifted verbatim and credited |
| **Needs-first derivation** | Modes are defined by what the reader is doing, not by document taxonomy or by house style |
| **A compass: a small, banal, two-question course-correction tool** | Form borrowed exactly, including the insight that its real use is resolving doubt, not classifying |
| **Functional vs deep quality, and the strict one-way dependency** | The most transferable idea on the site, and it maps cleanly onto voice. §3.7 is a remapping, not a reinvention |
| **The diagnostic side-effect** — applying the framework exposes lapses it cannot itself fix | Directly parallel: stripping hedges reveals missing substance the way stripping explanation from a tutorial reveals a hole |
| **The small-step, anti-plan workflow** | Same reasons: it removes the paralysis of deciding what to work on, and structure emerges from the inside |
| **Reference austerity, conditional imperatives in how-tos, explanation's licence to opine** | Taken as given and built on. Instrument, Direction and Account inherit these rules and mostly restate them |
| **"Complete, not finished"** | Applies exactly to a voice-improvement pass over a corpus |

### Departing from Diátaxis, and why

**1. No claim of completeness — and this is the big one.**
Diátaxis derives four modes from a closed 2×2 of craft and states flatly that there could not be three or five. That derivation is the source of its authority. Ledger has no equivalent argument. Six modes is a working set that covers the genres I was asked to cover, plus the two Diátaxis leaves homeless. I could be talked into a seventh. **Anyone who dresses a voice framework in Diátaxis's completeness claim is borrowing the aesthetics of rigour without the rigour**, and it would be a bad opening move for a framework whose whole subject is unearned confidence.

**2. Axes are dials, not a partition.**
Diátaxis's quadrants are exclusive: a document is a how-to guide or it is not. Ledger's three dials are continuous and modes are named settings on them. Intermediate settings are legal — and the proof that this is a real difference rather than a hedge is that Diátaxis's *tutorial* falls out of Ledger's dials without being defined: Direction with Presence raised to P1 plus a narration obligation. Quadrants don't compose like that.

**3. Different failure diagnosed.**
Blur is a failure of *sorting*. Costlessness is a failure of *authorship*. They are orthogonal: text can be perfectly sorted and completely costless, which is the characteristic output of a competent generative model applying Diátaxis. Ledger exists because Diátaxis's assumption of an author no longer holds.

**4. Thresholds instead of principles.**
Procida is explicit: "Diátaxis offers a set of principles — it doesn't offer a formula. It certainly cannot offer a short-cut." ISO 24495-1 goes further and deliberately declines to set a sentence-length limit at all, on the grounds that such numbers are language-specific. Ledger offers numbers anyway: sentence-length bands, hedge budgets, specificity floors, a variance rule, word counts, all sourced in §2.14.

This is a real disagreement, taken knowingly, for one reason: **the target user of Ledger is a generator, not a person with taste.** A human writer given "vary your sentence length" will do something sensible. A model given the same instruction will produce uniform sentences and believe it complied. A skill cannot exercise judgement it does not have, so it gets a floor instead. Two safeguards come with that: §3.7 states plainly that the floor is not the ceiling, and §2.14 records where each number came from so a future maintainer can argue with it rather than inherit it as folklore.

**5. Two new modes, both in territory Diátaxis explicitly does not claim.**
- **Orientation** exists because the README is the most common documentation artifact in the world and Diátaxis has no slot for it. Its only available advice is "split it", which the doorway artifact cannot obey. Rather than fake a quadrant, Ledger gives it rules built around restraint and routing.
- **Address** exists because correspondence is outside Diátaxis's stated scope entirely — Diátaxis serves "the practitioner in a domain of skill" consulting documentation, not one person writing to another. This is not a gap in Diátaxis; it is a boundary Diátaxis draws honestly, and Ledger crosses it deliberately.

**6. Cross-mode invariants.**
Diátaxis's only rule that spans modes is "don't mix". Ledger has four costs that hold everywhere at mode-set intensities. This changes the shape of the framework: Diátaxis is a partition with local rules, Ledger is a set of global obligations with local dial settings.

**7. One inversion.**
Diátaxis wants reference austere. Ledger agrees and goes further: in Instrument mode, **sounding like a machine is correct**, and the anti-machine rules are switched off. Uniform sentences, no variance, repeated phrasing, tonal deadness — all correct. This is a departure worth stating loudly, because a framework that applies everywhere applies nowhere, and because the most common damage done by "make it sound human" tooling is inflicting personality on a config table.

**8. Sentence-level, not document-level.**
Diátaxis's compass works at any granularity but the framework is architectural — it moves pages between sections. Ledger never moves anything. It operates on sentences and paragraphs, and its unit of work is a paragraph edit.

## 3.11 Limits — where Ledger does not apply

Stated in the spirit of Diátaxis's own limits section, because a framework that cannot name its boundary is a mood.

**It does not apply to Instrument mode.** By construction. See §3.4 and §3.10.

**It does not apply to machine-to-machine text.** Log lines, structured output, commit-message conventions, prompt scaffolding, JSON descriptions. There is no reader to sound human to.

**It does not apply where deviation is a risk.** Legal notices, regulatory language, safety warnings, medical instructions, licence text, financial disclosures. The reason reference is "usually governed by law" applies with more force here. Standard phrasing exists because deviation is dangerous, and "make it less formulaic" is exactly the wrong instruction.

**It does not supply substance.** It cannot make a text accurate, cannot make an argument correct, cannot supply the number that was never measured. Its relationship to substance is the one Diátaxis has to functional quality: **analytical only** — it makes absence visible without filling it. Text that has nothing to say will, after a full Ledger pass, be shorter, blunter, and still have nothing to say. That is a success of the framework, not a failure, and it should be reported as one.

**It does not guarantee deep voice quality.** §3.7. Passing every check produces text with no reason to be disbelieved. Producing text worth reading is a different problem and this does not solve it.

**It is not a plan.** Do not restructure anything into six folders. Fix one paragraph.

**It is not a disguise.** The goal is for text to sound like the person who is accountable for it — not to pass as human when no human is accountable. Where disclosure is required or expected, Ledger's rules are subordinate to it, and applying the framework to make undisclosed generated text harder to detect is a misuse. This is the one hard rule in the framework, and it is a rule about the writer's obligations, not the prose's properties.

**It was designed for English.** The rhythm rule, the contraction rules, the nominalisation rules and most of the tell catalogue are English-specific and several are specific to a plain, contemporary, British-or-American register. The cost model should transfer; the thresholds will not.

## 3.12 Corroboration from a working linter

A production skill in a neighbouring repo — `rowin-profile/.claude/skills/human-voice/SKILL.md`, written for outbound job-search correspondence — arrived independently at most of §3.8's structural list: the rule of three, "not just X but Y", the dramatic one-line paragraph, em dashes, antithesis pairs, uniform paragraph length, the closing summary, two-sided hedging, and signposting. Three things in it are worth importing into Ledger directly:

1. **"The linter catches vocabulary. It cannot catch rhythm, and rhythm is what actually gives it away."** This is §3.7's functional/deep split stated from the tool side, and it is the right order of importance.
2. **"The linter passing is the floor, not the finish."** Same claim as §3.7, and it belongs in the header of every mode skill, not the footer.
3. **A stricter em-dash rule than #16.** That skill bans em dashes outright rather than restricting them. For Address and Passage under a personal voice profile, outright is the better setting; #16 is the general default and a voice profile may tighten it.

The general lesson: a house voice profile sits *below* the mode spec and may only tighten, never loosen. Ledger sets the mode's obligations; a profile like that one narrows them to one person.

## 3.13 Building skills from this

The repo layout (`skills/`, `styles/`, `adapters/`) suggests one skill per mode. Each mode spec in §3.5 is written to that shape. A skill file per mode contains, in order:

1. **Trigger** — when this mode applies, and the two nearest modes it gets confused with, with a one-line discriminator each. (Instrument↔Account is the reference/explanation slip; Direction↔Account is the how-to/explanation slip; Passage↔Account is "does this piece have a thesis it defends"; Address↔Passage is "is there exactly one named reader".)
2. **Dial settings** — the P/F/G triple, so the skill can state its own position.
3. **Demands** — the numbered list, unchanged.
4. **Forbids** — the numbered list, unchanged.
5. **The mechanics block** — person, tense, contractions, sentence band, variance rule, hedge budget, examples, opening rule, ending rule. This is the part a rewrite pass consults line by line.
6. **Language patterns** — the sentence stems. These do more work than the prose rules, because they give a generator something to imitate rather than something to avoid.
7. **Failure signature** — what generated text in this mode looks like, so the skill can recognise its own default output.
8. **Checks** — the lintable list, as assertions.

Two shared assets sit above the per-mode skills:

- **`styles/tells.md`** — the §3.8 catalogue, with the repair column, shared by every mode and suppressed in Instrument.
- **`styles/costs.md`** — the four costs and the Two Questions, loaded by every mode.

And one ordering rule, from §3.9: **costs before rhythm.** A rewrite pass that starts with sentence variance produces well-paced text with nothing in it, and that is a harder failure to see than the one it replaced.
