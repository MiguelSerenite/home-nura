import { describe, it, expect } from 'vitest'
import { amazonMarket, amazonProductUrl, amazonSearchUrl } from '@/lib/amazon'
import {
  allBlackFridayPickRefs,
  amazonBlackFridayUrl,
  AMAZON_PRIME_TRIAL_URL,
  BLACK_FRIDAY_CATEGORIES,
  BLACK_FRIDAY_MARKET_LISTS,
  BLACK_FRIDAY_PATHS,
  blackFridayListSlugs,
  blackFridayLocales,
  blackFridayPickRefs,
  DEFAULT_BLACK_FRIDAY_LIST,
  getBlackFridayCategoriesForSilo,
  getBlackFridayCategory,
  getBlackFridayCategoryForHub,
  getBlackFridayLinks,
  getBlackFridayPage,
  getBlackFridayPages,
  getBlackFridayPicks,
  getListedBlackFridayPages,
  isBlackFridaySeason,
  primeTrialUrl,
} from '@/lib/black-friday'
import { HUB_COPY, PRIME_COPY_FR } from '@/lib/black-friday/copy/hub'
import { UI } from '@/lib/black-friday/copy/ui'
import { getArticleBySlug } from '@/lib/blog'
import { getQuickAnswer, QUICK_ANSWERS } from '@/lib/blog/quick-answers'
import { categoryPath, getCategory } from '@/lib/catalog'
import { GIFT_GUIDES, giftGuidesFor } from '@/lib/gift-guides'
import { buildLlmsTxt } from '@/lib/llms'
import { LANGUAGES, LOCALE_LIMITED_SECTIONS, switchLocalePath, type Lang } from '@/lib/i18n'
import { isNorthAmericanMarket, marketDecision, marketPicks } from '@/lib/market-models'
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
  for (const { category, copy: c } of getBlackFridayPages(lang)) {
    strings.push(c.name, c.h1, c.metaTitle, c.metaDescription, c.blurb, c.intro, ...c.faq.flatMap((f) => [f.question, f.answer]))
    strings.push(...getBlackFridayPicks(category, lang).flatMap((p) => [p.model, p.role, p.why]))
  }
  // Gift guides (Sinterklaas, Boxing Day, Reyes): same rules as the Black Friday pages.
  for (const g of giftGuidesFor(lang)) {
    strings.push(g.label, g.metaTitle, g.metaDescription, g.h1, g.intro, g.categoriesTitle)
    strings.push(...g.cards.flatMap((c) => [c.name, c.line]), ...g.faq.flatMap((f) => [f.question, f.answer]))
  }
  return strings
}

/** Every category page of every locale, with its locale. */
const PAGES = LANGUAGES.flatMap((lang) => getBlackFridayPages(lang).map((page) => ({ lang, ...page })))
const ORIGINAL_SLUGS = DEFAULT_BLACK_FRIDAY_LIST

