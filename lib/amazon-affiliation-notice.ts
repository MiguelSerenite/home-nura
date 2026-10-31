/**
 * "Affiliate programme" paragraph of the legal notice (mentions légales),
 * per language. It must describe the links exactly as lib/amazon.ts builds
 * them: one French Associates account (store ID), one tracking ID per
 * language version, links to Amazon.fr except on the Italian version
 * (Amazon.it), Amazon Global Earning sending foreign shoppers who click an
 * Amazon.fr link to their local store, every commission on that account.
 * It ends with Amazon's exact disclosure sentence, never paraphrased.
 * tests/lib/amazon-affiliation-notice.test.ts keeps it in line.
 */

import { AMAZON_ASSOCIATE_DISCLOSURE } from '@/lib/affiliate-disclosure'
import { AMAZON_STORE_ID, amazonMarket } from '@/lib/amazon'
import type { Lang } from '@/lib/i18n'

interface NoticeIds {
  /** Store ID of the French Associates account. */
  storeId: string
  /** Tracking ID of the language version the notice is shown on. */
  tag: string
}

const NOTICES: Readonly<Record<Lang, (ids: NoticeIds) => string>> = {
  fr: ({ storeId, tag }) =>
    `Home Nura participe au Programme Partenaires d'Amazon EU avec un seul compte Partenaires Amazon.fr (Store ID : ${storeId}). Chaque version linguistique du site utilise son propre identifiant de suivi sur ce compte ; celui de la version française est ${tag}. Les liens Amazon pointent vers Amazon.fr, sauf ceux de la version italienne, qui pointent vers Amazon.it. Grâce au programme « Global Earning » d'Amazon, un visiteur du Royaume-Uni, d'Allemagne, d'Espagne, d'Italie, des Pays-Bas, de Pologne, de Suède, des États-Unis ou du Canada qui clique sur un lien Amazon.fr est redirigé par Amazon vers le même produit, ou à défaut vers un produit similaire, sur la boutique Amazon de son pays. Les commissions éventuelles sont toutes versées sur ce même compte.`,
  en: ({ storeId, tag }) =>
    `Home Nura takes part in the Amazon EU Associates Programme through a single Amazon.fr Associates account (store ID: ${storeId}). Each language version of the site has its own tracking ID on that account; the English version uses ${tag}. Amazon links point to Amazon.fr, except on the Italian version, where they point to Amazon.it. Through Amazon's Global Earning programme, a visitor from the United Kingdom, Germany, Spain, Italy, the Netherlands, Poland, Sweden, the United States or Canada who clicks an Amazon.fr link is redirected by Amazon to the same product, or failing that a similar one, on their local Amazon store. Any commission is credited to that same account.`,
  de: ({ storeId, tag }) =>
    `Home Nura nimmt über ein einziges Amazon.fr-Partnerkonto (Store ID: ${storeId}) am Amazon EU-Partnerprogramm teil. Jede Sprachversion der Website nutzt auf diesem Konto eine eigene Tracking-ID; die deutsche Version verwendet ${tag}. Die Amazon-Links führen zu Amazon.fr, mit Ausnahme der italienischen Version, deren Links zu Amazon.it führen. Über das Amazon-Programm „Global Earning“ leitet Amazon Besucher aus dem Vereinigten Königreich, Deutschland, Spanien, Italien, den Niederlanden, Polen, Schweden, den USA oder Kanada, die auf einen Amazon.fr-Link klicken, zum selben Produkt – oder, falls es dort nicht erhältlich ist, zu einem ähnlichen – in ihrem lokalen Amazon-Shop weiter. Etwaige Provisionen werden demselben Konto gutgeschrieben.`,
  es: ({ storeId, tag }) =>
    `Home Nura participa en el Programa de Afiliados de Amazon EU con una única cuenta de afiliado de Amazon.fr (Store ID: ${storeId}). Cada versión lingüística del sitio utiliza su propio ID de seguimiento en esa cuenta; la versión española utiliza ${tag}. Los enlaces de Amazon apuntan a Amazon.fr, salvo en la versión italiana, cuyos enlaces apuntan a Amazon.it. Gracias al programa «Global Earning» de Amazon, cuando un visitante del Reino Unido, Alemania, España, Italia, los Países Bajos, Polonia, Suecia, Estados Unidos o Canadá hace clic en un enlace de Amazon.fr, Amazon lo redirige al mismo producto, o en su defecto a uno similar, en la tienda Amazon de su país. Las posibles comisiones se abonan en esa misma cuenta.`,
  it: ({ storeId, tag }) =>
    `Home Nura partecipa al Programma di Affiliazione Amazon EU con un unico account di affiliazione Amazon.fr (Store ID: ${storeId}). Ogni versione linguistica del sito utilizza un proprio ID di tracciamento su questo account: la versione italiana utilizza ${tag} e i suoi link Amazon puntano ad Amazon.it. I link delle altre versioni linguistiche puntano ad Amazon.fr: grazie al programma «Global Earning» di Amazon, i visitatori provenienti da Regno Unito, Germania, Spagna, Italia, Paesi Bassi, Polonia, Svezia, Stati Uniti o Canada che cliccano su un link Amazon.fr vengono reindirizzati da Amazon allo stesso prodotto, o in mancanza a un prodotto simile, sullo store Amazon del proprio paese. Le eventuali commissioni vengono accreditate sullo stesso account.`,
  nl: ({ storeId, tag }) =>
    `Home Nura neemt deel aan het Amazon EU-partnerprogramma via één Amazon.fr-partneraccount (Store ID: ${storeId}). Elke taalversie van de site gebruikt een eigen tracking-ID op dat account; de Nederlandse versie gebruikt ${tag}. De Amazon-links verwijzen naar Amazon.fr, behalve op de Italiaanse versie, waar ze naar Amazon.it verwijzen. Via het Amazon-programma 'Global Earning' stuurt Amazon bezoekers uit het Verenigd Koninkrijk, Duitsland, Spanje, Italië, Nederland, Polen, Zweden, de Verenigde Staten of Canada die op een Amazon.fr-link klikken door naar hetzelfde product, of anders naar een vergelijkbaar product, in de Amazon-winkel van hun land. Eventuele commissies worden op hetzelfde account bijgeschreven.`,
  pl: ({ storeId, tag }) =>
    `Home Nura uczestniczy w Programie Partnerskim Amazon EU za pośrednictwem jednego konta partnerskiego Amazon.fr (Store ID: ${storeId}). Każda wersja językowa strony ma na tym koncie własny identyfikator śledzenia; wersja polska używa identyfikatora ${tag}. Linki do Amazon prowadzą do Amazon.fr, z wyjątkiem wersji włoskiej, w której prowadzą do Amazon.it. Dzięki programowi „Global Earning” Amazon przekierowuje użytkowników z Wielkiej Brytanii, Niemiec, Hiszpanii, Włoch, Holandii, Polski, Szwecji, Stanów Zjednoczonych lub Kanady, którzy klikną link do Amazon.fr, do tego samego produktu (a jeśli jest niedostępny – do podobnego) w sklepie Amazon w ich kraju. Ewentualne prowizje trafiają na to samo konto.`,
}

/** The legal notice's affiliate paragraph for `lang`, ending with Amazon's disclosure. */
export function amazonAffiliationNotice(lang: Lang): string {
  const notice = NOTICES[lang]({ storeId: AMAZON_STORE_ID, tag: amazonMarket(lang).tag })
  return `${notice} ${AMAZON_ASSOCIATE_DISCLOSURE[lang]}`
}
