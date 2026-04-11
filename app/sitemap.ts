import type { MetadataRoute } from 'next'

const BASE_URL = 'https://homenura.com'
const LANGUAGES = ['fr', 'en', 'de', 'es', 'it', 'nl']

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/guides/airfryers', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/politique-cookies', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/a-propos', priority: 0.5, changeFrequency: 'monthly' as const },
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    for (const lang of LANGUAGES) {
      entries.push({
        url: `${BASE_URL}/${lang}${page.path}`,
        lastModified: new Date(),
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
