"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeSwitcher } from "./theme-switcher";

export function Navbar() {
  const { t, locale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#why", label: t.nav.why },
    { href: "#menu", label: t.nav.menu },
    { href: "#promo", label: t.nav.promo },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#order", label: t.nav.order },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.button
            type="button"
            aria-label={t.nav.closeMenu}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 cursor-pointer border-0 bg-black/55 backdrop-blur-md lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <header
        className={`nav-shell fixed inset-x-0 top-0 z-50 ${
          open ? "is-open" : scrolled ? "is-scrolled" : ""
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
          <a
            href="#top"
            className="group flex shrink-0 cursor-pointer items-center gap-1"
            aria-label="PAZZO — home"
          >
            <span className="text-[1.65rem] font-black tracking-tight text-cream transition-transform duration-300 group-hover:scale-[1.02] sm:text-[1.85rem]">
              Pazz
            </span>
            <span className="text-[1.65rem] font-black tracking-tight text-gradient-gold sm:text-[1.85rem]">
              o
            </span>
            <span className="ml-0.5 inline-block h-2 w-2 rounded-full bg-gold shadow-[0_0_10px_var(--gold)] transition-transform duration-300 group-hover:scale-150 group-hover:animate-soft-pulse" />
          </a>

          <ul className="hidden items-center gap-5 lg:flex xl:gap-7">
            {links.map((link) => (
              <li key={link.href} className="overflow-hidden">
                <a
                  href={link.href}
                  className="group relative cursor-pointer text-[14px] font-semibold text-cream/85 transition-colors duration-200 hover:text-[color:var(--gold)] focus-visible:outline-none focus-visible:text-[color:var(--gold)]"
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`${locale}-${link.label}`}
                      initial={reduceMotion ? false : { y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={reduceMotion ? undefined : { y: -10, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="inline-block"
                    >
                      {link.label}
                    </motion.span>
                  </AnimatePresence>
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2.5 lg:flex">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <motion.a
              href="#order"
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              className="btn-outline group inline-flex h-11 cursor-pointer items-center gap-2 rounded-full px-5 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${locale}-cta`}
                  initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {t.nav.orderCta}
                </motion.span>
              </AnimatePresence>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </motion.a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeSwitcher />
            <LanguageSwitcher />
            <button
              type="button"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gold/30 text-cream transition-transform active:scale-95"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "m"}
                  initial={reduceMotion ? false : { rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={reduceMotion ? undefined : { rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="flex"
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden border-t border-gold/25 bg-surface lg:hidden"
            >
              <ul className="flex flex-col gap-2 px-4 py-5">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.22 }}
                  >
                    <a
                      href={link.href}
                      className="flex min-h-12 cursor-pointer items-center rounded-2xl border border-gold/20 bg-background px-4 text-base font-bold text-cream transition-colors hover:border-gold/50 hover:bg-gold/10 hover:text-[color:var(--gold)]"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <li className="pt-1">
                  <a
                    href="#order"
                    onClick={() => setOpen(false)}
                    className="btn-primary flex h-12 cursor-pointer items-center justify-center rounded-full font-extrabold"
                  >
                    {t.nav.orderCta}
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
