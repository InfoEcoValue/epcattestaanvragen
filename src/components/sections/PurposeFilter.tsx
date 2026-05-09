import Link from "next/link";
import { Home, Briefcase, Pencil, ChevronRight } from "lucide-react";

const purposes = [
  {
    icon: Home,
    title: "Voor verkoop",
    desc: "Verplicht bij elke notariële akte",
    href: "/contact",
  },
  {
    icon: Briefcase,
    title: "Voor verhuur",
    desc: "Vereist bij elk nieuw huurcontract",
    href: "/contact",
  },
  {
    icon: Pencil,
    title: "Renovatieplicht",
    desc: "Label E of F? Binnen 5 jaar verbeteren",
    href: "/renovatieplicht",
  },
];

export function PurposeFilter() {
  return (
    <section className="bg-paper border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-9 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-4 sm:gap-9 items-center">
        <div className="font-mono text-[11px] tracking-[0.16em] uppercase text-gold-2 flex items-center gap-2.5">
          <span className="w-6 h-px bg-gold-2" />
          Waarom heeft u een EPC nodig?
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3.5">
          {purposes.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-4 items-center px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl bg-white border border-line-2 hover:border-blue hover:-translate-y-px hover:shadow-md transition-all text-left"
            >
              <span className="w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-[10px] bg-cream text-blue grid place-items-center shrink-0">
                <p.icon className="w-5 h-5" strokeWidth={1.8} />
              </span>
              <span>
                <strong className="block text-[14px] sm:text-[15px] font-semibold text-ink font-heading tracking-tight">
                  {p.title}
                </strong>
                <span className="block text-[12px] sm:text-[12.5px] text-muted mt-0.5 leading-snug">
                  {p.desc}
                </span>
              </span>
              <ChevronRight className="w-4 h-4 text-muted group-hover:translate-x-0.5 group-hover:text-blue transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
