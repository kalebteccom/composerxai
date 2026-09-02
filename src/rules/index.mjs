import typographic from './typographic.mjs';
import structural from './structural.mjs';
import lexical from './lexical.mjs';
import controlled from './controlled.mjs';

export const RULES = [...typographic, ...structural, ...lexical, ...controlled];
export { OMITTED_RULES } from './omitted.mjs';

export function ruleById(id) {
  return RULES.find((r) => r.id === id);
}
