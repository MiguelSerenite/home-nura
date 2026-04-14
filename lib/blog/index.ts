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
