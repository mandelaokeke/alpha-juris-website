// app/Header.tsx (or wherever your Header lives)
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = { href: string; label: string };

type HeaderProps = {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  logoSrc?: string;
  firmName?: string;
  tagline?: string;
};

export default function Header({
  links,
  ctaLabel = "Book Consultation",
  ctaHref = "/contact",
  logoSrc = "/alpha-juris-logo.png",
  firmName = "ALPHA-JURIS CHAMBERS",
  tagline = "Advocates • Investment Solicitors • Abuja, Nigeria",
}: HeaderProps) {
  const defaultLinks = useMemo<NavLink[]>(
    () => [
      { href: "/", label: "Home" },
      { href: "/practice-areas", label: "Practice Areas" },
      { href: "/attorneys", label: "Attorneys" },
      { href: "/why-us", label: "Notable Results" },
      { href: "/publications", label: "Publications" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  const navLinks = Array.isArray(links) && links.length ? links : defaultLinks;

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setIsOpen(false);
      setIsEnquiryOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl supports-backdrop-filter:bg-white/60 " +
        (isScrolled
          ? "border-b border-slate-200/70 shadow-[0_10px_30px_rgba(2,6,23,0.08)]"
          : "border-b border-transparent")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-10">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-left"
          aria-label="Go to homepage"
        >
          <span className="relative h-14 w-14 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-[0_10px_25px_rgba(2,6,23,0.08)] ring-1 ring-slate-900/5">
            <Image
              src={logoSrc}
              alt="Alpha-Juris logo"
              fill
              sizes="64px"
              className="object-contain p-2"
              priority
            />
          </span>

          <span className="leading-tight">
            <span className="block text-[0.86rem] font-semibold tracking-[0.18em] text-slate-950">
              {firmName}
            </span>
            <span className="block text-[0.78rem] text-slate-600/90">{tagline}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={`${l.href}-${l.label}`}
                href={l.href}
                className={
                  "group relative text-[0.92rem] font-serif font-medium tracking-[0.02em] text-slate-600 transition-colors hover:text-slate-950 " +
                  (isActive ? "text-slate-950" : "")
                }
              >
                {l.label}
                <span
                  aria-hidden
                  className={
                    "absolute -bottom-2 left-0 h-0.5 w-full rounded-full transition-opacity " +
                    (isActive
                      ? "bg-linear-to-r from-blue-900 to-indigo-700 opacity-100"
                      : "bg-linear-to-r from-blue-900 to-indigo-700 opacity-0 group-hover:opacity-70")
                  }
                />
              </Link>
            );
          })}

          <span className="ml-2 h-6 w-px bg-slate-200/70" aria-hidden />

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setIsEnquiryOpen(true);
            }}
            className="ml-3 inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-900 to-indigo-800 px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.20em] text-white shadow-[0_12px_30px_rgba(2,6,23,0.18)] ring-1 ring-slate-900/10 transition hover:from-blue-800 hover:to-indigo-700"
          >
            {ctaLabel}
          </button>
        </nav>

        {/* Mobile button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 px-3 py-2 text-sm font-semibold text-slate-900 shadow-[0_10px_25px_rgba(2,6,23,0.08)] ring-1 ring-slate-900/5"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Gold accent line (shows on scroll) */}
      {isScrolled ? (
        <div
          aria-hidden
          className="h-px w-full bg-linear-to-r from-amber-200 via-yellow-500 to-amber-200 opacity-80"
        />
      ) : null}

      {/* Mobile menu */}
      {isOpen ? (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-10">
            <div className="grid gap-2">
              {navLinks.map((l) => (
                <Link
                  key={`${l.href}-${l.label}-m`}
                  href={l.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-900"
                >
                  {l.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setSubmitted(false);
                  setIsEnquiryOpen(true);
                }}
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-blue-900 to-indigo-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(2,6,23,0.18)] ring-1 ring-slate-900/10 transition hover:from-blue-800 hover:to-indigo-700"
              >
                {ctaLabel}
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {isEnquiryOpen ? (
        <div
          className="fixed inset-0 z-60"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close enquiry form"
            className="absolute inset-0 bg-slate-950/50"
            onClick={() => setIsEnquiryOpen(false)}
          />

          {/* Panel */}
          <div className="relative mx-auto flex min-h-screen items-center justify-center px-4 sm:px-6">
            <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-[0_22px_70px_rgba(15,23,42,0.35)] ring-1 ring-slate-200">
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-600">
                    Enquiry
                  </p>
                  <h2 id="enquiry-title" className="mt-1 text-lg font-semibold text-slate-900">
                    Book a consultation
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setIsEnquiryOpen(false)}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
              </div>

              <div className="px-6 py-5">
                {!submitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="text-xs font-semibold text-slate-700">First name</span>
                        <input
                          required
                          name="firstName"
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-900/20 focus:border-blue-900 focus:ring-4"
                          placeholder="First name"
                        />
                      </label>

                      <label className="block">
                        <span className="text-xs font-semibold text-slate-700">Last name</span>
                        <input
                          required
                          name="lastName"
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-900/20 focus:border-blue-900 focus:ring-4"
                          placeholder="Last name"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-xs font-semibold text-slate-700">Email</span>
                      <input
                        required
                        type="email"
                        name="email"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-900/20 focus:border-blue-900 focus:ring-4"
                        placeholder="you@email.com"
                      />
                    </label>

                    <label className="block">
                      <span className="text-xs font-semibold text-slate-700">Phone (optional)</span>
                      <input
                        type="tel"
                        name="phone"
                        className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-900/20 focus:border-blue-900 focus:ring-4"
                        placeholder="+234 ..."
                      />
                    </label>

                    <label className="block">
                      <span className="text-xs font-semibold text-slate-700">How can we help?</span>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        className="mt-1 w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-900/20 focus:border-blue-900 focus:ring-4"
                        placeholder="Briefly describe your matter and preferred time for a call."
                      />
                    </label>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsEnquiryOpen(false)}
                        className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-900 hover:bg-slate-50"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-full bg-blue-900 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-800"
                      >
                        Submit enquiry
                      </button>
                    </div>

                    <p className="text-[0.72rem] leading-relaxed text-slate-500">
                      Submitting this form does not create an attorney-client relationship.
                    </p>
                  </form>
                ) : (
                  <div className="space-y-3">
                    <h3 className="text-base font-semibold text-slate-900">Thank you.</h3>
                    <p className="text-sm leading-relaxed text-slate-600">
                      We’ve received your enquiry. A member of our team will reach out shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsEnquiryOpen(false)}
                      className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-900 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-800"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}