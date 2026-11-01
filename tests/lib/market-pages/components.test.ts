import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Fragment, createElement } from 'react'
import MarketPageView from '@/components/market-pages/MarketPageView'
import MarketPagesHubList from '@/components/market-pages/HubList'
import { amazonAssociateDisclosure } from '@/lib/affiliate-disclosure'
import { AUTHORS } from '@/lib/authors'
import { getMarketPages, marketPageHref } from '@/lib/market-pages/data'
import type { MarketPage } from '@/lib/market-pages/types'
import { MARKET_PAGE_UI } from '@/lib/market-pages/ui'
import { pickName } from '@/lib/pick-names'
import itDict from '@/dictionaries/it.json'
import usDict from '@/dictionaries/us.json'

const DICTS = { it: itDict, us: usDict } as const
/** Text as React escapes it in the markup. */
const escaped = (text: string) => renderToStaticMarkup(createElement(Fragment, null, text))
const AMAZON_LINK = /<a [^>]*href="https:\/\/www\.amazon\.(?:fr|it)\/[^"]*"[^>]*>/g
const AMAZON_IMAGE_HOST = /media-amazon\.com|images-amazon\.com|ssl-images-amazon/i

function render(page: MarketPage): string {
  const dict = DICTS[page.locale as keyof typeof DICTS]
  return renderToStaticMarkup(createElement(MarketPageView, { page, buyLabel: dict.buy_button, faqTitle: dict.faq_title }))
}

/** The HTML of the element with this id, up to the next section of the page. */
function block(html: string, id: string): string {
  const start = html.indexOf(`id="${id}"`)
  expect(start, id).toBeGreaterThan(-1)
  const next = html.slice(start + 1).search(/<section |<nav aria-labelledby="related-title"/)
  return next === -1 ? html.slice(start) : html.slice(start, start + 1 + next)
}

const pages = getMarketPages().filter((page) => page.locale in DICTS)

describe.each(pages.map((page) => [marketPageHref(page), page] as const))('%s', (_href, page) => {
  const html = render(page)
  const dict = DICTS[page.locale as keyof typeof DICTS]

  it('puts the answer first, then picks, table, ranking, body, testers, FAQ, sources and related links', () => {
    const order = ['id="answer"', 'id="picks"', 'id="comparison"', 'id="ranking"', 'id="section-1"', 'FAQPage', 'id="sources"', 'id="related-title"']
    if (page.independentTesters.length > 0) order.splice(5, 0, 'id="testers"')
    const positions = order.map((marker) => html.indexOf(marker))
    expect(positions.every((p) => p > -1), order.filter((_, i) => positions[i] === -1).join(', ')).toBe(true)
    expect([...positions].sort((a, b) => a - b)).toEqual(positions)
  })

  it('dates the page and signs it with the locale’s pen name', () => {
    expect(html).toContain(`<time dateTime="${page.updated}">`)
    expect(html).toContain(AUTHORS[page.locale].name)
    expect(html).toContain(`<h1 class="`)
    expect(html).toContain(escaped(page.kicker))
  })

  it('puts Amazon’s disclosure under every block of Amazon links, with the store-neutral button', () => {
    for (const id of ['picks', 'comparison']) {
      const part = block(html, id)
      expect(part.match(AMAZON_LINK)?.length ?? 0, id).toBeGreaterThan(0)
      expect(part, id).toContain('data-amazon-disclosure')
      expect(part, id).toContain(amazonAssociateDisclosure(page.locale))
    }
    for (const link of html.match(AMAZON_LINK) ?? []) {
      expect(link).toContain('rel="sponsored nofollow noopener noreferrer"')
      expect(link).toMatch(new RegExp(`aria-label="${dict.buy_button}: `))
    }
    expect(html).not.toMatch(/Amazon\.(?:de|it|fr|com|co\.uk|es|ca)\b(?![^<]*")/)
  })

  it('keeps the testers box free of buy buttons', () => {
    if (page.independentTesters.length === 0) return
    expect(block(html, 'testers')).not.toMatch(AMAZON_LINK)
  })

  it('fixes the table’s first column and ships the FAQ as FAQPage', () => {
    expect(block(html, 'comparison')).toMatch(/<th scope="row" class="sticky left-0/)
    expect(html).toContain('"@type":"FAQPage"')
  })

  it('shows no Amazon image and no price next to a pick', () => {
    expect(html).not.toMatch(AMAZON_IMAGE_HOST)
    expect(block(html, 'picks')).not.toMatch(/\d\s?[€£$]|[€£$]\s?\d/)
    expect(block(html, 'comparison')).not.toMatch(/\d\s?[€£$]|[€£$]\s?\d/)
  })

  it('sets a duel side by side with "Choose … if"', () => {
    if (page.type !== 'duel') return
    const ui = MARKET_PAGE_UI[page.locale]
    expect(block(html, 'picks')).toMatch(/grid-cols-2/)
    for (const pick of page.picks) expect(html).toContain(escaped(ui.chooseIf(pickName(pick))))
  })
})

describe('MarketPagesHubList', () => {
  it('lists the locale’s market pages on the hubs their related links name, and nothing elsewhere', () => {
    for (const page of getMarketPages()) {
      const hub = page.related[0].slice(`/${page.locale}`.length)
      const html = renderToStaticMarkup(createElement(MarketPagesHubList, { lang: page.locale, path: hub }))
      expect(html).toContain(`href="${marketPageHref(page)}"`)
      expect(html).toContain(escaped(MARKET_PAGE_UI[page.locale].hubListTitle))
      const other = page.locale === 'it' ? 'de' : 'it'
      expect(renderToStaticMarkup(createElement(MarketPagesHubList, { lang: other, path: hub }))).toBe('')
    }
    expect(renderToStaticMarkup(createElement(MarketPagesHubList, { lang: 'fr', path: '/confort-air/ventilateurs' }))).toBe('')
  })
})
