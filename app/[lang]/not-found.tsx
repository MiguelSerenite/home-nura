import Link from 'next/link'

const texts: Record<string, { title: string; desc: string; button: string }> = {
  fr: { title: 'Page introuvable', desc: 'La page que vous recherchez n\'existe pas ou a été déplacée.', button: 'Retour à l\'accueil' },
  en: { title: 'Page not found', desc: 'The page you are looking for does not exist or has been moved.', button: 'Back to home' },
  de: { title: 'Seite nicht gefunden', desc: 'Die gesuchte Seite existiert nicht oder wurde verschoben.', button: 'Zur Startseite' },
  es: { title: 'Página no encontrada', desc: 'La página que buscas no existe o ha sido movida.', button: 'Volver al inicio' },
  it: { title: 'Pagina non trovata', desc: 'La pagina che stai cercando non esiste o è stata spostata.', button: 'Torna alla home' },
  nl: { title: 'Pagina niet gevonden', desc: 'De pagina die u zoekt bestaat niet of is verplaatst.', button: 'Terug naar home' },
}

export default function NotFound() {
  // Default to French since we can't access params in not-found
  const t = texts.fr

  return (
    <div className="min-h-screen bg-[#FBFBFD] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-black text-slate-200 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.title}</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">{t.desc}</p>
        <Link
          href="/fr"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
        >
          {t.button}
        </Link>
      </div>
    </div>
  )
}
