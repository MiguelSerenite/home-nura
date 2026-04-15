/**
 * Buyer personas — the Y axis of Moteur 2 ("meilleur X pour Y").
 *
 * Moteur 2 produces pages of the form:
 *     /{lang}/{meta-silo}/{category}/meilleur-pour/{persona}
 *
 * The cartesian product (category × persona) is intentionally huge.
 * Only personas whose `applicableSilos` matches the category's
 * meta-silo are considered — that's what stops us from generating
 * "meilleur airfryer pour RGPD strict", which nobody searches for.
 *
 * Each persona lives on exactly one PersonaAxis. The axis drives:
 *   - how the page's H1 is templated
 *   - which buyer-guide block we render
 *   - which faceted filter the comparator ships with
 *
 * Adding a persona is cheap; removing one after it's been indexed
 * is a redirect migration. Be conservative.
 *
 * Phase CCC (Period 16) adds 4 ALL_SILOS personas — animaux-
 * domestiques, famille-nombreuse, teletravail, bebe-enfant-bas-age
 * — chosen for three properties: (1) real differentiated search
 * intent, (2) full 6-silo applicability so the Moteur 4 cascade is
 * maximal, (3) axes already handled by content.ts templates, so
 * shipping is pure catalog work with zero code changes. Each new
 * persona generates 54 indexable categories × 6 locales = 324 best-
 * for pages + 6 persona buyer-guide pages. Phase CCC therefore adds
 * 4 × 330 = 1320 new URLs to the production sitemap.
 */

import type { BuyerPersona } from './types'

const ALL_SILOS = [
  'cuisine-connectee',
  'energie-domotique',
  'securite-maison',
  'confort-air',
  'entretien-maison',
  'outdoor-connecte',
] as const

