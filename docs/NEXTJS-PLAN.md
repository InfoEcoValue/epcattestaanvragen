# Next.js Rebuild Plan: epcattestaanvragen.com

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 16 (App Router) | Framework — SSG for content pages, SSR where needed |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| shadcn/ui | UI components (consistent with EcoValue project) |
| next/image | Image optimization (WebP/AVIF, lazy loading) |
| Next.js Metadata API | Per-page SEO (title, description, OG, Twitter Card) |
| Vercel | Hosting + deployment |

No CMS needed — content lives as static pages. If content updates become frequent later, add a headless CMS (e.g. Sanity, Contentful).

---

## Site Architecture (Pages)

### Current WordPress → New Next.js mapping

The audit found cannibalization and duplicate pages. The new site consolidates from ~22 URLs down to **11 clean pages** + legal pages.

| New Route | Old WordPress URL(s) | Purpose |
|-----------|----------------------|---------|
| `/` | `/` | Homepage — hero, mini pricing table, trust signals, CTA |
| `/epc-attest` | `/epc-waarde-epc-attest/`, `/epc-attest/` | What is an EPC certificate (merged) |
| `/epc-keuring-prijs` | `/epc-attest-prijs/`, `/epc-keuring-prijs/` | Pricing — ONE page, ONE price set (merged) |
| `/epc-waarden` | `/epc-waarden-tabel/`, `/epc-waarde-berekenen/`, `/epc-waarde-berekening/` | EPC labels A+ to F explained (merged) |
| `/epc-attest-aanvragen` | `/epc-attest-aanvragen/` | When/why you need an EPC |
| `/epc-attest-geldigheid` | `/epc-attest-geldigheid/` | Validity (10 years) + exceptions |
| `/epc-verplicht-verhuur` | `/epc-verplicht-verhuur/` | EPC mandatory for rental |
| `/renovatieplicht` | `/renovatieplicht-residentiele-gebouwen/`, `/renovatieplicht-residentiele-gebouwen-kort-samengevat/` | Renovation obligation (merged) |
| `/epc-waarde-verbeteren` | `/epc-waarde-verbeteren/` | How to improve your EPC score |
| `/veelgestelde-vragen` | `/epc-attest-veelgestelde-vragen/`, `/wat-is-nodig-voor-een-epc-attest/` | FAQ (merged) |
| `/diensten` | `/erkende-epc-deskundige-diensten/`, `/diensten-erkende-epc-deskundige/` | Services overview (merged) |
| `/contact` | `/contact-erkende-epc-deskundige/`, `/contact/` | Contact form + business info (merged) |
| `/algemene-voorwaarden` | `/elementor-5108/` | Terms & conditions (clean URL) |
| `/bedankt` | `/epc-attest-aanvraag-ingediend/` | Thank you page (noindex) |

**Total: 14 routes (11 content + contact + legal + thank-you)**

---

## Project Structure

```
epcattestaanvragen/
├── public/
│   ├── images/                    # Migrated WordPress images
│   │   ├── epc-studio.png
│   │   ├── epc-appartement.png
│   │   ├── epc-rijwoning.png
│   │   ├── epc-halfopen.png
│   │   ├── epc-open-bebouwing.png
│   │   └── ...
│   ├── robots.txt
│   ├── llms.txt
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout: nav, footer, LocalBusiness schema
│   │   ├── page.tsx               # Homepage
│   │   ├── epc-attest/
│   │   │   └── page.tsx
│   │   ├── epc-keuring-prijs/
│   │   │   └── page.tsx
│   │   ├── epc-waarden/
│   │   │   └── page.tsx
│   │   ├── epc-attest-aanvragen/
│   │   │   └── page.tsx
│   │   ├── epc-attest-geldigheid/
│   │   │   └── page.tsx
│   │   ├── epc-verplicht-verhuur/
│   │   │   └── page.tsx
│   │   ├── renovatieplicht/
│   │   │   └── page.tsx
│   │   ├── epc-waarde-verbeteren/
│   │   │   └── page.tsx
│   │   ├── veelgestelde-vragen/
│   │   │   └── page.tsx
│   │   ├── diensten/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── algemene-voorwaarden/
│   │   │   └── page.tsx
│   │   ├── bedankt/
│   │   │   └── page.tsx
│   │   ├── not-found.tsx          # Custom 404
│   │   └── sitemap.ts            # Dynamic sitemap generation
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Breadcrumbs.tsx
│   │   ├── seo/
│   │   │   ├── SchemaOrg.tsx      # JSON-LD renderer
│   │   │   └── schemas.ts        # Schema builders (LocalBusiness, FAQ, Service, etc.)
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── PricingTable.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── ProcessSteps.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── RenovationImpactTable.tsx
│   │   │   └── FaqAccordion.tsx
│   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   └── ContactForm.tsx
│   ├── lib/
│   │   ├── constants.ts           # Single source of truth: prices, contact info, etc.
│   │   └── utils.ts
│   └── styles/
│       └── globals.css
├── next.config.ts                 # Redirects from old WordPress URLs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Phase 1: Foundation (Day 1-2)

### 1.1 Project setup
- `npx create-next-app@latest` with TypeScript, Tailwind, App Router, `src/` directory
- Install shadcn/ui: `npx shadcn@latest init`
- Add components: accordion, button, card, input, textarea, badge, separator

### 1.2 Constants file — single source of truth

All prices, contact info, and business data in one file. Fixes the price inconsistency problem permanently.

```typescript
// src/lib/constants.ts
export const BUSINESS = {
  name: "ECOVALUE",
  phone: "+32491543903",
  phoneDisplay: "0491 54 39 03",
  email: "info@ecovalue.be",
  address: {
    street: "Herentsesteenweg 104",
    city: "Wilsele",
    postalCode: "3012",
    country: "BE",
  },
  kvk: "1012.878.453",
  serviceArea: "Vlaanderen",
  website: "https://www.epcattestaanvragen.com",
} as const;

