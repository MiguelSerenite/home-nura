import { describe, it, expect } from 'vitest'
import {
  buildPageMetadata,
  buildProductListSchema,
  buildArticleSchema,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
  buildBestForItemListSchema,
  getSocialProof,
  formatLastUpdated,
  SITE_LAST_UPDATED_ISO,
  BASE_URL,
} from '@/lib/seo'

describe('buildPageMetadata', () => {
  it('produces a canonical URL from lang + path', () => {
    const m = buildPageMetadata({
      lang: 'fr',
      path: '/blog',
      title: 'Blog',
      description: 'Desc',
    })
    expect(m.alternates?.canonical).toBe(`${BASE_URL}/fr/blog`)
  })

  it('exposes hreflang alternates for all 6 locales at the same path', () => {
    const m = buildPageMetadata({
      lang: 'en',
      path: '/guides/airfryers',
      title: 'Guide',
      description: 'Desc',
    })
    const langs = m.alternates?.languages ?? {}
    expect(Object.keys(langs).sort()).toEqual(['de', 'en', 'es', 'fr', 'it', 'nl'])
    expect(langs.fr).toBe(`${BASE_URL}/fr/guides/airfryers`)
    expect(langs.en).toBe(`${BASE_URL}/en/guides/airfryers`)
    expect(langs.de).toBe(`${BASE_URL}/de/guides/airfryers`)
  })

  it('falls back to fr when lang is unknown', () => {
    const m = buildPageMetadata({
      lang: 'xx',
      path: '/blog',
      title: 'T',
      description: 'D',
    })
    expect(m.alternates?.canonical).toBe(`${BASE_URL}/fr/blog`)
  })

  it('normalizes path without leading slash', () => {
    const m = buildPageMetadata({
      lang: 'fr',
      path: 'comparateur',
      title: 'T',
      description: 'D',
    })
    expect(m.alternates?.canonical).toBe(`${BASE_URL}/fr/comparateur`)
  })

  it('handles empty path as home', () => {
    const m = buildPageMetadata({
      lang: 'fr',
      path: '',
      title: 'Home',
      description: 'D',
    })
    expect(m.alternates?.canonical).toBe(`${BASE_URL}/fr`)
    const langs = m.alternates?.languages ?? {}
    expect(langs.fr).toBe(`${BASE_URL}/fr`)
  })

  it('populates openGraph with siteName, locale, type and a complete image', () => {
    const m = buildPageMetadata({
      lang: 'de',
      path: '/blog',
      title: 'Blog DE',
      description: 'Desc',
    })
    const og = m.openGraph as Record<string, unknown>
    expect(og.siteName).toBe('Home Nura')
    expect(og.locale).toBe('de_DE')
    expect(og.type).toBe('website')
    expect(og.url).toBe(`${BASE_URL}/de/blog`)
    const images = og.images as { url: string; width: number; height: number; alt: string }[]
    expect(images).toHaveLength(1)
    expect(images[0].width).toBe(1200)
    expect(images[0].height).toBe(630)
    expect(images[0].url).toBe(`${BASE_URL}/og-image.png`)
    expect(images[0].alt).toBe('Blog DE')
  })

  it('lets caller override image and imageAlt', () => {
    const m = buildPageMetadata({
      lang: 'fr',
      path: '/blog/post',
      title: 'Post',
      description: 'D',
      image: 'https://example.com/custom.png',
      imageAlt: 'Custom alt',
    })
    const og = m.openGraph as Record<string, unknown>
    const images = og.images as { url: string; alt: string }[]
    expect(images[0].url).toBe('https://example.com/custom.png')
    expect(images[0].alt).toBe('Custom alt')
    const twImages = (m.twitter as { images?: string[] }).images
    expect(twImages?.[0]).toBe('https://example.com/custom.png')
  })

  it('adds article-only fields when type=article', () => {
    const m = buildPageMetadata({
      lang: 'fr',
      path: '/blog/a',
      title: 'A',
      description: 'D',
      type: 'article',
      publishedTime: '2026-01-01',
      modifiedTime: '2026-04-01',
      authors: ['Miguel Serenite'],
    })
    const og = m.openGraph as Record<string, unknown>
    expect(og.type).toBe('article')
    expect(og.publishedTime).toBe('2026-01-01')
    expect(og.modifiedTime).toBe('2026-04-01')
    expect(og.authors).toEqual(['Miguel Serenite'])
  })

  it('defaults article authors to ["Home Nura"] when omitted', () => {
    const m = buildPageMetadata({
      lang: 'fr',
      path: '/guides/x',
      title: 'G',
      description: 'D',
      type: 'article',
    })
    const og = m.openGraph as Record<string, unknown>
    expect(og.authors).toEqual(['Home Nura'])
  })

  it('sets Twitter summary_large_image with the brand handles', () => {
    const m = buildPageMetadata({
      lang: 'fr',
      path: '/blog',
      title: 'T',
      description: 'D',
    })
    const tw = m.twitter as Record<string, unknown>
    expect(tw.card).toBe('summary_large_image')
    expect(tw.site).toBe('@homenura')
    expect(tw.creator).toBe('@homenura')
  })

  it('honors index: false by producing noindex robots directive', () => {
    const m = buildPageMetadata({
      lang: 'fr',
      path: '/search',
      title: 'T',
      description: 'D',
      index: false,
    })
    const robots = m.robots as Record<string, unknown>
    expect(robots.index).toBe(false)
    expect(robots.follow).toBe(true)
    const gbot = robots.googleBot as Record<string, unknown>
    expect(gbot.index).toBe(false)
  })

  it('defaults robots.index to true', () => {
    const m = buildPageMetadata({
      lang: 'fr',
      path: '/',
      title: 'T',
      description: 'D',
    })
    const robots = m.robots as Record<string, unknown>
    expect(robots.index).toBe(true)
  })
})

