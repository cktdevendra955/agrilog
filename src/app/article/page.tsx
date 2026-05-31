const chartBars = [
  { year: "2021", usa: 40, uae: 25 },
  { year: "2022", usa: 60, uae: 40 },
  { year: "2023", usa: 75, uae: 55 },
  { year: "2024 (Proj.)", usa: 95, uae: 70, bold: true },
];

const relatedArticles = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNtawpRyrk7oPlpVwkgUxjozp43yzoykXh8G-Kz9Kn-xNHaEPM5quU-kAihpkMfTYGtM7VKVzWvwCLWBbiqvjivx4aC59Yq0hiGiiJcno9_Hk6KZdD2abMSaWzE9LSTbhk7W90rLGSw2y6Azm77Xh7EzC2XQa76Glm1wK5Lx4H2_GjLlAiHwB0WF6FleTIdbDKn6LQqgYT0xWndtuPixe--CjpsLQLglRAwwd3npfoZqDx7D9h_2MNYOR6Y2sb0RLfgB4LDhhZglGW",
    tag: "Supply Chain",
    title: "Reducing Latency in Trans-Atlantic Spice Corridors",
    desc: "How new logistics partnerships and decentralized storage hubs are cutting delivery times by 15% for US-based enterprise buyers.",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9_IgMAgwO53ENzeDxIaNUVqJ5SK3O1XVnW44gvfaOHZAEbV7u4E9hnR7iAXtaLTSf6Zez9XP_N7XGQKRWGYmjOqA76Q7lkeJiWerVd1FHxr1ykjj3SsSLDVJK6Sjf0Iax_ywypRFj354um41Ats6jelEqyFj3Bv8dUWGUJ3-Fi6ZPOmRZwU49krlK5mAKo864pfLcCFU5lFgOwHoXP6QQTYLtqBCa80RpDM39YnNcAWytGuS9kh7dWocLaQYlE4sMzKGIKOgF-T1y",
    tag: "Quality Assurance",
    title: "Beyond ISO: Our Proprietary Purity Protocol",
    desc: "A deep dive into the 14-point laboratory check every batch undergoes before containerization, ensuring zero contamination.",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD50C3B9OYHyKwyDRI-ikheKJRgTS4jqW56Xy3KersALXsG0Wofh-plfJ1KlXiIwy4gELt7r4C_0ntKBwH-BED-9u3DFtVI3fsgB1N9yLJ4qwmuDm7P9gLFyh8PBIhQoCKDcWQTzpc-HiLoqdge_mx9Neu1ruRfT-nSO_tPwsOxG1RtLKhdKiQcoflEX7t1yWFl4dpTDxWEMtvHeuqBHWcn_uSdadqyO6w1sFvNtz_cQ6fHHkh5wRckfJpX0mrOnOlDHkoz-stQO5nK",
    tag: "Sustainability",
    title: "Soil Restoration: The 2030 Harvestora Pledge",
    desc: "Investing in the next generation of topsoil across our 5,000-hectare farmer network through regenerative agricultural practices.",
  },
];

const tags = ["Organic Trade", "Supply Chain", "Indian Agriculture", "Curcumin Research"];

const officeLocations = [
  { city: "Mumbai (HQ), India", sub: "BKC Business District" },
  { city: "Dubai, UAE", sub: "DMCC Free Zone" },
  { city: "New York, USA", sub: "Madison Avenue" },
];

