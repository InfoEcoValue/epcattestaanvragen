export const BUSINESS = {
  name: "ECOVALUE",
  tagline: "Erkende EPC-deskundige",
  phone: "+32491543903",
  phoneDisplay: "0491 54 39 03",
  email: "info@ecovalue.be",
  address: {
    street: "Herentsesteenweg 104",
    city: "Wilsele",
    postalCode: "3012",
    country: "BE",
  },
  kvk: "1012.878.453",
  serviceArea: "Vlaanderen",
  website: "https://www.epcattestaanvragen.com",
  hours: "Ma-Vr 8:30-18:00 · Za op afspraak",
} as const;

export const PRICES = {
  studio: { label: "Studio", price: 90, desc: "Tot ±40 m², één wooneenheid", visit: "30-45 min" },
  appartement: { label: "Appartement", price: 125, desc: "Eén verdieping, één eenheid", visit: "±45 min" },
  rijwoning: { label: "Rijwoning", price: 150, desc: "Aaneengesloten, twee gemene muren", visit: "60 min", featured: true },
  halfopen: { label: "Halfopen bebouwing", price: 175, desc: "Eén gemene muur", visit: "60-75 min" },
  open: { label: "Open bebouwing", price: 200, desc: "Vrijstaande woning", visit: "75-90 min" },
} as const;

export const EXTRAS = [
  { id: "asbest", name: "Asbestattest", desc: "Verplicht voor woningen ≤2001", price: 195 },
  { id: "elek", name: "Elektrische keuring", desc: "Verplicht bij verkoop", price: 145 },
  { id: "premie", name: "Premie-dossierbeheer", desc: "We regelen het volledig", price: 95 },
] as const;

export const PROMISES = {
  appointmentDays: 3,
  certificateHours: 24,
  inspectionMinutes: "45 tot 60",
} as const;

export const EPC_LABELS = [
  { grade: "A+", range: "≤ 0 kWh/m²", desc: "Energieneutraal", color: "#1a8a5b" },
  { grade: "A", range: "≤ 100", desc: "Zeer energiezuinig", color: "#3aa370" },
  { grade: "B", range: "101 — 200", desc: "Energiezuinig", color: "#7eb85a" },
  { grade: "C", range: "201 — 300", desc: "Gemiddeld", color: "#bcc855" },
  { grade: "D", range: "301 — 400", desc: "Onder gemiddeld", color: "#e8c84a" },
  { grade: "E", range: "401 — 500", desc: "Renovatieplicht", color: "#e89a3c" },
  { grade: "F", range: "> 500", desc: "Renovatieplicht", color: "#c8552d" },
] as const;

export const NAV_LINKS = [
  { href: "/epc-waarden-tabel", label: "EPC waarden tabel" },
  {
    href: "/veelgestelde-vragen",
    label: "Veelgestelde vragen",
    children: [
      { href: "/epc-attest", label: "Wat is een EPC attest?" },
      { href: "/epc-attest-aanvragen", label: "Wanneer moet ik een EPC attest aanvragen?" },
      { href: "/epc-keuring-prijs", label: "EPC keuring prijs" },
      { href: "/epc-attest-prijs", label: "EPC attest prijs – Wat kost een EPC-attest?" },
      { href: "/epc-attest-geldigheid", label: "Hoe lang is EPC attest geldig?" },
      { href: "/epc-verplicht-verhuur", label: "Is een EPC attest verplicht bij verhuur?" },
      { href: "/wat-is-nodig-voor-een-epc-attest", label: "Wat is nodig voor EPC attest?" },
    ],
  },
  { href: "/diensten", label: "Diensten" },
  { href: "/contact", label: "Contact" },
] as const;

export const COVERAGE_CITIES = [
  "Antwerpen", "Gent", "Brugge", "Leuven", "Hasselt",
  "Mechelen", "Kortrijk", "Aalst", "Sint-Niklaas", "Genk",
  "Oostende", "Roeselare",
] as const;
