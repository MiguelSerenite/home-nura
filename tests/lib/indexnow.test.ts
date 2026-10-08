import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import sitemap from '@/app/sitemap'
import { BASE_URL } from '@/lib/seo'
import { INDEXNOW_KEY, INDEXNOW_MAX_URLS, buildIndexNowBatches, urlsFromSitemap } from '@/lib/indexnow'

describe('IndexNow', () => {
  it('serves the key file at the site root with the key as its only content', () => {
    const file = readFileSync(join(process.cwd(), 'public', `${INDEXNOW_KEY}.txt`), 'utf8')
    expect(file.trim()).toBe(INDEXNOW_KEY)
    expect(INDEXNOW_KEY).toMatch(/^[a-f0-9]{32}$/)
  })

  it('expands sitemap entries to every locale variant without duplicates', () => {
    const urls = urlsFromSitemap(sitemap())
    expect(urls).toContain(`${BASE_URL}/fr/blog`)
    expect(urls).toContain(`${BASE_URL}/de/blog`)
    expect(urls).toContain(`${BASE_URL}/nl/methodologie`)
    expect(new Set(urls).size).toBe(urls.length)
  })

  it('splits submissions into protocol-sized batches carrying host and key location', () => {
    const urls = Array.from({ length: INDEXNOW_MAX_URLS + 5 }, (_, i) => `${BASE_URL}/fr/p${i}`)
    const batches = buildIndexNowBatches(urls)
    expect(batches).toHaveLength(2)
    expect(batches[0].urlList).toHaveLength(INDEXNOW_MAX_URLS)
    expect(batches[1].urlList).toHaveLength(5)
    expect(batches[0].host).toBe('homenura.com')
    expect(batches[0].keyLocation).toBe(`${BASE_URL}/${INDEXNOW_KEY}.txt`)
  })
})
