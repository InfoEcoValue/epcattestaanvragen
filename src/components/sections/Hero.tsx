import { Suspense } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { ArrowRight, Phone } from "lucide-react";
import { HeroWizard } from "./HeroWizard";

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 pt-8 sm:pt-14 pb-12 sm:pb-20 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-10 sm:gap-16 items-start">
      <div>
        <span className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-cream border border-line-2 text-[12px] sm:text-[13px] font-medium text-ink-2 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-warm-green shadow-[0_0_0_3px_rgba(58,155,110,.18)] animate-pulse" />
          Erkend energiedeskundige Type A · Vlaanderen
        </span>

        <h1 className="mt-5 sm:mt-6 font-heading font-medium text-[clamp(28px,4vw,56px)] leading-[1.08] tracking-tight text-ink">
          EPC-attest nodig?<br />
          <em className="text-blue italic">Wij regelen het</em> binnen&nbsp;<span className="font-sans tabular-nums">24</span>&nbsp;uur.
        </h1>

        <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] leading-relaxed text-ink-2 max-w-[520px]">
          U vraagt online aan, wij staan binnen drie dagen op uw stoep. 24 uur
          later vindt u uw officieel certificaat in uw mailbox — vanaf €126,
          zonder verrassingen.
        </p>

        <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row flex-wrap gap-3 items-stretch sm:items-center">
          <Link
            href="/?type=studio#aanvragen"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] sm:text-base hover:bg-blue-2 transition-all hover:-translate-y-px hover:shadow-md"
          >
            EPC-keuring aanvragen
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-[10px] border border-line-2 font-semibold text-[15px] sm:text-base text-ink hover:bg-cream hover:border-blue transition-all"
          >
            <Phone className="w-4 h-4 text-blue" />
            <span className="font-semibold">{BUSINESS.phoneDisplay}</span>
          </a>
        </div>

        {/* Google reviews badge */}
        <div className="mt-5 inline-flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-white border border-line-2 shadow-sm text-[12px] sm:text-[13.5px] text-ink-2 hover:-translate-y-px hover:shadow-md transition-all">
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
            <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
            <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
            <path fill="#FBBC05" d="M11.69 28.18c-.44-1.32-.69-2.73-.69-4.18s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
            <path fill="#EA4335" d="M24 9.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 3.18 29.93 1 24 1 15.4 1 7.96 5.93 4.34 13.12l7.35 5.7C13.42 13.62 18.27 9.75 24 9.75z" />
          </svg>
          <span className="text-gold tracking-wide text-[13px] sm:text-sm">★★★★★</span>
          <span>
            <strong className="text-ink font-semibold">4,9/5</strong> · 56 Google-reviews
          </span>
        </div>

        {/* Stats */}
        <div className="mt-6 sm:mt-9 grid grid-cols-2 sm:flex sm:flex-row gap-6 sm:gap-9 pt-6 sm:pt-7 border-t border-line">
          {[
            { value: "€", num: "126", label: "Vanaf-prijs studio" },
            { value: "", num: "24", sup: "u", label: "Attest in mailbox" },
            { value: "", num: "3", sup: "d", label: "Plaatsbezoek gegarandeerd" },
            { value: "", num: "700", sup: "+", label: "Attesten · sinds 2024" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-[26px] sm:text-[32px] font-medium leading-none text-blue tracking-tight">
                {stat.value && (
                  <sup className="text-[0.55em] text-gold-2 font-semibold mr-0.5 -top-3 relative">
                    {stat.value}
                  </sup>
                )}
                {stat.num}
                {stat.sup && (
                  <sup className="text-[0.55em] text-gold-2 font-semibold ml-0.5 -top-3 relative">
                    {stat.sup}
                  </sup>
                )}
              </div>
              <div className="text-[12px] sm:text-[13px] text-muted mt-1.5 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Hero visual — interactive wizard */}
      <div className="flex flex-col gap-3 sm:gap-4" id="aanvragen">
        <Suspense fallback={null}>
          <HeroWizard />
        </Suspense>

        {/* Photo strip */}
        <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[104px_1fr] gap-3 sm:gap-3.5 items-center p-2.5 sm:p-3 bg-white border border-line-2 rounded-xl sm:rounded-[14px] shadow-sm">
          <div className="relative aspect-[4/3] rounded-lg sm:rounded-[10px] overflow-hidden bg-gradient-to-br from-blue-deep via-blue-2 to-blue">
            <span className="absolute left-1.5 top-1.5 font-mono text-[9px] tracking-[0.06em] text-white/75 uppercase px-1.5 py-0.5 border border-white/22 rounded bg-black/18">
              foto
            </span>
          </div>
          <div>
            <strong className="block font-heading text-[14px] sm:text-[15px] font-medium text-ink leading-tight">
              Plaatsbezoek door erkende deskundige
            </strong>
            <span className="block text-[11.5px] sm:text-[12.5px] text-muted mt-0.5 leading-snug">
              Type A · 45-60 min · grondige opname per ruimte
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
