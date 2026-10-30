'use client'

import { trackAffiliateClick } from '@/lib/analytics'

export interface ModelLink {
  name: string
  url: string
}

const LABELS: Record<string, { title: string; bottomTitle: string; button: string; disclosure: string }> = {
  fr: { title: 'Les modèles cités dans ce guide', bottomTitle: 'Nos recommandations', button: 'Voir sur Amazon', disclosure: 'Liens affiliés Amazon : nous touchons une commission, sans surcoût pour vous.' },
  en: { title: 'Models mentioned in this guide', bottomTitle: 'Our recommendations', button: 'View on Amazon', disclosure: 'Amazon affiliate links: we earn a commission at no extra cost to you.' },
  de: { title: 'Die in diesem Ratgeber genannten Modelle', bottomTitle: 'Unsere Empfehlungen', button: 'Bei Amazon ansehen', disclosure: 'Amazon-Affiliate-Links: Wir erhalten eine Provision, ohne Mehrkosten für Sie.' },
  es: { title: 'Los modelos citados en esta guía', bottomTitle: 'Nuestras recomendaciones', button: 'Ver en Amazon', disclosure: 'Enlaces de afiliado de Amazon: recibimos una comisión sin coste adicional para ti.' },
  it: { title: 'I modelli citati in questa guida', bottomTitle: 'Le nostre raccomandazioni', button: 'Vedi su Amazon', disclosure: 'Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te.' },
  nl: { title: 'De modellen uit deze gids', bottomTitle: 'Onze aanbevelingen', button: 'Bekijk op Amazon', disclosure: 'Amazon-affiliatelinks: wij ontvangen een commissie, zonder extra kosten voor jou.' },
}

/**
 * Buy links for the models an article recommends but the catalog does not
 * carry: mid-article (surface "after-h2") and again after the article
 * (surface "bottom"), like the catalog product blocks.
 */
export default function ArticleModelLinks({
  models,
  lang,
  id,
  surface = 'after-h2',
}: {
  models: ModelLink[]
  lang: string
  id?: string
  surface?: 'after-h2' | 'bottom'
}) {
  if (models.length === 0) return null
  const labels = LABELS[lang] ?? LABELS.fr
  const isBottom = surface === 'bottom'
  return (
    <div
      id={id}
      data-buy-block
      className={`not-prose rounded-2xl border border-brand-100 bg-brand-50 p-5 md:p-6 ${isBottom ? 'mt-12 mb-8' : 'my-10'}`}
    >
      <h2 className="text-lg font-bold text-slate-900 mb-4">{isBottom ? labels.bottomTitle : labels.title}</h2>
      <ul className="divide-y divide-brand-100">
        {models.map((model, i) => (
          <li key={model.name} className="flex items-center justify-between gap-3 py-3">
            <span className="text-sm font-semibold text-slate-900">{model.name}</span>
            <a
              href={model.url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              onClick={() =>
                trackAffiliateClick({
                  asin: '',
                  productName: model.name,
                  position: i + 1,
                  location: isBottom ? 'article_bottom' : 'article_models',
                  lang,
                  surface,
                  url: model.url,
                })
              }
              className="inline-flex min-h-12 shrink-0 items-center rounded-full bg-brand-600 px-5 text-sm font-bold text-white hover:bg-brand-700 active:bg-brand-700 transition-colors"
            >
              {labels.button} →
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-slate-600">{labels.disclosure}</p>
    </div>
  )
}
