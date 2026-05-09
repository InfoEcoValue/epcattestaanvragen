import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/schemas";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Veelgestelde vragen over EPC attesten",
  description:
    "FAQ over EPC attesten: wanneer is een EPC verplicht, wat kost een EPC attest en hoe lang is het geldig? Antwoorden van erkende EPC-deskundigen.",
  openGraph: {
    title: "Veelgestelde vragen over EPC attesten",
    description:
      "FAQ over EPC attesten: wanneer is een EPC verplicht, wat kost een EPC attest en hoe lang is het geldig?",
    url: `${BUSINESS.website}/veelgestelde-vragen`,
    type: "article",
  },
};

const pageFaqs = [
  {
    question: "Wanneer is het aanvragen van een EPC attest verplicht?",
    answer:
      "Een EPC attest is verplicht bij verkoop, verhuur, erfpacht of opstalrecht van onroerende goederen. Ook bij renovatieplicht (EPC label E of F) moet je een nieuw attest kunnen voorleggen.",
  },
  {
    question: "Wat kost een EPC attest?",
    answer:
      "De EPC attest prijs hangt af van het type woning. Bij Ecovalue kost een EPC attest vanaf €90 voor een studio, €129 voor een appartement, €159 voor een rijwoning, €179 voor halfopen en €209 voor open bebouwing.",
  },
  {
    question: "Hoe lang is het EPC attest geldig?",
    answer:
      "Een EPC attest is 10 jaar geldig in Vlaanderen, vanaf de opmaakdatum. Bij opmaak van een nieuw attest vervalt het oude automatisch.",
  },
];

