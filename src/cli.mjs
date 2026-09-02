#!/usr/bin/env node
// composerxai-lint — lints prose for AI tells.
//
// Zero runtime dependencies. Node built-ins only.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname, relative } from 'node:path';
import process from 'node:process';

import { lintText, summarise, RULES, OMITTED_RULES, MODES, resolveMode } from './lint.mjs';
import { MODE_ALIASES } from './modes.mjs';
import { renderHuman, renderJson, makeColour } from './report.mjs';

const VERSION = '0.1.0';
const TEXT_EXT = new Set(['.md', '.mdx', '.markdown', '.txt', '.rst', '.eml']);

const USAGE = `composerxai-lint ${VERSION} — lint prose for AI tells

Usage
  composerxai-lint [file|dir ...] [options]
  cat draft.md | composerxai-lint --mode=address

Options
  --mode=<mode>        Ledger mode. Default: passage.
                       ${Object.keys(MODES).join(', ')}
                       Aliases: ${Object.keys(MODE_ALIASES).join(', ')}
  --json               Machine-readable output on stdout.
  --strict             Judgement findings also fail the build.
  --include-opt-in     Enable opt-in lexicon entries. Read the comment above
                       the delve entry in src/data/lexicon.mjs first.
  --only=<ids>         Comma-separated rule ids to run.
  --skip=<ids>         Comma-separated rule ids to skip.
  --verbose            Print the source citation under every finding.
  --show-relaxed       Print which rules the mode relaxed or disabled.
  --list-rules         Print every rule with its class and source, then exit.
  --explain-omissions  Print the rules deliberately not implemented, and why.
  --no-color           Plain output.
  --version, --help

Exit codes
  0  no gated findings
  1  at least one enforceable finding (or any finding under --strict)
  2  usage error

Enforceable rules gate the exit code. Judgement rules report and do not.
A rule without a gate is a suggestion, and is printed as one.`;

function parseArgs(argv) {
  const opts = {
    mode: 'passage', json: false, strict: false, includeOptIn: false,
    only: null, skip: null, verbose: false, showRelaxed: false,
    colour: Boolean(process.stdout.isTTY) && !process.env.NO_COLOR,
    paths: [], action: null, error: null,
  };
  for (const arg of argv) {
    if (arg === '--help' || arg === '-h') opts.action = 'help';
    else if (arg === '--version' || arg === '-V') opts.action = 'version';
    else if (arg === '--list-rules') opts.action = 'list-rules';
    else if (arg === '--explain-omissions') opts.action = 'omissions';
    else if (arg === '--json') opts.json = true;
    else if (arg === '--strict') opts.strict = true;
    else if (arg === '--include-opt-in') opts.includeOptIn = true;
    else if (arg === '--verbose' || arg === '-v') opts.verbose = true;
    else if (arg === '--show-relaxed') opts.showRelaxed = true;
    else if (arg === '--no-color' || arg === '--no-colour') opts.colour = false;
    else if (arg.startsWith('--mode=')) opts.mode = arg.slice(7);
    else if (arg.startsWith('--only=')) opts.only = arg.slice(7).split(',').map((s) => s.trim()).filter(Boolean);
    else if (arg.startsWith('--skip=')) opts.skip = arg.slice(7).split(',').map((s) => s.trim()).filter(Boolean);
    else if (arg.startsWith('-')) opts.error = `unknown option: ${arg}`;
    else opts.paths.push(arg);
  }
  return opts;
}

// Directories a recursive run skips by default. Three kinds, and the reasons
// differ.
//
// `test/fixtures` holds deliberately bad prose — it is the control group, and a
// linter that fails its own negative fixtures is working. `research` holds raw
// source notes that were never written to ship. Walking either makes the printed
// count meaningless, which is worse than not printing one.
//
// 🔴 `corpus` and `voice-profiles` are the serious entry. A finding quotes the
// text that matched it, so a recursive run with `--json` over a private writing
// corpus writes that corpus into the report. The gitignore keeps the corpus out
// of commits and does nothing about the linter's own output. This list is the
// second half of that boundary.
//
// Named paths on the command line still lint. This is a default, not a ban, and
// the corpus entries are the one place where that distinction is a real risk:
// point the linter at a corpus deliberately and it will read it.
const DEFAULT_IGNORE = new Set([
  'node_modules',
  'fixtures',
  'research',
  'corpus',
  'voice-profiles',
]);

