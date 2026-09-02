// Rhetorical template cookbook, for the density metric.
//
// Gladd's finding is that no single device is the tell — the *rate* is. He
// measured 2.83 templates per 1000 words in his own post against 26.7 in
// Gemini's summary of it (Joel Gladd, "A Better Way to Identify AI Slop").
// research/01 §1 ranks this first of all tells and notes that nobody's linter
// measures it.
//
// Patterns are ours, written against the failure descriptions in research/01
// §A and research/05 §3.2. Deliberately excludes "delve" (see lexicon.mjs).
//
// This list is a sample, not a census. The density number is only comparable
// against itself, so treat the threshold as calibrated to this cookbook and
// recalibrate if you add patterns.

export const TEMPLATES = [
  { id: 'opener/in-todays', re: /\bin\s+(?:today's|the\s+modern|an?\s+increasingly)\s+[a-z-]+\b/gi },
  { id: 'opener/in-an-era', re: /\bin\s+an?\s+(?:era|age|world|time)\s+(?:of|where|when)\b/gi },
  { id: 'opener/when-it-comes-to', re: /\bwhen\s+it\s+comes\s+to\b/gi },
  { id: 'opener/heres-the-thing', re: /\bhere'?s\s+the\s+(?:thing|catch|kicker)\b/gi },
  { id: 'opener/lets-dive', re: /\blet'?s\s+(?:dive|take\s+a\s+(?:deep\s+)?dive|explore|unpack)\b/gi },
  { id: 'opener/whether-youre', re: /\bwhether\s+you'?re\s+[^,.]{2,50},\s/gi },
  { id: 'frame/at-its-core', re: /\bat\s+its\s+(?:core|heart)\b/gi },
  { id: 'frame/the-truth-is', re: /\b(?:the\s+truth\s+is|the\s+reality\s+is|the\s+fact\s+is)\b/gi },
  { id: 'frame/no-denying', re: /\bthere'?s\s+no\s+denying\b/gi },
  { id: 'frame/that-said', re: /\bthat\s+(?:being\s+)?said,/gi },
  { id: 'frame/more-than-just', re: /\bmore\s+than\s+(?:just\s+)?(?:a|an|the)\b/gi },
  { id: 'frame/its-about', re: /\bit'?s\s+(?:not\s+)?about\b/gi },
  { id: 'inflation/plays-a-role', re: /\bplays?\s+an?\s+(?:crucial|key|vital|pivotal|central|significant|important)\s+role\b/gi },
  { id: 'inflation/testament', re: /\b(?:stands?|serves?)\s+as\s+a\s+testament\b/gi },
  { id: 'inflation/underscores-importance', re: /\bunderscor(?:es|ing)\s+the\s+(?:importance|need|value)\b/gi },
  { id: 'inflation/indelible-mark', re: /\b(?:indelible|lasting)\s+(?:mark|impact|impression)\b/gi },
  { id: 'inflation/rich-heritage', re: /\brich\s+(?:cultural\s+)?(?:heritage|history|tradition|tapestry)\b/gi },
  { id: 'inflation/nestled', re: /\bnestled\s+in\s+the\s+heart\s+of\b/gi },
  { id: 'inflation/paradigm-shift', re: /\bparadigm\s+shift\b/gi },
  { id: 'inflation/next-level', re: /\b(?:take|takes|taking)\s+(?:it|this|your\s+\w+)\s+to\s+the\s+next\s+level\b/gi },
  { id: 'inflation/ever-evolving', re: /\bever[-\s]?(?:evolving|changing|growing)\b/gi },
  { id: 'inflation/cornerstone', re: /\b(?:cornerstone|bedrock|backbone)\s+of\b/gi },
  { id: 'hedge/despite-challenges', re: /\bdespite\s+(?:its|these|the|their)\s+[^,.]{0,40}(?:challenges|limitations|drawbacks|hurdles)\b/gi },
  { id: 'hedge/has-become-increasingly', re: /\bhas\s+become\s+increasingly\b/gi },
  { id: 'hedge/it-is-worth-noting', re: /\bit(?:'s|\s+is)\s+(?:important|worth)\s+(?:to\s+note|noting|mentioning|remembering)\b/gi },
  { id: 'hedge/varies-depending', re: /\b(?:varies|vary|will\s+vary)\s+depending\s+on\b/gi },
  { id: 'close/in-summary', re: /\b(?:in\s+summary|in\s+conclusion|to\s+sum\s+up|all\s+in\s+all|at\s+the\s+end\s+of\s+the\s+day|the\s+bottom\s+line\s+is)\b/gi },
  { id: 'close/key-takeaway', re: /\bkey\s+takeaways?\b/gi },
  { id: 'close/moving-forward', re: /\b(?:moving|going)\s+forward,/gi },
  { id: 'copula/serves-as', re: /\b(?:serves?|stands?|functions?|acts?|operates?)\s+as\s+(?:a|an|the)\b/gi },
  { id: 'copula/represents', re: /\brepresents?\s+(?:a|an|the)\s+(?:significant|major|fundamental|critical|key)\b/gi },
  { id: 'agency/empowers', re: /\bempower(?:s|ing|ed)?\s+(?:you|users?|teams?|developers?|organi[sz]ations?)\b/gi },
  { id: 'agency/allows-you-to', re: /\ballows?\s+you\s+to\s+(?:easily|seamlessly|effortlessly|quickly)\b/gi },
];
