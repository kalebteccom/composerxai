// Modes.
//
// The framework's sharpest claim, from research/03 §3.4: "At G0, sounding like
// a machine is correct. Reference material should be regular, repetitive,
// tonally dead and structurally identical entry to entry. Ledger's anti-machine
// rules are switched off in Instrument mode, on purpose. A framework that
// cannot say where it does not apply is a mood, not a framework."
//
// So the linter has no single voice. Modes are the Ledger six (research/03
// §3.5); the aliases exist because nobody types "instrument" when they mean a
// reference page.
//
// Rules declare per-mode overrides themselves. This file only carries what the
// modes *are*, plus the aliases and the mode-level numeric bands taken from the
// dial table in research/03 §3.5.7.

export const MODES = {
  instrument: {
    label: 'Instrument — reference, API docs, config tables, schemas',
    dials: 'P0 / F0 / G0',
    variance: 'low is correct',
    meanSentenceWords: [8, 20],
  },
  direction: {
    label: 'Direction — how-to guides, runbooks, procedures',
    dials: 'P0-P1 / F2 / G1',
    variance: 'low',
    meanSentenceWords: [0, 20],
  },
  orientation: {
    label: 'Orientation — READMEs, landing pages, overviews, index pages',
    dials: 'P1 / F1 / G1',
    variance: 'low',
    meanSentenceWords: [0, 20],
  },
  account: {
    label: 'Account — explanation, ADRs, design docs, post-mortems, RFCs',
    dials: 'P1-P2 / F1 / G2',
    variance: 'required',
    meanSentenceWords: [15, 25],
  },
  passage: {
    label: 'Passage — general prose, blog, long-form, status writing, reports',
    dials: 'P2 / F0-F1 / G2-G3',
    variance: 'required, highest',
    meanSentenceWords: [12, 22],
  },
  address: {
    label: 'Address — email, replies, cover letters, outreach, one named reader',
    dials: 'P3 / F3 / G3',
    variance: 'free, fragments ok',
    meanSentenceWords: [0, 15],
  },
};

export const MODE_ALIASES = {
  reference: 'instrument',
  api: 'instrument',
  changelog: 'instrument',   // research/03 §3.5: a changelog is Instrument with a date attached
  schema: 'instrument',
  howto: 'direction',
  'how-to': 'direction',
  guide: 'direction',
  runbook: 'direction',
  tutorial: 'direction',
  readme: 'orientation',
  overview: 'orientation',
  adr: 'account',
  explanation: 'account',
  essay: 'account',
  postmortem: 'account',
  narrative: 'passage',      // the register file of that name
  prose: 'passage',
  blog: 'passage',
  default: 'passage',
  correspondence: 'address', // the register file of that name
  email: 'address',
  letter: 'address',
  outreach: 'address',
  message: 'address',
};

export const DEFAULT_MODE = 'passage';

export function resolveMode(name) {
  if (!name) return DEFAULT_MODE;
  const key = String(name).toLowerCase();
  if (MODES[key]) return key;
  if (MODE_ALIASES[key]) return MODE_ALIASES[key];
  return null;
}

export function modeNames() {
  return [...Object.keys(MODES), ...Object.keys(MODE_ALIASES)];
}