function walk(target, acc = []) {
  const st = statSync(target);
  if (st.isFile()) { acc.push(target); return acc; }
  for (const name of readdirSync(target).sort()) {
    if (DEFAULT_IGNORE.has(name) || name.startsWith('.')) continue;
    const full = join(target, name);
    if (statSync(full).isDirectory()) walk(full, acc);
    else if (TEXT_EXT.has(extname(name).toLowerCase())) acc.push(full);
  }
  return acc;
}

function listRules(c) {
  const lines = [];
  let category = null;
  for (const r of [...RULES].sort((a, b) => a.category.localeCompare(b.category) || a.id.localeCompare(b.id))) {
    if (r.category !== category) { category = r.category; lines.push('', c.bold(category)); }
    const cls = r.class === 'enforceable' ? c.cyan('gate ') : c.grey('sugg ');
    lines.push(`  ${cls} ${r.id.padEnd(34)} ${r.summary}`);
    lines.push(`         ${c.grey(r.source)}`);
    if (r.modes) {
      const modes = Object.entries(r.modes)
        .map(([m, o]) => `${m}:${o.enabled === false ? 'off' : Object.entries(o).map(([k, v]) => `${k}=${v}`).join(',')}`)
        .join('  ');
      lines.push(`         ${c.grey('mode overrides: ' + modes)}`);
    }
  }
  const gate = RULES.filter((r) => r.class === 'enforceable').length;
  lines.push('', c.grey(`${RULES.length} rules. ${gate} gate the exit code, ${RULES.length - gate} are suggestions.`));
  return lines.join('\n');
}

function explainOmissions(c) {
  const lines = [c.bold('Rules deliberately not implemented'), ''];
  for (const o of OMITTED_RULES) {
    lines.push(c.red(o.id));
    lines.push(`  ${c.grey('proposed by:')} ${o.proposedBy}`);
    lines.push(`  ${o.reason.replace(/\s+/g, ' ')}`);
    lines.push(`  ${c.grey('would need:')} ${o.wouldNeed}`);
    lines.push('');
  }
  return lines.join('\n');
}

export function main(argv, io = process) {
  const opts = parseArgs(argv);
  const c = makeColour(opts.colour);

  if (opts.error) { io.stderr.write(`${opts.error}\n\n${USAGE}\n`); return 2; }
  if (opts.action === 'help') { io.stdout.write(`${USAGE}\n`); return 0; }
  if (opts.action === 'version') { io.stdout.write(`${VERSION}\n`); return 0; }
  if (opts.action === 'list-rules') { io.stdout.write(`${listRules(c)}\n`); return 0; }
  if (opts.action === 'omissions') { io.stdout.write(`${explainOmissions(c)}\n`); return 0; }

  const mode = resolveMode(opts.mode);
  if (!mode) {
    io.stderr.write(`unknown mode: ${opts.mode}\nknown: ${Object.keys(MODES).join(', ')}\naliases: ${Object.keys(MODE_ALIASES).join(', ')}\n`);
    return 2;
  }

  const inputs = [];
  if (opts.paths.length === 0) {
    let stdin = '';
    try { stdin = readFileSync(0, 'utf8'); } catch { stdin = ''; }
    if (!stdin.trim()) { io.stderr.write(`nothing to lint\n\n${USAGE}\n`); return 2; }
    inputs.push({ path: '<stdin>', raw: stdin });
  } else {
    for (const p of opts.paths) {
      let files;
      try { files = walk(p); } catch (err) { io.stderr.write(`cannot read ${p}: ${err.message}\n`); return 2; }
      for (const f of files) inputs.push({ path: relative(process.cwd(), f) || f, raw: readFileSync(f, 'utf8') });
    }
  }

  const results = inputs.map(({ path, raw }) => lintText(raw, {
    path, mode, includeOptIn: opts.includeOptIn, only: opts.only, skip: opts.skip,
  }));
  const summary = summarise(results, { strict: opts.strict });

  io.stdout.write(opts.json
    ? `${renderJson(results, summary, { version: VERSION })}\n`
    : `${renderHuman(results, summary, { colour: c, verbose: opts.verbose, showRelaxed: opts.showRelaxed })}\n`);
  return summary.exitCode;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  process.exitCode = main(process.argv.slice(2));
}
