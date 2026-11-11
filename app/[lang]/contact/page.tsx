import Navbar from '@/components/Navbar'
import { SiteFooter } from '@/components/ui'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildPageMetadata, BASE_URL } from '@/lib/seo'
import { resolveLang, type Lang } from '@/lib/i18n'

/**
 * Contact page: how to reach the editorial team. Facts only, taken from the
 * legal notice (publisher, address, e-mail). Home Nura sells nothing, so
 * order questions go to the retailer.
 */

interface ContactCopy {
  title: string
  description: string
  intro: string
  topicsHeading: string
  topics: readonly string[]
  ordersHeading: string
  orders: string
  publisherHeading: string
  publisher: string
  legalLink: string
  back: string
}

const EN: ContactCopy = {
  title: 'Contact Home Nura',
  description: 'How to reach the Home Nura editorial team: corrections, product suggestions, partnerships and data requests. Write to contact@homenura.com.',
  intro: 'The quickest way to reach the editorial team is an e-mail to contact@homenura.com. Please mention the address of the page concerned and the version of the site you read (for example homenura.com/en).',
  topicsHeading: 'What you can write to us about',
  topics: [
    'A mistake in a guide, a comparison or a specification, so that we can check and correct it.',
    'A product or a question you would like us to cover in a future guide.',
    'Press, partnership or affiliate questions about the site.',
    'A request about your personal data, as described in our privacy policy.',
  ],
  ordersHeading: 'Orders, deliveries and returns',
  orders: 'Home Nura does not sell any product. When you buy through one of our links, the sale, delivery, warranty and returns are handled by the retailer (for example Amazon or Coolblue): please contact its customer service directly.',
  publisherHeading: 'Publisher',
  publisher: 'Home Nura is published by GROUPE SERENITE, 60 Rue François 1er, 75008 Paris, France.',
  legalLink: 'Legal notice',
  back: 'Back to home',
}

