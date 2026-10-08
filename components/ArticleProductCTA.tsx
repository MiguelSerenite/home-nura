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
  /** Page listing the whole selection the products come from. */
  seeAllHref: string
}

const ctaLabels: Record<string, { title: string; subtitle: string; button: string; seeAll: string; disclosure: string }> = {
  fr: {
    title: 'Nos recommandations',
    subtitle: 'Les modèles les mieux notés de notre sélection',
    button: 'Voir le prix sur Amazon',
    seeAll: 'Voir toute la sélection',
    disclosure: 'Lien affilié Amazon : nous touchons une commission, sans surcoût pour vous.',
  },
  en: {
    title: 'Our recommendations',
    subtitle: 'The top-rated models in our selection',
    button: 'Check price on Amazon',
    seeAll: 'See the full selection',
    disclosure: 'Amazon affiliate link: we earn a commission at no extra cost to you.',
  },
  de: {
    title: 'Unsere Empfehlungen',
    subtitle: 'Die bestbewerteten Modelle unserer Auswahl',
    button: 'Preis auf Amazon prüfen',
    seeAll: 'Ganze Auswahl ansehen',
    disclosure: 'Amazon-Affiliate-Link: Wir erhalten eine Provision, ohne Mehrkosten für Sie.',
  },
  es: {
    title: 'Nuestras recomendaciones',
    subtitle: 'Los modelos mejor valorados de nuestra selección',
    button: 'Ver precio en Amazon',
    seeAll: 'Ver toda la selección',
    disclosure: 'Enlace de afiliado de Amazon: recibimos una comisión sin coste adicional para ti.',
  },
  it: {
    title: 'Le nostre raccomandazioni',
    subtitle: 'I modelli meglio valutati della nostra selezione',
    button: 'Vedi prezzo su Amazon',
    seeAll: 'Vedi tutta la selezione',
    disclosure: 'Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te.',
  },
  nl: {
    title: 'Onze aanbevelingen',
    subtitle: 'De best beoordeelde modellen uit onze selectie',
    button: 'Bekijk prijs op Amazon',
    seeAll: 'Bekijk de hele selectie',
    disclosure: 'Amazon-affiliatelink: wij ontvangen een commissie, zonder extra kosten voor jou.',
  },
}

export default function ArticleProductCTA({ products, lang, variant = 'bottom', seeAllHref }: ArticleProductCTAProps) {
  const labels = ctaLabels[lang] || ctaLabels.fr
  const displayProducts = variant === 'inline' ? products.slice(0, 1) : products.slice(0, 3)

  if (variant === 'inline') {
    const p = displayProducts[0]
    if (!p) return null
    return (
      <div className="not-prose my-8 rounded-2xl border border-brand-100 bg-brand-50 p-4 sm:p-5">
        <div className="flex items-center gap-4">
          <div className="w-[72px] h-[72px] flex-shrink-0 relative rounded-xl overflow-hidden bg-white">
            <Image src={p.image} alt="" fill sizes="72px" className="object-contain p-1" loading="lazy" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-slate-900 line-clamp-2">{p.title}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">{p.nuraScore}/10</span>
            </div>
          </div>
          <a
            href={p.url}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
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
            className="hidden sm:inline-flex min-h-12 items-center flex-shrink-0 px-5 bg-brand-600 text-white text-sm font-bold rounded-full hover:bg-brand-700 active:bg-brand-700 transition-colors whitespace-nowrap"
          >
            {labels.button} →
          </a>
        </div>
        <a
          href={p.url}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
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
          className="sm:hidden mt-4 flex min-h-12 w-full items-center justify-center px-5 bg-brand-600 text-white text-sm font-bold rounded-full active:bg-brand-700 transition-colors"
        >
          {labels.button} →
        </a>
        <p className="mt-3 text-xs text-slate-600">{labels.disclosure}</p>
      </div>
    )
  }

  return (
    <div id="article-products" className="not-prose mt-12 mb-8 rounded-2xl border border-brand-100 bg-brand-50 p-5 md:p-8">
      <h3 className="text-xl font-bold text-slate-900 mb-1">{labels.title}</h3>
      <p className="text-sm text-slate-600 mb-6">{labels.subtitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {displayProducts.map((p, i) => (
          <div key={i} className="bg-white rounded-xl p-4 border border-slate-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 relative mb-3">
              <Image src={p.image} alt="" fill sizes="96px" className="object-contain" loading="lazy" />
            </div>
            <p className="text-sm font-bold text-slate-900 line-clamp-2 mb-1">{p.title}</p>
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-1.5 py-0.5 text-xs font-bold rounded-full ${p.nuraScore >= 9 ? 'bg-emerald-100 text-emerald-700' : 'bg-brand-100 text-brand-700'}`}>
                {p.nuraScore}/10
              </span>
            </div>
            <a
              href={p.url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
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
              className="w-full min-h-12 px-4 inline-flex items-center justify-center bg-brand-600 text-white text-sm font-bold rounded-full hover:bg-brand-700 active:bg-brand-700 transition-colors text-center"
            >
              {labels.button} →
            </a>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          href={seeAllHref}
          className="inline-flex min-h-11 items-center text-brand-700 font-bold text-sm hover:underline"
        >
          {labels.seeAll} →
        </Link>
        <p className="mt-2 text-xs text-slate-600">{labels.disclosure}</p>
      </div>
    </div>
  )
}
