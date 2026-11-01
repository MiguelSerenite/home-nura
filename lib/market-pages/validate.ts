/**
 * Validation of one market page file (data/market-pages/{locale}/{slug}.json).
 *
 * Runs when the pages build: bad data fails the build with the file, the
 * field path and what is expected, instead of shipping a broken or
 * non-compliant page. Beyond the shape it enforces the site's rules:
 * - unknown keys are rejected (keys starting with "_" are comments;
 *   `_fixture` marks a placeholder page);
 * - no prices next to Amazon products (no currency amount in picks, specs,
 *   comparison tables or tester notes; no price spec);
 * - no Amazon ratings, review counts, bestseller ranks or own-test claims;
 * - specs, sources and tester links never point to Amazon;
 * - section bodies use the allowed tags only (lib/rich-text.ts);
 * - search snippet lengths, a 40–70 word answer, criteria weights adding
 *   up to 100, two picks for a duel and three for a guide, a comparison
 *   table that compares the page's own picks.
 * Whether `related` paths exist is checked with every page loaded
 * (lib/market-pages/data.ts).
 */

import { isValidLang, type Lang } from '@/lib/i18n'
import { findPick, pickName } from '@/lib/pick-names'
import { parseRichText, RichTextError } from '@/lib/rich-text'
import { AMAZON_HOST, array, httpsUrl, object, quote, text, unique, type Fail } from '@/lib/validation/json-fields'
import { isPriceSpecName, looksLikePrice, wordingProblem } from './claims'
import {
  ANSWER_WORDS,
  CRITERIA_TOTAL_WEIGHT,
  GUIDE_TABLE_MODELS,
  MARKET_PAGE_TYPES,
  META_DESCRIPTION_LENGTH,
  META_TITLE_LENGTH,
  PICK_COUNT,
  RESERVED_GUIDE_SLUGS,
  SLUG_PATTERN,
  isMarketPageType,
  marketPageFile,
  marketPagePath,
  type MarketPageType,
} from './config'
import type {
  IndependentTester,
  MarketPage,
  MarketPageComparison,
  MarketPageCriterion,
  MarketPageFaq,
  MarketPagePick,
  MarketPageSection,
} from './types'

export class MarketPageDataError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'MarketPageDataError'
  }
}

const TOP_KEYS = [
  'locale', 'type', 'slug', 'updated', 'published', 'metaTitle', 'metaDescription', 'kicker', 'h1',
  'answer', 'picks', 'comparison', 'criteria', 'sections', 'faq', 'independentTesters', 'sources', 'related',
] as const
const PICK_KEYS = ['brand', 'model', 'role', 'why', 'bestFor', 'asin', 'manufacturerUrl', 'specs'] as const

const ASIN = /^[A-Z0-9]{10}$/
const ISO_DATE = /^(\d{4})-(\d{2})-(\d{2})$/
/** A page dated later than tomorrow (any time zone) is a typo. */
const MAX_FUTURE_MS = 36 * 60 * 60 * 1000
const DAY_MS = 24 * 60 * 60 * 1000

/** Text the reader sees: non-empty, and none of the banned wording. */
function prose(value: unknown, path: string, fail: Fail): string {
  const value_ = text(value, path, fail)
  const problem = wordingProblem(value_)
  if (problem) fail(path, `${quote(value_)}: ${problem}`)
  return value_
}

/** Text next to Amazon products: prose without a currency amount. */
function noPrice(value: unknown, path: string, fail: Fail): string {
  const value_ = prose(value, path, fail)
  if (looksLikePrice(value_)) fail(path, `${quote(value_)} looks like a price: no prices next to Amazon products`)
  return value_
}

/** A manufacturer, source or tester URL: https, and never an Amazon page. */
function referenceUrl(value: unknown, path: string, fail: Fail): string {
  const url = httpsUrl(value, path, fail)
  if (AMAZON_HOST.test(url.hostname)) {
    fail(path, `${quote(url.href)} is an Amazon page: link the manufacturer, the regulator or the independent source itself`)
  }
  return url.href
}

function isoDate(value: unknown, path: string, fail: Fail): string {
  const raw = text(value, path, fail)
  const match = raw.match(ISO_DATE)
  const date = match ? new Date(`${raw}T00:00:00Z`) : null
  if (!match || !date || Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== raw) {
    fail(path, `expected a date written YYYY-MM-DD, got ${quote(raw)}`)
  }
  if ((date as Date).getTime() - Date.now() > MAX_FUTURE_MS) fail(path, `${quote(raw)} is in the future`)
  return raw
}