export const PRICES = {
  studio: { label: "Studio", price: 90 },
  appartement: { label: "Appartement", price: 129 },
  rijwoning: { label: "Rijwoning", price: 159 },
  halfopen: { label: "Halfopen bebouwing", price: 179 },
  open: { label: "Open bebouwing", price: 209 },
} as const;

export const PROMISES = {
  appointmentDays: 3,
  certificateHours: 24,
  inspectionMinutes: "45 tot 60",
} as const;
```

### 1.3 Layout components

**Root layout** (`layout.tsx`):
- `<html lang="nl-BE">`
- Navbar + Footer rendered on every page
- LocalBusiness JSON-LD injected site-wide
- Google Fonts loaded via `next/font` (no render-blocking)

**Navbar**: Logo, menu items (Diensten, Prijzen, EPC Waarden, FAQ, Contact), mobile hamburger

**Footer**: Business info (address, phone, email, KVK), nav links, "Erkende energiedeskundige" badge, copyright

**Breadcrumbs**: Auto-generated from route, with BreadcrumbList schema

### 1.4 SchemaOrg component

Reusable component that accepts a schema object and renders `<script type="application/ld+json">`.

```typescript
// src/components/seo/SchemaOrg.tsx
export function SchemaOrg({ schema }: { schema: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

Schema builder functions in `schemas.ts` for: LocalBusiness, FAQPage, Service, BreadcrumbList, Article, AggregateRating.

### 1.5 301 Redirects in next.config.ts

```typescript
// next.config.ts
const redirects = async () => [
  // Merged pages
  { source: "/epc-attest-prijs/", destination: "/epc-keuring-prijs", permanent: true },
  { source: "/epc-waarde-epc-attest/", destination: "/epc-attest", permanent: true },
  { source: "/epc-waarden-tabel/", destination: "/epc-waarden", permanent: true },
  { source: "/epc-waarde-berekenen/", destination: "/epc-waarden", permanent: true },
  { source: "/epc-waarde-berekening/", destination: "/epc-waarden", permanent: true },
  { source: "/epc-attest-veelgestelde-vragen/", destination: "/veelgestelde-vragen", permanent: true },
  { source: "/wat-is-nodig-voor-een-epc-attest/", destination: "/veelgestelde-vragen", permanent: true },
  { source: "/erkende-epc-deskundige-diensten/", destination: "/diensten", permanent: true },
  { source: "/diensten-erkende-epc-deskundige/", destination: "/diensten", permanent: true },
  { source: "/renovatieplicht-residentiele-gebouwen/", destination: "/renovatieplicht", permanent: true },
  { source: "/renovatieplicht-residentiele-gebouwen-kort-samengevat/", destination: "/renovatieplicht", permanent: true },
  // Clean URL fixes
  { source: "/elementor-5108/", destination: "/algemene-voorwaarden", permanent: true },
  { source: "/epc-attest-aanvraag-ingediend/", destination: "/bedankt", permanent: true },
  // Duplicate contacts
  { source: "/contact-erkende-epc-deskundige/", destination: "/contact", permanent: true },
  // Trailing slash normalization handled by Next.js config: trailingSlash: false
];
```

---

## Phase 2: Core Pages (Day 3-5)

### Content Strategy: Scrape & Rebuild

We follow the **existing page structure** of the current WordPress site at epcattestaanvragen.com. For each page we:

1. **Scrape** the live WordPress page — extract all text content, headings, and images
2. **Download images** — save all photos/graphics from the page to `public/images/`
3. **Rebuild** the page in Next.js — using the scraped text and images as the content source, with improved layout, proper heading hierarchy, and optimized markup
4. **Enhance** — add proper metadata, JSON-LD schema, internal links, and CTA sections

This ensures we preserve the existing SEO-valuable content and imagery while upgrading the technical foundation. Pages are built **one by one** — always ask the user which page to scrape next.

### 2.1 Homepage (`/`) ✅ DONE

Built from the Claude Design HTML reference (`EPC Homepage v4.html`). All homepage sections are complete and mobile-responsive.

**Sections:** Hero + HeroWizard, TrustStrip, PurposeFilter, PricingTable, ProcessSteps, EpcScale, Coverage, WhyChooseUs, Testimonials, Footer CTA.

### 2.2 EPC Attest (`/epc-attest`)
Scrape text + images → merge duplicate WP pages into one → rebuild

### 2.3 Pricing (`/epc-keuring-prijs`)
Scrape text + images → merge duplicate WP pages → use prices from `constants.ts`

### 2.4 EPC Waarden (`/epc-waarden`)
Scrape text + images → merge 3 WP pages into single EPC values page

### 2.5 EPC Attest Aanvragen (`/epc-attest-aanvragen`)
Scrape text + images → rebuild

### 2.6 EPC Attest Geldigheid (`/epc-attest-geldigheid`)
Scrape text + images → rebuild

### 2.7 EPC Verplicht Verhuur (`/epc-verplicht-verhuur`)
Scrape text + images → rebuild

### 2.8 Renovatieplicht (`/renovatieplicht`)
Scrape text + images → merge 2 WP pages into one → rebuild

### 2.9 EPC Waarde Verbeteren (`/epc-waarde-verbeteren`)
Scrape text + images → rebuild

### 2.10 FAQ (`/veelgestelde-vragen`)
Scrape Q&A content → merge 3 WP pages → rebuild with shadcn Accordion

### 2.11 Diensten (`/diensten`)
Scrape text + images → merge 2 WP pages into one → rebuild

### 2.12 Contact (`/contact`)
Scrape business info → rebuild with contact form (Make.com webhook) → redirect to /bedankt on success

### 2.13 Algemene Voorwaarden (`/algemene-voorwaarden`)
Scrape legal text → rebuild with clean layout

### 2.14 Bedankt (`/bedankt`)
Scrape confirmation text → rebuild (noindex, nofollow)

### Per-page checklist

- [ ] Scrape text + images from live WordPress page
- [ ] Save images to `public/images/`
- [ ] Unique `metadata` (title, description, OG)
- [ ] Front-loaded answer in first paragraph
- [ ] One H1, proper heading hierarchy (H2, H3 — no skips)
- [ ] Internal links to related pages
- [ ] CTA at bottom
- [ ] JSON-LD schema (Article, FAQPage, Service as appropriate)
- [ ] Mobile-responsive (360px-430px tested)
- [ ] Author + "Laatst bijgewerkt" where relevant

---

## Phase 3: SEO & Polish (Day 6-7)

### 3.1 Dynamic sitemap

```typescript
// src/app/sitemap.ts
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "/epc-attest", priority: 0.8 },
    { url: "/epc-keuring-prijs", priority: 0.8 },
    // ... all content pages
  ];
  return pages.map(p => ({
    url: `https://www.epcattestaanvragen.com${p.url}`,
    lastModified: p.lastModified ?? new Date(),
    changeFrequency: p.changeFrequency ?? "monthly",
    priority: p.priority ?? 0.7,
  }));
}
```

### 3.2 robots.txt

```
// public/robots.txt
User-agent: *
Disallow: /bedankt
Allow: /

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

