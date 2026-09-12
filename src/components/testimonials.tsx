"use client";

import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function Testimonials() {
  const { t } = useLanguage();
  const { reviews } = t;

  return (
    <section id="reviews" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-surface" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
            {reviews.eyebrow}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {reviews.titleBefore}
            <span className="text-gradient-gold">{reviews.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-muted">{reviews.subtitle}</p>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.items.map((r) => (
            <StaggerItem key={r.name}>
              <figure className="flex h-full flex-col rounded-3xl border border-gold/10 bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gold/30">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <Quote className="h-7 w-7 text-gold/40" aria-hidden />
                  <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[11px] font-bold text-gold">
                    {r.pizza}
                  </span>
                </div>
                <blockquote className="flex-1 text-[15px] leading-relaxed text-cream/90">
                  «{r.text}»
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-gold/10 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 font-extrabold text-gold">
                    {r.name.charAt(0)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-bold text-cream">{r.name}</p>
                    <p className="text-xs text-muted">{r.role}</p>
                  </div>
                  <div
                    className="flex shrink-0 gap-0.5"
                    aria-label={`${r.rating} / 5`}
                  >
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-gold text-gold"
                      />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
