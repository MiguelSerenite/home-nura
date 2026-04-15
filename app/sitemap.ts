import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/blog'

const BASE_URL = 'https://homenura.com'
const LANGUAGES = ['fr', 'en', 'de', 'es', 'it', 'nl']

export default function sitemap(): MetadataRoute.Sitemap {
  const today = '2026-04-14'

  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/guides/airfryers', priority: 0.9, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/guides/airfryer-vs-four', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: today },
    { path: '/comparateur', priority: 0.85, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/quiz', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' as const, lastModified: today },
    { path: '/a-propos', priority: 0.5, changeFrequency: 'monthly' as const, lastModified: '2026-04-10' },
    { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-01-10' },
    { path: '/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-01-10' },
    { path: '/politique-cookies', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-01-10' },
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const lang of LANGUAGES) {
      entries.push({
        url: `${BASE_URL}/${lang}${page.path}`,
        lastModified: new Date(page.lastModified),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
        alternates: {
          languages: Object.fromEntries(
            LANGUAGES.map(l => [l, `${BASE_URL}/${l}${page.path}`])
          ),
        },
      })
    }
  }

  // Add all blog articles dynamically with proper priority by category
  const articles = getAllArticles()
  for (const article of articles) {
    // Tests and comparatifs get higher priority (closer to purchase intent)
    const priority = article.category === 'tests' ? 0.7
      : article.category === 'comparatifs' ? 0.7
      : article.category === 'guides' ? 0.6
      : 0.5

    for (const lang of LANGUAGES) {
      entries.push({
        url: `${BASE_URL}/${lang}/blog/${article.slug}`,
        lastModified: new Date(article.dateModified),
        changeFrequency: 'monthly',
        priority,
        alternates: {
          languages: Object.fromEntries(
            LANGUAGES.map(l => [l, `${BASE_URL}/${l}/blog/${article.slug}`])
          ),
        },
      })
    }
  }

  return entries
}
