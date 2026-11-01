import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the cordless wet-dry floor washers (France): only the markets whose list carries it (../markets.ts). */
export const FLOOR_WASHERS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  fr: {
    name: 'Aspirateurs laveurs',
    h1: `Black Friday ${Y} : les aspirateurs laveurs sans fil à surveiller`,
    metaTitle: `Aspirateur laveur Black Friday ${Y} : modèles à surveiller`,
    metaDescription: `Aspirateurs laveurs sans fil à surveiller au Black Friday ${Y} : Dreame H15 Pro, H14 Pro et Dyson WashG1. Brosse, bords, cheveux : ce qu'il faut comparer.`,
    blurb: 'Dreame et Dyson : les sols durs lavés en un passage, sans seau ni serpillère.',
    intro: "L'aspirateur laveur, ou balai laveur, lave les sols durs en un seul passage, sans seau ni serpillère : c'est l'appareil d'entretien des sols qui progresse le plus en France. Avant de regarder la remise, comparez ce qui sépare vraiment les modèles ci-dessous : l'autonettoyage de la brosse (lavage à l'eau chaude, séchage à l'air chaud), le passage à plat sous les meubles, le lavage le long des plinthes et, si vous avez des animaux ou les cheveux longs, ce qui empêche cheveux et poils de s'enrouler autour de la brosse.",
    faq: [
      {
        question: 'Aspirateur laveur ou robot aspirateur laveur ?',
        answer: "L'aspirateur laveur se passe à la main : il vient vite à bout des taches et des salissures de cuisine, pièce par pièce. Le robot laveur entretient les sols tout seul au quotidien, à condition de dégager le sol avant son passage. Les deux se complètent ; les robots aspirateurs laveurs ont leur propre sélection Black Friday.",
      },
      {
        question: "Un aspirateur laveur remplace-t-il l'aspirateur ?",
        answer: 'Sur les sols durs (carrelage, vinyle, parquet vitrifié), la plupart des modèles aspirent et lavent en même temps ; le Dyson WashG1, lui, lave sans aspirer. Ces appareils ne sont pas conçus pour les tapis ni la moquette : gardez un aspirateur pour les textiles, les escaliers et le canapé.',
      },
      {
        question: 'Peut-on utiliser un aspirateur laveur sur du parquet ?',
        answer: "Oui sur un parquet vitrifié ou un stratifié, en limitant la quantité d'eau. Un parquet huilé ou ciré supporte mal l'humidité : vérifiez d'abord les recommandations du fabricant du sol.",
      },
      {
        question: 'Quel entretien prévoir ?',
        answer: "Vider et rincer le réservoir d'eau sale après chaque usage, puis lancer l'autonettoyage de la brosse. Les Dreame H14 Pro et H15 Pro lavent leur brosse à l'eau chaude puis la sèchent à l'air chaud, ce qui limite les mauvaises odeurs.",
      },
    ],
  },
}
