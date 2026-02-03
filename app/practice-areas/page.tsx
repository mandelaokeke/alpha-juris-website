// app/practice-areas/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function PracticeAreasPage() {
  // REPLACE with your real practiceAreas array
  const practiceAreas = [
    {
      title: "Corporate & Commercial",
      description:
        "Company formation, governance, commercial contracts, and regulatory support.",
    },
    {
      title: "Litigation / ADR",
      description:
        "Court advocacy, arbitration, and strategic dispute resolution.",
    },
    {
      title: "Real Property",
      description:
        "Conveyancing, land documentation, title due diligence, and property disputes.",
    },
    {
      title: "Taxation",
      description:
        "Tax advisory, compliance, and transactional risk management.",
    },
    {
      title: "Intellectual Property / IT",
      description:
        "IP protection, technology advisory, and compliance documentation.",
    },
    {
      title: "Banking / Insolvency",
      description:
        "Security recovery, insolvency advisory, and creditor representation.",
    },
  ];

  const practiceThumbs: Record<string, string> = {
    "Corporate & Commercial": "/Practice/coperate.jpg",
    "Litigation / ADR": "/Practice/law-firm-practice-areas.jpg",
    "Real Property": "/Practice/property.jpg",
    "Taxation": "/Practice/taxation.jpg",
    "Intellectual Property / IT": "/Practice/ip.jpg",
    "Banking / Insolvency": "/Practice/banking.jpg",
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 pt-6">
      <div className="mx-auto w-full max-w-7xl border-t border-slate-200 px-4 pb-20 pt-10 sm:px-6 lg:px-10 2xl:max-w-360">
        {/* Page header */}
        <motion.header
          className="mb-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          
        </motion.header>

        {/* OUR PRACTICE */}
        <section className="mb-16">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700">
              Our Practice
            </h2>
          </div>
          <div className="mt-4 h-px w-full bg-slate-200" />

          <div className="mt-10 grid items-start gap-10 lg:grid-cols-2">
            {/* Left image */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative aspect-16/10">
                <Image
                  src="/Practice/law-firm-practice-areas.jpg"
                  alt="Law firm practice areas"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right list */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Practice Areas</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Our partners advise businesses and individuals across Nigeria with clear strategy, disciplined advocacy, and
                practical execution.
              </p>

              <ul className="mt-4 space-y-2">
                {practiceAreas.map((area) => (
                  <li key={area.title}>
                    <div className="flex items-start gap-3 rounded-2xl p-2">
                      <span className="mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition group-hover:shadow-md">
                        <Image
                          src={practiceThumbs[area.title]}
                          alt={area.title}
                          width={36}
                          height={36}
                          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 transition group-hover:text-blue-900">
                          {area.title}
                        </p>
                        <p className="mt-0.5 text-sm leading-snug text-slate-700">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="mb-16">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div className="lg:pt-2">
              <h2 className="text-7xl font-semibold text-slate-900">Our approach</h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
                We start with the facts, clarify the risk, and move quickly to a practical plan. Clients get straight answers,
                measured advice, and disciplined execution.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
                Whether you need transactional support or dispute resolution, our work is built around clarity, confidentiality,
                and outcomes.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">Clarity</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-800">We start with facts, define the risk, and align on goals.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">Discipline</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-800">Strategy first—then precise execution with no wasted motion.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">Outcomes</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-800">Advice tied to business realities and defensible results.</p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
              <div className="relative aspect-video">
                <Image src="/Practice/approach.jpg" alt="Our approach" fill className="object-cover" />
                <div
                  className="pointer-events-none absolute inset-0 bg-linear-to-l from-transparent via-slate-950/5 to-slate-950/15"
                  aria-hidden
                />
              </div>
              <p className="px-5 py-4 text-xs text-slate-600">
                Disciplined advocacy, executed with precision.
              </p>
            </div>
          </div>
        </section>

       
      </div>
    </main>
  );
}
