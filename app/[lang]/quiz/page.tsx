import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { getStaticProducts } from '@/lib/products'
import Quiz from '@/components/Quiz'
import { SectionHero, SiteFooter } from '@/components/ui'
import { resolveLang } from '@/lib/i18n'
import { ChevronRight } from 'lucide-react'


const pageContent: Record<string, { title: string; subtitle: string; intro: string; kicker: string; breadcrumb: string }> = {
  fr: {
    kicker: 'Quiz personnalisé',
    title: 'Quel airfryer pour moi ?',
    subtitle: 'Recommandation sur mesure en 3 questions',
    intro: 'Répondez à 3 questions simples et découvrez le modèle qui correspond à votre foyer, votre budget et vos priorités.',
    breadcrumb: 'Quiz',
  },
  en: {
    kicker: 'Personalised quiz',
    title: 'Which air fryer is right for me?',
    subtitle: 'A tailored recommendation in 3 questions',
    intro: 'Answer 3 quick questions to find the model that suits your household, budget and priorities.',
    breadcrumb: 'Quiz',
  },
  de: {
    kicker: 'Persönliches Quiz',
    title: 'Welcher Airfryer passt zu mir?',
    subtitle: 'Persönliche Empfehlung in 3 Fragen',
    intro: 'Beantworten Sie 3 einfache Fragen und finden Sie die Heißluftfritteuse, die zu Ihrem Haushalt, Ihrem Budget und Ihren Prioritäten passt.',
    breadcrumb: 'Quiz',
  },
  es: {
    kicker: 'Asistente personalizado',
    title: '¿Qué freidora de aire me conviene?',
    subtitle: 'Una recomendación a medida en 3 preguntas',
    intro: 'Responde a 3 preguntas sencillas y descubre el modelo que mejor encaja con tu hogar, tu presupuesto y tus prioridades.',
    breadcrumb: 'Asistente',
  },
  it: {
    kicker: 'Quiz personalizzato',
    title: 'Quale friggitrice ad aria fa per me?',
    subtitle: 'Consiglio su misura in 3 domande',
    intro: 'Rispondi a 3 semplici domande e scopri il modello adatto alla tua famiglia, al tuo budget e alle tue priorità.',
    breadcrumb: 'Quiz',
  },
  nl: {
    kicker: 'Quiz op maat',
    title: 'Welke airfryer past bij mij?',
    subtitle: 'Persoonlijk advies in 3 vragen',
    intro: 'Beantwoord drie eenvoudige vragen en ontdek welk model past bij je huishouden, je budget en wat jij belangrijk vindt.',
    breadcrumb: 'Quiz',
  },
  pl: {
    kicker: 'Quiz dopasowany do Ciebie',
    title: 'Jaka frytkownica beztłuszczowa dla mnie?',
    subtitle: 'Dopasowana rekomendacja po 3 pytaniach',
    intro: 'Odpowiedz na 3 proste pytania i sprawdź, który model najlepiej pasuje do liczby domowników, Twojego budżetu i priorytetów.',
    breadcrumb: 'Quiz',
  },
  sv: {
    kicker: 'Personligt quiz',
    title: 'Vilken airfryer passar mig?',
    subtitle: 'En skräddarsydd rekommendation efter 3 frågor',
    intro: 'Svara på 3 enkla frågor och se vilken modell som passar ditt hushåll, din budget och det som är viktigast för dig.',
    breadcrumb: 'Quiz',
  },
  us: {
    kicker: 'Personalized quiz',
    title: 'Which air fryer is right for you?',
    subtitle: 'A tailored recommendation in 3 questions',
    intro: 'Answer 3 quick questions to find the model that fits your household, budget and priorities.',
    breadcrumb: 'Quiz',
  },
  ca: {
    kicker: 'Personalized quiz',
    title: 'Which air fryer for me?',
    subtitle: 'Tailored recommendation in 3 questions',
    intro: 'Answer 3 simple questions and discover the model that matches your household, budget and priorities.',
    breadcrumb: 'Quiz',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = pageContent[safeLang] || pageContent.fr
  return buildPageMetadata({
    lang: safeLang,
    path: '/quiz',
    title: `${c.title} | Home Nura`,
    description: c.intro,
  })
}

export default async function QuizPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = pageContent[safeLang] || pageContent.fr
  const rawProducts = getStaticProducts(safeLang)
  const products = rawProducts.map((p) => ({
    asin: p.asin,
    title: p.title,
    priceNumeric: p.priceNumeric,
    visual: p.visual,
    url: p.url,
    nuraScore: p.nuraScore,
    capacity: p.capacity,
    bestFor: p.bestFor,
  }))

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${safeLang}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumb, item: `https://homenura.com/${safeLang}/quiz` },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar currentLang={safeLang} />

      <main id="main">
      {/* Breadcrumb */}
      <nav className="max-w-4xl mx-auto px-6 pt-10 text-xs text-slate-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <Link href={`/${safeLang}`} className="hover:text-brand-600 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
          <li className="text-slate-600 font-medium">{c.breadcrumb}</li>
        </ol>
      </nav>

      {/* Hero */}
      <SectionHero
        kicker={c.kicker}
        title={c.title}
        subtitle={c.subtitle}
        intro={c.intro}
        maxWidth="max-w-3xl"
        padding="sm"
        showAccent={false}
      />

      {/* Quiz */}
      <section className="px-4 md:px-6 pb-20">
        <Quiz products={products} currentLang={safeLang} />
      </section>
      </main>

      {/* Footer */}
      <SiteFooter
        currentLang={safeLang}
      />
    </div>
  )
}
