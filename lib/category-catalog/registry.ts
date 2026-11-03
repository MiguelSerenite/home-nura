/**
 * Category catalogue files (data/category-catalog/<category>.json),
 * bundled. One line per file: tests/lib/category-catalog/data.test.ts
 * fails when a file of the folder is missing here.
 */

import catalog_aspirateurs_balais from '@/data/category-catalog/aspirateurs-balais.json'
import catalog_aspirateurs_robots from '@/data/category-catalog/aspirateurs-robots.json'
import catalog_cafetieres from '@/data/category-catalog/cafetieres.json'
import catalog_cameras_exterieur from '@/data/category-catalog/cameras-exterieur.json'
import catalog_cameras_interieur from '@/data/category-catalog/cameras-interieur.json'
import catalog_chauffages_appoint from '@/data/category-catalog/chauffages-appoint.json'
import catalog_deshumidificateurs from '@/data/category-catalog/deshumidificateurs.json'
import catalog_detecteurs_fuite_eau from '@/data/category-catalog/detecteurs-fuite-eau.json'
import catalog_detecteurs_fumee_co from '@/data/category-catalog/detecteurs-fumee-co.json'
import catalog_eclairage_connecte from '@/data/category-catalog/eclairage-connecte.json'
import catalog_hubs_domotique from '@/data/category-catalog/hubs-domotique.json'
import catalog_humidificateurs from '@/data/category-catalog/humidificateurs.json'
import catalog_interrupteurs from '@/data/category-catalog/interrupteurs.json'
import catalog_laveurs_vitres from '@/data/category-catalog/laveurs-vitres.json'
import catalog_multicuiseurs from '@/data/category-catalog/multicuiseurs.json'
import catalog_nettoyeurs_vapeur from '@/data/category-catalog/nettoyeurs-vapeur.json'
import catalog_purificateurs_air from '@/data/category-catalog/purificateurs-air.json'
import catalog_sonnettes_video from '@/data/category-catalog/sonnettes-video.json'
import catalog_thermostats from '@/data/category-catalog/thermostats.json'

export interface CatalogFile {
  file: string
  data: unknown
}

export const CATEGORY_CATALOG_FILES: readonly CatalogFile[] = [
  { file: 'aspirateurs-balais.json', data: catalog_aspirateurs_balais },
  { file: 'aspirateurs-robots.json', data: catalog_aspirateurs_robots },
  { file: 'cafetieres.json', data: catalog_cafetieres },
  { file: 'cameras-exterieur.json', data: catalog_cameras_exterieur },
  { file: 'cameras-interieur.json', data: catalog_cameras_interieur },
  { file: 'chauffages-appoint.json', data: catalog_chauffages_appoint },
  { file: 'deshumidificateurs.json', data: catalog_deshumidificateurs },
  { file: 'detecteurs-fuite-eau.json', data: catalog_detecteurs_fuite_eau },
  { file: 'detecteurs-fumee-co.json', data: catalog_detecteurs_fumee_co },
  { file: 'eclairage-connecte.json', data: catalog_eclairage_connecte },
  { file: 'hubs-domotique.json', data: catalog_hubs_domotique },
  { file: 'humidificateurs.json', data: catalog_humidificateurs },
  { file: 'interrupteurs.json', data: catalog_interrupteurs },
  { file: 'laveurs-vitres.json', data: catalog_laveurs_vitres },
  { file: 'multicuiseurs.json', data: catalog_multicuiseurs },
  { file: 'nettoyeurs-vapeur.json', data: catalog_nettoyeurs_vapeur },
  { file: 'purificateurs-air.json', data: catalog_purificateurs_air },
  { file: 'sonnettes-video.json', data: catalog_sonnettes_video },
  { file: 'thermostats.json', data: catalog_thermostats },
]
