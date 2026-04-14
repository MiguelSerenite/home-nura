'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const countries = [
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'de', flag: '🇩🇪', label: 'DE' },
  { code: 'en', flag: '🇬🇧', label: 'UK' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
  { code: 'it', flag: '🇮🇹', label: 'IT' },
  { code: 'nl', flag: '🇳🇱', label: 'NL' },
]

// Persist the user's explicit locale choice so the middleware stops
// auto-negotiating on the next visit to /.
function rememberLocale(code: string) {
  if (typeof document === 'undefined') return
  document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
}

const aboutLabel: Record<string, string> = {
  fr: 'À propos',
  de: 'Über uns',
  es: 'Sobre',
  it: 'Chi siamo',
  nl: 'Over ons',
  en: 'About',
}

const comparatifLabel: Record<string, string> = {
  fr: 'Comparatif 2026',
  de: 'Vergleich 2026',
  es: 'Comparativa 2026',
  it: 'Confronto 2026',
  nl: 'Vergelijking 2026',
  en: '2026 Comparison',
}

export default function Navbar({ currentLang }: { currentLang: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const about = aboutLabel[currentLang] ?? 'About'
  const comparatif = comparatifLabel[currentLang] ?? '2026 Comparison'

  // Lock body scroll while the drawer is open
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close the drawer when the viewport grows into desktop territory
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false)
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-24 md:h-28 flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center gap-4 md:gap-6 min-w-0">
          <Link
            href={`/${currentLang}`}
            className="flex items-center shrink-0"
            aria-label="Home Nura"
            onClick={close}
          >
            <Image
              src="/logo.png"
              alt="Home Nura"
              width={1400}
              height={400}
              priority
              className="h-20 md:h-24 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-500">
            <Link href={`/${currentLang}/guides/airfryers`} className="hover:text-blue-600 transition-colors">Guide</Link>
            <Link href={`/${currentLang}/guides/airfryers#comparatif-2026`} className="hover:text-blue-600 transition-colors">
              {comparatif}
            </Link>
            <Link href={`/${currentLang}/blog`} className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href={`/${currentLang}/a-propos`} className="hover:text-blue-600 transition-colors">
              {about}
            </Link>
          </div>
        </div>

        {/* Desktop: Sélecteur de pays */}
        <div className="hidden md:flex items-center gap-2 md:gap-4 bg-slate-50 p-1 rounded-full border border-slate-100">
          {countries.map((c) => (
            <Link
              key={c.code}
              href={`/${c.code}`}
              onClick={() => rememberLocale(c.code)}
              className={`flex items-center gap-1 px-2 py-1 rounded-full transition-all text-xs font-bold ${
                currentLang === c.code
                ? 'bg-white shadow-sm text-blue-600 scale-105'
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span className="text-base">{c.flag}</span>
              <span className="hidden sm:inline">{c.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile: hamburger button */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {isOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 6h18" />
                <path d="M3 12h18" />
                <path d="M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={close}
            className="md:hidden fixed inset-0 top-24 md:top-28 bg-slate-900/30 backdrop-blur-sm z-40"
          />
          {/* Panel */}
          <div
            id="mobile-menu"
            className="md:hidden absolute left-0 right-0 top-24 md:top-28 z-50 bg-white border-b border-slate-200 shadow-lg"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
              <Link
                href={`/${currentLang}/guides/airfryers`}
                onClick={close}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
              >
                <span>Guide</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
              <Link
                href={`/${currentLang}/guides/airfryers#comparatif-2026`}
                onClick={close}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
              >
                <span>{comparatif}</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
              <Link
                href={`/${currentLang}/blog`}
                onClick={close}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
              >
                <span>Blog</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
              <Link
                href={`/${currentLang}/a-propos`}
                onClick={close}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-slate-900 font-semibold hover:bg-slate-50 transition-colors"
              >
                <span>{about}</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>

              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-3 px-4">
                  Langue / Region
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {countries.map((c) => (
                    <Link
                      key={c.code}
                      href={`/${c.code}`}
                      onClick={() => {
                        rememberLocale(c.code)
                        close()
                      }}
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl border text-sm font-semibold transition-all ${
                        currentLang === c.code
                          ? 'bg-blue-50 border-blue-600 text-blue-700'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-lg">{c.flag}</span>
                      <span>{c.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
