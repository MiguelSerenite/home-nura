/**
 * The writer's own "Why this ranking" section (FORMAT.md asks for one),
 * found by its heading: the ranking box shows it under the weighted
 * criteria instead of repeating the heading further down the page.
 */

import type { MarketPage } from './types'
import { MARKET_PAGE_UI } from './ui'

const normalize = (heading: string) => heading.normalize('NFC').trim().toLowerCase().replace(/[\s.:?!]+$/, '')

/** Index in `sections` of the page's "why this ranking" section, or -1 (also when the page has no criteria, hence no ranking box). */
export function rankingSectionIndex(page: Pick<MarketPage, 'locale' | 'criteria' | 'sections'>): number {
  if (page.criteria.length === 0) return -1
  const ui = MARKET_PAGE_UI[page.locale]
  const headings = new Set([ui.rankingTitle, ...(ui.rankingAliases ?? [])].map(normalize))
  return page.sections.findIndex((section) => headings.has(normalize(section.h2)))
}
