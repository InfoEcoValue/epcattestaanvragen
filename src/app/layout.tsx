import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { localBusinessSchema } from "@/components/seo/schemas";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EPC attest aanvragen vanaf €90 | ECOVALUE",
    template: "%s | ECOVALUE",
  },
  description:
    "EPC keuring door erkende energiedeskundige. Afspraak binnen 3 dagen, EPC attest binnen 24 uur. Studio vanaf €90. Heel Vlaanderen.",
  metadataBase: new URL("https://www.epcattestaanvragen.com"),
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: "ECOVALUE",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl-BE"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`min-h-dvh flex flex-col antialiased font-sans`}>
        <SchemaOrg schema={localBusinessSchema} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
