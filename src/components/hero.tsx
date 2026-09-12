"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, LayoutGrid } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";

export function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="hero-warm-bg relative flex min-h-0 flex-col items-stretch overflow-hidden pt-[72px] md:min-h-[min(100dvh,900px)] md:justify-center"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="animate-pulse-glow absolute right-[-5%] top-[10%] h-[min(70vh,560px)] w-[min(70vw,560px)] rounded-full bg-gold/30 blur-[140px]" />
        <div className="animate-float-slow absolute bottom-[-10%] right-[5%] h-[420px] w-[420px] rounded-full bg-gold/20 blur-[120px]" />
        <div className="absolute left-0 top-1/3 h-[300px] w-[300px] rounded-full bg-gold-deep/15 blur-[100px]" />
        <div className="bg-noise absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,transparent_0%,color-mix(in_srgb,var(--background)_55%,transparent)_70%,var(--background)_100%)]" />
        <span className="absolute right-[28%] top-[22%] h-1.5 w-1.5 rounded-full bg-gold-bright/90 shadow-[0_0_10px_var(--gold)] [animation:sparkle_3s_ease-in-out_infinite]" />
        <span className="absolute right-[18%] top-[38%] h-1 w-1 rounded-full bg-gold/80 [animation:sparkle_4s_ease-in-out_0.6s_infinite]" />
        <span className="absolute right-[40%] top-[48%] h-1 w-1 rounded-full bg-gold-bright/50 [animation:sparkle_3.2s_ease-in-out_1.2s_infinite]" />
      </div>

      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden>
        <Leaf
          className={`absolute right-[42%] top-[26%] h-7 w-7 text-emerald-600/40 ${reduceMotion ? "" : "animate-float-slow"}`}
          style={{ transform: "rotate(-25deg)" }}
        />
        <Leaf
          className={`absolute right-[8%] top-[42%] h-5 w-5 text-emerald-500/35 ${reduceMotion ? "" : "animate-float-bob"}`}
          style={{ transform: "rotate(40deg)" }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-6 px-4 py-12 sm:px-6 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-2 lg:px-10 lg:py-8">
        <div className="max-w-xl md:pb-6 lg:pb-10">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-xs font-extrabold uppercase tracking-[0.28em] text-gold sm:text-sm"
          >
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,6.5vw,5rem)] font-black leading-[0.98] tracking-tight text-cream"
          >
            {t.hero.titleLine1}
            <br />
            <span className="text-gradient-gold">{t.hero.titlePizza}</span>
            <br />
            {t.hero.titleLine3}
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href="#order"
              className="btn-primary group inline-flex h-12 cursor-pointer items-center gap-2 rounded-full px-7 text-base font-extrabold transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.hero.orderNow}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#menu"
              className="btn-outline inline-flex h-12 cursor-pointer items-center gap-2 rounded-full px-6 text-base font-bold transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <LayoutGrid className="h-4 w-4 text-gold" aria-hidden />
              {t.hero.viewMenu}
            </a>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5" aria-hidden>
                {["#f5a623", "#e08912", "#c45a12", "#8b4512"].map((c, i) => (
                  <span
                    key={c}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1a1008] text-xs font-bold text-cream"
                    style={{
                      background: `linear-gradient(135deg, ${c}, #3a2010)`,
                      zIndex: 4 - i,
                    }}
                  >
                    {["A", "M", "K", "S"][i]}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-gold/95">{t.hero.lovedBy}</p>
            </div>
            <div className="hidden h-8 w-px bg-white/10 sm:block" aria-hidden />
            <p className="text-sm font-semibold text-muted">{t.hero.rating}</p>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.88, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden w-full max-w-[300px] md:block lg:max-w-none lg:justify-self-end"
        >
          <div
            className={`relative mx-auto w-full max-w-[340px] lg:max-w-[620px] ${
              reduceMotion ? "" : "animate-float-bob"
            }`}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.45)_0%,rgba(196,90,18,0.2)_40%,transparent_70%)] blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-[4%] left-1/2 h-10 w-[58%] -translate-x-1/2 rounded-[100%] bg-black/50 blur-2xl"
              aria-hidden
            />
            <div className="relative aspect-[1/0.95] w-full">
              <Image
                src="/mascot-hero.png"
                alt={t.hero.mascotAlt}
                fill
                priority
                sizes="(max-width: 768px) 0px, (max-width: 1024px) 40vw, 50vw"
                className="object-contain object-bottom drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)] select-none"
                draggable={false}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="relative z-10 mx-auto mt-8 mb-4 flex cursor-pointer flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.25em] text-muted/80 transition-colors hover:text-gold md:absolute md:bottom-6 md:left-1/2 md:mt-0 md:mb-0 md:-translate-x-1/2"
      >
        {t.hero.scroll}
        <span className="animate-scroll-hint flex h-8 w-5 items-start justify-center rounded-full border border-gold/40 pt-1.5">
          <ChevronDown className="h-3 w-3 text-gold" aria-hidden />
        </span>
      </a>
    </section>
  );
}

function Leaf({
  className,
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="currentColor"
      aria-hidden
    >
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.1.07.21.12.33.17C9 21 12 18 14 15c3-4 3-9 3-9zM8.09 17.43c1.4-2.5 3.55-4.55 6.28-5.82-1.33 2.68-3.2 4.87-5.4 6.5-.3-.2-.6-.43-.88-.68z" />
    </svg>
  );
}
