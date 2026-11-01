import { describe, expect, it } from 'vitest'
import {
  MarketDataError,
  NORTH_AMERICAN_MARKETS,
  isMarketName,
  marketDecision,
  marketModelKeys,
  marketPickSlugs,
  marketPicks,
} from '@/lib/market-models'
import { europeanModelReferences, findMarketCoverageProblems } from '@/lib/market-models/coverage'
import { loadMarketData } from '@/lib/market-models/data'
import { parseMarketModels, parseMarketPicks } from '@/lib/market-models/validate'
import usModels from '@/data/market-models/us.json'
import usPicks from '@/data/market-picks/us.json'

const decision = (fields: Record<string, unknown> = {}) => ({
  status: 'substitute',
  name: 'Typhur Sync Air Fryer (AF14)',
  asin: 'B0D1234567',
  evidence: 'https://typhur.com/products/sync-air-fryer',
  note: 'Wi-Fi, built-in probe.',
  ...fields,
})
const modelsFile = (models: Record<string, unknown>, extra: Record<string, unknown> = {}) => ({
  market: 'us',
  checkedOn: '2026-11-01',
  models,
  ...extra,
})
const picksFile = (picks: Record<string, unknown>) => ({ market: 'us', picks })
const pick = (fields: Record<string, unknown> = {}) => ({
  model: 'Typhur Sync Air Fryer (AF14)',
  role: 'Best smart model',
  why: 'Wi-Fi app and a built-in food probe.',
  ...fields,
})

describe('market data loader', () => {
  it('loads both markets with one decision per European model the site names', () => {
    const references = [...europeanModelReferences().keys()]
    for (const market of NORTH_AMERICAN_MARKETS) {
      expect(new Set(marketModelKeys(market)), market).toEqual(new Set(references))
    }
  })

  it('finds no coverage gap: every model decided, every verdict with market picks, every Black Friday pick resolved', () => {
    expect(findMarketCoverageProblems()).toEqual([])
  })

  it('keeps the counts of the 1 November 2026 reconciliation (French catalog titles, English twins merged)', () => {
    const count = (market: 'us' | 'ca') =>
      marketModelKeys(market).reduce<Record<string, number>>((acc, model) => {
        const { status } = marketDecision(market, model)
        return { ...acc, [status]: (acc[status] ?? 0) + 1 }
      }, {})
    expect(count('us')).toEqual({ same: 88, regional: 59, substitute: 173, none: 5 })
    expect(count('ca')).toEqual({ same: 83, regional: 56, substitute: 177, none: 9 })
    expect(marketPickSlugs('us').reduce((n, slug) => n + marketPicks('us', slug).length, 0)).toBe(262)
    expect(marketPickSlugs('ca').reduce((n, slug) => n + marketPicks('ca', slug).length, 0)).toBe(260)
  })

  it('names every verdict pick by a canonical North-American name of its market', () => {
    for (const market of NORTH_AMERICAN_MARKETS) {
      for (const slug of marketPickSlugs(market)) {
        for (const p of marketPicks(market, slug)) expect(isMarketName(market, p.model), `${market}/${slug}: ${p.model}`).toBe(true)
      }
    }
  })

  it('throws a clear error for a European model without a decision', () => {
    expect(() => marketDecision('us', 'Brand New Air Fryer 9000')).toThrow(MarketDataError)
    expect(() => marketDecision('ca', 'Brand New Air Fryer 9000')).toThrow(
      'data/market-models/ca.json: no decision for "Brand New Air Fryer 9000"',
    )
  })

  it('accepts the committed files', () => {
    expect(() => loadMarketData('us', { models: usModels, picks: usPicks })).not.toThrow()
  })
})

describe('market models validation', () => {
  it('accepts a well-formed file', () => {
    const models = parseMarketModels(modelsFile({ 'Philips Airfryer Combi XXL Connecté - 8.3L': decision() }), 'us')
    expect(models['Philips Airfryer Combi XXL Connecté - 8.3L'].name).toBe('Typhur Sync Air Fryer (AF14)')
  })

  it.each([
    ['an unknown status', decision({ status: 'similar' }), '"status" must be one of same, regional, substitute, none'],
    ['a missing North-American name', decision({ name: null }), '"name" must be the North-American model name'],
    ['a name for "none"', decision({ status: 'none', asin: null }), '"name" must be null for status "none"'],
    ['a malformed ASIN', decision({ asin: 'B0D12' }), '"asin" must be null or a 10-character ASIN'],
    ['a price in the name', decision({ name: 'Typhur Sync $199' }), 'carries a price'],
    ['an unknown field', decision({ price: 199 }), 'unknown field(s) price'],
    ['a missing field', { status: 'same', name: 'Dyson V15 Detect', asin: null, evidence: '' }, 'missing field(s) note'],
  ])('rejects %s', (_label, entry, message) => {
    expect(() => parseMarketModels(modelsFile({ 'Some European Model': entry }), 'us')).toThrow(message)
  })

  it('rejects a file of another market or without a check date', () => {
    expect(() => parseMarketModels(modelsFile({}, { market: 'ca' }), 'us')).toThrow('"market" must be "us"')
    expect(() => parseMarketModels(modelsFile({}, { checkedOn: 'November' }), 'us')).toThrow('"checkedOn"')
  })

  it('names the file and the model in every error', () => {
    expect(() => parseMarketModels(modelsFile({ 'Xiaomi Smart Air Fryer Pro 4L': decision({ status: 'gone' }) }), 'us')).toThrow(
      'data/market-models/us.json: "Xiaomi Smart Air Fryer Pro 4L": "status"',
    )
  })
})

describe('market picks validation', () => {
  const models = parseMarketModels(modelsFile({ 'Philips Airfryer Combi XXL Connecté - 8.3L': decision() }), 'us')

  it('accepts picks named by canonical names', () => {
    expect(parseMarketPicks(picksFile({ 'test-philips-combi-xxl-connected': [pick()] }), 'us', models)).toEqual({
      'test-philips-combi-xxl-connected': [pick()],
    })
  })

  it('rejects a pick that is not a canonical North-American name', () => {
    expect(() => parseMarketPicks(picksFile({ article: [pick({ model: 'Philips Airfryer Combi XXL Connecté - 8.3L' })] }), 'us', models)).toThrow(
      'data/market-picks/us.json: "article"[0]: "Philips Airfryer Combi XXL Connecté - 8.3L" is not a North-American name',
    )
  })

  it('rejects the same model picked twice, empty text, a price and an empty verdict', () => {
    expect(() => parseMarketPicks(picksFile({ a: [pick(), pick({ role: 'Best value' })] }), 'us', models)).toThrow('picked twice')
    expect(() => parseMarketPicks(picksFile({ a: [pick({ why: ' ' })] }), 'us', models)).toThrow('"why" must be non-empty trimmed text')
    expect(() => parseMarketPicks(picksFile({ a: [pick({ why: 'Only $99 on sale.' })] }), 'us', models)).toThrow('carries a price')
    expect(() => parseMarketPicks(picksFile({ a: [] }), 'us', models)).toThrow('expected a non-empty array of picks')
  })

  it('never offers a "none" model as a pick', () => {
    const withNone = parseMarketModels(modelsFile({ 'Cecotec Mambo Touch': decision({ status: 'none', name: null, asin: null }) }), 'us')
    expect(() => parseMarketPicks(picksFile({ a: [pick()] }), 'us', withNone)).toThrow('is not a North-American name')
  })
})
