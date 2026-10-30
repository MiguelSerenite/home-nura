import { describe, it, expect } from 'vitest'
import { CATEGORIES } from '@/lib/catalog/categories'
import { INDEPENDENT_SOURCES, SOURCES_CHECKED_ON, TESTER_HOSTS, getIndependentSources } from '@/lib/catalog/independent-sources'
import type { Lang } from '@/lib/i18n'

const categorySlugs = new Set(CATEGORIES.map((c) => c.slug))

describe('independent sources', () => {
  it('only lists known categories', () => {
    for (const slug of Object.keys(INDEPENDENT_SOURCES)) expect(categorySlugs.has(slug), slug).toBe(true)
  })

  it("only links the testers allowed for each locale, by their own name, without tracking", () => {
    for (const [slug, perLang] of Object.entries(INDEPENDENT_SOURCES)) {
      for (const [lang, sources] of Object.entries(perLang)) {
        const hosts = TESTER_HOSTS[lang as Lang] ?? {}
        expect(sources?.length, `${slug}/${lang}`).toBeGreaterThan(0)
        for (const source of sources ?? []) {
          const url = new URL(source.url)
          const where = `${slug}/${lang} ${source.url}`
          expect(url.protocol, where).toBe('https:')
          expect(url.search, where).toBe('')
          expect(hosts[url.hostname], where).toBe(source.publisher)
          expect(source.title.trim(), where).not.toBe('')
        }
      }
    }
  })

  it('links each tester at most once per category', () => {
    for (const [slug, perLang] of Object.entries(INDEPENDENT_SOURCES)) {
      for (const [lang, sources] of Object.entries(perLang)) {
        const publishers = (sources ?? []).map((s) => s.publisher)
        expect(new Set(publishers).size, `${slug}/${lang}`).toBe(publishers.length)
      }
    }
  })

  it('records when the links were checked', () => {
    expect(SOURCES_CHECKED_ON).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it('returns nothing for a locale or category without sources', () => {
    expect(getIndependentSources('airfryers', 'de').length).toBeGreaterThan(0)
    expect(getIndependentSources('airfryers', 'fr')).toEqual([])
    expect(getIndependentSources('does-not-exist', 'de')).toEqual([])
  })
})
