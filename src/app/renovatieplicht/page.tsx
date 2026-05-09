import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PRICES } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildFaqSchema, buildBreadcrumbSchema } from "@/components/seo/schemas";
import { Breadcrumb } from "@/components/sections/Breadcrumb";
import { LastUpdated } from "@/components/sections/LastUpdated";
import { ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Renovatieplicht Vlaanderen 2026: wat moet u doen bij label E of F?",
  description:
    "38% van de Vlaamse woningen heeft EPC label E of F. U bent verplicht te renoveren tot label D binnen 6 jaar na aankoop. Subsidies tot €7.000. Boetes tot €5.000. Alles uitgelegd.",
  openGraph: {
    title: "Renovatieplicht Vlaanderen 2026: wat moet u doen bij label E of F?",
    description:
      "6 jaar om te renoveren tot label D. Subsidies tot €7.000 via MijnVerbouwPremie. Boetes tot €5.000. Wat u nu al moet weten.",
    url: `${BUSINESS.website}/renovatieplicht`,
    type: "article",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Renovatieplicht Vlaanderen 2026: wat moet u doen bij label E of F?",
  datePublished: "2026-05-09",
  dateModified: "2026-05-09",
  author: {
    "@type": "Person",
    name: "Ermin Huskic",
    jobTitle: "Erkend energiedeskundige type A",
    identifier: "VEKA EP22594",
  },
  publisher: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.website,
  },
};

const pageFaqs = [
  {
    question: "Wanneer geldt de renovatieplicht in Vlaanderen?",
    answer:
      "De renovatieplicht geldt vanaf de dag dat u een woning met EPC label E of F aankoopt. U heeft dan 6 jaar om te renoveren tot minimaal EPC label D. De verplichting geldt voor alle residentiële gebouwen in Vlaanderen: woningen, appartementen, studio's. Bij verkoop of erfpacht van een gebouw met label E of F gaat de verplichting mee over op de nieuwe eigenaar.",
  },
  {
    question: "Wat moet ik bereiken om aan de renovatieplicht te voldoen?",
    answer:
      "U moet uw woning renoveren tot minimaal EPC label D, wat overeenkomt met een EPC waarde van maximaal 400 kWh/m² per jaar. Na de renovatie vraagt u een nieuw EPC attest aan bij een erkend energiedeskundige type A. Dat attest is uw officieel bewijs dat u aan de verplichting voldoet en is tegelijk verplicht voor premieaanvragen zoals MijnVerbouwPremie en de EPC-labelpremie.",
  },
  {
    question: "Welke subsidies zijn er voor de renovatieplicht?",
    answer:
      "De Vlaamse overheid voorziet twee hoofdpremies. De EPC-labelpremie bedraagt tot €7.000 voor een eengezinswoning die EPC label A bereikt (MijnVerbouwPremie, 2026). Hoe groter de labelsprong, hoe hoger de premie. Daarnaast is er de MijnVerbouwPremie per maatregel: dakisolatie, muurisolatie, ramen en warmtepompen worden elk apart gesubsidieerd. Een geldig EPC attest voor en na renovatie is verplicht voor beide premies.",
  },
  {
    question: "Wat als ik de renovatieplicht niet nakom binnen 6 jaar?",
    answer:
      "Als u de renovatieplicht niet nakomt, riskeert u een administratieve boete tot €5.000 (VEKA, 2026). Bovendien wordt de verplichting automatisch overgedragen bij doorverkoop van de woning. De volgende eigenaar erft dan uw resterende renovatietermijn. Vanaf 2030 geldt ook een verhuurverbod voor woningen met EPC label E of F, wat de verhuurbaarheid van uw pand ernstig beperkt.",
  },
  {
    question: "Hoe begin ik met de renovatieplicht?",
    answer:
      "De eerste stap is altijd een actueel EPC attest. Daarmee weet u exact welk label uw woning heeft en hoe ver u nog van label D verwijderd bent. Op basis van dat attest adviseert een erkend energiedeskundige welke renovaties de meeste impact hebben voor uw specifieke situatie. Pas daarna heeft het zin om aannemers te contacteren of premieaanvragen voor te bereiden.",
  },
];

