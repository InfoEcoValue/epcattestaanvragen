import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/schemas";
import { ArrowRight, Phone } from "lucide-react";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { LastUpdated } from "@/components/sections/LastUpdated";

export const metadata: Metadata = {
  title: "Hoe lang is EPC attest geldig? Complete gids",
  description:
    "Een EPC attest is 10 jaar geldig in Vlaanderen. Ontdek de uitzonderingen: verkoop na 2019, renovatieplicht, bestemmingswijziging en gemeenschappelijke delen.",
  openGraph: {
    title: "Hoe lang is EPC attest geldig? Complete gids",
    description:
      "Een EPC attest is 10 jaar geldig in Vlaanderen. Ontdek alle uitzonderingen op de standaardregels.",
    url: `${BUSINESS.website}/epc-attest-geldigheid`,
    type: "article",
  },
};

const pageFaqs = [
  {
    question: "Hoe lang is een EPC attest geldig?",
    answer:
      "Een EPC attest is 10 jaar geldig in Vlaanderen, Wallonië en het Brussels Hoofdstedelijk Gewest, vanaf de opmaakdatum.",
  },
  {
    question: "Wat gebeurt er als mijn EPC vervalt?",
    answer:
      "Na het verstrijken van 10 jaar bent u verplicht om een nieuw EPC te laten opmaken als u uw woning wilt verkopen of verhuren.",
  },
  {
    question: "Wanneer moet ik een nieuw EPC attest aanvragen?",
    answer:
      "Bij verkoop moet het EPC van na 1 januari 2019 zijn. Na grondige energetische renovaties of bij wijziging van bestemming is een nieuw attest sterk aangeraden of verplicht.",
  },
];

export default function EpcAttestGeldigheidPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "EPC attest geldigheid", url: `${BUSINESS.website}/epc-attest-geldigheid` },
        ])}
      />

      <Breadcrumb items={[{ name: "Home", href: "/" }, { name: "EPC attest geldigheid", href: "/epc-attest-geldigheid" }]} />
      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            Geldigheid
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream">
            Hoe lang is EPC attest geldig? <em className="text-gold italic">Jouw complete gids</em>
          </h1>
          <LastUpdated date="2026-05-09" />
        </div>
      </section>

      {/* De basisregel: 10 jaar */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            De basisregel EPC attest geldigheid: <em className="text-blue italic">10 jaar</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Een Energieprestatiecertificaat (EPC) heeft een standaard{" "}
              <a href="https://www.vlaanderen.be/epc-pedia/info-type-a/epc-residentieel/geldigheid-epc-residentieel" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">geldigheidsduur van 10 jaar</a>.
            </p>
            <p>
              Deze termijn is van toepassing in de drie gewesten van België: Vlaanderen, Wallonië en het Brussels Hoofdstedelijk Gewest.
            </p>
            <p>
              Dit betekent dat u binnen deze periode het attest kunt gebruiken bij{" "}
              <a href="https://ecovalue.be/epc-keuring/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">de verkoop of verhuur van uw woning</a>{" "}
              zonder een nieuw certificaat te moeten aanvragen.
            </p>
            <Link href="/epc-keuring-prijs" className="inline-flex items-center gap-2 mt-2 px-5 py-3 rounded-lg border border-line-2 text-ink font-semibold text-sm hover:bg-cream hover:border-blue transition-all">
              EPC keuring prijs
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="mt-10 p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line max-w-3xl">
            <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Wat gebeurt er als mijn EPC vervalt?</h3>
            <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-3">
              <p>
                Na het verstrijken van de 10 jaar is de{" "}
                <a href="https://www.vincotte.be/nl/blog/nieuwe-regels-in-vlaanderen-voor-het-energieprestatiecertificaat-epc-bij-verkoop-van-een-woning" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC attest geldigheid</a>{" "}
                verstreken. Indien je jouw woning opnieuw wilt verkopen of verhuren, bent u verplicht om een nieuw EPC te laten opmaken. Het is belangrijk om de vervaldatum op uw attest goed in de gaten te houden om problemen te voorkomen ivm EPC attest geldigheid.
              </p>
              <p>
                De EPC attest geldigheid staat op de voorpagina van het EPC attest, rechts in de hoek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uitzonderingen */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            EPC attest geldigheid &mdash; <em className="text-blue italic">uitzonderingen</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8 max-w-4xl">
            In bepaalde situaties is een EPC attest geldigheid afwijkend van de standaardregel of ben je verplicht om sneller een nieuw attest aan te vragen.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">EPC attest van na 1 januari 2019</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Een belangrijke uitzondering in het Vlaamse Gewest is dat bij de verkoop van een woning het EPC attest opgemaakt moet zijn na 1 januari 2019. Heeft u een ouder, maar nog geldig attest? Dan moet u bij verkoop toch een nieuw EPC laten opmaken. Voor{" "}
                <a href="https://www.vlaanderen.be/energieprestatiecertificaat-epc-bij-overdracht-of-verhuur-van-een-wooneenheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verhuur</a>{" "}
                blijft een ouder attest (van voor 2019) wel nog geldig tot de vervaldatum.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Renovatieplicht: na grondige energetische renovaties</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Heb jij{" "}
                <a href="https://ecovalue.be/epc-waarde-verbeteren/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">aanzienlijke energiebesparende werken</a>{" "}
                uitgevoerd, zoals het plaatsen van{" "}
                <a href="https://ecovalue.be/epc-waarde-verbeteren/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">nieuwe ramen</a>,
                dakisolatie of een nieuwe verwarmingsinstallatie? Of had jij{" "}
                <a href="https://batibouw.com/nl/articles/529/slechter-epc-label-dit-zijn-de-nieuwe-renovatieregels-vanaf-2025" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">renovatieplicht</a>{" "}
                door het{" "}
                <a href="https://ecovalue.be/renovatieplicht-residentiele-gebouwen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC label E of F</a>{" "}
                en heb jij nu EPC label D of beter? Dan is het sterk aangeraden om een nieuw EPC te laten opmaken, ook al is jouw huidige attest nog geldig. Een nieuw attest zal de verbeterde energieprestatie van jouw woning weerspiegelen.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Bij wijziging van bestemming</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Wanneer een gebouw van functie verandert, bijvoorbeeld van een kantoor naar een woning of omgekeerd, vervalt de EPC attest geldigheid. Er dient dan een nieuw, correct EPC opgemaakt te worden dat overeenstemt met de nieuwe bestemming.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">EPC attest gemeenschappelijke delen</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Sinds 2022 is het in Vlaanderen verplicht voor grotere appartementsgebouwen om een EPC voor de gemeenschappelijke delen te hebben. Hier gaat het om{" "}
                <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs/epc-van-de-gemeenschappelijke-delen-van-een-appartementsgebouw#regelgeving" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">alle gemeenschappelijke delen</a>{" "}
                van een appartementsgebouw inclusief alle buitenmuren, gemeenschappelijke openingen en het dak. Sinds 2024 is een EPC attest gemeenschappelijke delen verplicht bij gebouwen met 2 of meer appartementen. Ook bij combinatie appartement &mdash; handelszaak is een EPC attest gemene delen verplicht.
              </p>
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

      {/* Wanneer is een EPC attest verplicht? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-8 sm:mb-10">
            Wanneer is een EPC attest <em className="text-blue italic">verplicht?</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Bij verkoop en verhuur</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Zowel bij de verkoop als bij de verhuur van residentiële gebouwen is een{" "}
                <Link href="/epc-attest-aanvragen" className="text-blue hover:underline">geldig EPC attest verplicht</Link>.
                De energiescore en het energielabel moeten zelfs al vermeld worden in{" "}
                <a href="https://www.vlaanderen.be/energieprestatiecertificaat-epc-bij-overdracht-of-verhuur-van-een-wooneenheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">alle advertenties</a>{" "}
                (online, in kranten, op affiches).
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">EPC NR voor niet-residentiële gebouwen</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Ook voor kantoren, winkels, horecazaken en andere niet-residentiële gebouwen is een{" "}
                <a href="https://www.vlaanderen.be/epc-pedia/info-type-a/epc-klein-niet-residentieel/toepassingsgebied-epc-klein-niet-residentieel" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">specifiek EPC attest</a>{" "}
                (het EPC Niet Residentieel) verplicht bij verkoop en verhuur. Het EPC attest klein niet-residentieel kan u{" "}
                <Link href="/contact" className="text-blue hover:underline">hier</Link>{" "}
                aanvragen.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Uitzonderingen op de EPC-plicht</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Ja, in enkele specifieke gevallen is een EPC niet verplicht. Denk hierbij aan de verkoop van een{" "}
                <a href="https://www.epcinvest.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">onbewoonbaar verklaarde woning</a>,
                bij bepaalde erfenisregelingen zonder dat de woning op de markt komt, of voor gebouwen met een zeer beperkte bruikbare vloeroppervlakte. Je kan ons hiervoor altijd{" "}
                <Link href="/contact" className="text-blue hover:underline">contacteren</Link>.
              </p>
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

      {/* Gevolgen van een ongeldig of ontbrekend EPC */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-8 sm:mb-10">
            Gevolgen van een <em className="text-blue italic">ongeldig of ontbrekend EPC</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8 max-w-4xl">
            Het niet beschikken over een geldig EPC-attest wanneer dit verplicht is, kan aanzienlijke gevolgen hebben.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">⚠️</div>
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Administratieve boetes</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Het Vlaams Energie- en Klimaatagentschap (VEKA) kan{" "}
                <a href="https://www.vlaanderen.be/energieprestatiecertificaat-epc-bij-overdracht-of-verhuur-van-een-wooneenheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">boetes opleggen die variëren van &#x20AC;500 tot &#x20AC;5.000</a>{" "}
                indien u niet voldoet aan{" "}
                <Link href="/epc-attest-aanvragen" className="text-blue hover:underline">de EPC-verplichtingen</Link>.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Vertraging of blokkering van verkoop/verhuur</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Een notaris zal de verkoopakte niet verlijden zonder een geldig EPC-attest. Ook kan het ontbreken ervan potentiële kopers of huurders afschrikken en het proces vertragen. Een bank zal je ook ongetwijfeld vragen om het EPC attest voor te leggen bij het aanvragen van een lening.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">🏗️</div>
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">EPC attest en de renovatieverplichting</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                In Vlaanderen is aan het EPC een{" "}
                <a href="https://ninabrunovastgoed.be/nl/blog/nieuwe-renovatieplicht-vanaf-2025" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">renovatieverplichting</a>{" "}
                gekoppeld. Wie een woning met een EPC-label E of F aankoopt, is verplicht om deze binnen de 5 jaar energetisch te renoveren tot minstens{" "}
                <a href="https://ecovalue.be/renovatieplicht-residentiele-gebouwen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">een label D</a>.
              </p>
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

      {/* FAQ */}
      <section className="bg-paper border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-tight text-center mb-10 sm:mb-14">
            Veelgestelde vragen over <em className="text-blue italic">EPC attest geldigheid</em>
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
