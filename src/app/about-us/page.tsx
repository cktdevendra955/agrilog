export default function AboutPage() {
  const milestones = [
    { year: "2018: Inception", desc: "Harvestora Global founded with a focus on 100% traceable organic spices.", left: true, active: true },
    { year: "2020: The Digital Pivot", desc: "Launched AI-driven supply chain tracking for end-to-end transparency.", left: false },
    { year: "2022: Global Expansion", desc: "Established major export hubs serving premium retail chains in the USA and EU.", left: true },
    { year: "2024: UAE Leadership", desc: "Ranked as a premier organic exporter to the Gulf, pioneering zero-carbon logistics.", left: false, pulse: true },
  ];

  const values = [
    { icon: "lightbulb", title: "Innovation", desc: "Utilizing precision ag-tech and real-time analytics to optimize harvest quality and yield." },
    { icon: "verified_user", title: "Integrity", desc: "Absolute transparency in every transaction, from farmer contracts to global buyer delivery." },
    { icon: "eco", title: "Sustainability", desc: "Regenerative farming practices that ensure the health of our soil for future generations." },
  ];

  const stats = [
    { value: "50k+", label: "MT Exported Yearly" },
    { value: "35", label: "Countries Served" },
    { value: "22%", label: "Carbon Reduction" },
    { value: "5.2k", label: "Farmers Empowered" },
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
        .primary-btn {
          background-color: #00261a;
          color: #ffffff;
          border-bottom: 2px solid #775a19;
          transition: all 0.3s cubic-bezier(0.23,1,0.32,1);
        }
        .primary-btn:hover {
          transform: translateY(-2px);
          border-bottom-color: #ffdea5;
        }
        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 10px rgba(119,90,25,0.8); }
          50% { box-shadow: 0 0 25px rgba(119,90,25,1); }
        }
        .pulse-gold { animation: pulse-gold 2s infinite; }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">


        <main>

          {/* ── 1. BRAND STORY HERO ── */}
          <section className="relative h-[921px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ_nYj39OCk-nEdfS5pzNUCB6jr6IAZV0O5rU2glZeVJQSI4SITw57GKA2YHnDM_A8tIMkKimTv3Hs7RB7_B6_8E2dNQds-MA7SX3zwSay5D_dG22XWRr3s8WFg_xSF_bmzX9xV6jWgphsLnDWLXQ_a-OSim96c2eUAlehZtYWSN4mmg1S9snD86M_vY3MjiWbUDiXkPVoEQj4Q_3ouCN6lQG7Hi2ZuAA1ZFBPbZfKZfCWfsO1qBizviZyL0YA0gH9yvEVf70UZUxL"
                alt="Brand Story Hero"
                className="w-full h-full object-cover brightness-75"
                style={{ filter: "grayscale(0.2) brightness(0.75)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00261a]/80 to-transparent" />
            </div>
            <div className="relative z-10 max-w-[1280px] mx-auto px-16 w-full">
              <div className="max-w-2xl text-white">
                <span className="inline-block px-4 py-1 mb-6 bg-[#775a19] text-white text-[14px] font-semibold tracking-widest uppercase rounded-full">
                  Our Origins
                </span>
                <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold mb-6">
                  The Billion-Dollar Organic Mission
                </h1>
                <p className="text-[18px] leading-[1.6] text-white/90 mb-8">
                  Harvestora Global was born from a singular vision: to honor the ancestral wisdom of Indian farmers while empowering them with world-class industrial precision. We don't just export products; we curate a legacy of quality.
                </p>
                <div className="flex gap-4">
                  <button className="primary-btn px-8 py-4 text-[14px] font-semibold tracking-[0.05em] rounded-[4px]">
                    Explore Our Journey
                  </button>
                  <button className="glass-card px-8 py-4 text-[#00261a] text-[14px] font-semibold tracking-[0.05em] rounded-[4px] hover:bg-white/90 transition-all">
                    Watch the Film
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ── 2. LEADERSHIP & VISION ── */}
          <section className="py-24 bg-[#f3f4f3]">
            <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 border-l-4 border-t-4 border-[#775a19]/30" />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSslnWLZEZdX1-ViNC8SMmT-pgs3qkIWNRc2dvtI-YT-P0MhwClHOHIoG1vzF5_NCbrA_3Yd4NJ-jKmvMnucK33ea0YKBP-k3iBXrGv9DN5Vkgnn4Ca8Xi58dL4jN0FXE_Pak2o7KFl2F6oDznqRET2XkehNpQsWt0yN2fcXXSJbideyM1WJL0VHoHeoMyuYj9Hqbn3Av8rBHK5P9cke6amrJTEmY-eU2OQzEqgRB6wiC0CmqiX4npsfIl6ru3eJWU_J278EoDnJJu"
                  alt="Leadership"
                  className="w-full h-[600px] object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-xl max-w-xs shadow-xl">
                  <p className="text-[24px] leading-[1.3] font-semibold text-[#00261a] italic">"Scale is nothing without soul."</p>
                  <p className="mt-4 text-[14px] font-semibold tracking-[0.05em] text-[#775a19]">Aravind Sharma, CEO</p>
                </div>
              </div>
              <div>
                <h2 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-8">
                  Bridging Fields to Global Markets
                </h2>
                <p className="text-[18px] leading-[1.6] text-[#414944] mb-6">
                  Our leadership team bridges two worlds: the deep-rooted knowledge of regional agriculture and the complex logistics of international trade. We've built Harvestora as a bridge across the oceans, ensuring that the finest organic produce reaches the most demanding markets in the UAE, USA, and EU.
                </p>
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div>
                    <p className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#775a19]">15+</p>
                    <p className="text-[14px] font-semibold tracking-[0.05em] text-[#414944] uppercase">Years of Excellence</p>
                  </div>
                  <div>
                    <p className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#775a19]">40+</p>
                    <p className="text-[14px] font-semibold tracking-[0.05em] text-[#414944] uppercase">Global Partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 3. ECOSYSTEM ── */}
          <section className="py-24">
            <div className="max-w-[1280px] mx-auto px-16">
              <div className="text-center mb-16">
                <h2 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-4">A Unified Ecosystem</h2>
                <p className="text-[18px] leading-[1.6] text-[#414944] max-w-2xl mx-auto">
                  Where artisanal farming meets peak industrial capacity.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    num: "01", icon: "psychiatry", title: "Farmer Network",
                    desc: "Empowering over 5,000 certified farmers across 12 Indian states. We provide education on sustainable practices, premium seed stock, and guaranteed fair-trade pricing.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQJRYkwLdQx4v8jhxr2o0eK_wLvZBWJiaTHQCF-26_ag2U7Ex3hp09iyJgsxobaBlawHdZP_RNp2yWfRRognKBmth6pctp1LvbMgMCyDCQgakypnfap0k4K2hDLLDqXLkaULSesYEfBQWku1tvucw5aY8u3gTQtkOu57eNby-z2x-FcarASpYEB28M4ehJX4M9wul9dttX11ry-k6ydzmZFlFcq9cURoRrWrpGzeZ31NOVRHFuKuqcPXsz5uwfi_85CcRNiVkj6pli",
                    alt: "Farmer Network",
                  },
                  {
                    num: "02", icon: "factory", title: "Industrial Infrastructure",
                    desc: "Our state-of-the-art cold storage facilities and quality-control labs ensure that every shipment maintains the 'Industrial Organic' standard from soil to shelf.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUhl_IOo1Oj17ub-cG905KSGogESEKmKUYxig7oqWN6LWJefbcb3UhIR08aLqW-51k43M06JqqvqVwRSLrimKt1p57NlVbi9vOE7a7fbo1B2HfbepsyhVbK5dHv_Cr223UMNTq5nsBMuOF0gDj3nTGYkhyi88pTNMsKc12hdaJl-1V4aSIcz1_0VOD6Dt8uB6MQrkVX4CH5QAa88mFLCYz0j_MJquXRm9C6lr5HRwmsCBrQBUgiIuCOR4QRZMeOjX5Rw2ffvlHuhlk",
                    alt: "Infrastructure",
                  },
                ].map(({ num, icon, title, desc, img, alt }) => (
                  <div key={num} className="glass-card p-12 rounded-2xl group transition-all duration-500 hover:shadow-2xl">
                    <div className="flex justify-between items-start mb-8">
                      <span className="material-symbols-outlined text-[#775a19]" style={{ fontVariationSettings: "'FILL' 1", fontSize: 40 }}>{icon}</span>
                      <span className="text-[32px] leading-[1.2] font-semibold text-[#00261a]/10 group-hover:text-[#00261a]/20 transition-colors">{num}</span>
                    </div>
                    <h3 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-4">{title}</h3>
                    <p className="text-[16px] leading-[1.6] text-[#414944] mb-8">{desc}</p>
                    <img src={img} alt={alt} className="w-full h-48 object-cover rounded-[4px]" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 4. ACHIEVEMENT TIMELINE ── */}
          <section className="py-24 bg-[#00261a] text-white">
            <div className="max-w-[1280px] mx-auto px-16">
              <h2 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-center mb-20">
                Milestones of Excellence
              </h2>
              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-[#775a19]/30" />
                <div className="space-y-24">
                  {milestones.map(({ year, desc, left, active, pulse }) => (
                    <div key={year} className="relative flex items-center justify-between">
                      {left ? (
                        <>
                          <div className="w-5/12 text-right">
                            <h4 className="text-[24px] leading-[1.3] font-semibold text-[#775a19] mb-2">{year}</h4>
                            <p className="text-white/70 text-[16px]">{desc}</p>
                          </div>
                          <div
                            className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${active ? "bg-[#775a19]" : pulse ? "bg-[#775a19] pulse-gold" : "bg-white/20"}`}
                            style={active ? { boxShadow: "0 0 15px rgba(119,90,25,1)" } : pulse ? {} : {}}
                          />
                          <div className="w-5/12" />
                        </>
                      ) : (
                        <>
                          <div className="w-5/12" />
                          <div
                            className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${pulse ? "bg-[#775a19] pulse-gold" : "bg-white/20"}`}
                          />
                          <div className="w-5/12 text-left">
                            <h4 className="text-[24px] leading-[1.3] font-semibold text-[#775a19] mb-2">{year}</h4>
                            <p className="text-white/70 text-[16px]">{desc}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── 5. CORE VALUES ── */}
          <section className="py-24 bg-[#f8faf9]">
            <div className="max-w-[1280px] mx-auto px-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map(({ icon, title, desc }) => (
                  <div key={title} className="p-10 border border-[#c0c8c3] hover:border-[#775a19] transition-colors group">
                    <span
                      className="material-symbols-outlined text-[#775a19] mb-6 block"
                      style={{ fontVariationSettings: "'FILL' 1", fontSize: 48 }}
                    >{icon}</span>
                    <h4 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-4">{title}</h4>
                    <p className="text-[#414944] leading-relaxed text-[16px]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── 6. GLOBAL IMPACT STATS ── */}
          <section className="py-32 bg-[#e1e3e2]">
            <div className="max-w-[1280px] mx-auto px-16">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 text-center">
                {stats.map(({ value, label }) => (
                  <div key={label} className="space-y-4">
                    <p className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a]">{value}</p>
                    <p className="text-[14px] font-semibold tracking-widest text-[#414944] uppercase">{label}</p>
                    <div className="h-1 w-12 bg-[#775a19] mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </section>

        </main>
 

      </div>
    </>
  );
}
