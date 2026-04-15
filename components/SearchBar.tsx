'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface SearchableProduct {
  title: string
  price: string
  image: string
  asin: string
  capacity: string
  bestFor: string
}

const placeholders: Record<string, string> = {
  fr: 'Rechercher un airfryer…',
  de: 'Airfryer suchen…',
  en: 'Search an air fryer…',
  es: 'Buscar una freidora…',
  it: 'Cerca una friggitrice…',
  nl: 'Zoek een airfryer…',
}

const emptyLabels: Record<string, string> = {
  fr: 'Aucun modèle trouvé',
  de: 'Kein Modell gefunden',
  en: 'No model found',
  es: 'Ningún modelo encontrado',
  it: 'Nessun modello trovato',
  nl: 'Geen model gevonden',
}

const hintLabels: Record<string, string> = {
  fr: 'Essayez "Ninja", "Philips" ou "9.5L"',
  de: 'Versuchen Sie "Ninja", "Philips" oder "9.5L"',
  en: 'Try "Ninja", "Philips" or "9.5L"',
  es: 'Prueba con "Ninja", "Philips" o "9.5L"',
  it: 'Prova con "Ninja", "Philips" o "9.5L"',
  nl: 'Probeer "Ninja", "Philips" of "9.5L"',
}

const searchLabel: Record<string, string> = {
  fr: 'Rechercher',
  de: 'Suchen',
  en: 'Search',
  es: 'Buscar',
  it: 'Cerca',
  nl: 'Zoeken',
}

const closeLabel: Record<string, string> = {
  fr: 'Fermer la recherche',
  de: 'Suche schließen',
  en: 'Close search',
  es: 'Cerrar búsqueda',
  it: 'Chiudi ricerca',
  nl: 'Zoeken sluiten',
}

export default function SearchBar({
  products,
  currentLang,
  variant = 'desktop',
  onNavigate,
}: {
  products: SearchableProduct[]
  currentLang: string
  variant?: 'desktop' | 'mobile'
  onNavigate?: () => void
}) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const placeholder = placeholders[currentLang] ?? placeholders.en
  const emptyLabel = emptyLabels[currentLang] ?? emptyLabels.en
  const hintLabel = hintLabels[currentLang] ?? hintLabels.en
  const label = searchLabel[currentLang] ?? searchLabel.en
  const closeText = closeLabel[currentLang] ?? closeLabel.en

  // Filter products client-side
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return products.slice(0, 8)
    return products
      .filter((p) => {
        const haystack = `${p.title} ${p.capacity} ${p.bestFor}`.toLowerCase()
        return haystack.includes(q)
      })
      .slice(0, 8)
  }, [query, products])

  // Focus input when modal opens
  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  // Lock body scroll when modal is open
  useEffect(() => {
    if (typeof document === 'undefined') return
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
    setQuery('')
  }

  const handleResultClick = () => {
    handleClose()
    onNavigate?.()
  }

  return (
    <>
      {variant === 'desktop' ? (
        <button
          type="button"
          onClick={handleOpen}
          aria-label={label}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleOpen}
          aria-label={label}
          className="flex items-center gap-3 w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <span className="text-sm">{placeholder}</span>
        </button>
      )}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 px-4"
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label={closeText}
            onClick={handleClose}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col">
            {/* Search input */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
              <svg className="w-5 h-5 text-slate-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <label htmlFor="site-search-input" className="sr-only">
                {label}
              </label>
              <input
                id="site-search-input"
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
                aria-label={label}
                className="flex-1 bg-transparent outline-none text-base md:text-lg text-slate-900 placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={handleClose}
                aria-label={closeText}
                className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto">
              {results.length === 0 ? (
                <div className="px-5 py-12 text-center">
                  <div className="text-slate-500 text-sm font-medium mb-1">{emptyLabel}</div>
                  <div className="text-slate-500 text-xs">{hintLabel}</div>
                </div>
              ) : (
                <ul className="divide-y divide-slate-100">
                  {results.map((p) => (
                    <li key={p.asin}>
                      <Link
                        href={`/${currentLang}/guides/airfryers#asin-${p.asin}`}
                        onClick={handleResultClick}
                        className="flex items-center gap-4 px-5 py-3 hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:bg-blue-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
                      >
                        <div className="w-14 h-14 shrink-0 rounded-lg bg-slate-100 overflow-hidden relative">
                          <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            sizes="56px"
                            className="object-contain p-1"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-900 truncate">{p.title}</div>
                          <div className="text-xs text-slate-500">
                            {p.capacity} · {p.bestFor}
                          </div>
                        </div>
                        <div className="text-sm font-bold text-slate-900 shrink-0">{p.price}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
