import { vi, describe, expect, it } from 'vitest'
vi.mock('server-only', () => ({}))
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import type { ReactElement, ReactNode } from 'react'
import { renderToReadableStream } from 'react-dom/server'
import Home from '@/app/[lang]/page'
import GenericCategoryPage from '@/app/[lang]/[silo]/[category]/page'
import KitchenCategoryPage from '@/app/[lang]/cuisine-connectee/[category]/page'
import KitchenSiloPage from '@/app/[lang]/cuisine-connectee/page'
import ComfortSiloPage from '@/app/[lang]/confort-air/page'
import EnergySiloPage from '@/app/[lang]/energie-domotique/page'
import CleaningSiloPage from '@/app/[lang]/entretien-maison/page'
import OutdoorSiloPage from '@/app/[lang]/outdoor-connecte/page'
import SecuritySiloPage from '@/app/[lang]/securite-maison/page'
import AirfryerGuidePage from '@/app/[lang]/guides/airfryers/page'
import AirfryerVsOvenPage from '@/app/[lang]/guides/airfryer-vs-four/page'
import KitchenGuidePage from '@/app/[lang]/guides/cuisine-connectee/page'
import BlackFridayHubPage from '@/app/[lang]/black-friday/page'
import BlackFridayCategoryPage from '@/app/[lang]/black-friday/[category]/page'
import { BLACK_FRIDAY_CATEGORIES } from '@/lib/black-friday'
import { getAllArticles } from '@/lib/blog'
import { getIndexableCategories } from '@/lib/catalog'
import { SMART_KITCHEN_CATEGORIES } from '@/lib/smart-kitchen-products'

/**
 * T1 (docs/croissance/ETUDE-MARCHES-2026-11.md): the US and Canadian
 * editions must not read as the European site. Every templated surface is
 * rendered as served (home, silo and category hubs with their intros and
 * FAQs, buying guides, Black Friday pages, footer) plus the whole US and
 * Canadian dictionaries, and none may keep a European leftover. Article
 * prose is out of scope: the market notice on each article covers it.
 */
const NORTH_AMERICA = ['us', 'ca'] as const
const LEFTOVERS: readonly RegExp[] = [/\bEU\b/, /\bGDPR\b/i, /€/, /\bFrance\b/, /\bFrench market\b/i]

type Page = (props: { params: Promise<Record<string, string>> }) => Promise<ReactNode>

async function renderText(page: Page, params: Record<string, string>): Promise<string> {
  const element = await page({ params: Promise.resolve(params) })
  const stream = await renderToReadableStream(element as ReactElement)
  await stream.allReady
  const html = await new Response(stream).text()
  return html
    .replace(/<style[^>]*>[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
}

/** Each leftover with 50 characters of context. */
function leftovers(text: string): string[] {
  return LEFTOVERS.flatMap((re) => [...text.matchAll(new RegExp(re.source, `${re.flags}g`))].map((m) => text.slice(Math.max(0, m.index - 50), m.index + 50)))
}

/**
 * Article titles and excerpts shown as guide cards on the hubs describe the
 * article itself (article prose, out of scope): left out of the scan.
 */
function withoutArticleCards(text: string, lang: string): string {
  const cards = getAllArticles()
    .flatMap((a) => [a.title[lang], a.excerpt[lang]])
    .filter((s): s is string => Boolean(s))
    .map((s) => s.replace(/\s+/g, ' ').trim())
    .sort((a, b) => b.length - a.length)
  return cards.reduce((acc, card) => acc.split(card).join(' '), text)
}

const SILO_PAGES: Record<string, Page> = {
  'cuisine-connectee': KitchenSiloPage as Page,
  'confort-air': ComfortSiloPage as Page,
  'energie-domotique': EnergySiloPage as Page,
  'entretien-maison': CleaningSiloPage as Page,
  'outdoor-connecte': OutdoorSiloPage as Page,
  'securite-maison': SecuritySiloPage as Page,
}

function categoryPage(slug: string, silo: string): [Page, Record<string, string>] {
  if (slug === 'airfryers') return [AirfryerGuidePage as Page, {}]
  if (silo === 'cuisine-connectee' && (SMART_KITCHEN_CATEGORIES as readonly string[]).includes(slug)) {
    return [KitchenCategoryPage as Page, { category: slug }]
  }
  return [GenericCategoryPage as Page, { silo, category: slug }]
}

describe.each(NORTH_AMERICA)('/%s templated surfaces: no European leftover', (lang) => {
  it('home page and footer', async () => {
    const text = await renderText(Home as Page, { lang })
    expect(leftovers(text)).toEqual([])
    expect(text).not.toContain('HOME NURA EUROPE')
  })

  it('silo hubs', async () => {
    for (const [silo, page] of Object.entries(SILO_PAGES)) {
      expect(leftovers(await renderText(page, { lang })), silo).toEqual([])
    }
  })

  it('category hubs: heads, intros, picks and FAQs', async () => {
    for (const category of getIndexableCategories()) {
      const [page, params] = categoryPage(category.slug, category.metaSilo)
      expect(leftovers(withoutArticleCards(await renderText(page, { lang, ...params }), lang)), category.slug).toEqual([])
    }
  }, 120_000)

  it('buying guides', async () => {
    for (const [name, page] of Object.entries({ AirfryerVsOvenPage, KitchenGuidePage })) {
      expect(leftovers(await renderText(page as Page, { lang })), name).toEqual([])
    }
  })

  it('Black Friday hub and category pages', async () => {
    expect(leftovers(await renderText(BlackFridayHubPage as Page, { lang })), 'hub').toEqual([])
    // Every Black Friday page this market has (some pages exist in a few markets only).
    for (const category of BLACK_FRIDAY_CATEGORIES.filter((c) => c.copy[lang])) {
      expect(leftovers(await renderText(BlackFridayCategoryPage as Page, { lang, category: category.slug })), category.slug).toEqual([])
    }
  })

  it('dictionary (every string, rendered or not)', () => {
    const dictionary: unknown = JSON.parse(readFileSync(join(process.cwd(), 'dictionaries', `${lang}.json`), 'utf8'))
    const strings = (value: unknown): string[] =>
      typeof value === 'string' ? [value] : value && typeof value === 'object' ? Object.values(value).flatMap(strings) : []
    expect(strings(dictionary).flatMap(leftovers)).toEqual([])
  })
})

describe('/pl home page', () => {
  it('has no chapter about the French market (Polish market facts instead)', async () => {
    const text = await renderText(Home as Page, { lang: 'pl' })
    expect(text.match(/.{0,50}(?:Francj\p{L}*|francusk\p{L}*|Francuz\p{L}*).{0,50}/giu) ?? []).toEqual([])
    expect(text).toContain('Polska 2026')
  })
})
