// Document model. Everything a rule needs, computed once.
//
// The masking pass is the precision story. Fenced code, indented code, inline
// code spans, link targets and bare URLs are replaced with spaces of identical
// length, so offsets in the masked text map back to the raw file exactly. A
// rule that runs on `masked` cannot fire on a shell command or a hostname.

const FENCE = /^(\s*)(`{3,}|~{3,})(.*)$/;

const ABBREV = new Set([
  'e.g', 'i.e', 'etc', 'vs', 'cf', 'al', 'approx', 'ca', 'no', 'fig', 'eq',
  'mr', 'mrs', 'ms', 'dr', 'prof', 'sr', 'jr', 'st', 'inc', 'ltd', 'co',
  'jan', 'feb', 'mar', 'apr', 'jun', 'jul', 'aug', 'sep', 'sept', 'oct', 'nov', 'dec',
]);

const blank = (s) => ' '.repeat(s.length);

function maskCode(raw) {
  const lines = raw.split('\n');
  let fence = null;
  const out = lines.map((line) => {
    const m = line.match(FENCE);
    if (m) {
      if (fence === null) { fence = m[2][0]; return blank(line); }
      if (m[2][0] === fence && m[3].trim() === '') { fence = null; return blank(line); }
    }
    if (fence !== null) return blank(line);
    // Indented code block: four spaces or a tab, and not a list continuation.
    if (/^(?: {4}|\t)\S/.test(line) && !/^(?: {4}|\t)[-*+>]\s/.test(line)) return blank(line);
    return line;
  });

  let text = out.join('\n');
  text = text.replace(/`[^`\n]*`/g, (m) => blank(m));          // inline code
  text = text.replace(/\]\([^)\n]*\)/g, (m) => blank(m));       // link targets
  text = text.replace(/^\s*\[[^\]\n]+\]:\s*\S+.*$/gm, (m) => blank(m)); // link defs
  text = text.replace(/<https?:\/\/[^>\n]*>/g, (m) => blank(m));
  text = text.replace(/\bhttps?:\/\/\S+/g, (m) => blank(m));
  text = text.replace(/^\s*\|.*\|\s*$/gm, (m) => blank(m));     // table rows
  return text;
}

function lineIndex(text) {
  const starts = [0];
  for (let i = 0; i < text.length; i += 1) if (text[i] === '\n') starts.push(i + 1);
  return starts;
}

function splitSentences(block, base) {
  const out = [];
  let start = 0;
  for (let i = 0; i < block.length; i += 1) {
    const ch = block[i];
    if (ch !== '.' && ch !== '!' && ch !== '?') continue;
    let j = i;
    while (j + 1 < block.length && '.!?"’”\')]'.includes(block[j + 1])) j += 1;
    const after = block.slice(j + 1);
    if (!/^\s/.test(after) && after !== '') continue;
    if (ch === '.') {
      const before = block.slice(Math.max(0, i - 12), i);
      const wordMatch = before.match(/([A-Za-z]+)$/);
      const word = wordMatch ? wordMatch[1].toLowerCase() : '';
      if (ABBREV.has(word)) continue;
      if (/[A-Z]$/.test(before)) continue;             // initial, e.g. "J."
      if (/\d$/.test(before) && /^\s*\d/.test(after)) continue; // 3.5
    }
    const text = block.slice(start, j + 1);
    if (text.trim()) out.push({ text: text.trim(), start: base + start + (text.length - text.trimStart().length) });
    start = j + 1;
  }
  const tail = block.slice(start);
  if (tail.trim()) out.push({ text: tail.trim(), start: base + start + (tail.length - tail.trimStart().length) });
  return out;
}

const WORD_RE = /[A-Za-z][A-Za-z'’-]*/g;
export const countWords = (s) => (s.match(WORD_RE) || []).length;

export function parseDocument(raw, path = '<stdin>') {
  const masked = maskCode(raw);
  const starts = lineIndex(masked);
  const lines = masked.split('\n');
  const rawLines = raw.split('\n');

  const positionAt = (offset) => {
    let lo = 0; let hi = starts.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (starts[mid] <= offset) lo = mid; else hi = mid - 1;
    }
    return { line: lo + 1, column: offset - starts[lo] + 1 };
  };

  const headings = [];
  lines.forEach((line, i) => {
    const m = line.match(/^(#{1,6})\s+(.*?)\s*#*\s*$/);
    if (m) headings.push({ level: m[1].length, text: m[2], line: i + 1, offset: starts[i] });
  });

  // Blocks separated by blank lines, in masked coordinates.
  const blocks = [];
  let cursor = 0;
  for (const chunk of masked.split(/\n[ \t]*\n/)) {
    if (chunk.trim()) blocks.push({ text: chunk, start: cursor });
    cursor += chunk.length + 2;
  }

  const isHeadingBlock = (b) => b.text.split('\n').every((l) => !l.trim() || /^#{1,6}\s/.test(l));
  const isListBlock = (b) => {
    const ls = b.text.split('\n').filter((l) => l.trim());
    return ls.length > 0 && ls.filter((l) => /^\s*([-*+]|\d+[.)])\s/.test(l)).length / ls.length >= 0.5;
  };
  const isQuoteBlock = (b) => /^\s*>/.test(b.text);

  const paragraphs = blocks.filter((b) => !isHeadingBlock(b) && !isListBlock(b) && !isQuoteBlock(b))
    .map((b) => ({ ...b, words: countWords(b.text) }))
    .filter((b) => b.words > 0);

  const listItems = [];
  for (const b of blocks) {
    if (!isListBlock(b)) continue;
    let off = b.start;
    for (const l of b.text.split('\n')) {
      if (/^\s*([-*+]|\d+[.)])\s/.test(l)) listItems.push({ text: l, offset: off, words: countWords(l) });
      off += l.length + 1;
    }
  }

  const sentences = [];
  for (const b of blocks) {
    if (isHeadingBlock(b)) continue;
    // Strip leading list/quote markers per line but keep offsets by masking them.
    const stripped = b.text.replace(/^(\s*)([-*+]|\d+[.)]|>)(\s)/gm, (m, a, mark, c) => a + ' '.repeat(mark.length) + c);
    for (const s of splitSentences(stripped, b.start)) {
      const words = countWords(s.text);
      if (words >= 1) sentences.push({ ...s, words });
    }
  }

  return {
    path,
    raw,
    rawLines,
    masked,
    lines,
    headings,
    blocks,
    paragraphs,
    listItems,
    sentences,
    words: countWords(masked),
    positionAt,
  };
}
