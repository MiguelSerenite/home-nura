/**
 * Affiliate clicks per placement, market, store and tracking ID, from the
 * /api/click lines of the Vercel runtime logs (README.md, "Clics affiliés").
 *
 *   vercel logs --environment production --no-branch --query 'affiliate_click' \
 *     --since 7d --limit 10000 --json > clicks.jsonl
 *   npx tsx scripts/analytics/affiliate-clicks.ts clicks.jsonl
 *
 * Also reads stdin (`… --json | npx tsx scripts/analytics/affiliate-clicks.ts`),
 * a JSON array saved from the dashboard, or raw log text. Read-only: it
 * prints a report and writes nothing.
 */
import { readFileSync } from 'node:fs'
import { extractClicks, formatClickReport } from '../../lib/affiliate-click-report'

const STDIN_FD = 0

function readInput(path: string | undefined): string {
  try {
    return readFileSync(path ?? STDIN_FD, 'utf8')
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error)
    throw new Error(`Cannot read ${path ?? 'stdin'}: ${reason}`)
  }
}

try {
  console.log(formatClickReport(extractClicks(readInput(process.argv[2]))))
} catch (error) {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
}
