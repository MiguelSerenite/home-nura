'use client'

import { trackAffiliateClick } from '@/lib/analytics'
import type { ProductPhoto } from '@/lib/product-photo'
import AmazonDisclosure from './AmazonDisclosure'
import PhotoCredits from './PhotoCredits'
import ProductPhotoImage from './ProductPhotoImage'
import type { ClickPlacement, ClickSurface } from '@/lib/affiliate-click'

export interface QuickAnswerPick {
  model: string
  role?: string
  why?: string
  url: string
  /** Manufacturer's official photo (lib/product-images.ts), shown with its credit. */
  photo?: ProductPhoto
}

const LABELS: Record<string, { title: string; button: string; disclosure: string }> = {
  fr: { title: 'Réponse rapide', button: 'Voir sur Amazon', disclosure: 'Liens affiliés Amazon : commission sans surcoût pour vous.' },
  en: { title: 'Quick answer', button: 'Check price on Amazon', disclosure: 'Amazon affiliate links: commission at no extra cost to you.' },
  de: { title: 'Die Antwort in Kürze', button: 'Bei Amazon ansehen', disclosure: 'Amazon-Affiliate-Links: Provision ohne Mehrkosten für Sie.' },
  es: { title: 'Respuesta rápida', button: 'Ver en Amazon', disclosure: 'Enlaces de afiliado de Amazon: comisión sin coste adicional para ti.' },
  it: { title: 'Risposta rapida', button: 'Vedi su Amazon', disclosure: 'Link affiliati Amazon: riceviamo una commissione, senza costi aggiuntivi per te.' },
  nl: { title: 'Snel antwoord', button: 'Bekijk op Amazon', disclosure: 'Amazon-affiliatelinks: commissie zonder extra kosten voor jou.' },
  pl: { title: 'Szybka odpowiedź', button: 'Zobacz na Amazon', disclosure: 'Linki afiliacyjne Amazon: prowizja bez dodatkowych kosztów dla Ciebie.' },
  sv: { title: 'Snabbt svar', button: 'Visa på Amazon', disclosure: 'Affiliatelänkar till Amazon: provision utan extra kostnad för dig.' },
  us: { title: 'Quick answer', button: 'View on Amazon', disclosure: 'Amazon affiliate links: we earn a commission at no extra cost to you.' },
  ca: { title: 'Quick answer', button: 'View on Amazon', disclosure: 'Amazon affiliate links: commission at no extra cost to you.' },
}

/**
 * Answer-first verdict box ("What is the best X?") at the top of a
 * comparison article: short, explicit picks that search engines and AI
 * assistants can quote. Picks come from the article's own recommendations.
 *
 * `compact` (answer-first category hubs): one row per pick with a small
 * photo and the button under the text; on phones the "why" holds two
 * lines and the photo credits gather under the list, so the comparison
 * table below stays within the first two screens.
 */
export default function QuickAnswer({
  question,
  picks,
  lang,
  kicker,
  placement,
  location = 'article_quick_answer',
  surface = 'verdict',
  compact = false,
}: {
  question: string
  picks: QuickAnswerPick[]
  lang: string
  kicker?: string
  /** Block the box is for the click data: `quick_answer` in an article, `picks` on category and troubleshooting pages. */
  placement: ClickPlacement
  location?: 'article_quick_answer' | 'category_picks'
  /** Legacy click surface (/api/click): the article verdict box unless the page says otherwise. */
  surface?: ClickSurface
  compact?: boolean
}) {
  if (picks.length === 0) return null
  const labels = LABELS[lang] ?? LABELS.fr
  if (compact) return <CompactQuickAnswer {...{ question, picks, lang, kicker, placement, location, surface, labels }} />
  return (
    <section aria-labelledby="quick-answer-title" className="not-prose my-8 rounded-2xl border-2 border-brand-600 bg-white p-5 md:p-6">
      <p id="quick-answer-title" className="text-xs font-bold uppercase tracking-widest text-brand-700">{kicker ?? labels.title}</p>
      <h2 className="mt-1 text-xl font-bold text-slate-900">{question}</h2>
      <ol className="mt-4 space-y-4">
        {picks.map((pick, i) => {
          const track = () =>
            trackAffiliateClick({ asin: '', productName: pick.model, position: i + 1, location, lang, placement, surface, url: pick.url })
          return (
            <li key={pick.model} className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 items-start gap-4">
                {pick.photo && (
                  // Same Amazon link as the button; kept out of the tab order and the accessibility tree.
                  <a
                    href={pick.url}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    data-aff-placement={placement}
                    tabIndex={-1}
                    aria-hidden="true"
                    onClick={track}
                    className="relative block h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-24"
                  >
                    <ProductPhotoImage photo={pick.photo} sizes="96px" className="h-full w-full object-contain" />
                  </a>
                )}
                <div className="min-w-0">
                  {pick.role && <p className="text-sm font-bold text-brand-700">{pick.role}</p>}
                  <p className="text-base font-bold text-slate-900">{pick.model}</p>
                  {pick.why && <p className="mt-1 text-sm text-slate-700 leading-relaxed">{pick.why}</p>}
                  {pick.photo && <p className="mt-1 text-[11px] text-slate-500">{pick.photo.credit}</p>}
                </div>
              </div>
              <a
                href={pick.url}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                data-aff-placement={placement}
                onClick={track}
                className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-brand-600 px-5 text-sm font-bold text-white hover:bg-brand-700 active:bg-brand-700 transition-colors"
              >
                {labels.button} →
              </a>
            </li>
          )
        })}
      </ol>
      <AmazonDisclosure lang={lang} note={labels.disclosure} className="mt-4 text-xs text-slate-600" />
    </section>
  )
}

