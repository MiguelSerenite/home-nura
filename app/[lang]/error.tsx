'use client'

import { usePathname } from 'next/navigation'

const texts: Record<string, { title: string; desc: string; button: string }> = {
  fr: { title: 'Une erreur est survenue', desc: 'Quelque chose s\'est mal passé. Veuillez réessayer.', button: 'Réessayer' },
  en: { title: 'Something went wrong', desc: 'An error occurred. Please try again.', button: 'Try again' },
  de: { title: 'Ein Fehler ist aufgetreten', desc: 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.', button: 'Erneut versuchen' },
  es: { title: 'Algo salió mal', desc: 'Se produjo un error. Por favor, inténtalo de nuevo.', button: 'Reintentar' },
  it: { title: 'Si è verificato un errore', desc: 'Qualcosa è andato storto. Riprova.', button: 'Riprova' },
  nl: { title: 'Er is een fout opgetreden', desc: 'Er ging iets mis. Probeer het opnieuw.', button: 'Opnieuw proberen' },
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const pathname = usePathname()
  const langFromPath = pathname?.split('/')[1] || 'fr'
  const t = texts[langFromPath] || texts.fr

  return (
    <div className="min-h-screen bg-[#FBFBFD] flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-8xl font-black text-slate-200 mb-4">500</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.title}</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">{t.desc}</p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
        >
          {t.button}
        </button>
      </div>
    </div>
  )
}
