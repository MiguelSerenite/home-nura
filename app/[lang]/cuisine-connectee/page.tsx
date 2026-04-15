import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getNonce } from '@/lib/nonce'
import { SMART_KITCHEN_CATEGORIES, type SmartKitchenCategory } from '@/lib/smart-kitchen-products'
import { Kicker, SectionHero, SiteFooter, Button } from '@/components/ui'

const SUPPORTED_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

interface PillarContent {
  kicker: string
  title: string
  subtitle: string
  intro: string
  breadcrumb: string
  categoriesTitle: string
  categoryKicker: string
  ctaCategory: string
  comparatorCta: string
  comparatorDesc: string
  categories: Record<SmartKitchenCategory, { name: string; tagline: string }>
}

const pageContent: Record<string, PillarContent> = {
  fr: {
    kicker: 'Cuisine connectée',
    title: 'La cuisine connectée testée comme un airfryer',
    subtitle: 'Multicuiseurs, cafetières, balances, thermomètres, prises — même méthode, mêmes exigences.',
    intro: 'Après avoir passé au crible les airfryers, nous appliquons la même grille rigoureuse à l\'écosystème autour : appareils qui cuisent, pèsent, mesurent et pilotent à distance. Objectif : vous éviter les gadgets, garder ce qui simplifie réellement le quotidien.',
    breadcrumb: 'Cuisine connectée',
    categoriesTitle: 'Nos 5 catégories',
    categoryKicker: 'Catégorie',
    ctaCategory: 'Voir la sélection',
    comparatorCta: 'Ouvrir le comparateur',
    comparatorDesc: 'Comparez jusqu\'à 3 modèles côte à côte, toutes catégories confondues.',
    categories: {
      multicuiseurs: {
        name: 'Multicuiseurs connectés',
        tagline: 'Le cœur automatisé de la cuisine : programmation WiFi, recettes guidées, tout-en-un.',
      },
      cafetieres: {
        name: 'Cafetières automatiques',
        tagline: 'De la broyeur-expresso à la machine à grain : la fiabilité quotidienne avant tout.',
      },
      balances: {
        name: 'Balances de cuisine',
        tagline: 'Précision, connexion à l\'app, suivi nutritionnel — la base d\'une cuisine maîtrisée.',
      },
      'thermometres-viande': {
        name: 'Thermomètres connectés',
        tagline: 'Cuissons parfaites au degré près, à la plancha comme à l\'airfryer ou au four.',
      },
      'prises-connectees': {
        name: 'Prises connectées',
        tagline: 'Piloter n\'importe quel appareil à distance — y compris votre airfryer.',
      },
    },
  },
  en: {
    kicker: 'Smart kitchen',
    title: 'Smart kitchen, tested like an air fryer',
    subtitle: 'Multicookers, coffee machines, scales, thermometers, smart plugs — one method, one bar.',
    intro: 'After combing through air fryers, we apply the same rigorous grid to the wider ecosystem: devices that cook, weigh, measure and switch things on from across the room. The goal: cut out the gadgets, keep what actually makes daily life easier.',
    breadcrumb: 'Smart kitchen',
    categoriesTitle: 'Our 5 categories',
    categoryKicker: 'Category',
    ctaCategory: 'See the shortlist',
    comparatorCta: 'Open the comparator',
    comparatorDesc: 'Compare up to 3 models side by side, across every category.',
    categories: {
      multicuiseurs: {
        name: 'Smart multicookers',
        tagline: 'The automated heart of the kitchen: WiFi programs, guided recipes, all-in-one.',
      },
      cafetieres: {
        name: 'Coffee machines',
        tagline: 'From bean-to-cup to espresso — daily reliability first, showroom features second.',
      },
      balances: {
        name: 'Kitchen scales',
        tagline: 'Accuracy, app sync, nutrient tracking — the foundation of a controlled kitchen.',
      },
      'thermometres-viande': {
        name: 'Meat thermometers',
        tagline: 'Perfect doneness to the degree, whether you grill, air-fry or roast.',
      },
      'prises-connectees': {
        name: 'Smart plugs',
        tagline: 'Remote-control any appliance — your air fryer included.',
      },
    },
  },
  de: {
    kicker: 'Smarte Küche',
    title: 'Smarte Küche, getestet wie eine Heißluftfritteuse',
    subtitle: 'Multikocher, Kaffeemaschinen, Waagen, Thermometer, Steckdosen — gleiche Methode, gleiche Ansprüche.',
    intro: 'Nach dem Test der Heißluftfritteusen wenden wir dieselbe strenge Bewertung auf das gesamte Ökosystem an: Geräte zum Kochen, Wiegen, Messen und Fernsteuern. Ziel: Spielereien aussortieren, nur das behalten, was den Alltag wirklich erleichtert.',
    breadcrumb: 'Smarte Küche',
    categoriesTitle: 'Unsere 5 Kategorien',
    categoryKicker: 'Kategorie',
    ctaCategory: 'Zur Auswahl',
    comparatorCta: 'Vergleich öffnen',
    comparatorDesc: 'Vergleichen Sie bis zu 3 Modelle direkt, kategorieübergreifend.',
    categories: {
      multicuiseurs: {
        name: 'Smarte Multikocher',
        tagline: 'Das automatisierte Herz der Küche: WiFi-Programme, geführte Rezepte, alles in einem.',
      },
      cafetieres: {
        name: 'Kaffeevollautomaten',
        tagline: 'Vom Mahlwerk bis zum Espresso — Alltagszuverlässigkeit steht über Showroom-Funktionen.',
      },
      balances: {
        name: 'Küchenwaagen',
        tagline: 'Präzision, App-Anbindung, Nährwerttracking — die Basis einer kontrollierten Küche.',
      },
      'thermometres-viande': {
        name: 'Fleischthermometer',
        tagline: 'Perfekte Garstufe aufs Grad genau — Plancha, Heißluft oder Ofen.',
      },
      'prises-connectees': {
        name: 'Smarte Steckdosen',
        tagline: 'Jedes Gerät fernsteuern — auch Ihre Heißluftfritteuse.',
      },
    },
  },
  es: {
    kicker: 'Cocina conectada',
    title: 'La cocina conectada testada como una freidora de aire',
    subtitle: 'Ollas, cafeteras, básculas, termómetros, enchufes — misma metodología, mismas exigencias.',
    intro: 'Tras analizar a fondo las freidoras de aire, aplicamos la misma rejilla rigurosa al ecosistema alrededor: aparatos que cocinan, pesan, miden y controlan a distancia. Objetivo: evitar los gadgets, conservar lo que simplifica de verdad el día a día.',
    breadcrumb: 'Cocina conectada',
    categoriesTitle: 'Nuestras 5 categorías',
    categoryKicker: 'Categoría',
    ctaCategory: 'Ver la selección',
    comparatorCta: 'Abrir el comparador',
    comparatorDesc: 'Compara hasta 3 modelos lado a lado, en todas las categorías.',
    categories: {
      multicuiseurs: {
        name: 'Ollas multifunción conectadas',
        tagline: 'El corazón automatizado de la cocina: programas WiFi, recetas guiadas, todo en uno.',
      },
      cafetieres: {
        name: 'Cafeteras automáticas',
        tagline: 'Del molinillo al expreso: fiabilidad diaria antes que funciones de exposición.',
      },
      balances: {
        name: 'Básculas de cocina',
        tagline: 'Precisión, app conectada, seguimiento nutricional — la base de una cocina controlada.',
      },
      'thermometres-viande': {
        name: 'Termómetros conectados',
        tagline: 'Cocciones perfectas al grado, a la plancha, en freidora o en horno.',
      },
      'prises-connectees': {
        name: 'Enchufes inteligentes',
        tagline: 'Controla cualquier aparato a distancia — incluida tu freidora de aire.',
      },
    },
  },
  it: {
    kicker: 'Cucina connessa',
    title: 'La cucina connessa testata come una friggitrice ad aria',
    subtitle: 'Multicottura, caffè, bilance, termometri, prese — stessa metodologia, stesse esigenze.',
    intro: 'Dopo aver passato al vaglio le friggitrici ad aria, applichiamo la stessa griglia rigorosa all\'ecosistema intorno: apparecchi che cuociono, pesano, misurano e si controllano da lontano. Obiettivo: evitare i gadget, tenere solo ciò che semplifica davvero la quotidianità.',
    breadcrumb: 'Cucina connessa',
    categoriesTitle: 'Le nostre 5 categorie',
    categoryKicker: 'Categoria',
    ctaCategory: 'Vedi la selezione',
    comparatorCta: 'Apri il comparatore',
    comparatorDesc: 'Confronta fino a 3 modelli fianco a fianco, in tutte le categorie.',
    categories: {
      multicuiseurs: {
        name: 'Multicottura connesse',
        tagline: 'Il cuore automatizzato della cucina: programmi WiFi, ricette guidate, tutto in uno.',
      },
      cafetieres: {
        name: 'Macchine da caffè',
        tagline: 'Dalla macinatura all\'espresso: affidabilità quotidiana prima delle funzioni da vetrina.',
      },
      balances: {
        name: 'Bilance da cucina',
        tagline: 'Precisione, app connessa, tracking nutrizionale — la base di una cucina controllata.',
      },
      'thermometres-viande': {
        name: 'Termometri connessi',
        tagline: 'Cotture perfette al grado, alla piastra, in friggitrice o in forno.',
      },
      'prises-connectees': {
        name: 'Prese smart',
        tagline: 'Controlla a distanza qualsiasi elettrodomestico — friggitrice inclusa.',
      },
    },
  },
  nl: {
    kicker: 'Slimme keuken',
    title: 'De slimme keuken, getest als een airfryer',
    subtitle: 'Multicookers, koffiemachines, weegschalen, thermometers, stekkers — één methode, één lat.',
    intro: 'Na het grondig testen van airfryers passen we dezelfde strikte methodologie toe op het hele ecosysteem eromheen: apparaten die koken, wegen, meten en op afstand bedienen. Doel: gadgets eruit, alleen houden wat het dagelijks leven echt makkelijker maakt.',
    breadcrumb: 'Slimme keuken',
    categoriesTitle: 'Onze 5 categorieën',
    categoryKicker: 'Categorie',
    ctaCategory: 'Bekijk de selectie',
    comparatorCta: 'Open de vergelijker',
    comparatorDesc: 'Vergelijk tot 3 modellen naast elkaar, over alle categorieën heen.',
    categories: {
      multicuiseurs: {
        name: 'Slimme multicookers',
        tagline: 'Het geautomatiseerde hart van de keuken: WiFi-programma\'s, begeleide recepten, alles-in-één.',
      },
      cafetieres: {
        name: 'Volautomaten',
        tagline: 'Van maler tot espresso: dagelijkse betrouwbaarheid boven showroom-functies.',
      },
      balances: {
        name: 'Keukenweegschalen',
        tagline: 'Nauwkeurigheid, app-verbinding, voedingstracking — de basis van een gecontroleerde keuken.',
      },
      'thermometres-viande': {
        name: 'Vleesthermometers',
        tagline: 'Perfecte gaarheid op de graad, op de grill, in de airfryer of in de oven.',
      },
      'prises-connectees': {
        name: 'Slimme stekkers',
        tagline: 'Bedien elk apparaat op afstand — ook uw airfryer.',
      },
    },
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const canonicalUrl = `https://homenura.com/${safeLang}/cuisine-connectee`
  return {
    title: `${c.title} | Home Nura`,
    description: c.intro,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `https://homenura.com/${l}/cuisine-connectee`])
      ),
    },
    openGraph: {
      title: c.title,
      description: c.intro,
      url: canonicalUrl,
      type: 'website',
      images: [
        { url: 'https://homenura.com/og-image.png', width: 1200, height: 630, alt: c.title },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.intro,
      images: ['https://homenura.com/og-image.png'],
    },
  }
}

