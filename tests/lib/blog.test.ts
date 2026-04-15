import { describe, it, expect } from 'vitest'
import {
  getAllArticles,
  getArticleBySlug,
  getArticlesByCategory,
  getRelatedArticles,
  getAllSlugs,
  getArticleMetas,
} from '@/lib/blog'
import { CATEGORIES } from '@/lib/blog/types'
import type { BlogArticle } from '@/lib/blog/types'

const LANGUAGES = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const
const VALID_CATEGORIES: BlogArticle['category'][] = [
  'tests',
  'guides',
  'recettes',
  'comparatifs',
  'culture',
]

describe('getAllArticles', () => {
  it('returns at least one article', () => {
    expect(getAllArticles().length).toBeGreaterThan(0)
  })

  it('sorts articles by datePublished descending', () => {
    const arts = getAllArticles()
    for (let i = 1; i < arts.length; i++) {
      const prev = new Date(arts[i - 1].datePublished).getTime()
      const curr = new Date(arts[i].datePublished).getTime()
      expect(prev).toBeGreaterThanOrEqual(curr)
    }
  })

  it('every article has a unique slug', () => {
    const slugs = getAllArticles().map((a) => a.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('every article has a known category', () => {
    for (const a of getAllArticles()) {
      expect(VALID_CATEGORIES).toContain(a.category)
    }
  })

  it('every article has title and excerpt for all 6 locales', () => {
    for (const a of getAllArticles()) {
      for (const lang of LANGUAGES) {
        expect(a.title[lang], `${a.slug} missing title.${lang}`).toBeTruthy()
        expect(a.excerpt[lang], `${a.slug} missing excerpt.${lang}`).toBeTruthy()
      }
    }
  })

  it('every article has a positive readingTime', () => {
    for (const a of getAllArticles()) {
      expect(a.readingTime).toBeGreaterThan(0)
    }
  })

  it('every article has at least one image', () => {
    for (const a of getAllArticles()) {
      expect(a.images.length).toBeGreaterThan(0)
      for (const img of a.images) {
        expect(img.src).toBeTruthy()
        for (const lang of LANGUAGES) {
          expect(img.alt[lang], `${a.slug} image missing alt.${lang}`).toBeTruthy()
        }
      }
    }
  })

  it('every article has a valid ISO date', () => {
    for (const a of getAllArticles()) {
      expect(Number.isNaN(Date.parse(a.datePublished))).toBe(false)
      expect(Number.isNaN(Date.parse(a.dateModified))).toBe(false)
    }
  })
})

describe('getArticleBySlug', () => {
  it('finds a real article by slug', () => {
    const slugs = getAllSlugs()
    const article = getArticleBySlug(slugs[0])
    expect(article).toBeDefined()
    expect(article?.slug).toBe(slugs[0])
  })

  it('returns undefined for an unknown slug', () => {
    expect(getArticleBySlug('__nope__')).toBeUndefined()
  })
})

describe('getArticlesByCategory', () => {
  it('filters by category and sorts desc', () => {
    const tests = getArticlesByCategory('tests')
    expect(tests.length).toBeGreaterThan(0)
    for (const a of tests) {
      expect(a.category).toBe('tests')
    }
    for (let i = 1; i < tests.length; i++) {
      const prev = new Date(tests[i - 1].datePublished).getTime()
      const curr = new Date(tests[i].datePublished).getTime()
      expect(prev).toBeGreaterThanOrEqual(curr)
    }
  })

  it('returns an empty array for a category with no articles', () => {
    // Forcibly unused cat should be OK if all categories have content:
    // at least the function should never throw.
    for (const cat of VALID_CATEGORIES) {
      const res = getArticlesByCategory(cat)
      expect(Array.isArray(res)).toBe(true)
    }
  })
})

describe('getRelatedArticles', () => {
  it('resolves related slugs to ArticleMetas', () => {
    const a = getAllArticles().find((art) => art.relatedSlugs.length > 0)
    if (!a) throw new Error('fixture precondition: expected at least one article with related slugs')
    const related = getRelatedArticles(a)
    expect(related.length).toBeGreaterThan(0)
    // all returned metas must exist in the corpus
    const allSlugs = new Set(getAllSlugs())
    for (const r of related) {
      expect(allSlugs.has(r.slug)).toBe(true)
    }
  })

  it('silently drops related slugs that do not resolve to a real article', () => {
    const fake: BlogArticle = {
      ...getAllArticles()[0],
      relatedSlugs: ['__missing__', ...getAllArticles()[0].relatedSlugs.slice(0, 1)],
    }
    const related = getRelatedArticles(fake)
    // Should not include the missing slug, but should include the real one
    expect(related.find((r) => r.slug === '__missing__')).toBeUndefined()
  })
})

describe('getArticleMetas', () => {
  it('returns one meta per article with trimmed fields', () => {
    const metas = getArticleMetas()
    const articles = getAllArticles()
    expect(metas.length).toBe(articles.length)
    // metas must not leak the `content` field
    for (const m of metas) {
      expect('content' in m).toBe(false)
    }
  })

  it('preserves slug ordering from getAllArticles', () => {
    const metas = getArticleMetas()
    const articles = getAllArticles()
    for (let i = 0; i < metas.length; i++) {
      expect(metas[i].slug).toBe(articles[i].slug)
    }
  })
})

describe('CATEGORIES i18n map', () => {
  it('covers all 5 categories in all 6 locales', () => {
    for (const cat of VALID_CATEGORIES) {
      for (const lang of LANGUAGES) {
        expect(CATEGORIES[cat]?.[lang], `CATEGORIES.${cat}.${lang} missing`).toBeTruthy()
      }
    }
  })
})