Sitemap: https://www.epcattestaanvragen.com/sitemap.xml
```

### 3.3 llms.txt

Clean, informational llms.txt in `public/` — no Elementor noise, no repetitive promotional text.

### 3.4 E-E-A-T elements

- Author component showing name, credential, VEKA number
- "Laatst bijgewerkt: [date]" on each content page
- Enterprise number in footer
- Google Reviews or Trustpilot widget (embed or link)

### 3.5 Open Graph images

Create OG images per page (1200x630) or use `next/og` (ImageResponse API) to generate them dynamically from page titles.

### 3.6 Custom 404 page

`not-found.tsx` with helpful links back to main pages.

---

## Phase 4: Deploy (Day 8)

### 4.1 Vercel deployment
- Connect Git repo to Vercel
- Set custom domain: www.epcattestaanvragen.com
- DNS: point domain to Vercel

### 4.2 Post-launch checklist
- [ ] Verify all 301 redirects work (test every old URL)
- [ ] Submit new sitemap to Google Search Console
- [ ] Submit new sitemap to Bing Webmaster Tools
- [ ] Test with Google Rich Results Test (schema validation)
- [ ] Run PageSpeed Insights (target: 90+ mobile)
- [ ] Test all forms work (contact form submission)
- [ ] Verify robots.txt accessible
- [ ] Verify llms.txt accessible
- [ ] Check Google Search Console for crawl errors after 48h
- [ ] Monitor indexed pages in GSC over next 2 weeks

---

## Summary

| Phase | Days | Deliverables |
|-------|------|-------------|
| 1. Foundation | 1-2 | Project setup, constants, layout, schema components, redirects |
| 2. Core Pages | 3-5 | All 14 pages built with content, metadata, schema |
| 3. SEO & Polish | 6-7 | Sitemap, robots.txt, llms.txt, E-E-A-T, OG images, 404 |
| 4. Deploy | 8 | Vercel + domain + post-launch verification |

**Expected SEO score after launch: 75-85/100** (vs current 41/100)
