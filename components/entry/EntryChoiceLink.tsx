'use client'

import type { ReactNode } from 'react'
import { EVENTS, trackEvent } from '@/lib/analytics'
import { HTML_LANG, type Lang } from '@/lib/i18n'
import { rememberMarket } from '@/lib/market-preference'

interface EntryChoiceLinkProps {
  code: Lang
  /** The version was proposed to this visitor (their IP country's). */
  proposed: boolean
  className: string
  children: ReactNode
}

/**
 * A version on the entry page: a plain link to its home (it works without
 * JavaScript), which remembers the choice (hn_market: the next visit to /
 * goes straight there) and records it (entry_choose).
 */
export default function EntryChoiceLink({ code, proposed, className, children }: EntryChoiceLinkProps) {
  return (
    <a
      href={`/${code}`}
      hrefLang={HTML_LANG[code]}
      lang={HTML_LANG[code]}
      data-entry-choice={code}
      onClick={() => {
        rememberMarket(code)
        trackEvent(EVENTS.ENTRY_CHOOSE, { locale: code, proposed })
      }}
      className={className}
    >
      {children}
    </a>
  )
}
