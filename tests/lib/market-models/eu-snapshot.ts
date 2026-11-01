/**
 * Snapshot of what European readers are shown (product names, buy links,
 * photos) on a sample of pages, for tests/lib/market-models/eu-unchanged.test.ts.
 *
 * tests/fixtures/eu-picks-links.json was generated with this file on main
 * before the North-American market decisions landed (1 November 2026,
 * commit 5283379): the US and Canadian work must leave it byte for byte
 * identical. Regenerate it only for a deliberate European change:
 *   npx tsx tests/lib/market-models/eu-snapshot.ts > tests/fixtures/eu-picks-links.json
 */

import { createHash } from 'node:crypto'
import { getBlackFridayPicks, BLACK_FRIDAY_CATEGORIES } from '@/lib/black-friday'
import { getArticleBySlug } from '@/lib/blog'
import { getArticleAffiliateModels, getArticleRecommendations } from '@/lib/blog/article-products'
import { enrichArticleHtml } from '@/lib/blog/enrichContent'
import { getQuickAnswer } from '@/lib/blog/quick-answers'
import { getCategoryGuides } from '@/lib/catalog/category-guides'
import type { Lang } from '@/lib/i18n'
import { getStaticProducts } from '@/lib/products'
import { getSmartKitchenProducts } from '@/lib/smart-kitchen-products'

export const SNAPSHOT_LANGS: readonly Lang[] = ['fr', 'de', 'it']

export const SNAPSHOT_ARTICLES: readonly string[] = [
  'comparatif-airfryer-connecte-2026',
  'ninja-vs-philips-quel-choisir',
  'test-xiaomi-smart-air-fryer-pro',
  'meilleur-airfryer-petit-budget',
  'heissluftfritteuse-fuer-2-personen',
  'cafetiere-connectee-guide',
  'comparatif-multicuiseur-connecte',
  'balance-cuisine-connectee-comparatif',
  'comparatif-smart-plugs-mesure-energie',
  'barbecue-connecte-thermometre-guide',
  'robot-aspirateur-poils-animaux',
  'guide-robot-aspirateur-2026',
  'aspirateur-sans-fil-comparatif-2026',
  'serrure-connectee-guide',
  'thermostat-connecte-pompe-chaleur',
  'radiateur-electrique-connecte-guide',
  'robot-cuiseur-connecte-comparatif',
  'cave-vin-connectee-guide',
  'coffre-fort-connecte-guide',
  'centrale-vapeur-comparatif',
  'aire-acondicionado-portatil-sin-tubo',
]

export const SNAPSHOT_CATEGORIES: readonly string[] = [
  'airfryers', 'multicuiseurs', 'cafetieres', 'thermostats', 'aspirateurs-robots',
  'serrures-connectees', 'coffres-forts-connectes', 'chauffages-appoint',
]

const sha = (text: string) => createHash('sha256').update(text).digest('hex').slice(0, 16)
// Click-tracking attribute added to in-article links on 01/11/2026: not
// something readers see, left out so the fixture keeps its original hashes.
const withoutClickPlacement = (html: string) => html.replace(/ data-aff-placement="[^"]*"/g, '')
const link = (p: { model?: string; name?: string; title?: string; url: string; photo?: { id: string; alt: string } }) =>
  [p.model ?? p.name ?? p.title, p.url, p.photo ? `${p.photo.id} ${p.photo.alt}` : '-'].join(' | ')

export function euSnapshot(): Record<string, unknown> {
  return Object.fromEntries(
    SNAPSHOT_LANGS.map((lang) => [
      lang,
      {
        airfryers: getStaticProducts(lang).map((p) => [p.title, p.url, p.visual.brand, p.visual.model, p.visual.photo?.id ?? '-', p.nuraScore].join(' | ')),
        kitchen: getSmartKitchenProducts(lang).map((p) => [p.category, p.title, p.url, p.visual.brand, p.visual.photo?.id ?? '-', p.nuraScore].join(' | ')),
        articles: Object.fromEntries(
          SNAPSHOT_ARTICLES.map((slug) => {
            const article = getArticleBySlug(slug)!
            const rec = getArticleRecommendations(article, lang)
            const models = getArticleAffiliateModels(article, lang)
            return [
              slug,
              {
                verdict: getQuickAnswer(article, lang)?.picks.map((p) => `${link(p)} | ${p.role} | ${p.why}`) ?? null,
                recommendations:
                  rec === null ? null : rec.kind === 'catalog' ? rec.products.map((p) => link(p)) : rec.models.map((m) => link(m)),
                bodyModels: models.map((m) => [m.name, m.label, m.url, m.asin ?? '-', m.cited].join(' | ')),
                bodyHtml: sha(withoutClickPlacement(enrichArticleHtml(article.content[lang] ?? '', models, lang))),
              },
            ]
          }),
        ),
        categories: Object.fromEntries(SNAPSHOT_CATEGORIES.map((slug) => [slug, getCategoryGuides(slug, lang).picks.map((p) => link(p))])),
        blackFriday: Object.fromEntries(
          BLACK_FRIDAY_CATEGORIES.map((c) => [c.slug, getBlackFridayPicks(c, lang).map((p) => `${link(p)} | ${p.role} | ${p.asin ?? '-'}`)]),
        ),
      },
    ]),
  )
}

if (process.argv[1]?.endsWith('eu-snapshot.ts')) {
  process.stdout.write(`${JSON.stringify(euSnapshot(), null, 1)}\n`)
}
