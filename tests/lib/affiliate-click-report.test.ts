import { describe, it, expect } from 'vitest'
import { amazonMarket } from '@/lib/amazon'
import { countBy, crossTab, extractClicks, formatClickReport, NO_VALUE } from '@/lib/affiliate-click-report'

const DE = amazonMarket('de')
const IT = amazonMarket('it')

function logLine(fields: Record<string, unknown>): string {
  return JSON.stringify({ event: 'affiliate_click', at: '2026-11-02T10:00:00.000Z', path: '/de/blog/x', articleSlug: 'x', ...fields })
}

const tableDe = logLine({ lang: 'de', market: 'de', placement: 'table', surface: null, model: 'Ninja AF300', store: 'amazon.fr', tag: DE.tag })
const picksIt = logLine({ at: '2026-11-03T08:00:00.000Z', path: '/it', lang: 'it', market: 'it', placement: 'picks', surface: null, model: 'Cosori', store: 'amazon.it', tag: IT.tag })

describe('extractClicks', () => {
  it('reads `vercel logs --json` output, where the click is the log message', () => {
    const text = [
      JSON.stringify({ type: 'log', data: { level: 'info', message: tableDe, requestPath: '/api/click' } }),
      JSON.stringify({ type: 'log', data: { level: 'info', message: '{"event":"web_vital","name":"LCP"}' } }),
      JSON.stringify({ type: 'summary', recordsReturned: 2, pagination: { hasMore: false, next: null } }),
    ].join('\n')
    expect(extractClicks(text)).toEqual([
      { at: '2026-11-02T10:00:00.000Z', path: '/de/blog/x', lang: 'de', market: 'de', placement: 'table', surface: NO_VALUE, model: 'Ninja AF300', store: 'amazon.fr', tag: DE.tag },
    ])
  })

  it('reads raw log lines copied from the dashboard and a JSON array export', () => {
    const raw = `2026-11-02 10:00:00 INFO ${tableDe}\nunrelated line\n\n${picksIt}`
    expect(extractClicks(raw).map((c) => c.placement)).toEqual(['table', 'picks'])
    const exported = JSON.stringify([{ message: tableDe }, { message: picksIt }, { message: 'GET /api/click 204' }], null, 2)
    expect(extractClicks(exported).map((c) => c.market)).toEqual(['de', 'it'])
  })

  it('counts a log record once even when it repeats the message', () => {
    const text = JSON.stringify({ type: 'log', data: { message: tableDe, raw: { message: tableDe } } })
    expect(extractClicks(text)).toHaveLength(1)
  })

  it('reads lines logged before placements: no placement, store under `marketplace`, market from the language', () => {
    const old = JSON.stringify({ event: 'affiliate_click', at: '2026-10-31T09:00:00.000Z', path: '/en/blog/y', lang: 'en', surface: 'verdict', model: 'Levoit', marketplace: 'amazon.fr' })
    expect(extractClicks(old)).toEqual([
      { at: '2026-10-31T09:00:00.000Z', path: '/en/blog/y', lang: 'en', market: 'uk', placement: NO_VALUE, surface: 'verdict', model: 'Levoit', store: 'amazon.fr', tag: NO_VALUE },
    ])
  })

  it('reads clicks whose model has braces or escaped quotes', () => {
    const odd = logLine({ lang: 'de', market: 'de', placement: 'card', model: 'Foo {Pro} 5L "XL"', store: 'amazon.fr', tag: DE.tag })
    const jsonl = JSON.stringify({ message: odd })
    expect(extractClicks(jsonl).map((c) => c.model)).toEqual(['Foo {Pro} 5L "XL"'])
    expect(extractClicks(`INFO ${odd}`).map((c) => c.model)).toEqual(['Foo {Pro} 5L "XL"'])
  })

  it('strips control and invisible characters from the values it prints', () => {
    const forged = logLine({ path: '/fr/\u001b]0;x\u0007y\u202e', lang: 'fr', placement: 'card', model: 'M', store: 'amazon.fr', tag: 'x' })
    const [click] = extractClicks(forged)
    expect(click.path).toBe('/fr/]0;xy')
    expect(formatClickReport([click])).not.toMatch(/[\u001b\u0007\u202e]/)
  })

  it('ignores invalid JSON and other events', () => {
    expect(extractClicks('{"event":"affiliate_click", broken\n{"event":"newsletter"}')).toEqual([])
  })
})

describe('counts', () => {
  const clicks = extractClicks([tableDe, tableDe, picksIt].join('\n'))

  it('counts by one field, most clicked first', () => {
    expect(countBy(clicks, 'placement')).toEqual([
      ['table', 2],
      ['picks', 1],
    ])
  })

  it('crosses two fields', () => {
    expect(crossTab(clicks, 'placement', 'market')).toEqual({
      rows: ['table', 'picks'],
      cols: ['de', 'it'],
      counts: { table: { de: 2 }, picks: { it: 1 } },
    })
  })

  it('prints a report by placement, market, store and tracking ID', () => {
    const report = formatClickReport(clicks)
    expect(report).toContain('3 clics affiliés')
    expect(report).toContain('2026-11-02T10:00:00.000Z → 2026-11-03T08:00:00.000Z')
    for (const heading of ['Par emplacement', 'Par marché', 'Par boutique', 'Par identifiant de suivi', 'Emplacement × marché', 'Emplacement × position']) {
      expect(report).toContain(heading)
    }
    expect(report).toMatch(/table\s+2\s+66,7 %/)
    expect(report).toContain(IT.tag)
  })

  it('says so when no click was found', () => {
    expect(formatClickReport([])).toContain('Aucun clic affilié')
  })
})
