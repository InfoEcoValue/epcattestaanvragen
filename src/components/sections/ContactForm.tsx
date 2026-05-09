"use client";

import { useState } from "react";
import { PRICES, BUSINESS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

type FormState = "idle" | "submitting" | "sent";

const propertyTypes = Object.entries(PRICES).map(([key, val]) => ({
  value: key,
  label: val.label,
  price: val.price,
}));

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");

    const selected = propertyTypes.find((p) => p.value === form.propertyType);
    const body = [
      `Naam: ${form.name}`,
      `E-mail: ${form.email}`,
      `Telefoon: ${form.phone}`,
      `Type woning: ${selected?.label ?? form.propertyType}`,
      `Adres woning: ${form.address}`,
      `Bericht: ${form.message}`,
    ].join("\n");

    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent("EPC keuring aanvragen — " + (selected?.label ?? "woning"))}&body=${encodeURIComponent(body)}`;

    setTimeout(() => setState("sent"), 800);
  };

  if (state === "sent") {
    return (
      <div className="p-8 bg-white rounded-xl sm:rounded-2xl border border-line text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-heading text-[20px] sm:text-[24px] font-medium mb-2">
          Uw e-mailprogramma is geopend
        </h3>
        <p className="text-[14px] sm:text-[15px] text-ink-2 leading-relaxed">
          Stuur de e-mail om uw aanvraag te bevestigen. We nemen binnen één
          werkdag contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-[13px] font-medium text-ink mb-1.5"
          >
            Naam <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Jan Janssen"
            className="w-full px-4 py-3 rounded-lg border border-line bg-white text-[14px] text-ink placeholder:text-muted focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-[13px] font-medium text-ink mb-1.5"
          >
            Telefoon <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="0491 00 00 00"
            className="w-full px-4 py-3 rounded-lg border border-line bg-white text-[14px] text-ink placeholder:text-muted focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-[13px] font-medium text-ink mb-1.5"
        >
          E-mailadres <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="jan@voorbeeld.be"
          className="w-full px-4 py-3 rounded-lg border border-line bg-white text-[14px] text-ink placeholder:text-muted focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="propertyType"
          className="block text-[13px] font-medium text-ink mb-1.5"
        >
          Type woning <span className="text-red-500">*</span>
        </label>
        <select
          id="propertyType"
          name="propertyType"
          required
          value={form.propertyType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-line bg-white text-[14px] text-ink focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors appearance-none"
        >
          <option value="">Kies een type woning…</option>
          {propertyTypes.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label} — €{p.price}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="address"
          className="block text-[13px] font-medium text-ink mb-1.5"
        >
          Adres van de woning <span className="text-red-500">*</span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          required
          value={form.address}
          onChange={handleChange}
          placeholder="Straat 1, 1000 Brussel"
          className="w-full px-4 py-3 rounded-lg border border-line bg-white text-[14px] text-ink placeholder:text-muted focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[13px] font-medium text-ink mb-1.5"
        >
          Bijkomende informatie{" "}
          <span className="text-muted font-normal">(optioneel)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Beschrijf eventuele bijzonderheden over de woning of uw beschikbaarheid…"
          className="w-full px-4 py-3 rounded-lg border border-line bg-white text-[14px] text-ink placeholder:text-muted focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[10px] bg-blue text-cream font-semibold text-[15px] hover:bg-blue-2 transition-all disabled:opacity-60"
      >
        {state === "submitting" ? "Verzenden…" : "EPC keuring aanvragen"}
        <ArrowRight className="w-4 h-4" />
      </button>

      <p className="text-center text-[12px] text-muted">
        Of bel ons direct:{" "}
        <a
          href={`tel:${BUSINESS.phone}`}
          className="text-blue font-medium hover:underline"
        >
          {BUSINESS.phoneDisplay}
        </a>
      </p>
    </form>
  );
}
