# 04 — Harness packaging formats for a cross-harness writing/style plugin

**Researched:** 2026-09-01. Every claim below is verified against live documentation at the URL
cited beside it. Where a fact could not be confirmed against live docs it is marked
**unconfirmed** with the exact URLs that were checked.

**Scope:** what file formats each AI coding harness accepts for (a) persistent instructions,
(b) an invocable skill/command, (c) a switchable style/persona, and (d) a packaged, installable
bundle — so that one repo can install the same "sound human" prose everywhere.

---

## 1. Claude Code

Claude Code is the only target in this study with all four capabilities as first-class,
documented, versioned formats. It is therefore the reference implementation; everything else is
a degraded projection of it.

### 1.1 Output styles

Source: <https://code.claude.com/docs/en/output-styles>

An output style is a Markdown file whose body is **injected into the system prompt**. Quoting the
doc: "Output styles directly modify Claude Code's system prompt." This is the correct mechanism
for a "sound human" voice — it is not knowledge, it is role/tone/format.

**File locations** — three levels, all directories, file name becomes the style name unless
`name` is set in frontmatter:

| Level | Path |
|---|---|
| User | `~/.claude/output-styles/` |
| Project | `.claude/output-styles/` |
| Managed policy | `.claude/output-styles` inside the managed settings directory |
| Plugin | `output-styles/` at the plugin root (see §1.3) |

Project styles load "from every `.claude/output-styles/` between the working directory and the
repository root. When more than one of these nested directories defines a style with the same
name, Claude Code uses the one closest to the working directory."

**Frontmatter fields** (the complete documented set — all optional):

| Field | Purpose | Default |
|---|---|---|
| `name` | Name of the output style, if not the file name | Inherits from file name |
| `description` | Description shown in the `/config` picker | None |
| `keep-coding-instructions` | Keep Claude Code's built-in software engineering instructions | `false` |
| `force-for-plugin` | **Plugin output styles only**: apply this style automatically whenever the plugin is enabled, without requiring users to select it. Overrides the user's `outputStyle` setting. If multiple enabled plugins set this, Claude Code uses the first one loaded. | `false` |

`force-for-plugin` is the single most important field for this project: it is the documented way
for a plugin to impose a voice without the user having to pick it from a menu.

**How a style is selected:**

- Terminal: run `/config`, select **Output style**. Claude Code writes the choice to
  `.claude/settings.local.json`.
- Directly: set the `outputStyle` key in any settings file.
- The standalone `/output-style` command "was deprecated in v2.1.73 and removed in v2.1.91." Do
  not reference it.
- Changes take effect after `/clear` or a new session, because the style is part of the system
  prompt, which is read once at session start.

**Minimal working example** (verbatim structure from the docs):

```markdown
---
name: Diagrams first
description: Lead every explanation with a diagram
keep-coding-instructions: true
---

When explaining code, architecture, or data flow, start with a Mermaid diagram showing the
structure, then explain in prose.

## Diagram conventions

Use `flowchart TD` for control flow and `sequenceDiagram` for request paths. Keep diagrams
under 15 nodes.
```

**Critical behaviour to design around:** "Custom output styles leave out Claude Code's built-in
software engineering instructions, such as how to scope changes, write comments, and verify work,
unless `keep-coding-instructions` is set to `true`." A "sound human" style that ships without
`keep-coding-instructions: true` will silently lobotomise Claude Code as a coding tool. **Our
style must set `keep-coding-instructions: true`.**

Output styles "apply to the main conversation only: a subagent runs its own system prompt, so
styles don't change how subagents respond. A fork is the exception, because it inherits the
parent's full system prompt." So a style alone will not govern text written by subagents — a
skill is still needed for that path.

