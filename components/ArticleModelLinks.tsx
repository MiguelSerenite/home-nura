'use client'

import type { ClickPlacement } from '@/lib/affiliate-click'
import { trackAffiliateClick } from '@/lib/analytics'
import type { ProductPhoto } from '@/lib/product-photo'
import AmazonDisclosure from './AmazonDisclosure'
import PhotoCredits from './PhotoCredits'
import ProductPhotoImage from './ProductPhotoImage'

export interface ModelLink {
  name: string
  url: string
  /** Manufacturer's official photo (lib/product-images.ts). */
  photo?: ProductPhoto
}

/** Mid-article (surface after-h2) and after the article (surface bottom). */
const PLACEMENT: ClickPlacement = 'product_block'

const LABELS: Record<string, { title: string; bottomTitle: string; button: string; disclosure: string }> = {
  fr: { title: 'Les modèles cités dans ce guide', bottomTitle: 'Nos recommandations', button: 'Voir sur Amazon', disclosure: 'Liens affiliés Amazon : nous touchons une commission, sans surcoût pour vous.' },
  en: { title: 'Models mentioned in this guide', bottomTitle: 'Our recommendations', button: 'View on Amazon', disclosure: 'Amazon affiliate links: we earn a commission at no extra cost to you.' },
  de: { title: 'Die in diesem Ratgeber genannten Modelle', bottomTitle: 'Unsere Empfehlungen', button: 'Bei Amazon ansehen', disclosure: 'Amazon-Affiliate-Links: Wir erhalten eine Provision, ohne Mehrkosten für Sie.' },
  es: { title: 'Los modelos citados en esta guía', bottomTitle: 'Nuestras recomendaciones', button: 'Ver en Amazon', disclosure: 'Enlaces de afiliado de Amazon: recibimos una comisión sin coste adicional para ti.' },
  it: { title: 'I modelli citati in questa guida', bottomTitle: 'Le nostre raccomandazioni', button: 'Vedi su Amazon', disclosure: 'Link di affiliazione Amazon: riceviamo una commissione senza costi aggiuntivi per te.' },
  nl: { title: 'De modellen uit deze gids', bottomTitle: 'Onze aanbevelingen', button: 'Bekijk op Amazon', disclosure: 'Amazon-affiliatelinks: wij ontvangen een commissie, zonder extra kosten voor jou.' },
  pl: { title: 'Modele wymienione w tym poradniku', bottomTitle: 'Nasze rekomendacje', button: 'Zobacz na Amazon', disclosure: 'Linki afiliacyjne Amazon: otrzymujemy prowizję, bez dodatkowych kosztów dla Ciebie.' },
  sv: { title: 'Modeller som nämns i guiden', bottomTitle: 'Våra rekommendationer', button: 'Visa på Amazon', disclosure: 'Affiliatelänkar till Amazon: vi får provision, utan extra kostnad för dig.' },
  us: { title: 'Models mentioned in this guide', bottomTitle: 'Our recommendations', button: 'View on Amazon', disclosure: 'Amazon affiliate links: we earn a commission at no extra cost to you.' },
  ca: { title: 'Models mentioned in this guide', bottomTitle: 'Our recommendations', button: 'View on Amazon', disclosure: 'Amazon affiliate links: we earn a commission at no extra cost to you.' },
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
  // Names stay aligned when only some models have a photo.
  const anyPhoto = models.some((m) => m.photo)
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
            <span className="flex min-w-0 items-center gap-3">
              {model.photo ? (
                <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-lg">
                  <ProductPhotoImage photo={model.photo} sizes="56px" className="h-full w-full object-contain" />
                </span>
              ) : (
                anyPhoto && <span aria-hidden="true" className="block h-14 w-14 shrink-0 rounded-lg bg-brand-100/60" />
              )}
              <span className="text-sm font-semibold text-slate-900">{model.name}</span>
            </span>
            <a
              href={model.url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              data-aff-placement={PLACEMENT}
              onClick={() =>
                trackAffiliateClick({
                  asin: '',
                  productName: model.name,
                  position: i + 1,
                  location: isBottom ? 'article_bottom' : 'article_models',
                  lang,
                  placement: PLACEMENT,
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
      <PhotoCredits photos={models.map((m) => m.photo)} lang={lang} className="mt-3 text-[11px] leading-snug text-slate-500" />
      <AmazonDisclosure lang={lang} note={labels.disclosure} className="mt-3 text-xs text-slate-600" />
    </div>
  )
}
