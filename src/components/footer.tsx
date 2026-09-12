"use client";

import { MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/language-context";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();
  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#why", label: t.nav.why },
    { href: "#menu", label: t.nav.menu },
    { href: "#promo", label: t.nav.promo },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#order", label: t.nav.order },
  ];

  return (
    <footer className="overflow-x-clip border-t border-gold/10 bg-surface">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-12 lg:items-start lg:gap-8 lg:px-10 lg:py-9">
        <div className="sm:col-span-2 lg:col-span-4">
          <a
            href="#top"
            className="group inline-flex cursor-pointer items-center gap-1 text-2xl font-black tracking-tight text-cream"
          >
            Pazz<span className="text-gradient-gold">o</span>
            <span className="ml-0.5 inline-block h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" />
          </a>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {t.footer.blurb}
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram PAZZO"
            className="mt-4 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gold/20 text-muted transition-colors hover:border-gold/50 hover:text-[color:var(--gold)]"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            {t.footer.navigate}
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm font-semibold text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="cursor-pointer transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            {t.footer.contact}
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" aria-hidden />
              {t.company.address}, {t.company.city}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--gold)]" aria-hidden />
              <a
                href={t.company.phoneHref}
                className="cursor-pointer font-semibold hover:text-cream"
              >
                {t.company.phone}
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[color:var(--gold)]">
            {t.footer.hours}
          </p>
          <p className="mt-3 text-sm text-muted">
            {t.company.hoursNote}
            <br />
            <span className="font-bold text-cream">{t.company.hours}</span>
          </p>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-4 py-3.5 text-xs text-muted sm:flex-row sm:px-6 lg:px-10">
          <p>
            © {new Date().getFullYear()} PAZZO. {t.footer.rights}
          </p>
          <p className="font-semibold tracking-wide text-[color:color-mix(in_srgb,var(--gold)_70%,transparent)]">
            {t.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
