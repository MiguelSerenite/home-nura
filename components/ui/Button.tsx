import Link from 'next/link'
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600 shadow-sm hover:shadow-md',
  secondary:
    'bg-slate-900 text-white hover:bg-slate-800 focus-visible:ring-slate-900 shadow-sm hover:shadow-md',
  ghost:
    'bg-white text-slate-900 border border-slate-200 hover:border-slate-900 hover:bg-slate-50 focus-visible:ring-slate-900',
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const BASE_CLASSES =
  'inline-flex items-center justify-center gap-2 font-semibold tracking-tight rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

interface CommonProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type LinkProps = CommonProps & {
  href: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className' | 'children'>

type ButtonProps = CommonProps & {
  href?: undefined
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

type Props = LinkProps | ButtonProps

/**
 * Button — unified CTA component for both `<a>` (via Link) and `<button>`.
 *
 * Variants:
 * - primary: blue background (default CTAs)
 * - secondary: slate-900 bg, blue-700 hover (big hero CTAs)
 * - ghost: white bg with border (secondary CTAs)
 */
export default function Button(props: Props) {
  const {
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...rest
  } = props

  const classes = [
    BASE_CLASSES,
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    )
  }

  const { href: _unused, ...buttonProps } = rest as ButtonProps & { href?: undefined }
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
