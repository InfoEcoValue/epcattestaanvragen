import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/schemas";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Wat is een EPC attest en Waarom is het zo belangrijk?",
  description:
    "Alles wat je moet weten over het EPC attest: wettelijke verplichting, financiële waarde, hoe lees je het en wat zijn de 4 belangrijkste redenen waarom het cruciaal is.",
  openGraph: {
    title: "Wat is een EPC attest en Waarom is het zo belangrijk?",
    description:
      "Alles wat je moet weten over het EPC attest: wettelijke verplichting, financiële waarde en hoe lees je het.",
    url: `${BUSINESS.website}/epc-attest`,
    type: "article",
  },
};

const pageFaqs = [
  {
    question: "Wat is een EPC attest?",
    answer:
      "Het Energieprestatiecertificaat (EPC) is een officieel document dat de energiezuinigheid van een wooneenheid in kaart brengt. Het wordt opgesteld door een erkende energiedeskundige na een grondige inspectie van de woning.",
  },
  {
    question: "Hoe lang is een EPC attest geldig?",
    answer: "Het attest is 10 jaar geldig en geeft je in één oogopslag inzicht in de energiescore, het EPC-label en aanbevelingen.",
  },
  {
    question: "Wanneer is een EPC attest wettelijk verplicht?",
    answer:
      "Bij het te koop of te huur aanbieden van een woning moet je over een geldig EPC attest beschikken. De score en het EPC label moeten verplicht vermeld worden in alle commerciële advertenties.",
  },
];

