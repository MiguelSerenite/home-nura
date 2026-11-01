/**
 * Metadata of the entry page (/): indexable, canonical on /, hreflang
 * naming the ten home pages with / as x-default (the home pages name /
 * as their x-default too, lib/seo.ts xDefaultUrl), OpenGraph on /.
 */

import type { Metadata } from 'next'
import { HTML_LANG, LANGUAGES } from '@/lib/i18n'
import { BASE_URL } from '@/lib/seo'
import type { EntryCopy } from './copy'

export const ENTRY_URL = `${BASE_URL}/`

/** hreflang of the home cluster: each version's home, and / as x-default. */
export function entryAlternates(): Record<string, string> {
  return {
    ...Object.fromEntries(LANGUAGES.map((lang) => [HTML_LANG[lang], `${BASE_URL}/${lang}`])),
    'x-default': ENTRY_URL,
  }
}

export function entryPageMetadata(copy: EntryCopy): Metadata {
  const image = `${BASE_URL}/og-image.png`
  return {
    title: { absolute: copy.metaTitle },
    description: copy.metaDescription,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: ENTRY_URL, languages: entryAlternates() },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: ENTRY_URL,
      siteName: 'Home Nura',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: copy.metaTitle }],
    },
    twitter: { card: 'summary_large_image', title: copy.metaTitle, description: copy.metaDescription, images: [image] },
    robots: { index: true, follow: true },
  }
}
