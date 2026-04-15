import Link from 'next/link'
import type { ReactNode } from 'react'

interface FooterLink {
  href: string
  label: string
}

interface SiteFooterProps {
  currentLang: string
  /**
   * Navigation links shown in the footer.
   * If omitted, a sensible default set (Home / Blog / Mentions / Privacy / Cookies) is used.
   */
  links?: FooterLink[]
  /** Variant: 'full' (default) has padding py-12, 'compact' uses py-8 for article footers. */
  variant?: 'full' | 'compact'
  /** Optional content rendered above the nav row (e.g., affiliate disclaimer on home). */
  topContent?: ReactNode
}

const DEFAULT_LINKS = (lang: string): FooterLink[] => [
  { href: `/${lang}`, label: 'Home' },
  { href: `/${lang}/blog`, label: 'Blog' },
  { href: `/${lang}/mentions-legales`, label: 'Mentions légales' },
  { href: `/${lang}/politique-confidentialite`, label: 'Confidentialité' },
  { href: `/${lang}/politique-cookies`, label: 'Cookies' },
]

/**
 * SiteFooter — shared footer block.
 * Renders a horizontal nav row + copyright line.
 */
export default function SiteFooter({
  currentLang,
  links,
  variant = 'full',
  topContent,
}: SiteFooterProps) {
  const navLinks = links ?? DEFAULT_LINKS(currentLang)
  const paddingClass = variant === 'compact' ? 'py-8' : 'py-12'

  return (
    <footer className={`bg-white border-t border-slate-100 ${paddingClass} px-6`}>
      <div className="max-w-7xl mx-auto text-center">
        {topContent && <div className="mb-6">{topContent}</div>}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-500">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-slate-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
          &copy; 2026 HOME NURA EUROPE
        </div>
      </div>
    </footer>
  )
}