function length(value: string, path: string, { min, max }: { min: number; max: number }, fail: Fail): string {
  const chars = [...value].length
  if (chars < min || chars > max) fail(path, `${chars} characters, expected ${min} to ${max}: ${quote(value)}`)
  return value
}

/** Words of a text: tokens with a letter or a digit. */
export function wordCount(value: string): number {
  return value.split(/\s+/).filter((token) => /[\p{L}\p{N}]/u.test(token)).length
}

function specs(value: unknown, path: string, fail: Fail): Record<string, string> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    fail(path, `expected an object of spec name → value (strings with the market's units), got ${quote(value)}`)
  }
  const entries = Object.entries(value as Record<string, unknown>).filter(([key]) => !key.startsWith('_'))
  if (entries.length === 0) fail(path, 'expected at least one spec')
  return Object.fromEntries(
    entries.map(([key, raw]) => {
      const at = `${path}.${key}`
      if (key.trim() === '') fail(at, 'empty spec name')
      if (isPriceSpecName(key)) fail(at, 'no price spec: the site shows no prices')
      return [key.trim(), noPrice(raw, at, fail)]
    }),
  )
}

function pick(value: unknown, path: string, fail: Fail): MarketPagePick {
  const p = object(value, path, PICK_KEYS, fail)
  const at = (key: (typeof PICK_KEYS)[number]) => `${path}.${key}`
  const asin = p.asin === null || p.asin === undefined ? null : text(p.asin, at('asin'), fail)
  if (asin !== null && !ASIN.test(asin)) fail(at('asin'), `expected a 10-character ASIN seen on this market's Amazon store, or null; got ${quote(asin)}`)
  return {
    brand: noPrice(p.brand, at('brand'), fail),
    model: noPrice(p.model, at('model'), fail),
    role: noPrice(p.role, at('role'), fail),
    why: noPrice(p.why, at('why'), fail),
    bestFor: noPrice(p.bestFor, at('bestFor'), fail),
    asin,
    manufacturerUrl: referenceUrl(p.manufacturerUrl, at('manufacturerUrl'), fail),
    specs: specs(p.specs, at('specs'), fail),
  }
}

function picks(value: unknown, type: MarketPageType, fail: Fail): MarketPagePick[] {
  const { min, max } = PICK_COUNT[type]
  const list = value === undefined && min === 0 ? [] : array(value, 'picks', fail)
  if (list.length < min || list.length > max) {
    fail('picks', `a ${type} has ${min === max ? min : `${min} to ${max}`} picks, got ${list.length}`)
  }
  const parsed = list.map((p, i) => pick(p, `picks[${i}]`, fail))
  unique(parsed.map((p) => pickName(p).toLowerCase()), 'picks', 'model', fail)
  return parsed
}

const EMPTY_TABLE: MarketPageComparison = { columns: [], rows: [], rowsAreModels: true }

function isEmptyTable(value: unknown): boolean {
  if (value === undefined || value === null) return true
  const c = value as { columns?: unknown; rows?: unknown }
  return Array.isArray(c.columns) && c.columns.length === 0 && Array.isArray(c.rows) && c.rows.length === 0
}

/** Duel orientation: one spec per row, the two picks as columns 2 and 3. */
function specRowsDuel(columns: readonly string[], list: readonly MarketPagePick[]): boolean {
  if (columns.length !== 3) return false
  const named = columns.slice(1).map((column) => findPick(list, column))
  return named.every(Boolean) && named[0] !== named[1]
}

function checkModelRows(rows: readonly (readonly string[])[], list: readonly MarketPagePick[], type: MarketPageType, fail: Fail): void {
  const names = list.map(pickName).join(', ')
  rows.forEach((row, r) => {
    if (type === 'duel' && !findPick(list, row[0])) {
      fail(`comparison.rows[${r}][0]`, `${quote(row[0])} is not one of the two picks (${names}), named as in "picks"`)
    }
  })
  list.forEach((p) => {
    if (!rows.some((row) => findPick(list, row[0]) === p)) fail('comparison.rows', `${pickName(p)} (a pick) has no row: the table compares the page's picks`)
  })
}

