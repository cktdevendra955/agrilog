export default function AboutPage() {
  const milestones = [
    {
      year: "2018: Inception",
      desc: "Harvestora Global founded with a focus on 100% traceable organic spices.",
      left: true,
      active: true,
    },
    {
      year: "2020: The Digital Pivot",
      desc: "Launched AI-driven supply chain tracking for end-to-end transparency.",
      left: false,
    },
    {
      year: "2022: Global Expansion",
      desc: "Established major export hubs serving premium retail chains in the USA and EU.",
      left: true,
    },
    {
      year: "2024: UAE Leadership",
      desc: "Ranked as a premier organic exporter to the Gulf, pioneering zero-carbon logistics.",
      left: false,
      pulse: true,
    },
  ];

  const values = [
    {
      icon: "lightbulb",
      title: "Innovation",
      desc: "Utilizing precision ag-tech and real-time analytics to optimize harvest quality and yield.",
    },
    {
      icon: "verified_user",
      title: "Integrity",
      desc: "Absolute transparency in every transaction, from farmer contracts to global buyer delivery.",
    },
    {
      icon: "eco",
      title: "Sustainability",
      desc: "Regenerative farming practices that ensure the health of our soil for future generations.",
    },
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
          {/* ── BRAND STORY HERO ── */}
          <section className="relative flex min-h-screen items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ_nYj39OCk-nEdfS5pzNUCB6jr6IAZV0O5rU2glZeVJQSI4SITw57GKA2YHnDM_A8tIMkKimTv3Hs7RB7_B6_8E2dNQds-MA7SX3zwSay5D_dG22XWRr3s8WFg_xSF_bmzX9xV6jWgphsLnDWLXQ_a-OSim96c2eUAlehZtYWSN4mmg1S9snD86M_vY3MjiWbUDiXkPVoEQj4Q_3ouCN6lQG7Hi2ZuAA1ZFBPbZfKZfCWfsO1qBizviZyL0YA0gH9yvEVf70UZUxL"
                alt="Brand Story Hero"
                className="h-full w-full object-cover"
                style={{ filter: "grayscale(0.2) brightness(0.75)" }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00261a]/90 via-[#00261a]/70 to-[#00261a]/20" />

              {/* Extra Blur Glow */}
              <div className="absolute left-0 top-0 h-full w-full bg-black/10 backdrop-blur-[2px]" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
              <div className="max-w-3xl text-white">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ffdea5]/20 bg-[#775a19]/90 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    public
                  </span>
                  Our Origins
                </div>

                {/* Heading */}
                <h1
                  className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  The Billion-Dollar
                  <span className="block text-[#ffdea5]">Organic Mission</span>
                </h1>

                {/* Description */}
                <p className="mt-8 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
                  Harvestora Global was born from a singular vision: to honor
                  the ancestral wisdom of Indian farmers while empowering them
                  with world-class industrial precision. We don't just export
                  products; we curate a legacy of quality.
                </p>

                {/* Stats */}
                <div className="mt-10 flex flex-wrap gap-6">
                  <div className="glass-card rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                    <h3 className="text-2xl font-bold text-[#ffdea5]">40+</h3>

                    <p className="mt-1 text-sm text-white/70">
                      Countries Served
                    </p>
                  </div>

                  <div className="glass-card rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                    <h3 className="text-2xl font-bold text-[#ffdea5]">100%</h3>

                    <p className="mt-1 text-sm text-white/70">
                      Organic Commitment
                    </p>
                  </div>

                  <div className="glass-card rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
                    <h3 className="text-2xl font-bold text-[#ffdea5]">24/7</h3>

                    <p className="mt-1 text-sm text-white/70">Global Support</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <button className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#00261a] px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#0b3d2d] hover:shadow-2xl">
                    Explore Our Journey
                    <span
                      className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1"
                      style={{ fontSize: 20 }}
                    >
                      arrow_forward
                    </span>
                  </button>

                  <button className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#00261a]">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 20 }}
                    >
                      play_circle
                    </span>
                    Watch the Film
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* ── 2. LEADERSHIP & VISION ── */}
          <section className="bg-[#f3f4f3] py-16 lg:py-24">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
              {/* Image Side */}
              <div className="relative">
                {/* Decorative Border */}
                <div className="absolute -left-4 -top-4 h-24 w-24 border-l-4 border-t-4 border-[#775a19]/30 lg:-left-8 lg:-top-8 lg:h-32 lg:w-32" />

                {/* Main Image */}
                <div className="group relative overflow-hidden rounded-[32px] shadow-2xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSslnWLZEZdX1-ViNC8SMmT-pgs3qkIWNRc2dvtI-YT-P0MhwClHOHIoG1vzF5_NCbrA_3Yd4NJ-jKmvMnucK33ea0YKBP-k3iBXrGv9DN5Vkgnn4Ca8Xi58dL4jN0FXE_Pak2o7KFl2F6oDznqRET2XkehNpQsWt0yN2fcXXSJbideyM1WJL0VHoHeoMyuYj9Hqbn3Av8rBHK5P9cke6amrJTEmY-eU2OQzEqgRB6wiC0CmqiX4npsfIl6ru3eJWU_J278EoDnJJu"
                    alt="Leadership"
                    className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[520px] lg:h-[640px]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00261a]/40 to-transparent" />
                </div>

                {/* Quote Card */}
                <div className="glass-card relative -mt-10 ml-auto w-full max-w-[320px] rounded-3xl border border-white/20 bg-white/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:absolute lg:-bottom-10 lg:-right-10 lg:mt-0">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00261a] text-[#ffdea5]">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 28 }}
                    >
                      format_quote
                    </span>
                  </div>

                  <p
                    className="text-xl font-semibold leading-relaxed text-[#00261a] italic lg:text-2xl"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    “Scale is nothing without soul.”
                  </p>

                  <div className="mt-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#775a19]">
                      Aravind Sharma
                    </p>

                    <p className="mt-1 text-sm text-[#414944]">
                      CEO, Harvestora Global
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div>
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#775a19]/10 bg-[#775a19]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#775a19]">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    groups
                  </span>
                  Leadership Vision
                </div>

                {/* Heading */}
                <h2
                  className="text-4xl font-bold leading-tight tracking-tight text-[#00261a] sm:text-5xl"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Bridging Fields to
                  <span className="block text-[#775a19]">Global Markets</span>
                </h2>

                {/* Paragraphs */}
                <p className="mt-8 text-base leading-relaxed text-[#414944] lg:text-lg">
                  Our leadership team bridges two worlds: the deep-rooted
                  knowledge of regional agriculture and the complex logistics of
                  international trade.
                </p>

                <p className="mt-5 text-base leading-relaxed text-[#414944] lg:text-lg">
                  We’ve built Harvestora as a bridge across the oceans, ensuring
                  that the finest organic produce reaches the most demanding
                  markets in the UAE, USA, and EU.
                </p>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Card 1 */}
                  <div className="glass-card rounded-3xl border border-[#c0c8c3]/30 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00261a]/5 text-[#00261a]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 28 }}
                      >
                        workspace_premium
                      </span>
                    </div>

                    <h3
                      className="text-4xl font-bold text-[#775a19]"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      15+
                    </h3>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#414944]">
                      Years of Excellence
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="glass-card rounded-3xl border border-[#c0c8c3]/30 bg-white/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#00261a]/5 text-[#00261a]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 28 }}
                      >
                        handshake
                      </span>
                    </div>

                    <h3
                      className="text-4xl font-bold text-[#775a19]"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      40+
                    </h3>

                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#414944]">
                      Global Partnerships
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── 3. ECOSYSTEM ── */}
          <section className="py-24">
            <div className=" mx-auto px-16">
              <div className="text-center mb-16">
                <h2 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-4">
                  A Unified Ecosystem
                </h2>
                <p className="text-[18px] leading-[1.6] text-[#414944] max-w-2xl mx-auto">
                  Where artisanal farming meets peak industrial capacity.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    num: "01",
                    icon: "psychiatry",
                    title: "Farmer Network",
                    desc: "Empowering over 5,000 certified farmers across 12 Indian states. We provide education on sustainable practices, premium seed stock, and guaranteed fair-trade pricing.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQJRYkwLdQx4v8jhxr2o0eK_wLvZBWJiaTHQCF-26_ag2U7Ex3hp09iyJgsxobaBlawHdZP_RNp2yWfRRognKBmth6pctp1LvbMgMCyDCQgakypnfap0k4K2hDLLDqXLkaULSesYEfBQWku1tvucw5aY8u3gTQtkOu57eNby-z2x-FcarASpYEB28M4ehJX4M9wul9dttX11ry-k6ydzmZFlFcq9cURoRrWrpGzeZ31NOVRHFuKuqcPXsz5uwfi_85CcRNiVkj6pli",
                    alt: "Farmer Network",
                  },
                  {
                    num: "02",
                    icon: "factory",
                    title: "Industrial Infrastructure",
                    desc: "Our state-of-the-art cold storage facilities and quality-control labs ensure that every shipment maintains the 'Industrial Organic' standard from soil to shelf.",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBUhl_IOo1Oj17ub-cG905KSGogESEKmKUYxig7oqWN6LWJefbcb3UhIR08aLqW-51k43M06JqqvqVwRSLrimKt1p57NlVbi9vOE7a7fbo1B2HfbepsyhVbK5dHv_Cr223UMNTq5nsBMuOF0gDj3nTGYkhyi88pTNMsKc12hdaJl-1V4aSIcz1_0VOD6Dt8uB6MQrkVX4CH5QAa88mFLCYz0j_MJquXRm9C6lr5HRwmsCBrQBUgiIuCOR4QRZMeOjX5Rw2ffvlHuhlk",
                    alt: "Infrastructure",
                  },
                ].map(({ num, icon, title, desc, img, alt }) => (
                  <div
                    key={num}
                    className="glass-card p-12 rounded-2xl group transition-all duration-500 hover:shadow-2xl"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <span
                        className="material-symbols-outlined text-[#775a19]"
                        style={{
                          fontVariationSettings: "'FILL' 1",
                          fontSize: 40,
                        }}
                      >
                        {icon}
                      </span>
                      <span className="text-[32px] leading-[1.2] font-semibold text-[#00261a]/10 group-hover:text-[#00261a]/20 transition-colors">
                        {num}
                      </span>
                    </div>
                    <h3 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-4">
                      {title}
                    </h3>
                    <p className="text-[16px] leading-[1.6] text-[#414944] mb-8">
                      {desc}
                    </p>
                    <img
                      src={img}
                      alt={alt}
                      className="w-full h-48 object-cover rounded-[4px]"
                    />
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
                    <div
                      key={year}
                      className="relative flex items-center justify-between"
                    >
                      {left ? (
                        <>
                          <div className="w-5/12 text-right">
                            <h4 className="text-[24px] leading-[1.3] font-semibold text-[#775a19] mb-2">
                              {year}
                            </h4>
                            <p className="text-white/70 text-[16px]">{desc}</p>
                          </div>
                          <div
                            className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${active ? "bg-[#775a19]" : pulse ? "bg-[#775a19] pulse-gold" : "bg-white/20"}`}
                            style={
                              active
                                ? { boxShadow: "0 0 15px rgba(119,90,25,1)" }
                                : pulse
                                  ? {}
                                  : {}
                            }
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
                            <h4 className="text-[24px] leading-[1.3] font-semibold text-[#775a19] mb-2">
                              {year}
                            </h4>
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
          {/* ── CORE VALUES ── */}
          <section className="bg-[#f8faf9] py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Heading */}
              <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-20">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#775a19]/10 bg-[#775a19]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#775a19]">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    diamond
                  </span>
                  Our Principles
                </div>

                <h2
                  className="text-4xl font-bold leading-tight tracking-tight text-[#00261a] sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Values That Drive
                  <span className="block text-[#775a19]">Harvestora</span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-[#414944] sm:text-lg">
                  Every shipment, partnership, and decision is guided by our
                  commitment to sustainability, trust, and excellence.
                </p>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {values.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="group relative overflow-hidden rounded-[30px] border border-[#c0c8c3]/40 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#775a19]/40 hover:shadow-2xl sm:p-10"
                  >
                    {/* Glow Background */}
                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-[#775a19]/5 blur-3xl transition-all duration-500 group-hover:bg-[#775a19]/10" />

                    {/* Icon */}
                    <div className="relative mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#00261a]/5 text-[#775a19] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#00261a] group-hover:text-[#ffdea5]">
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontVariationSettings: "'FILL' 1",
                          fontSize: 40,
                        }}
                      >
                        {icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h4
                      className="relative text-3xl font-bold leading-tight text-[#00261a]"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      {title}
                    </h4>

                    {/* Divider */}
                    <div className="mt-5 h-[2px] w-14 rounded-full bg-[#775a19]/30 transition-all duration-500 group-hover:w-24 group-hover:bg-[#775a19]" />

                    {/* Description */}
                    <p className="relative mt-6 text-base leading-relaxed text-[#414944]">
                      {desc}
                    </p>

                    {/* Hover Arrow */}
                    <div className="mt-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#775a19] opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100">
                      Learn More
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 18 }}
                      >
                        arrow_forward
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* ── GLOBAL IMPACT STATS ── */}
          <section className="relative overflow-hidden bg-[#eef0ef] py-20 lg:py-32">
            {/* Background Glow */}
            <div className="absolute inset-0">
              <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#775a19]/5 blur-3xl" />

              <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#00261a]/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {/* Heading */}
              <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#775a19]/10 bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#775a19] shadow-sm">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    monitoring
                  </span>
                  Global Impact
                </div>

                <h2
                  className="text-4xl font-bold leading-tight tracking-tight text-[#00261a] sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Numbers That Reflect
                  <span className="block text-[#775a19]">
                    Our Global Presence
                  </span>
                </h2>

                <p className="mt-6 text-base leading-relaxed text-[#414944] sm:text-lg">
                  A decade of trust, international trade excellence, and
                  sustainable agricultural partnerships worldwide.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    className="group relative overflow-hidden rounded-[30px] border border-white/60 bg-white/80 p-10 text-center shadow-sm backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#775a19]/0 via-[#775a19]/0 to-[#775a19]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    {/* Icon Circle */}
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#00261a]/5 text-[#775a19] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#00261a] group-hover:text-[#ffdea5]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 36 }}
                      >
                        public
                      </span>
                    </div>

                    {/* Value */}
                    <h3
                      className="relative text-5xl font-bold tracking-tight text-[#00261a] sm:text-6xl"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      {value}
                    </h3>

                    {/* Divider */}
                    <div className="mx-auto mt-5 h-[3px] w-14 rounded-full bg-[#775a19] transition-all duration-500 group-hover:w-24" />

                    {/* Label */}
                    <p className="relative mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#414944]">
                      {label}
                    </p>
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
