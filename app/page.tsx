import Image from "next/image";
import Link from "next/link";

const practices = [
  ["corporate", "Corporate & Commercial", "Practical counsel for the decisions that shape your business."],
  ["disputes", "Litigation & Dispute Resolution", "Focused advocacy when the stakes demand a clear strategy."],
  ["property", "Real Property", "Clarity and confidence at every stage of a property transaction."],
  ["tax", "Taxation", "Considered advice on compliance, transactions and tax risk."],
  ["ip", "Intellectual Property & IT", "Protecting ideas and supporting businesses in a digital world."],
  ["banking", "Banking & Insolvency", "Commercially grounded guidance on recovery and restructuring."],
];

export default function HomePage() {
  return <>
    <section className="landing-hero">
      <Image src="/hero-law.jpg" alt="" fill priority sizes="100vw" className="hero-photo" />
      <div className="hero-shade" />
      <div className="site-container hero-content">
        <p className="eyebrow light">Alpha-Juris Chambers · Established 1992</p>
        <h1>Clear counsel.<br />Resolute <em>advocacy.</em></h1>
        <p className="hero-description">Commercial-minded legal advice for your most important decisions. We help businesses and professionals navigate complex matters across Nigeria.</p>
        <div className="hero-actions"><Link className="button-gold" href="/contact">Discuss your matter <span aria-hidden>↗</span></Link><Link className="text-link light" href="/practice-areas">Explore our expertise <span aria-hidden>→</span></Link></div>
      </div>
      <div className="hero-bottom site-container"><span>Advocates & Investment Solicitors</span><a href="#the-firm">Discover the firm <span aria-hidden>↓</span></a></div>
    </section>
    <div className="location-strip"><div className="site-container"><span>A Nigerian firm. A broader perspective.</span><p>Abuja <i /> Lagos <i /> Port Harcourt <i /> Calabar</p></div></div>
    <section id="the-firm" className="site-container firm-section">
      <div className="firm-image"><Image src="/law-library.jpg" alt="Legal reference books in a law library" fill sizes="(max-width: 760px) 100vw, 45vw" className="object-cover" /><div className="heritage-note"><span>Since 1992</span><p>A foundation of<br />legal experience.</p></div></div>
      <div className="firm-copy"><p className="eyebrow">The firm</p><h2>Sound judgment.<br />A practical perspective.</h2><p>Alpha-Juris Chambers is a full-service Nigerian law firm advising on corporate transactions, commercial matters and complex disputes.</p><p>We bring sharp legal analysis and business-focused judgment to every brief, taking the time to understand what matters to you and the outcome you need.</p><Link className="text-link" href="/about">Discover our firm <span aria-hidden>↗</span></Link></div>
    </section>
    <section className="home-partner"><div className="site-container home-partner-inner"><div><p className="eyebrow">Leadership</p><h2 className="editorial-title">Jerry Edemeka</h2><p className="person-role">Lead Partner · Abuja</p></div><div><p>Personal leadership, backed by the experience of our wider team. Jerry’s practice focuses on litigation and corporate tax management consultancy.</p><Link className="text-link" href="/attorneys#jerry-edemeka">Meet our lead partner <span aria-hidden>↗</span></Link></div></div></section>
    <section className="practice-section"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">Our expertise</p><h2>Experience where it matters.</h2></div><Link className="text-link" href="/practice-areas">All practice areas <span aria-hidden>↗</span></Link></div><div className="practice-grid">{practices.map(([id, title, description], index) => <Link href={`/practice-areas#${id}`} className="practice-item" key={title}><span className="practice-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p><span className="practice-arrow" aria-hidden>↗</span></Link>)}</div></div></section>
    <section className="site-container conversation-section"><div><p className="eyebrow">Let’s move forward</p><h2>Every matter starts<br />with a conversation.</h2><p>Tell us what you’re facing. We’ll help you understand the next step.</p></div><div className="conversation-actions"><Link className="button-navy" href="/contact">Get in touch <span aria-hidden>↗</span></Link><a className="text-link" href="tel:+2348138570737">+234 813 857 0737</a><span>Abuja office</span></div></section>
  </>;
}
