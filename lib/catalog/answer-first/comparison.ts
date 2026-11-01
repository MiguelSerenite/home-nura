/**
 * The comparison table of an "answer first" hub, read from the hub's
 * primary guide (lib/catalog/category-guides.ts): the first table of the
 * guide's text in the reader's locale, already written and reviewed per
 * locale (Model | criteria… | Best for). Each row's model is matched with
 * the guide's own models (lib/blog/model-match.ts, the rule that links
 * the guide's tables) to get its Amazon link.
 *
 * US and Canada sell other models (CLAUDE.md, rule 6): a row stays only
 * when the market sells its model as is, under the North-American name.
 * When fewer than MIN_TABLE_ROWS rows remain, the table compares the
 * market's own picks instead (data/market-picks), so no European model
 * ever reaches a North-American table.
 */

import { getArticleBySlug } from '@/lib/blog'
import { getArticleAffiliateModels, type ArticleAffiliateModel } from '@/lib/blog/article-products'
import { bestMatch, modelKey } from '@/lib/blog/model-match'
import { isNorthAmericanMarket } from '@/lib/market-models'
import type { Lang } from '@/lib/i18n'
import { CATEGORY_GUIDES, getCategoryGuides } from '../category-guides'
import { MIN_TABLE_ROWS } from './config'
import { ANSWER_FIRST_UI } from './ui'

export interface HubTableLink {
  url: string
  /** Model name as linked (its North-American name on /us and /ca). */
  name: string
  asin?: string
}

export interface HubTableRow {
  /** First cell: the model. */
  model: string
  /** The other cells, in column order. */
  cells: readonly string[]
  /** Amazon link of the row's model, or null when the guide does not link it. */
  link: HubTableLink | null
}

export interface HubComparison {
  /** Column headings, the model column first. */
  columns: readonly string[]
  rows: readonly HubTableRow[]
  /** `guide`: the guide's own table; `picks`: the market's picks (US and Canada fallback). */
  source: 'guide' | 'picks'
}

interface RawTable {
  columns: string[]
  rows: string[][]
}

const ENTITIES: Readonly<Record<string, string>> = { amp: '&', nbsp: ' ', lt: '<', gt: '>', quot: '"', '#39': "'", apos: "'" }

/** Plain text of a table cell: tags dropped, the few entities the guides use decoded, spaces collapsed. */
export function cellText(html: string): string {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(#39|[a-z]+);/gi, (entity, name: string) => ENTITIES[name.toLowerCase()] ?? entity)
    .replace(/\s+/g, ' ')
    .trim()
}

const cellsOf = (rowHtml: string, tag: 'th' | 'td') =>
  [...rowHtml.matchAll(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`, 'gi'))].map((m) => cellText(m[1]))

/** The first table of an HTML text: header cells, then the body rows that have one cell per column. */
export function firstTable(html: string): RawTable | null {
  const table = html.match(/<table\b[\s\S]*?<\/table>/i)?.[0]
  if (!table) return null
  const rows = [...table.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((m) => m[1])
  const headerIndex = rows.findIndex((row) => /<th\b/i.test(row))
  if (headerIndex === -1) return null
  const columns = cellsOf(rows[headerIndex], 'th')
  const body = rows
    .slice(headerIndex + 1)
    .map((row) => cellsOf(row, 'td'))
    .filter((cells) => cells.length === columns.length && cells[0].length > 0)
  return columns.length >= 2 ? { columns, rows: body } : null
}

function primaryGuide(categorySlug: string) {
  const slug = CATEGORY_GUIDES[categorySlug]?.primary
  return slug ? getArticleBySlug(slug) : undefined
}

/** The primary guide's comparison table in `lang`, as written (no model matching). */
export function guideTable(categorySlug: string, lang: Lang): RawTable | null {
  const html = primaryGuide(categorySlug)?.content[lang]
  return html ? firstTable(html) : null
}

function linkOf(model: ArticleAffiliateModel | undefined): HubTableLink | null {
  if (!model || model.unlinked || !model.url) return null
  return { url: model.url, name: model.label, ...(model.asin ? { asin: model.asin } : {}) }
}

/** The guide's rows for `lang`, each matched with the guide's models (US / Canada: sold models only, renamed). */
function guideRows(categorySlug: string, lang: Lang, table: RawTable): HubTableRow[] {
  const article = primaryGuide(categorySlug)
  if (!article) return []
  const models = getArticleAffiliateModels(article, lang)
  const keys = models.map((m) => modelKey(m.name))
  const northAmerican = isNorthAmericanMarket(lang)
  return table.rows.flatMap(([name, ...cells]) => {
    const match = bestMatch(name, keys)
    const link = linkOf(match ? models[match.model] : undefined)
    if (northAmerican && !link) return []
    return [{ model: northAmerican && link ? link.name : name, cells, link }]
  })
}

/** The market's picks as a table (model, role, why): the US and Canadian fallback. */
function picksTable(categorySlug: string, lang: Lang): HubComparison | null {
  const { picks } = getCategoryGuides(categorySlug, lang)
  const rows = picks.map((pick) => ({
    model: pick.model,
    cells: [pick.role ?? '', pick.why ?? ''],
    link: pick.url ? { url: pick.url, name: pick.model } : null,
  }))
  if (rows.length < MIN_TABLE_ROWS) return null
  const ui = ANSWER_FIRST_UI[lang]
  return { columns: [ui.modelColumn, ui.roleColumn, ui.whyColumn], rows, source: 'picks' }
}

/** The hub's comparison table in `lang`, or null when neither the guide nor the picks can fill one. */
export function getHubComparison(categorySlug: string, lang: Lang): HubComparison | null {
  const table = guideTable(categorySlug, lang)
  const rows = table ? guideRows(categorySlug, lang, table) : []
  if (table && rows.length >= MIN_TABLE_ROWS) return { columns: table.columns, rows, source: 'guide' }
  return isNorthAmericanMarket(lang) ? picksTable(categorySlug, lang) : null
}
