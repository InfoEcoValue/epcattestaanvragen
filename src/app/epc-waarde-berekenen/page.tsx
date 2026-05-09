import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PRICES } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/schemas";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { LastUpdated } from "@/components/sections/LastUpdated";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "EPC waarde berekenen: hoe werkt de berekening en wat telt mee?",
  description:
    "De gemiddelde Vlaamse woning scoort 356 kWh/m² (VEKA, 2025). Zo berekent een erkend energiedeskundige uw EPC waarde: isolatie, verwarming, ventilatie en documentatie uitgelegd.",
  openGraph: {
    title: "EPC waarde berekenen: hoe werkt de berekening en wat telt mee?",
    description:
      "Gemiddelde Vlaamse woning: 356 kWh/m² (VEKA, 2025). Ontdek wat een energiedeskundige meet, waarom uw facturen de score bepalen en hoe u onnodig verlies vermijdt.",
    url: `${BUSINESS.website}/epc-waarde-berekenen`,
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EPC waarde berekenen: hoe werkt de berekening en wat telt mee?",
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  author: {
    "@type": "Person",
    name: "Ermin Huskic",
    jobTitle: "Erkend energiedeskundige type A",
    identifier: "VEKA EP22594",
  },
  publisher: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.website,
  },
};

const labelData = [
  { label: "A+", range: "0 kWh/m²", desc: "Energieneutraal of beter", color: "bg-[#1a8a5b] text-white" },
  { label: "A",  range: "1 – 100",  desc: "Zeer energiezuinig",      color: "bg-[#3aa370] text-white" },
  { label: "B",  range: "101 – 200", desc: "Energiezuinig",          color: "bg-[#7eb85a] text-blue-deep" },
  { label: "C",  range: "201 – 300", desc: "Gemiddeld",              color: "bg-[#bcc855] text-blue-deep" },
  { label: "D",  range: "301 – 400", desc: "Renovatiegrens",         color: "bg-[#e8c84a] text-blue-deep" },
  { label: "E",  range: "401 – 500", desc: "Renovatieplicht",        color: "bg-[#e89a3c] text-white" },
  { label: "F",  range: "> 500",     desc: "Renovatieplicht",        color: "bg-[#c8552d] text-white" },
];

const pageFaqs = [
  {
    question: "Hoe wordt de EPC waarde berekend?",
    answer:
      "Een erkend energiedeskundige type A voert een plaatsbezoek uit en registreert alle energetische kenmerken van uw woning in de officiële VEKA-software (EPC3). Die software berekent het primaire energieverbruik in kWh per m² per jaar. Wat de deskundige invoert, zijn meetresultaten, documentgegevens en technische specificaties. De software zelf doet de berekening. Hoe nauwkeuriger de invoer, hoe betrouwbaarder het resultaat.",
  },
  {
    question: "Wat is de gemiddelde EPC waarde in Vlaanderen?",
    answer:
      "De gemiddelde EPC waarde in Vlaanderen is 356 kWh/m² per jaar (VEKA, 2025), wat overeenkomt met label D. Dat klinkt middelmatig, maar vergeet niet: 62% van de woningen scoort label D of slechter. Een woning met label B (100-200 kWh/m²) presteert al beduidend beter dan de helft van het Vlaamse woningpark.",
  },
  {
    question: "Wat als ik geen bouwplannen of facturen heb?",
    answer:
      "Zonder documentatie hanteert de VEKA-software de meest ongunstige standaardwaarden voor elk onderdeel. Uw dak krijgt automatisch de slechtste isolatiewaarde, uw ramen de slechtste Uw-waarde. Dat verlaagt uw EPC score aanzienlijk, ook al is de werkelijkheid beter. Facturen, technische fiches en bouwplannen zijn dan ook geen formaliteit maar een directe vertaling naar een betere score.",
  },
  {
    question: "Hoe lang duurt een EPC inspectie?",
    answer:
      "Voor een studio of klein appartement duurt het plaatsbezoek 30 tot 45 minuten. Een rijwoning vraagt 60 minuten. Een halfopen of open bebouwing kan 60 tot 90 minuten in beslag nemen. De tijd hangt af van de complexiteit, de beschikbare documentatie en de toegankelijkheid van het dak. Een grondige inspectie duurt langer, maar levert een nauwkeuriger resultaat op.",
  },
  {
    question: "Hoeveel is mijn woning meer waard met een beter EPC label?",
    answer:
      "Onderzoek van KU Leuven (2024) toont aan dat een woning met EPC label A gemiddeld 22,6% meer waard is dan een vergelijkbare woning met label D. Voor een woning van €300.000 is dat een verschil van €67.800. Dat maakt energetische renovatie niet alleen een verplichting maar ook een investering die zichzelf terugverdient via een hogere verkoopwaarde.",
  },
];

export default function EpcWaardeBerekenenPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "EPC waarde berekenen", url: `${BUSINESS.website}/epc-waarde-berekenen` },
        ])}
      />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "EPC waarde berekenen", href: "/epc-waarde-berekenen" },
        ]}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            EPC berekening
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream max-w-3xl">
            EPC waarde berekenen:{" "}
            <em className="text-gold italic">wat meet de deskundige, en waarom tellen uw facturen mee?</em>
          </h1>
          <LastUpdated date="2026-05-09" />
        </div>
      </section>

      {/* Intro + Key Takeaways */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-[16px] sm:text-[18px] text-ink leading-relaxed font-medium mb-6">
              De gemiddelde Vlaamse woning verbruikt 356 kWh per m² per jaar (VEKA,{" "}
              2025). Dat is label D. Een woning met label A verbruikt minder dan 100.
              Het verschil? Grotendeels: dakisolatie, ramen en verwarming. En hoe goed
              die worden gedocumenteerd tijdens de keuring.
            </p>
            <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8">
              De EPC waarde is geen mening van de deskundige. Het is een berekening op
              basis van wat hij meet en wat u hem aanreikt aan documenten. Ontbreekt een
              factuur? Dan rekent de software met de slechtste standaardwaarde. Dat kost
              u punten die u misschien niet hoeft te verliezen.
            </p>

            {/* Key Takeaways */}
            <div className="p-5 sm:p-6 bg-blue/5 border-l-4 border-blue rounded-r-xl mb-2">
              <h2 className="font-heading text-[15px] sm:text-[16px] font-semibold text-blue mb-3">
                Kernpunten
              </h2>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                {[
                  "De EPC waarde is het primaire energieverbruik in kWh/m² per jaar, berekend met de officiële VEKA-software (EPC3).",
                  "Gemiddelde Vlaamse woning: 356 kWh/m² (label D). 62% van de woningen scoort label D of slechter (VEKA, 2025).",
                  "Ontbrekende documenten = slechtste standaardwaarden in de software. Uw score daalt onnodig.",
                  "Label A is gemiddeld 22,6% meer waard dan label D (KU Leuven, 2024). Voor een woning van €300.000 is dat €67.800.",
                  "Een grondige energiedeskundige controleert ook moeilijk bereikbare dakisolatie, ketelgegevens en raamfiches.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue font-bold mt-0.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is EPC waarde */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div className="max-w-xl">
              <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5">
                Wat is de EPC waarde precies?
              </h2>
              <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
                <p>
                  De EPC waarde drukt het primaire energieverbruik uit in{" "}
                  <strong>kWh per m² vloeroppervlakte per jaar</strong>. Hoe lager,
                  hoe beter. Een woning die 200 kWh/m² verbruikt, is zuiniger dan
                  een woning die 400 kWh/m² verbruikt.
                </p>
                <p>
                  Primair energieverbruik betekent dat er ook rekening wordt gehouden
                  met de energie die nodig is om energie op te wekken of te
                  transporteren. Zonnepanelen verlagen het primaire verbruik omdat ze
                  ter plaatse energie opwekken zonder transportverliezen.
                </p>
                <p>
                  De VEKA-software (EPC3) berekent de waarde op basis van wat de
                  energiedeskundige invoert na het plaatsbezoek. De software kent
                  geen nuances: wat ontbreekt, wordt ingevuld met de slechtste
                  standaardwaarde.
                </p>

                {/* Citation capsule */}
                <blockquote className="pl-4 border-l-2 border-gold/60 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed italic">
                  De gemiddelde EPC waarde in Vlaanderen bedraagt 356 kWh/m² per jaar
                  (VEKA-statistieken, 2025), wat overeenkomt met EPC label D. Woningen
                  gebouwd voor 1980 scoren gemiddeld beduidend slechter. Recente
                  nieuwbouw haalt verplicht label B of beter dankzij de EPB-normen.
                </blockquote>
              </div>
            </div>

            {/* Label table */}
            <div>
              <h3 className="font-heading text-[15px] sm:text-[17px] font-medium mb-4">
                EPC labels en kWh/m² drempelwaarden
              </h3>
              <div className="bg-white rounded-xl border border-line overflow-hidden">
                <table className="w-full text-[13px] sm:text-[14px]">
                  <thead>
                    <tr className="bg-blue text-cream">
                      <th className="text-left px-4 py-3 font-heading font-medium">Label</th>
                      <th className="text-left px-4 py-3 font-heading font-medium">kWh/m² per jaar</th>
                      <th className="text-left px-4 py-3 font-heading font-medium">Betekenis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {labelData.map(({ label, range, desc, color }) => (
                      <tr key={label} className="hover:bg-cream/40 transition-colors">
                        <td className="px-4 py-3">
                          <span className={`inline-flex w-8 h-8 items-center justify-center rounded font-heading font-semibold text-[13px] ${color}`}>
                            {label}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-[12px]">{range}</td>
                        <td className="px-4 py-3 text-ink-2">{desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat meet de deskundige */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5 max-w-3xl">
            Wat meet en controleert de{" "}
            <em className="text-blue italic">energiedeskundige?</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed max-w-3xl mb-10">
            Zes categorieën bepalen uw EPC waarde. Bij elk geldt: hoe beter
            gedocumenteerd, hoe nauwkeuriger en meestal gunstiger de score.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                emoji: "🏠",
                title: "Dakisolatie (Rd-waarde)",
                impact: "Grootste impact",
                body: "De deskundige controleert het type isolatie, de dikte en de bereikbaarheid. Moeilijk bereikbaar dak zonder factuur = slechtste standaardwaarde. Wij nemen altijd de moeite om het dak te inspecteren.",
              },
              {
                emoji: "🧱",
                title: "Muurisolatie (U-waarde muur)",
                impact: "Grote impact",
                body: "Binnenmuur-, buitenmuur- of spouwmuurisolatie. De U-waarde wordt berekend op basis van materialen en dikte. Bouwplannen of facturen van isolatiewerken zijn bepalend.",
              },
              {
                emoji: "🪟",
                title: "Ramen (Uw-waarde)",
                impact: "Grote impact",
                body: "Enkelvoudig, dubbel of HR+++ glas geeft sterk verschillende scores. De Uw-waarde staat op technische fiches of aankoopfacturen. Ontbreekt die, dan rekent de software met de slechtste waarde.",
              },
              {
                emoji: "🔥",
                title: "Verwarmingsinstallatie",
                impact: "Grote impact",
                body: "Het type ketel, het rendement bij deellast en de aanwezigheid van thermostaatregeling. Ketelgegevens zijn zelden zichtbaar op het toestel zelf. Een grondige deskundige zoekt ze op bij de fabrikant.",
              },
              {
                emoji: "💨",
                title: "Ventilatiesysteem",
                impact: "Gemiddelde impact",
                body: "Systeem A (natuurlijk) tot systeem D (mechanisch met warmteterugwinning). Systeem D heeft de grootste positieve impact op de EPC waarde van alle ventilatieoplossingen.",
              },
              {
                emoji: "☀️",
                title: "Hernieuwbare energie",
                impact: "Gemiddelde impact",
                body: "Fotovoltaïsche zonnepanelen verlagen het primaire verbruik. Vermogen in kWp en oriëntatie worden meegenomen. Attest van de installateur of factuur met specificaties is nodig.",
              },
            ].map(({ emoji, title, impact, body }) => (
              <div
                key={title}
                className="p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-line"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-2xl">{emoji}</span>
                  <span
                    className={`text-[11px] font-mono tracking-[0.1em] uppercase px-2 py-1 rounded font-semibold ${
                      impact === "Grootste impact"
                        ? "bg-blue text-cream"
                        : impact === "Grote impact"
                        ? "bg-blue/10 text-blue"
                        : "bg-cream text-muted"
                    }`}
                  >
                    {impact}
                  </span>
                </div>
                <h3 className="font-heading text-[15px] sm:text-[16px] font-medium mb-2">
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

      {/* Documenten */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5">
              Waarom uw documenten{" "}
              <em className="text-blue italic">de score bepalen</em>
            </h2>
            <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 mb-8">
              <p>
                De VEKA-software kent één regel: wat niet bewezen is, wordt ingevuld
                met de slechtste standaardwaarde. Heeft u 10 jaar geleden het dak laten
                isoleren maar bewaarde u de factuur niet? De software gaat ervan uit dat
                er geen isolatie is.
              </p>
              <p>
                Dat is niet eerlijk, maar het is hoe het systeem werkt. En het is hoe
                sommige keuringen onnodig slecht uitvallen. In onze praktijk zien we
                regelmatig woningen die minstens één label beter zouden scoren als alle
                facturen beschikbaar waren.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Factuur van dakisolatie (met Rd-waarde van het materiaal)",
                "Technische fiche of offerte van ramen (met Uw-waarde)",
                "Ketelgegevens: merk, type, bouwjaar van de verwarmingsketel",
                "Factuur of attest van zonnepanelen (met kWp vermogen)",
                "Bouwplannen of lastenboek",
                "Attest of factuur van het ventilatiesysteem",
              ].map((doc) => (
                <div
                  key={doc}
                  className="flex items-start gap-3 p-3.5 bg-white rounded-lg border border-line"
                >
                  <span className="text-blue font-bold mt-0.5 shrink-0">✓</span>
                  <span className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                    {doc}
                  </span>
                </div>
              ))}
            </div>

            {/* Financial value */}
            <div className="p-5 sm:p-6 bg-blue text-cream rounded-xl sm:rounded-2xl">
              <div className="font-heading text-[32px] sm:text-[40px] font-medium leading-none mb-2">
                +22,6%
              </div>
              <p className="text-[13px] sm:text-[14px] text-cream/80 leading-relaxed">
                Hogere gemiddelde verkoopwaarde voor een woning met EPC label A
                ten opzichte van label D (KU Leuven, 2024). Voor een woning van
                €300.000 is dat een verschil van <strong className="text-white">€67.800</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,34px)] leading-[1.1] tracking-tight text-center mb-10">
            Veelgestelde vragen over{" "}
            <em className="text-blue italic">EPC waarde berekenen</em>
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
            Weet precies wat uw woning scoort.{" "}
            <em className="text-gold italic">Plan uw EPC keuring.</em>
          </h2>
          <p className="text-[15px] sm:text-base text-cream/75 max-w-[500px] mx-auto leading-relaxed mb-8">
            Ermin Huskic (VEKA EP22594) controleert ook moeilijk bereikbare plaatsen
            en zoekt ketelgegevens op. Plaatsbezoek binnen 3 dagen, attest binnen 24
            uur. Vanaf €{PRICES.studio.price} incl. BTW en verplaatsing.
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
