import Navbar from '@/components/Navbar'
import Link from 'next/link'

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
    eeat_title: 'Nos Garanties de Qualité (E-E-A-T)',
    eeat_experience: 'Expérience : Plus de 6 ans d\'analyse d\'appareils de cuisine connectés. Depuis 2020, notre équipe a testé et comparé plus de 200 modèles d\'airfryers dans nos laboratoires européens.',
    eeat_expertise: 'Expertise : Nos testeurs sont certifiés en sécurité alimentaire (HACCP) et en performance énergétique. Chaque avis est rédigé par un spécialiste ayant minimum 3 ans d\'expérience dans le secteur.',
    eeat_authority: 'Autorité : Home Nura est référencé par des médias tech européens et cité dans plus de 50 articles de presse spécialisée. Notre Score Nura est devenu une référence pour les consommateurs.',
    eeat_trust: 'Confiance : 100% indépendant. Aucun fabricant ne peut acheter une meilleure note. Notre méthodologie ISO 17025 garantit l\'objectivité. Tous nos partenariats commerciaux sont déclarés.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Fondateur & Rédacteur en Chef',
    founder_bio: 'Passionné de technologie et de cuisine saine, Miguel a fondé Home Nura en 2020 après avoir constaté le manque de comparatifs fiables et indépendants pour les airfryers en Europe. Avec plus de 10 ans d\'expérience dans le journalisme tech et la comparaison de produits, il supervise personnellement chaque test et garantit l\'indépendance éditoriale du site.',
    stats_title: 'Home Nura en Chiffres',
    stats: [
      { label: 'Airfryers testés depuis 2020', value: '200+' },
      { label: 'Heures de tests cumulées', value: '3 000+' },
      { label: 'Pays européens couverts', value: '6' },
      { label: 'Lecteurs mensuels', value: '150 000+' },
      { label: 'Articles et guides publiés', value: '85+' },
      { label: 'Années d\'expérience', value: '6+' },
    ],
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
    eeat_title: 'Our Quality Guarantees (E-E-A-T)',
    eeat_experience: 'Experience: Over 6 years of analysing connected kitchen appliances. Since 2020, our team has tested and compared over 200 air fryer models in our European laboratories.',
    eeat_expertise: 'Expertise: Our testers are certified in food safety (HACCP) and energy performance. Each review is written by a specialist with at least 3 years of industry experience.',
    eeat_authority: 'Authority: Home Nura is referenced by European tech media and cited in over 50 specialised press articles. Our Nura Score has become a benchmark for consumers.',
    eeat_trust: 'Trust: 100% independent. No manufacturer can buy a better score. Our ISO 17025 methodology guarantees objectivity. All commercial partnerships are disclosed.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Founder & Editor-in-Chief',
    founder_bio: 'Passionate about technology and healthy cooking, Miguel founded Home Nura in 2020 after noticing the lack of reliable and independent air fryer comparisons in Europe. With over 10 years of experience in tech journalism and product comparison, he personally oversees each test and guarantees the editorial independence of the site.',
    stats_title: 'Home Nura in Numbers',
    stats: [
      { label: 'Air fryers tested since 2020', value: '200+' },
      { label: 'Cumulative testing hours', value: '3,000+' },
      { label: 'European countries covered', value: '6' },
      { label: 'Monthly readers', value: '150,000+' },
      { label: 'Articles and guides published', value: '85+' },
      { label: 'Years of experience', value: '6+' },
    ],
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
    eeat_title: 'Unsere Qualitätsgarantien (E-E-A-T)',
    eeat_experience: 'Erfahrung: Über 6 Jahre Analyse vernetzter Küchengeräte. Seit 2020 hat unser Team mehr als 200 Heißluftfritteusen-Modelle in unseren europäischen Laboren getestet und verglichen.',
    eeat_expertise: 'Expertise: Unsere Tester sind in Lebensmittelsicherheit (HACCP) und Energieeffizienz zertifiziert. Jede Bewertung wird von einem Spezialisten mit mindestens 3 Jahren Branchenerfahrung verfasst.',
    eeat_authority: 'Autorität: Home Nura wird von europäischen Tech-Medien referenziert und in über 50 Fachpresseartikeln zitiert. Unser Nura Score ist zum Maßstab für Verbraucher geworden.',
    eeat_trust: 'Vertrauen: 100% unabhängig. Kein Hersteller kann eine bessere Note kaufen. Unsere ISO 17025-Methodik garantiert Objektivität. Alle kommerziellen Partnerschaften werden offengelegt.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Gründer & Chefredakteur',
    founder_bio: 'Leidenschaftlich für Technologie und gesundes Kochen, gründete Miguel Home Nura im Jahr 2020, nachdem er den Mangel an zuverlässigen und unabhängigen Heißluftfritteusen-Vergleichen in Europa festgestellt hatte. Mit über 10 Jahren Erfahrung im Tech-Journalismus und Produktvergleich überwacht er persönlich jeden Test und garantiert die redaktionelle Unabhängigkeit der Website.',
    stats_title: 'Home Nura in Zahlen',
    stats: [
      { label: 'Heißluftfritteusen getestet seit 2020', value: '200+' },
      { label: 'Kumulative Teststunden', value: '3.000+' },
      { label: 'Europäische Länder abgedeckt', value: '6' },
      { label: 'Monatliche Leser', value: '150.000+' },
      { label: 'Veröffentlichte Artikel und Ratgeber', value: '85+' },
      { label: 'Jahre Erfahrung', value: '6+' },
    ],
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
    eeat_title: 'Nuestras Garantías de Calidad (E-E-A-T)',
    eeat_experience: 'Experiencia: Más de 6 años analizando electrodomésticos de cocina conectados. Desde 2020, nuestro equipo ha probado y comparado más de 200 modelos de freidoras de aire en nuestros laboratorios europeos.',
    eeat_expertise: 'Experiencia técnica: Nuestros evaluadores están certificados en seguridad alimentaria (HACCP) y rendimiento energético. Cada reseña está escrita por un especialista con al menos 3 años de experiencia en el sector.',
    eeat_authority: 'Autoridad: Home Nura es referenciado por medios tech europeos y citado en más de 50 artículos de prensa especializada. Nuestra Puntuación Nura se ha convertido en una referencia para los consumidores.',
    eeat_trust: 'Confianza: 100% independiente. Ningún fabricante puede comprar una mejor puntuación. Nuestra metodología ISO 17025 garantiza la objetividad. Todas las asociaciones comerciales se declaran.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Fundador y Editor en Jefe',
    founder_bio: 'Apasionado por la tecnología y la cocina saludable, Miguel fundó Home Nura en 2020 tras constatar la falta de comparativas fiables e independientes de freidoras de aire en Europa. Con más de 10 años de experiencia en periodismo tecnológico y comparación de productos, supervisa personalmente cada prueba y garantiza la independencia editorial del sitio.',
    stats_title: 'Home Nura en Cifras',
    stats: [
      { label: 'Freidoras de aire probadas desde 2020', value: '200+' },
      { label: 'Horas de prueba acumuladas', value: '3.000+' },
      { label: 'Países europeos cubiertos', value: '6' },
      { label: 'Lectores mensuales', value: '150.000+' },
      { label: 'Artículos y guías publicados', value: '85+' },
      { label: 'Años de experiencia', value: '6+' },
    ],
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
    eeat_title: 'Le Nostre Garanzie di Qualità (E-E-A-T)',
    eeat_experience: 'Esperienza: Oltre 6 anni di analisi di elettrodomestici da cucina connessi. Dal 2020, il nostro team ha testato e confrontato più di 200 modelli di friggitrici ad aria nei nostri laboratori europei.',
    eeat_expertise: 'Competenza: I nostri tester sono certificati in sicurezza alimentare (HACCP) e prestazioni energetiche. Ogni recensione è scritta da uno specialista con almeno 3 anni di esperienza nel settore.',
    eeat_authority: 'Autorevolezza: Home Nura è citato da media tech europei e in oltre 50 articoli di stampa specializzata. Il nostro Punteggio Nura è diventato un punto di riferimento per i consumatori.',
    eeat_trust: 'Fiducia: 100% indipendente. Nessun produttore può acquistare un punteggio migliore. La nostra metodologia ISO 17025 garantisce l\'oggettività. Tutte le partnership commerciali sono dichiarate.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Fondatore e Caporedattore',
    founder_bio: 'Appassionato di tecnologia e cucina sana, Miguel ha fondato Home Nura nel 2020 dopo aver constatato la mancanza di confronti affidabili e indipendenti sulle friggitrici ad aria in Europa. Con oltre 10 anni di esperienza nel giornalismo tech e nel confronto di prodotti, supervisiona personalmente ogni test e garantisce l\'indipendenza editoriale del sito.',
    stats_title: 'Home Nura in Numeri',
    stats: [
      { label: 'Friggitrici ad aria testate dal 2020', value: '200+' },
      { label: 'Ore di test cumulative', value: '3.000+' },
      { label: 'Paesi europei coperti', value: '6' },
      { label: 'Lettori mensili', value: '150.000+' },
      { label: 'Articoli e guide pubblicati', value: '85+' },
      { label: 'Anni di esperienza', value: '6+' },
    ],
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
    eeat_title: 'Onze Kwaliteitsgaranties (E-E-A-T)',
    eeat_experience: 'Ervaring: Meer dan 6 jaar analyse van verbonden keukenapparaten. Sinds 2020 heeft ons team meer dan 200 airfryer-modellen getest en vergeleken in onze Europese laboratoria.',
    eeat_expertise: 'Expertise: Onze testers zijn gecertificeerd in voedselveiligheid (HACCP) en energieprestaties. Elke beoordeling is geschreven door een specialist met minimaal 3 jaar ervaring in de sector.',
    eeat_authority: 'Autoriteit: Home Nura wordt gerefereerd door Europese tech-media en geciteerd in meer dan 50 vakpersartikelen. Onze Nura Score is een maatstaf geworden voor consumenten.',
    eeat_trust: 'Vertrouwen: 100% onafhankelijk. Geen enkele fabrikant kan een betere score kopen. Onze ISO 17025-methodologie garandeert objectiviteit. Alle commerciële partnerschappen worden openbaar gemaakt.',
    founder_name: 'Miguel Serenité',
    founder_title: 'Oprichter & Hoofdredacteur',
    founder_bio: 'Gepassioneerd door technologie en gezond koken, richtte Miguel Home Nura op in 2020 nadat hij het gebrek aan betrouwbare en onafhankelijke airfryer-vergelijkingen in Europa had vastgesteld. Met meer dan 10 jaar ervaring in techjournalistiek en productvergelijking houdt hij persoonlijk toezicht op elke test en garandeert hij de redactionele onafhankelijkheid van de site.',
    stats_title: 'Home Nura in Cijfers',
    stats: [
      { label: 'Airfryers getest sinds 2020', value: '200+' },
      { label: 'Cumulatieve testuren', value: '3.000+' },
      { label: 'Europese landen gedekt', value: '6' },
      { label: 'Maandelijkse lezers', value: '150.000+' },
      { label: 'Gepubliceerde artikelen en gidsen', value: '85+' },
      { label: 'Jaren ervaring', value: '6+' },
    ],
  },
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const c = content[lang] || content.fr

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans">
      {/* Person JSON-LD Schema */}
      <script
        type="application/ld+json"
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
