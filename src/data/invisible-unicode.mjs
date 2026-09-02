// Invisible and confusable Unicode table.
//
// Vendored from mandakan/llm-slop-detector `builtin-rules.json` (MIT).
//   https://github.com/mandakan/llm-slop-detector
// Reproduced under the MIT licence; see PRIOR_ART.md for the full notice.
//
// Provenance note, stated plainly because the alternative is a false citation:
// the code-point set, the severities and the replacement semantics below are
// reconstructed from that file's documented contents as catalogued in
// research/02-github-prose-repos.md §5a and §9.1. It was not fetched byte for
// byte. Entries marked `addition: true` are ours and are not in the upstream
// table. If you re-sync from upstream, diff against this list rather than
// trusting it.
//
// Why this is worth vendoring rather than rewriting: these characters survive
// every paraphrase, every rewrite, and every "make it sound more human" pass,
// because nothing that edits words touches them. They are copy-paste residue
// from a chat window. research/01 §3 files them under "cleanly automatable,
// deterministic, low false positive rate".

export const INVISIBLE_CHARS = [
  { cp: 0x200b, name: 'ZERO WIDTH SPACE', abbr: 'ZWSP', severity: 'error', replacement: '' },
  { cp: 0x200c, name: 'ZERO WIDTH NON-JOINER', abbr: 'ZWNJ', severity: 'warning', replacement: '' },
  { cp: 0x200d, name: 'ZERO WIDTH JOINER', abbr: 'ZWJ', severity: 'warning', replacement: '' },
  { cp: 0x200e, name: 'LEFT-TO-RIGHT MARK', abbr: 'LRM', severity: 'error', replacement: '' },
  { cp: 0x200f, name: 'RIGHT-TO-LEFT MARK', abbr: 'RLM', severity: 'error', replacement: '' },
  { cp: 0x2060, name: 'WORD JOINER', abbr: 'WJ', severity: 'error', replacement: '' },
  { cp: 0xfeff, name: 'ZERO WIDTH NO-BREAK SPACE / BOM', abbr: 'BOM', severity: 'error', replacement: '' },
  { cp: 0x00ad, name: 'SOFT HYPHEN', abbr: 'SHY', severity: 'warning', replacement: '' },
  { cp: 0x00a0, name: 'NO-BREAK SPACE', abbr: 'NBSP', severity: 'warning', replacement: ' ' },
  { cp: 0x202f, name: 'NARROW NO-BREAK SPACE', abbr: 'NNBSP', severity: 'warning', replacement: ' ' },
  { cp: 0x202a, name: 'LEFT-TO-RIGHT EMBEDDING', abbr: 'LRE', severity: 'error', replacement: '' },
  { cp: 0x202b, name: 'RIGHT-TO-LEFT EMBEDDING', abbr: 'RLE', severity: 'error', replacement: '' },
  { cp: 0x202c, name: 'POP DIRECTIONAL FORMATTING', abbr: 'PDF', severity: 'error', replacement: '' },
  { cp: 0x202d, name: 'LEFT-TO-RIGHT OVERRIDE', abbr: 'LRO', severity: 'error', replacement: '' },
  { cp: 0x202e, name: 'RIGHT-TO-LEFT OVERRIDE', abbr: 'RLO', severity: 'error', replacement: '' },
  { cp: 0x2066, name: 'LEFT-TO-RIGHT ISOLATE', abbr: 'LRI', severity: 'error', replacement: '' },
  { cp: 0x2067, name: 'RIGHT-TO-LEFT ISOLATE', abbr: 'RLI', severity: 'error', replacement: '' },
  { cp: 0x2068, name: 'FIRST STRONG ISOLATE', abbr: 'FSI', severity: 'error', replacement: '' },
  { cp: 0x2069, name: 'POP DIRECTIONAL ISOLATE', abbr: 'PDI', severity: 'error', replacement: '' },
  // Ours, not upstream.
  { cp: 0x2028, name: 'LINE SEPARATOR', abbr: 'LS', severity: 'error', replacement: '\n', addition: true },
  { cp: 0x2029, name: 'PARAGRAPH SEPARATOR', abbr: 'PS', severity: 'error', replacement: '\n\n', addition: true },
  { cp: 0x2007, name: 'FIGURE SPACE', abbr: 'FIGSP', severity: 'warning', replacement: ' ', addition: true },
  { cp: 0x2009, name: 'THIN SPACE', abbr: 'THSP', severity: 'warning', replacement: ' ', addition: true },
];

export const INVISIBLE_BY_CP = new Map(INVISIBLE_CHARS.map((c) => [c.cp, c]));

export const INVISIBLE_RE = new RegExp(
  `[${INVISIBLE_CHARS.map((c) => `\\u{${c.cp.toString(16)}}`).join('')}]`,
  'gu',
);
