import type { ReactNode } from 'react'
import Link from 'next/link'
import AuthorByline from '@/components/AuthorByline'
import { BCP47_LOCALE, type Lang } from '@/lib/i18n'
import { formatLastUpdated, lastUpdatedLabel } from '@/lib/seo'

/**
 * Blocks of the "answer first" template (study § 2.6.3) shared by the
 * market pages (components/market-pages) and the category hubs
 * (components/answer-first/AnswerFirstHub.tsx).
 */

const H2 = 'text-xl font-bold tracking-tight text-slate-900 md:text-3xl'

/** "Updated {date} · By {pen name}" (+ `extra`): the date is the page's JSON-LD dateModified. */
export function DateLine({ lang, iso, extra }: { lang: Lang; iso: string; extra?: ReactNode }) {
  return (
    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
      <time dateTime={iso}>
        {lastUpdatedLabel[lang]} {formatLastUpdated(lang, iso)}
      </time>
      <span aria-hidden="true">·</span>
      <AuthorByline lang={lang} />
      {extra}
    </div>
  )
}

/** The answer first: 40 to 70 words that settle the reader's question. */
export function AnswerBox({ title, answer }: { title: string; answer: string }) {
  return (
    <section id="answer" aria-labelledby="answer-title" className="mx-auto max-w-3xl px-4 pt-4 md:px-6 md:pt-8">
      <div className="rounded-2xl border border-brand-100 bg-brand-50/60 px-4 py-3 md:p-6">
        <h2 id="answer-title" className="text-xs font-bold uppercase tracking-widest text-brand-700">
          {title}
        </h2>
        <p className="mt-1.5 text-[15px] leading-relaxed text-slate-800 md:mt-2 md:text-[17px]">{answer}</p>
      </div>
    </section>
  )
}

export interface RankingCriterion {
  name: string
  /** Share of the ranking in percent, when the page publishes one; never invented. */
  weight?: number
  explanation?: string
}

interface RankingBoxProps {
  lang: Lang
  title: string
  intro: string
  criteria: readonly RankingCriterion[]
  methodologyLabel: string
  /** Under the criteria: the writer's own explanation. */
  children?: ReactNode
}

/**
 * "Why this ranking": the criteria, weighted (bar per criterion) when
 * every one has a published weight, else listed without weights, then the
 * link to how we compare.
 */
export function RankingBox({ lang, title, intro, criteria, methodologyLabel, children }: RankingBoxProps) {
  const weighted = criteria.length > 0 && criteria.every((c) => c.weight !== undefined)
  const percent = new Intl.NumberFormat(BCP47_LOCALE[lang], { style: 'percent' })
  return (
    <section id="ranking" aria-labelledby="ranking-title" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-8 md:px-6 md:py-12">
      <h2 id="ranking-title" className={H2}>
        {title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{intro}</p>
      {weighted ? (
        <ol className="mt-5 space-y-5">
          {criteria.map((criterion) => (
            <li key={criterion.name}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-semibold text-slate-900">{criterion.name}</span>
                <span className="shrink-0 text-sm font-bold tabular-nums text-brand-700">{percent.format((criterion.weight ?? 0) / 100)}</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-slate-100" aria-hidden="true">
                <div className="h-1.5 rounded-full bg-brand-600" style={{ width: `${criterion.weight}%` }} />
              </div>
              {criterion.explanation && <p className="mt-2 text-sm leading-relaxed text-slate-600">{criterion.explanation}</p>}
            </li>
          ))}
        </ol>
      ) : (
        criteria.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" data-criteria-unweighted="">
            {criteria.map((criterion) => (
              <li key={criterion.name} className="rounded-full border border-brand-100 bg-brand-50/60 px-3 py-1 text-sm font-semibold text-slate-800">
                {criterion.name}
              </li>
            ))}
          </ul>
        )
      )}
      {children && <div className="mt-6">{children}</div>}
      <p className="mt-5">
        <Link href={`/${lang}/methodologie`} className="text-sm font-semibold text-brand-700 underline-offset-2 hover:text-brand-800 hover:underline">
          {methodologyLabel} →
        </Link>
      </p>
    </section>
  )
}
