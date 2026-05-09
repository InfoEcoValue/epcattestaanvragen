import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/schemas";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Wanneer moet ik een EPC attest aanvragen?",
  description:
    "EPC attest aanvragen is verplicht bij koop, verkoop, verhuur en renovatie in Vlaanderen. Ontdek wanneer je een EPC nodig hebt en hoe je het snel aanvraagt.",
  openGraph: {
    title: "Wanneer moet ik een EPC attest aanvragen?",
    description:
      "EPC attest aanvragen is verplicht bij koop, verkoop, verhuur en renovatie in Vlaanderen.",
    url: `${BUSINESS.website}/epc-attest-aanvragen`,
    type: "article",
  },
};

const pageFaqs = [
  {
    question: "Wanneer moet ik een EPC attest aanvragen?",
    answer:
      "Een EPC attest aanvragen is verplicht bij de verkoop, verhuur, koop en renovatie van woningen in Vlaanderen. De verplichting geldt voor studio's, rijwoningen, appartementen en half open of open bebouwing.",
  },
  {
    question: "Bij wie vraag ik een EPC attest aan?",
    answer:
      "Je kunt online een EPC attest aanvragen bij een erkend energiedeskundige type A, gecertificeerd door het VEA. Na de aanvraag inspecteert de deskundige jouw woning.",
  },
  {
    question: "Hoe snel ontvang ik mijn EPC attest?",
    answer:
      "Ecovalue garandeert al binnen 3 dagen na jouw aanvraag een plaatsbezoek. Vervolgens ontvang je het EPC attest al binnen 24 uur.",
  },
];

