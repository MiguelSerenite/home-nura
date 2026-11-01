import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { describe, expect, it } from 'vitest'
import { euSnapshot, SNAPSHOT_LANGS } from './eu-snapshot'

// Generated on main before the US / Canadian market decisions (see ./eu-snapshot.ts).
const FIXTURE = JSON.parse(readFileSync(join(process.cwd(), 'tests', 'fixtures', 'eu-picks-links.json'), 'utf8')) as Record<string, unknown>

describe('European versions are unchanged by the North-American market decisions', () => {
  const snapshot = euSnapshot()

  for (const lang of SNAPSHOT_LANGS) {
    it(`${lang}: same catalog, verdicts, body links, category picks and Black Friday picks`, () => {
      expect(snapshot[lang]).toEqual(FIXTURE[lang])
    })
  }
})
