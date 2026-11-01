import { describe, it, expect } from 'vitest'
import { parseRichText, richTextToPlain, RichTextError } from '@/lib/floor-care/html'
import { FloorCareDataError, parseChooserTarget, parseFloorCareGuide } from '@/lib/floor-care/validate'

// A minimal valid guide file; each test breaks one thing in a copy of it.
const robot = {
  brand: 'Acme',
  model: 'Robo R1',
  role: 'Best robot',
  why: 'Low profile.',
  bestFor: 'Low sofas',
  asin: 'B0TEST0001',
  storeUrlSeen: 'https://www.amazon.com/dp/B0TEST0001',
  manufacturerUrl: 'https://acme.example/r1',
  specs: { Type: 'Robot vacuum' },
  heightMm: 94,
  heightSourceUrl: 'https://acme.example/r1/specs',
}
const stick = { ...robot, model: 'Stick S1', role: 'Best stick', heightMm: null, heightSourceUrl: null, asin: null, storeUrlSeen: null }

function validDry(): Record<string, unknown> {
  return structuredClone({
    market: 'us',
    guide: 'dry',
    metaTitle: 'Best vacuums',
    metaDescription: 'Robot and stick vacuums.',
    h1: 'Vacuums',
    intro: 'Intro.',
    sections: [{ h2: 'How we picked', html: '<p>We read <strong>manufacturer</strong> pages.</p><ul><li>One</li><li><em>Two</em></li></ul>' }],
    picks: [robot, stick],
    comparison: { columns: ['Model', 'Type'], rows: [['Acme Robo R1', 'Robot'], ['Stick S1', 'Stick']] },
    chooser: [{ question: 'Robot?', answers: [{ label: 'Yes', goesTo: 'clearance' }, { label: 'No', goesTo: 'vacuums#picks' }] }],
    faq: [{ q: 'Q?', a: 'A.' }],
    sources: ['https://acme.example/r1/specs'],
  })
}

const parseDry = (raw: unknown) => parseFloorCareGuide(raw, 'us', 'dry')

function expectError(raw: unknown, message: RegExp) {
  expect(() => parseDry(raw)).toThrow(FloorCareDataError)
  expect(() => parseDry(raw)).toThrow(message)
}

function withPick(change: Record<string, unknown>, index = 0) {
  const raw = validDry()
  const picks = raw.picks as Record<string, unknown>[]
  picks[index] = { ...picks[index], ...change }
  return raw
}

