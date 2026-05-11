import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PRICES } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/schemas";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { LastUpdated } from "@/components/sections/LastUpdated";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "EPC waarde verbeteren: 9 maatregelen gerangschikt op impact",
  description:
    "Dakisolatie verbetert uw EPC score met gemiddeld 72%, nieuwe ramen met 82%, een warmtepomp met 82%. Welke renovaties hebben het meeste effect en welke premies zijn er in 2026?",
  openGraph: {
    title: "EPC waarde verbeteren: 9 maatregelen gerangschikt op impact",
    description:
      "Ventilatiesysteem D: 89% impact. Nieuwe ramen en warmtepomp: elk 82%. Dakisolatie: 72%. Rangschikking van alle maatregelen met subsidies voor 2026.",
    url: `${BUSINESS.website}/epc-waarde-verbeteren`,
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EPC waarde verbeteren: 9 maatregelen gerangschikt op impact",
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

const measures = [
  {
    rank: 1,
    emoji: "💨",
    name: "Ventilatiesysteem D met WTW",
    impact: 89,
    costRange: "€8.000 – €15.000",
    subsidy: "MijnVerbouwPremie",
    note: "Mechanische ventilatie met warmteterugwinning. Grootste impact op de EPC waarde van alle maatregelen, maar ook de hoogste installatiekost.",
  },
  {
    rank: 2,
    emoji: "🪟",
    name: "Nieuwe ramen (HR+++)",
    impact: 82,
    costRange: "€5.000 – €15.000",
    subsidy: "MijnVerbouwPremie",
    note: "Alleen bij vervanging van enkel- of oud dubbelglas. De Uw-waarde moet vermeld zijn op de technische fiche om meegenomen te worden in de EPC berekening.",
  },
  {
    rank: 3,
    emoji: "♨️",
    name: "Warmtepomp",
    impact: 82,
    costRange: "€10.000 – €20.000",
    subsidy: "MijnVerbouwPremie + warmtepomppremie",
    note: "Lucht-water of grondwarmtepomp ter vervanging van een gasketel. Combineert goed met vloerverwarming en zonnepanelen.",
  },
  {
    rank: 4,
    emoji: "🏠",
    name: "Dakisolatie",
    impact: 72,
    costRange: "€2.000 – €8.000",
    subsidy: "MijnVerbouwPremie",
    note: "De beste prijs-impactverhouding van alle maatregelen. Plafond- of hellend dak, minerale wol of PUR-schuim: de Rd-waarde bepaalt hoeveel u wint.",
  },
  {
    rank: 5,
    emoji: "🔥",
    name: "Condensatieketel (nieuw)",
    impact: 72,
    costRange: "€3.500 – €7.000",
    subsidy: "Beperkt via MijnVerbouwPremie",
    note: "Vervanging van een oude ketel door een hoogrendementsketel. Minder impact dan een warmtepomp, maar lagere investering.",
  },
  {
    rank: 6,
    emoji: "🧱",
    name: "Isolatie buitengevel",
    impact: 68,
    costRange: "€80 – €200/m²",
    subsidy: "MijnVerbouwPremie",
    note: "Buitenmuurisolatie of gevelbekleding. Vereist in veel gevallen geen vergunning meer. Effectief bij woningen met ongeïsoleerde spouwmuren.",
  },
  {
    rank: 7,
    emoji: "🔆",
    name: "Hoogrendementsbeglazing",
    impact: 66,
    costRange: "€3.000 – €8.000",
    subsidy: "MijnVerbouwPremie",
    note: "Als uw kozijnen nog goed zijn maar het glas verouderd is. Minder impactvol dan volledige raamvervanging, maar goedkoper.",
  },
  {
    rank: 8,
    emoji: "☀️",
    name: "Zonnepanelen",
    impact: 62,
    costRange: "€8.000 – €14.000",
    subsidy: "Prosumentarief afgeschaft, premie via netbeheerder",
    note: "Verlagen het primaire energieverbruik. Effectiever bij een woning die al redelijk geïsoleerd is. Weinig zin als de schil nog slecht is.",
  },
  {
    rank: 9,
    emoji: "🪵",
    name: "Vloerisolatie",
    impact: 37,
    costRange: "€20 – €60/m²",
    subsidy: "MijnVerbouwPremie",
    note: "Laagste impact van alle maatregelen, maar nuttig als aanvulling. Vooral relevant bij kruipruimtes of ongeïsoleerde betonnen vloeren.",
  },
];

const pageFaqs = [
  {
    question: "Welke renovatie verbetert de EPC waarde het meest?",
    answer:
      "Een ventilatiesysteem D met warmteterugwinning heeft de grootste gemiddelde impact op de EPC waarde (89%). Nieuwe ramen (HR+++) en een warmtepomp volgen beide met 82%. De beste keuze hangt af van uw beginsituatie: een woning zonder dakisolatie haalt meer voordeel uit dakisolatie dan uit zonnepanelen. Een EPC keuring gevolgd door persoonlijk renovatieadvies geeft het meest accurate beeld voor uw specifieke woning.",
  },
  {
    question: "Hoeveel premie krijg ik voor energetische renovaties in 2026?",
    answer:
      "De EPC-labelpremie bedraagt tot €7.000 voor een eengezinswoning die EPC label A bereikt (MijnVerbouwPremie, 2026). Daarnaast voorziet de MijnVerbouwPremie een aparte subsidie per maatregel: dakisolatie, muurisolatie, ramen en warmtepompen worden elk apart gesubsidieerd. De hoogte hangt af van de maatregel en uw inkomen. Een geldig EPC attest voor en na de renovatie is verplicht voor de EPC-labelpremie.",
  },
  {
    question: "Moet ik alle renovaties tegelijk uitvoeren?",
    answer:
      "Nee. U kunt de renovaties spreiden over uw 6-jarige renovatietermijn. Slim plannen loont: begin met de maatregelen met de hoogste impact (dak, ramen, verwarming) en combineer dat met de bijhorende premieaanvragen. Zo vermijdt u ook dat u twee keer moet verbouwen. Een renovatieplan op basis van uw EPC attest helpt u de juiste volgorde te bepalen.",
  },
  {
    question: "Welke maatregel heeft de beste prijs-impactverhouding?",
    answer:
      "Dakisolatie heeft de beste prijs-impactverhouding van alle maatregelen. Een gemiddelde investering van €3.000 tot €6.000 levert een EPC-impact van 72% op. Ter vergelijking: een ventilatiesysteem D heeft iets meer impact (89%) maar kost ook twee tot drie keer meer. Voor woningen zonder enige dakisolatie is dat altijd de eerste stap.",
  },
  {
    question: "Hoe weet ik welke renovaties het meeste opleveren voor mijn woning?",
    answer:
      "Dat weet u pas zeker na een EPC keuring. Het EPC attest toont exact welke onderdelen van uw woning slecht scoren en hoeveel label-verbetering elke maatregel oplevert. Op basis van dat attest geeft een erkend energiedeskundige type A technisch renovatieadvies, afgestemd op uw woning en uw budget. Dat is altijd nauwkeuriger dan een generieke impactrangschikking.",
  },
];

export default function EpcWaardeVerbeterenPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "EPC waarde verbeteren", url: `${BUSINESS.website}/epc-waarde-verbeteren` },
        ])}
      />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "EPC waarde verbeteren", href: "/epc-waarde-verbeteren" },
        ]}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            EPC waarde verbeteren
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream max-w-3xl">
            EPC waarde verbeteren:{" "}
            <em className="text-gold italic">9 maatregelen gerangschikt op impact</em>
          </h1>
          <LastUpdated date="2026-05-09" />
        </div>
      </section>

      {/* Intro + Key Takeaways */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-[16px] sm:text-[18px] text-ink leading-relaxed font-medium mb-6">
              Niet alle renovaties zijn gelijk. Een ventilatiesysteem D verbetert uw
              EPC waarde gemiddeld met 89%. Vloerisolatie doet dat met 37%. Het
              verschil is groot. Toch kiezen veel eigenaars hun renovaties zonder te
              weten wat de impact is voor hun specifieke woning.
            </p>
            <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8">
              Hieronder vindt u alle 9 maatregelen gerangschikt op gemiddelde
              EPC-impact, met kostenschatting en beschikbare premies voor 2026. Houd
              er rekening mee: deze cijfers zijn gemiddelden. De werkelijke impact
              hangt af van de beginsituatie van uw woning. Een EPC keuring geeft u
              de exacte cijfers voor uw situatie.
            </p>

            {/* Key Takeaways */}
            <div className="p-5 sm:p-6 bg-blue/5 border-l-4 border-blue rounded-r-xl mb-2">
              <h2 className="font-heading text-[15px] sm:text-[16px] font-semibold text-blue mb-3">
                Kernpunten
              </h2>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                {[
                  "Ventilatiesysteem D met warmteterugwinning heeft de grootste gemiddelde impact: 89% EPC-verbetering.",
                  "Dakisolatie heeft de beste prijs-impactverhouding: hoge impact (72%) aan relatief lage kost (€2.000 – €8.000).",
                  "EPC-labelpremie loopt op tot €7.000 voor een woning die label A bereikt (MijnVerbouwPremie, 2026).",
                  "Woningen met label A zijn gemiddeld 22,6% meer waard dan woningen met label D (KU Leuven, 2024).",
                  "De volgorde van renovaties maakt uit. Begin met wat de meeste impact heeft voor uw beginsituatie.",
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

      {/* Impact table */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5">
            Alle maatregelen gerangschikt{" "}
            <em className="text-blue italic">op EPC-impact</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed max-w-3xl mb-8">
            Onderstaande impactpercentages zijn gemiddelden op basis van typische
            Vlaamse woningen. De werkelijke impact voor uw woning kan hoger of lager
            liggen afhankelijk van de beginsituatie.
          </p>

          {/* Citation capsule */}
          <blockquote className="pl-4 border-l-2 border-gold/60 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed italic mb-10 max-w-2xl">
            Dakisolatie verlaagt de primaire energievraag van een gemiddelde Vlaamse
            woning met 72%. Dat maakt het de maatregel met de beste combinatie van
            impact en kostprijs. Een ventilatiesysteem D haalt meer (89%) maar kost
            ook twee tot drie keer meer. Voor woningen zonder dakisolatie is dak
            altijd de eerste stap.
          </blockquote>

          <div className="space-y-4">
            {measures.map(({ rank, emoji, name, impact, costRange, subsidy, note }) => (
              <div
                key={name}
                className="grid grid-cols-1 sm:grid-cols-[40px_1fr_120px] gap-4 items-start p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-line hover:border-blue/30 transition-colors"
              >
                <div className="font-mono text-[13px] text-muted font-semibold hidden sm:block">
                  #{rank}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{emoji}</span>
                    <h3 className="font-heading text-[15px] sm:text-[17px] font-medium">
                      {name}
                    </h3>
                    <span className="sm:hidden font-mono text-[12px] text-muted">#{rank}</span>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed mb-2">
                    {note}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-muted">
                    <span>Kost: <strong className="text-ink">{costRange}</strong></span>
                    <span>Premie: <strong className="text-ink">{subsidy}</strong></span>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center">
                  <div className="font-heading text-[28px] sm:text-[32px] font-semibold text-blue leading-none">
                    {impact}%
                  </div>
                  <div className="text-[11px] text-muted mt-0.5">gem. impact</div>
                  <div className="mt-2 w-full bg-cream rounded-full h-1.5">
                    <div
                      className="bg-blue h-1.5 rounded-full"
                      style={{ width: `${impact}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volgorde */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5">
              Welke volgorde is{" "}
              <em className="text-blue italic">het slimst?</em>
            </h2>
            <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 mb-8">
              <p>
                De rangschikking hierboven is een gemiddelde. Uw woning is dat
                misschien niet. Heeft u al dakisolatie en nieuwe ramen? Dan haalt u
                meer voordeel uit een warmtepomp of ventilatie dan uit nog meer
                isolatie. Heeft u nog enkel glas? Dan zijn nieuwe ramen prioritair.
              </p>
              <p>
                Een vuistregel die wij in de praktijk hanteren: begin altijd met de
                schil. Dak, muren, ramen. Een goed geïsoleerde woning heeft minder
                verwarmingsenergie nodig. Pas daarna heeft het zin om de installaties
                te optimaliseren. Een warmtepomp in een slecht geïsoleerde woning
                werkt hard zonder dat u het in uw EPC score of energiefactuur merkt.
              </p>
              <p>
                Zonnepanelen staan onderaan de impactrangschikking. Niet omdat ze
                nutteloos zijn, maar omdat ze pas echt renderen als de basisschil al
                goed is. Installeer ze als laatste, niet als eerste.
              </p>

              {/* Practical box */}
              <div className="p-4 sm:p-5 bg-blue/5 rounded-xl border border-blue/20 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                <strong className="text-ink">Uit onze keuringspraktijk:</strong> Bij
                woningen met label E of F die we inspecteren, is de combinatie
                dakisolatie plus ramen plus een nieuwe ketel of warmtepomp in de
                meeste gevallen voldoende om label D of C te bereiken. Dat is
                genoeg om te voldoen aan de renovatieplicht en in aanmerking te
                komen voor de EPC-labelpremie.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidies */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5">
              Subsidies voor{" "}
              <em className="text-blue italic">energetische renovaties 2026</em>
            </h2>
            <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 mb-8">
              <p>
                Twee subsidiesporen zijn voor u relevant. U kunt ze combineren.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {[
                {
                  title: "MijnVerbouwPremie",
                  subtitle: "Per maatregel",
                  desc: "Premie per renovatiemaatregel: dakisolatie, muurisolatie, ramen, warmtepomp. De hoogte hangt af van de maatregel en uw inkomen. Aanvragen na uitvoering van de werken, met facturen.",
                  href: "https://www.vlaanderen.be/premies-voor-renovatie/mijn-verbouwpremie",
                },
                {
                  title: "EPC-labelpremie",
                  subtitle: "Tot €7.000",
                  desc: "Premie voor de volledige labelsprong. Hoe groter de sprong (bijv. van F naar A), hoe hoger de premie. Verplicht: EPC attest voor en na de renovatie, opgemaakt door een erkend energiedeskundige.",
                  href: "https://www.vlaanderen.be/premies-voor-renovatie/mijn-epc-labelpremie",
                },
              ].map(({ title, subtitle, desc, href }) => (
                <div key={title} className="p-5 sm:p-6 bg-white rounded-xl border border-line">
                  <div className="font-heading text-[20px] sm:text-[24px] font-medium text-blue mb-0.5">
                    {subtitle}
                  </div>
                  <h3 className="font-heading text-[15px] sm:text-[17px] font-medium mb-2">
                    {title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed mb-3">
                    {desc}
                  </p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-blue hover:underline font-medium"
                  >
                    Meer info op vlaanderen.be
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How ECOVALUE helps */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-8">
            Hoe ECOVALUE u{" "}
            <em className="text-blue italic">begeleidt</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mb-8">
            {[
              {
                step: "01",
                title: "EPC keuring",
                body: "Wij meten uw woning grondig en geven u een nauwkeurig EPC attest. Daarin ziet u precies welk label u heeft en hoe ver u van label D, C of A verwijderd bent.",
              },
              {
                step: "02",
                title: "Technisch renovatieadvies",
                body: "Op basis van uw attest en onze bouwervaring geven wij advies over welke maatregelen het meeste opleveren voor uw woning. Geen standaardvolgorde, maar wat in uw geval klopt.",
              },
              {
                step: "03",
                title: "EPC attest na renovatie",
                body: "Na de werken maken wij een nieuw EPC attest op. Dat is uw bewijs voor de renovatieplicht en uw toegang tot de EPC-labelpremie van tot €7.000.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line"
              >
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-2 mb-2">
                  Stap {step}
                </div>
                <h3 className="font-heading text-[15px] sm:text-[17px] font-medium mb-2">
                  {title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/?type=studio#aanvragen"
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] hover:bg-blue-2 transition-all"
            >
              Renovatieadvies aanvragen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] border border-line-2 text-ink font-semibold text-[15px] hover:bg-cream hover:border-blue transition-all"
            >
              <Phone className="w-4 h-4 text-blue" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,34px)] leading-[1.1] tracking-tight text-center mb-10">
            Veelgestelde vragen over{" "}
            <em className="text-blue italic">EPC waarde verbeteren</em>
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
            Weet welke renovatie voor{" "}
            <em className="text-gold italic">uw woning het meeste oplevert.</em>
          </h2>
          <p className="text-[15px] sm:text-base text-cream/75 max-w-[500px] mx-auto leading-relaxed mb-8">
            Start met een EPC keuring door Ermin Huskic (VEKA EP22594). U krijgt
            een nauwkeurig attest en technisch renovatieadvies. Plaatsbezoek binnen
            3 dagen, attest binnen 24 uur. Vanaf €{PRICES.studio.price} incl. BTW en verplaatsing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/?type=studio#aanvragen"
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
