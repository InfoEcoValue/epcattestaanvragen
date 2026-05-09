import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PRICES } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema, buildServiceSchema } from "@/components/seo/schemas";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { LastUpdated } from "@/components/sections/LastUpdated";

export const metadata: Metadata = {
  title: "EPC keuring prijs per type woning | Vanaf €126",
  description:
    "Ontdek de EPC keuring prijs per type woning: studio vanaf €126, appartement €174, rijwoning €212. Incl. BTW en verplaatsing. Plaatsbezoek binnen 3 dagen, attest binnen 24 uur.",
  openGraph: {
    title: "EPC keuring prijs per type woning | Vanaf €126",
    description:
      "EPC keuring prijs: studio €126, appartement €174, rijwoning €212, halfopen €234, open bebouwing €270. Incl. BTW en verplaatsing.",
    url: `${BUSINESS.website}/epc-keuring-prijs`,
    type: "article",
  },
};

const pageFaqs = [
  {
    question: "Wat kost een EPC keuring?",
    answer:
      "De EPC keuring prijs begint bij €126 voor een studio. Appartement €174, rijwoning €212, halfopen bebouwing €234 en open bebouwing €270. Alle prijzen zijn incl. BTW en verplaatsing.",
  },
  {
    question: "Wat zijn de voordelen van een lage EPC waarde?",
    answer:
      "Een lage EPC waarde betekent lagere energiefactuur, hogere woningwaarde, meer comfort en een kleinere ecologische voetafdruk.",
  },
  {
    question: "Waar hangt de EPC keuring prijs van af?",
    answer:
      "De prijs hangt af van het type woning, de regio, de erkende EPC deskundige, extra diensten en de staat van de woning.",
  },
];

const pricingCards = [
  { type: "Studio", price: "126", href: "/contact" },
  { type: "Appartement", price: "174", href: "/contact" },
  { type: "Rijwoning", price: "212", href: "/contact" },
  { type: "Half open bebouwing", price: "234", href: "/contact" },
  { type: "Open bebouwing", price: "270", href: "/contact" },
];

