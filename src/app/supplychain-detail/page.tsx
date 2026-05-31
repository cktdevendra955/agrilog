export default function InfrastructurePage() {
  const processingFeatures = [
    { icon: "filter_alt", title: "Optical Grading", desc: "AI sensors detect internal defects and sugar content without surface contact." },
    { icon: "precision_manufacturing", title: "Automated Packaging", desc: "Hermetic sealing and eco-friendly nitrogen flushing for extended shelf life." },
    { icon: "verified_user", title: "Hygiene Control", desc: "HEPA-filtered environments with autonomous UV sterilization cycles." },
  ];

  const farmNetwork = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2ss3zreeIKaKLuPiB_Z0LM7i_GqoPHjGtP9C-0gxws7FR-MuxXIG5PUR9Gbei-zrefpa2FcUeFACZIrnPFQnpfs1i2dDe3Wx5sR-0t8naoph1iSlUFISyY7kU9d1GyqptMUurOFnpbmAzJ0_RAaRl5fW4A_0LenzE5HAw6QAUYYm5Zd7WxIML9ckGUvgEQs3qQahKgjazTQgWepPVIPUIgueIKD2RvDQsj_KgnRWtTDLV8f7ZWuEgHzDjlx10bkFsKvFwj6quoRLB",
      title: "Highland Orchards", desc: "2,500 hectares of premium fruit cultivation in high-altitude zones.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwOzEbaAmlqMIQqbGUJb3INbylpQaBkBm7EUOB_G3rUmQSDYeH_3cyQKBG-Ax4qiQKwPNj2EpJrYmoIHyZMpru2EZcmB2cHUclzaRRI7nJ18e2zdiq5_OvFsiOPprQTsqMFIJ0wRJB1np1mOznJ5-EYfwAwQksJiDyHGVSKOyVnILReAOLlvZJ9GQci1CGCXWrO3752cQoHus6zCiKpEpfUlb8QodMH8xf0Mwn4WnKqyhlBaDba8E6fFK15oWJVNkUUXrOr9zC0ygJ",
      title: "Greenhouse Tech", desc: "Climate-controlled indoor environments for year-round organic production.",
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBBOr3nmfBqdMx0nPY18ycfuvv8R4ISJZPQeZhScbH3R0Y-Bn2t4tsmsVIoaOX13fbVKAZ29QYtBolVHudprKmOWNGlwqj1hpUKXCPWCzBsGxgssa4q1xPfpUiUdPoR873oA1mrdFm6J2Xd9NiNFwOP1YWrGDKmdCN0ILekJWYrCPbjobBlAuWdc631nEsXMyNoc5XLfYjk4Bi1h7sAf4wKwN-lpfcOzBV30ltuSkXwDGCDN1jazVhGpwtWXkHJs-w80Bgj4rN09NSl",
      title: "Arable Lands", desc: "Expansive plains dedicated to ancient grains and high-protein organic pulses.",
    },
  ];

  const hubs = [
    { name: "Rotterdam Terminal", desc: "Primary entry hub for EU distribution with dedicated customs clearance.", active: true },
    { name: "Dubai Logistics City", desc: "MENA regional hub with multi-modal air and sea connectivity.", active: false },
    { name: "Singapore Gateway", desc: "APAC transit point specialized in quick-turnaround cold storage.", active: false },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
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
        .hero-gradient {
          background: linear-gradient(to bottom, rgba(0,38,26,0.4), rgba(0,38,26,0.8));
        }
        @keyframes pulse-node { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
        .animate-pulse { animation: pulse-node 2s infinite; }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">

       
        {/* ── HERO ── */}
        <header className="relative h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDncZ2IQ6adl6DmekMGA6uOZlXQyAmmbUYRzs4Rr91YJZePqKB1amkM0qNprRmmnA1PtwFG09m_RcQpNzOEXqTpm44zVT1gFdo8gdVBKNdXbkm0VcyFtsIrt1Oh6CBndfZhjHpeLVBreNoK-9CRDGw2RBF9JEBSghIsCdgfqCew7VeCEpuIWxCeB7RGt6eE-2RVQi445Xe9lLUXh1E_LRCViuV2fHdu--nbn-IbdDrX4xCZ0N0g97E6awqCINRLuR3T0qIcxRE-b7wm"
              alt="Industrial cold storage facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 hero-gradient" />
          </div>
          <div className="relative max-w-[1280px] mx-auto px-16 w-full">
            <div className="max-w-2xl">
              <span className="inline-block text-[14px] font-semibold tracking-widest text-[#775a19] uppercase mb-4">
                Precision Engineering
              </span>
              <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6 leading-tight">
                Industrial Precision <br />at Source
              </h1>
              <p className="text-[18px] leading-[1.6] text-white/80 mb-8 max-w-lg">
                Bridging organic vitality with state-of-the-art cold-chain infrastructure for global excellence.
              </p>
              <button className="px-8 py-4 bg-[#00261a] text-white text-[14px] font-semibold tracking-[0.05em] rounded-[4px] border-b-2 border-[#775a19] flex items-center gap-2 hover:-translate-y-0.5 transition-all">
                EXPLORE FACILITIES
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>
            </div>
          </div>
        </header>

        {/* ── STATS STRIP (overlaps hero) ── */}
        <section className="relative z-10 -mt-20 max-w-[1280px] mx-auto px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-[#00261a] text-white shadow-2xl">
            {[
              { val: "1.2M+", label: "SQ. FT. Storage" },
              { val: "500T", label: "Daily Processing" },
              { val: "100%", label: "Automated Units" },
            ].map(({ val, label }, i) => (
              <div key={label} className={`p-12 flex flex-col justify-center items-center text-center ${i < 2 ? "border-r border-white/10" : ""}`}>
                <span className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#ffdea5] mb-2">{val}</span>
                <span className="text-[14px] font-semibold tracking-widest uppercase text-white/60">{label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── WAREHOUSING BENTO GRID ── */}
        <section className="py-24 max-w-[1280px] mx-auto px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-4 italic">
                Warehousing &amp; Logistics
              </h2>
              <p className="text-[18px] leading-[1.6] text-[#414944]">
                Multi-temperature ecosystems designed for life-extension of premium organic perishables.
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-12 h-px bg-[#775a19]" />
              <span className="text-[14px] font-semibold tracking-[0.05em] text-[#775a19]">VIEW NETWORK</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[600px]">
            {/* Large Image Card */}
            <div className="md:col-span-8 relative overflow-hidden group rounded-[4px]">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKR7FAdcy7qzree7SXFS86HSypwVEkzDcNVR_IKID6u5BtCgoCpeKjlj4nTTXGCO7DGP_un293Zk0kHMoTLLrcMWTjEV42KcQtLPl3f9oOwLZTZDEXln1I-cB1XFi35cvQmHy_lF-MUJiWfxXdDjLDuTYnyEXzFFge90JkOLToN_e5CnE63gcZMcxFmLkWne64tAklNH_UJqd_mn6mLGuAG-_bRYUFyhwfmA_nBt_p-UFLOwN26vAIWlTIUem4GiV0lDbX6u3tUFOR"
                alt="Multi-temperature warehouse"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00261a]/80 to-transparent flex items-end p-10">
                <div>
                  <h3 className="text-[24px] leading-[1.3] font-semibold text-white mb-2">Multi-Temperature Hubs</h3>
                  <p className="text-white/70 max-w-md text-[16px]">Precision climate zones ranging from -25°C to +15°C with real-time IoT monitoring.</p>
                </div>
              </div>
            </div>

            {/* Right cards */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="glass-card p-8 flex flex-col justify-between rounded-[4px]">
                <span className="material-symbols-outlined text-[#775a19]" style={{ fontSize: 36 }}>thermostat</span>
                <div>
                  <h4 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-2">Cold Chain</h4>
                  <p className="text-[16px] leading-[1.6] text-[#414944]">Uninterrupted thermal protection from farm gate to global port.</p>
                </div>
              </div>
              <div className="bg-[#fed488] p-8 flex flex-col justify-between rounded-[4px]">
                <span className="material-symbols-outlined text-[#785a1a]" style={{ fontSize: 36 }}>inventory_2</span>
                <div>
                  <h4 className="text-[24px] leading-[1.3] font-semibold text-[#785a1a] mb-2">Smart Sourcing</h4>
                  <p className="text-[16px] leading-[1.6] text-[#785a1a]/80">AI-driven inventory tracking for 99.9% export accuracy.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESSING UNITS ── */}
        <section className="py-24 bg-[#00261a] text-white">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              {/* Image */}
              <div className="order-2 md:order-1">
                <div className="relative">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD14o8sz0PNNiEI3eMO9AbhS96u7pMn6JHu-nUoKU56Rh9PNIhX49ZtfoNLNmYni4dylcRHLREehtxsr8TVPvNUyztG7JjS621w64N2DeIM2qJm3ROJwwT-RpL-KKn8fgblIxcWKxRXfIKkHtLLhwPBY6Tt_L9elQoocdyUwWk2y5jWpdWiWb5MjcIPjdEsJUEM495VvK6nuMV1y3rowlEY0J4KbZtzAE2K9C_ZnzCekzM1JXn1Baps8oHGXY73RQht7ODRKxoFMU2C"
                    alt="Automated sorting line"
                    className="rounded-[4px] shadow-2xl w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-[#775a19] p-8 hidden md:block">
                    <span className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white">Zero-C</span>
                    <p className="text-white/80 text-[14px] font-semibold tracking-[0.05em] uppercase">Contact Automation</p>
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="order-1 md:order-2">
                <span className="text-[14px] font-semibold tracking-widest text-[#775a19] uppercase mb-4 block">State-of-the-Art</span>
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold mb-8">
                  Processing &amp; Grading Units
                </h2>
                <ul className="space-y-8">
                  {processingFeatures.map(({ icon, title, desc }) => (
                    <li key={title} className="flex gap-6">
                      <div className="w-12 h-12 rounded-full border border-[#775a19] flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-[#775a19]">{icon}</span>
                      </div>
                      <div>
                        <h4 className="text-[18px] font-bold text-white">{title}</h4>
                        <p className="text-white/60 text-[16px] leading-[1.6]">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── FARM NETWORK ── */}
        <section className="py-24">
          <div className="max-w-[1280px] mx-auto px-16 text-center mb-16">
            <h2 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-4">Vast Farm Network</h2>
            <p className="text-[18px] leading-[1.6] text-[#414944] max-w-2xl mx-auto">
              Industrial-scale agricultural capacity rooted in heritage organic practices.
            </p>
          </div>
          <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {farmNetwork.map(({ img, title, desc }) => (
              <div key={title} className="group cursor-pointer">
                <div className="h-80 overflow-hidden mb-6 rounded-[4px]">
                  <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <h4 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-2">{title}</h4>
                <p className="text-[16px] leading-[1.6] text-[#414944] mb-4">{desc}</p>
                <div className="flex items-center gap-2 text-[#775a19] text-[14px] font-semibold tracking-[0.05em] group-hover:translate-x-2 transition-transform">
                  VIEW DETAILS <span className="material-symbols-outlined">chevron_right</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── GLOBAL LOGISTICS HUBS ── */}
        <section className="py-24 bg-[#f3f4f3] overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-6">
                Strategic Global <br />Logistics Hubs
              </h2>
              <p className="text-[18px] leading-[1.6] text-[#414944] mb-8">
                Located at the world's most critical maritime nodes, our port-side facilities ensure that 'Organic' remains 'Fresh' upon arrival.
              </p>
              <div className="space-y-4">
                {hubs.map(({ name, desc, active }) => (
                  <div key={name} className={`bg-white p-6 shadow-sm border-l-4 border-[#775a19] ${active ? "" : "opacity-60"}`}>
                    <h4 className="text-[18px] font-bold text-[#00261a]">{name}</h4>
                    <p className="text-[#414944] text-[16px] leading-[1.6]">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Globe visual */}
            <div className="relative">
              <div className="aspect-square bg-[#0f3d2e] p-4 rounded-full">
                <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/10">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDT4KjBwVdog_hyqgtcYRlyb7bnmqpycTImhXC3LMlJjt63nLApAgjngcp2F9QQUhPcnVHC_l8Kvhd2qyDVX5M9UePUloHw59fccXBsppBaIpXhY-McvZPkHjH-slghowY5PGis9LbIgj0CuA9D-ngCJTOY32ewdzXlOejhjr1RWvQ9Ql1WvYxBGSik3VfEBK1hclK6jbWnoNiJnrY-sMx41_lkqFDYAEOnquAxLbknt92NLL_th5XQZX-cSmuD18_7GgPY4O6vwcd"
                    alt="Global port overhead"
                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                  />
                </div>
              </div>
              {/* Glowing nodes */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#775a19] rounded-full animate-pulse" style={{ boxShadow: "0 0 20px #775a19" }} />
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#775a19] rounded-full animate-pulse" style={{ boxShadow: "0 0 15px #775a19" }} />
            </div>
          </div>
        </section>
 

      </div>
    </>
  );
}

