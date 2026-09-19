import PageHero from "../components/PageHero";
import type { Metadata } from "next";
import InquiryForm from "../components/InquiryForm";
import { firm, practices } from "../lib/firm";
export const metadata: Metadata = { title: "Contact", description: "Contact Alpha-Juris Chambers to discuss your legal matter with our team." };
export default async function ContactPage({ searchParams }: { searchParams: Promise<{ matter?: string }> }) {
 const { matter } = await searchParams;
 const initialMatter = practices.some(p=>p.id===matter) ? matter : "";
 return <><PageHero eyebrow="Contact the firm" title="Let’s talk about" accent="what matters to you." description="Get in touch with our team for legal advice, representation or information about our practice." /><div className="site-container contact-layout"><div className="contact-direct"><p className="eyebrow">Direct contact</p><a className="contact-phone" href={firm.phoneHref}>{firm.phone}</a><span className="contact-caption">Abuja office</span><div className="contact-emails"><a href={`mailto:${firm.email}`}>{firm.email}</a><a href={`mailto:${firm.partnerEmail}`}>{firm.partnerEmail}</a></div></div><div className="contact-offices"><div className="office-detail"><h2>Abuja</h2><p>Suite 6, Block B, 2nd Floor, Left Wing, Alpha Cell Plaza, 12 Ebitu Ukiwe, by NIPCO Gas Station, Jabi, Abuja.</p></div><div className="office-detail"><h2>Lagos</h2><p>8 Biaduo Street, S/W Ikoyi, Lagos.</p></div><div className="office-detail"><h2>Port Harcourt</h2><p>8 Choba Street, D/Line, Port Harcourt, Rivers State.</p></div><div className="office-detail"><h2>Calabar</h2><p>Please contact our team for office and appointment details.</p></div></div><InquiryForm initialMatter={initialMatter} /></div></>;
}
