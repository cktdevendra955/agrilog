export default function SustainabilityPage() {
  const philosophy = [
    { icon: "energy_savings_leaf", title: "Soil Health Mastery", desc: "We treat soil as a living organism, utilizing regenerative crop rotation and natural composting to enhance nutrient density." },
    { icon: "potted_plant", title: "Chemical-Free Integrity", desc: "Strict zero-synthetic pesticide policies ensure that our exports remain as pure as nature intended." },
    { icon: "compost", title: "Biodiversity Corridors", desc: "Integrating wildflower buffers and natural habitats within our farms to support local pollinators and wildlife." },
  ];

  const supplyChainCards = [
    { icon: "local_shipping", title: "Carbon-Neutral Shipping", desc: "Utilizing bio-fueled maritime routes and electric regional fleets to offset 100% of transport emissions." },
    { icon: "inventory_2", title: "Biodegradable Packaging", desc: "Transitioning to mushroom-based and plant-fiber insulation for all industrial export containers." },
    { icon: "solar_power", title: "Renewable Facilities", desc: "Our global processing hubs operate on 85% wind and solar energy, with a goal of 100% by 2026." },
  ];

  const envSeals = [
    { icon: "workspace_premium", label: "GLOBAL ORGANIC" },
    { icon: "eco", label: "B-CORP PENDING" },
    { icon: "public", label: "FAIR TRADE INT." },
    { icon: "filter_vintage", label: "REGENERATIVE CERT" },
    { icon: "water_drop", label: "WATER STEWARD" },
    { icon: "precision_manufacturing", label: "ISO 14001" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Manrope:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block; vertical-align: middle;
          font-style: normal; line-height: 1;
        }
        .glass-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .text-shadow-subtle { text-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen overflow-x-hidden">

        {/* ── NAVBAR ── */}
        <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
          <div className="max-w-[1280px] mx-auto px-16 flex justify-between items-center h-20">
            <div className="text-[24px] font-bold text-[#00261a] tracking-tight" style={{ fontFamily: "Sora,sans-serif" }}>
              Harvestora Global
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Commodities</a>
              <a href="#" className="text-[#00261a] border-b-2 border-[#775a19] font-bold pb-1 text-[16px]">Sustainability</a>
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Global Network</a>
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Supply Chain</a>
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Certifications</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2.5 bg-[#00261a] text-white text-[14px] font-semibold tracking-[0.05em] rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all border-b-2 border-[#775a19]">
                Request Quote
              </button>
            </div>
          </div>
        </nav>

        <main>

          {/* ── HERO ── */}
          <section className="relative h-[870px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBay1vsWUHYzkWUcSq-BmrLsql2peAFd5ELC3KdIhgOxCVRZTGTHNAwZUnD0StJi_fNcHlHUF-fHz5jxgGs26i-cd1r0wAPHJ_Z9wJ98C36w4n5-ljBHfbLUEEH0NfO_FdGWYW0hfNwNNL2xJLcJEIeKKZ5-LMPUqdbWZD9ndDPTv1lJdpJZRUPGbG8agvWwo1RyIz3oXORhJguxMy5WagfdLsj6q1g1ceztleuwEZfCZybkePEy3ScbLD-9F-Vyahka49iR2I4j-b9"
                alt="Organic farm landscape"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00261a]/40 to-transparent" />
            </div>
            <div className="relative z-10 max-w-[1280px] mx-auto px-16 w-full">
              <div className="max-w-2xl">
                <span className="inline-block px-4 py-1 mb-6 bg-[#fed488] text-[#785a1a] text-[14px] font-semibold tracking-[0.05em] rounded-full">
                  OUR GLOBAL COMMITMENT
                </span>
                <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6 text-shadow-subtle">
                  Cultivating a Sustainable Future
                </h1>
                <p className="text-[18px] leading-[1.6] text-white/90 mb-10 max-w-lg">
                  Bridging the gap between ancestral organic wisdom and modern industrial precision to nourish the world responsibly.
                </p>
                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-[#00261a] text-white text-[14px] font-semibold tracking-[0.05em] rounded-full border-b-2 border-[#775a19] shadow-lg">
                    Read Our 2024 Impact Report
                  </button>
                  <button className="px-8 py-4 glass-card text-[#00261a] text-[14px] font-semibold tracking-[0.05em] rounded-full">
                    Explore Initiatives
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ── ORGANIC PHILOSOPHY ── */}
          <section className="py-24 bg-[#f8faf9]">
            <div className="max-w-[1280px] mx-auto px-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-8">
                    Our Organic Philosophy
                  </h2>
                  <div className="space-y-12">
                    {philosophy.map(({ icon, title, desc }) => (
                      <div key={title} className="flex gap-6">
                        <div className="w-12 h-12 flex-shrink-0 bg-[#a2d1bb] rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#00261a]">{icon}</span>
                        </div>
                        <div>
                          <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-2">{title}</h3>
                          <p className="text-[16px] leading-[1.6] text-[#414944]">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuByvWH-CdgY8rJOjyG-LlRKCoHCV0zg3MhiK5n3Owl8yF1SjYh6KngDdopzS25cspYp7BCXPhFKJx23WxEBUTMa2tOiMLn4uN3OR0XQKX8C8D2lOCDkZoKI884yjYGIKEHujBlOFkenRYFi24_sC2333RV6PrH1DiGZf3j_Fn_8JEFOVa4MqffKN-RdLFyDAnJ_H3vGhoqmJ-nQvAud1TT5dMCKl_SYHhbKXNazN-qUAkIxlTueHkJx7QAYv374kHH3u-XG0vBvHPyi"
                      alt="Organic soil with sprout"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-8 glass-card p-8 max-w-xs shadow-xl rounded-xl">
                    <p className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#775a19] leading-none mb-2">98%</p>
                    <p className="text-[14px] font-semibold tracking-[0.05em] text-[#00261a]">REDUCTION IN SYNTHETIC INPUTS SINCE 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── ECO-FRIENDLY SUPPLY CHAIN ── */}
          <section className="py-24 bg-[#00261a] text-white">
            <div className="max-w-[1280px] mx-auto px-16">
              <div className="text-center mb-16">
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold mb-4">Eco-Friendly Supply Chain</h2>
                <p className="text-[18px] leading-[1.6] text-[#beedd7] max-w-2xl mx-auto">
                  From the field to the final destination, every step is optimized for the planet.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {supplyChainCards.map(({ icon, title, desc }) => (
                  <div key={title} className="glass-card p-10 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <span className="material-symbols-outlined text-[#ffdea5] mb-6 block" style={{ fontSize: 36 }}>{icon}</span>
                    <h3 className="text-[24px] leading-[1.3] font-semibold mb-4">{title}</h3>
                    <p className="text-white/70 text-[16px] leading-[1.6]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── FARMER FIRST MISSION (BENTO) ── */}
          <section className="py-24 bg-[#f8faf9]">
            <div className="max-w-[1280px] mx-auto px-16">
              <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-12">
                The Farmer First Mission
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Large image card — spans 2 cols 2 rows */}
                <div className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group min-h-[400px]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDClPf3hUPTeG0rskNn6ZS-L0eqgoIWQj32Hqhn_u47ganVQv32Y5s3J4BWIgCMPXXBsHGwfd4c6Cefp1ZhtN2xr7LFJFbNFhAJ0HUmE0KyeP-R8sTaTwOd-wJhMe3q8CdahiZOQBZoDeavTpZHtL2DGV2EQA9hgM6dsVQhKMvQZtc1lj37R8VKijtyUm9mZuJaZm3sMbFRBvRcWHYjQZtqB9o4EXSsHwNSHRPB4X2f9mwn_opq8ce_PPydSulNR9GIXmn2_5PlSj9j"
                    alt="Community farmers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00261a] to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-10">
                    <h3 className="text-[24px] leading-[1.3] font-semibold text-white mb-2">Community Empowerment</h3>
                    <p className="text-white/80 text-[16px] leading-[1.6]">
                      Investing in local infrastructure, education, and healthcare for over 5,000 farming families across 12 countries.
                    </p>
                  </div>
                </div>

                {/* Fair Trade card */}
                <div className="md:col-span-2 glass-card p-8 rounded-xl border border-[#775a19]/20 flex flex-col justify-center">
                  <span className="material-symbols-outlined text-[#775a19] mb-4" style={{ fontVariationSettings: "'FILL' 1", fontSize: 30 }}>verified_user</span>
                  <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-2">Fair Trade Guaranteed</h3>
                  <p className="text-[#414944] text-[16px] leading-[1.6]">
                    We pay 25% above market rates on average, ensuring economic stability and long-term prosperity for our partners.
                  </p>
                </div>

                {/* Water stat */}
                <div className="md:col-span-1 glass-card p-8 rounded-xl flex flex-col items-center justify-center text-center">
                  <p className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] leading-none">12M</p>
                  <p className="text-[14px] font-semibold tracking-[0.05em] text-[#414944] mt-2">Litres of Water Saved</p>
                </div>

                {/* Schools stat */}
                <div className="md:col-span-1 bg-[#fed488] p-8 rounded-xl flex flex-col items-center justify-center text-center">
                  <p className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#785a1a] leading-none">450</p>
                  <p className="text-[14px] font-semibold tracking-[0.05em] text-[#785a1a] mt-2">New Schools Built</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── ESG REPORT ── */}
          <section className="py-24 bg-[#f3f4f3]">
            <div className="max-w-[1280px] mx-auto px-16">
              <div className="glass-card p-12 rounded-xl flex flex-col md:flex-row items-center gap-12 shadow-sm border border-[#c0c8c3]/30">
                {/* Report Cover */}
                <div className="md:w-1/3">
                  <div className="aspect-[3/4] bg-[#00261a] rounded-[4px] shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center border-4 border-[#775a19]/30 m-4">
                      <p className="text-white text-[32px] leading-[1.2] font-semibold mb-4">ESG 2024</p>
                      <div className="w-12 h-1 bg-[#775a19]" />
                      <p className="text-white/70 text-[14px] font-semibold tracking-[0.05em] mt-4">HARVESTORA GLOBAL</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3">
                  <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-6">
                    Quantifying Our Footprint
                  </h2>
                  <p className="text-[18px] leading-[1.6] text-[#414944] mb-8">
                    Transparency is the core of our sustainability strategy. Download our full ESG report to see how we track progress across environmental, social, and governance metrics.
                  </p>
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div className="border-l-2 border-[#775a19] pl-4">
                      <p className="text-[32px] leading-[1.2] font-semibold text-[#00261a]">-42%</p>
                      <p className="text-[14px] font-semibold tracking-[0.05em] text-[#414944]">Carbon intensity per ton shipped</p>
                    </div>
                    <div className="border-l-2 border-[#775a19] pl-4">
                      <p className="text-[32px] leading-[1.2] font-semibold text-[#00261a]">100%</p>
                      <p className="text-[14px] font-semibold tracking-[0.05em] text-[#414944]">Supply chain traceability</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-3 px-8 py-4 bg-[#00261a] text-white text-[14px] font-semibold tracking-[0.05em] rounded-full hover:scale-105 transition-transform duration-300">
                    <span className="material-symbols-outlined">download</span>
                    Download Full ESG Report (PDF)
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ── ENVIRONMENTAL SEALS ── */}
          <section className="py-20 bg-[#f8faf9]">
            <div className="max-w-[1280px] mx-auto px-16">
              <p className="text-center text-[14px] font-semibold tracking-widest text-[#717974] uppercase mb-12">
                Verified Standards &amp; Certifications
              </p>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                {envSeals.map(({ icon, label }) => (
                  <div key={label} className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-[#00261a] mb-2" style={{ fontSize: 48 }}>{icon}</span>
                    <span className="text-[10px] font-semibold tracking-[0.05em] text-center">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>

        {/* ── FOOTER ── */}
        <footer className="w-full pt-16 pb-8 bg-[#00261a] text-white border-t border-[#c0c8c3]">
          <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-[24px] font-bold text-[#775a19] mb-6" style={{ fontFamily: "Sora,sans-serif" }}>
                Harvestora Global
              </div>
              <p className="text-white/70 text-[16px] leading-[1.6] pr-8">
                Defining the next era of industrial organic agriculture through transparency and precision.
              </p>
            </div>
            <div>
              <h4 className="text-white text-[14px] font-semibold tracking-wider uppercase mb-6">Services</h4>
              <ul className="space-y-4">
                {["Global Offices", "Quality Assurance", "Trade Compliance"].map((l) => (
                  <li key={l}><a href="#" className="text-white/70 hover:text-[#ffdea5] transition-colors hover:translate-x-1 inline-block text-[16px]">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[14px] font-semibold tracking-wider uppercase mb-6">Reports</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[#ffdea5] font-bold text-[16px]">Sustainability Report</a></li>
                {["Privacy Policy", "Career Portal"].map((l) => (
                  <li key={l}><a href="#" className="text-white/70 hover:text-[#ffdea5] transition-colors hover:translate-x-1 inline-block text-[16px]">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[14px] font-semibold tracking-wider uppercase mb-6">Newsletter</h4>
              <div className="flex flex-col gap-4">
                <p className="text-white/70 text-sm">Join our network for monthly sustainability insights.</p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full bg-white/5 border border-white/20 rounded-[4px] px-4 py-3 text-white focus:ring-2 focus:ring-[#ffdea5] outline-none text-[16px]"
                  />
                  <button className="absolute right-2 top-2 p-1.5 bg-[#ffdea5] text-[#261900] rounded-sm">
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto px-16 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-[14px] font-semibold tracking-[0.05em]">
              © 2024 Harvestora Global Enterprise. All rights reserved. Industrial Organic Precision.
            </p>
            <div className="flex gap-6">
              {["language", "share"].map((icon) => (
                <span key={icon} className="material-symbols-outlined text-white/50 hover:text-[#ffdea5] cursor-pointer transition-colors">{icon}</span>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}

