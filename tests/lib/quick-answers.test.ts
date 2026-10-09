import { describe, it, expect } from 'vitest'
import { getAllArticles } from '@/lib/blog'
import { QUICK_ANSWERS, getQuickAnswer } from '@/lib/blog/quick-answers'
import { LANGUAGES } from '@/lib/i18n'

describe('quick answers', () => {
  const articles = getAllArticles()

  it('only covers existing articles', () => {
    const slugs = new Set(articles.map((a) => a.slug))
    expect(Object.keys(QUICK_ANSWERS).filter((s) => !slugs.has(s))).toEqual([])
  })

  it('resolves every pick to a buy link in all 6 locales', () => {
    const missing: string[] = []
    for (const article of articles.filter((a) => QUICK_ANSWERS[a.slug])) {
      for (const lang of LANGUAGES) {
        const qa = getQuickAnswer(article, lang)
        const expected = QUICK_ANSWERS[article.slug].picks.length
        if (!qa || qa.picks.length !== expected) missing.push(`${lang}/${article.slug}: ${qa?.picks.length ?? 0}/${expected}`)
        qa?.picks.forEach((p) => expect(p.url, `${lang}/${article.slug}`).toMatch(/^https:\/\/www\.amazon\./))
      }
    }
    expect(missing).toEqual([])
  })

  it('links Spanish readers of the smart lock guide to amazon.es', () => {
    const lock = articles.find((a) => a.slug === 'serrure-connectee-guide')!
    const qa = getQuickAnswer(lock, 'es')!
    expect(qa.question).toMatch(/\?$/)
    expect(qa.picks[0].model).toBe('Nuki Smart Lock Pro (5th generation)')
    expect(qa.picks[0].url).toContain('https://www.amazon.es/')
  })
})