describe('Black Friday picks', () => {
  it('has 3 to 6 picks per page, with unique slugs', () => {
    expect(new Set(BLACK_FRIDAY_CATEGORIES.map((c) => c.slug)).size).toBe(BLACK_FRIDAY_CATEGORIES.length)
    for (const { lang, category } of PAGES) {
      const refs = blackFridayPickRefs(category, lang)
      expect(refs.length, `${lang}/${category.slug}`).toBeGreaterThanOrEqual(3)
      expect(refs.length, `${lang}/${category.slug}`).toBeLessThanOrEqual(6)
    }
  })

  it('only reuses models from existing verdicts (nothing invented), per-market picks included', () => {
    for (const category of BLACK_FRIDAY_CATEGORIES) {
      for (const ref of allBlackFridayPickRefs(category)) {
        const verdictModels = QUICK_ANSWERS[ref.article]?.picks.map((p) => p.model) ?? []
        expect(verdictModels, `${category.slug}: ${ref.model}`).toContain(ref.model)
      }
      // A market's own picks only for a market that has the page.
      for (const lang of Object.keys(category.localPicks ?? {}) as Lang[]) {
        expect(category.copy[lang], `${category.slug}: picks for ${lang} without a ${lang} page`).toBeDefined()
      }
    }
  })

  it('resolves every pick in every European language with the verdict name and reason', () => {
    for (const { lang, category } of PAGES.filter((p) => !isNorthAmericanMarket(p.lang))) {
      const refs = blackFridayPickRefs(category, lang)
      const picks = getBlackFridayPicks(category, lang)
      expect(picks, `${lang}/${category.slug}`).toHaveLength(refs.length)
      picks.forEach((pick, i) => {
        const ref = refs[i]
        const verdict = getQuickAnswer(getArticleBySlug(ref.article)!, lang)!
        const source = verdict.picks.find((p) => p.model === pick.model)
        expect(source, `${lang}/${ref.model}`).toBeDefined()
        expect(pick.why).toBe(source!.why)
        expect(pick.role).toBe(ref.role?.[lang] ?? source!.role)
        expect(pick.guide.href).toBe(`/${lang}/blog/${ref.article}`)
      })
    }
  })

  it('resolves US and Canadian picks through the market decision and that market\'s verdict', () => {
    for (const { lang: market, category } of PAGES.filter((p) => isNorthAmericanMarket(p.lang))) {
      if (!isNorthAmericanMarket(market)) continue
      const refs = blackFridayPickRefs(category, market)
      const expected = [...new Set(refs.flatMap((ref) => marketDecision(market, ref.model).name ?? []))]
      const picks = getBlackFridayPicks(category, market)
      expect(picks.map((p) => p.model), `${market}/${category.slug}`).toEqual(expected)
      for (const pick of picks) {
        const ref = refs.find((r) => marketDecision(market, r.model).name === pick.model)!
        const source = marketPicks(market, ref.article).find((p) => p.model === pick.model)!
        expect(pick.why).toBe(source.why)
        expect(pick.guide.href).toBe(`/${market}/blog/${ref.article}`)
      }
    }
  })

  it('links every pick to the locale market, product page when the ASIN is known', () => {
    for (const { lang, category } of PAGES) {
      for (const pick of getBlackFridayPicks(category, lang)) {
        expect(pick.url, `${lang}/${pick.model}`).toMatch(marketLink(lang))
        if (pick.asin) expect(pick.url).toBe(amazonProductUrl(pick.asin, lang))
        // US / Canada: a search for the North-American name the page shows.
        else if (isNorthAmericanMarket(lang)) expect(pick.url).toBe(amazonSearchUrl(pick.model, lang))
        else expect(pick.url).toBe(amazonSearchUrl(blackFridayPickRefs(category, lang).find((r) => r.model === pick.model)!.model, lang))
      }
    }
  })

  it('shows the US air purifier page the Winix and Coway picks its copy names', () => {
    const us = getBlackFridayPicks(getBlackFridayCategory('purificateurs-air')!, 'us').map((p) => p.model)
    expect(us).toEqual(['Levoit Core 400S-P', 'Levoit Core 300S-P', 'Winix 5510', 'Coway Airmega AP-1512HHS', 'Blueair Blue Pure 411i Max'])
    const pl = getBlackFridayPicks(getBlackFridayCategory('purificateurs-air')!, 'pl').map((p) => p.model)
    expect(pl).toEqual(['Levoit Core 400S', 'Levoit Core 300S', 'Blueair Blue Pure 411i Max'])
  })

  it('keeps the catalog ASIN for catalog products (air fryers, coffee machines)', () => {
    const coffee = getBlackFridayPicks(getBlackFridayCategory('cafetieres-a-grain')!, 'de')
    expect(coffee.map((p) => p.asin)).toEqual(['B0CH9X5WSF', 'B0DV9M7MY5', 'B07X9ZJ536'])
    const airfryers = getBlackFridayPicks(getBlackFridayCategory('airfryers')!, 'it')
    expect(airfryers.every((p) => p.asin)).toBe(true)
  })
})

