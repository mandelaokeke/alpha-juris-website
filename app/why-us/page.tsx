// app/why-us/page.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";

export default function WhyUsPage() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Slow cinematic zoom + slight upward drift as the user scrolls past the hero
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -28]);

  const notableResults = [
    {
      category: "Company & Corporate Law",
      title:
        "Share purchase negotiations and acquisition (WABECO Petroleum Nigeria Limited)",
      summary:
        "Lead solicitors in intensive share purchase negotiations and a consequent share acquisition agreement involving an offshore multinational and a special-purpose bitumen company domiciled in Nigeria.",
    },
    {
      category: "Receivership",
      title:
        "Receiver/Manager appointment successfully challenged (WABECO Petroleum Limited)",
      summary:
        "Lead solicitors in litigation that successfully challenged and vacated the appointment of a Receiver/Manager by a major Nigerian commercial bank over company assets, including a tank farm, arising from an unresolved loan transaction.",
    },
    {
      category: "Privatisation / Property",
      title:
        "Reclaim of privatised NITEL facility (SAFECON Real Estates Limited)",
      summary:
        "Lead solicitors in litigation that reclaimed a major NITEL facility duly purchased by the client. Judgment delivered immediate possession to the client and the state complied with the judgment.",
    },
    {
      category: "Wills & Testamentary Disposition",
      title: "Restoration of possession in a contested testamentary dispute",
      summary:
        "Lead counsel in multiple testamentary matters, including a fiercely contested case involving wrongful inclusion of a property purchased by the client as part of a disputed will; judgment restored immediate possession to the client.",
    },
    {
      category: "Real Estate Litigation",
      title: "FCT property dispute resolved after interlocutory order (Maitama)",
      summary:
        "Lead counsel in an FCT High Court matter where the firm leveraged the maxim “caveat emptor” to challenge an acquisition that compromised a client’s equitable interest as a subsisting tenant; the interlocutory order supported the client’s position and drove an amicable settlement.",
    },
    {
      category: "Real Estate / Regulatory",
      title:
        "Challenge to demolition of duly approved duplex units (Katampe Extension)",
      summary:
        "Lead counsel in an FCT High Court suit instituted by Ideal Grace Consulting Limited challenging the propriety of the FCDA’s demolition of duplex units duly approved and built by the client.",
    },
    {
      category: "Arbitration",
      title:
        "Contract breach arbitration award (International Trauma and Critical Care Centre Limited)",
      summary:
        "Lead counsel in arbitration proceedings against a state government relating to failure to adequately pay for specialised medical services; the arbitral tribunal made an award in favour of the client.",
    },
    {
      category: "Finance / Mortgage",
      title:
        "Enforcement of possession after sale under mortgage (SAFECON Real Estates Limited)",
      summary:
        "Counsel in a dispute arising after the bank exercised its power of sale and the client purchased the property, but possession was wrongfully retained by the mortgagor; final judgment ordered immediate possession and the firm successfully enforced the judgment.",
    },
    {
      category: "Land Use Act / Property",
      title: "Allocation upheld in Bayelsa State dispute (Fidelity Bank Plc)",
      summary:
        "Represented Fidelity Bank Plc in a dispute over land allocated for developmental purposes; on the strength of evidence (including compensation paid), the court upheld the allocation to the client.",
    },
  ];

  const INITIAL_VISIBLE = 3;
  const [showAll, setShowAll] = useState(false);

  const visibleResults = useMemo(() => {
    return showAll ? notableResults : notableResults.slice(0, INITIAL_VISIBLE);
  }, [showAll, notableResults]);

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Split hero with cinematic background */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen overflow-hidden"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ y: heroY }}
        >
          <motion.div
            className="absolute inset-0 bg-[url('/whyUs.jpg')] bg-cover bg-center bg-no-repeat"
            style={{ scale: heroScale }}
          />

          {/* Readability overlay */}
          <div
            className="absolute inset-0 bg-linear-to-b from-black/45 via-black/25 to-black/10"
            aria-hidden
          />
        </motion.div>

        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pt-10 pb-10 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Left: headline */}
            <div className="lg:col-span-12">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/90">
                Notable Results
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl [text-shadow:0_14px_40px_rgba(0,0,0,0.55)]">
                Selected matters handled by The Managing Partner.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-[1.75] text-white/85">
                A representative work across corporate transactions, receivership, property, arbitration, and finance.
                Each matter is outcome-dependent on facts, evidence, and applicable law.
              </p>
            </div>
          </div>

          <div
            id="results"
            className="-mt-12 max-w-7xl mx-auto rounded-3xl bg-white/95 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.22)] ring-1 ring-slate-200/60 backdrop-blur-sm"
          >
            <div className="mb-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700">
                Results
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Representative matters
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-7">
              {visibleResults.map((item, index) => (
                <motion.article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-900">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-700">
                    {item.summary}
                  </p>
                </motion.article>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                {showAll ? "View less" : "View more"}
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
