// Engine.
//
// Two ideas, both from CONTRIBUTING.md: every rule carries a source, and every
// rule carries a class. Enforceable rules gate the exit code. Judgement rules
// report and never fail the build unless you ask with --strict. "A rule without
// a gate is a suggestion" — so a judgement rule is labelled a suggestion rather
// than being quietly promoted to a gate.

import { parseDocument } from './doc.mjs';
import { RULES, OMITTED_RULES } from './rules/index.mjs';
import { MODES, DEFAULT_MODE, resolveMode } from './modes.mjs';

export { RULES, OMITTED_RULES, MODES, resolveMode };

function configFor(rule, mode) {
  const base = {
    enabled: true,
    severity: rule.severity || 'warning',
    class: rule.class,
    threshold: rule.threshold,
  };
  const override = rule.modes && rule.modes[mode];
  return override ? { ...base, ...override } : base;
}

export function lintText(raw, { path = '<stdin>', mode = DEFAULT_MODE, includeOptIn = false, only = null, skip = null } = {}) {
  // File-level directives. A ban-list necessarily contains the words it bans, and
  // a style guide quotes the phrasing it forbids. Without an escape those files
  // can never pass, which teaches people to ignore the linter.
  //
  //   <!-- composerxai-lint disable -->            skip the file
  //   <!-- composerxai-lint disable lex/*,str/* -->  skip those rules in this file
  //   <!-- composerxai-lint mode=reference -->       lint this file in that mode
  //
  // The mode directive exists because a directory run has one --mode and the whole
  // thesis of this tool is that mode decides the rules. Without it, `lint .` applies
  // reference rules to a narrative or narrative rules to an API table, so a repo of
  // mixed registers can never be clean and the number it prints means nothing. A file
  // that knows its own register should say so, and it outranks the command line.
  const modeDirective = raw.match(/<!--\s*composerxai-lint\s+mode\s*=\s*([a-z-]+)\s*-->/i);
  if (modeDirective) {
    const declared = resolveMode(modeDirective[1]);
    if (!declared) {
      throw new Error(`${path}: unknown mode "${modeDirective[1]}" in composerxai-lint directive`);
    }
    mode = declared;
  }

  const directive = raw.match(/<!--\s*composerxai-lint\s+disable([^>]*)-->/);
  if (directive) {
    const scoped = directive[1].trim();
    if (!scoped) {
      return {
        path,
        mode: resolveMode(mode),
        modeLabel: MODES[resolveMode(mode)].label,
        stats: { words: 0, sentences: 0, paragraphs: 0, headings: 0 },
        metrics: {},
        relaxed: [{ id: '*', reason: 'file disabled by directive' }],
        findings: [],
        counts: { total: 0, enforceable: 0, judgement: 0 },
      };
    }
    const extra = scoped.split(',').map((x) => x.trim()).filter(Boolean);
    skip = [...(skip ?? []), ...extra];
  }

  const resolved = resolveMode(mode) || DEFAULT_MODE;
  const doc = parseDocument(raw, path);
  const findings = [];
  const metrics = {};
  const relaxed = [];

  for (const rule of RULES) {
    if (only && !only.includes(rule.id)) continue;
    if (skip && skip.includes(rule.id)) continue;
    const cfg = configFor(rule, resolved);
    if (cfg.enabled === false) {
      relaxed.push({ id: rule.id, reason: `disabled in ${resolved} mode` });
      continue;
    }
    if (rule.modes && rule.modes[resolved] && rule.modes[resolved].threshold !== undefined) {
      relaxed.push({ id: rule.id, reason: `threshold ${rule.threshold} -> ${cfg.threshold} in ${resolved} mode` });
    }
    let raised;
    try {
      raised = rule.check.call(rule, doc, cfg, { includeOptIn, mode: resolved }) || [];
    } catch (err) {
      raised = [{ offset: 0, message: `rule threw: ${err.message}` }];
    }
    for (const f of raised) {
      const offset = f.offsetRaw !== undefined ? f.offsetRaw : (f.offset || 0);
      const { line, column } = doc.positionAt(Math.max(0, Math.min(offset, doc.masked.length - 1)));
      if (f.metric) metrics[rule.id] = f.metric;
      findings.push({
        rule: rule.id,
        class: cfg.class,
        category: rule.category,
        severity: cfg.severity,
        summary: rule.summary,
        source: rule.source,
        path,
        line,
        column,
        message: f.message,
      });
    }
  }

  findings.sort((a, b) => a.line - b.line || a.column - b.column || a.rule.localeCompare(b.rule));

  const enforceable = findings.filter((f) => f.class === 'enforceable').length;
  const judgement = findings.length - enforceable;

  return {
    path,
    mode: resolved,
    modeLabel: MODES[resolved].label,
    stats: {
      words: doc.words,
      sentences: doc.sentences.length,
      paragraphs: doc.paragraphs.length,
      headings: doc.headings.length,
    },
    metrics,
    relaxed,
    findings,
    counts: { total: findings.length, enforceable, judgement },
  };
}

export function summarise(results, { strict = false } = {}) {
  const counts = results.reduce((a, r) => ({
    total: a.total + r.counts.total,
    enforceable: a.enforceable + r.counts.enforceable,
    judgement: a.judgement + r.counts.judgement,
  }), { total: 0, enforceable: 0, judgement: 0 });
  const failed = strict ? counts.total > 0 : counts.enforceable > 0;
  return { counts, files: results.length, failed, exitCode: failed ? 1 : 0 };
}
