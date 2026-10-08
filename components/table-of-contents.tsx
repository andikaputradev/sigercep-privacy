export function TableOfContents({
  items,
}: {
  items: { id: string; title: string }[];
}) {
  return (
    <nav
      aria-label="Daftar isi"
      className="rounded-lg border border-border bg-card p-5"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Daftar Isi
      </p>
      <ol className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex gap-2 py-0.5 text-[13.5px] text-muted-foreground hover:text-primary"
            >
              <span className="tabular-nums text-foreground/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
