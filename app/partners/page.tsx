// app/partner/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PartnerPage() {
  // REPLACE with your real partner object
  const partner = {
    name: "Jerry Edemeka",
    title: "Partner",
    location: "Abuja, Nigeria",
    bio: "A litigation and commercial practice leader focused on thorough case analysis, early risk detection, and decisive courtroom strategy.",
    highlights: [
      "Commercial litigation and dispute strategy",
      "Corporate transactions and advisory",
      "Practical risk management and negotiation",
      "Client-first communication and responsiveness",
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                Meet the Partner
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                {partner.name}
              </h1>
              <p className="mt-1 text-sm font-medium text-blue-900">
                {partner.title} • {partner.location}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                {partner.bio}
              </p>

              <ul className="mt-5 grid gap-2 text-sm text-slate-800 sm:grid-cols-2">
                {partner.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-blue-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-800"
                >
                  Request a Consultation
                </Link>
                <Link
                  href="/practice-areas"
                  className="text-xs font-medium text-slate-700 underline-offset-4 hover:underline"
                >
                  View practice focus
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-slate-900/5 blur-3xl" />
              <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-2xl font-semibold text-white shadow-md">
                    JE
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {partner.name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {partner.title}, Alpha Juris Chambers
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3 text-xs text-slate-700">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-[0.65rem] uppercase tracking-wide text-slate-500">
                      Approach
                    </p>
                    <p className="mt-1 text-slate-900">
                      Thorough case analysis, early risk detection, and decisive
                      courtroom strategy.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-[0.65rem] uppercase tracking-wide text-slate-500">
                      Client Promise
                    </p>
                    <p className="mt-1 text-slate-900">
                      Straight answers, measured advice, and relentless advocacy
                      when it matters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}

