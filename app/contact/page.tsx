// app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main
      className="relative min-h-screen text-slate-900 flex items-start md:items-center bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: "url('/contactUS.jpg')" }}
    >
      {/* Readability overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/55 via-black/35 to-black/20"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:py-16 sm:px-6 lg:px-8">
        <motion.section
          className="mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                Contact
              </p>
              <h1 className="mt-4 text-[2rem] leading-tight font-semibold text-white sm:text-4xl lg:text-5xl [text-shadow:0_10px_30px_rgba(0,0,0,0.55)]">
                Let&apos;s talk about your matter.
              </h1>
              <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/95 leading-relaxed [text-shadow:0_6px_20px_rgba(0,0,0,0.45)]">
                Share a brief overview of your situation and our team will
                respond with next steps. We do not share your information with
                third parties.
              </p>

              <div className="mt-7 space-y-4 text-base sm:text-lg text-white/90 [text-shadow:0_6px_18px_rgba(0,0,0,0.45)]">
                <p>
                  <span className="font-semibold">Abuja Office (Chambers):</span>{" "}
                  Suite 6 Block B (2nd Floor, Left Wing), Alpha Cell Plaza, 12
                  Ebitu Ukiwe, by NIPCO Gas Station, Jabi, Abuja.
                </p>

                <p>
                  <span className="font-semibold">Port Harcourt Office:</span>{" "}
                  8 Choba street, D/Line, Port Harcourt, Rivers state.
                </p>

                <p>
                  <span className="font-semibold">Lagos Office:</span> 8 Biaduo
                  street, S/W Ikoyi, Lagos.
                </p>

                <p>
                  <span className="font-semibold">Phone number (Abuja Office):</span>{" "}
                  <a href="tel:+2348138570737" className="text-white/95 hover:text-white">
                    +234 813 857 0737
                  </a>
                </p>

                <p className="text-sm text-white/70">
                  *This form does not create an attorney-client relationship.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href="/publications"
                  className="text-sm font-semibold text-white underline-offset-4 hover:underline [text-shadow:0_6px_18px_rgba(0,0,0,0.45)]"
                >
                  Looking for publications? Request copies →
                </Link>
              </div>
            </div>

            <form className="space-y-6 w-full max-w-xl md:max-w-none mx-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 text-base sm:text-lg shadow-lg">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="(202) 555-0123"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="matter"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Type of matter
                  </label>
                  <select
                    id="matter"
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 placeholder:text-slate-400"
                  >
                    <option>Corporate / Commercial</option>
                    <option>Litigation / Dispute</option>
                    <option>Real Estate</option>
                    <option>Employment</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Briefly describe your situation
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Share relevant dates, parties involved, and your main questions."
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none resize-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-blue-900 px-6 py-3.5 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Submit inquiry
              </button>
            </form>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
