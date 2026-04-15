import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/seo'

/**
 * robots.txt — Phase U (expands Phase T)
 *
 * Strategy: maximum visibility to every well-behaved crawler, including
 * AI bots that feed LLM training + retrieval (GPTBot, ClaudeBot, etc.).
 * Home Nura is an affiliate discovery site — being quotable inside
 * LLM answers drives traffic the same way organic SERPs do.
 *
 * Contract:
 *   - Every AI crawler is listed explicitly (rather than relying on
 *     the `*` fallback) so the intent is documented and so that changing
 *     one bot's rules later doesn't require touching the others.
 *   - Every rule disallows `/admin/`, `/_next/`, `/api/` — internal
 *     routes with no indexable HTML.
 *   - Legal pages (mentions-legales, politique-confidentialite,
 *     politique-cookies) are NOT disallowed here — they're noindex'd
 *     via per-page `robots` metadata instead. Disallowing them in
 *     robots.txt would block Google from *reading* the noindex tag.
 *   - Points to the canonical sitemap and declares the canonical host.
 *
 * Note: this file REPLACES the legacy `public/robots.txt`. Next.js
 * serves whichever is found first, and `public/*` wins over `app/*`,
 * so the static file must stay deleted or it will shadow this module.
 */

const INTERNAL_PATHS = ['/admin/', '/_next/', '/api/']

// Crawlers we want to explicitly welcome. Listing them one-by-one (rather
// than letting them fall through to the `*` rule) makes the intent legible
// and lets us tighten or relax per-bot rules in the future without a rewrite.
const ALLOWED_AI_CRAWLERS = [
  // OpenAI
  'GPTBot',
  'ChatGPT-User',
  // Anthropic (Claude)
  'ClaudeBot',
  'anthropic-ai',
  // Google (Gemini, Bard, and other generative products)
  'Google-Extended',
  // Perplexity
  'PerplexityBot',
  // Common Crawl (feeds many LLM training sets)
  'CCBot',
  // Amazon
  'Amazonbot',
  // ByteDance (Doubao, etc.)
  'Bytespider',
  // Cohere
  'cohere-ai',
]

export default function robots(): MetadataRoute.Robots {
  const perBotRules = ALLOWED_AI_CRAWLERS.map((userAgent) => ({
    userAgent,
    allow: '/',
    disallow: INTERNAL_PATHS,
  }))

  return {
    rules: [
      // Explicit opt-in for AI crawlers — order matters: specific rules
      // should come before the wildcard so crawlers can match their own
      // entry instead of falling through.
      ...perBotRules,
      // Fallback for every other crawler (Googlebot, Bingbot, etc.).
      {
        userAgent: '*',
        allow: '/',
        disallow: INTERNAL_PATHS,
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
