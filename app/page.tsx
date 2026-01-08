"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { href: "#practice-areas", label: "Practice Areas" },
  { href: "#attorneys", label: "Attorneys" },
  { href: "#publications", label: "Publications" },
  { href: "#why-us", label: "Why Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const practiceAreas = [
  {
    title: "Litigation & Alternative Dispute Resolution",
    description:
      "Representation in civil and commercial disputes, with a strong preference for efficient resolution through ADR where appropriate.",
  },
  {
    title: "Corporate Services",
    description:
      "Company formation and filings, contract drafting and negotiation, corporate compliance, and company secretarial support.",
  },
  {
    title: "Real Property",
    description:
      "Property acquisition and administration, conveyancing, leases, due diligence, and documentation for property transactions.",
  },
  {
    title: "Taxation & Regulatory Advisory",
    description:
      "Strategic tax planning and regulatory guidance to help clients structure transactions and reduce risk.",
  },
];

const attorneys = [
  {
    name: "Yvonne U. Dozie, Esq.",
    role: "Head of Chambers (Abuja Office)",
    bio: "Head of Chambers for the Abuja office, providing leadership, case oversight, and client-facing coordination across matters.",
  },
  {
    name: "C. J. Edemeka",
    role: "Managing Partner (Abuja Office)",
    bio: "Managing Partner for the Abuja office. Practice focus includes litigation and corporate tax management consultancy.",
  },
  {
    name: "Chijioke H. Orji",
    role: "Senior Partner (Abuja)",
    bio: "Senior Partner in Abuja, supporting clients on commercial practice matters and dispute strategy.",
  },
  {
    name: "George Adiele",
    role: "Senior Partner (Ikoyi, Lagos)",
    bio: "Senior Partner in Lagos (Ikoyi), providing commercial advisory and transaction support.",
  },
  {
    name: "Chris Okoro",
    role: "Partner (D/Line, Port Harcourt)",
    bio: "Partner in Port Harcourt (D/Line), supporting disputes and advisory work for clients in Rivers State and the South-South region.",
  },
];

const partner = {
  name: "Jerry Edemeka",
  title: "Deputy Managing Partner (Abuja Office)",
  location: "Abuja, FCT",
  bio:
    "Jerry Edemeka is a litigation and corporate tax practitioner with extensive experience in civil and commercial disputes. He was called to the Nigerian Bar in 1992 and joined Alpha-Juris Chambers in January 2000. He serves as Deputy Managing Partner in the Abuja office and sits on the editorial board of Lawquest Publishing Company Limited.",
  highlights: [
    "Litigation & dispute resolution",
    "Corporate tax management consultancy",
    "Courtroom advocacy and advisory",
    "Member: Nigerian Bar Association (NBA)",
    "Member: Chartered Institute of Taxation of Nigeria (CITN)",
  ],
};

