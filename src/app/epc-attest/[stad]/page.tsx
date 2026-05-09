import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BUSINESS, PRICES } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema, buildServiceSchema } from "@/components/seo/schemas";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { ArrowRight, Phone, Check } from "lucide-react";

const cityData: Record<string, { name: string; province: string }> = {
  antwerpen:    { name: "Antwerpen",    province: "Antwerpen" },
  gent:         { name: "Gent",         province: "Oost-Vlaanderen" },
  brugge:       { name: "Brugge",       province: "West-Vlaanderen" },
  leuven:       { name: "Leuven",       province: "Vlaams-Brabant" },
  hasselt:      { name: "Hasselt",      province: "Limburg" },
  mechelen:     { name: "Mechelen",     province: "Antwerpen" },
  kortrijk:     { name: "Kortrijk",     province: "West-Vlaanderen" },
  aalst:        { name: "Aalst",        province: "Oost-Vlaanderen" },
  "sint-niklaas": { name: "Sint-Niklaas", province: "Oost-Vlaanderen" },
  genk:         { name: "Genk",         province: "Limburg" },
  oostende:     { name: "Oostende",     province: "West-Vlaanderen" },
  roeselare:    { name: "Roeselare",    province: "West-Vlaanderen" },
};

export function generateStaticParams() {
  return Object.keys(cityData).map((stad) => ({ stad }));
}

export function generateMetadata({ params }: { params: { stad: string } }): Metadata {
  const city = cityData[params.stad];
  if (!city) return {};
  return {
    title: `EPC attest ${city.name} — Erkend energiedeskundige | ECOVALUE`,
    description: `EPC keuring aanvragen in ${city.name} (${city.province})? ECOVALUE, erkend energiedeskundige type A. Plaatsbezoek binnen 3 dagen, attest binnen 24 uur. Vanaf €${PRICES.studio.price} incl. BTW.`,
    openGraph: {
      title: `EPC attest ${city.name} — Erkend energiedeskundige`,
      description: `EPC keuring ${city.name}: studio €${PRICES.studio.price}, rijwoning €${PRICES.rijwoning.price}, open bebouwing €${PRICES.open.price}. Incl. BTW en verplaatsing.`,
      url: `${BUSINESS.website}/epc-attest/${params.stad}`,
      type: "website",
    },
  };
}

const pageFaqs = (cityName: string) => [
  {
    question: `Wat kost een EPC attest in ${cityName}?`,
    answer: `Een EPC attest in ${cityName} kost bij ECOVALUE: studio €${PRICES.studio.price}, appartement €${PRICES.appartement.price}, rijwoning €${PRICES.rijwoning.price}, halfopen bebouwing €${PRICES.halfopen.price}, open bebouwing €${PRICES.open.price}. Alle prijzen zijn inclusief BTW en verplaatsing.`,
  },
  {
    question: `Hoe snel kan ik een EPC keuring plannen in ${cityName}?`,
    answer: `Wij garanderen een plaatsbezoek in ${cityName} binnen 3 werkdagen na uw aanvraag. Het officieel EPC attest ontvangt u binnen 24 uur na het bezoek.`,
  },
  {
    question: "Is een EPC attest verplicht bij verhuur in Vlaanderen?",
    answer: "Ja, een EPC attest is wettelijk verplicht bij elke verhuur, verkoop of overdracht van een woning in Vlaanderen. Zonder geldig attest riskeert u een boete van €500 tot €5.000.",
  },
];

export default function StadPage({ params }: { params: { stad: string } }) {
  const city = cityData[params.stad];
  if (!city) notFound();

  const faqs = pageFaqs(city.name);

  return (
    <>
      <SchemaOrg schema={buildFaqSchema(faqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "EPC attest", url: `${BUSINESS.website}/epc-attest` },
          { name: city.name, url: `${BUSINESS.website}/epc-attest/${params.stad}` },
        ])}
      />
      <SchemaOrg
        schema={buildServiceSchema(
          `EPC attest ${city.name}`,
          `EPC keuring voor woningen in ${city.name} (${city.province}) door erkend energiedeskundige type A. Plaatsbezoek binnen 3 dagen, attest binnen 24 uur.`,
          PRICES.rijwoning.price
        )}
      />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "EPC attest", href: "/epc-attest" },
          { name: city.name, href: `/epc-attest/${params.stad}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            {city.province}
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream mb-4">
            EPC attest{" "}
            <em className="text-gold italic">{city.name}</em>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-cream/75 max-w-[520px] leading-relaxed">
            Erkend energiedeskundige type A actief in {city.name} en de volledige
            provincie {city.province}. Plaatsbezoek binnen 3 dagen, attest binnen 24 uur.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
            {["Vanaf €" + PRICES.studio.price + " incl. BTW", "Plaatsbezoek binnen 3 dagen", "Attest binnen 24 uur"].map((item) => (
              <div key={item} className="flex items-center gap-1.5 text-[13px] sm:text-[14px] text-cream/80">
                <Check className="w-3.5 h-3.5 text-gold shrink-0" strokeWidth={2.5} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5">
                EPC attest {city.name} —{" "}
                <em className="text-blue italic">tarieven</em>
              </h2>
              <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 mb-6">
                <p>
                  ECOVALUE voert EPC keuringen uit voor alle types woningen in{" "}
                  {city.name} en omgeving. Alle prijzen zijn inclusief BTW en
                  verplaatsing — geen verborgen kosten.
                </p>
                <ul className="space-y-2">
                  {[
                    "Erkend energiedeskundige type A (VEKA EP22594)",
                    "Plaatsbezoek gegarandeerd binnen 3 werkdagen",
                    "Officieel EPC attest binnen 24 uur na bezoek",
                    "Grondige opname — wij missen geen details",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] sm:text-[14px]">
                      <Check className="w-4 h-4 text-blue shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] bg-blue text-cream font-semibold text-[15px] hover:bg-blue-2 transition-all"
                >
                  EPC attest aanvragen
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] border border-line-2 text-ink font-semibold text-[15px] hover:bg-cream hover:border-blue transition-all"
                >
                  <Phone className="w-4 h-4 text-blue" />
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-line overflow-hidden">
              <div className="px-5 py-4 bg-blue text-cream">
                <h3 className="font-heading text-[15px] sm:text-[17px] font-medium">
                  Tarieven {city.name} (incl. BTW en verplaatsing)
                </h3>
              </div>
              <table className="w-full text-[13px] sm:text-[14px]">
                <tbody className="divide-y divide-line">
                  {Object.entries(PRICES).map(([key, item]) => (
                    <tr key={key} className="hover:bg-cream/40 transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-[11px] text-muted mt-0.5">{item.desc}</div>
                      </td>
                      <td className="px-5 py-3.5 font-semibold text-blue text-right">€{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,34px)] leading-[1.1] tracking-tight text-center mb-10">
            Veelgestelde vragen —{" "}
            <em className="text-blue italic">EPC attest {city.name}</em>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-xl border border-line p-5 sm:p-6">
                <summary className="font-heading text-[15px] sm:text-[17px] font-medium cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-muted text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="mt-3 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
