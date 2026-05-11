import Link from "next/link";
import { EPC_LABELS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const scaleClasses = [
  "bg-[#1a8a5b] text-white",
  "bg-[#3aa370] text-white",
  "bg-[#7eb85a] text-blue-deep",
  "bg-[#bcc855] text-blue-deep",
  "bg-[#e8c84a] text-blue-deep",
  "bg-[#e89a3c] text-white",
  "bg-[#c8552d] text-white",
];

export function EpcScale() {
  return (
    <section className="bg-blue-deep text-cream relative overflow-hidden" id="epc-label">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.018)_0_1px,transparent_1px_80px)] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 sm:gap-12 items-end mb-8 sm:mb-12">
          <div>
            <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold flex items-center gap-2.5 mb-3 sm:mb-3.5">
              <span className="w-6 h-px bg-gold" />
              03 — EPC-schaal
            </div>
            <h2 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight text-cream">
              Van A+ tot F. <em className="text-gold italic">Wat betekent uw label?</em>
            </h2>
          </div>
          <div className="text-[15px] sm:text-base text-cream/75 max-w-[420px] leading-relaxed pb-1.5">
            De EPC-waarde drukt het primair energieverbruik per m² per jaar uit.
            Hoe lager, hoe beter. Vanaf label E geldt de renovatieplicht binnen
            vijf jaar na aankoop.
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-1.5 sm:gap-2">
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
          {/* Renovation helper card */}
          <div className="col-span-4 sm:col-span-4 lg:col-span-1 aspect-auto lg:aspect-[1/1.25] rounded-lg sm:rounded-[10px] p-3 sm:p-4 flex flex-row lg:flex-col justify-between lg:justify-between items-center lg:items-stretch bg-white/[.06] text-cream/95 border border-dashed border-cream/25 hover:-translate-y-1 transition-transform gap-3">
            <div>
              <div className="font-heading text-[20px] sm:text-[24px] font-semibold text-gold">↗</div>
              <div className="font-mono text-[10px] sm:text-[11px] text-cream/70 mt-0.5 sm:mt-1">+2 labels</div>
            </div>
            <div className="text-[11px] leading-snug font-medium opacity-75">
              Begeleiding bij renovatie tot betere score
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row sm:flex-wrap justify-between items-start sm:items-center gap-4 sm:gap-6 pt-6 sm:pt-7 border-t border-cream/10 text-[13px] sm:text-sm text-cream/70">
          <span>
            Vanaf label E geldt renovatieplicht binnen 5 jaar na aankoop.
            Ecovalue begeleidt het volledige traject.
          </span>
          <Link
            href="/?type=studio#aanvragen"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gold text-blue-deep font-semibold text-sm hover:bg-gold-2 hover:text-white transition-all w-full sm:w-auto justify-center sm:justify-start"
          >
            Renovatieadvies aanvragen
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
