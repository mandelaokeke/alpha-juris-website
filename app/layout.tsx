// app/layout.tsx
import Header from "./head-foot/Header";
import Footer from "./head-foot/Footer";
import "./globals.css";

function Watermark() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 bg-[url('/alpha-juris-logo.png')] bg-no-repeat bg-center"
      aria-hidden
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-transparent text-slate-900">
        {/* Global background watermark */}
        {/* <Watermark /> */}

        {/* App chrome */}
        <div className="relative z-10 flex min-h-screen flex-col">
          <Header />

          <main className="w-full flex-1 pt-0 pb-0">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}