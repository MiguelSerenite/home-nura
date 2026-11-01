import type { ReactNode } from 'react'
import AffiliateLink from '@/components/AffiliateLink'
import type { ClickPlacement, ClickSurface } from '@/lib/affiliate-click'

const STICKY_HEAD = 'sticky left-0 z-20 min-w-[7.5rem] max-w-[11rem] border-r border-slate-200 bg-slate-50 px-3 py-3 font-bold md:px-4'
const STICKY_CELL = 'sticky left-0 z-10 min-w-[7.5rem] max-w-[11rem] border-r border-slate-200 bg-white px-3 py-3 font-semibold text-slate-900 md:px-4'
const CELL = 'border-t border-slate-200 px-3 py-3 text-slate-700 md:px-4'
const BUTTON = 'inline-flex min-h-10 items-center whitespace-nowrap rounded-full bg-brand-600 px-4 text-xs font-bold text-white hover:bg-brand-700'

export interface TableRow {
  key: string
  /** First cell, a row heading that stays put while the others scroll sideways. */
  head: ReactNode
  cells: readonly ReactNode[]
}

interface ComparisonTableFrameProps {
  title: string
  /** Phone-only line telling the reader the table scrolls sideways. */
  hint: string
  /** Column headings, the fixed first column first. */
  columns: readonly string[]
  rows: readonly TableRow[]
  /** Under the table (Amazon's disclosure when the table links to Amazon). */
  children?: ReactNode
}

/**
 * A comparison table whose first column stays fixed while the others
 * scroll sideways on a phone (study § 2.6.3, item 6). Shared by the market
 * pages and the answer-first category hubs: `#comparison`, its heading
 * and the scroll region are what the phone checks in e2e/ measure.
 */
export default function ComparisonTableFrame({ title, hint, columns, rows, children }: ComparisonTableFrameProps) {
  return (
    <section id="comparison" aria-labelledby="comparison-title" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-4 md:px-6 md:py-10">
      <h2 id="comparison-title" className="text-xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>
      <p className="mt-1 text-xs text-slate-500 md:hidden">{hint}</p>
      <div role="group" aria-labelledby="comparison-title" tabIndex={0} className="mt-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white md:mt-6">
        <table className="min-w-full border-separate border-spacing-0 text-left text-sm">
          <thead className="text-xs uppercase tracking-wider text-slate-600">
            <tr>
              {columns.map((column, i) => (
                <th key={`${i}-${column}`} scope="col" className={i === 0 ? STICKY_HEAD : 'bg-slate-50 px-3 py-3 font-bold md:px-4'}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="align-top">
                <th scope="row" className={`${STICKY_CELL} border-t`}>
                  {row.head}
                </th>
                {row.cells.map((cell, c) => (
                  <td key={c} className={CELL}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {children}
    </section>
  )
}

interface TableBuyButtonProps {
  href: string
  asin: string
  /** Model name, for the click data and the accessible label. */
  name: string
  position: number
  lang: string
  /** Store-neutral CTA ("View on Amazon"), the dictionary's buy_button. */
  label: string
  placement: ClickPlacement
  surface: ClickSurface
}

/** The Amazon button of a table row (or column, on a duel). */
export function TableBuyButton({ href, asin, name, position, lang, label, placement, surface }: TableBuyButtonProps) {
  return (
    <AffiliateLink
      href={href}
      asin={asin}
      productName={name}
      position={position}
      location="comparison_table"
      placement={placement}
      surface={surface}
      lang={lang}
      ariaLabel={`${label}: ${name}`}
      className={BUTTON}
    >
      {label}
    </AffiliateLink>
  )
}

/** Placeholder of a row the table cannot link. */
export function NoLink() {
  return <span className="text-slate-500">–</span>
}
