import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1080px] px-4 sm:px-6 py-16 sm:py-24 text-center">
        <div className="flex justify-center gap-1 mb-3 sm:mb-4 text-gold">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
          ))}
        </div>
        <div className="font-heading text-[80px] sm:text-[120px] leading-[0.7] text-gold italic select-none">
          &ldquo;
        </div>
        <p className="font-heading font-medium text-[clamp(20px,2.4vw,36px)] leading-[1.3] text-ink mx-auto max-w-[840px] tracking-tight mt-4 sm:mt-6 mb-6 sm:mb-8">
          Op dinsdag aangevraagd, op donderdag het plaatsbezoek, vrijdag het
          attest in mijn mailbox.{" "}
          <em className="text-blue italic">Geen ruis, geen meerprijzen.</em>{" "}
          Precies wat je hoopt van een keuring.
        </p>
        <div className="flex justify-center items-center gap-3 sm:gap-3.5 text-sm text-ink-2">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue text-cream grid place-items-center font-heading font-medium text-[14px] sm:text-base">
            SD
          </div>
          <div className="text-left">
            <strong className="text-ink font-semibold block text-[13px] sm:text-sm">Sofie D.</strong>
            <span className="text-muted text-[11px] sm:text-[12.5px]">Verkoper, Antwerpen</span>
          </div>
        </div>
      </div>
    </section>
  );
}
