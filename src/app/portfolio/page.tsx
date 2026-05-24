"use client";
import { useState } from "react";

const products = [
  {
    id: 1,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeZYVp_stAgJzoTqeMh0Dlo0c-TCvpoWvd8hdte4OjD7-EkXrmpMlLBUY3DsCoGkc097S61EJHMMBx_0RkDvwyKR49wucaw2iJlZZ8eUbbx0qFrJVqvq0d6b6v7tSRrCbmtFvNScpuJG1D4eTPLcSaSrlxUuCoXqrZydwosnxs1kMFtddjKrRvfOn1KZWs8q43BZgLsritJIXnW3xo1y6WhJ8jSuhLGJBQYb2_RimHgu6Xu3-IVDWZggaDk1G5-8GomboRBfVjayFu",
    badge: "Export Grade",
    name: "Organic Turmeric",
    grade: "A+ Grade",
    sub: "(Alleppey Finger)",
    origin: "Munnar, India",
    packaging: "25kg HDPE Lined Bags",
    category: "Organic Spices",
  },
  {
    id: 2,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbXFkCnhRNl9KXiYHrI5HHMB_VPN0h_7fNSC3DZpcQE7qDnXRir4iTbZH8AgdHBe2VB_x9ldYlRuGgprciynh9m71deW9gvxFfiTzBQuKtpzvwOn_suow_OV8IaSIPNWLmY6r9mvRFBKvk9sX1-7Ly0WzyZEnAX5bFCXXEHsYTh8aF3zgNHRJe-3hrJgfsGWqrWtu3UoxFIQUus59YKL9bni_VcGX1Mm_q-UZYgzSF2h5VBSXkgIReSoB-Ld_HRjh5H8uvOBNeiSGW",
    badge: "Export Grade",
    name: "Fresh Red Onions",
    grade: "Premium",
    sub: "45mm - 55mm Size",
    origin: "Nashik, India",
    packaging: "Mesh Bags (5kg/10kg)",
    category: "Fresh Vegetables",
  },
  {
    id: 3,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBi3uMEZunU2KFNVrebA7KErNbI9GgQekFv2-Gzx7iBxIvkRXWiWqrwRh7EIragavmdzANq9AquG_Aay-2vIXfWcqY4IH4_ZqvRFBSTPtscXHLxsRVsA9VZzVWUm-kDLdA-OhbHSzQ53oGpYTrlKXl4ufAmobHyML08-eUocFOO_d2BuIdmSd85tV4av1nYGYekkQARCsrL9XzbOZWVdJiP6XWuK08V_YqDJR7F_ahZyi4pxAqvbKp0bAT1XS-zATRAyPO631OVXjAJ",
    badge: "Export Grade",
    name: "G4 Green Chillies",
    grade: "High Heat",
    sub: "8cm+ Stemless Option",
    origin: "Guntur Region",
    packaging: "CFB Air-Ventilated Boxes",
    category: "Fresh Vegetables",
  },
  {
    id: 4,
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsIw1tu_aBbDU48s3xmwl-KKHDLT_z5UmQDQTOeqpXjvKitPf1sqpV-WlnjhT738bp4Y9XZxgJjfAiljcyA2Qh7ggm5yd1V4E-5Gg0ngWZMjky6szqklmTaLUe9QfxSXMp270kEfIQ3_YZ3aiRLEum49mb_vbQRzVlqQkN8sq_Fq3AdZ8RqAoukHU58nbgGqOKQZ8xZhL9GDfU33ttoCIn9r0kq-OqKgz7MwTEf4_P2FXkU3-x2E3DON_ic88A6cIBdCC188NIhhhP",
    badge: "Export Grade",
    name: "Basmati Rice",
    grade: "Aged",
    sub: "1121 Sella Grade",
    origin: "Punjab Plains",
    packaging: "50kg Non-Woven Bags",
    category: "Agricultural Commodities",
  },
];

const filters = ["All Portfolio", "Organic Spices", "Fresh Vegetables", "Agricultural Commodities"];

const certifications = [
  { icon: "verified", label: "APEDA Certified" },
  { icon: "shield", label: "FSSAI Compliant" },
  { icon: "eco", label: "Organic NPOP" },
  { icon: "fact_check", label: "SGS Tested" },
  { icon: "language", label: "ISO 22000" },
];

