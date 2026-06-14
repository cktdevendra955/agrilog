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
 
        <main className=" mx-auto px-16 py-12">

          {/* ── HERO ── */}
          <section className="mb-16">
  <div className="max-w-4xl relative">
    
    {/* Top Label */}
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-[2px] bg-[#775a19]" />
      <span className="text-[13px] font-semibold tracking-[0.25em] text-[#775a19] uppercase">
        Thought Leadership
      </span>
    </div>

    {/* Heading */}
    <h1
      className="text-[42px] md:text-[56px] leading-[1.05] tracking-[-0.03em] font-bold text-[#00261a] mb-8"
      style={{ fontFamily: "Sora, sans-serif" }}
    >
      Global Export Insights
      <span className="block text-[#775a19]">
        & Organic Trends
      </span>
    </h1>

    {/* Description */}
    <p className="text-[18px] leading-[1.8] text-[#414944] max-w-3xl">
      Analyzing the intersection of traditional agricultural wisdom and
      next-generation industrial supply chains. Expert perspectives on
      sustainable exports, organic commodities, and the future of global trade.
    </p>

    {/* Bottom Meta */}
    <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-[#c0c8c3]/30">
      
      <div className="flex items-center gap-3 group">
        <div className="w-12 h-12 rounded-full bg-[#edeeed] flex items-center justify-center group-hover:bg-[#00261a] transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#775a19] group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-1.657 0-3 1.343-3 3v1H8a2 2 0 00-2 2v2h12v-2a2 2 0 00-2-2h-1v-1c0-1.657-1.343-3-3-3z"
            />
          </svg>
        </div>

        <div>
          <p className="text-[12px] uppercase tracking-widest text-[#717974] font-semibold">
            Articles
          </p>
          <p className="text-[#00261a] font-bold text-[18px]">
            120+
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 group">
        <div className="w-12 h-12 rounded-full bg-[#edeeed] flex items-center justify-center group-hover:bg-[#00261a] transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#775a19] group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5h18M9 3v2m6-2v2m-9 4h12l-1 11H7L6 9z"
            />
          </svg>
        </div>

        <div>
          <p className="text-[12px] uppercase tracking-widest text-[#717974] font-semibold">
            Weekly Reports
          </p>
          <p className="text-[#00261a] font-bold text-[18px]">
            Every Monday
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 group">
        <div className="w-12 h-12 rounded-full bg-[#edeeed] flex items-center justify-center group-hover:bg-[#00261a] transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#775a19] group-hover:text-white transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20h9"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4h9"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 9h16"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 15h16"
            />
          </svg>
        </div>

        <div>
          <p className="text-[12px] uppercase tracking-widest text-[#717974] font-semibold">
            Markets Covered
          </p>
          <p className="text-[#00261a] font-bold text-[18px]">
            USA • UAE • EU
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* ── FEATURED POST ── */}
          <section className="mb-24">
  <div className="relative w-full h-[650px] overflow-hidden rounded-[28px] group cursor-pointer shadow-2xl">

    {/* Background Image */}
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC-2cHqBFxbmdP6rgx2rb7bngG5GDBk_v8oqHuP3u2uq3YsXDxMUA4P2-YvGOPIVMIDczCuWbDbYJyaCAoTN-EDU_PrNbI9kDcR8wJKZ0zQn7nl03rWUBtyB2xnigRnUBho92jrMEQUnaVknPxD7gOubSG5dy30WA8_GlU8FmOA-pQxQpkspYUvTyd0TlF6CR8kgyFpBR9gsug9d8qRxn5z8pQnnqXDuLz3lwpR43uMApxcAVvDcwbZTrb9qtnJPzIMD-G_LuanQhA"
      alt="Turmeric roots"
      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#00140d]/95 via-[#00140d]/45 to-transparent" />

    {/* Floating Top Badge */}
    <div className="absolute top-8 left-8 z-20">
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full shadow-lg">
        
        <div className="w-10 h-10 rounded-full bg-[#775a19] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M12 18h.01"
            />
          </svg>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/70 font-semibold">
            Featured Analysis
          </p>
          <p className="text-white text-[14px] font-bold">
            Organic Trade Report
          </p>
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 w-full p-8 md:p-14 z-10">

      {/* Category */}
      <div className="inline-flex items-center gap-2 bg-[#775a19]/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-[12px] font-semibold tracking-[0.15em] uppercase mb-6 shadow-lg">
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17v-6h13v6M9 5v6h13V5M3 5h.01M3 11h.01M3 17h.01"
          />
        </svg>

        Featured Analysis
      </div>

      {/* Heading */}
      <h2
        className="text-[34px] md:text-[52px] leading-[1.05] tracking-[-0.03em] font-bold text-white mb-6 max-w-5xl"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        The Turmeric Advantage:
        <span className="block text-[#ffdea5]">
          Why Indian Organic Sourcing Leads Global Markets
        </span>
      </h2>

      {/* Description */}
      <p className="text-white/80 text-[18px] md:text-[20px] leading-[1.8] max-w-3xl mb-10">
        India's biodiversity, regenerative farming systems, and
        high-curcumin turmeric varieties are redefining the future
        of premium organic exports worldwide.
      </p>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-white/85">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
              </svg>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-widest text-white/60">
                Read Time
              </p>
              <p className="text-[15px] font-semibold">
                12 Min Read
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-widest text-white/60">
                Published
              </p>
              <p className="text-[15px] font-semibold">
                Oct 24, 2024
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="group inline-flex items-center gap-3 w-fit bg-white text-[#00261a] px-7 py-4 rounded-full text-[14px] font-semibold tracking-[0.08em] uppercase hover:bg-[#ffdea5] transition-all duration-300 shadow-xl">
          
          Read Full Report

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

          {/* ── FILTER & SEARCH ── */}
          <section className="mb-16 border-b border-[#c0c8c3]/40 pb-10">
  
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

    {/* Categories */}
    <div className="flex flex-wrap gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`group relative overflow-hidden px-6 py-3 rounded-full text-[13px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 border ${
            activeCategory === cat
              ? "bg-[#00261a] text-white border-[#00261a] shadow-lg"
              : "bg-white text-[#414944] border-[#c0c8c3]/40 hover:border-[#775a19] hover:text-[#00261a] hover:-translate-y-0.5"
          }`}
        >
          {/* Hover Glow */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#775a19]/0 via-[#775a19]/10 to-[#775a19]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Content */}
          <span className="relative z-10 flex items-center gap-2">
            
            {/* Active Dot */}
            {activeCategory === cat && (
              <span className="w-2 h-2 rounded-full bg-[#ffdea5]" />
            )}

            {cat}
          </span>
        </button>
      ))}
    </div>

    {/* Search */}
    <div className="relative w-full lg:w-[380px] group">

      {/* Glow Border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#775a19]/20 via-[#00261a]/10 to-[#775a19]/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />

      <div className="relative flex items-center bg-white border border-[#d8dbd9] rounded-2xl overflow-hidden shadow-sm group-focus-within:shadow-lg transition-all duration-300">

        {/* Icon */}
        <div className="pl-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[#775a19]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35"
            />
            <circle cx="11" cy="11" r="6" />
          </svg>
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Search export insights..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-transparent px-4 py-4 text-[15px] text-[#00261a] placeholder:text-[#717974] outline-none"
        />

        {/* Shortcut Hint */}
        <div className="hidden md:flex items-center gap-1 pr-4">
          <kbd className="px-2 py-1 text-[11px] rounded-md border border-[#c0c8c3] bg-[#f8faf9] text-[#717974] font-semibold">
            ⌘
          </kbd>
          <kbd className="px-2 py-1 text-[11px] rounded-md border border-[#c0c8c3] bg-[#f8faf9] text-[#717974] font-semibold">
            K
          </kbd>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* ── BLOG GRID ── */}
<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-28">
  {filtered.map(({ img, tag, date, read, title, desc }, index) => (
    
    <article
      key={title}
      className="group relative flex flex-col overflow-hidden rounded-[28px] bg-white border border-[#dfe3e1] hover:border-[#775a19]/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]"
    >

      {/* Top Gradient Glow */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#775a19] via-[#ffdea5] to-[#775a19] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />

      {/* Image */}
      <div className="relative h-72 overflow-hidden">

        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-80" />

        {/* Category Badge */}
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-[#00261a] shadow-lg">
            
            <span className="w-2 h-2 rounded-full bg-[#775a19]" />
            {tag}
          </span>
        </div>

        {/* Floating Number */}
        <div className="absolute top-5 right-5">
          <div className="w-12 h-12 rounded-full bg-[#00261a]/70 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-sm font-bold shadow-lg">
            0{index + 1}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-8">

        {/* Meta */}
        <div className="flex items-center flex-wrap gap-5 mb-5 text-[#717974]">

          <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#775a19]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>

            {date}
          </div>

          <div className="w-1 h-1 rounded-full bg-[#c0c8c3]" />

          <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-[#775a19]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3"
              />
            </svg>

            {read}
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-[26px] leading-[1.25] font-bold text-[#00261a] mb-5 transition-colors duration-300 group-hover:text-[#775a19]"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-[16px] leading-[1.8] text-[#414944] line-clamp-3 mb-10">
          {desc}
        </p>

        {/* Bottom */}
        <div className="mt-auto pt-6 border-t border-[#e4e7e5] flex items-center justify-between">

          {/* Author */}
          <div className="flex items-center gap-3">
            
            <div className="w-11 h-11 rounded-full bg-[#edeeed] flex items-center justify-center text-[#775a19] font-bold">
              H
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#717974]">
                Harvestora
              </p>
              <p className="text-[14px] font-semibold text-[#00261a]">
                Trade Desk
              </p>
            </div>
          </div>

          {/* CTA */}
          <button className="group/btn flex items-center gap-2 text-[#00261a] font-semibold tracking-[0.08em] uppercase text-[13px]">

            Read

            <div className="w-9 h-9 rounded-full bg-[#f3f4f3] flex items-center justify-center group-hover/btn:bg-[#00261a] transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-[#00261a] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </article>
  ))}

  {/* Empty State */}
  {filtered.length === 0 && (
    <div className="col-span-full py-28">
      <div className="max-w-lg mx-auto text-center">

        <div className="w-24 h-24 mx-auto rounded-full bg-[#f3f4f3] flex items-center justify-center mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-[#775a19]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <circle cx="11" cy="11" r="7" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35"
            />
          </svg>
        </div>

        <h3
          className="text-[32px] font-bold text-[#00261a] mb-4"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          No Insights Found
        </h3>

        <p className="text-[#414944] text-[18px] leading-[1.8]">
          We couldn’t find any articles matching
          <span className="font-semibold text-[#00261a]">
            {" "}“{search}”
          </span>.
          Try searching with another keyword or category.
        </p>
      </div>
    </div>
  )}
</section>
          {/* ── NEWSLETTER ── */}
          <section className="mb-24">
  <div className="bg-[#0f3d2e] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl border border-white/10">

    {/* Glow Effects */}
    <div className="absolute top-0 right-0 w-72 h-72 bg-[#775a19]/20 rounded-full blur-3xl -mr-32 -mt-32" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#00261a]/30 rounded-full blur-3xl -ml-32 -mb-32" />

    {/* Grid Pattern */}
    <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur mb-6">
        <span className="material-symbols-outlined text-[#ffdea5] text-[20px]">
          public
        </span>
        <span className="text-[13px] font-semibold tracking-[0.2em] text-[#7ba894] uppercase">
          Global Newsletter
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6">
        Subscribe to Trade Insights
      </h2>

      {/* Description */}
      <p className="text-[18px] leading-[1.7] text-white/70 mb-12 max-w-2xl">
        Join 5,000+ importers, distributors, and commodity leaders receiving
        monthly intelligence on organic exports, global pricing shifts, and
        supply-chain opportunities.
      </p>

      {/* Input Area */}
      <div className="w-full max-w-2xl">
        <div className="glass-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex flex-col md:flex-row gap-3 shadow-xl">

          {/* Email Input */}
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-white/40">
              mail
            </span>

            <input
              type="email"
              placeholder="Enter your corporate email"
              className="w-full bg-transparent border border-white/10 text-white placeholder:text-white/40 pl-14 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#775a19] transition-all text-[16px]"
            />
          </div>

          {/* Button */}
          <button className="group relative overflow-hidden bg-[#775a19] hover:bg-[#ffdea5] text-white hover:text-[#261900] px-8 py-4 rounded-xl text-[14px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-[#ffdea5]/20">

            <span className="relative z-10">Join Dispatch</span>

            <span className="material-symbols-outlined relative z-10 text-[20px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>

            {/* Shine */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
          </button>
        </div>

        {/* Bottom Note */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 text-white/40 text-[12px] font-semibold tracking-[0.05em]">

          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">
              verified_user
            </span>
            GDPR Compliant
          </div>

          <span className="hidden md:block">•</span>

          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">
              lock
            </span>
            Secure & Spam-Free
          </div>

          <span className="hidden md:block">•</span>

          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">
              cancel
            </span>
            Unsubscribe Anytime
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </main>

         

      </div>
    </>
  );
}
