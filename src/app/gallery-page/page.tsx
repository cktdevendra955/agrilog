"use client";
import { useState } from "react";

const galleryItems = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFOUoOTkdEI2GY7a4CpmB-NROwjRh4B33s6meR8dKZut-Pbdq37EMznkQ5_ZzNDMdLveRDiBrqid0MyqfljOVVmbIF6YltlGZ4k62XArXCVyAT5-VjsEBAMoVvu7FsDR_nge5KDAb0IM8X19hPayUYGD5_XY4jZvsSqfZu-Jn1MrQ5D6J-XG8ZjujUw3p6r4-3QVZT_q7tjind4oRTQ3CDzL5KZz80U61m42YmgSWA7O_-M652OJSi2mIxecZiY_39C9h4tHtGM_5F",
    tag: "OUR FARMS", title: "Regenerative Precision",
    desc: "Sustainable soil management across 5,000 hectares of organic certified land.",
    span: "tall", category: "Our Farms",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSi37vVl75JZO0L1ZoMi2x4AzrXjno0BbkTFY2ShawaNYt6ck6g4q9YeCPklL7Z4tDRSJ3U-0methOfG4hlZ1ACuG09bAXsXCFjGWLDO_p7w0joziRy3mKVOPh-KNSK_32rK793AJ66ih0JX4zYbmZnR4IjnM-YacbRvMfxB7lP62aZTrakRD6KuQsZDippX_FzbTj0RIOpPLe3ejTdZt4DM3dQYtz1kxUHw0sOiIIP3abGh_HnSuBgzcaI25aQuFYeGFjOeES7Z-m",
    tag: "GLOBAL HUBS", title: "10,000 MT Storage Capacity",
    desc: "State-of-the-art climate controlled regional distribution center.",
    span: "wide", category: "Global Hubs",
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWSlouJxEbjcmgN5cAtVLE4Z3yKAfqM3CH2l2IycBteIjf2YZ6YeVjdnxXZtOlDp1xVgZ64k7XTnDPVUwJ8OTw_5FATFTG14JBeE-m8cEyloEUPcMeUgPj5dSgMc6a1Q9hiLbjoagDEZYDvWL3S-OlU-L0l68ZLXhJa5Spfbp_3dz4Zw9-mm84pcsxYWopBXGScun2bn7S5J8ed8d9KDWz0Z7qNd3hNvpqVrFBZ0MI8irOSbxqS2E-TstSVi1qKg2EUis3QBNWDkSe",
    tag: "PROCESSING UNITS", title: "Automated Grading",
    desc: "Optical sorting technology ensuring 99.9% purity and grade consistency.",
    span: "standard", category: "Processing Units",
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqHpNifCxPj5Ea87GcARBuDW2_3Z9QIgZ06lnPPPZY_UCMigUdz5Ad6zmk_T-B1c-UoVfSjcwXiIlBm4cIbIXDASRGWwDhGrzgBFewiYyQ9btu_ad5Iev0uMEHOGYKSxoXsieo8HwwKb9qH9djyXlETOb49d1zQwNWaNhhjDvJn7FjvTwUbOGNf4KiSpAGYPL5xDJa-fAy1WEmp69e4jD7_oF_MGgRuRkbj5gZn-vjuvNwm4WUGW44DLPLTS_8bQ_qD9KyfLeN6Vkw",
    tag: "LOGISTICS", title: "Intercontinental Flow",
    desc: "Seamless multimodal transport connecting harvest sites to global ports.",
    span: "tall", category: "Logistics & Containers",
  },
  {
    id: 5,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuTzpeM8LSn_2g6pTR6FgTtr8AfmXL8FNW_daWthQpTxEVwWVYP05h_0I9_tVIAy6-cKYnyJKnbixls02RM6dNcMq_t7qaeUoejsPpXs8Wt02kPJBxxmgzIYvYQaH3dqgdq61HDHR6AveRO4oapyAHmXQmOSQlHXl3jyTIhxQ5WdFZ1TaORIiWHGGw-ytCIYP0GLxQderdrvvxv7VpgCXcFVlO8guR4ptT_Jdxdn6GRRZyZBShPPDACz5Wwa_Iy9TcGQtwUL7M78ig",
    tag: "PACKAGING", title: "Export Readiness",
    desc: "Double-walled 25kg bulk packaging with integrated moisture barriers.",
    span: "standard", category: "Packaging",
  },
  {
    id: 6,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuQoZ9cQ9ZaWeG_NIlDHbRM0RWfpjlWZZOqzscyvaHdKZUCpGNCAYgUkTiAJgQfiYbE2dYnQnopX9XTM2Gh3M2JnAsd_AekL8AXlC1kjVLtmgtS2FnuRNJ1RbERTCTycA-9gLLiAWt0Bn6YX7hpLvbabpGNVpBLU4o_4JuiOZ7VRhU84W6x6auztDcRbaiGQ-LfskgVDfEHytnH0WIObg9BaFIKVPn-Hnak12FQHthaiQWilQ6c88mali4v7tN-RRVJMzWxWPMeSSD",
    tag: "SUSTAINABILITY", title: "Carbon Neutral Infrastructure",
    desc: "Solar-integrated facilities reducing operational footprint by 40%.",
    span: "wide", category: "Our Farms",
  },
];

