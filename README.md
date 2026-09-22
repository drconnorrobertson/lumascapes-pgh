# Lumascapes Pittsburgh

A complete static website for Lumascapes, a Pittsburgh-area landscape lighting brand.

- Live site: https://drconnorrobertson.github.io/lumascapes-pgh/
- Repository: https://github.com/drconnorrobertson/lumascapes-pgh
- Sitemap: https://drconnorrobertson.github.io/lumascapes-pgh/sitemap.xml
- Google Search Console: URL-prefix property verified September 21, 2026; sitemap submitted, with initial fetch status pending recheck. Keep the verification meta tag in the generated homepage.

## What's included

- 171 HTML pages in the XML sitemap: home, services, 10 dedicated service pages, gallery, 36 visual concept pages, about, contact, a cornerstone lighting guide, journal index, 13 topic collections, 104 focused homeowner guides, and Privacy & Terms.
- 36 original, optimized images of Pittsburgh-style landscape lighting concepts.
- Responsive layout, navigation, accessible form labels, alt text, internal links, canonical URLs, social sharing metadata, XML sitemap, and JSON-LD for the business, pages, and service pages.
- Contact options for phone, text, and Instagram. The form prepares an SMS in the visitor's messaging app; it does not store or send data itself.

## Updating the site

From this repository directory, run `npm run build` to regenerate HTML, sitemap, and robots.txt from the source in `scripts/`. Run `npm run check` to verify internal links, images, title uniqueness, metadata, and headings. No packages need to be installed.

GitHub Pages serves the `main` branch from the repository root. A custom domain can be set in the repository's Pages settings when available. Until then, canonical URLs point to the GitHub Pages address above. Update `baseUrl` in `scripts/build.mjs` before rebuilding after a domain change.

## Business details to verify

The phone number `(412) 256-8351` was seen in a public Lumascapes Instagram promotion. Confirm it, the exact service area, business address, hours, and offers before treating them as final. The website does not invent an address, years in business, reviews, warranties, or completed project claims.

## Image provenance

The images are generated visual concepts, not photographs of completed Lumascapes projects. The site uses the word “concept” in image captions and includes a more explicit explanation in Privacy & Terms. Replace concept images with genuine, permissioned project photography as soon as it is available.

All 36 images were made with the built-in image generation tool, then optimized to JPEG. The prompts asked for single photorealistic editorial photographs of Pittsburgh-style homes or outdoor spaces at blue hour with warm, restrained low-voltage lighting, no people, text, logos, or watermarks. Specific subjects include brick and stone facades, Tudor homes, Victorian entries, front porches, patios, decks, courtyards, garden paths, hillside steps, retaining walls, trees, plantings, driveways, a pergola, a poolside garden, and a winter home. The first six images and 30 subsequent images are named descriptively in `assets/images/`; their filename records the concept. Original prompts and generated PNGs were created in the local Codex image generation session; the optimized JPEGs are the repository assets.

## Search work

Read [SEO-STRATEGY.md](SEO-STRATEGY.md) for the competitor assessment, intent architecture, what has been implemented, and the steps that require access to the business's Google profile and Search Console.
