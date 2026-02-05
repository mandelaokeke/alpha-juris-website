// app/attorneys/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AttorneysPage() {
  const [isJerryProfileOpen, setIsJerryProfileOpen] = React.useState(false);
  const [isJerryContactOpen, setIsJerryContactOpen] = React.useState(false);
  const [contactSubmitted, setContactSubmitted] = React.useState(false);

  const closeJerryContact = () => {
    setIsJerryContactOpen(false);
    setContactSubmitted(false);
  };

  const closeJerryProfile = () => {
    setIsJerryProfileOpen(false);
  };

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (isJerryContactOpen) closeJerryContact();
      else closeJerryProfile();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isJerryContactOpen]);

  React.useEffect(() => {
    const shouldLock = isJerryProfileOpen || isJerryContactOpen;
    if (!shouldLock) return;

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    // prevent layout shift when scrollbar disappears
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [isJerryProfileOpen, isJerryContactOpen]);

  const featuredPartner = {
    name: "Jerry Edemeka",
    titleLine: "Managing Partner • Abuja, FCT",
    summary:
      "Jerry Edemeka is a litigation and corporate tax practitioner with extensive experience in civil and commercial disputes. He was called to the Nigerian Bar in 1992 and joined Alpha-Juris Chambers in January 2000. He serves as Deputy Managing Partner in the Abuja office and sits on the editorial board of Lawquest Publishing Company Limited.",
    bulletsLeft: [
      "Litigation & dispute resolution",
      "Courtroom advocacy and advisory",
      "Member: Chartered Institute of Taxation of Nigeria (CITN)",
    ],
    bulletsRight: [
      "Corporate tax management consultancy",
      "Member: Nigerian Bar Association (NBA)",
    ],
    approach:
      "Thorough case analysis, early risk detection, and decisive courtroom strategy.",
    promise:
      "Straight answers, measured advice, and relentless advocacy when it matters.",
  };

  const attorneys = [
    {
      name: "George C. Adiele",
      role: "Partner (Lagos)",
      bio: "Called to the Nigerian Bar in 1986. Managing Partner responsible for the firm’s practice in Lagos and its environs.",
    },
    {
      name: "Chijioke H. Orji",
      role: "Partner",
      bio: "Corporate law practice with extensive experience in general investment and real estate. Founder and Chairman of the Lawquest Group.",
    },
    {
      name: "Chris Chikezie Okoro",
      role: "Partner (Port Harcourt & Calabar)",
      bio: "Senior Partner responsible for the firm’s practice in Port Harcourt and Calabar. Member of the Nigerian Bar Association and the Chartered Institute of Arbitrators.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden text-slate-900">

      {/* Background image (gavel) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/gavel.jpg')] bg-cover bg-center bg-no-repeat saturate-150 contrast-125"
        aria-hidden
      />
      {/* Dark/soft overlays for readability */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-slate-950/15 via-slate-950/10 to-slate-950/20"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-blue-950/18 via-transparent to-blue-950/18"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-6 rounded-3xl bg-white/80 px-6 py-5 shadow-sm shadow-slate-950/5 backdrop-blur-sm">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="hidden h-4 w-px bg-slate-200 sm:inline-block" />
              <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                Our Legal Team
              </h1>
              <span className="hidden h-4 w-px bg-slate-200 lg:inline-block" />
              
            </div>
          </div>

          {/* Meet the Partner (Featured) */}
          <div className="rounded-3xl border border-slate-200 bg-white/85 p-6 sm:p-8 shadow-lg shadow-slate-950/10 backdrop-blur-sm">
            <div className="grid gap-8 sm:gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-start">
              {/* Left copy */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Meet the Partner
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {featuredPartner.name}
                </h2>
                <p className="mt-2 text-sm font-semibold text-blue-900">
                  {featuredPartner.titleLine}
                </p>

                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-700">
                  {featuredPartner.summary}
                </p>

                <div className="mt-6 grid gap-3 min-[400px]:grid-cols-2">
                  <ul className="space-y-2 text-sm text-slate-800">
                    {featuredPartner.bulletsLeft.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-900" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2 text-sm text-slate-800">
                    {featuredPartner.bulletsRight.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-900" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsJerryProfileOpen(true)}
                    className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/25 transition hover:-translate-y-0.5 hover:bg-blue-800"
                  >
                    Request a consultation
                  </button>

                  {/* View full profile CTA */}
                  <button
                    type="button"
                    onClick={() => setIsJerryProfileOpen(true)}
                    className="text-sm font-semibold text-slate-700 hover:text-slate-900"
                  >
                    View full profile
                  </button>
                </div>
              </div>

              {/* Right side card */}
              <div className="hidden md:block rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/10">
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-xl font-semibold text-white shadow-md">
                    JE
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg font-semibold text-slate-900">
                      {featuredPartner.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Managing Partner (Abuja Office), Alpha Juris Chambers
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                      Approach
                    </p>
                    <p className="mt-2 text-sm text-slate-800">
                      {featuredPartner.approach}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                      Client promise
                    </p>
                    <p className="mt-2 text-sm text-slate-800">
                      {featuredPartner.promise}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Partners */}
          <div className="mt-10">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xl font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Partners
                </p>
               
              </div>
            </div>

            <div className="grid gap-5 min-[400px]:grid-cols-2 lg:grid-cols-3">
              {attorneys.map((attorney, index) => (
                <motion.div
                  key={attorney.name}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-md transition-colors duration-300 group-hover:bg-blue-800">
                    {attorney.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {attorney.name}
                  </h4>
                  <p className="text-xs font-medium text-slate-500">
                    {attorney.role}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-700">
                    {attorney.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
      {isJerryProfileOpen ? (
        <div className="fixed inset-0 z-[55] flex items-start justify-center p-4 pt-16 sm:pt-24">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close profile"
            onClick={closeJerryProfile}
            className="absolute inset-0 bg-black/50"
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl max-h-[calc(100svh-6rem)] sm:max-h-[calc(100vh-7rem)]">
            {/* Top bar */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-4 sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Attorney Profile
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Jerry Edemeka
                </h2>
                <p className="mt-1 text-sm font-medium text-blue-900">
                  Managing Partner • Abuja Office
                </p>
              </div>

              <button
                type="button"
                onClick={closeJerryProfile}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            {/* Body */}
            <div className="grid gap-0 md:grid-cols-[320px_1fr]">
              {/* Left profile card */}
              <aside className="border-b border-slate-200 bg-slate-50 p-4 sm:p-6 pb-8 md:border-b-0 md:border-r overflow-y-auto overscroll-contain">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900 text-lg font-semibold text-white shadow-md">
                    JE
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-900">
                      Jerry Edemeka
                    </p>
                    <p className="text-xs text-slate-600">Managing Partner</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                    Quick facts
                  </p>
                  <dl className="mt-3 space-y-3 text-xs text-slate-700">
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-slate-500">Office</dt>
                      <dd className="text-right font-medium text-slate-800">
                        Abuja, Nigeria
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-slate-500">Practice</dt>
                      <dd className="text-right font-medium text-slate-800">
                        Litigation • Corporate Tax
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-3">
                      <dt className="text-slate-500">Email</dt>
                      <dd className="text-right font-medium text-slate-800">
                        Jeydem03@gmail.com
                      </dd>
                    </div>
                  </dl>

                  <button
                    type="button"
                    onClick={() => {
                      setIsJerryProfileOpen(false);
                      setIsJerryContactOpen(true);
                    }}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-blue-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-800"
                  >
                    Contact Jerry
                  </button>

                  <Link
                    href="/contact"
                    className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    onClick={() => setIsJerryProfileOpen(false)}
                  >
                    Go to Contact Page
                  </Link>
                </div>

                <p className="mt-4 text-[0.7rem] leading-relaxed text-slate-500">
                  Submitting an inquiry does not create an attorney-client relationship.
                </p>
              </aside>

              {/* Right profile content */}
              <section className="p-4 sm:p-6 pb-8 overflow-y-auto overscroll-contain">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Profile summary
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-700">
                      Jerry Edemeka is a senior legal practitioner with experience across litigation
                      and corporate tax management consultancy. He joined Alpha-Juris Chambers in
                      January 2000 and currently practices in the Abuja office of the firm.
                    </p>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                        Education
                      </h4>
                      <p className="mt-3 text-sm text-slate-800">
                        University of Calabar — LL.B (1991)
                      </p>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                        Bar admission
                      </h4>
                      <p className="mt-3 text-sm text-slate-800">
                        Called to the Nigerian Bar (1992)
                      </p>
                    </div>
                  </div>

                  <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                      Focus areas
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-800">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                        <span>Commercial litigation and dispute resolution</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                        <span>Corporate advisory and transaction support</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                        <span>Corporate tax management consultancy and regulatory guidance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                      Experience
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-slate-800">
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>
                          State Counsel (Public Prosecution), Ministry of Justice — Port Harcourt, Rivers State
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>
                          Associate Counsel — Owhonda‑Wopara &amp; Co. and Sonny O. Wogu &amp; Associates
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
                        <span>
                          Alpha‑Juris Chambers — joined January 2000 (Abuja Office)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                        Memberships
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-800">
                        <li className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span>Nigerian Bar Association (NBA)</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span>Chartered Institute of Taxation of Nigeria (CITN)</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <h4 className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
                        Leadership
                      </h4>
                      <ul className="mt-3 space-y-2 text-sm text-slate-800">
                        <li className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span>Director, Lawquest Limited</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-900" />
                          <span>Editorial Board Member, Lawquest Publishing Company Limited</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs leading-relaxed text-slate-600">
                      Note: This profile is provided for general information. Please do not send confidential
                      information until a formal engagement is confirmed.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      ) : null}

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              Book Consultation
            </Link>
          </div>
        </motion.section>
      </div>

      {isJerryContactOpen ? (
        <div className="fixed inset-0 z-[60] flex items-start justify-center p-4 pt-16 sm:pt-24">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close contact form"
            onClick={closeJerryContact}
            className="absolute inset-0 bg-black/50"
          />

          {/* Modal */}
          <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-2xl max-h-[calc(100svh-6rem)] sm:max-h-[calc(100vh-7rem)] overflow-y-auto">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
                  Contact
                </p>
                <h2 className="mt-2 text-lg font-semibold text-slate-900">
                  Discovery questions for Jerry Edemeka
                </h2>
                <p className="mt-1 text-xs text-slate-600">
                  Share a few details so we can respond quickly and route your inquiry properly.
                </p>
              </div>

              <button
                type="button"
                onClick={closeJerryContact}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
            </div>

            {!contactSubmitted ? (
              <form
                className="mt-5 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.currentTarget;
                  const data = new FormData(form);

                  const name = String(data.get("name") ?? "");
                  const email = String(data.get("email") ?? "");
                  const phone = String(data.get("phone") ?? "");
                  const office = String(data.get("office") ?? "");
                  const matter = String(data.get("matter") ?? "");
                  const urgency = String(data.get("urgency") ?? "");
                  const summary = String(data.get("summary") ?? "");

                  const subject = `Client inquiry for Jerry Edemeka — ${matter || "General"}`;
                  const body = [
                    "Discovery Questions — Alpha-Juris Chambers",
                    "",
                    `Name: ${name}`,
                    `Email: ${email}`,
                    phone ? `Phone: ${phone}` : "Phone: (not provided)",
                    office ? `Preferred Office: ${office}` : "Preferred Office: (not provided)",
                    `Matter Type: ${matter}`,
                    `Urgency: ${urgency}`,
                    "",
                    "Brief Summary:",
                    summary,
                    "",
                    "— Sent from the Alpha-Juris website",
                  ].join("\n");

                  const mailto = `mailto:Jeydem03@gmail.com?subject=${encodeURIComponent(
                    subject
                  )}&body=${encodeURIComponent(body)}`;

                  window.location.href = mailto;
                  setContactSubmitted(true);
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700" htmlFor="j_name">
                      Full name
                    </label>
                    <input
                      id="j_name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700" htmlFor="j_email">
                      Email
                    </label>
                    <input
                      id="j_email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700" htmlFor="j_phone">
                      Phone (optional)
                    </label>
                    <input
                      id="j_phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                      placeholder="+234 ..."
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700" htmlFor="j_office">
                      Preferred office (optional)
                    </label>
                    <select
                      id="j_office"
                      name="office"
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select an office
                      </option>
                      <option>Abuja</option>
                      <option>Lagos</option>
                      <option>Port Harcourt</option>
                      <option>Calabar</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700" htmlFor="j_matter">
                      Matter type
                    </label>
                    <select
                      id="j_matter"
                      name="matter"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a matter type
                      </option>
                      <option>Corporate / Commercial</option>
                      <option>Litigation / Dispute</option>
                      <option>Real Estate</option>
                      <option>Tax / Regulatory</option>
                      <option>Intellectual Property / IT</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs font-medium text-slate-700" htmlFor="j_urgency">
                      Urgency
                    </label>
                    <select
                      id="j_urgency"
                      name="urgency"
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                      defaultValue="Within 1 week"
                    >
                      <option>Within 24–48 hours</option>
                      <option>Within 1 week</option>
                      <option>Within 2–4 weeks</option>
                      <option>Not urgent</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-700" htmlFor="j_summary">
                    Brief summary (what happened and what you need)
                  </label>
                  <textarea
                    id="j_summary"
                    name="summary"
                    rows={4}
                    required
                    className="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
                    placeholder="Key facts, timelines, parties involved, and your desired outcome."
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[0.7rem] text-slate-500">
                    Submitting this form does not create an attorney-client relationship.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-blue-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold text-slate-900">Request received</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Thank you. Our team will review your details and respond as soon as possible.
                  If your matter is urgent, please also use the main contact page.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-blue-900 px-5 py-2.5 text-xs font-semibold text-white hover:bg-blue-800"
                  >
                    Go to Contact Page
                  </Link>
                  <button
                    type="button"
                    onClick={closeJerryContact}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </main>
  );
}