export default function EpcAttestPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "Wat is een EPC attest?", url: `${BUSINESS.website}/epc-attest` },
        ])}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            EPC attest
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream mb-4 sm:mb-6">
            Wat is een EPC attest en <em className="text-gold italic">Waarom is het zo belangrijk?</em>
          </h1>
          <p className="text-[15px] sm:text-base text-cream/75 max-w-[720px] leading-relaxed">
            Alles wat je moet weten over het EPC attest, een eenvoudige gids.
          </p>
        </div>
      </section>

      {/* Welkom bij onze handleiding */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Welkom bij onze handleiding over het EPC attest! Of je nu je huis wilt{" "}
            <a href="https://www.epcattestaanvragen.com/epc-attest-aanvragen/" className="text-blue hover:underline">verkopen</a>{" "}
            of een energiezuinig huis wil kopen, een EPC attest is belangrijk.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-ink-2 leading-relaxed max-w-4xl">
            Maar wat is een EPC attest eigenlijk?
          </p>
        </div>
      </section>

      {/* Een Essentiële Gids */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Een Essentiële Gids over het <em className="text-blue italic">Energieprestatiecertificaat (EPC)</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed max-w-4xl mb-10 sm:mb-14">
            Bij de{" "}
            <a href="https://www.epcattestaanvragen.com/epc-attest-aanvragen/" className="text-blue hover:underline">verkoop of verhuur</a>{" "}
            van een woning is het een van de eerste documenten waar je mee te maken krijgt: het EPC attest. Maar wat is dit certificaat precies en waarom is het veel meer dan een administratieve verplichting? In deze gids ontdek je alles wat je moet weten over het belang en de impact van het EPC attest.
          </p>

          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Wat is een <em className="text-blue italic">EPC attest?</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-4xl">
            <p>
              Het Energieprestatiecertificaat (EPC) is een officieel document dat de energiezuinigheid van een wooneenheid (zoals een huis of appartement) in kaart brengt. Het wordt opgesteld door een{" "}
              <a href="https://ecovalue.be/diensten-erkende-epc-deskundige/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">erkende energiedeskundige</a>{" "}
              na een grondige inspectie van de woning.
            </p>
            <p>
              Hierbij wordt o.a. gekeken naar type{" "}
              <a href="https://www.livios.be/nl/artikel/100486/verwarming-bij-nieuwbouw-of-renovatie-ontdek-alle-opties-voor-jouw-woning/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verwarming</a>,
              het al dan niet bestaan van de{" "}
              <a href="https://www.gamma.be/nl/assortiment/k/bouwmaterialen/isolatie" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">isolatie</a>{" "}
              van de muren en dak(en), type ramen en andere energetische kenmerken van jouw woning.
            </p>
            <p>
              Het attest is{" "}
              <Link href="/epc-attest-geldigheid" className="text-blue hover:underline">10 jaar geldig</Link>{" "}
              en geeft je in één oogopslag inzicht in:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-2">
              <div className="p-5 sm:p-6 bg-white rounded-xl border border-line">
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">De energiescore</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Uitgedrukt in kilowattuur per vierkante meter per jaar (kWh/m² jaar). Hoe lager de EPC score, hoe energiezuiniger de woning.
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white rounded-xl border border-line">
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Het EPC-label</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Een visuele weergave van de score in de vorm van{" "}
                  <Link href="/epc-waarden-tabel" className="text-blue hover:underline">EPC waarden tabel</Link>{" "}
                  op een kleurenschaal van <strong>A+ (zeer energiezuinig i.e. passieve woning)</strong> tot <strong>F (zeer energieverslindend)</strong>.
                </p>
              </div>
              <div className="p-5 sm:p-6 bg-white rounded-xl border border-line">
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Aanbevelingen</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Een lijst met gericht{" "}
                  <a href="https://www.cofidis.be/nl/blog-epc-verbeteren.html" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">advies</a>{" "}
                  om de energieprestaties van de woning te verbeteren. Je kan bij ons ook eventueel een EPC attest simulatie bestellen waarop je kan zien wat de exacte resultaat is van de geplande renovatiewerken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* De 4 Belangrijkste Redenen */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-10 sm:mb-14">
            De 4 Belangrijkste Redenen Waarom het EPC attest <em className="text-blue italic">Cruciaal is</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8 max-w-4xl">
            Het EPC attest is niet zomaar een formaliteit. Het speelt een sleutelrol in de waarde, de wettelijke verplichtingen en de toekomst van je woning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="w-10 h-10 rounded-full bg-blue text-cream grid place-items-center font-heading font-semibold text-lg mb-4">1</div>
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Wettelijke Verplichting bij Verkoop en Verhuur</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                De belangrijkste reden is dat het EPC attest{" "}
                <a href="https://www.epccertificaat.be/epc-wetgeving" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">wettelijk verplicht</a>{" "}
                is. Bij het te koop of te huur aanbieden van een woning moet je over een geldig EPC attest beschikken. De score en het EPC label moeten verplicht{" "}
                <a href="https://www.livios.be/nl/artikel/52177/het-epc-van-een-woning-dit-moet-je-weten/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">vermeld worden</a>{" "}
                in alle commerciële advertenties (online, in kranten, op affiches). Zonder geldig EPC riskeer je aanzienlijke boetes.
              </p>
            </div>
            <div className="p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="w-10 h-10 rounded-full bg-blue text-cream grid place-items-center font-heading font-semibold text-lg mb-4">2</div>
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Directe Impact op de Financiële Waarde van je Woning</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Een goed EPC label is een enorme troef op de vastgoedmarkt. Potentiële kopers en huurders zijn steeds{" "}
                <a href="https://www.woonhypotheek.be/advies-expertise/andere/hoe-belangrijk-is-de-epc-waarde-als-je-een-huis-gaat-kopen-162/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">meer gefocust op het EPC attest</a>.
                Een woning met label A of B is niet alleen goedkoper in verbruik, maar ook aanzienlijk{" "}
                <a href="https://www.vrt.be/vrtnws/nl/2024/08/06/woningprijzen-energielabel/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">meer waard</a>.
                Onderzoek toont aan dat een gunstig EPC attest de verkoopprijs met duizenden euro&apos;s kan verhogen, waardoor het een cruciale factor is in de waardebepaling.
              </p>
            </div>
            <div className="p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="w-10 h-10 rounded-full bg-blue text-cream grid place-items-center font-heading font-semibold text-lg mb-4">3</div>
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Inzicht in Toekomstige Kosten en Wooncomfort</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Het EPC attest geeft potentiële kopers of huurders een redelijk realistische inschatting van hun toekomstige energierekening. Voor eigenaars biedt het een duidelijk beeld van de zwakke plekken in de woning. Door de aanbevelingen op het EPC attest te volgen, kun je niet alleen je energiefactuur verlagen, maar ook je wooncomfort aanzienlijk verhogen (minder tocht, aangenamere temperatuur).
              </p>
            </div>
            <div className="p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="w-10 h-10 rounded-full bg-blue text-cream grid place-items-center font-heading font-semibold text-lg mb-4">4</div>
              <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Sleutel tot Premies en de Renovatieplicht</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                In Vlaanderen is het EPC attest onlosmakelijk verbonden met de renovatieplicht. Woningen met een EPC label E of F moeten binnen de vijf jaar na aankoop verplicht gerenoveerd worden tot minimaal label D. Daarnaast is een gunstig EPC attest vaak een voorwaarde om in aanmerking te komen voor bepaalde{" "}
                <a href="https://www.vlaanderen.be/premies-voor-renovatie/mijn-epc-labelpremie" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiepremies zoals Mijn EPC-labelpremie</a>{" "}
                en subsidies van de overheid. Het is dus jouw routekaart naar een duurzame en financieel voordelige renovatie.
              </p>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 p-5 sm:p-7 bg-cream rounded-xl border border-line">
            <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">EPC labels</h3>
            <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed">
              Het EPC attest heeft een schaal van <strong>A+ tot F</strong>, waarbij A het meest energiezuinig is en F het minst energiezuinig.
              Een betere EPC waarde betekent <strong>lagere energiekosten</strong> en minder milieuvervuiling.{" "}
              <Link href="/epc-waarden-tabel" className="text-blue hover:underline">Bekijk de volledige EPC waarden tabel</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Hoe Lees je een EPC attest? */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-8 sm:mb-10">
            Hoe Lees je een <em className="text-blue italic">EPC attest?</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-6 max-w-4xl">
            Het EPC attest is ontworpen om snel en duidelijk informatie te geven. De belangrijkste onderdelen zijn:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">De Energiescore en het Label</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Dit is het eerste wat opvalt. Het geeft je direct een algemeen beeld van de energieprestaties van de woning.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">Gedetailleerde Aanbevelingen</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Het EPC attest geeft niet alleen aan <em>dat</em> je moet renoveren, maar ook <em>hoe</em>. Je vindt er concreet, vaak{" "}
                <Link href="/epc-waarden-tabel" className="text-blue hover:underline">prioritair advies</Link>{" "}
                over bijvoorbeeld dakisolatie, het vervangen van ramen of het moderniseren van de verwarmingsinstallatie.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">Technische Informatie</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Het document bevat ook een overzicht van de geïnspecteerde onderdelen, zoals het type isolatie, de verwarmingsketel, de beglazing en het ventilatiesysteem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusie */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-6 sm:mb-8">
            Conclusie: Het EPC attest is <em className="text-blue italic">Meer dan een Stuk Papier</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-6 max-w-4xl">
            Het EPC attest is geëvolueerd van een administratief document naar een centraal instrument in de vastgoedwereld. Het is:
          </p>
          <ul className="space-y-3 text-[14px] sm:text-[15px] text-ink-2 max-w-2xl mb-8">
            <li className="flex items-start gap-3">
              <span className="text-blue font-bold text-lg mt-0.5">&bull;</span>
              <span><strong>Een wettelijke noodzaak</strong> bij verkoop en verhuur.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue font-bold text-lg mt-0.5">&bull;</span>
              <span><strong>Een financiële hefboom</strong> die de waarde van je woning bepaalt.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue font-bold text-lg mt-0.5">&bull;</span>
              <span><strong>Een praktische gids</strong> voor een lagere energiefactuur en meer comfort.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue font-bold text-lg mt-0.5">&bull;</span>
              <span><strong>Een essentiële sleutel</strong> tot premies en het voldoen aan de renovatieverplichting.</span>
            </li>
          </ul>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed max-w-4xl mb-8">
            Kortom, het begrijpen en optimaliseren van je EPC attest is een van de slimste investeringen die je in je woning kunt doen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] sm:text-base hover:bg-blue-2 transition-all"
          >
            EPC attest aanvragen
            <ArrowRight className="w-4 h-4" />
          </Link>
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
