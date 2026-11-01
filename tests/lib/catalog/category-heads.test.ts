import { describe, it, expect } from 'vitest'
import { getIndexableCategories, getCategory, getCategoryHero } from '@/lib/catalog'
import { buildCategorySeo } from '@/lib/catalog/category-guides'
import { CATEGORY_HEADS, HEAD_LOCALES, getCategoryHead } from '@/lib/catalog/category-heads'
import { checkCategoryHead, fold } from '@/lib/catalog/category-heads/quality'
import { LANGUAGES } from '@/lib/i18n'

const INDEXABLE = getIndexableCategories()

describe('category heads', () => {
  it('exist for every indexable category in every head locale (Polish included)', () => {
    const missing = HEAD_LOCALES.flatMap((l) =>
      INDEXABLE.filter((c) => !CATEGORY_HEADS[l][c.slug]).map((c) => `${l}/${c.slug}`),
    )
    expect(missing).toEqual([])
  })

  it('only use known category slugs', () => {
    const unknown = HEAD_LOCALES.flatMap((l) => Object.keys(CATEGORY_HEADS[l]).filter((s) => !getCategory(s)))
    expect(unknown).toEqual([])
  })

  it('follow the SERP rules (lengths, keyword first, 2026, no test claim)', () => {
    const errors = HEAD_LOCALES.flatMap((l) =>
      Object.entries(CATEGORY_HEADS[l]).flatMap(([slug, head]) => checkCategoryHead(`${l}/${slug}`, head)),
    )
    expect(errors).toEqual([])
  })

  it('give every hub a distinct title within a locale', () => {
    for (const l of HEAD_LOCALES) {
      const titles = Object.values(CATEGORY_HEADS[l]).map((h) => h.title.toLowerCase())
      expect(new Set(titles).size, l).toBe(titles.length)
    }
  })

  it('drive the hub SERP title, description and H1', () => {
    for (const cat of INDEXABLE) {
      for (const lang of LANGUAGES) {
        const head = getCategoryHead(cat.slug, lang)!
        expect(buildCategorySeo(cat, lang, [])).toEqual({ title: head.title, description: head.description })
        expect(getCategoryHero(lang, cat).title).toBe(head.h1)
      }
    }
  })

  it('return undefined for an unknown locale or category', () => {
    expect(getCategoryHead('airfryers', 'xx')).toBeUndefined()
    expect(getCategoryHead('no-such-category', 'fr')).toBeUndefined()
  })
})

describe('fold', () => {
  it('ignores case and accents', () => {
    expect(fold('Meilleure Cafetière')).toBe('meilleure cafetiere')
  })
})
