import React from "react";
import { Globe, Send, Share2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#c0c8c3]/20 bg-[#00261a] pb-10 pt-16 text-white lg:pt-20">
      
      {/* Top Section */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:px-8">
        
        {/* Brand */}
        <div className="space-y-6 lg:col-span-4">
          <div
            className="text-2xl font-bold text-[#775a19]"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Harvestora Global
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-white/70">
            Pioneering the future of organic trade through rigorous
            industrial standards and sustainable supply chain ethics.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4 lg:col-span-2">
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#ffdea5]">
            Navigation
          </h4>

          <nav className="flex flex-col gap-3">
            {[
              "Global Offices",
              "Quality Assurance",
              "Trade Compliance",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/70 transition-colors hover:text-[#ffdea5]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Legal */}
        <div className="space-y-4 lg:col-span-2">
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#ffdea5]">
            Legal & ESG
          </h4>

          <nav className="flex flex-col gap-3">
            {[
              "Privacy Policy",
              "Sustainability Report",
              "Career Portal",
            ].map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-white/70 transition-colors hover:text-[#ffdea5]"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Newsletter */}
        <div className="space-y-6 lg:col-span-4">
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#ffdea5]">
            Global Newsletter
          </h4>

          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="trade.desk@example.com"
              className="w-full rounded-md border border-white/10 bg-[#0f3d2e] py-3 pl-4 pr-14 text-sm text-white placeholder:text-white/40 focus:border-[#775a19] focus:outline-none focus:ring-1 focus:ring-[#775a19]"
            />

            <button className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-md text-[#775a19] transition-all hover:bg-white/5 hover:scale-105">
              <Send size={18} />
            </button>
          </div>

          <p className="text-[11px] leading-relaxed text-white/40">
            Subscribe for weekly trade insights and commodity price indices.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-center justify-between gap-5 border-t border-white/10 px-4 pt-8 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        
        <p className="text-[11px] tracking-wide text-white/50">
          © 2024 HARVESTORA GLOBAL ENTERPRISE. ALL RIGHTS RESERVED.
          INDUSTRIAL ORGANIC PRECISION.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="text-white/50 transition-colors hover:text-white"
          >
            <Share2 size={18} />
          </a>

          <a
            href="#"
            className="text-white/50 transition-colors hover:text-white"
          >
            <Globe size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;