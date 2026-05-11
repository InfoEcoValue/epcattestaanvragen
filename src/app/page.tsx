import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { PurposeFilter } from "@/components/sections/PurposeFilter";
import { PricingTable } from "@/components/sections/PricingTable";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema } from "@/components/seo/schemas";
import { BUSINESS } from "@/lib/constants";
import { ArrowRight, Phone } from "lucide-react";

const homeFaqs = [
  {
    question: "Kan ik een EPC attest aanvragen via internet?",
    answer:
      "Ja, dat kan zeker. Bij Ecovalue kun je een epc attest aanvragen door online te starten. Onze erkende energiedeskundige moet wel altijd bij je langskomen voor een fysiek bezoek. Pas daarna maken we het document voor je op. Je regelt dit EPC attest aanvragen heel snel met één klik op onze website. Zodra we jouw aanvraag hebben, bellen we je op om het plaatsbezoek in te plannen.",
  },
  {
    question: "Wat kost een EPC attest aanvragen bij ECOVALUE?",
    answer:
      "De prijzen voor een epc attest aanvragen zijn helder en hangen af van type woning. Bij Ecovalue kun je al een epc attest aanvragen vanaf € 126 (incl. BTW en verplaatsing).",
  },
  {
    question: "Hoe maak ik een afspraak voor de EPC inspectie?",
    answer:
      "Een epc attest aanvragen en een afspraak maken voor de EPC keuring bij Ecovalue is simpel. Je vult het formulier op onze site in, je krijgt binnen 3 dagen een afspraak, onze energiedeskundige bezoekt je woning en je krijgt het officiële EPC attest binnen 24 uur in je mailbox.",
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(homeFaqs)} />
      <Hero />
      <TrustStrip />
      <PurposeFilter />
      <PricingTable />

      {/* Wat kunnen we voor jou betekenen? */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-center mb-10 sm:mb-14">
            Wat kunnen we voor jou <em className="text-blue italic">betekenen?</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* EPC KEURING 24H */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-line overflow-hidden hover:-translate-y-1 transition-transform">
              <Link href="/diensten">
                <Image
                  src="/images/epc-attest-aanvragen.png"
                  alt="EPC attest aanvragen"
                  width={300}
                  height={169}
                  className="w-full object-cover"
                />
              </Link>
              <div className="p-5 sm:p-7">
                <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">EPC KEURING 24H</h3>
                <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-5">
                  Krijg je{" "}
                  <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs/erkende-energiedeskundigen-voor-epc/plaatsbezoek-voor-epc-door-een-energiedeskundige-type-a" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC attest</a>{" "}
                  binnen de 24u na de eerste afspraak. Of het nu een{" "}
                  <Link href="/epc-keuring-prijs" className="text-blue hover:underline">EPC keuring</Link>{" "}
                  is voor verhuur, verkoop of gewoon vrijwillig. Bij{" "}
                  <a href="https://ecovalue.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Ecovalue</a>{" "}
                  waarderen we jouw tijd en gaan we voor jou meteen aan de slag.
                </p>
                <Link
                  href="/?type=studio#aanvragen"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue text-cream font-semibold text-sm hover:bg-blue-2 transition-all"
                >
                  EPC keuring aanvragen
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Advies Energetisch renoveren */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-line overflow-hidden hover:-translate-y-1 transition-transform">
              <Link href="/diensten#energetische-renovatie">
                <Image
                  src="/images/renovatieplicht-epc-attest-aanvragen.png"
                  alt="Renovatieplicht EPC attest aanvragen"
                  width={300}
                  height={169}
                  className="w-full object-cover"
                />
              </Link>
              <div className="p-5 sm:p-7">
                <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">Advies Energetisch renoveren</h3>
                <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-5">
                  Heb jij{" "}
                  <a href="https://ecovalue.be/renovatieplicht-residentiele-gebouwen/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">renovatieplicht</a>{" "}
                  en weet je niet waar beginnen? We begeleiden je stap per stap. Tot aan jouw nieuwe{" "}
                  <a href="https://ecovalue.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC label</a>{" "}
                  met een een lagere EPC waarde. Bij{" "}
                  <Link href="/over-ons" className="text-blue hover:underline">Ecovalue</Link>{" "}
                  kan je ook terecht voor advies en dossierbeheer voor jouw premies zoals de{" "}
                  <a href="https://www.vlaanderen.be/premies-voor-renovatie/mijn-epc-labelpremie" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC labelpremie</a>{" "}
                  en{" "}
                  <a href="https://www.vlaanderen.be/premies-voor-renovatie/mijn-verbouwpremie" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">MijnVerbouwPremie</a>.
                </p>
                <Link
                  href="/diensten#energetische-renovatie"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue text-cream font-semibold text-sm hover:bg-blue-2 transition-all"
                >
                  Advies aanvragen
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* EPC attest simulatie */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-line overflow-hidden hover:-translate-y-1 transition-transform">
              <Link href="/diensten#epc-attest-simulatie">
                <Image
                  src="/images/epc-keuring-prijs-vraagteken.png"
                  alt="EPC keuring prijs vraagteken"
                  width={300}
                  height={169}
                  className="w-full object-cover"
                />
              </Link>
              <div className="p-5 sm:p-7">
                <h3 className="font-heading text-[18px] sm:text-[22px] font-medium mb-3">EPC attest simulatie</h3>
                <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-5">
                  EPC attest simulatie voor of tijdens energetische renovaties: Een snelle en accurate{" "}
                  <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">berekening van de toekomstige EPC waarde</Link>{" "}
                  van jouw woning
                </p>
                <Link
                  href="/diensten#epc-attest-simulatie"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue text-cream font-semibold text-sm hover:bg-blue-2 transition-all"
                >
                  EPC simulatie aanvragen
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kan ik een EPC attest aanvragen via internet? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(28px,4vw,56px)] leading-[1.08] tracking-tight mb-6 sm:mb-8">
            Kan ik een EPC attest aanvragen <em className="text-blue italic">via internet?</em>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-ink-2 leading-relaxed max-w-4xl">
            Ja, dat kan zeker. Bij Ecovalue kun je een{" "}
            <a href="/?type=studio#aanvragen" className="text-blue hover:underline">online aanvragen via ons formulier</a>.
            Onze erkende energiedeskundige moet wel altijd bij je langskomen voor een{" "}
            <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs/erkende-energiedeskundigen-voor-epc/plaatsbezoek-voor-epc-door-een-energiedeskundige-type-a" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">fysiek bezoek</a>.
            Pas daarna maken we het document voor je op.
            Je regelt de aanvraag heel snel met één klik op onze website.
            Zodra we jouw aanvraag hebben, bellen we je op om het plaatsbezoek in te plannen.
          </p>
        </div>
      </section>

      {/* Wat kost een EPC attest aanvragen bij ECOVALUE? */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
                Wat kost een EPC attest aanvragen bij <em className="text-blue italic">ECOVALUE?</em>
              </h2>
              <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
                <p>
                  De tarieven zijn helder en hangen af van het type woning. Bij{" "}
                  <a href="https://ecovalue.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Ecovalue</a>{" "}
                  start je al vanaf € 126 (incl. BTW en verplaatsing). Hieronder zie je een overzicht van onze prijzen.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl border border-line overflow-hidden">
              <table className="w-full text-[14px] sm:text-[15px]">
                <thead>
                  <tr className="bg-blue text-cream">
                    <th className="text-left px-5 py-3.5 font-heading font-medium">Type Woning</th>
                    <th className="text-left px-5 py-3.5 font-heading font-medium">Prijs vanaf</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Studio</td><td className="px-5 py-3.5 font-semibold">€ 126</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Appartement</td><td className="px-5 py-3.5 font-semibold">€ 174</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Rijwoning</td><td className="px-5 py-3.5 font-semibold">€ 212</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Halfopen bebouwing</td><td className="px-5 py-3.5 font-semibold">€ 234</td></tr>
                  <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Open bebouwing</td><td className="px-5 py-3.5 font-semibold">€ 270</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-white rounded-xl border border-line max-w-3xl">
            <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed">
              Wil je ook een{" "}
              <a href="https://ecovalue.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">asbestattest en/of elektische keuring</a>?
              Combineer dit dan met een{" "}
              <a href="/?type=studio#aanvragen" className="text-blue hover:underline">EPC keuring</a>{" "}
              en plan <strong>meteen</strong> <strong>alle keuringen</strong> in.
            </p>
          </div>
        </div>
      </section>

      {/* Hoe maak ik een afspraak voor de EPC inspectie? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
            Hoe maak ik een afspraak voor de <em className="text-blue italic">EPC inspectie?</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8 sm:mb-10 max-w-3xl">
            Een afspraak plannen bij ECOVALUE is simpel. Je volgt deze stappen:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="w-10 h-10 rounded-full bg-blue text-cream grid place-items-center font-heading font-semibold text-lg mb-4">1</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Online aanvraag</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Je vult het{" "}
                <a href="/?type=studio#aanvragen" className="text-blue hover:underline">formulier bovenaan deze pagina</a>{" "}
                in.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="w-10 h-10 rounded-full bg-blue text-cream grid place-items-center font-heading font-semibold text-lg mb-4">2</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Snelle planning</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                We verwerken je vraag heel snel. Je krijgt binnen 3 dagen een afspraak voor de EPC keuring.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="w-10 h-10 rounded-full bg-blue text-cream grid place-items-center font-heading font-semibold text-lg mb-4">3</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Het plaatsbezoek</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Onze{" "}
                <a href="https://www.vlaanderen.be/energieprestatiecertificaten-epcs/erkende-energiedeskundigen-voor-epc" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiedeskundige</a>{" "}
                bezoekt je woning. Dit duurt ongeveer 45 tot 60 minuten, afhankelijk van de grootte en complexiteit van de woning.
              </p>
            </div>
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="w-10 h-10 rounded-full bg-blue text-cream grid place-items-center font-heading font-semibold text-lg mb-4">4</div>
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Ontvangst attest</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                We verwerken alle data. Je krijgt het{" "}
                <a href="https://ecovalue.be/epc-attest-prijs/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">officiële EPC attest binnen 24</a>{" "}
                uur in je mailbox.
              </p>
            </div>
          </div>
          <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-blue text-cream rounded-xl sm:rounded-2xl text-center">
            <p className="font-heading text-[18px] sm:text-[22px] font-medium">
              <Link href="/epc-keuring-prijs" className="text-gold hover:underline">EPC Keuring binnen de 3 dagen - Jouw EPC attest 24u later</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Waarom EPC attest aanvragen bij ECOVALUE? */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight mb-10 sm:mb-14">
            Waarom EPC attest aanvragen bij <em className="text-blue italic">ECOVALUE?</em>
          </h2>

          {/* Razendsnelle EPC keuring zonder meerprijs */}
          <div className="mb-10 sm:mb-14">
            <h3 className="font-heading text-[20px] sm:text-[26px] font-medium mb-6 sm:mb-8">
              <Link href="/diensten#epc-keuring" className="hover:text-blue transition-colors">Razendsnelle EPC keuring zonder meerprijs</Link>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <div className="text-2xl mb-3">📅</div>
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Snelle service</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Een afspraak voor jouw <Link href="/epc-keuring-prijs" className="text-blue hover:underline"><strong>EPC keuring</strong></Link>{" "}
                  binnen de 3 dagen garandeert een efficiënte dienstverlening. Uw{" "}
                  <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">EPC waarde berekenen</Link>{" "}
                  doen we aldus binnen een <strong>maximumtermijn</strong> van 4 dagen na de aanvraag. Onze{" "}
                  <Link href="/epc-keuring-prijs" className="text-blue hover:underline">EPC keuringen</Link>{" "}
                  hebben een kostprijs vanaf 126€ (incl. BTW en verplaatsing).
                </p>
              </div>
              <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <div className="text-2xl mb-3">🏡</div>
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Onmiddellijke resultaten</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Met uw{" "}
                  <Link href="/veelgestelde-vragen" className="text-blue hover:underline">EPC attest</Link>{" "}
                  binnen 24 uur na de EPC keuring weet je snel wat de{" "}
                  <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">EPC-waarde</Link>{" "}
                  van je woning is, wat cruciaal is voor het voldoen aan de{" "}
                  <Link href="/renovatieplicht" className="text-blue hover:underline">renovatieplicht</Link>{" "}
                  in het geval vaan noodzakelijke{" "}
                  <Link href="/epc-waarde-verbeteren" className="text-blue hover:underline">verbeteringen van de EPC waarde</Link>.
                  Hier kan je alvast meer lezen over hoe we jouw{" "}
                  <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">EPC waarde berekenen</Link>.
                </p>
              </div>
              <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
                <div className="text-2xl mb-3">🚀</div>
                <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-2">Efficiënte afhandeling</h4>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  Snelle{" "}
                  <Link href="/epc-keuring-prijs" className="text-blue hover:underline">EPC keuring</Link>{" "}
                  stelt u in staat om snel actie te ondernemen op basis van de verkregen informatie, bijvoorbeeld voor een{" "}
                  <Link href="/renovatieplicht" className="text-blue hover:underline">energetische renovatie</Link>{" "}
                  om te voldoen aan de{" "}
                  <Link href="/renovatieplicht" className="text-blue hover:underline">renovatieplicht</Link>.
                  Bij een EPC waarde E of F ben je verplicht om jouw woning te renoveren. Hoewel deze regels niet worden verstrengt vanaf 2028,{" "}
                  <a href="https://www.vlaanderen.be/een-huis-of-appartement-kopen/renovatieverplichting-voor-residentiele-gebouwen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">blijft de verplichting bestaan</a>.
                  Zo verbeter je{" "}
                  <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">energieprestaties</Link>{" "}
                  van jouw woning in geen tijd, deze{" "}
                  <Link href="/epc-waarde-verbeteren" className="text-blue hover:underline">EPC waarde verbeteringen</Link>{" "}
                  kan je dan aantonen op basis van een nieuwe EPC attest.
                </p>
              </div>
            </div>
            <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mt-6 sm:mt-8">
              Benieuwd naar onze{" "}
              <Link href="/epc-keuring-prijs" className="text-blue hover:underline">EPC keuring prijs</Link>{" "}
              per type woning? Hier kan je alvast jouw{" "}
              <a href="#aanvragen" className="text-blue hover:underline">EPC attest aanvragen</a>.
            </p>
          </div>

          {/* Ervaring in de bouwsector */}
          <div className="mb-10 sm:mb-14">
            <h3 className="font-heading text-[20px] sm:text-[26px] font-medium mb-6 sm:mb-8">
              <Link href="/diensten#energetische-renovatie" className="hover:text-blue transition-colors">Ervaring in de bouwsector</Link>
            </h3>
            <div className="p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-2xl mb-3">🏗️</div>
              <h4 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">Technische expertise</h4>
              <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
                <p>
                  Dankzij de achtergrond in de bouwsector van <strong>Ermin Huskic</strong>, erkend energiedeskundige type A (<Link href="/over-ons" className="text-blue hover:underline">VEKA EP22594</Link>), kunnen we je advies verlenen voor jouw{" "}
                  <a href="https://energyking.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energetische renovaties</a>{" "}
                  dat ook technisch uitvoerbaar is. De{" "}
                  <a href="https://ecovalue.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC label</a>{" "}
                  advies op jouw standaard EPC attest wordt eigenlijk opgemaakt door de software van het Vlaams Energie- en Klimaatagentschap, de energiedeskundige kan er zelf niets aan doen. Maar er zijn meer mogelijkheden voor{" "}
                  <a href="https://www.vlaanderen.be/een-huis-verbouwen/ingrijpende-energetische-renovatie" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energetische renovaties</a>{" "}
                  dan wat de software zegt…
                </p>
                <p>
                  En we geven je EPC label advies voor jouw specifieke situatie. Er zijn namelijk verschillende renovaties die je kan doen om de EPC label te verbeteren zonder dat je de volgorde volgt dat automatisch wordt gemaakt door de software van de overheid.
                </p>
                <p>
                  Daarnaast kunnen we je meteen vertellen hoe de energetische renovaties technisch kunnen worden uitgevoerd. Nog een extraatje bovenop je{" "}
                  <Link href="/epc-keuring-prijs" className="text-blue hover:underline">EPC keuring</Link>..
                </p>
              </div>
            </div>
          </div>

          {/* Onze klanten waarderen onze grondigheid */}
          <div>
            <h3 className="font-heading text-[20px] sm:text-[26px] font-medium mb-6 sm:mb-8">
              <Link href="/diensten#energetische-renovatie" className="hover:text-blue transition-colors">Onze klanten waarderen onze grondigheid</Link>
            </h3>
            <div className="p-5 sm:p-8 bg-white rounded-xl sm:rounded-2xl border border-line">
              <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
                <p>
                  De klanten die bij ons hun{" "}
                  <a href="#aanvragen" className="text-blue hover:underline">EPC attest aanvragen</a>{" "}
                  zijn tevreden omdat we de tijd nemen om alles goed na te kijken bij jouw{" "}
                  <a href="https://ecovalue.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC attest aanvragen</a>.
                  Geen haast, geen slordigheden – zo ben jij zeker dat er niets vergeten wordt tijdens het plaatsbezoek.
                </p>
                <p>Vaak gemaakte fouten zijn bijvoorbeeld:</p>
                <ul className="space-y-3 ml-1">
                  <li className="flex items-start gap-2">
                    <span>🪜</span>
                    <span>
                      Het niet zien van{" "}
                      <a href="https://blog.xenadvies.be/2024/06/hoeveel-zakt-de-epc-bij-dakisolatie.html" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">dakisolatie</a>{" "}
                      omdat de toegang moeilijk lijkt – terwijl{" "}
                      <a href="https://www.help-ik-isoleer.be/dakisolatie/verplicht/#:~:text=5-,Dakisolatie%20verplicht%20bij%20verkoop?,waard%20is%20om%20te%20overwegen." target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">dakisolatie enorm belangrijk is voor het EPC attest</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🔥</span>
                    <span>
                      Het niet opzoeken van de juiste ketelgegevens, terwijl het{" "}
                      <a href="https://www.vlaanderen.be/epb-pedia/technieken/verwarming-koeling-en-sanitair-warm-water/opwekking/ketel/ketel-invoergegevens-epb-software-huidig/ketel-invoergegevens-epb-software-voor-bouwaanvragen-van-01-01-12-tem-31-12-15#:~:text=Tijdslijn-,Rendement%20bij%2030%25%20deellast,of%20opvragen%20bij%20de%20fabrikant." target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">rendement bij deellast</a>{" "}
                      belangrijk is
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🪟</span>
                    <span>
                      Het niet nakijken van offertes of facturen van ramen, waardoor de exacte Uw-waarde ontbreekt –{" "}
                      <a href="https://bouwplannen.be/verbeter-je-epc-met-de-juiste-ramen/#:~:text=De%20impact%20van%20ramen%20op,en%20een%20slechtere%20EPC%2Dscore." target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">hier</a>{" "}
                      zie alvast meer over het belang voor de EPC attest van de{" "}
                      <a href="https://bouwplannen.be/verbeter-je-epc-met-de-juiste-ramen/#:~:text=De%20impact%20van%20ramen%20op,en%20een%20slechtere%20EPC%2Dscore." target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Uw waarde van de ramen</a>
                    </span>
                  </li>
                </ul>
                <p>Bij conclusie: wij nemen rustig de tijd voor elk detail. Dat maakt het verschil in jouw EPC-score ✅</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat is een EPC attest? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div>
              <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5 sm:mb-6">
                Wat is een <em className="text-blue italic">EPC attest?</em>
              </h2>
              <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
                <p>
                  <a href="https://www.vlaanderen.be/epc-voor-een-residentiele-eenheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC attest is de afkorting voor energieprestatiecertificaat.</a>
                </p>
                <p>
                  De{" "}
                  <Link href="/veelgestelde-vragen" className="text-blue hover:underline">EPC</Link>{" "}
                  attest van je woning geeft je inzicht in de{" "}
                  <a href="https://www.vlaanderen.be/epc-voor-een-residentiele-eenheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">energiezuinigheid</a>{" "}
                  en jouw EPC label 🏠.
                </p>
                <p>
                  Een betere{" "}
                  <Link href="/epc-waarden-tabel" className="text-blue hover:underline">EPC waarde</Link>{" "}
                  betekent meer wooncomfort, minder energiekosten en{" "}
                  <a href="https://www.nieuwsblad.be/cnt/dmf20250111_93233840" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">hogere financiële waarde</a>{" "}
                  van je woning 💡.
                </p>
                <p>
                  EPC waarde E of F betekent dat je verplicht moet renoveveren, hoewel de{" "}
                  <Link href="/renovatieplicht" className="text-blue hover:underline">renovatieplicht</Link>{" "}
                  <a href="https://www.vlaanderen.be/een-huis-of-appartement-kopen/renovatieverplichting-voor-residentiele-gebouwen" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">recent is afgezwakt</a>.
                </p>
                <p>De EPC label gaat van A+ tot F.</p>
                <p>
                  Het resultaat van de{" "}
                  <Link href="/epc-keuring-prijs" className="text-blue hover:underline">EPC keuring</Link>{" "}
                  informeert de potentiële kopers en huurders over de{" "}
                  <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">EPC waarde</Link>{" "}
                  van de woning. Het is daarom{" "}
                  <a href="https://www.vlaanderen.be/energieprestatiecertificaat-epc-bij-overdracht-of-verhuur-van-een-wooneenheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">wettelijk verplicht</a>{" "}
                  bij verkoop en verhuur, als ook bij elke overdracht van eigendom! 📋
                </p>
                <p>
                  Je kan ook een{" "}
                  <Link href="/epc-attest" className="text-blue hover:underline">EPC attest</Link>{" "}
                  aanvragen als bewijs voor{" "}
                  <a href="https://www.vlaanderen.be/premies-voor-renovatie/mijn-epc-labelpremie" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">Mijn EPC-labelpremie</a>{" "}
                  en{" "}
                  <a href="https://www.vlaanderen.be/premies-voor-renovatie/mijn-verbouwpremie" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">MijnVebrouwPremie</a>{" "}
                  🔖 wanneer uitgevaardigd door een{" "}
                  <a href="https://ecovalue.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">erkende EPC deskundige</a>.
                </p>
                <p>
                  Onze{" "}
                  <Link href="/diensten" className="text-blue hover:underline">EPC keuring prijs begint vanaf 126€.</Link>
                </p>
                <p>
                  Je kan hier jouw{" "}
                  <a href="#aanvragen" className="text-blue hover:underline">EPC attest aanvragen</a>.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/wat-is-een-EPC-attest.png"
                alt="Wat is een EPC attest"
                width={1024}
                height={576}
                className="rounded-xl sm:rounded-2xl w-full max-w-[520px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gemiddelde invloed van energetische renovaties op EPC-waarden */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-8 sm:mb-12">
            Invloed van energetische renovaties op je <em className="text-blue italic"><Link href="/epc-waarden-tabel">EPC-label</Link></em>
          </h2>
          <div className="bg-white rounded-xl sm:rounded-2xl border border-line overflow-hidden">
            <table className="w-full text-[14px] sm:text-[15px]">
              <thead>
                <tr className="bg-blue text-cream">
                  <th className="text-left px-5 py-3.5 font-heading font-medium">Renovatie</th>
                  <th className="text-left px-5 py-3.5 font-heading font-medium">Indicatieve invloed op EPC waarde*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Isolatie buitengevel</td><td className="px-5 py-3.5 font-semibold text-blue">68%</td></tr>
                <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Isolatie dak</td><td className="px-5 py-3.5 font-semibold text-blue">72%</td></tr>
                <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Hoogrendementsbeglazing</td><td className="px-5 py-3.5 font-semibold text-blue">66%</td></tr>
                <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Vloerisolatie</td><td className="px-5 py-3.5 font-semibold text-blue">37%</td></tr>
                <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Geheel nieuwe ramen</td><td className="px-5 py-3.5 font-semibold text-blue">82%</td></tr>
                <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Plaatsing zonnepanelen</td><td className="px-5 py-3.5 font-semibold text-blue">62%</td></tr>
                <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Plaatsing nieuwe condensatieketel</td><td className="px-5 py-3.5 font-semibold text-blue">72%</td></tr>
                <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Plaatsing warmtepomp</td><td className="px-5 py-3.5 font-semibold text-blue">82%</td></tr>
                <tr className="hover:bg-cream/50 transition-colors"><td className="px-5 py-3.5">Plaatsing ventilatiesysteem D met warmteterugwinning</td><td className="px-5 py-3.5 font-semibold text-blue">89%</td></tr>
              </tbody>
            </table>
            <p className="px-5 py-3 text-[11px] sm:text-[12px] text-muted border-t border-line">
              Indicatieve inschatting op basis van{" "}
              <a href="https://www.vlaanderen.be/epb-pedia" target="_blank" rel="noopener noreferrer" className="hover:underline">EPB-berekeningsmethodiek (VEKA)</a>.
              Effectieve verbetering varieert per woning en beginsituatie.
            </p>
          </div>
        </div>
      </section>

      {/* Na de EPC keuring... hoe wordt zo'n EPC attest geinterpeteerd? */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(28px,4vw,56px)] leading-[1.08] tracking-tight mb-12 sm:mb-16">
            Na de EPC keuring krijg je jouw EPC attest, maar hoe wordt zo&apos;n EPC attest <em className="text-blue italic">geinterpeteerd?</em> Wat met alle EPC labels en punten?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Wat is een EPC-attest? */}
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">Wat is een EPC-attest?</h3>
              <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                Een EPC-attest, ofwel een Energieprestatiecertificaat, is een document dat de{" "}
                <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">EPC-waarde</Link>{" "}
                van een gebouw beoordeelt. De kostprijs van de EPC keuring is afhankelijk van het type woning. Het wordt opgesteld door een{" "}
                <a href="https://ecovalue.be/" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">erkende energiedeskundige</a>{" "}
                na een grondige{" "}
                <Link href="/veelgestelde-vragen" className="text-blue hover:underline">EPC keuring</Link>{" "}
                van het gebouw.
              </p>
            </div>

            {/* Basisinformatie EPC-keuring */}
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">Basisinformatie EPC-keuring:</h3>
              <div className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed space-y-3">
                <p>
                  Het eerste dat je moet controleren op een EPC-attest is de basisinformatie, zoals het adres van het gebouw, de datum van de{" "}
                  <Link href="/diensten#epc-keuring" className="text-blue hover:underline">EPC-keuring</Link>.
                </p>
                <p>
                  Het bevat ook altijd de naam en contactgegevens van de energiedeskundige die de EPC-keuring heeft uitgevoerd.
                </p>
              </div>
            </div>

            {/* EPC waarde van je woning oftewel de EPC-label */}
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">EPC waarde van je woning oftewel de EPC-label</h3>
              <div className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed space-y-3">
                <p>
                  De belangrijkste informatie op een EPC-attest is de EPC-label. Deze{" "}
                  <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">EPC-waarde</Link>{" "}
                  wordt uitgedrukt in letters, van EPC-F naar EPC-a, en het geeft aan hoe energiezuinig het gebouw is.
                </p>
                <p>
                  Vergelijk de EPC-waarde van het gebouw met de gemiddelde scores voor gelijkaardige gebouwen in België. Ramen en dakisolatie hebben een zeer belangrijke invloed op de{" "}
                  <Link href="/epc-waarde-verbeteren" className="text-blue hover:underline">EPC waarde</Link>{" "}
                  van je woning
                </p>
                <p>
                  Deze informatie kan je helpen om de relatieve energiezuinigheid van het gebouw te beoordelen bij de{" "}
                  <Link href="/diensten" className="text-blue hover:underline">EPC-keuring</Link>,
                  als ook om te bepalen welke{" "}
                  <Link href="/diensten#energetische-renovatie" className="text-blue hover:underline">energetische renovaties</Link>{" "}
                  prioritair zijn voor jou.
                </p>
              </div>
            </div>

            {/* Aanbevelingen voor verhoging EPC waarden */}
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">Aanbevelingen voor verhoging EPC waarden</h3>
              <div className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed space-y-3">
                <p>
                  Een{" "}
                  <a href="https://www.vlaanderen.be/epc-voor-een-residentiele-eenheid" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC-attest</a>{" "}
                  bevat vaak aanbevelingen voor energiebesparende maatregelen die kunnen worden genomen om de{" "}
                  <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">EPC-waarden</Link>{" "}
                  van het gebouw te verbeteren.
                </p>
                <p>
                  Deze aanbevelingen kunnen variëren van eenvoudige gedragsveranderingen tot grootschalige{" "}
                  <Link href="/diensten#energetische-renovatie" className="text-blue hover:underline">energetische renovaties</Link>{" "}
                  de de{" "}
                  <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">EPC-waarde</Link>{" "}
                  van je woning aanzienlijk verhogen.
                </p>
                <p>
                  Let op de aanbevolen maatregelen en overweeg welke haalbaar en kosteneffectief zijn voor de EPC-waarde na de{" "}
                  <Link href="/diensten#epc-keuring" className="text-blue hover:underline">EPC keuring</Link>.
                </p>
              </div>
              <Link
                href="/diensten"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-lg border border-line-2 text-ink font-semibold text-sm hover:bg-cream hover:border-blue transition-all"
              >
                EPC keuring prijs
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Grafieken en tabellen EPC-waarden */}
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">Grafieken en tabellen EPC-waarden:</h3>
              <div className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed space-y-3">
                <p>
                  EPC-attesten bevatten soms grafieken en tabellen die de{" "}
                  <Link href="/epc-waarde-berekenen" className="text-blue hover:underline">EPC-waarden</Link>{" "}
                  van het gebouw visualiseren. Deze kunnen bijvoorbeeld de verdeling van energieverbruik per toepassing tonen of de impact van energiebesparende maatregelen op de{" "}
                  <a href="https://bouw-energie.be/nl-be/bereken/epc" target="_blank" rel="noopener noreferrer" className="text-blue hover:underline">EPC-waarden</a>{" "}
                  van het gebouw illustreren.
                </p>
                <p>
                  Neem de tijd om deze grafieken en tabellen te bestuderen, omdat ze waardevolle inzichten kunnen bieden in de EPC-waarden van het gebouw na de{" "}
                  <Link href="/diensten#epc-keuring" className="text-blue hover:underline">EPC keuring</Link>.
                </p>
              </div>
              <div className="mt-4">
                <Image
                  src="/images/epc-waarden-huis-na-epc-keuring.png"
                  alt="EPC waarden huis na EPC keuring"
                  width={300}
                  height={169}
                  className="rounded-lg w-full max-w-[280px]"
                />
              </div>
            </div>

            {/* Geldigheidsduur EPC-keuring */}
            <div className="p-5 sm:p-7 bg-white rounded-xl sm:rounded-2xl border border-line">
              <h3 className="font-heading text-[16px] sm:text-[18px] font-medium mb-3">Geldigheidsduur EPC-keuring en advies over EPC-waarden:</h3>
              <div className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed space-y-3">
                <p>
                  Controleer de geldigheidsduur van de EPC-attest, aangezien deze beperkt is tot{" "}
                  <Link href="/epc-attest-geldigheid" className="text-blue hover:underline">10 jaar</Link>{" "}
                  na de{" "}
                  <Link href="/diensten" className="text-blue hover:underline">EPC-keuring</Link>.
                  Als het EPC-attest verouderd is, kan het nodig zijn om een nieuwe epc keuring te laten uitvoeren. De kostprijs van een EPC keuring bij ECOVALUE loopt vanaf 126€ voor studios (incl. BTW en verplaatsing).
                </p>
                <p>
                  Overweeg het advies van de{" "}
                  <Link href="/over-ons" className="text-blue hover:underline">erkende EPC energiedeskundige</Link>{" "}
                  en bespreek de mogelijke{" "}
                  <Link href="/diensten#energetische-renovatie" className="text-blue hover:underline">energetische renovaties</Link>{" "}
                  na de EPC keuring.
                </p>
              </div>
            </div>
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
              href="/?type=studio#aanvragen"
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
