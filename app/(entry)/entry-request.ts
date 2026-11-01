import { cache } from 'react'
import { headers } from 'next/headers'
import { entryChoices, type EntryChoices } from '@/lib/country-entry/choices'

/**
 * The entry page's choices for the current request (Vercel IP country,
 * browser languages, user agent), computed once per request for the
 * layout, the metadata and the page.
 */
export const currentEntryChoices = cache(async (): Promise<EntryChoices> => {
  const requestHeaders = await headers()
  return entryChoices({
    country: requestHeaders.get('x-vercel-ip-country'),
    acceptLanguage: requestHeaders.get('accept-language'),
    userAgent: requestHeaders.get('user-agent'),
  })
})
