# SEO Action Plan: epcattestaanvragen.com

**Current Score: 41/100 → Target: 75/100**
**Estimated time to reach target: 3-4 weeks of focused work**

---

## CRITICAL Priority (Fix Immediately — Blocks Rankings)

### 1. Fix Price Inconsistency Across All Pages
**Impact: Very High | Effort: 1-2 hours**

The homepage and /epc-keuring-prijs/ show €125/150/175/200 while /epc-attest-prijs/ shows €129/159/179/209. Decide on ONE price set and update all pages.

**Action:**
- [ ] Decide on correct current prices
- [ ] Update homepage pricing table
- [ ] Update /epc-attest-prijs/ pricing table
- [ ] Update /epc-keuring-prijs/ pricing table
- [ ] Update /epc-attest-veelgestelde-vragen/ pricing mention
- [ ] Search all pages for any other price mentions and fix

---

### 2. Fix H1 and Title Tag Mismatches
**Impact: Very High | Effort: 1-2 hours**

Multiple pages have H1 tags and titles that don't match their actual content topic.

**Action:**
| Page | Current H1 | Correct H1 |
|------|-----------|------------|
| /epc-waarden-tabel/ | "EPC attest aanvragen" | "EPC waarden tabel — Alle EPC labels van A+ tot F" |
| /epc-verplicht-verhuur/ | "EPC Attest prijs per type woning" | "Is een EPC attest verplicht bij verhuur?" |
| /epc-keuring-prijs/ | Has 4 H1 tags | Keep only "EPC keuring prijs per type woning", change others to H2 |

| Page | Current Title | Correct Title |
|------|--------------|---------------|
| /epc-waarde-epc-attest/ | "EPC keuring vanaf 90€ - EPC attest aanvragen in 1 klik" (= homepage!) | "Wat is een EPC attest? Alles over het energieprestatiecertificaat" |
| /epc-verplicht-verhuur/ | "EPC waarde berekening - Hoe kan je de EPC waarde verbeteren?" | "EPC attest verplicht bij verhuur — Wat je moet weten" |

---

### 3. Add Schema.org Structured Data
**Impact: Very High | Effort: 4-6 hours**

Zero structured data on the entire site. This is the single most impactful technical change.

**Action:**
- [ ] **LocalBusiness schema** — Add to all pages via AIOSEO settings. Include: name (ECOVALUE), address (Herentsesteenweg 104, 3012 Wilsele), phone (+32491543903), email, priceRange, areaServed (Vlaanderen)
- [ ] **FAQPage schema** — Add to homepage (3+ Q&A pairs) and /epc-attest-veelgestelde-vragen/
- [ ] **Service schema** — Add to /erkende-epc-deskundige-diensten/ with specific service types and pricing
- [ ] **BreadcrumbList schema** — Add site-wide via AIOSEO
- [ ] **Organization schema** — Add to all pages with sameAs linking to ecovalue.be

**How to implement in AIOSEO:**
1. Go to AIOSEO → Search Appearance → Content Types → set Schema type
2. Go to AIOSEO → Local SEO → add business information
3. For FAQ schema: edit each page → AIOSEO Settings → Schema → add FAQPage
4. Verify at https://search.google.com/test/rich-results

---

### 4. Resolve Content Cannibalization
**Impact: High | Effort: 3-4 hours**

**Pricing pages (/epc-attest-prijs/ vs /epc-keuring-prijs/):**
- [ ] Option A (recommended): Merge into one comprehensive pricing page at /epc-keuring-prijs/ (higher word count), redirect /epc-attest-prijs/ → /epc-keuring-prijs/ with 301
- [ ] Option B: Differentiate clearly — make one about "cost factors" and the other about "price comparison by region"

**"What is EPC" content (homepage vs /epc-waarde-epc-attest/ vs /epc-attest/):**
- [ ] Remove the extensive "Wat is een EPC attest" section from the homepage (keep a short 2-sentence summary with link)
- [ ] Make /epc-waarde-epc-attest/ the canonical "what is EPC" page
- [ ] If /epc-attest/ is a duplicate of homepage, set up 301 redirect to homepage

