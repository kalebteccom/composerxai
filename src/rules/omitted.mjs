// Rules deliberately not implemented.
//
// Exported and printable via --explain-omissions, so the refusal is part of the
// tool rather than a line in a README nobody reads. A tool's omissions are a
// claim about evidence and should be as citable as its rules.

export const OMITTED_RULES = [
  {
    id: 'omitted/passive-voice',
    proposedBy: 'Microsoft Passive.yml, Google Passive.yml, write-good, proselint, krishnasunkam/vale-ai-tells',
    reason:
      'Two independent reasons, either sufficient. (1) Direction: Reinhart et al. (PNAS 2025) measured GPT-4o using agentless passive at roughly HALF the human rate, so a passive-voice check flags human writing as machine writing. It points the wrong way. (2) Method: Pullum, "50 Years of Stupid Grammar Advice", documents that people — including the style guides — routinely misidentify what is passive. Microsoft and Google ship the identical file, a be-verb followed by a 200-entry participle list, with a well-known false-positive rate that neither has fixed in years. research/02 §9.1 files regex passive detection under "noise, skip": "if we want passive detection we need a POS tagger, not a regex."',
    wouldNeed: 'A part-of-speech tagger, agentless-only detection, and reporting as information rather than a gate.',
  },
  {
    id: 'omitted/delve-standalone',
    proposedBy: 'Every AI-tell word list published since 2023',
    reason:
      'Behind --include-opt-in, and even then it can only move the density number rather than produce its own finding. The corpus evidence is sound: Juzek & Ward (COLING 2025) measured +1,375% in PubMed and checked the Nigerian-English explanation against ICE, finding "no evidence that the focal words are especially prevalent in any particular variety of English"; Goedecke got the same null for em dashes in ICE-Nigeria. But Liang et al. (Patterns, 2023) measured that GPT detectors systematically misclassify non-native English writing as machine-generated, so the harm of flagging one word on one writer is real whether or not the dialect story is true. Juzek & Ward also found their own participants were already wary of the word, which makes it a shibboleth rather than a measurement.',
    wouldNeed: 'Nothing. This is a decision, not a gap.',
  },
  {
    id: 'omitted/perplexity-burstiness-verdict',
    proposedBy: 'GPTZero (since abandoned), most detector startups',
    reason:
      'Sentence-length variance ships as a structural rule, but no perplexity score and no AI/not-AI verdict. Liang et al. (ICML 2024) put it plainly: corpus-level trends are too subtle to detect at the individual level. Watkins documents labels flipping on the same text depending on scroll position. This tool reports properties of a document; it never claims to know who wrote it.',
    wouldNeed: 'A language model, and a willingness to make a claim the evidence does not support.',
  },
  {
    id: 'omitted/blanket-adverb-ban',
    proposedBy: 'hardikpandya/stop-slop ("kill all adverbs"), Microsoft Adverbs.yml',
    reason:
      'Microsoft bans beautifully, bitterly, bleakly, bashfully. Correct for Azure docs, wrong for anything with a voice. research/02 §9.1: "a good instinct stated as an absolute rule, and as an absolute rule it damages good writing."',
    wouldNeed: 'A judgement about whether the adverb is doing work, which is the definition of not-lintable.',
  },
  {
    id: 'omitted/oxford-comma',
    proposedBy: 'Microsoft OxfordComma.yml',
    reason:
      'A single 600-character regex with four documented guards that still leaks, and a house-style preference rather than an AI tell either way.',
    wouldNeed: 'A parser, for no detection benefit.',
  },
  {
    id: 'omitted/bare-em-dash',
    proposedBy: 'Red Hat, Splunk, and near-universally across the AI-tell category',
    reason:
      'Only the SPACED form ships. The Economist\'s measurement, via Wikipedia, is that only Claude exceeds professional writers and ChatGPT now uses em dashes LESS than they do; Russell et al.\'s expert annotators cited dashes and ellipses as markers of human writing; OpenAI actively suppressed them in GPT-5.1; and Malone ran the anti-em-dash column in Slate in 2011, fifteen years before any of this. Banning the glyph makes prose worse for a decaying signal.',
    wouldNeed: 'The em-dash pivot ("not X — it\'s Y") is caught, correctly, by struct/negative-parallelism instead.',
  },
];
