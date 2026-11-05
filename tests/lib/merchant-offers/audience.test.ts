import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import {
  COUNTRY_ATTRIBUTE,
  COUNTRY_ATTRIBUTE_SCRIPT,
  OFFER_EXCEPT_ATTRIBUTE,
  OFFER_ONLY_ATTRIBUTE,
} from '@/lib/merchant-offers/audience'
import { offerView } from '@/lib/merchant-offers/view'
import { GATED_COUNTRIES } from '@/lib/merchant-offers/merchants'

const read = (path: string) => readFileSync(join(process.cwd(), path), 'utf8')

/** Runs the <head> script against a fake document; returns the attributes it set on <html>. */
function runScript(cookie: string | (() => string)): Record<string, string> {
  const attributes: Record<string, string> = {}
  const document = {
    get cookie() {
      return typeof cookie === 'function' ? cookie() : cookie
    },
    documentElement: { setAttribute: (name: string, value: string) => void (attributes[name] = value) },
  }
  new Function('document', COUNTRY_ATTRIBUTE_SCRIPT)(document)
  return attributes
}

describe('country attribute script', () => {
  it('copies hn_country onto <html data-hn-country>, upper-cased', () => {
    expect(runScript('a=1; hn_country=BE; hn_market=nl')).toEqual({ [COUNTRY_ATTRIBUTE]: 'BE' })
    expect(runScript('hn_country=be')).toEqual({ [COUNTRY_ATTRIBUTE]: 'BE' })
    expect(runScript('hn_country=NL')).toEqual({ [COUNTRY_ATTRIBUTE]: 'NL' })
  })

  it('sets nothing without a two-letter country, and never throws', () => {
    expect(runScript('')).toEqual({})
    expect(runScript('hn_market=nl')).toEqual({})
    expect(runScript('hn_country=BEL')).toEqual({})
    expect(runScript('xhn_country=BE')).toEqual({})
    expect(runScript('hn_country="><script>')).toEqual({})
    expect(() =>
      runScript(() => {
        throw new Error('cookies blocked')
      }),
    ).not.toThrow()
  })

  it('runs in <head> of every locale, before the first paint', () => {
    const layout = read('app/[lang]/layout.tsx')
    const head = layout.slice(layout.indexOf('<head>'), layout.indexOf('</head>'))
    expect(head).toContain('dangerouslySetInnerHTML={{ __html: COUNTRY_ATTRIBUTE_SCRIPT }}')
    expect(layout).toMatch(/<html[^>]*suppressHydrationWarning/s)
  })
})

describe('offer visibility rules', () => {
  const css = read('app/globals.css').replace(/\s+/g, ' ')

  it('puts each merchant’s audience on the offer props', () => {
    const view = (merchant: 'coolblue-nl' | 'coolblue-de' | 'coolblue-be-nl' | 'coolblue-be-fr') =>
      offerView({ merchant, url: 'https://www.awin1.com/pclick.php?a=1255925&m=1', price: 1, priceAt: '2026-11-02T05:12:33Z' })
    expect(view('coolblue-be-nl')).toMatchObject({ onlyCountry: 'BE' })
    expect(view('coolblue-be-fr')).toMatchObject({ onlyCountry: 'BE' })
    expect(view('coolblue-nl')).toMatchObject({ exceptCountries: 'BE' })
    expect(view('coolblue-de')).not.toHaveProperty('onlyCountry')
    expect(view('coolblue-de')).not.toHaveProperty('exceptCountries')
  })

  it('names the attributes the offer component writes', () => {
    const component = read('components/CoolblueOffer.tsx')
    expect(component).toContain(`${OFFER_ONLY_ATTRIBUTE}={offer.onlyCountry}`)
    expect(component).toContain(`${OFFER_EXCEPT_ATTRIBUTE}={offer.exceptCountries}`)
  })

  it('hides country-only offers by default', () => {
    expect(css).toContain(`[${OFFER_ONLY_ATTRIBUTE}] { display: none; }`)
  })

  it('has the show and hide rules of every gated country of the merchant table', () => {
    for (const country of GATED_COUNTRIES) {
      expect(css).toContain(`html[${COUNTRY_ATTRIBUTE}="${country}"] [${OFFER_ONLY_ATTRIBUTE}="${country}"] { display: block; }`)
      expect(css).toContain(`html[${COUNTRY_ATTRIBUTE}="${country}"] [${OFFER_EXCEPT_ATTRIBUTE}~="${country}"] { display: none; }`)
    }
  })

  it('reads the cookie the proxy sets', () => {
    expect(read('proxy.ts')).toContain('response.cookies.set(COUNTRY_COOKIE, country')
    expect(COUNTRY_ATTRIBUTE_SCRIPT).toContain('hn_country=')
  })
})
