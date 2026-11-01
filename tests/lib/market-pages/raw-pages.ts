/**
 * Valid raw market pages (the writers' JSON format) for the tests, each
 * built fresh so a test can break one field.
 */

const PICK_A = {
  brand: 'Acme',
  model: 'Fryer A1',
  role: 'Best overall',
  why: 'A family-size basket with simple controls covers everyday cooking.',
  bestFor: 'you cook for four most days.',
  asin: 'B0TESTAAA1',
  manufacturerUrl: 'https://acme.example/fryer-a1',
  specs: { Capacity: '6.5 L', Power: '1,700 W' },
}

const PICK_B = {
  brand: 'Acme',
  model: 'Fryer B2 Dual',
  role: 'Two baskets',
  why: 'Two independent baskets cook a main and a side that finish together.',
  bestFor: 'you often cook two dishes at once.',
  asin: null,
  manufacturerUrl: 'https://acme.example/fryer-b2',
  specs: { Capacity: '2 × 4 L', Power: '2,400 W' },
}

const PICK_C = {
  brand: 'Bolt',
  model: 'Mini C3',
  role: 'Budget pick',
  why: 'A small footprint and a modest draw suit one or two people.',
  bestFor: 'singles and couples with little counter space.',
  asin: null,
  manufacturerUrl: 'https://bolt.example/mini-c3',
  specs: { Capacity: '3.5 L', Power: '1,400 W' },
}

const ANSWER =
  'Most households should pick the Acme Fryer A1: its basket feeds four and the controls are simple. Choose the Fryer B2 Dual if you cook a main and a side together, and the Bolt Mini C3 if counter space is tight. Check the basket size first: anything above six litres needs room. Dated November 2026.'

const COMMON = {
  updated: '2026-11-01',
  metaTitle: 'Best air fryer 2026: three picks for every kitchen',
  metaDescription: 'Three air fryers compared on capacity, ease of use, cleaning and energy use, with a table, the criteria behind the ranking and sources for every spec.',
  kicker: 'Buying guide',
  answer: ANSWER,
  criteria: [
    { name: 'Usable capacity', weight: 40, explanation: 'How many portions one batch makes.' },
    { name: 'Ease of use', weight: 30, explanation: 'Readable controls avoid everyday mistakes.' },
    { name: 'Cleaning', weight: 30, explanation: 'Dishwasher-safe parts save time.' },
  ],
  sections: [{ h2: 'How to choose the size', html: '<p>Size follows the number of people.</p><ul><li><strong>1–2:</strong> 3–4 L.</li></ul>' }],
  faq: [{ q: 'One basket or two?', a: 'Two baskets help when two dishes cook together.' }],
  independentTesters: [{ name: 'Which?', url: 'https://www.which.co.uk/reviews/air-fryers', note: 'Published results, read on 1 November 2026.' }],
  sources: ['https://acme.example/fryer-a1', 'https://bolt.example/mini-c3'],
}

export function rawGuide(locale = 'en', slug = 'best-air-fryer'): Record<string, unknown> {
  return structuredClone({
    ...COMMON,
    locale,
    type: 'guide',
    slug,
    h1: 'The best air fryers: three picks for every kitchen',
    picks: [PICK_A, PICK_B, PICK_C],
    comparison: {
      columns: ['Model', 'Capacity', 'Power'],
      rows: [
        ['Acme Fryer A1', '6.5 L', '1,700 W'],
        ['Acme Fryer B2 Dual', '2 × 4 L', '2,400 W'],
        ['Bolt Mini C3', '3.5 L', '1,400 W'],
        ['Other Brand Z9', '5 L', '1,500 W'],
      ],
    },
    related: [`/${locale}/guides/airfryers`],
  })
}

export function rawDuel(locale = 'en', slug = 'acme-a1-vs-acme-b2'): Record<string, unknown> {
  return structuredClone({
    ...COMMON,
    locale,
    type: 'duel',
    slug,
    h1: 'Acme Fryer A1 vs Acme Fryer B2 Dual: which one should you buy?',
    picks: [PICK_A, PICK_B],
    comparison: {
      columns: ['Spec', 'Acme Fryer A1', 'Acme Fryer B2 Dual'],
      rows: [
        ['Capacity', '6.5 L', '2 × 4 L'],
        ['Power', '1,700 W', '2,400 W'],
      ],
    },
    related: [`/${locale}/guides/airfryers`],
  })
}

export function rawNews(locale = 'en', slug = 'acme-fryer-recall'): Record<string, unknown> {
  const { criteria: _criteria, faq: _faq, independentTesters: _testers, ...rest } = COMMON
  return structuredClone({
    ...rest,
    locale,
    type: 'news',
    slug,
    h1: 'Acme recalls the Fryer A1 over an overheating plug',
    sections: [{ h2: 'What happened', html: '<p>On 30 October 2026 the regulator published a recall notice.</p>' }],
    sources: ['https://regulator.example/recalls/acme-a1'],
    related: [],
  })
}
