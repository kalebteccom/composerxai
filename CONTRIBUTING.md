<!-- composerxai-lint mode=explanation -->

# Contributing

## Commits

Keep the AI attribution. Drop the session link.

```
Co-Authored-By: Claude <noreply@anthropic.com>
```

🔴 **No `Claude-Session:` trailer.** It leaks a private session URL into public history, and it is
useless to anyone reading the repo. Control+ test1 carries it on every commit; that is the thing not
to copy.

Message body: say what changed and why it changed. Prose, not bullets. Wrap at 72. No trailing
summary restating the subject line, and no list of files: the diff already has that, and a
paragraph that repeats it is the padding this repo exists to remove.

Write it once.

## Documentation layout

Adopted from Control+ test1 and the Kalebtec house pattern, which the research found four repos
arrived at independently.

| Directory | Holds |
|---|---|
| `agents/` | Agent definitions. Tracked |
| `context/` | Durable cross-cutting knowledge. Tracked |
| `design/` | Decision records. Tracked |
| `plans/` | Specs and tickets. Tracked |
| `research/` | Source material behind the rules. Tracked |
| `deliverables/` | What ships |

**Tracked spec, untracked working memory.** From f3: `plans/` is committed, ephemeral scratch is
gitignored. The split is enforced at the VCS boundary rather than by discipline.

## Rules about rules

Every rule this project ships is classified when it is written:

- **Enforceable**—ships with the check that enforces it. A rule without a gate is a suggestion.
- **Judgement**—ships as guidance, explicitly labelled unenforceable.

The evidence: in f3, sections a validator hard-fails on appear in ~80% of 756 tickets. Sections it
merely warns about appear in 6–11%.

## Sources

No rule ships without a source. `PRIOR_ART.md` credits everything this borrows from.
