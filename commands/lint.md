---
description: Lint prose for machine register. Takes a path and an optional mode.
---

<!-- composerxai-lint mode=howto -->
<!-- composerxai-lint disable -->

Run `node "${CLAUDE_PLUGIN_ROOT}/src/cli.mjs" $ARGUMENTS`.

The linter ships inside this plugin and has no dependencies, so that command works with nothing
installed. Do not reach for `npx composerxai-lint`: the package is not published, and an agent that
tries it concludes the linter is unavailable and skips the check.

If no mode is given, infer it from the file and say which you used. A README is orientation, an API
table is reference, a recruiter reply is correspondence.

For each gated finding, either fix it or explain why it stands. `--verbose` prints the source behind
each rule.

The linter checks vocabulary and some structure. It cannot see audience, scope or deferral, and those
are the expensive failures. Read the draft against `skills/composing/SKILL.md` as well.
