# Pittsburgh landscape lighting search strategy

Research and implementation snapshot: September 2026. This is a site and competitor assessment, not a guarantee of search position. Organic ranking and map ranking are separate and depend partly on factors outside this repository.

## Competitor observations

| Competitor | What they do well | Opportunity for Lumascapes |
|---|---|---|
| [Outdoor Lighting Perspectives of Pittsburgh](https://www.outdoorlights.com/pittsburgh/) | Broad service coverage, project visuals, reviews, maintenance messaging, and a mature local presence. | Build a more cohesive editorial experience and publish genuinely useful, Pittsburgh-specific guides. Compete with real project proof and reviews over time. |
| [Superior Landscape Lighting](https://www.superiorlandscapelighting.com/outdoor-lighting-installation) | Clear estimate call to action, experience and warranty claims. | Their installation page showed placeholder copy and generic FAQ labels at review time. Lumascapes can be more polished and specific. |
| [LiteScaping](https://www.litescaping.net/) | Strong luxury imagery and a broad service mix. | A Pittsburgh-focused voice can be more locally relevant than a multi-region presentation. |
| [Lyons Landscapes](https://www.lyonslandscapes.com/landscape-lighting-pittsburgh-pa) | Substantial answers to homeowner questions and visible pricing discussion. | Build deeper topical coverage by actual project question and a more premium visual identity. |
| [Eichenlaub](https://eichenlaub.com/landscape-lighting/) | Portfolio, maintenance, and established landscape design credibility. | Position Lumascapes clearly around dedicated after-dark lighting expertise. |
| [Local Roots Landscaping](https://www.localrootslandscaping.com/pittsburgh-pa/landscape-installation/landscape-lighting/) | Local service relevance, testimonials, and broad landscaping presence. | Keep lighting as the central focus and turn each service into a useful page. |

The user-supplied [Google share link](https://share.google/SKHDcYfuppcNKY2hA) pointed to Outdoor Lighting Perspectives during research. Its visibility, reviews, and Google profile activity are a reminder that a website alone will not win the map pack.

## Search intent architecture implemented

- **Commercial intent:** 10 dedicated services: architectural, path, patio, maintenance, low-voltage installation, tree, garden, deck, driveway, and step lighting. Each includes unique design considerations, questions, visual examples, and a direct contact path.
- **Planning intent:** A cornerstone Pittsburgh landscape lighting guide and 104 focused guides organized into 13 browsable collections.
- **Visual intent:** 36 original concept images, a full gallery, and 36 individually linked concept pages with design questions.
- **Brand and conversion:** A full home page, about page, contact page, click-to-call/text actions, and an SMS-preparation form.

The intent library avoids mass-produced suburb landing pages. Google calls pages created mainly to funnel similar location queries “doorway” pages; any future neighborhood page should have real local project evidence and material unique information. See [Google's spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

## On-site SEO completed

- 171 discoverable HTML URLs in `sitemap.xml`, all with unique titles, descriptions, one H1, canonical URLs, and crawlable internal links.
- Page-specific social metadata and original images with descriptive alternative text.
- JSON-LD for the business and pages, plus Service schema on the 10 dedicated service pages. Business schema omits an unverified street address and hours.
- Static HTML, responsive navigation, and lightweight assets.
- A `robots.txt` file alongside the project. On GitHub Pages project sites, crawlers look for robots.txt at the **host root**, so this project-level file cannot control the whole host. The sitemap remains directly accessible and can be submitted in Search Console.

Google's [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide), [Search Essentials](https://developers.google.com/search/docs/essentials), and [sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) inform this structure. Structured data follows [Google's LocalBusiness documentation](https://developers.google.com/search/docs/appearance/structured-data/local-business).

## What is required to compete for the map pack

Google says local results are based mainly on relevance, distance, and prominence. A complete, verified Google Business Profile, real reviews, up-to-date photos, and consistent business details matter. See [Google's local ranking guidance](https://support.google.com/business/answer/7091?hl=en).

The next actions need access to the real business and evidence:

1. Confirm the public phone number, legal/trading name, actual service area, address or service-area configuration, hours, and service list.
2. Verify and complete the Google Business Profile. Add the website URL, correct categories/services, authentic photos, and regular useful updates.
3. Replace concept photography with permissioned before/after and completed-job photos, ideally tied to real services and actual towns served.
4. Ask real customers for reviews through normal business practices, then respond to them. Do not create or buy reviews.
5. The GitHub Pages URL-prefix property was verified in Google Search Console on September 21, 2026 with an HTML tag. The 171-URL sitemap was submitted, and indexing was requested for the home page, services overview, and architectural lighting page. Google decides whether and when URLs are indexed. The first sitemap status said “Couldn’t fetch” even though the published XML returned HTTP 200 to a Googlebot user agent and parsed locally. Recheck Search Console after processing; resubmit or investigate if the status persists.
6. Connect a business-owned domain, update canonical URLs, and keep name/address/phone information consistent wherever it appears.
7. Earn relevant local links: suppliers, legitimate local directories, chambers, design partners, builders, landscape architects, and actual featured projects. Links should be editorial and relevant.
8. Review Search Console queries and indexing monthly. Improve pages using real customer questions, installation detail, and project evidence. Merge or remove pages that do not provide distinct value.

## One-week priority

The site is live, verified in Search Console, and submitted for indexing. All 171 URLs were also sent to IndexNow; its API returned HTTP 202, meaning the submission was received and key validation is pending. IndexNow covers participating engines and does not replace Google Search Console. The fastest useful next work is Business Profile verification, checking the sitemap fetch status, real project photographs, and the first authentic reviews. A #1 ranking within a week cannot be promised or forced by publishing 171 pages; Google may take time to crawl and evaluate them, and local map ranking is influenced by proximity and prominence.
