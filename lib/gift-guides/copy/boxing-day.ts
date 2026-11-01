import { BLACK_FRIDAY_YEAR as Y } from '@/lib/black-friday/config'
import type { GiftGuide } from '../types'

export const BOXING_DAY: GiftGuide = {
  slug: 'boxing-day',
  lang: 'ca',
  eventDateISO: '2026-12-26',
  label: `Boxing Day ${Y}`,
  metaTitle: `Boxing Day ${Y} in Canada: Smart Home Picks to Watch`,
  metaDescription: `Boxing Day ${Y} is Saturday, December 26. Air fryers, Instant Pots, humidifiers and more for Canadian homes: what to check in each category before you buy.`,
  h1: `Boxing Day ${Y} in Canada: the smart home devices worth watching`,
  intro: `Boxing Day falls on Saturday, December 26, ${Y}, and many retailers carry their sales over the following days, often called Boxing Week. Instead of a list of offers that changes by the hour, here are the categories that matter in the middle of a Canadian winter, with the models our buying guides already recommend and what to check before you choose. We don't show prices: they change constantly, and Amazon shows the current one.`,
  categoriesTitle: 'Categories to watch',
  cards: [
    {
      category: 'airfryers',
      name: 'Air fryers',
      line: 'Ninja, Philips, Cosori, Typhur: pick the capacity for your household, then a single or dual basket.',
    },
    {
      category: 'multicuiseurs',
      name: 'Multicookers',
      line: 'Instant Pot: pressure cooking and slow cooking in one pot, plus air frying on the Duo Crisp.',
    },
    {
      category: 'cafetieres',
      name: 'Espresso machines',
      line: "De'Longhi and Philips super-automatics grind fresh beans for every cup: compare the milk system and cleaning first.",
    },
    {
      category: 'humidificateurs',
      name: 'Humidifiers',
      line: 'Levoit, Dyson, Sharp: for dry winter air in a bedroom or a large room.',
    },
    {
      category: 'detecteurs-fumee-co',
      name: 'Smoke and CO detectors',
      line: "Kidde smart alarms send a phone alert when you're away; look for the ULC or CSA mark.",
    },
    {
      category: 'aspirateurs-balais',
      name: 'Cordless stick vacuums',
      line: 'Dyson, LG, Samsung: real runtime, filtration and bin size.',
    },
    {
      category: 'aspirateurs-robots',
      name: 'Robot vacuums',
      line: 'Roborock and Dreame: LiDAR navigation, self-emptying docks and mopping.',
    },
    {
      category: 'chauffages-appoint',
      name: 'Space heaters',
      line: 'Wall-mounted or oil-filled: extra heat for the room you use most, with app control or a built-in timer.',
    },
  ],
  faq: [
    {
      question: `When is Boxing Day ${Y}?`,
      answer: `Saturday, December 26, ${Y}. Many retailers run their sales over several days after it, often called Boxing Week; check the dates on each retailer's site, including Amazon's.`,
    },
    {
      question: 'Black Friday or Boxing Day: which is better for appliances?',
      answer: 'Neither is cheaper for every model. Decide which model suits your home first, then compare the sale price with what it has sold for in recent weeks, and make sure the offer is on the exact version you want.',
    },
    {
      question: 'Can I return a Christmas gift bought online?',
      answer: 'Return windows depend on the retailer and the seller, and some stores extend them over the holidays. Check the return terms on your order, especially when the product is sold by a third-party seller rather than by Amazon.',
    },
    {
      question: 'How do you choose these models?',
      answer: "We don't try out the products ourselves. The models come from our buying guides, which compare manufacturer specifications, verified buyer reviews and reviews from the specialist press, using the North American versions sold in Canada. For each category, we explain what to check so you can pick what fits your home.",
    },
  ],
}
