---
name: composing
description: Run before writing anything a person will read. Picks the audience, mode and register, surfaces what is unknown, and points at the right rules. Covers docs, specs, email, explanation and narrative.
---

<!-- composerxai-lint mode=orientation -->
# Composing

Three decisions come before the first sentence. Getting them wrong cannot be repaired by editing.

## 1. Audience

**Human or agent.** Never both in one document.

A document written for an agent to execute and a document written for a person to understand have
different requirements. Serving both produces neither. If two audiences need it, that is two documents.

**Split by expertise too, and for the same reason.** Difficulty is not a property of a text. It is a
relation between a text and one reader's existing knowledge, which four literatures reach separately:
cognitive load theory, expertise reversal, the reverse cohesion effect, and the plain-language corpus.
McNamara et al. reach it the hard way, by finding that the standard readability fix *harms* the
high-knowledge half of the audience. So one document for a mixed-expertise audience is not a
compromise, it is a choice about whom to disadvantage, and a single readability score is measuring
the wrong object. Name the reader's starting knowledge before writing. See
[`../reporting/depth.md`](../reporting/depth.md).

## 2. Mode, then register

Ask what the reader is *doing* with the text.

| They are | Mode | Register file |
|---|---|---|
| Following steps to get a result | How-to | [`registers/how-to.md`](registers/how-to.md) |
| Looking something up | Reference | [`registers/reference.md`](registers/reference.md) |
| Trying to understand why | Explanation | [`registers/explanation.md`](registers/explanation.md) |
| Deciding something about you | Correspondence | [`registers/correspondence.md`](registers/correspondence.md) |
| Arriving cold from a link | Orientation | [`registers/orientation.md`](registers/orientation.md) |
| Reading for its own sake | Narrative | [`registers/narrative.md`](registers/narrative.md) |
| An agent, to execute | Specification | [`../../templates/`](../../templates/) |

**Load the one register file you need. Do not load them all.**

🔴 **Reference is the exception that proves the rule.** Sounding mechanical there is correct. Do not
apply the anti-machine rules to an API table.

## 3. Gaps, surfaced now

Before writing, work out what the artefact needs, and **fill everything you can yourself** from the
repo, prior art and context. Then split what is left:

| Label | Means |
|---|---|
| `needs-input` | The answer exists and must be looked up or supplied |
| `open-question` | The answer must be *chosen*, and it is not yours to choose |
| `assumption` | You picked one and are proceeding on it |

Emit what remains as **one numbered list, at the start**. Then keep working on stated assumptions.

**Never block waiting for an answer.** Blocking is only for outward-facing or destructive actions.
Answers arrive later and apply retroactively.

## 4. Scope, which is where most of it fails

- Does this content belong here, or somewhere else?
- Is the scope matched to the goal, or is it padding?
- 🔴 **Are you deferring work that should be done now?** Postponing is fine. Postponing without
  telling the reader is not. Name it or do it.

## Then write

Apply [`../../reference/voice.md`](../../reference/voice.md), the rules that hold in every register
except reference.

Check it with the linter before it ships:

```sh
node "${CLAUDE_PLUGIN_ROOT}/src/cli.mjs" <file> --mode=<mode>
```

The linter catches vocabulary and some structure. It does not catch audience, scope or deferral, and
those are the expensive failures.
