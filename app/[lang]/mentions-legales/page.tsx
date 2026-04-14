import Navbar from '@/components/Navbar'
import Link from 'next/link'

const content: Record<string, { title: string; body: string }> = {
  fr: {
    title: 'Mentions Légales',
    body: `Home Nura est un site d'information et de comparaison de produits édité à titre personnel.\n\nÉditeur : Home Nura Europe\nSite web : https://homenura.com\nContact : contact@homenura.com\n\nHébergement : Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA\n\nCe site participe au Programme Partenaires d'Amazon EU, un programme d'affiliation conçu pour permettre à des sites de percevoir une rémunération grâce à la création de liens vers Amazon.fr, Amazon.de, Amazon.co.uk, Amazon.es, Amazon.it et Amazon.nl.\n\nLes prix affichés sont fournis à titre indicatif et peuvent varier. Le prix de vente effectif est celui affiché sur le site du marchand au moment de l'achat.\n\nTous les noms de marques, logos et images de produits sont la propriété de leurs détenteurs respectifs.`,
  },
  en: {
    title: 'Legal Notice',
    body: `Home Nura is a product information and comparison website published independently.\n\nPublisher: Home Nura Europe\nWebsite: https://homenura.com\nContact: contact@homenura.com\n\nHosting: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA\n\nThis site participates in the Amazon EU Associates Programme, an affiliate advertising programme designed to provide a means for sites to earn advertising fees by linking to Amazon.co.uk, Amazon.fr, Amazon.de, Amazon.es, Amazon.it and Amazon.nl.\n\nPrices shown are indicative and may vary. The actual selling price is that displayed on the merchant's site at the time of purchase.\n\nAll brand names, logos and product images are the property of their respective owners.`,
  },
  de: {
    title: 'Impressum',
    body: `Home Nura ist eine unabhängige Produktinformations- und Vergleichswebsite.\n\nHerausgeber: Home Nura Europe\nWebsite: https://homenura.com\nKontakt: contact@homenura.com\n\nHosting: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA\n\nDiese Website nimmt am Amazon EU-Partnerprogramm teil, einem Affiliate-Werbeprogramm, das es Websites ermöglicht, durch Verlinkung zu Amazon.de, Amazon.fr, Amazon.co.uk, Amazon.es, Amazon.it und Amazon.nl Werbegebühren zu verdienen.\n\nDie angezeigten Preise sind unverbindlich und können variieren. Der tatsächliche Verkaufspreis ist der auf der Website des Händlers zum Zeitpunkt des Kaufs angezeigte Preis.\n\nAlle Markennamen, Logos und Produktbilder sind Eigentum ihrer jeweiligen Inhaber.`,
  },
  es: {
    title: 'Aviso Legal',
    body: `Home Nura es un sitio web de información y comparación de productos publicado de forma independiente.\n\nEditor: Home Nura Europe\nSitio web: https://homenura.com\nContacto: contact@homenura.com\n\nAlojamiento: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA\n\nEste sitio participa en el Programa de Afiliados de Amazon EU, un programa de publicidad de afiliación diseñado para proporcionar un medio para que los sitios ganen tarifas de publicidad mediante enlaces a Amazon.es, Amazon.fr, Amazon.de, Amazon.co.uk, Amazon.it y Amazon.nl.\n\nLos precios mostrados son indicativos y pueden variar. El precio de venta real es el que se muestra en el sitio del comerciante en el momento de la compra.\n\nTodos los nombres de marcas, logotipos e imágenes de productos son propiedad de sus respectivos propietarios.`,
  },
  it: {
    title: 'Note Legali',
    body: `Home Nura è un sito web di informazioni e confronto prodotti pubblicato in modo indipendente.\n\nEditore: Home Nura Europe\nSito web: https://homenura.com\nContatto: contact@homenura.com\n\nHosting: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA\n\nQuesto sito partecipa al Programma di Affiliazione Amazon EU, un programma di affiliazione che consente ai siti di guadagnare commissioni pubblicitarie tramite link verso Amazon.it, Amazon.fr, Amazon.de, Amazon.co.uk, Amazon.es e Amazon.nl.\n\nI prezzi mostrati sono indicativi e possono variare. Il prezzo di vendita effettivo è quello visualizzato sul sito del venditore al momento dell'acquisto.\n\nTutti i nomi dei marchi, i loghi e le immagini dei prodotti sono di proprietà dei rispettivi titolari.`,
  },
  nl: {
    title: 'Juridische Kennisgeving',
    body: `Home Nura is een onafhankelijke productinformatie- en vergelijkingswebsite.\n\nUitgever: Home Nura Europe\nWebsite: https://homenura.com\nContact: contact@homenura.com\n\nHosting: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA\n\nDeze site neemt deel aan het Amazon EU-partnerprogramma, een affiliate-advertentieprogramma dat is ontworpen om sites in staat te stellen advertentiekosten te verdienen door te linken naar Amazon.nl, Amazon.fr, Amazon.de, Amazon.co.uk, Amazon.es en Amazon.it.\n\nDe getoonde prijzen zijn indicatief en kunnen variëren. De werkelijke verkoopprijs is de prijs die wordt weergegeven op de website van de verkoper op het moment van aankoop.\n\nAlle merknamen, logo's en productafbeeldingen zijn eigendom van hun respectieve eigenaren.`,
  },
}

export default async function MentionsLegales({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const c = content[lang] || content.fr

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${lang}` },
            { '@type': 'ListItem', position: 2, name: 'Mentions légales', item: `https://homenura.com/${lang}/mentions-legales` },
          ],
        }) }}
      />
      <Navbar currentLang={lang} />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-black mb-8">{c.title}</h1>
        <div className="prose prose-slate max-w-none whitespace-pre-line text-slate-600 leading-relaxed">
          {c.body}
        </div>
        <div className="mt-12">
          <Link href={`/${lang}`} className="text-blue-600 font-bold hover:underline">
            &larr; {lang === 'fr' ? 'Retour à l\'accueil' : lang === 'de' ? 'Zurück zur Startseite' : lang === 'es' ? 'Volver al inicio' : lang === 'it' ? 'Torna alla home' : lang === 'nl' ? 'Terug naar home' : 'Back to home'}
          </Link>
        </div>
      </main>
    </div>
  )
}
