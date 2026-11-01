import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import SmartKitchenQuiz from '@/components/SmartKitchenQuiz'
import { SectionHero, SiteFooter } from '@/components/ui'
import { resolveLang } from '@/lib/i18n'
import {
  SMART_KITCHEN_CATEGORIES,
  getSmartKitchenProductsByCategory,
  type SmartKitchenCategory,
  type SmartKitchenProduct,
} from '@/lib/smart-kitchen-products'
import { ChevronRight } from 'lucide-react'


interface QuizPageContent {
  kicker: string
  title: string
  subtitle: string
  intro: string
  breadcrumb: string
  breadcrumbRoot: string
}

const pageContent: Record<string, QuizPageContent> = {
  fr: {
    kicker: 'Quiz cuisine connectée',
    title: 'Par où commencer ma cuisine connectée ?',
    subtitle: 'Recommandation ciblée en 2 questions',
    intro: 'Répondez à 2 questions simples et découvrez la catégorie qui aura le plus d\'impact chez vous — avec nos 3 modèles sélectionnés prêts à l\'achat.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Cuisine connectée',
  },
  en: {
    kicker: 'Smart kitchen quiz',
    title: 'Where should I start with a smart kitchen?',
    subtitle: 'A tailored recommendation in 2 questions',
    intro: 'Answer 2 quick questions to find the category that will make the biggest difference in your home, with our 3 top picks ready to buy.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Smart kitchen',
  },
  de: {
    kicker: 'Quiz: smarte Küche',
    title: 'Womit fange ich bei der smarten Küche an?',
    subtitle: 'Ihre Empfehlung in 2 Fragen',
    intro: 'Beantworten Sie 2 einfache Fragen und erfahren Sie, welche Gerätekategorie bei Ihnen zu Hause am meisten bringt, mit drei konkreten Modellempfehlungen.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Smarte Küche',
  },
  es: {
    kicker: 'Asistente de cocina conectada',
    title: '¿Por dónde empiezo con la cocina conectada?',
    subtitle: 'Una recomendación a tu medida en 2 preguntas',
    intro: 'Responde a 2 preguntas sencillas y descubre qué categoría te va a cambiar más el día a día en casa, con los 3 modelos que hemos seleccionado, listos para comprar.',
    breadcrumb: 'Asistente',
    breadcrumbRoot: 'Cocina conectada',
  },
  it: {
    kicker: 'Quiz cucina smart',
    title: 'Cucina smart: da dove cominciare?',
    subtitle: 'Un consiglio su misura in 2 domande',
    intro: 'Rispondi a 2 semplici domande e scopri la categoria che farà più differenza a casa tua, con i 3 modelli che abbiamo selezionato, pronti da acquistare.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Cucina smart',
  },
  nl: {
    kicker: 'Quiz slimme keuken',
    title: 'Waar begin ik met mijn slimme keuken?',
    subtitle: 'Advies op maat in twee vragen',
    intro: 'Beantwoord twee eenvoudige vragen en ontdek welke categorie bij jou thuis het meeste verschil maakt, met de drie modellen die we aanraden en die je meteen kunt kopen.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Slimme keuken',
  },
  pl: {
    kicker: 'Quiz: inteligentna kuchnia',
    title: 'Od czego zacząć urządzanie inteligentnej kuchni?',
    subtitle: 'Trafna podpowiedź po dwóch pytaniach',
    intro: 'Odpowiedz na dwa proste pytania i sprawdź, która kategoria urządzeń przyda Ci się w domu najbardziej. Od razu zobaczysz też trzy polecane modele.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Inteligentna kuchnia',
  },
  sv: {
    kicker: 'Quiz om smart kök',
    title: 'Var ska jag börja med mitt smarta kök?',
    subtitle: 'En träffsäker rekommendation på 2 frågor',
    intro: 'Svara på 2 enkla frågor så får du veta vilken kategori som gör störst skillnad hemma hos dig – med våra 3 utvalda modeller som du kan köpa direkt.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Smart kök',
  },
  us: {
    kicker: 'Smart kitchen quiz',
    title: 'Where should you start with a smart kitchen?',
    subtitle: 'A tailored recommendation in 2 questions',
    intro: 'Answer 2 quick questions to find the category that will make the biggest difference in your kitchen — with our 3 top models, ready to shop.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Smart kitchen',
  },
  ca: {
    kicker: 'Smart kitchen quiz',
    title: 'Where should I start my smart kitchen?',
    subtitle: 'Targeted recommendation in 2 questions',
    intro: 'Answer 2 simple questions and discover the category that will have the biggest impact at home — with our 3 selected models ready to buy.',
    breadcrumb: 'Quiz',
    breadcrumbRoot: 'Smart kitchen',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = pageContent[safeLang] || pageContent.fr
  return buildPageMetadata({
    lang: safeLang,
    path: '/cuisine-connectee/quiz',
    title: `${c.title} | Home Nura`,
    description: c.intro,
  })
}

export default async function SmartKitchenQuizPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = pageContent[safeLang] || pageContent.fr
  // Preload products per category so the client component has everything it needs
  const productsByCategory = SMART_KITCHEN_CATEGORIES.reduce((acc, cat) => {
    acc[cat] = getSmartKitchenProductsByCategory(safeLang, cat)
    return acc
  }, {} as Record<SmartKitchenCategory, SmartKitchenProduct[]>)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${safeLang}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumbRoot, item: `https://homenura.com/${safeLang}/cuisine-connectee` },
      { '@type': 'ListItem', position: 3, name: c.breadcrumb, item: `https://homenura.com/${safeLang}/cuisine-connectee/quiz` },
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
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href={`/${safeLang}`} className="hover:text-brand-600 transition-colors">Home</Link>
          </li>
          <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
          <li>
            <Link href={`/${safeLang}/cuisine-connectee`} className="hover:text-brand-600 transition-colors">{c.breadcrumbRoot}</Link>
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
      />

      {/* Quiz */}
      <section className="px-4 md:px-6 pb-20">
        <SmartKitchenQuiz productsByCategory={productsByCategory} currentLang={safeLang} />
      </section>
      </main>

      {/* Footer */}
      <SiteFooter
        currentLang={safeLang}
      />
    </div>
  )
}