export default function ArticlePage() {
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
        .text-dropcap::first-letter {
          float: left;
          font-family: 'Sora', sans-serif;
          font-size: 4rem;
          line-height: 1;
          padding-right: 0.5rem;
          color: #00261a;
          font-weight: 700;
        }
        .chart-gradient-gold {
          background: linear-gradient(180deg, #775a19 0%, #ffdea5 100%);
        }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">

        

        <main className="max-w-[1280px] mx-auto px-16 py-12">

          {/* ── ARTICLE HERO ── */}
          <article className="relative mb-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-12 mb-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 mb-6 text-[#414944] text-[14px] font-semibold tracking-[0.05em] uppercase">
                  <a href="#" className="hover:text-[#00261a]">Insights</a>
                  <span className="material-symbols-outlined text-[#717974]" style={{ fontSize: 16 }}>chevron_right</span>
                  <a href="#" className="hover:text-[#00261a]">Market Reports</a>
                  <span className="material-symbols-outlined text-[#717974]" style={{ fontSize: 16 }}>chevron_right</span>
                  <span className="text-[#00261a] font-bold">The Turmeric Advantage</span>
                </nav>

                <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-6 max-w-4xl">
                  The Turmeric Advantage: Why Indian Organic Sourcing is Dominating the Global Market
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-[#414944] border-y border-[#c0c8c3]/30 py-4">
                  {[
                    { icon: "person", text: "Arjun Mehta, Head of Global Commodities" },
                    { icon: "schedule", text: "12 Min Read" },
                    { icon: "calendar_today", text: "October 24, 2024" },
                  ].map(({ icon, text }) => (
                    <div key={text} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#775a19]" style={{ fontSize: 20 }}>{icon}</span>
                      <span className="text-[14px] font-semibold tracking-[0.05em]">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Image */}
              <div className="md:col-span-12 overflow-hidden rounded-xl h-[500px] relative group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ6Ln9qauIGESQ7FIRK1EsgJCCpPvJfyTN2OpD7U3eW8g06gxyT-ZZ9IWr4vLYO3oMOP-G4k-EimQnzlxmOLP5IelCJP_zJ1jBHSYwOJcbaD6aymv-p-xcPnSjt_2sFdFZcdLcOwnVmQaNzpFwEpjm3rgL4-tS2iKyFcCD9nYK46dt-EtkOFLn7Xpz-03iu55pEZeYXqH6deZngMlJ3HS8JovTzp_XkbfAS_IzVTff8cOABTRr-kCD323DeKg9fD8t0h-i-_33RRue"
                  alt="Indian Organic Turmeric"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-6 left-6 glass-card px-4 py-2 rounded-[4px] text-[#00261a] text-[14px] font-semibold tracking-[0.05em] shadow-lg border border-white/50">
                  Featured: Harvestora Certified Curcuma Longa
                </div>
              </div>
            </div>
          </article>

          {/* ── TWO COLUMN LAYOUT ── */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

            {/* SIDEBAR */}
            <aside className="hidden md:block md:col-span-3">
              <div className="sticky top-28 space-y-12">
                <div>
                  <h4 className="text-[#00261a] mb-6 text-[18px] font-semibold uppercase tracking-widest border-b border-[#00261a]/10 pb-2">
                    Article Chapters
                  </h4>
                  <ul className="space-y-4 text-[#414944] text-[16px]">
                    <li className="flex items-center gap-2 text-[#00261a] font-bold border-l-2 border-[#775a19] pl-3">
                      <a href="#introduction">The Golden Shift</a>
                    </li>
                    {["Curcumin Concentration", "Sustainable Farming", "Export Trajectory"].map((c) => (
                      <li key={c} className="pl-4 hover:text-[#00261a] transition-colors">
                        <a href="#">{c}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sidebar CTA */}
                <div className="glass-card p-6 rounded-xl shadow-lg bg-white">
                  <span className="material-symbols-outlined text-[#775a19] mb-4 block" style={{ fontSize: 36 }}>verified</span>
                  <h4 className="text-[20px] font-semibold text-[#00261a] mb-2">Bulk Inquiries</h4>
                  <p className="text-[#414944] text-sm mb-6">Access tier-1 pricing for certified organic turmeric exports to USA, UAE, and Europe.</p>
                  <button className="w-full bg-[#00261a] text-white py-3 rounded-[4px] text-[14px] font-semibold tracking-[0.05em] hover:bg-[#0f3d2e] transition-all">
                    Inquire for Bulk Export
                  </button>
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <section className="md:col-span-9">
              <div className="space-y-8 text-[#414944] text-[18px] leading-[1.6]">

                {/* Drop cap intro */}
                <p className="text-dropcap leading-relaxed">
                  The global spice trade is undergoing a seismic transformation, driven by a growing consumer mandate for transparency, organic purity, and functional wellness. At the heart of this revolution is Indian Organic Turmeric (Curcuma longa). Long revered in traditional medicine, it has now become the cornerstone of the international nutraceutical and culinary industries.
                </p>

                {/* Curcumin section */}
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mt-12 mb-4" id="curcumin">
                  The Curcumin Content Advantage
                </h2>
                <p>
                  What distinguishes Indian organic sourcing from other global competitors is the unparalleled curcuminoid concentration. In regions like Meghalaya, the Lakadong variety boasts curcumin levels exceeding 7.5%, nearly double the global average. Harvestora Global's precision farming techniques ensure that these levels are maintained from soil to shipment.
                </p>

                {/* Stat cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  {[
                    { stat: "7.5%+", desc: "Typical Curcumin content in Harvestora Prime Sourcing, verified by third-party labs." },
                    { stat: "0%", desc: "Synthetic pesticide residue across all export batches, ensuring pure organic compliance." },
                  ].map(({ stat, desc }) => (
                    <div key={stat} className="bg-[#f3f4f3] p-8 rounded-xl border-l-4 border-[#775a19] shadow-sm">
                      <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-2">{stat}</h3>
                      <p className="text-[16px] leading-[1.6] text-[#414944]">{desc}</p>
                    </div>
                  ))}
                </div>

                {/* Farming section */}
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mt-12 mb-4" id="sustainability">
                  Regenerative Precision: Sustainable Farming
                </h2>
                <p>
                  Industrial precision meets organic vitality in our cultivation model. We leverage satellite-guided irrigation and soil nutrient mapping to ensure optimal growth without the need for chemical intervention. This "Industrial Organic" approach allows for scalability that was previously impossible in the organic sector.
                </p>

                <div className="relative rounded-xl overflow-hidden my-8 group shadow-xl">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZqmg_NZ82tsGqD0tiDczEOZAb9Ai-HNTlDOQo9EM4kxY0BuLUm4IETjXJovruV89ll2yGQfrsSSVkmP2U6AwkHZRhp3jsKCmQZpxgMIgOT_AaNvTmg70FWZjMDkC7xQiU8HSA7281G_mjQIjQkbJS4qzTFTKzUygKmjb3_nbT7e06lc3T_I6SAkUqmdJw0mu5VeVkFfzEODp7WdB8WhffJeqynzChqP_npJV0aZyKRFWoZ1q8sA_2lR9"
                    alt="Sustainable Farming"
                    className="w-full h-96 object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Export section */}
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mt-12 mb-4" id="exports">
                  Export Dynamics: USA &amp; UAE
                </h2>
                <p>
                  The demand trajectory for certified Indian turmeric has seen a vertical climb in the Western and Middle Eastern markets. With tightened FDA regulations and UAE's focus on food security, Harvestora's rigorous certification process (ISO 22000, USDA Organic) has made us the preferred partner for large-scale enterprise buyers.
                </p>

                {/* Bar Chart */}
                <div className="glass-card p-8 rounded-xl my-12 shadow-sm border border-[#c0c8c3]/30 bg-white">
                  <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                      <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-2">Export Growth Trajectory (2020-2024)</h3>
                      <p className="text-sm text-[#414944]">Annual growth in metric tons to key global trade hubs.</p>
                    </div>
                    <div className="flex gap-6 mt-4">
                      <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#00261a] rounded-sm" /><span className="text-xs font-semibold tracking-[0.05em]">USA</span></div>
                      <div className="flex items-center gap-2"><div className="w-4 h-4 bg-[#775a19] rounded-sm" /><span className="text-xs font-semibold tracking-[0.05em]">UAE</span></div>
                    </div>
                  </div>
                  <div className="flex items-end justify-between h-64 gap-2 md:gap-12 px-4">
                    {chartBars.map(({ year, usa, uae, bold }) => (
                      <div key={year} className="flex-1 flex flex-col justify-end items-center group relative">
                        <div
                          className="w-full rounded-t-sm transition-all group-hover:opacity-90"
                          style={{ height: `${usa}%`, background: bold ? "#00261a" : "#e1e3e2" }}
                        />
                        <div
                          className="w-full rounded-t-sm transition-all opacity-80 -mt-10"
                          style={{ height: `${uae}%`, background: bold ? "#775a19" : "linear-gradient(180deg, #775a19 0%, #ffdea5 100%)" }}
                        />
                        <span className={`text-[10px] mt-3 font-semibold tracking-[0.05em] text-[#414944] ${bold ? "font-bold" : ""}`}>{year}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Blockquote */}
                <blockquote className="border-l-4 border-[#775a19] pl-8 py-6 my-12 italic text-[#00261a] text-[24px] leading-relaxed font-semibold bg-[#f3f4f3]/50">
                  "The transition from generic commodity to specialized, high-curcumin organic turmeric is not just a trend—it's the new standard for the global pharmaceutical sector."
                </blockquote>

                {/* Tags */}
                <div className="mt-20 pt-8 border-t border-[#c0c8c3]/30">
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="text-[#00261a] font-semibold tracking-wider text-xs uppercase">Knowledge Tags:</span>
                    {tags.map((tag) => (
                      <a key={tag} href="#" className="bg-[#edeeed] px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.05em] hover:bg-[#00261a] hover:text-white transition-colors">
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* ── RELATED READING ── */}
          <section className="mt-32">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
              <div>
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a]">
                  More Insights from the Harvestora Trade Desk
                </h2>
                <p className="text-[#414944] mt-2 text-[16px]">Expert analysis on global commodity shifts and sustainable trade.</p>
              </div>
              <a href="#" className="text-[#775a19] text-[14px] font-semibold tracking-[0.05em] hover:translate-x-1 transition-transform inline-flex items-center gap-2 group">
                View All Insights <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map(({ img, tag, title, desc }) => (
                <div key={title} className="flex flex-col bg-white rounded-xl overflow-hidden group cursor-pointer border border-[#c0c8c3]/30 hover:border-[#775a19] transition-all duration-300 shadow-sm hover:shadow-xl">
                  <div className="h-56 overflow-hidden">
                    <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <span className="text-[#775a19] text-[14px] font-semibold tracking-widest mb-3 block uppercase">{tag}</span>
                    <h3 className="text-[18px] font-semibold text-[#00261a] mb-4 group-hover:text-[#775a19] transition-colors">{title}</h3>
                    <p className="text-sm text-[#414944] line-clamp-3 mb-6 text-[16px] leading-[1.6]">{desc}</p>
                    <div className="mt-auto flex items-center text-[#00261a] text-[14px] font-semibold tracking-wider uppercase gap-2">
                      Read More <span className="material-symbols-outlined" style={{ fontSize: 18 }}>east</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* ── FOOTER ── */}
        <footer className="bg-[#00261a] text-white mt-32 pt-24 pb-12">
          <div className="max-w-[1280px] mx-auto px-16">

            {/* Final CTA */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-center">
              <div className="lg:col-span-7">
                <h2 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6">
                  Ready to scale your organic sourcing?
                </h2>
                <p className="text-[#beedd7]/80 text-[18px] leading-[1.6] max-w-2xl">
                  Connect with our trade specialists to discuss bulk export logistics, custom certification requirements, and guaranteed supply contracts tailored for your enterprise.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
                <button className="flex-1 bg-[#ffdea5] text-[#261900] py-5 rounded-[4px] text-[14px] font-semibold tracking-[0.05em] hover:bg-[#775a19] hover:text-white transition-all shadow-lg text-center text-lg">
                  Contact Trade Desk
                </button>
                <button className="flex-1 border border-[#a2d1bb] text-[#a2d1bb] py-5 rounded-[4px] text-[14px] font-semibold tracking-[0.05em] hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-lg">
                  <span className="material-symbols-outlined">download</span> Download Export Catalog
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/10 pt-16">
              <div>
                <div className="text-[24px] font-bold text-[#775a19] mb-8" style={{ fontFamily: "Sora,sans-serif" }}>Harvestora Global</div>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs">
                  Bridging organic agriculture with industrial precision for global trade markets. Authoritative, sustainable, and reliable sourcing at scale.
                </p>
              </div>
              <div>
                <h4 className="text-[#beedd7] text-xs font-semibold tracking-widest uppercase mb-8">Company</h4>
                <ul className="space-y-4 text-white/70 text-[16px]">
                  {["About Harvestora", "Global Offices", "Quality Assurance", "Career Portal"].map((l) => (
                    <li key={l}><a href="#" className="hover:text-[#ffdea5] transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#beedd7] text-xs font-semibold tracking-widest uppercase mb-8">Compliance</h4>
                <ul className="space-y-4 text-white/70 text-[16px]">
                  {["Trade Compliance", "Sustainability Report", "Certification Registry", "Privacy Policy"].map((l) => (
                    <li key={l}><a href="#" className="hover:text-[#ffdea5] transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#beedd7] text-xs font-semibold tracking-widest uppercase mb-8">Global Presence</h4>
                <div className="text-white/70 text-sm space-y-5">
                  {officeLocations.map(({ city, sub }) => (
                    <p key={city} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#775a19] mt-0.5" style={{ fontSize: 20 }}>location_on</span>
                      <span>{city}<br /><span className="text-xs opacity-60">{sub}</span></span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 text-xs">
              <p>© 2024 Harvestora Global Enterprise. All rights reserved. Industrial Organic Precision.</p>
              <div className="flex gap-8">
                {["LinkedIn", "Twitter", "Instagram"].map((s) => (
                  <a key={s} href="#" className="hover:text-white transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
