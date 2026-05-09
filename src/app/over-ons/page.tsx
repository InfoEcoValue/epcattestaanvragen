import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/components/seo/schemas";
import { ArrowRight, Phone, Award, Building2, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Over ons — Ermin Huskic, erkend energiedeskundige type A | ECOVALUE",
  description:
    "ECOVALUE werd opgericht door Ermin Huskic (VEKA EP22594), erkend energiedeskundige type A met een achtergrond in de bouwsector en juridische studies. Actief in heel Vlaanderen sinds 2020.",
  openGraph: {
    title: "Over ons — Ermin Huskic, erkend energiedeskundige type A",
    description:
      "Erkend energiedeskundige type A (VEKA EP22594) met bouwexpertise en juridische achtergrond. Actief in heel Vlaanderen sinds 2020.",
    url: `${BUSINESS.website}/over-ons`,
    type: "profile",
  },
};

const pageFaqs = [
  {
    question: "Wie voert de EPC keuring uit?",
    answer:
      "De EPC keuring wordt persoonlijk uitgevoerd door Ermin Huskic, erkend energiedeskundige type A (VEKA EP22594). U werkt altijd rechtstreeks met de expert, zonder tussenpersoon.",
  },
  {
    question: "Hoe lang is ECOVALUE actief?",
    answer:
      "ECOVALUE is actief sinds 2020 en heeft sindsdien honderden EPC keuringen uitgevoerd in alle vijf Vlaamse provincies.",
  },
  {
    question: "Wat maakt ECOVALUE anders dan andere EPC-deskundigen?",
    answer:
      "De combinatie van juridische opleiding en administratieve ervaring in de bouwsector zorgt ervoor dat ECOVALUE niet alleen de EPC waarde berekent, maar ook concrete technische renovatieadviezen geeft die realistisch uitvoerbaar zijn.",
  },
];

