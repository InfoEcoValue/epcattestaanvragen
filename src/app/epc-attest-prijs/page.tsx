import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PRICES } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema, buildServiceSchema } from "@/components/seo/schemas";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { LastUpdated } from "@/components/sections/LastUpdated";

export const metadata: Metadata = {
  title: "EPC attest prijs – Welke factoren bepalen de kostprijs?",
  description:
    "Wat bepaalt de prijs van een EPC attest? Woningtype, oppervlakte, plannen en concurrentie. Tarieven: studio €126, rijwoning €212, open bebouwing €270 — incl. BTW en verplaatsing.",
  openGraph: {
    title: "EPC attest prijs – Welke factoren bepalen de kostprijs?",
    description:
      "Oppervlakte, woningtype, bouwplannen en regionale concurrentie: zo wordt de EPC attest prijs opgebouwd. Studio €126 t/m open bebouwing €270, incl. BTW en verplaatsing.",
    url: `${BUSINESS.website}/epc-attest-prijs`,
    type: "article",
  },
};

const pageFaqs = [
  {
    question: "Wat kost een EPC attest?",
    answer:
      "De EPC attest prijs bij ECOVALUE: studio €126, appartement €174, rijwoning €212, halfopen bebouwing €234, open bebouwing €270 (incl. BTW en verplaatsing).",
  },
  {
    question: "Hoe wordt de EPC attest prijs opgebouwd?",
    answer:
      "De prijs hangt af van de grootte van de woning, de aanwezigheid van plannen en documenten, en de concurrentie binnen de branche.",
  },
  {
    question: "Hoe snel ontvang ik mijn EPC attest?",
    answer:
      "Na de aanvraag plannen we jouw plaatsbezoek binnen 3 dagen. Je ontvangt jouw EPC attest 24 uur na het plaatsbezoek.",
  },
];

