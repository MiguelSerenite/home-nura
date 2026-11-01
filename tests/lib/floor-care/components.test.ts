import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement } from 'react'
import Chooser from '@/components/floor-care/Chooser'
import ClearanceFinder from '@/components/floor-care/ClearanceFinder'
import RichText from '@/components/floor-care/RichText'
import { parseRichText } from '@/lib/floor-care/html'

const robots = [
  { name: 'Acme Robo R1', heightMm: 94, href: '#pick-acme-robo-r1' },
  { name: 'Acme Slim R2', heightMm: 79.5, href: '#pick-acme-slim-r2' },
]

describe('ClearanceFinder', () => {
  it('opens in inches on /us and centimetres on /ca, with labelled controls and a live status', () => {
    const us = renderToStaticMarkup(createElement(ClearanceFinder, { market: 'us', robots }))
    const ca = renderToStaticMarkup(createElement(ClearanceFinder, { market: 'ca', robots }))
    const checkedUnit = (html: string) =>
      (html.match(/<input type="radio"[^>]*>/g) ?? []).filter((tag) => tag.includes('checked=""')).map((tag) => tag.match(/value="(\w+)"/)?.[1])
    expect(checkedUnit(us)).toEqual(['in'])
    expect(checkedUnit(ca)).toEqual(['cm'])
    expect(us).toContain('centimeters')
    expect(ca).toContain('centimetres')
    for (const html of [us, ca]) {
      expect(html).toMatch(/<section id="clearance"/)
      expect(html).toMatch(/<label for="([^"]+)-input"/)
      expect(html).toMatch(/inputMode="decimal"/)
      expect(html).toMatch(/<fieldset[^>]*><legend[^>]*>Unit<\/legend>/)
      expect(html).toMatch(/role="status" aria-live="polite"/)
    }
  })
})

describe('Chooser', () => {
  it('renders each question as a labelled radio group with a live result', () => {
    const html = renderToStaticMarkup(
      createElement(Chooser, {
        market: 'us',
        questions: [
          {
            question: 'What do you need to clean up?',
            answers: [
              { label: 'Dust', href: '/us/guides/floor-care/vacuums', targetLabel: 'Vacuums' },
              { label: 'Stains', href: '/us/guides/floor-care/carpet-upholstery-cleaners', targetLabel: 'Carpet & upholstery cleaners' },
            ],
          },
        ],
      }),
    )
    expect(html).toMatch(/<fieldset[^>]*><legend[^>]*>What do you need to clean up\?<\/legend>/)
    expect(html.match(/type="radio"/g)).toHaveLength(2)
    expect(html).toMatch(/role="status" aria-live="polite"/)
  })
})

describe('RichText', () => {
  it('renders the parsed tree as elements, escaping text', () => {
    const html = renderToStaticMarkup(createElement(RichText, { blocks: parseRichText('<p>A &lt;b&gt; <strong>bold</strong></p><ul><li><em>x</em></li></ul>') }))
    expect(html).toContain('<p>A &lt;b&gt; <strong class="font-semibold text-slate-900">bold</strong></p>')
    expect(html).toContain('<li><em>x</em></li>')
  })

  it('is the only way section HTML reaches the page (no dangerouslySetInnerHTML outside JSON-LD)', () => {
    const dir = join(process.cwd(), 'components', 'floor-care')
    for (const file of readdirSync(dir)) {
      const source = readFileSync(join(dir, file), 'utf8')
      const uses = source.match(/dangerouslySetInnerHTML=\{\{ __html: ([^}]+) \}\}/g) ?? []
      for (const use of uses) expect(use, file).toMatch(/JSON\.stringify\(schema\)/)
    }
  })
})