describe('buildProductListSchema', () => {
  const products = [
    {
      title: 'Ninja Foodi Max Dual Zone',
      price: '229€',
      priceNumeric: 229,
      image: 'https://example.com/ninja.jpg',
      url: 'https://amzn.to/ninja',
      asin: 'B09XYZ1234',
      nuraScore: 9.2,
      capacity: '9.5L',
    },
    {
      title: 'Philips Airfryer XXL',
      price: '189€',
      priceNumeric: 189,
      image: 'https://example.com/philips.jpg',
      url: 'https://amzn.to/philips',
      asin: 'B08ABC5678',
      nuraScore: 8.5,
      capacity: '7.3L',
    },
  ]

  it('emits schema.org ItemList with correct count and dateModified', () => {
    const s = buildProductListSchema(products, 'fr', 'Top Airfryers', 'https://homenura.com/fr')
    expect(s['@context']).toBe('https://schema.org')
    expect(s['@type']).toBe('ItemList')
    expect(s.name).toBe('Top Airfryers')
    expect(s.url).toBe('https://homenura.com/fr')
    expect(s.numberOfItems).toBe(2)
    expect(s.dateModified).toBe(SITE_LAST_UPDATED_ISO)
    expect(s.itemListElement).toHaveLength(2)
  })

  it('numbers list items starting at 1', () => {
    const s = buildProductListSchema(products, 'fr', 'L', 'url')
    expect(s.itemListElement[0].position).toBe(1)
    expect(s.itemListElement[1].position).toBe(2)
  })

  it('extracts brand from product title', () => {
    const s = buildProductListSchema(products, 'fr', 'L', 'url')
    const first = s.itemListElement[0].item as { brand: { name: string } }
    const second = s.itemListElement[1].item as { brand: { name: string } }
    expect(first.brand.name).toBe('Ninja')
    expect(second.brand.name).toBe('Philips')
  })

  it('falls back to "Home Nura" brand for unknown manufacturers', () => {
    const s = buildProductListSchema(
      [{ ...products[0], title: 'UnknownBrand Fryer 5L' }],
      'fr',
      'L',
      'url',
    )
    const item = s.itemListElement[0].item as { brand: { name: string } }
    expect(item.brand.name).toBe('Home Nura')
  })

  it('uses GBP currency for English locale and EUR elsewhere', () => {
    const fr = buildProductListSchema(products, 'fr', 'L', 'url')
    const en = buildProductListSchema(products, 'en', 'L', 'url')
    const de = buildProductListSchema(products, 'de', 'L', 'url')
    const getCurrency = (s: ReturnType<typeof buildProductListSchema>) =>
      (s.itemListElement[0].item as { offers: { priceCurrency: string } }).offers.priceCurrency
    expect(getCurrency(fr)).toBe('EUR')
    expect(getCurrency(en)).toBe('GBP')
    expect(getCurrency(de)).toBe('EUR')
  })

  it('maps nuraScore (0-10) to ratingValue (0-5) with one decimal', () => {
    const s = buildProductListSchema(products, 'fr', 'L', 'url')
    const rating = (s.itemListElement[0].item as { aggregateRating: { ratingValue: number } }).aggregateRating
    // nuraScore 9.2 → 9.2/2 = 4.6
    expect(rating.ratingValue).toBe(4.6)
  })

  it('sets availability to InStock and includes the affiliate URL', () => {
    const s = buildProductListSchema(products, 'fr', 'L', 'url')
    const offers = (s.itemListElement[0].item as { offers: Record<string, unknown> }).offers
    expect(offers.availability).toBe('https://schema.org/InStock')
    expect(offers.url).toBe('https://amzn.to/ninja')
    expect(offers.price).toBe('229')
  })
})

