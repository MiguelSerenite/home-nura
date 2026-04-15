'use client'

import { useState } from 'react'
import Image from 'next/image'
import { trackAffiliateClick, trackEvent, EVENTS } from '@/lib/analytics'

interface ComparatorProduct {
  asin: string
  title: string
  price: string
  priceNumeric?: number
  image: string
  url: string
  nuraScore: number
  capacity: string
  bestFor: string
  pros: string[]
  cons: string[]
}

interface Labels {
  pickProduct: string
  nuraScore: string
  capacity: string
  bestFor: string
  pros: string
  cons: string
  price: string
  viewOnAmazon: string
  clearSlot: string
  close: string
}

const LABELS: Record<string, Labels> = {
  fr: {
    pickProduct: 'Choisir un modèle',
    nuraScore: 'Note Nura',
    capacity: 'Capacité',
    bestFor: 'Idéal pour',
    pros: 'Points forts',
    cons: 'À savoir',
    price: 'Prix',
    viewOnAmazon: 'Voir sur Amazon',
    clearSlot: 'Retirer',
    close: 'Fermer',
  },
  en: {
    pickProduct: 'Pick a model',
    nuraScore: 'Nura score',
    capacity: 'Capacity',
    bestFor: 'Best for',
    pros: 'Strengths',
    cons: 'Watch out',
    price: 'Price',
    viewOnAmazon: 'View on Amazon',
    clearSlot: 'Remove',
    close: 'Close',
  },
  de: {
    pickProduct: 'Modell wählen',
    nuraScore: 'Nura-Bewertung',
    capacity: 'Kapazität',
    bestFor: 'Ideal für',
    pros: 'Stärken',
    cons: 'Zu beachten',
    price: 'Preis',
    viewOnAmazon: 'Auf Amazon ansehen',
    clearSlot: 'Entfernen',
    close: 'Schließen',
  },
  es: {
    pickProduct: 'Elegir un modelo',
    nuraScore: 'Nota Nura',
    capacity: 'Capacidad',
    bestFor: 'Ideal para',
    pros: 'Puntos fuertes',
    cons: 'A tener en cuenta',
    price: 'Precio',
    viewOnAmazon: 'Ver en Amazon',
    clearSlot: 'Quitar',
    close: 'Cerrar',
  },
  it: {
    pickProduct: 'Scegli un modello',
    nuraScore: 'Voto Nura',
    capacity: 'Capacità',
    bestFor: 'Ideale per',
    pros: 'Punti di forza',
    cons: 'Da sapere',
    price: 'Prezzo',
    viewOnAmazon: 'Vedi su Amazon',
    clearSlot: 'Rimuovere',
    close: 'Chiudi',
  },
  nl: {
    pickProduct: 'Kies een model',
    nuraScore: 'Nura-score',
    capacity: 'Capaciteit',
    bestFor: 'Ideaal voor',
    pros: 'Sterke punten',
    cons: 'Let op',
    price: 'Prijs',
    viewOnAmazon: 'Bekijk op Amazon',
    clearSlot: 'Verwijderen',
    close: 'Sluiten',
  },
}

