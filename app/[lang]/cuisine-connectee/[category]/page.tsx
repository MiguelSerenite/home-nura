import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  buildPageMetadata,
  buildClusterItemListSchema,
  buildProductImageObject,
  formatLastUpdated,
  lastUpdatedLabel,
  SITE_LAST_UPDATED_ISO,
} from '@/lib/seo'
import {
  getCategory,
  getPersonasForSilo,
} from '@/lib/catalog'
import type { Lang } from '@/lib/i18n'
import ProductCard from '@/components/ProductCard'
import ProductSceneBanner from '@/components/ProductSceneBanner'
import AmazonDisclosure from '@/components/AmazonDisclosure'
import FaqSection from '@/components/FaqSection'
import AuthorByline from '@/components/AuthorByline'
import IndependentSources from '@/components/IndependentSources'
import {
  SMART_KITCHEN_CATEGORIES,
  getSmartKitchenProductsByCategory,
  type SmartKitchenCategory,
} from '@/lib/smart-kitchen-products'
import { getSmartKitchenFaqs, faqSectionTitles } from '@/lib/smart-kitchen-faqs'
import { productKicker } from '@/lib/product-types'
import { SectionHero, SiteFooter } from '@/components/ui'
import { resolveLang, LANGUAGES } from '@/lib/i18n'
import { ChevronRight } from 'lucide-react'
import { getCategoryHead } from '@/lib/catalog/category-heads'
import { categoryModifiedIso } from '@/lib/catalog/category-faqs'


interface CategoryContent {
  kicker: string
  title: string
  subtitle: string
  intro: string
  breadcrumbRoot: string
  buyButton: string
}

type CategoryDict = Record<SmartKitchenCategory, CategoryContent>

