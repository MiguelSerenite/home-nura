import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { Fragment, createElement } from 'react'
import MarketPageView from '@/components/market-pages/MarketPageView'
import MarketPagesHubList from '@/components/market-pages/HubList'
import RichText from '@/components/RichText'
import { rankingSectionIndex, testersSectionIndex } from '@/lib/market-pages/template-sections'
import { amazonAssociateDisclosure } from '@/lib/affiliate-disclosure'
import { AUTHORS } from '@/lib/authors'
import { getMarketPages, marketPageHref } from '@/lib/market-pages/data'
import type { MarketPage } from '@/lib/market-pages/types'
import { MARKET_PAGE_UI } from '@/lib/market-pages/ui'
import { pickName } from '@/lib/pick-names'
import type { Lang } from '@/lib/i18n'
import ca from '@/dictionaries/ca.json'
import de from '@/dictionaries/de.json'
import en from '@/dictionaries/en.json'
import es from '@/dictionaries/es.json'
import fr from '@/dictionaries/fr.json'
import it_ from '@/dictionaries/it.json'
import nl from '@/dictionaries/nl.json'
import pl from '@/dictionaries/pl.json'
import sv from '@/dictionaries/sv.json'
import us from '@/dictionaries/us.json'

const DICTS: Record<Lang, { buy_button: string; faq_title: string }> = { ca, de, en, es, fr, it: it_, nl, pl, sv, us }
/** Text as React escapes it in the markup. */
const escaped = (text: string) => renderToStaticMarkup(createElement(Fragment, null, text))
const AMAZON_LINK = /<a [^>]*href="https:\/\/www\.amazon\.(?:fr|it)\/[^"]*"[^>]*>/g
const AMAZON_IMAGE_HOST = /media-amazon\.com|images-amazon\.com|ssl-images-amazon/i

function render(page: MarketPage): string {
  const dict = DICTS[page.locale]
  return renderToStaticMarkup(createElement(MarketPageView, { page, buyLabel: dict.buy_button, faqTitle: dict.faq_title }))
}

/** The HTML of the element with this id, up to the next section of the page. */
function block(html: string, id: string): string {
  const start = html.indexOf(`id="${id}"`)
  expect(start, id).toBeGreaterThan(-1)
  const next = html.slice(start + 1).search(/<section |<nav aria-labelledby="related-title"/)
  return next === -1 ? html.slice(start) : html.slice(start, start + 1 + next)
}

const pages = getMarketPages()

describe.each(pages.map((page) => [marketPageHref(page), page] as const))('%s', (_href, page) => {
  const html = render(page)
  const dict = DICTS[page.locale]
  /** Blocks of Amazon links this page has. */
  const amazonBlocks = [...(page.picks.length > 0 ? ['picks'] : []), ...(page.comparison.rows.length > 0 && page.picks.length > 0 ? ['comparison'] : [])]

  it('puts the answer first, then picks, table, ranking, body, testers, FAQ, sources and related links', () => {
    const order = [
      'id="answer"',
      ...(page.picks.length > 0 ? ['id="picks"'] : []),
      ...(page.comparison.rows.length > 0 ? ['id="comparison"'] : []),
      ...(page.criteria.length > 0 ? ['id="ranking"'] : []),
      'id="section-',
      ...(page.independentTesters.length > 0 ? ['id="testers"'] : []),
      ...(page.faq.length > 0 ? ['FAQPage'] : []),
      'id="sources"',
      ...(page.related.length > 0 ? ['id="related-title"'] : []),
    ]
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
    for (const id of amazonBlocks) {
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

  it('shows the writer’s "why this ranking" section once, inside the ranking box', () => {
    if (page.criteria.length === 0) return
    const ui = MARKET_PAGE_UI[page.locale]
    const headings = [ui.rankingTitle, ...(ui.rankingAliases ?? [])]
    const count = (text: string) => html.split(`>${escaped(text)}</h2>`).length - 1
    expect(count(ui.rankingTitle)).toBe(1)
    for (const alias of ui.rankingAliases ?? []) expect(count(alias), alias).toBe(0)
    const index = rankingSectionIndex(page)
    expect(index).toBe(page.sections.findIndex((section) => headings.includes(section.h2)))
    if (index >= 0) {
      const body = renderToStaticMarkup(createElement(RichText, { blocks: page.sections[index].blocks }))
      expect(block(html, 'ranking')).toContain(body)
    }
  })

  it('shows the writer’s "what independent testers found" section once, inside the testers box', () => {
    const ui = MARKET_PAGE_UI[page.locale]
    const index = testersSectionIndex(page)
    expect(html.split(`>${escaped(ui.testersTitle)}</h2>`).length - 1).toBeLessThanOrEqual(1)
    if (index >= 0) {
      const body = renderToStaticMarkup(createElement(RichText, { blocks: page.sections[index].blocks }))
      expect(block(html, 'testers')).toContain(body)
    }
  })

  it('never repeats a heading (two regions of the same name fail accessibility checks)', () => {
    const headings = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/g)].map((match) => match[1])
    expect(headings.filter((heading, i) => headings.indexOf(heading) !== i)).toEqual([])
  })

  it('fixes the table’s first column and ships the FAQ as FAQPage', () => {
    if (page.comparison.rows.length > 0) expect(block(html, 'comparison')).toMatch(/<th scope="row" class="sticky left-0/)
    if (page.faq.length > 0) expect(html).toContain('"@type":"FAQPage"')
  })

  it('shows no Amazon image and no price next to a pick', () => {
    expect(html).not.toMatch(AMAZON_IMAGE_HOST)
    for (const id of amazonBlocks) expect(block(html, id), id).not.toMatch(/\d\s?[€£$]|[€£$]\s?\d/)
  })

  it('sets a duel side by side with "Choose … if"', () => {
    if (page.type !== 'duel') return
    const ui = MARKET_PAGE_UI[page.locale]
    expect(block(html, 'picks')).toMatch(/grid-cols-2/)
    for (const pick of page.picks) expect(html).toContain(escaped(ui.chooseIf(pickName(pick))))
  })
})

describe('MarketPagesHubList', () => {
  it('lists each market page on its main hub only, in its own locale', () => {
    for (const page of getMarketPages()) {
      const hub = page.related[0].slice(`/${page.locale}`.length)
      const html = renderToStaticMarkup(createElement(MarketPagesHubList, { lang: page.locale, path: hub }))
      expect(html).toContain(`href="${marketPageHref(page)}"`)
      expect(html).toContain(escaped(MARKET_PAGE_UI[page.locale].hubListTitle))
      const other = page.locale === 'it' ? 'de' : 'it'
      expect(renderToStaticMarkup(createElement(MarketPagesHubList, { lang: other, path: hub }))).not.toContain(`href="${marketPageHref(page)}"`)
      // A secondary hub of the page does not list it.
      for (const secondary of page.related.slice(1)) {
        const path = secondary.slice(`/${page.locale}`.length)
        expect(renderToStaticMarkup(createElement(MarketPagesHubList, { lang: page.locale, path })), secondary).not.toContain(`href="${marketPageHref(page)}"`)
      }
    }
    expect(renderToStaticMarkup(createElement(MarketPagesHubList, { lang: 'fr', path: '/confort-air/ventilateurs' }))).toBe('')
  })
})