export default function RenovatieplichtPage() {
  return (
    <>
      <SchemaOrg schema={articleSchema} />
      <SchemaOrg schema={buildFaqSchema(pageFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "Renovatieplicht", url: `${BUSINESS.website}/renovatieplicht` },
        ])}
      />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Renovatieplicht", href: "/renovatieplicht" },
        ]}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            Renovatieplicht Vlaanderen 2026
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream max-w-3xl">
            Renovatieplicht bij EPC label E of F:{" "}
            <em className="text-gold italic">wat bent u verplicht?</em>
          </h1>
          <LastUpdated date="2026-05-09" />
        </div>
      </section>

      {/* Intro + Key Takeaways */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="text-[16px] sm:text-[18px] text-ink leading-relaxed font-medium mb-6">
              38% van de Vlaamse woningen haalt EPC label F bij keuring (Vlaamse overheid,{" "}
              2025). Koopt u zo'n woning? Dan heeft u 6 jaar om te renoveren tot
              minimaal label D. Doet u dat niet, dan riskeert u een boete tot{" "}
              <strong>€5.000</strong> en vanaf 2030 ook een verhuurverbod.
            </p>
            <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed mb-8">
              De renovatieplicht is geen dreiging. Het is een kans. De Vlaamse overheid
              legt de verplichting op, maar betaalt ook mee via subsidies tot €7.000.
              Weet wat u moet doen en wanneer.
            </p>

            {/* Key Takeaways */}
            <div className="p-5 sm:p-6 bg-blue/5 border-l-4 border-blue rounded-r-xl mb-2">
              <h2 className="font-heading text-[15px] sm:text-[16px] font-semibold text-blue mb-3">
                Kernpunten
              </h2>
              <ul className="space-y-2 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                {[
                  "EPC label E of F bij aankoop = renovatieplicht. U heeft 6 jaar om label D te bereiken (Vlaamse overheid, 2026).",
                  "62% van de Vlaamse woningen heeft label D of slechter (VEKA, 2025). De kans dat dit op u van toepassing is, is reëel.",
                  "Boetes lopen op tot €5.000. Vanaf 2030: geen verhuur meer mogelijk met label E of F.",
                  "Subsidies dekken een groot deel: EPC-labelpremie tot €7.000, plus MijnVerbouwPremie per maatregel.",
                  "Stap 1 is altijd een EPC attest. Zonder dat weet u niet waar u staat.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-blue font-bold mt-0.5 shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Welke woningen */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5">
              Op welke woningen is de renovatieplicht{" "}
              <em className="text-blue italic">van toepassing?</em>
            </h2>
            <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
              <p>
                De renovatieplicht geldt voor alle residentiële gebouwen in
                Vlaanderen met EPC label E of F die u aankoopt, via erfpacht
                verwerft, of waarvoor u een opstalrecht vestigt. Studio, appartement,
                rijwoning, halfopen of open bebouwing: het maakt niet uit.
              </p>
              <p>
                Wat telt, is de EPC waarde op het moment van overdracht. Koopt u een
                woning met label D? Geen renovatieplicht. Koopt u dezelfde woning vijf
                jaar later, na jaren van verwaarlozing, en scoort die dan label E? Dan
                geldt de verplichting vanaf dat moment.
              </p>
              <p>
                62% van de Vlaamse woningen heeft label D of slechter (VEKA, 2025).
                Dat is een meerderheid. Bij aankoopbeslissingen is de EPC waarde dus
                niet meer vrijblijvend om te bekijken.
              </p>

              {/* Citation capsule */}
              <blockquote className="pl-4 border-l-2 border-gold/60 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed italic">
                Volgens VEKA-statistieken (2025) heeft 62% van de Vlaamse eengezinswoningen
                EPC label D of slechter. Voor appartementen is dat percentage iets
                gunstiger, maar ook daar heeft een derde van het patrimonium label E of F.
                Wie een woning koopt in Vlaanderen, heeft dus statistisch meer dan 1 op 3
                kans op een renovatieplicht.
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Tijdlijn */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5">
              Hoe lang heeft u de tijd{" "}
              <em className="text-blue italic">om te renoveren?</em>
            </h2>
            <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 mb-8">
              <p>
                6 jaar. Dat is de wettelijke termijn vanaf de aankoopdatum om uw
                woning te renoveren tot minimaal{" "}
                <Link href="/epc-waarden-tabel" className="text-blue hover:underline">
                  EPC label D
                </Link>{" "}
                (maximaal 400 kWh/m² per jaar). Niet na het verlijden van de akte,
                maar na de aankoopdatum.
              </p>
              <p>
                Verkoopt u de woning vóór die 6 jaar verstrijken? Dan gaat de
                verplichting mee over op de koper. De resterende termijn wordt
                overgedragen. U bent dan van de verplichting af, maar de nieuwe
                eigenaar neemt ze over.
              </p>
              <p>
                Verhuurt u de woning intussen? Dat mag nog tot 2030. Vanaf 1 januari
                2030 is verhuur van woningen met EPC label E of F verboden in Vlaanderen
                (Vlaamse overheid, 2026). Dat maakt de renovatieplicht niet alleen een
                juridische, maar ook een financiële urgentie.
              </p>
            </div>

            {/* Timeline visual */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Nu", text: "EPC attest aanvragen. Weet waar u staat." },
                { label: "Jaar 1-5", text: "Renovaties uitvoeren. Premies aanvragen." },
                { label: "Jaar 6", text: "Nieuw EPC attest. Verplichting aantonen." },
              ].map(({ label, text }) => (
                <div key={label} className="p-4 sm:p-5 bg-white rounded-xl border border-line">
                  <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-2 mb-1">
                    {label}
                  </div>
                  <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gevolgen */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5">
              Wat als u de termijn{" "}
              <em className="text-blue italic">niet haalt?</em>
            </h2>
            <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4">
              <p>
                Een administratieve boete. Die loopt op tot <strong>€5.000</strong>{" "}
                (VEKA, 2026). Niet per jaar, maar als eenmalige sanctie. Ernstiger is
                wat er op volgt: de verplichting verdwijnt niet. U moet alsnog renoveren.
              </p>
              <p>
                Verhuurt u de woning? Vanaf 2030 is dat niet meer toegestaan voor
                woningen met label E of F. U verliest de huurinkomsten totdat u
                renoveert. Dat maakt het financieel verlies van uitstellen veel groter
                dan de subsidies die u nu al kunt claimen.
              </p>
              <p>
                En verkopen? Kopers zijn steeds bewuster van de renovatieplicht. Een
                woning met label E of F verkoopt moeilijker en aan een lagere prijs.
                Onderzoek van KU Leuven (2024) toont aan dat label A gemiddeld 22,6%
                meer waard is dan label D. Renoveren is dus ook een investering in de
                verkoopwaarde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidies */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="max-w-3xl">
            <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-5">
              Welke subsidies helpen u{" "}
              <em className="text-blue italic">de kosten dragen?</em>
            </h2>
            <div className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed space-y-4 mb-8">
              <p>
                De Vlaamse overheid subsidieert energetische renovaties via twee
                systemen. U kunt ze combineren.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {[
                {
                  title: "EPC-labelpremie",
                  amount: "Tot €7.000",
                  desc: "Premie voor de volledige labelsprong. Hoe groter de sprong (bijv. van F naar A), hoe hoger de premie. Verplicht: EPC attest voor en na de renovatie.",
                  href: "https://www.vlaanderen.be/premies-voor-renovatie/mijn-epc-labelpremie",
                },
                {
                  title: "MijnVerbouwPremie",
                  amount: "Per maatregel",
                  desc: "Aparte premie per renovatiemaatregel: dakisolatie, muurisolatie, ramen, warmtepomp. Hoogte hangt af van maatregel en inkomen. Combineerbaar met EPC-labelpremie.",
                  href: "https://www.vlaanderen.be/premies-voor-renovatie/mijn-verbouwpremie",
                },
              ].map(({ title, amount, desc, href }) => (
                <div key={title} className="p-5 sm:p-6 bg-white rounded-xl border border-line">
                  <div className="font-heading text-[22px] sm:text-[28px] font-medium text-blue mb-1">
                    {amount}
                  </div>
                  <h3 className="font-heading text-[15px] sm:text-[17px] font-medium mb-2">
                    {title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed mb-3">
                    {desc}
                  </p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-blue hover:underline font-medium"
                  >
                    Meer info op vlaanderen.be
                  </a>
                </div>
              ))}
            </div>

            {/* Citation capsule */}
            <blockquote className="pl-4 border-l-2 border-gold/60 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed italic">
              De EPC-labelpremie bedraagt tot €7.000 voor een eengezinswoning die EPC
              label A bereikt (MijnVerbouwPremie, 2026). Wie van label F naar label A
              gaat, ontvangt de maximale premie. Een geldig EPC attest opgemaakt door
              een erkende energiedeskundige type A is verplicht om de premie aan te
              vragen.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Hoe begin je */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,36px)] leading-[1.1] tracking-tight mb-8">
            Hoe beginnen bij de{" "}
            <em className="text-blue italic">renovatieplicht?</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8">
            {[
              {
                num: "01",
                title: "EPC attest aanvragen",
                body: "Weet exact welk label uw woning heeft en hoe groot de afstand tot label D is. Zonder een actueel attest tast u in het duister.",
              },
              {
                num: "02",
                title: "Renovatieadvies vragen",
                body: "Een erkend energiedeskundige vertelt u welke maatregelen het meeste opleveren voor uw specifieke woning. Niet de standaardvolgorde, maar wat in uw geval klopt.",
              },
              {
                num: "03",
                title: "Renovaties uitvoeren",
                body: "Bewaar alle facturen en technische fiches. Die zijn nodig voor de premieaanvraag en voor het nieuwe EPC attest na de werken.",
              },
              {
                num: "04",
                title: "Nieuw EPC attest laten opmaken",
                body: "Na de werken vraagt u een nieuw attest aan. Dat is uw bewijs van nakoming en opent de deur naar de EPC-labelpremie.",
              },
            ].map(({ num, title, body }) => (
              <div
                key={num}
                className="p-5 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-line"
              >
                <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-gold-2 mb-2">
                  Stap {num}
                </div>
                <h3 className="font-heading text-[15px] sm:text-[17px] font-medium mb-2">
                  {title}
                </h3>
                <p className="text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="p-4 sm:p-5 bg-blue/5 rounded-xl border border-blue/20 max-w-2xl text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
            <strong className="text-ink">Uit onze praktijk:</strong> Eigenaars die
            vroeg beginnen, scoren beter. Wie het eerste jaar al het EPC attest
            aanvraagt en een renovatieplan maakt, heeft 5 jaar om de werken te
            spreiden en premies te combineren. Wie wacht tot jaar 5, heeft weinig
            marge voor aannemers, materialen en premieaanvragen.
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] hover:bg-blue-2 transition-all"
            >
              EPC attest aanvragen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] border border-line-2 text-ink font-semibold text-[15px] hover:bg-paper hover:border-blue transition-all"
            >
              <Phone className="w-4 h-4 text-blue" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,34px)] leading-[1.1] tracking-tight text-center mb-10">
            Veelgestelde vragen over de{" "}
            <em className="text-blue italic">renovatieplicht</em>
          </h2>
          <div className="space-y-4">
            {pageFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-line p-5 sm:p-6"
              >
                <summary className="font-heading text-[15px] sm:text-[17px] font-medium cursor-pointer list-none flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-muted text-xl group-open:rotate-45 transition-transform shrink-0">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[13px] sm:text-[14px] text-ink-2 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-[13px] sm:text-[14px] text-ink-2">
            Meer info over EPC keuringen en prijzen?{" "}
            <Link
              href="/epc-keuring-prijs"
              className="text-blue hover:underline font-medium"
            >
              Bekijk onze tarieven
            </Link>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-deep text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h2 className="font-heading font-medium text-[clamp(26px,3.5vw,48px)] leading-[1.05] tracking-tight text-cream mb-4 sm:mb-6">
            Weet waar uw woning staat.{" "}
            <em className="text-gold italic">Vraag vandaag uw EPC aan.</em>
          </h2>
          <p className="text-[15px] sm:text-base text-cream/75 max-w-[480px] mx-auto leading-relaxed mb-8">
            Ermin Huskic (VEKA EP22594) voert de keuring persoonlijk uit.
            Plaatsbezoek binnen 3 dagen, officieel attest binnen 24 uur. Vanaf{" "}
            €{PRICES.studio.price} incl. BTW en verplaatsing.
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
