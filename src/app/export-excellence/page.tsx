export default function SupplyChainPage() {
  const timelineSteps = [
    {
      num: 1,
      title: "Ethical Sourcing",
      desc: "Partnering exclusively with certified organic farmer collectives to ensure fair trade and regenerative practices.",
      mobileDesc: "Partnering exclusively with certified organic farmer collectives to ensure fair trade.",
      tag: "FARMER PARTNERSHIPS",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfmDYGBClWNSYx8alS-zRpeQd_XJA1F9FyLmHfKuUYyZ74mtT4lVid_KbNEh982nfvAea6NvJh6diNx9mPEpFG0J991cfxE3FiZ3s9LmyHOlToN1vah75gtZIwUMxkuk8w7jSpaKJyaArCSEwl34bN4U74P-JQx52PupApQCXhTg00URYeNeqXZ1L1H5xBsiJQLoR8UCENXR-S8IL7t-3CgR-DQItjcTk2_FWKqSUkM9oKdfQ3pPI7xx4KZv6S4CUsJFVXB_WQQRhg",
    },
    {
      num: 2,
      title: "Quality Testing",
      desc: "NABL accredited lab testing for multi-residue analysis, ensuring 100% purity and global safety compliance.",
      mobileDesc: "NABL accredited lab testing for multi-residue analysis and global safety.",
      tag: "NABL ACCREDITED",
      icons: ["science", "verified_user"],
    },
    {
      num: 3,
      title: "Precision Processing",
      desc: "State-of-the-art grading and sorting using AI-optical sensors to achieve industrial-grade uniformity.",
      mobileDesc: "State-of-the-art grading and sorting using AI-optical sensors.",
      tag: "AI-POWERED SORTING",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJJvRzoklrlf-GOpDV1h_H9LxmPF3sIdoX0gPwGRNME9opaZh-sWp4xdS71PrYtpVHAJVdGRLx998sh1wTdKnCK3grdjQ1K04ggtiNKa5aYCiN87CRUGyGgFGIklQWhUO02SKyBnM4-M8DhiVfvGsGj3NyAUu0LR3GPp9NT6O3pdU96_dN8qf-SuUddvR1X8w3R24JKuMFewGZWvdvNpf1lQLcf5Z_eFZqkbPvwhdgcCQDzfNcgUDRbo3_u3MQbm0hGa06QEaOWI2Z",
    },
    {
      num: 4,
      title: "Export Packaging",
      desc: "Custom branded, moisture-proof, and bulk-ready packaging designed for long-haul durability.",
      mobileDesc: "Custom moisture-proof packaging for long-haul durability.",
      tag: "CUSTOM BRANDED",
      moisture: true,
    },
    {
      num: 5,
      title: "Compliance & Documentation",
      desc: "Comprehensive handling of Phytosanitary, IEC, and custom clearance for frictionless borders.",
      mobileDesc: "Handling of Phytosanitary, IEC, and custom clearance.",
      tag: "GLOBAL STANDARDS",
      badges: ["PHYTO-CERT", "IEC REGISTERED", "ISO 22000"],
    },
    {
      num: 6,
      title: "Global Transit",
      desc: "Multi-modal sea freight with temperature-controlled cold chain logistics for perishables.",
      mobileDesc: "Multi-modal sea freight with temperature-controlled cold chain logistics.",
      tag: "COLD-CHAIN SECURED",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxSC_rweY0Xe8Xtj2pa8Ydt4EgI6G5KXneg_BAj6zUWyAx3uqBvNCF9HsWq0Ya-9StDwxAq5MvfgUE2zrKAxZmV8TYwIGtMQ-8WP0d10amL2vVTZpgDi6TsjpM0jUU-TQelZzOLCjVQL2mNEjDNxo7VhkFu3Q2lVqFKeij6eMzFnMROJCS04C8ANnQ4rCRr4CrPDDp2Rk8KcL3nlmqX0Preg2w07djxe2czHsPCcLbujhP3ZrIBjPYT_IesfphHQuKJLeLYpCi-2R6",
    },
    {
      num: 7,
      title: "Final Delivery",
      desc: "End-to-end logistics with port-to-door delivery in key markets including UAE, USA, and Europe.",
      mobileDesc: "End-to-end logistics with port-to-door delivery in UAE, USA, and Europe.",
      tag: "LAST-MILE LOGISTICS",
      destinations: ["UAE", "USA", "EU"],
    },
  ];

  const partners = [
    { icon: "directions_boat", name: "MAERSK" },
    { icon: "grid_view", name: "MSC" },
    { icon: "package_2", name: "COSCO" },
    { icon: "hub", name: "HAPAG-LLOYD" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          vertical-align: middle;
          font-style: normal;
          line-height: 1;
        }
        .glass-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .timeline-path { background: #0f3d2e; }
        .gold-node {
          background: #775a19;
          box-shadow: 0 0 15px rgba(119,90,25,0.3);
        }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">

        {/* ── NAVBAR ── */}
        <header className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
          <nav className="max-w-[1280px] mx-auto px-16 flex justify-between items-center h-20">
            <div className="text-[24px] font-bold text-[#00261a] tracking-tight" style={{ fontFamily: "Sora, sans-serif" }}>
              Harvestora Global
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Commodities</a>
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Sustainability</a>
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Global Network</a>
              <a href="#" className="text-[#00261a] border-b-2 border-[#775a19] font-bold pb-1 text-[16px]">Supply Chain</a>
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Certifications</a>
            </div>
            <div className="flex gap-4">
              <button className="hidden lg:block text-[#414944] text-[14px] font-semibold tracking-[0.05em] hover:text-[#00261a]">Investor Relations</button>
              <button className="bg-[#00261a] text-white px-6 py-2 rounded-[4px] text-[14px] font-semibold tracking-[0.05em] border-b-2 border-[#ffdea5] hover:-translate-y-0.5 transition-all">
                Request Quote
              </button>
            </div>
          </nav>
        </header>

        <main>

          {/* ── HERO ── */}
          <section className="relative h-[819px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD__pSik2oqZxkwzpbOv5eXYnxFKB0xVe8d5tq1nku6et9VJEKO-86kGFEbcbZPuj6BDoic7vDMUuSD-cExugtElzvV0zMCt4UJ3LVyJwTSEulLHgfW7K5-Hv6r7xenO6WVVyhpAbQFSXgmMpL7lYnpUk8OIyUSSUtNYx7BMKXkqOD71AyO2BKNp0asyX5mYMrBO-q5oZun0BD0uwxaOPTOK86BRSCAnGfJ9m2ZSQyqufmOJ16tn2jS2G7x-pSus3Y6-WTlo6OnXMrd"
                alt="Industrial shipping port"
                className="w-full h-full object-cover grayscale-[20%] brightness-[60%]"
              />
            </div>
            <div className="relative z-10 max-w-[1280px] mx-auto px-16 w-full">
              <div className="max-w-2xl">
                <span className="inline-block bg-[#fed488] text-[#785a1a] px-4 py-1 rounded-full text-[14px] font-semibold tracking-[0.05em] mb-6">
                  INDUSTRIAL PRECISION × ORGANIC ROOTS
                </span>
                <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6">Our Export Excellence</h1>
                <p className="text-[18px] leading-[1.6] text-white/90 mb-10">
                  Bridging continents with a seamless, zero-compromise supply chain. From the fertile heartlands to global tables, we ensure every shipment embodies the gold standard of organic trade.
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#00261a] text-white px-8 py-4 rounded-xl text-[14px] font-semibold tracking-[0.05em] flex items-center gap-2 hover:bg-[#0f3d2e] transition-all">
                    Explore Logistics <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <button className="glass-card text-white px-8 py-4 rounded-xl text-[14px] font-semibold tracking-[0.05em] hover:bg-white/10 transition-all border border-white/20">
                    View Certifications
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ── WORKFLOW TIMELINE ── */}
          <section className="py-24 bg-[#f8faf9]">
            <div className="max-w-[1280px] mx-auto px-16">
              <div className="text-center mb-20">
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-4">7-Step Workflow Timeline</h2>
                <p className="text-[16px] text-[#414944] max-w-xl mx-auto">
                  Our rigorous process ensures that the organic integrity of our products remains untarnished throughout the global journey.
                </p>
              </div>

              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 timeline-path hidden md:block" />

                <div className="space-y-12">
                  {timelineSteps.map((step, i) => {
                    const isEven = i % 2 !== 0;
                    return (
                      <div
                        key={step.num}
                        className={`relative flex flex-col items-center justify-between ${isEven ? "md:flex-row-reverse" : "md:flex-row"}`}
                      >
                        {/* Desktop text side */}
                        <div className={`md:w-5/12 hidden md:block ${isEven ? "text-left" : "text-right"}`}>
                          <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a]">{step.title}</h3>
                          <p className="text-[#414944] mt-2 text-[16px]">{step.desc}</p>
                        </div>

                        {/* Node */}
                        <div className="z-10 w-12 h-12 gold-node rounded-full flex items-center justify-center text-white font-bold mb-4 md:mb-0 shrink-0">
                          {step.num}
                        </div>

                        {/* Card */}
                        <div className="md:w-5/12 bg-white p-8 rounded-xl shadow-sm glass-card w-full">
                          {/* Mobile title */}
                          <div className="md:hidden mb-4">
                            <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a]">{step.title}</h3>
                            <p className="text-[#414944] mt-2 text-[16px]">{step.mobileDesc}</p>
                          </div>

                          {/* Card content */}
                          {step.img && (
                            <img src={step.img} alt={step.title} className="w-full h-48 object-cover rounded-[4px] mb-4" />
                          )}
                          {step.icons && (
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              {step.icons.map((icon) => (
                                <div key={icon} className="bg-[#f3f4f3] h-24 rounded flex items-center justify-center">
                                  <span className="material-symbols-outlined text-[#775a19]" style={{ fontSize: 36 }}>{icon}</span>
                                </div>
                              ))}
                            </div>
                          )}
                          {step.moisture && (
                            <div className="bg-[#00261a]/5 p-6 rounded-[4px] mb-4 border border-[#c0c8c3]">
                              <div className="flex items-center gap-4 mb-2">
                                <span className="material-symbols-outlined text-[#00261a]">inventory_2</span>
                                <div className="h-2 w-full bg-[#c0c8c3] rounded-full overflow-hidden">
                                  <div className="bg-[#775a19] h-full w-3/4" />
                                </div>
                              </div>
                              <p className="text-[14px] font-semibold tracking-[0.05em] text-[#414944]">Moisture Resistance: 99.8%</p>
                            </div>
                          )}
                          {step.badges && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {step.badges.map((b) => (
                                <span key={b} className="bg-[#775a19]/10 text-[#785a1a] px-3 py-1 rounded-full text-xs font-bold">{b}</span>
                              ))}
                            </div>
                          )}
                          {step.destinations && (
                            <div className="flex justify-between items-center bg-[#edeeed] p-4 rounded-[4px] mb-4">
                              {step.destinations.map((d, di) => (
                                <div key={d} className="flex items-center">
                                  <div className="text-center">
                                    <p className="text-xs text-[#414944]">{d}</p>
                                    <span className="material-symbols-outlined text-[#00261a]">location_on</span>
                                  </div>
                                  {di < step.destinations!.length - 1 && (
                                    <div className="h-px flex-1 border-t border-dashed border-[#c0c8c3] mx-2 w-8" />
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          <span className="text-[14px] font-semibold tracking-[0.05em] text-[#775a19]">{step.tag}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ── QUALITY ASSURANCE ── */}
          <section className="py-24 bg-[#00261a] text-white">
            <div className="max-w-[1280px] mx-auto px-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold mb-8">
                    Purity Guaranteed Through Advanced Automation
                  </h2>
                  <p className="text-[18px] leading-[1.6] mb-12 text-white/80">
                    Our proprietary 'Zero-Contact' processing environment ensures that from the moment raw produce enters our facility until it is sealed in export-grade containers, human intervention is eliminated.
                  </p>
                  <div className="space-y-8">
                    {[
                      { icon: "clean_hands", title: "Zero-Contact Processing", desc: "Automated cleaning and packaging systems eliminate contamination risks entirely." },
                      { icon: "history_edu", title: "Farm-to-FOB Transparency", desc: "Blockchain-verified documentation providing real-time status from farm gate to free-on-board shipping." },
                    ].map(({ icon, title, desc }) => (
                      <div key={title} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                        <div className="w-12 h-12 rounded-xl bg-[#775a19] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-white">{icon}</span>
                        </div>
                        <div>
                          <h4 className="text-[24px] leading-[1.3] font-semibold text-[#ffdea5] mb-1">{title}</h4>
                          <p className="text-white/70 text-[16px]">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYn_qF_VIUk6sPN34gMyXgRp18CQJMkjZxil946w835YVaCtYqxtw1wVSo0PmR9oDSMvVW3GHYCuXk_69ot22osMDgRN-c4XPTJCWxqUQ_QrnW4ftg5IXLr1xeAf9sh7hrJ2fBrn84vHEHcJVTRwjPFK9Z8rR20G-rjUExcGKLOcsp65AoYtmUPO1uKQ4AxD_XQUs-J0S1xiFe-dQm6iuUz2Rll3UGIy2sFF8LzCSUFy2-esJwe91xSNrY_owtms1B_TeKwo6GHcLD"
                    alt="Quality lab"
                    className="rounded-3xl shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-8 -left-8 glass-card p-8 rounded-2xl max-w-xs text-[#191c1c]">
                    <p className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-2">99.9%</p>
                    <p className="text-[14px] font-semibold tracking-[0.05em]">Purity Score consistently maintained across 12,000+ annual shipments.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── LOGISTICS PARTNERS ── */}
          <section className="py-20 bg-[#f3f4f3]">
            <div className="max-w-[1280px] mx-auto px-16 text-center">
              <p className="text-[14px] font-semibold tracking-widest text-[#414944] uppercase mb-12">
                Global Operational Scale Enabled By
              </p>
              <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {partners.map(({ icon, name }) => (
                  <div key={name} className="flex items-center gap-2 text-[24px] font-bold text-[#00261a]" style={{ fontFamily: "Sora, sans-serif" }}>
                    <span className="material-symbols-outlined">{icon}</span> {name}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#775a19]/5 z-0" />
            <div className="max-w-[1280px] mx-auto px-16 relative z-10 text-center">
              <h2 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-8">
                Ready to Scale Your Organic Supply?
              </h2>
              <p className="text-[18px] leading-[1.6] text-[#414944] max-w-2xl mx-auto mb-12">
                Download our 2024 Export Capability Report or speak with our global trade desk to initiate a trial consignment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <button className="bg-[#00261a] text-white px-10 py-5 rounded-xl text-[14px] font-semibold tracking-[0.05em] hover:bg-[#0f3d2e] transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">download</span> Download Export Guide
                </button>
                <button className="bg-[#e1e3e2] text-[#00261a] px-10 py-5 rounded-xl text-[14px] font-semibold tracking-[0.05em] hover:bg-[#d9dad9] transition-all flex items-center justify-center gap-3">
                  Start Inquiry <span className="material-symbols-outlined">chat</span>
                </button>
              </div>
            </div>
          </section>

        </main>

        {/* ── FOOTER ── */}
        <footer className="bg-[#00261a] text-white w-full pt-16 pb-8 border-t border-[#c0c8c3]">
          <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-[24px] font-bold text-[#775a19] mb-6" style={{ fontFamily: "Sora, sans-serif" }}>Harvestora</div>
              <p className="text-white/70 text-[16px] leading-[1.6] pr-8">
                Global organic trade redefined with industrial-grade precision and ecological mindfulness.
              </p>
            </div>
            {[
              { heading: "Quick Links", links: ["Global Offices", "Quality Assurance", "Trade Compliance"] },
              { heading: "Resources", links: ["Sustainability Report", "Career Portal", "Privacy Policy"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <h5 className="text-[14px] font-semibold tracking-widest uppercase text-[#775a19] mb-6">{heading}</h5>
                <ul className="space-y-4">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-white/70 hover:text-[#ffdea5] transition-colors hover:translate-x-1 inline-block text-[16px]">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h5 className="text-[14px] font-semibold tracking-widest uppercase text-[#775a19] mb-6">Newsletter</h5>
              <p className="text-white/70 text-xs mb-4">Stay updated with global trade insights.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white/10 border-none text-white p-3 rounded-l-[4px] w-full focus:ring-2 focus:ring-[#ffdea5] outline-none text-[16px]"
                />
                <button className="bg-[#775a19] text-white px-4 rounded-r-[4px] hover:bg-[#fed488] hover:text-[#261900] transition-colors">
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto px-16 mt-16 pt-8 border-t border-white/10 text-center text-white/50 text-xs font-semibold tracking-[0.05em]">
            © 2024 Harvestora Global Enterprise. All rights reserved. Industrial Organic Precision.
          </div>
        </footer>

      </div>
    </>
  );
}
