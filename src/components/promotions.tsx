"use client";

import { Copy, Percent, Tag } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/i18n/language-context";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function Promotions() {
  const { t } = useLanguage();
  const { promo } = t;
  const [copied, setCopied] = useState<string | null>(null);

  async function copyCode(code: string) {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(code);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(code);
    }
  }

  return (
    <section id="promo" className="relative overflow-x-clip py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-48 -translate-y-1/2 bg-gold/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
            {promo.eyebrow}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {promo.titleBefore}
            <span className="text-gradient-gold">{promo.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-muted">{promo.subtitle}</p>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2">
          {promo.items.map((item) => (
            <StaggerItem key={item.id}>
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-0.5 ${
                  item.highlight
                    ? "border-gold/40 bg-gradient-to-br from-gold/15 via-surface-elevated to-surface shadow-[0_0_40px_rgba(245,166,35,0.12)]"
                    : "border-gold/10 bg-surface hover:border-gold/25"
                }`}
              >
                <div className="mb-5 flex items-start justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-sm font-black text-[#1a0f08]">
                    <Percent className="h-3.5 w-3.5" aria-hidden />
                    {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-muted">{item.valid}</span>
                </div>

                <h3 className="text-xl font-extrabold text-cream sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {item.desc}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-gold/10 pt-5">
                  {item.code ? (
                    <button
                      type="button"
                      onClick={() => copyCode(item.code!)}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-dashed border-gold/40 bg-black/20 px-4 py-2 text-sm font-bold tracking-wide text-gold transition-colors hover:border-gold hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <Tag className="h-3.5 w-3.5" aria-hidden />
                      {item.code}
                      <Copy className="h-3.5 w-3.5 opacity-70" aria-hidden />
                      {copied === item.code && (
                        <span className="text-xs text-cream">{promo.copied}</span>
                      )}
                    </button>
                  ) : (
                    <span className="text-xs font-semibold text-muted">
                      {promo.noCode}
                    </span>
                  )}
                  <a
                    href="#order"
                    className="ml-auto cursor-pointer text-sm font-bold text-gold hover:text-gold-bright"
                  >
                    {promo.order}
                  </a>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
