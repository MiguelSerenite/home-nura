import { describe, it, expect } from 'vitest'
import { amazonMarket, amazonProductUrl, amazonSearchUrl } from '@/lib/amazon'
import {
  amazonBlackFridayUrl,
  AMAZON_PRIME_TRIAL_URL,
  BLACK_FRIDAY_CATEGORIES,
  BLACK_FRIDAY_PATHS,
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
import { LANGUAGES, type Lang } from '@/lib/i18n'
import { BASE_URL } from '@/lib/seo'

// Every Amazon link points to the locale market (amazon.it for Italian,
// amazon.fr elsewhere) with its tracking ID, built by lib/amazon.ts.
function marketLink(lang: Lang): RegExp {
  const { baseUrl, tag } = amazonMarket(lang)
  const store = baseUrl.replace(/\./g, '\\.')
  return new RegExp(`^${store}/(dp/[A-Z0-9]{10}\\?|s\\?k=[^&]+&)tag=${tag}$`)
}

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

  it('resolves every pick in every language with the verdict name and reason', () => {
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

  it('links every pick to the locale market, product page when the ASIN is known', () => {
    for (const category of BLACK_FRIDAY_CATEGORIES) {
      for (const lang of LANGUAGES) {
        for (const pick of getBlackFridayPicks(category, lang)) {
          expect(pick.url, `${lang}/${pick.model}`).toMatch(marketLink(lang))
          if (pick.asin) expect(pick.url).toBe(amazonProductUrl(pick.asin, lang))
          else expect(pick.url).toBe(amazonSearchUrl(category.picks.find((r) => r.model === pick.model)!.model, lang))
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
  it("uses the Black Friday page of each locale's market, with its tag", () => {
    expect(amazonBlackFridayUrl('fr')).toBe('https://www.amazon.fr/blackfriday?tag=homenuraen05-21')
    expect(amazonBlackFridayUrl('de')).toBe('https://www.amazon.fr/blackfriday?tag=homavisede-21')
    expect(amazonBlackFridayUrl('it')).toBe('https://www.amazon.it/blackfriday?tag=homaviseit-21')
    for (const lang of LANGUAGES) {
      const { baseUrl, tag } = amazonMarket(lang)
      expect(amazonBlackFridayUrl(lang), lang).toBe(`${baseUrl}/blackfriday?tag=${tag}`)
    }
  })

  it('offers the Prime free trial on French pages only, on amazon.fr', () => {
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
  it('is complete in every language, with a 3-4 question FAQ per page', () => {
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
      // Prices: € £ $ (US and Canadian dollars too), Swedish kronor, Polish złoty.
      /[€£$]/,
      /\d\s?(?:kr|zł)(?!\p{L})|\b(?:SEK|PLN|USD|CAD)\b|(?<!\p{L})(?:kronor|złotych)(?!\p{L})/iu,
      /\d\s?%|%\s?\d/,
      /\b(test(é|ée|és|ées|ed)?|getestet|probado|testato|getest)\b/i,
      /\bTests?\b/,
      // Swedish (testad, testade, testat, testet, testvinnare) and Polish (przetestowane, testowaliśmy, w teście).
      /(?<!\p{L})(?:testa[dt]e?|testet|testerna|testvinnar\p{L}*|przetestowa\p{L}*|testowa\p{L}*|teście|testach|testów)(?!\p{L})/iu,
    ]
    for (const lang of LANGUAGES) {
      const offenders = visibleCopy(lang).filter((s) => forbidden.some((re) => re.test(s)))
      expect(offenders, lang).toEqual([])
    }
  })

  it('creates no fake urgency', () => {
    const urgency = new RegExp(
      [
        'dernière chance|vite !|stock limité',
        'last chance|hurry|limited stock|while supplies last|act fast|selling fast|limited time only',
        'letzte chance|schnell zugreifen',
        'última oportunidad|ultima occasione|laatste kans',
        'sista chansen|skynda|begränsat lager|bara idag|endast idag',
        'ostatnia szansa|pospiesz|pośpiesz|ograniczon\\p{L}* (?:liczb|ilość|zapas|nakład)|tylko dziś|tylko dzisiaj',
      ].join('|'),
      'iu',
    )
    for (const lang of LANGUAGES) expect(visibleCopy(lang).filter((s) => urgency.test(s)), lang).toEqual([])
  })
})
