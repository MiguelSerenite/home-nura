/**
 * Submit URLs to IndexNow (Bing & co).
 *
 *   npx tsx scripts/indexnow.ts --all [--dry-run]
 *   npx tsx scripts/indexnow.ts --changed-since <git-ref> [--dry-run]
 *   npx tsx scripts/indexnow.ts <url> [<url>…] [--dry-run]
 *
 * --changed-since maps changed files to URLs: a blog article file submits
 * that article in every locale; any other app/components/lib change
 * submits the whole sitemap (conservative). The key file must already be
 * live on production, so run this after a production deploy.
 */
import { execFileSync } from 'node:child_process'
import sitemap from '../app/sitemap'
import { LANGUAGES } from '../lib/i18n'
import { BASE_URL } from '../lib/seo'
import { INDEXNOW_ENDPOINT, buildIndexNowBatches, urlsFromSitemap } from '../lib/indexnow'

const ARTICLE_FILE = /^lib\/blog\/articles\/([a-z0-9-]+)\.ts$/
const SITE_CODE = /^(app|components|lib|dictionaries)\//

function changedUrls(ref: string): string[] {
  const files = execFileSync('git', ['diff', '--name-only', `${ref}..HEAD`], { encoding: 'utf8' })
    .split('\n')
    .filter(Boolean)
  const articleSlugs = files.map((f) => f.match(ARTICLE_FILE)?.[1]).filter((s): s is string => !!s)
  const otherCode = files.filter((f) => SITE_CODE.test(f) && !ARTICLE_FILE.test(f))
  if (otherCode.length > 0) return urlsFromSitemap(sitemap())
  return articleSlugs.flatMap((slug) => LANGUAGES.map((lang) => `${BASE_URL}/${lang}/blog/${slug}`))
}

function parseArgs(argv: string[]) {
  const dryRun = argv.includes('--dry-run')
  const args = argv.filter((a) => a !== '--dry-run')
  if (args[0] === '--all') return { dryRun, urls: urlsFromSitemap(sitemap()) }
  if (args[0] === '--changed-since') {
    if (!args[1]) throw new Error('--changed-since needs a git ref')
    return { dryRun, urls: changedUrls(args[1]) }
  }
  const urls = args.filter((a) => a.startsWith(BASE_URL))
  if (urls.length !== args.length) throw new Error(`Only ${BASE_URL} URLs can be submitted`)
  return { dryRun, urls }
}

async function main() {
  const { dryRun, urls } = parseArgs(process.argv.slice(2))
  if (urls.length === 0) {
    console.log('IndexNow: nothing to submit')
    return
  }
  const batches = buildIndexNowBatches(urls)
  console.log(`IndexNow: ${urls.length} URL(s) in ${batches.length} batch(es)${dryRun ? ' [dry run]' : ''}`)
  if (dryRun) {
    console.log(urls.slice(0, 10).join('\n'))
    return
  }
  for (const batch of batches) {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(batch),
    })
    // 200 = accepted, 202 = accepted pending key validation
    if (res.status !== 200 && res.status !== 202) {
      throw new Error(`IndexNow rejected the batch: HTTP ${res.status} ${await res.text()}`)
    }
    console.log(`IndexNow: batch of ${batch.urlList.length} accepted (HTTP ${res.status})`)
  }
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