**Duplicate URL pairs to resolve:**
- [ ] /contact/ → 301 redirect to /contact-erkende-epc-deskundige/
- [ ] /diensten-erkende-epc-deskundige/ vs /erkende-epc-deskundige-diensten/ → keep one, redirect other

---

## HIGH Priority (Fix Within 1 Week)

### 5. Add E-E-A-T Signals
**Impact: High | Effort: 3-4 hours**

- [ ] Add author name to all content pages (e.g., "Geschreven door [Name], erkende energiedeskundige type A")
- [ ] Add VEKA certification/recognition number prominently on homepage and about page
- [ ] Add "Laatst bijgewerkt: [date]" to all content pages
- [ ] Create an "Over Ons" page with team bios, years experience, number of EPC certificates issued
- [ ] Add a Google Reviews widget or Trustpilot/Klantenvertellen integration
- [ ] Display the enterprise number (1012.878.453) in the footer, not just in Terms

---

### 6. Add All Pages to Sitemap
**Impact: High | Effort: 1 hour**

Pages currently missing from sitemap.xml:

- [ ] /epc-waarde-berekenen/
- [ ] /renovatieplicht-residentiele-gebouwen/
- [ ] /renovatieplicht-residentiele-gebouwen-kort-samengevat/
- [ ] /epc-waarde-verbeteren/
- [ ] /epc-waarde-berekening/
- [ ] /diensten-erkende-epc-deskundige/ (or redirect if duplicate)
- [ ] /contact/ (or redirect if duplicate)

Also ensure /epc-attest-aanvraag-ingediend/ (thank-you page) has `noindex` set — it should NOT be in the sitemap.

**How:** AIOSEO → Sitemaps → verify all published pages are included.

---

### 7. Fix Elementor-5108 URL
**Impact: Medium-High | Effort: 30 minutes**

- [ ] Change slug of Terms & Conditions page from `elementor-5108` to `algemene-voorwaarden`
- [ ] Set up 301 redirect from /elementor-5108/ to /algemene-voorwaarden/
- [ ] Update any internal links pointing to the old URL

---

### 8. Front-Load Direct Answers on All Content Pages
**Impact: High | Effort: 2-3 hours**

Every content page should answer its core question in the first 40-60 words. Currently, several pages open with promotional content.

| Page | Fix Needed |
|------|-----------|
| /epc-waarde-epc-attest/ | Move definition to first paragraph: "Het Energieprestatiecertificaat (EPC) is een officieel document dat de energiezuinigheid van een wooneenheid in kaart brengt." |
| Homepage | Lead with value proposition, not "1 klik" promotional |
| /epc-attest-prijs/ | First sentence should state the price range: "Een EPC attest kost bij ECOVALUE tussen €90 (studio) en €209 (open bebouwing)." |

---

## MEDIUM Priority (Fix Within 1 Month)

### 9. Fix Image Alt Text
**Impact: Medium | Effort: 1 hour**

Replace identical keyword-stuffed alt text with unique, descriptive alternatives:

- [ ] Studio image: "EPC keuring studio — richtprijs €90"
- [ ] Appartement image: "EPC keuring appartement — richtprijs €129"
- [ ] Rijwoning image: "EPC keuring rijwoning — richtprijs €159"
- [ ] Halfopen image: "EPC keuring halfopen bebouwing — richtprijs €179"
- [ ] Open bebouwing image: "EPC keuring open bebouwing — richtprijs €209"

---

### 10. Optimize robots.txt for AI Crawlers
**Impact: Medium | Effort: 30 minutes**

Add explicit rules:
```
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: cohere-ai
Disallow: /
```

---

### 11. Improve llms.txt
**Impact: Medium | Effort: 1 hour**

