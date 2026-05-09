import { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.website;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/diensten`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/epc-keuring-prijs`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/epc-attest-prijs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/veelgestelde-vragen`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/epc-waarden-tabel`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/epc-attest`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/epc-attest-aanvragen`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/epc-attest-geldigheid`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/epc-verplicht-verhuur`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/wat-is-nodig-voor-een-epc-attest`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/over-ons`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/renovatieplicht`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/epc-waarde-berekenen`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/epc-waarde-verbeteren`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    ...["antwerpen","gent","brugge","leuven","hasselt","mechelen","kortrijk","aalst","sint-niklaas","genk","oostende","roeselare"].map((stad) => ({
      url: `${base}/epc-attest/${stad}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
