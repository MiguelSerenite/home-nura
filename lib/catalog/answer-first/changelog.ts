/**
 * "Latest updates" of the answer-first hubs: a dated line per editorial
 * change, shown in the locales it concerns. The newest entry moves the
 * hub's visible "Updated" date, its Article dateModified and its sitemap
 * lastmod together (hubModifiedIso). Add an entry the day a change ships,
 * in the words of a reader: what changed on the page, never the tooling.
 */

import { categoryModifiedIso } from '@/lib/catalog/category-faqs'
import type { Lang } from '@/lib/i18n'
import { SITE_LAST_UPDATED_ISO } from '@/lib/seo'
import { ANSWER_FIRST_CATEGORIES } from './config'

export interface HubChangelogEntry {
  /** Day of the change (YYYY-MM-DD). */
  readonly date: string
  readonly categories: readonly string[]
  /** What changed, per locale: the entry shows in these locales only. */
  readonly note: Readonly<Partial<Record<Lang, string>>>
}

export const HUB_CHANGELOG: readonly HubChangelogEntry[] = [
  {
    // data/market-picks and data/market-models (US and Canadian decisions,
    // checked on 01/11/2026): the hubs' picks, tables and catalog cards
    // name the North-American models since that day.
    date: '2026-11-01',
    categories: ANSWER_FIRST_CATEGORIES,
    note: {
      us: 'Picks updated to the models sold in the United States.',
      ca: 'Picks updated to the models sold in Canada.',
    },
  },
]

export interface HubChange {
  date: string
  note: string
}

/** The hub's changes in `lang`, newest first. */
export function getHubChangelog(categorySlug: string, lang: Lang, log: readonly HubChangelogEntry[] = HUB_CHANGELOG): HubChange[] {
  return log
    .flatMap((entry) => {
      const note = entry.note[lang]
      return entry.categories.includes(categorySlug) && note ? [{ date: entry.date, note }] : []
    })
    .sort((a, b) => b.date.localeCompare(a.date))
}

/**
 * Last-modified date of a hub in `lang`: its FAQ review date (or the
 * site-wide date), or its newest changelog entry when that is later.
 */
export function hubModifiedIso(categorySlug: string, lang: Lang, log: readonly HubChangelogEntry[] = HUB_CHANGELOG): string {
  const base = categoryModifiedIso(categorySlug, SITE_LAST_UPDATED_ISO)
  const latest = getHubChangelog(categorySlug, lang, log)[0]?.date
  return latest && latest > base ? latest : base
}
