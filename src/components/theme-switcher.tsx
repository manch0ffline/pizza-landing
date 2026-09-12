"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/theme/theme-context";

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-gold/25 bg-black/10 text-gold transition-colors duration-300 hover:border-gold/50 hover:bg-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold dark:bg-black/20 ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light" : "Dark"}
    >
      <motion.span
        key={theme}
        initial={reduceMotion ? false : { y: 12, opacity: 0, rotate: -40, scale: 0.6 }}
        animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="h-4 w-4" strokeWidth={2.25} />
        ) : (
          <Moon className="h-4 w-4" strokeWidth={2.25} />
        )}
      </motion.span>
    </button>
  );
}
