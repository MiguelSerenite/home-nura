/**
 * Shape of a market page (data/market-pages/{locale}/{slug}.json) after
 * validation by lib/market-pages/validate.ts.
 */

import type { Lang } from '@/lib/i18n'
import type { RichTextBlock } from '@/lib/rich-text'
import type { MarketPageType } from './config'

/** One model the page recommends. Every spec comes from the manufacturer's page for that market. */
export interface MarketPagePick {
  brand: string
  /** Model name as sold in the market, with its model number. */
  model: string
  /** Its role in the selection ("Best overall", "Budget pick"). */
  role: string
  why: string
  /** Who should choose it: on a duel, the "Choose {model} if…" column. */
  bestFor: string
  /** ASIN seen on this market's Amazon store, or null. Linked directly on amazon.fr / amazon.it only. */
  asin: string | null
  /** The model's page on the manufacturer's site for that market. */
  manufacturerUrl: string
  /** Spec name → value with the market's units, from the manufacturer. */
  specs: Readonly<Record<string, string>>
}

/**
 * The page's comparison table. `rowsAreModels`: each row starts with a
 * model (guides; duels may do the same), else each row is a spec and the
 * columns after the first are the duel's two models.
 */
export interface MarketPageComparison {
  columns: readonly string[]
  rows: readonly (readonly string[])[]
  rowsAreModels: boolean
}

/** A ranking criterion and its weight (the weights add up to 100). */
export interface MarketPageCriterion {
  name: string
  weight: number
  explanation: string
}

export interface MarketPageSection {
  h2: string
  /** The section body, parsed from the file's `html` (p, ul, li, strong, em only). */
  blocks: readonly RichTextBlock[]
}

export interface MarketPageFaq {
  q: string
  a: string
}

/** A published result of an independent tester, linked to the tester's own page. */
export interface IndependentTester {
  name: string
  url: string
  /** What they found, dated, as they published it. */
  note: string
}

export interface MarketPage {
  locale: Lang
  type: MarketPageType
  slug: string
  /** Path inside the locale prefix ('/vs/{slug}'). */
  path: string
  /** ISO date of the last editorial update: the visible date and JSON-LD dateModified. */
  updated: string
  /** ISO date of first publication (`published` in the file, else `updated`). */
  published: string
  metaTitle: string
  metaDescription: string
  kicker: string
  h1: string
  /** The answer first: 40 to 70 words. */
  answer: string
  picks: readonly MarketPagePick[]
  comparison: MarketPageComparison
  criteria: readonly MarketPageCriterion[]
  sections: readonly MarketPageSection[]
  faq: readonly MarketPageFaq[]
  independentTesters: readonly IndependentTester[]
  sources: readonly string[]
  /** Site paths of the same locale, with their prefix ('/it/guides/airfryers'). */
  related: readonly string[]
  /** True for the placeholder pages shipped before the writers' content (key `_fixture`). */
  isFixture: boolean
}

/** A page file as the registry lists it, before validation. */
export interface RawMarketPageFile {
  /** Folder name: the page's locale. */
  readonly locale: string
  /** File name without .json: the page's slug. */
  readonly slug: string
  readonly raw: unknown
}
