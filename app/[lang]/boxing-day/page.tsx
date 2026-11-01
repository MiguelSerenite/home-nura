/**
 * /ca/boxing-day — Boxing Day picks for Canadian homes (26 December),
 * Canadian version only: every other locale is a 404.
 * Content: lib/gift-guides/copy/boxing-day.ts.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import GiftGuidePage from '@/components/gift-guides/GiftGuidePage'
import { giftGuideMetadata, giftGuideStaticParams, resolveGiftGuide } from '@/lib/gift-guides/routes'

const SLUG = 'boxing-day'

export const dynamicParams = false

export function generateStaticParams() {
  return giftGuideStaticParams(SLUG)
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const guide = resolveGiftGuide(SLUG, (await params).lang)
  return guide ? giftGuideMetadata(guide) : {}
}

export default async function BoxingDayPage({ params }: { params: Promise<{ lang: string }> }) {
  const guide = resolveGiftGuide(SLUG, (await params).lang)
  if (!guide) notFound()
  return <GiftGuidePage guide={guide} />
}
