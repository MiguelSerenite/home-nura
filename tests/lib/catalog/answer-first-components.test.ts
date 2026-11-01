import { describe, it, expect } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement, Fragment, isValidElement, type ReactElement, type ReactNode } from 'react'
import CategoryHub from '@/components/CategoryHub'
import { AnswerFirstTop, HubChangelog, HubHeader } from '@/components/answer-first/AnswerFirstHub'
import { amazonAssociateDisclosure } from '@/lib/affiliate-disclosure'
import { AUTHORS } from '@/lib/authors'
import { getCategory, type MetaSiloSlug } from '@/lib/catalog'
import { ANSWER_FIRST_CATEGORIES, ANSWER_FIRST_UI, getAnswerFirstHub, type AnswerFirstHub } from '@/lib/catalog/answer-first'
import { LANGUAGES } from '@/lib/i18n'

const BUY = 'View on Amazon'
const AMAZON_LINK = /<a [^>]*href="https:\/\/www\.amazon\.(?:fr|it)\/[^"]*"[^>]*>/g
const CASES = ANSWER_FIRST_CATEGORIES.flatMap((slug) => LANGUAGES.map((lang) => [slug, lang] as const))
/** Text as React escapes it in the markup. */
const escaped = (text: string) => renderToStaticMarkup(createElement(Fragment, null, text))

/** The HTML of the element with this id, up to the next section. */
function block(html: string, id: string): string {
  const start = html.indexOf(`id="${id}"`)
  expect(start, id).toBeGreaterThan(-1)
  const next = html.slice(start + 1).search(/<section /)
  return next === -1 ? html.slice(start) : html.slice(start, start + 1 + next)
}

/** Every element of a tree returned by a server component, without rendering the components in it. */
function elements(node: ReactNode): ReactElement<Record<string, unknown>>[] {
  if (Array.isArray(node)) return node.flatMap(elements)
  if (!isValidElement<Record<string, unknown>>(node)) return []
  return [node, ...elements(node.props.children as ReactNode)]
}