export default function Comparator({
  products,
  currentLang,
}: {
  products: ComparatorProduct[]
  currentLang: string
}) {
  const [slots, setSlots] = useState<(string | null)[]>([
    products[0]?.asin ?? null,
    products[1]?.asin ?? null,
    null,
  ])
  const [pickerSlot, setPickerSlot] = useState<number | null>(null)

  const t = LABELS[currentLang] ?? LABELS.en

  const getProduct = (asin: string | null) =>
    asin ? products.find((p) => p.asin === asin) ?? null : null

  const setSlot = (index: number, asin: string | null) => {
    setSlots((prev) => {
      const next = [...prev]
      const previous = next[index]
      next[index] = asin
      if (asin && asin !== previous) {
        trackEvent(EVENTS.COMPARATOR_ADD, { asin, slot: index, lang: currentLang })
      } else if (!asin && previous) {
        trackEvent(EVENTS.COMPARATOR_REMOVE, { asin: previous, slot: index, lang: currentLang })
      }
      return next
    })
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {slots.map((asin, index) => {
          const product = getProduct(asin)
          return (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white overflow-hidden flex flex-col"
            >
              {product ? (
                <>
                  <div className="relative aspect-square bg-slate-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-contain p-5"
                      loading="lazy"
                    />
                    <button
                      type="button"
                      onClick={() => setSlot(index, null)}
                      aria-label={t.clearSlot}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur border border-slate-200 flex items-center justify-center text-slate-500 hover:text-red-600 hover:border-red-300 transition-colors"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                        <path d="M18 6 6 18M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-sm md:text-base font-bold text-slate-900 leading-tight mb-3 line-clamp-2">
                      {product.title}
                    </h3>
                    <div className="space-y-2.5 text-xs md:text-sm flex-1">
                      <Row label={t.nuraScore}>
                        <span className="font-bold text-blue-600">{product.nuraScore}/10</span>
                      </Row>
                      <Row label={t.capacity}>
                        <span className="font-semibold text-slate-900">{product.capacity}</span>
                      </Row>
                      <Row label={t.bestFor}>
                        <span className="font-semibold text-slate-900">{product.bestFor}</span>
                      </Row>
                      <Row label={t.price}>
                        <span className="font-bold text-slate-900">{product.price}</span>
                      </Row>
                      <div className="pt-3">
                        <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-600 mb-2">
                          {t.pros}
                        </div>
                        <ul className="space-y-1 text-slate-600">
                          {product.pros.slice(0, 3).map((p, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                              <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2">
                        <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-amber-600 mb-2">
                          {t.cons}
                        </div>
                        <ul className="space-y-1 text-slate-600">
                          {product.cons.slice(0, 2).map((c, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs md:text-sm">
                              <span className="text-amber-500 shrink-0 mt-0.5">!</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      onClick={() =>
                        trackAffiliateClick({
                          asin: product.asin,
                          productName: product.title,
                          priceNumeric: product.priceNumeric,
                          position: index + 1,
                          location: 'comparator',
                          lang: currentLang,
                        })
                      }
                      className="mt-5 block w-full rounded-full bg-blue-600 px-4 py-3 text-center text-xs md:text-sm font-bold text-white hover:bg-blue-700 transition-colors"
                    >
                      {t.viewOnAmazon}
                    </a>
                  </div>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setPickerSlot(index)}
                  aria-label={t.pickProduct}
                  className="flex-1 min-h-[22rem] flex flex-col items-center justify-center gap-4 p-8 text-slate-500 hover:text-blue-600 hover:bg-blue-50/50 transition-colors border-2 border-dashed border-slate-200 hover:border-blue-300 m-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold">{t.pickProduct}</span>
                </button>
              )}
            </div>
          )
        })}
      </div>

      {/* Product picker modal */}
      {pickerSlot !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 px-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label={t.close}
            onClick={() => setPickerSlot(null)}
            className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">{t.pickProduct}</h3>
              <button
                type="button"
                onClick={() => setPickerSlot(null)}
                aria-label={t.close}
                className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto divide-y divide-slate-100">
              {products.map((p) => {
                const alreadyPicked = slots.includes(p.asin)
                return (
                  <li key={p.asin}>
                    <button
                      type="button"
                      disabled={alreadyPicked}
                      onClick={() => {
                        setSlot(pickerSlot, p.asin)
                        setPickerSlot(null)
                      }}
                      className={`w-full flex items-center gap-4 px-5 py-3 text-left transition-colors ${
                        alreadyPicked
                          ? 'opacity-40 cursor-not-allowed'
                          : 'hover:bg-slate-50'
                      }`}
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
                          {p.capacity} · {p.nuraScore}/10
                        </div>
                      </div>
                      <div className="text-sm font-bold text-slate-900 shrink-0">{p.price}</div>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 py-1.5 border-b border-slate-100 last:border-b-0">
      <span className="text-slate-500 text-[11px] md:text-xs font-medium uppercase tracking-wide">
        {label}
      </span>
      <span className="text-right">{children}</span>
    </div>
  )
}
