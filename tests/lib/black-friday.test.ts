import { describe, it, expect } from 'vitest'
import {
  AMAZON_BLACK_FRIDAY_URL,
  AMAZON_PRIME_TRIAL_URL,
  BLACK_FRIDAY_CATEGORIES,
  BLACK_FRIDAY_PATHS,
  blackFridayAmazonUrl,
  getBlackFridayCategoriesForSilo,
  getBlackFridayCategory,
  getBlackFridayCategoryForHub,
  getBlackFridayLinks,
  getBlackFridayPicks,
  isBlackFridaySeason,
  primeTrialUrl,
} from '@/lib/black-friday'
import { HUB_COPY, PRIME_COPY_FR } from '@/lib/black-friday/copy/hub'
import { UI } from '@/lib/black-friday/copy/ui'
import { getArticleBySlug } from '@/lib/blog'
import { getQuickAnswer, QUICK_ANSWERS } from '@/lib/blog/quick-answers'
import { getCategory } from '@/lib/catalog'
import { buildLlmsTxt } from '@/lib/llms'
import { LANGUAGES } from '@/lib/i18n'
import { BASE_URL } from '@/lib/seo'

// Global Earning: every Amazon link points to amazon.fr with the French tag.
const AMAZON_FR = /^https:\/\/www\.amazon\.fr\/(dp\/[A-Z0-9]{10}\?|s\?k=[^&]+&)tag=homenuraen05-21$/

/** Every string a visitor reads on the Black Friday pages, per language. */
function visibleCopy(lang: (typeof LANGUAGES)[number]): string[] {
  const hub = HUB_COPY[lang]
  const strings: string[] = [
    ...Object.values(UI[lang]),
    hub.metaTitle, hub.metaDescription, hub.h1, hub.intro, hub.dealTitle, hub.categoriesTitle,
    hub.amazonTitle, hub.amazonText, hub.amazonCta,
    ...hub.dealTips.flatMap((t) => [t.title, t.text]),
    ...hub.faq.flatMap((f) => [f.question, f.answer]),
  ]
  if (lang === 'fr') strings.push(...Object.values(PRIME_COPY_FR))
  for (const category of BLACK_FRIDAY_CATEGORIES) {
    const c = category.copy[lang]
    strings.push(c.name, c.h1, c.metaTitle, c.metaDescription, c.blurb, c.intro, ...c.faq.flatMap((f) => [f.question, f.answer]))
    strings.push(...getBlackFridayPicks(category, lang).flatMap((p) => [p.model, p.role, p.why]))
  }
  return strings
}

describe('Black Friday picks', () => {
  it('has 3 to 6 picks per category, with unique slugs', () => {
    expect(new Set(BLACK_FRIDAY_CATEGORIES.map((c) => c.slug)).size).toBe(BLACK_FRIDAY_CATEGORIES.length)
    for (const category of BLACK_FRIDAY_CATEGORIES) {
      expect(category.picks.length, category.slug).toBeGreaterThanOrEqual(3)
      expect(category.picks.length, category.slug).toBeLessThanOrEqual(6)
    }
  })

  it('only reuses models from existing verdicts (nothing invented)', () => {
    for (const category of BLACK_FRIDAY_CATEGORIES) {
      for (const ref of category.picks) {
        const verdictModels = QUICK_ANSWERS[ref.article]?.picks.map((p) => p.model) ?? []
        expect(verdictModels, `${category.slug}: ${ref.model}`).toContain(ref.model)
      }
    }
  })

  it('resolves every pick in all 6 languages with the verdict name and reason', () => {
    for (const category of BLACK_FRIDAY_CATEGORIES) {
      for (const lang of LANGUAGES) {
        const picks = getBlackFridayPicks(category, lang)
        expect(picks, `${lang}/${category.slug}`).toHaveLength(category.picks.length)
        picks.forEach((pick, i) => {
          const ref = category.picks[i]
          const verdict = getQuickAnswer(getArticleBySlug(ref.article)!, lang)!
          const source = verdict.picks.find((p) => p.model === pick.model)
          expect(source, `${lang}/${ref.model}`).toBeDefined()
          expect(pick.why).toBe(source!.why)
          expect(pick.role).toBe(ref.role?.[lang] ?? source!.role)
          expect(pick.guide.href).toBe(`/${lang}/blog/${ref.article}`)
        })
      }
    }
  })

  it('links every pick to amazon.fr with the French tag, product page when the ASIN is known', () => {
    for (const category of BLACK_FRIDAY_CATEGORIES) {
      for (const lang of LANGUAGES) {
        for (const pick of getBlackFridayPicks(category, lang)) {
          expect(pick.url, `${lang}/${pick.model}`).toMatch(AMAZON_FR)
          if (pick.asin) expect(pick.url).toBe(`https://www.amazon.fr/dp/${pick.asin}?tag=homenuraen05-21`)
          else expect(new URL(pick.url).searchParams.get('k')).toBe(category.picks.find((r) => r.model === pick.model)?.model)
        }
      }
    }
  })

  it('keeps the catalog ASIN for catalog products (air fryers, coffee machines)', () => {
    const coffee = getBlackFridayPicks(getBlackFridayCategory('cafetieres-a-grain')!, 'de')
    expect(coffee.map((p) => p.asin)).toEqual(['B0CH9X5WSF', 'B0DV9M7MY5', 'B07X9ZJ536'])
    const airfryers = getBlackFridayPicks(getBlackFridayCategory('airfryers')!, 'it')
    expect(airfryers.every((p) => p.asin)).toBe(true)
  })
})