export default function EpcAttestAanvragenPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "Wanneer moet ik een EPC attest aanvragen?", url: `${BUSINESS.website}/epc-attest-aanvragen` },
        ])}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            EPC aanvragen
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream">
            Wanneer moet ik een EPC attest <em className="text-gold italic">aanvragen?</em>
          </h1>
        </div>
      </section>

      {/* Wanneer moet ik een EPC attest aanvragen? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Wanneer moet ik een EPC attest <em className="text-blue italic">aanvragen?</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Een{" "}
              <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC</a>{" "}
              attest aanvragen is sinds 2008 verplicht bij het kopen en verkopen van woningen. Sinds 2009 is de aanvraag ook wettelijk{" "}
              <Link href="/epc-verplicht-verhuur" className="text-blue hover:underline">verplicht bij verhuur</Link>.
              Onder andere van rijwoningen, studio&apos;s, appartementen en halfopen of open bebouwing. Waar kun je een keuring aanvragen, wat kost een EPC attest en hoe snel ontvang ik het document na de aanvraag?
            </p>
            <p>
              Vind eenvoudig een erkende energiedeskundige voor uw EPC keuring via{" "}
              <a href="https://ecovalue.be/epc-attest-prijs/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">gespecialiseerde platformen</a>.
              De kosten van een EPC attest variëren doorgaans, en de snelle levering van het{" "}
              <a href="https://www.vlaanderen.be/sociaal-woonbeleid/sociale-woningen/verwerven-en-vervreemden/vervreemdingen/energieprestatiecertificaat-epc" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energieprestatiecertificaat</a>{" "}
              is essentieel voor een vlotte vastgoedtransactie.
            </p>
          </div>
        </div>
      </section>

      {/* EPC attest aanvragen bij koop, verkoop, verhuur en renovatie */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            EPC attest aanvragen bij koop, verkoop, verhuur en <em className="text-blue italic">renovatie</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Het aanvragen{" "}
              <a href="https://www.bobex.be/nl-be/epc-certificaat/verplicht-bij-verkoop/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">van een attest is verplicht</a>{" "}
              in Vlaanderen. Bijvoorbeeld als je een woning wilt kopen of een woning wilt verhuren als woning eigenaar. Wil je{" "}
              <a href="https://ecovalue.be/epc-attest-simulatie/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">renoveren</a>{" "}
              of jouw huis verkopen? Ook dan is het aanvragen van een{" "}
              <a href="https://ecovalue.be/epc-attest-prijs/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Energieprestatiecertificaat</a>{" "}
              verplicht. Voor opslagplaatsen en industriële gebouwen is het aanvragen van een EPC attest niet verplicht.
            </p>
            <div className="flex flex-wrap gap-3 my-4">
              {["Studio's", "Rijwoningen", "Appartementen", "Half open bebouwing", "Open bebouwing"].map((type) => (
                <span key={type} className="px-4 py-2 bg-white rounded-lg border border-line text-[13px] sm:text-[14px] font-medium text-ink">
                  {type}
                </span>
              ))}
            </div>
            <div className="p-5 sm:p-6 bg-white rounded-xl border border-line">
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                <strong>Nota:</strong> Een EPC attest aanvragen is vanaf 2008 en 2009 wettelijk verplicht. Deze wettelijke verplichting bij koop, verkoop of verhuur betekent ook dat je een geldboete riskeert bij verzuim. Als je géén attest kunt overleggen, kan de{" "}
                <a href="https://www.vlaanderen.be/energieprestatiecertificaat-epc-bij-overdracht-of-verhuur-van-een-wooneenheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">boete variëren</a>{" "}
                van &#x20AC; 500 tot &#x20AC; 5.000. De boete geldt ook voor het niet naleven van de renovatieplicht of een slechte EPC-waarde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aanvragen van een EPC attest: bij wie doe je dat? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Aanvragen van een EPC attest: <em className="text-blue italic">bij wie doe je dat?</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Je{" "}
              <a href="https://ecovalue.be/contact-erkende-epc-deskundige/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">kunt online</a>{" "}
              een EPC attest aanvragen bij een erkend{" "}
              <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs/erkende-energiedeskundigen-voor-epc" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiedeskundige type A</a>.
              Deze deskundige is gecertificeerd door het{" "}
              <a href="https://www.vlaanderen.be/veka" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">VEA</a>.
              Na de aanvraag inspecteert de deskundige jouw woning op verschillende{" "}
              <Link href="/epc-waarden-tabel" className="text-blue hover:underline">EPC waarden</Link>.
              Zoals isolatie, verwarming en het gebruik van hernieuwbare{" "}
              <a href="https://www.vlaanderen.be/bouwen-wonen-en-energie" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energie</a>.
              Op basis van deze factoren wordt het attest en de score opgemaakt.
            </p>
          </div>
        </div>
      </section>

      {/* Hoe snel ontvang ik mijn EPC attest? */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Hoe snel ontvang ik mijn EPC attest <em className="text-blue italic">na de aanvraag?</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8 max-w-4xl">
            Een attest aanvragen kan eenvoudig online. Nadat je een offerte hebt ontvangen, wordt de keuring direct ingepland.{" "}
            <a href="https://ecovalue.be/epc-attest-prijs/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Ecovalue</a>{" "}
            garandeert al binnen 3 dagen na jouw aanvraag een plaatsbezoek. Vervolgens ontvang je het EPC attest voor je woning al binnen 24 uur.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: 1, title: "Online EPC attest aanvragen", desc: "Je vult het formulier op onze site in." },
              { step: 2, title: "Offerte voor akkoord", desc: "We verwerken je vraag heel snel en sturen een offerte." },
              { step: 3, title: "Plaatsbezoek binnen 3 dagen", desc: "Onze energiedeskundige bezoekt je woning voor de EPC keuring." },
              { step: 4, title: "EPC attest binnen 24 uur", desc: "Je ontvangt het officiële EPC attest binnen 24 uur na de aanvraag." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <div className="w-10 h-10 rounded-full bg-blue text-cream grid place-items-center font-heading font-semibold text-lg mb-4">{step}</div>
                <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">{title}</h3>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snel en voordelig */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Snel en voordelig EPC attest aanvragen
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Een{" "}
              <a href="https://ecovalue.be/diensten-erkende-epc-deskundige/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC attest aanvragen</a>{" "}
              doe je eenvoudig en snel online bij Ecovalue. Nadat je akkoord gaat met onze offerte, wordt een locatiebezoek al binnen 3 dagen ingepland. Vervolgens ontvang je het attest met EPC waarde al binnen 24 uur. Als energiedeskundige type A hanteren we voordelige tarieven. Een attest aanvragen? Dat kan al vanaf &#x20AC; 90,00.
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
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] border border-line-2 text-ink font-semibold text-[15px] sm:text-base hover:bg-cream hover:border-blue transition-all"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-tight text-center mb-10 sm:mb-14">
            Veelgestelde vragen over <em className="text-blue italic">EPC attest aanvragen</em>
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
