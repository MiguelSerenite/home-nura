/**
 * Structured data of a market page: BreadcrumbList, Article (author = the
 * locale's pen name, dateModified = the visible update date) and, when it
 * has picks, an ItemList of their names. The FAQ block emits its own
 * FAQPage (components/FaqSection).
 */

import { BASE_URL, buildArticleSchema, buildBreadcrumbListSchema, buildProductListSchema, type BreadcrumbItem } from '@/lib/seo'
import { pickName } from '@/lib/pick-names'
import { primaryHub } from './hubs'
import { marketPickPhoto } from './picks'
import type { MarketPage } from './types'
import { MARKET_PAGE_UI } from './ui'

/** Home → the page's first related category hub (if any) → the page. */
export function marketPageBreadcrumbs(page: MarketPage): BreadcrumbItem[] {
  const hub = primaryHub(page)
  return [{ name: MARKET_PAGE_UI[page.locale].home, path: '' }, ...(hub ? [hub] : []), { name: page.h1, path: page.path }]
}

export function marketPageSchemas(page: MarketPage): object[] {
  const ui = MARKET_PAGE_UI[page.locale]
  return [
    buildBreadcrumbListSchema(page.locale, marketPageBreadcrumbs(page)),
    buildArticleSchema({
      lang: page.locale,
      path: page.path,
      title: page.h1,
      description: page.metaDescription,
      image: '/og-image.png',
      datePublished: page.published,
      dateModified: page.updated,
      articleSection: ui.sections[page.type],
    }),
    ...(page.picks.length > 0
      ? [
          buildProductListSchema(
            page.picks.map((pick) => ({ title: pickName(pick), visual: { photo: marketPickPhoto(pick, page.locale) } })),
            page.locale,
            page.h1,
            `${BASE_URL}/${page.locale}${page.path}`,
            page.updated,
          ),
        ]
      : []),
  ]
}
