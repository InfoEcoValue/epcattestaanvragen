"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PRICES, EXTRAS } from "@/lib/constants";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

const HOME_TYPES = [
  { id: "studio" as const, icon: "studio" },
  { id: "appartement" as const, icon: "appartement" },
  { id: "rijwoning" as const, icon: "rijwoning" },
  { id: "halfopen" as const, icon: "halfopen" },
  { id: "open" as const, icon: "open" },
] as const;

type HomeTypeId = (typeof HOME_TYPES)[number]["id"];

const TIMES = ["09:00", "10:30", "13:00", "14:30", "16:00", "17:30"];
const LABELS = ["Type woning", "Adres", "Datum & tijd", "Bevestiging"];

function genDays() {
  const days: { key: string; dow: string; dnum: number; dmon: string; fast: boolean }[] = [];
  const dows = ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"];
  const mons = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  let i = 0;
  while (days.length < 8) {
    if (d.getDay() !== 0) {
      days.push({
        key: d.toISOString().slice(0, 10),
        dow: dows[d.getDay()],
        dnum: d.getDate(),
        dmon: mons[d.getMonth()],
        fast: i < 3,
      });
    }
    d.setDate(d.getDate() + 1);
    i++;
  }
  return days;
}

export function HeroWizard() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState(0);
  const [type, setType] = useState<HomeTypeId | null>(null);

  useEffect(() => {
    const param = searchParams.get("type");
    if (HOME_TYPES.some((t) => t.id === param)) {
      setType(param as HomeTypeId);
    }
  }, [searchParams]);
  const [extras, setExtras] = useState<string[]>([]);
  const [addr, setAddr] = useState({ street: "", num: "", zip: "", city: "" });
  const [day, setDay] = useState<ReturnType<typeof genDays>[number] | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const [days, setDays] = useState<ReturnType<typeof genDays>>([]);
  const [refNum] = useState(() => Math.floor(Math.random() * 9000 + 1000));

  useEffect(() => {
    setDays(genDays());
  }, []);
  const typeObj = type ? PRICES[type] : null;
  const extraObjs = EXTRAS.filter((e) => extras.includes(e.id));
  const total = (typeObj ? typeObj.price : 0) + extraObjs.reduce((s, e) => s + e.price, 0);

  const canNext = [
    () => !!type,
    () => !!(addr.street && addr.num && addr.zip && addr.city),
    () => !!(day && time),
    () => !!(contact.name && contact.email && contact.phone),
  ];

  function next() {
    if (step < 3) setStep(step + 1);
    else setSubmitted(true);
  }

  function toggleExtra(id: string) {
    setExtras((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  const inputCls = "w-full px-3 sm:px-3.5 py-3 border border-line-2 rounded-[9px] text-[15px] text-ink bg-white focus:outline-none focus:border-blue focus:ring-2 focus:ring-blue/10 transition-all";

  if (submitted) {
    return (
      <div className="bg-white border border-line-2 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
        <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-line bg-cream flex justify-between items-center gap-2">
          <h3 className="font-heading text-[17px] sm:text-[19px] font-medium text-ink">Aanvraag verzonden</h3>
          <span className="font-mono text-[10px] sm:text-[10.5px] tracking-[0.1em] uppercase text-blue-2 bg-blue-soft px-2 sm:px-2.5 py-1 rounded-full shrink-0">
            Klaar
          </span>
        </div>
        <div className="flex h-[3px] bg-cream-2">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="flex-[0_0_25%] bg-blue" />
          ))}
        </div>
        <div className="p-6 sm:p-8 text-center">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue text-cream grid place-items-center mx-auto mb-4 sm:mb-5">
            <Check className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
          </div>
          <h3 className="font-heading text-[22px] sm:text-[26px] font-medium mb-2">
            Bedankt{contact.name ? `, ${contact.name.split(" ")[0]}` : ""}.
          </h3>
          <p className="text-ink-2 text-[14px] sm:text-[15px] max-w-[340px] mx-auto">
            We bellen u binnen één werkdag op{" "}
            <strong>{contact.phone}</strong> om de afspraak van{" "}
            <strong>
              {day?.dnum} {day?.dmon} om {time}
            </strong>{" "}
            definitief te bevestigen.
          </p>
          <div className="mt-5 sm:mt-6 font-mono text-[11px] sm:text-[12px] text-muted tracking-[0.08em]">
            REF · ECV-{refNum}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-line-2 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 sm:py-5 border-b border-line bg-cream flex justify-between items-center gap-2">
        <h3 className="font-heading text-[17px] sm:text-[19px] font-medium text-ink">EPC-attest aanvragen</h3>
        <span className="font-mono text-[9px] sm:text-[10.5px] tracking-[0.1em] uppercase text-blue-2 bg-blue-soft px-2 sm:px-2.5 py-1 rounded-full shrink-0">
          Stap {step + 1}/4 · {LABELS[step]}
        </span>
      </div>

      {/* Progress */}
      <div className="flex h-[3px] bg-cream-2">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className={`flex-[0_0_25%] ${i <= step ? "bg-blue" : "bg-cream-2"} transition-colors`} />
        ))}
      </div>

      {/* Body */}
      <div className="p-4 sm:p-6 min-h-[300px] sm:min-h-[340px]">
        {/* Step 0: Type woning */}
        {step === 0 && (
          <>
            <div className="font-heading text-[20px] sm:text-[24px] font-medium text-ink tracking-tight mb-1">
              Welk type woning is het?
            </div>
            <div className="text-[13px] sm:text-sm text-muted mb-4 sm:mb-6">
              Kies het type dat het best past — u kunt later nog aanvullen.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
              {HOME_TYPES.map((t) => {
                const p = PRICES[t.id];
                const sel = type === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    className={`p-3 sm:p-4 border rounded-xl text-left transition-all flex justify-between items-center sm:items-start gap-3 ${
                      sel
                        ? "border-blue bg-cream shadow-[inset_0_0_0_1px_var(--color-blue)]"
                        : "border-line hover:border-blue hover:bg-cream/50"
                    }`}
                  >
                    <div>
                      <span className="font-heading text-[15px] sm:text-[17px] text-ink font-medium block tracking-tight">
                        {p.label}
                      </span>
                      <span className="text-[11px] sm:text-[12px] text-muted mt-0.5 block">{p.desc}</span>
                    </div>
                    <span className="font-mono text-[13px] text-blue font-medium shrink-0">
                      €{p.price}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Extras */}
            <div className="mt-5 sm:mt-6 text-[12px] sm:text-[13px] text-muted uppercase tracking-[0.05em] font-semibold">
              Extra keuringen (optioneel)
            </div>
            <div className="mt-2 sm:mt-2.5 flex flex-col gap-2 sm:gap-2.5">
              {EXTRAS.map((e) => {
                const sel = extras.includes(e.id);
                return (
                  <button
                    key={e.id}
                    onClick={() => toggleExtra(e.id)}
                    className={`grid grid-cols-[24px_1fr_auto] gap-3 sm:gap-3.5 items-center p-3 sm:p-4 border rounded-xl text-left transition-all ${
                      sel ? "border-blue bg-cream" : "border-line hover:border-blue-2 hover:bg-cream"
                    }`}
                  >
                    <span
                      className={`w-[22px] h-[22px] border-[1.5px] rounded-md grid place-items-center transition-all ${
                        sel ? "bg-blue border-blue text-white" : "border-line-2 bg-white text-transparent"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    <span>
                      <span className="font-heading text-[15px] sm:text-[17px] text-ink font-medium block">
                        {e.name}
                      </span>
                      <span className="text-[12px] sm:text-[13px] text-muted mt-0.5 block">{e.desc}</span>
                    </span>
                    <span className="font-mono text-[12px] sm:text-[13px] text-blue font-medium">+ €{e.price}</span>
                  </button>
                );
              })}
            </div>
          </>
        )}

        {/* Step 1: Adres */}
        {step === 1 && (
          <>
            <div className="font-heading text-[20px] sm:text-[24px] font-medium text-ink tracking-tight mb-1">
              Wat is het adres van de woning?
            </div>
            <div className="text-[13px] sm:text-sm text-muted mb-4 sm:mb-6">
              We hebben het adres nodig om reistijd in te plannen.
            </div>
            <div className="flex flex-col gap-3 sm:gap-3.5">
              <div className="grid grid-cols-[1fr_80px] sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="text-[11px] sm:text-[12px] tracking-[0.05em] text-ink-2 uppercase font-semibold block mb-1.5">
                    Straat
                  </label>
                  <input value={addr.street} onChange={(e) => setAddr({ ...addr, street: e.target.value })} placeholder="Meir" className={inputCls} />
                </div>
                <div>
                  <label className="text-[11px] sm:text-[12px] tracking-[0.05em] text-ink-2 uppercase font-semibold block mb-1.5">
                    Nr / bus
                  </label>
                  <input value={addr.num} onChange={(e) => setAddr({ ...addr, num: e.target.value })} placeholder="42" className={inputCls} />
                </div>
              </div>
              <div className="grid grid-cols-[100px_1fr] sm:grid-cols-2 gap-2.5 sm:gap-3">
                <div>
                  <label className="text-[11px] sm:text-[12px] tracking-[0.05em] text-ink-2 uppercase font-semibold block mb-1.5">
                    Postcode
                  </label>
                  <input value={addr.zip} onChange={(e) => setAddr({ ...addr, zip: e.target.value })} placeholder="2000" className={inputCls} />
                </div>
                <div>
                  <label className="text-[11px] sm:text-[12px] tracking-[0.05em] text-ink-2 uppercase font-semibold block mb-1.5">
                    Gemeente
                  </label>
                  <input value={addr.city} onChange={(e) => setAddr({ ...addr, city: e.target.value })} placeholder="Antwerpen" className={inputCls} />
                </div>
              </div>
            </div>
          </>
        )}

        {/* Step 2: Datum & tijd */}
        {step === 2 && (
          <>
            <div className="font-heading text-[20px] sm:text-[24px] font-medium text-ink tracking-tight mb-1">
              Wanneer past het bezoek u?
            </div>
            <div className="text-[13px] sm:text-sm text-muted mb-4 sm:mb-6">
              Onze eerstvolgende drie dagen zijn nog grotendeels vrij.
            </div>
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {days.map((d) => (
                <button
                  key={d.key}
                  onClick={() => setDay(d)}
                  className={`p-2 sm:p-3.5 border rounded-lg sm:rounded-[10px] text-center transition-all ${
                    day?.key === d.key
                      ? "bg-blue text-cream border-blue"
                      : "border-line bg-white hover:border-blue hover:bg-cream"
                  }`}
                >
                  <div
                    className={`text-[10px] sm:text-[11px] tracking-[0.1em] uppercase font-semibold ${
                      day?.key === d.key ? "text-cream/70" : "text-muted"
                    }`}
                  >
                    {d.dow}
                  </div>
                  <div className="font-heading text-[20px] sm:text-[24px] font-medium mt-0.5 sm:mt-1">{d.dnum}</div>
                  <div className={`text-[10px] sm:text-[11px] mt-0.5 ${day?.key === d.key ? "text-cream/70" : "text-muted"}`}>
                    {d.dmon}
                  </div>
                  {d.fast && (
                    <span className="mt-1 sm:mt-1.5 inline-block font-mono text-[8px] sm:text-[9px] tracking-[0.08em] bg-gold text-blue-deep px-1 sm:px-1.5 py-px rounded font-semibold">
                      SNEL
                    </span>
                  )}
                </button>
              ))}
            </div>
            {day && (
              <>
                <div className="mt-5 sm:mt-6 text-[12px] sm:text-[13px] text-muted uppercase tracking-[0.05em] font-semibold">
                  Tijdslot — {day.dow} {day.dnum} {day.dmon}
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 sm:gap-2 mt-2 sm:mt-2.5">
                  {TIMES.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`py-2.5 sm:p-2.5 border rounded-lg text-center font-mono text-[12px] sm:text-[13px] transition-all ${
                        time === t
                          ? "bg-blue text-cream border-blue"
                          : "border-line bg-white text-ink-2 hover:border-blue"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* Step 3: Bevestiging */}
        {step === 3 && (
          <>
            <div className="font-heading text-[20px] sm:text-[24px] font-medium text-ink tracking-tight mb-1">
              Uw gegevens
            </div>
            <div className="text-[13px] sm:text-sm text-muted mb-4 sm:mb-6">
              Zo bereiken we u om de afspraak te bevestigen.
            </div>
            <div className="flex flex-col gap-3 sm:gap-3.5">
              <div>
                <label className="text-[11px] sm:text-[12px] tracking-[0.05em] text-ink-2 uppercase font-semibold block mb-1.5">
                  Naam
                </label>
                <input value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} placeholder="Sofie Decoster" className={inputCls} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] sm:text-[12px] tracking-[0.05em] text-ink-2 uppercase font-semibold block mb-1.5">
                    E-mail
                  </label>
                  <input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="sofie@voorbeeld.be" className={inputCls} />
                </div>
                <div>
                  <label className="text-[11px] sm:text-[12px] tracking-[0.05em] text-ink-2 uppercase font-semibold block mb-1.5">
                    Telefoon
                  </label>
                  <input value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} placeholder="+32 470 12 34 56" className={inputCls} />
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-5 sm:mt-6 text-[12px] sm:text-[13px] text-muted uppercase tracking-[0.05em] font-semibold mb-2 sm:mb-2.5">
              Overzicht
            </div>
            <div className="border border-line rounded-xl overflow-hidden">
              <div className="px-3 sm:px-4 py-3 sm:py-3.5 flex justify-between items-center border-b border-line bg-white text-[13px] sm:text-sm">
                <span className="text-muted">Type woning</span>
                <span className="text-ink font-medium">
                  {typeObj?.label} — €{typeObj?.price}
                </span>
              </div>
              {extraObjs.map((e) => (
                <div key={e.id} className="px-3 sm:px-4 py-3 sm:py-3.5 flex justify-between items-center border-b border-line bg-white text-[13px] sm:text-sm">
                  <span className="text-muted">{e.name}</span>
                  <span className="text-ink font-medium">+ €{e.price}</span>
                </div>
              ))}
              <div className="px-3 sm:px-4 py-3 sm:py-3.5 flex justify-between items-center border-b border-line bg-white text-[13px] sm:text-sm">
                <span className="text-muted">Adres</span>
                <span className="text-ink font-medium text-right">
                  {addr.street} {addr.num}, {addr.zip} {addr.city}
                </span>
              </div>
              <div className="px-3 sm:px-4 py-3 sm:py-3.5 flex justify-between items-center border-b border-line bg-white text-[13px] sm:text-sm">
                <span className="text-muted">Plaatsbezoek</span>
                <span className="text-ink font-medium">
                  {day?.dow} {day?.dnum} {day?.dmon} · {time}
                </span>
              </div>
              <div className="px-3 sm:px-4 py-3 sm:py-3.5 flex justify-between items-center bg-cream font-heading">
                <span className="text-ink text-sm font-medium">Totaal</span>
                <span className="text-[22px] sm:text-[24px] text-blue tracking-tight">
                  <span className="text-[0.6em] align-super text-gold-2 font-semibold mr-0.5">€</span>
                  {total}
                </span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-t border-line bg-[#fafaf3] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 rounded-lg border border-line-2 text-ink font-semibold text-[13px] sm:text-sm hover:bg-cream hover:border-blue transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Vorige
            </button>
          )}
          <div className="flex flex-col leading-none">
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.1em] text-muted uppercase">
              Indicatieve totaalprijs
            </span>
            <span className="font-heading text-[24px] sm:text-[30px] text-blue font-medium tracking-tight mt-1">
              <span className="text-[0.55em] align-super text-gold-2 font-semibold mr-0.5">€</span>
              {total || "—"}
            </span>
          </div>
        </div>
        <button
          disabled={!canNext[step]()}
          onClick={next}
          className={`inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] sm:text-base transition-all w-full sm:w-auto ${
            canNext[step]()
              ? "hover:bg-blue-2 hover:-translate-y-px hover:shadow-md"
              : "opacity-40 cursor-not-allowed"
          }`}
        >
          {step < 3 ? "Volgende stap" : "Aanvraag bevestigen"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
