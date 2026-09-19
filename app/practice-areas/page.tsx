import PageHero from "../components/PageHero";
import type { Metadata } from "next";
import Link from "next/link";
import { practices } from "../lib/firm";
export const metadata: Metadata = { title: "Our Expertise", description: "Explore Alpha-Juris Chambers’ services in corporate law, litigation, property, tax, immigration, banking and energy." };
export default function PracticeAreasPage() {
  return <>
    <PageHero eyebrow="Our expertise" title="Legal insight." accent="Commercial perspective." description="From business formation to complex disputes, our practice supports the decisions, transactions and challenges that matter to our clients." />
    <div className="site-container expertise-layout"><aside className="expertise-index"><p className="eyebrow">Explore our practice</p><nav aria-label="Practice areas">{practices.map(p => <a href={`#${p.id}`} key={p.id}>{p.title}<span aria-hidden>↗</span></a>)}</nav></aside><div>{practices.map((p,i) => <section className="expertise-detail" id={p.id} key={p.id}><span className="practice-number">{String(i+1).padStart(2,"0")}</span><h2>{p.title}</h2><p>{p.description}</p><ul>{p.services.map(s=><li key={s}>{s}</li>)}</ul><Link className="text-link" href={`/contact?matter=${p.id}`}>Discuss this area with us <span aria-hidden>↗</span></Link></section>)}</div></div>
    <section className="practice-section"><div className="site-container"><p className="eyebrow">Our approach</p><h2 className="editorial-title">Your objectives guide our advice.</h2><p className="section-description">We begin with your circumstances and commercial goals, then consider the legal options available. In disputes, we encourage clients to explore alternative resolution mechanisms alongside court proceedings.</p><Link href="/contact" className="text-link">Start a conversation <span aria-hidden>↗</span></Link></div></section>
  </>;
}
