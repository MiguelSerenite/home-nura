import { getDictionary } from '../../../[lang]/dictionaries'
import Navbar from '@/components/Navbar'
import FaqSection from '@/components/FaqSection'
import CookieBanner from '@/components/CookieBanner'
import Link from 'next/link'
import type { Metadata } from 'next'

const pageContent: Record<string, {
  title: string
  subtitle: string
  intro: string
  comparison_title: string
  rows: { criteria: string; airfryer: string; oven: string }[]
  verdict_title: string
  verdict: string
  choose_airfryer_title: string
  choose_airfryer: string
  choose_oven_title: string
  choose_oven: string
}> = {
  fr: {
    title: 'Airfryer vs Four Traditionnel : Le Comparatif Définitif 2026',
    subtitle: 'Friteuse sans huile ou four classique ? On a testé les deux pour vous aider à choisir.',
    intro: 'L\'airfryer (friteuse à air chaud) et le four traditionnel sont deux appareils de cuisson essentiels. Mais lequel est le plus adapté à vos besoins ? Nous avons comparé ces deux technologies sur 7 critères clés pour vous aider à faire le bon choix.',
    comparison_title: 'Comparaison détaillée sur 7 critères',
    rows: [
      { criteria: 'Temps de préchauffage', airfryer: '2-3 minutes', oven: '10-15 minutes' },
      { criteria: 'Consommation énergétique', airfryer: '800-1800W (30-50% économie)', oven: '2000-3000W' },
      { criteria: 'Qualité de cuisson croustillante', airfryer: 'Excellent (air concentré)', oven: 'Bon (convection)' },
      { criteria: 'Capacité maximale', airfryer: '3-10L (1-8 personnes)', oven: '50-80L (illimité)' },
      { criteria: 'Facilité de nettoyage', airfryer: 'Très facile (panier amovible)', oven: 'Difficile (sauf pyrolyse)' },
      { criteria: 'Polyvalence', airfryer: 'Frites, viandes, légumes, gâteaux', oven: 'Tout type de plat' },
      { criteria: 'Prix moyen', airfryer: '60€ - 350€', oven: '200€ - 2000€' },
    ],
    verdict_title: 'Notre Verdict',
    verdict: 'L\'airfryer ne remplace pas le four, mais il le complète parfaitement. Pour les cuissons rapides du quotidien (frites, poulet, légumes grillés), l\'airfryer est imbattable en vitesse et économie d\'énergie. Le four reste indispensable pour les grandes pièces de viande, la pâtisserie et les plats en grande quantité.',
    choose_airfryer_title: 'Choisissez un airfryer si...',
    choose_airfryer: 'Vous cuisinez souvent pour 1-4 personnes, vous voulez des résultats croustillants rapides, vous souhaitez économiser sur votre facture d\'énergie, ou vous manquez de temps en semaine.',
    choose_oven_title: 'Gardez votre four si...',
    choose_oven: 'Vous cuisinez régulièrement pour 6+ personnes, vous faites de la pâtisserie (gâteaux, pains, pizzas), vous préparez des rôtis entiers, ou vous avez besoin de cuire plusieurs plats simultanément.',
  },
  en: {
    title: 'Air Fryer vs Oven: The Definitive Comparison 2026',
    subtitle: 'Air fryer or traditional oven? We tested both to help you choose.',
    intro: 'The air fryer and the traditional oven are two essential cooking appliances. But which one is best suited to your needs? We compared these two technologies across 7 key criteria to help you make the right choice.',
    comparison_title: 'Detailed comparison across 7 criteria',
    rows: [
      { criteria: 'Preheat time', airfryer: '2-3 minutes', oven: '10-15 minutes' },
      { criteria: 'Energy consumption', airfryer: '800-1800W (30-50% savings)', oven: '2000-3000W' },
      { criteria: 'Crispy cooking quality', airfryer: 'Excellent (concentrated air)', oven: 'Good (convection)' },
      { criteria: 'Maximum capacity', airfryer: '3-10L (1-8 people)', oven: '50-80L (unlimited)' },
      { criteria: 'Ease of cleaning', airfryer: 'Very easy (removable basket)', oven: 'Difficult (except pyrolysis)' },
      { criteria: 'Versatility', airfryer: 'Chips, meat, veg, cakes', oven: 'All types of dishes' },
      { criteria: 'Average price', airfryer: '£50 - £300', oven: '£150 - £2000' },
    ],
    verdict_title: 'Our Verdict',
    verdict: 'An air fryer doesn\'t replace an oven, but it perfectly complements one. For quick everyday cooking (chips, chicken, roasted veg), the air fryer is unbeatable in speed and energy savings. The oven remains essential for large joints of meat, baking and cooking in bulk.',
    choose_airfryer_title: 'Choose an air fryer if...',
    choose_airfryer: 'You often cook for 1-4 people, you want quick crispy results, you want to save on your energy bill, or you\'re short on time during the week.',
    choose_oven_title: 'Keep your oven if...',
    choose_oven: 'You regularly cook for 6+ people, you bake (cakes, bread, pizza), you prepare whole roasts, or you need to cook multiple dishes simultaneously.',
  },
  de: {
    title: 'Airfryer vs Backofen: Der Ultimative Vergleich 2026',
    subtitle: 'Heißluftfritteuse oder klassischer Backofen? Wir haben beide getestet.',
    intro: 'Die Heißluftfritteuse (Airfryer) und der traditionelle Backofen sind zwei unverzichtbare Küchengeräte. Aber welches passt besser zu Ihren Bedürfnissen? Wir haben beide Technologien anhand von 7 Schlüsselkriterien verglichen.',
    comparison_title: 'Detaillierter Vergleich anhand von 7 Kriterien',
    rows: [
      { criteria: 'Vorheizzeit', airfryer: '2-3 Minuten', oven: '10-15 Minuten' },
      { criteria: 'Energieverbrauch', airfryer: '800-1800W (30-50% Ersparnis)', oven: '2000-3000W' },
      { criteria: 'Knusprige Garqualität', airfryer: 'Ausgezeichnet (konzentrierte Luft)', oven: 'Gut (Umluft)' },
      { criteria: 'Maximale Kapazität', airfryer: '3-10L (1-8 Personen)', oven: '50-80L (unbegrenzt)' },
      { criteria: 'Reinigungsfreundlichkeit', airfryer: 'Sehr einfach (herausnehmbarer Korb)', oven: 'Schwierig (außer Pyrolyse)' },
      { criteria: 'Vielseitigkeit', airfryer: 'Pommes, Fleisch, Gemüse, Kuchen', oven: 'Alle Gerichte' },
      { criteria: 'Durchschnittspreis', airfryer: '60€ - 350€', oven: '200€ - 2000€' },
    ],
    verdict_title: 'Unser Fazit',
    verdict: 'Ein Airfryer ersetzt keinen Backofen, ergänzt ihn aber perfekt. Für schnelle Alltagsgerichte (Pommes, Hähnchen, Grillgemüse) ist der Airfryer in Geschwindigkeit und Energieeffizienz unschlagbar. Der Backofen bleibt unverzichtbar für große Braten, Backen und Kochen in großen Mengen.',
    choose_airfryer_title: 'Wählen Sie einen Airfryer, wenn...',
    choose_airfryer: 'Sie oft für 1-4 Personen kochen, schnelle knusprige Ergebnisse wollen, bei der Stromrechnung sparen möchten oder unter der Woche wenig Zeit haben.',
    choose_oven_title: 'Behalten Sie Ihren Backofen, wenn...',
    choose_oven: 'Sie regelmäßig für 6+ Personen kochen, backen (Kuchen, Brot, Pizza), ganze Braten zubereiten oder mehrere Gerichte gleichzeitig garen müssen.',
  },
  es: {
    title: 'Freidora de Aire vs Horno: La Comparativa Definitiva 2026',
    subtitle: 'Freidora sin aceite o horno tradicional? Hemos probado ambos para ayudarte a elegir.',
    intro: 'La freidora de aire (airfryer) y el horno tradicional son dos electrodomésticos de cocina esenciales. Pero, ¿cuál se adapta mejor a tus necesidades? Hemos comparado ambas tecnologías en 7 criterios clave para ayudarte a tomar la mejor decisión.',
    comparison_title: 'Comparación detallada en 7 criterios',
    rows: [
      { criteria: 'Tiempo de precalentamiento', airfryer: '2-3 minutos', oven: '10-15 minutos' },
      { criteria: 'Consumo energético', airfryer: '800-1800W (30-50% ahorro)', oven: '2000-3000W' },
      { criteria: 'Calidad de cocción crujiente', airfryer: 'Excelente (aire concentrado)', oven: 'Bueno (convección)' },
      { criteria: 'Capacidad máxima', airfryer: '3-10L (1-8 personas)', oven: '50-80L (ilimitado)' },
      { criteria: 'Facilidad de limpieza', airfryer: 'Muy fácil (cesta extraíble)', oven: 'Difícil (excepto pirolisis)' },
      { criteria: 'Versatilidad', airfryer: 'Patatas, carne, verduras, pasteles', oven: 'Todo tipo de platos' },
      { criteria: 'Precio medio', airfryer: '60€ - 350€', oven: '200€ - 2000€' },
    ],
    verdict_title: 'Nuestro Veredicto',
    verdict: 'Una freidora de aire no reemplaza al horno, pero lo complementa perfectamente. Para cocciones rápidas del día a día (patatas fritas, pollo, verduras asadas), la freidora de aire es imbatible en velocidad y ahorro energético. El horno sigue siendo indispensable para grandes piezas de carne, repostería y cocinar en cantidad.',
    choose_airfryer_title: 'Elige una freidora de aire si...',
    choose_airfryer: 'Cocinas a menudo para 1-4 personas, quieres resultados crujientes rápidos, quieres ahorrar en la factura de energía o tienes poco tiempo entre semana.',
    choose_oven_title: 'Mantén tu horno si...',
    choose_oven: 'Cocinas regularmente para 6+ personas, haces repostería (pasteles, pan, pizza), preparas asados enteros o necesitas cocinar varios platos simultáneamente.',
  },
  it: {
    title: 'Friggitrice ad Aria vs Forno: Il Confronto Definitivo 2026',
    subtitle: 'Friggitrice ad aria o forno tradizionale? Li abbiamo testati entrambi per aiutarti a scegliere.',
    intro: 'La friggitrice ad aria (airfryer) e il forno tradizionale sono due elettrodomestici essenziali in cucina. Ma quale è più adatto alle tue esigenze? Abbiamo confrontato queste due tecnologie su 7 criteri chiave per aiutarti a fare la scelta giusta.',
    comparison_title: 'Confronto dettagliato su 7 criteri',
    rows: [
      { criteria: 'Tempo di preriscaldamento', airfryer: '2-3 minuti', oven: '10-15 minuti' },
      { criteria: 'Consumo energetico', airfryer: '800-1800W (30-50% risparmio)', oven: '2000-3000W' },
      { criteria: 'Qualità cottura croccante', airfryer: 'Eccellente (aria concentrata)', oven: 'Buona (convezione)' },
      { criteria: 'Capacità massima', airfryer: '3-10L (1-8 persone)', oven: '50-80L (illimitato)' },
      { criteria: 'Facilità di pulizia', airfryer: 'Molto facile (cestello rimovibile)', oven: 'Difficile (tranne pirolisi)' },
      { criteria: 'Versatilità', airfryer: 'Patatine, carne, verdure, dolci', oven: 'Tutti i tipi di piatti' },
      { criteria: 'Prezzo medio', airfryer: '60€ - 350€', oven: '200€ - 2000€' },
    ],
    verdict_title: 'Il Nostro Verdetto',
    verdict: 'Una friggitrice ad aria non sostituisce il forno, ma lo integra perfettamente. Per le cotture rapide quotidiane (patatine, pollo, verdure grigliate), la friggitrice ad aria è imbattibile in velocità e risparmio energetico. Il forno resta indispensabile per grandi pezzi di carne, pasticceria e cottura in quantità.',
    choose_airfryer_title: 'Scegli una friggitrice ad aria se...',
    choose_airfryer: 'Cucini spesso per 1-4 persone, vuoi risultati croccanti veloci, vuoi risparmiare sulla bolletta energetica o hai poco tempo durante la settimana.',
    choose_oven_title: 'Tieni il forno se...',
    choose_oven: 'Cucini regolarmente per 6+ persone, fai pasticceria (torte, pane, pizza), prepari arrosti interi o devi cuocere più piatti contemporaneamente.',
  },
  nl: {
    title: 'Airfryer vs Oven: De Definitieve Vergelijking 2026',
    subtitle: 'Airfryer of traditionele oven? We hebben beide getest om je te helpen kiezen.',
    intro: 'De airfryer en de traditionele oven zijn twee essentiële keukenapparaten. Maar welke past het best bij jouw behoeften? We hebben beide technologieën vergeleken op 7 belangrijke criteria om je te helpen de juiste keuze te maken.',
    comparison_title: 'Gedetailleerde vergelijking op 7 criteria',
    rows: [
      { criteria: 'Voorverwarmtijd', airfryer: '2-3 minuten', oven: '10-15 minuten' },
      { criteria: 'Energieverbruik', airfryer: '800-1800W (30-50% besparing)', oven: '2000-3000W' },
      { criteria: 'Knapperige bakkwaliteit', airfryer: 'Uitstekend (geconcentreerde lucht)', oven: 'Goed (hetelucht)' },
      { criteria: 'Maximale capaciteit', airfryer: '3-10L (1-8 personen)', oven: '50-80L (onbeperkt)' },
      { criteria: 'Reinigingsgemak', airfryer: 'Zeer eenvoudig (uitneembare mand)', oven: 'Moeilijk (behalve pyrolyse)' },
      { criteria: 'Veelzijdigheid', airfryer: 'Friet, vlees, groenten, gebak', oven: 'Alle soorten gerechten' },
      { criteria: 'Gemiddelde prijs', airfryer: '€60 - €350', oven: '€200 - €2000' },
    ],
    verdict_title: 'Ons Oordeel',
    verdict: 'Een airfryer vervangt geen oven, maar vult deze perfect aan. Voor snelle dagelijkse bereidingen (friet, kip, gegrilde groenten) is de airfryer onverslaanbaar in snelheid en energiebesparing. De oven blijft onmisbaar voor grote stukken vlees, bakken en koken in grote hoeveelheden.',
    choose_airfryer_title: 'Kies een airfryer als...',
    choose_airfryer: 'Je vaak kookt voor 1-4 personen, je snelle knapperige resultaten wilt, je wilt besparen op je energierekening of je doordeweeks weinig tijd hebt.',
    choose_oven_title: 'Houd je oven als...',
    choose_oven: 'Je regelmatig kookt voor 6+ personen, je bakt (taarten, brood, pizza), je hele braadstukken bereidt of je meerdere gerechten tegelijk moet bereiden.',
  },
}