export default function EpcAttestPrijsPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "EPC attest prijs", url: `${BUSINESS.website}/epc-attest-prijs` },
        ])}
      />
      <SchemaOrg
        schema={buildServiceSchema(
          "EPC attest — kostprijsbepaling per woningtype",
          "Transparante EPC attest prijzen per woningtype. De kostprijs wordt bepaald door woningtype, oppervlakte, aanwezigheid van bouwplannen en regionale concurrentie.",
          PRICES.studio.price
        )}
      />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "EPC attest prijs", href: "/epc-attest-prijs" }]} />
      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            Prijzen
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream">
            EPC attest prijs, wat kost het? <em className="text-gold italic">Bestel jouw EPC vanaf &#x20AC;126</em>
          </h1>
          <LastUpdated date="2026-05-09" />
        </div>
      </section>

      {/* EPC attest prijs - wat kost een EPC attest? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            EPC attest prijs &mdash; <em className="text-blue italic">wat kost een EPC attest?</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              De{" "}
              <a href="https://ecovalue.be/epc-attest-prijs/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC attest prijs</a>{" "}
              is anders afhankelijk van het type woning zoals studio, rijwoning of{" "}
              <a href="https://www.vestadevelopment.be/nl/home/een-open-gesloten-of-halfopen-bebouwing-de-verschillen-voordelen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">open bebouwing</a>.
              Wat kost een EPC attest gemiddeld? Dat is handig om te weten bij{" "}
              <a href="https://www.belgium.be/nl/huisvesting/kopen_en_verkopen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">de koop of verkoop</a>{" "}
              van een woning, maar ook bij verhuur of{" "}
              <a href="https://monardlaw.be/nl/stories/ingelicht/renovating-immoveable-property-what-should-you-consider-most/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">woningrenovatie</a>{" "}
              in het kader van renovatieplicht bij{" "}
              <Link href="/epc-waarden-tabel" className="text-blue hover:underline">EPC waarde</Link>{" "}
              E of F.
            </p>
          </div>
        </div>
      </section>

      {/* Hoe wordt de EPC attest prijs opgebouwd? */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Hoe wordt de EPC attest prijs <em className="text-blue italic">opgebouwd?</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl mb-8">
            <p>
              De prijs voor een{" "}
              <Link href="/epc-keuring-prijs" className="text-blue hover:underline">EPC keuring</Link>{" "}
              wordt beïnvloed door verschillende factoren. Dat is in de eerste plaats de{" "}
              <a href="https://www.livios.be/nl/artikel/52177/het-epc-van-een-woning-dit-moet-je-weten/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">grootte van de woning</a>.
              Een attest aanvragen voor een studio is dus voordeliger dan wanneer je een EPC keuring nodig hebt voor een{" "}
              <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs/epc-van-een-residentiele-gebouweenheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">halfopen of open bebouwing</a>.
            </p>
            <p>
              Ook de aanwezigheid van de plannen van de woning beïnvloedt de prijs. De kosten voor een EPC attest worden hoger wanneer een energiedeskundige deze plannen nog moet opmaken.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Oppervlakte of m² van de woning", "Plannen van de woning", "Aanwezigheid documenten en facturen", "Concurrentie binnen de branche"].map((item) => (
              <span key={item} className="px-4 py-2 bg-white rounded-lg border border-line text-[13px] sm:text-[14px] text-ink">
                {item}
              </span>
            ))}
          </div>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Dat geldt ook voor facturen en documenten van eventuele{" "}
              <a href="https://businessam.be/terwijl-duurzame-woningen-duurder-worden-zakt-het-prijskaartje-van-energieverslindende-panden/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verduurzaming</a>.
              Hierbij kun je denken aan facturen van{" "}
              <a href="https://www.vtwonen.be/verbouwen/een-goede-aannemer-vinden-voor-je-verbouwing-doe-je-zo~ef25c04" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">aannemers</a>,{" "}
              <a href="https://www.livios.be/nl/artikel/65763/energiedeskundige-op-bezoek-dit-stappenplan-moet-hij-volgen-om-je-epc-correct-op-te-stellen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">officiële documenten</a>{" "}
              die horen bij de warmte installaties, of{" "}
              <a href="https://www.dd-isolation.be/nl/premies-en-subsidies-isolatie-belgie/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">facturen van isolatiemateriaal</a>.
              De EPC attest prijs wordt vervolgens ook bepaald door de concurrentie van andere{" "}
              <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs/erkende-energiedeskundigen-voor-epc/plaatsbezoek-voor-epc-door-een-energiedeskundige-type-a" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiedeskundigen op de Vlaamse markt</a>.
              Vlaanderen heeft een groot aantal deskundigen waardoor de prijs omlaag gaat.
            </p>
          </div>
        </div>
      </section>

      {/* Wat kost een EPC attest voor verschillende type woningen? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
                Wat kost een EPC attest voor <em className="text-blue italic">verschillende type woningen?</em>
              </h2>
              <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
                <p>
                  Een attest voor{" "}
                  <a href="https://www.vlaanderen.be/bouwen-wonen-en-energie/niet-residentiele-gebouwen/verplichtingen-voor-niet-residentiele-gebouwen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">niet residentiële gebouwen</a>{" "}
                  wordt opgemaakt door een{" "}
                  <a href="https://www.vestad.be/expertises_metingen_keuringen_audits_energiedeskundige_type_d.html" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiedeskundige type D</a>.
                  De EPC attest prijs is voor deze gebouwen hoger. De attest kosten voor{" "}
                  <a href="https://www.vlaanderen.be/epc-pedia/welk-epc-moet-opgemaakt-worden/hoofdbestemming-gebouweenheid-bepalen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">residentiële gebouwen</a>,
                  zoals woningen en appartementen, zijn lager. Ze worden opgemaakt door een erkend{" "}
                  <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs/erkende-energiedeskundigen-voor-epc" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC deskundige type A</a>.
                  Hieronder zie je de gemiddelde prijs voor EPC keuringen voor het kopen, verkopen of verhuren van woningen in Vlaanderen.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl border border-line overflow-hidden">
              <table className="w-full text-[14px] sm:text-[15px]">
                <thead>
                  <tr className="bg-blue text-cream">
                    <th className="text-left px-5 py-3.5 font-heading font-medium">Type woning</th>
                    <th className="text-left px-5 py-3.5 font-heading font-medium">EPC attest prijs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Studio</td><td className="px-5 py-3.5 font-semibold">EUR 126,00</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Appartement</td><td className="px-5 py-3.5 font-semibold">EUR 174,00</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Rijwoning</td><td className="px-5 py-3.5 font-semibold">EUR 212,00</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Halfopen bebouwing</td><td className="px-5 py-3.5 font-semibold">EUR 234,00</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Open bebouwing</td><td className="px-5 py-3.5 font-semibold">EUR 270,00</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelig en snel EPC attest aanvragen bij ECOVALUE */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Voordelig en snel EPC attest aanvragen bij <em className="text-blue italic">ECOVALUE</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Wil je jouw woning{" "}
              <a href="https://www.livios.be/nl/artikel/52177/het-epc-van-een-woning-dit-moet-je-weten/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verkopen of verhuren</a>?
              Ga je renoveren of wil je een{" "}
              <Link href="/epc-verplicht-verhuur" className="text-blue hover:underline">woning verhuren</Link>?
              Dan kun je voordelig en snel online de{" "}
              <a href="https://ecovalue.be/diensten-erkende-epc-deskundige/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verplichte EPC attest aanvragen</a>{" "}
              voor residentiële gebouwen, zoals een open of halfopen bebouwing, een rijwoning of een appartement.
            </p>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <span className="text-blue font-bold mt-0.5">&bull;</span>
                <span>Na de aanvraag plannen we jouw plaatsbezoek <strong>binnen 3 dagen</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue font-bold mt-0.5">&bull;</span>
                <span>Je ontvangt jouw{" "}
                  <Link href="/epc-attest" className="text-blue hover:underline">EPC attest</Link>{" "}
                  <strong>24 uur na het plaatsbezoek</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue font-bold mt-0.5">&bull;</span>
                <span>Het hele proces is ontworpen om jou zo min mogelijk tijd en moeite te kosten.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue font-bold mt-0.5">&bull;</span>
                <span>Zo ben je snel in orde met de wettelijke verplichtingen.</span>
              </li>
            </ul>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] sm:text-base hover:bg-blue-2 transition-all"
            >
              EPC attest aanvragen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] border border-line-2 text-ink font-semibold text-[15px] sm:text-base hover:bg-paper hover:border-blue transition-all"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-tight text-center mb-10 sm:mb-14">
            Veelgestelde vragen over <em className="text-blue italic">EPC attest prijs</em>
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
    </>
  );
}