export default async function CuisineConnecteePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = pageContent[safeLang] || pageContent.fr
  const nonce = await getNonce()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${safeLang}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumb, item: `https://homenura.com/${safeLang}/cuisine-connectee` },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: c.title,
    itemListElement: SMART_KITCHEN_CATEGORIES.map((slug, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: c.categories[slug].name,
      url: `https://homenura.com/${safeLang}/cuisine-connectee/${slug}`,
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Navbar currentLang={safeLang} />

      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-400" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li>
            <Link href={`/${safeLang}`} className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-slate-600 font-medium">{c.breadcrumb}</li>
        </ol>
      </nav>

      {/* Hero */}
      <SectionHero
        kicker={c.kicker}
        title={c.title}
        subtitle={c.subtitle}
        intro={c.intro}
      />

      {/* Categories grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            {c.categoriesTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SMART_KITCHEN_CATEGORIES.map((slug, index) => {
            const cat = c.categories[slug]
            return (
              <Link
                key={slug}
                href={`/${safeLang}/cuisine-connectee/${slug}`}
                className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-1 hover:border-blue-200"
              >
                <Kicker size="sm" className="mb-3">
                  {String(index + 1).padStart(2, '0')} · {c.categoryKicker}
                </Kicker>
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-blue-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {cat.tagline}
                </p>
                <div className="mt-5 text-sm font-semibold text-blue-600 group-hover:translate-x-1 transition-transform">
                  {c.ctaCategory} →
                </div>
              </Link>
            )
          })}
        </div>

        {/* Comparator CTA */}
        <div className="mt-12 rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 md:p-10 text-center">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
            {c.comparatorDesc}
          </p>
          <Button href={`/${safeLang}/cuisine-connectee/comparateur`}>
            <span>{c.comparatorCta}</span>
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter
        currentLang={safeLang}
        links={[
          { href: `/${safeLang}`, label: 'Home' },
          { href: `/${safeLang}/guides/airfryers`, label: 'Guide' },
          { href: `/${safeLang}/blog`, label: 'Blog' },
          { href: `/${safeLang}/a-propos`, label: 'About' },
        ]}
      />
    </div>
  )
}
