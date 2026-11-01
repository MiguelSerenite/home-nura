'use client'

import { useEffect, useId, useRef, useState, type FocusEvent } from 'react'
import { usePathname } from 'next/navigation'
import { HTML_LANG, MARKET_VERSIONS, marketVersion, type Lang } from '@/lib/i18n'
import { switchLink } from '@/lib/locale-switch'
import { rememberMarket } from '@/lib/market-preference'

/** Title of the selector, in the page's language. */
export const SELECTOR_TITLE: Readonly<Record<Lang, string>> = {
  fr: 'Pays / langue',
  de: 'Land / Sprache',
  en: 'Country / language',
  es: 'País / idioma',
  it: 'Paese / lingua',
  nl: 'Land / taal',
  pl: 'Kraj / język',
  sv: 'Land / språk',
  us: 'Country / language',
  ca: 'Country / language',
}

interface CountrySelectorProps {
  lang: Lang
  /** Main category hub of the market page being read (lib/market-pages/switch.ts), for its switch links. */
  marketHub?: string | null
  /** Called when the list opens (the Navbar closes its mobile menu). */
  onOpen?: () => void
}

/**
 * The country / language selector of the header, at every width: a
 * compact flag + code button (🇺🇸 US) opening the ten versions. A
 * disclosure (button + list of links), so it works with the keyboard
 * (Enter/Space opens, Escape closes and returns focus, Tab out closes)
 * and screen readers (expanded state, each version in its own language).
 * Each link keeps the page being read (lib/i18n.ts switchLocale), loads
 * the target version in full (its own Amazon links, never the previous
 * version's tag) and remembers the choice (hn_market). The list is
 * rendered while open only: crawlers find the versions through hreflang,
 * and never meet a ?switched= link.
 */
export default function CountrySelector({ lang, marketHub, onOpen }: CountrySelectorProps) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listId = useId()
  const current = marketVersion(lang)
  const title = SELECTOR_TITLE[lang]

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const toggle = () => {
    if (!open) onOpen?.()
    setOpen(!open)
  }
  const onBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (open && !rootRef.current?.contains(event.relatedTarget as Node | null)) setOpen(false)
  }

  return (
    <div ref={rootRef} className="relative" onBlur={onBlur}>
      <button
        ref={buttonRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={`${title} – ${current.country} (${current.label})`}
        data-testid="country-selector"
        className="flex h-11 min-w-11 shrink-0 items-center justify-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 text-[13px] font-semibold text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 lg:gap-1.5 lg:px-3"
      >
        <span className="text-base leading-none" aria-hidden="true">{current.flag}</span>
        <span>{current.label}</span>
        <svg className={`hidden h-3 w-3 text-slate-500 transition-transform lg:block ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div
          id={listId}
          className="absolute right-0 top-full z-50 mt-1.5 max-h-[calc(100dvh-6rem)] w-64 max-w-[calc(100vw-2rem)] overflow-y-auto overscroll-contain rounded-xl border border-slate-200 bg-white py-1.5 shadow-lg"
        >
          <p className="px-4 pb-1 pt-1.5 text-xs font-bold uppercase tracking-widest text-slate-500">{title}</p>
          <ul>
            {MARKET_VERSIONS.map((version) => {
              const link = switchLink(pathname, version.code, { marketHub })
              const isCurrent = version.code === lang
              return (
                <li key={version.code}>
                  <a
                    href={link.href}
                    hrefLang={HTML_LANG[version.code]}
                    lang={HTML_LANG[version.code]}
                    aria-current={isCurrent ? 'true' : undefined}
                    onClick={() => rememberMarket(version.code)}
                    className={`flex min-h-11 items-center gap-2.5 px-4 py-2 text-sm transition-colors focus-visible:bg-brand-50 focus-visible:outline-none ${
                      isCurrent ? 'bg-brand-50 font-semibold text-brand-800' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-base leading-none" aria-hidden="true">{version.flag}</span>
                    <span className="flex-1">
                      {version.country} <span className="font-normal text-slate-600">· {version.language}</span>
                    </span>
                    {isCurrent && (
                      <svg className="h-3.5 w-3.5 text-brand-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
