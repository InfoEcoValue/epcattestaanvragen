import { BUSINESS, COVERAGE_CITIES } from "@/lib/constants";
import { Clock } from "lucide-react";

export function Coverage() {
  return (
    <section className="bg-cream border-t border-line" id="coverage">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 sm:gap-16 items-center">
        <div>
          <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold-2 flex items-center gap-2.5 mb-3 sm:mb-3.5">
            <span className="w-6 h-px bg-gold-2" />
            04 — Werkgebied
          </div>
          <h2 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight">
            Heel <em className="text-blue italic">Vlaanderen</em>, op uw stoep
            binnen drie dagen.
          </h2>
          <p className="text-[15px] sm:text-[17px] text-ink-2 mt-4 sm:mt-5 leading-relaxed max-w-[480px]">
            Onze erkende deskundigen rijden dagelijks door Antwerpen, Oost- en
            West-Vlaanderen, Limburg en Vlaams-Brabant. Ook randgemeenten in
            Brussel zijn welkom.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-1.5 sm:gap-2">
            {COVERAGE_CITIES.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-white border border-line-2 text-[12px] sm:text-[13.5px] text-ink-2 font-medium"
              >
                <span className="w-[5px] h-[5px] rounded-full bg-blue" />
                {city}
              </span>
            ))}
          </div>
          <div className="mt-5 sm:mt-7 text-[12px] sm:text-[13.5px] text-muted flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-blue shrink-0" />
            <span>
              Niet zeker of we langskomen? Bel{" "}
              <strong className="text-ink">{BUSINESS.phoneDisplay}</strong> en we
              bevestigen direct.
            </span>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="relative aspect-square max-w-[320px] sm:max-w-[480px] mx-auto bg-white border border-line-2 rounded-xl sm:rounded-2xl shadow-md p-4 sm:p-8 overflow-hidden">
          <svg viewBox="0 0 400 400" className="w-full h-full" aria-hidden="true">
            <path className="fill-cream-2 stroke-line-2" strokeWidth={1} d="M60 140 L130 110 L180 130 L160 200 L80 200 Z" />
            <path className="fill-blue-soft stroke-blue" strokeWidth={1.5} d="M180 130 L260 100 L290 150 L240 210 L160 200 Z" />
            <path className="fill-blue-soft stroke-blue" strokeWidth={1.5} d="M260 100 L340 130 L350 200 L290 220 L240 210 L290 150 Z" />
            <path className="fill-blue-soft stroke-blue" strokeWidth={1.5} d="M80 200 L160 200 L240 210 L210 280 L130 280 L70 250 Z" />
            <path className="fill-blue-soft stroke-blue" strokeWidth={1.5} d="M210 280 L290 220 L350 200 L340 280 L260 320 L210 280 Z" />
            {/* City pins */}
            {[
              { cx: 135, cy: 170, label: "Antwerpen", lx: 145 },
              { cx: 105, cy: 230, label: "Gent", lx: 115 },
              { cx: 80, cy: 170, label: "Brugge", lx: 20 },
              { cx: 220, cy: 200, label: "Leuven", lx: 230 },
              { cx: 310, cy: 170, label: "Hasselt", lx: 320 },
              { cx: 170, cy: 170, label: "Mechelen", lx: 178 },
            ].map((pin) => (
              <g key={pin.label}>
                <circle className="fill-blue opacity-[.18]" cx={pin.cx} cy={pin.cy} r={14} />
                <circle className="fill-blue" cx={pin.cx} cy={pin.cy} r={4} />
                <text
                  x={pin.lx}
                  y={pin.cy + 3}
                  className="fill-ink text-[10px] font-semibold"
                  style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.02em" }}
                >
                  {pin.label}
                </text>
              </g>
            ))}
          </svg>
          <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-[0.1em] uppercase text-muted">
            <span className="w-2.5 h-2.5 rounded-sm bg-blue-soft border border-blue" />
            Werkgebied Ecovalue
          </div>
        </div>
      </div>
    </section>
  );
}