describe('Black Friday lists by market', () => {
  it('gives every locale its own list of 6 to 8 pages, each with that locale\'s copy', () => {
    for (const lang of LANGUAGES) {
      const slugs = blackFridayListSlugs(lang)
      expect(BLACK_FRIDAY_MARKET_LISTS[lang], lang).toBeDefined()
      expect(slugs.length, lang).toBeGreaterThanOrEqual(6)
      expect(slugs.length, lang).toBeLessThanOrEqual(8)
      expect(new Set(slugs).size, lang).toBe(slugs.length)
      for (const slug of slugs) expect(getBlackFridayPage(slug, lang), `${lang}: ${slug}`).toBeDefined()
      expect(getListedBlackFridayPages(lang).map((p) => p.category.slug)).toEqual(slugs)
    }
  })

  it('follows the order the market editors set', () => {
    expect(blackFridayListSlugs('fr').slice(0, 3)).toEqual(['aspirateurs-laveurs', 'aspirateurs-robots', 'airfryers'])
    expect(blackFridayListSlugs('en')[0]).toBe('deshumidificateurs')
    expect(blackFridayListSlugs('us')).toEqual([
      'aspirateurs-robots', 'cafetieres-a-grain', 'airfryers', 'purificateurs-air',
      'sonnettes-video', 'serrures-connectees', 'radiateurs-connectes', 'humidificateurs',
    ])
    expect(blackFridayListSlugs('ca').indexOf('aspirateurs-balais')).toBeLessThan(blackFridayListSlugs('ca').indexOf('aspirateurs-robots'))
  })

  it('keeps the six original pages online in every locale, listed or not (the fallback list)', () => {
    expect(DEFAULT_BLACK_FRIDAY_LIST).toEqual(['airfryers', 'aspirateurs-robots', 'cafetieres-a-grain', 'aspirateurs-balais', 'thermostats', 'radiateurs-connectes'])
    for (const slug of ORIGINAL_SLUGS) expect(blackFridayLocales(getBlackFridayCategory(slug)!), slug).toEqual([...LANGUAGES])
    // Left out of the French hub, still a French page.
    expect(blackFridayListSlugs('fr')).not.toContain('thermostats')
    expect(getBlackFridayPages('fr').map((p) => p.category.slug)).toContain('thermostats')
  })

  it('publishes a newer page only in the markets whose list carries it (copy written for them)', () => {
    for (const category of BLACK_FRIDAY_CATEGORIES.filter((c) => !ORIGINAL_SLUGS.includes(c.slug))) {
      const listing = LANGUAGES.filter((lang) => blackFridayListSlugs(lang).includes(category.slug))
      expect(blackFridayLocales(category), category.slug).toEqual(listing)
    }
  })

  it('sends the language switcher of a page some locales lack to that locale\'s hub', () => {
    const partial = BLACK_FRIDAY_CATEGORIES.filter((c) => blackFridayLocales(c).length < LANGUAGES.length)
    expect(partial.length).toBeGreaterThan(0)
    for (const category of partial) {
      expect(LOCALE_LIMITED_SECTIONS, category.slug).toContainEqual({
        prefix: `/black-friday/${category.slug}`,
        langs: blackFridayLocales(category),
        fallback: '/black-friday',
      })
    }
    for (const slug of ORIGINAL_SLUGS) {
      expect(LOCALE_LIMITED_SECTIONS.find((s) => s.prefix === `/black-friday/${slug}`), slug).toBeUndefined()
    }
    expect(switchLocalePath('/fr/black-friday/multicuiseurs', 'de')).toBe('/de/black-friday')
    expect(switchLocalePath('/de/black-friday/deshumidificateurs', 'fr')).toBe('/fr/black-friday/deshumidificateurs')
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
  it('links only existing, indexable category hubs (their landing page) and existing guides', () => {
    for (const category of BLACK_FRIDAY_CATEGORIES) {
      for (const hub of category.hubs) {
        const cat = getCategory(hub.category)
        expect(cat?.indexable, hub.category).toBe(true)
        expect(cat?.metaSilo).toBe(hub.silo)
      }
      category.guides.forEach((slug) => expect(getArticleBySlug(slug), slug).toBeDefined())
      const lang = blackFridayLocales(category)[0]
      const links = getBlackFridayLinks(category, lang)
      expect(links).toHaveLength(category.hubs.length + category.guides.length)
      for (const hub of category.hubs) {
        expect(links.map((l) => l.href)).toContain(`/${lang}${categoryPath(getCategory(hub.category)!)}`)
      }
    }
    // The air fryer hub is the guide, not the /cuisine-connectee/airfryers redirect.
    expect(getBlackFridayLinks(getBlackFridayCategory('airfryers')!, 'fr')[0].href).toBe('/fr/guides/airfryers')
  })

  it('maps catalog hubs and silos to the Black Friday page of the reader\'s market', () => {
    // Robot mops stay on the robot page; the French floor-washer page does not take the stick-vacuum hub.
    expect(getBlackFridayCategoryForHub('aspirateurs-laveurs', 'fr')?.category.slug).toBe('aspirateurs-robots')
    expect(getBlackFridayCategoryForHub('aspirateurs-balais', 'fr')?.category.slug).toBe('aspirateurs-balais')
    expect(getBlackFridayCategoryForHub('chauffages-appoint', 'de')?.category.slug).toBe('radiateurs-connectes')
    // Left out of the French list, still linked from its hub.
    expect(getBlackFridayCategoryForHub('thermostats', 'fr')?.category.slug).toBe('thermostats')
    expect(getBlackFridayCategoryForHub('deshumidificateurs', 'nl')?.category.slug).toBe('deshumidificateurs')
    expect(getBlackFridayCategoryForHub('deshumidificateurs', 'it')).toBeUndefined()
    expect(getBlackFridayCategoryForHub('alarmes', 'fr')).toBeUndefined()
    expect(getBlackFridayCategoriesForSilo('entretien-maison', 'fr').map((p) => p.category.slug)).toEqual([
      'aspirateurs-laveurs', 'aspirateurs-robots', 'aspirateurs-balais',
    ])
    expect(getBlackFridayCategoriesForSilo('securite-maison', 'fr')).toEqual([])
    expect(getBlackFridayCategoriesForSilo('securite-maison', 'us').map((p) => p.category.slug)).toEqual(['sonnettes-video', 'serrures-connectees'])
  })

  it('exports the hub and every category path for the sitemap', () => {
    expect(BLACK_FRIDAY_PATHS).toEqual([
      '/black-friday',
      ...BLACK_FRIDAY_CATEGORIES.map((c) => `/black-friday/${c.slug}`),
    ])
  })

  it('lists the French Black Friday pages in llms.txt', () => {
    const txt = buildLlmsTxt()
    expect(txt).toContain(`${BASE_URL}/fr/black-friday)`)
    for (const page of getBlackFridayPages('fr')) expect(txt).toContain(`${BASE_URL}/fr${page.path})`)
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
    }
    for (const { lang, category, copy } of PAGES) {
      expect(copy.faq.length, `${lang}/${category.slug}`).toBeGreaterThanOrEqual(3)
      expect(copy.faq.length, `${lang}/${category.slug}`).toBeLessThanOrEqual(4)
    }
  })

  it('carries the year in every title and H1', () => {
    for (const lang of LANGUAGES) expect(HUB_COPY[lang].h1).toContain('2026')
    for (const { lang, category, copy } of PAGES) {
      expect(copy.h1, `${lang}/${category.slug}`).toContain('2026')
      expect(copy.metaTitle, `${lang}/${category.slug}`).toContain('2026')
    }
  })

  it('fits SERP limits (title 60, description 155)', () => {
    const metas = [...LANGUAGES.map((lang) => HUB_COPY[lang]), ...PAGES.map((p) => p.copy), ...GIFT_GUIDES]
    expect(metas.filter((m) => m.metaTitle.length > 60).map((m) => m.metaTitle)).toEqual([])
    expect(metas.filter((m) => m.metaDescription.length > 155).map((m) => m.metaDescription)).toEqual([])
  })

  it('calls it Black Week in Swedish (hub title and H1)', () => {
    expect(HUB_COPY.sv.h1).toMatch(/^Black Week 2026/)
    expect(HUB_COPY.sv.metaTitle).toMatch(/^Black Week 2026/)
  })

  it('covers Black Friday through Cyber Monday on the US hub', () => {
    expect(HUB_COPY.us.h1).toContain('Cyber Monday')
    expect(HUB_COPY.us.metaTitle).toContain('Cyber Monday')
    expect(HUB_COPY.us.intro).toContain('November 30')
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

  it('ties no deal or discount to a model (no sentence names both)', () => {
    const dealWords = new RegExp(
      [
        '\\bdeals?\\b|discount|on sale|\\bmarkdown',
        'promo|remise|réduction|bonne affaire',
        'angebot|rabatt|reduziert|nachlass',
        'oferta|rebaja|descuento',
        'offert[ae]|sconto|scontat',
        'aanbieding|korting',
        'promocj|obniżk|rabat|przecen',
        'erbjudande|rabatt|\\brea\\b|nedsatt|prissänk',
      ].join('|'),
      'iu',
    )
    for (const { lang, category, copy } of PAGES) {
      // Brand and model as the copy writes them ("Meaco Arete", "Dyson WashG1").
      const models = getBlackFridayPicks(category, lang).map((p) => p.model.split(/\s+/).slice(0, 2).join(' '))
      const texts = [copy.blurb, copy.intro, copy.metaDescription, ...copy.faq.flatMap((f) => [f.question, f.answer])]
      const sentences = texts.flatMap((t) => t.split(/(?<=[.!?])\s+/))
      const offenders = sentences.filter((sentence) => dealWords.test(sentence) && models.some((m) => sentence.includes(m)))
      expect(offenders, `${lang}/${category.slug}`).toEqual([])
    }
  })
})
