---
description: Decide audience, mode and register for a piece of writing, surface the gaps, then draft it.
---

<!-- composerxai-lint mode=howto -->
<!-- composerxai-lint disable -->

Run the `composing` skill against: $ARGUMENTS

Work in this order and do not skip a step.

1. **Audience.** Human or agent. If both are claimed, it is two documents.
2. **Mode**, from what the reader is doing with the text. Load only the register file you need.
3. **Gaps.** Fill what you can from the repo and context. Emit the rest as one numbered list, split
   into needs-input, open-question and assumption. Then continue on stated assumptions.
4. **Scope.** Does this belong here? Is anything being deferred without being named?
5. **Draft**, applying `reference/voice.md` unless the mode is reference.
6. **Lint** with `node "${CLAUDE_PLUGIN_ROOT}/src/cli.mjs" <file> --mode=<mode>` and fix or justify
   every gated finding. The linter is bundled; nothing needs installing.

Report the audience, mode and register you chose before showing the draft.
