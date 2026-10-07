import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/seo'

/**
 * IndexNow (https://www.indexnow.org): push changed URLs to Bing, Yandex,
 * Seznam and Naver instead of waiting for a crawl. Bing's index feeds
 * Copilot and is a retrieval source for ChatGPT search.
 *
 * The key is public by design: search engines verify ownership by fetching
 * `${BASE_URL}/${INDEXNOW_KEY}.txt` (public/<key>.txt).
 */
export const INDEXNOW_KEY = '8e15549ebc8a7e254f9077b18bd95980'
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
/** Protocol limit per POST. */
export const INDEXNOW_MAX_URLS = 10_000

/** Every URL of the sitemap, including the hreflang alternates of each entry. */
export function urlsFromSitemap(entries: MetadataRoute.Sitemap): string[] {
  const urls = entries.flatMap((entry) => [
    entry.url,
    ...Object.values(entry.alternates?.languages ?? {}).filter((u): u is string => typeof u === 'string'),
  ])
  return [...new Set(urls)].filter((u) => u.startsWith(BASE_URL))
}

export function buildIndexNowBatches(urls: readonly string[]) {
  const host = new URL(BASE_URL).host
  const unique = [...new Set(urls)]
  const batches = []
  for (let i = 0; i < unique.length; i += INDEXNOW_MAX_URLS) {
    batches.push({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: unique.slice(i, i + INDEXNOW_MAX_URLS),
    })
  }
  return batches
}
