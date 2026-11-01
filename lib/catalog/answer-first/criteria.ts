/**
 * "Why this ranking": the criteria a hub compares its models on, read
 * from the columns of its primary guide's comparison table in the
 * reader's locale (the model column and the closing "best for" column
 * apart). No weight is shown: the site publishes no per-category
 * weighting, and none is invented here.
 */

import type { Lang } from '@/lib/i18n'
import { guideTable } from './comparison'

/** Headings the guides give their closing "who is it for" column, per locale. */
const BEST_FOR_COLUMNS: Readonly<Record<Lang, readonly string[]>> = {
  fr: ['Idéal pour'],
  en: ['Best for'],
  de: ['Ideal für'],
  es: ['Ideal para'],
  it: ['Ideale per'],
  nl: ['Ideaal voor'],
  pl: ['Dla kogo', 'Zastosowanie'],
  sv: ['Bäst för', 'Passar för'],
  us: ['Best for'],
  ca: ['Best for'],
}

export function isBestForColumn(heading: string, lang: Lang): boolean {
  return BEST_FOR_COLUMNS[lang].some((label) => label.toLowerCase() === heading.trim().toLowerCase())
}

/** The criteria the hub's guide compares in `lang`, in table order (empty when it has no table). */
export function getHubCriteria(categorySlug: string, lang: Lang): string[] {
  const table = guideTable(categorySlug, lang)
  if (!table) return []
  return table.columns.slice(1).filter((heading) => !isBestForColumn(heading, lang))
}
