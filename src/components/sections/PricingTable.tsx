import Link from "next/link";
import { PRICES } from "@/lib/constants";
import { Check } from "lucide-react";

const features: Record<string, string[]> = {
  studio: ["Plaatsbezoek 30-45 min", "Attest binnen 24u"],
  appartement: ["Plaatsbezoek ±45 min", "Gemeenschappelijke delen mee"],
  rijwoning: ["Plaatsbezoek 60 min", "Inclusief renovatieadvies", "Premie-dossier check"],
  halfopen: ["Plaatsbezoek 60-75 min", "Inclusief renovatieadvies"],
  open: ["Plaatsbezoek 75-90 min", "Volledig dossier inbegrepen"],
};

export function PricingTable() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24" id="prijzen">
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 sm:gap-12 items-end mb-10 sm:mb-14">
        <div>
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold-2 flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold-2" />
            01 — Tarieven
          </div>
          <h2 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight">
            Heldere prijzen, <em className="text-blue italic">per type woning</em>.
          </h2>
        </div>
        <div className="text-[15px] sm:text-base text-ink-2 max-w-[420px] leading-relaxed pb-1.5">
          Geen verborgen kosten, geen meerprijzen voor spoed. Onze richtprijzen
          liggen vast op basis van het type en de oppervlakte.
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-line rounded-xl sm:rounded-2xl overflow-hidden bg-white">
        {Object.entries(PRICES).map(([key, item]) => {
          const isFeatured = "featured" in item && item.featured;
          return (
            <div
              key={key}
              className={`p-5 sm:p-8 flex flex-col gap-4 sm:gap-5 border-b sm:border-b-0 sm:border-r border-line last:border-r-0 last:border-b-0 relative transition-colors ${
                isFeatured
                  ? "bg-blue text-cream"
                  : "hover:bg-cream"
              }`}
            >
              {isFeatured && (
                <span className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 font-mono text-[10px] tracking-[0.12em] bg-gold text-blue-deep px-2 py-1 rounded font-semibold">
                  Meest gekozen
                </span>
              )}
              <h3 className={`font-heading text-[20px] sm:text-[22px] font-medium ${isFeatured ? "text-white" : ""}`}>
                {item.label}
              </h3>
              <div>
                <div className={`font-mono text-[11px] tracking-[0.08em] uppercase ${isFeatured ? "text-cream/70" : "text-muted"}`}>
                  vanaf
                </div>
                <div className={`font-heading text-[40px] sm:text-[48px] font-medium leading-none tracking-tight ${isFeatured ? "text-white" : "text-blue"}`}>
                  <span className={`text-[0.55em] align-super font-semibold mr-1 ${isFeatured ? "text-cream/70" : "text-gold-2"}`}>
                    €
                  </span>
                  {item.price}
                </div>
              </div>
              <p className={`text-[12px] -mt-2 sm:-mt-3 ${isFeatured ? "text-cream/70" : "text-muted"}`}>
                {item.desc}
              </p>
              <ul className="flex flex-col gap-2 sm:gap-2.5 mt-1">
                {features[key]?.map((feat) => (
                  <li
                    key={feat}
                    className={`flex items-start gap-2 text-[13px] sm:text-[13.5px] leading-snug ${
                      isFeatured ? "text-cream/85" : "text-ink-2"
                    }`}
                  >
                    <Check
                      className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isFeatured ? "text-gold" : "text-blue"}`}
                      strokeWidth={2.5}
                    />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`mt-auto inline-flex items-center justify-center px-3.5 py-3 sm:py-2.5 rounded-lg font-semibold text-sm transition-all ${
                  isFeatured
                    ? "bg-gold text-blue-deep hover:bg-gold-2 hover:text-white"
                    : "border border-line-2 text-ink hover:bg-cream hover:border-blue"
                }`}
              >
                Aanvragen
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
