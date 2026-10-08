import type { ReactNode } from "react";

export function PolicySection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="flex items-baseline gap-3 text-xl text-foreground sm:text-[22px]">
        <span className="text-sm font-medium text-primary">
          {String(number).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="prose-policy mt-4 space-y-4 text-[15.5px] leading-7 text-foreground/90">
        {children}
      </div>
    </section>
  );
}
