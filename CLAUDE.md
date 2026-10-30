@AGENTS.md

# Project Rules — homenura.com

## Amazon Associates Compliance (MANDATORY)
Until the Amazon account can use Amazon's product API (Creators API), the Associates Operating Agreement forbids showing Amazon product images or prices. Breaking it can close the account and void every commission.

1. **No Amazon product images**: never hotlink, download, store or proxy an image from an Amazon CDN, and never add an Amazon host to `next.config.ts` `images.remotePatterns` or the CSP in `proxy.ts`. Product cards use `components/ProductVisual.tsx`: the manufacturer's official photo when `data/product-images.json` has one, else a neutral card (category icon, brand, model) fed by the `brand` field of `lib/products.ts` / `lib/smart-kitchen-products.ts`. Blog hero images come from free photo libraries (Unsplash), never Amazon.
   - **Manufacturer photos**: only from the brand itself (press kit first, else its official product page or the brand's own CDN/press folder; never Amazon, a retailer or another review site), exact model, product unaltered, credited ("Photo : © Brand"), self-hosted. Record the provenance in `data/product-images.json` (source page, image URL, licence note, date, credit, raw file SHA-256), put the download in `.cache/product-images/raw/` (gitignored), then run `npx tsx scripts/images/build-product-images.ts` and commit the manifest + `public/images/products/`. `tests/lib/product-images.test.ts` enforces it.
   - **Galleries like Amazon / vergleich.org** (Miguel, 30/10/2026: the site sells, photos must make people click; remove nothing): each model has a main packshot plus up to 3 `gallery` photos (`in-use`, `lifestyle`, `detail`) with the same provenance and a caption per locale. Cards show the in-use photo on hover, podiums an Amazon-style gallery, pages open with a wide in-use banner of their top product. A brand is no longer skipped because its site terms restrict reuse: quote the restriction in `licence` and list the brand in `docs/photos/DEMANDES-AUTORISATION.md` (written permission requested). Still never: an image carrying a third-party test seal or award, a price, an edited product, or an AI-generated scene of a specific model.
2. **No prices next to Amazon products**: `priceNumeric` only sorts products into budget tiers and feeds click analytics; it is never rendered. Editorial budget ranges ("moins de 100 €") are fine, a model's price is not.
3. **Disclosure**: Amazon's exact Associates wording per locale lives in `lib/affiliate-disclosure.ts`, rendered by `components/AmazonDisclosure.tsx` in the footer and next to every block of Amazon links. Never paraphrase it.
4. **Store-neutral CTAs**: every link goes to amazon.fr with the single store ID (`lib/amazon.ts`); Amazon Global Earning sends shoppers to their local store, so labels say "Amazon", never "Amazon.de" / "Amazon.co.uk".
5. `tests/lib/amazon-compliance.test.ts` enforces all of the above.

## Git Workflow
- Always provide the exact `git push origin main --force` command ready to paste
- Use the git write-tree workaround for sandbox commits (GIT_INDEX_FILE pattern)
