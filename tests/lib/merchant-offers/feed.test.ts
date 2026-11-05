import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { parseCsvRows } from '@/lib/merchant-offers/csv'
import {
  createAFeedUrl,
  feedListUrl,
  normalizeEan,
  parseCoolblueFeed,
  parseFeedDate,
  parseFeedList,
  parsePrice,
  redactKey,
} from '@/lib/merchant-offers/feed'
import { isCoolblueAwinLink } from '@/lib/merchant-offers/types'

const fixture = (name: string) => readFileSync(join(process.cwd(), 'tests/fixtures/merchant-offers', name), 'utf8')

describe('parseCsvRows', () => {
  it('reads quoted fields with delimiters, doubled quotes and line breaks', () => {
    expect(parseCsvRows('a,b\r\n"x, y","say ""hi""\nthere"\n')).toEqual([
      ['a', 'b'],
      ['x, y', 'say "hi"\nthere'],
    ])
  })

  it('detects a pipe or tab delimiter and skips a BOM and empty lines', () => {
    expect(parseCsvRows('﻿a|b\n1|2\n\n')).toEqual([['a', 'b'], ['1', '2']])
    expect(parseCsvRows('a\tb\n1\t2')).toEqual([['a', 'b'], ['1', '2']])
  })
})

describe('parseCoolblueFeed', () => {
  const products = parseCoolblueFeed(fixture('coolblue-feed.csv'))

  it('keeps in-stock euro products with our tracked Coolblue link', () => {
    expect(products).toHaveLength(18)
    expect(products[0]).toEqual({
      name: 'Philips Airfryer Combi XXL Connected HD9880/90 - 8,3 liter',
      brand: 'Philips',
      ean: '8720389012345',
      url: 'https://www.awin1.com/pclick.php?p=1001&a=1255925&m=85161',
      price: 299,
      updatedAt: '2026-11-02T05:12:33.000Z',
    })
    expect(products.every((p) => isCoolblueAwinLink(p.url))).toBe(true)
  })

  it('never keeps the feed image', () => {
    expect(products.some((p) => 'image' in p || Object.values(p).some((v) => String(v).includes('image.coolblue')))).toBe(false)
  })

  it('returns nothing for an empty or headerless feed', () => {
    expect(parseCoolblueFeed('')).toEqual([])
    expect(parseCoolblueFeed('product_name\nFoo')).toEqual([])
  })
})

describe('field parsers', () => {
  it('reads prices with a decimal comma or point and rejects nonsense', () => {
    expect(parsePrice('199.00')).toBe(199)
    expect(parsePrice('139,99')).toBe(139.99)
    expect(parsePrice('1.299,00')).toBe(1299)
    expect(parsePrice('1,299.50')).toBe(1299.5)
    expect(parsePrice('0')).toBeNull()
    expect(parsePrice('')).toBeNull()
    expect(parsePrice('9999999')).toBeNull()
  })

  it('reads Awin timestamps as UTC and rejects others', () => {
    expect(parseFeedDate('2026-11-02 05:12:33')).toBe('2026-11-02T05:12:33.000Z')
    expect(parseFeedDate('2026-11-02T06:12:33+01:00')).toBe('2026-11-02T05:12:33.000Z')
    expect(parseFeedDate('yesterday')).toBeNull()
  })

  it('normalises EANs', () => {
    expect(normalizeEan('08720389012345')).toBe('8720389012345')
    expect(normalizeEan('871-0103-111111')).toBe('8710103111111')
    expect(normalizeEan('123')).toBeNull()
  })
})

describe('Awin links', () => {
  it('accepts only https awin1.com links with our publisher ID and Coolblue advertiser ID', () => {
    expect(isCoolblueAwinLink('https://www.awin1.com/pclick.php?p=1&a=1255925&m=85161')).toBe(true)
    expect(isCoolblueAwinLink('https://www.awin1.com/cread.php?awinmid=85161&awinaffid=1255925&ued=x')).toBe(true)
    expect(isCoolblueAwinLink('http://www.awin1.com/pclick.php?p=1&a=1255925&m=85161')).toBe(false)
    expect(isCoolblueAwinLink('https://www.awin1.com/pclick.php?p=1&a=1255925&m=1')).toBe(false)
    expect(isCoolblueAwinLink('https://www.coolblue.nl/product/1')).toBe(false)
    expect(isCoolblueAwinLink('not a url')).toBe(false)
  })
})

describe('feed URLs', () => {
  const key = 'k3y/with?chars'

  it('builds the feed list and Create-a-Feed URLs from the key', () => {
    expect(feedListUrl(key)).toBe(`https://ui.awin.com/productdata-darwin-download/publisher/1255925/${encodeURIComponent(key)}/1/feedList`)
    const url = createAFeedUrl(key, '95890')
    expect(url).toContain(`/apikey/${encodeURIComponent(key)}/`)
    expect(url).toContain('/language/nl/fid/95890/columns/aw_deep_link,product_name,brand_name,search_price,')
    expect(url).toContain('/format/csv/delimiter/%2C/compression/gzip/')
    expect(url).not.toContain('merchant_image_url')
  })

  it('reads the feed list rows', () => {
    const list = parseFeedList(fixture('feed-list.csv'))
    expect(list.map((e) => e.feedId)).toEqual(['95890', '95892', '11111'])
    expect(list[0].url).toBe('https://ui.awin.com/productdata-darwin-download/publisher/1255925/TESTKEY/1/95890.csv.gz')
    expect(list[1].url).toBeNull()
  })

  it('masks the key in log text', () => {
    expect(redactKey(`failed ${feedListUrl(key)}`, key)).not.toContain('k3y')
    expect(redactKey('no key here', undefined)).toBe('no key here')
  })
})
