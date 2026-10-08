'use client'

import { useState, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'
import { COUNTRY_COOKIE, suggestLocaleForCountry, type Lang } from '@/lib/i18n'

const DISMISS_COOKIE = 'hn_geo_dismissed'
const DISMISS_MAX_AGE = 60 * 60 * 24 * 30 // 30 days
const LOCALE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365

// Written in the suggested language: it is the visitor's local language.
const COPY: Record<Lang, { text: string; cta: string; close: string }> = {
  fr: { text: 'Vous êtes en France ? Voir le site en français avec les prix Amazon.fr.', cta: 'Passer en français', close: 'Fermer' },
  en: { text: 'In the UK? See the English site with Amazon.co.uk prices.', cta: 'Switch to English', close: 'Close' },
  de: { text: 'In Deutschland? Zur deutschen Seite mit Amazon.de-Preisen.', cta: 'Auf Deutsch', close: 'Schließen' },
  es: { text: '¿Estás en España? Ver la web en español con precios de Amazon.es.', cta: 'Ver en español', close: 'Cerrar' },
  it: { text: 'Sei in Italia? Vedi il sito in italiano con i prezzi Amazon.it.', cta: 'Vai in italiano', close: 'Chiudi' },
  nl: { text: 'In Nederland? Bekijk de Nederlandse site met Amazon.nl-prijzen.', cta: 'Naar Nederlands', close: 'Sluiten' },
}

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
  return match ? decodeURIComponent(match[2]) : null
}

const noopSubscribe = () => () => {}

/**
 * Offers the locale (and Amazon store) of the visitor's country when it
 * differs from the page locale. Language negotiation keeps following the
 * browser; this only suggests. Pages are static, so the country comes from
 * the hn_country cookie set by proxy.ts.
 */
export default function GeoLocaleSuggestion({ lang }: { lang: string }) {
  const pathname = usePathname()
  const suggested = useSyncExternalStore(
    noopSubscribe,
    () => (readCookie(DISMISS_COOKIE) ? null : suggestLocaleForCountry(readCookie(COUNTRY_COOKIE), lang)),
    () => null,
  )
  const [dismissed, setDismissed] = useState(false)

  if (!suggested || dismissed) return null
  const copy = COPY[suggested]
  const target = `/${suggested}${pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '')}`

  const dismiss = () => {
    document.cookie = `${DISMISS_COOKIE}=1;path=/;max-age=${DISMISS_MAX_AGE};SameSite=Lax`
    setDismissed(true)
  }
  const accept = () => {
    document.cookie = `NEXT_LOCALE=${suggested};path=/;max-age=${LOCALE_COOKIE_MAX_AGE};SameSite=Lax`
  }

  return (
    <div lang={suggested} className="bg-brand-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:px-6">
        <p className="flex-1 text-sm">{copy.text}</p>
        <a
          href={target}
          onClick={accept}
          className="inline-flex min-h-11 shrink-0 items-center rounded-full bg-white px-4 text-sm font-bold text-brand-900 hover:bg-brand-50"
        >
          {copy.cta}
        </a>
        <button
          type="button"
          onClick={dismiss}
          aria-label={copy.close}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white hover:bg-white/10"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  )
}
