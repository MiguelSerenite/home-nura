'use client'

import { trackAffiliateClick } from '@/lib/analytics'

export interface QuickAnswerPick {
  model: string
  role?: string
  why?: string
  url: string
}

const LABELS: Record<string, { title: string; button: string; disclosure: string }> = {
  fr: { title: 'Réponse rapide', button: 'Voir sur Amazon', disclosure: 'Liens affiliés Amazon : commission sans surcoût pour vous.' },
  en: { title: 'Quick answer', button: 'View on Amazon', disclosure: 'Amazon affiliate links: commission at no extra cost to you.' },
  de: { title: 'Kurze Antwort', button: 'Bei Amazon ansehen', disclosure: 'Amazon-Affiliate-Links: Provision ohne Mehrkosten für Sie.' },
  es: { title: 'Respuesta rápida', button: 'Ver en Amazon', disclosure: 'Enlaces de afiliado de Amazon: comisión sin coste adicional para ti.' },
  it: { title: 'Risposta rapida', button: 'Vedi su Amazon', disclosure: 'Link di affiliazione Amazon: commissione senza costi aggiuntivi per te.' },
  nl: { title: 'Snel antwoord', button: 'Bekijk op Amazon', disclosure: 'Amazon-affiliatelinks: commissie zonder extra kosten voor jou.' },
}

/**
 * Answer-first verdict box ("What is the best X?") at the top of a
 * comparison article: short, explicit picks that search engines and AI
 * assistants can quote. Picks come from the article's own recommendations.
 */
export default function QuickAnswer({
  question,
  picks,
  lang,
  kicker,
  location = 'article_quick_answer',
}: {
  question: string
  picks: QuickAnswerPick[]
  lang: string
  kicker?: string
  location?: 'article_quick_answer' | 'category_picks'
}) {
  if (picks.length === 0) return null
  const labels = LABELS[lang] ?? LABELS.fr
  return (
    <section aria-labelledby="quick-answer-title" className="not-prose my-8 rounded-2xl border-2 border-brand-600 bg-white p-5 md:p-6">
      <p id="quick-answer-title" className="text-xs font-bold uppercase tracking-widest text-brand-700">{kicker ?? labels.title}</p>
      <h2 className="mt-1 text-xl font-bold text-slate-900">{question}</h2>
      <ol className="mt-4 space-y-4">
        {picks.map((pick, i) => (
          <li key={pick.model} className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              {pick.role && <p className="text-sm font-bold text-brand-700">{pick.role}</p>}
              <p className="text-base font-bold text-slate-900">{pick.model}</p>
              {pick.why && <p className="mt-1 text-sm text-slate-700 leading-relaxed">{pick.why}</p>}
            </div>
            <a
              href={pick.url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              onClick={() => trackAffiliateClick({ asin: '', productName: pick.model, position: i + 1, location, lang })}
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-brand-600 px-5 text-sm font-bold text-white hover:bg-brand-700 active:bg-brand-700 transition-colors"
            >
              {labels.button} →
            </a>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-slate-600">{labels.disclosure}</p>
    </section>
  )
}
