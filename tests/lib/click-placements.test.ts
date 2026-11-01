import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import ts from 'typescript'
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement, type ReactElement } from 'react'
import AffiliateLink from '@/components/AffiliateLink'
import ArticleModelLinks from '@/components/ArticleModelLinks'
import ArticleProductCTA from '@/components/ArticleProductCTA'
import ComparisonTable from '@/components/ComparisonTable'
import ProductCard from '@/components/ProductCard'
import QuickAnswer from '@/components/QuickAnswer'
import AmazonEventBlock from '@/components/black-friday/AmazonEventBlock'
import PickList from '@/components/black-friday/PickList'
import ComparisonSection from '@/components/floor-care/ComparisonSection'
import PickCards from '@/components/floor-care/PickCards'
import { CLICK_PLACEMENTS } from '@/lib/affiliate-click'
import { BLACK_FRIDAY_CATEGORIES, getBlackFridayPicks } from '@/lib/black-friday'
import { getFloorCareMarket } from '@/lib/floor-care/data'
import { getStaticProducts } from '@/lib/products'

// Every affiliate link names the block it sits in (lib/affiliate-click.ts
// CLICK_PLACEMENTS), so the click report can tell which blocks earn. The
// placement is rendered as data-aff-placement on the <a> and sent with the
// click; the types make it required, these checks keep it on the markup.

const PLACEMENTS: ReadonlySet<string> = new Set(CLICK_PLACEMENTS)
const SOURCE_DIRS = ['app', 'components', 'lib']
/** Components that wrap an affiliate link and take its placement as a prop. */
const PLACEMENT_PROP_COMPONENTS = new Set(['AffiliateLink', 'QuickAnswer'])

interface JsxTag {
  where: string
  name: string
  attrs: ReadonlyMap<string, ts.JsxAttribute>
}

function tsxFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return tsxFiles(path)
    return name.endsWith('.tsx') ? [path] : []
  })
}