export default function EpcKeuringPrijsPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "EPC keuring prijs", url: `${BUSINESS.website}/epc-keuring-prijs` },
        ])}
      />
      <SchemaOrg
        schema={buildServiceSchema(
          "EPC keuring voor residentiële gebouwen",
          "Erkend EPC attest voor studio, appartement, rijwoning, halfopen en open bebouwing. Plaatsbezoek binnen 3 dagen, attest binnen 24 uur. Incl. BTW en verplaatsing.",
          PRICES.rijwoning.price
        )}
      />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "EPC keuring prijs", href: "/epc-keuring-prijs" }]} />
      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            Prijzen
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream mb-6">
            EPC keuring prijs per <em className="text-gold italic">type woning</em>
          </h1>
          <LastUpdated date="2026-05-09" />
          {/* Pricing cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {pricingCards.map(({ type, price }) => (
              <div key={type} className="bg-white/10 backdrop-blur-sm rounded-xl border border-cream/20 p-4 sm:p-5 text-center hover:bg-white/15 transition-colors">
                <div className="font-heading text-[26px] sm:text-[32px] font-semibold text-gold leading-none mb-1">&#x20AC;{price}</div>
                <div className="text-[12px] sm:text-[13px] text-cream/75 font-medium">{type}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[13px] sm:text-[14px] text-cream/60">Incl. BTW en verplaatsing &bull; Plaatsbezoek binnen 3 dagen &bull; Attest binnen 24 uur</p>
        </div>
      </section>

      {/* EPC keuring prijs per type woning */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            EPC keuring prijs per type woning
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl mb-10">
            <p>
              Wil je een EPC keuring aanvragen of ben je gewoon benieuwd naar onze{" "}
              <a href="https://ecovalue.be/epc-attest-prijs/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC keuring prijs</a>?
            </p>
            <p>
              Bij het verkopen of verhuren van een woning is de EPC keuring{" "}
              <a href="https://huurdersplatform.be/hb/actualiteit-hb/woninghuur-en-het-epc-attest/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">wettelijk verplicht</a>{" "}
              in Vlaanderen.
            </p>
            <p>ECOVALUE geeft u graag een aangepaste prijsofferte voor specifieke EPC keuringen:</p>
            <ul className="space-y-2 ml-1">
              {[
                "EPC keuring van Complexere wooneenheden",
                "EPC keuring van Grote woningen",
                "EPC keuring van Collectieve wooneenheden",
                "EPC keuring van wooneenheden groter dan 200 m²",
                "EPC keuring van Appartementen met schuine daken",
                "EPC keuring Duplex appartementen",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-[13px] sm:text-[14px] text-ink-2">
                  <span className="text-blue mt-0.5">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-lg bg-blue text-cream font-semibold text-sm hover:bg-blue-2 transition-all"
            >
              Offerte aangepaste EPC-Keuring
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="text-[13px] sm:text-[14px] text-ink-2 mb-4">
            <a href="https://www.vlaanderen.be/veka" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">ECOVALUE</a>{" "}
            &mdash; erkende EPC deskundige
          </p>
        </div>
      </section>

      {/* Waar hangt de EPC keuring prijs vanaf? */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Waar hangt de EPC keuring prijs <em className="text-blue italic">vanaf?</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8 max-w-4xl">
            De verschillende factoren die de EPC keuring prijs beïnvloeden:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                title: "Het type woning",
                desc: "De prijs van een EPC keuring voor studio's zijn doorgaans goedkoper dan grote, vrijstaande woningen.",
              },
              {
                title: "De regio",
                desc: "Er is een zekere mate van het verschil in de EPC keuring prijs tussen verschillende provincies in België.",
              },
              {
                title: "De erkende EPC deskundige",
                desc: "Iedere erkende EPC deskundige hanteert zijn eigen tarieven aangezien er geen wettelijke bepaling is voor de EPC keuring prijs.",
              },
              {
                title: "Extra diensten",
                desc: null,
                extra: (
                  <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                    Sommige erkende EPC deskundigen bieden extra diensten aan. Bij ECOVALUE kan je altijd een{" "}
                    <Link href="/diensten" className="text-blue hover:underline">EPC attest simulatie</Link>{" "}
                    aanvragen &mdash; dat is ideaal bij aanvang van een{" "}
                    <Link href="/renovatieplicht" className="text-blue hover:underline">verplichte energetische renovatie</Link>{" "}
                    &mdash; of bij EPC attest voor verkoop van een woning.
                  </p>
                ),
              },
              {
                title: "De noodzaak aan een spoedkeuring",
                desc: "Als u een spoedkeuring nodig heeft, zal u wellicht een hogere prijs moeten betalen — maar dat is bij ons zeker niet het geval, bij ons krijg je sowieso je EPC attest binnen de 24u na de eerste afspraak.",
              },
              {
                title: "De staat van de woning",
                desc: "Als de woning in slechte staat is, kan het meer tijd in beslag nemen om de keuring uit te voeren, wat de EPC keuring prijs kan verhogen. Maar ook net gerenoveerde woningen met zonnepanelen, warmtepomp en een zonneboiler vergen meer opzoekwerk.",
              },
            ].map(({ title, desc, extra }) => (
              <div key={title} className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">{title}</h3>
                {desc && <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">{desc}</p>}
                {extra}
              </div>
            ))}
          </div>

          <div className="mt-10 text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Bij het aanvragen van een EPC keuring in Vlaams-Brabant, Antwerpen of eender waar in Vlaanderen, spelen verschillende factoren een rol bij het bepalen van de kostprijs van het EPC attest. De EPC keuring prijs kan variëren afhankelijk van de <strong>grootte en complexiteit</strong> van de woning, maar ook type <strong>verwarming</strong>, aanwezigheid van de <strong>plannen</strong>, aanwezigheid van de <strong>ventilatiesystemen</strong> etc. Ook de locaties kunnen de kost van het EPC attest beïnvloeden.
            </p>
            <p>
              Het aanvragen van een EPC attest voor verhuur of verkoop is wettelijk verplicht uit te voeren door een erkende EPC deskundige. Het resultaat van de EPC keuring is het EPC attest, deze toont de EPC waarde van je woning. Wanneer je woning de EPC waarde F of E heeft, geldt de renovatieverplichting.
            </p>
          </div>
        </div>
      </section>

      {/* Voordelen van een lage EPC waarde */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-8 sm:mb-10">
            Voordelen van een <em className="text-blue italic">lage EPC waarde</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">💸</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Lagere energiefactuur</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Woningen met een lage EPC waarde zijn energiezuiniger en dus bespaart u geld op uw energiefactuur.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">📈</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Een hogere woningwaarde</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Woningen met een betere EPC waarde zijn doorgaans{" "}
                <a href="https://blog.immoweb.be/nl/impact-epc-score/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">meer waard</a>{" "}
                dan woningen met een slechte EPC score.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">🏡</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Meer comfort</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Woningen met een goede EPC waarde zijn beter geïsoleerd en hebben een prettiger binnenklimaat.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">🌱</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Kleinere ecologische voetafdruk</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Woningen met een goede EPC waarde zijn beter voor het milieu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EPC keuring simulatie */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            EPC keuring &mdash; EPC waarde F &mdash; <em className="text-blue italic">Een voorbeeld</em>
          </h2>
          <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-4">
            EPC-keuring simulatie &mdash; test de EPC waarde van jouw woning
          </h3>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Een gemiddelde woning in Vlaanderen heeft een EPC waarde D, terwijl{" "}
              <a href="https://www.hln.be/woon/38-van-woningen-heeft-epc-label-e-of-f-dit-moet-je-weten-over-de-renovatieplicht-tegen-2028-en-deze-premies-zijn-er~ad0b47fa/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">38% van de woningen de EPC keuring F behalen</a>{" "}
              &mdash; test hier alvast de EPC waarde van je woning via de officiële website van de Vlaamse Overheid. Zo weet je al of je al dan niet renovatieplichtig bent.
            </p>
            <p>
              Heb je graag een individuele EPC attest simulatie? Je kan jouw individuele{" "}
              <Link href="/contact" className="text-blue hover:underline">EPC attest simulatie hier aanvragen</Link>.
              Heb jij toch een EPC attest nodig en niet louter een simulatie? Onze{" "}
              <Link href="/epc-attest-prijs" className="text-blue hover:underline">EPC attest prijs</Link>{" "}
              blijft schappelijk.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] bg-blue text-cream font-semibold text-[15px] hover:bg-blue-2 transition-all"
              >
                EPC-Keuring aanvragen
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://apps.energiesparen.be/test-uw-epc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] border border-line-2 text-ink font-semibold text-[15px] hover:bg-paper hover:border-blue transition-all"
              >
                EPC-Keuring test (Vlaamse Overheid)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-tight text-center mb-10 sm:mb-14">
            Veelgestelde vragen over <em className="text-blue italic">EPC keuring prijs</em>
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {pageFaqs.map((faq) => (
              <details key={faq.question} className="group bg-white rounded-xl border border-line p-5 sm:p-6">
                <summary className="font-heading text-[16px] sm:text-[18px] font-medium cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-muted text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] text-ink-2 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-deep text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h2 className="font-heading font-medium text-[clamp(26px,3.5vw,48px)] leading-[1.05] tracking-tight text-cream mb-4 sm:mb-6">
            EPC attest <em className="text-gold italic">aanvragen</em>
          </h2>
          <p className="text-[15px] sm:text-base text-cream/75 max-w-[520px] mx-auto leading-relaxed mb-8">
            Vul het formulier in of bel ons. Plaatsbezoek binnen 3 dagen, attest binnen 24 uur.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-gold text-blue-deep font-semibold text-[15px] sm:text-base hover:bg-gold-2 hover:text-white transition-all"
            >
              EPC attest aanvragen
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
