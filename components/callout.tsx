import type { ReactNode } from "react";

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div
      role="note"
      className="rounded-md border border-border bg-primary-soft/60 px-4 py-3 text-[14.5px] leading-6 text-foreground/90"
    >
      {children}
    </div>
  );
}
