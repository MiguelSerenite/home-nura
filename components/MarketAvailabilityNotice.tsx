import { Info } from 'lucide-react'

/**
 * US / Canada: says, above the article body, that some models it discusses
 * are sold in Europe only (text from lib/blog/market-notice.ts).
 */
export default function MarketAvailabilityNotice({ text }: { text: string }) {
  return (
    <aside
      role="note"
      data-market-notice
      className="not-prose my-6 flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm leading-relaxed text-slate-700"
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
      <p>{text}</p>
    </aside>
  )
}
