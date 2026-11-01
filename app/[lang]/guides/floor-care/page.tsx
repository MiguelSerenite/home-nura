/**
 * Floor-care hub, US and Canada only (/us/guides/floor-care,
 * /ca/guides/floor-care): dry vacuuming, hard-floor washing and fabric
 * cleaning kept apart, a guide chooser and the robot clearance check.
 * Content: data/floor-care/{us,ca}-hub.json (lib/floor-care/data.ts).
 * Every other locale is a 404.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FloorCareHubPage } from '@/components/floor-care/FloorCarePages'
import { floorCareHubStaticParams, floorCareMetadata, resolveFloorCarePage } from '@/lib/floor-care/routes'
import { getDictionary } from '../../dictionaries'

/** Only the params below exist: /fr/guides/floor-care and the other locales 404. */
export const dynamicParams = false

export function generateStaticParams() {
  return floorCareHubStaticParams()
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const page = resolveFloorCarePage((await params).lang)
  return page ? floorCareMetadata(page) : {}
}

export default async function FloorCareHub({ params }: { params: Promise<{ lang: string }> }) {
  const page = resolveFloorCarePage((await params).lang)
  if (!page) notFound()
  const dict = await getDictionary(page.market)
  return <FloorCareHubPage market={page.market} buyLabel={dict.buy_button} />
}
