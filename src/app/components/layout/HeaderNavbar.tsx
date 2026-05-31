import React from 'react'

const HeaderNavbar = () => {
  return (
    <>
    
        <header className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
          <nav className="max-w-[1280px] mx-auto px-16 flex justify-between items-center h-20">
            <div className="text-[24px] font-bold text-[#00261a] tracking-tight" style={{ fontFamily: "Sora,sans-serif" }}>
              Harvestora Global
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {["Commodities", "Sustainability", "Global Network", "Supply Chain", "Certifications"].map((l) => (
                <a key={l} href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">{l}</a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden md:block text-[#414944] text-[14px] font-semibold tracking-[0.05em] hover:text-[#00261a] transition-colors">
                Investor Relations
              </button>
              <button className="bg-[#00261a] text-white px-6 py-2 rounded-[4px] text-[14px] font-semibold tracking-[0.05em] border-b-2 border-[#775a19] hover:bg-[#0f3d2e] transition-all">
                Request Quote
              </button>
            </div>
          </nav>
        </header>
    </>
  )
}

export default HeaderNavbar