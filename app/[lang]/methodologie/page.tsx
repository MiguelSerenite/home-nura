/**
 * Phase Z — /methodologie cornerstone page.
 *
 * This is the EEAT anchor for the whole site. Google reads it as
 * "here is how these people actually work", which is what lets a
 * 50-page section outrank a 5,000-page thin affiliate farm. Every
 * product review, comparator, and best-for page will link back to
 * this route, so it needs to be:
 *   - dense with specific method (what we weigh, in what units)
 *   - calm in tone (no marketing hype)
 *   - translated into all 6 locales with equal depth
 *   - schema-marked with BreadcrumbList + FAQPage so SERP snippets
 *     pull the Q&A block into "People Also Ask" style panels.
 *
 * Not in scope here: the product-specific criteria (those live in
 * the category pages). This page is the "how", not the "what".
 */

import Navbar from '@/components/Navbar'
import Link from 'next/link'
import type { Metadata } from 'next'
import {
  buildPageMetadata,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from '@/lib/seo'
import { LANGUAGES, isValidLang, type Lang } from '@/lib/i18n'
import { Kicker, SectionHero, SiteFooter } from '@/components/ui'
import { ChevronRight } from 'lucide-react'

interface Pillar {
  title: string
  body: string
}

interface FaqEntry {
  question: string
  answer: string
}

interface Content {
  kicker: string
  title: string
  subtitle: string
  intro: string
  breadcrumbHome: string
  breadcrumbCurrent: string
  pillarsTitle: string
  pillars: Pillar[]
  faqTitle: string
  faq: FaqEntry[]
  ctaLabel: string
  ctaHref: string
}

const content: Record<Lang, Content> = {
  fr: {
    kicker: 'Méthodologie',
    title: 'Comment Home Nura compare et note',
    subtitle:
      'La grille complète — sources, pondérations, mises à jour, indépendance. Rien d\'opaque.',
    intro:
      'Home Nura est un éditeur indépendant basé en Europe. Nous comparons les appareils connectés de la maison sur 10 marchés (France, Allemagne, Royaume-Uni, Espagne, Italie, Pays-Bas, Pologne, Suède, États-Unis, Canada) avec la même grille pour chaque catégorie. Cette page détaille comment nous procédons, ce que nous pesons, et ce que nous ne faisons pas.',
    breadcrumbHome: 'Accueil',
    breadcrumbCurrent: 'Méthodologie',
    pillarsTitle: 'Les 5 piliers de notre méthode',
    pillars: [
      {
        title: '01 · Sources vérifiables',
        body:
          'Pour chaque produit nous croisons trois sources : fiches techniques constructeur, avis utilisateurs Amazon/Google (minimum 500 avis pondérés sur 12 mois), et tests indépendants de la presse spécialisée européenne (Que Choisir, Stiftung Warentest, Which?, OCU, Altroconsumo, Consumentenbond). Un produit sans consensus sur ces trois sources n\'entre pas dans la sélection.',
      },
      {
        title: '02 · Grille de notation Nura Score /10',
        body:
          'Chaque catégorie a sa propre pondération mais le Score Nura suit toujours la même échelle 0–10. Les critères principaux : performance réelle (30 %), rapport qualité-prix local (25 %), ergonomie et facilité d\'usage (15 %), consommation énergétique annuelle en euros (15 %), et durabilité/qualité de fabrication (15 %). Les détails par catégorie sont publiés sur chaque hub.',
      },
      {
        title: '03 · Des données locales, marché par marché',
        body:
          'Nous refusons les avis traduits depuis le site d\'un autre pays. Prix, disponibilité, consommation, protection des données (RGPD en Europe), type de prise et étiquette énergie sont collectés directement sur chaque marché. Un produit peut très bien être numéro 1 dans un pays et absent de notre classement dans un autre.',
      },
      {
        title: '04 · Rafraîchissements trimestriels minimum',
        body:
          'Les prix évoluent. Les ASIN sont retirés. Les marques sortent des versions révisées. Chaque catégorie est revue au minimum tous les 3 mois. Les pages qui n\'ont pas été mises à jour dans ce délai affichent un bandeau explicite. La date de dernière mise à jour est visible en haut de chaque comparatif.',
      },
      {
        title: '05 · Indépendance et transparence affiliée',
        body:
          'Home Nura est financé par le programme Partenaires Amazon (commission sur achat, sans surcoût pour vous). Tous nos liens Amazon passent par un seul compte Partenaires, avec un identifiant de suivi par version linguistique. Ils pointent vers Amazon.fr, sauf sur la version italienne, qui renvoie vers Amazon.it : grâce au programme « Global Earning », Amazon redirige les lecteurs des autres pays qui cliquent sur un lien Amazon.fr vers la boutique Amazon de leur pays, et la commission est versée sur ce même compte. Les commissions n\'influencent jamais le classement : un produit mal noté reste mal noté même s\'il rapporte plus. Aucun constructeur ne nous paie pour une place au podium. En cas de conflit d\'intérêts nous le signalons en tête de page.',
      },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        question: 'Pourquoi une édition par marché plutôt qu\'un site mondial ?',
        answer:
          'Parce que les prix, les fiches énergie, les certifications et la disponibilité changent d\'un marché à l\'autre. Un comparatif global moyenne tout et finit par être juste nulle part. Nous préférons des recommandations valables dans votre pays, même si cela demande dix éditions différentes.',
      },
      {
        question: 'Que signifie le Score Nura /10 ?',
        answer:
          'C\'est une note composite 0–10 qui agrège performance réelle, rapport qualité-prix local, ergonomie, consommation annuelle et durabilité, selon la pondération de chaque catégorie. Un 8/10 dans une catégorie exigeante (airfryers) n\'équivaut pas à un 8/10 dans une catégorie plus simple — la grille est rééquilibrée par catégorie.',
      },
      {
        question: 'Comment gérez-vous les conflits d\'intérêts ?',
        answer:
          'Aucun constructeur ne paie pour un placement. Les commissions d\'affiliation Amazon sont identiques quel que soit le classement, donc le modèle économique n\'incite pas à pousser un produit spécifique. Si nous recevons un produit en test prêté par un constructeur, nous le signalons clairement dans l\'article.',
      },
      {
        question: 'À quelle fréquence mettez-vous les prix à jour ?',
        answer:
          'Nous n\'affichons aucun prix de produit : Amazon modifie ses prix plusieurs fois par jour et n\'autorise leur affichage que par son interface produit officielle. Nos comparatifs parlent de gammes de budget (par exemple « moins de 100 € »), jamais du prix d\'un modèle. Cliquez sur le lien pour voir le prix et la disponibilité en temps réel sur Amazon : vous arrivez sur la boutique Amazon de votre pays.',
      },
      {
        question: 'Que faites-vous si un produit est retiré du marché ?',
        answer:
          'Nous retirons l\'ASIN de nos comparatifs sous 48 heures, conservons la fiche en archive avec un bandeau "produit retiré", et la remplaçons dans le classement par le meilleur équivalent disponible. Aucune page n\'est laissée avec un lien d\'achat mort.',
      },
    ],
    ctaLabel: 'Voir notre sélection cuisine connectée',
    ctaHref: '/cuisine-connectee',
  },
  en: {
    kicker: 'Methodology',
    title: 'How Home Nura compares and rates',
    subtitle:
      'The full grid — sources, weighting, refresh cadence, independence. Nothing opaque.',
    intro:
      'Home Nura is an independent publisher based in Europe. We compare connected home devices across 10 markets (France, Germany, UK, Spain, Italy, Netherlands, Poland, Sweden, United States, Canada) using the same grid in every category. This page explains exactly how we work, what we weight, and what we refuse to do.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Methodology',
    pillarsTitle: 'The 5 pillars of our method',
    pillars: [
      {
        title: '01 · Verifiable sources',
        body:
          'For every product we triangulate three sources: manufacturer specification sheets, Amazon/Google user reviews (minimum 500 weighted reviews over 12 months), and independent tests from European specialist press (Which?, Stiftung Warentest, Que Choisir, OCU, Altroconsumo, Consumentenbond). A product without consensus across these three sources does not make our shortlist.',
      },
      {
        title: '02 · Nura Score /10 grid',
        body:
          'Each category has its own weighting but the Nura Score always sits on a 0–10 scale. Core criteria: real performance (30 %), local value for money (25 %), ergonomics and ease of use (15 %), annual energy cost in euros (15 %), and durability / build quality (15 %). Per-category breakdowns are published on each hub page.',
      },
      {
        title: '03 · Local data, market by market',
        body:
          'We refuse reviews translated from another country\'s site. Prices, availability, energy consumption, data protection (GDPR in Europe), plug type and energy labels are collected directly from each market. A product can easily be #1 in one country and absent from our ranking in another.',
      },
      {
        title: '04 · Quarterly refresh, minimum',
        body:
          'Prices move. ASINs get pulled. Brands ship revised SKUs. Every category is reviewed at least every 3 months. Pages not updated within that window show an explicit freshness banner. The "last updated" date is visible at the top of every comparator.',
      },
      {
        title: '05 · Independence and affiliate transparency',
        body:
          'Home Nura is funded through the Amazon Associates programme (commission on purchase, no extra cost to you). All our Amazon links go through a single Associates account, with one tracking ID per language version. They point to Amazon.fr, except on the Italian version, which links to Amazon.it: through Amazon\'s Global Earning programme, readers in other countries who click an Amazon.fr link are redirected to their local Amazon store, and the commission is credited to that same account. Commissions never influence the ranking: a poorly scored product stays poorly scored even if it pays more. No manufacturer pays us for a podium spot. Conflicts of interest are disclosed at the top of the page when they arise.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        question: 'Why one edition per market rather than a global site?',
        answer:
          'Because prices, energy labels, certifications and availability change from market to market. A "global" comparison averages everything out and ends up accurate nowhere. We prefer recommendations that actually hold in your country, even if that means maintaining ten editions.',
      },
      {
        question: 'What does the Nura Score /10 actually mean?',
        answer:
          'It is a composite 0–10 score aggregating real performance, local value for money, ergonomics, annual energy cost and durability, weighted per category. An 8/10 in a demanding category (air fryers) is not equivalent to an 8/10 in a simpler one — the grid is rebalanced per category.',
      },
      {
        question: 'How do you handle conflicts of interest?',
        answer:
          'No manufacturer pays for placement. Amazon affiliate commissions are identical regardless of ranking, so the business model does not push us toward any specific product. If we receive a review sample on loan from a brand, we disclose it clearly inside the article.',
      },
      {
        question: 'How often are prices refreshed?',
        answer:
          'We do not display product prices: Amazon changes its prices several times a day and only allows them to be shown through its official product interface. Our comparisons talk about budget ranges (for example “under €100”), never the price of a specific model. Click the link to see the live price and availability on Amazon — you land on the Amazon store of your country.',
      },
      {
        question: 'What happens if a product is pulled from the market?',
        answer:
          'We remove the ASIN from our comparisons within 48 hours, keep the review archived with a "product retired" banner, and replace it in the ranking with the best remaining equivalent. No page is left with a dead buy link.',
      },
    ],
    ctaLabel: 'Explore our smart kitchen shortlist',
    ctaHref: '/cuisine-connectee',
  },
  de: {
    kicker: 'Methodik',
    title: 'Wie Home Nura vergleicht und bewertet',
    subtitle:
      'Das komplette Raster — Quellen, Gewichtung, Aktualisierungen, Unabhängigkeit. Nichts Undurchsichtiges.',
    intro:
      'Home Nura ist ein unabhängiger Publisher mit Sitz in Europa. Wir vergleichen vernetzte Haushaltsgeräte auf 10 Märkten (Frankreich, Deutschland, UK, Spanien, Italien, Niederlande, Polen, Schweden, USA, Kanada) mit demselben Raster in jeder Kategorie. Diese Seite erklärt genau, wie wir arbeiten, was wir gewichten und was wir bewusst nicht tun.',
    breadcrumbHome: 'Start',
    breadcrumbCurrent: 'Methodik',
    pillarsTitle: 'Die 5 Säulen unserer Methode',
    pillars: [
      {
        title: '01 · Nachprüfbare Quellen',
        body:
          'Für jedes Produkt triangulieren wir drei Quellen: Hersteller-Datenblätter, Amazon-/Google-Nutzerbewertungen (mindestens 500 gewichtete Rezensionen über 12 Monate) und unabhängige Tests der europäischen Fachpresse (Stiftung Warentest, Which?, Que Choisir, OCU, Altroconsumo, Consumentenbond). Ein Produkt ohne Konsens über diese drei Quellen schafft es nicht in die Auswahl.',
      },
      {
        title: '02 · Nura-Score-Raster /10',
        body:
          'Jede Kategorie hat ihre eigene Gewichtung, aber der Nura Score liegt immer auf einer 0–10-Skala. Kernkriterien: tatsächliche Leistung (30 %), lokales Preis-Leistungs-Verhältnis (25 %), Ergonomie und Bedienbarkeit (15 %), jährliche Energiekosten in Euro (15 %) und Langlebigkeit/Verarbeitung (15 %). Die Aufschlüsselung pro Kategorie steht auf jeder Hub-Seite.',
      },
      {
        title: '03 · Lokale Daten, Markt für Markt',
        body:
          'Wir lehnen Reviews ab, die von der Website eines anderen Landes übersetzt wurden. Preise, Verfügbarkeit, Energieverbrauch, Datenschutz (DSGVO in Europa), Steckertyp und Energielabel werden direkt im jeweiligen Markt erhoben. Ein Produkt kann in einem Land Platz 1 sein und in einem anderen in unserem Ranking fehlen.',
      },
      {
        title: '04 · Mindestens vierteljährliche Aktualisierung',
        body:
          'Preise bewegen sich. ASINs werden zurückgezogen. Hersteller liefern überarbeitete Versionen. Jede Kategorie wird mindestens alle 3 Monate überprüft. Seiten, die länger nicht aktualisiert wurden, zeigen ein explizites Aktualitäts-Banner. Das Datum der letzten Aktualisierung steht oben auf jedem Vergleich.',
      },
      {
        title: '05 · Unabhängigkeit und Affiliate-Transparenz',
        body:
          'Home Nura wird über das Amazon-Partnerprogramm finanziert (Provision beim Kauf, ohne Mehrkosten für Sie). Alle unsere Amazon-Links laufen über ein einziges Partnerkonto, mit einer eigenen Tracking-ID pro Sprachversion. Sie führen zu Amazon.fr, außer in der italienischen Version, die auf Amazon.it verlinkt: Über das Programm „Global Earning“ leitet Amazon Leser aus anderen Ländern, die auf einen Amazon.fr-Link klicken, zu ihrem lokalen Amazon-Shop weiter, und die Provision wird demselben Konto gutgeschrieben. Provisionen beeinflussen niemals das Ranking: Ein schlecht bewertetes Produkt bleibt schlecht bewertet, auch wenn es mehr einbringt. Kein Hersteller bezahlt uns für einen Podestplatz. Interessenskonflikte werden oben auf der Seite offengelegt.',
      },
    ],
    faqTitle: 'Häufige Fragen',
    faq: [
      {
        question: 'Warum eine Ausgabe pro Markt und keine globale Seite?',
        answer:
          'Weil Preise, Energielabels, Zertifizierungen und Verfügbarkeit von Markt zu Markt variieren. Ein "globaler" Vergleich mittelt alles und ist am Ende nirgendwo wirklich korrekt. Wir bevorzugen Empfehlungen, die in Ihrem Land tatsächlich gelten — auch wenn das zehn Ausgaben bedeutet.',
      },
      {
        question: 'Was bedeutet der Nura Score /10 wirklich?',
        answer:
          'Es ist eine zusammengesetzte 0–10-Bewertung, die tatsächliche Leistung, lokales Preis-Leistungs-Verhältnis, Ergonomie, jährliche Energiekosten und Langlebigkeit zusammenfasst — gewichtet je Kategorie. Ein 8/10 in einer anspruchsvollen Kategorie (Heißluftfritteusen) ist nicht gleich einem 8/10 in einer einfacheren — das Raster wird pro Kategorie neu kalibriert.',
      },
      {
        question: 'Wie gehen Sie mit Interessenskonflikten um?',
        answer:
          'Kein Hersteller zahlt für eine Platzierung. Die Amazon-Affiliate-Provisionen sind unabhängig vom Ranking gleich, daher drängt uns das Geschäftsmodell nicht zu einem bestimmten Produkt. Erhalten wir ein Leihgerät, weisen wir das im Artikel klar aus.',
      },
      {
        question: 'Wie oft werden die Preise aktualisiert?',
        answer:
          'Wir zeigen keine Produktpreise an: Amazon ändert Preise mehrmals täglich und erlaubt ihre Anzeige nur über die offizielle Produktschnittstelle. Unsere Vergleiche nennen Budgetklassen (zum Beispiel „unter 100 €“), nie den Preis eines bestimmten Modells. Klicken Sie auf den Link, um den aktuellen Preis und die Verfügbarkeit bei Amazon zu sehen — Sie landen im Amazon-Shop Ihres Landes.',
      },
      {
        question: 'Was passiert, wenn ein Produkt vom Markt genommen wird?',
        answer:
          'Wir entfernen die ASIN binnen 48 Stunden aus unseren Vergleichen, archivieren die Seite mit einem "Produkt zurückgezogen"-Banner und ersetzen sie im Ranking durch das beste verbleibende Äquivalent. Keine Seite bleibt mit einem toten Kauf-Link zurück.',
      },
    ],
    ctaLabel: 'Zur Auswahl Vernetzte Küche',
    ctaHref: '/cuisine-connectee',
  },
  es: {
    kicker: 'Metodología',
    title: 'Cómo Home Nura compara y puntúa',
    subtitle:
      'La rejilla completa — fuentes, ponderación, actualizaciones, independencia. Sin zonas opacas.',
    intro:
      'Home Nura es un medio independiente con sede en Europa. Comparamos dispositivos conectados del hogar en 10 mercados (Francia, Alemania, Reino Unido, España, Italia, Países Bajos, Polonia, Suecia, Estados Unidos, Canadá) con la misma rejilla en cada categoría. Esta página explica exactamente cómo trabajamos, qué pesamos y qué no hacemos.',
    breadcrumbHome: 'Inicio',
    breadcrumbCurrent: 'Metodología',
    pillarsTitle: 'Los 5 pilares de nuestro método',
    pillars: [
      {
        title: '01 · Fuentes verificables',
        body:
          'Para cada producto triangulamos tres fuentes: fichas técnicas del fabricante, opiniones de usuarios Amazon/Google (mínimo 500 reseñas ponderadas en 12 meses) y pruebas independientes de la prensa especializada europea (OCU, Que Choisir, Stiftung Warentest, Which?, Altroconsumo, Consumentenbond). Un producto sin consenso en estas tres fuentes no entra en la selección.',
      },
      {
        title: '02 · Rejilla Score Nura /10',
        body:
          'Cada categoría tiene su propia ponderación, pero el Score Nura siempre se sitúa en una escala 0–10. Criterios principales: rendimiento real (30 %), relación calidad-precio local (25 %), ergonomía y facilidad de uso (15 %), consumo energético anual en euros (15 %) y durabilidad/calidad de fabricación (15 %). El desglose por categoría se publica en cada hub.',
      },
      {
        title: '03 · Datos locales, mercado a mercado',
        body:
          'Rechazamos reseñas traducidas del sitio de otro país. Precios, disponibilidad, consumo, protección de datos (RGPD en Europa), tipo de enchufe y etiqueta energética se recopilan directamente en cada mercado. Un producto puede ser número 1 en un país y no aparecer en nuestra clasificación de otro.',
      },
      {
        title: '04 · Actualización trimestral como mínimo',
        body:
          'Los precios cambian. Los ASIN se retiran. Las marcas sacan versiones revisadas. Cada categoría se revisa al menos cada 3 meses. Las páginas no actualizadas en ese plazo muestran un aviso explícito. La fecha de última actualización es visible en la parte superior de cada comparativa.',
      },
      {
        title: '05 · Independencia y transparencia de afiliación',
        body:
          'Home Nura se financia a través del programa de Afiliados de Amazon (comisión por compra, sin coste extra para usted). Todos nuestros enlaces de Amazon pasan por una única cuenta de afiliado, con un ID de seguimiento para cada versión lingüística. Apuntan a Amazon.fr, salvo en la versión italiana, que enlaza a Amazon.it: gracias al programa «Global Earning», Amazon redirige a los lectores de otros países que hacen clic en un enlace de Amazon.fr a la tienda Amazon de su país, y la comisión se abona en esa misma cuenta. Las comisiones nunca influyen en la clasificación: un producto mal puntuado sigue mal puntuado aunque reporte más. Ningún fabricante nos paga por un puesto en el podio. Los conflictos de interés se indican en la parte superior de la página.',
      },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        question: '¿Por qué una edición por mercado y no un sitio global?',
        answer:
          'Porque los precios, las etiquetas energéticas, las certificaciones y la disponibilidad cambian según el mercado. Un comparativo "global" promedia todo y acaba siendo inexacto en todas partes. Preferimos recomendaciones válidas en su país, aunque eso requiera diez ediciones distintas.',
      },
      {
        question: '¿Qué significa realmente el Score Nura /10?',
        answer:
          'Es una puntuación compuesta 0–10 que agrega rendimiento real, relación calidad-precio local, ergonomía, consumo anual y durabilidad, ponderada por categoría. Un 8/10 en una categoría exigente (freidoras de aire) no equivale a un 8/10 en una más sencilla — la rejilla se recalibra por categoría.',
      },
      {
        question: '¿Cómo gestionan los conflictos de interés?',
        answer:
          'Ningún fabricante paga por aparecer en un puesto. Las comisiones de afiliación de Amazon son idénticas sin importar la clasificación, por lo que el modelo económico no empuja hacia un producto concreto. Si recibimos una unidad de prueba cedida por una marca, lo indicamos claramente en el artículo.',
      },
      {
        question: '¿Con qué frecuencia se actualizan los precios?',
        answer:
          'No mostramos precios de productos: Amazon cambia sus precios varias veces al día y solo permite mostrarlos a través de su interfaz oficial de productos. Nuestras comparativas hablan de rangos de presupuesto (por ejemplo «menos de 100 €»), nunca del precio de un modelo concreto. Haga clic en el enlace para ver el precio y la disponibilidad en tiempo real en Amazon: llegará a la tienda Amazon de su país.',
      },
      {
        question: '¿Qué hacen si retiran un producto del mercado?',
        answer:
          'Retiramos el ASIN de nuestras comparativas en 48 horas, conservamos la ficha archivada con el aviso "producto retirado" y lo sustituimos en la clasificación por el mejor equivalente disponible. Ninguna página queda con un enlace de compra muerto.',
      },
    ],
    ctaLabel: 'Ver nuestra selección de cocina conectada',
    ctaHref: '/cuisine-connectee',
  },
  it: {
    kicker: 'Metodologia',
    title: 'Come Home Nura confronta e valuta',
    subtitle:
      'La griglia completa — fonti, ponderazione, aggiornamenti, indipendenza. Niente di opaco.',
    intro:
      'Home Nura è un editore indipendente con sede in Europa. Confrontiamo dispositivi connessi per la casa su 10 mercati (Francia, Germania, Regno Unito, Spagna, Italia, Paesi Bassi, Polonia, Svezia, Stati Uniti, Canada) con la stessa griglia in ogni categoria. Questa pagina spiega esattamente come lavoriamo, cosa pesiamo e cosa rifiutiamo di fare.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Metodologia',
    pillarsTitle: 'I 5 pilastri del nostro metodo',
    pillars: [
      {
        title: '01 · Fonti verificabili',
        body:
          'Per ogni prodotto triangoliamo tre fonti: schede tecniche del produttore, recensioni utenti Amazon/Google (almeno 500 recensioni ponderate su 12 mesi) e test indipendenti della stampa specializzata europea (Altroconsumo, Que Choisir, Stiftung Warentest, Which?, OCU, Consumentenbond). Un prodotto senza consenso su queste tre fonti non entra nella selezione.',
      },
      {
        title: '02 · Griglia Nura Score /10',
        body:
          'Ogni categoria ha la propria ponderazione, ma il Nura Score si mantiene sempre su una scala 0–10. Criteri principali: prestazioni reali (30 %), rapporto qualità-prezzo locale (25 %), ergonomia e facilità d\'uso (15 %), costo energetico annuo in euro (15 %) e durabilità/qualità costruttiva (15 %). La ripartizione per categoria è pubblicata su ogni hub.',
      },
      {
        title: '03 · Dati locali, mercato per mercato',
        body:
          'Rifiutiamo le recensioni tradotte dal sito di un altro paese. Prezzi, disponibilità, consumi, protezione dei dati (GDPR in Europa), tipo di spina ed etichetta energetica vengono raccolti direttamente in ogni mercato. Un prodotto può benissimo essere primo in un paese e assente dalla nostra classifica in un altro.',
      },
      {
        title: '04 · Aggiornamento trimestrale minimo',
        body:
          'I prezzi cambiano. Gli ASIN vengono ritirati. I marchi pubblicano versioni riviste. Ogni categoria viene rivista almeno ogni 3 mesi. Le pagine non aggiornate entro quel termine mostrano un banner esplicito. La data di ultimo aggiornamento è visibile in cima a ogni confronto.',
      },
      {
        title: '05 · Indipendenza e trasparenza affiliata',
        body:
          'Home Nura è finanziata tramite il programma Amazon Affiliati (commissione sull\'acquisto, senza costi aggiuntivi per voi). Tutti i nostri link Amazon passano da un unico account di affiliazione, con un ID di tracciamento per ogni versione linguistica. In questa versione italiana puntano ad Amazon.it; nelle altre lingue puntano ad Amazon.fr e, grazie al programma «Global Earning», Amazon reindirizza i lettori di altri paesi che cliccano su un link Amazon.fr allo store Amazon del proprio paese. La commissione viene sempre accreditata sullo stesso account. Le commissioni non influenzano mai la classifica: un prodotto valutato male resta valutato male anche se rende di più. Nessun produttore ci paga per un posto sul podio. I conflitti di interesse vengono dichiarati in cima alla pagina.',
      },
    ],
    faqTitle: 'Domande frequenti',
    faq: [
      {
        question: 'Perché un\'edizione per mercato e non un sito globale?',
        answer:
          'Perché prezzi, etichette energetiche, certificazioni e disponibilità cambiano da mercato a mercato. Un confronto "globale" media tutto e finisce per essere impreciso ovunque. Preferiamo raccomandazioni valide nel vostro paese, anche se significa gestire dieci edizioni.',
      },
      {
        question: 'Cosa significa davvero il Nura Score /10?',
        answer:
          'È un punteggio composto 0–10 che aggrega prestazioni reali, rapporto qualità-prezzo locale, ergonomia, costo energetico annuo e durabilità, ponderati per categoria. Un 8/10 in una categoria impegnativa (friggitrici ad aria) non equivale a un 8/10 in una più semplice — la griglia viene ricalibrata per categoria.',
      },
      {
        question: 'Come gestite i conflitti di interesse?',
        answer:
          'Nessun produttore paga per comparire. Le commissioni di affiliazione Amazon sono identiche indipendentemente dalla classifica, quindi il modello di business non ci spinge verso un prodotto specifico. Se riceviamo un campione in prestito, lo indichiamo chiaramente nell\'articolo.',
      },
      {
        question: 'Con che frequenza aggiornate i prezzi?',
        answer:
          'Non mostriamo i prezzi dei prodotti: Amazon cambia i prezzi più volte al giorno e ne consente la visualizzazione solo tramite la sua interfaccia ufficiale per i prodotti. I nostri confronti parlano di fasce di budget (ad esempio «meno di 100 €»), mai del prezzo di un singolo modello. Cliccate sul link per vedere prezzo e disponibilità in tempo reale su Amazon: arriverete sullo store Amazon del vostro paese.',
      },
      {
        question: 'Cosa succede se un prodotto viene ritirato dal mercato?',
        answer:
          'Rimuoviamo l\'ASIN dai confronti entro 48 ore, conserviamo la scheda archiviata con il banner "prodotto ritirato" e la sostituiamo nella classifica con il miglior equivalente disponibile. Nessuna pagina resta con un link di acquisto morto.',
      },
    ],
    ctaLabel: 'Vedi la nostra selezione cucina connessa',
    ctaHref: '/cuisine-connectee',
  },
  nl: {
    kicker: 'Methodologie',
    title: 'Hoe Home Nura vergelijkt en beoordeelt',
    subtitle:
      'Het volledige raster — bronnen, weging, updates, onafhankelijkheid. Niets ondoorzichtigs.',
    intro:
      'Home Nura is een onafhankelijke uitgever met een basis in Europa. We vergelijken slimme huishoudapparaten op 10 markten (Frankrijk, Duitsland, VK, Spanje, Italië, Nederland, Polen, Zweden, Verenigde Staten, Canada) met hetzelfde raster in elke categorie. Deze pagina legt precies uit hoe we werken, wat we wegen en wat we bewust niet doen.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Methodologie',
    pillarsTitle: 'De 5 pijlers van onze methode',
    pillars: [
      {
        title: '01 · Verifieerbare bronnen',
        body:
          'Voor elk product trianguleren we drie bronnen: fabrieksdatabladen, Amazon-/Google-gebruikersreviews (minimaal 500 gewogen reviews over 12 maanden) en onafhankelijke tests van de Europese vakpers (Consumentenbond, Which?, Stiftung Warentest, Que Choisir, OCU, Altroconsumo). Een product zonder consensus over deze drie bronnen haalt onze selectie niet.',
      },
      {
        title: '02 · Nura Score /10-raster',
        body:
          'Elke categorie heeft zijn eigen weging, maar de Nura Score blijft altijd op een 0–10-schaal. Kerncriteria: reële prestaties (30 %), lokale prijs-kwaliteitverhouding (25 %), ergonomie en gebruiksgemak (15 %), jaarlijkse energiekosten in euro (15 %) en duurzaamheid/bouwkwaliteit (15 %). De uitsplitsing per categorie staat op elke hub.',
      },
      {
        title: '03 · Lokale data, markt per markt',
        body:
          'We weigeren reviews die van de site van een ander land vertaald zijn. Prijzen, beschikbaarheid, verbruik, gegevensbescherming (AVG in Europa), stekkertype en energielabel halen we rechtstreeks uit elke markt. Een product kan prima nummer één zijn in het ene land en afwezig in onze ranglijst van een ander.',
      },
      {
        title: '04 · Minimaal per kwartaal bijgewerkt',
        body:
          'Prijzen bewegen. ASINs worden teruggetrokken. Merken brengen herziene versies uit. Elke categorie wordt minstens elke 3 maanden herzien. Pagina\'s die in die periode niet zijn bijgewerkt, tonen een expliciete banner. De datum van de laatste update staat bovenaan elke vergelijking.',
      },
      {
        title: '05 · Onafhankelijkheid en affiliate-transparantie',
        body:
          'Home Nura wordt gefinancierd via het Amazon Associates-programma (commissie bij aankoop, zonder meerkosten voor u). Al onze Amazon-links lopen via één partneraccount, met een eigen tracking-ID per taalversie. Ze verwijzen naar Amazon.fr, behalve op de Italiaanse versie, die naar Amazon.it linkt: via het programma \'Global Earning\' stuurt Amazon lezers uit andere landen die op een Amazon.fr-link klikken door naar de Amazon-winkel van hun land, en de commissie wordt op hetzelfde account bijgeschreven. Commissies beïnvloeden nooit de ranglijst: een slecht beoordeeld product blijft slecht beoordeeld, ook als het meer oplevert. Geen enkele fabrikant betaalt voor een podiumplaats. Belangenconflicten worden bovenaan de pagina aangegeven.',
      },
    ],
    faqTitle: 'Veelgestelde vragen',
    faq: [
      {
        question: 'Waarom een editie per markt en geen wereldwijde site?',
        answer:
          'Omdat prijzen, energielabels, certificeringen en beschikbaarheid per markt verschillen. Een "wereldwijde" vergelijking middelt alles uit en is nergens echt correct. We kiezen voor aanbevelingen die in úw land kloppen, ook als dat tien edities betekent.',
      },
      {
        question: 'Wat betekent de Nura Score /10 precies?',
        answer:
          'Het is een samengestelde 0–10-score die reële prestaties, lokale prijs-kwaliteit, ergonomie, jaarlijkse energiekosten en duurzaamheid samenbrengt, gewogen per categorie. Een 8/10 in een veeleisende categorie (airfryers) staat niet gelijk aan een 8/10 in een eenvoudigere — het raster wordt per categorie opnieuw gekalibreerd.',
      },
      {
        question: 'Hoe gaan jullie om met belangenconflicten?',
        answer:
          'Geen enkele fabrikant betaalt voor plaatsing. Amazon-affiliate commissies zijn identiek ongeacht de ranglijst, dus het verdienmodel duwt ons niet naar een specifiek product. Krijgen we een testexemplaar in bruikleen, dan melden we dat duidelijk in het artikel.',
      },
      {
        question: 'Hoe vaak worden prijzen bijgewerkt?',
        answer:
          'We tonen geen productprijzen: Amazon wijzigt prijzen meerdere keren per dag en staat weergave alleen toe via zijn officiële productinterface. Onze vergelijkingen noemen budgetklassen (bijvoorbeeld \'onder €100\'), nooit de prijs van een specifiek model. Klik op de link voor de actuele prijs en beschikbaarheid op Amazon — u komt in de Amazon-winkel van uw land terecht.',
      },
      {
        question: 'Wat gebeurt er als een product van de markt wordt gehaald?',
        answer:
          'We verwijderen de ASIN binnen 48 uur uit onze vergelijkingen, bewaren de pagina gearchiveerd met een banner "product ingetrokken" en vervangen hem in de ranglijst door het beste resterende equivalent. Geen enkele pagina blijft achter met een dode koop-link.',
      },
    ],
    ctaLabel: 'Bekijk onze slimme keuken-selectie',
    ctaHref: '/cuisine-connectee',
  },
  pl: {
    kicker: 'Metodologia',
    title: 'Jak serwis Home Nura porównuje i ocenia sprzęt',
    subtitle: 'Wszystkie zasady oceny: źródła, wagi, aktualizacje i niezależność. Niczego nie ukrywamy.',
    intro: 'Home Nura to niezależny wydawca z siedzibą w Europie. Porównujemy urządzenia do inteligentnego domu na 10 rynkach (Francja, Niemcy, Wielka Brytania, Hiszpania, Włochy, Holandia, Polska, Szwecja, Stany Zjednoczone, Kanada), w każdej kategorii według tych samych zasad. Na tej stronie wyjaśniamy, jak pracujemy, co bierzemy pod uwagę i czego nie robimy.',
    breadcrumbHome: 'Strona główna',
    breadcrumbCurrent: 'Metodologia',
    pillarsTitle: 'Pięć filarów naszej metody',
    pillars: [
      {
        title: '01 · Weryfikowalne źródła',
        body: 'Każdy produkt sprawdzamy w trzech źródłach: w kartach katalogowych producenta, w opiniach użytkowników z Amazon i Google (co najmniej 500 opinii z 12 miesięcy, uwzględnianych z odpowiednią wagą) oraz w niezależnych testach europejskiej prasy specjalistycznej (Que Choisir, Stiftung Warentest, Which?, OCU, Altroconsumo, Consumentenbond). Jeśli te trzy źródła nie dają spójnego obrazu, produkt nie trafia do zestawienia.',
      },
      {
        title: '02 · System oceny: Ocena Nura /10',
        body: 'Każda kategoria ma własne wagi, ale Ocena Nura zawsze jest wystawiana w tej samej skali 0–10. Główne kryteria: rzeczywiste działanie (30%), stosunek jakości do ceny na danym rynku (25%), ergonomia i łatwość obsługi (15%), roczny koszt energii wyliczany w euro (15%) oraz trwałość i jakość wykonania (15%). Szczegóły dla każdej kategorii publikujemy na jej stronie.',
      },
      {
        title: '03 · Dane lokalne, rynek po rynku',
        body: 'Nie korzystamy z recenzji przetłumaczonych z serwisów z innych krajów. Ceny, dostępność, zużycie energii, ochronę danych (RODO w Europie), typ wtyczki i etykietę energetyczną sprawdzamy bezpośrednio na każdym rynku. Produkt może być numerem 1 w jednym kraju, a mimo to nie znaleźć się w naszym rankingu w innym.',
      },
      {
        title: '04 · Aktualizacje co najmniej raz na kwartał',
        body: 'Ceny się zmieniają, numery ASIN znikają, a marki wprowadzają odświeżone wersje. Dlatego każdą kategorię przeglądamy co najmniej raz na trzy miesiące. Na stronach, których nie zaktualizowaliśmy w tym czasie, wyświetla się wyraźny komunikat. Datę ostatniej aktualizacji widać na górze każdego porównania.',
      },
      {
        title: '05 · Niezależność i jawne zasady afiliacji',
        body: 'Home Nura jest finansowany z Programu Partnerskiego Amazon (prowizja od zakupu, bez dodatkowych kosztów dla Ciebie). Wszystkie nasze linki do Amazon działają w ramach jednego konta partnerskiego, z osobnym identyfikatorem śledzenia dla każdej wersji językowej. Prowadzą do Amazon.fr, z wyjątkiem wersji włoskiej, która kieruje do Amazon.it: dzięki programowi „Global Earning” Amazon przekierowuje czytelników z innych krajów, którzy klikną link do Amazon.fr, do sklepu Amazon w ich kraju, a prowizja trafia na to samo konto. Prowizje nigdy nie wpływają na ranking: produkt słabo oceniony pozostaje słabo oceniony, nawet jeśli przynosi większy zarobek. Żaden producent nie płaci nam za miejsce na podium. W razie konfliktu interesów informujemy o tym na górze strony.',
      },
    ],
    faqTitle: 'Najczęstsze pytania',
    faq: [
      {
        question: 'Dlaczego osobne wydanie dla każdego rynku, a nie jeden globalny serwis?',
        answer: 'Bo ceny, etykiety energetyczne, certyfikaty i dostępność różnią się w zależności od rynku. Porównanie globalne wszystko uśrednia i w końcu nie jest trafne nigdzie. Wolimy rekomendacje, które sprawdzają się w Twoim kraju, nawet jeśli wymaga to dziesięciu osobnych wydań.',
      },
      {
        question: 'Co oznacza Ocena Nura /10?',
        answer: 'To łączna ocena w skali 0–10, która uwzględnia rzeczywiste działanie, stosunek jakości do ceny na danym rynku, ergonomię, roczne zużycie energii i trwałość – z wagami ustalonymi dla danej kategorii. Ocena 8/10 w wymagającej kategorii (frytkownice) to nie to samo co 8/10 w kategorii prostszej, bo wagi kryteriów ustalamy osobno dla każdej kategorii.',
      },
      {
        question: 'Jak radzicie sobie z konfliktami interesów?',
        answer: 'Żaden producent nie płaci za miejsce w rankingu. Prowizje afiliacyjne Amazon są takie same niezależnie od pozycji w rankingu, więc nasz model biznesowy nie skłania nas do promowania konkretnego produktu. Jeśli producent użyczy nam urządzenia, wyraźnie informujemy o tym w artykule.',
      },
      {
        question: 'Jak często aktualizujecie ceny?',
        answer: 'Nie podajemy cen produktów: Amazon zmienia je kilka razy dziennie i pozwala je wyświetlać wyłącznie przez swój oficjalny interfejs. W porównaniach mówimy o przedziałach cenowych (np. „poniżej 400 zł”), nigdy o cenie konkretnego modelu. Aktualną cenę i dostępność sprawdzisz na Amazon po kliknięciu linku – trafisz do sklepu Amazon w swoim kraju.',
      },
      {
        question: 'Co robicie, gdy produkt zostaje wycofany z rynku?',
        answer: 'W ciągu 48 godzin usuwamy jego numer ASIN z porównań, kartę produktu przenosimy do archiwum z oznaczeniem „produkt wycofany”, a w rankingu zastępujemy go najlepszym dostępnym odpowiednikiem. Na żadnej stronie nie zostawiamy niedziałającego linku do zakupu.',
      },
    ],
    ctaLabel: 'Zobacz nasze zestawienie urządzeń do inteligentnej kuchni',
    ctaHref: '/cuisine-connectee',
  },
  sv: {
    kicker: 'Metod',
    title: 'Så jämför och betygsätter Home Nura',
    subtitle: 'Hela bedömningsmallen – källor, viktning, uppdateringar, oberoende. Inget hemlighetsmakeri.',
    intro: 'Home Nura är en oberoende utgivare med bas i Europa. Vi jämför smarta apparater för hemmet på 10 marknader (Frankrike, Tyskland, Storbritannien, Spanien, Italien, Nederländerna, Polen, Sverige, USA, Kanada) med samma bedömningsmall i varje kategori. Här beskriver vi hur vi arbetar, vad vi väger in och vad vi inte gör.',
    breadcrumbHome: 'Hem',
    breadcrumbCurrent: 'Metod',
    pillarsTitle: 'De 5 grundpelarna i vår metod',
    pillars: [
      {
        title: '01 · Källor som går att kontrollera',
        body: 'För varje produkt stämmer vi av tre källor mot varandra: tillverkarnas produktblad, användaromdömen på Amazon och Google (minst 500 viktade omdömen under 12 månader) och oberoende utvärderingar i europeisk fackpress (Que Choisir, Stiftung Warentest, Which?, OCU, Altroconsumo, Consumentenbond). En produkt som inte får samstämmiga omdömen i alla tre källorna kommer inte med i urvalet.',
      },
      {
        title: '02 · Bedömningsmallen Nura Score /10',
        body: 'Varje kategori har sin egen viktning, men Nura Score följer alltid samma skala från 0 till 10. Huvudkriterierna är faktisk prestanda (30 %), prisvärdhet på den egna marknaden (25 %), ergonomi och användarvänlighet (15 %), årlig energikostnad i euro (15 %) samt hållbarhet och byggkvalitet (15 %). Detaljerna för varje kategori publiceras på respektive kategorisida.',
      },
      {
        title: '03 · Lokala data, marknad för marknad',
        body: 'Vi använder inga recensioner som översatts från ett annat lands sajter. Priser, tillgänglighet, förbrukning, dataskydd (GDPR i Europa), kontakttyp och energimärkning hämtar vi direkt från varje marknad. En produkt kan mycket väl vara nr 1 i ett land och ändå saknas i vår rankning i ett annat.',
      },
      {
        title: '04 · Uppdatering minst varje kvartal',
        body: 'Priserna ändras. ASIN-nummer försvinner. Märkena släpper reviderade versioner. Varje kategori gås igenom minst var tredje månad. Sidor som inte har uppdaterats inom den tiden visar en tydlig banner om det. Datumet för senaste uppdatering syns högst upp i varje jämförelse.',
      },
      {
        title: '05 · Oberoende och öppenhet kring affiliatelänkar',
        body: 'Home Nura finansieras genom Amazons partnerprogram (provision på köp, utan extra kostnad för dig). Alla våra Amazon-länkar går via ett och samma partnerkonto, med ett eget spårnings-id för varje språkversion. De leder till Amazon.fr, utom i den italienska versionen, som länkar till Amazon.it. Läsare i andra länder som klickar på en länk till Amazon.fr skickas via Amazons program ”Global Earning” vidare till Amazonbutiken i sitt eget land, och provisionen går till samma konto. Provisionerna påverkar aldrig rankningen: en produkt med lågt betyg behåller sitt låga betyg även om den ger mer i provision. Ingen tillverkare betalar oss för en pallplats. Om det finns en intressekonflikt skriver vi det högst upp på sidan.',
      },
    ],
    faqTitle: 'Vanliga frågor',
    faq: [
      {
        question: 'Varför en utgåva per marknad och inte en global sajt?',
        answer: 'Priser, energimärkning, certifieringar och tillgänglighet skiljer sig från marknad till marknad. En global jämförelse blir ett genomsnitt av allt och stämmer till slut ingenstans. Vi föredrar rekommendationer som gäller i ditt land, även om det kräver tio olika utgåvor.',
      },
      {
        question: 'Vad betyder Nura Score /10?',
        answer: 'Det är ett sammanvägt betyg från 0 till 10 som bygger på faktisk prestanda, prisvärdhet på den egna marknaden, ergonomi, årlig förbrukning och hållbarhet, med en viktning som är anpassad till varje kategori. Betyget 8/10 i en krävande kategori (airfryrar) motsvarar inte 8/10 i en enklare – bedömningsmallen balanseras om kategori för kategori.',
      },
      {
        question: 'Hur hanterar ni intressekonflikter?',
        answer: 'Ingen tillverkare betalar för en placering. Amazons provision är densamma oavsett var produkten hamnar i rankningen, så affärsmodellen ger oss inget skäl att lyfta fram en viss produkt. Om en tillverkare lånar ut en produkt till oss skriver vi det tydligt i artikeln.',
      },
      {
        question: 'Hur ofta uppdaterar ni priserna?',
        answer: 'Vi visar inga produktpriser: Amazon ändrar sina priser flera gånger om dagen och tillåter bara att de visas via sitt officiella produktgränssnitt. Våra jämförelser anger prisklasser (till exempel ”under 1 000 kr”), aldrig priset på en enskild modell. Klicka på länken för att se aktuellt pris och tillgänglighet på Amazon – du hamnar i Amazonbutiken i ditt land.',
      },
      {
        question: 'Vad gör ni om en produkt tas bort från marknaden?',
        answer: 'Vi tar bort ASIN-numret från våra jämförelser inom 48 timmar, arkiverar produktsidan med bannern ”produkten har utgått” och ersätter produkten i rankningen med det bästa likvärdiga alternativet som finns kvar. Ingen sida får stå kvar med en död köplänk.',
      },
    ],
    ctaLabel: 'Se vårt urval för smart kök',
    ctaHref: '/cuisine-connectee',
  },
  us: {
    kicker: 'Methodology',
    title: 'How Home Nura Compares and Rates Products',
    subtitle: 'The full scoring grid — sources, weighting, update schedule, independence. Nothing hidden.',
    intro: 'Home Nura is an independent publisher based in Europe that compares smart home devices with the same scoring grid in every category, across 10 markets (France, Germany, the UK, Spain, Italy, the Netherlands, Poland, Sweden, the United States and Canada). This page explains exactly how we work, what we weigh and what we refuse to do.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Methodology',
    pillarsTitle: 'The 5 pillars of our method',
    pillars: [
      {
        title: '01 · Verifiable sources',
        body: 'For every product, we cross-check three sources: manufacturer spec sheets, Amazon and Google owner reviews (minimum 500 weighted reviews over 12 months), and independent test results from European consumer magazines (Which?, Stiftung Warentest, Que Choisir, OCU, Altroconsumo, Consumentenbond). If those three sources don\'t agree on a product, it doesn\'t make our shortlist.',
      },
      {
        title: '02 · The Nura Score /10 grid',
        body: 'Each category has its own weighting, but the Nura Score always uses the same 0–10 scale. Core criteria: real-world performance (30%), value for the money in your market (25%), ergonomics and ease of use (15%), annual energy cost (15%), and durability and build quality (15%). The breakdown for each category is published on its category page.',
      },
      {
        title: '03 · Local market data first',
        body: 'We don\'t base our picks on reviews translated from other sites. Prices, availability, energy use, privacy compliance (GDPR in Europe), plug type and energy labels are collected directly from each local market. A product can be No. 1 in one country and not make the cut in another.',
      },
      {
        title: '04 · Refreshed at least quarterly',
        body: 'Prices move. ASINs get pulled. Brands release revised models. Every category is reviewed at least every 3 months. Pages that haven\'t been updated within that window display a clear notice. The “last updated” date appears at the top of every comparison.',
      },
      {
        title: '05 · Independence and affiliate transparency',
        body: 'Home Nura is funded through the Amazon Associates program (we earn a commission on purchases, at no extra cost to you). All our Amazon links run through a single Associates account, with one tracking ID for each edition of the site. They point to Amazon.fr, except on the Italian edition, which links to Amazon.it. Through Amazon\'s Global Earning program, readers in other countries, the US included, who click an Amazon.fr link are redirected to their local Amazon store, and the commission is credited to that same account. Commissions never influence the ranking: a product with a poor score keeps its poor score even if it pays more. No manufacturer pays us for a top spot. When a conflict of interest arises, we disclose it at the top of the page.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        question: 'Why separate editions for each market instead of one global site?',
        answer: 'Because prices, energy labels, certifications and availability change from one market to the next. A “global” comparison averages everything out and ends up accurate nowhere. We\'d rather give you recommendations that hold up in your country, even if that means maintaining ten editions.',
      },
      {
        question: 'What does the Nura Score /10 actually mean?',
        answer: 'It\'s a composite score from 0 to 10 that combines real-world performance, value for the money in your market, ergonomics, annual energy cost and durability, weighted by category. An 8/10 in a demanding category (air fryers) isn\'t the same as an 8/10 in a simpler one: the grid is rebalanced for each category.',
      },
      {
        question: 'How do you handle conflicts of interest?',
        answer: 'No manufacturer pays for placement. Amazon affiliate commissions are the same regardless of ranking, so our business model gives us no reason to push a particular product. If a brand ever lends us a product, we say so clearly in the article.',
      },
      {
        question: 'How often do you update prices?',
        answer: 'We don\'t display product prices: Amazon changes its prices several times a day and only allows them to be shown through its official product interface. Our comparisons talk about budget ranges (for example, “under $100”), never the price of a specific model. Click the link to see the live price and availability on Amazon: you\'ll land on your country\'s Amazon store.',
      },
      {
        question: 'What happens if a product is discontinued?',
        answer: 'We remove the ASIN from our comparisons within 48 hours, archive the product page with a “product discontinued” banner and replace it in the ranking with the best available equivalent. No page is ever left with a dead buy link.',
      },
    ],
    ctaLabel: 'Explore our smart kitchen picks',
    ctaHref: '/cuisine-connectee',
  },
  ca: {
    kicker: 'Methodology',
    title: 'How We Compare and Rate Smart Home Products',
    subtitle: 'Our full scoring system — sources, weighting, update schedule, independence. Nothing hidden.',
    intro: 'Home Nura is an independent publisher based in Europe. We compare smart home devices across 10 markets (France, Germany, the UK, Spain, Italy, the Netherlands, Poland, Sweden, the United States and Canada) with the same scoring system in every category. This page explains exactly how we work, how we weight each criterion and what we refuse to do.',
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'Methodology',
    pillarsTitle: 'The five pillars of our method',
    pillars: [
      {
        title: '01 · Verifiable sources',
        body: 'For every product, we cross-check three sources: manufacturer spec sheets, Amazon and Google user reviews (a minimum of 500 weighted reviews over 12 months) and independent tests published by consumer organizations and the specialist press. If the three sources don\'t agree on a product, it doesn\'t make our shortlist.',
      },
      {
        title: '02 · How the Nura Score /10 works',
        body: 'Each category has its own weighting, but the Nura Score always uses the same 0–10 scale. The core criteria are real-world performance (30%), value for money in each market (25%), ergonomics and ease of use (15%), annual energy cost (15%) and durability and build quality (15%). The breakdown for each category is published on its category page.',
      },
      {
        title: '03 · Local data, market by market',
        body: 'We don\'t recycle reviews translated from other sites. Prices, availability, energy use, data protection, plug compatibility and energy labels are collected directly from each market we cover. A product can easily be No. 1 in one country and missing from our rankings in another. Models and versions sold in Canada can differ from the European ones: check that the listing is for a 120 V North American model.',
      },
      {
        title: '04 · Updated at least every quarter',
        body: 'Prices change. ASINs get pulled. Brands release revised versions. Every category is reviewed at least every three months, and any page that hasn\'t been updated within that window shows a clear banner saying so. The “last updated” date appears at the top of every comparison.',
      },
      {
        title: '05 · Independence and affiliate transparency',
        body: 'Home Nura is funded through the Amazon Associates program (we earn a commission on purchases, at no extra cost to you). All our Amazon links run through a single Associates account, with one tracking ID for each edition of the site. They point to Amazon\'s French store, except on the Italian edition, which links to Amazon\'s Italian store. Through Amazon\'s Global Earning program, readers in other countries, Canada included, who click a link to the French store are redirected to their local Amazon store, and the commission is credited to that same account. Commissions never influence the ranking: a product with a poor score keeps its poor score even if it pays more. No manufacturer pays us for a top spot. When a conflict of interest arises, we disclose it at the top of the page.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        question: 'Why build the site market by market instead of globally?',
        answer: 'Because prices, energy labels, certifications and availability change from one market to the next. A “global” comparison averages everything out and ends up accurate nowhere. We\'d rather make recommendations that hold up market by market, even if that means maintaining ten editions.',
      },
      {
        question: 'What does the Nura Score /10 actually mean?',
        answer: 'It\'s a composite score from 0 to 10 that combines real-world performance, value for money in each market, ergonomics, annual energy cost and durability, weighted by category. An 8/10 in a demanding category (air fryers) isn\'t the same as an 8/10 in a simpler one: the scoring is rebalanced for each category.',
      },
      {
        question: 'How do you handle conflicts of interest?',
        answer: 'No manufacturer pays for placement. Amazon affiliate commissions are the same regardless of ranking, so our business model gives us no reason to push a particular product. If a brand lends us a review sample, we say so clearly in the article.',
      },
      {
        question: 'How often do you update prices?',
        answer: 'We don\'t display product prices: Amazon changes its prices several times a day and only allows them to be shown through its official product interface. Our comparisons talk about budget ranges (for example, “under $150”), never the price of a specific model. Click the link to see the current price and availability on Amazon: you\'ll land on your local Amazon store.',
      },
      {
        question: 'What happens when a product is discontinued?',
        answer: 'We remove the ASIN from our comparisons within 48 hours, archive the product page with a “product discontinued” banner and replace the product in the ranking with the best equivalent still available. No page is ever left with a dead buy link.',
      },
    ],
    ctaLabel: 'Explore our smart kitchen shortlist',
    ctaHref: '/cuisine-connectee',
  },
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const c = content[safeLang]
  return buildPageMetadata({
    lang: safeLang,
    path: '/methodologie',
    title: `${c.title} | Home Nura`,
    description: c.intro,
  })
}