describe('getSocialProof', () => {
  it('returns a rating in the 4.3–4.8 range', () => {
    for (const asin of ['B001', 'B002', 'B123XYZ', 'B09ABCDEF']) {
      const { rating } = getSocialProof(asin)
      expect(rating).toBeGreaterThanOrEqual(4.3)
      expect(rating).toBeLessThanOrEqual(4.8)
    }
  })

  it('returns a count in the 847–4821 range', () => {
    for (const asin of ['B001', 'B002', 'B123XYZ', 'B09ABCDEF']) {
      const { count } = getSocialProof(asin)
      expect(count).toBeGreaterThanOrEqual(847)
      expect(count).toBeLessThanOrEqual(4821)
    }
  })

  it('is deterministic — same ASIN yields the same proof', () => {
    const a = getSocialProof('B09XYZ1234')
    const b = getSocialProof('B09XYZ1234')
    expect(a.rating).toBe(b.rating)
    expect(a.count).toBe(b.count)
  })

  it('formats count per locale (English uses comma thousands separator)', () => {
    const { count, countFormatted } = getSocialProof('B09XYZ1234', 'en')
    if (count >= 1000) {
      expect(countFormatted).toContain(',')
    }
  })

  it('rounds rating to one decimal', () => {
    const { rating } = getSocialProof('ANY_ASIN')
    // one decimal ⇒ rating * 10 must be an integer
    expect(rating * 10).toBe(Math.round(rating * 10))
  })
})

