import Link from 'next/link'
import { ChevronRight, ExternalLink } from 'lucide-react'
import AuthorByline from '@/components/AuthorByline'
import RichText from '@/components/RichText'
import Kicker from '@/components/ui/Kicker'
import { BCP47_LOCALE } from '@/lib/i18n'
import type { RelatedLink } from '@/lib/market-pages/data'
import { boxedSectionIndexes, rankingSectionIndex, testersSectionIndex } from '@/lib/market-pages/template-sections'
import { marketPageBreadcrumbs, marketPageSchemas } from '@/lib/market-pages/schema'
import type { MarketPage } from '@/lib/market-pages/types'
import { MARKET_PAGE_UI } from '@/lib/market-pages/ui'
import { formatLastUpdated, lastUpdatedLabel } from '@/lib/seo'

const H2 = 'text-xl font-bold tracking-tight text-slate-900 md:text-3xl'

export function JsonLd({ page }: { page: MarketPage }) {
  return (
    <>
      {marketPageSchemas(page).map((schema, i) => (
        <script key={i} type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
    </>
  )
}

/** Breadcrumb, kicker, H1, then "Updated {date} · By {pen name}" (the date is the JSON-LD dateModified). */
export function PageHeader({ page }: { page: MarketPage }) {
  const ui = MARKET_PAGE_UI[page.locale]
  const crumbs = marketPageBreadcrumbs(page)
  return (
    <header className="mx-auto max-w-3xl px-4 pt-4 md:px-6 md:pt-10">
      <nav aria-label={ui.breadcrumb} className="text-xs text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          {crumbs.map((crumb, i) => (
            // On a phone the current page's crumb repeats the H1 right below it.
            <li key={crumb.path} className={`items-center gap-2 ${i === crumbs.length - 1 ? 'hidden md:flex' : 'flex'}`}>
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />}
              {i < crumbs.length - 1 ? (
                <Link href={`/${page.locale}${crumb.path}`} className="transition-colors hover:text-brand-600">
                  {crumb.name}
                </Link>
              ) : (
                <span aria-current="page" className="line-clamp-1 font-medium text-slate-600">
                  {crumb.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="mt-3 md:mt-4">
        <Kicker>{page.kicker}</Kicker>
      </div>
      <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:mt-3 md:text-5xl">{page.h1}</h1>
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
        <time dateTime={page.updated}>
          {lastUpdatedLabel[page.locale]} {formatLastUpdated(page.locale, page.updated)}
        </time>
        <span aria-hidden="true">·</span>
        <AuthorByline lang={page.locale} />
      </div>
    </header>
  )
}

/** The answer first: 40 to 70 words that settle the reader's question. */
export function AnswerBox({ page }: { page: MarketPage }) {
  const ui = MARKET_PAGE_UI[page.locale]
  return (
    <section id="answer" aria-labelledby="answer-title" className="mx-auto max-w-3xl px-4 pt-4 md:px-6 md:pt-8">
      <div className="rounded-2xl border border-brand-100 bg-brand-50/60 px-4 py-3 md:p-6">
        <h2 id="answer-title" className="text-xs font-bold uppercase tracking-widest text-brand-700">
          {ui.answerTitle}
        </h2>
        <p className="mt-1.5 text-[15px] leading-relaxed text-slate-800 md:mt-2 md:text-[17px]">{page.answer}</p>
      </div>
    </section>
  )
}

/** "Why this ranking": the weighted product criteria, the writer's own explanation, and how we compare. */
export function Ranking({ page }: { page: MarketPage }) {
  if (page.criteria.length === 0) return null
  const ui = MARKET_PAGE_UI[page.locale]
  const percent = new Intl.NumberFormat(BCP47_LOCALE[page.locale], { style: 'percent' })
  const explanation = page.sections[rankingSectionIndex(page)]
  return (
    <section id="ranking" aria-labelledby="ranking-title" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-8 md:px-6 md:py-12">
      <h2 id="ranking-title" className={H2}>
        {ui.rankingTitle}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{ui.rankingIntro}</p>
      <ol className="mt-5 space-y-5">
        {page.criteria.map((criterion) => (
          <li key={criterion.name}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-semibold text-slate-900">{criterion.name}</span>
              <span className="shrink-0 text-sm font-bold tabular-nums text-brand-700">{percent.format(criterion.weight / 100)}</span>
            </div>
            <div className="mt-1.5 h-1.5 rounded-full bg-slate-100" aria-hidden="true">
              <div className="h-1.5 rounded-full bg-brand-600" style={{ width: `${criterion.weight}%` }} />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{criterion.explanation}</p>
          </li>
        ))}
      </ol>
      {explanation && (
        <div className="mt-6">
          <RichText blocks={explanation.blocks} />
        </div>
      )}
      <p className="mt-5">
        <Link href={`/${page.locale}/methodologie`} className="text-sm font-semibold text-brand-700 underline-offset-2 hover:text-brand-800 hover:underline">
          {ui.methodologyLink} →
        </Link>
      </p>
    </section>
  )
}

/** The writer's sections, those a template box shows apart (ranking, testers). */
export function Sections({ page }: { page: MarketPage }) {
  const boxed = boxedSectionIndexes(page)
  return (
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-8 md:px-6 md:py-12">
      {page.sections.map((section, i) => boxed.has(i) ? null : (
        <section key={i} aria-labelledby={`section-${i + 1}`}>
          <h2 id={`section-${i + 1}`} className={`mb-4 ${H2}`}>
            {section.h2}
          </h2>
          <RichText blocks={section.blocks} />
        </section>
      ))}
    </div>
  )
}

/** Independent testers' own pages: neutral links, no buy button in this box. */
export function IndependentTesters({ page }: { page: MarketPage }) {
  if (page.independentTesters.length === 0) return null
  const ui = MARKET_PAGE_UI[page.locale]
  const explanation = page.sections[testersSectionIndex(page)]
  return (
    <section id="testers" aria-labelledby="testers-title" className="mx-auto max-w-3xl scroll-mt-24 px-4 pb-8 md:px-6 md:pb-12">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-6">
        <h2 id="testers-title" className="text-lg font-bold text-slate-900 md:text-2xl">
          {ui.testersTitle}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{ui.testersIntro}</p>
        {explanation && (
          <div className="mt-4">
            <RichText blocks={explanation.blocks} />
          </div>
        )}
        <ul className="mt-4 space-y-3">
          {page.independentTesters.map((tester) => (
            <li key={tester.url} className="rounded-xl border border-slate-200 bg-white p-4">
              <a href={tester.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-start gap-2 font-semibold text-slate-900 hover:text-brand-700">
                {tester.name}
                <ExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-brand-600" aria-hidden="true" />
              </a>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{tester.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/** "www.example.com/path…" for a source link. */
function displayUrl(href: string): string {
  const url = new URL(href)
  let path = url.pathname
  try {
    path = decodeURI(path)
  } catch {
    // Keep the encoded path: it still reads as a URL.
  }
  const shown = `${url.hostname.replace(/^www\./, '')}${path === '/' ? '' : path}`
  return shown.length > 80 ? `${shown.slice(0, 77)}…` : shown
}

export function Sources({ page }: { page: MarketPage }) {
  const ui = MARKET_PAGE_UI[page.locale]
  return (
    <section id="sources" aria-labelledby="sources-title" className="mx-auto max-w-3xl scroll-mt-24 px-4 pb-10 md:px-6">
      <h2 id="sources-title" className="text-lg font-bold text-slate-900 md:text-xl">
        {ui.sourcesTitle}
      </h2>
      <ol className="mt-3 list-decimal space-y-1 pl-6 text-sm text-slate-600">
        {page.sources.map((source) => (
          <li key={source}>
            <a href={source} target="_blank" rel="nofollow noopener noreferrer" className="break-words underline-offset-2 hover:text-brand-700 hover:underline">
              {displayUrl(source)}
            </a>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function RelatedLinks({ page, links }: { page: MarketPage; links: readonly RelatedLink[] }) {
  if (links.length === 0) return null
  const ui = MARKET_PAGE_UI[page.locale]
  return (
    <nav aria-labelledby="related-title" className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
      <h2 id="related-title" className="text-lg font-bold text-slate-900 md:text-xl">
        {ui.relatedTitle}
      </h2>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex h-full items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 font-semibold text-slate-900 transition hover:border-brand-200 hover:text-brand-700 hover:shadow-sm"
            >
              {link.label}
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
