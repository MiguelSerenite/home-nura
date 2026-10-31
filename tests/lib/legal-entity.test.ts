import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

// Home Nura is published by GROUPE SERENITE, SARL (SIREN 500 511 373, head
// office SIRET 500 511 373 00051), as on the trade register: the legal notice
// and the privacy policy must name it, never the former "Groupe M-XO, SAS".

const LEGAL_PAGES = ['app/[lang]/mentions-legales/page.tsx', 'app/[lang]/politique-confidentialite/page.tsx']

describe('publisher legal entity', () => {
  for (const file of LEGAL_PAGES) {
    const source = readFileSync(join(process.cwd(), file), 'utf8')

    it(`${file} names GROUPE SERENITE, SARL`, () => {
      expect(source).toContain('GROUPE SERENITE')
      expect(source).not.toMatch(/M-XO/i)
      expect(source).not.toMatch(/\bSAS\b/)
      expect(source).not.toContain('500 511 373 00044')
    })
  }
})