describe('buildArticleSchema', () => {
  const base = {
    lang: 'fr',
    path: '/blog/my-post',
    title: 'Mon article',
    description: 'Une description',
    image: '/hero.jpg',
    datePublished: '2026-01-15',
    dateModified: '2026-04-01',
  }

  it('emits a valid schema.org Article by default', () => {
    const s = buildArticleSchema(base)
    expect(s['@context']).toBe('https://schema.org')
    expect(s['@type']).toBe('Article')
    expect(s.headline).toBe('Mon article')
    expect(s.description).toBe('Une description')
    expect(s.datePublished).toBe('2026-01-15')
    expect(s.dateModified).toBe('2026-04-01')
    expect(s.inLanguage).toBe('fr')
  })

  it('supports ReviewArticle and TechArticle type variants', () => {
    const review = buildArticleSchema({ ...base, articleType: 'ReviewArticle' })
    const tech = buildArticleSchema({ ...base, articleType: 'TechArticle' })
    expect(review['@type']).toBe('ReviewArticle')
    expect(tech['@type']).toBe('TechArticle')
  })

  it('resolves relative image URLs to absolute using BASE_URL', () => {
    const s = buildArticleSchema(base)
    expect(s.image).toHaveLength(1)
    expect(s.image[0].url).toBe(`${BASE_URL}/hero.jpg`)
  })

  it('preserves already-absolute image URLs unchanged', () => {
    const s = buildArticleSchema({ ...base, image: 'https://cdn.example.com/hero.png' })
    expect(s.image[0].url).toBe('https://cdn.example.com/hero.png')
  })

  it('uses imageAlt as caption when provided, falling back to title', () => {
    const withAlt = buildArticleSchema({ ...base, imageAlt: 'My custom alt' })
    const withoutAlt = buildArticleSchema(base)
    expect(withAlt.image[0].caption).toBe('My custom alt')
    expect(withoutAlt.image[0].caption).toBe('Mon article')
  })

  it('builds mainEntityOfPage with canonical page URL from lang + path', () => {
    const s = buildArticleSchema(base)
    expect(s.mainEntityOfPage['@id']).toBe(`${BASE_URL}/fr/blog/my-post`)
  })

  it('normalizes path without leading slash', () => {
    const s = buildArticleSchema({ ...base, path: 'blog/foo' })
    expect(s.mainEntityOfPage['@id']).toBe(`${BASE_URL}/fr/blog/foo`)
  })

  it('falls back to French for unknown locales', () => {
    const s = buildArticleSchema({ ...base, lang: 'xx' })
    expect(s.inLanguage).toBe('fr')
    expect(s.mainEntityOfPage['@id']).toBe(`${BASE_URL}/fr/blog/my-post`)
  })

  it('defaults author to Miguel Serenite with locale-specific job title', () => {
    const fr = buildArticleSchema(base)
    const en = buildArticleSchema({ ...base, lang: 'en' })
    expect(fr.author.name).toBe('Miguel Serenite')
    expect(fr.author.jobTitle).toBe('Fondateur & Rédacteur en Chef')
    expect(fr.author.url).toBe(`${BASE_URL}/fr/a-propos`)
    expect(en.author.jobTitle).toBe('Founder & Editor-in-Chief')
    expect(en.author.url).toBe(`${BASE_URL}/en/a-propos`)
  })

  it('lets the caller override author name and job title', () => {
    const s = buildArticleSchema({
      ...base,
      authorName: 'Jane Doe',
      authorJobTitle: 'Senior Kitchen Writer',
    })
    expect(s.author.name).toBe('Jane Doe')
    expect(s.author.jobTitle).toBe('Senior Kitchen Writer')
  })

  it('embeds the publisher organization with logo', () => {
    const s = buildArticleSchema(base)
    expect(s.publisher['@type']).toBe('Organization')
    expect(s.publisher.name).toBe('Home Nura')
    expect(s.publisher.url).toBe(BASE_URL)
    expect(s.publisher.logo.url).toBe(`${BASE_URL}/logo.png`)
    expect(s.publisher.logo.width).toBe(1400)
    expect(s.publisher.logo.height).toBe(400)
  })

  it('only emits articleSection when provided', () => {
    const without = buildArticleSchema(base) as Record<string, unknown>
    const withSection = buildArticleSchema({ ...base, articleSection: 'Guides' }) as Record<
      string,
      unknown
    >
    expect('articleSection' in without).toBe(false)
    expect(withSection.articleSection).toBe('Guides')
  })

  it('only emits wordCount when provided', () => {
    const without = buildArticleSchema(base) as Record<string, unknown>
    const withCount = buildArticleSchema({ ...base, wordCount: 1234 }) as Record<string, unknown>
    expect('wordCount' in without).toBe(false)
    expect(withCount.wordCount).toBe(1234)
  })
})

