import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { AMAZON_ASSOCIATE_DISCLOSURE } from '@/lib/affiliate-disclosure'
import { AMAZON_STORE_ID, amazonMarket } from '@/lib/amazon'
import { amazonAffiliationNotice } from '@/lib/amazon-affiliation-notice'
import { LANGUAGES } from '@/lib/i18n'

// Legal notice paragraph on the affiliate programme: it must describe the
// links as they are built in lib/amazon.ts (one French account, a tracking
// ID per language version, Amazon.it for Italian, Amazon.fr + Global
// Earning elsewhere) and end with Amazon's exact disclosure sentence.
describe('Amazon affiliation notice (legal notice)', () => {
  it.each(LANGUAGES)('%s names the store ID and the tracking ID of its own version', (lang) => {
    const notice = amazonAffiliationNotice(lang)
    expect(notice).toContain(AMAZON_STORE_ID)
    expect(notice).toContain(amazonMarket(lang).tag)
  })

  it.each(LANGUAGES)('%s says links go to Amazon.fr, Italian ones to Amazon.it, with Global Earning', (lang) => {
    const notice = amazonAffiliationNotice(lang)
    expect(notice).toContain('Amazon.fr')
    expect(notice).toContain('Amazon.it')
    expect(notice).toContain('Global Earning')
  })

  it.each(LANGUAGES)('%s ends with the exact Associates disclosure', (lang) => {
    const notice = amazonAffiliationNotice(lang)
    expect(notice.endsWith(` ${AMAZON_ASSOCIATE_DISCLOSURE[lang]}`)).toBe(true)
  })

  it('names no other version tracking ID than its own', () => {
    for (const lang of LANGUAGES) {
      const others = LANGUAGES.filter((l) => l !== lang && amazonMarket(l).tag !== AMAZON_STORE_ID)
      const notice = amazonAffiliationNotice(lang)
      expect(others.filter((l) => notice.includes(amazonMarket(l).tag)), lang).toEqual([])
    }
  })

  it('is the paragraph rendered by the legal notice page', () => {
    const page = readFileSync(join(process.cwd(), 'app', '[lang]', 'mentions-legales', 'page.tsx'), 'utf8')
    expect(page).toContain('amazonAffiliationNotice(')
    expect(page).not.toMatch(/Tous les liens Amazon du site, dans toutes les langues/)
  })
})
