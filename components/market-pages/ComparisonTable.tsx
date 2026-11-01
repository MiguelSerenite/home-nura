import AmazonDisclosure from '@/components/AmazonDisclosure'
import ComparisonTableFrame, { NoLink, TableBuyButton, type TableRow } from '@/components/answer-first/ComparisonTableFrame'
import { marketPickUrl } from '@/lib/market-pages/picks'
import type { MarketPage, MarketPagePick } from '@/lib/market-pages/types'
import { MARKET_PAGE_UI } from '@/lib/market-pages/ui'
import { findPick, pickName } from '@/lib/pick-names'

function BuyButton({ page, pick, position, buyLabel }: { page: MarketPage; pick: MarketPagePick; position: number; buyLabel: string }) {
  return (
    <TableBuyButton
      href={marketPickUrl(pick, page.locale)}
      asin={pick.asin ?? ''}
      name={pickName(pick)}
      position={position}
      lang={page.locale}
      label={buyLabel}
      placement="market_page"
      surface="market_page"
    />
  )
}

/**
 * The page's comparison table, first column fixed while the others
 * scroll sideways on a phone. One model per row (an Amazon column for the
 * page's picks), or, on a duel, one spec per row with the two models as
 * columns (an Amazon row under them).
 */
export default function ComparisonTable({ page, buyLabel }: { page: MarketPage; buyLabel: string }) {
  const { columns, rows, rowsAreModels } = page.comparison
  if (rows.length === 0) return null
  const ui = MARKET_PAGE_UI[page.locale]
  const rowPicks = rowsAreModels ? rows.map((row) => findPick(page.picks, row[0])) : []
  const columnPicks = rowsAreModels ? [] : columns.slice(1).map((column) => findPick(page.picks, column))
  const withLinks = rowPicks.some(Boolean) || columnPicks.some(Boolean)
  const amazonColumn = rowsAreModels && withLinks

  const modelRows: TableRow[] = rows.map((row, r) => {
    const pick = rowPicks[r]
    const amazon = pick ? <BuyButton page={page} pick={pick} position={r + 1} buyLabel={buyLabel} /> : <NoLink />
    return { key: row[0], head: row[0], cells: [...row.slice(1), ...(amazonColumn ? [amazon] : [])] }
  })
  const amazonRow: TableRow[] =
    !rowsAreModels && withLinks
      ? [{ key: 'Amazon', head: 'Amazon', cells: columnPicks.map((pick, c) => pick && <BuyButton key={c} page={page} pick={pick} position={c + 1} buyLabel={buyLabel} />) }]
      : []

  return (
    <ComparisonTableFrame
      title={ui.comparisonTitle}
      hint={ui.tableHint}
      columns={amazonColumn ? [...columns, 'Amazon'] : columns}
      rows={[...modelRows, ...amazonRow]}
    >
      {withLinks && <AmazonDisclosure lang={page.locale} className="mt-3 text-xs text-slate-600" />}
    </ComparisonTableFrame>
  )
}
