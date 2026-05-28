"use client";
import { useState } from "react";

const categories = ["All Articles", "Spice Export Trends", "Organic Farming", "Logistics & Trade", "Market Analysis"];

const articles = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7pzyaakp1epT1zBu8CImCNc5z5wlM7BqX4aEdvuSQZchqysRHI-ZOlGeb20Lls9bFbPBJXTB_dJr4EIY1wdofpNoTPEsFUKhxGG-G9ndOZVbFzn0ajp01LUg4IwEiVwiQg32M-pZmfzBPquh4dxCssOS_vIKQ1Y8SaDP37DRzFOup-moAFmszEm6ml87JTaFvn3Fqnt0uAwo98TsMcgBu-mf_47ZKFflumUdho85MvJ7DK-7uw1-klm5JgMoTQn6PlRsRBRHcTZUJ",
    tag: "Sustainability", date: "Sep 18, 2024", read: "8 Min Read",
    title: "Regenerative Practices in Large-Scale Export Agriculture",
    desc: "How we bridge the gap between small-plot organic integrity and the demands of global industrial food chains.",
    category: "Organic Farming",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1gyzKYbiiAOlt27v9NsbGhNM1psKUduty7-OMlup-TOdx28GM7Fqkr8Otc8r-bqqlUOi0qq911o2tbavL_-3kRXnFbgL_RYOZhPsKUZ1A49NpMe1Enqj87WZQpuk9MckK1K1sf317s-BJb0IUFe6SxIPSt-rtrP8olZcrAIHJPwR7dNwjOYcUDBqgP58CNx6F4D-1tJyJQkHysJ8oWvYTPHZ8sYQ_yZb9Gc1AdLSMThdTsr2f6tyHwY3HRv2bS6TG3iLS9c1UYhtV",
    tag: "Logistics", date: "Sep 12, 2024", read: "15 Min Read",
    title: "Navigating Trade Compliance in the Post-Pandemic Era",
    desc: "Strategic shifts in maritime laws and how they impact the transcontinental organic trade routes of 2025.",
    category: "Logistics & Trade",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVOJDCC-bQnClEtSXY6W7Abi-JObeOwrRbulNG8HDJQoop4hDTJ97MZJn__I-eYwyNqmw8ETZB18Nr3Ve0ERhR52FxlnOWnVOrNk1Rh6220jsRAWV_1tmqowkIEPYVp0ENjy8A68SkmehqWLsvLnbIRavUPOaqAIpzd7oNTjWIh-_1uB1QFqAewLNR_oN69t62otZ7V6Q7_icfA2EVY6scKDtbfse9Q03pr_xUIErx86JoPT0rBvkphUl_2dCqfErdytLOuCmkxpwV",
    tag: "Market Analysis", date: "Aug 30, 2024", read: "6 Min Read",
    title: "The Rising Demand for Traceability in Exotic Spices",
    desc: "Why transparency has become the ultimate currency for high-end organic retailers in Europe and North America.",
    category: "Market Analysis",
  },
];

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [search, setSearch] = useState("");

  const filtered = articles.filter((a) => {
    const matchCat = activeCategory === "All Articles" || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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
        .image-overlay-gradient {
          background: linear-gradient(180deg, rgba(0,38,26,0) 0%, rgba(0,38,26,0.8) 100%);
        }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">

        {/* ── NAVBAR ── */}
        <header className="sticky top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
          <div className="max-w-[1280px] mx-auto px-16 flex justify-between items-center h-20">
            <div className="text-[24px] font-bold text-[#00261a] tracking-tight" style={{ fontFamily: "Sora,sans-serif" }}>
              Harvestora Global
            </div>
            <nav className="hidden md:flex gap-8">
              {["Commodities", "Sustainability", "Global Network", "Supply Chain", "Certifications"].map((l) => (
                <a key={l} href="#" className="text-[#414944] hover:text-[#00261a] transition-colors text-[16px]">{l}</a>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <button className="px-6 py-2 text-[14px] font-semibold tracking-[0.05em] bg-[#00261a] text-white border-b-2 border-[#775a19] hover:bg-[#00261a]/90 transition-all">
                Request Quote
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-[1280px] mx-auto px-16 py-12">

          {/* ── HERO ── */}
          <section className="mb-16">
            <div className="max-w-3xl">
              <span className="text-[14px] font-semibold tracking-[0.2em] text-[#775a19] uppercase mb-4 block">
                Thought Leadership
              </span>
              <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-6">
                Global Export Insights &amp; Organic Trends
              </h1>
              <p className="text-[18px] leading-[1.6] text-[#414944] max-w-2xl">
                Analyzing the intersection of traditional agricultural wisdom and modern industrial supply chains. Expert perspectives on the future of organic trade.
              </p>
            </div>
          </section>

          {/* ── FEATURED POST ── */}
          <section className="mb-24">
            <div className="relative w-full h-[600px] overflow-hidden rounded-xl group cursor-pointer shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC-2cHqBFxbmdP6rgx2rb7bngG5GDBk_v8oqHuP3u2uq3YsXDxMUA4P2-YvGOPIVMIDczCuWbDbYJyaCAoTN-EDU_PrNbI9kDcR8wJKZ0zQn7nl03rWUBtyB2xnigRnUBho92jrMEQUnaVknPxD7gOubSG5dy30WA8_GlU8FmOA-pQxQpkspYUvTyd0TlF6CR8kgyFpBR9gsug9d8qRxn5z8pQnnqXDuLz3lwpR43uMApxcAVvDcwbZTrb9qtnJPzIMD-G_LuanQhA"
                alt="Turmeric roots"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 image-overlay-gradient" />
              <div className="absolute bottom-0 left-0 p-12 w-full md:w-2/3">
                <span className="inline-block bg-[#775a19] text-white px-3 py-1 text-[14px] font-semibold tracking-[0.05em] mb-6">
                  Featured Analysis
                </span>
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-white mb-4">
                  The Turmeric Advantage: Why Indian Organic Sourcing is Dominating the Global Market
                </h2>
                <p className="text-white/80 text-[18px] leading-[1.6] mb-8 line-clamp-2">
                  India's rich biodiversity and generational farming techniques are setting a new standard for high-curcumin organic turmeric exports.
                </p>
                <div className="flex items-center gap-6 text-white/90 text-[14px] font-semibold tracking-[0.05em]">
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ fontSize: 18 }}>schedule</span> 12 min read</span>
                  <span className="flex items-center gap-2"><span className="material-symbols-outlined" style={{ fontSize: 18 }}>calendar_today</span> Oct 24, 2024</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── FILTER & SEARCH ── */}
          <section className="mb-12 border-b border-[#c0c8c3] pb-8 flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-[14px] font-semibold tracking-[0.05em] transition-all ${
                    activeCategory === cat
                      ? "bg-[#00261a] text-white"
                      : "glass-card hover:bg-[#ffdea5] hover:text-[#261900]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search insights..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-[#f3f4f3] border-none focus:ring-2 focus:ring-[#775a19] py-3 px-4 rounded-[4px] text-[16px] outline-none"
              />
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#414944]">search</span>
            </div>
          </section>

          {/* ── BLOG GRID ── */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {filtered.map(({ img, tag, date, read, title, desc }) => (
              <article key={title} className="glass-card flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden rounded-xl">
                <div className="h-64 overflow-hidden relative">
                  <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur px-3 py-1 text-[14px] font-semibold tracking-[0.05em] text-[#00261a]">{tag}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4 text-[12px] font-semibold tracking-wider text-[#414944] uppercase">
                    <span>{date}</span><span>•</span><span>{read}</span>
                  </div>
                  <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-4 leading-snug group-hover:text-[#775a19] transition-colors">
                    {title}
                  </h3>
                  <p className="text-[16px] leading-[1.6] text-[#414944] mb-8 line-clamp-3">{desc}</p>
                  <div className="mt-auto pt-6 border-t border-[#c0c8c3] flex items-center justify-between">
                    <span className="text-[14px] font-semibold tracking-[0.05em] text-[#00261a] flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Insight <span className="material-symbols-outlined">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}

            {filtered.length === 0 && (
              <div className="col-span-3 text-center py-24 text-[#414944] text-[18px]">
                No articles found for &quot;{search}&quot;
              </div>
            )}
          </section>

          {/* ── NEWSLETTER ── */}
          <section className="mb-24">
            <div className="bg-[#0f3d2e] rounded-xl p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#775a19]/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00261a]/20 rounded-full blur-3xl -ml-32 -mb-32" />
              <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <span className="text-[14px] font-semibold tracking-widest text-[#7ba894] uppercase mb-4 block">
                  Global Newsletter
                </span>
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-white mb-6">
                  Subscribe to Trade Insights
                </h2>
                <p className="text-[18px] leading-[1.6] text-white/70 mb-10">
                  Join 5,000+ industry leaders who receive our monthly digest on organic market movements and export strategy.
                </p>
                <div className="flex flex-col md:flex-row gap-4 w-full max-w-lg">
                  <input
                    type="email"
                    placeholder="Your corporate email"
                    className="flex-grow bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-6 py-4 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#775a19] transition-all text-[16px]"
                  />
                  <button className="bg-[#775a19] text-white px-8 py-4 text-[14px] font-semibold tracking-[0.05em] border-b-2 border-[#5d4201] hover:bg-[#ffdea5] hover:text-[#261900] transition-all duration-300">
                    Join Dispatch
                  </button>
                </div>
                <p className="mt-6 text-white/40 text-[12px] font-semibold tracking-[0.05em]">
                  We respect your data. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </section>

        </main>

        {/* ── FOOTER ── */}
        <footer className="bg-[#00261a] text-white w-full pt-16 pb-8 border-t border-[#c0c8c3]">
          <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div>
              <div className="text-[24px] font-bold text-[#775a19] mb-6" style={{ fontFamily: "Sora,sans-serif" }}>
                Harvestora Global
              </div>
              <p className="text-[16px] leading-[1.6] text-white/70 mb-6">
                Pioneering the future of organic exports through industrial precision and ancestral wisdom.
              </p>
            </div>
            <div>
              <h4 className="text-white text-[14px] font-semibold tracking-widest uppercase mb-6">Resources</h4>
              <ul className="flex flex-col gap-4">
                {["Global Offices", "Quality Assurance", "Trade Compliance"].map((l) => (
                  <li key={l}><a href="#" className="text-white/70 hover:text-[#ffdea5] transition-colors text-[16px]">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[14px] font-semibold tracking-widest uppercase mb-6">Corporate</h4>
              <ul className="flex flex-col gap-4">
                {["Privacy Policy", "Sustainability Report", "Career Portal"].map((l) => (
                  <li key={l}><a href="#" className="text-white/70 hover:text-[#ffdea5] transition-colors text-[16px]">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white text-[14px] font-semibold tracking-widest uppercase mb-6">Connect</h4>
              <div className="flex gap-4">
                {["language", "hub"].map((icon) => (
                  <a key={icon} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#775a19] transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto px-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-[16px] text-center md:text-left">
              © 2024 Harvestora Global Enterprise. All rights reserved. Industrial Organic Precision.
            </p>
            <div className="flex gap-8">
              {["Terms of Service", "Cookies Policy"].map((l) => (
                <a key={l} href="#" className="text-[14px] font-semibold tracking-[0.05em] text-white/50 hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
