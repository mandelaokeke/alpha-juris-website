"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/#practice-areas", label: "Practice Areas" },
  { href: "/#attorneys", label: "Attorneys" },
  { href: "/notable-results", label: "Notable Results" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isEnquiryOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsEnquiryOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isEnquiryOpen]);

  return (
    <header className="sticky top-0 z-30 mb-6 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-4 px-4 sm:px-6">
        <Link href="/#top" className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 shadow-md">
            <span className="select-none text-base font-semibold tracking-tight text-white">
              AJ
            </span>
            
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
              Alpha-Juris Chambers
            </p>
            <p className="text-xs text-slate-500">
              Advocates • Investment Solicitors • Abuja, Nigeria 🇳🇬
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setIsEnquiryOpen(true);
            }}
            className="rounded-full bg-blue-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-800"
          >
            Book Consultation
          </button>
        </div>
      </nav>

      {isEnquiryOpen ? (
        <div
          className="fixed inset-0 z-50"
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
          <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 sm:px-6">
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
                          placeholder="Mandela"
                        />
                      </label>

                      <label className="block">
                        <span className="text-xs font-semibold text-slate-700">Last name</span>
                        <input
                          required
                          name="lastName"
                          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-blue-900/20 focus:border-blue-900 focus:ring-4"
                          placeholder="Okeke"
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
