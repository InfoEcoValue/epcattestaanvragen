const steps = [
  {
    num: 1,
    title: "Online aanvraag",
    desc: "Vul ons formulier in met type woning, adres en gewenste datum. U krijgt direct een prijsindicatie en bevestiging.",
    timing: "2 minuten",
  },
  {
    num: 2,
    title: "Snelle planning",
    desc: "Onze planner belt u dezelfde dag terug om het plaatsbezoek vast te leggen. Afspraak gegarandeerd binnen drie werkdagen.",
    timing: "Binnen 3 dagen",
  },
  {
    num: 3,
    title: "Plaatsbezoek",
    desc: "Onze erkende deskundige neemt grondig de tijd: isolatie, ramen, ketel, ventilatie, verbruik. Niets wordt overgeslagen.",
    timing: "45 — 90 min",
  },
  {
    num: 4,
    title: "Attest in mailbox",
    desc: "Binnen 24 uur na het bezoek ontvangt u uw officiële EPC-attest, klaar voor verkoop, verhuur of premie-aanvraag.",
    timing: "24 uur later",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-cream" id="hoe-werkt-het">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 sm:gap-12 items-end mb-10 sm:mb-14">
          <div>
            <div className="font-mono text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-gold-2 flex items-center gap-2.5 mb-3 sm:mb-3.5">
              <span className="w-6 h-px bg-gold-2" />
              02 — Werkwijze
            </div>
            <h2 className="font-heading font-medium text-[clamp(26px,3.5vw,52px)] leading-[1.05] tracking-tight">
              Vier stappen, <em className="text-blue italic">vier dagen</em>.
            </h2>
          </div>
          <div className="text-[15px] sm:text-base text-ink-2 max-w-[420px] leading-relaxed pb-1.5">
            Van online aanvraag tot officieel attest in uw mailbox. Geen
            onverwachte kosten, geen wachttijd.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="relative sm:pr-7">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 right-3.5 w-6 h-px bg-[repeating-linear-gradient(90deg,var(--color-gold-2)_0_4px,transparent_4px_8px)]" />
              )}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-line-2 grid place-items-center font-heading text-[20px] sm:text-[22px] text-blue font-medium mb-4 sm:mb-6">
                {step.num}
              </div>
              <h3 className="font-heading text-[20px] sm:text-[22px] font-medium mb-2 sm:mb-2.5">
                {step.title}
              </h3>
              <p className="text-ink-2 text-[14px] sm:text-[15px] leading-relaxed">
                {step.desc}
              </p>
              <span className="mt-3 sm:mt-3.5 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] uppercase text-gold-2">
                ⏱ {step.timing}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
