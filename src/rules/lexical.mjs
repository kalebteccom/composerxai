// Lexical rules.
//
// Ranked lowest on purpose. research/01 §1 puts vocabulary at items 14-19,
// below every structural tell, and Russell et al. measured its contribution to
// correct human detection falling from 57.1% to 42.3% once the model is simply
// told to avoid AI vocabulary. It is the first thing an adversary fixes.
//
// So: density over a dated list, never a per-word flag. One "intricate" is a
// word. Nine in four hundred is a fingerprint.

import { LEXICON } from '../data/lexicon.mjs';

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
    id: 'lex/dated-vocabulary-density',
    class: 'enforceable',
    category: 'lexical',
    severity: 'error',
    summary: 'Density of era-dated AI vocabulary',
    source: 'Juzek & Ward, COLING 2025; Kobak et al., Science Advances 2025; Reinhart et al., PNAS 2025; Wikipedia, Signs of AI writing. Dating convention from asavvin-pixel/unslop (MIT).',
    threshold: 5.5,
    modes: { instrument: { threshold: 8 }, address: { threshold: 4 } },
    minWords: 100,
    check(doc, cfg, opts) {
      if (doc.words < this.minWords) return [];
      const hits = [];
      let weighted = 0;
      for (const entry of LEXICON) {
        if (entry.optIn && !opts.includeOptIn) continue;
        each(entry.re, doc.masked, (m) => {
          const w = entry.weight * (entry.decayed ? 0.5 : 1);
          weighted += w;
          // Opt-in entries move the number and never produce a located finding.
          // research/01 §2: "keep delve in a density count, never as a
          // standalone flag."
          if (!entry.optIn) hits.push({ offset: m.index, text: m[0], term: entry.term, era: entry.era, source: entry.source });
        });
      }
      const rate = (weighted * 1000) / doc.words;
      if (rate <= cfg.threshold) return [];
      if (hits.length === 0) return [];
      const byTerm = new Map();
      for (const h of hits) byTerm.set(h.term, (byTerm.get(h.term) || 0) + 1);
      const sample = [...byTerm.entries()].sort((a, b) => b[1] - a[1]).slice(0, 6)
        .map(([t, n]) => (n > 1 ? `${t} x${n}` : t)).join(', ');
      const out = [{
        offset: hits[0].offset,
        message: `Dated-vocabulary density ${rate.toFixed(1)} per 1000 words (gate ${cfg.threshold}). ${sample}. Each entry carries the era it was measured in; re-derive this list before trusting it in 2027.`,
        metric: { rate, count: hits.length, threshold: cfg.threshold },
      }];
      for (const h of hits.slice(0, 10)) {
        out.push({ offset: h.offset, message: `"${h.text}" — ${h.term}, observed ${h.era}. ${h.source}` });
      }
      return out;
    },
  },

  {
    id: 'lex/significance-inflation',
    class: 'enforceable',
    category: 'lexical',
    severity: 'error',
    summary: 'Significance-inflation phrasing',
    // Higher precision than a bare word list because it is a phrase-level
    // construction. research/01 §1 item 15.
    source: 'research/01 §1 item 15; Wikipedia, Signs of AI writing (promotional register); research/05 §3.2 (ADR failure modes)',
    check(doc) {
      const out = [];
      const pats = [
        /\b(?:stands?|serves?)\s+as\s+a\s+testament\s+to\b/gi,
        /\bunderscor(?:es|ing)\s+(?:our|its|their|the)\s+commitment\b/gi,
        /\bmarks?\s+a\s+(?:pivotal|significant|major|watershed)\s+(?:moment|shift|milestone)\b/gi,
        /\brepresents?\s+a\s+(?:pivotal|paradigm|fundamental|seismic)\s+shift\b/gi,
        /\bplays?\s+an?\s+(?:crucial|pivotal|vital|key)\s+role\s+in\b/gi,
        /\b(?:indelible|lasting)\s+mark\s+on\b/gi,
        /\bhighlight(?:s|ing)\s+the\s+(?:critical|vital|crucial)\s+(?:importance|need|role)\b/gi,
        /\bcannot\s+be\s+overstated\b/gi,
      ];
      for (const re of pats) each(re, doc.masked, (m) => out.push({ offset: m.index, message: `Significance inflation: "${m[0].trim()}". States that something matters instead of saying what it does.` }));
      return out;
    },
  },

  {
    id: 'lex/throat-clearing',
    class: 'enforceable',
    category: 'lexical',
    severity: 'error',
    summary: 'Throat-clearing opener',
    // Everywhere, but it is the defining failure in Address mode, where the
    // budget is five sentences and three of them go to this.
    source: 'research/05 §2.1 (Email Charter, sentenc.es), §3.2 cold-email failure modes; Michael Seibel, "How to Email Early Stage Investors"',
    check(doc) {
      const out = [];
      const pats = [
        /\bI\s+hope\s+(?:this|you)\s+(?:email\s+)?(?:finds\s+you\s+well|are\s+doing\s+well|is\s+well)\b/gi,
        /\bI\s+(?:wanted|just\s+wanted|am\s+writing)\s+to\s+reach\s+out\b/gi,
        /\b(?:just\s+)?(?:circling\s+back|checking\s+in|touching\s+base|following\s+up)\b/gi,
        /\bper\s+my\s+(?:last|previous)\s+email\b/gi,
        /\bthank(?:s|\s+you)\s+for\s+reaching\s+out\b/gi,
        /\bgreat\s+question\b/gi,
        /\bin\s+this\s+(?:guide|article|post|section),?\s+(?:we'?ll|we\s+will|I'?ll)\b/gi,
      ];
      for (const re of pats) each(re, doc.masked, (m) => out.push({ offset: m.index, message: `Throat-clearing: "${m[0].trim()}". Start with the thing.` }));
      return out;
    },
  },

  {
    id: 'lex/hollow-close',
    class: 'enforceable',
    category: 'lexical',
    severity: 'error',
    summary: 'Hollow closing formula',
    source: 'research/05 §3.2 — an obligation placed on the recipient rather than an exit offered to them',
    check(doc) {
      const out = [];
      const pats = [
        /\blooking\s+forward\s+to\s+hearing\s+from\s+you\b/gi,
        /\blet\s+me\s+know\s+if\s+you\s+have\s+any\s+(?:other\s+)?questions\b/gi,
        /\b(?:please\s+)?don'?t\s+hesitate\s+to\s+(?:reach\s+out|contact|get\s+in\s+touch)\b/gi,
        /\bfeel\s+free\s+to\s+(?:reach\s+out|submit\s+a\s+pull\s+request)\b/gi,
        /\bI\s+would\s+(?:be\s+)?(?:thrilled|excited|delighted)\s+to\b/gi,
        /\bcontributions\s+are\s+welcome!/gi,
      ];
      for (const re of pats) each(re, doc.masked, (m) => out.push({ offset: m.index, message: `Hollow close: "${m[0].trim()}". Replace with one ask, an owner and a date, or delete it.` }));
      return out;
    },
  },

  {
    id: 'lex/empty-superlative',
    class: 'judgement',
    category: 'lexical',
    severity: 'warning',
    summary: 'Unmeasured superlative',
    // Instrument mode forbids evaluation outright (research/03 §3.5.1), so it
    // is an error there rather than a warning.
    source: 'research/03 §3.5.1 (Instrument forbids evaluation) and §3.5.8; NN/g — "marketese" measurably reduced usability by 27%',
    modes: { instrument: { severity: 'error', class: 'enforceable' } },
    check(doc) {
      const out = [];
      each(/\b(?:blazing(?:ly)?\s+fast|lightning[-\s]fast|blazing|powerful|effortless(?:ly)?|state[-\s]of[-\s]the[-\s]art|cutting[-\s]edge|world[-\s]class|industry[-\s]leading|next[-\s]generation|rock[-\s]solid|battle[-\s]tested)\b/gi, doc.masked, (m) => {
        out.push({ offset: m.index, message: `"${m[0].trim()}" — an adjective with no measurement behind it. Give the number or cut the word.` });
      });
      return out;
    },
  },
];
