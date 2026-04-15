import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getNonce } from '@/lib/nonce'

const SUPPORTED_LANGS = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = (SUPPORTED_LANGS as readonly string[]).includes(lang) ? lang : 'fr'
  const c = content[safeLang] || content.fr
  const canonicalUrl = `https://homenura.com/${safeLang}/a-propos`
  return {
    title: `${c.title} | Home Nura`,
    description: c.mission,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((l) => [l, `https://homenura.com/${l}/a-propos`])
      ),
    },
    openGraph: {
      title: c.title,
      description: c.mission,
      url: canonicalUrl,
      type: 'profile',
      images: [
        {
          url: 'https://homenura.com/og-image.png',
          width: 1200,
          height: 630,
          alt: c.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: c.title,
      description: c.mission,
      images: ['https://homenura.com/og-image.png'],
    },
  }
}

const content: Record<string, {
  title: string
  mission_title: string
  mission: string
  methodology_title: string
  methodology: string
  criteria_title: string
  criteria: { name: string; weight: string; desc: string }[]
  team_title: string
  team: string
  independence_title: string
  independence: string
  contact_title: string
  contact: string
  eeat_title: string
  eeat_experience: string
  eeat_expertise: string
  eeat_authority: string
  eeat_trust: string
  founder_name: string
  founder_title: string
  founder_bio: string
  stats_title: string
  stats: { label: string; value: string }[]
}> = {
  fr: {
    title: 'À Propos de Home Nura',
    mission_title: 'Notre Mission',
    mission: 'Home Nura est un guide européen indépendant dédié aux airfryers et friteuses sans huile. Notre mission est d\'aider les consommateurs de 6 pays européens à faire le meilleur choix grâce à des comparatifs honnêtes, un protocole de notation transparent et une sélection mise à jour régulièrement.',
    methodology_title: 'Notre Méthodologie',
    methodology: 'Chaque airfryer de notre sélection est évalué selon un protocole détaillé combinant analyse des fiches techniques constructeur, croisement des retours utilisateurs vérifiés (Amazon, Google) et prise en compte des tests publiés par la presse spécialisée. Nous notons la qualité de cuisson, la consommation énergétique, la facilité d\'utilisation, le niveau sonore, la durabilité et le rapport qualité-prix.',
    criteria_title: 'Nos Critères de Notation (Score Nura /10)',
    criteria: [
      { name: 'Qualité de cuisson', weight: '30%', desc: 'Croustillant, homogénéité, polyvalence des recettes' },
      { name: 'Rapport qualité-prix', weight: '25%', desc: 'Performance par rapport au prix dans chaque marché' },
      { name: 'Facilité d\'utilisation', weight: '15%', desc: 'Interface, programmes, nettoyage, ergonomie' },
      { name: 'Consommation énergétique', weight: '15%', desc: 'Watts consommés, temps de cuisson, efficacité' },
      { name: 'Design & Qualité de fabrication', weight: '15%', desc: 'Matériaux, finitions, encombrement, durabilité' },
    ],
    team_title: 'Notre Équipe',
    team: 'Home Nura est animé par une petite équipe de passionnés de cuisine et de technologie, basée en Europe. Nous couvrons 6 marchés (France, Allemagne, Royaume-Uni, Espagne, Italie, Pays-Bas) et publions dans la langue locale de chaque pays pour une expérience authentique.',
    independence_title: 'Notre Indépendance',
    independence: 'Home Nura est un site indépendant. Nous participons au Programme Partenaires Amazon EU, ce qui signifie que nous percevons une commission lorsque vous achetez via nos liens, sans aucun coût supplémentaire pour vous. Cette rémunération n\'influence jamais nos classements ni nos recommandations. Aucun fabricant ne peut payer pour obtenir une meilleure note.',
    contact_title: 'Contact',
    contact: 'Des questions ? Une suggestion ? Contactez-nous à contact@homenura.com. Nous répondons sous 48h.',
    eeat_title: 'Nos Engagements de Qualité',
    eeat_experience: 'Expérience : Depuis le lancement de Home Nura en 2024, nous analysons et comparons en continu les airfryers disponibles sur les marchés européens. Notre sélection est mise à jour au fil des sorties constructeur et des évolutions de prix.',
    eeat_expertise: 'Expertise : Chaque avis est construit à partir de fiches techniques officielles, du croisement des retours utilisateurs vérifiés et de la comparaison directe entre modèles d\'une même gamme. Notre protocole de notation est public et détaillé sur cette page.',
    eeat_authority: 'Autorité : Notre Score Nura synthétise des critères objectifs et pondérés. Il est conçu comme un repère simple et transparent pour guider le choix des lecteurs parmi les modèles disponibles en Europe.',
    eeat_trust: 'Confiance : 100% indépendant. Aucun fabricant ne peut acheter une meilleure note. Notre seule source de revenus est le Programme Partenaires Amazon, signalé sur chaque lien. Notre méthodologie et nos critères sont publics.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Fondateur & Rédacteur en Chef',
    founder_bio: 'Passionné de technologie et de cuisine saine, Miguel a lancé Home Nura en 2024 face au manque de comparatifs fiables et indépendants dédiés aux airfryers en Europe. Il supervise personnellement la méthodologie de notation et garantit l\'indépendance éditoriale du site.',
    stats_title: 'Home Nura en Chiffres',
    stats: [
      { label: 'Modèles analysés et comparés', value: '12+' },
      { label: 'Critères de notation pondérés', value: '5' },
      { label: 'Pays européens couverts', value: '6' },
      { label: 'Langues disponibles', value: '6' },
      { label: 'Fréquence de mise à jour', value: 'Mensuelle' },
      { label: 'En ligne depuis', value: '2024' },
    ],
  },
  en: {
    title: 'About Home Nura',
    mission_title: 'Our Mission',
    mission: 'Home Nura is an independent European guide dedicated to air fryers. Our mission is to help consumers across 6 European countries make the best choice through honest comparisons, a transparent scoring protocol and a regularly updated selection.',
    methodology_title: 'Our Methodology',
    methodology: 'Each air fryer in our selection is evaluated using a detailed protocol that combines analysis of manufacturer specifications, cross-checking of verified user reviews (Amazon, Google) and consideration of tests published by specialised press. We rate cooking quality, energy consumption, ease of use, noise level, durability and value for money.',
    criteria_title: 'Our Rating Criteria (Nura Score /10)',
    criteria: [
      { name: 'Cooking Quality', weight: '30%', desc: 'Crispiness, evenness, recipe versatility' },
      { name: 'Value for Money', weight: '25%', desc: 'Performance relative to price in each market' },
      { name: 'Ease of Use', weight: '15%', desc: 'Interface, programmes, cleaning, ergonomics' },
      { name: 'Energy Efficiency', weight: '15%', desc: 'Watts consumed, cooking time, efficiency' },
      { name: 'Design & Build Quality', weight: '15%', desc: 'Materials, finish, footprint, durability' },
    ],
    team_title: 'Our Team',
    team: 'Home Nura is run by a small team of cooking and technology enthusiasts based in Europe. We cover 6 markets (France, Germany, UK, Spain, Italy, Netherlands) and publish content in each country\'s native language for an authentic experience.',
    independence_title: 'Our Independence',
    independence: 'Home Nura is an independent website. We participate in the Amazon EU Associates Programme, which means we earn a commission when you buy through our links at no extra cost to you. This compensation never influences our rankings or recommendations. No manufacturer can pay for a better score.',
    contact_title: 'Contact',
    contact: 'Questions? Suggestions? Get in touch at contact@homenura.com. We reply within 48 hours.',
    eeat_title: 'Our Quality Commitments',
    eeat_experience: 'Experience: Since Home Nura launched in 2024, we have been continuously analysing and comparing the air fryers available across European markets. Our selection is updated as new models are released and prices change.',
    eeat_expertise: 'Expertise: Each review is built from official specification sheets, cross-checking of verified user feedback and direct comparison between models in the same range. Our scoring protocol is public and detailed on this page.',
    eeat_authority: 'Authority: Our Nura Score synthesises objective, weighted criteria. It is designed as a simple and transparent benchmark to guide readers in choosing from the models available in Europe.',
    eeat_trust: 'Trust: 100% independent. No manufacturer can buy a better score. Our only revenue source is the Amazon Associates Programme, disclosed on every link. Our methodology and criteria are public.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Founder & Editor-in-Chief',
    founder_bio: 'Passionate about technology and healthy cooking, Miguel launched Home Nura in 2024 to address the lack of reliable and independent air fryer comparisons in Europe. He personally oversees the scoring methodology and guarantees the editorial independence of the site.',
    stats_title: 'Home Nura in Numbers',
    stats: [
      { label: 'Models analysed and compared', value: '12+' },
      { label: 'Weighted rating criteria', value: '5' },
      { label: 'European countries covered', value: '6' },
      { label: 'Languages available', value: '6' },
      { label: 'Update frequency', value: 'Monthly' },
      { label: 'Online since', value: '2024' },
    ],
  },
  de: {
    title: 'Über Home Nura',
    mission_title: 'Unsere Mission',
    mission: 'Home Nura ist ein unabhängiger europäischer Ratgeber für Heißluftfritteusen. Unsere Mission ist es, Verbrauchern in 6 europäischen Ländern durch ehrliche Vergleiche, ein transparentes Bewertungsprotokoll und eine regelmäßig aktualisierte Auswahl bei der besten Wahl zu helfen.',
    methodology_title: 'Unsere Methodik',
    methodology: 'Jede Heißluftfritteuse unserer Auswahl wird nach einem detaillierten Protokoll bewertet, das die Analyse der Hersteller-Datenblätter, den Abgleich verifizierter Nutzerbewertungen (Amazon, Google) und die Berücksichtigung von Tests der Fachpresse kombiniert. Wir bewerten Garqualität, Energieverbrauch, Bedienkomfort, Lautstärke, Haltbarkeit und Preis-Leistungs-Verhältnis.',
    criteria_title: 'Unsere Bewertungskriterien (Nura Score /10)',
    criteria: [
      { name: 'Garqualität', weight: '30%', desc: 'Knusprigkeit, Gleichmäßigkeit, Rezeptvielseitigkeit' },
      { name: 'Preis-Leistung', weight: '25%', desc: 'Leistung im Verhältnis zum Preis in jedem Markt' },
      { name: 'Bedienkomfort', weight: '15%', desc: 'Bedienung, Programme, Reinigung, Ergonomie' },
      { name: 'Energieeffizienz', weight: '15%', desc: 'Verbrauch in Watt, Garzeit, Effizienz' },
      { name: 'Design & Verarbeitung', weight: '15%', desc: 'Materialien, Verarbeitung, Stellfläche, Haltbarkeit' },
    ],
    team_title: 'Unser Team',
    team: 'Home Nura wird von einem kleinen Team von Koch- und Technik-Enthusiasten in Europa betrieben. Wir decken 6 Märkte ab (Frankreich, Deutschland, UK, Spanien, Italien, Niederlande) und veröffentlichen Inhalte in der jeweiligen Landessprache.',
    independence_title: 'Unsere Unabhängigkeit',
    independence: 'Home Nura ist eine unabhängige Website. Wir nehmen am Amazon EU-Partnerprogramm teil, d.h. wir erhalten eine Provision, wenn Sie über unsere Links kaufen — ohne Mehrkosten für Sie. Diese Vergütung beeinflusst niemals unsere Rankings oder Empfehlungen. Kein Hersteller kann für eine bessere Bewertung bezahlen.',
    contact_title: 'Kontakt',
    contact: 'Fragen? Anregungen? Kontaktieren Sie uns unter contact@homenura.com. Wir antworten innerhalb von 48 Stunden.',
    eeat_title: 'Unsere Qualitätsversprechen',
    eeat_experience: 'Erfahrung: Seit dem Start von Home Nura im Jahr 2024 analysieren und vergleichen wir kontinuierlich die auf den europäischen Märkten erhältlichen Heißluftfritteusen. Unsere Auswahl wird bei neuen Modellen und Preisänderungen aktualisiert.',
    eeat_expertise: 'Expertise: Jede Bewertung basiert auf offiziellen Datenblättern, dem Abgleich verifizierter Nutzerrückmeldungen und dem direkten Vergleich zwischen Modellen derselben Reihe. Unser Bewertungsprotokoll ist öffentlich und auf dieser Seite detailliert beschrieben.',
    eeat_authority: 'Autorität: Unser Nura Score fasst objektive, gewichtete Kriterien zusammen. Er ist als einfacher und transparenter Maßstab konzipiert, um Lesern bei der Auswahl aus den in Europa verfügbaren Modellen zu helfen.',
    eeat_trust: 'Vertrauen: 100% unabhängig. Kein Hersteller kann eine bessere Note kaufen. Unsere einzige Einnahmequelle ist das Amazon-Partnerprogramm, das bei jedem Link gekennzeichnet wird. Unsere Methodik und Kriterien sind öffentlich.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Gründer & Chefredakteur',
    founder_bio: 'Leidenschaftlich für Technologie und gesundes Kochen, startete Miguel Home Nura im Jahr 2024, um dem Mangel an zuverlässigen und unabhängigen Heißluftfritteusen-Vergleichen in Europa zu begegnen. Er überwacht persönlich die Bewertungsmethodik und garantiert die redaktionelle Unabhängigkeit der Website.',
    stats_title: 'Home Nura in Zahlen',
    stats: [
      { label: 'Analysierte und verglichene Modelle', value: '12+' },
      { label: 'Gewichtete Bewertungskriterien', value: '5' },
      { label: 'Europäische Länder abgedeckt', value: '6' },
      { label: 'Verfügbare Sprachen', value: '6' },
      { label: 'Aktualisierungsfrequenz', value: 'Monatlich' },
      { label: 'Online seit', value: '2024' },
    ],
  },
  es: {
    title: 'Sobre Home Nura',
    mission_title: 'Nuestra Misión',
    mission: 'Home Nura es una guía europea independiente dedicada a las freidoras de aire. Nuestra misión es ayudar a los consumidores de 6 países europeos a elegir mejor mediante comparativas honestas, un protocolo de puntuación transparente y una selección actualizada regularmente.',
    methodology_title: 'Nuestra Metodología',
    methodology: 'Cada freidora de aire de nuestra selección se evalúa siguiendo un protocolo detallado que combina el análisis de las fichas técnicas del fabricante, el cruce de opiniones verificadas de usuarios (Amazon, Google) y la consideración de las pruebas publicadas por la prensa especializada. Evaluamos la calidad de cocción, el consumo energético, la facilidad de uso, el nivel de ruido, la durabilidad y la relación calidad-precio.',
    criteria_title: 'Nuestros Criterios de Puntuación (Puntuación Nura /10)',
    criteria: [
      { name: 'Calidad de cocción', weight: '30%', desc: 'Crujiente, uniformidad, versatilidad de recetas' },
      { name: 'Relación calidad-precio', weight: '25%', desc: 'Rendimiento en relación al precio en cada mercado' },
      { name: 'Facilidad de uso', weight: '15%', desc: 'Interfaz, programas, limpieza, ergonomía' },
      { name: 'Eficiencia energética', weight: '15%', desc: 'Vatios consumidos, tiempo de cocción, eficiencia' },
      { name: 'Diseño y calidad de construcción', weight: '15%', desc: 'Materiales, acabados, tamaño, durabilidad' },
    ],
    team_title: 'Nuestro Equipo',
    team: 'Home Nura está dirigido por un pequeño equipo de apasionados de la cocina y la tecnología, con sede en Europa. Cubrimos 6 mercados (Francia, Alemania, Reino Unido, España, Italia, Países Bajos) y publicamos contenido en el idioma local de cada país.',
    independence_title: 'Nuestra Independencia',
    independence: 'Home Nura es un sitio web independiente. Participamos en el Programa de Afiliados de Amazon EU, lo que significa que ganamos una comisión cuando compras a través de nuestros enlaces, sin coste adicional para ti. Esta compensación nunca influye en nuestros rankings ni recomendaciones. Ningún fabricante puede pagar por una mejor puntuación.',
    contact_title: 'Contacto',
    contact: '¿Preguntas? ¿Sugerencias? Escríbenos a contact@homenura.com. Respondemos en menos de 48 horas.',
    eeat_title: 'Nuestros Compromisos de Calidad',
    eeat_experience: 'Experiencia: Desde el lanzamiento de Home Nura en 2024, analizamos y comparamos de forma continua las freidoras de aire disponibles en los mercados europeos. Nuestra selección se actualiza con los nuevos lanzamientos y cambios de precio.',
    eeat_expertise: 'Experiencia técnica: Cada reseña se construye a partir de fichas técnicas oficiales, el cruce de opiniones verificadas de usuarios y la comparación directa entre modelos de la misma gama. Nuestro protocolo de puntuación es público y está detallado en esta página.',
    eeat_authority: 'Autoridad: Nuestra Puntuación Nura sintetiza criterios objetivos y ponderados. Está pensada como una referencia simple y transparente para guiar a los lectores entre los modelos disponibles en Europa.',
    eeat_trust: 'Confianza: 100% independiente. Ningún fabricante puede comprar una mejor puntuación. Nuestra única fuente de ingresos es el Programa de Afiliados de Amazon, señalado en cada enlace. Nuestra metodología y criterios son públicos.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Fundador y Editor en Jefe',
    founder_bio: 'Apasionado por la tecnología y la cocina saludable, Miguel lanzó Home Nura en 2024 para abordar la falta de comparativas fiables e independientes de freidoras de aire en Europa. Supervisa personalmente la metodología de puntuación y garantiza la independencia editorial del sitio.',
    stats_title: 'Home Nura en Cifras',
    stats: [
      { label: 'Modelos analizados y comparados', value: '12+' },
      { label: 'Criterios de puntuación ponderados', value: '5' },
      { label: 'Países europeos cubiertos', value: '6' },
      { label: 'Idiomas disponibles', value: '6' },
      { label: 'Frecuencia de actualización', value: 'Mensual' },
      { label: 'En línea desde', value: '2024' },
    ],
  },
  it: {
    title: 'Chi Siamo — Home Nura',
    mission_title: 'La Nostra Missione',
    mission: 'Home Nura è una guida europea indipendente dedicata alle friggitrici ad aria. La nostra missione è aiutare i consumatori di 6 paesi europei a fare la scelta migliore attraverso confronti onesti, un protocollo di valutazione trasparente e una selezione aggiornata regolarmente.',
    methodology_title: 'La Nostra Metodologia',
    methodology: 'Ogni friggitrice ad aria della nostra selezione viene valutata secondo un protocollo dettagliato che combina l\'analisi delle schede tecniche del produttore, l\'incrocio delle recensioni verificate degli utenti (Amazon, Google) e la considerazione dei test pubblicati dalla stampa specializzata. Valutiamo la qualità di cottura, il consumo energetico, la facilità d\'uso, il livello di rumore, la durabilità e il rapporto qualità-prezzo.',
    criteria_title: 'I Nostri Criteri di Valutazione (Punteggio Nura /10)',
    criteria: [
      { name: 'Qualità di cottura', weight: '30%', desc: 'Croccantezza, uniformità, versatilità delle ricette' },
      { name: 'Rapporto qualità-prezzo', weight: '25%', desc: 'Prestazioni rispetto al prezzo in ogni mercato' },
      { name: 'Facilità d\'uso', weight: '15%', desc: 'Interfaccia, programmi, pulizia, ergonomia' },
      { name: 'Efficienza energetica', weight: '15%', desc: 'Watt consumati, tempo di cottura, efficienza' },
      { name: 'Design e qualità costruttiva', weight: '15%', desc: 'Materiali, finiture, ingombro, durabilità' },
    ],
    team_title: 'Il Nostro Team',
    team: 'Home Nura è animato da un piccolo team di appassionati di cucina e tecnologia con sede in Europa. Copriamo 6 mercati (Francia, Germania, UK, Spagna, Italia, Paesi Bassi) e pubblichiamo contenuti nella lingua locale di ogni paese.',
    independence_title: 'La Nostra Indipendenza',
    independence: 'Home Nura è un sito web indipendente. Partecipiamo al Programma di Affiliazione Amazon EU, il che significa che guadagniamo una commissione quando acquisti tramite i nostri link, senza costi aggiuntivi per te. Questo compenso non influenza mai le nostre classifiche o raccomandazioni. Nessun produttore può pagare per un punteggio migliore.',
    contact_title: 'Contatto',
    contact: 'Domande? Suggerimenti? Scrivici a contact@homenura.com. Rispondiamo entro 48 ore.',
    eeat_title: 'I Nostri Impegni di Qualità',
    eeat_experience: 'Esperienza: Dal lancio di Home Nura nel 2024, analizziamo e confrontiamo in modo continuo le friggitrici ad aria disponibili sui mercati europei. La nostra selezione è aggiornata con le nuove uscite e i cambiamenti di prezzo.',
    eeat_expertise: 'Competenza: Ogni recensione si basa su schede tecniche ufficiali, sull\'incrocio dei feedback verificati degli utenti e sul confronto diretto tra modelli della stessa gamma. Il nostro protocollo di valutazione è pubblico e dettagliato in questa pagina.',
    eeat_authority: 'Autorevolezza: Il nostro Punteggio Nura sintetizza criteri oggettivi e ponderati. È pensato come un riferimento semplice e trasparente per guidare i lettori tra i modelli disponibili in Europa.',
    eeat_trust: 'Fiducia: 100% indipendente. Nessun produttore può acquistare un punteggio migliore. La nostra unica fonte di reddito è il Programma di Affiliazione Amazon, segnalato su ogni link. La nostra metodologia e i nostri criteri sono pubblici.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Fondatore e Caporedattore',
    founder_bio: 'Appassionato di tecnologia e cucina sana, Miguel ha lanciato Home Nura nel 2024 per colmare la mancanza di confronti affidabili e indipendenti sulle friggitrici ad aria in Europa. Supervisiona personalmente la metodologia di valutazione e garantisce l\'indipendenza editoriale del sito.',
    stats_title: 'Home Nura in Numeri',
    stats: [
      { label: 'Modelli analizzati e confrontati', value: '12+' },
      { label: 'Criteri di valutazione ponderati', value: '5' },
      { label: 'Paesi europei coperti', value: '6' },
      { label: 'Lingue disponibili', value: '6' },
      { label: 'Frequenza di aggiornamento', value: 'Mensile' },
      { label: 'Online dal', value: '2024' },
    ],
  },
  nl: {
    title: 'Over Home Nura',
    mission_title: 'Onze Missie',
    mission: 'Home Nura is een onafhankelijke Europese gids voor airfryers. Onze missie is om consumenten in 6 Europese landen te helpen de beste keuze te maken door middel van eerlijke vergelijkingen, een transparant scoreprotocol en een regelmatig bijgewerkte selectie.',
    methodology_title: 'Onze Methodologie',
    methodology: 'Elke airfryer in onze selectie wordt beoordeeld volgens een gedetailleerd protocol dat de analyse van de fabrikantspecificaties, het kruisen van geverifieerde gebruikersbeoordelingen (Amazon, Google) en het meewegen van tests gepubliceerd door de vakpers combineert. We beoordelen bakkwaliteit, energieverbruik, gebruiksgemak, geluidsniveau, duurzaamheid en prijs-kwaliteitverhouding.',
    criteria_title: 'Onze Beoordelingscriteria (Nura Score /10)',
    criteria: [
      { name: 'Bakkwaliteit', weight: '30%', desc: 'Knapperigheid, gelijkmatigheid, receptveelzijdigheid' },
      { name: 'Prijs-kwaliteit', weight: '25%', desc: 'Prestatie ten opzichte van de prijs in elke markt' },
      { name: 'Gebruiksgemak', weight: '15%', desc: 'Bediening, programma\'s, reiniging, ergonomie' },
      { name: 'Energiezuinigheid', weight: '15%', desc: 'Verbruik in watt, bereidingstijd, efficiëntie' },
      { name: 'Design & bouwkwaliteit', weight: '15%', desc: 'Materialen, afwerking, afmeting, duurzaamheid' },
    ],
    team_title: 'Ons Team',
    team: 'Home Nura wordt gerund door een klein team van kook- en technologie-enthousiastelingen in Europa. We bestrijken 6 markten (Frankrijk, Duitsland, VK, Spanje, Italië, Nederland) en publiceren content in de lokale taal van elk land.',
    independence_title: 'Onze Onafhankelijkheid',
    independence: 'Home Nura is een onafhankelijke website. We nemen deel aan het Amazon EU-partnerprogramma, wat betekent dat we een commissie verdienen wanneer je via onze links koopt — zonder extra kosten voor jou. Deze vergoeding beïnvloedt nooit onze rankings of aanbevelingen. Geen enkele fabrikant kan betalen voor een betere score.',
    contact_title: 'Contact',
    contact: 'Vragen? Suggesties? Neem contact op via contact@homenura.com. We reageren binnen 48 uur.',
    eeat_title: 'Onze Kwaliteitsbeloften',
    eeat_experience: 'Ervaring: Sinds de lancering van Home Nura in 2024 analyseren en vergelijken we doorlopend de airfryers die beschikbaar zijn op de Europese markten. Onze selectie wordt bijgewerkt bij nieuwe modellen en prijswijzigingen.',
    eeat_expertise: 'Expertise: Elke beoordeling is opgebouwd uit officiële specificaties, het kruisen van geverifieerde gebruikersfeedback en de directe vergelijking tussen modellen uit dezelfde reeks. Ons scoreprotocol is openbaar en op deze pagina gedetailleerd.',
    eeat_authority: 'Autoriteit: Onze Nura Score vat objectieve, gewogen criteria samen. Hij is ontworpen als een eenvoudige en transparante maatstaf om lezers te helpen kiezen uit de in Europa beschikbare modellen.',
    eeat_trust: 'Vertrouwen: 100% onafhankelijk. Geen enkele fabrikant kan een betere score kopen. Onze enige inkomstenbron is het Amazon-partnerprogramma, aangegeven bij elke link. Onze methodologie en criteria zijn openbaar.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Oprichter & Hoofdredacteur',
    founder_bio: 'Gepassioneerd door technologie en gezond koken, lanceerde Miguel Home Nura in 2024 om het gebrek aan betrouwbare en onafhankelijke airfryer-vergelijkingen in Europa aan te pakken. Hij houdt persoonlijk toezicht op de scoremethodologie en garandeert de redactionele onafhankelijkheid van de site.',
    stats_title: 'Home Nura in Cijfers',
    stats: [
      { label: 'Geanalyseerde en vergeleken modellen', value: '12+' },
      { label: 'Gewogen beoordelingscriteria', value: '5' },
      { label: 'Europese landen gedekt', value: '6' },
      { label: 'Beschikbare talen', value: '6' },
      { label: 'Updatefrequentie', value: 'Maandelijks' },
      { label: 'Online sinds', value: '2024' },
    ],
  },
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const c = content[lang] || content.fr
  const nonce = await getNonce()

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-hidden">
      {/* Person JSON-LD Schema */}
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: c.founder_name,
          jobTitle: c.founder_title,
          description: c.founder_bio,
          worksFor: {
            '@type': 'Organization',
            name: 'Home Nura',
            url: 'https://homenura.com',
          },
          knowsAbout: ['Air Fryers', 'Kitchen Appliances', 'Product Testing', 'Consumer Electronics'],
        }) }}
      />

      {/* BreadcrumbList JSON-LD Schema */}
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: lang === 'fr' ? 'Accueil' : lang === 'de' ? 'Startseite' : lang === 'es' ? 'Inicio' : lang === 'it' ? 'Home' : lang === 'nl' ? 'Home' : 'Home', item: `https://homenura.com/${lang}` },
            { '@type': 'ListItem', position: 2, name: c.title, item: `https://homenura.com/${lang}/a-propos` },
          ],
        }) }}
      />

      <Navbar currentLang={lang} />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-black mb-12">{c.title}</h1>

        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">{c.mission_title}</h2>
          <p className="text-slate-600 leading-relaxed">{c.mission}</p>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">{c.methodology_title}</h2>
          <p className="text-slate-600 leading-relaxed">{c.methodology}</p>
        </section>

        {/* Criteria */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">{c.criteria_title}</h2>
          <div className="space-y-4">
            {c.criteria.map((criterion, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-slate-900">{criterion.name}</h3>
                  <span className="text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{criterion.weight}</span>
                </div>
                <p className="text-sm text-slate-500">{criterion.desc}</p>
                <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    style={{ width: criterion.weight }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">{c.team_title}</h2>
          <p className="text-slate-600 leading-relaxed">{c.team}</p>
        </section>

        {/* Independence */}
        <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">{c.independence_title}</h2>
          <p className="text-slate-600 leading-relaxed">{c.independence}</p>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">{c.contact_title}</h2>
          <p className="text-slate-600 leading-relaxed">{c.contact}</p>
        </section>

        {/* Stats */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">{c.stats_title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {c.stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 text-center">
                <p className="text-3xl font-black text-blue-600 mb-2">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* E-E-A-T */}
        <section className="mb-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">{c.eeat_title}</h2>
          <div className="space-y-4">
            <p className="text-slate-600 leading-relaxed">{c.eeat_experience}</p>
            <p className="text-slate-600 leading-relaxed">{c.eeat_expertise}</p>
            <p className="text-slate-600 leading-relaxed">{c.eeat_authority}</p>
            <p className="text-slate-600 leading-relaxed">{c.eeat_trust}</p>
          </div>
        </section>

        {/* Founder */}
        <section className="mb-12 bg-white rounded-2xl border border-slate-200 p-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl font-black text-white">{c.founder_name.split(' ').map(n => n[0]).join('')}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-1">{c.founder_name}</h3>
            <p className="text-sm font-semibold text-blue-600 mb-4">{c.founder_title}</p>
            <p className="text-slate-600 leading-relaxed max-w-2xl">{c.founder_bio}</p>
          </div>
        </section>

        <div className="mt-8">
          <Link href={`/${lang}`} className="text-blue-600 font-bold hover:underline">
            &larr; {lang === 'fr' ? 'Retour à l\'accueil' : lang === 'de' ? 'Zurück zur Startseite' : lang === 'es' ? 'Volver al inicio' : lang === 'it' ? 'Torna alla home' : lang === 'nl' ? 'Terug naar home' : 'Back to home'}
          </Link>
        </div>
      </main>
    </div>
  )
}
