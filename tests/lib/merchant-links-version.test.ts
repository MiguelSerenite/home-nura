import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { amazonMarket, amazonProductUrl, AMAZON_TAGS } from '@/lib/amazon'
import { LANGUAGES } from '@/lib/i18n'

/**
 * Merchant links follow the version displayed (lib/amazon.ts, keyed by
 * the page's lang): a country switch loads the target version's page, whose
 * links carry the target market's store and tracking ID. Neither the
 * remembered choice (hn_market), the IP country (hn_country) nor the
 * previous page can change them.
 */
describe('merchant links follow the displayed version', () => {
  it('build every product link from the page locale alone, with that market tag only', () => {
    for (const lang of LANGUAGES) {
      const url = new URL(amazonProductUrl('B0TESTASIN', lang))
      const { baseUrl, tag } = amazonMarket(lang)
      expect(url.origin, lang).toBe(new URL(baseUrl).origin)
      expect(url.searchParams.get('tag'), lang).toBe(tag)
      for (const other of AMAZON_TAGS.filter((t) => t !== tag)) expect(url.toString(), lang).not.toContain(other)
    }
    expect(new URL(amazonProductUrl('B0TESTASIN', 'it')).hostname).toBe('www.amazon.it')
    expect(new URL(amazonProductUrl('B0TESTASIN', 'us')).searchParams.get('tag')).toBe('homaviseus-21')
  })

  it('never read the country choice, the IP country or any cookie', () => {
    const amazon = readFileSync(join(process.cwd(), 'lib/amazon.ts'), 'utf8')
    expect(amazon).not.toMatch(/cookie|hn_market|hn_country|market-preference|document\.|window\./i)
  })

  it('are re-rendered on a switch: switch links are full page loads, never client-side transitions', () => {
    for (const file of ['components/CountrySelector.tsx', 'components/LocaleNotices.tsx', 'components/entry/EntryChoiceLink.tsx']) {
      const source = readFileSync(join(process.cwd(), file), 'utf8')
      expect(source, file).not.toMatch(/from 'next\/link'/)
      expect(source, file).toMatch(/<a\b/)
    }
  })
})
