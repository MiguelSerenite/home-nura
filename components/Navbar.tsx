'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef, useMemo } from 'react'
import SearchBar from './SearchBar'
import { getStaticProducts } from '@/lib/products'

const countries = [
  { code: 'fr', flag: '🇫🇷', label: 'FR', name: 'Français' },
  { code: 'de', flag: '🇩🇪', label: 'DE', name: 'Deutsch' },
  { code: 'en', flag: '🇬🇧', label: 'UK', name: 'English' },
  { code: 'es', flag: '🇪🇸', label: 'ES', name: 'Español' },
  { code: 'it', flag: '🇮🇹', label: 'IT', name: 'Italiano' },
  { code: 'nl', flag: '🇳🇱', label: 'NL', name: 'Nederlands' },
]

function rememberLocale(code: string) {
  if (typeof document === 'undefined') return
  document.cookie = `NEXT_LOCALE=${code}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`
}

/* ── i18n labels ─────────────────────────────────────────── */
const t: Record<string, Record<string, string>> = {
  guide:        { fr: 'Guide', de: 'Ratgeber', es: 'Guía', it: 'Guida', nl: 'Gids', en: 'Guide' },
  comparatif:   { fr: 'Comparatif', de: 'Vergleich', es: 'Comparativa', it: 'Confronto', nl: 'Vergelijking', en: 'Comparison' },
  smartKitchen: { fr: 'Cuisine connectée', de: 'Smarte Küche', es: 'Cocina conectada', it: 'Cucina connessa', nl: 'Slimme keuken', en: 'Smart kitchen' },
  maison:       { fr: 'Maison connectée', de: 'Smart Home', es: 'Casa conectada', it: 'Casa connessa', nl: 'Smart wonen', en: 'Smart home' },
  blog:         { fr: 'Blog', de: 'Blog', es: 'Blog', it: 'Blog', nl: 'Blog', en: 'Blog' },
  quiz:         { fr: 'Quiz', de: 'Quiz', es: 'Quiz', it: 'Quiz', nl: 'Quiz', en: 'Quiz' },
  methodologie: { fr: 'Méthodologie', de: 'Methodik', es: 'Metodología', it: 'Metodologia', nl: 'Methodologie', en: 'Methodology' },
  about:        { fr: 'À propos', de: 'Über uns', es: 'Sobre nosotros', it: 'Chi siamo', nl: 'Over ons', en: 'About' },
  openMenu:     { fr: 'Ouvrir le menu', de: 'Menü öffnen', es: 'Abrir menú', it: 'Apri menu', nl: 'Menu openen', en: 'Open menu' },
  closeMenu:    { fr: 'Fermer le menu', de: 'Menü schließen', es: 'Cerrar menú', it: 'Chiudi menu', nl: 'Menu sluiten', en: 'Close menu' },
  langue:       { fr: 'Langue / Région', de: 'Sprache / Region', es: 'Idioma / Región', it: 'Lingua / Regione', nl: 'Taal / Regio', en: 'Language / Region' },
  /* Silo labels */
  securite:   { fr: 'Sécurité maison', de: 'Haussicherheit', es: 'Seguridad hogar', it: 'Sicurezza casa', nl: 'Huisbeveiliging', en: 'Home security' },
  energie:    { fr: 'Énergie & domotique', de: 'Energie & Smart Home', es: 'Energía & domótica', it: 'Energia & domotica', nl: 'Energie & domotica', en: 'Energy & smart home' },
  confort:    { fr: 'Confort & air', de: 'Komfort & Luft', es: 'Confort & aire', it: 'Comfort & aria', nl: 'Comfort & lucht', en: 'Comfort & air' },
  entretien:  { fr: 'Entretien maison', de: 'Haushaltsgeräte', es: 'Limpieza hogar', it: 'Pulizia casa', nl: 'Huishoudelijk', en: 'Home care' },
  outdoor:    { fr: 'Jardin & outdoor', de: 'Garten & outdoor', es: 'Jardín & outdoor', it: 'Giardino & outdoor', nl: 'Tuin & outdoor', en: 'Garden & outdoor' },
}

const l = (key: string, lang: string) => t[key]?.[lang] ?? t[key]?.en ?? key

/* ── Silos dropdown data ──────────────────────────────────── */
const silos = [
  { key: 'securite',  path: 'securite-maison',    icon: '🔒' },
  { key: 'energie',   path: 'energie-domotique',  icon: '⚡' },
  { key: 'confort',   path: 'confort-air',         icon: '💨' },
  { key: 'entretien', path: 'entretien-maison',    icon: '🧹' },
  { key: 'outdoor',   path: 'outdoor-connecte',   icon: '🌿' },
]

