import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { gzipSync } from 'node:zlib'
import ProductCard from '@/components/ProductCard'
import { AWIN_KEY_ENV, __resetCoolblueFeedsForTests, coolblueOffersForPage } from '@/lib/merchant-offers/coolblue'
import { offerView } from '@/lib/merchant-offers/view'
import { getStaticProducts } from '@/lib/products'
import { renderHtml } from './render-html'

const NL_FEED = [
  'aw_deep_link,product_name,brand_name,search_price,currency,ean,in_stock,last_updated',
  // Coolblue's own names, not our catalogue titles: the reference code links them.
  'https://www.awin1.com/pclick.php?p=5001&a=1255925&m=85161,Philips Airfryer XL HD9270/90 Zwart,Philips,"119,00",EUR,,1,2026-11-02 05:12:33',
  'https://www.awin1.com/pclick.php?p=5002&a=1255925&m=85161,Krups Evidence One EA895N10 volautomatische espressomachine,Krups,"599,00",EUR,,1,2026-11-02 05:12:33',
  'https://www.awin1.com/pclick.php?p=5003&a=1255925&m=85161,Ninja Double Stack XL SL300EU,Ninja,"199,00",EUR,,1,2026-11-02 05:12:33',
].join('\n')

describe('kitchen pages: offers matched by the model’s reference code', () => {
  beforeEach(() => {
    __resetCoolblueFeedsForTests()
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(console, 'info').mockImplementation(() => {})
  })
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
    vi.restoreAllMocks()
  })

  it('finds the airfryer guide’s products through their ASIN, never a neighbour model', async () => {
    vi.stubEnv(AWIN_KEY_ENV, 'secret-test-key')
    vi.stubGlobal(
      'fetch',
      vi.fn(async (input: string | URL | Request) =>
        String(input).includes('/fid/96636/') ? new Response(new Uint8Array(gzipSync(Buffer.from(NL_FEED)))) : new Response('', { status: 404 }),
      ),
    )
    const products = getStaticProducts('nl')
    const offers = await coolblueOffersForPage('nl', products.map((p) => ({ name: p.title, asin: p.asin })))
    const airfryer = products.find((p) => p.title.includes('3000 Series XL'))
    expect(airfryer).toBeDefined()
    expect(offers[airfryer!.title]?.map((o) => [o.store, o.price])).toEqual([['coolblue.nl', 119]])
    // The SL400EU double stack is not Coolblue's SL300EU.
    const ninja = products.find((p) => p.title.includes('Double Stack'))
    expect(ninja && offers[ninja.title]).toBeUndefined()
  })

  it('renders the offer under the Amazon button of a product card, and nothing without one', async () => {
    const offer = offerView({ merchant: 'coolblue-nl', url: 'https://www.awin1.com/pclick.php?p=5001&a=1255925&m=85161', price: 119, priceAt: '2026-11-02T05:12:33Z' })
    const props = { name: 'Philips Airfryer 3000 Series XL - 6.2L', visual: getStaticProducts('nl')[0].visual, affiliateLink: 'https://www.amazon.fr/dp/B0001?tag=homavisenl-21', asin: 'B0001', lang: 'nl' }
    const withOffer = await renderHtml(await ProductCard({ ...props, offers: [offer] }))
    expect(withOffer).toContain('data-store="coolblue.nl"')
    expect(withOffer).toContain('Bekijk bij Coolblue')
    const without = await renderHtml(await ProductCard(props))
    expect(without).not.toContain('coolblue')
  })

  it('asks for offers on the airfryer guide and the kitchen hubs', () => {
    const read = (path: string) => readFileSync(join(process.cwd(), path), 'utf8')
    const guide = read('app/[lang]/guides/airfryers/page.tsx')
    expect(guide).toContain('coolblueOffersForPage(')
    expect(guide).toContain('offers={offers[product.title]}')
    const kitchen = read('app/[lang]/cuisine-connectee/[category]/page.tsx')
    expect(kitchen).toContain('coolblueOffersForPage(')
    expect(kitchen.match(/offers=\{offers(?:\[p\.title\])?\}/g)).toHaveLength(3)
  })
})
