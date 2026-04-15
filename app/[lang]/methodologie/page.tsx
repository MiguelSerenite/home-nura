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
import { getNonce } from '@/lib/nonce'
import {
  buildPageMetadata,
  buildBreadcrumbListSchema,
  buildFaqPageSchema,
} from '@/lib/seo'
import { LANGUAGES, isValidLang, type Lang } from '@/lib/i18n'
import { Kicker, SectionHero, SiteFooter } from '@/components/ui'

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
    title: 'Comment Home Nura teste et note',
    subtitle:
      'La grille complète — sources, pondérations, mises à jour, indépendance. Rien d\'opaque.',
    intro:
      'Home Nura est un éditeur européen indépendant. Nous comparons les appareils connectés de la maison sur 6 marchés (France, Allemagne, Royaume-Uni, Espagne, Italie, Pays-Bas) avec la même grille pour chaque catégorie. Cette page détaille comment nous procédons, ce que nous pesons, et ce que nous ne faisons pas.',
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
        title: '03 · Données européennes, pas américaines',
        body:
          'Nous refusons les reviews traduits depuis un site américain. Prix, disponibilité, consommation, conformité RGPD, compatibilité prise EU et étiquette énergie européenne sont collectés directement depuis les marchés locaux. Un produit peut très bien être numéro 1 aux États-Unis et absent de notre classement européen.',
      },
      {
        title: '04 · Rafraîchissements trimestriels minimum',
        body:
          'Les prix évoluent. Les ASIN sont retirés. Les marques sortent des versions révisées. Chaque catégorie est revue au minimum tous les 3 mois. Les pages qui n\'ont pas été mises à jour dans ce délai affichent un bandeau explicite. La date de dernière mise à jour est visible en haut de chaque comparatif.',
      },
      {
        title: '05 · Indépendance et transparence affiliée',
        body:
          'Home Nura est financé par le programme Partenaires Amazon (commission sur achat, sans surcoût pour vous). Les commissions n\'influencent jamais le classement : un produit mal noté reste mal noté même s\'il rapporte plus. Aucun constructeur ne nous paie pour une place au podium. En cas de conflit d\'intérêts nous le signalons en tête de page.',
      },
    ],
    faqTitle: 'Questions fréquentes',
    faq: [
      {
        question: 'Pourquoi un site européen et pas mondial ?',
        answer:
          'Parce que les prix, les fiches énergie, les certifications et la disponibilité changent d\'un marché à l\'autre. Un comparatif global moyenne tout et finit par être juste nulle part. Nous préférons des recommandations valables dans votre pays, même si cela demande six éditions différentes.',
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
          'Les prix affichés sont ceux constatés lors de la dernière mise à jour de la page, visible en haut de chaque comparatif. Amazon change ses prix plusieurs fois par jour — cliquez toujours le lien pour voir le prix en temps réel avant d\'acheter.',
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
    title: 'How Home Nura tests and rates',
    subtitle:
      'The full grid — sources, weighting, refresh cadence, independence. Nothing opaque.',
    intro:
      'Home Nura is an independent European publisher. We compare connected home devices across 6 markets (France, Germany, UK, Spain, Italy, Netherlands) using the same grid in every category. This page explains exactly how we work, what we weight, and what we refuse to do.',
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
        title: '03 · European data, not American',
        body:
          'We refuse reviews translated from a US site. Prices, availability, energy consumption, GDPR compliance, EU plug compatibility, and EU energy labels are collected directly from local markets. A product can easily be #1 in the United States and absent from our European ranking.',
      },
      {
        title: '04 · Quarterly refresh, minimum',
        body:
          'Prices move. ASINs get pulled. Brands ship revised SKUs. Every category is reviewed at least every 3 months. Pages not updated within that window show an explicit freshness banner. The "last updated" date is visible at the top of every comparator.',
      },
      {
        title: '05 · Independence and affiliate transparency',
        body:
          'Home Nura is funded through the Amazon Associates programme (commission on purchase, no extra cost to you). Commissions never influence the ranking: a poorly scored product stays poorly scored even if it pays more. No manufacturer pays us for a podium spot. Conflicts of interest are disclosed at the top of the page when they arise.',
      },
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      {
        question: 'Why a European site rather than global?',
        answer:
          'Because prices, energy labels, certifications and availability change from market to market. A "global" comparison averages everything out and ends up accurate nowhere. We prefer recommendations that actually hold in your country, even if that means maintaining six editions.',
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
          'Displayed prices are those observed at the last page update, which is visible at the top of every comparator. Amazon changes prices several times a day — always click the link to see the live price before buying.',
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
    title: 'Wie Home Nura testet und bewertet',
    subtitle:
      'Das komplette Raster — Quellen, Gewichtung, Aktualisierungen, Unabhängigkeit. Nichts Undurchsichtiges.',
    intro:
      'Home Nura ist ein unabhängiger europäischer Publisher. Wir vergleichen vernetzte Haushaltsgeräte auf 6 Märkten (Frankreich, Deutschland, UK, Spanien, Italien, Niederlande) mit demselben Raster in jeder Kategorie. Diese Seite erklärt genau, wie wir arbeiten, was wir gewichten und was wir bewusst nicht tun.',
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
        title: '03 · Europäische Daten, keine amerikanischen',
        body:
          'Wir lehnen Reviews ab, die aus einer US-Seite übersetzt wurden. Preise, Verfügbarkeit, Energieverbrauch, DSGVO-Konformität, EU-Steckerkompatibilität und EU-Energielabel werden direkt aus den lokalen Märkten erhoben. Ein Produkt kann in den USA Platz 1 sein und in unserem europäischen Ranking fehlen.',
      },
      {
        title: '04 · Mindestens vierteljährliche Aktualisierung',
        body:
          'Preise bewegen sich. ASINs werden zurückgezogen. Hersteller liefern überarbeitete Versionen. Jede Kategorie wird mindestens alle 3 Monate überprüft. Seiten, die länger nicht aktualisiert wurden, zeigen ein explizites Aktualitäts-Banner. Das Datum der letzten Aktualisierung steht oben auf jedem Vergleich.',
      },
      {
        title: '05 · Unabhängigkeit und Affiliate-Transparenz',
        body:
          'Home Nura wird über das Amazon-Partnerprogramm finanziert (Provision beim Kauf, ohne Mehrkosten für Sie). Provisionen beeinflussen niemals das Ranking: Ein schlecht bewertetes Produkt bleibt schlecht bewertet, auch wenn es mehr einbringt. Kein Hersteller bezahlt uns für einen Podestplatz. Interessenskonflikte werden oben auf der Seite offengelegt.',
      },
    ],
    faqTitle: 'Häufige Fragen',
    faq: [
      {
        question: 'Warum eine europäische Seite und keine globale?',
        answer:
          'Weil Preise, Energielabels, Zertifizierungen und Verfügbarkeit von Markt zu Markt variieren. Ein "globaler" Vergleich mittelt alles und ist am Ende nirgendwo wirklich korrekt. Wir bevorzugen Empfehlungen, die in Ihrem Land tatsächlich gelten — auch wenn das sechs Ausgaben bedeutet.',
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
          'Die angezeigten Preise sind die beim letzten Update beobachteten — das Datum steht oben auf jedem Vergleich. Amazon ändert Preise mehrfach täglich, klicken Sie für den Live-Preis immer auf den Link, bevor Sie kaufen.',
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
    title: 'Cómo Home Nura prueba y puntúa',
    subtitle:
      'La rejilla completa — fuentes, ponderación, actualizaciones, independencia. Sin zonas opacas.',
    intro:
      'Home Nura es un medio europeo independiente. Comparamos dispositivos conectados del hogar en 6 mercados (Francia, Alemania, Reino Unido, España, Italia, Países Bajos) con la misma rejilla en cada categoría. Esta página explica exactamente cómo trabajamos, qué pesamos y qué no hacemos.',
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
        title: '03 · Datos europeos, no americanos',
        body:
          'Rechazamos reseñas traducidas de un sitio estadounidense. Precios, disponibilidad, consumo, conformidad RGPD, compatibilidad de enchufe europeo y etiqueta energética europea se recopilan directamente en los mercados locales. Un producto puede ser número 1 en EE. UU. y no aparecer en nuestra clasificación europea.',
      },
      {
        title: '04 · Actualización trimestral como mínimo',
        body:
          'Los precios cambian. Los ASIN se retiran. Las marcas sacan versiones revisadas. Cada categoría se revisa al menos cada 3 meses. Las páginas no actualizadas en ese plazo muestran un aviso explícito. La fecha de última actualización es visible en la parte superior de cada comparativa.',
      },
      {
        title: '05 · Independencia y transparencia de afiliación',
        body:
          'Home Nura se financia a través del programa de Afiliados de Amazon (comisión por compra, sin coste extra para usted). Las comisiones nunca influyen en la clasificación: un producto mal puntuado sigue mal puntuado aunque reporte más. Ningún fabricante nos paga por un puesto en el podio. Los conflictos de interés se indican en la parte superior de la página.',
      },
    ],
    faqTitle: 'Preguntas frecuentes',
    faq: [
      {
        question: '¿Por qué un sitio europeo y no global?',
        answer:
          'Porque los precios, las etiquetas energéticas, las certificaciones y la disponibilidad cambian según el mercado. Un comparativo "global" promedia todo y acaba siendo inexacto en todas partes. Preferimos recomendaciones válidas en su país, aunque eso requiera seis ediciones distintas.',
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
          'Los precios mostrados son los observados en la última actualización de la página, visible en la parte superior de cada comparativa. Amazon cambia precios varias veces al día — haga siempre clic en el enlace para ver el precio en tiempo real antes de comprar.',
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
    title: 'Come Home Nura testa e valuta',
    subtitle:
      'La griglia completa — fonti, ponderazione, aggiornamenti, indipendenza. Niente di opaco.',
    intro:
      'Home Nura è un editore europeo indipendente. Confrontiamo dispositivi connessi per la casa su 6 mercati (Francia, Germania, Regno Unito, Spagna, Italia, Paesi Bassi) con la stessa griglia in ogni categoria. Questa pagina spiega esattamente come lavoriamo, cosa pesiamo e cosa rifiutiamo di fare.',
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
        title: '03 · Dati europei, non americani',
        body:
          'Rifiutiamo le recensioni tradotte da siti statunitensi. Prezzi, disponibilità, consumi, conformità GDPR, compatibilità spina UE ed etichetta energetica europea vengono raccolti direttamente dai mercati locali. Un prodotto può benissimo essere primo negli Stati Uniti e assente dalla nostra classifica europea.',
      },
      {
        title: '04 · Aggiornamento trimestrale minimo',
        body:
          'I prezzi cambiano. Gli ASIN vengono ritirati. I marchi pubblicano versioni riviste. Ogni categoria viene rivista almeno ogni 3 mesi. Le pagine non aggiornate entro quel termine mostrano un banner esplicito. La data di ultimo aggiornamento è visibile in cima a ogni confronto.',
      },
      {
        title: '05 · Indipendenza e trasparenza affiliata',
        body:
          'Home Nura è finanziata tramite il programma Amazon Affiliati (commissione sull\'acquisto, senza costi aggiuntivi per voi). Le commissioni non influenzano mai la classifica: un prodotto valutato male resta valutato male anche se rende di più. Nessun produttore ci paga per un posto sul podio. I conflitti di interesse vengono dichiarati in cima alla pagina.',
      },
    ],
    faqTitle: 'Domande frequenti',
    faq: [
      {
        question: 'Perché un sito europeo e non globale?',
        answer:
          'Perché prezzi, etichette energetiche, certificazioni e disponibilità cambiano da mercato a mercato. Un confronto "globale" media tutto e finisce per essere impreciso ovunque. Preferiamo raccomandazioni valide nel vostro paese, anche se significa gestire sei edizioni.',
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
          'I prezzi mostrati sono quelli osservati all\'ultimo aggiornamento, visibile in cima a ogni confronto. Amazon cambia prezzi più volte al giorno — cliccate sempre il link per vedere il prezzo in tempo reale prima di acquistare.',
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
    title: 'Hoe Home Nura test en beoordeelt',
    subtitle:
      'Het volledige raster — bronnen, weging, updates, onafhankelijkheid. Niets ondoorzichtigs.',
    intro:
      'Home Nura is een onafhankelijke Europese uitgever. We vergelijken slimme huishoudapparaten op 6 markten (Frankrijk, Duitsland, VK, Spanje, Italië, Nederland) met hetzelfde raster in elke categorie. Deze pagina legt precies uit hoe we werken, wat we wegen en wat we bewust niet doen.',
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
        title: '03 · Europese data, geen Amerikaanse',
        body:
          'We weigeren reviews die uit een VS-site vertaald zijn. Prijzen, beschikbaarheid, verbruik, AVG-conformiteit, EU-stekkercompatibiliteit en het EU-energielabel halen we rechtstreeks uit de lokale markten. Een product kan prima nummer één zijn in de VS en afwezig in onze Europese ranglijst.',
      },
      {
        title: '04 · Minimaal per kwartaal bijgewerkt',
        body:
          'Prijzen bewegen. ASINs worden teruggetrokken. Merken brengen herziene versies uit. Elke categorie wordt minstens elke 3 maanden herzien. Pagina\'s die in die periode niet zijn bijgewerkt, tonen een expliciete banner. De datum van de laatste update staat bovenaan elke vergelijking.',
      },
      {
        title: '05 · Onafhankelijkheid en affiliate-transparantie',
        body:
          'Home Nura wordt gefinancierd via het Amazon Associates-programma (commissie bij aankoop, zonder meerkosten voor u). Commissies beïnvloeden nooit de ranglijst: een slecht beoordeeld product blijft slecht beoordeeld, ook als het meer oplevert. Geen enkele fabrikant betaalt voor een podiumplaats. Belangenconflicten worden bovenaan de pagina aangegeven.',
      },
    ],
    faqTitle: 'Veelgestelde vragen',
    faq: [
      {
        question: 'Waarom een Europese site en geen wereldwijde?',
        answer:
          'Omdat prijzen, energielabels, certificeringen en beschikbaarheid per markt verschillen. Een "wereldwijde" vergelijking middelt alles uit en is nergens echt correct. We kiezen voor aanbevelingen die in úw land kloppen, ook als dat zes edities betekent.',
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
          'De getoonde prijzen zijn die van de laatste update — zichtbaar bovenaan elke vergelijking. Amazon wijzigt prijzen meerdere keren per dag; klik altijd op de link voor de live prijs voordat u koopt.',
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
  const nonce = await getNonce()

  const breadcrumbSchema = buildBreadcrumbListSchema(safeLang, [
    { name: c.breadcrumbHome, path: '' },
    { name: c.breadcrumbCurrent, path: '/methodologie' },
  ])

  const faqSchema = buildFaqPageSchema(c.faq)

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        nonce={nonce}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          nonce={nonce}
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
                className="hover:text-blue-600 transition-colors"
              >
                {c.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
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
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100 transition-colors"
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
