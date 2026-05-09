function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("nl-BE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function LastUpdated({ date }: { date: string }) {
  return (
    <p className="mt-2 sm:mt-3 text-[11px] sm:text-[12px] text-cream/45 font-mono tracking-wide">
      Bijgewerkt:{" "}
      <time dateTime={date}>{formatDate(date)}</time>
    </p>
  );
}
