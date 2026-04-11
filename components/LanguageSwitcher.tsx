import Link from 'next/link'

const countries = [
  { code: 'fr', flag: '🇫🇷', name: 'France' },
  { code: 'de', flag: '🇩🇪', name: 'Deutschland' },
  { code: 'es', flag: '🇪🇸', name: 'España' },
  { code: 'it', flag: '🇮🇹', name: 'Italia' },
  { code: 'nl', flag: '🇳🇱', name: 'Nederland' },
  { code: 'en', flag: '🇬🇧', name: 'UK' },
]

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  return (
    <div className="flex gap-3 items-center bg-slate-100 p-1 rounded-full px-3">
      {countries.map((country) => (
        <Link
          key={country.code}
          href={`/${country.code}`}
          className={`text-xl hover:scale-125 transition-transform ${currentLang === country.code ? 'grayscale-0' : 'grayscale opacity-50 hover:opacity-100'}`}
          title={country.name}
        >
          {country.flag}
        </Link>
      ))}
    </div>
  )
}