describe('parseFloorCareGuide', () => {
  it('accepts a valid file and parses its sections', () => {
    const guide = parseDry(validDry())
    expect(guide.picks).toHaveLength(2)
    expect(guide.picks[0].heightMm).toBe(94)
    expect(guide.isFixture).toBe(false)
    expect(guide.entryBanner).toBeNull()
    expect(richTextToPlain(guide.sections[0].blocks)).toBe('We read manufacturer pages. One Two')
    expect(guide.chooser[0].answers.map((a) => a.goesTo)).toEqual([
      { kind: 'clearance' },
      { kind: 'guide', guide: 'dry', anchor: 'picks' },
    ])
  })

  it('names the file and the field in every error', () => {
    expectError(withPick({ heightMm: '94mm' }), /^data\/floor-care\/us-dry\.json: picks\[0\]\.heightMm: expected the robot's height in millimetres/)
  })

  it('marks placeholder files and ignores "_" comment keys', () => {
    const raw = { ...validDry(), _fixture: 'placeholder', _note: 'comment' }
    expect(parseDry(raw).isFixture).toBe(true)
  })

  it('rejects a file in the wrong place', () => {
    expectError({ ...validDry(), market: 'ca' }, /market: expected "us"/)
    expectError({ ...validDry(), guide: 'textile' }, /guide: expected "dry"/)
  })

  it('rejects unknown fields (typos) with the allowed list', () => {
    expectError({ ...validDry(), heroImage: 'x' }, /heroImage: unknown field/)
    expectError(withPick({ heightMM: 94 }), /picks\[0\]\.heightMM: unknown field \(allowed: brand, model/)
  })

  it('requires the text fields', () => {
    expectError({ ...validDry(), h1: '  ' }, /h1: expected a non-empty string/)
    expectError(withPick({ why: undefined }), /picks\[0\]\.why: expected a non-empty string/)
  })

  it('checks ASINs and heights', () => {
    expectError(withPick({ asin: 'b0test' }), /picks\[0\]\.asin: expected a 10-character ASIN or null/)
    expectError(withPick({ heightMm: 0 }), /heightMm/)
    expectError(withPick({ heightMm: 1100 }), /heightMm.*up to 300/)
    expectError(withPick({ heightSourceUrl: null }), /picks\[0\]\.heightSourceUrl: required when heightMm is set/)
    expectError(withPick({ heightMm: null }), /picks\[0\]\.heightMm: missing: heightSourceUrl is set/)
  })

  it('needs at least one robot height in the vacuum guide (clearance check)', () => {
    expectError(withPick({ heightMm: null, heightSourceUrl: null }), /picks: the vacuum guide needs at least one robot with heightMm/)
  })

  it('refuses prices next to products', () => {
    expectError(withPick({ why: 'Only $199 this week.' }), /picks\[0\]\.why: .* looks like a price/)
    expectError(withPick({ specs: { Type: 'Robot', Price: 'varies' } }), /picks\[0\]\.specs\.Price: no price spec/)
    expectError(withPick({ specs: { Type: 'CA$ 249' } }), /looks like a price/)
    const raw = validDry()
    ;(raw.comparison as { rows: string[][] }).rows[1][1] = '199 USD'
    expectError(raw, /comparison\.rows\[1\]\[1\]: .* looks like a price/)
  })

  it('takes specs, heights and sources from the manufacturer, never an Amazon page', () => {
    expectError(withPick({ manufacturerUrl: 'https://www.amazon.com/dp/B0TEST0001' }), /manufacturerUrl: .* is an Amazon page/)
    expectError(withPick({ heightSourceUrl: 'https://m.media-amazon.com/images/I/x.jpg' }), /heightSourceUrl: .* is an Amazon page/)
    expectError({ ...validDry(), sources: ['https://amzn.to/abc'] }, /sources\[0\]: .* is an Amazon page/)
    expectError(withPick({ manufacturerUrl: 'http://acme.example/r1' }), /expected an https URL/)
  })

  it('keeps the store page seen to the market’s own Amazon store, without a tag', () => {
    expectError(withPick({ storeUrlSeen: 'https://www.amazon.ca/dp/B0TEST0001' }), /storeUrlSeen: "www\.amazon\.ca" is not the amazon\.com store/)
    expectError(withPick({ storeUrlSeen: 'https://www.amazon.com/dp/B0TEST0001?tag=someone-20' }), /remove the "tag" parameter/)
    expect(parseDry(withPick({ storeUrlSeen: 'https://www.bestbuy.com/site/x' })).picks[0].storeUrlSeen).toBe('https://www.bestbuy.com/site/x')
    const canadian = { ...withPick({ storeUrlSeen: 'https://www.amazon.ca/dp/B0TEST0001' }), market: 'ca' }
    expect(parseFloorCareGuide(canadian, 'ca', 'dry').picks[0].storeUrlSeen).toBe('https://www.amazon.ca/dp/B0TEST0001')
  })

  it('lets a guide’s table compare its own picks only', () => {
    const raw = validDry()
    ;(raw.comparison as { rows: string[][] }).rows.push(['Other Brand X9', 'Robot'])
    expectError(raw, /comparison\.rows\[2\]\[0\]: "Other Brand X9" is not one of this guide's picks/)
  })

  it('matches table rows to picks by brand + model or model alone', () => {
    const raw = validDry()
    ;(raw.comparison as { rows: string[][] }).rows = [['ACME robo r1', 'Robot'], ['Acme Stick S1', 'Stick']]
    expect(parseDry(raw).comparison.rows).toHaveLength(2)
  })

  it('checks table shape', () => {
    const raw = validDry()
    ;(raw.comparison as { rows: string[][] }).rows[0] = ['Acme Robo R1']
    expectError(raw, /comparison\.rows\[0\]: expected 2 cells/)
  })

  it('rejects duplicate picks and sources', () => {
    expectError({ ...validDry(), picks: [robot, robot] }, /picks: model "acme robo r1" is listed twice/)
    expectError({ ...validDry(), sources: ['https://a.example/x', 'https://a.example/x'] }, /sources: source .* is listed twice/)
  })

  it('checks chooser destinations', () => {
    const raw = validDry()
    ;(raw.chooser as { answers: { goesTo: string }[] }[])[0].answers[1].goesTo = 'mops'
    expectError(raw, /chooser\[0\]\.answers\[1\]\.goesTo: "mops" is not a floor-care destination/)
  })

  it('keeps the entry banner in the hub file', () => {
    expectError({ ...validDry(), entryBanner: { title: 'T', text: 'X' } }, /entryBanner: belongs to the hub file only/)
  })

  it('reports section HTML outside the allowed tags', () => {
    const raw = validDry()
    ;(raw.sections as { html: string }[])[0].html = '<p>See <a href="https://x.example">this</a></p>'
    expectError(raw, /sections\[0\]\.html: <a> at character 7 is not allowed \(allowed: p, ul, li, strong, em\)/)
  })
})

describe('parseChooserTarget', () => {
  it('accepts guide keys, slugs, paths and anchors', () => {
    expect(parseChooserTarget('hardfloor', 'us', 'hub')).toEqual({ kind: 'guide', guide: 'hardfloor' })
    expect(parseChooserTarget('carpet-upholstery-cleaners', 'us', 'hub')).toEqual({ kind: 'guide', guide: 'textile' })
    expect(parseChooserTarget('/us/guides/floor-care/vacuums/', 'us', 'hub')).toEqual({ kind: 'guide', guide: 'dry' })
    expect(parseChooserTarget('/guides/floor-care', 'ca', 'dry')).toEqual({ kind: 'guide', guide: 'hub' })
    expect(parseChooserTarget('textile#picks', 'ca', 'hub')).toEqual({ kind: 'guide', guide: 'textile', anchor: 'picks' })
    expect(parseChooserTarget('#comparison', 'ca', 'textile')).toEqual({ kind: 'guide', guide: 'textile', anchor: 'comparison' })
    expect(parseChooserTarget('clearance', 'us', 'hub')).toEqual({ kind: 'clearance' })
    expect(parseChooserTarget('vacuums#clearance', 'us', 'hub')).toEqual({ kind: 'clearance' })
  })

  it('refuses other markets, other pages and odd anchors', () => {
    expect(parseChooserTarget('/ca/guides/floor-care/vacuums', 'us', 'hub')).toBeNull()
    expect(parseChooserTarget('/us/guides/airfryers', 'us', 'hub')).toBeNull()
    expect(parseChooserTarget('dry#Bad Anchor', 'us', 'hub')).toBeNull()
    expect(parseChooserTarget('dry#a#b', 'us', 'hub')).toBeNull()
  })
})

describe('parseRichText (section bodies)', () => {
  it('builds a tree of the allowed tags, decoding entities and collapsing whitespace', () => {
    expect(parseRichText('<p>Tom &amp; Jerry &mdash; <em>ok</em></p>\n<ul>\n  <li>a <strong>b</strong></li>\n</ul>')).toEqual([
      { tag: 'p', children: ['Tom & Jerry — ', { tag: 'em', children: ['ok'] }] },
      { tag: 'ul', items: [['a ', { tag: 'strong', children: ['b'] }]] },
    ])
    expect(parseRichText('<P>Fish & chips &#8217; &#x2019;</P>')).toEqual([{ tag: 'p', children: ['Fish & chips ’ ’'] }])
  })

  it.each([
    ['<p onclick="x()">Hi</p>', /attributes are not allowed/],
    ['<p>Hi<br></p>', /<br> at character 5 is not allowed/],
    ['<script>alert(1)</script>', /<script> at character 0 is not allowed/],
    ['<img src=x onerror=alert(1)>', /<img> at character 0 is not allowed/],
    ['<p>Hi</strong>', /<\/strong> at character 5 does not close <p>/],
    ['<p>Hi', /<p> is never closed/],
    ['Loose text', /must sit inside <p> or <li>/],
    ['<ul>text<li>a</li></ul>', /must sit inside <p> or <li>/],
    ['<li>a</li>', /<li> at character 0 cannot sit inside the top level/],
    ['<p><p>a</p></p>', /cannot sit inside <p>/],
    ['<p>1 < 2</p>', /stray "<" at character 5/],
    ['<p>&copy2026</p>', /stray "&copy2026"/],
    ['<p>&bogus;</p>', /unknown entity &bogus;/],
    ['<p> </p>', /empty <p>/],
    ['<ul></ul>', /empty <ul>/],
    ['', /no <p> or <ul> block/],
  ])('rejects %s', (html, message) => {
    expect(() => parseRichText(html)).toThrow(RichTextError)
    expect(() => parseRichText(html)).toThrow(message)
  })
})