function comparison(value: unknown, type: MarketPageType, list: readonly MarketPagePick[], fail: Fail): MarketPageComparison {
  if (type === 'news' && isEmptyTable(value)) return EMPTY_TABLE
  const c = object(value, 'comparison', ['columns', 'rows'], fail)
  const columns = array(c.columns, 'comparison.columns', fail, 2).map((col, i) => noPrice(col, `comparison.columns[${i}]`, fail))
  const rows = array(c.rows, 'comparison.rows', fail, 2).map((row, r) => {
    const cells = array(row, `comparison.rows[${r}]`, fail)
    if (cells.length !== columns.length) fail(`comparison.rows[${r}]`, `expected ${columns.length} cells (one per column), got ${cells.length}`)
    return cells.map((cell, i) => noPrice(cell, `comparison.rows[${r}][${i}]`, fail))
  })
  unique(rows.map((row) => row[0].toLowerCase()), 'comparison.rows', 'row', fail)

  if (type === 'duel' && specRowsDuel(columns, list)) return { columns, rows, rowsAreModels: false }
  if (type === 'duel' && !list.every((p) => rows.some((row) => findPick(list, row[0]) === p))) {
    fail(
      'comparison',
      `a duel table has one spec per row with the two picks as columns 2 and 3 (["…", "${pickName(list[0])}", "${pickName(list[1])}"]), or one row per pick (first cell = the pick)`,
    )
  }
  if (type === 'guide' && (rows.length < GUIDE_TABLE_MODELS.min || rows.length > GUIDE_TABLE_MODELS.max)) {
    fail('comparison.rows', `a guide compares ${GUIDE_TABLE_MODELS.min} to ${GUIDE_TABLE_MODELS.max} models (one per row), got ${rows.length}`)
  }
  if (type !== 'news') checkModelRows(rows, list, type, fail)
  return { columns, rows, rowsAreModels: true }
}

function criteria(value: unknown, required: boolean, fail: Fail): MarketPageCriterion[] {
  const list = value === undefined && !required ? [] : array(value, 'criteria', fail, required ? 1 : 0)
  const parsed = list.map((raw, i) => {
    const at = `criteria[${i}]`
    const c = object(raw, at, ['name', 'weight', 'explanation'], fail)
    if (typeof c.weight !== 'number' || !Number.isInteger(c.weight) || c.weight < 1 || c.weight > CRITERIA_TOTAL_WEIGHT) {
      fail(`${at}.weight`, `expected a whole number from 1 to ${CRITERIA_TOTAL_WEIGHT}, got ${quote(c.weight)}`)
    }
    return { name: prose(c.name, `${at}.name`, fail), weight: c.weight as number, explanation: prose(c.explanation, `${at}.explanation`, fail) }
  })
  unique(parsed.map((c) => c.name.toLowerCase()), 'criteria', 'criterion', fail)
  const total = parsed.reduce((sum, c) => sum + c.weight, 0)
  if (parsed.length > 0 && total !== CRITERIA_TOTAL_WEIGHT) fail('criteria', `weights add up to ${total}, expected ${CRITERIA_TOTAL_WEIGHT}`)
  return parsed
}

function section(value: unknown, path: string, fail: Fail): MarketPageSection {
  const s = object(value, path, ['h2', 'html'], fail)
  const html = prose(s.html, `${path}.html`, fail)
  try {
    return { h2: prose(s.h2, `${path}.h2`, fail), blocks: parseRichText(html) }
  } catch (error) {
    if (error instanceof RichTextError) fail(`${path}.html`, error.message)
    throw error
  }
}

function faq(value: unknown, path: string, fail: Fail): MarketPageFaq {
  const f = object(value, path, ['q', 'a'], fail)
  return { q: prose(f.q, `${path}.q`, fail), a: prose(f.a, `${path}.a`, fail) }
}

function tester(value: unknown, path: string, fail: Fail): IndependentTester {
  const t = object(value, path, ['name', 'url', 'note'], fail)
  return { name: prose(t.name, `${path}.name`, fail), url: referenceUrl(t.url, `${path}.url`, fail), note: noPrice(t.note, `${path}.note`, fail) }
}

/** A site path of the page's own locale ('/it/guides/airfryers'); existence is checked by the loader. */
function relatedPath(value: unknown, path: string, locale: Lang, fail: Fail): string {
  const raw = text(value, path, fail)
  if (!new RegExp(`^/${locale}(?:/[a-z0-9-]+)*$`).test(raw)) {
    fail(path, `${quote(raw)}: expected a page of /${locale} written /${locale}/…, without host, trailing slash, query or #anchor (related links stay in the page's locale)`)
  }
  return raw
}