const categoryContent: Record<string, CategoryDict> = {
  fr: {
    multicuiseurs: {
      kicker: 'Multicuiseurs connectés',
      title: 'Les meilleurs multicuiseurs connectés 2026',
      subtitle: 'Programmation WiFi, recettes guidées, tout-en-un',
      intro: 'Sélection comparée sur trois critères : qualité réelle des cuissons automatiques, solidité de l\'app (pas une vitrine), et rapport valeur/prix sur 3 ans. Nous écartons les modèles qui sur-vendent le marketing WiFi.',
      breadcrumbRoot: 'Cuisine connectée',
      buyButton: 'Vérifier le prix sur Amazon',
    },
    cafetieres: {
      kicker: 'Cafetières automatiques',
      title: 'Les meilleures cafetières automatiques 2026',
      subtitle: 'Broyeur, expresso, machine à grain : le café du quotidien',
      intro: 'Nous ne sélectionnons que des machines qui tiennent sur la durée. Critères : régularité de l\'extraction, facilité d\'entretien, pièces détachées disponibles 5 ans, et coût au café sur l\'amortissement.',
      breadcrumbRoot: 'Cuisine connectée',
      buyButton: 'Vérifier le prix sur Amazon',
    },
    balances: {
      kicker: 'Balances de cuisine',
      title: 'Les meilleures balances de cuisine connectées 2026',
      subtitle: 'Précision au gramme près, suivi nutritionnel, app fiable',
      intro: 'La balance est la brique de base d\'une cuisine maîtrisée. Nous analysons la répétabilité des mesures, la qualité de l\'app (et sa pérennité), et la compatibilité avec les plateformes de suivi alimentaire.',
      breadcrumbRoot: 'Cuisine connectée',
      buyButton: 'Vérifier le prix sur Amazon',
    },
    'thermometres-viande': {
      kicker: 'Thermomètres connectés',
      title: 'Les meilleurs thermomètres de cuisson connectés 2026',
      subtitle: 'Cuissons parfaites à la plancha, à l\'airfryer ou au four',
      intro: 'Complément naturel à l\'airfryer et au four : le thermomètre à sonde permet d\'atteindre la cuisson exacte sans ouvrir la porte. Nous privilégions la précision réelle, la portée sans fil, et l\'autonomie.',
      breadcrumbRoot: 'Cuisine connectée',
      buyButton: 'Vérifier le prix sur Amazon',
    },
    'prises-connectees': {
      kicker: 'Prises connectées',
      title: 'Les meilleures prises connectées 2026',
      subtitle: 'Piloter n\'importe quel appareil — y compris votre airfryer',
      intro: 'La prise connectée est l\'entrée la plus économique vers la cuisine pilotée. Bien choisie, elle permet de rendre n\'importe quel appareil programmable — airfryer inclus. Critères : ampérage supporté, qualité de l\'app, compatibilité assistants vocaux.',
      breadcrumbRoot: 'Cuisine connectée',
      buyButton: 'Vérifier le prix sur Amazon',
    },
  },
  en: {
    multicuiseurs: {
      kicker: 'Smart multicookers',
      title: 'Best smart multicookers 2026',
      subtitle: 'WiFi programs, guided recipes, all-in-one',
      intro: 'Shortlisted on three criteria: real cooking quality on automatic modes, app robustness (not just a showroom), and 3-year value-for-money. We drop models that over-sell WiFi marketing.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    cafetieres: {
      kicker: 'Coffee machines',
      title: 'Best automatic coffee machines 2026',
      subtitle: 'Bean-to-cup, espresso, daily reliability',
      intro: 'We only pick machines that go the distance. Criteria: extraction consistency, ease of maintenance, parts available for 5 years, and cost-per-cup over amortisation.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    balances: {
      kicker: 'Kitchen scales',
      title: 'Best smart kitchen scales 2026',
      subtitle: 'Gram-level precision, nutrient tracking, reliable app',
      intro: 'The scale is the foundation of a controlled kitchen. We review measurement repeatability, app quality (and longevity), and compatibility with major nutrition platforms.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    'thermometres-viande': {
      kicker: 'Cooking thermometers',
      title: 'Best smart cooking thermometers 2026',
      subtitle: 'Perfect doneness on the grill, air fryer or oven',
      intro: 'The natural companion to any air fryer or oven: a probe thermometer nails exact doneness without opening the door. We prioritise real precision, wireless range and battery life.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    'prises-connectees': {
      kicker: 'Smart plugs',
      title: 'Best smart plugs 2026',
      subtitle: 'Control any appliance — your air fryer included',
      intro: 'The smart plug is the cheapest entry point to a connected kitchen. Pick well and you can turn any appliance programmable — air fryer included. Criteria: amperage, app quality, voice-assistant compatibility.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
  },
  de: {
    multicuiseurs: {
      kicker: 'Smarte Multikocher',
      title: 'Die besten smarten Multikocher 2026',
      subtitle: 'WiFi-Programme, geführte Rezepte, alles in einem',
      intro: 'Ausgewählt nach drei Kriterien: echte Garqualität im Automatikmodus, App-Robustheit (kein Showroom), 3-Jahres-Preis-Leistung. Reine WiFi-Marketing-Modelle fliegen raus.',
      breadcrumbRoot: 'Smarte Küche',
      buyButton: 'Preis bei Amazon prüfen',
    },
    cafetieres: {
      kicker: 'Kaffeevollautomaten',
      title: 'Die besten Kaffeevollautomaten 2026',
      subtitle: 'Mahlwerk, Espresso, tägliche Zuverlässigkeit',
      intro: 'Wir wählen nur Maschinen, die durchhalten. Kriterien: Konstanz der Extraktion, Wartungsfreundlichkeit, 5 Jahre Ersatzteile, Kosten pro Tasse über die Amortisation.',
      breadcrumbRoot: 'Smarte Küche',
      buyButton: 'Preis bei Amazon prüfen',
    },
    balances: {
      kicker: 'Küchenwaagen',
      title: 'Die besten smarten Küchenwaagen 2026',
      subtitle: 'Grammgenau, Nährwerttracking, zuverlässige App',
      intro: 'Die Waage ist das Fundament einer kontrollierten Küche. Wir vergleichen die Wiederholbarkeit, die App-Qualität (und Langlebigkeit) und die Kompatibilität mit großen Ernährungs-Plattformen.',
      breadcrumbRoot: 'Smarte Küche',
      buyButton: 'Preis bei Amazon prüfen',
    },
    'thermometres-viande': {
      kicker: 'Bratenthermometer',
      title: 'Die besten smarten Bratenthermometer 2026',
      subtitle: 'Perfekte Garstufe auf Grill, Heißluft oder Ofen',
      intro: 'Der natürliche Partner zur Heißluftfritteuse oder zum Ofen: das Stichthermometer trifft die genaue Garstufe, ohne die Tür zu öffnen. Wir priorisieren echte Präzision, Funkreichweite und Akkulaufzeit.',
      breadcrumbRoot: 'Smarte Küche',
      buyButton: 'Preis bei Amazon prüfen',
    },
    'prises-connectees': {
      kicker: 'Smarte Steckdosen',
      title: 'Die besten smarten Steckdosen 2026',
      subtitle: 'Jedes Gerät steuern — auch Ihre Heißluftfritteuse',
      intro: 'Die Smart-Steckdose ist der günstigste Einstieg in die vernetzte Küche. Gut gewählt macht sie jedes Gerät programmierbar — inklusive Heißluftfritteuse. Kriterien: Stromstärke, App-Qualität, Sprachassistenten-Kompatibilität.',
      breadcrumbRoot: 'Smarte Küche',
      buyButton: 'Preis bei Amazon prüfen',
    },
  },
  es: {
    multicuiseurs: {
      kicker: 'Ollas multifunción',
      title: 'Las mejores ollas multifunción conectadas 2026',
      subtitle: 'Programas WiFi, recetas guiadas, todo en uno',
      intro: 'Seleccionadas por tres criterios: calidad real de la cocción automática, robustez de la app (no un escaparate), y relación calidad-precio a 3 años. Descartamos las que sobre-venden el marketing WiFi.',
      breadcrumbRoot: 'Cocina conectada',
      buyButton: 'Ver precio en Amazon',
    },
    cafetieres: {
      kicker: 'Cafeteras automáticas',
      title: 'Las mejores cafeteras automáticas 2026',
      subtitle: 'Molinillo, expreso, fiabilidad diaria',
      intro: 'Solo elegimos máquinas que aguantan. Criterios: regularidad de la extracción, facilidad de mantenimiento, recambios 5 años, coste por café tras amortización.',
      breadcrumbRoot: 'Cocina conectada',
      buyButton: 'Ver precio en Amazon',
    },
    balances: {
      kicker: 'Básculas de cocina',
      title: 'Las mejores básculas de cocina conectadas 2026',
      subtitle: 'Precisión al gramo, seguimiento nutricional, app fiable',
      intro: 'La báscula es la base de una cocina controlada. Comparamos la repetibilidad, la calidad de la app (y su durabilidad) y la compatibilidad con las plataformas nutricionales.',
      breadcrumbRoot: 'Cocina conectada',
      buyButton: 'Ver precio en Amazon',
    },
    'thermometres-viande': {
      kicker: 'Termómetros de cocina',
      title: 'Los mejores termómetros de cocción conectados 2026',
      subtitle: 'Cocciones perfectas a la plancha, freidora u horno',
      intro: 'El compañero natural de la freidora de aire o el horno: el termómetro con sonda alcanza la cocción exacta sin abrir la puerta. Priorizamos la precisión real, el alcance inalámbrico y la autonomía.',
      breadcrumbRoot: 'Cocina conectada',
      buyButton: 'Ver precio en Amazon',
    },
    'prises-connectees': {
      kicker: 'Enchufes inteligentes',
      title: 'Los mejores enchufes inteligentes 2026',
      subtitle: 'Controla cualquier aparato — incluida tu freidora de aire',
      intro: 'El enchufe inteligente es la entrada más económica a la cocina conectada. Bien elegido, vuelve programable cualquier aparato — freidora incluida. Criterios: amperaje, calidad de la app, compatibilidad con asistentes de voz.',
      breadcrumbRoot: 'Cocina conectada',
      buyButton: 'Ver precio en Amazon',
    },
  },
  it: {
    multicuiseurs: {
      kicker: 'Multicottura connesse',
      title: 'Le migliori multicottura connesse 2026',
      subtitle: 'Programmi WiFi, ricette guidate, tutto in uno',
      intro: 'Selezionate su tre criteri: qualità reale della cottura automatica, robustezza dell\'app (non una vetrina) e rapporto qualità-prezzo a 3 anni. Scartiamo i modelli che sopravvalutano il marketing WiFi.',
      breadcrumbRoot: 'Cucina connessa',
      buyButton: 'Verifica prezzo su Amazon',
    },
    cafetieres: {
      kicker: 'Macchine da caffè',
      title: 'Le migliori macchine da caffè automatiche 2026',
      subtitle: 'Macinatura, espresso, affidabilità quotidiana',
      intro: 'Scegliamo solo macchine che durano. Criteri: regolarità dell\'estrazione, facilità di manutenzione, ricambi per 5 anni, costo per tazza sull\'ammortamento.',
      breadcrumbRoot: 'Cucina connessa',
      buyButton: 'Verifica prezzo su Amazon',
    },
    balances: {
      kicker: 'Bilance da cucina',
      title: 'Le migliori bilance da cucina connesse 2026',
      subtitle: 'Precisione al grammo, tracking nutrizionale, app affidabile',
      intro: 'La bilancia è la base di una cucina controllata. Confrontiamo la ripetibilità, la qualità dell\'app (e la sua longevità) e la compatibilità con le piattaforme nutrizionali.',
      breadcrumbRoot: 'Cucina connessa',
      buyButton: 'Verifica prezzo su Amazon',
    },
    'thermometres-viande': {
      kicker: 'Termometri da cucina',
      title: 'I migliori termometri di cottura connessi 2026',
      subtitle: 'Cotture perfette in piastra, friggitrice o forno',
      intro: 'Il complemento naturale della friggitrice ad aria o del forno: il termometro a sonda raggiunge la cottura esatta senza aprire la porta. Privilegiamo precisione reale, portata wireless e autonomia.',
      breadcrumbRoot: 'Cucina connessa',
      buyButton: 'Verifica prezzo su Amazon',
    },
    'prises-connectees': {
      kicker: 'Prese smart',
      title: 'Le migliori prese smart 2026',
      subtitle: 'Controlla qualsiasi apparecchio — friggitrice inclusa',
      intro: 'La presa smart è l\'ingresso più economico alla cucina connessa. Ben scelta, rende programmabile qualsiasi apparecchio — friggitrice inclusa. Criteri: amperaggio, qualità dell\'app, compatibilità assistenti vocali.',
      breadcrumbRoot: 'Cucina connessa',
      buyButton: 'Verifica prezzo su Amazon',
    },
  },
  nl: {
    multicuiseurs: {
      kicker: 'Slimme multicookers',
      title: 'Beste slimme multicookers 2026',
      subtitle: 'WiFi-programma\'s, begeleide recepten, alles-in-één',
      intro: 'Geselecteerd op drie criteria: echte kookkwaliteit op automatische programma\'s, robuustheid van de app (geen showroom) en 3-jaars prijs-kwaliteit. Modellen die alleen op WiFi-marketing leunen sneuvelen.',
      breadcrumbRoot: 'Slimme keuken',
      buyButton: 'Bekijk prijs op Amazon',
    },
    cafetieres: {
      kicker: 'Volautomaten',
      title: 'Beste volautomaten 2026',
      subtitle: 'Maler, espresso, dagelijkse betrouwbaarheid',
      intro: 'We kiezen alleen machines die blijven draaien. Criteria: consistentie van de extractie, onderhoudsgemak, 5 jaar onderdelen, kost per kopje over de afschrijving.',
      breadcrumbRoot: 'Slimme keuken',
      buyButton: 'Bekijk prijs op Amazon',
    },
    balances: {
      kicker: 'Keukenweegschalen',
      title: 'Beste slimme keukenweegschalen 2026',
      subtitle: 'Precisie op de gram, voedingstracking, betrouwbare app',
      intro: 'De weegschaal is de basis van een gecontroleerde keuken. We vergelijken de herhaalbaarheid, de kwaliteit van de app (en haar duurzaamheid) en de compatibiliteit met voedingsplatformen.',
      breadcrumbRoot: 'Slimme keuken',
      buyButton: 'Bekijk prijs op Amazon',
    },
    'thermometres-viande': {
      kicker: 'Vleesthermometers',
      title: 'Beste slimme vleesthermometers 2026',
      subtitle: 'Perfecte gaarheid op de grill, airfryer of in de oven',
      intro: 'De natuurlijke metgezel van de airfryer of oven: de kernthermometer raakt de exacte gaarheid zonder de deur te openen. We geven voorrang aan echte precisie, draadloos bereik en batterijduur.',
      breadcrumbRoot: 'Slimme keuken',
      buyButton: 'Bekijk prijs op Amazon',
    },
    'prises-connectees': {
      kicker: 'Slimme stekkers',
      title: 'Beste slimme stekkers 2026',
      subtitle: 'Bedien elk apparaat — ook uw airfryer',
      intro: 'De slimme stekker is de goedkoopste toegang tot een verbonden keuken. Goed gekozen maakt hij elk apparaat programmeerbaar — airfryer inbegrepen. Criteria: stroomsterkte, app-kwaliteit, compatibiliteit met spraakassistenten.',
      breadcrumbRoot: 'Slimme keuken',
      buyButton: 'Bekijk prijs op Amazon',
    },
  },
  pl: {
    multicuiseurs: {
      kicker: 'Inteligentne multicookery',
      title: 'Najlepsze inteligentne multicookery 2026',
      subtitle: 'Sterowanie przez Wi-Fi, przepisy krok po kroku, wiele urządzeń w jednym',
      intro: 'Modele w zestawieniu porównujemy według trzech kryteriów: rzeczywistej jakości potraw przyrządzanych w programach automatycznych, solidności aplikacji (a nie tylko efektownej wizytówki) oraz stosunku jakości do ceny w ciągu 3 lat użytkowania. Pomijamy modele, w których Wi-Fi to przede wszystkim chwyt marketingowy.',
      breadcrumbRoot: 'Inteligentna kuchnia',
      buyButton: 'Sprawdź cenę na Amazon',
    },
    cafetieres: {
      kicker: 'Automatyczne ekspresy do kawy',
      title: 'Najlepsze automatyczne ekspresy do kawy 2026',
      subtitle: 'Ekspresy automatyczne i ciśnieniowe – niezawodne na co dzień',
      intro: 'Wybieramy wyłącznie ekspresy, które sprawdzają się przez lata. Kryteria: powtarzalność ekstrakcji, łatwość konserwacji, dostępność części zamiennych przez 5 lat oraz koszt jednej filiżanki po uwzględnieniu amortyzacji urządzenia.',
      breadcrumbRoot: 'Inteligentna kuchnia',
      buyButton: 'Sprawdź cenę na Amazon',
    },
    balances: {
      kicker: 'Wagi kuchenne',
      title: 'Najlepsze inteligentne wagi kuchenne 2026',
      subtitle: 'Dokładność co do grama, śledzenie wartości odżywczych, niezawodna aplikacja',
      intro: 'Waga to podstawa precyzyjnego gotowania. Analizujemy powtarzalność pomiarów, jakość aplikacji (i to, czy producent będzie ją dalej wspierał) oraz zgodność z aplikacjami do monitorowania diety.',
      breadcrumbRoot: 'Inteligentna kuchnia',
      buyButton: 'Sprawdź cenę na Amazon',
    },
    'thermometres-viande': {
      kicker: 'Termometry do mięsa',
      title: 'Najlepsze bezprzewodowe termometry do mięsa 2026',
      subtitle: 'Idealnie upieczone mięso na grillu, we frytkownicy i w piekarniku',
      intro: 'Termometr z sondą to naturalne uzupełnienie frytkownicy i piekarnika: pozwala trafić w idealny stopień wysmażenia bez otwierania drzwiczek. Liczy się dla nas rzeczywista dokładność, zasięg łączności bezprzewodowej i czas pracy na baterii.',
      breadcrumbRoot: 'Inteligentna kuchnia',
      buyButton: 'Sprawdź cenę na Amazon',
    },
    'prises-connectees': {
      kicker: 'Inteligentne gniazdka',
      title: 'Najlepsze inteligentne gniazdka 2026',
      subtitle: 'Steruj dowolnym urządzeniem – także frytkownicą beztłuszczową',
      intro: 'Inteligentne gniazdko to najtańszy pierwszy krok w stronę inteligentnej kuchni. Jeśli dobrze je dobierzesz, pozwoli zaprogramować dowolne urządzenie, także frytkownicę. Kryteria: maksymalne obciążenie, jakość aplikacji, zgodność z asystentami głosowymi.',
      breadcrumbRoot: 'Inteligentna kuchnia',
      buyButton: 'Sprawdź cenę na Amazon',
    },
  },
  sv: {
    multicuiseurs: {
      kicker: 'Smarta multikokare',
      title: 'De bästa smarta multikokarna 2026',
      subtitle: 'Schemaläggning via wifi, guidade recept, allt i ett',
      intro: 'Urvalet bygger på tre kriterier: hur bra de automatiska programmen faktiskt lagar maten, en app som håller måttet (inte bara ett skyltfönster) och prisvärdheten över tre år. Modeller som lovar mer med wifi än de levererar sorterar vi bort.',
      breadcrumbRoot: 'Smart kök',
      buyButton: 'Se priset på Amazon',
    },
    cafetieres: {
      kicker: 'Helautomatiska kaffemaskiner',
      title: 'De bästa helautomatiska kaffemaskinerna 2026',
      subtitle: 'Inbyggd kvarn, espresso, hela bönor: kaffet för vardagen',
      intro: 'Vi väljer bara maskiner som håller i längden. Kriterier: jämn extraktion, enkel skötsel, reservdelar som går att få tag på i 5 år och vad varje kopp kostar när inköpet slås ut över åren.',
      breadcrumbRoot: 'Smart kök',
      buyButton: 'Se priset på Amazon',
    },
    balances: {
      kicker: 'Köksvågar',
      title: 'De bästa smarta köksvågarna 2026',
      subtitle: 'Exakt på grammet, koll på näringsinnehållet, en app att lita på',
      intro: 'Vågen är grunden i ett kök där du har koll på mängderna. Vi analyserar om vågen visar samma vikt varje gång, hur bra appen är (och om den finns kvar om några år) och om den fungerar med de vanligaste apparna för kostregistrering.',
      breadcrumbRoot: 'Smart kök',
      buyButton: 'Se priset på Amazon',
    },
    'thermometres-viande': {
      kicker: 'Smarta stektermometrar',
      title: 'De bästa smarta stektermometrarna 2026',
      subtitle: 'Perfekt tillagat på stekhällen, i airfryern eller i ugnen',
      intro: 'Det naturliga komplementet till airfryern och ugnen: en stektermometer med givare gör att du träffar exakt rätt innertemperatur utan att öppna luckan. Vi prioriterar verklig precision, trådlös räckvidd och batteritid.',
      breadcrumbRoot: 'Smart kök',
      buyButton: 'Se priset på Amazon',
    },
    'prises-connectees': {
      kicker: 'Smarta pluggar',
      title: 'De bästa smarta pluggarna 2026',
      subtitle: 'Styr vilken apparat som helst – även din airfryer',
      intro: 'En smart plugg är det billigaste sättet att komma igång med ett uppkopplat kök. Väljer du rätt kan du schemalägga vilken apparat som helst, airfryern inräknad. Kriterier: hur många ampere den klarar, hur bra appen är och om den fungerar med röstassistenter.',
      breadcrumbRoot: 'Smart kök',
      buyButton: 'Se priset på Amazon',
    },
  },
  us: {
    multicuiseurs: {
      kicker: 'Smart multicookers',
      title: 'The Best Smart Multicookers of 2026',
      subtitle: 'Wi-Fi scheduling, guided recipes, all-in-one cooking',
      intro: 'We shortlist on three criteria: how well the automatic programs actually cook, whether the app is solid (not just a showroom) and value over three years. Models that oversell Wi-Fi as a marketing feature don\'t make the cut.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    cafetieres: {
      kicker: 'Coffee makers',
      title: 'The Best Automatic Coffee Makers of 2026',
      subtitle: 'Super-automatic espresso, built-in grinders, everyday reliability',
      intro: 'We only pick machines built to last. Criteria: consistent extraction, easy maintenance, spare parts available for 5 years and cost per cup over the life of the machine.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    balances: {
      kicker: 'Kitchen scales',
      title: 'The Best Smart Kitchen Scales of 2026',
      subtitle: 'Accurate to the gram (0.04 oz), nutrition tracking, a reliable app',
      intro: 'A good scale is the foundation of precise cooking. We look at how repeatable the readings are, the quality of the app (and whether it will be supported long term) and compatibility with the major nutrition-tracking platforms.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    'thermometres-viande': {
      kicker: 'Smart meat thermometers',
      title: 'The Best Smart Meat Thermometers of 2026',
      subtitle: 'Perfect doneness on the griddle, in the air fryer or in the oven',
      intro: 'The natural sidekick to an air fryer or oven: a probe thermometer nails exact doneness without opening the door. We prioritize real-world accuracy, wireless range and battery life.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    'prises-connectees': {
      kicker: 'Smart plugs',
      title: 'The Best Smart Plugs of 2026',
      subtitle: 'Control any appliance — your air fryer included',
      intro: 'A smart plug is the cheapest way into a smart kitchen. Choose well and you can put almost any appliance on a schedule, air fryer included. Criteria: maximum current rating (amps), app quality and voice assistant compatibility.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
  },
  ca: {
    multicuiseurs: {
      kicker: 'Smart multicookers',
      title: 'Best smart multicookers 2026',
      subtitle: 'Wi-Fi programs, guided recipes, all-in-one',
      intro: 'Shortlisted on three criteria: real cooking quality on automatic modes, an app that holds up day to day (not just a showroom demo) and value for money over three years. We drop models that oversell their Wi-Fi features.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    cafetieres: {
      kicker: 'Coffee makers',
      title: 'Best super-automatic espresso machines 2026',
      subtitle: 'Built-in grinder, espresso, everyday reliability',
      intro: 'We only pick machines built to last. Criteria: consistent extraction, easy maintenance, spare parts available for 5 years and the real cost per cup once the purchase price is spread over the machine\'s life.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    balances: {
      kicker: 'Kitchen scales',
      title: 'Best smart kitchen scales 2026',
      subtitle: 'Gram-level precision, nutrient tracking, reliable app',
      intro: 'A good scale is the foundation of precise cooking. We look at measurement repeatability, app quality (and how long the app is supported) and compatibility with the major nutrition-tracking platforms.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    'thermometres-viande': {
      kicker: 'Meat thermometers',
      title: 'Best smart meat thermometers 2026',
      subtitle: 'Perfect doneness on the grill, air fryer or oven',
      intro: 'The natural companion to any air fryer or oven: a probe thermometer nails exact doneness without opening the door. We prioritize real-world accuracy, wireless range and battery life.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
    'prises-connectees': {
      kicker: 'Smart plugs',
      title: 'Best smart plugs 2026',
      subtitle: 'Control any appliance — your air fryer included',
      intro: 'A smart plug is the cheapest way into a smart kitchen. Pick the right one and you can make almost any appliance programmable — your air fryer included. Criteria: amperage, app quality and voice-assistant compatibility.',
      breadcrumbRoot: 'Smart kitchen',
      buyButton: 'Check price on Amazon',
    },
  },
}

// Phase OO: per-locale strings for the best-for persona cluster that
// cross-links the flagship category page into the Moteur 4
// /meilleur-pour/[persona] conversion layer. Kept as a tiny
// standalone dict so we don't duplicate these across every category.
const bestForUiStrings: Record<string, { title: string; prefix: string; subtitle: string }> = {
  fr: {
    title: 'Trouvez le meilleur selon votre profil',
    prefix: 'Le meilleur pour',
    subtitle: 'Notre classement est repondéré selon votre situation : capacité, budget, usage, contrainte.',
  },
  en: {
    title: 'Find the best one for your profile',
    prefix: 'The best for',
    subtitle: 'Our ranking is reweighted to your situation: capacity, budget, usage, constraint.',
  },
  de: {
    title: 'Finden Sie das Beste für Ihr Profil',
    prefix: 'Das Beste für',
    subtitle: 'Unser Ranking wird neu gewichtet: Kapazität, Budget, Nutzung, Einschränkung.',
  },
  es: {
    title: 'Encuentra el mejor según tu perfil',
    prefix: 'El mejor para',
    subtitle: 'Nuestro ranking se reequilibra según tu situación: capacidad, presupuesto, uso, restricción.',
  },
  it: {
    title: 'Trova il migliore secondo il tuo profilo',
    prefix: 'Il migliore per',
    subtitle: 'La nostra classifica viene ripondera: capacità, budget, uso, vincolo.',
  },
  nl: {
    title: 'Vind de beste voor uw profiel',
    prefix: 'De beste voor',
    subtitle: 'Onze ranking wordt opnieuw gewogen: capaciteit, budget, gebruik, beperking.',
  },
  pl: {
    title: 'Znajdź model dopasowany do siebie',
    prefix: 'Najlepszy wybór:',
    subtitle: 'Wagi kryteriów w rankingu dopasowujemy do Twojej sytuacji: pojemności, budżetu, sposobu użytkowania i ograniczeń.',
  },
  sv: {
    title: 'Hitta den bästa för dig',
    prefix: 'Bästa',
    subtitle: 'Vi viktar om vår rankning efter din situation: volym, budget, användning och begränsningar.',
  },
  us: {
    title: 'Find the best pick for your needs',
    prefix: 'Best for',
    subtitle: 'We re-weight our ranking for your situation: capacity, budget, how you cook and any constraints.',
  },
  ca: {
    title: 'Find the best one for your profile',
    prefix: 'The best for',
    subtitle: 'Our ranking is reweighted for your situation: capacity, budget, how you cook and any constraints.',
  },
}

export function generateStaticParams() {
  return SMART_KITCHEN_CATEGORIES.flatMap((category) =>
    LANGUAGES.map((lang) => ({ lang, category }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string }>
}): Promise<Metadata> {
  const { lang, category } = await params
  const safeLang = resolveLang(lang)
  if (!(SMART_KITCHEN_CATEGORIES as readonly string[]).includes(category)) {
    return {}
  }
  const safeCat = category as SmartKitchenCategory
  const c = (categoryContent[safeLang] || categoryContent.fr)[safeCat]
  const head = getCategoryHead(safeCat, safeLang)
  return buildPageMetadata({
    lang: safeLang,
    path: `/cuisine-connectee/${safeCat}`,
    title: `${head?.title ?? c.title} | Home Nura`,
    description: head?.description ?? c.intro,
  })
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ lang: string; category: string }>
}) {
  const { lang, category } = await params
  const safeLang: Lang = resolveLang(lang)
  if (!(SMART_KITCHEN_CATEGORIES as readonly string[]).includes(category)) {
    notFound()
  }
  const safeCat = category as SmartKitchenCategory
  const c = (categoryContent[safeLang] || categoryContent.fr)[safeCat]
  const head = getCategoryHead(safeCat, safeLang)
  const products = getSmartKitchenProductsByCategory(safeLang, safeCat)
  const faqs = getSmartKitchenFaqs(safeLang, safeCat)
  const faqTitle = faqSectionTitles[safeLang] || faqSectionTitles.fr
  const faqModifiedIso = categoryModifiedIso(safeCat, SITE_LAST_UPDATED_ISO)
  const faqUpdatedText = `${lastUpdatedLabel[safeLang]} ${formatLastUpdated(safeLang, faqModifiedIso)}`

  // Phase OO: resolve the best-for persona cluster for this flagship
  // category via the shared catalog so the route stays in sync with
  // Moteur 4 — one click sends a buyer from the product grid into
  // the exact /meilleur-pour/[persona] page that matches them.
  const catalogCategory = getCategory(safeCat)
  const bestForPersonas = catalogCategory?.indexable
    ? getPersonasForSilo('cuisine-connectee').slice(0, 9)
    : []
  const bestForUi = bestForUiStrings[safeLang] || bestForUiStrings.fr

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${safeLang}` },
      { '@type': 'ListItem', position: 2, name: c.breadcrumbRoot, item: `https://homenura.com/${safeLang}/cuisine-connectee` },
      { '@type': 'ListItem', position: 3, name: c.kicker, item: `https://homenura.com/${safeLang}/cuisine-connectee/${safeCat}` },
    ],
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: c.title,
    itemListElement: products.map((p, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: p.title,
      url: p.url,
      ...(p.visual.photo ? { image: buildProductImageObject(p.visual.photo) } : {}),
    })),
  }

  // Phase OO: second ItemList — the best-for persona cluster.
  // Each ListItem carries a url pointing into the Moteur 4 page, so
  // crawlers can walk the entire persona cluster without parsing the
  // DOM. Only emitted when the catalog recognises this flagship
  // category as indexable (prevents orphan URLs in production).
  const bestForClusterSchema =
    bestForPersonas.length > 0
      ? buildClusterItemListSchema({
          lang: safeLang,
          path: `/cuisine-connectee/${safeCat}`,
          name: `${bestForUi.title} — ${c.title}`,
          description: bestForUi.subtitle,
          items: bestForPersonas.map((persona) => ({
            name: `${bestForUi.prefix} ${c.kicker.toLowerCase()} — ${persona.label[safeLang]}`,
            path: `/cuisine-connectee/${safeCat}/meilleur-pour/${persona.slug}`,
          })),
        })
      : null

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
      {bestForClusterSchema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bestForClusterSchema) }}
        />
      )}
      <Navbar currentLang={safeLang} />

      <main id="main">
      {/* Breadcrumb */}
      <nav className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href={`/${safeLang}`} className="hover:text-brand-600 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
          <li>
            <Link href={`/${safeLang}/cuisine-connectee`} className="hover:text-brand-600 transition-colors">
              {c.breadcrumbRoot}
            </Link>
          </li>
          <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
          <li className="text-slate-600 font-medium">{c.kicker}</li>
        </ol>
      </nav>

      {/* Hero */}
      <SectionHero
        kicker={c.kicker}
        title={head?.h1 ?? c.title}
        subtitle={c.subtitle}
        intro={c.intro}
      />
      <AuthorByline lang={safeLang} className="justify-center max-w-3xl mx-auto px-4 md:px-6 -mt-6 mb-8 text-sm" />

      <ProductSceneBanner photo={products[0]?.visual.photo} />

      {/* Products grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-20">
        {products.length === 0 ? (
          <p className="text-center text-slate-500">—</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.asin}
                name={p.title}
                priceNumeric={p.priceNumeric}
                visual={p.visual}
                affiliateLink={p.url}
                asin={p.asin}
                badge={p.badge}
                buyButtonText={c.buyButton}
                lang={safeLang}
                capacity={p.capacity}
                bestFor={p.bestFor}
                kicker={productKicker({ type: safeCat, lang: safeLang, bestFor: p.bestFor })}
              />
            ))}
          </div>
        )}
        {products.length > 0 && (
          <AmazonDisclosure lang={safeLang} className="mt-6 text-center text-xs text-slate-500" />
        )}
      </section>

      {catalogCategory && (
        <IndependentSources categorySlug={safeCat} categoryTitle={catalogCategory.title[safeLang]} lang={safeLang} />
      )}

      {/* Phase OO: best-for persona cluster — cross-links to Moteur 4 */}
      {bestForPersonas.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
            {bestForUi.title}
          </h2>
          <p className="text-sm text-slate-500 mb-6 max-w-2xl">
            {bestForUi.subtitle}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bestForPersonas.map((persona) => (
              <li key={persona.slug}>
                <Link
                  href={`/${safeLang}/cuisine-connectee/${safeCat}/meilleur-pour/${persona.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white px-5 py-4 transition duration-200 hover:border-brand-200 hover:shadow-sm"
                >
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-600 mb-1">
                    {bestForUi.prefix} {c.kicker.toLowerCase()}
                  </span>
                  <span className="text-base font-semibold text-slate-900 group-hover:text-brand-700 transition-colors">
                    {persona.label[safeLang]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* FAQ — category-specific, emits FAQPage JSON-LD */}
      <FaqSection faqs={faqs} title={faqTitle} updatedText={faqUpdatedText} updatedIso={faqModifiedIso} />
      </main>

      {/* Footer */}
      <SiteFooter
        currentLang={safeLang}
      />
    </div>
  )
}
