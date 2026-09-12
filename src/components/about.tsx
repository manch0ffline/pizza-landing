"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/language-context";
import { Reveal } from "./reveal";

export function About() {
  const { t } = useLanguage();
  const { about: a } = t;

  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-surface" aria-hidden />
      <div
        className="pointer-events-none absolute -left-20 top-0 h-80 w-80 rounded-full bg-gold/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 md:items-center md:gap-10 lg:gap-16 lg:px-10">
        <Reveal variant="slide-right">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
            {a.eyebrow}
          </p>
          <h2 className="text-3xl font-black leading-[1.1] tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {a.titleBefore}
            <span className="text-gradient-gold">{a.titleHighlight}</span>
            {a.titleAfter}
          </h2>

          <div className="mt-6 space-y-4">
            {a.paragraphs.map((p) => (
              <p key={p.slice(0, 32)} className="text-base leading-relaxed text-muted sm:text-lg">
                {p}
              </p>
            ))}
          </div>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {a.milestones.map((m, i) => (
              <Reveal key={m.year} delay={0.08 * i}>
                <li className="rounded-2xl border border-gold/15 bg-background/40 p-4">
                  <span className="text-sm font-extrabold text-gold">{m.year}</span>
                  <p className="mt-1 text-sm font-semibold leading-snug text-cream">
                    {m.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-8 rounded-2xl glass p-4 md:hidden">
            <p className="text-xs font-extrabold uppercase tracking-wider text-gold">
              {a.badgeLabel}
            </p>
            <p className="mt-1 text-xl font-extrabold text-cream">{a.badgeTitle}</p>
            <p className="mt-1 text-sm text-muted">{a.badgeSub}</p>
          </div>
        </Reveal>

        <Reveal variant="slide-left" delay={0.1} className="relative hidden md:block">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] ring-1 ring-gold/20 sm:aspect-[4/5] lg:aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-wood via-surface-elevated to-background transition-colors duration-500" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,color-mix(in_srgb,var(--gold)_28%,transparent),transparent_60%)]" />
            <div className="relative flex h-full items-center justify-center p-8 sm:p-12">
              <div className="relative h-full w-full max-h-[440px] animate-float-bob">
                <Image
                  src="/mascot-about.png"
                  alt={a.mascotAlt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-contain drop-shadow-[0_20px_40px_var(--shadow-soft)]"
                />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl glass p-4 sm:left-auto sm:right-6 sm:w-64">
              <p className="text-xs font-extrabold uppercase tracking-wider text-gold">
                {a.badgeLabel}
              </p>
              <p className="mt-1 text-xl font-extrabold text-cream">{a.badgeTitle}</p>
              <p className="mt-1 text-sm text-muted">{a.badgeSub}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
