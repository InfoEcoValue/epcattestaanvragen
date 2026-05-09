import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-deep text-cream">
      {/* CTA band */}
      <div className="bg-blue py-12 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 sm:gap-12 items-center">
          <div>
            <h2 className="font-heading font-medium text-white text-[clamp(26px,3.2vw,48px)] leading-tight tracking-tight">
              Klaar om <em className="text-gold italic">vandaag nog</em> te starten?
            </h2>
            <p className="text-cream/78 mt-3 sm:mt-4 text-[15px] sm:text-[17px] leading-relaxed max-w-[480px]">
              Vraag uw EPC-keuring aan en we bellen u binnen één werkdag terug om
              de afspraak vast te leggen.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 sm:gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] bg-gold text-blue-deep font-semibold text-[15px] sm:text-base hover:bg-gold-2 hover:text-white transition-all"
            >
              EPC aanvragen
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-[10px] border border-cream/25 text-cream font-semibold text-[15px] sm:text-base hover:bg-cream/10 transition-all"
            >
              Bel {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-16 pb-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
        <div className="col-span-2 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src="/images/Logo-ecovalue.jpg"
              alt="EcoValue logo"
              width={44}
              height={44}
              className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] rounded-[8px] sm:rounded-[9px] object-contain"
            />
            <div className="flex flex-col leading-none">
              <strong className="font-heading font-semibold text-[17px] sm:text-[19px] tracking-tight text-cream">
                ECOVALUE
              </strong>
              <span className="text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-cream/50 mt-0.5">
                Erkende EPC-deskundige
              </span>
            </div>
          </div>
          <p className="text-cream/70 text-[13px] sm:text-[14.5px] mt-3 sm:mt-3.5 max-w-[300px] leading-relaxed">
            Erkend energiedeskundige Type A. Actief in Antwerpen, Oost- en
            West-Vlaanderen, Limburg, Vlaams-Brabant.
          </p>
        </div>

        <div>
          <h4 className="text-[12px] sm:text-[13px] tracking-[0.12em] uppercase text-gold font-semibold mb-3 sm:mb-4">
            Diensten
          </h4>
          <ul className="flex flex-col gap-2 sm:gap-2.5 text-[13px] sm:text-[14.5px] text-cream/75">
            <li><Link href="/diensten" className="hover:text-white transition-colors">EPC keuring</Link></li>
            <li><Link href="/epc-waarde-verbeteren" className="hover:text-white transition-colors">Renovatieadvies</Link></li>
            <li><Link href="/epc-keuring-prijs" className="hover:text-white transition-colors">Tarieven</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] sm:text-[13px] tracking-[0.12em] uppercase text-gold font-semibold mb-3 sm:mb-4">
            Info
          </h4>
          <ul className="flex flex-col gap-2 sm:gap-2.5 text-[13px] sm:text-[14.5px] text-cream/75">
            <li><Link href="/over-ons" className="hover:text-white transition-colors">Over ons</Link></li>
            <li><Link href="/epc-attest" className="hover:text-white transition-colors">Wat is een EPC-attest?</Link></li>
            <li><Link href="/epc-waarden-tabel" className="hover:text-white transition-colors">EPC-waarden tabel</Link></li>
            <li><Link href="/epc-attest-geldigheid" className="hover:text-white transition-colors">Geldigheid attest</Link></li>
            <li><Link href="/veelgestelde-vragen" className="hover:text-white transition-colors">Veelgestelde vragen</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[12px] sm:text-[13px] tracking-[0.12em] uppercase text-gold font-semibold mb-3 sm:mb-4">
            Contact
          </h4>
          <ul className="flex flex-col gap-2 sm:gap-2.5 text-[13px] sm:text-[14.5px] text-cream/75">
            <li>{BUSINESS.phoneDisplay}</li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors">
                {BUSINESS.email}
              </a>
            </li>
            <li>Ma-Vr · 8:30-18:00</li>
            <li>Za · op afspraak</li>
          </ul>
        </div>
      </div>

      {/* E-E-A-T strip */}
      <div className="border-t border-cream/10 bg-blue-deep/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] sm:text-[12px] text-cream/45">
          <span>Erkend energiedeskundige <strong className="text-cream/65 font-medium">Type A</strong></span>
          <span>VEKA erkend · Vlaanderen</span>
          <span>Ondernemingsnummer: <strong className="text-cream/65 font-medium">1012.878.453</strong></span>
          <span>
            <a href="https://ecovalue.be" target="_blank" rel="noopener noreferrer" className="hover:text-cream/70 transition-colors">
              ecovalue.be
            </a>
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-5 sm:py-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-2 text-[12px] sm:text-[13px] text-cream/55">
        <span>&copy; {new Date().getFullYear()} ECOVALUE — epcattestaanvragen.com</span>
        <span className="flex gap-3">
          <Link href="/algemene-voorwaarden" className="hover:text-cream/80">Algemene voorwaarden</Link>
        </span>
      </div>
    </footer>
  );
}
