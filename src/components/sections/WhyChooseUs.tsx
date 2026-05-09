import Link from "next/link";
import { Check, ArrowDown } from "lucide-react";

const benefits = [
  { title: "Officieel EPC-attest (PDF)", desc: "Aanvaard door notaris, makelaar en VEKA — 10 jaar geldig." },
  { title: "Renovatieadvies op maat", desc: "Concrete maatregelen om uw label te verbeteren — geen software-clichés." },
  { title: "Premie-check inbegrepen", desc: "EPC-labelpremie en MijnVerbouwPremie meteen mee bekeken." },
  { title: "Geen meerprijs voor spoed", desc: "Plaatsbezoek binnen 3 dagen aan de standaardprijs." },
];

export function WhyChooseUs() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 sm:gap-12 items-end mb-10 sm:mb-14">
          <div>
            <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold-2 flex items-center gap-2.5 mb-3 sm:mb-3.5">
              <span className="w-6 h-px bg-gold-2" />
              05 — Aanvraag
            </div>
            <h2 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight">
              Vraag uw EPC-attest aan <em className="text-blue italic">in vier stappen</em>.
            </h2>
          </div>
          <div className="text-[15px] sm:text-base text-ink-2 max-w-[420px] leading-relaxed pb-1.5">
            Vul het formulier bovenaan in. Indicatieve prijs en planning meteen
            zichtbaar — pas na uw bevestiging gaan we aan de slag.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-5 sm:gap-y-6">
          {benefits.map((b) => (
            <div key={b.title} className="grid grid-cols-[28px_1fr] sm:grid-cols-[32px_1fr] gap-3 sm:gap-4 items-start pb-5 sm:pb-6 border-b border-line last:border-b-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cream grid place-items-center text-blue">
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-heading text-[16px] sm:text-[18px] font-medium text-ink mb-1">
                  {b.title}
                </div>
                <div className="text-[13px] sm:text-[14.5px] text-ink-2 leading-relaxed">
                  {b.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 flex justify-center">
          <Link
            href="#aanvragen"
            className="inline-flex items-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] sm:text-base hover:bg-blue-2 transition-all w-full sm:w-auto justify-center"
          >
            Naar het formulier
            <ArrowDown className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
