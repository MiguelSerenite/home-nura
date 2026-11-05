import { describe, it, expect, afterEach, vi } from 'vitest'
import { amazonMarket } from '@/lib/amazon'
import { CLICK_PLACEMENTS, parseAffiliateClick, storeOf, tagOf } from '@/lib/affiliate-click'
import { trackAffiliateClick } from '@/lib/analytics'
import { COOLBLUE_STORE, COOLBLUE_TAG } from '@/lib/merchant-offers/types'

const AWIN_LINK = 'https://www.awin1.com/pclick.php?p=1005&a=1255925&m=85161'
const NL = amazonMarket('nl')
const coolblueClick = {
  path: '/nl/confort-air/purificateurs-air',
  lang: 'nl',
  placement: 'coolblue_offer',
  model: 'Levoit Core 300S',
  store: COOLBLUE_STORE,
  tag: COOLBLUE_TAG,
}

describe('Coolblue clicks', () => {
  afterEach(() => {
    // @ts-expect-error test cleanup
    delete globalThis.window
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('has its own placement', () => {
    expect(CLICK_PLACEMENTS).toContain('coolblue_offer')
  })

  it('reads the store and tag of our Awin link, never an Amazon one', () => {
    expect(storeOf(AWIN_LINK)).toBe('coolblue.nl')
    expect(tagOf(AWIN_LINK)).toBe('awin-1255925')
    expect(storeOf('https://www.awin1.com/pclick.php?p=1&a=42&m=85161')).toBeNull()
    expect(storeOf('https://coolblue.nl/product/1')).toBeNull()
  })

  it('accepts a Dutch Coolblue beacon', () => {
    expect(parseAffiliateClick(coolblueClick)).toMatchObject({ store: 'coolblue.nl', tag: 'awin-1255925', market: 'nl', placement: 'coolblue_offer' })
  })

  it.each([
    ['from another version', { ...coolblueClick, lang: 'de', path: '/de/x' }],
    ['with an Amazon tag', { ...coolblueClick, tag: NL.tag }],
    ['an Amazon store with the Awin tag', { ...coolblueClick, store: NL.marketplace }],
  ])('rejects a Coolblue beacon %s', (_label, body) => {
    expect(parseAffiliateClick(body)).toBeNull()
  })

  it('reads coolblue.de and coolblue.be from their Awin links', () => {
    expect(storeOf('https://www.awin1.com/pclick.php?p=1&a=1255925&m=85171')).toBe('coolblue.de')
    expect(storeOf('https://www.awin1.com/cread.php?awinmid=85165&awinaffid=1255925&ued=x')).toBe('coolblue.be')
    expect(tagOf('https://www.awin1.com/pclick.php?p=1&a=1255925&m=85165')).toBe('awin-1255925')
    expect(storeOf('https://www.coolblue.de/produkt/1')).toBeNull()
  })

  it.each([
    ['coolblue.de', 'de'],
    ['coolblue.be', 'nl'],
    ['coolblue.be', 'fr'],
  ])('accepts a %s beacon from /%s', (store, lang) => {
    expect(parseAffiliateClick({ ...coolblueClick, store, lang, path: `/${lang}/x` })).toMatchObject({ store, market: lang })
  })

  it.each([
    ['coolblue.de', 'nl'],
    ['coolblue.be', 'de'],
    ['coolblue.nl', 'fr'],
    ['coolblue.be', 'it'],
  ])('rejects a %s beacon from /%s', (store, lang) => {
    expect(parseAffiliateClick({ ...coolblueClick, store, lang, path: `/${lang}/x` })).toBeNull()
  })

  it('sends the Coolblue store and Awin tag from trackAffiliateClick', () => {
    // @ts-expect-error minimal window
    globalThis.window = { location: { pathname: '/nl/confort-air/purificateurs-air' } }
    const sendBeacon = vi.fn((_url: string, _body: string) => true)
    vi.stubGlobal('navigator', { sendBeacon })
    vi.spyOn(console, 'debug').mockImplementation(() => {})
    trackAffiliateClick({ asin: '', productName: 'Levoit Core 300S', location: 'coolblue_offer', lang: 'nl', placement: 'coolblue_offer', url: AWIN_LINK })
    const beacon = JSON.parse(sendBeacon.mock.calls[0][1])
    expect(beacon).toMatchObject({ store: 'coolblue.nl', tag: 'awin-1255925', placement: 'coolblue_offer', lang: 'nl' })
    expect(parseAffiliateClick(beacon)).not.toBeNull()
  })
})
