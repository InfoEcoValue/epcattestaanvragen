import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { EPC_LABELS, BUSINESS } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/schemas";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "EPC waarden tabel — Alle EPC labels van A+ tot F uitgelegd | ECOVALUE",
  description:
    "Overzicht van alle EPC waarden en labels van A+ tot F. Ontdek wat uw EPC label betekent, welke factoren de EPC waarde bepalen en wanneer de renovatieplicht geldt.",
  openGraph: {
    title: "EPC waarden tabel — Alle EPC labels van A+ tot F uitgelegd",
    description:
      "Overzicht van alle EPC waarden en labels van A+ tot F. Ontdek wat uw EPC label betekent en wanneer de renovatieplicht geldt.",
    url: `${BUSINESS.website}/epc-waarden-tabel`,
    type: "article",
  },
};

const scaleClasses = [
  "bg-[#1a8a5b] text-white",
  "bg-[#3aa370] text-white",
  "bg-[#7eb85a] text-blue-deep",
  "bg-[#bcc855] text-blue-deep",
  "bg-[#e8c84a] text-blue-deep",
  "bg-[#e89a3c] text-white",
  "bg-[#c8552d] text-white",
];

function LabelCard({ grade, emoji, range, index, children }: { grade: string; emoji: string; range: string; index: number; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-4 sm:gap-6 items-start p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-line">
      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center font-heading text-[28px] sm:text-[36px] font-semibold ${scaleClasses[index]}`}>
        {grade}
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{emoji}</span>
          <h3 className="font-heading text-[18px] sm:text-[22px] font-medium">
            EPC-label {grade}: {range}
          </h3>
        </div>
        <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

const pageFaqs = [
  {
    question: "Wat is een EPC waarde?",
    answer:
      "De EPC waarde drukt het primair energieverbruik van een woning uit in kWh per m² per jaar. Hoe lager de waarde, hoe energiezuiniger de woning. De EPC waarde wordt bepaald door een erkende energiedeskundige type A na een plaatsbezoek.",
  },
  {
    question: "Wat is een goed EPC label?",
    answer:
      "Een goed EPC label is A of B. Label A betekent minder dan 100 kWh/m² per jaar, label B ligt tussen 100 en 200 kWh/m². De Vlaamse overheid streeft ernaar dat alle woningen tegen 2050 label A bereiken.",
  },
  {
    question: "Wanneer geldt de renovatieplicht?",
    answer:
      "Bij aankoop van een woning met EPC label E of F moet u binnen zes jaar renoveren tot minimaal label D. Deze renovatieverplichting geldt sinds 2023 in Vlaanderen.",
  },
];

export default function EpcWaardenPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "EPC waarden tabel", url: `${BUSINESS.website}/epc-waarden-tabel` },
        ])}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="mb-8 sm:mb-12">
            <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
              <span className="w-6 h-px bg-gold" />
              EPC-schaal
            </div>
            <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream">
              EPC waarden tabel: <em className="text-gold italic">alle labels van A+ tot F uitgelegd</em>
            </h1>
            <p className="text-[15px] sm:text-base text-cream/75 max-w-[720px] leading-relaxed mt-4 sm:mt-5">
              De{" "}
              <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs/epc-van-een-residentiele-gebouweenheid/uitleg-bij-het-epc-res" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">EPC waarden tabel</a>{" "}
              laat zien wat de maatstaven zijn voor het berekenen van de{" "}
              <a href="https://www.vlaanderen.be/investeren-in-energiebesparing" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">energiezuinigheid van je woning</a>.
              Deze{" "}
              <a href="https://ecovalue.be/wat-is-epc-waarde/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">waarde</a>{" "}
              wordt vervolgens vermeld in een EPC attest of Energieprestatiecertificaat. Dit document is verplicht als je jouw woning wilt{" "}
              <Link href="/epc-attest-aanvragen" className="text-gold hover:underline">schenken of verkopen</Link>,
              maar ook als je jouw woning wilt{" "}
              <Link href="/epc-verplicht-verhuur" className="text-gold hover:underline">verhuren</Link>.
              Dit zijn de{" "}
              <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs/epc-van-een-residentiele-gebouweenheid/uitleg-bij-het-epc-res" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">EPC waarden uitgelegd</a>.
            </p>
          </div>

          {/* EPC Scale Cards */}
          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 sm:gap-2">
            {EPC_LABELS.map((label, i) => (
              <div
                key={label.grade}
                className={`aspect-[1/1.25] rounded-lg sm:rounded-[10px] p-2.5 sm:p-4 flex flex-col justify-between ${scaleClasses[i]} hover:-translate-y-1 transition-transform`}
              >
                <div>
                  <div className="font-heading text-[28px] sm:text-[42px] font-semibold leading-none tracking-tight">
                    {label.grade}
                  </div>
                  <div className="font-mono text-[9px] sm:text-[11px] font-medium opacity-85 mt-0.5 sm:mt-1">
                    {label.range}
                  </div>
                </div>
                <div className="text-[9px] sm:text-[11px] leading-snug font-medium opacity-75">
                  {label.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-4 sm:gap-6 pt-6 sm:pt-7 border-t border-cream/10 text-[13px] sm:text-sm text-cream/70">
            <span>
              Vanaf label E geldt renovatieplicht binnen 5 jaar na aankoop.{" "}
              <Link href="/renovatieplicht" className="underline hover:text-cream">
                Lees meer over de renovatieplicht
              </Link>
              .
            </span>
            <Link
              href="/?type=studio#aanvragen"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gold text-blue-deep font-semibold text-sm hover:bg-gold-2 hover:text-white transition-all w-full sm:w-auto justify-center sm:justify-start"
            >
              EPC waarde berekening aanvragen
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Label details */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-10 sm:mb-14">
            Elk EPC label <em className="text-blue italic">in detail</em>
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            {/* A+ */}
            <LabelCard grade="A+" emoji="⭐" range="0 kWh/m² per jaar of minder" index={0}>
              Dit is de score van een energieneutrale of &ldquo;<a href="http://vlaanderen.be/team-taaladvies/woorden-van-de-week/passiefhuis#:~:text=In%20een%20passiefhuis%20wordt%20het,klassieke%20centrale%20verwarming%20of%20kachel." target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">passieve</a>&rdquo; woning. Dit label wordt bijna uitsluitend toegekend aan nieuwbouwwoningen. Enkel in zeer uitzonderlijke gevallen wordt zo&apos;n score behaald na een <a href="https://www.vlaanderen.be/een-huis-verbouwen/ingrijpende-energetische-renovatie" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">ingrijpende energetische renovatie</a>.
            </LabelCard>

            {/* A */}
            <LabelCard grade="A" emoji="💚" range="0 tot 100 kWh/m² per jaar" index={1}>
              Dit is de doelstelling die de <a href="https://www.vlaanderen.be/veka/energie-en-klimaatbeleid/vlaamse-langetermijnrenovatiestrategie-voor-gebouwen-2050" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Vlaamse Overheid voor elke woning wil bereiken tegen 2050</a>. Het is een zeer ambitieus plan. Hoewel dit label behaald kan worden via een grondige <a href="https://www.lotteholvoet.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energetische renovatie</a>, is dit voor bestaande woningen vaak technisch of financieel niet haalbaar.
            </LabelCard>

            {/* B */}
            <LabelCard grade="B" emoji="👍" range="100 tot 200 kWh/m² per jaar" index={2}>
              Dit zijn woningen met een zeer laag energieverbruik. Deze <a href="https://ecovalue.be/epc-waarde-berekenen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC waarde</a> wordt vaak behaald door een combinatie van goede muurisolatie, een <a href="https://www.vaillant.be/consumenten/ons-advies/blog/de-voordelen-van-een-hoogrendementsketel-op-een-rijtje/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">hoogrendementsketel</a>, degelijke ramen en uitstekende dakisolatie. Dit <a href="https://ecovalue.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC label</a> is makkelijker te behalen voor halfopen bebouwingen, omdat zij minder muren hebben die grenzen aan de koude buitenlucht.
            </LabelCard>

            {/* C */}
            <LabelCard grade="C" emoji="🏠" range="200 tot 300 kWh/m² per jaar" index={3}>
              Dit is een veelvoorkomende, degelijke <a href="https://ecovalue.be/epc-waarde-berekenen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC waarde</a> voor een gemiddelde woning in Vlaanderen. Het gaat vaak om huizen of appartementen die al gedeeltelijk gerenoveerd zijn, bijvoorbeeld met een nieuwe verwarmingsketel en dakisolatie, maar waar nog andere <a href="https://ecovalue.be/epc-waarde-verbeteren/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC waarde verbeteringen</a> mogelijk zijn.
            </LabelCard>

            {/* D */}
            <LabelCard grade="D" emoji="🤔" range="300 tot 400 kWh/m² per jaar" index={4}>
              Een woning met EPC waarde D biedt veel kansen voor verbetering. Vaak zijn dit huizen waar al een eerste stap is gezet, zoals het plaatsen van <a href="https://www.dural-bouwgroep.be/nieuws/invloed-van-dakisolatie-op-het-epc-label/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">dakisolatie</a>, maar waar andere energiebesparende maatregelen nog ontbreken. Momenteel is EPC label D de minimumdoelstelling waarnaar je moet renoveren als je een huis met label E of F koopt. Dit in het kader van <a href="https://ecovalue.be/renovatieplicht-residentiele-gebouwen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC renovatieplicht</a>.
            </LabelCard>

            {/* E */}
            <LabelCard grade="E" emoji="⚠️" range="400 tot 500 kWh/m² per jaar" index={5}>
              Dit label wordt gegeven aan een woning met weinig energiezuinige kenmerken. Voor woningen en appartementen met label E geldt de <a href="https://ecovalue.be/renovatieplicht-residentiele-gebouwen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">renovatieverplichting</a>. Dit betekent dat je de woning binnen de <a href="https://www.vlaanderen.be/een-huis-of-appartement-kopen/renovatieverplichting-voor-residentiele-gebouwen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">zes jaar na aankoop</a> verplicht moet renoveren tot minimaal <a href="https://ecovalue.be/epc-waarde-verbeteren/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC waarde D</a>.
            </LabelCard>

            {/* F */}
            <LabelCard grade="F" emoji="🛠️" range="Hoger dan 500 kWh/m² per jaar" index={6}>
              Label F is het slechtste <a href="https://ecovalue.be/epc-waarde-berekenen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC waarde</a>. Woningen met deze score zijn vaak <a href="https://www.hln.be/nieuws/woning-met-c-of-d-label-wordt-opnieuw-veilige-en-stabiele-keuze-versoepelde-renovatieplicht-maakt-ook-gewone-huizen-pak-duurder~a3f705c3/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">goedkoper</a> in aankoop, maar bieden veel potentieel. Zelfs simpele ingrepen, zoals het <a href="https://www.tipsentricks.be/spouwmuren-opvullen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">opvullen van spouwmuren</a>, kunnen de score en de waarde van de woning snel doen stijgen. Ook hier geldt de <a href="https://ecovalue.be/renovatieplicht-residentiele-gebouwen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">renovatieverplichting</a>: je moet de woning binnen de <strong>zes jaar</strong> na aankoop renoveren tot minimaal EPC waarde D.
            </LabelCard>
          </div>
        </div>
      </section>

      {/* Waarom is de EPC waarde zo belangrijk? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
                Waarom is de EPC waarde <em className="text-blue italic">zo belangrijk?</em>
              </h2>
              <div className="space-y-4 text-[14px] sm:text-[15px] text-ink-2 leading-relaxed">
                <p>
                  De{" "}
                  <a href="https://www.vlaanderen.be/energieprestatiecertificaat-epc-bij-overdracht-of-verhuur-van-een-wooneenheid/test-uw-epc-simuleer-of-vergelijk-het-epc-label-van-een-woning" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC waarde</a>{" "}
                  van een woning wordt vastgesteld door een{" "}
                  <a href="https://www.hogent.be/opleidingen/gereglementeerde-vormingen/energiedeskundige-type-a/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiedeskundige type A</a>.
                  De waarde wordt vervolgens opgemaakt in een verplicht EPC attest met een{" "}
                  <Link href="/epc-attest-geldigheid" className="text-blue hover:underline">geldigheid van 10 jaar</Link>.
                  De waarde is van belang omdat dit{" "}
                  <a href="https://bouwenaanvlaanderen.be/algemeen/2023-het-jaar-van-energiezuinige-renovaties/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">het verbruik op jaarbasis en de energiezuinigheid</a>{" "}
                  van een{" "}
                  <a href="https://www.vincotte.be/nl/blog/nieuwe-regels-in-vlaanderen-voor-het-energieprestatiecertificaat-epc-bij-verkoop-van-een-woning" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">studio, appartement of rijwoning</a>{" "}
                  aangeeft bij eventuele verkoop, koop of{" "}
                  <Link href="/epc-verplicht-verhuur" className="text-blue hover:underline">verhuur</Link>.
                </p>
                <p>
                  Een lage EPC waarde betekent doorgaans een energiezuinigere woning, wat kan resulteren in{" "}
                  <a href="https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/onroerende-voorheffing/vermindering-van-de-onroerende-voorheffing-voor-energiezuinige-gebouwen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">lagere energiekosten</a>{" "}
                  voor de bewoner. Bovendien kan een gunstige EPC score de aantrekkelijkheid en de potentiele{" "}
                  <a href="https://taximmo.be/2025/02/23/impact-energielabels-epc-vastgoedwaardering/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verkoopprijs</a>{" "}
                  van een pand positief beinvloeden.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/epc-waarde.jpeg"
                alt="EPC waarde overzicht met energielabels"
                width={500}
                height={500}
                className="rounded-xl sm:rounded-2xl max-w-[320px] sm:max-w-[420px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EPC waarden tabel: uitleg van de verschillende factoren */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div className="lg:order-2">
              <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
                EPC waarden tabel: <em className="text-blue italic">uitleg van de verschillende factoren</em>
              </h2>
              <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8 sm:mb-10">
                De{" "}
                <a href="https://ecovalue.be/wat-is-epc-waarde/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC waarden</a>{" "}
                voor attesten zijn de normen die aangeven hoe{" "}
                <a href="https://www.livios.be/nl/artikel/52177/het-epc-van-een-woning-dit-moet-je-weten/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiezuinig</a>{" "}
                een woning is en hoeveel deze verbruikt. Op basis van deze{" "}
                <a href="https://www.livios.be/nl/artikel/52177/het-epc-van-een-woning-dit-moet-je-weten/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">waarden</a>{" "}
                kan een score worden opgemaakt van EPC label A tot F. Des te lager de{" "}
                <a href="https://www.livios.be/nl/artikel/100858/strengere-epc-regels-voor-huurwoningen-vanaf-2030-wat-betekent-dat-voor-huurders/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC waarde</a>,
                des te energiezuiniger je woning is. In de onderstaande waarden tabel zie je op welke punten de{" "}
                <a href="https://www.livios.be/nl/artikel/100364/wat-is-het-gemiddelde-epc-in-vlaanderen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC-waarde worden berekend</a>.
              </p>
              <div className="grid grid-cols-1 gap-5 sm:gap-6">
                <div className="p-5 sm:p-6 bg-white rounded-xl border border-line">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="text-xl">☀️</span>
                    <h3 className="font-heading text-[16px] sm:text-[18px] font-medium">Hernieuwbare energie</h3>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                    een van de{" "}
                    <a href="https://www.vlaanderen.be/bouwen-wonen-en-energie/niet-residentiele-gebouwen/energieprestatiecertificaat-van-een-niet-residentiele-gebouweenheid-epc-nr/onderdelen-van-het-epc-voor-niet-residentiele-gebouwen-energielabel-en-energiescore" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">belangrijke EPC waarden</a>{" "}
                    voor een attest is hernieuwbare energie. Is de woning bijvoorbeeld voorzien van{" "}
                    <a href="https://www.vlaanderen.be/zonnepanelen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">zonnepanelen</a>{" "}
                    op het dak of een{" "}
                    <a href="https://www.vlaanderen.be/epc-pedia/info-type-d/epc-nr-en-toepassingsgebied/werkelijk-energiegebruik-als-basis-voor-het-epc-nr/hoe-worden-warmtepompen-ingerekend-voor-het-energielabel" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">warmtepompinstallatie</a>?
                    Deze waarde kan de{" "}
                    <a href="https://ecovalue.be/epc-waarde-berekenen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC score</a>{" "}
                    aanzienlijk verbeteren.
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-white rounded-xl border border-line">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="text-xl">🔥</span>
                    <h3 className="font-heading text-[16px] sm:text-[18px] font-medium">Verwarming</h3>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                    bij het opmaken van een{" "}
                    <Link href="/diensten" className="text-blue hover:underline">EPC attest</Link>{" "}
                    wordt er ook gekeken naar waarden zoals de{" "}
                    <a href="https://www.vlaanderen.be/verwarmingssystemen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">verwarming</a>.
                    Hoe wordt de woning verwarmd? Hoe{" "}
                    <a href="https://www.vlaanderen.be/nieuwe-verwarmingsinstallatie-kiezen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiezuinig is deze verwarmingsinstallatie</a>{" "}
                    en maak je bijvoorbeeld gebruik van een{" "}
                    <a href="https://www.livios.be/nl/artikel/54400/verwarmingsketel-kiezen-soorten-wetgeving-en-onderhoudstips/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">HR-verwarmingsketel</a>?
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-white rounded-xl border border-line">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="text-xl">🪟</span>
                    <h3 className="font-heading text-[16px] sm:text-[18px] font-medium">Ramen</h3>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                    ook de{" "}
                    <a href="https://www.livios.be/nl/artikel/65572/hoogrendementsglas-zorgt-voor-lagere-energiefactuur-ook-interessant-voor-jou/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">ramen</a>{" "}
                    van een woning of een appartement zijn belangrijke factoren die de{" "}
                    <a href="https://ecovalue.be/wat-is-epc-waarde/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC waarde</a>{" "}
                    kunnen beinvloeden. Er wordt onder meer gekeken naar de aanwezigheid van enkelglas, dubbelglas of energiezuinig{" "}
                    <a href="https://www.vlaanderen.be/investeren-in-energiebesparing/isolatie-en-luchtdichtheid/beglazing/hoogrendementsglas" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">hoogrendementsglas</a>.
                  </p>
                </div>
                <div className="p-5 sm:p-6 bg-white rounded-xl border border-line">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="text-xl">🧱</span>
                    <h3 className="font-heading text-[16px] sm:text-[18px] font-medium">Isolatie</h3>
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                    ook de aanwezigheid van{" "}
                    <a href="https://www.vlaanderen.be/investeren-in-energiebesparing/isolatie-en-luchtdichtheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">isolatie</a>{" "}
                    maakt deel uit van de EPC waarden. Voorbeelden daarvan zijn{" "}
                    <a href="https://www.livios.be/nl/artikel/16176/het-belang-van-een-degelijke-muurisolatie/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">spouwmuurisolatie</a>,
                    vloer- en gevelisolatie of dakisolatie.
                  </p>
                </div>
              </div>

              <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mt-8 sm:mt-10">
                Als jouw woning voldoet aan de factoren in de{" "}
                <Link href="/veelgestelde-vragen" className="text-blue hover:underline">EPC waarden</Link>{" "}
                tabel profiteer je van nog meer voordelen. Je bespaart bijvoorbeeld op de energiekosten door een goede{" "}
                <a href="https://www.livios.be/nl/artikel/65214/isoleren-prijs-premies-materialen-en-plaatsing/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">isolatie</a>{" "}
                of omdat de woning gebruikmaakt van{" "}
                <a href="https://www.rijksoverheid.nl/onderwerpen/energie-thuis/bevorderen-duurzame-energie-thuis" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">hernieuwbare energie</a>.
                Daarnaast heeft een goede EPC waarde op het attest invloed op de woningwaarde en de prijs bij{" "}
                <Link href="/epc-verplicht-verhuur" className="text-blue hover:underline">verhuur</Link>{" "}
                of verkoop. Als je een attest hebt met een{" "}
                <Link href="/epc-attest-geldigheid" className="text-blue hover:underline">goede score</Link>,
                betekent dat ook minder schadelijke CO2-uitstoot
              </p>
            </div>
            <div className="flex justify-center lg:sticky lg:top-24 lg:order-1">
              <Image
                src="/images/epc-waarde-factoren.png"
                alt="Factoren die de EPC waarde bepalen"
                width={768}
                height={1365}
                className="rounded-xl sm:rounded-2xl max-w-[280px] sm:max-w-[360px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meer informatie over EPC waarden? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="flex justify-center lg:order-2">
              <Image
                src="/images/epc-waarden-info.png"
                alt="Meer informatie over EPC waarden"
                width={768}
                height={768}
                className="rounded-xl sm:rounded-2xl max-w-[280px] sm:max-w-[360px] w-full"
              />
            </div>
            <div className="lg:order-1">
              <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
                Meer informatie over <em className="text-blue italic">EPC waarden?</em>
              </h2>
              <div className="space-y-4 text-[14px] sm:text-[15px] text-ink-2 leading-relaxed">
                <p>
                  Wil je weten hoe het is gesteld met de{" "}
                  <Link href="/veelgestelde-vragen" className="text-blue hover:underline">EPC waarden</Link>{" "}
                  van jouw woning of wil je de waarde juist verbeteren voor een{" "}
                  <Link href="/epc-attest" className="text-blue hover:underline">EPC attest</Link>?
                  Bijvoorbeeld voor verkoop,{" "}
                  <Link href="/epc-verplicht-verhuur" className="text-blue hover:underline">verhuur</Link>{" "}
                  of het kopen van een woning? Neem dan gerust{" "}
                  <Link href="/?type=studio#aanvragen" className="text-blue hover:underline">contact op met ons</Link>{" "}
                  door op het onderstaande knop te klikken of door het formulier bovenaan de pagina in te vullen.
                </p>
                <p>
                  Wil je meer weten over de EPC waarde van je woning? De EPC waarde geeft aan hoe energiezuinig je huis is. Hoe lager de EPC waarde, hoe beter! Wil je jouw EPC waarde kennen voor de:
                </p>
                <ul className="space-y-2 ml-1">
                  <li className="flex items-start gap-2">
                    <span>🏠</span>
                    <span>
                      <a href="https://blog.immoweb.be/nl/verkopen/invloed-van-energieprestaties-bij-verkoop-woning/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline font-medium">Verkoop</a> van een woning?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🔑</span>
                    <span>
                      <a href="https://fin.belgium.be/nl/particulieren/woning/huren-verhuren/huurinkomsten" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline font-medium">Verhuur</a> van een woning?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>💰</span>
                    <span>
                      <a href="https://www.vlaanderen.be/belastingen-en-begroting/vlaamse-belastingen/registratiebelasting/verkooprecht/tarieven-in-het-verkooprecht/verlaagd-tarief-in-het-verkooprecht-voor-de-aankoop-van-de-enige-eigen-woning" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline font-medium">Aankoop van een woning</a>?
                      Neem dan gerust contact met ons op door op de onderstaande knop te klikken of door het formulier bovenaan de pagina in te vullen.
                    </span>
                  </li>
                </ul>
                <p>
                  Onze energiedeskundigen leggen je graag alles uit over{" "}
                  <a href="https://ecovalue.be/epc-waarde-verbeteren/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">de EPC waarde</a>{" "}
                  en de bijbehorende tabel. We voeren een nauwkeurige inspectie uit om de EPC waarde van jouw woning te bepalen en geven je een duidelijk rapport. Zo begrijp je precies hoe jouw woning scoort op de EPC waarde schaal.
                </p>
                <p>
                  Wil je de EPC waarde van je woning verbeteren om aan de eisen te voldoen of om je energiekosten te verlagen? Wij bieden{" "}
                  <a href="https://ecovalue.be/diensten-erkende-epc-deskundige/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">advies en begeleiding</a>{" "}
                  om de EPC waarde te optimaliseren. Denk hierbij aan:
                </p>
                <ul className="space-y-2 ml-1">
                  <li className="flex items-start gap-2">
                    <span>🔥</span>
                    <span>
                      <a href="https://www.vaillant.be/consumenten/ons-advies/technologieen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Nieuwe verwarmingssystemen</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>☀️</span>
                    <span>
                      <a href="https://www.livios.be/nl/artikel/40946/zonnepanelen-deze-prijs-betaal-je-gemiddeld-voor-een-pv-installatie/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Zonnepanelen</a>
                    </span>
                  </li>
                </ul>
                <p>
                  Samen zorgen we ervoor dat jouw woning een zo gunstig mogelijke <strong>EPC waarde</strong> behaalt.
                </p>
                <p className="font-medium">
                  De EPC waarde is een belangrijk kenmerk van je woning. Het beinvloedt niet alleen de verkoop- of verhuurwaarde, maar ook je comfort en energiefactuur. Laat ons je helpen om inzicht te krijgen in jouw EPC waarde en de mogelijkheden tot verbetering te ontdekken.
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,36px)] leading-[1.1] tracking-tight text-center mb-10 sm:mb-14">
            Veelgestelde vragen over <em className="text-blue italic">EPC waarden</em>
          </h2>
          <div className="space-y-4 sm:space-y-5">
            {pageFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-line p-5 sm:p-6"
              >
                <summary className="font-heading text-[16px] sm:text-[18px] font-medium cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-muted text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] text-ink-2 leading-relaxed">
                  {faq.answer}
                </p>
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
    </>
  );
}
