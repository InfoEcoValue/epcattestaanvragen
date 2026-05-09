import type { Metadata } from "next";
import { BUSINESS, PRICES } from "@/lib/constants";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { buildBreadcrumbSchema, buildFaqSchema } from "@/components/seo/schemas";
import { ContactForm } from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "EPC keuring aanvragen — Contact",
  description:
    "Vraag uw EPC keuring aan bij ECOVALUE. Plaatsbezoek binnen 3 werkdagen, officieel EPC attest binnen 24 uur. Bel 0491 54 39 03 of vul het formulier in.",
  openGraph: {
    title: "EPC keuring aanvragen — Contact | ECOVALUE",
    description:
      "Plaatsbezoek binnen 3 werkdagen, EPC attest binnen 24 uur. Studio €126, rijwoning €212, open bebouwing €270. Incl. BTW en verplaatsing.",
    url: `${BUSINESS.website}/contact`,
    type: "website",
  },
};

const contactFaqs = [
  {
    question: "Hoe snel kan ik een afspraak krijgen?",
    answer:
      "Wij garanderen een plaatsbezoek binnen 3 werkdagen na uw aanvraag. In de meeste gevallen plannen we uw afspraak nog sneller in.",
  },
  {
    question: "Wanneer ontvang ik mijn EPC attest?",
    answer:
      "U ontvangt uw officieel EPC attest binnen 24 uur na het plaatsbezoek via e-mail.",
  },
  {
    question: "Wat zijn de kosten voor een EPC keuring?",
    answer: `De prijs hangt af van het type woning en is inclusief BTW en verplaatsing: studio €${PRICES.studio.price}, appartement €${PRICES.appartement.price}, rijwoning €${PRICES.rijwoning.price}, halfopen bebouwing €${PRICES.halfopen.price}, open bebouwing €${PRICES.open.price}.`,
  },
];

export default function ContactPage() {
  return (
    <>
      <SchemaOrg schema={buildFaqSchema(contactFaqs)} />
      <SchemaOrg
        schema={buildBreadcrumbSchema([
          { name: "Home", url: BUSINESS.website },
          { name: "Contact", url: `${BUSINESS.website}/contact` },
        ])}
      />

      {/* Hero */}
      <section className="bg-blue-deep text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold" />
            EPC keuring aanvragen
          </div>
          <h1 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream mb-4">
            Vraag uw <em className="text-gold italic">EPC keuring</em> aan
          </h1>
          <p className="text-[15px] sm:text-[17px] text-cream/75 max-w-[560px] leading-relaxed">
            Vul het formulier in en we bellen u binnen één werkdag terug om de
            afspraak vast te leggen.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
            {[
              "Plaatsbezoek binnen 3 dagen",
              "Attest binnen 24 uur",
              "Incl. BTW en verplaatsing",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[13px] sm:text-[14px] text-cream/80">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main grid */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 sm:gap-16 items-start">

            {/* Form */}
            <div>
              <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,34px)] leading-[1.1] tracking-tight mb-6 sm:mb-8">
                Aanvraagformulier
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5 sm:gap-6">

              {/* Pricing quick reference */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-line overflow-hidden">
                <div className="px-5 py-4 bg-blue text-cream">
                  <h3 className="font-heading text-[16px] sm:text-[18px] font-medium">
                    Tarieven (incl. BTW en verplaatsing)
                  </h3>
                </div>
                <table className="w-full text-[13px] sm:text-[14px]">
                  <tbody className="divide-y divide-line">
                    {Object.entries(PRICES).map(([key, item]) => (
                      <tr key={key} className="hover:bg-cream/40 transition-colors">
                        <td className="px-5 py-3">{item.label}</td>
                        <td className="px-5 py-3 font-semibold text-blue text-right">
                          €{item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Contact details */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-line p-5 sm:p-6 space-y-4">
                <h3 className="font-heading text-[16px] sm:text-[18px] font-medium">
                  Direct contact
                </h3>
                <ul className="space-y-3 text-[13px] sm:text-[14px] text-ink-2">
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-blue mt-0.5 shrink-0" />
                    <a href={`tel:${BUSINESS.phone}`} className="hover:text-blue transition-colors font-medium">
                      {BUSINESS.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-blue mt-0.5 shrink-0" />
                    <a href={`mailto:${BUSINESS.email}`} className="hover:text-blue transition-colors break-all">
                      {BUSINESS.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue mt-0.5 shrink-0" />
                    <span>
                      {BUSINESS.address.street}<br />
                      {BUSINESS.address.postalCode} {BUSINESS.address.city}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-blue mt-0.5 shrink-0" />
                    <span>
                      Ma–Vr: 8:30–18:00<br />
                      Za: op afspraak
                    </span>
                  </li>
                </ul>
              </div>

              {/* Trust signal */}
              <div className="p-4 sm:p-5 bg-cream rounded-xl border border-line text-center">
                <div className="text-gold text-[16px] tracking-wide mb-1">★★★★★</div>
                <div className="font-heading text-[15px] sm:text-[16px] font-medium">
                  4,9/5 — 56 Google-reviews
                </div>
                <p className="text-[12px] sm:text-[13px] text-muted mt-1">
                  Erkend energiedeskundige type A · VEKA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream border-t border-line">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="font-heading font-medium text-[clamp(22px,2.5vw,34px)] leading-[1.1] tracking-tight text-center mb-10">
            Veelgestelde vragen
          </h2>
          <div className="space-y-4">
            {contactFaqs.map((faq) => (
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
