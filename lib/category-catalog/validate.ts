/**
 * Validation of the category catalogue files (data/category-catalog), in
 * the style of lib/market-pages/validate.ts: each reader names the field
 * and what is wrong, so a bad file fails the build with a message the
 * writer can act on.
 */
import { getCategory } from '@/lib/catalog'
import { isValidLang, type Lang } from '@/lib/i18n'
import { looksLikePrice, wordingProblem } from '@/lib/market-pages/claims'
import { array, isoDate, object, quote, text, unique, type Fail } from '@/lib/validation/json-fields'
import { CATALOG_SEGMENTS, type CatalogModel, type CatalogSegment, type CategoryCatalog } from './types'

export const BEST_FOR_MAX = 140
export const FACT_MAX = 90
export const FACTS_MAX = 3

const TOP_KEYS = ['category', 'updated', 'models'] as const
const MODEL_KEYS = ['id', 'brand', 'model', 'asin', 'segment', 'bestFor', 'facts', 'markets'] as const
const ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const ASIN = /^B0[A-Z0-9]{8}$/
const URL_IN_TEXT = /https?:\/\/|www\./i

/** Text a reader sees: none of the banned wording, no price, no URL, within `max` characters. */
function readerText(value: unknown, path: string, max: number, fail: Fail): string {
  const raw = text(value, path, fail)
  const problem = wordingProblem(raw)
  if (problem) fail(path, `${problem}: ${quote(raw)}`)
  if (looksLikePrice(raw)) fail(path, `no price on the site: ${quote(raw)}`)
  if (URL_IN_TEXT.test(raw)) fail(path, `no URL in the text: ${quote(raw)}`)
  if ([...raw].length > max) fail(path, `${[...raw].length} characters, at most ${max}: ${quote(raw)}`)
  return raw
}

function locale(value: string, path: string, fail: Fail): Lang {
  if (!isValidLang(value)) fail(path, `unknown locale ${quote(value)}`)
  return value as Lang
}

/** An object keyed by locale ("_" keys are comments), each value read by `read`. */
function perLocale<T>(value: unknown, path: string, read: (v: unknown, p: string) => T, fail: Fail): Partial<Record<Lang, T>> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) fail(path, `expected an object keyed by locale, got ${quote(value)}`)
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([key]) => !key.startsWith('_'))
      .map(([key, v]) => [locale(key, `${path}.${key}`, fail), read(v, `${path}.${key}`)]),
  )
}

function model(value: unknown, path: string, fail: Fail): CatalogModel {
  const raw = object(value, path, MODEL_KEYS, fail)
  const id = text(raw.id, `${path}.id`, fail)
  if (!ID.test(id)) fail(`${path}.id`, `expected a lowercase slug (brand-model), got ${quote(id)}`)
  const asin = raw.asin === null ? null : text(raw.asin, `${path}.asin`, fail)
  if (asin !== null && !ASIN.test(asin)) fail(`${path}.asin`, `expected an ASIN (B0 + 8 characters) or null, got ${quote(asin)}`)
  const segment = text(raw.segment, `${path}.segment`, fail)
  if (!(CATALOG_SEGMENTS as readonly string[]).includes(segment)) {
    fail(`${path}.segment`, `expected ${CATALOG_SEGMENTS.join(', ')}, got ${quote(segment)}`)
  }
  const bestFor = perLocale(raw.bestFor, `${path}.bestFor`, (v, p) => readerText(v, p, BEST_FOR_MAX, fail), fail)
  const facts = perLocale(
    raw.facts,
    `${path}.facts`,
    (v, p) => {
      const items = array(v, p, fail, 1)
      if (items.length > FACTS_MAX) fail(p, `${items.length} facts, at most ${FACTS_MAX}`)
      return items.map((item, i) => readerText(item, `${p}[${i}]`, FACT_MAX, fail))
    },
    fail,
  )
  const markets = array(raw.markets, `${path}.markets`, fail, 1).map((m, i) =>
    locale(text(m, `${path}.markets[${i}]`, fail), `${path}.markets[${i}]`, fail),
  )
  unique(markets, `${path}.markets`, 'locale', fail)
  for (const lang of markets) {
    if (!bestFor[lang]) fail(`${path}.bestFor`, `missing ${lang}, listed in markets`)
    if (!facts[lang]) fail(`${path}.facts`, `missing ${lang}, listed in markets`)
  }
  return {
    id,
    brand: text(raw.brand, `${path}.brand`, fail),
    model: text(raw.model, `${path}.model`, fail),
    asin,
    segment: segment as CatalogSegment,
    bestFor,
    facts,
    markets,
  }
}

/** A catalogue file, or a thrown Error naming the first problem. */
export function validateCatalog(value: unknown, file: string): CategoryCatalog {
  const fail: Fail = (path, message) => {
    throw new Error(`${file}: ${path ? `${path}: ` : ''}${message}`)
  }
  const raw = object(value, '', TOP_KEYS, fail)
  const category = text(raw.category, 'category', fail)
  if (!getCategory(category)) fail('category', `unknown category slug ${quote(category)} (lib/catalog/categories.ts)`)
  const models = array(raw.models, 'models', fail, 1).map((m, i) => model(m, `models[${i}]`, fail))
  unique(
    models.map((m) => m.id),
    'models',
    'id',
    fail,
  )
  return { category, updated: isoDate(raw.updated, 'updated', fail), models }
}
