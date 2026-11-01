/**
 * /{lang}/news/{slug}: news written natively for one market (recalls,
 * launches), dated and sourced.
 * Data: data/market-pages/{locale}/{slug}.json (lib/market-pages). Only the
 * locale that owns a page serves it: every other locale or slug is a 404.
 */

import { marketPageRoute } from '../../market-page-route'

const route = marketPageRoute('news')

/** Only the params below exist: other locales and slugs 404. */
export const dynamicParams = false

export const generateStaticParams = route.generateStaticParams
export const generateMetadata = route.generateMetadata
export default route.Page
