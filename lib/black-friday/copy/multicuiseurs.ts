import type { Lang } from '@/lib/i18n'
import { BLACK_FRIDAY_YEAR as Y } from '../config'
import type { BlackFridayCategoryCopy } from '../types'

/** Black Friday page of the Cookeo and multicookers (France): only the markets whose list carries it (../markets.ts). */
export const MULTICOOKERS_COPY: Partial<Record<Lang, BlackFridayCategoryCopy>> = {
  fr: {
    name: 'Cookeo et multicuiseurs',
    h1: `Black Friday ${Y} : Cookeo et multicuiseurs à surveiller`,
    metaTitle: `Cookeo Black Friday ${Y} : les multicuiseurs à surveiller`,
    metaDescription: `Cookeo et multicuiseurs à surveiller au Black Friday ${Y} : Moulinex Cookeo Touch WiFi, Ninja Foodi, Instant Pot. Capacité, pression, recettes guidées.`,
    blurb: 'Moulinex Cookeo, Ninja Foodi, Instant Pot : de 5,7 à 7,5 litres, avec ou sans recettes guidées.',
    intro: "Le Cookeo est l'un des appareils de cuisine les plus recherchés en France, et c'est en novembre que la demande culmine. Avant de comparer les offres, fixez la capacité selon votre foyer et décidez si vous voulez des recettes guidées pas à pas : c'est ce qui sépare le Cookeo connecté des multicuiseurs sans application de cette sélection. Les versions d'un même modèle diffèrent par l'écran, les recettes intégrées et le Wi-Fi : vérifiez la référence exacte de l'offre.",
    faq: [
      {
        question: 'Quelle capacité de multicuiseur choisir ?',
        answer: 'Une cuve de 6 litres, comme celle du Cookeo Touch WiFi, convient à la plupart des familles de quatre à six personnes. Le format 7,5 litres du Ninja Foodi MAX sert surtout aux grandes tablées et à la cuisine en grande quantité.',
      },
      {
        question: 'Cookeo ou robot cuiseur ?',
        answer: 'Le Cookeo cuit sous pression : mijotés, risottos, soupes ou currys sont prêts en peu de temps. Un robot cuiseur chauffe et mixe à la fois : il hache, pétrit et prépare aussi veloutés, sauces et pâtes à gâteau, mais ne cuit pas sous pression. Notre guide compare les deux familles.',
      },
      {
        question: 'Un multicuiseur connecté vaut-il la peine ?',
        answer: "Oui si vous cuisinez en suivant des recettes : l'écran du Cookeo Touch WiFi guide chaque étape et de nouvelles recettes arrivent par l'application Moulinex. Si vous avez déjà vos recettes, un modèle sans Wi-Fi comme l'Instant Pot Duo Plus cuit tout aussi bien sous pression.",
      },
      {
        question: 'Multicuiseur ou air fryer ?',
        answer: "Le multicuiseur mijote et cuit sous pression ; l'air fryer rend les aliments croustillants. Le Ninja Foodi MAX 15-en-1 réunit les deux sous un seul couvercle, mais sans Wi-Fi ni application.",
      },
    ],
  },
}