type CompactProps = {
  question: string
  picks: QuickAnswerPick[]
  lang: string
  kicker?: string
  placement: ClickPlacement
  location: 'article_quick_answer' | 'category_picks'
  surface: ClickSurface
  labels: { title: string; button: string; disclosure: string }
}

function CompactQuickAnswer({ question, picks, lang, kicker, placement, location, surface, labels }: CompactProps) {
  return (
    <section aria-labelledby="quick-answer-title" className="not-prose my-4 rounded-2xl border-2 border-brand-600 bg-white p-4 md:my-8 md:p-6">
      <p id="quick-answer-title" className="text-xs font-bold uppercase tracking-widest text-brand-700">{kicker ?? labels.title}</p>
      <h2 className="mt-1 text-lg font-bold leading-snug text-slate-900 md:text-xl">{question}</h2>
      <ol className="mt-3 space-y-4 md:mt-4">
        {picks.map((pick, i) => {
          const track = () =>
            trackAffiliateClick({ asin: '', productName: pick.model, position: i + 1, location, lang, placement, surface, url: pick.url })
          return (
            <li key={pick.model} className="flex items-start gap-3 md:gap-4">
              {pick.photo && (
                // Same Amazon link as the button; kept out of the tab order and the accessibility tree.
                <a
                  href={pick.url}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  data-aff-placement={placement}
                  tabIndex={-1}
                  aria-hidden="true"
                  onClick={track}
                  className="relative block h-16 w-16 shrink-0 overflow-hidden rounded-xl md:h-24 md:w-24"
                >
                  <ProductPhotoImage photo={pick.photo} sizes="96px" className="h-full w-full object-contain" />
                </a>
              )}
              <div className="min-w-0 flex-1">
                {pick.role && <p className="text-xs font-bold text-brand-700 md:text-sm">{pick.role}</p>}
                <p className="text-[15px] font-bold leading-snug text-slate-900 md:text-base">{pick.model}</p>
                {pick.why && <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-700 md:line-clamp-none">{pick.why}</p>}
                {pick.photo && <p className="mt-1 hidden text-[11px] text-slate-500 md:block">{pick.photo.credit}</p>}
                <a
                  href={pick.url}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  data-aff-placement={placement}
                  onClick={track}
                  className="mt-2 inline-flex min-h-10 items-center justify-center rounded-full bg-brand-600 px-4 text-sm font-bold text-white transition-colors hover:bg-brand-700 active:bg-brand-700"
                >
                  {labels.button} →
                </a>
              </div>
            </li>
          )
        })}
      </ol>
      {/* Phone thumbnails are too small to carry their credit. */}
      <PhotoCredits photos={picks.map((pick) => pick.photo)} lang={lang} className="mt-3 text-[11px] leading-snug text-slate-500 md:hidden" />
      <AmazonDisclosure lang={lang} note={labels.disclosure} className="mt-3 text-xs text-slate-600" />
    </section>
  )
}
