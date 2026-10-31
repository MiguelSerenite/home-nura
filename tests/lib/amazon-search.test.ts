import { describe, it, expect } from 'vitest'
import {
  AMAZON_MARKETPLACES,
  AMAZON_MARKETS,
  AMAZON_MISSING_ASINS,
  AMAZON_STORE_ID,
  amazonMarket,
  amazonMarketplace,
  amazonPageUrl,
  amazonProductUrl,
  amazonSearchUrl,
} from '@/lib/amazon'
import { LANGUAGES, type Lang } from '@/lib/i18n'
import { staticProducts } from '@/lib/products'
import { smartKitchenStaticProducts } from '@/lib/smart-kitchen-products'

// Tracking IDs of the French Associates account (store homenuraen05-21),
// read in Associates Central on 31/10/2026. Italian links go straight to
// amazon.it (homaviseit-21 offered by SiteStripe there); every other
// locale links to amazon.fr and relies on Global Earning.
const EXPECTED: Record<Lang, { origin: string; tag: string }> = {
  fr: { origin: 'https://www.amazon.fr', tag: 'homenuraen05-21' },
  en: { origin: 'https://www.amazon.fr', tag: 'homaviseuk-21' },
  de: { origin: 'https://www.amazon.fr', tag: 'homavisede-21' },
  es: { origin: 'https://www.amazon.fr', tag: 'homavisees-21' },
  it: { origin: 'https://www.amazon.it', tag: 'homaviseit-21' },
  nl: { origin: 'https://www.amazon.fr', tag: 'homavisenl-21' },
  pl: { origin: 'https://www.amazon.fr', tag: 'homavisepl-21' },
}

const ASSOCIATES_TAG = /^[a-z0-9]+-21$/

describe('Amazon market table', () => {
  it('gives every locale a market, and nothing else', () => {
    expect(Object.keys(AMAZON_MARKETS).sort()).toEqual([...LANGUAGES].sort())
  })

  it('uses Associates tracking IDs, one per locale', () => {
    const tags = LANGUAGES.map((lang) => amazonMarket(lang).tag)
    tags.forEach((tag) => expect(tag).toMatch(ASSOCIATES_TAG))
    expect(new Set(tags).size).toBe(tags.length)
  })

  it('matches the tracking IDs verified in Associates Central', () => {
    for (const lang of LANGUAGES) {
      const { baseUrl, tag } = amazonMarket(lang)
      expect({ origin: baseUrl, tag }, lang).toEqual(EXPECTED[lang])
    }
  })

  it('keeps the store ID on French links (it carries all past sales)', () => {
    expect(AMAZON_STORE_ID).toBe('homenuraen05-21')
    expect(amazonMarket('fr').tag).toBe(AMAZON_STORE_ID)
  })

  it('reports the store host of each locale for click analytics', () => {
    expect(amazonMarketplace('it')).toBe('amazon.it')
    for (const lang of LANGUAGES.filter((l) => l !== 'it')) expect(amazonMarketplace(lang), lang).toBe('amazon.fr')
    expect([...AMAZON_MARKETPLACES].sort()).toEqual(['amazon.fr', 'amazon.it'])
  })
})

