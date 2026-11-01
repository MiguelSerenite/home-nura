import type { ReactNode } from 'react'
import Link from 'next/link'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import QuickAnswer from '@/components/QuickAnswer'
import Kicker from '@/components/ui/Kicker'
import { ANSWER_FIRST_UI, type AnswerFirstHub, type HubChange, type HubComparison } from '@/lib/catalog/answer-first'
import type { Lang } from '@/lib/i18n'
import { formatLastUpdated } from '@/lib/seo'
import ComparisonTableFrame, { NoLink, TableBuyButton, type TableRow } from './ComparisonTableFrame'
import { AnswerBox, DateLine, RankingBox } from './Parts'

/**
 * The "answer first" category hub (study § 2.6.3, backlog T3), in page
 * order: header with the update date → [banner, from the route] → short
 * answer (when written) → jump list → our picks → comparison table, within
 * the first two phone screens → why this ranking. The route keeps its own
 * blocks below (guides, sources, related, FAQ) and closes with HubChangelog.
 */

/** Kicker, H1, subtitle, then "Updated {date} · By {pen name} · Our method" (date = Article dateModified). */
export function HubHeader({ lang, kicker, h1, subtitle, modifiedIso }: { lang: Lang; kicker: string; h1: string; subtitle?: string; modifiedIso: string }) {
  const ui = ANSWER_FIRST_UI[lang]
  return (
    <header className="mx-auto max-w-3xl px-4 pb-4 pt-3 md:px-6 md:pb-8 md:pt-6">
      <Kicker>{kicker}</Kicker>
      <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:mt-3 md:text-5xl">{h1}</h1>
      {/* From tablets up: on a phone every line pushes the table down. */}
      {subtitle && <p className="mt-3 hidden text-lg text-slate-500 md:block">{subtitle}</p>}
      <DateLine
        lang={lang}
        iso={modifiedIso}
        extra={
          <>
            <span aria-hidden="true">·</span>
            <Link href={`/${lang}/methodologie`} className="font-medium text-slate-600 hover:text-brand-600">
              {ui.method}
            </Link>
          </>
        }
      />
    </header>
  )
}

export interface JumpItem {
  id: string
  label: string
}

/** Short contents list: one chip per block below, in page order (one scrolling line on a phone). */
export function JumpList({ title, items }: { title: string; items: readonly JumpItem[] }) {
  if (items.length === 0) return null
  return (
    <nav aria-labelledby="contents-title" className="mx-auto max-w-3xl px-4 pt-1 md:px-6">
      <h2 id="contents-title" className="sr-only">
        {title}
      </h2>
      <ol className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 text-sm md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
        {items.map((item) => (
          <li key={item.id} className="shrink-0">
            <a href={`#${item.id}`} className="inline-flex min-h-9 items-center whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 font-semibold text-slate-700 hover:border-brand-200 hover:text-brand-700">
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

/** A cell of this many characters reads as a sentence: give it room instead of a thin, tall column. */
const LONG_CELL = 60

function Cell({ text }: { text: string }) {
  return text.length > LONG_CELL ? <span className="block min-w-[14rem] md:min-w-[18rem]">{text}</span> : <>{text}</>
}

/** The comparison table: the guide's columns (or the picks' on /us and /ca), an Amazon column when a row links. */
export function HubComparisonTable({ lang, comparison, buyLabel }: { lang: Lang; comparison: HubComparison; buyLabel: string }) {
  const ui = ANSWER_FIRST_UI[lang]
  const withLinks = comparison.rows.some((row) => row.link)
  const rows: TableRow[] = comparison.rows.map((row, i) => {
    const amazon = row.link ? (
      <TableBuyButton href={row.link.url} asin={row.link.asin ?? ''} name={row.link.name} position={i + 1} lang={lang} label={buyLabel} placement="table" surface="table" />
    ) : (
      <NoLink />
    )
    const cells = row.cells.map((text, c) => <Cell key={c} text={text} />)
    return { key: `${i}-${row.model}`, head: row.model, cells: [...cells, ...(withLinks ? [amazon] : [])] }
  })
  return (
    <ComparisonTableFrame
      title={ui.comparisonTitle}
      hint={ui.tableHint}
      columns={withLinks ? [...comparison.columns, 'Amazon'] : comparison.columns}
      rows={rows}
    >
      {withLinks && <AmazonDisclosure lang={lang} className="mt-3 text-xs text-slate-600" />}
    </ComparisonTableFrame>
  )
}

interface AnswerFirstTopProps {
  lang: Lang
  hub: AnswerFirstHub
  /** Picks heading when the guide has no verdict question ("Heaters: which to buy in 2026?"). */
  picksQuestion: string
  /** Store-neutral CTA of the table rows, the dictionary's buy_button. */
  buyLabel: string
  /** Jump list entries of the route's own blocks below the ranking (guides, FAQ). */
  laterItems?: readonly JumpItem[]
  /** Under the ranking criteria: the hub's own words on how it compares. */
  about?: ReactNode
}

export function AnswerFirstTop({ lang, hub, picksQuestion, buyLabel, laterItems = [], about }: AnswerFirstTopProps) {
  const ui = ANSWER_FIRST_UI[lang]
  const items: JumpItem[] = [
    ...(hub.picks.length > 0 ? [{ id: 'picks', label: ui.picksLabel(hub.picks.length) }] : []),
    ...(hub.comparison ? [{ id: 'comparison', label: ui.comparisonTitle }] : []),
    { id: 'ranking', label: ui.rankingTitle },
    ...laterItems,
    ...(hub.changelog.length > 0 ? [{ id: 'changelog', label: ui.changelogTitle }] : []),
  ]
  return (
    <>
      {hub.answer && <AnswerBox title={ui.answerTitle} answer={hub.answer} />}
      <JumpList title={ui.contentsTitle} items={items} />
      {hub.picks.length > 0 && (
        <div id="picks" className="mx-auto max-w-3xl scroll-mt-24 px-4 md:px-6">
          <QuickAnswer
            question={hub.picksQuestion ?? picksQuestion}
            picks={[...hub.picks]}
            lang={lang}
            kicker={ui.picksLabel(hub.picks.length)}
            placement="picks"
            location="category_picks"
            compact
          />
        </div>
      )}
      {hub.comparison && <HubComparisonTable lang={lang} comparison={hub.comparison} buyLabel={buyLabel} />}
      <RankingBox lang={lang} title={ui.rankingTitle} intro={ui.rankingIntro} criteria={hub.criteria.map((name) => ({ name }))} methodologyLabel={ui.methodologyLink}>
        {about}
      </RankingBox>
    </>
  )
}

/** "Latest updates": dated changes of the hub in this locale, newest first (nothing when none). */
export function HubChangelog({ lang, changes }: { lang: Lang; changes: readonly HubChange[] }) {
  if (changes.length === 0) return null
  const ui = ANSWER_FIRST_UI[lang]
  return (
    <section id="changelog" aria-labelledby="changelog-title" className="mx-auto max-w-3xl scroll-mt-24 px-4 pb-12 md:px-6">
      <h2 id="changelog-title" className="text-lg font-bold text-slate-900 md:text-xl">
        {ui.changelogTitle}
      </h2>
      <ol className="mt-3 space-y-2 text-sm text-slate-600">
        {changes.map((change) => (
          <li key={`${change.date}-${change.note}`} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
            <time dateTime={change.date} className="shrink-0 font-semibold text-slate-800">
              {formatLastUpdated(lang, change.date)}
            </time>
            <span>{change.note}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
