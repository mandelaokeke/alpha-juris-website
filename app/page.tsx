// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export default function HomePage() {
  return <HeroLanding />;
}

function HeroLanding() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const [showScrollCue, setShowScrollCue] = useState(true);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Hide once the user has clearly started scrolling past the hero
    setShowScrollCue(latest < 0.06);
  });

  return (
    <>
      {/* HERO (full-bleed background, aligned content) */}
      <section
        ref={heroRef}
        className="relative mb-0 w-full min-h-[90vh] overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-slate-900"
      >
        {/* Background image (parallax) */}
        <motion.div
          style={{
            y: yBackground,
            backgroundImage: "url('/hero-law.jpg')",
          }}
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 filter grayscale-25 contrast-110 saturate-125"
          aria-hidden
        />

        {/* Overlays */}
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-r from-slate-950/70 via-slate-950/45 to-blue-950/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/35 via-transparent to-black/35"
          aria-hidden
        />

        {/* Aligned content container */}
        <div className="relative z-10 site-container grid gap-6 pt-16 pb-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-start md:pt-20 md:pb-14">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl space-y-7 rounded-3xl bg-white/80 p-8 backdrop-blur-md ml-4 sm:ml-6 md:ml-10"
          >
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-900/20 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-700">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C9A24D]" />
              Alpha Juris Chambers • Precision. Advocacy. Results.
            </p>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-tight">
              Commercial‑minded advocacy
              <span className="block">for high‑stakes matters</span>
            </h1>

            <motion.div
              className="h-1 w-16 rounded-full bg-[#C9A24D]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ originX: 0 }}
            />

            <p className="max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
              Alpha‑Juris Chambers advises businesses and professionals on corporate
              transactions and complex litigation across Nigeria, combining sharp legal
              analysis with practical, business‑focused judgment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-950/35 transition hover:-translate-y-0.5 hover:bg-blue-800 hover:ring-2 hover:ring-[#C9A24D]/70"
              >
                Schedule a Call
              </Link>
              <Link
                href="/practice-areas"
                className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline"
              >
                Explore practice areas
              </Link>
            </div>
          </motion.div>

          {/* Right grouped stack */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="flex w-full justify-start"
          >
            <div className="w-full max-w-2xl space-y-6">
              <div className="relative w-full overflow-hidden rounded-3xl bg-white/95 shadow-xl shadow-slate-950/35 backdrop-blur-md">
                {/* Media */}
                <div className="relative h-56 w-full">
                  <Image
                    src="/law-library.jpg"
                    alt="Law library shelves and legal references"
                    fill
                    priority
                    className="object-cover grayscale-35 saturate-110 transition duration-300 hover:grayscale-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/85 via-white/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full border border-[#C9A24D]/45 bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-blue-950">
                    Trusted counsel • Established 1992
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-blue-900">
                    About Alpha-Juris Chambers
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-slate-700">
                    <p>
                      Alpha‑Juris Chambers is a full‑service Nigerian law firm established in 1992,
                      with offices in Abuja, Lagos, Port Harcourt and Calabar.
                    </p>
                    <p>
                      The firm is known for clear advice, disciplined advocacy and results‑driven
                      representation across commercial, corporate and dispute‑resolution matters.
                    </p>
                  </div>

                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    <div className="group rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm shadow-slate-950/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-slate-300/70 hover:bg-white/85">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Offices
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-snug text-slate-900">
                        Abuja • Lagos • Port Harcourt • Calabar
                      </p>
                    </div>
                    <div className="group rounded-2xl border border-slate-200/70 bg-white/70 p-4 shadow-sm shadow-slate-950/5 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-slate-300/70 hover:bg-white/85">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-600">
                        Practice
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-snug text-slate-900">
                        Litigation • Transactions • Advisory
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary visuals strip */}
              <div className="grid w-full gap-4 sm:grid-cols-3">
                <Link
                  href="/practice-areas"
                  aria-label="Explore practice areas"
                  className="group relative block h-24 overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-950/10"
                >
                  <Image
                    src="/courtroom.jpg"
                    alt="Explore practice areas"
                    fill
                    className="object-cover grayscale-45 saturate-110 transition duration-300 group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </Link>

                <Link
                  href="/attorneys"
                  aria-label="Meet our attorneys"
                  className="group relative block h-24 overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-950/10"
                >
                  <Image
                    src="/gavel.jpg"
                    alt="Meet our attorneys"
                    fill
                    className="object-cover grayscale-45 saturate-110 transition duration-300 group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </Link>

                <Link
                  href="/why-us"
                  aria-label="View notable results"
                  className="group relative block h-24 overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md hover:shadow-slate-950/10"
                >
                  <Image
                    src="/contract-signing.jpg"
                    alt="View notable results"
                    fill
                    className="object-cover grayscale-45 saturate-110 transition duration-300 group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue (hides after scroll) */}
        <AnimatePresence>
          {showScrollCue && (
            <motion.div
              className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 select-none"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md">
                <span>Scroll to explore</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/25 bg-white/10 animate-bounce">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* CONTACT (full width, centered + polished) */}
      <section className="relative mt-0 w-full py-16 md:py-20 overflow-hidden">

        {/* Background image */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.62] saturate-[1.15] contrast-125 brightness-75"
          style={{ backgroundImage: "url('/law-library.jpg')" }}
          aria-hidden
        />

        {/* Overlays removed to keep the background image vivid */}

        {/* Centered content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left: Contact info (card) */}
            <div className="rounded-2xl bg-white/88 p-8 shadow-lg shadow-slate-900/15 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">
                Contact
              </p>

              <h2 className="mt-3 text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">
                Let’s talk about your matter.
              </h2>

              <p className="mt-4 max-w-prose text-sm leading-relaxed text-slate-600">
                Share a brief overview of your situation and our team will respond with next steps.
                We do not share your information with third parties.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-xl bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Abuja Office
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Suite 6 Block B (2nd Floor, Left Wing), Alpha Cell Plaza, 12 Ebitu Ukiwe, by NIPCO
                    Gas Station, Jabi, Abuja.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Port Harcourt Office
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      8 Choba Street, D/Line, Port Harcourt, Rivers State.
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Lagos Office
                    </p>
                    <p className="mt-2 text-sm text-slate-700">8 Biaduo Street, S/W Ikoyi, Lagos.</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl bg-slate-50 p-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                      Phone (Abuja)
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-900">+234 813 857 0737</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/40 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-blue-950">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#C9A24D]" />
                    Discreet & Confidential
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs text-slate-500">
                *Submitting this form does not create an attorney-client relationship.
              </p>
            </div>

            {/* Right: Contact form (centered + improved inputs) */}
            <div className="flex w-full justify-center lg:justify-end">
              <form
                className="w-full max-w-lg rounded-2xl bg-white/88 p-8 shadow-lg shadow-slate-900/20 backdrop-blur-sm"
                action="mailto:Jeydem03@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="mb-6 flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-slate-900">Send an inquiry</p>
                  <p className="text-xs text-slate-500">Typically responds within 1–2 business days</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">Full name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Doe"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      required
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(202) 555-0123"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700">Type of matter</label>
                    <select
                      name="matter"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                    >
                      <option>Corporate / Commercial</option>
                      <option>Litigation / Dispute</option>
                      <option>Real Estate</option>
                      <option>Tax / Regulatory</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="mt-4">
                  <label className="mb-1 block text-xs font-medium text-slate-700">
                    Briefly describe your situation
                  </label>
                  <textarea
                    name="summary"
                    rows={6}
                    placeholder="Share relevant dates, parties involved, and your main questions."
                    required
                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-950/25 transition hover:-translate-y-0.5 hover:bg-blue-800 hover:ring-2 hover:ring-[#C9A24D]/60"
                >
                  Submit inquiry
                </button>

                <p className="mt-4 text-center text-xs text-slate-500">
                  For urgent matters, please call the Abuja office.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
