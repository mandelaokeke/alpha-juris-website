import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ContactCallout from "../components/ContactCallout";
import { notableResults } from "../lib/results";
export const metadata: Metadata = { title: "Selected Experience", description: "Selected matters from Alpha-Juris Chambers’ work in transactions, litigation, arbitration and property disputes." };
export default function ExperiencePage() {
  return <><PageHero eyebrow="Selected experience" title="Experience in action." accent="Focused on what matters." description="A selection of the firm’s work across commercial transactions, court proceedings and arbitration, reflecting the breadth of matters entrusted to our team." /><section className="site-container experience-section"><div className="experience-heading"><p className="eyebrow">Representative matters</p><p>Each matter brings its own facts and challenges. These summaries describe selected work and outcomes; past results do not guarantee a similar outcome in another matter.</p></div><div className="experience-list">{notableResults.map((item,index)=><article className="experience-row" key={item.title}><div className="experience-category"><span className="practice-number">{String(index+1).padStart(2,"0")}</span><p className="eyebrow">{item.category}</p></div><div><h2>{item.title}</h2><p>{item.summary}</p></div></article>)}</div></section><ContactCallout /></>;
}
