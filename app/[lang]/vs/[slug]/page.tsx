/**
 * /{lang}/vs/{slug}: duels written natively for one market ("X vs Y").
 * Data: data/market-pages/{locale}/{slug}.json (lib/market-pages). Only the
 * locale that owns a page serves it: every other locale or slug is a 404.
 */

import { marketPageRoute } from '../../market-page-route'

const route = marketPageRoute('duel')

/** Only the params below exist: other locales and slugs 404. */
export const dynamicParams = false

export const generateStaticParams = route.generateStaticParams
export const generateMetadata = route.generateMetadata
export default route.Page
