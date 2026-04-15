import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/seo'

/**
 * robots.txt — Phase T
 *
 * Contract:
 *   - Allow all well-behaved crawlers on content routes (home, guides,
 *     blog, comparateur, quiz, cuisine-connectee).
 *   - Disallow /api/* (internal endpoints — newsletter submission,
 *     OG image generation, etc.). There are no crawlable HTML pages
 *     under /api so this is purely hygiene against accidental crawling.
 *   - Point to the sitemap so search engines have a fast index of
 *     every locale × route combination.
 *
 * Legal pages (mentions-legales, politique-confidentialite,
 * politique-cookies) are NOT disallowed here — they're noindex'd via
 * the per-page `robots` metadata instead, which is the recommended
 * approach (disallow in robots.txt blocks crawling, which prevents
 * Google from *seeing* the noindex directive).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