export default function OverOnsPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "Over ons", url: `${BUSINESS.website}/over-ons` },
        ])}
      />
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ermin Huskic",
          jobTitle: "Erkend energiedeskundige type A",
          worksFor: {
            "@type": "ProfessionalService",
            name: BUSINESS.name,
            url: BUSINESS.website,
          },
          hasCredential: {
            "@type": "EducationalOccupationalCredential",
            credentialCategory: "Erkenning energiedeskundige type A",
            recognizedBy: {
              "@type": "Organization",
              name: "VEKA — Vlaams Energie- en Klimaatagentschap",
            },
            identifier: "EP22594",
          },
          url: `${BUSINESS.website}/over-ons`,
        }}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            Over ECOVALUE
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream mb-4 max-w-3xl">
            Een EPC attest is zo goed als de{" "}
            <em className="text-gold italic">deskundige die het opmaakt</em>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-cream/75 max-w-[560px] leading-relaxed">
            Bij ECOVALUE doet u altijd zaken met één persoon: Ermin Huskic,
            erkend energiedeskundige type A. Geen callcenter, geen onderaannemers.
          </p>
        </div>
      </section>

      {/* Who is Ermin */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-6">
                Wat bouw- en juridische kennis{" "}
                <em className="text-blue italic">betekent voor uw EPC</em>
              </h2>
              <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
                <p>
                  Ermin Huskic studeerde rechten in Leuven en werkte jarenlang
                  in de administratie van de bouwsector. Dat geeft hem een
                  dubbel voordeel dat de meeste EPC-deskundigen niet hebben: hij
                  begrijpt zowel hoe gebouwen technisch werken als hoe de
                  regelgeving en documentatie eromheen in elkaar zitten.
                </p>
                <p>
                  In de praktijk betekent dat: hij weet waar hij moet zoeken.
                  Dakisolatie die moeilijk bereikbaar lijkt. Ketelgegevens die
                  niet direct zichtbaar zijn. Facturen van ramen die de exacte
                  Uw-waarde vermelden. Details die op een standaard EPC-keuring
                  vaak worden overgeslagen, maar die uw EPC label rechtstreeks
                  beïnvloeden.
                </p>
                <p>
                  Uw EPC-score is niet alleen een getal — het is een document
                  dat uw woning vertegenwoordigt bij verkoop of verhuur. Een
                  grondig opgemaakt attest is dat waard.
                </p>
              </div>
            </div>

            {/* Credential card */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="bg-white rounded-xl sm:rounded-2xl border border-line p-5 sm:p-7">
                <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-4">
                  Ermin Huskic
                </h3>
                <ul className="space-y-3 text-[13px] sm:text-[14px] text-ink-2">
                  <li className="flex items-start gap-3">
                    <Award className="w-4 h-4 text-blue mt-0.5 shrink-0" />
                    <span>
                      Erkend energiedeskundige type A{" "}
                      <strong className="text-ink font-semibold">· VEKA EP22594</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="w-4 h-4 text-blue mt-0.5 shrink-0" />
                    <span>Juridische opleiding · Universiteit Leuven</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-blue mt-0.5 shrink-0" />
                    <span>Administratieve ervaring in de bouwsector</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-4 h-4 flex items-center justify-center text-blue font-bold shrink-0 mt-0.5">✦</span>
                    <span>Actief in heel Vlaanderen <strong className="text-ink font-semibold">sinds 2020</strong></span>
                  </li>
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue text-cream rounded-xl p-5 sm:p-6 text-center">
                  <div className="font-heading text-[36px] sm:text-[44px] font-medium leading-none text-white mb-1">
                    700<sup className="text-[0.5em] text-gold font-semibold">+</sup>
                  </div>
                  <div className="text-[12px] sm:text-[13px] text-cream/70 mt-1.5">
                    EPC attesten uitgereikt
                  </div>
                </div>
                <div className="bg-white border border-line rounded-xl p-5 sm:p-6 text-center">
                  <div className="text-gold text-[15px] tracking-wider mb-1">★★★★★</div>
                  <div className="font-heading text-[20px] sm:text-[24px] font-medium leading-none">4,9/5</div>
                  <div className="text-[12px] sm:text-[13px] text-muted mt-1.5">
                    56 Google-reviews
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-cream rounded-xl border border-line text-[13px] sm:text-[14px] text-ink-2">
                <span className="font-medium text-ink">Ondernemingsnummer:</span>{" "}
                1012.878.453
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What we look for that others miss */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Wat wij controleren dat{" "}
            <em className="text-blue italic">anderen vaak missen</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed max-w-3xl mb-10">
            Een EPC-keuring duurt bij ons langer dan het minimum — bewust. Drie
            zaken worden bij een snelle keuring routinematig overgeslagen, met
            een slechter EPC label als gevolg.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "🪜",
                title: "Dakisolatie controleren",
                body: "Een dak dat moeilijk toegankelijk lijkt, wordt door veel deskundigen overgeslagen. Wij nemen altijd de moeite om te controleren — dakisolatie heeft de grootste impact op uw EPC score.",
              },
              {
                icon: "🔥",
                title: "Exacte ketelgegevens opzoeken",
                body: "Het rendement bij deellast van uw ketel staat zelden op het toestel zelf. Wij zoeken de technische specificaties op bij de fabrikant — dat verschil telt mee in de berekening.",
              },
              {
                icon: "🪟",
                title: "Uw-waarde van ramen verifiëren",
                body: "Ramen met een betere Uw-waarde dan standaard glas verbeteren uw label aanzienlijk. Wij vragen facturen op of zoeken de specificaties na — zodat u niet slechter scoort dan uw woning verdient.",
              },
            ].map(({ icon, title, body }) => (
              <div
                key={title}
                className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line"
              >
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">
                  {title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5">
                Geworteld in{" "}
                <em className="text-blue italic">de Leuvense regio</em>
              </h2>
              <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
                <p>
                  ECOVALUE is gevestigd in Wilsele en actief in heel Vlaanderen.
                  Als lokale onderneming investeren we ook lokaal: we sponsoren{" "}
                  <strong className="text-ink">Judo Centrum Leuven</strong>, omdat
                  een sterke buurt begint bij mensen die erin investeren.
                </p>
                <p>
                  Diezelfde mentaliteit brengen we mee naar elke EPC-keuring:
                  geen haast, geen standaardwerk, maar aandacht voor elk detail
                  dat uw woning verdient.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Actief in Vlaanderen", value: "Alle 5 provincies" },
                { label: "Gevestigd in", value: "Wilsele, 3012" },
                { label: "Plaatsbezoek binnen", value: "3 werkdagen" },
                { label: "Attest binnen", value: "24 uur" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-4 sm:p-5 bg-white rounded-xl border border-line"
                >
                  <div className="text-[11px] sm:text-[12px] tracking-[0.1em] uppercase text-muted mb-1">
                    {label}
                  </div>
                  <div className="font-heading text-[15px] sm:text-[17px] font-medium text-ink">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,34px)] leading-[1.1] tracking-tight text-center mb-10">
            Veelgestelde vragen over{" "}
            <em className="text-blue italic">ECOVALUE</em>
          </h2>
          <div className="space-y-4">
            {pageFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-line p-5 sm:p-6"
              >
                <summary className="font-heading text-[15px] sm:text-[17px] font-medium cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-muted text-xl group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-deep text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h2 className="font-heading font-medium text-[clamp(26px,3.5vw,48px)] leading-[1.05] tracking-tight text-cream mb-4 sm:mb-6">
            Klaar om uw EPC keuring{" "}
            <em className="text-gold italic">aan te vragen?</em>
          </h2>
          <p className="text-[15px] sm:text-base text-cream/75 max-w-[480px] mx-auto leading-relaxed mb-8">
            Plaatsbezoek binnen 3 dagen, officieel attest binnen 24 uur — door
            Ermin Huskic persoonlijk.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-gold text-blue-deep font-semibold text-[15px] sm:text-base hover:bg-gold-2 hover:text-white transition-all"
            >
              EPC keuring aanvragen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] border border-cream/25 text-cream font-semibold text-[15px] sm:text-base hover:bg-cream/10 transition-all"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