describe.each(CASES)('%s hub in %s', (slug, lang) => {
  const hub = getAnswerFirstHub(slug, lang) as AnswerFirstHub
  const ui = ANSWER_FIRST_UI[lang]
  const html = renderToStaticMarkup(createElement(AnswerFirstTop, { lang, hub, picksQuestion: 'Q?', buyLabel: BUY }))

  it('puts the jump list, then the picks, the table and the ranking, each linked from the list', () => {
    const order = ['aria-labelledby="contents-title"', 'id="picks"', 'id="comparison"', 'id="ranking"']
    const positions = order.map((marker) => html.indexOf(marker))
    expect(positions.every((p) => p > -1), order.filter((_, i) => positions[i] === -1).join(', ')).toBe(true)
    expect([...positions].sort((a, b) => a - b)).toEqual(positions)
    for (const id of ['picks', 'comparison', 'ranking']) expect(html).toContain(`href="#${id}"`)
    expect(html).not.toContain('id="answer"')
  })

  it('fixes the table’s first column and links its rows to Amazon with the store-neutral button, next to the disclosure', () => {
    const table = block(html, 'comparison')
    expect(table).toMatch(/<th scope="row" class="sticky left-0/)
    const links = table.match(AMAZON_LINK) ?? []
    expect(links.length).toBe(hub.comparison!.rows.filter((r) => r.link).length)
    for (const link of links) {
      expect(link).toContain('rel="sponsored nofollow noopener noreferrer"')
      expect(link).toContain('data-aff-placement="table"')
      expect(link).toContain(`aria-label="${BUY}: `)
    }
    expect(table).toContain(amazonAssociateDisclosure(lang))
    expect(table).not.toMatch(/\d\s?[€£$]|[€£$]\s?\d|\d\s?zł|\d\s?kr\b/)
  })

  it('lists the criteria without weights and links how we compare', () => {
    const ranking = block(html, 'ranking')
    expect(ranking).toContain('data-criteria-unweighted')
    for (const criterion of hub.criteria) expect(ranking).toContain(escaped(criterion))
    expect(ranking).not.toMatch(/\d\s?%/)
    expect(ranking).toContain(`href="/${lang}/methodologie"`)
    expect(ranking).toContain(escaped(ui.rankingIntro))
  })

  it('names the picks block after its count', () => {
    const picks = html.slice(html.indexOf('id="picks"'), html.indexOf('id="comparison"'))
    expect(picks).toContain(escaped(ui.picksLabel(hub.picks.length)))
    expect(picks.match(AMAZON_LINK)?.length ?? 0).toBeGreaterThan(0)
  })
})

describe('answer-first blocks', () => {
  it('show the short answer first when one is written', () => {
    const hub = { ...(getAnswerFirstHub('thermostats', 'fr') as AnswerFirstHub), answer: 'Une réponse courte.' }
    const html = renderToStaticMarkup(createElement(AnswerFirstTop, { lang: 'fr', hub, picksQuestion: 'Q ?', buyLabel: BUY }))
    expect(html.indexOf('id="answer"')).toBeGreaterThan(-1)
    expect(html.indexOf('id="answer"')).toBeLessThan(html.indexOf('id="picks"'))
    expect(html).toContain('Une réponse courte.')
  })

  it('date the header with the page’s date, sign it and link the method', () => {
    const html = renderToStaticMarkup(createElement(HubHeader, { lang: 'us', kicker: 'K', h1: 'Best heaters', modifiedIso: '2026-11-01' }))
    expect(html).toContain('<time dateTime="2026-11-01">Updated November 1, 2026</time>')
    expect(html).toContain(AUTHORS.us.name)
    expect(html).toContain('href="/us/methodologie"')
    expect(html).toMatch(/<h1 [^>]*>Best heaters<\/h1>/)
  })

  it('list the dated changes of the locale, and nothing without one', () => {
    const us = renderToStaticMarkup(createElement(HubChangelog, { lang: 'us', changes: getAnswerFirstHub('thermostats', 'us')!.changelog }))
    expect(us).toContain('id="changelog"')
    expect(us).toContain('<time dateTime="2026-11-01"')
    expect(us).toContain('Picks updated to the models sold in the United States.')
    expect(renderToStaticMarkup(createElement(HubChangelog, { lang: 'fr', changes: [] }))).toBe('')
  })
})

describe('generic hub page (components/CategoryHub.tsx)', () => {
  const GENERIC = ANSWER_FIRST_CATEGORIES.filter((slug) => getCategory(slug)?.metaSilo !== 'cuisine-connectee')

  it.each(GENERIC.flatMap((slug) => LANGUAGES.map((lang) => [slug, lang] as const)))(
    '%s in %s: the visible date is the Article dateModified, every jump link has its block',
    async (slug, lang) => {
      const category = getCategory(slug)!
      const tree = await CategoryHub({ siloSlug: category.metaSilo as MetaSiloSlug, categorySlug: slug, lang, buyLabel: BUY })
      const all = elements(tree)
      const header = all.find((el) => el.type === HubHeader)
      expect(header, 'answer-first header').toBeDefined()
      const article = all
        .map((el) => (el.props.dangerouslySetInnerHTML as { __html?: string } | undefined)?.__html)
        .filter((json): json is string => typeof json === 'string' && json.includes('"@type":"Article"'))
        .map((json) => JSON.parse(json) as { dateModified: string })
      expect(article).toHaveLength(1)
      expect(article[0].dateModified.slice(0, 10)).toBe(header!.props.modifiedIso)
      expect(header!.props.modifiedIso).toBe(getAnswerFirstHub(slug, lang)!.modifiedIso)

      const top = all.find((el) => el.type === AnswerFirstTop)!
      const later = (top.props.laterItems ?? []) as { id: string }[]
      const ids = new Set(all.map((el) => el.props.id).filter(Boolean))
      for (const item of later) expect(ids.has(item.id), item.id).toBe(true)
      expect(all.some((el) => el.type === HubChangelog)).toBe(true)
    },
  )
})
