import Link from 'next/link'
import type { ReactNode } from 'react'
import { resolveLang, type Lang } from '@/lib/i18n'

interface SiteFooterProps {
  currentLang: string
  /** Variant: 'full' (default) has padding py-12, 'compact' uses py-8 for article footers. */
  variant?: 'full' | 'compact'
  /** Optional content rendered above the nav row (e.g., affiliate disclaimer on home). */
  topContent?: ReactNode
}

type FooterKey =
  | 'home' | 'guide' | 'comparator' | 'smartKitchen' | 'smartKitchenComparator'
  | 'quiz' | 'smartKitchenQuiz' | 'blog' | 'methodology' | 'about'
  | 'legal' | 'privacy' | 'cookies'

// One site-wide footer: same links on every page (internal linking to the
// tools, the methodology page and the legal pages), labels per locale.
const FOOTER_PATHS: Record<FooterKey, string> = {
  home: '',
  guide: '/guides/airfryers',
  comparator: '/comparateur',
  smartKitchen: '/cuisine-connectee',
  smartKitchenComparator: '/cuisine-connectee/comparateur',
  quiz: '/quiz',
  smartKitchenQuiz: '/cuisine-connectee/quiz',
  blog: '/blog',
  methodology: '/methodologie',
  about: '/a-propos',
  legal: '/mentions-legales',
  privacy: '/politique-confidentialite',
  cookies: '/politique-cookies',
}

const FOOTER_LABELS: Record<Lang, Record<FooterKey, string>> = {
  fr: {
    home: 'Accueil', guide: 'Guide airfryers', comparator: 'Comparateur airfryers',
    smartKitchen: 'Cuisine connectée', smartKitchenComparator: 'Comparateur cuisine connectée',
    quiz: 'Quiz airfryer', smartKitchenQuiz: 'Quiz cuisine connectée', blog: 'Blog',
    methodology: 'Méthodologie', about: 'À propos', legal: 'Mentions légales',
    privacy: 'Confidentialité', cookies: 'Cookies',
  },
  en: {
    home: 'Home', guide: 'Air fryer guide', comparator: 'Air fryer comparator',
    smartKitchen: 'Smart kitchen', smartKitchenComparator: 'Smart kitchen comparator',
    quiz: 'Air fryer quiz', smartKitchenQuiz: 'Smart kitchen quiz', blog: 'Blog',
    methodology: 'Methodology', about: 'About', legal: 'Legal notice',
    privacy: 'Privacy', cookies: 'Cookies',
  },
  de: {
    home: 'Startseite', guide: 'Heißluftfritteusen-Ratgeber', comparator: 'Heißluftfritteusen-Vergleich',
    smartKitchen: 'Smarte Küche', smartKitchenComparator: 'Vergleich smarte Küche',
    quiz: 'Heißluftfritteusen-Quiz', smartKitchenQuiz: 'Quiz smarte Küche', blog: 'Blog',
    methodology: 'Methodik', about: 'Über uns', legal: 'Impressum',
    privacy: 'Datenschutz', cookies: 'Cookies',
  },
  es: {
    home: 'Inicio', guide: 'Guía de freidoras de aire', comparator: 'Comparador de freidoras de aire',
    smartKitchen: 'Cocina conectada', smartKitchenComparator: 'Comparador de cocina conectada',
    quiz: 'Test de freidora de aire', smartKitchenQuiz: 'Test de cocina conectada', blog: 'Blog',
    methodology: 'Metodología', about: 'Quiénes somos', legal: 'Aviso legal',
    privacy: 'Privacidad', cookies: 'Cookies',
  },
  it: {
    home: 'Home', guide: 'Guida friggitrici ad aria', comparator: 'Confronto friggitrici ad aria',
    smartKitchen: 'Cucina connessa', smartKitchenComparator: 'Confronto cucina connessa',
    quiz: 'Quiz friggitrice ad aria', smartKitchenQuiz: 'Quiz cucina connessa', blog: 'Blog',
    methodology: 'Metodologia', about: 'Chi siamo', legal: 'Note legali',
    privacy: 'Privacy', cookies: 'Cookie',
  },
  nl: {
    home: 'Home', guide: 'Airfryer-gids', comparator: 'Airfryer-vergelijker',
    smartKitchen: 'Slimme keuken', smartKitchenComparator: 'Vergelijker slimme keuken',
    quiz: 'Airfryer-quiz', smartKitchenQuiz: 'Quiz slimme keuken', blog: 'Blog',
    methodology: 'Methodologie', about: 'Over ons', legal: 'Juridische informatie',
    privacy: 'Privacy', cookies: 'Cookies',
  },
}

/**
 * SiteFooter — shared footer block.
 * Renders a horizontal nav row + copyright line.
 */
export default function SiteFooter({
  currentLang,
  variant = 'full',
  topContent,
}: SiteFooterProps) {
  const lang = resolveLang(currentLang)
  const labels = FOOTER_LABELS[lang]
  const navLinks = (Object.keys(FOOTER_PATHS) as FooterKey[]).map((key) => ({
    href: `/${lang}${FOOTER_PATHS[key]}`,
    label: labels[key],
  }))
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
              className="hover:text-slate-700 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
          &copy; 2026 HOME NURA EUROPE
        </div>
      </div>
    </footer>
  )
}
