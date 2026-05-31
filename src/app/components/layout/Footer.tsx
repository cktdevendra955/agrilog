import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-[#00261a] text-white w-full pt-20 pb-10 border-t border-[#c0c8c3]">
          <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 space-y-6">
              <div className="text-[24px] font-bold text-[#775a19]" style={{ fontFamily: "Sora,sans-serif" }}>Harvestora Global</div>
              <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                Pioneering the future of organic trade through rigorous industrial standards and sustainable supply chain ethics.
              </p>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-[#ffdea5] uppercase text-[12px] font-semibold tracking-widest">Navigation</h4>
              <nav className="flex flex-col gap-3">
                {["Global Offices", "Quality Assurance", "Trade Compliance"].map((l) => (
                  <a key={l} href="#" className="text-white/70 hover:text-[#ffdea5] transition-colors text-sm">{l}</a>
                ))}
              </nav>
            </div>
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-[#ffdea5] uppercase text-[12px] font-semibold tracking-widest">Legal &amp; ESG</h4>
              <nav className="flex flex-col gap-3">
                {["Privacy Policy", "Sustainability Report", "Career Portal"].map((l) => (
                  <a key={l} href="#" className="text-white/70 hover:text-[#ffdea5] transition-colors text-sm">{l}</a>
                ))}
              </nav>
            </div>
            <div className="md:col-span-4 space-y-6">
              <h4 className="text-[#ffdea5] uppercase text-[12px] font-semibold tracking-widest">Global Newsletter</h4>
              <div className="relative max-w-sm">
                <input
                  type="email"
                  placeholder="trade.desk@example.com"
                  className="w-full bg-[#0f3d2e] border border-white/10 px-4 py-3 rounded-[4px] focus:outline-none focus:border-[#775a19] focus:ring-1 focus:ring-[#775a19] transition-all text-white placeholder:text-white/40 text-[16px]"
                />
                <button className="absolute right-2 top-2 text-[#775a19] hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
              <p className="text-[11px] text-white/40">Subscribe for weekly trade insights and commodity price indices.</p>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto px-16 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/50 text-[11px] tracking-wide">
              © 2024 HARVESTORA GLOBAL ENTERPRISE. ALL RIGHTS RESERVED. INDUSTRIAL ORGANIC PRECISION.
            </p>
            <div className="flex gap-8">
              {["share", "language"].map((icon) => (
                <a key={icon} href="#" className="text-white/50 hover:text-white transition-colors">
                  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{icon}</span>
                </a>
              ))}
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer