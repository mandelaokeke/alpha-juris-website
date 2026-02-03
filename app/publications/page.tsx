// app/publications/page.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function PublicationsPage() {
  type Book = {
    title: string;
    category: string;
    summary: string;
    highlights: string[];
  };

  const books: Book[] = [
    {
      title: "Precedent Manuals of Commercial Agreements (10-Volume Index)",
      category: "Commercial Precedents",
      summary:
        "A practitioner-grade library of transaction-ready templates designed to support serious drafting, negotiations, and deal execution in Nigeria.",
      highlights: [
        "Finance & security documentation (mortgages, debentures, guarantees/indemnities)",
        "Corporate & investment agreements (SHAs, JV/consortium, share transfers)",
        "Energy/infrastructure & project delivery documentation",
      ],
    },
    {
      title:
        "Acquisition & Perfection of Interests in Real Estate — Laws, Due Diligence and Procedures",
      category: "Real Estate",
      summary:
        "A practical guide to acquiring interests in land, investigating title, and perfecting interests through consent, stamping, and registration.",
      highlights: [
        "Acquisition modes: conveyance, assignment, gift, easement, lease, mortgage",
        "Title investigation (due diligence) and Land Use Act considerations",
        "Perfection of title: consent, stamping, registration",
      ],
    },
    {
      title: "Election Petition — Synoptic Guide to Effective Prosecution",
      category: "Litigation & Procedure",
      summary:
        "A structured guide to presenting and prosecuting election petitions—from filing to hearing, amendments, and determination.",
      highlights: [
        "Nature of election petitions and applicable laws",
        "Form/content, pleadings, security for costs, and hearing",
        "Practical process flow from presentation to conclusion",
      ],
    },
    {
      title: "Legal Contract Management",
      category: "Commercial Practice",
      summary:
        "A clear introduction to contract management—how teams plan, execute, monitor performance, and close contracts with fewer disputes.",
      highlights: [
        "Objectives, process, and responsibilities of the contract management team",
        "Role of the lawyer in contract management",
        "Wrap-up/closing discipline and practical benefits",
      ],
    },
    {
      title: "Laws & Procedures Guiding Coastal and Inland Shipping in Nigeria",
      category: "Shipping / Admiralty",
      summary:
        "A practical overview of Nigeria’s shipping regulatory framework, licensing, registration, and operational compliance.",
      highlights: [
        "Registration eligibility and bareboat charter registration",
        "Manning, ports authority and key compliance touchpoints",
        "Insurance/customs considerations and related procedures",
      ],
    },
    {
      title: "Accessing SME Funds — Practical Guide on Procedures",
      category: "Finance & SMEs",
      summary:
        "A procedural playbook for SME funding—what’s covered, what’s excluded, and how to navigate documentation, approvals, and monitoring.",
      highlights: [
        "Activities covered, company/sponsors, products/services",
        "Due diligence, investment appraisal, approvals and disbursement",
        "Monitoring, exit/divestment and practical documentation",
      ],
    },
    {
      title: "Brief Writing in Appellate Courts",
      category: "Advocacy",
      summary:
        "A guide to crafting persuasive appellate briefs—structure, content, key components, and practical courtroom-ready presentation.",
      highlights: [
        "Forms and contents of a brief; salient points",
        "Statement of facts, issues for determination, and argument",
        "List of authorities, signature, and service considerations",
      ],
    },
    {
      title:
        "Intellectual Property Litigation — Guide on Pre-Trial Research and Documentation",
      category: "Intellectual Property",
      summary:
        "Practical IP litigation preparation—research strategy, documentation discipline, and pre-trial readiness for stronger outcomes.",
      highlights: [
        "Overview of IP and key rights (copyright, patents, designs, trademarks)",
        "Jurisdiction and who can sue",
        "Pre-trial research/documentation workflow",
      ],
    },
    {
      title: "Promotion and Structuring of Foreign Direct Investment in Nigeria",
      category: "Investment / FDI",
      summary:
        "A practical lens on how FDI is structured in Nigeria—benefits, sources, protections and regulatory expectations.",
      highlights: [
        "Benefits, sources, and location drivers of FDI",
        "Promotion/protection of FDI and regulation of MNCs",
        "Compliance considerations for cross-border investors",
      ],
    },
    {
      title: "Equipment Leasing — Pricing, Structuring and Legal Documentation",
      category: "Finance & Leasing",
      summary:
        "A structured guide to equipment leasing—types of leases, pricing, documentation and execution steps for enforceable arrangements.",
      highlights: [
        "Lease structuring and pricing fundamentals",
        "Legal documentation and steps in lease documentation",
        "Specimen/application guidance and practical checklists",
      ],
    },
    {
      title: "Guide on Effective Cross-Examination",
      category: "Litigation Skills",
      summary:
        "A tactical guide to cross-examination—planning, witness handling, credibility testing, and courtroom technique.",
      highlights: [
        "Planning and tactics; rules for cross-examination",
        "Truthful vs mistaken witness; expert/handwriting witness",
        "Managing bias, memory, and practical courtroom outcomes",
      ],
    },
    {
      title:
        "Companies and Allied Matters Act (CAMA) — Synoptic Guide on Compliance Issues",
      category: "Corporate Compliance",
      summary:
        "A compliance-focused guide to CAMA—incorporation, post-incorporation duties, enforcement, inquiries/inspections, and winding-up implications.",
      highlights: [
        "Pre- and post-incorporation compliance themes",
        "Enforcement, inspection/investigation and litigation",
        "Winding-up compliance and court supervision",
      ],
    },
    {
      title:
        "Telecommunication Negotiating Interconnect Agreements — Drafting and Regulatory Framework for Interconnection in Nigeria",
      category: "Telecoms / Regulatory",
      summary:
        "A focused overview of interconnection agreements—drafting considerations, regulatory touchpoints and negotiation checklists.",
      highlights: [
        "Interconnection concepts and applicable regime",
        "Key principles and negotiation focus areas",
        "Checklist for negotiating interconnect agreements",
      ],
    },
    {
      title: "Examining the Reach of the Pension Reform Act",
      category: "Employment / Regulatory",
      summary:
        "An overview of pension reform—existing arrangements, the reach of the Act, and practical implications for employers and administrators.",
      highlights: [
        "Overview of the Act and existing arrangements",
        "Reach of the Act and compliance implications",
        "Operational considerations for organizations",
      ],
    },
    {
      title:
        "Registration & Protection of Trademarks, Patents and Designs — Practical Guide on Compliance & Procedural Issues",
      category: "IP / Registration",
      summary:
        "A compliance-driven guide to IP registration in Nigeria—scope, administration, procedures, and practical steps for protection.",
      highlights: [
        "Trademarks, patents, and industrial designs registration workflow",
        "Opposition and administration of IP rights",
        "Practical compliance steps and documentation discipline",
      ],
    },
  ];

  const INITIAL_VISIBLE = 3;
  const [showAllBooks, setShowAllBooks] = useState(false);

  const visibleBooks = useMemo(() => {
    return showAllBooks ? books : books.slice(0, INITIAL_VISIBLE);
  }, [showAllBooks, books]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);

  const openRequest = (title?: string) => {
    setSelectedTitles(title ? [title] : []);
    setIsOpen(true);
  };

  const closeRequest = () => setIsOpen(false);

  const toggleTitle = (title: string) => {
    setSelectedTitles((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRequest();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-10">
        {/* HERO SECTION */}
        <motion.section
          className="relative mb-10 -mx-4 overflow-hidden rounded-3xl sm:-mx-6 lg:-mx-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/publication.jpg')" }}
            aria-hidden
          />
          {/* Readability overlay */}
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-r from-black/55 via-black/35 to-black/20"
          />
          <div className="relative z-10 px-6 py-12 sm:px-10 sm:py-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/90">
                Publications
              </p>
              <h1 className="mt-2 text-2xl font-semibold text-white sm:text-4xl [text-shadow:0_14px_40px_rgba(0,0,0,0.55)]">
                Books and practice guides authored by the Managing Partner.
              </h1>
              <p className="mt-3 text-sm text-white/90 leading-relaxed [text-shadow:0_8px_28px_rgba(0,0,0,0.45)]">
                Due to volume, we display a snapshot of themes online. Authentic copies are available on request.
              </p>
            </div>
          </div>
        </motion.section>

        {/* PUBLICATIONS GRID */}
        <section className="relative mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Background image (watermark) */}
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.12] saturate-0 contrast-125"
            style={{ backgroundImage: "url('/PublicationCloudImage.jpg')" }}
          />
          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleBooks.map((b, idx) => (
                <motion.article
                  key={b.title}
                  className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_12px_30px_rgba(2,6,23,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(2,6,23,0.12)]"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: idx * 0.03 }}
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-600">
                    {b.category}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    {b.summary}
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
                    {b.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => openRequest(b.title)}
                      className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-900 to-indigo-800 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-[0_12px_30px_rgba(2,6,23,0.18)] ring-1 ring-slate-900/10 transition hover:from-blue-800 hover:to-indigo-700"
                    >
                      Request a copy
                    </button>
                    <span className="text-[0.7rem] text-slate-500">
                      Authentic copies available on request.
                    </span>
                  </div>
                  <div className="mt-auto" />
                </motion.article>
              ))}
            </div>
            <div className="relative z-10 mt-6 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowAllBooks((v) => !v)}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-sm transition hover:bg-white"
              >
                {showAllBooks ? "View less" : "View more"}
              </button>
              {!showAllBooks ? (
                <p className="text-[0.7rem] text-slate-500">
                  Showing {Math.min(INITIAL_VISIBLE, books.length)} of {books.length} publications.
                </p>
              ) : (
                <p className="text-[0.7rem] text-slate-500">
                  Showing all {books.length} publications.
                </p>
              )}
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent to-white"
            />
          </div>
        </section>

        {/* MODAL */}
        {isOpen ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <button
              type="button"
              className="absolute inset-0 bg-black/50"
              aria-label="Close request form"
              onClick={closeRequest}
            />

            <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                    Request authentic copies
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">
                    Tell us what you&apos;d like to receive.
                  </h3>
                  <p className="mt-1 text-xs text-slate-600">
                    Copies may attract a cost depending on title/edition and
                    delivery.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeRequest}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
              </div>

              <form
                className="mt-5 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  closeRequest();
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-1 block text-xs font-medium text-slate-700"
                      htmlFor="pub_name"
                    >
                      Full name
                    </label>
                    <input
                      id="pub_name"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-xs font-medium text-slate-700"
                      htmlFor="pub_email"
                    >
                      Email
                    </label>
                    <input
                      id="pub_email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      className="mb-1 block text-xs font-medium text-slate-700"
                      htmlFor="pub_phone"
                    >
                      Phone
                    </label>
                    <input
                      id="pub_phone"
                      type="tel"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                      placeholder="+234 ..."
                    />
                  </div>
                  <div>
                    <label
                      className="mb-1 block text-xs font-medium text-slate-700"
                      htmlFor="pub_org"
                    >
                      Organization (optional)
                    </label>
                    <input
                      id="pub_org"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                      placeholder="Company / Firm"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium text-slate-700">
                    Select titles
                  </p>
                  <div className="max-h-44 overflow-auto rounded-2xl border border-slate-200 bg-slate-50 p-3">
                    <div className="grid gap-2 sm:grid-cols-2">
                      {books.map((b) => (
                        <label
                          key={b.title}
                          className="flex items-start gap-2 text-xs text-slate-700"
                        >
                          <input
                            type="checkbox"
                            className="mt-1"
                            checked={selectedTitles.includes(b.title)}
                            onChange={() => toggleTitle(b.title)}
                          />
                          <span className="leading-snug">{b.title}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-[0.7rem] text-slate-500">
                    If you&apos;re unsure, select any that match your needs
                    and add details below.
                  </p>
                </div>

                <div>
                  <label
                    className="mb-1 block text-xs font-medium text-slate-700"
                    htmlFor="pub_note"
                  >
                    Notes (delivery format / edition / quantity)
                  </label>
                  <textarea
                    id="pub_note"
                    rows={3}
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                    placeholder="Tell us what you need (e.g., hard copy vs soft copy, number of titles, location for delivery)."
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[0.7rem] text-slate-500">
                    Submitting this form does not create an attorney-client
                    relationship.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-blue-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-800"
                  >
                    Submit request
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}