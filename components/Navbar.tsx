import Link from 'next/link'
import Image from 'next/image'

const countries = [
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'de', flag: '🇩🇪', label: 'DE' },
  { code: 'en', flag: '🇬🇧', label: 'UK' },
  { code: 'es', flag: '🇪🇸', label: 'ES' },
  { code: 'it', flag: '🇮🇹', label: 'IT' },
  { code: 'nl', flag: '🇳🇱', label: 'NL' },
]

export default function Navbar({ currentLang }: { currentLang: string }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo + Nav */}
        <div className="flex items-center gap-6">
          <Link href={`/${currentLang}`} className="flex items-center" aria-label="Home Nura">
            <Image
              src="/logo.png"
              alt="Home Nura"
              width={1400}
              height={400}
              priority
              className="h-20 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-4 text-sm font-medium text-slate-500">
            <Link href={`/${currentLang}/guides/airfryers`} className="hover:text-blue-600 transition-colors">Guide</Link>
            <Link href={`/${currentLang}/blog`} className="hover:text-blue-600 transition-colors">Blog</Link>
            <Link href={`/${currentLang}/a-propos`} className="hover:text-blue-600 transition-colors">
              {currentLang === 'fr' ? 'À propos' : currentLang === 'de' ? 'Über uns' : currentLang === 'es' ? 'Sobre' : currentLang === 'it' ? 'Chi siamo' : currentLang === 'nl' ? 'Over ons' : 'About'}
            </Link>
          </div>
        </div>

        {/* Sélecteur de pays - UX Optimisée */}
        <div className="flex items-center gap-2 md:gap-4 bg-slate-50 p-1 rounded-full border border-slate-100">
          {countries.map((c) => (
            <Link
              key={c.code}
              href={`/${c.code}`}
              className={`flex items-center gap-1 px-2 py-1 rounded-full transition-all text-xs font-bold ${
                currentLang === c.code
                ? 'bg-white shadow-sm text-blue-600 scale-105'
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span className="text-base">{c.flag}</span>
              <span className="hidden sm:inline">{c.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
