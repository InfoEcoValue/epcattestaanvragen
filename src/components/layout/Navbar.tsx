"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-blue-deep text-blue-soft/85 text-[12px] sm:text-[13px] tracking-wide">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 sm:py-2.5 flex justify-center sm:justify-between items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow shadow-[0_0_0_3px_rgba(244,196,48,.22)]" />
            <span>Plaatsbezoek gegarandeerd binnen 3 dagen</span>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${BUSINESS.phone}`} className="hover:text-white transition-colors">
              {BUSINESS.phoneDisplay}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="hover:text-white transition-colors">
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-40 bg-paper/92 backdrop-blur-md border-b border-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-4 sm:gap-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <img
              src="/images/Logo-ecovalue.jpg"
              alt="EcoValue logo"
              width={44}
              height={44}
              className="w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] rounded-[9px] object-contain"
            />
            <div className="flex flex-col leading-none">
              <strong className="font-heading font-semibold text-[17px] sm:text-[19px] tracking-tight text-ink">
                ECOVALUE
              </strong>
              <span className="text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-muted mt-0.5">
                Erkende EPC-deskundige
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7 text-[14.5px] font-medium text-ink-2">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 hover:text-blue transition-colors"
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[340px] bg-white border border-line rounded-xl shadow-lg py-2 z-50">
                      <Link
                        href={link.href}
                        className="block px-4 py-2.5 text-[14px] text-ink-2 hover:bg-cream hover:text-blue transition-colors font-semibold"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Alle veelgestelde vragen
                      </Link>
                      <div className="h-px bg-line mx-3 my-1" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-[14px] text-ink-2 hover:bg-cream hover:text-blue transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-blue transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 sm:gap-3.5">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="hidden md:flex items-center gap-2 text-[14.5px] font-medium text-ink"
            >
              <Phone className="w-4 h-4 text-blue" />
              {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-lg bg-blue text-cream font-semibold text-[13px] sm:text-[14.5px] hover:bg-blue-2 transition-all hover:-translate-y-px hover:shadow-md"
            >
              Jouw prijs berekenen
            </Link>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2.5 -mr-1"
              onClick={() => setOpen(!open)}
              aria-label="Menu openen"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-line bg-paper px-4 sm:px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              "children" in link && link.children ? (
                <div key={link.href}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full flex items-center justify-between text-[15px] font-medium text-ink-2 py-3 hover:text-blue"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="pl-4 pb-2 flex flex-col gap-0.5">
                      <Link
                        href={link.href}
                        className="text-[14px] text-ink-2 py-2.5 hover:text-blue font-semibold"
                        onClick={() => setOpen(false)}
                      >
                        Alle veelgestelde vragen
                      </Link>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-[14px] text-ink-2 py-2.5 hover:text-blue"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-medium text-ink-2 py-3 hover:text-blue"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 text-[15px] font-medium text-ink py-3"
            >
              <Phone className="w-4 h-4 text-blue" />
              {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue text-cream font-semibold text-[15px]"
              onClick={() => setOpen(false)}
            >
              Jouw prijs berekenen
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
