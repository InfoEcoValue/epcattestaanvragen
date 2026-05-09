import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/schemas";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { LastUpdated } from "@/components/sections/LastUpdated";

export const metadata: Metadata = {
  title: "Wat is nodig voor een EPC attest?",
  description:
    "Welke documenten en maatregelen zijn nodig voor een EPC attest met een goede score? Bouwplannen, facturen, isolatie van dak, muren en ramen uitgelegd.",
  openGraph: {
    title: "Wat is nodig voor een EPC attest?",
    description:
      "Welke documenten heb je nodig voor een EPC attest? Bouwplannen, facturen van renovaties, isolatiegegevens en meer.",
    url: `${BUSINESS.website}/wat-is-nodig-voor-een-epc-attest`,
    type: "article",
  },
};

const pageFaqs = [
  {
    question: "Wat is nodig voor een EPC attest?",
    answer:
      "Voor een EPC attest heb je de tekeningen van de woning nodig, zoals de bouwplannen. Ook bewijzen van energetische renovaties, facturen en technische gegevens van installaties zijn nuttig.",
  },
  {
    question: "Hoe kan ik de EPC waarde verbeteren?",
    answer:
      "De EPC waarde verbeteren kan door dakisolatie, muur- en vloerisolatie en betere ramen (dubbelglas of HR+++). Ook een HR verwarmingsketel of warmtepomp heeft een grote impact.",
  },
  {
    question: "Hoe snel krijg ik mijn EPC attest?",
    answer:
      "Na het bezoek van onze energiedeskundige ontvangt je het EPC attest al binnen 24 uur. Een plaatsbezoek door een energiedeskundige wordt binnen 3 dagen ingepland.",
  },
];

export default function WatIsNodigVoorEpcAttestPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "Wat is nodig voor EPC attest?", url: `${BUSINESS.website}/wat-is-nodig-voor-een-epc-attest` },
        ])}
      />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "Wat is nodig voor EPC attest?", href: "/wat-is-nodig-voor-een-epc-attest" }]} />
      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            Voorbereiding
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream">
            Wat is nodig voor een <em className="text-gold italic">EPC attest?</em>
          </h1>
          <LastUpdated date="2026-05-09" />
        </div>
      </section>

      {/* Wat is nodig voor een EPC attest? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Wat is nodig voor een <em className="text-blue italic">EPC attest?</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed max-w-4xl">
            Wat is nodig voor een EPC attest met een goede waarde? Belangrijk om te weten, zeker als je een woning wilt kopen, verkopen, huren of verhuren. Welke documenten moet je kunnen overleggen aan een energiedeskundige type A voor een EPC attest met een goede score?
          </p>
        </div>
      </section>

      {/* Documenten die nodig zijn */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Documenten die nodig zijn bij het uitvoeren van een <em className="text-blue italic">EPC attest</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Voor een EPC attest heb je de tekeningen van de woning nodig, zoals de bouwplannen. Ook een lastenboek maakt de procedure makkelijker. De energiedeskundige hoeft dan geen of minder onderzoek te verrichten. Ook bewijzen van energetische renovaties, facturen en/of technische gegevens van installaties en bouwmaterialen zijn nodig voor een EPC attest.
            </p>
            <div className="p-5 sm:p-6 bg-white rounded-xl border border-line">
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                <strong>Let op!</strong> Gaat het om een EPC attest voor nieuwbouw? Dan heb je ook een EPB formulier nodig. Hierin staat informatie over de energieprestatie en het binnenklimaat van de woning. De berekening wordt voor de aanvang van de bouw opgemaakt door een EPB verslaggever.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] sm:text-base hover:bg-blue-2 transition-all"
            >
              EPC attest aanvragen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Wat is nodig om de EPC waarde te verbeteren? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Wat is nodig om de EPC waarde te <em className="text-blue italic">verbeteren?</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8 max-w-4xl">
            Voor sommige woningen zijn aanpassingen nodig om in aanmerking te komen voor een geldige EPC attest. De EPC waarde van je woning verbeteren kan op deze manieren. Het gaat dan met name om het aanbrengen van dakisolatie, muur- en vloerisolatie en ramen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">🏠</div>
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Dak</h3>
              <div className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed space-y-3">
                <p>
                  Voor een goede EPC waarde is dakisolatie noodzakelijk. Via hier gaat veel energie verloren. Welke isolatie het meeste rendement geeft, hangt af van het type dak.
                </p>
                <p>
                  Maatregelen zijn onder andere plafondisolatie, of het aanbrengen van minerale wol met een hoge Rd-waarde.
                </p>
              </div>
            </div>
            <div className="p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">🧱</div>
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Muren</h3>
              <div className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed space-y-3">
                <p>
                  Ook het isoleren van muren is nodig voor een EPC attest. Hierbij kun je denken aan het isoleren van de binnen- of buitenmuur, maar bijvoorbeeld ook aan spouwmuurisolatie.
                </p>
                <p>
                  Voor het isoleren van de buitenzijde heb je binnenkort mogelijk geen vergunning meer nodig.
                </p>
              </div>
            </div>
            <div className="p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">🪟</div>
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Ramen</h3>
              <div className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed space-y-3">
                <p>
                  Ook de isolatiewaarde van ramen bepaalt voor een groot deel de EPC waarde van je woning. Dit wordt ook wel de uW-waarde genoemd. Je kunt kiezen voor dubbelglas of hoogrendement glas, zoals HR+++.
                </p>
                <p>
                  Het is belangrijk dat de uW-waarde in de technische specificatie van de ramen staat. Dit maakt de berekening van de EPC waarde makkelijker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EPC attest aanvragen bij een energiedeskundige type A */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            EPC attest aanvragen bij een <em className="text-blue italic">energiedeskundige type A</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Nu je weet wat nodig is voor een geldig EPC attest, kun je deze eenvoudig en snel online aanvragen. Een plaatsbezoek door een energiedeskundige wordt binnen 3 dagen ingepland. Zeker als je alle benodigde documentatie voorhanden hebt en energiebesparende maatregelen hebt genomen. Na het bezoek ontvang je jouw EPC attest al binnen 24 uur.
            </p>
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
            Veelgestelde vragen over <em className="text-blue italic">wat nodig is voor EPC attest</em>
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
          <p className="mt-8 text-center text-[14px] text-ink-2">
            Meer vragen?{" "}
            <Link href="/veelgestelde-vragen" className="text-blue hover:underline font-medium">
              Bekijk alle veelgestelde vragen
            </Link>
          </p>
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
