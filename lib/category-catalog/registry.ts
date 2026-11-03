/**
 * Category catalogue files (data/category-catalog/<category>.json),
 * bundled. One line per file: tests/lib/category-catalog/data.test.ts
 * fails when a file of the folder is missing here.
 */

export interface CatalogFile {
  file: string
  data: unknown
}

export const CATEGORY_CATALOG_FILES: readonly CatalogFile[] = []
