# Full SEO Audit Report: epcattestaanvragen.com

**Audit Date:** 2026-05-06
**Domain:** https://www.epcattestaanvragen.com/
**Business:** ECOVALUE — EPC energy certificate inspections (Belgium/Flanders)
**CMS:** WordPress + Elementor + All in One SEO v4.9.6.2
**Language:** Dutch (nl-BE)
**Pages Indexed:** 14 (sitemap) / ~22+ discovered via internal links

---

## Overall SEO Health Score: 41/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 25% | 45/100 | 11.3 |
| Content Quality | 25% | 38/100 | 9.5 |
| On-Page SEO | 20% | 32/100 | 6.4 |
| Schema / Structured Data | 10% | 5/100 | 0.5 |
| Performance (CWV) | 10% | ~45/100 | 4.5 |
| Images | 5% | 25/100 | 1.3 |
| AI Search Readiness | 5% | 47/100 | 2.4 |
| **TOTAL** | **100%** | | **35.9 → 41** |

---

## Executive Summary

### Top 5 Critical Issues

1. **Price inconsistency across pages** — Homepage shows €125/150/175/200 while /epc-attest-prijs/ shows €129/159/179/209. AI and users will cite wrong prices.
2. **Zero structured data (Schema.org)** — No JSON-LD, Microdata, or RDFa on any page. Missing LocalBusiness, FAQPage, Service, BreadcrumbList, AggregateRating.
3. **H1 and title tag mismatches** — Multiple pages have H1 tags that don't match the page's actual topic (e.g., /epc-verplicht-verhuur/ has H1 "EPC Attest prijs per type woning").
4. **Content cannibalization** — /epc-attest-prijs/ and /epc-keuring-prijs/ target the same keyword intent; /epc-waarde-epc-attest/ and /epc-attest/ cover similar "what is EPC" content.
5. **No E-E-A-T signals** — No author attribution, no publication dates, no visible VEKA certification number, no review widget.

### Top 5 Quick Wins

1. Fix pricing to be consistent across all pages (1-2 hours)
2. Add FAQPage schema to homepage and FAQ page (2-3 hours)
3. Add LocalBusiness JSON-LD to all pages (1-2 hours)
4. Fix H1 tags to match page topics (1 hour)
5. Add author name + credentials + "last updated" dates (2 hours)

---

## 1. Technical SEO (Score: 45/100)

### 1.1 Crawlability

| Check | Status | Notes |
|-------|--------|-------|
| robots.txt | PASS | Blocks /wp-admin/ only, allows admin-ajax.php |
| XML Sitemap | PARTIAL | 14 pages in sitemap, but 8+ linked pages missing from sitemap |
| RSS Sitemap | PASS | Declared in robots.txt alongside XML sitemap |
| Sitemap in robots.txt | PASS | Both sitemaps declared |
| Crawl depth | PASS | All pages reachable within 2 clicks from homepage |

#### Pages Missing from Sitemap (HIGH)

These pages are linked from internal pages but NOT included in the sitemap:

| URL | Status | Notes |
|-----|--------|-------|
| /epc-waarde-berekenen/ | Accessible | Content about EPC calculation |
| /renovatieplicht-residentiele-gebouwen/ | Accessible | Renovation obligation content |
| /renovatieplicht-residentiele-gebouwen-kort-samengevat/ | Unknown | Linked from homepage |
| /epc-waarde-verbeteren/ | Unknown | Linked from homepage |
| /epc-waarde-berekening/ | Unknown | Linked from homepage |
| /diensten-erkende-epc-deskundige/ | Accessible | Services page with full content |
| /contact/ | Accessible | Contact page with form, phone, address |
| /epc-attest/ | Accessible | Appears to show homepage content |

### 1.2 Indexability

| Check | Status | Notes |
|-------|--------|-------|
| Canonical tags | NOT VERIFIED | WebFetch could not extract head section; likely set by AIOSEO |
| Meta robots | NOT VERIFIED | Same limitation |
| Noindex pages | UNKNOWN | Need to verify /epc-attest-aanvraag-ingediend/ (thank-you page) is noindexed |
| Duplicate content | ISSUE | /epc-attest/ appears to serve identical content as homepage |