function list<T>(value: unknown, path: string, min: number, optional: boolean, fail: Fail, item: (v: unknown, at: string) => T): T[] {
  if (value === undefined && optional) return []
  return array(value, path, fail, min).map((v, i) => item(v, `${path}[${i}]`))
}

export interface MarketPageFileRef {
  /** Folder of the file: the locale it belongs to. */
  locale: string
  /** File name without .json. */
  slug: string
}

/**
 * Validates one page file. Throws MarketPageDataError naming the file,
 * the field and what is expected.
 */
export function parseMarketPage(raw: unknown, file: MarketPageFileRef): MarketPage {
  const where = marketPageFile(file.locale, file.slug)
  const fail: Fail = (path, message) => {
    throw new MarketPageDataError(`${where}: ${path || '(file)'}: ${message}`)
  }
  if (!isValidLang(file.locale)) fail('', `"${file.locale}" is not a site locale: put the file in data/market-pages/{fr|en|de|es|it|nl|pl|sv|us|ca}/`)
  const locale = file.locale as Lang
  const data = object(raw, '', TOP_KEYS, fail)
  if (data.locale !== locale) fail('locale', `expected "${locale}" (the file's folder), got ${quote(data.locale)}`)
  if (!isMarketPageType(data.type)) fail('type', `expected one of ${MARKET_PAGE_TYPES.join(', ')}, got ${quote(data.type)}`)
  const type = data.type as MarketPageType
  if (data.slug !== file.slug) fail('slug', `expected "${file.slug}" (the file name), got ${quote(data.slug)}`)
  if (!SLUG_PATTERN.test(file.slug)) fail('slug', `${quote(file.slug)}: lowercase ASCII words joined by hyphens (transliterate accents: "ß" → "ss", "è" → "e")`)
  if (type === 'guide' && RESERVED_GUIDE_SLUGS.includes(file.slug)) {
    fail('slug', `"${file.slug}" is a guide every locale already serves (/guides/${file.slug}): choose another slug`)
  }

  const updated = isoDate(data.updated, 'updated', fail)
  const published = data.published === undefined ? updated : isoDate(data.published, 'published', fail)
  if (new Date(published).getTime() - new Date(updated).getTime() >= DAY_MS) fail('published', `${published} is after the update date ${updated}`)

  const answer = prose(data.answer, 'answer', fail)
  const words = wordCount(answer)
  if (words < ANSWER_WORDS.min || words > ANSWER_WORDS.max) fail('answer', `${words} words, expected ${ANSWER_WORDS.min} to ${ANSWER_WORDS.max}`)

  const pagePicks = picks(data.picks, type, fail)
  const isNews = type === 'news'
  const sources = list(data.sources, 'sources', 1, false, fail, (v, at) => referenceUrl(v, at, fail))
  unique(sources, 'sources', 'source', fail)
  const related = list(data.related, 'related', 0, false, fail, (v, at) => relatedPath(v, at, locale, fail))
  unique(related, 'related', 'path', fail)

  return {
    locale,
    type,
    slug: file.slug,
    path: marketPagePath(type, file.slug),
    updated,
    published,
    metaTitle: length(prose(data.metaTitle, 'metaTitle', fail), 'metaTitle', META_TITLE_LENGTH, fail),
    metaDescription: length(prose(data.metaDescription, 'metaDescription', fail), 'metaDescription', META_DESCRIPTION_LENGTH, fail),
    kicker: prose(data.kicker, 'kicker', fail),
    h1: prose(data.h1, 'h1', fail),
    answer,
    picks: pagePicks,
    comparison: comparison(data.comparison, type, pagePicks, fail),
    criteria: criteria(data.criteria, pagePicks.length > 0, fail),
    sections: list(data.sections, 'sections', 1, false, fail, (v, at) => section(v, at, fail)),
    faq: list(data.faq, 'faq', isNews ? 0 : 1, isNews, fail, (v, at) => faq(v, at, fail)),
    independentTesters: list(data.independentTesters, 'independentTesters', 0, isNews, fail, (v, at) => tester(v, at, fail)),
    sources,
    related,
    isFixture: Object.hasOwn(data, '_fixture'),
  }
}