export async function generateStaticParams() {
  return LANGUAGES.map((lang) => ({ lang }))
}

export default async function MethodologiePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const safeLang: Lang = isValidLang(lang) ? lang : 'fr'
  const c = content[safeLang]
  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: c.breadcrumbHome, path: '' },
    { name: c.breadcrumbCurrent, path: '/methodologie' },
  ])

  const faqSchema = buildFaqPageSchema(c.faq)

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Navbar currentLang={safeLang} />

      <main id="main">
        {/* Breadcrumb */}
        <nav
          className="max-w-6xl mx-auto px-6 pt-10 text-xs text-slate-500"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href={`/${safeLang}`}
                className="hover:text-brand-600 transition-colors"
              >
                {c.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-slate-400" /></li>
            <li className="text-slate-600 font-medium">{c.breadcrumbCurrent}</li>
          </ol>
        </nav>

        <SectionHero
          kicker={c.kicker}
          title={c.title}
          subtitle={c.subtitle}
          intro={c.intro}
        />

        {/* Pillars */}
        <section className="max-w-5xl mx-auto px-4 md:px-6 pb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              {c.pillarsTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Kicker size="sm" className="mb-3">
                  {pillar.title.split('·')[0]?.trim() ?? ''}
                </Kicker>
                <h3 className="text-lg font-bold text-slate-900 leading-tight mb-3">
                  {pillar.title.split('·').slice(1).join('·').trim() ||
                    pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-4 md:px-6 pb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
              {c.faqTitle}
            </h2>
          </div>
          <div className="space-y-4">
            {c.faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-center justify-between gap-4">
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className="text-slate-400 group-open:rotate-45 transition-transform"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${safeLang}${c.ctaHref}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-6 py-3 text-sm font-semibold text-brand-700 hover:bg-brand-100 transition-colors"
            >
              <span>{c.ctaLabel}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter currentLang={safeLang} />
    </div>
  )
}
