// Structural rules.
//
// These matter more than vocabulary and they are the reason this tool is not
// just another word list. research/01 §1 ranks the top three tells as template
// density, low variance in everything, and noun-heavy informational density —
// none of which is a word. research/02 §9.3 is blunt about the alternative:
// "if the plan for unslop is 'build a better list of AI-sounding phrases',
// that plan is already dead."
//
// Honest limitation, stated once and applying to everything below that carries
// a multiplier: Reinhart et al. measured their ratios with a dependency parser
// on a matched corpus. This file has neither a parser nor a corpus. The cited
// multipliers are why the feature is here; they are not where the numeric gate
// comes from. Every threshold below is calibrated on this repo's fixture set
// and is a floor for "obviously machine", not a measurement of anything.

import { countWords } from '../doc.mjs';
import { TEMPLATES } from '../data/templates.mjs';

function each(re, text, fn) {
  re.lastIndex = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    fn(m);
    if (m.index === re.lastIndex) re.lastIndex += 1;
  }
}

const stats = (xs) => {
  const n = xs.length;
  if (n === 0) return { n: 0, mean: 0, sd: 0, cv: 0 };
  const mean = xs.reduce((a, b) => a + b, 0) / n;
  const sd = Math.sqrt(xs.reduce((a, b) => a + (b - mean) ** 2, 0) / n);
  return { n, mean, sd, cv: mean === 0 ? 0 : sd / mean };
};

const per1000 = (count, words) => (words === 0 ? 0 : (count * 1000) / words);

// -ing forms that are nouns or prepositions, not participles. Without a POS
// tagger this list is the whole discriminator, so it is deliberately generous:
// a missed participle is cheaper than a flagged noun.
const ING_NOT_PARTICIPLE = new Set([
  'during', 'notwithstanding', 'nothing', 'something', 'anything', 'everything',
  'thing', 'things', 'morning', 'evening', 'spring', 'string', 'ring', 'king',
  'wing', 'sibling', 'ceiling', 'building', 'meeting', 'engineering', 'marketing',
  'training', 'funding', 'pricing', 'logging', 'monitoring', 'alerting', 'testing',
  'tooling', 'staging', 'routing', 'caching', 'banking', 'shipping', 'billing',
  'onboarding', 'offering', 'earnings', 'savings', 'proceedings', 'surroundings',
]);

const NOT_NOMINALIZATION = new Set([
  'moment', 'element', 'document', 'instrument', 'segment', 'fragment', 'garment',
  'cement', 'science', 'conscience', 'audience', 'city', 'entity', 'community',
  'university', 'ability', 'quality', 'security', 'sentence', 'silence', 'patience',
  'business', 'witness', 'illness', 'darkness', 'wilderness',
]);

