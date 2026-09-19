"use client";
import { useState } from "react";
import { firm, practices } from "../lib/firm";
export default function InquiryForm({ initialMatter = "" }: { initialMatter?: string }) {
 const [draftOpened, setDraftOpened] = useState(false);
 return <form className="inquiry-form" onSubmit={event => { event.preventDefault(); const data = new FormData(event.currentTarget); const selectedArea = String(data.get("Area of enquiry") ?? ""); data.set("Area of enquiry", practices.find(p => p.id === selectedArea)?.title ?? (selectedArea === "other" ? "Other / Not sure" : "Not specified")); const body = Array.from(data.entries()).map(([key,value])=>`${key}: ${value}`).join("\n\n"); window.location.href = `mailto:${firm.email}?subject=${encodeURIComponent("Website enquiry — Alpha-Juris Chambers")}&body=${encodeURIComponent(body)}`; setDraftOpened(true); }}>
 <h2>Tell us how we can help.</h2><p className="form-intro">Share a short overview. Please leave out confidential documents and sensitive case details at this stage.</p>
 <div className="form-grid"><label>Full name<input name="Name" autoComplete="name" required placeholder="Your full name" /></label><label>Email address<input name="Email" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label>Phone <span>(optional)</span><input name="Phone" type="tel" autoComplete="tel" placeholder="+234 …" /></label><label>Area of enquiry<select name="Area of enquiry" defaultValue={initialMatter}><option value="">Please select</option>{practices.map(p=><option key={p.id} value={p.id}>{p.title}</option>)}<option value="other">Other / Not sure</option></select></label></div>
 <label>Brief overview<textarea name="Message" rows={5} required placeholder="What would you like our team to help with?" /></label><button className="button-navy" type="submit">Continue in your email app <span aria-hidden>↗</span></button>
 <p className="form-note">This opens a draft addressed to {firm.email}. Send that email to complete your enquiry. Contacting us does not create an attorney-client relationship.</p>
 {draftOpened && <p className="draft-status" role="status">Your email app has been asked to open a draft. If nothing opened, email <a href={`mailto:${firm.email}`}>{firm.email}</a> directly or call {firm.phone}.</p>}
 </form>;
}
