import { BLACK_FRIDAY_YEAR as Y } from '@/lib/black-friday/config'
import type { GiftGuide } from '../types'

export const SINTERKLAAS: GiftGuide = {
  slug: 'sinterklaas',
  lang: 'nl',
  eventDateISO: '2026-12-05',
  label: `Sinterklaas ${Y}`,
  metaTitle: `Sinterklaas cadeau-ideeën ${Y}: slimme cadeaus voor in huis`,
  metaDescription: `Sinterklaas ${Y}: cadeau-ideeën voor in huis, van airfryer en koffiemachine met bonen tot slimme lampen en wake-up light. Waar je per categorie op let.`,
  h1: `Sinterklaas ${Y}: cadeau-ideeën voor in huis`,
  intro: `Pakjesavond valt op zaterdag 5 december ${Y}; in Vlaanderen vinden de kinderen hun cadeaus op zondagochtend 6 december. Zoek je een sinterklaascadeau voor in huis, voor het hele gezin of voor je lootje, dan vind je hier cadeau-ideeën per categorie, met de modellen die onze koopgidsen al aanraden en waar je op let voordat je kiest. Prijzen tonen we niet, want die veranderen voortdurend: de actuele prijs zie je bij Amazon.`,
  categoriesTitle: 'Cadeau-ideeën per categorie',
  cards: [
    {
      category: 'airfryers',
      name: 'Airfryers',
      line: 'Een cadeau dat het hele huishouden gebruikt: kies de inhoud op basis van de grootte van het gezin, met één mand of twee.',
    },
    {
      category: 'cafetieres',
      name: 'Koffiemachines met bonen',
      line: "Een groot cadeau om samen te geven: een volautomaat die de bonen zelf maalt, van De'Longhi, Philips of Krups.",
    },
    {
      category: 'eclairage-connecte',
      name: 'Slimme lampen',
      line: 'Philips Hue of Tapo: gekleurd licht dat je met je telefoon of je stem bedient, voor de donkere decemberavonden.',
    },
    {
      category: 'trackers-objets',
      name: 'Trackers voor sleutels',
      line: 'Past in elke surprise: een AirTag voor iPhone, of een Chipolo of Ugreen die ook met Android werkt.',
    },
    {
      category: 'aspirateurs-robots',
      name: 'Robotstofzuigers',
      line: 'Voor wie het stofzuigen graag uit handen geeft: Roborock of Dreame, ook met dweilfunctie.',
    },
    {
      category: 'reveils-lumiere',
      name: 'Wake-up lights',
      line: 'Wakker worden met licht in plaats van een piepende wekker, juist in de donkere wintermaanden: Philips of Lumie.',
    },
    {
      category: 'balances',
      name: 'Keukenweegschalen',
      line: 'Voor wie kruidnoten of speculaas bakt: op de gram nauwkeurig, met of zonder app.',
    },
    {
      category: 'thermometres-viande',
      name: 'Vleesthermometers',
      line: 'Voor de kok in huis: een sonde in het vlees en de kerntemperatuur op je telefoon, van MEATER of Inkbird.',
    },
  ],
  faq: [
    {
      question: `Wanneer is pakjesavond ${Y}?`,
      answer: `Pakjesavond is op zaterdagavond 5 december ${Y}. In Vlaanderen komt de Sint 's nachts langs en pakken de kinderen hun cadeaus uit op zondagochtend 6 december. De landelijke intocht in Nederland is op zaterdag 14 november.`,
    },
    {
      question: 'Welk cadeau past bij lootjes trekken?',
      answer: 'Bij lootjes trekken krijgt iedereen één cadeau, vaak verpakt in een surprise met een gedicht. Kleine apparaten passen daar goed bij: een tracker voor sleutels, een keukenweegschaal of een slimme lamp. Spreek vooraf een bedrag af en controleer de prijs op het moment dat je bestelt.',
    },
    {
      question: 'Kun je sinterklaascadeaus kopen tijdens Black Friday?',
      answer: `Black Friday valt op vrijdag 27 november ${Y}, ruim een week vóór pakjesavond. Op onze Black Friday-pagina staan per categorie de modellen die onze gidsen aanraden. Let bij een aanbieding op de levertijd en vergelijk met de laagste prijs van de afgelopen 30 dagen, die bij de korting staat.`,
    },
    {
      question: 'Kun je een cadeau na pakjesavond nog terugsturen?',
      answer: 'Bij online aankopen heb je in de EU 14 dagen bedenktijd, te rekenen vanaf de ontvangst: bestel je vroeg, dan kan die termijn al vóór pakjesavond aflopen. Rond de feestdagen verlengen sommige winkels de retourtermijn: controleer de retourvoorwaarden bij je bestelling, zeker als het product door een externe verkoper wordt verkocht.',
    },
    {
      question: 'Hoe kiezen jullie deze cadeau-ideeën?',
      answer: 'We proberen de producten niet zelf uit. De modellen komen uit onze koopgidsen, die fabrieksspecificaties, geverifieerde kopersreviews en onafhankelijke beoordelingen uit de vakpers vergelijken. Per categorie leggen we uit waar je op let, zodat je kiest wat bij de ontvanger past.',
    },
  ],
}
