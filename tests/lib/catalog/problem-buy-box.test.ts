import { describe, it, expect } from 'vitest'
import { amazonMarket } from '@/lib/amazon'
import { PROBLEMS, getCategory, getProblem } from '@/lib/catalog'
import { getProblemBuyBox } from '@/lib/catalog/problem-buy-box'
import { LANGUAGES } from '@/lib/i18n'

// Every locale links to its market with its tracking ID (lib/amazon.ts:
// amazon.it for Italian, amazon.fr with Global Earning elsewhere).
// Resolves the buy box of every problem in every locale (~2 s warm, more
// on a cold CI worker): above the 5 s default would make it flaky.
const ALL_PROBLEMS_TIMEOUT_MS = 30_000

describe('problem page buy box', () => {
  it('links every pick to the locale market with its tracking ID', () => {
    for (const problem of PROBLEMS) {
      for (const lang of LANGUAGES) {
        const box = getProblemBuyBox(problem, lang)
        if (!box) continue
        const market = amazonMarket(lang)
        for (const pick of box.picks) {
          const url = new URL(pick.url)
          expect(url.origin, `${problem.slug} ${lang}`).toBe(market.baseUrl)
          expect(url.searchParams.get('tag'), `${problem.slug} ${lang}`).toBe(market.tag)
          // Product page when the catalog knows the ASIN, else a store search.
          expect(url.pathname, `${problem.slug} ${lang}`).toMatch(/^\/(dp\/[A-Z0-9]{10}|s)$/)
        }
      }
    }
  }, ALL_PROBLEMS_TIMEOUT_MS)

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
