/**
 * Root-level 404 page — catches routes that don't match any segment.
 *
 * The [lang]/not-found.tsx handles 404s within the locale subtree
 * (triggered by notFound() calls in page components), but routes
 * that don't match any segment at all (e.g. /xyz) need a root-level
 * handler. Without this file, Next.js shows its default 404 page.
 */

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const texts: Record<string, { title: string; desc: string; button: string }> = {
  fr: { title: 'Page introuvable', desc: 'La page que vous recherchez n\'existe pas ou a été déplacée.', button: 'Retour à l\'accueil' },
  en: { title: 'Page not found', desc: 'The page you are looking for does not exist or has been moved.', button: 'Back to home' },
  de: { title: 'Seite nicht gefunden', desc: 'Die gesuchte Seite existiert nicht oder wurde verschoben.', button: 'Zur Startseite' },
  es: { title: 'Página no encontrada', desc: 'La página que buscas no existe o ha sido movida.', button: 'Volver al inicio' },
  it: { title: 'Pagina non trovata', desc: 'La pagina che stai cercando non esiste o è stata spostata.', button: 'Torna alla home' },
  nl: { title: 'Pagina niet gevonden', desc: 'De pagina die u zoekt bestaat niet of is verplaatst.', button: 'Terug naar home' },
}

export default function RootNotFound() {
  const pathname = usePathname()
  const langFromPath = pathname?.split('/')[1] || 'fr'
  const lang = texts[langFromPath] ? langFromPath : 'fr'
  const t = texts[lang]

  return (
    <html lang={lang}>
      <body className="min-h-screen bg-[#FBFBFD] flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-8xl font-black text-slate-200 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.title}</h2>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">{t.desc}</p>
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
          >
            {t.button}
          </Link>
        </div>
      </body>
    </html>
  )
}
