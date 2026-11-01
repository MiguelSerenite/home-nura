import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildPageMetadata, buildBreadcrumbListSchema } from '@/lib/seo'
import { SMART_KITCHEN_CATEGORIES, type SmartKitchenCategory } from '@/lib/smart-kitchen-products'
import { Kicker, SectionHero, SiteFooter, Button } from '@/components/ui'
import { resolveLang } from '@/lib/i18n'
import FaqSection from '@/components/FaqSection'
import { getSiloFaq, SILO_FAQ_TITLE } from '@/lib/catalog/silo-faqs'
import { categoryPath, getPartiallyIndexableCategories, isCategoryIndexableIn } from '@/lib/catalog'
import { ChevronRight } from 'lucide-react'


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
    title: 'La cuisine connectée comparée comme un airfryer',
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
    title: 'The smart kitchen, rated the way we rate air fryers',
    subtitle: 'Multicookers, coffee machines, scales, thermometers, smart plugs: one method, one standard.',
    intro: 'After putting air fryers under the microscope, we apply the same strict criteria to everything around them: appliances that cook, weigh, measure and can be controlled remotely. The goal is to help you skip the gadgets and keep what genuinely makes everyday life easier.',
    breadcrumb: 'Smart kitchen',
    categoriesTitle: 'Our 5 categories',
    categoryKicker: 'Category',
    ctaCategory: 'See our picks',
    comparatorCta: 'Open the comparison tool',
    comparatorDesc: 'Compare up to 3 models side by side, across every category.',
    categories: {
      multicuiseurs: {
        name: 'Smart multicookers',
        tagline: 'The automated heart of the kitchen: Wi-Fi scheduling, guided recipes, all-in-one cooking.',
      },
      cafetieres: {
        name: 'Coffee machines',
        tagline: 'From espresso machines with built-in grinders to bean-to-cup: everyday reliability comes first.',
      },
      balances: {
        name: 'Kitchen scales',
        tagline: 'Accuracy, app sync and nutrition tracking: the starting point for precise cooking.',
      },
      'thermometres-viande': {
        name: 'Meat thermometers',
        tagline: 'Cooked to the exact degree, on the griddle, in the air fryer or in the oven.',
      },
      'prises-connectees': {
        name: 'Smart plugs',
        tagline: 'Remote-control any appliance — your air fryer included.',
      },
    },
  },
  de: {
    kicker: 'Smarte Küche',
    title: 'Smarte Küche: so gründlich verglichen wie unsere Airfryer',
    subtitle: 'Multikocher, Kaffeevollautomaten, Küchenwaagen, Fleischthermometer, WLAN-Steckdosen: gleiche Methode, gleiche Ansprüche.',
    intro: 'Nach den Airfryern legen wir dasselbe strenge Raster an die übrigen Küchengeräte an: an Geräte, die kochen, wiegen, messen und sich aus der Ferne steuern lassen. Das Ziel: Spielereien aussortieren und nur behalten, was den Alltag wirklich leichter macht.',
    breadcrumb: 'Smarte Küche',
    categoriesTitle: 'Unsere 5 Kategorien',
    categoryKicker: 'Kategorie',
    ctaCategory: 'Zu den Empfehlungen',
    comparatorCta: 'Vergleich öffnen',
    comparatorDesc: 'Vergleichen Sie bis zu 3 Modelle nebeneinander, auch über Kategorien hinweg.',
    categories: {
      multicuiseurs: {
        name: 'Smarte Multikocher',
        tagline: 'Das automatische Herzstück der Küche: Programme per WLAN, geführte Rezepte, alles in einem Gerät.',
      },
      cafetieres: {
        name: 'Kaffeevollautomaten',
        tagline: 'Mit Mahlwerk, für Espresso und Kaffee aus ganzen Bohnen: Zuverlässigkeit im Alltag geht vor.',
      },
      balances: {
        name: 'Küchenwaagen mit App',
        tagline: 'Genau wiegen, Werte in die App übertragen, Nährwerte erfassen: die Basis, wenn Sie bewusst kochen wollen.',
      },
      'thermometres-viande': {
        name: 'Fleischthermometer',
        tagline: 'Auf das Grad genau gegart, ob auf der Plancha, im Airfryer oder im Backofen.',
      },
      'prises-connectees': {
        name: 'Smarte Steckdosen',
        tagline: 'Jedes Gerät aus der Ferne steuern, auch Ihren Airfryer.',
      },
    },
  },
  es: {
    kicker: 'Cocina conectada',
    title: 'La cocina conectada, comparada con el mismo rigor que las freidoras de aire',
    subtitle: 'Ollas, cafeteras, básculas, termómetros y enchufes: el mismo método y la misma exigencia.',
    intro: 'Después de analizar a fondo las freidoras de aire, aplicamos los mismos criterios exigentes a todo lo que las rodea: aparatos que cocinan, pesan, miden y se controlan a distancia. El objetivo: ahorrarte los gadgets que no sirven y quedarnos con lo que de verdad simplifica el día a día.',
    breadcrumb: 'Cocina conectada',
    categoriesTitle: 'Nuestras 5 categorías',
    categoryKicker: 'Categoría',
    ctaCategory: 'Ver la selección',
    comparatorCta: 'Abrir el comparador',
    comparatorDesc: 'Compara hasta 3 modelos a la vez, de cualquier categoría.',
    categories: {
      multicuiseurs: {
        name: 'Ollas programables',
        tagline: 'El corazón automático de la cocina: programación por wifi, recetas guiadas, todo en uno.',
      },
      cafetieres: {
        name: 'Cafeteras superautomáticas',
        tagline: 'De la espresso con molinillo a la cafetera de grano: ante todo, fiabilidad en el día a día.',
      },
      balances: {
        name: 'Básculas de cocina',
        tagline: 'Precisión, conexión con la app y seguimiento nutricional: la base de una cocina bien controlada.',
      },
      'thermometres-viande': {
        name: 'Termómetros para carne',
        tagline: 'El punto exacto, grado a grado, a la plancha, en la freidora de aire o en el horno.',
      },
      'prises-connectees': {
        name: 'Enchufes inteligentes',
        tagline: 'Controla cualquier aparato a distancia, también tu freidora de aire.',
      },
    },
  },
  it: {
    kicker: 'Cucina smart',
    title: 'La cucina smart, valutata con lo stesso metodo delle friggitrici ad aria',
    subtitle: 'Multicooker, macchine da caffè, bilance, termometri, prese: stesso metodo, stesso rigore.',
    intro: 'Dopo aver passato al setaccio le friggitrici ad aria, applichiamo lo stesso metodo rigoroso a tutto ciò che le sta intorno: apparecchi che cuociono, pesano, misurano e si comandano a distanza. L\'obiettivo è evitarti i gadget e tenere solo ciò che semplifica davvero la vita di tutti i giorni.',
    breadcrumb: 'Cucina smart',
    categoriesTitle: 'Le nostre 5 categorie',
    categoryKicker: 'Categoria',
    ctaCategory: 'Vedi la selezione',
    comparatorCta: 'Apri il comparatore',
    comparatorDesc: 'Confronta fino a 3 modelli fianco a fianco, di qualsiasi categoria.',
    categories: {
      multicuiseurs: {
        name: 'Multicooker smart',
        tagline: 'Il cuore automatico della cucina: programmazione via Wi-Fi, ricette guidate, tutto in uno.',
      },
      cafetieres: {
        name: 'Macchine da caffè automatiche',
        tagline: 'Dall\'espresso con macinacaffè integrato alla superautomatica a chicchi: prima di tutto, l\'affidabilità di ogni giorno.',
      },
      balances: {
        name: 'Bilance da cucina',
        tagline: 'Precisione, collegamento all\'app, monitoraggio nutrizionale: la base per cucinare con precisione.',
      },
      'thermometres-viande': {
        name: 'Termometri per carne wireless',
        tagline: 'Cotture perfette al grado, alla piastra come in friggitrice ad aria o in forno.',
      },
      'prises-connectees': {
        name: 'Prese smart',
        tagline: 'Comanda a distanza qualsiasi apparecchio, anche la friggitrice ad aria.',
      },
    },
  },
  nl: {
    kicker: 'Slimme keuken',
    title: 'De slimme keuken, net zo grondig vergeleken als airfryers',
    subtitle: 'Multicookers, koffiemachines, weegschalen, thermometers en slimme stekkers: één methode, één maatstaf.',
    intro: 'Na de airfryers passen we hetzelfde strenge beoordelingsschema toe op alles eromheen: apparaten die koken, wegen, meten en op afstand te bedienen zijn. Het doel: geen gadgets, alleen wat je dagelijks leven echt makkelijker maakt.',
    breadcrumb: 'Slimme keuken',
    categoriesTitle: 'Onze 5 categorieën',
    categoryKicker: 'Categorie',
    ctaCategory: 'Bekijk de selectie',
    comparatorCta: 'Open de vergelijker',
    comparatorDesc: 'Vergelijk tot 3 modellen naast elkaar, uit alle categorieën.',
    categories: {
      multicuiseurs: {
        name: 'Slimme multicookers',
        tagline: 'Het automatische hart van de keuken: programma’s via wifi, begeleide recepten, alles-in-één.',
      },
      cafetieres: {
        name: 'Koffiemachines met bonen',
        tagline: 'Volautomaten met ingebouwde bonenmaler: betrouwbaarheid voor elke dag gaat voor alles.',
      },
      balances: {
        name: 'Keukenweegschalen',
        tagline: 'Precisie, koppeling met een app en voedingswaarden bijhouden: daar begint nauwkeurig koken.',
      },
      'thermometres-viande': {
        name: 'Vleesthermometers',
        tagline: 'Tot op de graad precies gaar, op de plancha, in de airfryer of in de oven.',
      },
      'prises-connectees': {
        name: 'Slimme stekkers',
        tagline: 'Bedien elk apparaat op afstand, ook je airfryer.',
      },
    },
  },
  pl: {
    kicker: 'Inteligentna kuchnia',
    title: 'Inteligentna kuchnia oceniana tak samo jak frytkownice',
    subtitle: 'Multicookery, ekspresy do kawy, wagi, termometry, gniazdka — ta sama metoda, te same wymagania.',
    intro: 'Frytkownice beztłuszczowe przeanalizowaliśmy już wnikliwie. Teraz te same rygorystyczne kryteria stosujemy do pozostałych urządzeń: tych, które gotują, ważą, mierzą i pozwalają sterować sprzętem na odległość. Cel: odsiać gadżety i zostawić to, co naprawdę ułatwia codzienność.',
    breadcrumb: 'Inteligentna kuchnia',
    categoriesTitle: 'Pięć kategorii urządzeń',
    categoryKicker: 'Kategoria',
    ctaCategory: 'Zobacz zestawienie',
    comparatorCta: 'Otwórz porównywarkę',
    comparatorDesc: 'Porównaj obok siebie do 3 modeli, niezależnie od kategorii.',
    categories: {
      multicuiseurs: {
        name: 'Inteligentne multicookery',
        tagline: 'Serce zautomatyzowanej kuchni: sterowanie przez Wi-Fi, przepisy krok po kroku, wiele urządzeń w jednym.',
      },
      cafetieres: {
        name: 'Automatyczne ekspresy do kawy',
        tagline: 'Od ekspresu ciśnieniowego z młynkiem po automat na kawę ziarnistą — liczy się przede wszystkim niezawodność na co dzień.',
      },
      balances: {
        name: 'Wagi kuchenne',
        tagline: 'Dokładne pomiary, współpraca z aplikacją, śledzenie wartości odżywczych — podstawa precyzyjnego gotowania.',
      },
      'thermometres-viande': {
        name: 'Termometry do mięsa',
        tagline: 'Mięso dopieczone co do stopnia — na płycie grillowej, we frytkownicy beztłuszczowej czy w piekarniku.',
      },
      'prises-connectees': {
        name: 'Inteligentne gniazdka',
        tagline: 'Steruj dowolnym urządzeniem zdalnie — także swoją frytkownicą beztłuszczową.',
      },
    },
  },
  sv: {
    kicker: 'Smart kök',
    title: 'Det smarta köket, jämfört lika noga som airfryrarna',
    subtitle: 'Multikokare, kaffemaskiner, köksvågar, stektermometrar, smarta pluggar – samma metod, samma krav.',
    intro: 'Efter att ha gått igenom airfryrarna med finkam tillämpar vi samma noggranna bedömning på allt som finns runt omkring: apparater som lagar mat, väger, mäter och styrs på distans. Målet är att du ska slippa onödiga prylar och behålla det som faktiskt gör vardagen enklare.',
    breadcrumb: 'Smart kök',
    categoriesTitle: 'Våra 5 kategorier',
    categoryKicker: 'Kategori',
    ctaCategory: 'Se urvalet',
    comparatorCta: 'Öppna jämförelseverktyget',
    comparatorDesc: 'Jämför upp till 3 modeller sida vid sida, oavsett kategori.',
    categories: {
      multicuiseurs: {
        name: 'Smarta multikokare',
        tagline: 'Kökets automatiska hjärta: schemaläggning via wifi, guidade recept, allt i ett.',
      },
      cafetieres: {
        name: 'Helautomatiska kaffemaskiner',
        tagline: 'Från espressomaskin med kvarn till helautomat för hela bönor: pålitligheten i vardagen kommer först.',
      },
      balances: {
        name: 'Köksvågar',
        tagline: 'Precision, koppling till appen, koll på näringsinnehållet – grunden i ett kök där du har kontroll.',
      },
      'thermometres-viande': {
        name: 'Smarta stektermometrar',
        tagline: 'Exakt rätt temperatur på graden när – på stekhällen, i airfryern eller i ugnen.',
      },
      'prises-connectees': {
        name: 'Smarta pluggar',
        tagline: 'Styr vilken apparat som helst på distans – även din airfryer.',
      },
    },
  },
  us: {
    kicker: 'Smart kitchen',
    title: 'Smart Kitchen Appliances, Compared Like Air Fryers',
    subtitle: 'Multicookers, coffee makers, scales, thermometers, smart plugs — one method, one standard.',
    intro: 'After putting air fryers under the microscope, we apply the same rigorous scoring grid to everything around them: appliances that cook, weigh, measure and can be run remotely. The goal: skip the gimmicks and keep what actually makes everyday life easier.',
    breadcrumb: 'Smart kitchen',
    categoriesTitle: 'Our 5 categories',
    categoryKicker: 'Category',
    ctaCategory: 'See the shortlist',
    comparatorCta: 'Open the comparison tool',
    comparatorDesc: 'Compare up to 3 models side by side, across every category.',
    categories: {
      multicuiseurs: {
        name: 'Smart multicookers',
        tagline: 'The automated heart of the kitchen: Wi-Fi programs, guided recipes, all-in-one cooking.',
      },
      cafetieres: {
        name: 'Automatic coffee makers',
        tagline: 'From super-automatic espresso machines to simpler espresso makers — everyday reliability first, showroom features second.',
      },
      balances: {
        name: 'Kitchen scales',
        tagline: 'Accuracy, app sync, nutrition tracking — the foundation of precise cooking.',
      },
      'thermometres-viande': {
        name: 'Smart meat thermometers',
        tagline: 'Perfect doneness to the degree, whether you grill, air-fry or roast.',
      },
      'prises-connectees': {
        name: 'Smart plugs',
        tagline: 'Control any appliance remotely — your air fryer included.',
      },
    },
  },
  ca: {
    kicker: 'Smart kitchen',
    title: 'The smart kitchen, compared as rigorously as our air fryers',
    subtitle: 'Multicookers, coffee makers, scales, thermometers, smart plugs — one method, one standard.',
    intro: 'After combing through air fryers, we apply the same rigorous scoring framework to the wider ecosystem: devices that cook, weigh, measure and switch things on from across the room. The goal: cut out the gadgets and keep what actually makes daily life easier.',
    breadcrumb: 'Smart kitchen',
    categoriesTitle: 'Our 5 categories',
    categoryKicker: 'Category',
    ctaCategory: 'See the shortlist',
    comparatorCta: 'Open the comparison tool',
    comparatorDesc: 'Compare up to 3 models side by side, across every category.',
    categories: {
      multicuiseurs: {
        name: 'Smart multicookers',
        tagline: 'The automated heart of the kitchen: Wi-Fi programs, guided recipes, all-in-one.',
      },
      cafetieres: {
        name: 'Coffee makers',
        tagline: 'From super-automatic machines to espresso makers — everyday reliability first, showroom features second.',
      },
      balances: {
        name: 'Kitchen scales',
        tagline: 'Accuracy, app sync, nutrient tracking — the foundation of precise cooking.',
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
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = pageContent[safeLang] || pageContent.fr
  return buildPageMetadata({
    lang: safeLang,
    path: '/cuisine-connectee',
    title: `${c.title} | Home Nura`,
    description: c.intro,
  })
}

export default async function CuisineConnecteePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = pageContent[safeLang] || pageContent.fr
  // Phase Y introduced the single-source breadcrumb helper; use it so
  // any future schema.org change to BreadcrumbList propagates to every
  // hub route from one place.
  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: 'Home', path: '' },
    { name: c.breadcrumb, path: '/cuisine-connectee' },
  ])

  // The catalog's kitchen categories indexed in this market only (robot
  // cookers in fr, de, es, it, pl), after the product categories.
  const cards = [
    ...SMART_KITCHEN_CATEGORIES.map((slug) => ({ slug, path: `/cuisine-connectee/${slug}`, ...c.categories[slug] })),
    ...getPartiallyIndexableCategories()
      .filter((cat) => cat.metaSilo === 'cuisine-connectee' && isCategoryIndexableIn(cat, safeLang))
      .map((cat) => ({ slug: cat.slug, path: categoryPath(cat), name: cat.title[safeLang], tagline: cat.description[safeLang] })),
  ]

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: c.title,
    itemListElement: cards.map((card, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: card.name,
      url: `https://homenura.com/${safeLang}${card.path}`,
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Navbar currentLang={safeLang} />

      <main id="main">
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500" aria-label="Breadcrumb">
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
      />

      {/* Categories grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            {c.categoriesTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((cat, index) => {
            return (
              <Link
                key={cat.slug}
                href={`/${safeLang}${cat.path}`}
                className="group relative flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:shadow-md hover:-translate-y-1 hover:border-brand-200"
              >
                <Kicker size="sm" className="mb-3">
                  {String(index + 1).padStart(2, '0')} · {c.categoryKicker}
                </Kicker>
                <h3 className="text-xl font-bold text-slate-900 leading-tight mb-3 group-hover:text-brand-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {cat.tagline}
                </p>
                <div className="mt-5 text-sm font-semibold text-brand-600 group-hover:translate-x-1 transition-transform">
                  {c.ctaCategory} →
                </div>
              </Link>
            )
          })}
        </div>

        {/* Comparator CTA */}
        <div className="mt-12 rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 md:p-10 text-center">
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-6">
            {c.comparatorDesc}
          </p>
          <Button href={`/${safeLang}/cuisine-connectee/comparateur`}>
            <span>{c.comparatorCta}</span>
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </section>
      </main>

      {/* Footer */}
      <FaqSection faqs={[...getSiloFaq(safeLang, 'cuisine-connectee')]} title={SILO_FAQ_TITLE[safeLang]} />

      <SiteFooter
        currentLang={safeLang}
      />
    </div>
  )
}
