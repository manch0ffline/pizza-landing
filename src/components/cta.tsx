"use client";

import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/i18n/language-context";
import { Reveal, Stagger, StaggerItem } from "./reveal";

export function Cta() {
  const { t } = useLanguage();
  const { order: o, company: c, menu } = t;
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="order" className="relative overflow-x-clip py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-gold/8 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <Reveal className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
            {o.eyebrow}
          </p>
          <h2 className="text-3xl font-black tracking-tight text-cream sm:text-4xl lg:text-5xl">
            {o.titleBefore}
            <span className="text-gradient-gold">{o.titleHighlight}</span>
          </h2>
        </Reveal>

        <Stagger className="mb-16 grid gap-5 sm:grid-cols-3">
          {o.steps.map((step) => (
            <StaggerItem key={step.n}>
              <div className="h-full rounded-3xl border border-gold/10 bg-surface p-6">
                <span className="text-sm font-extrabold tracking-widest text-gold">
                  {step.n}
                </span>
                <h3 className="mt-3 text-lg font-extrabold text-cream">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-surface-elevated via-surface to-background shadow-[0_0_80px_rgba(245,166,35,0.12)]">
          <div className="grid lg:grid-cols-2">
            <Reveal className="p-8 sm:p-10 lg:p-12">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.28em] text-gold">
                {o.contactEyebrow}
              </p>
              <h3 className="text-2xl font-black tracking-tight text-cream sm:text-3xl">
                {o.contactTitle}
              </h3>
              <p className="mt-3 text-muted">{o.contactSub}</p>

              <ul className="mt-10 space-y-5">
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <a
                      href={c.phoneHref}
                      className="cursor-pointer text-lg font-bold text-cream transition-colors hover:text-gold"
                    >
                      {c.phone}
                    </a>
                    <p className="text-sm text-muted">{o.phoneNote}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-bold text-cream">
                      {c.address}, {c.city}
                    </p>
                    <p className="text-sm text-muted">{o.addressNote}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                    <Clock className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-bold text-cream">{c.hours}</p>
                    <p className="text-sm text-muted">{o.hoursNote}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gold/12 text-gold">
                    <MessageCircle className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <a
                      href={`mailto:${c.email}`}
                      className="cursor-pointer font-bold text-cream transition-colors hover:text-gold"
                    >
                      {c.email}
                    </a>
                    <p className="text-sm text-muted">{o.emailNote}</p>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal
              delay={0.1}
              className="border-t border-gold/10 bg-black/25 p-8 sm:p-10 lg:border-l lg:border-t-0 lg:p-12"
            >
              {sent ? (
                <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Send className="h-7 w-7" aria-hidden />
                  </div>
                  <h3 className="text-2xl font-black text-cream">
                    {o.successTitle}
                  </h3>
                  <p className="mt-2 max-w-xs text-muted">{o.successText}</p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-6 cursor-pointer text-sm font-bold text-gold hover:text-gold-bright"
                  >
                    {o.sendAgain}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex h-full flex-col gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-bold text-cream"
                    >
                      {o.name}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder={o.namePh}
                      className="h-12 w-full rounded-2xl border border-gold/15 bg-white/5 px-4 text-cream placeholder:text-muted/50 outline-none transition-colors focus:border-gold/50 focus:ring-2 focus:ring-gold/25"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-bold text-cream"
                    >
                      {o.phone}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder={o.phonePh}
                      className="h-12 w-full rounded-2xl border border-gold/15 bg-white/5 px-4 text-cream placeholder:text-muted/50 outline-none transition-colors focus:border-gold/50 focus:ring-2 focus:ring-gold/25"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="pizza"
                      className="mb-1.5 block text-sm font-bold text-cream"
                    >
                      {o.pizza}{" "}
                      <span className="font-normal text-muted">
                        {o.pizzaOptional}
                      </span>
                    </label>
                    <select
                      id="pizza"
                      name="pizza"
                      defaultValue=""
                      className="h-12 w-full cursor-pointer rounded-2xl border border-gold/15 bg-white/5 px-4 text-cream outline-none transition-colors focus:border-gold/50 focus:ring-2 focus:ring-gold/25"
                    >
                      <option value="" disabled className="bg-surface text-muted">
                        {o.pizzaPlaceholder}
                      </option>
                      {menu.items.map((item) => (
                        <option
                          key={item.id}
                          value={item.id}
                          className="bg-surface"
                        >
                          {item.name}
                        </option>
                      ))}
                      <option value="other" className="bg-surface">
                        {o.pizzaOther}
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="note"
                      className="mb-1.5 block text-sm font-bold text-cream"
                    >
                      {o.note}
                    </label>
                    <textarea
                      id="note"
                      name="note"
                      rows={2}
                      placeholder={o.notePh}
                      className="w-full resize-none rounded-2xl border border-gold/15 bg-white/5 px-4 py-3 text-cream placeholder:text-muted/50 outline-none transition-colors focus:border-gold/50 focus:ring-2 focus:ring-gold/25"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary mt-auto inline-flex h-12 cursor-pointer items-center justify-center gap-2 rounded-full font-extrabold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    {o.submit}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                  <p className="text-center text-xs text-muted">{o.consent}</p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