describe('amazon links', () => {
  it('build product pages from the ASIN on the locale store, with its tag', () => {
    expect(amazonProductUrl('B0CZPJ1HFP', 'fr')).toBe('https://www.amazon.fr/dp/B0CZPJ1HFP?tag=homenuraen05-21')
    expect(amazonProductUrl('B0CZPJ1HFP', 'de')).toBe('https://www.amazon.fr/dp/B0CZPJ1HFP?tag=homavisede-21')
    expect(amazonProductUrl('B0CZPJ1HFP', 'it')).toBe('https://www.amazon.it/dp/B0CZPJ1HFP?tag=homaviseit-21')
  })

  it('build search pages from the model name', () => {
    expect(amazonSearchUrl('Nuki Smart Lock 4.0', 'fr')).toBe('https://www.amazon.fr/s?k=Nuki+Smart+Lock+4.0&tag=homenuraen05-21')
    expect(amazonSearchUrl('Nuki Smart Lock 4.0', 'en')).toBe('https://www.amazon.fr/s?k=Nuki+Smart+Lock+4.0&tag=homaviseuk-21')
    expect(amazonSearchUrl('Nuki Smart Lock 4.0', 'it')).toBe('https://www.amazon.it/s?k=Nuki+Smart+Lock+4.0&tag=homaviseit-21')
  })

  it('encodes special characters', () => {
    expect(amazonSearchUrl("De'Longhi Dedica & Co", 'fr')).toBe(
      'https://www.amazon.fr/s?k=De%27Longhi+Dedica+%26+Co&tag=homenuraen05-21',
    )
  })

  it('build other pages with the tag after their own parameters', () => {
    expect(amazonPageUrl('/blackfriday', 'fr')).toBe('https://www.amazon.fr/blackfriday?tag=homenuraen05-21')
    expect(amazonPageUrl('/blackfriday', 'it')).toBe('https://www.amazon.it/blackfriday?tag=homaviseit-21')
    expect(amazonPageUrl('/amazonprime', 'fr', { _encoding: 'UTF8', primeCampaignId: 'prime_assoc_ft' })).toBe(
      'https://www.amazon.fr/amazonprime?_encoding=UTF8&primeCampaignId=prime_assoc_ft&tag=homenuraen05-21',
    )
  })

  it('never lets a page parameter override the tag', () => {
    const url = new URL(amazonPageUrl('/blackfriday', 'nl', { tag: 'someone-else-21' }))
    expect(url.searchParams.getAll('tag')).toEqual(['homavisenl-21'])
  })
})

describe('catalog ASINs missing from a store', () => {
  const catalog = [...staticProducts, ...smartKitchenStaticProducts]

  it('lists the two catalog products amazon.it does not carry (404 on 31/10/2026)', () => {
    expect(Object.keys(AMAZON_MISSING_ASINS).sort()).toEqual(['it'])
    expect(Object.keys(AMAZON_MISSING_ASINS.it ?? {}).sort()).toEqual(['B0BYT67H2S', 'B0FPWSDF86'])
  })

  it('only lists catalog ASINs, each searched by its model name', () => {
    for (const [lang, missing] of Object.entries(AMAZON_MISSING_ASINS)) {
      for (const [asin, model] of Object.entries(missing ?? {})) {
        const product = catalog.find((p) => p.asin === asin)
        expect(product, `${lang}/${asin}`).toBeDefined()
        expect(product!.title.fr, `${lang}/${asin}`).toContain(model)
      }
    }
  })

  it('links them to an amazon.it search for the model, with the Italian tag', () => {
    expect(amazonProductUrl('B0FPWSDF86', 'it')).toBe('https://www.amazon.it/s?k=Cosori+Dual+Blaze+Smart&tag=homaviseit-21')
    expect(amazonProductUrl('B0BYT67H2S', 'it')).toBe(
      'https://www.amazon.it/s?k=Instant+Pot+Duo+Plus+WhisperQuiet&tag=homaviseit-21',
    )
  })

  it('keeps their product page on the other stores', () => {
    expect(amazonProductUrl('B0FPWSDF86', 'fr')).toBe('https://www.amazon.fr/dp/B0FPWSDF86?tag=homenuraen05-21')
    expect(amazonProductUrl('B0BYT67H2S', 'es')).toBe('https://www.amazon.fr/dp/B0BYT67H2S?tag=homavisees-21')
  })

  it('links the 22 other catalog ASINs to their amazon.it product page', () => {
    const onAmazonIt = catalog.filter((p) => !(p.asin in (AMAZON_MISSING_ASINS.it ?? {})))
    expect(onAmazonIt).toHaveLength(22)
    for (const { asin } of onAmazonIt) {
      expect(amazonProductUrl(asin, 'it')).toBe(`https://www.amazon.it/dp/${asin}?tag=homaviseit-21`)
    }
  })
})
