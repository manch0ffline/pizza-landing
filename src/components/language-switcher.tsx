"use client";

import { motion, useReducedMotion } from "framer-motion";
import { locales } from "@/i18n/dictionaries";
import { useLanguage } from "@/i18n/language-context";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`relative inline-flex items-center rounded-full border border-gold/25 bg-black/10 p-0.5 dark:bg-black/20 ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((item) => {
        const active = locale === item.code;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLocale(item.code)}
            className={`relative z-10 cursor-pointer rounded-full px-2.5 py-1 text-xs font-extrabold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              active
                ? "bg-gold text-[var(--on-gold)] shadow-[0_0_14px_var(--gold-glow)]"
                : "text-muted hover:text-cream"
            }`}
            aria-pressed={active}
          >
            <motion.span
              key={`${item.code}-${active}`}
              initial={reduceMotion ? false : { opacity: 0.5, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              {item.label}
            </motion.span>
          </button>
        );
      })}
    </div>
  );
}
