import { describe, it, expect } from 'vitest'
import { existsSync } from 'node:fs'
import {
  FRAGMENT_TARGETS,
  headsExportName,
  insertArticleContent,
  insertCategoryHeads,
  insertProperty,
} from '@/scripts/i18n/insert-fragments'

const THUMB_LABEL = [
  'const THUMB_LABEL: Record<string, (n: number, t: number) => string> = {',
  '  fr: (n, t) => `Photo ${n} sur ${t}`,',
  '  pl: (n, t) => `Zdjęcie ${n} z ${t}`,',
  '}',
  '',
].join('\n')

describe('insertProperty', () => {
  it('inserts the fragment after pl, without its trailing comma, at the pl indentation', () => {
    // Act
    const next = insertProperty('x.ts', THUMB_LABEL, 'THUMB_LABEL', 'sv', '\nsv: (n, t) => `Foto ${n} av ${t}`,\n')

    // Assert
    expect(next).toBe(THUMB_LABEL.replace('z ${t}`,\n', 'z ${t}`,\n  sv: (n, t) => `Foto ${n} av ${t}`,\n'))
  })

  it('keeps the multi-line layout of the fragment as written', () => {
    const text = 'const UI = {\n  fr: {\n    home: (n) => `${n}`,\n  },\n  pl: {\n    home: (n) => `${n}`,\n  },\n}\n'
    const fragment = '  sv: {\n    home: (n) => `${n} hem`,\n  },\n'

    const next = insertProperty('x.ts', text, 'UI', 'sv', fragment)

    expect(next).toBe(text.replace('  },\n}', '  },\n  sv: {\n    home: (n) => `${n} hem`,\n  },\n}'))
  })

  it('goes after the last new-market locale already there, so keys read pl, sv, us, ca', () => {
    // Arrange: ca inserted first, then us, then sv.
    const withCa = insertProperty('x.ts', THUMB_LABEL, 'THUMB_LABEL', 'ca', 'ca: () => "ca",')
    const withUs = insertProperty('x.ts', withCa, 'THUMB_LABEL', 'us', 'us: () => "us",')

    // Act
    const all = insertProperty('x.ts', withUs, 'THUMB_LABEL', 'sv', 'sv: () => "sv",')

    // Assert
    expect(all.match(/^ {2}(\w+):/gm)).toEqual(['  fr:', '  pl:', '  sv:', '  us:', '  ca:'])
  })

  it('writes inline next to an inline pl entry', () => {
    const text = `const A = { fr: (n) => \`\${n}\`, pl: (n) => \`\${n}\` }`

    expect(insertProperty('x.ts', text, 'A', 'sv', 'sv: (n) => `${n}`')).toBe(
      `const A = { fr: (n) => \`\${n}\`, pl: (n) => \`\${n}\`, sv: (n) => \`\${n}\` }`,
    )
  })

  it('refuses a fragment that is not one property named after the locale', () => {
    expect(() => insertProperty('x.ts', THUMB_LABEL, 'THUMB_LABEL', 'sv', 'us: () => ""')).toThrow(/one property named sv/)
    expect(() => insertProperty('x.ts', THUMB_LABEL, 'THUMB_LABEL', 'sv', 'sv: () => "", us: () => ""')).toThrow(
      /one property named sv/,
    )
    expect(() => insertProperty('x.ts', THUMB_LABEL, 'THUMB_LABEL', 'sv', 'sv: (n) => `${n}')).toThrow(/one property named sv/)
  })

  it('refuses an object that already has the locale, or an unknown path', () => {
    const once = insertProperty('x.ts', THUMB_LABEL, 'THUMB_LABEL', 'sv', 'sv: () => ""')

    expect(() => insertProperty('x.ts', once, 'THUMB_LABEL', 'sv', 'sv: () => ""')).toThrow(/already has sv/)
    expect(() => insertProperty('x.ts', THUMB_LABEL, 'LABELS', 'sv', 'sv: () => ""')).toThrow(/0 objects/)
  })
})

describe('insertArticleContent', () => {
  it('adds a const named after the locale and its key (pl: contentPl)', () => {
    // Arrange
    const text = [
      'const contentFr = `<p>Bonjour</p>`',
      '',
      'const contentPl = `<p>Dzień dobry</p>`',
      '',
      'export const article = {',
      '  content: {',
      '    fr: contentFr,',
      '    pl: contentPl,',
      '  },',
      '}',
    ].join('\n')

    // Act
    const next = insertArticleContent('a.ts', text, 'sv', '<p>Hej `du` ${x}</p>\n')

    // Assert
    expect(next).toContain('const contentPl = `<p>Dzień dobry</p>`\n\nconst contentSv = `<p>Hej \\`du\\` \\${x}</p>`\n')
    expect(next).toContain('    pl: contentPl,\n    sv: contentSv,\n')
  })

  it('follows the shorthand style (pl → sv)', () => {
    const text = 'const fr = `<p>Bonjour</p>`\nconst pl = `<p>Cześć</p>`\n\nexport const article = {\n  content: { fr, pl },\n}\n'

    const next = insertArticleContent('a.ts', text, 'us', '<p>Hi</p>')

    expect(next).toContain('const pl = `<p>Cześć</p>`\n\nconst us = `<p>Hi</p>`\n')
    expect(next).toContain('content: { fr, pl, us }')
  })
})

describe('category heads', () => {
  it('reads the export name of a heads module', () => {
    const headsModule = "import type { CategoryHeads } from './types'\n\nexport const SV_HEADS: CategoryHeads = {}\n"

    expect(headsExportName('sv.ts', headsModule)).toBe('SV_HEADS')
  })

  it('imports the module after the Polish one and keys it in CATEGORY_HEADS', () => {
    // Arrange
    const index = [
      "import { FR_HEADS } from './fr'",
      "import { PL_HEADS } from './pl'",
      "import { HEAD_LOCALES } from './types'",
      '',
      'export const CATEGORY_HEADS = {',
      '  fr: FR_HEADS,',
      '  pl: PL_HEADS,',
      '}',
    ].join('\n')

    // Act
    const next = insertCategoryHeads(index, 'sv', 'SV_HEADS')

    // Assert
    expect(next).toContain("import { PL_HEADS } from './pl'\nimport { SV_HEADS } from './sv'\nimport { HEAD_LOCALES }")
    expect(next).toContain('  pl: PL_HEADS,\n  sv: SV_HEADS,\n')
  })
})

describe('FRAGMENT_TARGETS', () => {
  it('names files of the code base', () => {
    const missing = Object.values(FRAGMENT_TARGETS).filter(({ file }) => !existsSync(file))

    expect(missing).toEqual([])
  })
})
