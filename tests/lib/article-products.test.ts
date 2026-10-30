import { describe, it, expect } from 'vitest'
import { getAllArticles } from '@/lib/blog'
import {
  articleProductSource,
  getArticleAffiliateModels,
  getArticleProducts,
  getArticleRecommendations,
} from '@/lib/blog/article-products'
import { getArticleModels } from '@/lib/blog/article-models'

describe('articleProductSource', () => {
  it('recommends air fryers only on air fryer articles', () => {
    expect(articleProductSource({ slug: 'ninja-vs-philips-quel-choisir', pillar: 'guides/airfryers' })).toBe('airfryers')
    expect(articleProductSource({ slug: 'airfryer-vs-four', pillar: 'guides/airfryer-vs-four' })).toBe('airfryers')
  })

  it('matches smart-kitchen articles to their product category', () => {
    expect(articleProductSource({ slug: 'cafetiere-connectee-guide', pillar: 'cuisine-connectee' })).toBe('cafetieres')
    expect(articleProductSource({ slug: 'balance-cuisine-connectee-comparatif', pillar: 'cuisine-connectee' })).toBe('balances')
    expect(articleProductSource({ slug: 'barbecue-connecte-thermometre-guide', pillar: 'outdoor-connecte' })).toBe('thermometres-viande')
    expect(articleProductSource({ slug: 'comparatif-smart-plugs-mesure-energie', pillar: 'energie-domotique' })).toBe('prises-connectees')
    expect(articleProductSource({ slug: 'comparatif-multicuiseur-connecte', pillar: 'cuisine-connectee' })).toBe('multicuiseurs')
  })

  it('shows no product block when the catalog has nothing on the topic', () => {
    expect(articleProductSource({ slug: 'camera-interieure-sans-abonnement', pillar: 'securite-maison' })).toBeNull()
    expect(articleProductSource({ slug: 'arrosage-connecte-intelligent', pillar: 'outdoor-connecte' })).toBeNull()
    // Cooking robots (Thermomix-type) are not multicookers: their guide cites its own models.
    expect(articleProductSource({ slug: 'robot-cuiseur-connecte-comparatif', pillar: 'cuisine-connectee' })).toBeNull()
    // Cross-catalog comparisons (multicooker vs air fryer) link the models they cite.
    expect(articleProductSource({ slug: 'cookeo-vs-thermomix-vs-airfryer', pillar: 'cuisine-connectee' })).toBeNull()
  })
})

describe('getArticleProducts', () => {
  it('never returns air fryers on an article that is not about air fryers', () => {
    for (const article of getAllArticles()) {
      const { source, products } = getArticleProducts(article, 'fr')
      if (source !== 'airfryers') {
        expect(products.every((p) => !/air ?fryer|friteuse/i.test(p.title)), article.slug).toBe(true)
      }
      if (source === null) expect(products).toEqual([])
    }
  })

  it('returns at most three products, best Nura score first when the article cites none', () => {
    const { products } = getArticleProducts({ slug: 'top-10-accessoires-airfryer', pillar: 'guides/airfryers' }, 'fr')
    expect(products.length).toBeGreaterThan(0)
    expect(products.length).toBeLessThanOrEqual(3)
    const scores = products.map((p) => p.nuraScore)
    expect([...scores].sort((a, b) => b - a)).toEqual(scores)
  })

  it('shows the catalog products an article cites first (a Cosori review shows the Cosori)', () => {
    const { products } = getArticleProducts({ slug: 'test-cosori-dual-blaze', pillar: 'guides/airfryers' }, 'fr')
    expect(products[0].title).toBe('Cosori Dual Blaze Smart Air Fryer - 6.4L')
  })
})

describe('getArticleProducts fill-ins', () => {
  it('never pads a budget guide with a pricier model than the ones it cites', () => {
    const { products } = getArticleProducts({ slug: 'meilleur-airfryer-petit-budget', pillar: 'guides/airfryers' }, 'fr')
    expect(products.map((p) => p.title)).not.toContain('Ninja Foodi MAX Double Stack XL Air Fryer - 9.5L')
    const citedMax = Math.max(...products.slice(0, 2).map((p) => p.priceNumeric))
    expect(products.every((p) => p.priceNumeric <= citedMax)).toBe(true)
  })

  it('keeps every fill-in within the price range of the cited products, for every article', () => {
    for (const article of getAllArticles()) {
      const { products } = getArticleProducts(article, 'fr')
      const cited = getArticleAffiliateModels(article, 'fr').filter((m) => m.cited && m.asin).map((m) => m.asin)
      const citedProducts = products.filter((p) => cited.includes(p.asin))
      if (citedProducts.length === 0) continue
      const ceiling = Math.max(...citedProducts.map((p) => p.priceNumeric))
      expect(products.every((p) => p.priceNumeric <= ceiling), article.slug).toBe(true)
    }
  })
})

describe('getArticleAffiliateModels', () => {
  it('links catalog models to their product page and other models to a search', () => {
    const models = getArticleAffiliateModels({ slug: 'meilleur-airfryer-petit-budget', pillar: 'guides/airfryers' }, 'de')
    const moulinex = models.find((m) => m.name === 'Moulinex Easy Fry Max 5L')!
    expect(moulinex).toMatchObject({ cited: true, asin: 'B0CG6C26QW', url: 'https://www.amazon.fr/dp/B0CG6C26QW?tag=homenuraen05-21' })
    const philips = models.find((m) => m.name.startsWith('Philips Airfryer Série 2000'))!
    expect(philips.asin).toBeUndefined()
    expect(philips.url).toMatch(/^https:\/\/www\.amazon\.fr\/s\?k=/)
  })

  it('adds the topic catalog after the cited models, without duplicates', () => {
    const models = getArticleAffiliateModels({ slug: 'test-cosori-dual-blaze', pillar: 'guides/airfryers' }, 'fr')
    expect(models[0].cited).toBe(true)
    expect(models.some((m) => !m.cited)).toBe(true)
    const asins = models.flatMap((m) => (m.asin ? [m.asin] : []))
    expect(new Set(asins).size).toBe(asins.length)
  })

  it('never offers a catalog product from another topic', () => {
    const models = getArticleAffiliateModels({ slug: 'guide-purificateur-air-2026', pillar: 'confort-air' }, 'fr')
    expect(models.every((m) => m.cited)).toBe(true)
    expect(models.some((m) => /fryer|friteuse/i.test(m.name))).toBe(false)
  })
})

describe('Spanish portable air-conditioner guides', () => {
  it('recommend portable ACs and fans already compared on the site', () => {
    for (const slug of ['aire-acondicionado-portatil-no-enfria', 'aire-acondicionado-portatil-sin-tubo']) {
      const rec = getArticleRecommendations({ slug, pillar: 'confort-air' }, 'es')
      expect(rec?.kind, slug).toBe('models')
      if (rec?.kind === 'models') {
        expect(rec.models.length, slug).toBeGreaterThanOrEqual(3)
        const citedElsewhere = new Set([
          ...getArticleModels('climatiseur-mobile-connecte-comparatif'),
          ...getArticleModels('ventilador-silencioso-dormitorio'),
        ])
        expect(rec.models.every((m) => citedElsewhere.has(m.name)), slug).toBe(true)
      }
    }
  })
})
