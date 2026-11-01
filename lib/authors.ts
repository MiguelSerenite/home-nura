/**
 * One byline per market: a pen name of the Home Nura editorial team.
 *
 * Every bio and the author page say it is a pen name, name the real
 * sources (manufacturer specs, user reviews, third-party results) and that
 * we do not test products ourselves. No degree, job title, photo or social
 * profile: none exists, so none is claimed (Person markup has no sameAs).
 * Person markup lives in lib/seo.ts (buildAuthorPerson).
 */
import { isValidLang, type Lang } from '@/lib/i18n'

export const AUTHOR_PATH = '/auteur'

/** Date the bylines and author pages were last reviewed (sitemap lastmod). */
export const AUTHORS_UPDATED_ISO = '2026-10-30'

export interface AuthorProfile {
  name: string
  initials: string
  /** Short bio under articles and on the author page; always states the pen name. */
  bio: string
}

export interface AuthorPageCopy {
  kicker: string
  byline: string
  metaDescription: string
  penNameTitle: string
  penName: string
  methodTitle: string
  method: string
  methodologyLink: string
  latestTitle: string
  breadcrumbHome: string
}

export const AUTHORS: Record<Lang, AuthorProfile> = {
  fr: {
    name: 'Claire Morel',
    initials: 'CM',
    bio: "Claire Morel signe les guides de Home Nura en français. Passionnée de maison connectée, elle compare les appareils à partir des fiches techniques des fabricants, des avis d'utilisateurs et des résultats publiés par des organismes indépendants, sans tester elle-même les produits. Claire Morel est un nom de plume de la rédaction Home Nura.",
  },
  en: {
    name: 'Daniel Hughes',
    initials: 'DH',
    bio: "Daniel Hughes writes Home Nura's guides in English. A smart-home enthusiast, he compares appliances using manufacturer specifications, user reviews and results published by independent organisations, without testing products himself. Daniel Hughes is a pen name used by the Home Nura editorial team.",
  },
  de: {
    name: 'Jonas Weber',
    initials: 'JW',
    bio: 'Jonas Weber schreibt die deutschsprachigen Ratgeber von Home Nura. Als Smart-Home-Fan vergleicht er Geräte anhand von Herstellerangaben, Nutzerbewertungen und veröffentlichten Ergebnissen unabhängiger Prüfstellen, ohne die Produkte selbst zu prüfen. Jonas Weber ist ein Pseudonym der Home-Nura-Redaktion.',
  },
  es: {
    name: 'Pablo Navarro',
    initials: 'PN',
    bio: 'Pablo Navarro firma las guías de Home Nura en español. Apasionado de la casa conectada, compara los aparatos a partir de las fichas técnicas de los fabricantes, las opiniones de usuarios y los resultados publicados por organismos independientes, sin evaluar él mismo los productos. Pablo Navarro es un seudónimo de la redacción de Home Nura.',
  },
  it: {
    name: 'Giulia Romano',
    initials: 'GR',
    bio: 'Giulia Romano firma le guide di Home Nura in italiano. Appassionata di casa connessa, confronta gli apparecchi partendo dalle schede tecniche dei produttori, dalle opinioni degli utenti e dai risultati pubblicati da enti indipendenti, senza provare lei stessa i prodotti. Giulia Romano è uno pseudonimo della redazione di Home Nura.',
  },
  nl: {
    name: 'Sanne de Vries',
    initials: 'SV',
    bio: 'Sanne de Vries schrijft de Nederlandstalige gidsen van Home Nura. Als liefhebber van het slimme huis vergelijkt ze apparaten op basis van fabrieksspecificaties, gebruikersreviews en resultaten van onafhankelijke organisaties, zonder de producten zelf uit te proberen. Sanne de Vries is een pseudoniem van de redactie van Home Nura.',
  },
  pl: {
    name: 'Marta Nowak',
    initials: 'MN',
    bio: 'Marta Nowak pisze poradniki serwisu Home Nura w języku polskim. Interesuje się inteligentnym domem i porównuje urządzenia na podstawie specyfikacji producentów, opinii użytkowników oraz wyników publikowanych przez niezależne organizacje – sama nie testuje produktów. Marta Nowak to pseudonim, którym posługuje się redakcja Home Nura.',
  },
  sv: {
    name: 'Elin Lindqvist',
    initials: 'EL',
    bio: 'Elin Lindqvist skriver Home Nuras guider på svenska. Hon brinner för det smarta hemmet och jämför apparater utifrån tillverkarnas tekniska specifikationer, användarrecensioner och resultat som publicerats av oberoende organisationer, utan att själv testa produkterna. Elin Lindqvist är en pseudonym som används av Home Nuras redaktion. Texterna publiceras under ansvar av Miguel Marie, grundare av Home Nura.',
  },
  us: {
    name: 'Emily Carter',
    initials: 'EC',
    bio: "Emily Carter writes Home Nura's guides for readers in the United States. A smart-home enthusiast, she compares appliances using manufacturer specifications, user reviews, and results published by independent organizations, without testing products herself. Emily Carter is a pen name used by the Home Nura editorial team; Miguel Marie, founder of Home Nura, is responsible for what it publishes.",
  },
  ca: {
    name: 'Liam Tremblay',
    initials: 'LT',
    bio: "Liam Tremblay writes Home Nura's guides for readers in Canada. A smart-home enthusiast, he compares appliances using manufacturer specifications, user reviews and results published by independent organizations, without testing products himself. Liam Tremblay is a pen name used by the Home Nura editorial team; Miguel Marie, founder of Home Nura, is responsible for what it publishes.",
  },
}

