'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { hasScrolledPastHalf } from '@/lib/back-to-top'

const LABEL: Record<string, string> = {
  fr: 'Remonter en haut de la page',
  en: 'Back to top',
  de: 'Nach oben',
  es: 'Volver arriba',
  it: 'Torna su',
  nl: 'Terug naar boven',
  pl: 'Przewiń do góry',
}

/**
 * Discreet arrow (50 % opacity, full on hover/focus) that appears once
 * half of the page has been scrolled and brings the reader back to the
 * top. Sits above the mobile sticky buy bar of articles.
 */
export default function BackToTop({ lang }: { lang: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setVisible(hasScrolledPastHalf(window.scrollY, document.documentElement.scrollHeight, window.innerHeight))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  const label = LABEL[lang] ?? LABEL.en
  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-24 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white shadow-md transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 lg:bottom-8 lg:right-6 ${visible ? 'opacity-50' : 'pointer-events-none opacity-0'}`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
