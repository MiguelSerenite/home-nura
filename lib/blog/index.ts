import type { BlogArticle, ArticleMeta } from './types'

// Import all articles
import { article as testNinjaFoodiMax } from './articles/test-ninja-foodi-max-dual-zone'
import { article as testPhilips3000xl } from './articles/test-philips-airfryer-3000-xl'
import { article as testCosoriDualBlaze } from './articles/test-cosori-dual-blaze'
import { article as testNinjaFlexdrawer } from './articles/test-ninja-foodi-flexdrawer'
import { article as testPhilipsCombiXxl } from './articles/test-philips-combi-xxl-connected'
import { article as testXiaomiSmartPro } from './articles/test-xiaomi-smart-air-fryer-pro'
import { article as testMoulinexEasyFry } from './articles/test-moulinex-easy-fry-max'
import { article as guideChoisirFamille } from './articles/comment-choisir-airfryer-famille'
import { article as topAccessoires } from './articles/top-10-accessoires-airfryer'
import { article as cuisinerHealthy } from './articles/cuisiner-healthy-airfryer'
import { article as erreursCourantes } from './articles/erreurs-courantes-airfryer'
import { article as entretienNettoyage } from './articles/entretien-nettoyage-airfryer'
import { article as economiesEnergie } from './articles/airfryer-economies-energie'
import { article as petitBudget } from './articles/meilleur-airfryer-petit-budget'
import { article as recettesFrites } from './articles/recettes-frites-parfaites-airfryer'
import { article as recettesPoulet } from './articles/recettes-poulet-croustillant-airfryer'
import { article as recettesLegumes } from './articles/recettes-legumes-grilles-airfryer'
import { article as recettesDesserts } from './articles/recettes-desserts-patisseries-airfryer'
import { article as mealPrep } from './articles/meal-prep-airfryer-semaine'
import { article as vsfriteuse } from './articles/airfryer-vs-friteuse-traditionnelle'
import { article as simpleVsDouble } from './articles/airfryer-simple-vs-double-panier'
import { article as comparatifConnecte } from './articles/comparatif-airfryer-connecte-2026'
import { article as ninjaVsPhilips } from './articles/ninja-vs-philips-quel-choisir'
import { article as xxlGrandeFamille } from './articles/meilleur-airfryer-xxl-grande-famille'
import { article as histoireAirfryer } from './articles/histoire-evolution-airfryer'
import { article as guideRobotAspirateur } from './articles/guide-robot-aspirateur-2026'
import { article as guideSecuriteMaison } from './articles/guide-securite-maison-connectee-2026'
import { article as guideDomotiqueEnergie } from './articles/guide-domotique-economie-energie-2026'
import { article as comparatifRobotLaveur } from './articles/comparatif-robot-aspirateur-laveur'
import { article as robotPoilsAnimaux } from './articles/robot-aspirateur-poils-animaux'
import { article as thermostatPompeChaleur } from './articles/thermostat-connecte-pompe-chaleur'
import { article as comparatifSmartPlugs } from './articles/comparatif-smart-plugs-mesure-energie'
import { article as comparatifCameraSurveillance } from './articles/comparatif-camera-surveillance-exterieure'
import { article as sonnetteVideoSansAbo } from './articles/sonnette-video-sans-abonnement'
import { article as guidePurificateurAir } from './articles/guide-purificateur-air-2026'
import { article as comparatifPurificateurAllergie } from './articles/comparatif-purificateur-air-allergie'
import { article as climatiseurMobileVsVentilateur } from './articles/climatiseur-mobile-vs-ventilateur'
import { article as guideCuisineConnectee } from './articles/guide-cuisine-connectee-2026'
import { article as comparatifMulticuiseur } from './articles/comparatif-multicuiseur-connecte'
import { article as cafetiereConnectee } from './articles/cafetiere-connectee-guide'
import { article as guideJardinConnecte } from './articles/guide-jardin-connecte-2026'
import { article as tondeuseRobotSansFil } from './articles/tondeuse-robot-sans-fil-perimetrique'
import { article as arrosageConnecte } from './articles/arrosage-connecte-intelligent'
import { article as robotVsBalai } from './articles/robot-aspirateur-vs-balai'
import { article as aspirateurLaveur2026 } from './articles/meilleur-aspirateur-laveur-2026'
import { article as serrureConnectee } from './articles/serrure-connectee-guide'
import { article as alarmeSansAbo } from './articles/alarme-maison-sans-abonnement'
import { article as balkonkraftwerk } from './articles/balkonkraftwerk-panneau-solaire-balcon'
import { article as eclairageConnecteComparatif } from './articles/eclairage-connecte-comparatif'
import { article as deshumidificateurConnecte } from './articles/deshumidificateur-connecte-guide'
import { article as stationMeteoConnectee } from './articles/station-meteo-connectee-comparatif'
import { article as barbecueConnecte } from './articles/barbecue-connecte-thermometre-guide'
import { article as eclairageExterieurSolaire } from './articles/eclairage-exterieur-solaire-connecte'
import { article as balanceCuisineConnectee } from './articles/balance-cuisine-connectee-comparatif'
import { article as cookeoVsThermomixVsAirfryer } from './articles/cookeo-vs-thermomix-vs-airfryer'
import { article as maisonConnecteeMatterThread } from './articles/maison-connectee-matter-thread-2026'
import { article as tendancesMaisonConnectee } from './articles/tendances-maison-connectee-2026'
import { article as cameraInterieureSansAbo } from './articles/camera-interieure-sans-abonnement'
import { article as detecteurFumeeConnecte } from './articles/detecteur-fumee-connecte-comparatif'
import { article as interphoneVideoConnecte } from './articles/interphone-video-connecte'
import { article as aspirateurSansFil } from './articles/aspirateur-sans-fil-comparatif-2026'
import { article as nettoyeurVapeurConnecte } from './articles/nettoyeur-vapeur-connecte'
import { article as capteurSolHumidite } from './articles/capteur-sol-humidite-jardin'
import { article as piscineConnectee } from './articles/piscine-connectee-guide'
import { article as voletsRoulants } from './articles/volets-roulants-connectes-guide'
import { article as radiateurElectrique } from './articles/radiateur-electrique-connecte-guide'
import { article as detectionFuiteEau } from './articles/detection-fuite-eau-connectee'
import { article as ventilateurConnecte } from './articles/ventilateur-connecte-comparatif'
import { article as qualiteAirInterieur } from './articles/qualite-air-interieur-capteurs'
import { article as robotCuiseurConnecte } from './articles/robot-cuiseur-connecte-comparatif'
import { article as caveVinConnectee } from './articles/cave-vin-connectee-guide'

