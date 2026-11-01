/**
 * /{lang}/guides/{slug}: guides written natively for one market. The
 * static guide folders beside this one (airfryers, floor-care, acheteur,
 * probleme…) keep their URLs: Next.js prefers static segments, and the
 * loader refuses those slugs (lib/i18n.ts SHARED_GUIDE_SLUGS).
 * Data: data/market-pages/{locale}/{slug}.json (lib/market-pages). Only the
 * locale that owns a page serves it: every other locale or slug is a 404.
 */

import { marketPageRoute } from '../../market-page-route'

const route = marketPageRoute('guide')

/** Only the params below exist: other locales and slugs 404. */
export const dynamicParams = false

export const generateStaticParams = route.generateStaticParams
export const generateMetadata = route.generateMetadata
export default route.Page