describe('formatLastUpdated', () => {
  it('formats the site-wide default date in French', () => {
    const out = formatLastUpdated('fr')
    // "14 avril 2026" — format may vary by ICU version; check for year + month substring
    expect(out).toMatch(/2026/)
    expect(out.toLowerCase()).toMatch(/avril/)
  })

  it('formats in English with British locale', () => {
    const out = formatLastUpdated('en', '2026-04-14')
    expect(out).toMatch(/2026/)
    expect(out).toMatch(/April/i)
  })

  it('falls back to French for unknown lang', () => {
    const out = formatLastUpdated('xx', '2026-04-14')
    expect(out.toLowerCase()).toMatch(/avril/)
  })
})

// =====================================================================
// Phase Y — BreadcrumbList schema builder
// =====================================================================

describe('buildBreadcrumbListSchema', () => {
  it('emits a well-formed BreadcrumbList with 1-indexed positions', () => {
    const schema = buildBreadcrumbListSchema('fr', [
      { name: 'Accueil', path: '' },
      { name: 'Cuisine Connectée', path: '/cuisine-connectee' },
      { name: 'Airfryers', path: '/cuisine-connectee/airfryers' },
    ])
    expect(schema['@context']).toBe('https://schema.org')
    expect(schema['@type']).toBe('BreadcrumbList')
    expect(schema.itemListElement.length).toBe(3)
    expect(schema.itemListElement[0].position).toBe(1)
    expect(schema.itemListElement[2].position).toBe(3)
  })

  it('builds absolute URLs prefixed by BASE_URL/{lang}', () => {
    const schema = buildBreadcrumbListSchema('en', [
      { name: 'Home', path: '' },
      { name: 'Smart Kitchen', path: '/cuisine-connectee' },
    ])
    expect(schema.itemListElement[0].item).toBe(`${BASE_URL}/en`)
    expect(schema.itemListElement[1].item).toBe(
      `${BASE_URL}/en/cuisine-connectee`
    )
  })

  it('normalizes path="/" to the home URL (no trailing slash)', () => {
    const schema = buildBreadcrumbListSchema('fr', [
      { name: 'Accueil', path: '/' },
    ])
    expect(schema.itemListElement[0].item).toBe(`${BASE_URL}/fr`)
  })

  it('accepts paths without leading slash', () => {
    const schema = buildBreadcrumbListSchema('de', [
      { name: 'Start', path: '' },
      { name: 'Küche', path: 'cuisine-connectee' },
    ])
    expect(schema.itemListElement[1].item).toBe(
      `${BASE_URL}/de/cuisine-connectee`
    )
  })

  it('falls back to fr when lang is unknown', () => {
    const schema = buildBreadcrumbListSchema('xx', [
      { name: 'Accueil', path: '' },
    ])
    expect(schema.itemListElement[0].item).toBe(`${BASE_URL}/fr`)
  })
})

// =====================================================================
// Phase Y — FAQPage schema builder
// =====================================================================