describe('Black Friday Amazon links', () => {
  it('builds Global Earning product and search URLs', () => {
    expect(blackFridayAmazonUrl({ asin: 'B0CH9X5WSF' })).toBe('https://www.amazon.fr/dp/B0CH9X5WSF?tag=homenuraen05-21')
    expect(blackFridayAmazonUrl({ query: 'Roborock Q7 M5+' })).toBe('https://www.amazon.fr/s?k=Roborock+Q7+M5%2B&tag=homenuraen05-21')
  })

  it('uses the amazon.fr Black Friday page for every language', () => {
    expect(AMAZON_BLACK_FRIDAY_URL).toBe('https://www.amazon.fr/blackfriday?tag=homenuraen05-21')
  })

  it('offers the Prime free trial on French pages only', () => {
    expect(primeTrialUrl('fr')).toBe(AMAZON_PRIME_TRIAL_URL)
    expect(AMAZON_PRIME_TRIAL_URL).toBe(
      'https://www.amazon.fr/amazonprime?_encoding=UTF8&primeCampaignId=prime_assoc_ft&tag=homenuraen05-21',
    )
    for (const lang of LANGUAGES.filter((l) => l !== 'fr')) expect(primeTrialUrl(lang)).toBeNull()
  })
})

describe('Black Friday links and routing', () => {
  it('links only existing, indexable category hubs and existing guides', () => {
    for (const category of BLACK_FRIDAY_CATEGORIES) {
      for (const hub of category.hubs) {
        const cat = getCategory(hub.category)
        expect(cat?.indexable, hub.category).toBe(true)
        expect(cat?.metaSilo).toBe(hub.silo)
      }
      category.guides.forEach((slug) => expect(getArticleBySlug(slug), slug).toBeDefined())
      const links = getBlackFridayLinks(category, 'en')
      expect(links).toHaveLength(category.hubs.length + category.guides.length)
    }
  })

  it('maps catalog hubs and silos to their Black Friday page', () => {
    expect(getBlackFridayCategoryForHub('aspirateurs-laveurs')?.slug).toBe('aspirateurs-robots')
    expect(getBlackFridayCategoryForHub('chauffages-appoint')?.slug).toBe('radiateurs-connectes')
    expect(getBlackFridayCategoryForHub('alarmes')).toBeUndefined()
    expect(getBlackFridayCategoriesForSilo('entretien-maison').map((c) => c.slug)).toEqual(['aspirateurs-robots', 'aspirateurs-balais'])
    expect(getBlackFridayCategoriesForSilo('securite-maison')).toEqual([])
  })

  it('exports the hub and every category path for the sitemap', () => {
    expect(BLACK_FRIDAY_PATHS).toEqual([
      '/black-friday',
      ...BLACK_FRIDAY_CATEGORIES.map((c) => `/black-friday/${c.slug}`),
    ])
  })

  it('lists the Black Friday pages in llms.txt', () => {
    const txt = buildLlmsTxt()
    for (const path of BLACK_FRIDAY_PATHS) expect(txt).toContain(`${BASE_URL}/fr${path})`)
  })

  it('shows the seasonal promos until the day after Cyber Monday only', () => {
    expect(isBlackFridaySeason(new Date('2026-10-30T12:00:00Z'))).toBe(true)
    expect(isBlackFridaySeason(new Date('2026-11-30T20:00:00Z'))).toBe(true)
    expect(isBlackFridaySeason(new Date('2026-12-02T08:00:00Z'))).toBe(false)
    expect(isBlackFridaySeason(new Date('2026-09-15T08:00:00Z'))).toBe(false)
  })
})

describe('Black Friday copy', () => {
  it('is complete in all 6 languages, with a 3-4 question FAQ per page', () => {
    for (const lang of LANGUAGES) {
      expect(visibleCopy(lang).filter((s) => s.trim() === '')).toEqual([])
      expect(HUB_COPY[lang].faq.length).toBeGreaterThanOrEqual(3)
      for (const category of BLACK_FRIDAY_CATEGORIES) {
        expect(category.copy[lang].faq.length).toBeGreaterThanOrEqual(3)
        expect(category.copy[lang].faq.length).toBeLessThanOrEqual(4)
      }
    }
  })

  it('carries the year in every title and H1', () => {
    for (const lang of LANGUAGES) {
      expect(HUB_COPY[lang].h1).toContain('2026')
      for (const category of BLACK_FRIDAY_CATEGORIES) {
        expect(category.copy[lang].h1).toContain('2026')
        expect(category.copy[lang].metaTitle).toContain('2026')
      }
    }
  })

  it('fits SERP limits (title 60, description 155)', () => {
    const metas = LANGUAGES.flatMap((lang) => [HUB_COPY[lang], ...BLACK_FRIDAY_CATEGORIES.map((c) => c.copy[lang])])
    expect(metas.filter((m) => m.metaTitle.length > 60).map((m) => m.metaTitle)).toEqual([])
    expect(metas.filter((m) => m.metaDescription.length > 155).map((m) => m.metaDescription)).toEqual([])
  })

  it('shows no prices, discount figures or hands-on test claims', () => {
    const forbidden = [
      /[€£$]/,
      /\d\s?%|%\s?\d/,
      /\b(test(é|ée|és|ées|ed)?|getestet|probado|testato|getest)\b/i,
      /\bTests?\b/,
    ]
    for (const lang of LANGUAGES) {
      const offenders = visibleCopy(lang).filter((s) => forbidden.some((re) => re.test(s)))
      expect(offenders, lang).toEqual([])
    }
  })

  it('creates no fake urgency', () => {
    const urgency = /dernière chance|last chance|letzte chance|última oportunidad|ultima occasione|laatste kans|vite !|hurry|schnell zugreifen|stock limité|limited stock/i
    for (const lang of LANGUAGES) expect(visibleCopy(lang).filter((s) => urgency.test(s))).toEqual([])
  })
})
