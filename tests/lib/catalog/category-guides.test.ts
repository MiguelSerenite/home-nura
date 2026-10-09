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

  it('takes motion sensor picks from the motion sensor guide, never from alarm kits', () => {
    const guides = getCategoryGuides('detecteurs-mouvement', 'en')
    expect(CATEGORY_GUIDES['detecteurs-mouvement'].primary).toBe('detecteur-mouvement-connecte-comparatif')
    expect(guides.picks.map((p) => p.model)).not.toContain('Ajax StarterKit')
    expect(guides.articles.length).toBeGreaterThan(1)
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
    expect(getCategoryGuides('__unknown__', 'fr')).toEqual({ picks: [], articles: [] })
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

describe('category picks match the category', () => {
  it('never uses an article whose verdict mixes product types as a primary guide', () => {
    const mixed: Record<string, string> = {
      'climatiseurs-mobiles': 'climatiseur-mobile-vs-ventilateur',
      'hubs-domotique': 'maison-connectee-matter-thread-2026',
      'barbecues-connectes': 'barbecue-connecte-thermometre-guide',
      'compteurs-energie': 'comparatif-smart-plugs-mesure-energie',
    }
    for (const [category, article] of Object.entries(mixed)) {
      expect(CATEGORY_GUIDES[category]?.primary, category).not.toBe(article)
    }
  })

  it('reads naturally when the keyword carries a qualifier (alarm without subscription)', () => {
    const { description } = buildCategorySeo(getCategory('alarmes')!, 'en', ['Ajax StarterKit', 'Eufy HomeBase S380'])
    expect(description).not.toMatch(/no subscription to buy/)
    expect(description).toMatch(/^Our 2026 picks: Ajax StarterKit/)
  })
})
