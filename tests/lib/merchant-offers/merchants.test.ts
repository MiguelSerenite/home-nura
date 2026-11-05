import { describe, it, expect } from 'vitest'
import { GATED_COUNTRIES, MERCHANTS, audienceIncludes, merchantById, merchantsForLang } from '@/lib/merchant-offers/merchants'
import { COOLBLUE_FEED_IDS, createAFeedUrl } from '@/lib/merchant-offers/feed'
import {
  ADVERTISER_STORES,
  COOLBLUE_AWIN_ADVERTISER_ID,
  COOLBLUE_STORE,
  MERCHANT_STORES,
  STORE_LANGS,
  isCoolblueAwinLink,
  langsOfStore,
  merchantStoreOf,
} from '@/lib/merchant-offers/types'
import { LANGUAGES } from '@/lib/i18n'

describe('merchant table', () => {
  it('lists Coolblue NL, DE and BE (Dutch and French feeds) with their Awin programmes', () => {
    expect(MERCHANTS.map((m) => [m.id, m.advertiserId, m.feedIds, m.feedLanguage, m.store, m.langs])).toEqual([
      ['coolblue-nl', '85161', ['96636'], 'nl', 'coolblue.nl', ['nl']],
      ['coolblue-de', '85171', ['95921'], 'de', 'coolblue.de', ['de']],
      ['coolblue-be-nl', '85165', ['96638'], 'nl', 'coolblue.be', ['nl']],
      ['coolblue-be-fr', '85165', ['96637'], 'fr', 'coolblue.be', ['fr']],
    ])
    expect(new Set(MERCHANTS.map((m) => m.id)).size).toBe(MERCHANTS.length)
    expect(MERCHANTS.every((m) => m.langs.every((lang) => (LANGUAGES as readonly string[]).includes(lang)))).toBe(true)
  })

  it('keeps Coolblue NL’s programme, store and audience, now on its full feed', () => {
    expect(COOLBLUE_AWIN_ADVERTISER_ID).toBe('85161')
    expect(COOLBLUE_STORE).toBe('coolblue.nl')
    expect(COOLBLUE_FEED_IDS).toEqual(['96636'])
  })

  it('mirrors the table in the client-safe store constants', () => {
    expect(ADVERTISER_STORES).toEqual(Object.fromEntries(MERCHANTS.map((m) => [m.advertiserId, m.store])))
    const langs = (store: string) => [...new Set(MERCHANTS.filter((m) => m.store === store).flatMap((m) => m.langs))]
    expect(STORE_LANGS).toEqual(Object.fromEntries(MERCHANT_STORES.map((store) => [store, langs(store)])))
    expect(new Set(MERCHANT_STORES)).toEqual(new Set(MERCHANTS.map((m) => m.store)))
  })

  it('names the store of every offer before the click', () => {
    expect(MERCHANTS.every((m) => m.label.startsWith('Coolblue'))).toBe(true)
    expect(merchantById('coolblue-be-fr').label).toBe('Coolblue (Belgique)')
    expect(merchantById('coolblue-be-nl').label).toBe('Coolblue (België)')
  })

  it('shows NL and BE on /nl, DE on /de, BE on /fr and nothing elsewhere', () => {
    expect(merchantsForLang('nl').map((m) => m.id)).toEqual(['coolblue-nl', 'coolblue-be-nl'])
    expect(merchantsForLang('de').map((m) => m.id)).toEqual(['coolblue-de'])
    expect(merchantsForLang('fr').map((m) => m.id)).toEqual(['coolblue-be-fr'])
    for (const lang of LANGUAGES.filter((l) => !['nl', 'de', 'fr'].includes(l))) expect(merchantsForLang(lang)).toEqual([])
  })

  it('gives Coolblue BE to Belgian visitors only, and Coolblue NL to everyone else', () => {
    const nl = merchantById('coolblue-nl').audience
    const be = merchantById('coolblue-be-nl').audience
    expect(merchantById('coolblue-be-fr').audience).toEqual(be)
    expect(merchantById('coolblue-de').audience).toEqual({ kind: 'all' })
    for (const country of ['NL', 'DE', 'FR', null]) {
      expect(audienceIncludes(nl, country)).toBe(true)
      expect(audienceIncludes(be, country)).toBe(false)
    }
    expect(audienceIncludes(nl, 'BE')).toBe(false)
    expect(audienceIncludes(be, 'BE')).toBe(true)
    expect(audienceIncludes(be, 'be')).toBe(true)
    expect(GATED_COUNTRIES).toEqual(['BE'])
  })

  it('maps stores and advertisers', () => {
    expect(MERCHANT_STORES).toEqual(['coolblue.nl', 'coolblue.de', 'coolblue.be'])
    expect(langsOfStore('coolblue.be')).toEqual(['nl', 'fr'])
    expect(langsOfStore('coolblue.de')).toEqual(['de'])
    expect(langsOfStore('amazon.fr')).toEqual([])
  })

  it('accepts our Awin links to each merchant, and only to the advertiser asked for', () => {
    const de = 'https://www.awin1.com/pclick.php?p=1&a=1255925&m=85171'
    const be = 'https://www.awin1.com/cread.php?awinmid=85165&awinaffid=1255925&ued=x'
    expect(isCoolblueAwinLink(de)).toBe(true)
    expect(isCoolblueAwinLink(be)).toBe(true)
    expect(isCoolblueAwinLink(de, '85171')).toBe(true)
    expect(isCoolblueAwinLink(de, '85161')).toBe(false)
    expect(isCoolblueAwinLink('https://www.awin1.com/pclick.php?p=1&a=1255925&m=99999')).toBe(false)
    expect(merchantStoreOf(de)).toBe('coolblue.de')
    expect(merchantStoreOf(be)).toBe('coolblue.be')
    expect(merchantStoreOf('https://www.awin1.com/pclick.php?p=1&a=42&m=85171')).toBeNull()
  })

  it('downloads each merchant feed in its own language, with our columns only', () => {
    expect(createAFeedUrl('K', '95921', 'de')).toContain('/language/de/fid/95921/columns/aw_deep_link,product_name,brand_name,search_price,')
    expect(createAFeedUrl('K', '96637', 'fr')).toContain('/language/fr/fid/96637/')
    expect(createAFeedUrl('K', '96636')).toContain('/language/nl/fid/96636/')
  })
})