export const BUYER_PERSONAS: readonly BuyerPersona[] = [
  // ===================================================================
  // Axis: household — "who lives in the home"
  // ===================================================================
  {
    slug: 'famille-4-personnes',
    axis: 'household',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Famille de 4 personnes',
      en: 'Family of 4',
      de: 'Vierköpfige Familie',
      es: 'Familia de 4 personas',
      it: 'Famiglia di 4 persone',
      nl: 'Gezin van 4',
    },
  },
  {
    slug: 'celibataire',
    axis: 'household',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Célibataire',
      en: 'Single person',
      de: 'Single',
      es: 'Persona soltera',
      it: 'Single',
      nl: 'Alleenstaande',
    },
  },
  {
    slug: 'couple',
    axis: 'household',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Couple',
      en: 'Couple',
      de: 'Paar',
      es: 'Pareja',
      it: 'Coppia',
      nl: 'Stel',
    },
  },
  {
    slug: 'colocation',
    axis: 'household',
    applicableSilos: [
      'cuisine-connectee',
      'energie-domotique',
      'securite-maison',
      'entretien-maison',
    ],
    label: {
      fr: 'Colocation',
      en: 'Shared flat',
      de: 'WG',
      es: 'Piso compartido',
      it: 'Coinquilini',
      nl: 'Gedeeld huis',
    },
  },
  {
    slug: 'personne-agee',
    axis: 'household',
    applicableSilos: [
      'cuisine-connectee',
      'securite-maison',
      'confort-air',
      'entretien-maison',
    ],
    label: {
      fr: 'Personne âgée',
      en: 'Senior',
      de: 'Senior',
      es: 'Persona mayor',
      it: 'Anziano',
      nl: 'Senior',
    },
  },
  {
    slug: 'etudiant',
    axis: 'household',
    applicableSilos: ['cuisine-connectee', 'energie-domotique', 'entretien-maison'],
    label: {
      fr: 'Étudiant',
      en: 'Student',
      de: 'Student',
      es: 'Estudiante',
      it: 'Studente',
      nl: 'Student',
    },
  },

  // ===================================================================
  // Axis: budget — "how much to spend"
  // ===================================================================
  {
    slug: 'pas-cher-moins-100',
    axis: 'budget',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Pas cher (moins de 100 €)',
      en: 'Budget (under €100)',
      de: 'Günstig (unter 100 €)',
      es: 'Económico (menos de 100 €)',
      it: 'Economico (meno di 100 €)',
      nl: 'Goedkoop (onder €100)',
    },
  },
  {
    slug: 'milieu-de-gamme',
    axis: 'budget',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Milieu de gamme',
      en: 'Mid-range',
      de: 'Mittelklasse',
      es: 'Gama media',
      it: 'Fascia media',
      nl: 'Middenklasse',
    },
  },
  {
    slug: 'haut-de-gamme',
    axis: 'budget',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Haut de gamme',
      en: 'Premium',
      de: 'Oberklasse',
      es: 'Gama alta',
      it: 'Fascia alta',
      nl: 'Topklasse',
    },
  },
  {
    slug: 'rapport-qualite-prix',
    axis: 'budget',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Meilleur rapport qualité/prix',
      en: 'Best value for money',
      de: 'Bestes Preis-Leistungs-Verhältnis',
      es: 'Mejor relación calidad-precio',
      it: 'Miglior rapporto qualità-prezzo',
      nl: 'Beste prijs-kwaliteitverhouding',
    },
  },

  // ===================================================================
  // Axis: usage — "how it's used"
  // ===================================================================
  {
    slug: 'usage-quotidien',
    axis: 'usage',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Usage quotidien',
      en: 'Daily use',
      de: 'Täglicher Gebrauch',
      es: 'Uso diario',
      it: 'Uso quotidiano',
      nl: 'Dagelijks gebruik',
    },
  },
  {
    slug: 'usage-occasionnel',
    axis: 'usage',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Usage occasionnel',
      en: 'Occasional use',
      de: 'Gelegentlicher Gebrauch',
      es: 'Uso ocasional',
      it: 'Uso occasionale',
      nl: 'Incidenteel gebruik',
    },
  },
  {
    slug: 'cuisine-rapide',
    axis: 'usage',
    applicableSilos: ['cuisine-connectee'],
    label: {
      fr: 'Cuisine rapide',
      en: 'Quick cooking',
      de: 'Schnelle Küche',
      es: 'Cocina rápida',
      it: 'Cucina veloce',
      nl: 'Snel koken',
    },
  },
  {
    slug: 'meal-prep',
    axis: 'usage',
    applicableSilos: ['cuisine-connectee'],
    label: {
      fr: 'Meal prep',
      en: 'Meal prep',
      de: 'Meal Prep',
      es: 'Meal prep',
      it: 'Meal prep',
      nl: 'Meal prep',
    },
  },
  {
    slug: 'debutant',
    axis: 'usage',
    applicableSilos: ['cuisine-connectee', 'energie-domotique', 'securite-maison'],
    label: {
      fr: 'Débutant',
      en: 'Beginner',
      de: 'Einsteiger',
      es: 'Principiante',
      it: 'Principiante',
      nl: 'Beginner',
    },
  },

  // ===================================================================
  // Axis: constraint — "the hard limit that narrows the field"
  // ===================================================================
  {
    slug: 'petit-espace',
    axis: 'constraint',
    applicableSilos: [
      'cuisine-connectee',
      'energie-domotique',
      'confort-air',
      'entretien-maison',
    ],
    label: {
      fr: 'Petit espace',
      en: 'Small space',
      de: 'Kleiner Raum',
      es: 'Espacio pequeño',
      it: 'Spazio ridotto',
      nl: 'Kleine ruimte',
    },
  },
  {
    slug: 'sans-installation',
    axis: 'constraint',
    applicableSilos: [
      'energie-domotique',
      'securite-maison',
      'confort-air',
      'outdoor-connecte',
    ],
    label: {
      fr: 'Sans installation',
      en: 'No installation',
      de: 'Ohne Installation',
      es: 'Sin instalación',
      it: 'Senza installazione',
      nl: 'Zonder installatie',
    },
  },
  {
    slug: 'silencieux',
    axis: 'constraint',
    applicableSilos: [
      'cuisine-connectee',
      'confort-air',
      'entretien-maison',
      'outdoor-connecte',
    ],
    label: {
      fr: 'Silencieux',
      en: 'Quiet',
      de: 'Leise',
      es: 'Silencioso',
      it: 'Silenzioso',
      nl: 'Stil',
    },
  },
  {
    slug: 'compatible-alexa',
    axis: 'constraint',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Compatible Alexa',
      en: 'Alexa compatible',
      de: 'Alexa-kompatibel',
      es: 'Compatible con Alexa',
      it: 'Compatibile con Alexa',
      nl: 'Alexa-compatibel',
    },
  },
  {
    slug: 'compatible-google-home',
    axis: 'constraint',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Compatible Google Home',
      en: 'Google Home compatible',
      de: 'Google-Home-kompatibel',
      es: 'Compatible con Google Home',
      it: 'Compatibile con Google Home',
      nl: 'Google Home-compatibel',
    },
  },
  {
    slug: 'compatible-matter',
    axis: 'constraint',
    applicableSilos: [
      'energie-domotique',
      'securite-maison',
      'confort-air',
      'entretien-maison',
    ],
    label: {
      fr: 'Compatible Matter',
      en: 'Matter compatible',
      de: 'Matter-kompatibel',
      es: 'Compatible con Matter',
      it: 'Compatibile con Matter',
      nl: 'Matter-compatibel',
    },
  },
  {
    slug: 'rgpd-strict',
    axis: 'constraint',
    applicableSilos: ['securite-maison', 'energie-domotique', 'confort-air'],
    label: {
      fr: 'RGPD strict',
      en: 'GDPR-strict',
      de: 'DSGVO-konform',
      es: 'RGPD estricto',
      it: 'GDPR rigoroso',
      nl: 'AVG-strikt',
    },
  },
  {
    slug: 'fonctionne-hors-ligne',
    axis: 'constraint',
    applicableSilos: [
      'energie-domotique',
      'securite-maison',
      'confort-air',
      'entretien-maison',
      'outdoor-connecte',
    ],
    label: {
      fr: 'Fonctionne hors ligne',
      en: 'Works offline',
      de: 'Funktioniert offline',
      es: 'Funciona sin conexión',
      it: 'Funziona offline',
      nl: 'Werkt offline',
    },
  },
  {
    slug: 'economie-energie',
    axis: 'constraint',
    applicableSilos: [
      'cuisine-connectee',
      'energie-domotique',
      'confort-air',
      'entretien-maison',
    ],
    label: {
      fr: 'Économie d\'énergie',
      en: 'Energy saving',
      de: 'Energiesparend',
      es: 'Ahorro de energía',
      it: 'Risparmio energetico',
      nl: 'Energiebesparend',
    },
  },

  // ===================================================================
  // Phase CCC — 4 ALL_SILOS personas for Moteur 2+4 expansion
  // ===================================================================

  {
    slug: 'animaux-domestiques',
    axis: 'constraint',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Propriétaires d\'animaux',
      en: 'Pet owners',
      de: 'Haustierbesitzer',
      es: 'Propietarios de mascotas',
      it: 'Proprietari di animali',
      nl: 'Huisdiereigenaren',
    },
  },
  {
    slug: 'famille-nombreuse',
    axis: 'household',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Famille nombreuse (5+ personnes)',
      en: 'Large family (5+ people)',
      de: 'Große Familie (5+ Personen)',
      es: 'Familia numerosa (5+ personas)',
      it: 'Famiglia numerosa (5+ persone)',
      nl: 'Groot gezin (5+ personen)',
    },
  },
  {
    slug: 'teletravail',
    axis: 'usage',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Télétravail à la maison',
      en: 'Remote work from home',
      de: 'Homeoffice',
      es: 'Teletrabajo en casa',
      it: 'Smart working da casa',
      nl: 'Thuiswerken',
    },
  },
  {
    slug: 'bebe-enfant-bas-age',
    axis: 'household',
    applicableSilos: ALL_SILOS,
    label: {
      fr: 'Bébé et enfant en bas âge',
      en: 'Baby and toddler',
      de: 'Baby und Kleinkind',
      es: 'Bebé y niño pequeño',
      it: 'Neonato e bambino piccolo',
      nl: 'Baby en peuter',
    },
  },
] as const

export function getBuyerPersona(slug: string): BuyerPersona | undefined {
  return BUYER_PERSONAS.find((p) => p.slug === slug)
}

export function getPersonasForSilo(
  metaSiloSlug: BuyerPersona['applicableSilos'][number]
): BuyerPersona[] {
  return BUYER_PERSONAS.filter((p) =>
    p.applicableSilos.includes(metaSiloSlug)
  )
}

export function getPersonasByAxis(
  axis: BuyerPersona['axis']
): BuyerPersona[] {
  return BUYER_PERSONAS.filter((p) => p.axis === axis)
}