export const AUTHOR_PAGE_COPY: Record<Lang, AuthorPageCopy> = {
  fr: {
    kicker: 'Autrice',
    byline: 'Par',
    metaDescription: 'Claire Morel, nom de plume de la rédaction Home Nura : comment nos comparatifs de maison connectée sont préparés, nos sources et nos derniers guides.',
    penNameTitle: 'Un nom de plume, en toute transparence',
    penName: 'Claire Morel est le nom de plume de la rédaction de Home Nura pour les lecteurs francophones : une signature par langue, stable et identifiable. La publication est placée sous la responsabilité de Miguel Marie, fondateur de Home Nura.',
    methodTitle: 'Comment nos guides sont préparés',
    method: "Chaque comparatif croise les fiches techniques des fabricants, les avis d'utilisateurs et les résultats publiés par des organismes indépendants (Que Choisir, Stiftung Warentest, Which?…), cités avec un lien. Nous ne testons pas les produits nous-mêmes et nous l'indiquons. Chaque guide porte sa date de mise à jour.",
    methodologyLink: 'Lire notre méthodologie',
    latestTitle: 'Derniers guides',
    breadcrumbHome: 'Accueil',
  },
  en: {
    kicker: 'Author',
    byline: 'By',
    metaDescription: 'Daniel Hughes, pen name of the Home Nura editorial team: how our smart-home comparisons are prepared, our sources and our latest guides.',
    penNameTitle: 'A pen name, openly',
    penName: 'Daniel Hughes is the pen name of the Home Nura editorial team for English-speaking readers: one byline per language, stable and recognisable. Publication is the responsibility of Miguel Marie, founder of Home Nura.',
    methodTitle: 'How our guides are prepared',
    method: 'Every comparison cross-checks manufacturer specifications, user reviews and results published by independent organisations (Which?, Stiftung Warentest, Que Choisir…), cited with a link. We do not test products ourselves, and we say so. Every guide shows the date of its last update.',
    methodologyLink: 'Read our methodology',
    latestTitle: 'Latest guides',
    breadcrumbHome: 'Home',
  },
  de: {
    kicker: 'Autor',
    byline: 'Von',
    metaDescription: 'Jonas Weber, Pseudonym der Home-Nura-Redaktion: wie unsere Smart-Home-Vergleiche entstehen, unsere Quellen und unsere neuesten Ratgeber.',
    penNameTitle: 'Ein Pseudonym, offen gesagt',
    penName: 'Jonas Weber ist das Pseudonym der Home-Nura-Redaktion für Leserinnen und Leser in Deutschland, Österreich und der Schweiz: ein fester, wiedererkennbarer Name pro Sprache. Verantwortlich für die Veröffentlichung ist Miguel Marie, Gründer von Home Nura.',
    methodTitle: 'So entstehen unsere Ratgeber',
    method: 'Jeder Vergleich stützt sich auf Herstellerangaben, Nutzerbewertungen und veröffentlichte Ergebnisse unabhängiger Prüfstellen wie der Stiftung Warentest, jeweils verlinkt. Wir prüfen die Produkte nicht selbst und sagen das offen. Jeder Ratgeber zeigt das Datum seiner letzten Aktualisierung.',
    methodologyLink: 'Unsere Methodik lesen',
    latestTitle: 'Neueste Ratgeber',
    breadcrumbHome: 'Startseite',
  },
  es: {
    kicker: 'Autor',
    byline: 'Por',
    metaDescription: 'Pablo Navarro, seudónimo de la redacción de Home Nura: cómo preparamos nuestras comparativas de casa conectada, nuestras fuentes y nuestras últimas guías.',
    penNameTitle: 'Un seudónimo, con total transparencia',
    penName: 'Pablo Navarro es el seudónimo de la redacción de Home Nura para los lectores en español: una firma por idioma, estable y reconocible. La publicación es responsabilidad de Miguel Marie, fundador de Home Nura.',
    methodTitle: 'Cómo preparamos nuestras guías',
    method: 'Cada comparativa cruza las fichas técnicas de los fabricantes, las opiniones de usuarios y los resultados publicados por organismos independientes (OCU, Stiftung Warentest, Which?…), citados con enlace. No evaluamos los productos nosotros mismos y lo decimos. Cada guía muestra la fecha de su última actualización.',
    methodologyLink: 'Leer nuestra metodología',
    latestTitle: 'Últimas guías',
    breadcrumbHome: 'Inicio',
  },
  it: {
    kicker: 'Autrice',
    byline: 'Di',
    metaDescription: 'Giulia Romano, pseudonimo della redazione di Home Nura: come prepariamo i confronti sulla casa connessa, le nostre fonti e le guide più recenti.',
    penNameTitle: 'Uno pseudonimo, in piena trasparenza',
    penName: 'Giulia Romano è lo pseudonimo della redazione di Home Nura per i lettori italiani: una firma per lingua, stabile e riconoscibile. La pubblicazione è sotto la responsabilità di Miguel Marie, fondatore di Home Nura.',
    methodTitle: 'Come prepariamo le nostre guide',
    method: 'Ogni confronto incrocia le schede tecniche dei produttori, le opinioni degli utenti e i risultati pubblicati da enti indipendenti (Altroconsumo, Stiftung Warentest, Which?…), citati con un link. Non proviamo i prodotti noi stessi e lo dichiariamo. Ogni guida riporta la data dell’ultimo aggiornamento.',
    methodologyLink: 'Leggi la nostra metodologia',
    latestTitle: 'Guide più recenti',
    breadcrumbHome: 'Home',
  },
  nl: {
    kicker: 'Auteur',
    byline: 'Door',
    metaDescription: 'Sanne de Vries, pseudoniem van de redactie van Home Nura: hoe onze vergelijkingen van slimme apparaten tot stand komen, onze bronnen en onze nieuwste gidsen.',
    penNameTitle: 'Een pseudoniem, zonder geheimen',
    penName: 'Sanne de Vries is het pseudoniem van de redactie van Home Nura voor Nederlandstalige lezers: één vaste, herkenbare naam per taal. Miguel Marie, oprichter van Home Nura, is verantwoordelijk voor de publicatie.',
    methodTitle: 'Zo komen onze gidsen tot stand',
    method: 'Elke vergelijking combineert fabrieksspecificaties, gebruikersreviews en resultaten van onafhankelijke organisaties (Consumentenbond, Stiftung Warentest, Which?…), telkens met een link. We proberen de producten niet zelf uit en zeggen dat ook. Elke gids toont de datum van de laatste update.',
    methodologyLink: 'Lees onze methodologie',
    latestTitle: 'Nieuwste gidsen',
    breadcrumbHome: 'Home',
  },
  pl: {
    kicker: 'Autorka',
    byline: 'Autorka:',
    metaDescription: 'Marta Nowak to pseudonim redakcji Home Nura. Zobacz, jak przygotowujemy porównania sprzętu do inteligentnego domu i z jakich źródeł korzystamy.',
    penNameTitle: 'Pseudonim – otwarcie i bez tajemnic',
    penName: 'Marta Nowak to pseudonim, pod którym redakcja Home Nura publikuje teksty dla polskich czytelników. W każdym języku używamy jednego, stałego i rozpoznawalnego podpisu. Za publikacje odpowiada Miguel Marie, założyciel serwisu Home Nura.',
    methodTitle: 'Jak powstają nasze poradniki',
    method: 'W każdym porównaniu zestawiamy specyfikacje producentów, opinie użytkowników i wyniki publikowane przez niezależne organizacje (Stiftung Warentest, Which?, Que Choisir…), zawsze z linkiem do źródła. Nie testujemy produktów samodzielnie i otwarcie o tym informujemy. Przy każdym poradniku podajemy datę ostatniej aktualizacji.',
    methodologyLink: 'Poznaj naszą metodologię',
    latestTitle: 'Najnowsze poradniki',
    breadcrumbHome: 'Strona główna',
  },
  sv: {
    kicker: 'Skribent',
    byline: 'Av',
    metaDescription: 'Elin Lindqvist, pseudonym för Home Nuras redaktion: hur våra jämförelser av smarta hem tas fram, våra källor och våra senaste guider.',
    penNameTitle: 'En pseudonym, öppet redovisad',
    penName: 'Elin Lindqvist är den pseudonym som Home Nuras redaktion använder för svenskspråkiga läsare: en signatur per språk, stabil och lätt att känna igen. Ansvaret för publiceringen ligger hos Miguel Marie, Home Nuras grundare.',
    methodTitle: 'Så tas våra guider fram',
    method: 'Varje jämförelse väger samman tillverkarnas produktblad, användaromdömen och resultat som oberoende organisationer har publicerat (Que Choisir, Stiftung Warentest, Which? …), med länk till källan. Vi provar inte produkterna själva, och det säger vi öppet. Varje guide visar när den senast uppdaterades.',
    methodologyLink: 'Läs om vår metod',
    latestTitle: 'Senaste guiderna',
    breadcrumbHome: 'Hem',
  },
  us: {
    kicker: 'Author',
    byline: 'By',
    metaDescription: 'Emily Carter, pen name of the Home Nura editorial team: how our smart-home comparisons are prepared, our sources and our latest guides.',
    penNameTitle: 'A pen name, openly',
    penName: 'Emily Carter is the pen name of the Home Nura editorial team for readers in the United States: one byline per language, consistent and easy to recognize. Publication is the responsibility of Miguel Marie, founder of Home Nura.',
    methodTitle: 'How our guides are prepared',
    method: 'Every comparison cross-checks manufacturer specs, owner reviews and results published by independent organizations (Which?, Stiftung Warentest, Que Choisir…), cited with a link. We don\'t test products ourselves, and we say so. Every guide shows the date it was last updated.',
    methodologyLink: 'Read our methodology',
    latestTitle: 'Latest guides',
    breadcrumbHome: 'Home',
  },
  ca: {
    kicker: 'Author',
    byline: 'By',
    metaDescription: 'Liam Tremblay, pen name of the Home Nura editorial team: how our smart-home comparisons are prepared, our sources and our latest guides.',
    penNameTitle: 'A pen name, openly',
    penName: 'Liam Tremblay is the pen name of the Home Nura editorial team for readers in Canada: one byline per language, stable and recognizable. Publication is the responsibility of Miguel Marie, founder of Home Nura.',
    methodTitle: 'How our guides are prepared',
    method: 'Every comparison cross-checks manufacturer specifications, user reviews and results published by independent testing organizations, cited with a link. We do not test products ourselves, and we say so. Every guide shows the date of its last update.',
    methodologyLink: 'Read our methodology',
    latestTitle: 'Latest guides',
    breadcrumbHome: 'Home',
  },
}

function resolve(lang: string): Lang {
  return isValidLang(lang) ? lang : 'fr'
}

export function getAuthor(lang: string): AuthorProfile {
  return AUTHORS[resolve(lang)]
}

export function getAuthorPageCopy(lang: string): AuthorPageCopy {
  return AUTHOR_PAGE_COPY[resolve(lang)]
}
