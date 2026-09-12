"use client";

import { Award, Clock, Flame, Leaf, Star, Truck } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { Reveal, Stagger, StaggerItem } from "./reveal";

const icons = [Flame, Leaf, Truck, Clock, Award, Star];

export function Features() {
  const { t } = useLanguage();
  const { why } = t;

  return (
    <section id="why" className="relative overflow-x-clip py-20 sm:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[480px] -translate-x-1/2 rounded-full bg-gold/8 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
            {why.eyebrow}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {why.titleBefore}
            <span className="text-gradient-gold">{why.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-muted">{why.subtitle}</p>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {why.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <StaggerItem key={item.title}>
                <div className="group h-full rounded-3xl border border-gold/10 bg-surface p-7 transition-all duration-300 hover:border-gold/35 hover:bg-surface-elevated hover:shadow-[0_0_40px_rgba(245,166,35,0.1)]">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--gold)_14%,transparent)] transition-colors duration-300 group-hover:bg-[color-mix(in_srgb,var(--gold)_26%,transparent)] group-hover:shadow-[0_0_18px_var(--gold-glow)]">
                    <Icon
                      className="h-5 w-5 text-[color:var(--gold)]"
                      strokeWidth={2.25}
                      aria-hidden
                    />
                  </div>
                  <h3 className="text-lg font-extrabold text-cream">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
