/**
 * Loads and validates the North-American market files when this module
 * loads (at build time): a malformed decision, or a verdict pick that is
 * not a canonical name of the models file, fails the build.
 */

import caModels from '@/data/market-models/ca.json'
import usModels from '@/data/market-models/us.json'
import caPicks from '@/data/market-picks/ca.json'
import usPicks from '@/data/market-picks/us.json'
import { NORTH_AMERICAN_MARKETS, type MarketModelDecision, type MarketPick, type NorthAmericanMarket } from './config'
import { parseMarketModels, parseMarketPicks } from './validate'

export interface MarketData {
  /** European model, exactly as the site writes it → decision for this market. */
  readonly models: Readonly<Record<string, MarketModelDecision>>
  /** Article slug → the verdict picks of this market. */
  readonly picks: Readonly<Record<string, readonly MarketPick[]>>
}

const RAW: Readonly<Record<NorthAmericanMarket, { readonly models: unknown; readonly picks: unknown }>> = {
  us: { models: usModels, picks: usPicks },
  ca: { models: caModels, picks: caPicks },
}

export function loadMarketData(market: NorthAmericanMarket, raw: { readonly models: unknown; readonly picks: unknown } = RAW[market]): MarketData {
  const models = parseMarketModels(raw.models, market)
  return { models, picks: parseMarketPicks(raw.picks, market, models) }
}

export const MARKET_DATA: Readonly<Record<NorthAmericanMarket, MarketData>> = Object.fromEntries(
  NORTH_AMERICAN_MARKETS.map((market) => [market, loadMarketData(market)]),
) as Record<NorthAmericanMarket, MarketData>
