import Link from "next/link";
export default function Footer() {
  return <footer className="site-footer"><div className="site-container"><div className="footer-top"><div className="footer-brand">ALPHA-JURIS CHAMBERS<p>Advocates & Investment Solicitors</p></div><nav aria-label="Footer navigation"><Link href="/about">The firm</Link><Link href="/practice-areas">Our expertise</Link><Link href="/attorneys">Our people</Link><Link href="/publications">Publications</Link><Link href="/contact">Contact</Link></nav></div><div className="footer-bottom"><p>© {new Date().getFullYear()} Alpha-Juris Chambers. All rights reserved.</p><p>This website is for informational purposes only and does not constitute legal advice or create an attorney-client relationship.</p></div></div></footer>;
}
