import { BUSINESS, PRICES } from "@/lib/constants";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS.name,
  description:
    "Erkende energiedeskundige type A — EPC attest aanvragen voor residentiële gebouwen in heel Vlaanderen. Plaatsbezoek binnen 3 dagen, attest binnen 24 uur.",
  url: BUSINESS.website,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    postalCode: BUSINESS.address.postalCode,
    addressCountry: BUSINESS.address.country,
  },
  areaServed: {
    "@type": "State",
    name: BUSINESS.serviceArea,
  },
  priceRange: `€${PRICES.studio.price} - €${PRICES.open.price}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
      description: "Op afspraak",
    },
  ],
  sameAs: ["https://ecovalue.be"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "56",
    bestRating: "5",
    worstRating: "1",
  },
};

export function buildFaqSchema(
  questions: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildServiceSchema(
  name: string,
  description: string,
  price: number
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "ProfessionalService",
      name: BUSINESS.name,
      url: BUSINESS.website,
      telephone: BUSINESS.phone,
    },
    areaServed: {
      "@type": "State",
      name: BUSINESS.serviceArea,
    },
    offers: {
      "@type": "Offer",
      price: price.toString(),
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: price.toString(),
        priceCurrency: "EUR",
        valueAddedTaxIncluded: true,
      },
    },
  };
}
