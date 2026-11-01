'use client'

import { useEffect } from 'react'
import { EVENTS, trackEvent } from '@/lib/analytics'

/** Records one entry page view (entry_view): entry_choose / entry_view is the share of visitors who continue. */
export default function EntryViewTracker({ basis, proposed }: { basis: string; proposed: string }) {
  useEffect(() => {
    trackEvent(EVENTS.ENTRY_VIEW, { basis, proposed })
  }, [basis, proposed])
  return null
}
