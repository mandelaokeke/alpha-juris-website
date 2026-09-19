// app/layout.tsx
import Header from "./head-foot/Header";
import Footer from "./head-foot/Footer";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = { title: { default: "Alpha-Juris Chambers | Advocates & Investment Solicitors", template: "%s | Alpha-Juris Chambers" }, description: "Commercial-minded legal counsel, corporate advisory and dispute resolution across Nigeria. Established in 1992." };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="relative min-h-screen bg-transparent text-slate-900 antialiased overflow-x-hidden">
        <div className="relative z-10 flex min-h-screen flex-col">
          <a className="skip-link" href="#main-content">Skip to content</a>
          <Header />

          <main id="main-content" tabIndex={-1} className="w-full flex-1">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}