import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { getDictionary } from '../dictionaries'

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
}> = {
  fr: {
    title: 'À Propos de Home Nura',
    mission_title: 'Notre Mission',
    mission: 'Home Nura est le guide européen de référence pour les airfryers et friteuses sans huile. Notre mission est d\'aider les consommateurs de 6 pays européens à faire le meilleur choix grâce à des tests rigoureux, des comparatifs objectifs et des guides d\'achat complets.',
    methodology_title: 'Notre Méthodologie de Test',
    methodology: 'Chaque airfryer est évalué selon un protocole strict de plus de 200 heures de tests cumulés. Nous testons la qualité de cuisson (frites, poulet, légumes), la consommation énergétique, la facilité d\'utilisation, le niveau sonore, la durabilité et le rapport qualité-prix. Nos tests sont réalisés dans des conditions standardisées pour garantir des comparaisons fiables.',
    criteria_title: 'Nos Critères de Notation (Score Nura /10)',
    criteria: [
      { name: 'Qualité de cuisson', weight: '30%', desc: 'Croustillant, homogénéité, polyvalence des recettes' },
      { name: 'Rapport qualité-prix', weight: '25%', desc: 'Performance par rapport au prix dans chaque marché' },
      { name: 'Facilité d\'utilisation', weight: '15%', desc: 'Interface, programmes, nettoyage, ergonomie' },
      { name: 'Consommation énergétique', weight: '15%', desc: 'Watts consommés, temps de cuisson, efficacité' },
      { name: 'Design & Qualité de fabrication', weight: '15%', desc: 'Matériaux, finitions, encombrement, durabilité' },
    ],
    team_title: 'Notre Équipe',
    team: 'L\'équipe Home Nura est composée de passionnés de cuisine et de technologie, basés en Europe. Nos rédacteurs et testeurs couvrent 6 marchés (France, Allemagne, Royaume-Uni, Espagne, Italie, Pays-Bas) et publient du contenu dans la langue locale de chaque pays pour une expérience authentique.',
    independence_title: 'Notre Indépendance',
    independence: 'Home Nura est un site indépendant. Nous participons au Programme Partenaires Amazon EU, ce qui signifie que nous percevons une commission lorsque vous achetez via nos liens, sans aucun coût supplémentaire pour vous. Cette rémunération n\'influence jamais nos classements ni nos recommandations. Aucun fabricant ne peut payer pour obtenir une meilleure note.',
    contact_title: 'Contact',
    contact: 'Des questions ? Une suggestion ? Contactez-nous à contact@homenura.com. Nous répondons sous 48h.',
  },
  en: {
    title: 'About Home Nura',
    mission_title: 'Our Mission',
    mission: 'Home Nura is Europe\'s leading guide for air fryers. Our mission is to help consumers across 6 European countries make the best choice through rigorous testing, objective comparisons and comprehensive buying guides.',
    methodology_title: 'Our Testing Methodology',
    methodology: 'Each air fryer is evaluated following a strict protocol with over 200 cumulative hours of testing. We test cooking quality (chips, chicken, vegetables), energy consumption, ease of use, noise level, durability and value for money. Our tests are conducted under standardised conditions to ensure reliable comparisons.',
    criteria_title: 'Our Rating Criteria (Nura Score /10)',
    criteria: [
      { name: 'Cooking Quality', weight: '30%', desc: 'Crispiness, evenness, recipe versatility' },
      { name: 'Value for Money', weight: '25%', desc: 'Performance relative to price in each market' },
      { name: 'Ease of Use', weight: '15%', desc: 'Interface, programmes, cleaning, ergonomics' },
      { name: 'Energy Efficiency', weight: '15%', desc: 'Watts consumed, cooking time, efficiency' },
      { name: 'Design & Build Quality', weight: '15%', desc: 'Materials, finish, footprint, durability' },
    ],
    team_title: 'Our Team',
    team: 'The Home Nura team consists of cooking and technology enthusiasts based across Europe. Our writers and testers cover 6 markets (France, Germany, UK, Spain, Italy, Netherlands) and publish content in each country\'s native language for an authentic experience.',
    independence_title: 'Our Independence',
    independence: 'Home Nura is an independent website. We participate in the Amazon EU Associates Programme, which means we earn a commission when you buy through our links at no extra cost to you. This compensation never influences our rankings or recommendations. No manufacturer can pay for a better score.',
    contact_title: 'Contact',
    contact: 'Questions? Suggestions? Get in touch at contact@homenura.com. We reply within 48 hours.',
  },
  de: {
    title: 'Über Home Nura',
    mission_title: 'Unsere Mission',
    mission: 'Home Nura ist Europas führender Ratgeber für Heißluftfritteusen. Unsere Mission ist es, Verbrauchern in 6 europäischen Ländern durch strenge Tests, objektive Vergleiche und umfassende Kaufberatungen bei der besten Wahl zu helfen.',
    methodology_title: 'Unsere Testmethodik',
    methodology: 'Jede Heißluftfritteuse wird nach einem strengen Protokoll mit über 200 kumulierten Teststunden bewertet. Wir testen Garqualität (Pommes, Hähnchen, Gemüse), Energieverbrauch, Bedienkomfort, Lautstärke, Haltbarkeit und Preis-Leistungs-Verhältnis. Unsere Tests werden unter standardisierten Bedingungen durchgeführt, um zuverlässige Vergleiche zu gewährleisten.',
    criteria_title: 'Unsere Bewertungskriterien (Nura Score /10)',
    criteria: [
      { name: 'Garqualität', weight: '30%', desc: 'Knusprigkeit, Gleichmäßigkeit, Rezeptvielseitigkeit' },
      { name: 'Preis-Leistung', weight: '25%', desc: 'Leistung im Verhältnis zum Preis in jedem Markt' },
      { name: 'Bedienkomfort', weight: '15%', desc: 'Bedienung, Programme, Reinigung, Ergonomie' },
      { name: 'Energieeffizienz', weight: '15%', desc: 'Verbrauch in Watt, Garzeit, Effizienz' },
      { name: 'Design & Verarbeitung', weight: '15%', desc: 'Materialien, Verarbeitung, Stellfläche, Haltbarkeit' },
    ],
    team_title: 'Unser Team',
    team: 'Das Home Nura Team besteht aus Koch- und Technik-Enthusiasten in ganz Europa. Unsere Redakteure und Tester decken 6 Märkte ab (Frankreich, Deutschland, UK, Spanien, Italien, Niederlande) und veröffentlichen Inhalte in der jeweiligen Landessprache.',
    independence_title: 'Unsere Unabhängigkeit',
    independence: 'Home Nura ist eine unabhängige Website. Wir nehmen am Amazon EU-Partnerprogramm teil, d.h. wir erhalten eine Provision, wenn Sie über unsere Links kaufen — ohne Mehrkosten für Sie. Diese Vergütung beeinflusst niemals unsere Rankings oder Empfehlungen. Kein Hersteller kann für eine bessere Bewertung bezahlen.',
    contact_title: 'Kontakt',
    contact: 'Fragen? Anregungen? Kontaktieren Sie uns unter contact@homenura.com. Wir antworten innerhalb von 48 Stunden.',
  },
  es: {
    title: 'Sobre Home Nura',
    mission_title: 'Nuestra Misión',
    mission: 'Home Nura es la guía europea de referencia para freidoras de aire. Nuestra misión es ayudar a los consumidores de 6 países europeos a elegir mejor mediante pruebas rigurosas, comparativas objetivas y guías de compra completas.',
    methodology_title: 'Nuestra Metodología de Pruebas',
    methodology: 'Cada freidora de aire se evalúa siguiendo un protocolo estricto con más de 200 horas acumuladas de pruebas. Evaluamos la calidad de cocción (patatas, pollo, verduras), el consumo energético, la facilidad de uso, el nivel de ruido, la durabilidad y la relación calidad-precio. Nuestras pruebas se realizan en condiciones estandarizadas para garantizar comparaciones fiables.',
    criteria_title: 'Nuestros Criterios de Puntuación (Puntuación Nura /10)',
    criteria: [
      { name: 'Calidad de cocción', weight: '30%', desc: 'Crujiente, uniformidad, versatilidad de recetas' },
      { name: 'Relación calidad-precio', weight: '25%', desc: 'Rendimiento en relación al precio en cada mercado' },
      { name: 'Facilidad de uso', weight: '15%', desc: 'Interfaz, programas, limpieza, ergonomía' },
      { name: 'Eficiencia energética', weight: '15%', desc: 'Vatios consumidos, tiempo de cocción, eficiencia' },
      { name: 'Diseño y calidad de construcción', weight: '15%', desc: 'Materiales, acabados, tamaño, durabilidad' },
    ],
    team_title: 'Nuestro Equipo',
    team: 'El equipo de Home Nura está formado por apasionados de la cocina y la tecnología en toda Europa. Nuestros redactores y evaluadores cubren 6 mercados (Francia, Alemania, Reino Unido, España, Italia, Países Bajos) y publican contenido en el idioma local de cada país.',
    independence_title: 'Nuestra Independencia',
    independence: 'Home Nura es un sitio web independiente. Participamos en el Programa de Afiliados de Amazon EU, lo que significa que ganamos una comisión cuando compras a través de nuestros enlaces, sin coste adicional para ti. Esta compensación nunca influye en nuestros rankings ni recomendaciones. Ningún fabricante puede pagar por una mejor puntuación.',
    contact_title: 'Contacto',
    contact: '¿Preguntas? ¿Sugerencias? Escríbenos a contact@homenura.com. Respondemos en menos de 48 horas.',
  },
  it: {
    title: 'Chi Siamo — Home Nura',
    mission_title: 'La Nostra Missione',
    mission: 'Home Nura è la guida europea di riferimento per le friggitrici ad aria. La nostra missione è aiutare i consumatori di 6 paesi europei a fare la scelta migliore attraverso test rigorosi, confronti oggettivi e guide all\'acquisto complete.',
    methodology_title: 'La Nostra Metodologia di Test',
    methodology: 'Ogni friggitrice ad aria viene valutata secondo un protocollo rigoroso con oltre 200 ore cumulative di test. Testiamo la qualità di cottura (patatine, pollo, verdure), il consumo energetico, la facilità d\'uso, il livello di rumore, la durabilità e il rapporto qualità-prezzo. I nostri test vengono condotti in condizioni standardizzate per garantire confronti affidabili.',
    criteria_title: 'I Nostri Criteri di Valutazione (Punteggio Nura /10)',
    criteria: [
      { name: 'Qualità di cottura', weight: '30%', desc: 'Croccantezza, uniformità, versatilità delle ricette' },
      { name: 'Rapporto qualità-prezzo', weight: '25%', desc: 'Prestazioni rispetto al prezzo in ogni mercato' },
      { name: 'Facilità d\'uso', weight: '15%', desc: 'Interfaccia, programmi, pulizia, ergonomia' },
      { name: 'Efficienza energetica', weight: '15%', desc: 'Watt consumati, tempo di cottura, efficienza' },
      { name: 'Design e qualità costruttiva', weight: '15%', desc: 'Materiali, finiture, ingombro, durabilità' },
    ],
    team_title: 'Il Nostro Team',
    team: 'Il team Home Nura è composto da appassionati di cucina e tecnologia in tutta Europa. I nostri redattori e tester coprono 6 mercati (Francia, Germania, UK, Spagna, Italia, Paesi Bassi) e pubblicano contenuti nella lingua locale di ogni paese.',
    independence_title: 'La Nostra Indipendenza',
    independence: 'Home Nura è un sito web indipendente. Partecipiamo al Programma di Affiliazione Amazon EU, il che significa che guadagniamo una commissione quando acquisti tramite i nostri link, senza costi aggiuntivi per te. Questo compenso non influenza mai le nostre classifiche o raccomandazioni. Nessun produttore può pagare per un punteggio migliore.',
    contact_title: 'Contatto',
    contact: 'Domande? Suggerimenti? Scrivici a contact@homenura.com. Rispondiamo entro 48 ore.',
  },
  nl: {
    title: 'Over Home Nura',
    mission_title: 'Onze Missie',
    mission: 'Home Nura is Europa\'s toonaangevende gids voor airfryers. Onze missie is om consumenten in 6 Europese landen te helpen de beste keuze te maken door middel van strenge tests, objectieve vergelijkingen en uitgebreide koopgidsen.',
    methodology_title: 'Onze Testmethodologie',
    methodology: 'Elke airfryer wordt beoordeeld volgens een strikt protocol met meer dan 200 cumulatieve testuren. We testen bakkwaliteit (friet, kip, groenten), energieverbruik, gebruiksgemak, geluidsniveau, duurzaamheid en prijs-kwaliteitverhouding. Onze tests worden uitgevoerd onder gestandaardiseerde omstandigheden om betrouwbare vergelijkingen te garanderen.',
    criteria_title: 'Onze Beoordelingscriteria (Nura Score /10)',
    criteria: [
      { name: 'Bakkwaliteit', weight: '30%', desc: 'Knapperigheid, gelijkmatigheid, receptveelzijdigheid' },
      { name: 'Prijs-kwaliteit', weight: '25%', desc: 'Prestatie ten opzichte van de prijs in elke markt' },
      { name: 'Gebruiksgemak', weight: '15%', desc: 'Bediening, programma\'s, reiniging, ergonomie' },
      { name: 'Energiezuinigheid', weight: '15%', desc: 'Verbruik in watt, bereidingstijd, efficiëntie' },
      { name: 'Design & bouwkwaliteit', weight: '15%', desc: 'Materialen, afwerking, afmeting, duurzaamheid' },
    ],
    team_title: 'Ons Team',
    team: 'Het Home Nura team bestaat uit kook- en technologie-enthousiastelingen in heel Europa. Onze redacteuren en testers bestrijken 6 markten (Frankrijk, Duitsland, VK, Spanje, Italië, Nederland) en publiceren content in de lokale taal van elk land.',
    independence_title: 'Onze Onafhankelijkheid',
    independence: 'Home Nura is een onafhankelijke website. We nemen deel aan het Amazon EU-partnerprogramma, wat betekent dat we een commissie verdienen wanneer je via onze links koopt — zonder extra kosten voor jou. Deze vergoeding beïnvloedt nooit onze rankings of aanbevelingen. Geen enkele fabrikant kan betalen voor een betere score.',
    contact_title: 'Contact',
    contact: 'Vragen? Suggesties? Neem contact op via contact@homenura.com. We reageren binnen 48 uur.',
  },
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const c = content[lang] || content.fr

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans">
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

        <div className="mt-8">
          <Link href={`/${lang}`} className="text-blue-600 font-bold hover:underline">
            &larr; {lang === 'fr' ? 'Retour à l\'accueil' : lang === 'de' ? 'Zurück zur Startseite' : lang === 'es' ? 'Volver al inicio' : lang === 'it' ? 'Torna alla home' : lang === 'nl' ? 'Terug naar home' : 'Back to home'}
          </Link>
        </div>
      </main>
    </div>
  )
}
