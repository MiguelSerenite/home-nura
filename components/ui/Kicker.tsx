import type { ReactNode } from 'react'

type KickerVariant = 'blue' | 'blue-light' | 'slate' | 'emerald' | 'amber'
type KickerSize = 'sm' | 'md'

interface KickerProps {
  children: ReactNode
  variant?: KickerVariant
  size?: KickerSize
  as?: 'div' | 'span' | 'p'
  className?: string
}

// Contrast-safe on white: emerald-700 (#047857) and amber-700 (#b45309)
// both clear the 4.5:1 WCAG AA floor for small text. Avoid -600 variants
// at small sizes — they hit axe color-contrast at ~3.1:1.
const VARIANT_CLASSES: Record<KickerVariant, string> = {
  blue: 'text-blue-600',
  'blue-light': 'text-blue-300',
  slate: 'text-slate-600',
  emerald: 'text-emerald-700',
  amber: 'text-amber-700',
}

const SIZE_CLASSES: Record<KickerSize, string> = {
  sm: 'text-[10px] tracking-[0.25em]',
  md: 'text-[11px] tracking-[0.35em]',
}

/**
 * Kicker — small eyebrow label above section titles.
 * Used as a visual anchor for hero sections and content blocks.
 *
 * Variants:
 * - blue (default, md): primary brand kicker — hero sections, section titles
 * - slate (sm): neutral kicker — navbar, secondary sections
 * - emerald / amber: accent kickers — comparator / alerts
 */
export default function Kicker({
  children,
  variant = 'blue',
  size = 'md',
  as: Tag = 'div',
  className = '',
}: KickerProps) {
  const classes = [
    'font-bold uppercase',
    SIZE_CLASSES[size],
    VARIANT_CLASSES[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <Tag className={classes}>{children}</Tag>
}
