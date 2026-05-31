export default function HarvestoraHome() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
          font-style: normal;
          display: inline-block;
          line-height: 1;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .hero-gradient {
          background: linear-gradient(to bottom, rgba(0, 38, 26, 0.4), rgba(0, 38, 26, 0.8));
        }
        body { font-family: 'Manrope', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c]">
        {/* ── HERO ── */}
        <header className="relative min-h-[921px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ0S182czujoQeUlIShcRaltWxTs2qM1294i4zGdiaTeuXUzrlc7FoEnj1FjTTrMI-AIzc_Ii1IfBjMZLvQpVw_oQJhPky9RztbICQi_4gIUsVuxRCNPRdyUjOOVkEgrpTGin7GMEDzqx2oCXWvnbeNXPrcgk74oLghKQbqkHpfK1BYUFXLSV6vSvmV5nvHNkOiL8u3X-5KjqNqwF3XAET0tbzSE7eZuw7oPbAqASK5VvRsKeOgWQR7gPvjgLRm2foTmCx2Sil5P1c"
              alt="Organic tea plantations"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-16 w-full py-24">
            <div className="max-w-2xl space-y-8">
              <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                Premium Organic Products Exported Worldwide
              </h1>
              <p className="text-[18px] leading-[1.6] text-[#a2d1bb] max-w-lg">
                Connecting Indian farmers to the global market with precision and integrity. Experience the pinnacle of organic spice and commodity export from India's richest soils.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-[#00261a] text-white text-[14px] font-semibold tracking-[0.05em] border-b-2 border-[#ffdea5] flex items-center gap-2">
                  Request Quote <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                </button>
                <button className="px-8 py-4 glass-card text-white text-[14px] font-semibold tracking-[0.05em] flex items-center gap-2">
                  View Commodities <span className="material-symbols-outlined" style={{ fontSize: 18 }}>grid_view</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ── FARM-TO-PORT JOURNEY ── */}
        <section className="py-24 bg-[#f3f4f3]">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="mb-16">
              <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a]" style={{ fontFamily: 'Sora, sans-serif' }}>
                Farm-to-Port Journey
              </h2>
              <p className="text-[#414944] mt-2 text-[16px]">Our transparent 7-step export workflow ensuring industrial precision.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {[
                { step: "01", icon: "agriculture", label: "Organic Sourcing", active: true },
                { step: "02", icon: "fact_check", label: "Quality Labs" },
                { step: "03", icon: "precision_manufacturing", label: "Processing" },
                { step: "04", icon: "inventory_2", label: "Smart Packing" },
                { step: "05", icon: "description", label: "Compliance" },
                { step: "06", icon: "directions_boat", label: "Global Transit" },
                { step: "07", icon: "pin_drop", label: "Port Delivery" },
              ].map(({ step, icon, label, active }) => (
                <div
                  key={step}
                  className={`glass-card p-6 flex flex-col items-center text-center space-y-4 ${active ? "border-b-2 border-[#ffdea5]" : ""}`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${active ? "bg-[#0f3d2e] text-[#7ba894]" : "bg-[#e7e8e7] text-[#00261a]"}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <span className="text-xs font-semibold text-[#775a19] uppercase tracking-widest">Step {step}</span>
                  <h3 className="text-[16px] font-bold leading-[1.6]">{label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT CATEGORIES ── */}
        <section className="py-24 bg-[#f8faf9]">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Core Export Categories
                </h2>
                <p className="text-[#414944] mt-2 text-[16px]">Curated selection of premium organic exports.</p>
              </div>
              <a href="#" className="text-[#775a19] text-[14px] font-semibold tracking-[0.05em] hover:underline">
                Explore Full Catalog
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeXLp71YfE_PBVRMrW7BuE7xWyLRC6UiumM5ro9cYzZwxXNOfQa7v26GALjaxT_TFwFskSdsK6wpdonhHZM1Ms7e7kj6wcSEk5LFf4zYO_GqjEdC0auSEz5e2Uf6QhwltweeXvMfO2_WX0Yf61DsV1yL9jKzoGSIzTly1VWpPba14JCXxBARrFRFwo4nFTZ-k4jsZUY6ZQInu9lONfcTuZ1j29Kyh3GAwQ9TDyJQ-pswRTBbbCTYE-KboIKhBDnH4q0H_nfDpcCWhs",
                  title: "Indian Spices",
                  desc: "Organic Turmeric Exporter, Cumin, and Cardamom from the hills of Munnar.",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK83yIapBKuDTLQLsMMgaDY363Xssh_vTXelxycpLAbwIAX8vvww0MOKDETlmGWHD28y-KQEKBVVe4l3z-ii9LZnZA0LcJhmmc0J_hGG788BgqtVKMRpTKMWPHeO5g_j5SEEvssojf_Zw4J1ShpXISA9m6LfI6HqUvAV6oaoSGMIjdp50l-p0ZBQPtevZM4SgCd6gqjOA1pJfImJQTJ-rWkn2KIobSYBM33pQXOGH7_NWNI7TmZfxyniphPl5P_35JrqC6DDJJ1Nbx",
                  title: "Fresh Produce",
                  desc: "Farm-fresh organic vegetables packed with cold-chain precision.",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNXr_CSnU8XI8VjDGguiqlRSW_Sujs_ity2mizoR9vS4c9tqYMh4ngdAujmrVeHADOf9vhBdl-5UvipysWpuGTxYRfQQ4S2uj5MSOwcxhQ04F2dm2hb65GjKdsAsnMJPkqXIHIRcKL6pgBhajmEPFmdCdbDuTKEo0J1W5gU8c_Wjc_l6SRjDCacuXJgq3Iv0KI5-xCNlPd72OFhe-yDuzAV1rxJZlNoCt5D5cZMaPDsiPG7XwmnSwKrq_rmGQrxxmuRTt9b9rBeeZd",
                  title: "Global Commodities",
                  desc: "Grains, pulses, and oilseeds meeting international trade standards.",
                },
              ].map(({ img, title, desc }) => (
                <div key={title} className="group relative h-[500px] overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00261a]/90 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white text-[24px] leading-[1.3] font-semibold" style={{ fontFamily: 'Sora, sans-serif' }}>{title}</h3>
                    <p className="text-[#a2d1bb] text-[16px] mt-2">{desc}</p>
                    <button className="mt-6 w-fit px-4 py-2 border border-[#775a19] text-[#ffdea5] text-[14px] font-semibold tracking-[0.05em] hover:bg-[#775a19]/10 transition-all">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GLOBAL REACH ── */}
        <section className="py-24 bg-[#00261a] text-white">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="space-y-6">
                <h2 className="text-[32px] leading-[1.2] font-semibold text-[#ffdea5]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Our Global Reach
                </h2>
                <p className="text-[18px] leading-[1.6] text-[#a2d1bb]/80">
                  Connecting Indian soil to over 40 countries across the globe. Our established shipping routes ensure timely delivery to the USA, UAE, Europe, and beyond.
                </p>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-[#ffdea5]" />
                    <span className="text-[14px] font-semibold tracking-[0.05em]">Active Shipping Hubs</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-3 h-3 rounded-full bg-[#c0c8c3]" />
                    <span className="text-[14px] font-semibold tracking-[0.05em]">Regional Warehouses</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 relative">
                <div className="aspect-video glass-card rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsE7LtRchA7SkYZFIPOoC2cfNYIEbsTxevVWElx4gHGYliRluQDYGmXQBAbBdpSonLqcbPnOJEzIpTr0neQYs1JZZWCHE8Yj2qVsDd9QUmMWmRuaIyJCjLu8lGW5uoiebPtVFoDUN5BnQRKYnw6f5vn4CHnBl6AOhG2ost5aPe5G0kIhUFWRhq3N2gPgpgaLKB0uWrcFsiQW4PWn52JLyWboyQTO9vKTFFkbaeahM5HNjlpDZ6OPaFOCkhaagZDE4G2tCAxGEfDLBA"
                    alt="Global map"
                    className="opacity-20 absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative z-10 text-center p-8">
                    <span className="material-symbols-outlined text-[#ffdea5]" style={{ fontSize: 64 }}>public</span>
                    <p className="mt-4 text-[24px] leading-[1.3] font-semibold text-[#ffdea5]" style={{ fontFamily: 'Sora, sans-serif' }}>
                      Live Trade Routes Interactive Map
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST / CERTIFICATIONS ── */}
        <section className="py-16 bg-[#edeeed]">
          <div className="max-w-[1280px] mx-auto px-16">
            <p className="text-center text-[14px] font-semibold tracking-widest text-[#414944] uppercase mb-10">
              Accredited &amp; Certified by
            </p>
            <div className="flex flex-wrap justify-center gap-12 items-center opacity-60 hover:opacity-100 transition-opacity">
              {[
                { code: "IEC", label: "Export License" },
                { code: "FSSAI", label: "Food Safety" },
                { code: "APEDA", label: "Agri-Exports" },
                { code: "USDA", label: "Organic" },
              ].map(({ code, label }) => (
                <div key={code} className="flex flex-col items-center">
                  <div className="p-4 rounded-full bg-[#e1e3e2] border border-[#c0c8c3]/30 flex items-center justify-center">
                    <span className="font-bold text-[#00261a] text-[24px]" style={{ fontFamily: 'Sora, sans-serif' }}>{code}</span>
                  </div>
                  <span className="text-xs font-semibold tracking-[0.05em] mt-2">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INQUIRY SECTION ── */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-16 relative z-10">
            <div className="glass-card rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
              {/* Left */}
              <div className="md:w-1/2 p-12 bg-[#00261a] text-white space-y-8">
                <h2 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#ffdea5]" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Global Export Inquiry
                </h2>
                <p className="text-[18px] leading-[1.6] text-[#a2d1bb]/80">
                  Ready to scale your organic supply? Connect with our trade specialists for detailed quotes, logistics support, and product certifications.
                </p>
                <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#ffdea5]">schedule</span>
                    <span className="text-[16px]">24-Hour Response Guarantee</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#ffdea5]">security</span>
                    <span className="text-[16px]">Verified Trade Compliance</span>
                  </div>
                </div>
                <a
                  href="https://wa.me/harvestora"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-[#25D366] text-white text-[14px] font-semibold rounded-full mt-8 hover:brightness-110 transition-all"
                >
                  <span className="material-symbols-outlined">forum</span>
                  Chat on WhatsApp
                </a>
              </div>

              {/* Right — Form */}
              <div className="md:w-1/2 p-12 bg-white">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold tracking-[0.05em] text-[#414944]">FULL NAME</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full border border-[#c0c8c3] bg-[#f3f4f3] px-4 py-3 text-[16px] focus:outline-none focus:border-[#00261a]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold tracking-[0.05em] text-[#414944]">COMPANY</label>
                      <input
                        type="text"
                        placeholder="Global Trade Inc."
                        className="w-full border border-[#c0c8c3] bg-[#f3f4f3] px-4 py-3 text-[16px] focus:outline-none focus:border-[#00261a]"
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold tracking-[0.05em] text-[#414944]">WORK EMAIL</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className="w-full border border-[#c0c8c3] bg-[#f3f4f3] px-4 py-3 text-[16px] focus:outline-none focus:border-[#00261a]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold tracking-[0.05em] text-[#414944]">COMMODITY INTEREST</label>
                    <select className="w-full border border-[#c0c8c3] bg-[#f3f4f3] px-4 py-3 text-[16px] focus:outline-none focus:border-[#00261a]">
                      <option>Organic Turmeric</option>
                      <option>Indian Spices Blend</option>
                      <option>Premium Grains</option>
                      <option>Dehydrated Vegetables</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-semibold tracking-[0.05em] text-[#414944]">MESSAGE</label>
                    <textarea
                      rows={4}
                      placeholder="Volume and destination requirements..."
                      className="w-full border border-[#c0c8c3] bg-[#f3f4f3] px-4 py-3 text-[16px] focus:outline-none focus:border-[#00261a]"
                    />
                  </div>
                  <button className="w-full py-4 bg-[#00261a] text-white text-[14px] font-semibold tracking-[0.05em] border-b-2 border-[#775a19] hover:shadow-lg transition-all mt-4">
                    Submit Inquiry
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
       

      </div>
    </>
  );
}