const CONTENT: Record<Lang, ContactCopy> = {
  fr: {
    title: 'Contacter Home Nura',
    description: 'Comment joindre la rédaction de Home Nura : corrections, suggestions de produits, partenariats et demandes sur vos données. Écrivez à contact@homenura.com.',
    intro: 'Le plus simple pour joindre la rédaction est un e-mail à contact@homenura.com. Indiquez l’adresse de la page concernée et la version du site que vous lisez (par exemple homenura.com/fr).',
    topicsHeading: 'Pour quoi nous écrire',
    topics: [
      'Une erreur dans un guide, un comparatif ou une caractéristique, pour que nous la vérifiions et la corrigions.',
      'Un produit ou une question que vous aimeriez voir traité dans un prochain guide.',
      'Une question de presse, de partenariat ou d’affiliation concernant le site.',
      'Une demande sur vos données personnelles, comme le prévoit notre politique de confidentialité.',
    ],
    ordersHeading: 'Commandes, livraisons et retours',
    orders: 'Home Nura ne vend aucun produit. Quand vous achetez par l’un de nos liens, la vente, la livraison, la garantie et les retours relèvent du marchand (par exemple Amazon ou Coolblue) : contactez directement son service client.',
    publisherHeading: 'Éditeur',
    publisher: 'Home Nura est édité par GROUPE SERENITE, 60 Rue François 1er, 75008 Paris, France.',
    legalLink: 'Mentions légales',
    back: 'Retour à l’accueil',
  },
  en: EN,
  us: EN,
  ca: EN,
  de: {
    title: 'Kontakt zu Home Nura',
    description: 'So erreichen Sie die Redaktion von Home Nura: Korrekturen, Produktvorschläge, Partnerschaften und Anfragen zu Ihren Daten. Schreiben Sie an contact@homenura.com.',
    intro: 'Am schnellsten erreichen Sie die Redaktion per E-Mail an contact@homenura.com. Nennen Sie bitte die Adresse der betroffenen Seite und die Version der Website, die Sie lesen (zum Beispiel homenura.com/de).',
    topicsHeading: 'Wofür Sie uns schreiben können',
    topics: [
      'Einen Fehler in einem Ratgeber, einem Vergleich oder einer technischen Angabe, damit wir ihn prüfen und korrigieren.',
      'Ein Produkt oder eine Frage, die wir in einem künftigen Ratgeber behandeln sollen.',
      'Presse-, Partnerschafts- oder Affiliate-Anfragen zur Website.',
      'Eine Anfrage zu Ihren personenbezogenen Daten, wie in unserer Datenschutzerklärung beschrieben.',
    ],
    ordersHeading: 'Bestellungen, Lieferung und Rücksendungen',
    orders: 'Home Nura verkauft keine Produkte. Wenn Sie über einen unserer Links kaufen, sind Verkauf, Lieferung, Garantie und Rücksendung Sache des Händlers (zum Beispiel Amazon oder Coolblue): Wenden Sie sich bitte direkt an dessen Kundenservice.',
    publisherHeading: 'Herausgeber',
    publisher: 'Home Nura wird herausgegeben von GROUPE SERENITE, 60 Rue François 1er, 75008 Paris, Frankreich.',
    legalLink: 'Impressum',
    back: 'Zurück zur Startseite',
  },
  es: {
    title: 'Contactar con Home Nura',
    description: 'Cómo contactar con la redacción de Home Nura: correcciones, sugerencias de productos, colaboraciones y solicitudes sobre tus datos. Escribe a contact@homenura.com.',
    intro: 'La forma más rápida de contactar con la redacción es un correo a contact@homenura.com. Indica la dirección de la página en cuestión y la versión del sitio que lees (por ejemplo homenura.com/es).',
    topicsHeading: 'Para qué puedes escribirnos',
    topics: [
      'Un error en una guía, una comparativa o una característica, para que lo revisemos y corrijamos.',
      'Un producto o una pregunta que te gustaría ver en una próxima guía.',
      'Consultas de prensa, colaboración o afiliación sobre el sitio.',
      'Una solicitud sobre tus datos personales, tal como se describe en nuestra política de privacidad.',
    ],
    ordersHeading: 'Pedidos, envíos y devoluciones',
    orders: 'Home Nura no vende ningún producto. Cuando compras a través de uno de nuestros enlaces, la venta, el envío, la garantía y las devoluciones dependen del vendedor (por ejemplo Amazon o Coolblue): contacta directamente con su servicio de atención al cliente.',
    publisherHeading: 'Editor',
    publisher: 'Home Nura es editado por GROUPE SERENITE, 60 Rue François 1er, 75008 París, Francia.',
    legalLink: 'Aviso legal',
    back: 'Volver al inicio',
  },
  it: {
    title: 'Contattare Home Nura',
    description: 'Come contattare la redazione di Home Nura: correzioni, suggerimenti di prodotti, collaborazioni e richieste sui tuoi dati. Scrivi a contact@homenura.com.',
    intro: 'Il modo più rapido per contattare la redazione è un’e-mail a contact@homenura.com. Indica l’indirizzo della pagina interessata e la versione del sito che leggi (ad esempio homenura.com/it).',
    topicsHeading: 'Per cosa puoi scriverci',
    topics: [
      'Un errore in una guida, in un confronto o in una specifica tecnica, perché possiamo verificarlo e correggerlo.',
      'Un prodotto o una domanda che vorresti vedere in una prossima guida.',
      'Richieste di stampa, collaborazione o affiliazione sul sito.',
      'Una richiesta sui tuoi dati personali, come previsto dalla nostra informativa sulla privacy.',
    ],
    ordersHeading: 'Ordini, consegne e resi',
    orders: 'Home Nura non vende alcun prodotto. Quando acquisti tramite uno dei nostri link, vendita, consegna, garanzia e resi sono gestiti dal venditore (ad esempio Amazon o Coolblue): contatta direttamente il suo servizio clienti.',
    publisherHeading: 'Editore',
    publisher: 'Home Nura è pubblicato da GROUPE SERENITE, 60 Rue François 1er, 75008 Parigi, Francia.',
    legalLink: 'Note legali',
    back: 'Torna alla home',
  },
  nl: {
    title: 'Contact met Home Nura',
    description: 'Zo bereik je de redactie van Home Nura: correcties, productsuggesties, samenwerkingen en vragen over je gegevens. Mail naar contact@homenura.com.',
    intro: 'De snelste manier om de redactie te bereiken is een e-mail naar contact@homenura.com. Vermeld het adres van de betreffende pagina en de versie van de site die je leest (bijvoorbeeld homenura.com/nl).',
    topicsHeading: 'Waarvoor je ons kunt mailen',
    topics: [
      'Een fout in een gids, een vergelijking of een specificatie, zodat we die kunnen controleren en verbeteren.',
      'Een product of een vraag die je graag in een volgende gids behandeld ziet.',
      'Vragen over pers, samenwerking of affiliatie rond de site.',
      'Een verzoek over je persoonsgegevens, zoals beschreven in ons privacybeleid.',
    ],
    ordersHeading: 'Bestellingen, levering en retouren',
    orders: 'Home Nura verkoopt geen producten. Koop je via een van onze links, dan regelt de winkel (bijvoorbeeld Amazon of Coolblue) de verkoop, levering, garantie en retouren: neem rechtstreeks contact op met de klantenservice van die winkel.',
    publisherHeading: 'Uitgever',
    publisher: 'Home Nura wordt uitgegeven door GROUPE SERENITE, 60 Rue François 1er, 75008 Parijs, Frankrijk.',
    legalLink: 'Juridische informatie',
    back: 'Terug naar home',
  },
  pl: {
    title: 'Kontakt z Home Nura',
    description: 'Jak skontaktować się z redakcją Home Nura: poprawki, propozycje produktów, współpraca i wnioski dotyczące danych. Napisz na contact@homenura.com.',
    intro: 'Najszybciej skontaktujesz się z redakcją, pisząc na adres contact@homenura.com. Podaj adres strony, której dotyczy wiadomość, oraz wersję serwisu, którą czytasz (na przykład homenura.com/pl).',
    topicsHeading: 'W jakich sprawach możesz do nas pisać',
    topics: [
      'Błąd w poradniku, porównaniu lub parametrach produktu, abyśmy mogli go sprawdzić i poprawić.',
      'Produkt lub pytanie, które chcesz zobaczyć w kolejnym poradniku.',
      'Sprawy prasowe, współpraca lub pytania o program partnerski serwisu.',
      'Wniosek dotyczący Twoich danych osobowych, zgodnie z naszą polityką prywatności.',
    ],
    ordersHeading: 'Zamówienia, dostawy i zwroty',
    orders: 'Home Nura nie sprzedaje żadnych produktów. Gdy kupujesz przez jeden z naszych linków, sprzedażą, dostawą, gwarancją i zwrotami zajmuje się sklep (na przykład Amazon lub Coolblue): skontaktuj się bezpośrednio z jego obsługą klienta.',
    publisherHeading: 'Wydawca',
    publisher: 'Wydawcą Home Nura jest GROUPE SERENITE, 60 Rue François 1er, 75008 Paryż, Francja.',
    legalLink: 'Nota prawna',
    back: 'Powrót do strony głównej',
  },
  sv: {
    title: 'Kontakta Home Nura',
    description: 'Så når du Home Nuras redaktion: rättelser, produktförslag, samarbeten och frågor om dina personuppgifter. Mejla contact@homenura.com.',
    intro: 'Snabbast når du redaktionen med ett mejl till contact@homenura.com. Ange adressen till sidan det gäller och vilken version av webbplatsen du läser (till exempel homenura.com/sv).',
    topicsHeading: 'Vad du kan skriva till oss om',
    topics: [
      'Ett fel i en guide, en jämförelse eller en teknisk uppgift, så att vi kan kontrollera och rätta det.',
      'En produkt eller en fråga som du vill att vi tar upp i en kommande guide.',
      'Frågor om press, samarbeten eller affiliate kring webbplatsen.',
      'En begäran om dina personuppgifter, enligt vår integritetspolicy.',
    ],
    ordersHeading: 'Beställningar, leveranser och returer',
    orders: 'Home Nura säljer inga produkter. När du köper via någon av våra länkar sköter butiken (till exempel Amazon eller Coolblue) försäljning, leverans, garanti och returer: kontakta butikens kundtjänst direkt.',
    publisherHeading: 'Utgivare',
    publisher: 'Home Nura ges ut av GROUPE SERENITE, 60 Rue François 1er, 75008 Paris, Frankrike.',
    legalLink: 'Juridisk information',
    back: 'Tillbaka till startsidan',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = CONTENT[safeLang]
  return buildPageMetadata({
    lang: safeLang,
    path: '/contact',
    title: `${c.title} | Home Nura`,
    description: c.description,
  })
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = resolveLang(rawLang)
  const c = CONTENT[lang]
  const url = `${BASE_URL}/${lang}/contact`
  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-clip">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'ContactPage',
              '@id': `${url}#page`,
              url,
              name: c.title,
              description: c.description,
              about: { '@id': `${BASE_URL}/#organization` },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/${lang}` },
                { '@type': 'ListItem', position: 2, name: c.title, item: url },
              ],
            },
          ],
        }) }}
      />
      <Navbar currentLang={lang} />
      <main id="main" className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-8">{c.title}</h1>
        <p className="text-slate-600 leading-relaxed">
          {c.intro}{' '}
          <a href="mailto:contact@homenura.com" className="text-brand-600 font-bold hover:underline">contact@homenura.com</a>
        </p>
        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">{c.topicsHeading}</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-600 leading-relaxed">
          {c.topics.map((topic) => <li key={topic}>{topic}</li>)}
        </ul>
        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">{c.ordersHeading}</h2>
        <p className="text-slate-600 leading-relaxed">{c.orders}</p>
        <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">{c.publisherHeading}</h2>
        <p className="text-slate-600 leading-relaxed">
          {c.publisher}{' '}
          <Link href={`/${lang}/mentions-legales`} className="text-brand-600 font-bold hover:underline">{c.legalLink}</Link>
        </p>
        <div className="mt-12">
          <Link href={`/${lang}`} className="text-brand-600 font-bold hover:underline">&larr; {c.back}</Link>
        </div>
      </main>
      <SiteFooter currentLang={lang} />
    </div>
  )
}
