import Link from "next/link";
export default function PageHero({ eyebrow, title, accent, description }: { eyebrow: string; title: string; accent: string; description: string }) {
  return <section className="interior-hero"><div className="site-container"><div className="page-breadcrumb"><Link href="/">Home</Link><span aria-hidden>/</span><span>{eyebrow}</span></div><p className="eyebrow light">{eyebrow}</p><h1>{title}<br /><em>{accent}</em></h1><p>{description}</p></div><span className="hero-rule" aria-hidden /></section>;
}
