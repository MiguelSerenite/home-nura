@AGENTS.md

# Project Rules — homenura.com

## Image Quality Rules (MANDATORY)
Before committing ANY change to product images in `lib/products.ts`:

1. **VALIDATE every image ID loads**: Test each Amazon CDN URL returns HTTP 200. IDs starting with 8x or 9x are often broken (lifestyle/A+ content images). Remove them.
2. **NO duplicates**: Each image ID must appear only ONCE per country array. Check with `new Set(ids).size === ids.length`.
3. **ALL 6 countries required**: Every product MUST have images for fr, de, en, es, it, nl. Use fallback chain: nl→de, it→fr if marketplace doesn't carry the product.
4. **Minimum 2 images per country**: Never commit a single-image array. If a marketplace only has 1 image, use the fallback country's images instead.
5. **Run validation**: Execute `npx tsx scripts/validate-images.ts` before committing. It checks all rules above including HTTP image loading.
6. **Per-country images are MANDATORY**: Each country shows images from ITS OWN Amazon marketplace. Never use universal/shared images. French Amazon images (with French text) on the French site, German Amazon images (with German text) on the German site, etc.

## Git Workflow
- Always provide the exact `git push origin main --force` command ready to paste
- Use the git write-tree workaround for sandbox commits (GIT_INDEX_FILE pattern)
