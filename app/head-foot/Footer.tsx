import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-11/12 py-6 sm:w-10/12 lg:w-9/12">
        <div className="flex flex-col gap-3 text-center text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Alpha‑Juris Chambers. All rights
            reserved.
          </p>

          <p className="text-slate-500">
            Advocates • Investment Solicitors • Abuja, Nigeria
          </p>
        </div>

        <p className="mt-3 text-center text-[0.65rem] leading-relaxed text-slate-400">
          This website is for informational purposes only and does not constitute
          legal advice or create an attorney‑client relationship.
        </p>
      </div>
    </footer>
  );
};

export default Footer;