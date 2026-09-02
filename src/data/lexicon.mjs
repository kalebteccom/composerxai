// Dated lexicon.
//
// Every entry carries the era it was observed in, because tells decay. The
// dating convention is borrowed from asavvin-pixel/unslop (MIT), the only
// surveyed repo that dates its own list; see research/02 §9.1 "Read but do not
// vendor" and §9.3 point 2. Phrases are our own wording, derived from the
// measurements cited per entry, not copied from any rule file.
//
// `era` is the window in which the overrepresentation was measured or observed.
// `decayed: true` means the signal has since weakened; those entries stay in
// the density count but carry a lower weight, and the reason is recorded so a
// future maintainer can retire them rather than guess.
//
// `optIn: true` means the entry is off unless --include-opt-in is passed. Read
// the block above the delve entry before adding another one.
//
// Scoring: density per 1000 words against a threshold, never a standalone flag
// per word. research/01 §1 item 14: vocabulary cues are the first thing an
// adversary fixes, and Russell et al. measured their contribution to correct
// human detections dropping from 57.1% to 42.3% once a model is told to avoid
// them. A single "intricate" means nothing. Nine of them in 400 words does.

const R = (s) => new RegExp(`\\b${s}\\b`, 'gi');

export const LEXICON = [
  // --- Juzek & Ward (COLING 2025), 21 focal words, PubMed 2020 -> 2024 -----
  { term: 'showcasing', re: R('showcas(?:e|es|ed|ing)'), era: '2023-2025', weight: 1.0,
    source: 'Juzek & Ward, COLING 2025 — +1,396% in PubMed abstracts' },
  { term: 'underscores', re: R('underscor(?:e|es|ed|ing)'), era: '2023-2025', weight: 1.0,
    source: 'Juzek & Ward, COLING 2025 — +904%' },
  { term: 'intricate', re: R('intricat(?:e|ely|ies|acy)'), era: '2023-2025', weight: 1.0,
    source: 'Juzek & Ward, COLING 2025 — +611%; also Reinhart et al. 2025 >100x' },
  { term: 'pivotal', re: R('pivotal'), era: '2023-2025', weight: 0.8,
    source: 'Juzek & Ward, COLING 2025' },
  { term: 'realm', re: R('realms?'), era: '2023-2025', weight: 0.8,
    source: 'Juzek & Ward, COLING 2025' },
  { term: 'meticulous', re: R('meticulous(?:ly)?'), era: '2023-2025', weight: 0.8,
    source: 'Kobak et al., Science Advances 2025 — excess vocabulary set' },
  { term: 'commendable', re: R('commendable'), era: '2023-2025', weight: 0.8,
    source: 'Kobak et al., Science Advances 2025' },
  { term: 'noteworthy', re: R('noteworthy'), era: '2023-2025', weight: 0.6,
    source: 'Kobak et al., Science Advances 2025' },

  // --- Reinhart et al. (PNAS 2025), >100x human rate ----------------------
  { term: 'tapestry', re: R('tapestry'), era: '2023-2025', weight: 1.4,
    source: 'Reinhart et al., PNAS 2025 — present in 23% of GPT-4o outputs' },
  { term: 'camaraderie', re: R('camaraderie'), era: '2023-2025', weight: 1.4,
    source: 'Reinhart et al., PNAS 2025 — >100x human rate' },
  { term: 'palpable', re: R('palpable'), era: '2023-2025', weight: 1.4,
    source: 'Reinhart et al., PNAS 2025 — >100x human rate' },

  // --- Wikipedia "Signs of AI writing", current-era list -------------------
  { term: 'multifaceted', re: R('multifaceted'), era: '2024-2026', weight: 0.8,
    source: 'Wikipedia, Signs of AI writing' },
  { term: 'nuanced', re: R('nuanced'), era: '2024-2026', weight: 0.6,
    source: 'Wikipedia, Signs of AI writing' },
  { term: 'holistic', re: R('holistic(?:ally)?'), era: '2024-2026', weight: 0.8,
    source: 'Wikipedia, Signs of AI writing; Guardian style guide, pre-LLM cliche' },
  { term: 'seamless', re: R('seamless(?:ly)?'), era: '2024-2026', weight: 0.8,
    source: 'Wikipedia, Signs of AI writing' },
  { term: 'robust', re: R('robust(?:ness)?'), era: '2024-2026', weight: 0.5,
    source: 'Guardian style guide cliches entry — banned before LLMs existed' },
  { term: 'leverage (verb)', re: /\bleverag(?:e|es|ed|ing)\b/gi, era: '2024-2026', weight: 0.7,
    source: 'Microsoft Jargon.yml; anti-aiisms.md HIGH tier' },
  { term: 'landscape (figurative)', re: /\b(?:evolving|changing|shifting|digital|competitive|current)\s+landscape\b/gi, era: '2024-2026', weight: 1.2,
    source: 'Wikipedia, Signs of AI writing — promotional register' },
  { term: 'game-changer', re: /\bgame[-\s]?chang(?:er|ers|ing)\b/gi, era: '2023-2026', weight: 1.0,
    source: 'Guardian style guide cliches entry' },
  { term: 'unlock', re: /\bunlock(?:s|ing)?\s+(?:the\s+)?(?:power|potential|value|insights?)\b/gi, era: '2023-2026', weight: 1.2,
    source: 'Wikipedia, Signs of AI writing — promotional register' },
  { term: 'harness', re: /\bharness(?:es|ing|ed)?\s+the\b/gi, era: '2023-2026', weight: 1.0,
    source: 'Wikipedia, Signs of AI writing' },
  { term: 'navigate (figurative)', re: /\bnavigat(?:e|es|ing|ed)\s+(?:the\s+)?(?:complexit|challeng|landscape|nuance|intricac)/gi, era: '2023-2026', weight: 1.2,
    source: 'Wikipedia, Signs of AI writing' },
  { term: 'at scale', re: /\bat\s+scale\b/gi, era: '2024-2026', weight: 0.5,
    source: 'Guardian style guide cliches entry' },
  { term: 'best practice', re: /\bbest[-\s]practices?\b/gi, era: '2024-2026', weight: 0.5,
    source: 'Ledger Instrument mode, forbidden evaluation vocabulary (research/03 §3.5.1)' },

  // --- Decayed: measured, then largely tuned out ---------------------------
  { term: 'moreover/furthermore', re: /\b(?:moreover|furthermore)\b/gi, era: '2023-2024', weight: 0.2, decayed: true,
    source: 'research/01 §1 non-tells — transition words in isolation are explicitly NOT a strong tell' },
  { term: 'it is important to note', re: /\bit(?:'s| is| was)\s+(?:important|worth)\s+(?:to\s+note|noting|mentioning)\b/gi, era: '2023-2024', weight: 0.8, decayed: true,
    source: 'Wikipedia files signposting as a historical indicator, largely tuned out since 2024' },

  // ---------------------------------------------------------------------- //
  //  OPT-IN ONLY. Read this before you enable it, and before you add to it. //
  // ---------------------------------------------------------------------- //
  //
  // "delve" is not flagged by default, and it is deliberately incapable of
  // producing a finding of its own even when enabled — it can only move the
  // density number.
  //
  // The corpus evidence is not the problem. Juzek & Ward (COLING 2025)
  // measured +1,375% in PubMed, and the popular counter-explanation, that the
  // spike reflects Nigerian English usage entering the model through RLHF
  // annotation labour, was checked against ICE and found null: "no evidence
  // that the focal words are especially prevalent in any particular variety of
  // English". Goedecke ran the same check on ICE-Nigeria for em dashes and got
  // the same null. So the dialect explanation is, on the evidence, wrong.
  //
  // The harm is real anyway, and it is a separate fact from the causal one.
  // Liang et al. (Patterns, 2023) measured that GPT detectors systematically
  // misclassify non-native English writing as machine-generated. Flagging a
  // single word on an individual writer inherits that bias regardless of what
  // the corpus says about the aggregate. Juzek & Ward found a second-order
  // problem on top: their own participants were already wary of the word, so
  // it now functions as a shibboleth rather than a measurement.
  //
  // research/01 §2 states the position this implements: "keep delve in a
  // density count, never as a standalone flag."
  { term: 'delve', re: R('delv(?:e|es|ed|ing)'), era: '2023-2024', weight: 0.6, optIn: true, decayed: true,
    source: 'Juzek & Ward, COLING 2025 — +1,375%. Gated: Liang et al., Patterns 2023, detector bias against non-native writers.' },
];

export const LEXICON_ERA_NOTE =
  'List calibrated against measurements published 2023-2025 and reviewed 2026-09-01. ' +
  'Lexical tells decay; re-derive this list against a current corpus before trusting it in 2027.';
