import { describe, it, expect } from 'vitest'
import { getAllArticles } from '@/lib/blog'
import { articleProductSource, getArticleProducts } from '@/lib/blog/article-products'

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
    expect(articleProductSource({ slug: 'robot-cuiseur-connecte-comparatif', pillar: 'cuisine-connectee' })).toBe('multicuiseurs')
  })

  it('shows no product block when the catalog has nothing on the topic', () => {
    expect(articleProductSource({ slug: 'camera-interieure-sans-abonnement', pillar: 'securite-maison' })).toBeNull()
    expect(articleProductSource({ slug: 'arrosage-connecte-intelligent', pillar: 'outdoor-connecte' })).toBeNull()
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

  it('returns at most three products, best Nura score first', () => {
    const { products } = getArticleProducts({ slug: 'cafetiere-connectee-guide', pillar: 'cuisine-connectee' }, 'fr')
    expect(products.length).toBeGreaterThan(0)
    expect(products.length).toBeLessThanOrEqual(3)
    const scores = products.map((p) => p.nuraScore)
    expect([...scores].sort((a, b) => b - a)).toEqual(scores)
  })
})
