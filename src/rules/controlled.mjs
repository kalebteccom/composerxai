// Controlled-language rules, for reference material only.
//
// Every rule here is off outside Instrument mode, and that is the whole design.
// research/03 §3.4 is blunt about it: at G0, sounding like a machine is correct.
// Reference material should be regular, repetitive, tonally dead and identical
// entry to entry, and a framework that cannot say where it stops applying is a
// mood. So these rules demand exactly what the rest of the linter forbids.
//
// The principles come from ASD-STE100, the controlled English the aerospace
// industry has used since 1983. The specification is proprietary, so nothing
// here quotes it: `skills/composing/registers/reference.md` restates the eight
// principles in our own words and PRIOR_ART.md credits the source. These rules
// enforce the four of those eight that a regex can actually decide. The other
// four (condition before command, one instruction per sentence, define on first
// use, one word one meaning) need a parser or a glossary and are documented in
// reference.md as judgement, unenforced and labelled as such.

// A match can straddle a wrapped line, and a message with a newline in it breaks
// the one-finding-per-line output. Collapse whitespace in anything quoted back.
function q(text) {
  return text.trim().replace(/\s+/g, ' ');
}

function each(re, text, fn) {
  re.lastIndex = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    fn(m);
    if (m.index === re.lastIndex) re.lastIndex += 1;
  }
}

const OFF_EVERYWHERE_ELSE = {
  direction: { enabled: false },
  orientation: { enabled: false },
  account: { enabled: false },
  passage: { enabled: false },
  address: { enabled: false },
};

export default [
  {
    id: 'ste/hedge-modal',
    class: 'enforceable',
    category: 'controlled-language',
    severity: 'error',
    summary: 'Hedging modal in reference material',
    // STE principle 8 restated. A reader looking something up needs to know what
    // the software does. "The server may retry" leaves them unable to write the
    // client either way, so the hedge transfers the writer's uncertainty to
    // someone with less information than the writer had.
    source: 'ASD-STE100 principle restated in registers/reference.md §Controlled-language principles (spec proprietary, see PRIOR_ART.md)',
    modes: OFF_EVERYWHERE_ELSE,
    check(doc) {
      const out = [];
      each(/\b(?:should|would|may|might|could|ought\s+to)\b/gi, doc.masked, (m) => {
        out.push({
          offset: m.index,
          message: `"${q(m[0])}" hedges. Reference states what the software does: say "does", "does not", or name the condition it depends on.`,
        });
      });
      return out;
    },
  },

  {
    id: 'ste/compound-tense',
    class: 'enforceable',
    category: 'controlled-language',
    severity: 'error',
    summary: 'Perfect, progressive or future tense in reference material',
    // STE principle 4 restated. Reference is atemporal: it describes what is
    // true of the current version. A perfect or future tense implies a timeline
    // the reader has to place themselves on, and reference has no timeline.
    source: 'ASD-STE100 principle restated in registers/reference.md §Controlled-language principles (spec proprietary, see PRIOR_ART.md)',
    modes: OFF_EVERYWHERE_ELSE,
    check(doc) {
      const out = [];
      each(/\b(?:has|have|had)\s+been\b|\b(?:is|are|was|were)\s+\w+ing\b|\bwill\s+(?:be\s+)?\w+/gi, doc.masked, (m) => {
        out.push({
          offset: m.index,
          message: `"${q(m[0])}" is a compound tense. Reference is atemporal: use the simple present ("returns", not "will return" or "has been returned").`,
        });
      });
      return out;
    },
  },

  {
    id: 'ste/first-person',
    class: 'enforceable',
    category: 'controlled-language',
    severity: 'error',
    summary: 'First person in reference material',
    // reference.md §Forbids, first line. A reference entry has no narrator. "We
    // recommend" puts an opinion where the reader came for a fact, and "our API"
    // tells them nothing the page title did not.
    source: 'registers/reference.md §Forbids; research/03 §3.5.1 (Instrument is P0, no authorial presence)',
    modes: OFF_EVERYWHERE_ELSE,
    check(doc) {
      const out = [];
      each(/(?:^|[^\w'’])(?:I|we|our|ours|us|my|mine|let'?s)\b/gi, doc.masked, (m) => {
        const word = m[0].replace(/^[^\w'’]/, '');
        out.push({
          offset: m.index + (m[0].length - word.length),
          message: `"${q(word)}" — reference has no narrator. Name the actor ("the server", "the caller") or drop the clause.`,
        });
      });
      return out;
    },
  },

  {
    id: 'ste/vague-frequency',
    class: 'enforceable',
    category: 'controlled-language',
    severity: 'error',
    summary: 'Unquantified frequency in reference material',
    // reference.md §Forbids, last line. "Typically returns 200" is the shape of
    // an answer without being one: the reader still cannot tell when it does
    // not. Either the condition is known, in which case name it, or it is not,
    // in which case say that instead of dressing the gap as a tendency.
    source: 'registers/reference.md §Forbids; ASD-STE100 principle restated (spec proprietary, see PRIOR_ART.md)',
    modes: OFF_EVERYWHERE_ELSE,
    check(doc) {
      const out = [];
      each(/\b(?:typically|usually|generally|normally|often|in\s+most\s+cases|as\s+a\s+rule)\b/gi, doc.masked, (m) => {
        out.push({
          offset: m.index,
          message: `"${q(m[0])}" states a tendency where the reader needs a condition. Name what decides it, or say plainly that it is unspecified.`,
        });
      });
      return out;
    },
  },
];
