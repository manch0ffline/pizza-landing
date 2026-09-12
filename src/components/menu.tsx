"use client";

import Image from "next/image";
import { Flame } from "lucide-react";
import { formatPrice } from "@/i18n/dictionaries";
import { useLanguage } from "@/i18n/language-context";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function Menu() {
  const { t, locale } = useLanguage();
  const { menu } = t;

  return (
    <section id="menu" className="relative overflow-x-clip py-20 sm:py-28">
      <div className="absolute inset-0 bg-surface" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
            {menu.eyebrow}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {menu.titleBefore}
            <span className="text-gradient-gold">{menu.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-muted">{menu.subtitle}</p>
        </Reveal>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menu.items.map((pizza) => (
            <StaggerItem key={pizza.id}>
              <article className="card-glow card-interactive group flex h-full flex-col overflow-hidden rounded-3xl bg-background/60 ring-1 ring-gold/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={pizza.image}
                    alt={pizza.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <span
                    className={`absolute left-4 top-4 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold backdrop-blur-md ${
                      pizza.hot
                        ? "bg-gold/90 text-[#1a0f08]"
                        : "bg-black/55 text-cream"
                    }`}
                  >
                    {pizza.hot && <Flame className="h-3 w-3" aria-hidden />}
                    {pizza.tag}
                  </span>
                  <span className="absolute bottom-3 right-4 text-xs font-semibold text-cream/80">
                    {pizza.weight}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-xl font-extrabold text-cream sm:text-2xl">
                    {pizza.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {pizza.desc}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-gold/10 pt-4">
                    <span className="text-lg font-extrabold tabular-nums text-gold-bright">
                      {formatPrice(pizza.price, locale)}
                    </span>
                    <a
                      href="#order"
                      className="cursor-pointer rounded-full border border-gold/30 px-4 py-2 text-sm font-bold text-cream transition-all duration-200 hover:border-[color:var(--gold)] hover:bg-[color:var(--gold)] hover:text-[#1a0f08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {menu.add}
                    </a>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.12} className="mt-12 text-center">
          <p className="text-sm text-muted">{menu.footnote}</p>
          <a
            href="#order"
            className="mt-4 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-gold transition-colors hover:text-gold-bright"
          >
            {menu.orderFrom}
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