describe('buildFaqPageSchema', () => {
  it('returns a well-formed FAQPage for a non-empty list', () => {
    const schema = buildFaqPageSchema([
      {
        question: 'Quel airfryer choisir en 2026 ?',
        answer:
          'Notre choix dépend de la taille du foyer et du budget. Voir le comparatif complet.',
      },
      {
        question: 'Un airfryer consomme-t-il beaucoup ?',
        answer: 'Non, typiquement entre 0.7 et 1.2 kWh par cuisson.',
      },
    ])
    expect(schema).toBeDefined()
    expect(schema!['@context']).toBe('https://schema.org')
    expect(schema!['@type']).toBe('FAQPage')
    expect(schema!.mainEntity.length).toBe(2)
    expect(schema!.mainEntity[0]['@type']).toBe('Question')
    expect(schema!.mainEntity[0].acceptedAnswer['@type']).toBe('Answer')
  })

  it('returns undefined when the input list is empty', () => {
    expect(buildFaqPageSchema([])).toBeUndefined()
  })

  it('filters out entries with empty question or answer', () => {
    const schema = buildFaqPageSchema([
      { question: '', answer: 'orphan answer' },
      { question: 'orphan question', answer: '' },
      { question: '   ', answer: '   ' },
      { question: 'Real Q?', answer: 'Real A.' },
    ])
    expect(schema).toBeDefined()
    expect(schema!.mainEntity.length).toBe(1)
    expect(schema!.mainEntity[0].name).toBe('Real Q?')
  })

  it('returns undefined if every entry is filtered out', () => {
    expect(
      buildFaqPageSchema([
        { question: '', answer: '' },
        { question: '   ', answer: '   ' },
      ])
    ).toBeUndefined()
  })
})

describe('buildBestForItemListSchema', () => {
  const baseInput = {
    lang: 'fr',
    path: '/cuisine-connectee/airfryers/meilleur-pour/famille-4-personnes',
    name: 'Le meilleur airfryer pour famille 4 personnes en 2026',
    description: 'Sélection Home Nura pondérée sur la capacité, le coût annuel et la durabilité cinq ans.',
    criteria: [
      'Capacité adaptée à une famille de quatre personnes',
      'Ergonomie d\'usage quotidien',
      'Maintenance simple',
      'Coût énergétique annuel en euros',
      'Durabilité cinq ans et pièces détachées',
    ],
  }

  it('returns a well-formed ItemList with correct @type and order', () => {
    const s = buildBestForItemListSchema(baseInput)
    expect(s['@context']).toBe('https://schema.org')
    expect(s['@type']).toBe('ItemList')
    expect(s.itemListOrder).toBe('https://schema.org/ItemListOrderDescending')
    expect(s.numberOfItems).toBe(5)
    expect(s.itemListElement.length).toBe(5)
  })

  it('builds an absolute canonical URL from lang + path', () => {
    const s = buildBestForItemListSchema(baseInput)
    expect(s.url).toBe(
      `${BASE_URL}/fr/cuisine-connectee/airfryers/meilleur-pour/famille-4-personnes`
    )
  })

  it('normalises a leading-slash-missing path', () => {
    const s = buildBestForItemListSchema({
      ...baseInput,
      path: 'cuisine-connectee/airfryers/meilleur-pour/famille-4-personnes',
    })
    expect(s.url).toContain(`${BASE_URL}/fr/cuisine-connectee/`)
  })

  it('numbers list items starting from 1 in input order (descending rank)', () => {
    const s = buildBestForItemListSchema(baseInput)
    s.itemListElement.forEach((el, i) => {
      expect(el['@type']).toBe('ListItem')
      expect(el.position).toBe(i + 1)
      expect(el.item['@type']).toBe('Thing')
      expect(el.item.name).toBe(baseInput.criteria[i])
    })
  })

  it('emits dateModified from SITE_LAST_UPDATED_ISO for freshness signal', () => {
    const s = buildBestForItemListSchema(baseInput)
    expect(s.dateModified).toBe(SITE_LAST_UPDATED_ISO)
  })

  it('falls back to fr when given an unknown lang', () => {
    const s = buildBestForItemListSchema({ ...baseInput, lang: 'xx' })
    expect(s.url).toContain('/fr/')
  })

  it('propagates name and description verbatim', () => {
    const s = buildBestForItemListSchema(baseInput)
    expect(s.name).toBe(baseInput.name)
    expect(s.description).toBe(baseInput.description)
  })

  it('handles an empty criteria list gracefully (numberOfItems = 0)', () => {
    const s = buildBestForItemListSchema({ ...baseInput, criteria: [] })
    expect(s.numberOfItems).toBe(0)
    expect(s.itemListElement.length).toBe(0)
  })
})