const metaTitles: Record<string, string> = {
  fr: 'Airfryer vs Four : Quel est le Meilleur Choix ? | Home Nura',
  en: 'Air Fryer vs Oven: Which is Better? | Home Nura',
  de: 'Airfryer vs Backofen: Was ist besser? | Home Nura',
  es: 'Freidora de Aire vs Horno: ¿Cuál es Mejor? | Home Nura',
  it: 'Friggitrice ad Aria vs Forno: Qual è Meglio? | Home Nura',
  nl: 'Airfryer vs Oven: Wat is Beter? | Home Nura',
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = await params
  const c = pageContent[lang] || pageContent.fr
  return {
    title: metaTitles[lang] || metaTitles.fr,
    description: c.subtitle,
    openGraph: {
      title: metaTitles[lang] || metaTitles.fr,
      description: c.subtitle,
      type: 'article',
    },
  }
}

export default async function AirfryerVsFour({ params }: { params: { lang: string } }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const c = pageContent[lang] || pageContent.fr

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: dict.breadcrumb_home, item: `https://homenura.com/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Airfryer vs Four', item: `https://homenura.com/${lang}/guides/airfryer-vs-four` },
    ],
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans">
      <Navbar currentLang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative px-6 py-20 lg:py-28 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-rose-600 uppercase bg-rose-50 rounded-full">
            VS 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600">
            {c.title}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <p className="text-slate-600 leading-relaxed text-lg">{c.intro}</p>
      </section>

      {/* Comparison Table */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight mb-8">{c.comparison_title}</h2>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400">{lang === 'fr' ? 'Critère' : lang === 'de' ? 'Kriterium' : lang === 'es' ? 'Criterio' : lang === 'it' ? 'Criterio' : lang === 'nl' ? 'Criterium' : 'Criteria'}</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-blue-600">Airfryer</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-amber-600">{lang === 'fr' ? 'Four' : lang === 'de' ? 'Backofen' : lang === 'es' ? 'Horno' : lang === 'it' ? 'Forno' : lang === 'nl' ? 'Oven' : 'Oven'}</th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row, i) => (
                <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50">
                  <td className="px-6 py-4 text-sm font-semibold text-slate-700">{row.criteria}</td>
                  <td className="px-6 py-4 text-sm text-blue-700 bg-blue-50/30">{row.airfryer}</td>
                  <td className="px-6 py-4 text-sm text-amber-700 bg-amber-50/30">{row.oven}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Verdict */}
      <section className="max-w-3xl mx-auto px-6 pb-12">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">{c.verdict_title}</h2>
          <p className="text-slate-600 leading-relaxed">{c.verdict}</p>
        </div>
      </section>

      {/* Choose sections */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-blue-200 p-6">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <span className="text-blue-600 font-black text-lg">A</span>
          </div>
          <h3 className="text-lg font-bold text-blue-900 mb-3">{c.choose_airfryer_title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{c.choose_airfryer}</p>
        </div>
        <div className="bg-white rounded-2xl border border-amber-200 p-6">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mb-4">
            <span className="text-amber-600 font-black text-lg">F</span>
          </div>
          <h3 className="text-lg font-bold text-amber-900 mb-3">{c.choose_oven_title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed">{c.choose_oven}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 pb-16 text-center">
        <Link
          href={`/${lang}/guides/airfryers`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors"
        >
          {dict.guide_title} &rarr;
        </Link>
      </section>

      {/* FAQ */}
      <FaqSection faqs={dict.faq} title={dict.faq_title} />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-slate-400">{dict.affiliate_disclaimer}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-400">
            <Link href={`/${lang}/mentions-legales`} className="hover:text-slate-600 transition-colors">{dict.legal_notice}</Link>
            <Link href={`/${lang}/politique-confidentialite`} className="hover:text-slate-600 transition-colors">{dict.privacy_policy}</Link>
            <Link href={`/${lang}/politique-cookies`} className="hover:text-slate-600 transition-colors">{dict.cookie_policy}</Link>
            <Link href={`/${lang}/a-propos`} className="hover:text-slate-600 transition-colors">{dict.about_link}</Link>
          </div>
          <div className="mt-4 flex justify-center gap-8 text-xs font-bold text-slate-300 uppercase tracking-widest">
            <span>&copy; 2026 HOME NURA EUROPE</span>
          </div>
        </div>
      </footer>

      <CookieBanner lang={lang} dict={{ cookie_banner_text: dict.cookie_banner_text, cookie_accept: dict.cookie_accept, cookie_reject: dict.cookie_reject, cookie_learn_more: dict.cookie_learn_more }} />
    </div>
  )
}
