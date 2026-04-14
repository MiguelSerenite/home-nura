import type { MetadataRoute } from 'next'

const BASE_URL = 'https://homenura.com'
const LANGUAGES = ['fr', 'en', 'de', 'es', 'it', 'nl']

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: '2026-04-14' },
    { path: '/guides/airfryers', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-04-10' },
    { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-01-10' },
    { path: '/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-01-10' },
    { path: '/politique-cookies', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-01-10' },
    { path: '/a-propos', priority: 0.5, changeFrequency: 'monthly' as const, lastModified: '2026-03-15' },
    { path: '/guides/airfryer-vs-four', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-04-08' },
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

  return entries
}
