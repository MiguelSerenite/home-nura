/**
 * What our own data knows of a model besides the name a page shows: its
 * EAN and manufacturer reference codes, read from the official model name
 * recorded with its photo (data/product-images.json `officialModel`, found
 * by catalogue id or by name). Server-only.
 */
import 'server-only'
import { findProductImage } from '@/lib/product-images'
import type { ModelReferences } from './match'
import { eansIn, referenceCodes } from './reference-codes'

/** A model a page shows: its name, and its catalogue id when the page has one. */
export interface ModelRef {
  name: string
  id?: string
}

const NONE: ModelReferences = { eans: [], codes: [] }

/** EANs and reference codes of a model (empty when our data has none). */
export function modelReferences(model: ModelRef): ModelReferences {
  const entry = findProductImage({ id: model.id, name: model.name })
  if (!entry?.officialModel) return NONE
  return { eans: eansIn(entry.officialModel), codes: referenceCodes(entry.officialModel) }
}
