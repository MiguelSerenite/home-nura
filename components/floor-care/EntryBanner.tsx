import Link from 'next/link'
import { getFloorCareGuide } from '@/lib/floor-care/data'
import { floorCareEntryPoint, floorCareHref } from '@/lib/floor-care/navigation'
import { FLOOR_CARE_UI } from '@/lib/floor-care/ui'

const KICKER = 'text-[11px] font-bold uppercase tracking-[0.3em]'

/**
 * Link to the floor-care hub from the cleaning silo hub and the robot,
 * stick and mop-vacuum category hubs, on /us and /ca only (nothing
 * elsewhere). Copy from the hub file's `entryBanner` (else its h1 and
 * meta description).
 */
export default function FloorCareEntryBanner({ lang, silo, category }: { lang: string; silo?: string; category?: string }) {
  const entry = floorCareEntryPoint(lang, { silo, category })
  if (!entry) return null
  const hub = getFloorCareGuide(entry.market, 'hub')
  const ui = FLOOR_CARE_UI[entry.market]
  const title = hub.entryBanner?.title ?? hub.h1
  const text = hub.entryBanner?.text ?? hub.metaDescription
  return (
    <aside aria-labelledby="floor-care-banner" className="mx-auto max-w-3xl px-4 pb-10 md:px-6">
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-5">
        <p className={`${KICKER} text-brand-700`}>{ui.kicker}</p>
        <h2 id="floor-care-banner" className="mt-2 text-lg font-bold text-slate-900">
          {title}
        </h2>
        <p className="mt-1 text-sm leading-relaxed text-slate-700">{text}</p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          <Link href={floorCareHref(entry.market, 'hub')} className="text-brand-700 underline-offset-2 hover:underline">
            {ui.readGuide} →
          </Link>
          {entry.withClearance && (
            <Link href={floorCareHref(entry.market, 'hub', 'clearance')} className="text-slate-700 underline-offset-2 hover:underline">
              {ui.clearance.targetLabel} →
            </Link>
          )}
        </div>
      </div>
    </aside>
  )
}
