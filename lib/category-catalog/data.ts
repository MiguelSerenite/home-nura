/**
 * Category catalogues (data/category-catalog, bundled by ./registry),
 * validated when this module loads: a bad file fails the build with every
 * problem listed.
 */
import { amazonMarketModelUrl } from '@/lib/amazon'
import type { Lang } from '@/lib/i18n'
import { productPhoto } from '@/lib/product-images'
import { CATEGORY_CATALOG_FILES, type CatalogFile } from './registry'
import type { CatalogEntry, CategoryCatalog } from './types'
import { validateCatalog } from './validate'

export function loadCatalogs(files: readonly CatalogFile[]): ReadonlyMap<string, CategoryCatalog> {
  const problems: string[] = []
  const byCategory = new Map<string, CategoryCatalog>()
  const idOwner = new Map<string, string>()
  for (const { file, data } of files) {
    try {
      const catalog = validateCatalog(data, file)
      if (byCategory.has(catalog.category)) problems.push(`${file}: a second file for ${catalog.category}`)
      for (const { id } of catalog.models) {
        const owner = idOwner.get(id)
        if (owner) problems.push(`${file}: model id ${id} is already in ${owner}`)
        idOwner.set(id, file)
      }
      byCategory.set(catalog.category, catalog)
    } catch (error) {
      problems.push((error as Error).message)
    }
  }
  if (problems.length > 0) throw new Error(`Category catalogue (data/category-catalog):\n${problems.join('\n')}`)
  return byCategory
}

const CATALOGS = loadCatalogs(CATEGORY_CATALOG_FILES)

const normalize = (name: string) => name.toLowerCase().replace(/\s+/g, ' ').trim()

/**
 * Catalogue models of `category` listed in `lang`, without the hub's own
 * picks (`exclude`: their names, matched case-insensitively either way so
 * "Dreame L40s" also covers "Dreame L40s Pro Ultra"), linked to the
 * reader's store with the market's tracking ID.
 */
export function getCatalogEntries(
  category: string,
  lang: Lang,
  exclude: readonly string[] = [],
  catalogs: ReadonlyMap<string, CategoryCatalog> = CATALOGS,
): CatalogEntry[] {
  const catalog = catalogs.get(category)
  if (!catalog) return []
  const taken = exclude.map(normalize)
  return catalog.models
    .filter((m) => m.markets.includes(lang))
    .filter((m) => {
      const name = normalize(`${m.brand} ${m.model}`)
      return !taken.some((t) => t === name || t.includes(name) || name.includes(t))
    })
    .map((m) => {
      const name = `${m.brand} ${m.model}`
      const photo = productPhoto({ id: m.id }, lang, name)
      return {
        id: m.id,
        name,
        segment: m.segment,
        bestFor: m.bestFor[lang] as string,
        facts: m.facts[lang] as readonly string[],
        url: amazonMarketModelUrl({ model: name, asin: m.asin }, lang),
        ...(photo ? { photo } : {}),
      }
    })
}
