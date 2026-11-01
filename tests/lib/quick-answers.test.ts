import { describe, it, expect } from 'vitest'
import { getAllArticles } from '@/lib/blog'
import { QUICK_ANSWERS, getQuickAnswer } from '@/lib/blog/quick-answers'
import { amazonMarket } from '@/lib/amazon'
import { LANGUAGES } from '@/lib/i18n'
import { isNorthAmericanMarket } from '@/lib/market-models'

describe('quick answers', () => {
  const articles = getAllArticles()

  it('only covers existing articles', () => {
    const slugs = new Set(articles.map((a) => a.slug))
    expect(Object.keys(QUICK_ANSWERS).filter((s) => !slugs.has(s))).toEqual([])
  })

  // The US and Canadian verdicts carry their own market picks:
  // tests/lib/market-models/surfaces.test.ts.
  it('resolves every pick to a buy link in every European locale', () => {
    const missing: string[] = []
    for (const article of articles.filter((a) => QUICK_ANSWERS[a.slug])) {
      for (const lang of LANGUAGES.filter((l) => !isNorthAmericanMarket(l))) {
        const qa = getQuickAnswer(article, lang)
        const expected = QUICK_ANSWERS[article.slug].picks.length
        if (!qa || qa.picks.length !== expected) missing.push(`${lang}/${article.slug}: ${qa?.picks.length ?? 0}/${expected}`)
        qa?.picks.forEach((p) => expect(p.url.startsWith(`${amazonMarket(lang).baseUrl}/`), `${lang}/${article.slug}`).toBe(true))
      }
    }
    expect(missing).toEqual([])
  })

  it('links Spanish readers of the smart lock guide to amazon.fr with the Spanish tag (Global Earning)', () => {
    const lock = articles.find((a) => a.slug === 'serrure-connectee-guide')!
    const qa = getQuickAnswer(lock, 'es')!
    expect(qa.question).toMatch(/\?$/)
    expect(qa.picks[0].model).toBe('Nuki Smart Lock Pro (5th generation)')
    expect(qa.picks[0].url).toContain('https://www.amazon.fr/')
    expect(qa.picks[0].url).toContain('tag=homavisees-21')
  })

  it('links Italian readers to amazon.it with the Italian tag', () => {
    const lock = articles.find((a) => a.slug === 'serrure-connectee-guide')!
    const qa = getQuickAnswer(lock, 'it')!
    expect(qa.picks[0].url).toBe('https://www.amazon.it/s?k=Nuki+Smart+Lock+Pro+%285th+generation%29&tag=homaviseit-21')
  })
})
