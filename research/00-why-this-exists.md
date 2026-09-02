# Why prosexai exists — the Control+ post-mortem

The founding case. A real delivery, written almost entirely by agents over four days, that had to be
rescued by hand before a human could read it. The rescue worked and the result was still not good.

This is the problem the framework has to solve. Not "the prose sounded robotic". Something worse and
more structural: **nobody decided who each document was for before writing it.**

## What was produced

Ten deliverable documents plus a working record, for a paid CTO test case delivered to a founder.

| Document | Words before | Words after the rescue |
|---|---|---|
| `submission-log.md` | 28,544 | 6,175 |
| `architecture.md` | 9,737 | 3,050 |
| `cost-per-active-user.md` | 6,666 | 1,629 |
| `submission/README.md` | 5,872 | 504 |
| `providers.md` | 3,947 | 1,426 |
| `running-it.md` | 3,572 | 1,209 |
| `environment.md` | 1,983 | 973 |
| root `README.md` | 532 | 371 |
| **Total** | **60,853** | **15,337** |

A 75% cut with no loss of substance. Every fact that mattered survived. That ratio is the finding:
three quarters of what was written should never have been written.

## The five failures, in the order they hurt

### 1. No audience was chosen, so the document served none

`submission-log.md` was, at once, a working log for the agents building it, an audit trail, a defect
register, and a client-facing deliverable. It was written as the first two and handed over as the
last. Retrofitting it did not make it a deliverable, it made it a working log with better headings.

**The rule this produces:** the audience and the mode are chosen *before* the first sentence, and a
document that needs to serve two audiences is two documents.

### 2. The document argued with its own earlier drafts

The worst passage in the delivery was a table cell containing a correction, then a correction to that
correction, then a third about whether a measured interval was 19h28m or 20h08m — inside a block whose
stated purpose was retiring an overstatement.

The reader is a founder deciding whether to hire. He does not care that a previous revision said 34
instead of 33.

**The rule:** state the current fact once. Revision history belongs in version control, which is
sitting right there.

### 3. Internal jargon leaked into the deliverable

The demo files were named `beat1-…`, `beat2-…` because the internal plan called the required
scenarios "beats". No one outside the project had ever used that word. It survived into filenames the
client would see, and into three documents.

**The rule:** every term in a deliverable is one the reader already knows, or is defined on first use.
Project-internal vocabulary is a leak, not a shorthand.

### 4. Private material shipped

`docs/README.md` was the author's private working index. It opened `**PRIVATE. Never commit any of
this into a Control+ repo**`, described his local machine layout, and named the credentials file. It
went into the repository the client was invited to. Separately, `LINKS.md` carried two one-time
credential URLs.

Nothing leaked that was actually secret, but the failure is not "a secret leaked". It is that **the
same folder held working notes and deliverables with nothing marking which was which.**

**The rule:** working notes and deliverables are physically separated, and the boundary is mechanical,
not remembered.

### 5. Obsolete scaffolding outlived its purpose

`architecture.md` and `submission/README.md` carried long passages on delivery mechanics — incremental
bundle versus zip versus patch, working-directory sizes, three different commit shas named on one
page. All of it was correct when written and all of it was dead the moment the delivery became a
single repository. It was still there at handover.

**The rule:** a document that describes a process has an expiry, and something has to check it.

## The tells were the smaller problem

There were plenty. Em dashes everywhere, "load-bearing" as a tic, "measured rather than asserted",
"named rather than papered over", the rule of three in every list, balanced antithesis pairs closing
every section. A word list would have caught some of it.

But the vocabulary was fixable in an afternoon. **The structure was not.** A document written for the
wrong reader is not repaired by swapping "leverage" for "use".

This is why prosexai cannot be only a linter. A linter operates on text that already exists. The
expensive failures happen before the first word.

## What the framework has to do

1. **Force the audience and mode decision up front**, and make writing without one feel wrong.
2. **Separate working notes from deliverables** by construction.
3. **Ban the self-referential correction trail** outright.
4. **Catch the lexical and structural tells** mechanically, because those are cheap to check.
5. **Cover the whole surface**, not just prose for humans: specs, tickets, plans, ADRs, commit
   messages, READMEs, email. The Control+ plan documents had exactly the same disease as the
   deliverables.

Points 1 to 3 are where the 75% went. Point 4 is what most existing tools do, and it is the least
valuable part.

## The uncomfortable part

These documents were not written by a careless person under time pressure. They were written by
agents that had been given a high standard for honesty and evidence, and they hit that standard. Every
claim was true and sourced.

They were verbose, self-referential and audience-blind **because nothing in the instructions said who
was going to read it.** The honesty machinery worked. The communication machinery did not exist.

That is the gap.

---

# Scope, widened 2026-09-01: agent prose **and** planning

The post-mortem above is about deliverables. The same disease was in the plan documents that produced
them, so the plugin covers both halves of what an agent writes.

**Prose** — what a human reads. Deliverables, READMEs, docs, email, PR descriptions, commit messages.

**Planning** — what an agent reads, and what a lead hands to an engineer. Specs, tickets, roadmaps,
epics, ADRs, context files, `CLAUDE.md` and `AGENTS.md`.

These are not the same job and the framework must not pretend they are. A spec written to be
*executed* by an agent has different requirements from a document written to be *understood* by a
person. Conflating them is how the Control+ submission log ended up as neither.

## Internal prior art being folded in

Four bodies of existing Kalebtec work, mined in parallel with the external research.

| Source | What it contributes |
|---|---|
| `Kalebtec/context-specification-language` | The format finding: **XML tags for context and instructions, markdown for spec content**. A claim about which shape a model parses reliably, which no external prose research will surface |
| `Kalebtec/project-ideas` | Section orders and conventions for ideas, specs and roadmaps. What must be decided before writing starts |
| A client production monorepo | The **team-lead split** — how work is specified when handed from a lead to an engineer, in a repo with a real team and machine-validated documents. Named only in the private notes; the finding is reproduced here without the client. |
| `Kalebtec/*` + `rowin-profile` | House conventions that emerged without being written down, in `CLAUDE.md`, `AGENTS.md` and working-conventions files |

## Why the format finding matters more than it looks

Everything else here is about *what to say*. The CSL finding is about *what shape to say it in*, and
it cuts across every artefact type. If XML delimits instructions more reliably and markdown carries
spec content more readably, then every template this plugin ships has a structural rule baked in
before a single word of style guidance applies.

That is a different axis from Diátaxis, which says nothing about serialisation format because it was
written for human readers who do not care.

## The three axes, then

1. **Audience** — human or agent. Decided first, never mixed.
2. **Mode** — what kind of artefact. Diátaxis-derived for docs, extended for planning.
3. **Format** — XML-delimited instruction versus markdown content. From CSL.

A skill exists per useful combination. Not per cell, since most cells are empty, but per combination
that actually gets written in practice.
