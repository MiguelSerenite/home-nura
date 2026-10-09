import { describe, it, expect } from 'vitest'
import { getAllSlugs } from '@/lib/blog'
import { CATEGORY_GUIDES, getCategoryGuides, buildCategorySeo } from '@/lib/catalog/category-guides'
import { getCategory } from '@/lib/catalog/categories'
import { LANGUAGES } from '@/lib/i18n'

describe('category guides', () => {
  it('only maps existing, indexable categories to existing articles', () => {
    const slugs = new Set(getAllSlugs())
    for (const [category, entry] of Object.entries(CATEGORY_GUIDES)) {
      expect(getCategory(category)?.indexable, category).toBe(true)
      for (const slug of [entry.primary, ...entry.related].filter(Boolean)) {
        expect(slugs.has(slug as string), `${category} → ${slug}`).toBe(true)
      }
    }
  })

  it('gives the motion sensor page guides but no verdict borrowed from alarm kits', () => {
    const guides = getCategoryGuides('detecteurs-mouvement', 'en')
    expect(guides.picks).toEqual([])
    expect(guides.articles.length).toBeGreaterThan(0)
  })

  it('surfaces the air purifier verdict with Amazon links in every locale', () => {
    for (const lang of LANGUAGES) {
      const { picks, articles } = getCategoryGuides('purificateurs-air', lang)
      expect(picks.length, lang).toBeGreaterThanOrEqual(2)
      picks.forEach((p) => expect(p.url).toMatch(/^https:\/\/www\.amazon\./))
      expect(articles[0].href).toBe(`/${lang}/blog/comparatif-purificateur-air-allergie`)
      expect(articles[0].title.length).toBeGreaterThan(0)
    }
  })

  it('returns nothing for unmapped categories', () => {
    expect(getCategoryGuides('laveurs-vitres', 'fr')).toEqual({ picks: [], articles: [] })
  })
})

describe('category SEO title and description', () => {
  const cat = getCategory('purificateurs-air')!

  it('targets "best X 2026" and names the picks in the snippet', () => {
    const seo = buildCategorySeo(cat, 'en', ['Levoit Core 300S', 'Philips 2000i'])
    expect(seo.title).toMatch(/^Best Air Purifiers 2026/)
    expect(seo.description).toContain('Levoit Core 300S')
    expect(seo.description.length).toBeLessThanOrEqual(160)
  })

  it('falls back to a generic snippet when no picks exist', () => {
    const seo = buildCategorySeo(getCategory('detecteurs-mouvement')!, 'fr', [])
    expect(seo.title).toMatch(/Détecteurs de Mouvement/i)
    expect(seo.description.length).toBeGreaterThan(80)
  })

  it('stays within 60 characters (before brand) in every locale', () => {
    for (const lang of LANGUAGES) {
      const { title } = buildCategorySeo(cat, lang, [])
      expect(title.length, `${lang}: ${title}`).toBeLessThanOrEqual(60)
    }
  })
})

describe('category SEO keyword cleanup', () => {
  it('never doubles "best" when the keyword already contains it', () => {
    const { description } = buildCategorySeo(getCategory('purificateurs-air')!, 'en', ['A', 'B'])
    expect(description).not.toMatch(/which best/i)
  })
})

describe('category SEO honesty', () => {
  it('does not promise "our picks" on a page without picks', () => {
    const { title } = buildCategorySeo(getCategory('detecteurs-mouvement')!, 'en', [])
    expect(title).toBe('Best Motion Sensors 2026: Comparison')
  })
})
