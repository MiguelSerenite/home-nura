import Link from 'next/link'
import AffiliateLink from '@/components/AffiliateLink'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import { FLOOR_CARE_NEEDS, type FloorCareGuideKey, type FloorCareMarket, type FloorCareNeedKey } from '@/lib/floor-care/config'
import { getFloorCareMarket, needOfHubPick } from '@/lib/floor-care/data'
import { chooserHref, chooserTargetLabel, floorCareHref, hasClearanceCheck } from '@/lib/floor-care/navigation'
import { ROBOT_GUIDES, pickAmazonUrl, pickId, pickName, robotPicks } from '@/lib/floor-care/picks'
import type { FloorCareGuide, FloorCareMarketData } from '@/lib/floor-care/types'
import { FLOOR_CARE_UI } from '@/lib/floor-care/ui'
import Chooser, { type ChooserItem } from './Chooser'
import ClearanceFinder, { type ClearanceRobot } from './ClearanceFinder'
import ComparisonSection from './ComparisonSection'
import PickCards from './PickCards'
import { FloorCareShell, Sections } from './PageParts'

/** Chooser questions with their links resolved for the page they sit on (the clearance question apart). */
function chooserItems(data: FloorCareGuide): ChooserItem[] {
  return data.chooser
    .filter((question) => !question.clearance)
    .map((question) => ({
      question: question.question,
      helper: question.helper,
      answers: question.answers.map((answer) => ({
        label: answer.label,
        href: chooserHref(answer.goesTo, data.market, data.guide),
        targetLabel: chooserTargetLabel(answer.goesTo, data.market),
      })),
    }))
}

/** The page's clearance question as the check's heading, hint and rules of thumb. */
function clearanceCopy(data: FloorCareGuide) {
  const question = data.chooser.find((q) => q.clearance)
  if (!question) return {}
  return {
    title: question.question,
    intro: question.helper ?? undefined,
    tips: question.answers.map((answer) => ({ label: answer.label, href: chooserHref(answer.goesTo, data.market, data.guide) })),
  }
}

/** Robot vacuums and robot mops for the clearance check, linked to their cards from the page `from`. */
function clearanceRobots(market: FloorCareMarketData, from: FloorCareGuideKey): ClearanceRobot[] {
  const ui = FLOOR_CARE_UI[market.hub.market]
  return ROBOT_GUIDES.flatMap((guide) =>
    robotPicks(market[guide]).map((pick) => ({
      name: pickName(pick),
      kind: ui.robotKind[guide],
      heightMm: pick.heightMm,
      href: from === guide ? `#${pickId(pick)}` : floorCareHref(market.hub.market, guide, pickId(pick)),
    })),
  )
}

/** The chooser (when the file has questions), then the robot clearance check on the hub and the guides with robots. */
function ChooserBlock({ data, market }: { data: FloorCareGuide; market: FloorCareMarketData }) {
  const ui = FLOOR_CARE_UI[data.market]
  const items = chooserItems(data)
  const withClearance = hasClearanceCheck(data.guide)
  if (items.length === 0 && !withClearance) return null
  return (
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-12 md:px-6">
      {items.length > 0 && (
        <section id="chooser" aria-labelledby="chooser-title" className="scroll-mt-24">
          <h2 id="chooser-title" className="mb-6 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {ui.chooserTitle}
          </h2>
          <Chooser market={data.market} questions={items} />
        </section>
      )}
      {withClearance && <ClearanceFinder market={data.market} robots={clearanceRobots(market, data.guide)} {...clearanceCopy(data)} />}
    </div>
  )
}

/** The hub's three jobs, each with its guide and the hub's top pick for it. */
function NeedCards({ market, buyLabel }: { market: FloorCareMarketData; buyLabel: string }) {
  const { hub } = market
  const ui = FLOOR_CARE_UI[hub.market]
  const picksByNeed = (need: FloorCareNeedKey) => hub.picks.filter((pick) => needOfHubPick(market, pick) === need)
  const hasAmazonLinks = hub.picks.some((pick) => pickAmazonUrl(pick, hub.market) !== null)
  return (
    <section aria-labelledby="needs-title" className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <h2 id="needs-title" className="text-center text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
        {ui.needsTitle}
      </h2>
      <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {FLOOR_CARE_NEEDS.map((need) => (
          <li key={need} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900">
              <Link href={floorCareHref(hub.market, need)} className="hover:text-brand-700">
                {ui.needs[need].title}
              </Link>
            </h3>
            <p className="mt-2 text-sm font-semibold text-slate-800">{ui.needs[need].covers}</p>
            <p className="mt-1 text-sm text-slate-600">{ui.needs[need].machines}</p>
            {picksByNeed(need).map((pick, i) => {
              const url = pickAmazonUrl(pick, hub.market)
              return (
                <div key={pickId(pick)} className="mt-4 rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-700">{ui.topPick}</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    <Link href={floorCareHref(hub.market, need, pickId(pick))} className="hover:text-brand-700">
                      {pickName(pick)}
                    </Link>
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{pick.role}</p>
                  {url && (
                    <AffiliateLink
                      href={url}
                      asin={pick.asin ?? ''}
                      productName={pickName(pick)}
                      position={i + 1}
                      location="category_picks"
                      placement="floor_care"
                      surface="floor_care"
                      lang={hub.market}
                      ariaLabel={`${buyLabel}: ${pickName(pick)}`}
                      className="mt-3 inline-flex min-h-10 items-center rounded-full bg-brand-600 px-4 text-xs font-bold text-white hover:bg-brand-700"
                    >
                      {buyLabel} →
                    </AffiliateLink>
                  )}
                </div>
              )
            })}
            <Link
              href={floorCareHref(hub.market, need)}
              className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              {ui.readGuide}
              <span className="sr-only">: {ui.needs[need].title}</span> →
            </Link>
          </li>
        ))}
      </ul>
      {hasAmazonLinks && <AmazonDisclosure lang={hub.market} note={ui.disclosureNote} className="mt-6 text-center text-xs text-slate-600" />}
    </section>
  )
}

/** /{us|ca}/guides/floor-care: the three jobs, the chooser with the robot clearance check, then the hub's own content. */
export function FloorCareHubPage({ market: marketCode, buyLabel }: { market: FloorCareMarket; buyLabel: string }) {
  const market = getFloorCareMarket(marketCode)
  const data = market.hub
  return (
    <FloorCareShell data={data}>
      <NeedCards market={market} buyLabel={buyLabel} />
      <ChooserBlock data={data} market={market} />
      <Sections data={data} />
      <ComparisonSection data={data} buyLabel={buyLabel} />
    </FloorCareShell>
  )
}

/** /{us|ca}/guides/floor-care/{guide}: picks, the clearance check on the vacuum guide, the table, then the guide's content. */
export function FloorCareGuidePage({ market: marketCode, guide, buyLabel }: { market: FloorCareMarket; guide: FloorCareNeedKey; buyLabel: string }) {
  const market = getFloorCareMarket(marketCode)
  const data = market[guide]
  return (
    <FloorCareShell data={data}>
      <PickCards market={marketCode} guide={guide} picks={data.picks} buyLabel={buyLabel} />
      <ChooserBlock data={data} market={market} />
      <ComparisonSection data={data} buyLabel={buyLabel} />
      <Sections data={data} />
    </FloorCareShell>
  )
}