- [ ] Remove Elementor template entries
- [ ] Fix description for /epc-verplicht-verhuur/ to match actual content
- [ ] Diversify descriptions (stop repeating "vanaf 90 euro")
- [ ] Add summary section with service area, credentials, pricing range

---

### 12. Optimize Performance (Core Web Vitals)
**Impact: Medium-High | Effort: 4-8 hours**

- [ ] Run https://pagespeed.web.dev/ for actual scores
- [ ] Install caching plugin (WP Rocket or LiteSpeed Cache)
- [ ] Convert images to WebP (ShortPixel or Imagify plugin)
- [ ] Defer non-critical JavaScript
- [ ] Enable lazy loading for below-fold images
- [ ] Minimize Elementor DOM nesting
- [ ] Consider Cloudflare CDN (free tier)

---

### 13. Add Breadcrumb Navigation
**Impact: Medium | Effort: 1-2 hours**

- [ ] Enable breadcrumbs in AIOSEO or theme settings
- [ ] Add BreadcrumbList schema
- [ ] Structure: Home > [Category] > [Page Title]

---

### 14. Verify Meta Descriptions
**Impact: Medium | Effort: 1-2 hours**

- [ ] Check AIOSEO settings for each page
- [ ] Ensure every page has a unique meta description under 155 characters
- [ ] Include primary keyword and call-to-action
- [ ] Avoid duplicate meta descriptions

---

### 15. Add Open Graph and Twitter Card Meta Tags
**Impact: Medium | Effort: 1 hour**

- [ ] Enable in AIOSEO → Social Networks
- [ ] Set og:image for each page (use relevant property image)
- [ ] Set og:title, og:description, og:type for each page
- [ ] Add Twitter Card meta tags (summary_large_image)

---

## LOW Priority (Backlog)

### 16. Create Missing Content Pages
- [ ] "EPC label betekenis" — explain each label A+ through F with kWh/m2 thresholds
- [ ] "EPC attest Vlaanderen vs Brussel vs Wallonie" — regional comparison
- [ ] Regional landing pages (EPC attest Leuven, EPC attest Antwerpen, etc.)
- [ ] "Hoeveel kost renovatie om EPC te verbeteren?" — link renovation costs to label improvements

### 17. Build Platform Presence for Brand Entity
- [ ] Create YouTube channel with 3-5 EPC explainer videos
- [ ] Complete Google Business Profile with photos and Q&A
- [ ] Create/update LinkedIn company page
- [ ] Submit to Belgian business directories (Gouden Gids, etc.)

### 18. Add ai.txt File
- [ ] Create ai.txt at site root (emerging standard)

### 19. Implement IndexNow Protocol
- [ ] Add IndexNow API key for Bing/Copilot real-time indexing

---

## Implementation Timeline

| Week | Tasks | Expected Score Impact |
|------|-------|----------------------|
| Week 1 | #1 (prices), #2 (H1/titles), #3 (schema), #7 (URL fix) | 41 → 55 |
| Week 2 | #4 (cannibalization), #5 (E-E-A-T), #6 (sitemap), #8 (front-load answers) | 55 → 65 |
| Week 3 | #9 (alt text), #10 (robots.txt), #11 (llms.txt), #12 (performance) | 65 → 72 |
| Week 4 | #13 (breadcrumbs), #14 (meta descriptions), #15 (OG tags) | 72 → 78 |
| Ongoing | #16-19 (content, brand, ai.txt, IndexNow) | 78 → 85+ |

---

## Score Projection

| Milestone | Score | Key Driver |
|-----------|-------|------------|
| Current state | 41/100 | — |
| After critical fixes | ~55/100 | Schema + H1/title fixes + price consistency |
| After high-priority fixes | ~70/100 | E-E-A-T + cannibalization resolved + sitemap |
| After medium-priority fixes | ~80/100 | Performance + images + AI readiness |
| After all fixes | ~85-90/100 | Content expansion + brand presence |
