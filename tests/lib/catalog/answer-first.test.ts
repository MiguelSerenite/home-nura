import { describe, it, expect } from 'vitest'
import { getArticleModels } from '@/lib/blog/article-models'
import { QUICK_ANSWERS } from '@/lib/blog/quick-answers'
import { getCategory, isCategoryIndexableIn } from '@/lib/catalog'
import {
  ANSWER_FIRST_CATEGORIES,
  ANSWER_FIRST_UI,
  HUB_ANSWERS,
  HUB_CHANGELOG,
  countWords,
  getAnswerFirstHub,
  getHubAnswer,
  getHubChangelog,
  getHubComparison,
  getHubCriteria,
  hubModifiedIso,
  isAnswerFirstCategory,
  type HubChangelogEntry,
} from '@/lib/catalog/answer-first'
import { ANSWER_MAX_WORDS, ANSWER_MIN_WORDS, MIN_TABLE_ROWS } from '@/lib/catalog/answer-first/config'
import { cellText, firstTable, guideTable } from '@/lib/catalog/answer-first/comparison'
import { isBestForColumn } from '@/lib/catalog/answer-first/criteria'
import { CATEGORY_GUIDES } from '@/lib/catalog/category-guides'
import { categoryModifiedIso } from '@/lib/catalog/category-faqs'
import { LANGUAGES, type Lang } from '@/lib/i18n'
import { isSoldAsIs, marketDecision, NORTH_AMERICAN_MARKETS } from '@/lib/market-models'
import { SITE_LAST_UPDATED_ISO } from '@/lib/seo'

const EUROPEAN = LANGUAGES.filter((l) => l !== 'us' && l !== 'ca')
const CASES = ANSWER_FIRST_CATEGORIES.flatMap((slug) => LANGUAGES.map((lang) => [slug, lang] as const))
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/

describe('answer-first config', () => {
  it('covers the six seasonal categories, each indexed everywhere with a primary guide', () => {
    expect([...ANSWER_FIRST_CATEGORIES].sort()).toEqual(
      ['aspirateurs-robots', 'cafetieres', 'chauffages-appoint', 'deshumidificateurs', 'purificateurs-air', 'thermostats'],
    )
    for (const slug of ANSWER_FIRST_CATEGORIES) {
      const category = getCategory(slug)
      expect(category, slug).toBeDefined()
      for (const lang of LANGUAGES) expect(isCategoryIndexableIn(category!, lang), `${lang}/${slug}`).toBe(true)
      expect(CATEGORY_GUIDES[slug]?.primary, slug).toBeTruthy()
    }
    expect(isAnswerFirstCategory('alarmes')).toBe(false)
    expect(getAnswerFirstHub('alarmes', 'fr')).toBeNull()
  })
})

describe('comparison table parsing', () => {
  it('reads the first table: header cells, rows with one cell per column, entities decoded, tags dropped', () => {
    const html = `<p>Intro</p><table><thead><tr><th>Model</th><th>Power &amp; heat</th></tr></thead><tbody>
      <tr><td><strong>Alpha&nbsp;1</strong></td><td>2&nbsp;kW</td></tr>
      <tr><td>Broken row</td></tr>
      <tr><td>Beta 2</td><td>De&#39;Longhi</td></tr></tbody></table><table><tr><th>Other</th><th>x</th></tr></table>`
    expect(firstTable(html)).toEqual({ columns: ['Model', 'Power & heat'], rows: [['Alpha 1', '2 kW'], ['Beta 2', "De'Longhi"]] })
    expect(firstTable('<p>No table here</p>')).toBeNull()
    expect(cellText('  <em>a</em>\n  b ')).toBe('a b')
  })
})

