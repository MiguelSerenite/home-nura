import { describe, it, expect } from 'vitest'
import { getAllArticles } from '@/lib/blog'
import { ARTICLE_MODELS, getArticleModels } from '@/lib/blog/article-models'
import { getArticleRecommendations } from '@/lib/blog/article-products'

describe('article models', () => {
  const slugs = new Set(getAllArticles().map((a) => a.slug))

  it('only references existing articles', () => {
    expect(Object.keys(ARTICLE_MODELS).filter((s) => !slugs.has(s))).toEqual([])
  })

  it('prefers catalog products, and falls back to cited models with store search links', () => {
    const withCatalog = getArticleRecommendations({ slug: 'cafetiere-connectee-guide', pillar: 'cuisine-connectee' }, 'fr')
    expect(withCatalog?.kind).toBe('catalog')
    const lock = getArticleRecommendations({ slug: 'serrure-connectee-guide', pillar: 'securite-maison' }, 'es')
    expect(lock?.kind).toBe('models')
    if (lock?.kind === 'models') {
      expect(lock.models[0]).toEqual({
        name: 'Nuki Smart Lock Pro (5th generation)',
        url: 'https://www.amazon.es/s?k=Nuki+Smart+Lock+Pro+%285th+generation%29&tag=homenuraen0a-21',
      })
    }
    expect(getArticleRecommendations({ slug: 'meal-prep-airfryer-semaine', pillar: 'culture' }, 'fr')).toBeNull()
  })

  it('caps the list at 5 non-empty, unique model names', () => {
    for (const slug of Object.keys(ARTICLE_MODELS)) {
      const models = getArticleModels(slug)
      expect(models.length, slug).toBeGreaterThan(0)
      expect(models.length, slug).toBeLessThanOrEqual(5)
      expect(new Set(models).size, slug).toBe(models.length)
      expect(models.every((m) => m.trim().length > 2), slug).toBe(true)
    }
  })

  it('returns nothing for articles without cited models', () => {
    expect(getArticleModels('meal-prep-airfryer-semaine')).toEqual([])
  })
})
