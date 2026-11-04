import { describe, it, expect } from 'vitest'
import {
  GATED_COUNTRIES,
  MERCHANTS,
  MERCHANT_STORES,
  audienceIncludes,
  langsOfStore,
  merchantById,
  merchantsForLang,
  storeOfAdvertiser,
} from '@/lib/merchant-offers/merchants'
import { COOLBLUE_FEED_IDS, coolblueFeedUrls, createAFeedUrl } from '@/lib/merchant-offers/feed'
import { COOLBLUE_AWIN_ADVERTISER_ID, COOLBLUE_STORE, isCoolblueAwinLink, merchantStoreOf } from '@/lib/merchant-offers/types'
import { LANGUAGES } from '@/lib/i18n'

describe('merchant table', () => {
  it('lists Coolblue NL, DE and BE (Dutch and French feeds) with their Awin programmes', () => {
    expect(MERCHANTS.map((m) => [m.id, m.advertiserId, m.feedIds, m.feedLanguage, m.store, m.langs])).toEqual([
      ['coolblue-nl', '85161', ['95890', '95892', '95897', '95834', '95904', '95886'], 'nl', 'coolblue.nl', ['nl']],
      ['coolblue-de', '85171', ['95921'], 'de', 'coolblue.de', ['de']],
      ['coolblue-be-nl', '85165', ['96638'], 'nl', 'coolblue.be', ['nl']],
      ['coolblue-be-fr', '85165', ['96637'], 'fr', 'coolblue.be', ['fr']],
    ])
    expect(new Set(MERCHANTS.map((m) => m.id)).size).toBe(MERCHANTS.length)
    expect(MERCHANTS.every((m) => m.langs.every((lang) => (LANGUAGES as readonly string[]).includes(lang)))).toBe(true)
  })

  it('keeps Coolblue NL as before #80 defined it', () => {
    expect(COOLBLUE_AWIN_ADVERTISER_ID).toBe('85161')
    expect(COOLBLUE_STORE).toBe('coolblue.nl')
    expect(COOLBLUE_FEED_IDS).toEqual(merchantById('coolblue-nl').feedIds)
    expect(coolblueFeedUrls('K', [])).toEqual(COOLBLUE_FEED_IDS.map((id) => createAFeedUrl('K', id)))
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
    expect(storeOfAdvertiser('85171')).toBe('coolblue.de')
    expect(storeOfAdvertiser('1')).toBeNull()
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

  it('downloads each merchant feed in its own language', () => {
    expect(coolblueFeedUrls('K', [], merchantById('coolblue-de'))).toEqual([createAFeedUrl('K', '95921', 'de')])
    expect(createAFeedUrl('K', '96637', 'fr')).toContain('/language/fr/fid/96637/')
    const list = [{ feedId: '96638', advertiserId: '85165', url: 'https://ui.awin.com/x/96638.csv.gz', lastImported: null }]
    expect(coolblueFeedUrls('K', list, merchantById('coolblue-be-nl'))).toEqual(['https://ui.awin.com/x/96638.csv.gz'])
    // The same feed ID under another advertiser is not the merchant's feed.
    expect(coolblueFeedUrls('K', [{ ...list[0], advertiserId: '85161' }], merchantById('coolblue-be-nl'))).toEqual([createAFeedUrl('K', '96638', 'nl')])
  })
})