describe.each(CASES)('%s hub in %s', (slug, lang) => {
  const comparison = getHubComparison(slug, lang)

  it(`shows a comparison table of at least ${MIN_TABLE_ROWS} models, one cell per column`, () => {
    expect(comparison).not.toBeNull()
    expect(comparison!.rows.length).toBeGreaterThanOrEqual(MIN_TABLE_ROWS)
    for (const row of comparison!.rows) {
      expect(row.cells.length + 1, row.model).toBe(comparison!.columns.length)
      expect(row.model.length).toBeGreaterThan(0)
      if (row.link) expect(row.link.url).toMatch(/^https:\/\/www\.amazon\.(fr|it)\//)
    }
  })

  it('lists the criteria of its guide’s table, without the model and "best for" columns, and no weight', () => {
    const table = guideTable(slug, lang)
    expect(table, 'the primary guide has a table in this locale').not.toBeNull()
    expect(isBestForColumn(table!.columns.at(-1)!, lang), `last column "${table!.columns.at(-1)}"`).toBe(true)
    const criteria = getHubCriteria(slug, lang)
    expect(criteria).toEqual(table!.columns.slice(1, -1))
    expect(criteria.length).toBeGreaterThan(0)
  })

  it('heads its picks with the guide’s own verdict question in this locale', () => {
    const hub = getAnswerFirstHub(slug, lang)!
    expect(hub.picks.length).toBeGreaterThanOrEqual(2)
    expect(hub.picksQuestion).toBe(QUICK_ANSWERS[CATEGORY_GUIDES[slug].primary!].question[lang])
  })

  it('dates the page with its newest change, never before its FAQ date', () => {
    const iso = hubModifiedIso(slug, lang)
    expect(iso).toMatch(ISO_DAY)
    expect(iso >= categoryModifiedIso(slug, SITE_LAST_UPDATED_ISO)).toBe(true)
    const newest = getHubChangelog(slug, lang)[0]?.date
    if (newest) expect(iso >= newest).toBe(true)
    expect(getAnswerFirstHub(slug, lang)?.modifiedIso).toBe(iso)
  })
})

describe('European hubs', () => {
  it.each(ANSWER_FIRST_CATEGORIES.flatMap((slug) => EUROPEAN.map((lang) => [slug, lang] as const)))(
    '%s in %s: the guide’s own table, every row of it',
    (slug, lang) => {
      const comparison = getHubComparison(slug, lang)!
      expect(comparison.source).toBe('guide')
      expect(comparison.rows.map((r) => r.model)).toEqual(guideTable(slug, lang)!.rows.map((r) => r[0]))
      expect(comparison.rows.filter((r) => r.link).length).toBeGreaterThanOrEqual(MIN_TABLE_ROWS)
    },
  )
})

describe('US and Canadian hubs', () => {
  const NA_CASES = ANSWER_FIRST_CATEGORIES.flatMap((slug) => NORTH_AMERICAN_MARKETS.map((market) => [slug, market] as const))

  it.each(NA_CASES)('%s in %s: never names a European model the market does not sell', (slug, market) => {
    const comparison = getHubComparison(slug, market)!
    const unsold = getArticleModels(CATEGORY_GUIDES[slug].primary!).filter((model) => !isSoldAsIs(marketDecision(market, model)))
    for (const row of comparison.rows) {
      expect(row.link, row.model).not.toBeNull()
      expect(unsold, row.model).not.toContain(row.model)
    }
  })

  it('compare the market’s own picks when the guide’s models are not sold there (heaters, dehumidifiers, thermostats)', () => {
    for (const slug of ['chauffages-appoint', 'deshumidificateurs', 'thermostats']) {
      for (const market of NORTH_AMERICAN_MARKETS) {
        const comparison = getHubComparison(slug, market)!
        const ui = ANSWER_FIRST_UI[market]
        expect(comparison.source, `${market}/${slug}`).toBe('picks')
        expect(comparison.columns).toEqual([ui.modelColumn, ui.roleColumn, ui.whyColumn])
        expect(comparison.rows.map((r) => r.model)).toEqual(getAnswerFirstHub(slug, market)!.picks.map((p) => p.model))
      }
    }
  })

  it('keep the guide’s rows the market sells, under their North-American names (US purifiers)', () => {
    const comparison = getHubComparison('purificateurs-air', 'us')!
    expect(comparison.source).toBe('guide')
    expect(comparison.rows.map((r) => r.model)).toContain('Levoit Core 400S-P')
    expect(comparison.rows.map((r) => r.model)).not.toContain('Xiaomi Smart Air Purifier 4')
  })
})

describe('changelog', () => {
  it('has dated entries naming answer-first categories, with a note per locale it shows in', () => {
    for (const entry of HUB_CHANGELOG) {
      expect(entry.date).toMatch(ISO_DAY)
      expect(Number.isNaN(Date.parse(entry.date))).toBe(false)
      expect(entry.categories.length).toBeGreaterThan(0)
      for (const slug of entry.categories) expect(isAnswerFirstCategory(slug), slug).toBe(true)
      const notes = Object.entries(entry.note)
      expect(notes.length).toBeGreaterThan(0)
      for (const [lang, note] of notes) {
        expect(LANGUAGES as readonly string[]).toContain(lang)
        expect(note!.trim().length, `${entry.date} ${lang}`).toBeGreaterThan(10)
      }
    }
  })

  it('starts with the North-American picks of 1 November 2026, in the US and Canada only', () => {
    for (const slug of ANSWER_FIRST_CATEGORIES) {
      expect(getHubChangelog(slug, 'us')[0]).toEqual({ date: '2026-11-01', note: 'Picks updated to the models sold in the United States.' })
      expect(getHubChangelog(slug, 'ca')[0]).toEqual({ date: '2026-11-01', note: 'Picks updated to the models sold in Canada.' })
      for (const lang of EUROPEAN) expect(getHubChangelog(slug, lang), `${lang}/${slug}`).toEqual([])
    }
  })

  it('sorts a hub’s changes newest first and moves its date to the newest one', () => {
    const log: HubChangelogEntry[] = [
      { date: '2026-12-01', categories: ['thermostats'], note: { fr: 'Nouveau duel ajouté.' } },
      { date: '2027-01-15', categories: ['thermostats'], note: { fr: 'Sélection revue pour l’hiver.' } },
      { date: '2027-02-01', categories: ['alarmes'], note: { fr: 'Ailleurs.' } },
    ]
    expect(getHubChangelog('thermostats', 'fr', log).map((c) => c.date)).toEqual(['2027-01-15', '2026-12-01'])
    expect(hubModifiedIso('thermostats', 'fr', log)).toBe('2027-01-15')
    expect(hubModifiedIso('thermostats', 'de', log)).toBe(categoryModifiedIso('thermostats', SITE_LAST_UPDATED_ISO))
  })
})

describe('short answer slot', () => {
  it('is empty until the native editors deliver: no answer box', () => {
    for (const [slug, lang] of CASES) expect(getAnswerFirstHub(slug, lang)?.answer ?? null).toBe(getHubAnswer(slug, lang))
  })

  it(`keeps every written answer between ${ANSWER_MIN_WORDS} and ${ANSWER_MAX_WORDS} words, without a model price or a "test" claim`, () => {
    for (const [slug, answers] of Object.entries(HUB_ANSWERS)) {
      for (const [lang, text] of Object.entries(answers ?? {})) {
        const words = countWords(text ?? '')
        expect(words, `${lang}/${slug}: ${words} words`).toBeGreaterThanOrEqual(ANSWER_MIN_WORDS)
        expect(words, `${lang}/${slug}: ${words} words`).toBeLessThanOrEqual(ANSWER_MAX_WORDS)
        expect(text, `${lang}/${slug}`).not.toMatch(/(^|[^\p{L}])(test|getest|przetest)/iu)
      }
    }
  })

  it('serves an answer for its locale only', () => {
    const answers = { thermostats: { fr: 'Une réponse.' } }
    expect(getHubAnswer('thermostats', 'fr', answers)).toBe('Une réponse.')
    expect(getHubAnswer('thermostats', 'de' as Lang, answers)).toBeNull()
    expect(countWords('  un  deux\ntrois ')).toBe(3)
  })
})