export default function VeelgesteldeVragenPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "Veelgestelde vragen", url: `${BUSINESS.website}/veelgestelde-vragen` },
        ])}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            FAQ
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream">
            Berekening EPC waarde, EPC attesten, <em className="text-gold italic">Mijn Labelpremie en meer...</em>
          </h1>
        </div>
      </section>

      {/* Wanneer is het aanvragen van een EPC attest verplicht */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            <Link href="/veelgestelde-vragen" className="hover:text-blue transition-colors">
              Wanneer is het aanvragen van een EPC attest <em className="text-blue italic">verplicht</em>
            </Link>
          </h2>
          <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-4">
            <Link href="/epc-keuring-prijs" className="hover:text-blue transition-colors">EPC keuring prijs</Link>
          </h3>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>Je moet een EPC attest aanvragen in volgende situaties:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Verkoop van onroerende goederen</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Als je een woning, appartement, studio of een zaak wil verkopen, is een geldig EPC attest verplicht.
                </p>
              </div>
              <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Bij verhuur</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Ook wanneer je de onroerende goederen niet wenst te verkopen maar bijvoorbeeld een appartement verhuurt, heb je een EPC attest nodig.
                </p>
              </div>
              <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Renovatieverplichting</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Bij aankoop van een huis of appartement met EPC label E of EPC label F heb je renovatieverplichting, dat betekent dat je binnen 5 jaar EPC label D of EPC label D moet behalen. Om aan te tonen dat je dit hebt gedaan moet je een EPC attest hebben. Dat attest kan je dan ook gebruiken voor aanvraag van de{" "}
                  <a href="https://www.vlaanderen.be/premies-voor-renovatie/mijn-verbouwpremie" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">renovatiepremies</a>.
                </p>
              </div>
              <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Erfpacht of opstalrecht</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Sinds april 2022 is een EPC attest verplicht bij het vestigen van een erfpacht of opstalrecht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat kost een EPC attest? */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            <Link href="/epc-attest-prijs" className="hover:text-blue transition-colors">
              Wat kost een <em className="text-blue italic">EPC attest?</em>
            </Link>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
            <p>
              De EPC attest prijs kan afhankelijk zijn van diverse factoren, waaronder:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Type woning</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Het EPC attest prijs is lager bij een studio in vergelijking met een open bebouwing, omdat een woning meer werk vereist.
                </p>
              </div>
              <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Oppervlakte van de woning</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Dit is vergelijkbaar met type woning, bij{" "}
                  <a href="https://ecovalue.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Ecovalue</a>{" "}
                  is er enkel een toeslag van 30&#x20AC; bij woningen groter dan 200m&#xB2;.
                </p>
              </div>
              <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Eventuele bijkomende kosten</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Bij hoogdringendheid, wanneer een EPC attest moet worden opgemaakt dezelfde dag kan een spoedtarief worden aangerekend.
                </p>
              </div>
            </div>

            <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-4">Richtprijzen (excl. btw)</h3>
            <p>Om je een idee te geven, hier zijn enkele gemiddelde richtprijzen voor residenti&#xEB;le woningen in Vlaanderen:</p>

            <div className="bg-white rounded-xl sm:rounded-2xl border border-line overflow-hidden mt-6">
              <table className="w-full text-[14px] sm:text-[15px]">
                <thead>
                  <tr className="bg-blue text-cream">
                    <th className="text-left px-5 py-3.5 font-heading font-medium">Type Woning</th>
                    <th className="text-left px-5 py-3.5 font-heading font-medium">Gemiddelde prijs</th>
                    <th className="text-left px-5 py-3.5 font-heading font-medium">Bij Ecovalue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Studio</td><td className="px-5 py-3.5">&#x20AC;90 &ndash; &#x20AC;125</td><td className="px-5 py-3.5 font-semibold text-blue">&#x20AC; 90</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Appartement</td><td className="px-5 py-3.5">&#x20AC;100 &ndash; &#x20AC;150</td><td className="px-5 py-3.5 font-semibold text-blue">&#x20AC; 129</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Rijwoning</td><td className="px-5 py-3.5">&#x20AC;120 &ndash; &#x20AC;180</td><td className="px-5 py-3.5 font-semibold text-blue">&#x20AC; 159</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Halfopen bebouwing</td><td className="px-5 py-3.5">&#x20AC;140 &ndash; &#x20AC;200</td><td className="px-5 py-3.5 font-semibold text-blue">&#x20AC; 179</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Open bebouwing</td><td className="px-5 py-3.5">&#x20AC;150 &ndash; &#x20AC;250</td><td className="px-5 py-3.5 font-semibold text-blue">&#x20AC; 209</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Geldigheid */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            <Link href="/epc-attest-geldigheid" className="hover:text-blue transition-colors">
              Geldigheid: Hoe lang is het EPC attest <em className="text-blue italic">geldig?</em>
            </Link>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-3xl">
            <p>
              Een <strong>EPC-attest</strong> (Energieprestatiecertificaat) is <strong>10 jaar geldig</strong> in Vlaanderen, <strong>vanaf de opmaakdatum</strong>.
            </p>
            <p>
              Er zijn echter enkele belangrijke nuances en situaties waarin de geldigheid korter kan zijn of een nieuw attest vereist is:
            </p>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">Belangrijke details:</h3>
              <ul className="space-y-3 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue font-bold mt-0.5">&bull;</span>
                  <span>Bij opmaak nieuwe attest vervalt de oude automatisch en is dus niet meer geldig.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue font-bold mt-0.5">&bull;</span>
                  <span>Bij <strong>vervulling renovatieplicht</strong> die de energieprestaties be&#xEF;nvloeden (zoals isolatie of nieuwe ramen) en je EPC label D of C behaalt na een woning te hebben gekocht met EPC label E of F, is het verplicht om een <strong>nieuw attest</strong> aan te vragen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue font-bold mt-0.5">&bull;</span>
                  <span>Bij verkoop of verhuur van een gebouw is een <strong>geldig EPC verplicht</strong>, ongeacht of het 10 jaar geleden of recenter werd opgemaakt.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] sm:text-base hover:bg-blue-2 transition-all"
            >
              EPC keuring aanvragen
              <ArrowRight className="w-4 h-4" />
            </Link>
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
