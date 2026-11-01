import type { Viewport } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { HTML_LANG } from '@/lib/i18n'
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
 * Root layout of the entry page (/), beside app/[lang]/layout.tsx: written
 * in the language of the version proposed first, English for crawlers.
 */
export default async function EntryLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const { copyLang } = await currentEntryChoices()
  const copy = entryCopy(copyLang)
  return (
    <html lang={copyLang ? HTML_LANG[copyLang] : 'en'} className={`${geistSans.variable} h-full antialiased`}>
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
