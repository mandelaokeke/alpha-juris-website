"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
const links = [["/about", "The Firm"], ["/practice-areas", "Practice Areas"], ["/attorneys", "Our People"], ["/why-us", "Experience"], ["/publications", "Publications"]];
export default function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const toggle = useRef<HTMLButtonElement>(null);
  return <header className="site-header" onKeyDown={event => { if (event.key === "Escape" && open) { setOpenPath(null); toggle.current?.focus(); } }}><div className="site-container header-inner">
    <Link href="/" className="brand" aria-label="Alpha-Juris Chambers home"><Image src="/alpha-juris-logo.png" alt="" width={52} height={52} priority /><span>ALPHA-JURIS<small>CHAMBERS</small></span></Link>
    <nav className="desktop-navigation" aria-label="Primary navigation">{links.map(([href, label]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}<Link className="desktop-contact" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link></nav><Link href="/contact" className="header-cta">Book a consultation <span aria-hidden>↗</span></Link>
    <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpenPath(open ? null : pathname)}>{open ? "Close ✕" : "Menu ☰"}</button>
  </div>{open && <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">{[...links, ["/contact", "Book a consultation"]].map(([href, label]) => <Link href={href} key={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpenPath(null)}>{label}<span aria-hidden>↗</span></Link>)}</nav>}</header>;
}
