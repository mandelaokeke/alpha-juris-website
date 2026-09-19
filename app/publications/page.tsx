import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ContactCallout from "../components/ContactCallout";
import PublicationLibrary from "../components/PublicationLibrary";
export const metadata: Metadata = { title: "Publications", description: "Explore legal publications on commercial agreements, advocacy, property, investment and regulatory practice. Contact Alpha-Juris Chambers for availability." };
export default function PublicationsPage() {
  return <><PageHero eyebrow="Publications" title="Knowledge that informs." accent="Insight for your practice." description="Explore the firm’s catalogue of practical legal publications, covering commercial transactions, litigation, investment and regulatory matters." /><PublicationLibrary /><ContactCallout /></>;
}
