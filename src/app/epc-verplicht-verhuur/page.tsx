import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/schemas";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { LastUpdated } from "@/components/sections/LastUpdated";

export const metadata: Metadata = {
  title: "Is een EPC attest verplicht bij verhuur?",
  description:
    "Ja, een EPC attest is verplicht bij verhuur van woningen in Vlaanderen. Ontdek wat de boetes zijn, de voordelen van een goede EPC waarde en hoe je het aanvraagt.",
  openGraph: {
    title: "Is een EPC attest verplicht bij verhuur?",
    description:
      "Ja, een EPC attest is verplicht bij verhuur van woningen in Vlaanderen. Boetes van €500 tot €5.000 bij verzuim.",
    url: `${BUSINESS.website}/epc-verplicht-verhuur`,
    type: "article",
  },
};

const pageFaqs = [
  {
    question: "Is een EPC attest verplicht bij verhuur?",
    answer:
      "Ja, als je jouw woning wilt verhuren moet je een Energieprestatiecertificaat kunnen overleggen. Vanaf 2030 is het zelfs niet meer mogelijk om woningen met een EPC label E of F te verhuren.",
  },
  {
    question: "Wat zijn de gevolgen als ik verhuur zonder EPC attest?",
    answer:
      "Je krijgt een boete. Het bedrag kan oplopen van €500 tot zelfs €5.000. Bovendien kan een slecht EPC label de verhuurbaarheid van je woning in de toekomst negatief beïnvloeden.",
  },
  {
    question: "Hoe kan ik mijn EPC waarde verbeteren voor verhuur?",
    answer:
      "Je kunt de EPC waarde verbeteren door isolerende maatregelen (vloer-, dakisolatie, dubbelglas), een HR verwarmingsketel of warmtepomp, of het plaatsen van zonnepanelen.",
  },
];

export default function EpcVerplichtVerhuurPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "EPC verplicht bij verhuur", url: `${BUSINESS.website}/epc-verplicht-verhuur` },
        ])}
      />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "EPC verplicht bij verhuur", href: "/epc-verplicht-verhuur" }]} />
      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            Verhuur
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream">
            Is een EPC attest verplicht bij <em className="text-gold italic">verhuur woning?</em>
          </h1>
          <LastUpdated date="2026-05-09" />
        </div>
      </section>

      {/* Is een EPC attest verplicht bij verhuur woning? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Is een EPC attest verplicht bij <em className="text-blue italic">verhuur woning?</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Is een EPC attest bij verhuur verplicht? Het korte antwoord daarop is ja. Als je jouw woning wilt{" "}
              <a href="https://www.gemeenteofferte.be/tips-advies/epc/epc-verkoop-verhuur-vastgoed/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verhuren moet</a>{" "}
              je een{" "}
              <a href="https://www.vlaanderen.be/energieprestatiecertificaat-epc-bij-overdracht-of-verhuur-van-een-wooneenheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Energieprestatiecertificaat</a>{" "}
              kunnen overleggen. Sterker nog, met de nieuwe Vlaamse regering mogen de{" "}
              <a href="https://www.vlaanderen.be/bouwen-wonen-en-energie/huren-en-verhuren/huurprijs-en-huurwaarborg/huurprijsindexatie-met-correctiefactoren" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">huurprijzen</a>{" "}
              van woningen met een{" "}
              <a href="https://ecovalue.be/renovatieplicht-residentiele-gebouwen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">slechte EPC waarde</a>{" "}
              niet meer worden geïndexeerd.{" "}
              <a href="https://www.prevebo.be/post/verhuurverbod-voor-woningen-met-epc-e-en-f-vanaf-2030" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Vanaf 2030</a>{" "}
              is het zelfs niet meer mogelijk om woningen met een EPC label E of F te verhuren. Het gaat dan onder meer om woningen zonder energiebesparende maatregelen of{" "}
              <a href="https://www.bobex.be/nl-be/ramen-deuren-en-beglazing/dubbel-glas-verplicht/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">enkelglas</a>.
              Een attest is dus verplicht bij verhuur.
            </p>
          </div>
        </div>
      </section>

      {/* EPC attest bij woningverhuur is noodzakelijk */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            EPC attest bij woningverhuur is <em className="text-blue italic">noodzakelijk</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Als je jouw studio, appartement of rijwoning wilt{" "}
              <a href="https://www.epcdiensten.be/verhuur/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verhuren</a>,
              is een geldige EPC attest verplicht en noodzakelijk. Als verhuurder moet je dus een Energieprestatiecertificaat kunnen laten zien aan de{" "}
              <a href="https://www.epc-check.be/epc-opvragen-als-huurder-waarom-en-hoe" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verhuurder</a>.
              Dit moet ook{" "}
              <a href="https://www.epc-keuring.vlaanderen/epc-verhuur-indexering-verplichtingen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">vermeld worden in de advertentie</a>{" "}
              en het huurcontract. Je krijgt een boete als je verhuurt zonder geldig attest. Het bedrag kan oplopen van &#x20AC; 500 tot zelfs &#x20AC; 5.000. Je moet de woning alsnog{" "}
              <a href="https://03beheer.be/blog/kunt-u-als-verhuurder-ook-de-vlaamse-energiepremies-aanvragen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">renoveren</a>{" "}
              om een goede EPC attest te krijgen. Bovendien kan een slecht EPC label de verhuurbaarheid van je woning in de toekomst negatief beïnvloeden, zeker gezien de{" "}
              <a href="https://www.isolatie-info.be/nieuws/nieuwe-energienorm-huurwoningen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">strengere regelgeving die eraan komt</a>.
              Investeer tijdig in maatregelen om problemen te voorkomen.
            </p>
          </div>
        </div>
      </section>

      {/* Voordelen van een goede EPC waarde bij woningverhuur */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Voordelen van een goede EPC waarde bij <em className="text-blue italic">woningverhuur</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Een huurwoning met een goede EPC-waarde heeft voordelen voor de huurder, maar ook voor de verhuurder. Deze woningen zijn bijvoorbeeld voorzien van{" "}
              <a href="https://www.isolatie-info.be/nieuws/nieuwe-energienorm-huurwoningen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiebesparende maatregelen</a>.
              Zoals{" "}
              <a href="https://www.vtwonen.be/verbouwen/dubbelglas-of-hr-glas-wat-is-de-beste-keuze~3bc568c" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">dubbel- of hoog-rendement glas</a>,
              vloer- en{" "}
              <a href="https://www.dakisolatie-gids.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">dakisolatie</a>{" "}
              of{" "}
              <a href="https://www.bobex.be/nl-be/zonnepanelen/zonnepanelen-huren/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">zonnepanelen</a>.
              De huurder is zeker van een energiezuinige woning die is voorbereid op de toekomst. Ook als verhuurder profiteer je van voordelen met een{" "}
              <a href="https://ecovalue.be/epc-attest-prijs/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC attest</a>.
              Deze woningen liggen goed in de markt en zullen daardoor sneller worden verhuurd. Een verplichte EPC attest zorgt er dus ook voor dat je jouw woning zorgeloos en volgens de regels kunt verhuren.
            </p>
          </div>
        </div>
      </section>

      {/* Ik wil mijn woning verhuren: hoe EPC waarde verbeteren? */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Ik wil mijn woning verhuren: hoe EPC waarde <em className="text-blue italic">verbeteren?</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl mb-8">
            <p>
              Ben je al in het bezit van een EPC attest maar moet de score{" "}
              <a href="https://housematch.be/blog/ben-ik-verplicht-mijn-slechte-epc-waarde" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">worden verbeterd</a>?
              Om problemen met de woningverhuur of huurindexatie te voorkomen, kun je de{" "}
              <a href="https://www.engie.be/nl/blog/bespaartips/epc-score-verbeteren/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC waarde verbeteren</a>.
              Bijvoorbeeld door het plaatsen van zonnepanelen of het{" "}
              <a href="https://www.engie.be/nl/verwarmingsketel-vervangen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">vervangen van de cv</a>.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl">
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">🧱</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Isolerende maatregelen</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Vloer- of dakisolatie, dubbelglas of HR+++ glas
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">🔥</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Verwarmingssysteem</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                <a href="https://www.bobex.be/nl-be/verwarmingsketel/hoogrendementsketel/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">HR verwarmingsketel</a>{" "}
                of een{" "}
                <a href="https://www.vlaanderen.be/bouwen-wonen-en-energie/groene-energie/warmtepomp" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">warmtepomp</a>
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">☀️</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Zonnepanelen</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Plaatsen van{" "}
                <a href="https://www.zonnepanelen-gids.be/veelgestelde-vragen-over-zonnepanelen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">zonnepanelen</a>{" "}
                voor groene en duurzame energie
              </p>
            </div>
          </div>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mt-6 max-w-4xl">
            De keuze van de meest geschikte ingrepen hangt af van de huidige staat van je woning en je budget. Het is raadzaam om advies in te winnen bij een{" "}
            <a href="https://ecovalue.be/epc-waarde-verbeteren/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiedeskundige</a>{" "}
            om de meest efficiënte verbeteringen te identificeren.
          </p>
        </div>
      </section>

      {/* Verplicht EPC attest bij verhuur aanvragen */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Verplicht EPC attest bij verhuur <em className="text-blue italic">aanvragen</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Jouw woning verhuren? Vraag dan een{" "}
              <a href="https://www.bnbassist.be/epc-vakantiewoning/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verplichte EPC attest</a>{" "}
              aan bij ECOVALUE, de gecertificeerde energiedeskundigen type A. Bij ons kan je terecht voor{" "}
              <a href="https://ecovalue.be/epc-attest-prijs/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC attesten</a>{" "}
              voor een studio, appartement, rijwoning of halfopen bebouwing. Een EPC attest aanvragen kan eenvoudig online. Een plaatsbezoek vindt gegarandeerd plaats binnen 3 dagen na de aanvraag. Het EPC attest voor verhuur ontvang je binnen 24 uur na het bezoek.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/?type=studio#aanvragen"
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
            Veelgestelde vragen over <em className="text-blue italic">EPC bij verhuur</em>
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