export default [
  {
    id: 'struct/template-density',
    class: 'enforceable',
    category: 'structural',
    severity: 'error',
    summary: 'Rhetorical template density per 1000 words',
    // The number one tell in research/01 §1, and the one it notes nobody's
    // linter measures. Reported as a single finding carrying the rate, not one
    // per match, because the rate is the claim.
    source: 'Joel Gladd, "A Better Way to Identify AI Slop" — 2.83 templates/1000w human vs 26.7 Gemini',
    threshold: 9,
    modes: { instrument: { threshold: 16 }, direction: { threshold: 14 }, orientation: { threshold: 14 } },
    minWords: 120,
    check(doc, cfg) {
      if (doc.words < this.minWords) return [];
      const hits = [];
      for (const t of TEMPLATES) each(t.re, doc.masked, (m) => hits.push({ id: t.id, text: m[0].trim(), offset: m.index }));
      const rate = per1000(hits.length, doc.words);
      if (rate <= cfg.threshold) return [];
      const top = hits.slice(0, 5).map((h) => `"${h.text}"`).join(', ');
      return [{
        offset: hits[0].offset,
        message: `Template density ${rate.toFixed(1)} per 1000 words (gate ${cfg.threshold}, Gladd's human baseline 2.83, his Gemini sample 26.7). ${hits.length} matches: ${top}${hits.length > 5 ? ', …' : ''}`,
        metric: { rate, count: hits.length, threshold: cfg.threshold, matches: hits.map((h) => h.id) },
      }];
    },
  },

  {
    id: 'struct/participial-clause-rate',
    class: 'enforceable',
    category: 'structural',
    severity: 'error',
    summary: 'Present participial clause rate',
    // Reinhart's strongest single feature. In prose it shows up as the trailing
    // padding clause: "…, ensuring your configuration is applied correctly."
    source: 'Reinhart, Markey, Laudenbach & Brown, PNAS 2025 — GPT-4o at 5.3x the human rate',
    threshold: 7,
    modes: { instrument: { threshold: 10 }, address: { threshold: 5 } },
    minWords: 120,
    check(doc, cfg) {
      if (doc.words < this.minWords) return [];
      const hits = [];
      // Trailing: ", ensuring ..."
      each(/,\s+([a-z]+ing)\b(?!\s*(?:,|and\b|or\b))([^.\n]{0,80})/g, doc.masked, (m) => {
        if (ING_NOT_PARTICIPLE.has(m[1])) return;
        // Reject coordinated noun lists: "operational complexity, debugging
        // difficulty, and the topology". A real participial clause runs on for
        // several words; a list item hits the next comma almost immediately.
        const tail = m[2].split(/[,;:]/)[0];
        if (tail.trim().split(/\s+/).filter(Boolean).length < 3) return;
        hits.push({ offset: m.index, text: `, ${m[1]}` });
      });
      // Leading: "Building on that, ..."
      each(/(?:^|\.\s+)([A-Z][a-z]+ing)\b[^,.\n]{3,60},/gm, doc.masked, (m) => {
        if (ING_NOT_PARTICIPLE.has(m[1].toLowerCase())) return;
        hits.push({ offset: m.index, text: m[1] });
      });
      const rate = per1000(hits.length, doc.words);
      if (rate <= cfg.threshold) return [];
      return hits.slice(0, 8).map((h, i) => ({
        offset: h.offset,
        message: i === 0
          ? `Participial clause rate ${rate.toFixed(1)} per 1000 words (gate ${cfg.threshold}). GPT-4o uses these at 5.3x the human rate; most are padding. Here: ${h.text}`
          : `Participial clause: ${h.text}`,
        metric: i === 0 ? { rate, count: hits.length, threshold: cfg.threshold } : undefined,
      }));
    },
  },

  {
    id: 'struct/nominalization-rate',
    class: 'judgement',
    category: 'structural',
    severity: 'warning',
    summary: 'Nominalization density',
    // Judgement, not enforceable, and the reason is method rather than taste:
    // a suffix regex is a proxy for a parser. Reinhart's 2.1x was measured
    // properly; this counts -tion/-ment/-ance/-ity/-ness endings and subtracts
    // a stoplist. Good enough to notice Williams's actions-and-characters
    // failure, not good enough to fail a build on.
    source: 'Reinhart et al., PNAS 2025 — nominalizations at 2.1x human; Williams, Style: Lessons in Clarity and Grace',
    threshold: 42,
    modes: { instrument: { threshold: 62 }, direction: { threshold: 50 } },
    minWords: 150,
    check(doc, cfg) {
      if (doc.words < this.minWords) return [];
      const hits = [];
      each(/\b[a-z]{3,}(?:tions?|sions?|ments?|ances?|ences?|ities|ity|ness|isms?)\b/g, doc.masked, (m) => {
        if (NOT_NOMINALIZATION.has(m[0])) return;
        hits.push({ offset: m.index, text: m[0] });
      });
      const rate = per1000(hits.length, doc.words);
      if (rate <= cfg.threshold) return [];
      const sample = [...new Set(hits.map((h) => h.text))].slice(0, 8).join(', ');
      return [{
        offset: hits[0].offset,
        message: `Nominalization density ${rate.toFixed(1)} per 1000 words (gate ${cfg.threshold}). Turn the nouns back into verbs. Sample: ${sample}`,
        metric: { rate, count: hits.length, threshold: cfg.threshold },
      }];
    },
  },

  {
    id: 'struct/sentence-length-variance',
    class: 'enforceable',
    category: 'structural',
    severity: 'error',
    summary: 'Sentence-length variance (burstiness)',
    // Off in Instrument mode. research/03 §3.4: at G0 "low variance is
    // correct" — a reference entry SHOULD be structurally identical to its
    // neighbour, and penalising that is the framework applying one voice
    // everywhere, which is the thing it exists to stop.
    source: 'Ju, Blix & Williams, ACL Findings 2025 — "a shifted mean, a lower standard deviation, and a reduction of the long tail"; GPTZero on burstiness',
    threshold: 0.42,
    modes: {
      instrument: { enabled: false },
      direction: { threshold: 0.30 },
      orientation: { threshold: 0.32 },
      address: { threshold: 0.35 },
    },
    minSentences: 8,
    check(doc, cfg) {
      const lens = doc.sentences.map((s) => s.words);
      if (lens.length < this.minSentences) return [];
      const s = stats(lens);
      if (s.cv >= cfg.threshold) return [];
      return [{
        offset: doc.sentences[0].start,
        message: `Sentence lengths are uniform: mean ${s.mean.toFixed(1)} words, sd ${s.sd.toFixed(1)}, coefficient of variation ${s.cv.toFixed(2)} (gate ${cfg.threshold}). Uniform length is the most reliable surface signature of generated text. Break one sentence in three.`,
        metric: { cv: s.cv, mean: s.mean, sd: s.sd, sentences: s.n, threshold: cfg.threshold },
      }];
    },
  },

  {
    id: 'struct/rhythm-floor',
    class: 'judgement',
    category: 'structural',
    severity: 'warning',
    summary: 'The rhythm floor — three consecutive sentences of near-identical length',
    // Only fires where the framework says variance is required (G2/G3:
    // Account, Passage, Address). Crude on purpose. research/03 §3.4: "This is
    // crude and it is meant to be. It is a floor, not taste."
    //
    // Demoted from enforceable to judgement by the control corpus. The framework
    // states it as a hard floor, and the Gettysburg Address fails it: three
    // consecutive sentences of 19, 21 and 21 words. A gate that rejects Lincoln
    // is a suggestion whether or not it is written as a gate. This is the one
    // thing research/02 §9.3 says nobody in the category does — measure the rule
    // against human control text and let the measurement change the rule.
    source: 'research/03 §3.4, the rhythm rule; Federal Plain Language Guidelines on varying paragraph length',
    modes: { instrument: { enabled: false }, direction: { enabled: false }, orientation: { enabled: false } },
    minSentences: 6,
    check(doc) {
      const ss = doc.sentences;
      if (ss.length < this.minSentences) return [];
      const out = [];
      for (let i = 0; i + 2 < ss.length; i += 1) {
        const [a, b, c] = [ss[i].words, ss[i + 1].words, ss[i + 2].words];
        if (Math.min(a, b, c) < 6) continue;
        if (Math.max(a, b, c) - Math.min(a, b, c) <= 4) {
          out.push({ offset: ss[i].start, message: `Three consecutive sentences of ${a}, ${b}, ${c} words. No three in a row may be within four words of each other. Cut one to under nine.` });
          i += 2;
        }
      }
      return out.slice(0, 6);
    },
  },

  {
    id: 'struct/uniform-paragraph-length',
    class: 'enforceable',
    category: 'structural',
    severity: 'warning',
    summary: 'Uniform paragraph length',
    // A facet of the variance finding rather than an independent tell —
    // research/01 §1 item 2 says so explicitly. Kept separate because it is
    // what a reader actually notices first, before reading a word.
    source: 'research/01 §1 item 2; Federal Plain Language Guidelines — "if all paragraphs are the same size your writing will be choppy"',
    threshold: 0.26,
    modes: { instrument: { enabled: false }, direction: { threshold: 0.18 } },
    minParagraphs: 4,
    check(doc, cfg) {
      const ps = doc.paragraphs.filter((p) => p.words >= 12);
      if (ps.length < this.minParagraphs) return [];
      const s = stats(ps.map((p) => p.words));
      if (s.cv >= cfg.threshold) return [];
      return [{
        offset: ps[0].start,
        message: `Paragraph lengths are uniform: ${ps.length} paragraphs, mean ${s.mean.toFixed(1)} words, coefficient of variation ${s.cv.toFixed(2)} (gate ${cfg.threshold}). Paragraph length should vary by at least a factor of two across the piece.`,
        metric: { cv: s.cv, mean: s.mean, paragraphs: s.n, threshold: cfg.threshold },
      }];
    },
  },

  {
    id: 'struct/negative-parallelism',
    class: 'enforceable',
    category: 'structural',
    severity: 'error',
    summary: '"Not just X but Y" and its family',
    // The most-agreed-on structural tell in the whole corpus: named
    // independently by Wikipedia, Russell et al.'s annotators, Belcher,
    // Robbins, Gladd and Humanized Copy.
    //
    // Classed enforceable even though research/01 §3 files the *adjudication*
    // under human judgement. The distinction: whether Y adds information to X
    // is a judgement, and the message says so. Whether the construction is
    // present is not. Gating on presence is defensible because the construction
    // is near-absent from good professional prose regardless of what it carries.
    source: 'Wikipedia, Signs of AI writing; Humanized Copy, "The It\'s-Not-Just-X-It\'s-Y Tell"; research/01 §1 item 4',
    check(doc) {
      const pats = [
        /\bnot\s+(?:just|only|merely|simply)\s+[^.\n]{2,70}?\b(?:but|it'?s|they'?re|—)/gi,
        /\bit'?s\s+not\s+(?:about\s+)?[^.\n]{2,60}?[,—]\s*it'?s\b/gi,
        /\bisn'?t\s+(?:about\s+)?[^.\n]{2,60}?[,—]\s*it'?s\b/gi,
        /\bnot\s+because\s+[^.\n]{2,60}?,\s*but\s+because\b/gi,
        /\bless\s+(?:about|a)\s+[^.\n]{2,50}?\s+(?:and\s+)?more\s+(?:about|a)\b/gi,
      ];
      // The patterns overlap by design: "It's not just X, it's Y" satisfies both
      // the first and the second. Emitting once per pattern would report one
      // sentence twice and inflate the count the exit code gates on, so
      // overlapping spans collapse to the longest, which is the fuller quote.
      const hits = [];
      for (const re of pats) {
        each(re, doc.masked, (m) => {
          hits.push({ start: m.index, end: m.index + m[0].length, text: m[0] });
        });
      }
      hits.sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));

      const out = [];
      let covered = -1;
      for (const h of hits) {
        if (h.start < covered) continue;
        covered = h.end;
        out.push({ offset: h.start, message: `Negative parallelism: "${h.text.trim().slice(0, 80)}". Judgement call the linter cannot make for you: does the second half say something the first half did not? If not, delete the first half.` });
      }
      return out;
    },
  },

  {
    id: 'struct/rule-of-three',
    class: 'judgement',
    category: 'structural',
    severity: 'warning',
    summary: 'Rule-of-three triads',
    // Judgement by design, and there is a fixture proving why: the Gettysburg
    // Address is three tricolons in a row and is not machine-written. The tell
    // is not the tricolon, it is the tricolon whose third item restates the
    // second at higher register, "to make superficial analyses appear more
    // comprehensive" (Wikipedia). No regex decides that.
    source: 'Wikipedia, Signs of AI writing; GPTZero, "How to Break Free from GPT\'s Rule of Three"; research/01 §1 item 5',
    threshold: 4,
    modes: { instrument: { threshold: 9 } },
    minWords: 120,
    check(doc, cfg) {
      if (doc.words < this.minWords) return [];
      const hits = [];
      const re = /\b([A-Za-z][\w'-]*(?:\s+[\w'-]+){0,2}),\s+([A-Za-z][\w'-]*(?:\s+[\w'-]+){0,2}),\s+(?:and|or)\s+([A-Za-z][\w'-]*(?:\s+[\w'-]+){0,2})\b/g;
      each(re, doc.masked, (m) => {
        const parts = [m[1], m[2], m[3]].map((p) => countWords(p));
        if (Math.max(...parts) - Math.min(...parts) > 1) return; // not parallel enough
        hits.push({ offset: m.index, text: m[0].trim() });
      });
      const rate = per1000(hits.length, doc.words);
      if (rate <= cfg.threshold) return [];
      return [{
        offset: hits[0].offset,
        message: `${hits.length} rule-of-three triads, ${rate.toFixed(1)} per 1000 words (gate ${cfg.threshold}). Judgement: is the third item load-bearing, or is it there to make the list look complete? e.g. "${hits[0].text.slice(0, 70)}"`,
        metric: { rate, count: hits.length, threshold: cfg.threshold },
      }];
    },
  },

  {
    id: 'struct/copula-avoidance',
    class: 'judgement',
    category: 'structural',
    severity: 'warning',
    summary: 'Copula avoidance — "serves as" where "is" would do',
    source: 'research/01 §1 item 9 — measured >10% drop in "is"/"are" in 2023 academic writing; research/05 §3.3',
    check(doc) {
      const out = [];
      each(/\b(?:serves?|stands?|functions?|operates?)\s+as\s+(?:a|an|the)\b|\brepresents?\s+(?:a|an|the)\b|\bboasts\b/gi, doc.masked, (m) => {
        out.push({ offset: m.index, message: `"${m[0].trim()}" — try "is". Judgement: sometimes the longer verb is doing real work.` });
      });
      return out.length >= 2 ? out.slice(0, 8) : [];
    },
  },

  {
    id: 'struct/closing-summary',
    class: 'enforceable',
    category: 'structural',
    severity: 'error',
    summary: 'Closing summary or conclusion section',
    // "Summary close: banned" in all six Ledger modes (research/03 §3.5.7).
    // Orientation gets navigation, not summary, which is why a "Next steps"
    // link list does not match here.
    source: 'research/03 §3.5.7; research/05 §3.2 — "A Conclusion section summarising what the reader just did… no good how-to has one"',
    check(doc) {
      const out = [];
      for (const h of doc.headings) {
        if (/^(?:in\s+)?(?:conclusion|summary|final\s+thoughts|wrapping\s+up|to\s+sum\s+up|closing\s+thoughts|tl;?dr)\b/i.test(h.text.trim())) {
          out.push({ offset: h.offset, message: `Closing summary heading: "${h.text}". Banned in every mode. The reader just read it.` });
        }
      }
      each(/(?:^|\n)\s*(?:In\s+summary|In\s+conclusion|To\s+summari[sz]e|Overall|All\s+in\s+all|To\s+sum\s+up)\s*,/g, doc.masked, (m) => {
        out.push({ offset: m.index + m[0].indexOf(m[0].trim()[0]), message: `Closing restatement: "${m[0].trim()}". Say it once, in the place it belongs.` });
      });
      return out;
    },
  },
];
