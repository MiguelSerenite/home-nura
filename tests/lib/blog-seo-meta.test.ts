import { describe, it, expect } from 'vitest'
import { getAllArticles } from '@/lib/blog'
import { BLOG_SEO_META } from '@/lib/blog/seo-meta'
import { LANGUAGES } from '@/lib/i18n'

const TITLE_MAX = 58
const TITLE_MIN = 40
const DESCRIPTION_MAX = 155
const DESCRIPTION_MIN = 140

describe('BLOG_SEO_META', () => {
  const articles = getAllArticles()

  it('covers every translated article/locale pair', () => {
    const missing = articles.flatMap((a) =>
      LANGUAGES.filter((l) => a.content[l] && !BLOG_SEO_META[a.slug]?.[l]).map((l) => `${l}/${a.slug}`),
    )
    expect(missing).toEqual([])
  })

  it('has no entry for an unknown slug', () => {
    const slugs = new Set(articles.map((a) => a.slug))
    expect(Object.keys(BLOG_SEO_META).filter((s) => !slugs.has(s))).toEqual([])
  })

  it('keeps titles and descriptions within SERP display limits', () => {
    const out: string[] = []
    for (const [slug, perLang] of Object.entries(BLOG_SEO_META)) {
      for (const [lang, meta] of Object.entries(perLang)) {
        if (!meta) continue
        if (meta.title.length < TITLE_MIN || meta.title.length > TITLE_MAX) out.push(`${lang}/${slug} title ${meta.title.length}`)
        if (meta.description.length < DESCRIPTION_MIN || meta.description.length > DESCRIPTION_MAX) out.push(`${lang}/${slug} description ${meta.description.length}`)
      }
    }
    expect(out).toEqual([])
  })

  it('has unique titles per locale', () => {
    for (const lang of LANGUAGES) {
      const titles = Object.values(BLOG_SEO_META).map((m) => m[lang]?.title).filter(Boolean)
      expect(new Set(titles).size, lang).toBe(titles.length)
    }
  })
})
