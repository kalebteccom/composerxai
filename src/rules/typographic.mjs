// Typographic rules.
//
// The highest value per line of code in the whole tool, for one reason:
// these survive paraphrasing. Rewriting the sentence does not remove the
// zero-width space or the spaced em dash, because nothing that edits words
// touches them. research/05 §3.3 files them under "highest value per line of
// code"; research/01 §3 puts them first under "cleanly automatable".
//
// They are also, for the same reason, the cheapest thing for an adversary to
// strip. A document that passes only these has been laundered, not written.

import { INVISIBLE_BY_CP, INVISIBLE_RE } from '../data/invisible-unicode.mjs';

const FUNCTION_WORDS = new Set([
  'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'from', 'if', 'in', 'into',
  'nor', 'of', 'off', 'on', 'onto', 'or', 'over', 'per', 'so', 'the', 'then',
  'to', 'up', 'via', 'with', 'yet', 'vs', 'v',
]);

function each(re, text, fn) {
  re.lastIndex = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    fn(m);
    if (m.index === re.lastIndex) re.lastIndex += 1;
  }
}

export default [
  {
    id: 'typo/invisible-unicode',
    class: 'enforceable',
    category: 'typographic',
    severity: 'error',
    usesRaw: true,
    summary: 'Invisible or formatting Unicode characters',
    source: 'mandakan/llm-slop-detector builtin-rules.json (MIT), catalogued in research/02 §5a',
    check(doc) {
      const out = [];
      each(INVISIBLE_RE, doc.raw, (m) => {
        const info = INVISIBLE_BY_CP.get(m[0].codePointAt(0));
        out.push({
          offsetRaw: m.index,
          message: `${info.name} (U+${info.cp.toString(16).toUpperCase().padStart(4, '0')}, ${info.abbr}) — copy-paste residue. Replace with ${info.replacement === '' ? 'nothing' : JSON.stringify(info.replacement)}.`,
        });
      });
      return out;
    },
  },

  {
    id: 'typo/spaced-em-dash',
    class: 'enforceable',
    category: 'typographic',
    severity: 'error',
    summary: 'Em dash with spaces around it',
    // Deliberately narrow. The glyph itself is NOT the rule: The Economist's
    // measurement says ChatGPT now underuses em dashes, Russell et al.'s expert
    // annotators cited dashes as a marker of HUMAN writing, and Slate ran the
    // anti-em-dash column in 2011. What survives is the *spaced* form, which is
    // against every typographic convention that uses the glyph and is a
    // copy-paste artefact from a chat renderer. research/01 §2, "lint the pivot,
    // not the glyph".
    source: 'research/01 §2 (The Economist via Wikipedia; Russell et al. ACL 2025; Malone, Slate 2011)',
    check(doc) {
      const out = [];
      each(/[ \t]—[ \t]/g, doc.masked, (m) => {
        out.push({ offset: m.index, message: 'Spaced em dash. Close it up ("word—word") or use a comma, colon or full stop.' });
      });
      return out;
    },
  },

  {
    id: 'typo/curly-quotes',
    class: 'judgement',
    category: 'typographic',
    severity: 'warning',
    summary: 'Curly quotes or apostrophes',
    // Judgement, not enforceable, and the reason is in the sources: Chicago
    // style, Word autocorrect, macOS substitutions, LanguageTool and citation
    // tools all produce these. research/01 §1 item 18 calls it "near-useless
    // outside a plain-text context". The mixed-typography rule below is the one
    // with precision.
    source: 'research/01 §1 item 18; Wikipedia, Signs of AI writing (with its own confound list)',
    check(doc) {
      const out = [];
      each(/[‘’‚‛“”„‟]/g, doc.masked, (m) => {
        out.push({ offset: m.index, message: `Curly ${'‘’‚‛'.includes(m[0]) ? 'apostrophe/single quote' : 'double quote'}. Signal only in plain-text contexts; Word, macOS and Chicago style all produce these too.` });
      });
      return out.length > 6 ? out.slice(0, 6).concat([{ offset: out[6].offset, message: `${out.length - 6} further curly marks suppressed.` }]) : out;
    },
  },

  {
    id: 'typo/mixed-quote-typography',
    class: 'enforceable',
    category: 'typographic',
    severity: 'error',
    summary: 'Curly and straight quotes mixed in one document',
    // Higher precision than either alone. A human writing in one editor gets
    // one convention throughout. Both conventions in one file means two
    // sources were pasted together.
    source: 'research/05 §3.3 — "mixed curly/straight within one document"',
    check(doc) {
      const curlyApos = /[‘’]/.test(doc.masked);
      const straightApos = /\w'\w|\w's\b/.test(doc.masked);
      const curlyQuote = /[“”]/.test(doc.masked);
      const straightQuote = /"/.test(doc.masked);
      const out = [];
      if (curlyApos && straightApos) {
        out.push({ offset: doc.masked.search(/[‘’]/), message: 'Both curly and straight apostrophes in one document. Two sources were pasted together; pick one convention.' });
      }
      if (curlyQuote && straightQuote) {
        out.push({ offset: doc.masked.search(/[“”]/), message: 'Both curly and straight double quotes in one document. Pick one convention.' });
      }
      return out;
    },
  },

  {
    id: 'typo/title-case-heading',
    class: 'enforceable',
    category: 'typographic',
    severity: 'warning',
    summary: 'Title Case heading',
    source: 'research/05 §3.3; Google and Microsoft style guides both mandate sentence case for headings',
    check(doc) {
      const out = [];
      for (const h of doc.headings) {
        const words = h.text.replace(/[`*_[\]()]/g, '').split(/\s+/).filter(Boolean);
        if (words.length < 3) continue;
        const rest = words.slice(1);
        const content = rest.filter((w) => !FUNCTION_WORDS.has(w.toLowerCase().replace(/[^a-z]/g, '')));
        if (content.length < 2) continue;
        const capped = content.filter((w) => /^[A-Z][a-z]/.test(w));
        if (capped.length === content.length) {
          out.push({ offset: h.offset, message: `Title Case heading: "${h.text}". Sentence case ("${words[0]} ${rest.map((w) => w.toLowerCase()).join(' ')}").` });
        }
      }
      return out;
    },
  },

  {
    id: 'typo/bold-inline-list-label',
    class: 'enforceable',
    category: 'typographic',
    severity: 'warning',
    summary: 'Bolded label at the head of a list item',
    // Off in Instrument mode: a reference page's native form IS a bulleted
    // term list, and bolding the term is correct there (research/03 §3.5.7,
    // "Bullets: the native form").
    modes: { instrument: { enabled: false } },
    source: 'research/05 §3.2 README failure modes; research/01 §1 item 13 (formatting shape)',
    // The shape being caught is the chat answer: a label, a colon, a fragment,
    // repeated. A glossary is the same syntax doing honest work — a named entry
    // followed by real prose about it — and firing on that would make the rule
    // unusable in exactly the documents that need labelled entries most. So the
    // body has to be short for it to count. Measured on this repository's own
    // PRIOR_ART.md, whose 25 labelled entries average well over the threshold
    // and are not the thing this rule exists to catch.
    check(doc) {
      const CHAT_BODY_WORDS = 12;
      const out = [];
      // The body runs to the next bullet or the next blank line, and it is
      // sliced by hand rather than captured: under /m the `$` in a lookahead
      // matches at every line end, so a wrapped glossary entry measured as one
      // short line and the rule fired on exactly what it should leave alone.
      each(/^[ \t]*(?:[-*+]|\d+[.)])[ \t]+\*\*[^*\n]{2,60}\*\*[ \t]*:?/gm, doc.masked, (m) => {
        const after = doc.masked.slice(m.index + m[0].length);
        const stop = after.search(/\n[ \t]*(?:[-*+]|\d+[.)])[ \t]|\n[ \t]*\n/);
        const body = (stop === -1 ? after : after.slice(0, stop)).trim();
        const words = body ? body.split(/\s+/).length : 0;
        if (words > CHAT_BODY_WORDS) return;
        out.push({ offset: m.index, message: 'Bullet opening with a bolded label and a short body. Three or more of these in a document is the chat-window list shape, not a written list. Write the prose, or use a table.' });
      });
      return out.length >= 3 ? out : [];
    },
  },

  {
    id: 'typo/emoji-heading',
    class: 'enforceable',
    category: 'typographic',
    severity: 'warning',
    summary: 'Emoji in a heading',
    source: 'research/01 §1 item 13; Wikipedia, Signs of AI writing (formatting section)',
    check(doc) {
      const out = [];
      const emoji = /\p{Extended_Pictographic}/u;
      for (const h of doc.headings) {
        if (emoji.test(h.text)) out.push({ offset: h.offset, message: `Emoji in heading: "${h.text}".` });
      }
      return out;
    },
  },
];