export default function CommoditiesPage() {
  const [activeFilter, setActiveFilter] = useState("All Portfolio");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchFilter = activeFilter === "All Portfolio" || p.category === activeFilter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;600;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
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
        .gold-glow:hover {
          box-shadow: 0px 4px 15px rgba(254, 212, 136, 0.3);
        }
        body { font-family: 'Manrope', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">

        {/* ── NAVBAR ── */}
        <nav className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm h-20">
          <div className="max-w-[1280px] mx-auto px-16 flex justify-between items-center h-full">
            <div className="flex items-center gap-6">
              <span className="text-[24px] leading-[1.3] font-bold text-[#00261a] tracking-tight" style={{ fontFamily: "Sora, sans-serif" }}>
                Harvestora Global
              </span>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-[#00261a] border-b-2 border-[#775a19] font-bold pb-1 text-[16px]">Commodities</a>
                <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Sustainability</a>
                <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Global Network</a>
                <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Supply Chain</a>
                <a href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">Certifications</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden lg:block text-[#414944] text-[14px] font-semibold px-4 py-2 hover:bg-[#00261a]/5 transition-all">
                Investor Relations
              </button>
              <button className="bg-[#00261a] text-white px-6 py-3 text-[14px] font-semibold tracking-[0.05em] hover:border-b-2 hover:border-[#ffdea5] transition-all duration-300">
                Request Quote
              </button>
            </div>
          </div>
        </nav>

        <main className="max-w-[1280px] mx-auto px-16 py-16">

          {/* ── HERO & FILTERS ── */}
          <header className="mb-16">
            <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-8" style={{ fontFamily: "Sora, sans-serif" }}>
              Global Commodities Portfolio
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#c0c8c3] pb-8">
              {/* Filter Pills */}
              <div className="flex flex-wrap gap-4">
                {filters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-6 py-2 text-[14px] font-semibold tracking-[0.05em] rounded-full transition-colors ${
                      activeFilter === f
                        ? "bg-[#00261a] text-white shadow-sm"
                        : "glass-card text-[#00261a] hover:bg-[#00261a]/5"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Search + Sort */}
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#717974]">search</span>
                  <input
                    type="text"
                    placeholder="Search specifications..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/50 border border-[#c0c8c3] focus:ring-2 focus:ring-[#fed488] focus:border-[#00261a] outline-none transition-all text-[16px]"
                  />
                </div>
                <div className="relative">
                  <select className="appearance-none bg-white border border-[#c0c8c3] px-6 py-2 pr-10 text-[14px] font-semibold tracking-[0.05em] focus:ring-2 focus:ring-[#fed488] outline-none">
                    <option>Sort by Demand</option>
                    <option>Global Popularity</option>
                    <option>Harvest Freshness</option>
                    <option>Bulk Availability</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#717974]">expand_more</span>
                </div>
              </div>
            </div>
          </header>

          {/* ── PRODUCT GRID ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="glass-card flex flex-col group overflow-hidden transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute top-4 left-4 bg-[#fed488] text-[#785a1a] text-[14px] font-semibold tracking-[0.05em] px-3 py-1 rounded-sm">
                    {product.badge}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a]" style={{ fontFamily: "Sora, sans-serif" }}>
                      {product.name}
                    </h3>
                    <span className="text-[14px] font-semibold tracking-[0.05em] text-[#775a19]">{product.grade}</span>
                  </div>
                  <p className="text-[#414944] text-[14px] font-semibold tracking-[0.05em] mb-4">{product.sub}</p>
                  <div className="space-y-2 mb-8 flex-grow">
                    <div className="flex items-center gap-2 text-[#717974]">
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>location_on</span>
                      <span className="text-[14px] font-semibold tracking-[0.05em]">{product.origin}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#717974]">
                      <span className="material-symbols-outlined" style={{ fontSize: 18 }}>package_2</span>
                      <span className="text-[14px] font-semibold tracking-[0.05em]">{product.packaging}</span>
                    </div>
                  </div>
                  <button className="gold-glow w-full py-3 border border-[#00261a] text-[#00261a] text-[14px] font-semibold tracking-[0.05em] transition-all flex items-center justify-center gap-2">
                    View Tech Specs
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-4 text-center py-24 text-[#414944] text-[18px]">
                No products found for &quot;{search}&quot;
              </div>
            )}
          </div>

          {/* ── CERTIFICATION BAR ── */}
          <div className="border-y border-[#c0c8c3]/30 py-12 mb-24">
            <div className="flex flex-wrap justify-around items-center gap-6 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              {certifications.map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-[#e7e8e7] rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#00261a]" style={{ fontSize: 32 }}>{icon}</span>
                  </div>
                  <span className="text-[14px] font-semibold tracking-[0.05em] text-[#00261a]">{label}</span>
                </div>
              ))}
            </div>
          </div>

        </main>

        {/* ── FOOTER ── */}
        <footer className="w-full pt-16 pb-8 bg-[#00261a] text-white border-t border-[#c0c8c3]">
          <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <span className="text-[24px] font-bold text-[#775a19] mb-4 block" style={{ fontFamily: "Sora, sans-serif" }}>
                Harvestora Global
              </span>
              <p className="text-white/70 text-[16px] leading-[1.6] pr-8">
                Leading the global exchange of premium organic commodities through sustainable precision and industrial excellence.
              </p>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold tracking-[0.05em] text-[#ffdea5] mb-6">Operations</h4>
              <ul className="space-y-4">
                {["Global Offices", "Quality Assurance", "Trade Compliance"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-[#ffdea5] transition-colors hover:translate-x-1 inline-block text-[16px]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold tracking-[0.05em] text-[#ffdea5] mb-6">Transparency</h4>
              <ul className="space-y-4">
                {["Privacy Policy", "Sustainability Report", "Career Portal"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/70 hover:text-[#ffdea5] transition-colors hover:translate-x-1 inline-block text-[16px]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[14px] font-semibold tracking-[0.05em] text-[#ffdea5] mb-6">Newsletter</h4>
              <p className="text-white/70 mb-4 text-[16px] leading-[1.6]">Trade insights and harvest reports.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Business Email"
                  className="bg-white/10 border border-white/20 text-white p-2 flex-grow focus:outline-none focus:ring-1 focus:ring-[#ffdea5] text-[16px]"
                />
                <button className="bg-[#ffdea5] text-[#261900] px-4 text-[14px] font-semibold tracking-[0.05em]">Join</button>
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto px-16 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-[12px] font-semibold tracking-[0.05em]">
              © 2024 Harvestora Global Enterprise. All rights reserved. Industrial Organic Precision.
            </p>
            <div className="flex gap-6">
              {["public", "mail", "description"].map((icon) => (
                <span key={icon} className="material-symbols-outlined cursor-pointer hover:text-[#ffdea5] transition-colors" style={{ fontSize: 20 }}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