const ALL_ARTICLES: BlogArticle[] = [
  testNinjaFoodiMax,
  testPhilips3000xl,
  testCosoriDualBlaze,
  testNinjaFlexdrawer,
  testPhilipsCombiXxl,
  testXiaomiSmartPro,
  testMoulinexEasyFry,
  guideChoisirFamille,
  topAccessoires,
  cuisinerHealthy,
  erreursCourantes,
  entretienNettoyage,
  economiesEnergie,
  petitBudget,
  recettesFrites,
  recettesPoulet,
  recettesLegumes,
  recettesDesserts,
  mealPrep,
  vsfriteuse,
  simpleVsDouble,
  comparatifConnecte,
  ninjaVsPhilips,
  xxlGrandeFamille,
  histoireAirfryer,
  guideRobotAspirateur,
  guideSecuriteMaison,
  guideDomotiqueEnergie,
  comparatifRobotLaveur,
  robotPoilsAnimaux,
  thermostatPompeChaleur,
  comparatifSmartPlugs,
  comparatifCameraSurveillance,
  sonnetteVideoSansAbo,
  guidePurificateurAir,
  comparatifPurificateurAllergie,
  climatiseurMobileVsVentilateur,
  guideCuisineConnectee,
  comparatifMulticuiseur,
  cafetiereConnectee,
  guideJardinConnecte,
  tondeuseRobotSansFil,
  arrosageConnecte,
  robotVsBalai,
  aspirateurLaveur2026,
  serrureConnectee,
  alarmeSansAbo,
  balkonkraftwerk,
  eclairageConnecteComparatif,
  deshumidificateurConnecte,
  stationMeteoConnectee,
  barbecueConnecte,
  eclairageExterieurSolaire,
  balanceCuisineConnectee,
  cookeoVsThermomixVsAirfryer,
  maisonConnecteeMatterThread,
  tendancesMaisonConnectee,
  cameraInterieureSansAbo,
  detecteurFumeeConnecte,
  interphoneVideoConnecte,
  aspirateurSansFil,
  nettoyeurVapeurConnecte,
  capteurSolHumidite,
  piscineConnectee,
  voletsRoulants,
  radiateurElectrique,
  detectionFuiteEau,
  ventilateurConnecte,
  qualiteAirInterieur,
  robotCuiseurConnecte,
  caveVinConnectee,
]

export function getAllArticles(): BlogArticle[] {
  return ALL_ARTICLES.sort((a, b) =>
    new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  )
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return ALL_ARTICLES.find(a => a.slug === slug)
}

export function getArticlesByCategory(category: BlogArticle['category']): BlogArticle[] {
  return ALL_ARTICLES
    .filter(a => a.category === category)
    .sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())
}

export function getRelatedArticles(article: BlogArticle): ArticleMeta[] {
  return article.relatedSlugs
    .map(slug => ALL_ARTICLES.find(a => a.slug === slug))
    .filter((a): a is BlogArticle => !!a)
    .map(a => ({
      slug: a.slug,
      category: a.category,
      title: a.title,
      excerpt: a.excerpt,
      datePublished: a.datePublished,
      readingTime: a.readingTime,
      images: a.images,
    }))
}

export function getAllSlugs(): string[] {
  return ALL_ARTICLES.map(a => a.slug)
}

export function getArticleMetas(): ArticleMeta[] {
  return getAllArticles().map(a => ({
    slug: a.slug,
    category: a.category,
    title: a.title,
    excerpt: a.excerpt,
    datePublished: a.datePublished,
    readingTime: a.readingTime,
    images: a.images,
  }))
}
