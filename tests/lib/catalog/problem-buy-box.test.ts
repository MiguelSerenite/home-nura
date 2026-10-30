import { describe, it, expect } from 'vitest'
import { PROBLEMS, getCategory, getProblem } from '@/lib/catalog'
import { getProblemBuyBox } from '@/lib/catalog/problem-buy-box'
import { LANGUAGES } from '@/lib/i18n'

// One partner tag per Amazon store (see PARTNER_TAGS in lib/products.ts).
const STORE_BY_LANG = {
  fr: { host: 'www.amazon.fr', tag: 'homenuraen05-21' },
  de: { host: 'www.amazon.de', tag: 'homenuraen00-21' },
  en: { host: 'www.amazon.co.uk', tag: 'homenuraen-21' },
  es: { host: 'www.amazon.es', tag: 'homenuraen0a-21' },
  it: { host: 'www.amazon.it', tag: 'homenuraen010-21' },
  nl: { host: 'www.amazon.nl', tag: 'homenuranl-21' },
} as const

describe('problem page buy box', () => {
  it('links every pick to the reader’s Amazon store with that store’s partner tag', () => {
    for (const problem of PROBLEMS) {
      for (const lang of LANGUAGES) {
        const box = getProblemBuyBox(problem, lang)
        if (!box) continue
        for (const pick of box.picks) {
          const url = new URL(pick.url)
          expect(url.host, `${problem.slug} ${lang}`).toBe(STORE_BY_LANG[lang].host)
          expect(url.searchParams.get('tag'), `${problem.slug} ${lang}`).toBe(STORE_BY_LANG[lang].tag)
          // Product page when the catalog knows the ASIN, else a store search.
          expect(url.pathname, `${problem.slug} ${lang}`).toMatch(/^\/(dp\/[A-Z0-9]{10}|s)$/)
        }
      }
    }
  })

  it('shows at most three picks, all named', () => {
    for (const problem of PROBLEMS) {
      const box = getProblemBuyBox(problem, 'fr')
      if (!box) continue
      expect(box.picks.length).toBeGreaterThan(0)
      expect(box.picks.length).toBeLessThanOrEqual(3)
      box.picks.forEach((p) => expect(p.model.trim().length).toBeGreaterThan(0))
    }
  })

  it('covers the problems of every category that accepts affiliate links', () => {
    const uncovered = PROBLEMS.filter(
      (p) => !getCategory(p.categorySlug)?.reviewOnly && !getProblemBuyBox(p, 'fr'),
    ).map((p) => p.slug)
    expect(uncovered).toEqual([])
  })

  it('never pushes products on review-only categories', () => {
    const reviewOnly = PROBLEMS.filter((p) => getCategory(p.categorySlug)?.reviewOnly)
    expect(reviewOnly.length).toBeGreaterThan(0)
    for (const problem of reviewOnly) {
      expect(getProblemBuyBox(problem, 'fr'), problem.slug).toBeNull()
    }
  })

  it('points to the localized buying guide the picks come from', () => {
    const problem = PROBLEMS.find((p) => p.categorySlug === 'purificateurs-air')!
    for (const lang of LANGUAGES) {
      const box = getProblemBuyBox(problem, lang)
      expect(box?.guide?.href).toBe(`/${lang}/blog/comparatif-purificateur-air-allergie`)
    }
  })

  it('returns null for an unknown category', () => {
    const problem = { ...getProblem(PROBLEMS[0].slug)!, categorySlug: '__unknown__' }
    expect(getProblemBuyBox(problem, 'fr')).toBeNull()
  })
})
