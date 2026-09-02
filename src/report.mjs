const ESC = '\u001b';

export function makeColour(enabled) {
  const wrap = (code) => (s) => (enabled ? `${ESC}[${code}m${s}${ESC}[0m` : String(s));
  return {
    red: wrap(31), yellow: wrap(33), blue: wrap(34), grey: wrap(90),
    bold: wrap(1), green: wrap(32), cyan: wrap(36),
  };
}

export function renderHuman(results, summary, { colour, verbose = false, showRelaxed = false }) {
  const c = colour;
  const out = [];

  for (const r of results) {
    if (r.findings.length === 0 && !verbose) continue;
    out.push(c.bold(r.path) + c.grey(`  [${r.mode}] ${r.stats.words} words, ${r.stats.sentences} sentences`));
    if (r.findings.length === 0) out.push('  ' + c.green('clean'));
    for (const f of r.findings) {
      const sev = f.severity === 'error' ? c.red('error  ') : f.severity === 'warning' ? c.yellow('warning') : c.blue('info   ');
      const cls = f.class === 'enforceable' ? c.cyan('gate ') : c.grey('sugg ');
      out.push(`  ${c.grey(`${String(f.line).padStart(4)}:${String(f.column).padEnd(3)}`)} ${sev} ${cls} ${c.grey(f.rule.padEnd(32))} ${f.message}`);
      if (verbose) out.push(`  ${' '.repeat(9)} ${c.grey('source: ' + f.source)}`);
    }
    if (Object.keys(r.metrics).length) {
      const line = Object.entries(r.metrics).map(([id, m]) => {
        const v = m.rate !== undefined ? m.rate.toFixed(1) : m.cv !== undefined ? m.cv.toFixed(2) : '';
        return `${id.split('/')[1]}=${v}/${m.threshold}`;
      }).join('  ');
      out.push('  ' + c.grey('metrics: ' + line));
    }
    if (showRelaxed && r.relaxed.length) {
      out.push('  ' + c.grey(`relaxed in ${r.mode} mode: ` + r.relaxed.map((x) => `${x.id} (${x.reason})`).join('; ')));
    }
    out.push('');
  }

  const { counts } = summary;
  const verdict = summary.failed
    ? c.red(`${counts.enforceable} gated finding${counts.enforceable === 1 ? '' : 's'}`)
    : c.green('no gated findings');
  out.push(`${verdict}${counts.judgement ? c.grey(`, ${counts.judgement} suggestion${counts.judgement === 1 ? '' : 's'} (judgement rules, not gated)`) : ''} across ${summary.files} file${summary.files === 1 ? '' : 's'}.`);
  if (counts.judgement && !summary.failed) out.push(c.grey('Judgement rules never fail the build. Pass --strict to change that.'));
  return out.join('\n');
}

export function renderJson(results, summary, extra = {}) {
  return JSON.stringify({
    tool: 'composerxai-lint',
    version: extra.version || '0.1.0',
    generated: new Date().toISOString(),
    summary,
    results,
  }, null, 2);
}
