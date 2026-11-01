/**
 * Writer sections that repeat a box of the template: FORMAT.md asks for
 * a "Why this ranking" section, and some pages add a "What independent
 * testers found" one. Found by their heading, the ranking box and the
 * testers box show their text instead of repeating the heading further
 * down the page; the section list skips them.
 */

import type { MarketPage } from './types'
import { MARKET_PAGE_UI } from './ui'

type PageSections = Pick<MarketPage, 'locale' | 'criteria' | 'independentTesters' | 'sections'>

const normalize = (heading: string) => heading.normalize('NFC').trim().toLowerCase().replace(/[\s.:?!]+$/, '')

function sectionTitled(page: PageSections, headings: readonly string[]): number {
  const wanted = new Set(headings.map(normalize))
  return page.sections.findIndex((section) => wanted.has(normalize(section.h2)))
}

/** Index of the page's "why this ranking" section, or -1 (also when the page has no criteria, hence no ranking box). */
export function rankingSectionIndex(page: PageSections): number {
  if (page.criteria.length === 0) return -1
  const ui = MARKET_PAGE_UI[page.locale]
  return sectionTitled(page, [ui.rankingTitle, ...(ui.rankingAliases ?? [])])
}

/** Index of the page's "what independent testers found" section, or -1 (also when the page lists no tester, hence no box). */
export function testersSectionIndex(page: PageSections): number {
  if (page.independentTesters.length === 0) return -1
  return sectionTitled(page, [MARKET_PAGE_UI[page.locale].testersTitle])
}

/** Sections a template box shows, which the section list leaves out. */
export function boxedSectionIndexes(page: PageSections): ReadonlySet<number> {
  return new Set([rankingSectionIndex(page), testersSectionIndex(page)].filter((i) => i >= 0))
}