**How it differs from CLAUDE.md and from a skill** (the doc's own comparison table):

| Feature | How it works | Use it when |
|---|---|---|
| Output styles | Modifies the system prompt | You want a different role, tone, or default response format every turn |
| CLAUDE.md | Adds a user message after the system prompt | Claude should always know your project conventions and codebase context |
| `--append-system-prompt` | Appends to the system prompt without removing anything | You want a one-off addition for a single invocation |
| Agents | Runs a subagent with its own system prompt, model, and tools | You want a separately scoped helper for a focused task |
| Skills | Loads task-specific instructions when invoked or relevant | You have a reusable workflow |

Practical read for this project: the **style** carries the always-on voice; the **skill** carries
the invocable "run this over the draft and strip the AI tells" procedure; **CLAUDE.md** is the
wrong home for either (it is user-message context, not system prompt, and it is unconditionally
resident).

### 1.2 Skills

Sources: <https://code.claude.com/docs/en/skills>, <https://agentskills.io/specification>

Claude Code skills implement the **Agent Skills open standard** (agentskills.io), "which works
across multiple AI tools. Claude Code extends the standard with additional features."

**Directory layout:**

```text
my-skill/
├── SKILL.md          # required — overview and navigation
├── reference.md      # optional — loaded when needed
├── examples.md       # optional — loaded when needed
└── scripts/
    └── helper.py     # executed, not loaded
```

The spec's recommended optional directories are `scripts/`, `references/`, `assets/`.

**Where skills live:**

| Location | Path | Applies to |
|---|---|---|
| Enterprise | managed settings directory | All users in the org |
| Personal | `~/.claude/skills/<skill-name>/SKILL.md` | All your projects |
| Project | `.claude/skills/<skill-name>/SKILL.md` | This project only |
| Plugin | `<plugin>/skills/<skill-name>/SKILL.md` | Where the plugin is enabled |

Precedence: "enterprise overrides personal, and personal overrides project." Plugin skills are
namespaced `plugin-name:skill-name` "so they can't conflict with other levels."

**Frontmatter — required vs optional.** This is the one place where Claude Code and the open
standard genuinely disagree, and it matters for portability:

- **Claude Code:** "All fields are optional. Only `description` is recommended so Claude knows
  when to use the skill."
- **Agent Skills spec:** `name` is **Required**, `description` is **Required**.

If the skill is ever to be uploaded to claude.ai, the Skills API, or packaged with
`package_skill.py`, write both. Do that unconditionally.

Claude Code's full field list (all optional per Claude Code):

| Field | Required | Notes |
|---|---|---|
| `name` | No (Yes in spec) | Display name in skill listings; defaults to directory name. In a **plugin** skill it sets the last segment of the command. |
| `description` | Recommended (Required in spec) | What it does and when to use it. Combined `description` + `when_to_use` is truncated at **1,536 characters** in the skill listing. |
| `when_to_use` | No | Trigger phrases; appended to `description`, counts toward the 1,536-char cap. **Claude Code extension, not in the spec.** |
| `argument-hint` | No | Autocomplete hint, e.g. `[filename] [format]`. |
| `arguments` | No | Named positional args for `$name` substitution. |
| `disable-model-invocation` | No | `true` = only the user can invoke it via `/name`. Default `false`. |
| `user-invocable` | No | `false` = only Claude can invoke it; hidden from the `/` menu. Default `true`. |
| `allowed-tools` | No | Tools pre-approved for the invoking turn. Space- or comma-separated string, or YAML list. **In the spec** (marked experimental). |
| `disallowed-tools` | No | Tools removed from the pool while active. |
| `model` | No | Model override for the turn; or `inherit`. |
| `effort` | No | `low`, `medium`, `high`, `xhigh`, `max`. |
| `context` | No | `fork` to run in a subagent context. |
| `agent` | No | Which subagent type, when `context: fork`. |
| `background` | No | Only with `context: fork`; `false` waits for the result. |
| `hooks` | No | Hooks registered when the skill is invoked. |
| `paths` | No | Glob patterns limiting automatic activation. |
| `shell` | No | `bash` (default) or `powershell` for `` !`cmd` `` injection. |
| `metadata` | No | Free-form map. **In the spec.** |
| `license` | No | **In the spec.** Claude Code accepts but ignores. |
| `compatibility` | No | Max 500 chars. **In the spec.** Claude Code accepts but ignores. |

**Portability warning, quoted:** for "claude.ai skill uploads, the Skills API, and packaging with
`package_skill.py`", only these six fields are legal: `name`, `description`, `license`,
`compatibility`, `metadata`, `allowed-tools`. Anything else is a **hard error**, not an ignored
field:

```
Unexpected key(s) in SKILL.md frontmatter: argument-hint. Allowed properties are:
allowed-tools, compatibility, description, license, metadata, name
```

**Design consequence:** the canonical `SKILL.md` we ship should use only the six spec fields.
Claude Code-only fields (`disable-model-invocation`, `when_to_use`, `context`, …) should be added
by the Claude Code adapter, not baked into the canonical source, or the same file cannot be
uploaded to claude.ai / other Agent Skills consumers.

**Naming constraints** (from the spec — Claude Code's own doc does not restate these):

- `name`: 1–64 characters; lowercase alphanumeric and hyphens only; must not start or end with a
  hyphen; must not contain consecutive hyphens (`--`); **must match the parent directory name**.
- `description`: 1–1024 characters, non-empty.
- `compatibility`: max 500 characters.

**Size guidance:** "Keep `SKILL.md` under 500 lines. Move detailed reference material to separate
files." The spec adds a token target: metadata ~100 tokens, instructions "< 5000 tokens
recommended". These are recommendations, not enforced limits.

**Discovery and invocation:**

- Skill *descriptions* are loaded into context at startup; the *body* loads only when invoked.
  "the rendered `SKILL.md` content enters the conversation as a single message and stays there
  across later turns."
- Users invoke with `/skill-name`; Claude invokes automatically when the `description` matches.
- Listing budget: descriptions are truncated to fit "1% of the model's context window" by default,
  tunable via `skillListingBudgetFraction` / `skillListingMaxDescChars`. A long `description` on a
  writing skill will get cut — put the trigger case first.
- Live change detection: edits to `SKILL.md` under `~/.claude/skills/`, project `.claude/skills/`,
  or an `--add-dir` directory apply within the session. Changes to a plugin's `hooks/`,
  `.mcp.json`, `agents/`, and `output-styles/` need `/reload-plugins`.
- Custom commands have been merged into skills: "A file at `.claude/commands/deploy.md` and a
  skill at `.claude/skills/deploy/SKILL.md` both create `/deploy` and work the same way."

**How a plugin ships skills:** put a `skills/` directory at the **plugin root** (not inside
`.claude-plugin/`), each skill a folder with a `SKILL.md`. Plugin skills become
`/plugin-name:skill-name`. In a plugin skill the frontmatter `name` replaces the directory name in
the last command segment — `my-plugin/skills/review/SKILL.md` with `name: fancy` becomes
`/my-plugin:fancy`.

### 1.3 Plugins

Sources: <https://code.claude.com/docs/en/plugins>, <https://code.claude.com/docs/en/plugins-reference>

**Manifest:** `.claude-plugin/plugin.json`, at the plugin root. The manifest is described as
**optional** "if components use default locations" — a directory with just `skills/` and
`output-styles/` loads. Ship one anyway for name stability and versioning.

**Required fields:** exactly one — `name`. "Unique identifier in kebab-case. Used for namespacing
components. No spaces, control characters, or bidirectional-formatting characters." All other
fields are optional.

Full documented schema:

```json
{
  "$schema": "https://json.schemastore.org/claude-code-plugin-manifest.json",
  "name": "plugin-name",
  "displayName": "Plugin Name",
  "version": "1.2.0",
  "description": "Brief plugin description",
  "author": { "name": "Author Name", "email": "author@example.com", "url": "https://github.com/author" },
  "homepage": "https://docs.example.com/plugin",
  "repository": "https://github.com/author/plugin",
  "license": "MIT",
  "keywords": ["keyword1", "keyword2"],
  "metadata": { "catalogId": "cat-123" },
  "defaultEnabled": true,
  "skills": "./custom/skills/",
  "commands": ["./custom/commands/special.md"],
  "agents": ["./custom/agents/reviewer.md"],
  "hooks": "./config/hooks.json",
  "mcpServers": "./mcp-config.json",
  "outputStyles": "./styles/",
  "lspServers": "./.lsp.json",
  "experimental": { "themes": "./themes/", "monitors": "./monitors.json" },
  "dependencies": ["helper-lib", { "name": "secrets-vault", "version": "~2.1.0" }]
}
```

**Directory structure** — everything except `plugin.json` lives at the plugin root. The docs
flag this as the "Common mistake": "Don't put `commands/`, `agents/`, `skills/`, or `hooks/`
inside the `.claude-plugin/` directory."

| Component | Default location |
|---|---|
| Manifest | `.claude-plugin/plugin.json` |
| Skills | `skills/<name>/SKILL.md` |
| Commands (flat-file skills) | `commands/*.md` |
| Agents | `agents/*.md` |
| Output styles | `output-styles/*.md` |
| Hooks | `hooks/hooks.json` |
| MCP servers | `.mcp.json` |
| LSP servers | `.lsp.json` |
| Monitors | `monitors/monitors.json` |
| Executables (added to `PATH`) | `bin/` |
| Default settings | `settings.json` (only `agent` and `subagentStatusLine` keys honoured) |

**Path behaviour rule that will bite us** (plugins-reference §Path behavior rules):

- `outputStyles`, `commands`, `agents`, `workflows`, `experimental.*` — a manifest value
  **replaces** the default directory scan.
- `skills` — a manifest value **adds to** the default `skills/` scan; `skills/` is always scanned.

So: if `plugin.json` declares `"outputStyles": "./styles/"`, the default `output-styles/` folder
is *no longer scanned*. Pick one convention and stick to it. Simplest is to omit both keys and use
the default `skills/` and `output-styles/` directories.

**Path variables** available inside plugin components:

| Variable | Resolves to |
|---|---|
| `${CLAUDE_PLUGIN_ROOT}` | Absolute path to the plugin's install directory |
| `${CLAUDE_PLUGIN_DATA}` | Persistent dir surviving updates (`~/.claude/plugins/data/{id}/`) |
| `${CLAUDE_PROJECT_DIR}` | The project root |

These resolve in skill and agent content, hook/monitor commands, and MCP/LSP config fields.

### 1.4 Marketplace and installation

Source: <https://code.claude.com/docs/en/plugin-marketplaces>

**Marketplace manifest:** `<repository-root>/.claude-plugin/marketplace.json`.

**Required top-level fields:** `name` (kebab-case), `owner` (object with required `name`),
`plugins` (array). Optional: `$schema`, `description`, `version`, `metadata.pluginRoot`,
`allowCrossMarketplaceDependenciesOn`, `renames`.

**Required plugin-entry fields:** `name`, `source`. An entry may also carry any field from the
plugin manifest schema plus the marketplace-only fields `source`, `category`, `tags`, `strict`,
`relevance`, `headers`, `headersHelper`.

**Source types:** relative path (`"./my-plugin"`, must start with `./`), `github`, `url`,
`git-subdir`, `npm`, `archive`, `command`. For a GitHub-hosted plugin:

```json
{
  "name": "github-plugin",
  "source": { "source": "github", "repo": "owner/plugin-repo", "ref": "v2.0.0" }
}
```

**Self-hosting pattern — one repo that is both plugin and marketplace.** The repo root holds
`.claude-plugin/marketplace.json`, and the entry points at the repo itself:

```json
{
  "name": "unslop",
  "owner": { "name": "Rowin Hernandez" },
  "plugins": [
    { "name": "unslop", "source": "./", "description": "Writing skills and a sound-human style" }
  ]
}
```

Caveat, quoted: "With a marketplace-root `source`, the listed paths are the complete set for that
entry, and other directories in the shared `skills/` folder don't load" — that only applies if you
also declare specific `skills` subdirectories. Leaving `skills` undeclared keeps the full scan.

**Install from a GitHub repo** (exact commands):

```bash
/plugin marketplace add owner/repo          # or owner/repo@branch-name
/plugin install unslop@unslop
```

Non-interactive equivalents:

```bash
claude plugin marketplace add owner/repo
claude plugin install unslop@unslop --scope user   # or --scope project | local
```

Local dev without a marketplace:

```bash
claude --plugin-dir ./unslop        # also accepts a .zip
claude --plugin-url https://example.com/unslop.zip
/reload-plugins                      # pick up edits mid-session
claude plugin validate ./unslop      # add --strict to treat warnings as errors
```

### 1.5 Can one plugin ship a style + skills + commands + agents? Yes.

Confirmed directly. `claude plugin init <name> --with skills agents hooks mcp lsp output-style channel`
scaffolds all of them in one plugin, and the `output-style` value is documented as scaffolding
"An `output-styles/<name>.md` that applies automatically while the plugin is enabled". The docs
do not print the scaffolded file's contents, so that the scaffold sets `force-for-plugin: true`
is an inference from the wording — **unconfirmed**; checked plugins-reference §plugin init and
the output-styles page, neither shows the generated file. `force-for-plugin` itself is documented
and is the only mechanism described for auto-applying a plugin style.

Working layout for this project:

```text
unslop/
├── .claude-plugin/
│   ├── plugin.json
│   └── marketplace.json        # only if the repo is also the marketplace
├── output-styles/
│   └── sound-human.md          # force-for-plugin: true, keep-coding-instructions: true
├── skills/
│   ├── unslop/SKILL.md         # /unslop:unslop — rewrite a draft
│   └── slop-check/SKILL.md     # /unslop:slop-check — lint for AI tells
├── agents/
│   └── editor.md               # optional subagent that carries the voice
└── hooks/
    └── hooks.json              # optional Stop/PostToolUse lint gate
```

Two things worth knowing about the combination:

1. The output style governs the **main conversation only**. Subagents get their own system
   prompt. If the voice must survive delegation, the prose has to also exist as a skill (which
   can be preloaded into subagents) or in the agent definition.
2. A plugin's `settings.json` supports only `agent` and `subagentStatusLine`. There is **no** way
   for a plugin's `settings.json` to set `outputStyle` — `force-for-plugin` in the style file is
   the supported route.

### 1.6 Relevant settings keys

Source: <https://code.claude.com/docs/en/settings-reference>

| Key | Type | Scope | Meaning |
|---|---|---|---|
| `outputStyle` | string | Any file | Selects the active output style by name |
| `enabledPlugins` | object | Any file | `{"plugin-name": true}` per-scope on/off |
| `extraKnownMarketplaces` | array | Any file | Register marketplaces for a repo or org |
| `pluginConfigs` | object | User or Managed | Stores answers to a plugin's config dialog |
| `skillOverrides` | object | Any file | `"hidden"`, `"collapsed"`, `"name-only"` per skill |
| `skillListingBudgetFraction` | number 0–1 | Any file | Context reserved for the skill listing (default 1%) |
| `skillListingMaxDescChars` | number | Any file | Per-skill description cap (default 1536) |
| `disableBundledSkills` | boolean | Any file | Turn off Claude Code's own skills |
| `syncClaudeAiSkills` | boolean | User/Local/Managed | Stop syncing claude.ai account skills |
| `strictPluginOnlyCustomization.skills` | boolean | Managed only | Lock skills to plugin/managed sources |
| `blockedMarketplaces` / `strictKnownMarketplaces` | array | Managed only | Org allow/deny for marketplaces |

Precedence, highest first: `.claude/settings.local.json` → `.claude/settings.json` →
`~/.claude/settings.json` → managed settings.

### 1.7 Claude Code does *not* read AGENTS.md

Source: <https://code.claude.com/docs/en/memory>

Quoted: "Claude Code reads `CLAUDE.md`, not `AGENTS.md`. If your repository already uses
`AGENTS.md` for other coding agents, create a `CLAUDE.md` that imports it." The two documented
bridges are an import line in `CLAUDE.md`:

```markdown
@AGENTS.md
```

or a symlink (`ln -s AGENTS.md CLAUDE.md`; needs Administrator or Developer Mode on Windows, so
prefer the import).

CLAUDE.md locations, broadest to most specific: managed policy
(`/Library/Application Support/ClaudeCode/CLAUDE.md` on macOS, `/etc/claude-code/CLAUDE.md` on
Linux/WSL) → `~/.claude/CLAUDE.md` → `./CLAUDE.md` or `./.claude/CLAUDE.md`.

`/init` reads Cursor rules (`.cursor/rules/`, `.cursorrules`) and Copilot rules
(`.github/copilot-instructions.md`); with `CLAUDE_CODE_NEW_INIT=1` it also reads `AGENTS.md`,
`.devin/rules/`, `.windsurf/rules/` or `.windsurfrules`, and `.clinerules`. `/import` (v2.1.213+)
copies another agent's config in wholesale.

---

## 2. OpenAI Codex

**Headline: Codex does have a true plugin system, and it does have skills — both on the same
`agentskills.io` standard Claude Code uses.** Any guide claiming "Codex has no plugin mechanism,
only AGENTS.md" is out of date.

**Documentation moved.** `https://developers.openai.com/codex/*` now 308-redirects to
`https://learn.chatgpt.com/codex/*` (and `/docs/*`). Every page serves raw markdown by appending
`.md` to the URL; full index at `https://learn.chatgpt.com/llms.txt`. The `openai/codex` GitHub
repo's `docs/config.md` is now a 15-line stub that links to the hosted docs — **do not use it as
a source**. `docs/prompts.md` and `docs/plugins.md` in that repo are 404.

Findings below were cross-checked against a live local install, `codex-cli 0.146.0`.

### 2.1 AGENTS.md

Source: <https://learn.chatgpt.com/codex/agent-configuration/agents-md>

Filenames: **`AGENTS.md`** and **`AGENTS.override.md`**. Discovery precedence, quoted:

> 1. **Global scope:** In your Codex home directory (defaults to `~/.codex`, unless you set
>    `CODEX_HOME`), Codex reads `AGENTS.override.md` if it exists. Otherwise, Codex reads
>    `AGENTS.md`. Codex uses only the first non-empty file at this level.
> 2. **Project scope:** Starting at the project root (typically the Git root), Codex walks down to
>    your current working directory. […] In each directory along the path, it checks for
>    `AGENTS.override.md`, then `AGENTS.md`, then any fallback names in
>    `project_doc_fallback_filenames`. Codex includes at most one file per directory.
> 3. **Merge order:** Codex concatenates files from the root down, joining them with blank lines.
>    Files closer to your current directory override earlier guidance because they appear later in
>    the combined prompt.

**Size limit**, quoted: "Codex skips empty files and stops adding files once the combined size
reaches the limit defined by `project_doc_max_bytes` (**32 KiB by default**)."

**Frontmatter: none.** The page documents no YAML frontmatter for `AGENTS.md`. `agents.md` itself
states: "Are there required fields? No. AGENTS.md is just standard Markdown." The chain is rebuilt
once per run / per TUI session; there is no cache.

One convention worth knowing: a `## Code Review Rules` heading inside the nearest `AGENTS.md`
drives Codex code review in GitHub. `agents.md` is now stewarded by the Agentic AI Foundation
under the Linux Foundation.

### 2.2 Config file

Source: <https://learn.chatgpt.com/codex/config-file/config-reference> (396 documented keys)

- User-level: `~/.codex/config.toml`
- Project-scoped overrides: `.codex/config.toml`, loaded **only when you trust the project**
- Profiles are no longer a `[profiles]` table: "Config profile files live next to `config.toml` as
  `$CODEX_HOME/profile-name.config.toml`; select one with `--profile profile-name`."

Prompt-customisation keys (exact names and verbatim descriptions):

| Key | Type | Description |
|---|---|---|
| `instructions` | string | "Reserved for future use; prefer `model_instructions_file` or `AGENTS.md`." |
| `model_instructions_file` | string (path) | "Replacement for built-in instructions instead of `AGENTS.md`." |
| `developer_instructions` | string | "Additional developer instructions injected into the session (optional)." |
| `compact_prompt` | string | "Inline override for the history compaction prompt." |
| `experimental_compact_prompt_file` | string (path) | "Load the compaction prompt override from a file (experimental)." |
| `project_doc_max_bytes` | number | "Maximum bytes read from `AGENTS.md` when building project instructions." |
| `project_doc_fallback_filenames` | array\<string\> | "Additional filenames to try when `AGENTS.md` is missing." |
| `project_root_markers` | array\<string\> | Root-marker filenames used when searching parents |
| `model_reasoning_effort` | `minimal\|low\|medium\|high\|xhigh` | Responses API only |
| `[[skills.config]]` with `.path`, `.enabled` | array of tables | Per-skill enable/disable; `path` points at a `SKILL.md` |

`project_doc_fallback_filenames` is the hook that lets Codex read a differently-named file — but
note the doc says it is tried **when `AGENTS.md` is missing**, not in addition to it.

**`experimental_instructions_file` no longer appears** in the reference; the current key is
`model_instructions_file`. Whether the old name is still silently accepted is **unconfirmed** —
checked `learn.chatgpt.com/codex/config-file/config-reference.md`, absent from all 396 keys; not
checked against source.

### 2.3 Personality / output-style equivalent

There is **no Claude-Code-style output-styles file mechanism** in Codex. The nearest equivalents
are config keys, not files:

| Key | Values | Notes |
|---|---|---|
| `personality` | `none \| friendly \| pragmatic` | "Default communication style for models that advertise `supportsPersonality`; can be overridden per thread/turn or via `/personality`." Gated by `features.personality`. |
| `model_verbosity` | `low \| medium \| high` | GPT-5 Responses API override |
| `model_reasoning_summary` | `auto \| concise \| detailed \| none` | |
| `hide_agent_reasoning`, `show_raw_agent_reasoning` | boolean | TUI / `codex exec` display |

For wholesale persona replacement the analogue is `model_instructions_file`; for additive persona
it is `developer_instructions` or `AGENTS.md`. `personality` is a three-value enum and cannot
carry our prose.

### 2.4 Custom prompts — deprecated

Source: <https://learn.chatgpt.com/docs/custom-prompts>

Verbatim banner: "**Custom prompts are deprecated. Use skills for reusable instructions that Codex
can invoke explicitly or implicitly.**"

They still function: directory `~/.codex/prompts/`, and "Codex scans only the top-level Markdown
files in that folder". Invoked as `/prompts:<filename>`. Frontmatter fields are `description` and
`argument-hint`. Placeholders: `$1`–`$9`, `$ARGUMENTS`, named uppercase (`$FILE`, supplied as
`KEY=value`), and `$$` for a literal `$`. Not shareable via a repo — local Codex home only.

**Do not build on this.** Ship a skill instead.

### 2.5 Skills — the Agent Skills standard

Sources: <https://learn.chatgpt.com/codex/build-skills>, <https://learn.chatgpt.com/plugins/build/skills>

Verbatim: "A skill implements the [open agent skills standard](https://agentskills.io)." Reference
skills at <https://github.com/openai/skills>.

`SKILL.md` frontmatter — **exactly two required fields**, `name` and `description`:

```markdown
---
name: skill-name
description: Explain exactly when this skill should and should not trigger.
---

Skill instructions for ChatGPT or Codex to follow.
```

Load locations (verbatim table):

| Scope | Path |
|---|---|
| `REPO` | `$CWD/.agents/skills` |
| `REPO` | `$CWD/../.agents/skills` (walked up to repo root) |
| `REPO` | `$REPO_ROOT/.agents/skills` |
| `USER` | `$HOME/.agents/skills` |
| `ADMIN` | `/etc/codex/skills` |
| `SYSTEM` | Bundled with Codex by OpenAI |

**The user path is `~/.agents/skills`, not `~/.codex/skills`.** The widely-blogged "drop it in
`~/.codex/skills/`" is wrong for current versions — on a live install, `~/.codex/skills/` contains
only a `.system/` folder holding OpenAI's bundled skills (`imagegen`, `openai-docs`,
`plugin-creator`, `review-agent`, `skill-creator`, `skill-installer`), while user skills sit in
`~/.agents/skills/` alongside a `~/.agents/.skill-lock.json`. Whether `~/.codex/skills/` outside
`.system/` is scanned at all is **unconfirmed** — only `$HOME/.agents/skills` is listed in
`build-skills.md`.

Directory layout: `SKILL.md` (required) plus optional `scripts/`, `references/`, `assets/`, and
`agents/openai.yaml`.

**Invocation:** explicitly via `/skills` or by typing `$` in Codex CLI/IDE (`@` in ChatGPT);
implicitly by description match. Built-ins include `$skill-creator`, `$skill-installer`,
`$plugin-creator`.

**Context budget**, quoted: "this list uses at most 2% of the model's context window, or 8,000
characters when the context window is unknown." That applies to the name/description/path listing;
the full `SKILL.md` loads on selection.

**`agents/openai.yaml`** — a Codex-specific optional sidecar, and the closest thing Codex has to
style metadata:

```yaml
interface:
  display_name: "Optional user-facing name"
  short_description: "Optional user-facing description"
  icon_small: "./assets/small-logo.svg"
  icon_large: "./assets/large-logo.png"
  brand_color: "#3B82F6"
  default_prompt: "Optional surrounding prompt to use the skill with"
policy:
  allow_implicit_invocation: false
dependencies:
  tools:
    - type: "mcp"
      value: "openaiDeveloperDocs"
      description: "OpenAI Docs MCP server"
      transport: "streamable_http"
      url: "https://developers.openai.com/mcp"
```

`allow_implicit_invocation` defaults to `true`. Setting it `false` is the Codex analogue of Claude
Code's `disable-model-invocation: true`.

Disable a skill without deleting it:

```toml
[[skills.config]]
path = "/path/to/skill/SKILL.md"
enabled = false
```

### 2.6 Plugins and marketplaces — yes, this exists

Sources: <https://learn.chatgpt.com/codex/build-plugins>, <https://developers.openai.com/plugins/>

Quoted: "A plugin is an installable package that can include skills, an MCP server, or both…
ChatGPT and Codex share one universal plugin directory."

CLI surface (verified on 0.146.0):

```
codex plugin add | list | remove
codex plugin marketplace add | list | upgrade | remove
```

Manifest is **`.codex-plugin/plugin.json`**:

```json
{
  "name": "meeting-follow-up",
  "version": "1.0.0",
  "description": "Turn meeting notes into decisions and next steps",
  "skills": "./skills/"
}
```

Layout: `plugin-name/.codex-plugin/plugin.json` plus `skills/<skill>/SKILL.md`. Structurally this
is near-identical to Claude Code's `.claude-plugin/plugin.json` + `skills/` — the same physical
`skills/` tree can serve both, with two sibling manifest directories.

A marketplace is a `.agents/plugins/marketplace.json`:

```json
{
  "name": "kalebtec-icon-design",
  "interface": { "displayName": "Kalebtec Icon Design" },
  "plugins": [{
    "name": "icon-design",
    "source": { "source": "local", "path": "./plugins/icon-design" },
    "policy": { "installation": "AVAILABLE", "authentication": "ON_INSTALL" },
    "category": "Design"
  }]
}
```

Enablement is recorded in `config.toml` as `[plugins."<name>@<marketplace>"] enabled = true`.
Admin governance: `marketplaces.restrict_to_allowed_sources`,
`marketplaces.allowed_sources.<name>.{source,url,ref,host_pattern,path}` where `source` is
`git | host_pattern | local`; plus `features.plugins`, `features.remote_plugin`,
`features.plugin_sharing`. Public listing submission:
<https://developers.openai.com/plugins/deploy/submission>.

### 2.7 Codex unconfirmed items

- Whether `experimental_instructions_file` is still accepted as a legacy alias. Checked
  `learn.chatgpt.com/codex/config-file/config-reference.md`; absent from all 396 keys.
- Whether `~/.codex/skills/` (outside `.system/`) is scanned as a user skill root. Checked
  `learn.chatgpt.com/codex/build-skills.md`; only `$HOME/.agents/skills` is listed.
- Whether the Codex **cloud** agent honours `~/.codex/AGENTS.md` (a machine-local file). Not
  covered by any page fetched.
- Exact plugin/skill behaviour in the IDE extension beyond "same `$` / `/skills` invocation".
---

## 3. Other harnesses

Two structural facts dominate this section and should drive the repo design:

1. **`AGENTS.md` is now the near-universal substrate.** Cursor, Windsurf/Devin, GitHub Copilot
   (all surfaces) and Zed all read it. Claude Code and Aider are the two exceptions.
2. **`.agents/skills/<name>/SKILL.md` is the emerging shared skill convention.** Cursor, Copilot
   and Zed all scan exactly `~/.agents/skills/` and `<project>/.agents/skills/`. Cursor and
   Copilot additionally scan `.claude/skills/`.

Also note three URL/naming changes that invalidate most older write-ups: `docs.cursor.com/*` now
308-redirects to `cursor.com/docs`; `docs.windsurf.com/*` 307-redirects to
`docs.devin.ai/desktop/*`; and `zed.dev/docs/ai/rules` is a dead URL (404) since Zed v1.4.0.

### 3.1 Cursor

Verified against `cursor.com/docs/rules`, `cursor.com/help/customization/skills`,
`cursor.com/docs/plugins`, `cursor.com/docs/reference/plugins`, `cursor.com/docs/hooks`.

| Capability | Path and format |
|---|---|
| Persistent instructions | `.cursor/rules/*.mdc` — **only** the `.mdc` extension is read. The docs explicitly show `api-guidelines.md` in that directory as "ignored - wrong extension". Nested `.cursor/rules` dirs supported (`apps/web/.cursor/rules`). |
| Frontmatter | Exactly three fields: `description`, `globs`, `alwaysApply` |
| User-level | Cursor Settings → **Customize → Rules** (synced). Machine-local, unsynced: `~/.cursor/rules` (`%USERPROFILE%\.cursor\rules` on Windows) |
| Legacy | `.cursorrules` — **deprecated**, quoted: "The `.cursorrules` file in your project root is legacy and will be deprecated." |
| `AGENTS.md` | **Yes.** "Place it in your project root as an alternative to `.cursor/rules`." Nested files supported, "more specific instructions taking precedence." Plain markdown, no frontmatter. `CLAUDE.md` is also read, and is *always* applied "regardless of any `alwaysApply` frontmatter setting." |
| Invocable skill | `.cursor/skills/<name>/SKILL.md`; also `.agents/skills/`, `~/.cursor/skills/`, `~/.agents/skills/`; legacy-compat `.claude/skills/` and `.codex/skills/`. Frontmatter `name`, `description`, optional `paths` (globs). Invoke `/skill-name`, attach with `@skill-name`. |
| Commands | `.cursor/commands/<command>.md`, invoked with `/`. **Soft-confirmed** — no dedicated commands page remains in `cursor.com/llms.txt`; documented via blog/changelog and referenced from the skills page. Cursor is steering commands → skills. |
| Packaged install | **Yes.** Plugins bundle rules + skills + agents + commands + hooks + MCP. Two manifest forms: *Agent Plugin* = `plugin.json` at root; *Cursor Plugin* = `.cursor-plugin/plugin.json`. Only `name` required. Layout: `rules/`, `skills/<name>/SKILL.md`, `agents/`, `commands/`, `hooks/hooks.json`, `mcp.json`, `assets/`, `scripts/`. Distribution via public git repo → `cursor.com/marketplace/publish`; local dev via `~/.cursor/plugins/local/`; multi-plugin repos via `.cursor-plugin/marketplace.json` (up to 500). |

Rule types are now derived from frontmatter rather than named modes:

| Behaviour | Frontmatter combination |
|---|---|
| Always Apply | `alwaysApply: true` |
| Apply Intelligently | `alwaysApply: false` + `description` |
| Apply to Specific Files | `alwaysApply: false` + `globs` |
| Apply Manually | `alwaysApply: false`, no `description`/`globs` |

Minimal always-on rule:

```markdown
---
description: "Voice and prose rules"
alwaysApply: true
---

Write like a person, not a press release. ...
```

### 3.2 Windsurf (now Devin Desktop)

Verified against `docs.devin.ai/desktop/cascade/memories`,
`docs.devin.ai/desktop/cascade/agents-md`, `docs.devin.ai/desktop/cascade/workflows`.

Windsurf has been folded into Cognition's Devin Desktop docs. The `.windsurf/*` paths still work
but are labelled **legacy**.

| Capability | Path |
|---|---|
| Project rules | `.devin/rules/*.md` (preferred) · `.windsurf/rules/*.md` (legacy) · `.windsurfrules` (legacy, repo root) |
| Global rules | `~/.codeium/windsurf/memories/global_rules.md` |
| System/enterprise | `/Library/Application Support/Devin/rules/*.md` (macOS), `/etc/devin/rules/*.md` (Linux/WSL), `C:\ProgramData\Devin\rules\*.md` |
| Workflows | `.windsurf/workflows/*.md` (workspace), `~/.codeium/windsurf/global_workflows/*.md` (global). Invoked `/<workflow-name>`, **manual only** — "Cascade will never invoke a workflow automatically." |

Rules are discovered in parent directories up to the git root.

**Frontmatter keys:** `trigger`, `globs`, `description`. Activation values are **snake_case**:
`always_on`, `model_decision`, `glob`, `manual`. Manual rules are invoked with `@rule-name`.

```markdown
---
description: "API design rules"
trigger: always_on
---
```

**Character limits — the tightest of any harness here:** 12,000 characters per workspace rule
file, 6,000 characters for the global rules file. Workflows are also capped at 12,000. A long
style guide must be trimmed or split for this target.

**`AGENTS.md`: yes, first-class.** Case-insensitive, discovered across the workspace and parent
dirs to the git root. A root file is treated as an `always_on` rule; a subdirectory file is
treated as a `glob` rule with auto-generated pattern `<directory>/**`. Activation mode is
"inferred from the file's location instead of frontmatter."

**Workflow frontmatter schema: unconfirmed.** The current page describes "a title, description,
and a series of steps" but documents no frontmatter schema; the older `description` /
`auto_execution_mode` keys are no longer stated. Checked
`https://docs.devin.ai/desktop/cascade/workflows`.

Devin also now has Skills (`docs.devin.ai/desktop/cascade/skills`) and Plugins
(`docs.devin.ai/cli/extensibility/plugins/overview`); these were not audited in depth.

### 3.3 Aider

Verified against `aider.chat/docs/usage/conventions.html`,
`aider.chat/docs/config/aider_conf.html`.

Aider is the outlier: **nothing is auto-loaded by filename.** The convention is a plain markdown
file, conventionally `CONVENTIONS.md` at repo root, that you must explicitly point aider at.

- CLI: `aider --read CONVENTIONS.md`
- In chat: `/read CONVENTIONS.md`
- Config: `.aider.conf.yml`, key `read:` — both forms valid:

```yaml
read:
  - CONVENTIONS.md
  - anotherfile.txt
```

```yaml
read: [CONVENTIONS.md, anotherfile.txt]
```

The docs recommend `--read`/`read:` specifically because the file "is marked as read-only, and
cached if prompt caching is enabled."

Config precedence: searched in **home directory → git repo root → current directory**, loaded in
that order; "files loaded last will take priority." `--config <filename>` overrides all and loads
only that file.

**`AGENTS.md`: no.** No mention anywhere in the aider docs. No skills, no commands, no
style-switching, no packaged install. Community conventions are shared as a repo of plain markdown
files. For our plugin, aider needs an explicit `read:` entry.

### 3.4 GitHub Copilot

Verified against `docs.github.com/en/copilot/concepts/response-customization`,
`.../add-repository-instructions`, `.../concepts/agents/about-agent-skills`,
`.../concepts/agents/cloud-agent/about-custom-agents`,
`code.visualstudio.com/docs/copilot/customization/custom-instructions`, `.../prompt-files`,
`.../custom-chat-modes`.

| Capability | Path and format |
|---|---|
| Repo-wide instructions | `.github/copilot-instructions.md` — applies across all Copilot surfaces |
| Path-scoped instructions | `.github/instructions/NAME.instructions.md`, frontmatter `applyTo` (glob; comma-separate for multiple). VS Code also accepts `name` and `description`. Server-side these are supported only by the **Copilot cloud agent and code review on github.com**; editors support them via VS Code's own loader. |
| User-level | `~/.copilot/instructions/*.instructions.md`. VS Code also reads `.claude/rules/*.instructions.md` and `~/.claude/rules/*.instructions.md` — note that for `.claude/rules` files the scoping key is **`paths`**, not `applyTo`. Personal instructions on github.com are set via a Copilot Chat popup, no file path. |
| `AGENTS.md` | **Yes.** Read anywhere in the repo; "the nearest `AGENTS.md` file in the directory tree will take precedence." `CLAUDE.md` and `GEMINI.md` also read at repo root; VS Code additionally reads `.claude/CLAUDE.md` and `~/.claude/CLAUDE.md`. |
| Invocable skill | **Yes.** Project: `.github/skills`, `.claude/skills`, `.agents/skills`. Personal: `~/.copilot/skills`, `~/.agents/skills`. `SKILL.md` frontmatter: required `name` (lowercase, hyphens) and `description`; optional `license`, `allowed-tools`. Supported by cloud agent, code review, Copilot CLI, the Copilot app, and agent mode in VS Code and JetBrains. |
| Prompt files | `.github/prompts/*.prompt.md` + a user-profile location. Frontmatter: `description`, `name`, `argument-hint`, `agent`, `model`, `tools`. **`mode:` has been renamed to `agent:`.** Invoked `/promptname`. |
| Style switching | Custom agents. **`*.chatmode.md` is superseded by `*.agent.md`** — "If you have existing `.chatmode.md` files, rename them to `.agent.md`." Locations: `.github/agents/` (workspace), `~/.copilot/agents` (user), `.claude/agents/` (Claude-format compat). Frontmatter: `name`, `description`, `tools`, `model` (single or prioritised array), `handoffs`. Server-side: `.github/agents/NAME.md` (repo), `/agents/NAME.md` in the org's `.github`/`.github-private` repo. |
| Packaged install | Skills directories are the practical distribution unit. Copilot Extensions (GitHub Apps) are a separate mechanism and **unconfirmed** as an instruction-distribution path. |

Relevant VS Code settings keys: `chat.instructionsFilesLocations`,
`chat.includeApplyingInstructions`, `chat.includeReferencedInstructions`, `chat.useAgentsMdFile`,
`chat.useNestedAgentsMdFiles`, `chat.useClaudeMdFile`,
`github.copilot.chat.organizationInstructions.enabled`.

### 3.5 Zed

Verified against `zed.dev/docs/ai/instructions`, `zed.dev/docs/ai/skills`,
`zed.dev/docs/ai/agent-settings`, `zed.dev/releases/stable/1.4.2`.

**Zed restructured this in v1.4.0 — the Rules Library is gone.** Breaking-change notes, verbatim:
"Removed the rules library and replaced it with skills support." and "Replaced the `@rule`
autocomplete entry with `@skill` in the agent chat input." `zed.dev/docs/ai/rules` now 404s.

| Capability | Path |
|---|---|
| Global personal instructions | `~/.config/zed/AGENTS.md` (`%APPDATA%\Zed\AGENTS.md` on Windows). Added in 1.4.0 as "user-wide instructions that are included in every project's system prompt." Old Default Rules were migrated by being appended here. |
| Project instructions | Checked in this precedence order: `.rules` → `.cursorrules` → `.windsurfrules` → `.clinerules` → `.github/copilot-instructions.md` → `AGENT.md` → `AGENTS.md` → `CLAUDE.md` → `GEMINI.md`. Project instructions override the personal `AGENTS.md` on conflict. |
| Invocable skill | `~/.agents/skills/` (global) and `<worktree>/.agents/skills/` (project — loads only from **trusted** worktrees). `SKILL.md` frontmatter: `name` (required), `description` (required), `disable-model-invocation` (optional). Invoked via `/` picker or `@skill` mention. |
| Packaged install | None found for instructions; skills directories are the distribution unit. |

Non-default old rules were migrated to `~/.agents/skills/` with `disable-model-invocation: true`.

**Unconfirmed:** whether Zed reads `.claude/skills` — not mentioned on `zed.dev/docs/ai/skills`.
**Unconfirmed:** agent *profiles* settings keys (`default_profile`, `profiles`,
`always_allow_tool_actions`) — the current agent-settings page discusses profiles and tool
permissions conceptually but does not show those JSON keys. Checked `zed.dev/docs/ai/agent-settings`
and `zed.dev/docs/ai/tool-permissions`. Confirmed `settings.json` agent keys are model selectors and
`agent.commit_message_instructions`, `agent.inline_alternatives`, `agent.model_parameters`,
`agent.auto_compact` — none of which is a general style switch.

---

## 4. Portability matrix

Legend: **Yes** = first-class, documented · **Partial** = works but degraded, legacy, or
constrained · **No** = no such mechanism.

| Harness | Persistent instructions | Invocable skill | Style switching | Packaged install |
|---|---|---|---|---|
| **Claude Code** | Yes — `CLAUDE.md` (managed → `~/.claude/CLAUDE.md` → `./CLAUDE.md`). **Does not read `AGENTS.md`**; bridge with `@AGENTS.md` import | Yes — `SKILL.md` in `~/.claude/skills/`, `.claude/skills/`, plugin `skills/`. `/name` or auto by `description` | **Yes — the only true one.** `output-styles/*.md` injected into the system prompt; `outputStyle` setting; `force-for-plugin: true` auto-applies | Yes — `.claude-plugin/plugin.json` + `.claude-plugin/marketplace.json`; `/plugin marketplace add owner/repo` |
| **OpenAI Codex** | Yes — `AGENTS.md` / `AGENTS.override.md`, global `~/.codex/` then root-down merge, capped by `project_doc_max_bytes` (32 KiB) | Yes — Agent Skills standard, `~/.agents/skills/`, `$REPO_ROOT/.agents/skills/`. `$name` or `/skills` | Partial — no style files. `personality` is a 3-value enum (`none\|friendly\|pragmatic`); `model_instructions_file` replaces built-in instructions wholesale; `developer_instructions` appends | Yes — `.codex-plugin/plugin.json`, `.agents/plugins/marketplace.json`, `codex plugin add` |
| **Cursor** | Yes — `.cursor/rules/*.mdc` (**`.mdc` only**), `alwaysApply: true`. Also reads `AGENTS.md` and `CLAUDE.md` | Yes — `.cursor/skills/<name>/SKILL.md`, also `.agents/skills/`, `.claude/skills/`. `/name` or `@name` | Partial — no persona switcher; nearest is a manual rule (`alwaysApply: false`, no globs) invoked on demand | Yes — `plugin.json` or `.cursor-plugin/plugin.json`; marketplace via public git repo |
| **Windsurf / Devin** | Yes — `.devin/rules/*.md` (`.windsurf/rules/*.md` legacy), `trigger: always_on`. Global `~/.codeium/windsurf/memories/global_rules.md`. Reads `AGENTS.md`. **12,000-char cap per file; 6,000 global** | Partial — workflows `.windsurf/workflows/*.md`, `/name`, **manual-only**: "Cascade will never invoke a workflow automatically." Devin Skills exist but were not audited | Partial — `trigger: manual` rules invoked with `@rule-name` | Partial — Devin CLI plugins exist (`docs.devin.ai/cli/extensibility/plugins/overview`), **not audited** |
| **Aider** | Partial — plain `CONVENTIONS.md`, **not auto-loaded**; needs `--read`, `/read`, or `read:` in `.aider.conf.yml`. **Does not read `AGENTS.md`** | No | No | No — conventions are shared as plain markdown repos |
| **GitHub Copilot** | Yes — `.github/copilot-instructions.md`; `.github/instructions/*.instructions.md` with `applyTo`; `~/.copilot/instructions/`. Reads `AGENTS.md`, `CLAUDE.md`, `GEMINI.md` | Yes — `SKILL.md` in `.github/skills`, `.claude/skills`, `.agents/skills`, `~/.copilot/skills`, `~/.agents/skills`. Also prompt files `.github/prompts/*.prompt.md` (`/name`) | Yes — custom agents, `*.agent.md` (**renamed from `*.chatmode.md`**) in `.github/agents/`, `~/.copilot/agents`, `.claude/agents/` | Partial — skills dirs are the distribution unit. Copilot Extensions (GitHub Apps) **unconfirmed** as an instruction-distribution path |
| **Zed** | Yes — `~/.config/zed/AGENTS.md` (global), project chain `.rules` → `.cursorrules` → `.windsurfrules` → `.clinerules` → `.github/copilot-instructions.md` → `AGENT.md` → `AGENTS.md` → `CLAUDE.md` → `GEMINI.md` | Yes — `~/.agents/skills/`, `<worktree>/.agents/skills/` (trusted worktrees only). `/` picker or `@skill` | Partial — Rules Library **removed in v1.4.0**; a `disable-model-invocation: true` skill is the replacement pattern | No packaged mechanism found; skills dirs are the unit |

### What the matrix implies

1. **Only Claude Code has real style switching.** Everywhere else, an always-on voice has to ride
   in the persistent-instructions channel, and the "invoke the voice deliberately" case has to
   ride in a manually-invoked skill. Budget for two artefacts, not one.
2. **`AGENTS.md` covers five of seven** (Codex, Cursor, Windsurf, Copilot, Zed). Claude Code needs
   a one-line `@AGENTS.md` bridge; Aider needs a config entry. That is the cheapest possible
   coverage story.
3. **`.agents/skills/<name>/SKILL.md` covers four of seven** (Codex, Cursor, Copilot, Zed) with a
   *byte-identical* file, provided the frontmatter is restricted to the Agent Skills spec fields.
   Claude Code needs the same file at a different path. Windsurf and Aider get nothing here.
4. **Windsurf's 12,000/6,000-character caps are the binding constraint** on prose length. Whatever
   the canonical style document says, the Windsurf adapter must emit a trimmed variant or a build
   check must fail.
5. **Frontmatter is the only thing that genuinely differs per harness.** The prose body is portable
   everywhere. That is what makes a generate-from-canonical approach work rather than a
   copy-everywhere approach.

---

## 5. Recommended repo layout

The design rule: **prose lives in exactly one place per idea; every harness file is generated.**
Nothing under a harness-specific path is hand-edited, and nothing generated is committed as the
source of truth.

```text
unslop/
├── content/                          # ← the ONLY hand-written prose
│   ├── voice.md                      #   the "sound human" style, body only, no frontmatter
│   ├── voice.short.md                #   ≤6,000 chars variant for Windsurf global / tight budgets
│   └── skills/
│       ├── unslop/
│       │   ├── SKILL.md              #   spec-only frontmatter: name, description
│       │   └── references/
│       │       └── tells.md          #   the AI-tell catalogue
│       └── slop-check/
│           └── SKILL.md
│
├── adapters/                         # ← per-harness frontmatter + path mapping, NO prose
│   ├── claude-code.yaml
│   ├── codex.yaml
│   ├── cursor.yaml
│   ├── windsurf.yaml
│   ├── copilot.yaml
│   ├── zed.yaml
│   └── aider.yaml
│
├── scripts/
│   ├── build.mjs                     # renders content/ + adapters/ → dist/
│   ├── install.mjs                   # symlinks/copies dist/<harness>/ into place
│   └── check.mjs                     # char-cap + frontmatter-legality validation
│
├── dist/                             # ← generated, gitignored (except the plugin, see below)
│   ├── claude-code/
│   ├── codex/
│   ├── cursor/
│   ├── windsurf/
│   ├── copilot/
│   ├── zed/
│   └── aider/
│
├── .claude-plugin/
│   ├── plugin.json                   # committed — Claude Code plugin manifest
│   └── marketplace.json              # committed — repo is its own marketplace
├── .codex-plugin/
│   └── plugin.json                   # committed — Codex plugin manifest
│
├── skills/                           # committed, generated — shared by BOTH plugin manifests
│   ├── unslop/SKILL.md
│   └── slop-check/SKILL.md
├── output-styles/
│   └── sound-human.md                # committed, generated — Claude Code only
├── AGENTS.md                         # committed, generated — the five-harness substrate
└── README.md
```

### Why this shape

**The `skills/` directory is shared, not duplicated.** Claude Code's `.claude-plugin/plugin.json`
and Codex's `.codex-plugin/plugin.json` both default to a `skills/` folder at the plugin root
containing `<name>/SKILL.md`. One tree, two sibling manifest directories, zero copies. This works
only if `SKILL.md` frontmatter is restricted to the six Agent Skills spec fields — which is also
the requirement for claude.ai upload — so the constraint pays for itself twice.

**Claude Code-only frontmatter is injected at build time, not authored.** `content/skills/unslop/SKILL.md`
carries `name` + `description` only. `adapters/claude-code.yaml` adds `disable-model-invocation`,
`when_to_use`, `allowed-tools` and so on when rendering into the committed `skills/` tree. If you
ever need the pure-spec version back (for upload), render it from `content/` with the null adapter.

**`AGENTS.md` is generated from `content/voice.md`, not hand-written.** It is the single artefact
that satisfies Codex, Cursor, Windsurf, Copilot and Zed at once.

### Concretely, which files get generated for which harness

| Harness | Generated artefacts | Install action |
|---|---|---|
| **Claude Code** | `output-styles/sound-human.md` (frontmatter: `name`, `description`, `keep-coding-instructions: true`, `force-for-plugin: true`); `skills/*/SKILL.md` with Claude extensions; `.claude-plugin/plugin.json`; `.claude-plugin/marketplace.json` | `/plugin marketplace add rowin/unslop` then `/plugin install unslop@unslop`. Nothing to copy — the repo *is* the plugin |
| **Codex** | `.codex-plugin/plugin.json`; shares the same `skills/` tree; optional `skills/*/agents/openai.yaml` for `allow_implicit_invocation`; `AGENTS.md` | `codex plugin add`, or symlink `content/skills/*` into `~/.agents/skills/` |
| **Cursor** | `dist/cursor/.cursor/rules/sound-human.mdc` (frontmatter `description`, `alwaysApply: true`) — **`.mdc`, not `.md`**; skills copied to `.cursor/skills/` or relies on `AGENTS.md` + `.agents/skills/` | Copy `dist/cursor/.cursor/` into the target repo, or install the Cursor plugin form |
| **Windsurf / Devin** | `dist/windsurf/.devin/rules/sound-human.md` (frontmatter `trigger: always_on`, `description`) built from `voice.md` **with a 12,000-char assertion**; `dist/windsurf/global_rules.md` built from `voice.short.md` with a **6,000-char** assertion | Copy into `.devin/rules/`; copy the global file to `~/.codeium/windsurf/memories/global_rules.md` |
| **GitHub Copilot** | `dist/copilot/.github/copilot-instructions.md`; optionally `.github/instructions/sound-human.instructions.md` with `applyTo: "**"`; `.github/agents/sound-human.agent.md` (`name`, `description`) for the style-switch case; skills via `.github/skills/` | Copy `.github/` into the target repo |
| **Zed** | Nothing harness-specific needed — Zed reads the generated root `AGENTS.md`, and `content/skills/` maps directly onto `~/.agents/skills/` | Symlink `content/skills/*` into `~/.agents/skills/`; optionally copy `AGENTS.md` to `~/.config/zed/AGENTS.md` for the global case |
| **Aider** | `dist/aider/CONVENTIONS.md` (plain, no frontmatter) + a snippet for `.aider.conf.yml` | Add `read: [CONVENTIONS.md]` to `.aider.conf.yml`, or run `aider --read CONVENTIONS.md` |

Plus one shared artefact:

| Artefact | Serves |
|---|---|
| `AGENTS.md` at repo root | Codex, Cursor, Windsurf, Copilot, Zed |
| `CLAUDE.md` containing the single line `@AGENTS.md` | Claude Code, when installing into a *target repo* rather than as a plugin |

### Build-time checks worth enforcing in `scripts/check.mjs`

1. **Windsurf caps** — fail if the `.devin/rules/` output exceeds 12,000 chars or the global output
   exceeds 6,000.
2. **Agent Skills legality** — fail if `content/skills/*/SKILL.md` frontmatter contains anything
   outside `name`, `description`, `license`, `compatibility`, `metadata`, `allowed-tools`. This is
   a hard error on the claude.ai/API packaging path, not a warning.
3. **Skill name rules** — `name` must be 1–64 chars, lowercase alphanumerics and single hyphens,
   no leading/trailing hyphen, and **must match the parent directory name**.
4. **Description cap** — keep `description` (plus `when_to_use` on the Claude Code render) under
   1,536 characters, and put the trigger case first, because Claude Code truncates the listing and
   Codex caps its listing at 2% of context / 8,000 chars.
5. **`keep-coding-instructions: true`** must be present on the Claude Code output style, or
   installing the plugin silently strips Claude Code's built-in software-engineering instructions.
6. **Cursor extension** — assert the rules file is written as `.mdc`; a `.md` file in
   `.cursor/rules/` is documented as ignored.
7. **`SKILL.md` length** — warn above 500 lines; move detail into `references/`.

### One thing to decide early

The output style governs the **main conversation only** — subagents run their own system prompt.
If the voice must survive delegation in Claude Code, the same prose has to exist as a skill too
(skills can be preloaded into subagents) or be baked into an `agents/*.md` definition. That is the
main reason `content/voice.md` should be renderable into more than one target, and the main reason
not to collapse the style and the skill into a single artefact.

---

## 6. Summary of unconfirmed items

| Item | Status | What was checked |
|---|---|---|
| Whether `claude plugin init --with output-style` writes `force-for-plugin: true` | Unconfirmed (inferred from wording) | plugins-reference §plugin init; output-styles page — neither prints the scaffolded file |
| Codex `experimental_instructions_file` still accepted as a legacy alias | Unconfirmed | `learn.chatgpt.com/codex/config-file/config-reference.md` — absent from all 396 keys |
| Whether `~/.codex/skills/` (outside `.system/`) is a scanned user skill root | Unconfirmed | `learn.chatgpt.com/codex/build-skills.md` — only `$HOME/.agents/skills` listed |
| Whether Codex **cloud** honours the machine-local `~/.codex/AGENTS.md` | Unconfirmed | No fetched page covers it |
| Windsurf/Devin **workflow** frontmatter schema | Unconfirmed | `docs.devin.ai/desktop/cascade/workflows` — describes "title, description, steps"; older `description` / `auto_execution_mode` keys no longer stated |
| Devin Skills and Devin CLI Plugins detail | Not audited | `docs.devin.ai/desktop/cascade/skills`, `docs.devin.ai/cli/extensibility/plugins/overview` |
| Cursor `.cursor/commands/*.md` | Soft-confirmed | No dedicated page in `cursor.com/llms.txt`; documented via blog/changelog and referenced from the skills page |
| Copilot Extensions (GitHub Apps) as an instruction-distribution path | Unconfirmed | `docs.github.com/en/copilot/*` pages fetched cover skills and custom agents, not extension-delivered instructions |
| Whether Zed reads `.claude/skills` | Unconfirmed | `zed.dev/docs/ai/skills` — not mentioned |
| Zed agent *profiles* settings keys (`default_profile`, `profiles`, `always_allow_tool_actions`) | Unconfirmed | `zed.dev/docs/ai/agent-settings`, `zed.dev/docs/ai/tool-permissions` — profiles discussed conceptually, keys not shown |

## 7. Stale-information warnings

Several widely-circulated facts are now wrong. Anything written against them needs rechecking:

- `developers.openai.com/codex/*` → redirects to `learn.chatgpt.com/codex/*`. The `openai/codex`
  repo's `docs/config.md` is a stub; `docs/prompts.md` and `docs/plugins.md` are 404.
- Codex user skills live in **`~/.agents/skills/`**, not `~/.codex/skills/`.
- Codex custom prompts (`~/.codex/prompts/`, `/prompts:name`) are **deprecated** in favour of skills.
- Claude Code's `/output-style` command was removed in v2.1.91; use `/config` or the `outputStyle` setting.
- `docs.cursor.com/*` → redirects to `cursor.com/docs`. `.cursorrules` is legacy/deprecated.
- `docs.windsurf.com/*` → redirects to `docs.devin.ai/desktop/*`; `.windsurf/*` paths are legacy.
- Copilot prompt-file `mode:` was renamed to `agent:`; `*.chatmode.md` was renamed to `*.agent.md`.
- Zed's Rules Library was removed in v1.4.0 and `zed.dev/docs/ai/rules` returns 404.
