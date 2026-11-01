/**
 * Category hubs on the "answer first" template (study § 2.6.3, backlog
 * T3): the six seasonal categories first. Add a slug here to move another
 * hub to the template; its primary guide (lib/catalog/category-guides.ts)
 * must have a comparison table (tests/lib/catalog/answer-first.test.ts).
 */
export const ANSWER_FIRST_CATEGORIES = [
  'chauffages-appoint',
  'deshumidificateurs',
  'purificateurs-air',
  'aspirateurs-robots',
  'cafetieres',
  'thermostats',
] as const

export type AnswerFirstCategory = (typeof ANSWER_FIRST_CATEGORIES)[number]

export function isAnswerFirstCategory(slug: string): slug is AnswerFirstCategory {
  return (ANSWER_FIRST_CATEGORIES as readonly string[]).includes(slug)
}

/** A table with fewer rows compares nothing: the hub falls back to its picks. */
export const MIN_TABLE_ROWS = 2

/** The per-market answer's length (study § 2.6.3, item 3). */
export const ANSWER_MIN_WORDS = 40
export const ANSWER_MAX_WORDS = 70
