import Link from "next/link";

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-paper border-b border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-2 sm:py-2.5">
        <ol className="flex items-center flex-wrap gap-x-1.5 gap-y-0.5 text-[11.5px] sm:text-[12.5px] text-muted">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-line-2 select-none">/</span>}
              {i === items.length - 1 ? (
                <span className="text-ink-2" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-blue transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
