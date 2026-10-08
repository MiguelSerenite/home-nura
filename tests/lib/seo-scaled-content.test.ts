import { describe, it, expect } from 'vitest'
import sitemap from '@/app/sitemap'
import { buildPageMetadata } from '@/lib/seo'
import { getIndexableCategories } from '@/lib/catalog'
import { getCategoryHero } from '@/lib/catalog/content'
import { LANGUAGES } from '@/lib/i18n'

describe('scaled templated pages stay out of the index', () => {
  const urls = sitemap().map((e) => e.url)

  it('does not list best-for, buyer-persona or problem template pages', () => {
    expect(urls.filter((u) => u.includes('/meilleur-pour/'))).toEqual([])
    expect(urls.filter((u) => u.includes('/guides/acheteur/'))).toEqual([])
    expect(urls.filter((u) => u.includes('/guides/probleme/'))).toEqual([])
  })
})

describe('category hero copy', () => {
  it('never shows internal SEO notes to visitors', () => {
    const leaks = /Requête cible|Target query|Zielanfrage|Búsqueda objetivo|Query target|Doelzoekopdracht/
    for (const lang of LANGUAGES) {
      for (const cat of getIndexableCategories()) {
        expect(getCategoryHero(lang, cat).intro, `${lang}/${cat.slug}`).not.toMatch(leaks)
      }
    }
  })
})

describe('buildPageMetadata SERP limits', () => {
  const long = 'Lorem ipsum dolor sit amet consectetur adipiscing elit '.repeat(6)

  it('caps descriptions at 155 characters on a word boundary', () => {
    const m = buildPageMetadata({ lang: 'fr', path: '/x', title: 'T', description: long })
    const d = String(m.description)
    expect(d.length).toBeLessThanOrEqual(155)
    expect(d.endsWith('…')).toBe(true)
    expect(long.startsWith(d.slice(0, -1).trimEnd())).toBe(true)
  })

  it('keeps short descriptions untouched', () => {
    const m = buildPageMetadata({ lang: 'fr', path: '/x', title: 'T', description: 'Court.' })
    expect(m.description).toBe('Court.')
  })

  it('drops the brand suffix when the title would exceed 60 characters', () => {
    const base = 'Les meilleurs aspirateurs robots pour poils danimaux 2026'
    const m = buildPageMetadata({ lang: 'fr', path: '/x', title: `${base} | Home Nura`, description: 'd' })
    expect(m.title).toBe(base)
  })

  it('keeps the brand suffix on short titles', () => {
    const m = buildPageMetadata({ lang: 'fr', path: '/x', title: 'Blog | Home Nura', description: 'd' })
    expect(m.title).toBe('Blog | Home Nura')
  })
})