const testimonials = [
  {
    quote:
      "They were responsive, strategic, and always two steps ahead. We felt genuinely protected.",
    name: "GrowthPoint Ventures",
    role: "Managing Director",
  },
  {
    quote:
      "Clear advice, no jargon. They helped us close a time-sensitive deal under intense pressure.",
    name: "Northbridge Holdings",
    role: "CEO",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Watermark background logo */}
      <div
        className="pointer-events-none fixed inset-0 bg-[url('/alpha-juris-logo.png')] bg-no-repeat bg-center bg-[length:520px_520px] opacity-[0.06] grayscale mix-blend-multiply"
        aria-hidden
      />
      <div className="relative z-10">
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
          <Navbar />

          <Hero />

          <PracticeAreas />

          <Attorneys />

          <MeetPartner />

          <Publications />

          <WhyUs />

          <Testimonials />

          <ContactSection />

          <Footer />
        </div>
      </div>
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-30 mb-6 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between py-4">
      <a href="#top" className="flex items-center gap-3">
  <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900 shadow-md">
    {/* Place your logo at /public/alpha-juris-logo.png */}
    <span className="select-none text-base font-semibold tracking-tight text-white">AJ</span>
    <img
      src="/alpha-juris-logo.png"
      alt="Alpha-Juris Chambers logo"
      className="absolute inset-0 m-auto h-full w-full p-1 object-contain"
      onLoad={(e) => {
        // Hide fallback initials once the logo loads
        const parent = e.currentTarget.parentElement;
        const fallback = parent?.querySelector("span");
        if (fallback) fallback.style.opacity = "0";
      }}
      onError={(e) => {
        // If logo fails, keep initials visible
        e.currentTarget.style.display = "none";
      }}
    />
  </div>
  <div className="leading-tight">
    <p className="text-sm font-semibold tracking-wide text-slate-900 uppercase">
      Alpha-Juris Chambers
    </p>
    <p className="text-xs text-slate-500">
      Advocates • Investment Solicitors • Abuja, Nigeria 🇳🇬
    </p>
  </div>
</a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-blue-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-800"
          >
            Book Consultation
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, 60]);
  return (
    <section
      ref={heroRef}
      id="top"
      className="relative mb-16 grid gap-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-center md:p-10 shadow-sm"
    >
      {/* hero background image (ensure /public/hero-law.jpg exists in the Next.js project) */}
      <motion.div
        style={{ y: yBackground }}
        className="pointer-events-none absolute inset-0 bg-[url('/hero-law.jpg')] bg-cover bg-center bg-no-repeat opacity-85 filter grayscale contrast-110"
        aria-hidden
      />
      {/* branded overlay for readability (blue/white/black) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-white/65 to-blue-50/40"
        aria-hidden
      />
      {/* subtle dark vignette to improve text contrast on bright areas */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 space-y-6 rounded-2xl border border-slate-200/70 bg-white/75 p-5 backdrop-blur-sm shadow-sm"
      >
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-900/20 bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-slate-700">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-900" />
          Alpha Juris Chambers • Precision. Advocacy. Results.
        </p>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-[0.95]">
          Commercial-minded advocacy
          <span className="block">for high-stakes matters.</span>
        </h1>

        <motion.div
          className="h-1 w-16 rounded-full bg-blue-900"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ originX: 0 }}
        />

        <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
          Alpha-Juris Chambers advises businesses, founders, and professionals on corporate transactions and litigation matters across Nigeria. We combine sharp legal analysis with practical, business-first judgment.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
          >
            Schedule a Call
          </a>
          <a
            href="#practice-areas"
            className="text-sm font-medium text-slate-700 underline-offset-4 hover:underline"
          >
            Explore practice areas
          </a>
        </div>

        <dl className="mt-4 grid max-w-md grid-cols-3 gap-4 rounded-2xl border border-slate-200/70 bg-white/75 p-4 text-xs text-slate-700 backdrop-blur-sm sm:text-sm">
          <div>
            <dt className="text-[0.65rem] uppercase tracking-wide text-slate-400">
              Years combined
            </dt>
            <dd className="text-lg font-semibold text-slate-900">
              25+
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] uppercase tracking-wide text-slate-400">
              Matters handled
            </dt>
            <dd className="text-lg font-semibold text-slate-900">
              300+
            </dd>
          </div>
          <div>
            <dt className="text-[0.65rem] uppercase tracking-wide text-slate-400">
              Client satisfaction
            </dt>
            <dd className="text-lg font-semibold text-slate-900">
              4.9/5
            </dd>
          </div>
        </dl>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="relative z-10"
      >
        <div className="absolute -inset-6 rounded-3xl bg-slate-900/5 blur-3xl" />

        <div className="relative rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-lg shadow-slate-900/10 backdrop-blur-sm">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-blue-900">
            About Alpha-Juris Chambers
          </p>
          <p className="mt-2 text-sm font-medium text-slate-900">
            A strong, viable and qualitative practice built on honesty, integrity and excellence.
          </p>

          <div className="mt-4 space-y-3 text-xs text-slate-700">
            <p>
              Alpha-Juris Chambers was established in 1992. From a single office at inception, the firm expanded to operate offices in Lagos, Port Harcourt, Calabar and Abuja.
            </p>
            <p>
              Our services span corporate and commercial work, litigation/ADR, real property, taxation, immigration, intellectual property/information technology, banking/insolvency and sector-focused advisory including telecommunications, oil &amp; gas, and mining &amp; minerals.
            </p>
            <p>
              We also support professional development through seminars, workshops and continuing legal education initiatives.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function PracticeAreas() {
  return (
    <motion.section
      id="practice-areas"
      className="mb-16 scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            Practice Areas
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Deep focus, practical outcomes.
          </h2>
        </div>
        <p className="hidden max-w-sm text-xs text-slate-600 md:block">
          We pair subject-matter expertise with hands-on industry experience in the Nigerian market,
          helping clients navigate decisions that actually move the business
          forward.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {practiceAreas.map((area, index) => (
          <motion.div
            key={area.title}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300/60 hover:bg-blue-50"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <h3 className="text-sm font-semibold text-slate-900">
              {area.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-700">
              {area.description}
            </p>
            <p className="mt-4 text-[0.7rem] font-medium uppercase tracking-wide text-slate-500 opacity-0 transition group-hover:opacity-100">
              Learn more →
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function Attorneys() {
  return (
    <motion.section
      id="attorneys"
      className="mb-16 scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
          Our team
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          Attorneys who know your world.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {attorneys.map((attorney, index) => (
          <motion.div
            key={attorney.name}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-md">
              {attorney.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <h3 className="text-sm font-semibold text-slate-900">
              {attorney.name}
            </h3>
            <p className="text-xs font-medium text-slate-500">
              {attorney.role}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-700">
              {attorney.bio}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function WhyUs() {
  const notableResults = [
    {
      category: "Company & Corporate Law",
      title: "Share purchase negotiations and acquisition (WABECO Petroleum Nigeria Limited)",
      summary:
        "Lead solicitors in intensive share purchase negotiations and a consequent share acquisition agreement involving an offshore multinational and a special-purpose bitumen company domiciled in Nigeria.",
    },
    {
      category: "Receivership",
      title: "Receiver/Manager appointment successfully challenged (WABECO Petroleum Limited)",
      summary:
        "Lead solicitors in litigation that successfully challenged and vacated the appointment of a Receiver/Manager by a major Nigerian commercial bank over company assets, including a tank farm, arising from an unresolved loan transaction.",
    },
    {
      category: "Privatisation / Property",
      title: "Reclaim of privatised NITEL facility (SAFECON Real Estates Limited)",
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
      title: "Challenge to demolition of duly approved duplex units (Katampe Extension)",
      summary:
        "Lead counsel in an FCT High Court suit instituted by Ideal Grace Consulting Limited challenging the propriety of the FCDA’s demolition of duplex units duly approved and built by the client.",
    },
    {
      category: "Arbitration",
      title: "Contract breach arbitration award (International Trauma and Critical Care Centre Limited)",
      summary:
        "Lead counsel in arbitration proceedings against a state government relating to failure to adequately pay for specialised medical services; the arbitral tribunal made an award in favour of the client.",
    },
    {
      category: "Finance / Mortgage",
      title: "Enforcement of possession after sale under mortgage (SAFECON Real Estates Limited)",
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

  return (
    <motion.section
      id="why-us"
      className="mb-16 scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
          Notable Results
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          Selected matters handled by the Chambers.
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Below is a curated snapshot of notable and recent legal work across corporate transactions, litigation,
          arbitration, real estate, and regulatory matters.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {notableResults.map((item, index) => (
          <motion.article
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-blue-900">
              {item.category}
            </p>
            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-700">
              {item.summary}
            </p>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
          Important note
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-600">
          Matter outcomes depend on facts, evidence, and applicable law. The summaries above are provided for
          informational purposes and do not constitute legal advice.
        </p>
      </div>
    </motion.section>
  );
}
function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="mb-16 scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
          Client feedback
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          Trusted partners to growing businesses.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, index) => (
          <motion.figure
            key={t.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <p className="text-sm italic text-slate-800">
              “{t.quote}”
            </p>
            <figcaption className="mt-3 text-xs text-slate-700">
              <span className="font-semibold text-slate-900">
                {t.name}
              </span>{" "}
              • {t.role}
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
}

function ContactSection() {
  return (
    <motion.section
      id="contact"
      className="mb-20 scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Let&apos;s talk about your matter.
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Share a brief overview of your situation and our team will respond
            with next steps. We do not share your information with third
            parties.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-700">
            <p>
              <span className="font-semibold">Abuja Office (Chambers):</span>{" "}
              Suite 6 Block B (2nd Floor, Left Wing), Alpha Cell Plaza, 12 Ebitu Ukiwe, by NIPCO Gas Station, Jabi, Abuja.
            </p>

            <p>
              <span className="font-semibold">Port Harcourt Office:</span>{" "}
              8 Choba street, D/Line, Port Harcourt, Rivers state.
            </p>

            <p>
              <span className="font-semibold">Lagos Office:</span>{" "}
              8 Biaduo street, S/W Ikoyi, Lagos.
            </p>

            <p>
              <span className="font-semibold">Phone number (Abuja Office):</span>{" "}
              <a href="tel:+2348138570737" className="hover:text-blue-900">
                +234 813 857 0737
              </a>
            </p>

            <p className="text-xs text-slate-500">
              *This form does not create an attorney-client relationship.
            </p>
          </div>
        </div>

        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-blue-300 focus:ring-1 focus:ring-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(202) 555-0123"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 placeholder:text-slate-400"
              />
            </div>
            <div>
              <label
                htmlFor="matter"
                className="mb-1 block text-xs font-medium text-slate-700"
              >
                Type of matter
              </label>
              <select
                id="matter"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 placeholder:text-slate-400"
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
              className="mb-1 block text-xs font-medium text-slate-700"
            >
              Briefly describe your situation
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Share relevant dates, parties involved, and your main questions."
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none resize-none focus:border-blue-300 focus:ring-1 focus:ring-blue-300 placeholder:text-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
          >
            Submit inquiry
          </button>
        </form>
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 pt-6 text-xs text-slate-500">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} Alpha Juris Chambers. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-blue-900">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-blue-900">
            Terms of Use
          </a>
        </div>
      </div>
      <p className="mt-2 text-[0.65rem] text-slate-500">
        This website is for informational purposes only and does not constitute
        legal advice. Viewing this site or contacting us does not create an
        attorney-client relationship.
      </p>
    </footer>
  );
}
function MeetPartner() {
  return (
    <motion.section
      id="partner"
      className="mb-16 scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.05 }}
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
            Meet the Partner
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
            {partner.name}
          </h2>
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
            <a
              href="#contact"
              className="rounded-full bg-blue-900 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-800"
            >
              Request a Consultation
            </a>
            <a
              href="#practice-areas"
              className="text-xs font-medium text-slate-700 underline-offset-4 hover:underline"
            >
              View practice focus
            </a>
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
                <p className="text-sm font-semibold text-slate-900">{partner.name}</p>
                <p className="text-xs text-slate-500">{partner.title}, Alpha Juris Chambers</p>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-xs text-slate-700">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[0.65rem] uppercase tracking-wide text-slate-500">Approach</p>
                <p className="mt-1 text-slate-900">
                  Thorough case analysis, early risk detection, and decisive courtroom strategy.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[0.65rem] uppercase tracking-wide text-slate-500">Client Promise</p>
                <p className="mt-1 text-slate-900">
                  Straight answers, measured advice, and relentless advocacy when it matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Publications() {
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

  // Close modal on ESC
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeRequest();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <motion.section
      id="publications"
      className="mb-16 scroll-mt-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">
          Publications
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
          Books and practice guides authored by the Chambers.
        </h2>
        <p className="mt-3 max-w-3xl text-sm text-slate-700">
          Due to volume, we display a snapshot of themes online. These
          publications are designed to be practical—covering Nigerian commercial
          drafting, litigation procedure, sector regulation, and compliance.
        </p>
      </div>

      {/* Book cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((b, idx) => (
          <motion.article
            key={b.title}
            className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: idx * 0.03 }}
          >
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-blue-900">
              {b.category}
            </p>

            <h3 className="mt-2 text-sm font-semibold text-slate-900">
              {b.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-700">
              {b.summary}
            </p>

            <ul className="mt-4 space-y-2 text-xs text-slate-700">
              {b.highlights.slice(0, 3).map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openRequest(b.title)}
                className="inline-flex items-center justify-center rounded-full bg-blue-900 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-800"
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

      {/* Availability note */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 text-sm shadow-sm">
        <p className="text-sm font-semibold text-slate-900">
          Authentic copies available on request
        </p>
        <p className="mt-2 text-xs leading-relaxed text-slate-600">
          Copies may attract a cost depending on the title, edition, volume, and
          delivery format. If you are a founder, in-house counsel, or
          practitioner looking for reliable precedent and Nigerian market
          insight, these books are a strong place to start.
        </p>
        <div className="mt-3">
          <button
            type="button"
            onClick={() => openRequest()}
            className="inline-flex items-center justify-center rounded-full border border-blue-900 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-900 shadow-sm hover:bg-blue-50"
          >
            Request copies
          </button>
        </div>
      </div>

      {/* Modal */}
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
                // No backend wired yet; keep UI smooth.
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
                  If you&apos;re unsure, select any that match your needs and add
                  details below.
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
    </motion.section>
  );
}