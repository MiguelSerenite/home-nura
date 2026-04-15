'use client'

import Image from 'next/image'
import Link from 'next/link'
import { trackAffiliateClick } from '@/lib/analytics'

interface Product {
  asin: string
  title: string
  price: string
  priceNumeric: number
  image: string
  url: string
  nuraScore: number
  capacity: string
}

interface ArticleProductCTAProps {
  products: Product[]
  lang: string
  variant?: 'inline' | 'bottom'
}

const ctaLabels: Record<string, { title: string; subtitle: string; button: string; seeAll: string; score: string }> = {
  fr: {
    title: 'Nos recommandations',
    subtitle: 'Les airfryers les mieux notés par notre équipe',
    button: 'Voir le prix sur Amazon',
    seeAll: 'Voir tous les airfryers testés',
    score: 'Score Nura',
  },
  en: {
    title: 'Our recommendations',
    subtitle: 'Top-rated air fryers by our team',
    button: 'Check price on Amazon',
    seeAll: 'See all tested air fryers',
    score: 'Nura Score',
  },
  de: {
    title: 'Unsere Empfehlungen',
    subtitle: 'Die bestbewerteten Heißluftfritteusen unseres Teams',
    button: 'Preis auf Amazon prüfen',
    seeAll: 'Alle getesteten Airfryer ansehen',
    score: 'Nura Score',
  },
  es: {
    title: 'Nuestras recomendaciones',
    subtitle: 'Las freidoras de aire mejor valoradas por nuestro equipo',
    button: 'Ver precio en Amazon',
    seeAll: 'Ver todas las freidoras probadas',
    score: 'Puntuación Nura',
  },
  it: {
    title: 'Le nostre raccomandazioni',
    subtitle: 'Le friggitrici ad aria meglio valutate dal nostro team',
    button: 'Vedi prezzo su Amazon',
    seeAll: 'Vedi tutte le friggitrici testate',
    score: 'Punteggio Nura',
  },
  nl: {
    title: 'Onze aanbevelingen',
    subtitle: 'De best beoordeelde airfryers door ons team',
    button: 'Bekijk prijs op Amazon',
    seeAll: 'Bekijk alle geteste airfryers',
    score: 'Nura Score',
  },
}

export default function ArticleProductCTA({ products, lang, variant = 'bottom' }: ArticleProductCTAProps) {
  const labels = ctaLabels[lang] || ctaLabels.fr
  const displayProducts = variant === 'inline' ? products.slice(0, 1) : products.slice(0, 3)

  if (variant === 'inline') {
    const p = displayProducts[0]
    if (!p) return null
    return (
      <div className="not-prose my-8 rounded-2xl border-2 border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-20 h-20 flex-shrink-0 relative rounded-xl overflow-hidden bg-white">
          <Image src={p.image} alt={p.title} fill sizes="80px" className="object-contain p-1" loading="lazy" />
        </div>
        <div className="flex-1 min-w-0 text-center sm:text-left">
          <p className="text-sm font-bold text-slate-900 line-clamp-1">{p.title}</p>
          <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
            <span className="text-lg font-black text-slate-900">{p.price}</span>
            <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-700">{p.nuraScore}/10</span>
          </div>
        </div>
        <a
          href={p.url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          onClick={() =>
            trackAffiliateClick({
              asin: p.asin,
              productName: p.title,
              priceNumeric: p.priceNumeric,
              position: 1,
              location: 'article_inline',
              lang,
            })
          }
          className="flex-shrink-0 px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          {labels.button} →
        </a>
      </div>
    )
  }

  return (
    <div className="not-prose mt-12 mb-8 rounded-2xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8">
      <h3 className="text-xl font-bold text-slate-900 mb-1">{labels.title}</h3>
      <p className="text-sm text-slate-500 mb-6">{labels.subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {displayProducts.map((p, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 relative mb-3">
              <Image src={p.image} alt={p.title} fill sizes="96px" className="object-contain" loading="lazy" />
            </div>
            <p className="text-sm font-bold text-slate-900 line-clamp-2 mb-1">{p.title}</p>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-black text-slate-900">{p.price}</span>
              <span className={`px-1.5 py-0.5 text-xs font-bold rounded-full ${p.nuraScore >= 9 ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                {p.nuraScore}/10
              </span>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  asin: p.asin,
                  productName: p.title,
                  priceNumeric: p.priceNumeric,
                  position: i + 1,
                  location: 'article_bottom',
                  lang,
                })
              }
              className="w-full px-4 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-colors text-center block"
            >
              {labels.button} →
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href={`/${lang}/guides/airfryers`}
          className="text-blue-600 font-bold text-sm hover:underline"
        >
          {labels.seeAll} →
        </Link>
      </div>
    </div>
  )
}
