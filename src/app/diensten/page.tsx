import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PRICES } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from "@/components/seo/schemas";
import { ArrowRight, Phone, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Diensten — EPC keuring, renovatieadvies en simulatie | ECOVALUE",
  description:
    "ECOVALUE biedt EPC keuringen, energieadvies bij renovatieplicht en EPC attest simulaties. Erkend energiedeskundige type A. Tarieven vanaf €126 incl. BTW.",
  openGraph: {
    title: "Diensten — EPC keuring, renovatieadvies en EPC simulatie",
    description:
      "EPC keuring, renovatieadvies en EPC attest simulatie door erkend energiedeskundige type A. Tarieven vanaf €126 incl. BTW en verplaatsing.",
    url: `${BUSINESS.website}/diensten`,
    type: "website",
  },
};

const dienstenFaqs = [
  {
    question: "Wat is inbegrepen in de EPC keuring?",
    answer:
      "De EPC keuring omvat een grondige opname van de woning: isolatie, verwarmingsinstallatie, ventilatiesysteem, ramen en andere energetische kenmerken. Na het plaatsbezoek ontvangt u binnen 24 uur het officieel EPC attest.",
  },
  {
    question: "Wat is een EPC attest simulatie?",
    answer:
      "Een EPC simulatie berekent de toekomstige EPC waarde van uw woning na geplande renovaties. Zo weet u vooraf welk EPC label u zult behalen en of dit voldoet aan de renovatieplicht.",
  },
  {
    question: "Biedt ECOVALUE ook renovatieadvies?",
    answer:
      "Ja. Op basis van uw EPC keuring of simulatie geven wij technisch renovatieadvies: welke maatregelen (dakisolatie, ramen, warmtepomp) het meeste impact hebben op uw EPC label en kostprijs.",
  },
];

