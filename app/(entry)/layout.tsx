import type { Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { HTML_LANG, LANGUAGES } from '@/lib/i18n'
import { EDITION_COUNTRY, buildOrganizationSchema } from '@/lib/organization-schema'
import { BASE_URL } from '@/lib/seo'
import { entryCopy } from '@/lib/country-entry/copy'
import { currentEntryChoices } from './entry-request'
import '../globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6b7230',
}

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

/**
 * Structured data of the entry page (/), the international x-default: the
 * publisher (all ten editions' countries) and the site entity, so agents
 * and search engines identify Home Nura from the root URL too.
 */
const ENTRY_DESCRIPTION =
  'Independent smart home buying guides for 10 markets in Europe and North America: air fryers, smart kitchen, energy and home automation, home security, air comfort, home care and garden.'
const ENTRY_SCHEMAS = [
  {
    ...buildOrganizationSchema('en', ENTRY_DESCRIPTION),
    areaServed: LANGUAGES.map((lang) => ({ '@type': 'Country', name: EDITION_COUNTRY[lang] })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Home Nura',
    alternateName: 'HomeNura',
    url: BASE_URL,
    publisher: { '@id': `${BASE_URL}/#organization` },
  },
]

/**
 * Root layout of the entry page (/), beside app/[lang]/layout.tsx: written
 * in the language of the version proposed first, English for crawlers.
 */
export default async function EntryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { copyLang } = await currentEntryChoices()
  const copy = entryCopy(copyLang)
  return (
    <html lang={copyLang ? HTML_LANG[copyLang] : 'en'} className={`${geistSans.variable} h-full antialiased`}>
      <head>
        {ENTRY_SCHEMAS.map((schema) => (
          <script
            key={schema['@type']}
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className="min-h-full flex flex-col bg-[#FBFBFD] text-slate-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
        >
          {copy.skip}
        </a>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
