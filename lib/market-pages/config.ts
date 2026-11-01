/**
 * Market pages: duels, guides and news written natively for ONE locale
 * (no translation into the others), each in its own JSON file
 * (data/market-pages/{locale}/{slug}.json, format and rules in
 * docs/croissance/ETUDE-MARCHES-2026-11.md § 2.6.3 and the writers'
 * FORMAT.md). Routes: /{locale}/vs/{slug}, /{locale}/guides/{slug},
 * /{locale}/news/{slug}; every other locale is a 404.
 */

import { SHARED_GUIDE_SLUGS } from '@/lib/i18n'

export const MARKET_PAGE_TYPES = ['duel', 'guide', 'news'] as const
export type MarketPageType = (typeof MARKET_PAGE_TYPES)[number]

/** URL segment of each page type inside the locale prefix. */
export const MARKET_PAGE_SEGMENTS: Readonly<Record<MarketPageType, string>> = {
  duel: 'vs',
  guide: 'guides',
  news: 'news',
}

/** Repository folder of the page files: data/market-pages/{locale}/{slug}.json. */
export const MARKET_PAGES_DIR = 'data/market-pages'

/** Path of a market page inside its locale prefix ('/vs/ninja-vs-cosori'). */
export function marketPagePath(type: MarketPageType, slug: string): string {
  return `/${MARKET_PAGE_SEGMENTS[type]}/${slug}`
}

/** Repository path of a page file, for error messages. */
export function marketPageFile(locale: string, slug: string): string {
  return `${MARKET_PAGES_DIR}/${locale}/${slug}.json`
}

/** Picks per page type: a duel compares two models, a guide recommends three; news may name none. */
export const PICK_COUNT: Readonly<Record<MarketPageType, { min: number; max: number }>> = {
  duel: { min: 2, max: 2 },
  guide: { min: 3, max: 3 },
  news: { min: 0, max: 3 },
}

/** Models a guide's comparison table lists: its three picks and up to five more. */
export const GUIDE_TABLE_MODELS = { min: 3, max: 8 } as const

/** Search-result lengths, in characters: the brand suffix is dropped when the title is long. */
export const META_TITLE_LENGTH = { min: 40, max: 58 } as const
export const META_DESCRIPTION_LENGTH = { min: 140, max: 155 } as const

/** The answer box settles the question in 40 to 70 words. */
export const ANSWER_WORDS = { min: 40, max: 70 } as const

/** Criteria weights add up to this. */
export const CRITERIA_TOTAL_WEIGHT = 100

/** Lowercase ASCII words joined by hyphens: native words, transliterated ("heissluftfritteuse"). */
export const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/

/** Guide slugs a market guide may not take: the static guide routes every locale serves. */
export const RESERVED_GUIDE_SLUGS: readonly string[] = SHARED_GUIDE_SLUGS

export function isMarketPageType(value: unknown): value is MarketPageType {
  return typeof value === 'string' && (MARKET_PAGE_TYPES as readonly string[]).includes(value)
}