export default function DienstenPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(dienstenFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "Diensten", url: `${BUSINESS.website}/diensten` },
        ])}
      />
      <SchemaOrg
        schema={buildServiceSchema(
          "EPC keuring voor residentiële gebouwen",
          "Erkend EPC attest voor studio, appartement, rijwoning, halfopen en open bebouwing in Vlaanderen. Plaatsbezoek binnen 3 dagen, attest binnen 24 uur.",
          PRICES.rijwoning.price
        )}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            Onze diensten
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream mb-4">
            EPC keuring, renovatieadvies{" "}
            <em className="text-gold italic">en meer</em>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-cream/75 max-w-[540px] leading-relaxed">
            Alles wat u nodig heeft voor uw EPC attest — van eerste keuring tot
            renovatiebegeleiding.
          </p>
        </div>
      </section>

      {/* EPC Keuring */}
      <section className="bg-paper" id="epc-keuring">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div>
              <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold-2 flex items-center gap-2.5 mb-3">
                <span className="w-5 h-px bg-gold-2" />
                Dienst 01
              </div>
              <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5">
                EPC keuring <em className="text-blue italic">voor uw woning</em>
              </h2>
              <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 mb-8">
                <p>
                  Een EPC keuring is wettelijk verplicht bij verkoop, verhuur of
                  elke overdracht van een woning in Vlaanderen. Onze erkende
                  energiedeskundige type A voert een grondige opname uit en
                  bezorgt u het officieel{" "}
                  <Link href="/epc-attest" className="text-blue hover:underline">
                    EPC attest
                  </Link>{" "}
                  binnen 24 uur.
                </p>
                <ul className="space-y-2 mt-2">
                  {[
                    "Plaatsbezoek gegarandeerd binnen 3 werkdagen",
                    "Officieel EPC attest binnen 24 uur na bezoek",
                    "Grondige opname: isolatie, verwarming, ventilatie, ramen",
                    "Inclusief renovatieadvies op basis van uw EPC score",
                    "Alle prijzen incl. BTW en verplaatsing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[13px] sm:text-[14px]">
                      <Check className="w-4 h-4 text-blue shrink-0 mt-0.5" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] hover:bg-blue-2 transition-all"
              >
                EPC keuring aanvragen
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pricing table */}
            <div className="bg-white rounded-xl sm:rounded-2xl border border-line overflow-hidden">
              <div className="px-5 py-4 bg-blue text-cream">
                <h3 className="font-heading text-[15px] sm:text-[17px] font-medium">
                  Tarieven (incl. BTW en verplaatsing)
                </h3>
              </div>
              <table className="w-full text-[13px] sm:text-[14px]">
                <tbody className="divide-y divide-line">
                  {Object.entries(PRICES).map(([key, item]) => (
                    <tr key={key} className="hover:bg-cream/40 transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="font-medium">{item.label}</div>
                        <div className="text-[11px] text-muted mt-0.5">{item.desc}</div>
                      </td>
                      <td className="px-5 py-3.5 font-semibold text-blue text-right whitespace-nowrap">
                        €{item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="px-5 py-4 bg-cream/60 border-t border-line">
                <Link
                  href="/epc-keuring-prijs"
                  className="text-[13px] text-blue hover:underline font-medium"
                >
                  Meer over onze tarieven →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energetische Renovatie */}
      <section className="bg-cream" id="energetische-renovatie">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold-2 flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-gold-2" />
            Dienst 02
          </div>
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5">
            Advies bij <em className="text-blue italic">energetische renovatie</em>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
            <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
              <p>
                Heeft uw woning een EPC label E of F? Dan geldt de
                renovatieplicht. U moet binnen 6 jaar na aankoop renoveren tot
                minimaal label D. Wij begeleiden u bij het bepalen van de meest
                effectieve maatregelen.
              </p>
              <p>
                Dankzij onze bouwexpertise adviseren wij niet alleen welke
                renovaties uw EPC label verbeteren, maar ook hoe ze technisch
                correct worden uitgevoerd — inclusief begeleiding voor premies
                zoals de EPC-labelpremie en MijnVerbouwPremie.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue text-cream font-semibold text-sm hover:bg-blue-2 transition-all mt-2"
              >
                Renovatieadvies aanvragen
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { emoji: "🏠", title: "Dakisolatie", impact: "−72% energie" },
                { emoji: "🪟", title: "Nieuwe ramen", impact: "−82% energie" },
                { emoji: "🧱", title: "Muurisolatie", impact: "−68% energie" },
                { emoji: "🔥", title: "Warmtepomp", impact: "−82% energie" },
              ].map(({ emoji, title, impact }) => (
                <div key={title} className="p-4 sm:p-5 bg-white rounded-xl border border-line">
                  <div className="text-2xl mb-2">{emoji}</div>
                  <div className="font-heading text-[14px] sm:text-[15px] font-medium">{title}</div>
                  <div className="text-[12px] sm:text-[13px] text-blue font-semibold mt-0.5">{impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EPC Simulatie */}
      <section className="bg-paper" id="epc-attest-simulatie">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold-2 flex items-center gap-2.5 mb-3">
            <span className="w-5 h-px bg-gold-2" />
            Dienst 03
          </div>
          <h2 className="font-heading font-medium text-[clamp(24px,3vw,40px)] leading-[1.1] tracking-tight mb-5">
            EPC attest <em className="text-blue italic">simulatie</em>
          </h2>
          <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 max-w-3xl mb-8">
            <p>
              Een EPC simulatie berekent de verwachte EPC waarde van uw woning
              na geplande renovaties — nog vóór u de eerste factuur betaalt. Zo
              weet u precies welk label u zult behalen en of u voldoet aan de
              renovatieplicht.
            </p>
            <p>
              Ideaal als voorbereiding op een renovatie, of als u wilt weten
              welke ingreep het meeste impact heeft op uw EPC score.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] bg-blue text-cream font-semibold text-[15px] hover:bg-blue-2 transition-all"
            >
              EPC simulatie aanvragen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[10px] border border-line-2 text-ink font-semibold text-[15px] hover:bg-cream hover:border-blue transition-all"
            >
              <Phone className="w-4 h-4 text-blue" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,34px)] leading-[1.1] tracking-tight text-center mb-10">
            Veelgestelde vragen over onze <em className="text-blue italic">diensten</em>
          </h2>
          <div className="space-y-4">
            {dienstenFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-line p-5 sm:p-6"
              >
                <summary className="font-heading text-[15px] sm:text-[17px] font-medium cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-muted text-xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <p className="mt-3 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
