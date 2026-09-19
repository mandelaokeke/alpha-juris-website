import Link from "next/link";
export default function ContactCallout() {
  return <section className="site-container conversation-section"><div><p className="eyebrow">Let’s move forward</p><h2>Your next step starts<br />with a conversation.</h2></div><Link href="/contact" className="button-navy">Discuss your matter <span aria-hidden>↗</span></Link></section>;
}
