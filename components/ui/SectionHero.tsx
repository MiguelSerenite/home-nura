import type { ReactNode } from 'react'
import Kicker from './Kicker'

interface SectionHeroProps {
  kicker?: string
  title: string
  subtitle?: string
  intro?: string
  children?: ReactNode
  /** Outer max-width for the hero block. Defaults to max-w-4xl. */
  maxWidth?: 'max-w-3xl' | 'max-w-4xl' | 'max-w-5xl'
  /** Vertical padding. Defaults to 'md'. */
  padding?: 'sm' | 'md' | 'lg'
  /** Show the blue accent bar below the text block. Defaults to true. */
  showAccent?: boolean
  className?: string
}

const PADDING_CLASSES: Record<NonNullable<SectionHeroProps['padding']>, string> = {
  sm: 'pt-8 pb-8',
  md: 'pt-10 pb-12',
  lg: 'pt-14 pb-16',
}

/**
 * SectionHero — standardized hero block for landing/category/hub pages.
 * Renders: kicker → title (h1) → subtitle → intro → optional accent bar.
 *
 * Used by: comparateur, cuisine-connectee hub, category pages, quiz.
 */
export default function SectionHero({
  kicker,
  title,
  subtitle,
  intro,
  children,
  maxWidth = 'max-w-4xl',
  padding = 'md',
  showAccent = true,
  className = '',
}: SectionHeroProps) {
  return (
    <section
      className={`${maxWidth} mx-auto px-6 ${PADDING_CLASSES[padding]} text-center ${className}`}
    >
      {kicker && <div className="mb-5"><Kicker>{kicker}</Kicker></div>}
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-slate-900 mb-5">
        {title}
      </h1>
      {subtitle && <p className="text-lg text-slate-500 mb-3">{subtitle}</p>}
      {intro && (
        <p className="text-sm text-slate-500 max-w-xl mx-auto">{intro}</p>
      )}
      {children}
      {showAccent && <div className="h-[2px] w-16 bg-blue-600 mx-auto mt-8" />}
    </section>
  )
}
