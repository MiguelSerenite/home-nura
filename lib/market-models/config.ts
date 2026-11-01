/**
 * North-American market decisions: which of the site's European models a
 * US or Canadian reader can actually buy.
 *
 * The site's selection was built in Europe (catalog titles, article models,
 * verdict picks, Black Friday picks). For the US (`us`) and Canadian (`ca`)
 * versions, retail specialists checked every European model the site names
 * against the manufacturers' North-American stores and amazon.com /
 * amazon.ca (1 November 2026), and recorded one decision per model and
 * market in data/market-models/{market}.json:
 *
 * - `same`: the same model is sold in that market under the same name;
 * - `regional`: the same product, sold under a North-American name or SKU
 *   (120 V version, other model code, T-fal for Tefal/Moulinex…);
 * - `substitute`: the European model is not sold there; `name` is the
 *   closest North-American equivalent, a different product;
 * - `none`: not sold there and no honest equivalent.
 *
 * data/market-picks/{market}.json holds each verdict's picks for that
 * market (canonical North-American names, role and reason in en-US /
 * en-CA). `evidence` and `note` record where each decision comes from and
 * are never rendered.
 */

import type { Lang } from '@/lib/i18n'

/** The site locales whose readers shop on amazon.com / amazon.ca. */
export const NORTH_AMERICAN_MARKETS = ['us', 'ca'] as const satisfies readonly Lang[]
export type NorthAmericanMarket = (typeof NORTH_AMERICAN_MARKETS)[number]

export function isNorthAmericanMarket(lang: string): lang is NorthAmericanMarket {
  return (NORTH_AMERICAN_MARKETS as readonly string[]).includes(lang)
}

export const MARKET_MODEL_STATUSES = ['same', 'regional', 'substitute', 'none'] as const
export type MarketModelStatus = (typeof MARKET_MODEL_STATUSES)[number]

/** One European model in one North-American market. */
export interface MarketModelDecision {
  readonly status: MarketModelStatus
  /** Canonical North-American name ("Brand Range (SKU)"); null when `none`. */
  readonly name: string | null
  /** amazon.com / amazon.ca ASIN of that North-American product, when one was found in stock. */
  readonly asin: string | null
  /** Page that backs the decision (not rendered). */
  readonly evidence: string
  /** Why this decision (not rendered). */
  readonly note: string
}

/** A decision the reader can act on: the model, or its equivalent, is sold in the market. */
export type MarketModelOffer = MarketModelDecision & { readonly status: Exclude<MarketModelStatus, 'none'>; readonly name: string }

/** A verdict pick for one market, written in en-US / en-CA. */
export interface MarketPick {
  /** Canonical North-American name (a `name` of data/market-models/{market}.json). */
  readonly model: string
  readonly role: string
  readonly why: string
}

/** The European model itself (or its North-American version) is sold in the market. */
export function isSoldAsIs(decision: MarketModelDecision): boolean {
  return decision.status === 'same' || decision.status === 'regional'
}

/** Repository paths of the data files, for error messages. */
export function marketModelsFile(market: NorthAmericanMarket): string {
  return `data/market-models/${market}.json`
}

export function marketPicksFile(market: NorthAmericanMarket): string {
  return `data/market-picks/${market}.json`
}