function jsxTags(path: string): JsxTag[] {
  const source = ts.createSourceFile(path, readFileSync(path, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
  const tags: JsxTag[] = []
  const visit = (node: ts.Node) => {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const attrs = new Map<string, ts.JsxAttribute>()
      for (const prop of node.attributes.properties) {
        if (ts.isJsxAttribute(prop)) attrs.set(prop.name.getText(source), prop)
      }
      const line = source.getLineAndCharacterOfPosition(node.getStart(source)).line + 1
      tags.push({ where: `${relative(process.cwd(), path)}:${line}`, name: node.tagName.getText(source), attrs })
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return tags
}

/** The attribute's value when it is a plain string, else null. */
function literal(attr: ts.JsxAttribute | undefined): string | null {
  const init = attr?.initializer
  if (!init) return null
  if (ts.isStringLiteral(init)) return init.text
  if (ts.isJsxExpression(init) && init.expression && ts.isStringLiteralLike(init.expression)) return init.expression.text
  return null
}

/** Problems with a placement attribute: missing, or a literal outside the closed list. */
function placementProblems(tag: JsxTag, attrName: string): string[] {
  const attr = tag.attrs.get(attrName)
  if (!attr) return [`${tag.where}: <${tag.name}> has no ${attrName}`]
  const value = literal(attr)
  return value !== null && !PLACEMENTS.has(value) ? [`${tag.where}: unknown placement "${value}"`] : []
}

const tags = SOURCE_DIRS.flatMap((dir) => tsxFiles(join(process.cwd(), dir))).flatMap(jsxTags)
const isSponsoredAnchor = (tag: JsxTag) => tag.name === 'a' && (literal(tag.attrs.get('rel')) ?? '').includes('sponsored')

describe('placement on every affiliate link in the source', () => {
  it('spells every link rel as a plain string, so sponsored links can be found', () => {
    const dynamic = tags.filter((tag) => tag.name === 'a' && tag.attrs.has('rel') && literal(tag.attrs.get('rel')) === null)
    expect(dynamic.map((tag) => tag.where)).toEqual([])
  })

  it('gives every sponsored <a> a data-aff-placement from the closed list', () => {
    const anchors = tags.filter(isSponsoredAnchor)
    // QuickAnswer, product blocks, sticky bar, tables, comparator, quizzes, Black Friday…
    expect(anchors.length).toBeGreaterThanOrEqual(14)
    expect(anchors.flatMap((tag) => placementProblems(tag, 'data-aff-placement'))).toEqual([])
  })

  it('keeps data-aff-model off React links, so the article HTML tracker never counts them twice', () => {
    const tracked = tags.filter((tag) => tag.attrs.has('data-aff-model') || tag.attrs.has('data-aff-surface'))
    expect(tracked.map((tag) => tag.where)).toEqual([])
  })

  it('passes a placement to every AffiliateLink and QuickAnswer', () => {
    const wrappers = tags.filter((tag) => PLACEMENT_PROP_COMPONENTS.has(tag.name))
    expect(wrappers.length).toBeGreaterThanOrEqual(12)
    expect(wrappers.flatMap((tag) => placementProblems(tag, 'placement'))).toEqual([])
  })
})

/** Placement of each sponsored link of rendered markup ("(none)" when missing). */
function renderedPlacements(element: ReactElement): string[] {
  const html = renderToStaticMarkup(element)
  return [...html.matchAll(/<a [^>]*>/g)]
    .map((match) => match[0])
    .filter((tag) => tag.includes('rel="sponsored nofollow noopener noreferrer"'))
    .map((tag) => tag.match(/data-aff-placement="([^"]*)"/)?.[1] ?? '(none)')
}

function expectAll(placements: string[], expected: string) {
  expect(placements.length).toBeGreaterThan(0)
  expect(new Set(placements)).toEqual(new Set([expected]))
}

describe('placement in rendered blocks', () => {
  const products = getStaticProducts('fr').slice(0, 3)
  const picks = products.map((p) => ({ model: p.title, url: p.url }))

  it('quick answer: verdict box of an article, picks elsewhere', () => {
    const question = 'Quel modèle choisir ?'
    expectAll(renderedPlacements(createElement(QuickAnswer, { question, picks, lang: 'fr', placement: 'quick_answer' })), 'quick_answer')
    expectAll(renderedPlacements(createElement(QuickAnswer, { question, picks, lang: 'fr', placement: 'picks' })), 'picks')
  })

  it('article product blocks, mid-article and at the bottom', () => {
    for (const variant of ['inline', 'bottom'] as const) {
      expectAll(renderedPlacements(createElement(ArticleProductCTA, { products, lang: 'fr', variant, seeAllHref: '/fr' })), 'product_block')
    }
    const models = picks.map((p) => ({ name: p.model, url: p.url }))
    for (const surface of ['after-h2', 'bottom'] as const) {
      expectAll(renderedPlacements(createElement(ArticleModelLinks, { models, lang: 'fr', surface })), 'product_block')
    }
  })

  it('comparison table, desktop rows and mobile cards', () => {
    const dict = Object.fromEntries(
      ['table_title', 'table_subtitle', 'col_product', 'col_nura_score', 'col_capacity', 'col_best_for', 'col_action', 'col_pros', 'col_cons', 'buy_button', 'show_details', 'hide_details'].map((key) => [key, key]),
    ) as Parameters<typeof ComparisonTable>[0]['dict']
    const rows = products.map((p) => ({ ...p, name: p.title }))
    const placements = renderedPlacements(createElement(ComparisonTable, { products: rows, dict, lang: 'fr' }))
    expect(placements).toHaveLength(rows.length * 2)
    expectAll(placements, 'table')
  })

  it('product cards and any AffiliateLink', async () => {
    const p = products[0]
    const card = await ProductCard({ name: p.title, visual: p.visual, affiliateLink: p.url, asin: p.asin, lang: 'fr' })
    expectAll(renderedPlacements(card), 'card')
    // A plain function component without hooks: called directly, like ProductCard.
    const link = AffiliateLink({ href: p.url, asin: p.asin, productName: p.title, location: 'product_card', placement: 'picks', lang: 'fr', children: 'Amazon' })
    expectAll(renderedPlacements(link), 'picks')
  })

  it('Black Friday picks, event page and Prime trial', () => {
    expectAll(renderedPlacements(createElement(PickList, { picks: getBlackFridayPicks(BLACK_FRIDAY_CATEGORIES[0], 'fr'), lang: 'fr' })), 'black_friday')
    const eventBlock = renderedPlacements(createElement(AmazonEventBlock, { lang: 'fr' }))
    expect(eventBlock).toHaveLength(2)
    expectAll(eventBlock, 'black_friday')
  })

  it('floor-care pick cards and comparison tables', () => {
    const data = getFloorCareMarket('us').dry
    expectAll(renderedPlacements(createElement(PickCards, { market: 'us', guide: 'dry', picks: data.picks, buyLabel: 'View on Amazon' })), 'floor_care')
    expectAll(renderedPlacements(createElement(ComparisonSection, { data, buyLabel: 'View on Amazon' })), 'floor_care')
  })
})