export default function Navbar({ currentLang }: { currentLang: string }) {
  const lang = currentLang
  const [isOpen, setIsOpen] = useState(false)
  const [maisonOpen, setMaisonOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const maisonRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)

  const searchProducts = useMemo(() => {
    return getStaticProducts(lang).map((p) => ({
      title: p.title, price: p.price, image: p.image,
      asin: p.asin, capacity: p.capacity, bestFor: p.bestFor,
    }))
  }, [lang])

  // Lock body scroll on mobile drawer
  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close mobile drawer at desktop breakpoint
  useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setIsOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Close dropdowns on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (maisonRef.current && !maisonRef.current.contains(e.target as Node)) setMaisonOpen(false)
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const close = () => setIsOpen(false)
  const currentCountry = countries.find(c => c.code === lang)

  const navLinkCls = 'whitespace-nowrap text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors rounded px-2 py-1 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500'

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 grid grid-cols-[auto_1fr_auto] items-center gap-3">

        {/* ── Logo ── */}
        <Link
          href={`/${lang}`}
          className="shrink-0 flex items-center"
          aria-label="Home Nura"
          onClick={close}
        >
          <Image
            src="/logo.png"
            alt="Home Nura"
            width={1400}
            height={400}
            priority
            className="h-14 md:h-16 w-auto"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden lg:flex items-center justify-center gap-0.5">
          <Link href={`/${lang}/guides/airfryers`} className={navLinkCls}>
            {l('guide', lang)}
          </Link>
          <Link href={`/${lang}/comparateur`} className={navLinkCls}>
            {l('comparatif', lang)}
          </Link>
          <Link href={`/${lang}/cuisine-connectee`} className={navLinkCls}>
            {l('smartKitchen', lang)}
          </Link>

          {/* Maison connectée dropdown */}
          <div ref={maisonRef} className="relative">
            <button
              type="button"
              onClick={() => setMaisonOpen(v => !v)}
              className={`${navLinkCls} flex items-center gap-1`}
              aria-expanded={maisonOpen}
            >
              {l('maison', lang)}
              <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${maisonOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            {maisonOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50">
                {silos.map(s => (
                  <Link
                    key={s.key}
                    href={`/${lang}/${s.path}`}
                    onClick={() => setMaisonOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    <span className="text-base">{s.icon}</span>
                    {l(s.key, lang)}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={`/${lang}/quiz`} className={navLinkCls}>Quiz</Link>
          <Link href={`/${lang}/blog`} className={navLinkCls}>Blog</Link>
        </div>

        {/* ── Desktop right: Search + Lang ── */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <SearchBar products={searchProducts} currentLang={lang} variant="desktop" />

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              type="button"
              onClick={() => setLangOpen(v => !v)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors text-[13px] font-semibold text-slate-700"
              aria-expanded={langOpen}
              aria-label={l('langue', lang)}
            >
              <span className="text-base leading-none">{currentCountry?.flag}</span>
              <span>{currentCountry?.label}</span>
              <svg className={`w-3 h-3 text-slate-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1.5 w-44 bg-white rounded-xl shadow-lg border border-slate-200 py-1.5 z-50">
                {countries.map((c) => (
                  <Link
                    key={c.code}
                    href={`/${c.code}`}
                    onClick={() => { rememberLocale(c.code); setLangOpen(false) }}
                    className={`flex items-center gap-2.5 px-4 py-2 text-[13px] transition-colors ${
                      lang === c.code
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-base">{c.flag}</span>
                    <span>{c.name}</span>
                    {lang === c.code && (
                      <svg className="w-3.5 h-3.5 ml-auto text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Mobile right: Search icon + hamburger ── */}
        <div className="flex lg:hidden items-center gap-2">
          <SearchBar products={searchProducts} currentLang={lang} variant="mobile" onNavigate={close} />
          <button
            type="button"
            onClick={() => setIsOpen(v => !v)}
            aria-label={isOpen ? l('closeMenu', lang) : l('openMenu', lang)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {isOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {isOpen && (
        <>
          <button
            type="button"
            aria-label={l('closeMenu', lang)}
            onClick={close}
            className="lg:hidden fixed inset-0 top-20 bg-slate-900/30 backdrop-blur-sm z-40"
          />
          <div
            id="mobile-menu"
            className="lg:hidden absolute left-0 right-0 top-20 z-50 bg-white border-b border-slate-200 shadow-xl max-h-[80vh] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">

              <Link href={`/${lang}/guides/airfryers`} onClick={close} className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50 transition-colors text-sm">
                <span>{l('guide', lang)}</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
              <Link href={`/${lang}/comparateur`} onClick={close} className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50 transition-colors text-sm">
                <span>{l('comparatif', lang)}</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
              <Link href={`/${lang}/cuisine-connectee`} onClick={close} className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50 transition-colors text-sm">
                <span>{l('smartKitchen', lang)}</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </Link>

              {/* Maison connectée – inline section */}
              <div className="py-1">
                <div className="text-[11px] font-bold tracking-widest uppercase text-slate-400 px-3 mb-1">{l('maison', lang)}</div>
                <div className="grid grid-cols-2 gap-1">
                  {silos.map(s => (
                    <Link
                      key={s.key}
                      href={`/${lang}/${s.path}`}
                      onClick={close}
                      className="flex items-center gap-2 py-2.5 px-3 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors text-sm"
                    >
                      <span>{s.icon}</span>
                      <span className="font-medium leading-tight">{l(s.key, lang)}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href={`/${lang}/quiz`} onClick={close} className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50 transition-colors text-sm">
                <span>Quiz</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
              <Link href={`/${lang}/blog`} onClick={close} className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50 transition-colors text-sm">
                <span>Blog</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
              <Link href={`/${lang}/methodologie`} onClick={close} className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50 transition-colors text-sm">
                <span>{l('methodologie', lang)}</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
              <Link href={`/${lang}/a-propos`} onClick={close} className="flex items-center justify-between py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-50 transition-colors text-sm">
                <span>{l('about', lang)}</span>
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </Link>

              {/* Language grid */}
              <div className="mt-3 pt-3 border-t border-slate-100">
                <div className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-2 px-1">{l('langue', lang)}</div>
                <div className="grid grid-cols-3 gap-1.5">
                  {countries.map((c) => (
                    <Link
                      key={c.code}
                      href={`/${c.code}`}
                      onClick={() => { rememberLocale(c.code); close() }}
                      className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-semibold transition-colors ${
                        lang === c.code
                          ? 'bg-blue-50 border-blue-500 text-blue-700'
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
