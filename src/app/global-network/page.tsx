export default function GlobalNetworkPage() {
  const logisticsCards = [
    {
      icon: "directions_boat",
      title: "Sea Freight",
      desc: "Ultra-capacity refrigerated containers (Reefers) ensuring temperature precision for long-haul oceanic transit.",
      features: ["45-Day Shelf Stability", "Real-time Humidity Control"],
    },
    {
      icon: "flight_takeoff",
      title: "Express Air",
      desc: "Global overnight delivery for time-sensitive premium organic produce via our dedicated cargo fleet.",
      features: ["72-Hour Port-to-Table", "Customs Pre-clearance"],
    },
    {
      icon: "ac_unit",
      title: "Cold Chain Mgmt",
      desc: "End-to-end thermal integrity monitoring from the farm gate to the final distribution warehouse.",
      features: ["-20°C to +15°C Range", "IoT Alert Systems"],
    },
  ];

  const stats = [
    { value: "12.4K", label: "Containers Shipped" },
    { value: "99.8%", label: "Efficiency Rate" },
    { value: "18h", label: "Avg Clearance Time" },
    { value: "42", label: "Global Ports" },
  ];

  const complianceRows = [
    { region: "European Union", authority: "EC No. 1107/2009", standard: "Maximum Residue Level (MRL) Zero Tolerance" },
    { region: "United States", authority: "US FDA / FSMA", standard: "FSVP (Foreign Supplier Verification) Certified" },
    { region: "United Arab Emirates", authority: "ESMA / MOCCAE", standard: "Halal & Organic Integrity Protocols" },
    { region: "United Kingdom", authority: "DEFRA / FSA", standard: "Post-Brexit Phytosanitary Standards" },
  ];

  const partnerLogos = [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFwBh7JuLJ8Njqu01ZGl85hiWgVkMVHpQlhwYovfeykWI6xUgv86F7egg-YVekxZKjltULLul7G3uVhNCVtMfnqn5EjNT8_IZDBxBdj078mDkc0t_m6NJIKbcAqYFCf5NEDYtVyH-1QrGZy2dMw86tz8OcC0FdSbaLvEj0VnNVuJMEN-PtVXCh9pJDGt42dOw42ocX2CP-m4-l6nybVz0sxvB7RG68-h6pJDQ20HUr7IBSDzg0OAdPHGgzN4Wee1E-IcOcoikY60-d", alt: "Maersk", h: "h-8" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZsnXM1qTAQtvsfyVllllNKvMZj8jvkzr526WS3C57oULFyK31wu7vWnaXWAV1mrwzba5SG6ELzsb3Xu2YXnWMXlh_QlyyM4BC3kXVIJRBbJ0PYRhQ133dtDljtfJXDmDeG92BsjwyFVkKZXxrj3CBCeZrpWAPQFdf9tNZhFB_RpxTdwCZGI1VcHUqyUmjy3SyId-i93RKcrUpLuaSHzz25DTSa-yXgOZ3H1k_PhfqrvsUXwZgyBSyLUaPHBSvjcJqqvLjRuCU1ty6", alt: "DP World", h: "h-10" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_M6KJ1xP8xZ7-FRc-b922HzQkjmAj5gtsNwR5-QzXzeQbp2EUDOKxLBMMVP690dk-e4k-5HEeby14letSqwArzmpUk3e6-0zRwY8sjpPLnwAzrw4l2pWxUM6jrVdRIsCyy5nZDvadbZs2XnDBj7RdTg3qp1pkYpSSc3_W-4e-ZhWPDkFOXToeyWmLDmwAZOel3kxDCBTDKzGPsBG3Vifzs1p4KMuGxN-S-rvkPQSM2DPi8LxrQ5vDy9sH8lDDGCK2SmgYcFrGrA-", alt: "DHL", h: "h-6" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8c53wV4Vh9pyrS4cTxuvlFNRN1P5sZLqNSZ-NG6zzbkN7wH5MFb2XlAjK9GtdILsX-bgLhpReKlqe3DnBs1cOaPBhWoFcYZcDNnD1WuNK_Q5Vu8ZlGWY9hG-lEd-EQLwFerUgoxY5yG6ZIGk-6mnJofMhI_x2If8MG3uNINfQegAbDzCPytzTu5Ezo0wd4uvxkfpQYUATWJp1gDaGsnE0J9gQSgJjD9OMcJu9Dh1Ry6uVs-jNnLm4-XxulWg4l1IX8klcodwMeBe3", alt: "FedEx", h: "h-8" },
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
        .dark-map-gradient {
          background: radial-gradient(circle at center, #0f3d2e 0%, #00261a 100%);
        }
        .route-arc {
          stroke-dasharray: 5, 5;
          filter: drop-shadow(0 0 8px #ffdea5);
        }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .animate-pulse { animation: pulse-dot 2s infinite; }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] overflow-x-hidden min-h-screen">

        {/* ── NAVBAR ── */}
        <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
          <div className="max-w-[1280px] mx-auto px-16 flex justify-between items-center h-20">
            <div className="text-[24px] font-bold text-[#00261a] tracking-tight" style={{ fontFamily: "Sora, sans-serif" }}>
              Harvestora Global
            </div>
            <div className="hidden md:flex gap-8 items-center">
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Commodities</a>
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Sustainability</a>
              <a href="#" className="text-[#00261a] border-b-2 border-[#775a19] font-bold pb-1 text-[16px]">Global Network</a>
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Supply Chain</a>
              <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Certifications</a>
            </div>
            <div className="flex gap-4 items-center">
              <button className="px-6 py-2 rounded-full border border-[#00261a] text-[#00261a] text-[14px] font-semibold tracking-[0.05em] hover:bg-[#00261a]/5 transition-all">
                Investor Relations
              </button>
              <button className="px-6 py-2 rounded-full bg-[#00261a] text-white text-[14px] font-semibold tracking-[0.05em] border-b-2 border-[#775a19] hover:-translate-y-0.5 transition-all duration-300">
                Request Quote
              </button>
            </div>
          </div>
        </nav>

        {/* ── HERO ── */}
        <header className="relative min-h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKlJGKLGkbiReP67TZPpxC6JT1aDSAgBkn1rIbQ5oeF4WRecCpZ1SuGoRfiz3s1v2zyeFprVOXbaWoLJUjtwrYZSTa9jMpuFAi7yKIiPO0cOuvT7G9Lu8c5prxiix7mqJ6O3MKW7rnxTi_XftX_jaOfT33ZnmsVQGCHALUmwAFlLl9Xl4jY_KkKP7snPw3cuDL2KL0U17ojMary0oJSn5LA4RCHKFT6Lhwr0xU_b4BpcUfURHRxT8JSERXSSVCs2U0m7SDWdZzD54P"
              alt="Container ship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#00261a]/90 via-[#00261a]/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-16 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1 rounded-full bg-[#fed488] text-[#785a1a] text-[14px] font-semibold tracking-widest uppercase mb-6">
                Global Logistics Elite
              </span>
              <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6">
                Bridging Continents with Precision
              </h1>
              <p className="text-[18px] leading-[1.6] text-[#beedd7] mb-10 opacity-90">
                Harvestora Global orchestrates a seamless flow of organic resources across the globe, combining industrial-grade efficiency with the delicate care required for high-value agriculture.
              </p>
              <div className="flex gap-6">
                <button className="px-8 py-4 bg-[#00261a] text-white border-b-2 border-[#775a19] flex items-center gap-3 hover:translate-x-1 transition-transform text-[14px] font-semibold tracking-[0.05em]">
                  <span>Track Shipment</span>
                  <span className="material-symbols-outlined">east</span>
                </button>
                <button className="px-8 py-4 glass-card text-white flex items-center gap-3 text-[14px] font-semibold tracking-[0.05em]">
                  <span>Explore Hubs</span>
                  <span className="material-symbols-outlined">hub</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ── INTERACTIVE MAP ── */}
        <section className="py-24 bg-[#00261a]">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#ffdea5] mb-4">
                  Precision Export Corridors
                </h2>
                <p className="text-[16px] text-[#a2d1bb] max-w-xl">
                  Mapping the strategic arteries of global trade. From the fertile soils of the East to the premium markets of the West.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#0f3d2e] rounded-full border border-[#a2d1bb]/20">
                  <span className="w-2 h-2 rounded-full bg-[#775a19] animate-pulse" />
                  <span className="text-[#beedd7] text-[14px] font-semibold tracking-[0.05em]">Live Trade Routes</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#a2d1bb]/20 dark-map-gradient shadow-2xl">
              <div className="absolute inset-0 opacity-40">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQxSM64Ha9w53Yyn1BPEuIDznKxlT60wUbcw_USwtK5H47jc8L1rKklr_-TYSgF1oDHf_QqjXsPpw-5ygh1sS7uJ_pzhQsvY24mLMWtTv6XvTVWyzpYtINzhlX3j1PSUHr7-Ts6_k2I84F5U4VyRbzkvZU6nVWJI8WsbrUHMgLocllw5_A7pJPofHsZazBzV0uSHE3VehD6Sxavdkw5LS_AIJm5_98LLr1WFeNIkX0b-53ddKl1aICDtPdm4GIPsZ-72jQDSX-Ojcb"
                  alt="World map"
                  className="w-full h-full object-cover grayscale invert opacity-20"
                />
              </div>

              {/* SVG Trade Routes */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500">
                <path className="route-arc" d="M700 300 Q 600 200 450 250" fill="none" stroke="#ffdea5" strokeWidth="2" />
                <path className="route-arc" d="M700 300 Q 500 150 200 150" fill="none" stroke="#ffdea5" strokeWidth="2" />
                <path className="route-arc" d="M700 300 Q 800 250 850 350" fill="none" stroke="#ffdea5" strokeWidth="1.5" />
                <circle cx="700" cy="300" r="5" fill="#ffdea5" />
                <circle cx="450" cy="250" r="4" fill="#ffdea5" />
                <circle cx="200" cy="150" r="4" fill="#ffdea5" />
              </svg>

              {/* Legend */}
              <div className="absolute bottom-10 left-10 glass-card p-6 rounded-[4px] max-w-xs">
                <h4 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-4">Export Hubs</h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between text-[#191c1c]">
                    <span className="text-[16px]">India (HQ)</span>
                    <span className="material-symbols-outlined text-[#775a19]">location_on</span>
                  </li>
                  <li className="flex items-center justify-between text-[#414944]">
                    <span className="text-[16px]">UAE / KSA</span>
                    <span className="text-[14px] font-semibold tracking-[0.05em]">Active</span>
                  </li>
                  <li className="flex items-center justify-between text-[#414944]">
                    <span className="text-[16px]">USA / UK</span>
                    <span className="text-[14px] font-semibold tracking-[0.05em]">Direct</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOGISTICS BENTO GRID ── */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {logisticsCards.map(({ icon, title, desc, features }) => (
                <div key={title} className="glass-card p-10 flex flex-col justify-between group cursor-pointer transition-all hover:bg-white">
                  <div>
                    <div className="w-16 h-16 bg-[#0f3d2e] rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[#ffdea5]" style={{ fontSize: 36 }}>{icon}</span>
                    </div>
                    <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-4">{title}</h3>
                    <p className="text-[#414944] mb-6 text-[16px] leading-[1.6]">{desc}</p>
                  </div>
                  <ul className="space-y-4 border-t border-[#c0c8c3] pt-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-[14px] font-semibold tracking-[0.05em]">
                        <span className="material-symbols-outlined text-[#775a19]" style={{ fontSize: 18 }}>check_circle</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SHIPPING STATS ── */}
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <div className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-2">{value}</div>
                <div className="text-[14px] font-semibold tracking-widest text-[#775a19] uppercase">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── COMPLIANCE TABLE ── */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="mb-12">
              <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-4">
                Regulatory Compliance Matrix
              </h2>
              <div className="w-24 h-1 bg-[#775a19] mb-6" />
              <p className="text-[#414944] max-w-2xl text-[16px] leading-[1.6]">
                We navigate the complex landscape of international food safety standards, ensuring your commodities meet or exceed local requirements before departure.
              </p>
            </div>
            <div className="overflow-x-auto glass-card rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#00261a] text-white">
                  <tr>
                    {["Region", "Compliance Authority", "Standard Highlight", "Status"].map((h) => (
                      <th key={h} className="px-8 py-5 text-[14px] font-semibold tracking-[0.05em] uppercase">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c0c8c3]">
                  {complianceRows.map(({ region, authority, standard }) => (
                    <tr key={region} className="hover:bg-[#775a19]/5 transition-colors">
                      <td className="px-8 py-6 text-[24px] leading-[1.3] font-semibold text-[#00261a]">{region}</td>
                      <td className="px-8 py-6 text-[16px] leading-[1.6] text-[#414944]">{authority}</td>
                      <td className="px-8 py-6 text-[16px] leading-[1.6] text-[#414944]">{standard}</td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-[#beedd7] text-[#002116] rounded-full text-[14px] font-semibold tracking-[0.05em]">
                          Verified
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── PARTNER LOGOS ── */}
        <section className="py-16 border-t border-[#c0c8c3] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <div className="max-w-[1280px] mx-auto px-16 flex flex-wrap justify-between items-center gap-12">
            <span className="text-[#00261a]/30 uppercase tracking-widest text-sm font-semibold">Strategic Partners</span>
            {partnerLogos.map(({ src, alt, h }) => (
              <img key={alt} src={src} alt={alt} className={`${h} object-contain`} />
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="w-full pt-16 pb-8 bg-[#00261a] text-white border-t border-[#c0c8c3]">
          <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-[24px] font-bold text-[#775a19] mb-6" style={{ fontFamily: "Sora, sans-serif" }}>
                Harvestora Global
              </div>
              <p className="text-white/70 text-[16px] leading-[1.6] mb-8">
                Industrial Organic Precision. Scaling nature through engineering excellence.
              </p>
            </div>
            {[
              { heading: "Corporate", links: ["Global Offices", "Quality Assurance", "Trade Compliance"] },
              { heading: "Resources", links: ["Sustainability Report", "Career Portal", "Privacy Policy"] },
            ].map(({ heading, links }) => (
              <div key={heading} className="flex flex-col gap-4">
                <h4 className="text-white font-bold mb-2 text-[16px]">{heading}</h4>
                {links.map((l) => (
                  <a key={l} href="#" className="text-white/70 hover:text-[#ffdea5] transition-colors hover:translate-x-1 inline-block text-[16px]">{l}</a>
                ))}
              </div>
            ))}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold mb-2 text-[16px]">Connect</h4>
              <div className="flex gap-4 mb-4">
                {["public", "mail"].map((icon) => (
                  <span key={icon} className="material-symbols-outlined text-[#ffdea5] cursor-pointer">{icon}</span>
                ))}
              </div>
              <button className="px-6 py-3 bg-[#ffdea5] text-[#261900] text-[14px] font-semibold tracking-[0.05em] rounded-sm w-fit">
                Contact Support
              </button>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto px-16 mt-16 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm text-center">
              © 2024 Harvestora Global Enterprise. All rights reserved. Industrial Organic Precision.
            </p>
          </div>
        </footer>

      </div>
    </>
  );
}
