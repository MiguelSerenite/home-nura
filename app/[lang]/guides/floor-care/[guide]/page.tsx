/**
 * Floor-care guides, US and Canada only: /{us|ca}/guides/floor-care/
 * vacuums (dry vacuuming), hard-floor-washers (sealed floors) and
 * carpet-upholstery-cleaners (stains, pets, carpets, upholstery). Each
 * market lists its own models (data/floor-care/{market}-{guide}.json).
 * Every other locale or slug is a 404.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { FloorCareGuidePage } from '@/components/floor-care/FloorCarePages'
import { floorCareGuideStaticParams, floorCareMetadata, resolveFloorCarePage } from '@/lib/floor-care/routes'
import { getDictionary } from '../../../dictionaries'

type Params = Promise<{ lang: string; guide: string }>

/** Only the params below exist: other locales and slugs 404. */
export const dynamicParams = false

export function generateStaticParams() {
  return floorCareGuideStaticParams()
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { lang, guide } = await params
  const page = resolveFloorCarePage(lang, guide)
  return page ? floorCareMetadata(page) : {}
}

export default async function FloorCareGuide({ params }: { params: Params }) {
  const { lang, guide } = await params
  const page = resolveFloorCarePage(lang, guide)
  if (!page || page.guide === 'hub') notFound()
  const dict = await getDictionary(page.market)
  return <FloorCareGuidePage market={page.market} guide={page.guide} buyLabel={dict.buy_button} />
}
