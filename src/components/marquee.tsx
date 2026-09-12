"use client";

import { useLanguage } from "@/i18n/language-context";

export function Marquee() {
  const { t } = useLanguage();
  const doubled = [...t.marquee, ...t.marquee, ...t.marquee, ...t.marquee];

  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-surface py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent sm:w-28" />
      <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className={`text-sm font-extrabold uppercase tracking-[0.22em] ${
              item === "·" ? "text-gold/40" : "text-muted"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