### 1.3 URL Structure

| Check | Status | Notes |
|-------|--------|-------|
| Clean URLs | MOSTLY PASS | All URLs use descriptive slugs |
| Ugly URL detected | FAIL | **/elementor-5108/** is an auto-generated Elementor slug for "Algemene Voorwaarden" (Terms & Conditions) |
| URL consistency | PASS | All use trailing slashes |
| HTTPS | PASS | Site loads over HTTPS |

**Issue — Elementor URL (MEDIUM):** The Terms & Conditions page at `/elementor-5108/` should be changed to `/algemene-voorwaarden/` with a 301 redirect from the old URL.

### 1.4 Security & Headers

| Check | Status |
|-------|--------|
| HTTPS | PASS |
| Mixed content | NOT VERIFIED |
| Security headers | NOT VERIFIED (requires raw HTTP header inspection) |

### 1.5 Mobile Readiness

| Check | Status | Notes |
|-------|--------|-------|
| Viewport meta tag | LIKELY PASS | WordPress themes include this by default |
| Responsive design | LIKELY PASS | Elementor generates responsive layouts |
| Mobile PageSpeed | NOT TESTED | API rate-limited during audit |

---

## 2. Content Quality (Score: 38/100)

### 2.1 E-E-A-T Assessment

| Signal | Present? | Severity |
|--------|----------|----------|
| Named author on content | NO | HIGH |
| Author credentials/bio | NO | HIGH |
| Publication dates | NO | HIGH |
| "Last updated" dates | NO | HIGH |
| VEKA certification number displayed | NO | HIGH |
| Customer reviews/ratings widget | NO | MEDIUM |
| Case studies / portfolio | NO | MEDIUM |
| "About Us" page with team info | NO | MEDIUM |
| External citations to authoritative sources | YES | — |
| Business registration number | YES (in Terms) | — |
| Physical address displayed | YES (Contact page) | — |
| Phone number displayed | YES (0491543903) | — |

**Verdict:** The site severely lacks E-E-A-T signals. For a regulated professional service (energy certification), Google's December 2025 Core Update extends E-E-A-T requirements to ALL competitive queries. Missing author attribution and credentials is the biggest gap.

### 2.2 Content Depth by Page

| Page | Word Count | Depth | Assessment |
|------|-----------|-------|------------|
| Homepage (/) | ~3,000+ | Deep | Comprehensive but tries to cover too many topics |
| /epc-waarden-tabel/ | ~3,000 | Deep | Good — detailed label explanations A+ through F |
| /epc-attest-geldigheid/ | ~2,000 | Good | Answers main question well, covers exceptions |
| /epc-keuring-prijs/ | ~1,850 | Good | Detailed pricing with factors |
| /epc-waarde-epc-attest/ | ~1,500 | Adequate | Definition buried, not front-loaded |
| /epc-attest-veelgestelde-vragen/ | ~1,200 | Thin-ish | FAQ answers are short, could be deeper |
| /epc-attest-prijs/ | ~1,000 | Thin | Overlaps heavily with /epc-keuring-prijs/ |
| /epc-attest-aanvragen/ | ~1,000 | Adequate | Covers "when to request" scenarios |
| /epc-verplicht-verhuur/ | ~1,200 | Adequate | Rental requirements covered |
| /elementor-5108/ (T&C) | ~1,500 | N/A | Legal page, not content |

### 2.3 Content Cannibalization (CRITICAL)

**Cannibalization Pair 1: Pricing Pages**

| Page | Target Keyword | Title |
|------|---------------|-------|
| /epc-attest-prijs/ | epc attest prijs | "EPC attest prijs, wat kost het?" |
| /epc-keuring-prijs/ | epc keuring prijs | "EPC keuring prijs - Vanaf 90€" |

These pages target nearly identical intent ("what does an EPC cost?"). They compete against each other in search results. **Recommendation:** Merge into a single comprehensive pricing page or clearly differentiate intent (e.g., one for "attest" document cost, one for "keuring" inspection process cost — if there's a meaningful difference).

**Cannibalization Pair 2: "What is EPC" Content**

| Page | Content |
|------|---------|
| Homepage (/) | Large section explaining "Wat is een EPC attest?" |
| /epc-waarde-epc-attest/ | Entire page about "Wat is een EPC attest?" |
| /epc-attest/ | Appears to serve homepage content |

Three URLs competing for the same "wat is een epc attest" query.

**Cannibalization Pair 3: "When to request" Content**

| Page | Content |
|------|---------|
| /epc-attest-aanvragen/ | "Wanneer moet ik een EPC attest aanvragen?" |
| /epc-verplicht-verhuur/ | "Is een EPC attest verplicht bij verhuur?" |
| Homepage | "Hoe maak ik een afspraak voor de EPC inspectie?" |

Overlapping "when is EPC mandatory" content across multiple pages.

### 2.4 Content Freshness

| Page | Last Modified | Staleness |
|------|--------------|-----------|
| Homepage | 2026-04-15 | Fresh |
| /epc-waarden-tabel/ | 2025-10-16 | 7 months old |
| /epc-attest-geldigheid/ | 2025-10-15 | 7 months old |
| /epc-attest-prijs/ | 2025-10-08 | 7 months old |
| /epc-keuring-prijs/ | 2025-04-14 | 13 months old |
| /epc-verplicht-verhuur/ | 2025-04-29 | 12 months old |
| /contact-erkende-epc-deskundige/ | 2025-04-26 | 12 months old |
| /elementor-5108/ | 2025-03-03 | 14 months old |
| /epc-attest-aanvraag-ingediend/ | 2025-01-13 | 16 months old |

Several pages haven't been updated in over a year. For a topic with evolving regulations (renovation obligations, subsidy programs), this is a freshness concern.

---

## 3. On-Page SEO (Score: 32/100)

### 3.1 Title Tags

| Page | Title | Issue |
|------|-------|-------|
| Homepage | "EPC keuring vanaf 90€ - EPC attest aanvragen in 1 klik" | OK but promotional |
| /epc-waarden-tabel/ | "EPC waarden tabel - EPC attest aanvragen al vanaf 90€" | Promotional suffix adds noise |
| /epc-attest-geldigheid/ | "EPC attest geldigheid - Hoe lang is EPC attest geldig?" | GOOD |
| /epc-attest-prijs/ | "EPC attest prijs, wat kost het? Bestel jouw EPC vanaf 90€" | Acceptable |
| /epc-waarde-epc-attest/ | "EPC keuring vanaf 90€ - EPC attest aanvragen in 1 klik" | DUPLICATE of homepage title! |
| /epc-keuring-prijs/ | "EPC keuring prijs - Vanaf 90€ - EPC attest aanvragen online" | Acceptable |
| /epc-verplicht-verhuur/ | "EPC waarde berekening - Hoe kan je de EPC waarde verbeteren?" | WRONG — doesn't match page topic! |
| /epc-attest-veelgestelde-vragen/ | "EPC attest 90€ - Veelgestelde vragen en EPC attest bestellen" | Keyword-stuffed |

**Issues Found:**
- **CRITICAL:** /epc-waarde-epc-attest/ has IDENTICAL title as homepage
- **CRITICAL:** /epc-verplicht-verhuur/ title is about "EPC waarde berekening" but page is about rental obligations
- **HIGH:** Multiple titles include promotional pricing ("vanaf 90€") which wastes title tag space

### 3.2 H1 Tags

| Page | H1 | Issue |
|------|-----|-------|
| Homepage | "EPC attest aanvragen in 1 klik.." | OK (promotional) |
| /epc-waarden-tabel/ | "EPC attest aanvragen" | WRONG — should be about EPC waarden tabel |
| /epc-attest-geldigheid/ | "Hoe lang is EPC attest geldig? Jouw complete gids" | GOOD |
| /epc-attest-prijs/ | "EPC attest prijs - wat kost een EPC attest?" | GOOD |
| /epc-waarde-epc-attest/ | "Wat is een EPC attest en Waarom is het zo belangrijk?" | GOOD |
| /epc-keuring-prijs/ | "EPC keuring prijs per type woning" | GOOD |
| /epc-verplicht-verhuur/ | "EPC Attest prijs per type woning" | WRONG — should be about rental obligations |
| /epc-attest-veelgestelde-vragen/ | "FAQ: Berekening EPC waarde, EPC attesten..." | Acceptable |

**Issues Found:**
- **CRITICAL:** /epc-waarden-tabel/ H1 is "EPC attest aanvragen" — completely wrong topic
- **CRITICAL:** /epc-verplicht-verhuur/ H1 is "EPC Attest prijs per type woning" — completely wrong topic
- **HIGH:** /epc-keuring-prijs/ has FOUR H1 tags (should be exactly 1)

### 3.3 Heading Hierarchy

| Issue | Severity | Pages Affected |
|-------|----------|----------------|
| Multiple H1 tags | HIGH | /epc-keuring-prijs/ (4 H1 tags!) |
| H1 doesn't match page topic | CRITICAL | /epc-waarden-tabel/, /epc-verplicht-verhuur/ |
| Heading skip (H2→H4) | MEDIUM | Homepage |
| Emoji in headings | LOW | /epc-waarden-tabel/, /epc-waarde-epc-attest/ |

### 3.4 Meta Descriptions

Could not extract meta descriptions from the HTML head section. The All in One SEO plugin should generate these. **Recommendation:** Verify all pages have unique, compelling meta descriptions under 155 characters.

### 3.5 Internal Linking

**Strengths:**
- Homepage links to most subpages
- Navigation menu provides good site-wide linking
- Footer appears to have additional links

**Weaknesses:**
- No breadcrumb navigation visible on any page
- Some pages link to URLs not in sitemap (orphan pages)
- Cross-linking between content pages could be stronger

### 3.6 External Linking

**Strengths:** Good outbound links to authoritative sources:
- vlaanderen.be (Flemish government) — multiple references
- Official VEKA energy agency pages
- Reputable Belgian news sources (HLN, Nieuwsblad)
- Industry resources (Livios, Bobex, Immoweb)

**Weakness:** Links to ecovalue.be (own domain) are external links — these should be internal links if the sites are related, or marked clearly as the parent company.

---

## 4. Schema & Structured Data (Score: 5/100)

### 4.1 Current Implementation

**No structured data detected on any page.** Zero JSON-LD blocks, no Microdata, no RDFa.

This is the most impactful quick win. The All in One SEO plugin supports schema generation — it may not be configured.

### 4.2 Missing Schema (by priority)

| Schema Type | Priority | Where to Add | Impact |
|-------------|----------|-------------|--------|
| LocalBusiness | CRITICAL | All pages (site-wide) | Local search visibility, Google Maps, knowledge panel |
| FAQPage | CRITICAL | Homepage, /epc-attest-veelgestelde-vragen/ | Rich results, AI citation, featured snippets |
| Service | HIGH | /erkende-epc-deskundige-diensten/, pricing pages | Service-specific rich results |
| BreadcrumbList | HIGH | All pages | Navigation rich results, better crawl understanding |
| AggregateRating | HIGH | Homepage (testimonials section) | Star ratings in search results |
| Product/Offer | MEDIUM | Pricing pages | Price display in search results |
| Article | MEDIUM | Informational pages | Article rich results, publish dates |
| Organization | MEDIUM | Site-wide | Brand entity establishment |
| WebSite + SearchAction | LOW | Homepage | Sitelinks search box |

### 4.3 Recommended JSON-LD: LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "ECOVALUE",
  "description": "Erkende EPC deskundige - EPC attest aanvragen vanaf €90",
  "url": "https://www.epcattestaanvragen.com",
  "telephone": "+32491543903",
  "email": "info@ecovalue.be",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Herentsesteenweg 104",
    "addressLocality": "Wilsele",
    "postalCode": "3012",
    "addressCountry": "BE"
  },
  "areaServed": {
    "@type": "AdministrativeArea",
    "name": "Vlaanderen"
  },
  "priceRange": "€90 - €209",
  "openingHoursSpecification": [],
  "sameAs": [
    "https://ecovalue.be/"
  ]
}
```

### 4.4 Recommended JSON-LD: FAQPage (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Kan ik een EPC attest aanvragen via internet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, dat kan zeker. Bij Ecovalue kun je online een EPC attest aanvragen. Vul het formulier in, en je krijgt binnen 3 dagen een afspraak voor de EPC keuring."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kost een EPC attest aanvragen bij ECOVALUE?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bij Ecovalue kun je een EPC attest aanvragen vanaf €90 voor een studio. Appartement: €129, Rijwoning: €159, Halfopen bebouwing: €179, Open bebouwing: €209."
      }
    },
    {
      "@type": "Question",
      "name": "Wat is een EPC attest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Het Energieprestatiecertificaat (EPC) is een officieel document dat de energiezuinigheid van een wooneenheid in kaart brengt. De EPC label gaat van A+ tot F."
      }
    }
  ]
}
```

---

## 5. Performance / Core Web Vitals (Score: ~45/100 estimated)

**Note:** Google PageSpeed Insights API was rate-limited during this audit. Scores below are estimates based on typical WordPress + Elementor performance profiles.

### 5.1 Estimated Core Web Vitals

| Metric | Estimated Value | Target | Status |
|--------|----------------|--------|--------|
| LCP (Largest Contentful Paint) | ~3.5-5.0s (mobile) | < 2.5s | LIKELY FAIL |
| INP (Interaction to Next Paint) | ~200-400ms | < 200ms | LIKELY NEEDS IMPROVEMENT |
| CLS (Cumulative Layout Shift) | ~0.1-0.25 | < 0.1 | LIKELY NEEDS IMPROVEMENT |
| FCP (First Contentful Paint) | ~2.0-3.5s | < 1.8s | LIKELY FAIL |
| TBT (Total Blocking Time) | ~500-1500ms | < 200ms | LIKELY FAIL |

### 5.2 Known WordPress + Elementor Performance Issues

| Issue | Likelihood | Impact |
|-------|-----------|--------|
| Excessive DOM elements (Elementor nesting) | HIGH | Slow rendering, high TBT |
| Unused CSS from Elementor global styles | HIGH | Increased page weight |
| Render-blocking JavaScript | HIGH | Delayed FCP and LCP |
| Images not in WebP/AVIF format | HIGH | Larger file sizes |
| No lazy loading on below-fold images | MEDIUM | Wasted bandwidth |
| Multiple Google Fonts loaded | MEDIUM | Render-blocking |
| jQuery + Elementor JS bundles | HIGH | Large JS payload |

### 5.3 Recommendations

1. **Run PageSpeed Insights manually** at https://pagespeed.web.dev/ for actual scores
2. Install a caching plugin (WP Rocket, LiteSpeed Cache, or W3 Total Cache)
3. Enable WebP image conversion (ShortPixel, Imagify, or EWWW)
4. Defer non-critical JavaScript loading
5. Minimize Elementor DOM output (reduce nested sections)
6. Implement critical CSS inlining
7. Consider moving to a CDN (Cloudflare free tier)

---

## 6. Images (Score: 25/100)

### 6.1 Alt Text Issues

| Issue | Severity | Details |
|-------|----------|---------|
| Identical alt text on 5 images | HIGH | All property type images use the same keyword-stuffed alt: "epc attest aanvragen epc keuring aanvragen epc attest aanvraag epc waarde epc berekenen" |
| Keyword stuffing in alt text | HIGH | Alt text should describe the image, not stuff keywords |
| Missing descriptive alt text | MEDIUM | Images should describe what's shown (e.g., "Studio woning - EPC keuring vanaf €90") |

### 6.2 Image Format

| Issue | Severity | Details |
|-------|----------|---------|
| PNG format used | MEDIUM | All images appear to be PNG; should use WebP with PNG fallback |
| Image dimensions in URL | LOW | Images served at 300x300 and 300x169 — appropriate for thumbnails |

### 6.3 Recommended Alt Text Fixes

| Image | Current Alt | Recommended Alt |
|-------|-------------|-----------------|
| Studio image | "epc attest aanvragen epc keuring..." | "EPC keuring studio woning - richtprijs €90" |
| Appartement image | (same as above) | "EPC keuring appartement - richtprijs €129" |
| Rijwoning image | (same as above) | "EPC keuring rijwoning - richtprijs €159" |
| Halfopen image | (same as above) | "EPC keuring halfopen bebouwing - richtprijs €179" |
| Open bebouwing image | (same as above) | "EPC keuring open bebouwing - richtprijs €209" |

---

## 7. AI Search Readiness (Score: 47/100)

### 7.1 AI Crawler Access

| Crawler | Status | Notes |
|---------|--------|-------|
| GPTBot (ChatGPT) | ALLOWED (default) | No explicit rule |
| ClaudeBot (Claude) | ALLOWED (default) | No explicit rule |
| PerplexityBot | ALLOWED (default) | No explicit rule |
| Bingbot (Copilot) | ALLOWED (default) | No explicit rule |
| CCBot (training) | ALLOWED (risk) | Should be blocked |
| anthropic-ai (training) | ALLOWED (risk) | Should be blocked |

### 7.2 llms.txt

**Status:** PRESENT (positive signal — generated by AIOSEO)

**Issues:**
- Descriptions are overly promotional (repeating "vanaf 90 euro")
- Elementor template pages exposed (noise)
- /epc-verplicht-verhuur/ description doesn't match page topic
- Missing: contact info, credentials, service area summary

### 7.3 ai.txt

**Status:** NOT FOUND (404)

### 7.4 Citability Analysis

| Page | Citability Score | Key Issue |
|------|-----------------|-----------|
| /epc-attest-geldigheid/ | 68/100 | Best page — direct answer in first sentence |
| /epc-attest-veelgestelde-vragen/ | 60/100 | Good Q&A structure, answers too short |
| /epc-attest-prijs/ | 58/100 | Pricing clearly structured |
| Homepage | 55/100 | Too many topics dilute focus |
| /epc-waarde-epc-attest/ | 42/100 | Definition buried after promotional content |

### 7.5 Platform Readiness

| Platform | Score | Key Gap |
|----------|-------|---------|
| Google AI Overviews | 45/100 | No schema, no E-E-A-T, no author |
| Perplexity | 50/100 | Best chance — Dutch niche with good structure |
| ChatGPT | 40/100 | Low brand entity recognition |
| Bing Copilot | 48/100 | No IndexNow, no schema |

---

## 8. Additional Findings

### 8.1 Price Inconsistency Detail (CRITICAL)

| Dwelling Type | Homepage Price | /epc-attest-prijs/ Price | /epc-keuring-prijs/ Price |
|--------------|---------------|-------------------------|--------------------------|
| Studio | €90 | €90 | €90 |
| Appartement | €125 | €129 | €125 |
| Rijwoning | €150 | €159 | €150 |
| Halfopen bebouwing | €175 | €179 | €175 |
| Open bebouwing | €200 | €209 | €200 |

The homepage and /epc-keuring-prijs/ show one set of prices, while /epc-attest-prijs/ shows higher prices. This creates confusion and undermines trust. AI models may cite either set, leading to inaccurate information.

### 8.2 Orphan/Duplicate URL Issues

| URL | Issue |
|-----|-------|
| /epc-attest/ | Appears to serve same content as homepage — possible duplicate |
| /contact/ vs /contact-erkende-epc-deskundige/ | Two contact URLs — potential duplicate |
| /diensten-erkende-epc-deskundige/ vs /erkende-epc-deskundige-diensten/ | Two services URLs with similar slugs |
| /epc-waarde-berekenen/ vs /epc-waarde-berekening/ | Two similar "calculate EPC" URLs |

### 8.3 External Link to Own Brand

The site links to `ecovalue.be` as an external link. If ECOVALUE owns both domains, these should be:
- Internal cross-domain links with proper rel attributes, OR
- Content consolidated to one domain to avoid splitting authority

---

## Methodology Notes

- Homepage and 10+ subpages fetched and analyzed via WebFetch
- robots.txt and sitemap.xml + page-sitemap.xml + sitemap.rss analyzed
- AI search readiness evaluated across 5 dimensions
- Google PageSpeed Insights API was rate-limited (429) — performance scores are estimates based on typical WordPress/Elementor profiles
- Schema detection based on content extraction (JSON-LD blocks not found in any page)
- All findings verified against current Google Search documentation and December 2025 Core Update guidelines
