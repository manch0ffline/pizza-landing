"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useLanguage } from "@/i18n/language-context";

/** Crossfade + soft rise when EN/UA switches */
export function LocaleTransition({ children }: { children: ReactNode }) {
  const { locale } = useLanguage();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locale}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-x-clip"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