const filters = ["All Operations", "Our Farms", "Processing Units", "Packaging", "Logistics & Containers", "Global Hubs"];

const stats = [
  { val: "124", label: "Global Locations" },
  { val: "15k", label: "Tons Monthly" },
  { val: "48", label: "Certifications" },
  { val: "92%", label: "Renewable Powered" },
];

export default function GalleryPage() {
  const [active, setActive] = useState("All Operations");

  const filtered = active === "All Operations"
    ? galleryItems
    : galleryItems.filter((i) => i.category === active);

  const spanClass = (span: string) => {
    if (span === "tall") return "row-span-3";
    if (span === "wide") return "col-span-2 row-span-2";
    return "row-span-2";
  };

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
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          grid-auto-rows: 200px;
          gap: 24px;
        }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen overflow-x-hidden">

         

        <main>

          {/* ── HERO ── */}
          <section className="relative h-[819px] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQyU4Lkblx62-oG-PZznzdCLCckhLUZC_ilX1XKpKkUME90C1QSb-PJ7g4qiAV5JnD92cYv91UVSsQse9evQ7XzOoWZAvrddUbfOYq83faRktqoO3wwyMXu6CIpOkGL6OHr1Y9tu0OOwj8WJB4JtDrwxrFMTmKO3FxAAITG7NPPaNv89Up-huE6HgA-a3SIHUqm_IXEZrhsvd3jacoEF0dJhNgfXDlMQndTjyFrZFT4W75YatNUsTekrKrPRp6oOieiCoToQAN5IFZ"
                alt="Organic harvest field"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00261a]/60 to-transparent" />
            </div>
            <div className="relative z-10 max-w-[1280px] mx-auto px-16 w-full">
              <div className="max-w-2xl text-white">
                <span className="inline-block px-4 py-1 glass-card text-[#00261a] text-[14px] font-semibold tracking-widest uppercase mb-6">
                  Gallery Archive
                </span>
                <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold mb-6">
                  Visualizing Excellence: From Farm to Port
                </h1>
                <p className="text-[18px] leading-[1.6] text-white/90 mb-8 max-w-lg">
                  Witness the journey of organic precision. From the nutrient-rich soils of our global farms to the high-tech logistics hubs serving the world's most demanding markets.
                </p>
                <button className="flex items-center gap-2 bg-white text-[#00261a] px-8 py-4 text-[14px] font-semibold tracking-[0.05em] border-b-2 border-[#775a19] hover:-translate-y-0.5 transition-all">
                  <span className="material-symbols-outlined">explore</span>
                  START JOURNEY
                </button>
              </div>
            </div>
          </section>

          {/* ── FILTER + GALLERY ── */}
          <section className="bg-[#f8faf9] pt-16 pb-8">
            <div className="max-w-[1280px] mx-auto px-16">
              <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                <div className="max-w-xl">
                  <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-2">
                    The Operational Canvas
                  </h2>
                  <p className="text-[#414944] text-[16px]">Explore our end-to-end supply chain through a high-fidelity visual lens.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.map((f) => (
                    <button
                      key={f}
                      onClick={() => setActive(f)}
                      className={`px-6 py-2 text-[14px] font-semibold tracking-[0.05em] transition-colors ${
                        active === f ? "bg-[#00261a] text-white" : "glass-card text-[#414944] hover:text-[#00261a]"
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Masonry Grid */}
              <div className="masonry-grid pb-24">
                {filtered.map((item) => (
                  <div key={item.id} className={`group relative overflow-hidden glass-card cursor-pointer ${spanClass(item.span)}`}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#00261a]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                      <span className="text-[14px] font-semibold tracking-[0.05em] text-[#ffdea5] mb-2">{item.tag}</span>
                      <h3 className="text-[24px] leading-[1.3] font-semibold">{item.title}</h3>
                      <p className="text-[16px] mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-4 group-hover:translate-y-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── QUALITY IN MOTION ── */}
          <section className="bg-[#00261a] py-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <div className="w-full h-full border-l border-b border-[#ffdea5] transform -skew-x-12 translate-x-1/2" />
            </div>
            <div className="max-w-[1280px] mx-auto px-16 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                  <span className="text-[14px] font-semibold tracking-widest text-[#ffdea5] uppercase mb-4 block">
                    Process Transparency
                  </span>
                  <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-white mb-6">Quality in Motion</h2>
                  <p className="text-[18px] leading-[1.6] text-white/70 mb-10">
                    Beyond still frames, our commitment to industrial precision is best viewed in real-time. Witness the fluid orchestration of our grading lines and the rhythmic precision of our maritime departures.
                  </p>
                  <div className="space-y-6">
                    {[
                      { icon: "analytics", title: "Real-time Grade Analysis", desc: "Every 100ms, our optical sensors confirm commodity purity." },
                      { icon: "conveyor_belt", title: "Cold Chain Integrity", desc: "Continuous thermal monitoring throughout the loading process." },
                    ].map(({ icon, title, desc }) => (
                      <div key={title} className="flex items-start gap-4 p-4 glass-card bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <div className="bg-[#775a19] text-white p-3 rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined">{icon}</span>
                        </div>
                        <div>
                          <h4 className="text-[14px] font-semibold tracking-[0.05em] text-white mb-1">{title}</h4>
                          <p className="text-[16px] text-white/60">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video thumbnail */}
                <div className="relative aspect-video glass-card overflow-hidden group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3pgmq-80SRfcCJHDLqM2V0TOa98XAV6fMNJkAozG3CUh0wYV-_gr85U9ImRYY35LPNPwseuIGQBo9aZNJfmeI_FBwsoEubDt4gvXEGyIQsizKETiKld7LBvF1m8hpWkGWAoVeNybJbahxYABenz-o8wHCbaWutaEQGyB-X9cfZteK1nieQZFqLo2zM9mYDlAyNYhlRud38z904-4sx7BQl4S2eJWSXb2qTOgLDJyb7iPQkK0kZZocnzRcdET5Ylhgb2w0UHPsaUiX"
                    alt="Processing plant video still"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-[#775a19] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-300">
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 36 }}>play_arrow</span>
                    </button>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="text-white">
                      <div className="text-[10px] font-semibold tracking-[0.05em] opacity-70 mb-1">01 / 04</div>
                      <div className="text-[16px] font-bold">Automated Packaging Sequence</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#775a19]" />
                      {[1, 2, 3].map((i) => <div key={i} className="w-2 h-2 rounded-full bg-white/30" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── STATS ── */}
          <section className="py-24 bg-[#f8faf9]">
            <div className="max-w-[1280px] mx-auto px-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map(({ val, label }) => (
                  <div key={label} className="text-center p-8 glass-card">
                    <div className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-2">{val}</div>
                    <div className="text-[14px] font-semibold tracking-widest text-[#414944] uppercase">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="pb-24 px-5 md:px-16">
            <div className="max-w-[1280px] mx-auto bg-[#00261a] py-20 px-12 relative overflow-hidden text-center">
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-white mb-6">
                  Ready to Scale Your Import Network?
                </h2>
                <p className="text-[18px] leading-[1.6] text-white/80 mb-10">
                  Access our full operational technical reports and high-resolution asset library for your procurement presentation.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button className="bg-[#775a19] text-white px-10 py-4 text-[14px] font-semibold tracking-[0.05em] hover:-translate-y-0.5 transition-all">
                    DOWNLOAD MEDIA KIT
                  </button>
                  <button className="border border-white/30 text-white px-10 py-4 text-[14px] font-semibold tracking-[0.05em] hover:bg-white/10 transition-all">
                    PARTNER WITH US
                  </button>
                </div>
              </div>
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#775a19]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#775a19]/10 rounded-full blur-3xl" />
            </div>
          </section>

        </main>
 

      </div>
    </>
  );
}
