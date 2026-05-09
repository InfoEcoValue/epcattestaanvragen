import { Shield, Clock, Calendar, Plus } from "lucide-react";

const items = [
  { icon: Shield, bold: "Erkend", text: "energiedeskundige Type A" },
  { icon: Clock, bold: "24u", text: "attest in mailbox na bezoek" },
  { icon: Calendar, text: "Afspraak", bold2: "binnen 3 dagen" },
  { icon: Plus, text: "Combineer met", bold2: "asbest- & elektrische keuring" },
];

export function TrustStrip() {
  return (
    <div className="bg-cream border-t border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-5 grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-between items-center gap-3 sm:gap-6">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 sm:gap-3">
            {i > 0 && (
              <div className="hidden lg:block w-px h-7 bg-line-2 -ml-3 mr-3" />
            )}
            <item.icon className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] text-blue shrink-0" strokeWidth={1.8} />
            <span className="text-[12px] sm:text-sm text-ink-2 leading-snug">
              {item.bold && <strong className="text-ink font-semibold">{item.bold} </strong>}
              {item.text}
              {item.bold2 && <strong className="text-ink font-semibold"> {item.bold2}</strong>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
