"use client";
import { useState } from "react";

const benefits = [
  {
    icon: "flight_takeoff",
    title: "Global Mobility",
    desc: "Access opportunities in our hubs in London, Singapore, Nairobi, and Geneva. We facilitate seamless international relocation.",
  },
  {
    icon: "school",
    title: "Development",
    desc: "Annual education stipends of $5,000 for certifications, advanced degrees, or specialized language training.",
  },
  {
    icon: "monetization_on",
    title: "Billion-Dollar Mission",
    desc: "Participate in equity programs and performance bonuses as we scale toward our $5B valuation target.",
  },
];

const positions = [
  {
    title: "Director of Export Sales",
    sub: "EMEA Region Portfolio",
    dept: "Commerce",
    location: "Geneva, CH",
  },
  {
    title: "Lead Quality Control Analyst",
    sub: "Organic Certification Division",
    dept: "R&D / Science",
    location: "Nairobi, KE",
  },
  {
    title: "Senior Supply Chain Strategist",
    sub: "Precision Logistics Network",
    dept: "Operations",
    location: "Singapore",
  },
  {
    title: "Precision Agronomist",
    sub: "Climate-Adaptive Crop Systems",
    dept: "Agriculture",
    location: "São Paulo, BR",
  },
];

const roleFilters = ["All Roles", "Operations", "Science", "Sales"];

export default function CareersPage() {
  const [activeRole, setActiveRole] = useState("All Roles");

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
        .bezier-transition { transition: all 0.6s cubic-bezier(0.23,1,0.32,1); }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">
        {/* ── HERO ── */}
        <header className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#0f3d2e]">
          {/* Background Image */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTtLTBNgikAJhzuTKLF1AcSd1vLFVGh4yum6lVZdgXfeb0jvLBmlTYkxeaa-HgGG7W4lOzbgO46QHAZuYySDAN5Sl7-2G9JVvhfpHBcqtmQPsX-CUE7N0q6gRSXlS0Is3YMaajm9hC6i9mFLw5-sM6afhrs22b_-gH1RyopmVZ6L9WOnV6Ly8F8HvzmjWV340VSN01-lGW1YK19Omy5DwD66hl-zLCBDCjNuTYh3Plyrn0B-VzfJDiQp1KuJfvvcpx4uxdRDQvMFe"
            alt="Corporate office"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00160f]/90 via-[#0f3d2e]/70 to-transparent" />

          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#775a19]/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00261a]/40 blur-3xl rounded-full" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Content */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 w-full py-24">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffdea5]/10 border border-[#ffdea5]/20 backdrop-blur mb-8">
                <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">
                  work
                </span>

                <span className="text-[#ffdea5] text-[13px] font-semibold tracking-[0.2em] uppercase">
                  Global Careers
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.04em] font-bold text-white mb-8">
                Join the Global{" "}
                <span className="text-[#ffdea5]">Organic Revolution</span>
              </h1>

              {/* Description */}
              <p className="text-[18px] md:text-[20px] leading-[1.8] text-[#d7f5e7]/80 max-w-2xl mb-12">
                We are redefining international organic trade through
                innovation, sustainability, and world-class logistics. Join
                1,200+ professionals across 40 countries shaping the future of
                global exports.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a
                  href="#positions"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#beedd7] text-[#002116] text-[14px] font-semibold tracking-[0.08em] uppercase rounded-full shadow-2xl hover:bg-white transition-all duration-300 hover:scale-[1.02]"
                >
                  Explore Roles
                  <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>

                <a
                  href="#culture"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white text-[14px] font-semibold tracking-[0.08em] uppercase rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    diversity_3
                  </span>
                  Our Culture
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "1,200+", label: "Team Members", icon: "groups" },
                  { value: "40+", label: "Countries", icon: "public" },
                  {
                    value: "15+",
                    label: "Years Legacy",
                    icon: "workspace_premium",
                  },
                  {
                    value: "24/7",
                    label: "Global Operations",
                    icon: "schedule",
                  },
                ].map(({ value, label, icon }) => (
                  <div
                    key={label}
                    className="glass-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="material-symbols-outlined text-[#ffdea5] text-[28px]">
                        {icon}
                      </span>

                      <div className="w-2 h-2 rounded-full bg-[#ffdea5] animate-pulse" />
                    </div>

                    <h3 className="text-[28px] font-bold text-white leading-none mb-2">
                      {value}
                    </h3>

                    <p className="text-[13px] uppercase tracking-[0.12em] text-[#a2d1bb] font-semibold">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/60">
            <span className="text-[12px] tracking-[0.2em] uppercase font-semibold">
              Scroll
            </span>

            <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/80 to-white/0" />
          </div>
        </header>
        {/* ── CULTURE BENTO GRID ── */}
        <section
          className="py-24 bg-[#f8faf9] relative overflow-hidden"
          id="culture"
        >
          {/* Background Blurs */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-[#ffdea5]/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0f3d2e]/10 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-20 gap-10">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 bg-[#ffdea5]/30 text-[#775a19] px-5 py-2 rounded-full text-xs font-semibold tracking-[0.18em] uppercase mb-6 backdrop-blur-md border border-[#ffdea5]/30">
                  <span className="material-symbols-outlined text-[18px]">
                    eco
                  </span>
                  Life at Harvestora
                </span>

                <h2
                  className="text-[38px] md:text-[52px] lg:text-[64px] leading-[1] tracking-[-0.04em] font-bold text-[#00261a] mb-6"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Cultivating Excellence Through Innovation & Purpose
                </h2>

                <p className="text-[18px] md:text-[20px] leading-[1.8] text-[#414944] max-w-2xl">
                  Our culture blends scientific precision with organic integrity
                  — creating an environment where sustainability, global trade,
                  and human growth thrive together.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: "verified", label: "ISO Certified" },
                  { icon: "public", label: "Carbon Neutral" },
                  { icon: "workspace_premium", label: "Global Employer" },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#775a19] transition-all duration-500"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#f3f4f3] group-hover:bg-[#775a19] flex items-center justify-center transition-all duration-500">
                      <span className="material-symbols-outlined text-[#775a19] group-hover:text-white transition-colors">
                        {icon}
                      </span>
                    </div>

                    <span className="text-[14px] font-semibold tracking-[0.05em] text-[#00261a]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Innovation */}
              <div className="xl:col-span-2 relative overflow-hidden rounded-[32px] group min-h-[460px] shadow-xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChaDdaN4pB_SJTkTc3O61HnUSpD1xMmvimca4rC8OyEZFK6mE9bLPM7j7CajCD0qf9g_eS3C0HQrCPKYbbmqujFviyFcHz94yaL58KC-Llgnkx_QBdzHklxsGYoa36p9vp2E1sWxXUENWD6YK-8ogpdP_RzqIh4UMLA4ICUMz-gO04qU3HZnZlKt-SwCIeynrANvMrBYGnQzW5upD36UgiU5j4DW3YRJhk3MUtl8GDZ5H4ibuaFQWKTCJphFtG61Zda39jkhhgdsg-"
                  alt="Innovation"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#00140d]/95 via-[#00261a]/50 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6 group-hover:bg-[#775a19] transition-all duration-500">
                    <span className="material-symbols-outlined text-white text-[34px]">
                      science
                    </span>
                  </div>

                  <h3 className="text-[34px] md:text-[42px] font-bold text-white mb-4">
                    Sustainable Innovation
                  </h3>

                  <p className="text-[17px] md:text-[19px] leading-[1.8] text-white/75 max-w-2xl">
                    We reinvest heavily into research, logistics automation, and
                    organic preservation systems — ensuring Harvestora remains
                    at the forefront of industrial organic exports.
                  </p>
                </div>
              </div>

              {/* Global Impact */}
              <div className="relative overflow-hidden rounded-[32px] group min-h-[460px] bg-[#00261a] shadow-xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkDjL-hCiKHy0raOlFwJZvOo4GNRXsAH1wt_c7vV7MZdqYH2a099FwdEqzcowhnKldRQzHWvLr7wx3TbqeicFApPwsilIItbpv5WjlE1AOPzqN8HgH6eWdpgZz_0Jc3atU9EGdCfhNk6Um6Jn7ZSCjj5IZ8sHak3EPupkgV8RK_-5Wk8Lajpdzco8sqn1DcpZ_CFC9kV2Wlk4k9-H62n8qtNctVCWbVOQZNcS4riEeDbdIMgAZQWnoBxbaFvP9vIVZjTzIOIL1DIES"
                  alt="Global"
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-1000"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#00261a] via-[#00261a]/70 to-transparent" />

                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <div className="w-14 h-14 rounded-2xl bg-[#775a19]/20 border border-[#ffdea5]/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#ffdea5] text-[30px]">
                      public
                    </span>
                  </div>

                  <div>
                    <h3 className="text-[34px] font-bold text-white mb-4">
                      Global Impact
                    </h3>

                    <p className="text-[#a2d1bb] leading-[1.8] text-[17px]">
                      From village cooperatives to international trade hubs, our
                      ecosystem supports sustainable livelihoods and global
                      wellness.
                    </p>

                    <div className="mt-10 flex gap-10">
                      <div>
                        <p className="text-[38px] font-bold text-[#ffdea5]">
                          40+
                        </p>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                          Countries
                        </p>
                      </div>

                      <div>
                        <p className="text-[38px] font-bold text-[#ffdea5]">
                          1,200+
                        </p>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                          Employees
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth */}
              <div className="group rounded-[32px] border border-[#d9deda] bg-white/80 backdrop-blur-xl p-10 hover:-translate-y-2 hover:shadow-2xl hover:border-[#775a19] transition-all duration-500 flex flex-col justify-between min-h-[360px]">
                <div className="w-16 h-16 rounded-2xl bg-[#f3f4f3] group-hover:bg-[#775a19] flex items-center justify-center transition-all duration-500">
                  <span className="material-symbols-outlined text-[#775a19] group-hover:text-white text-[34px]">
                    trending_up
                  </span>
                </div>

                <div>
                  <h3 className="text-[30px] font-bold text-[#00261a] mb-4">
                    Sustainable Growth
                  </h3>

                  <p className="text-[17px] leading-[1.8] text-[#414944]">
                    We believe in long-term careers. Most of our leadership team
                    began their journey in operational and entry-level roles.
                  </p>

                  <div className="mt-10 pt-6 border-t border-[#d9deda] flex items-center justify-between">
                    <div>
                      <p className="text-[36px] font-bold text-[#775a19]">
                        70%
                      </p>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#717974]">
                        Internal Promotions
                      </p>
                    </div>

                    <span className="material-symbols-outlined text-[#775a19] group-hover:translate-x-2 transition-transform duration-300">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="xl:col-span-2 rounded-[32px] overflow-hidden bg-gradient-to-br from-white to-[#f3f4f3] border border-[#d9deda] group hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  {/* Content */}
                  <div className="p-10 md:p-14 flex flex-col justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#ffdea5]/40 flex items-center justify-center mb-8">
                      <span className="material-symbols-outlined text-[#775a19] text-[34px]">
                        volunteer_activism
                      </span>
                    </div>

                    <h3 className="text-[38px] leading-[1.15] font-bold text-[#00261a] mb-6">
                      The Harvestora Mission
                    </h3>

                    <p className="text-[19px] italic leading-[1.9] text-[#414944] mb-10">
                      “Our mission is to transport the integrity of the earth to
                      global markets through technology, sustainability, and
                      human trust.”
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#ffdea5] shadow-md">
                        <img
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvc1ckoE-GJSRD3gviJDsoCKXYuPv69YNEClhqgmeffBDrEFkMedTONahpSgl1fmwSvVUwjDAgEtK9Q6QXtnxhV_r8upPWI3r2Ts-VFBQr-za6qBi6hOqlcjUnW97tI6wc8n1VvucU9Ie4-co52zNJzGbBTP5053NsBry3t4OzPVw-EkqcPytCiqlo_s4BsN8Va98d2ktKDkCU6SYjMFBwt7nX9aa23BmwKK6ar5tgmMVFSOlQFDsasgz7MC5rP1mgQzLdmegko3tc"
                          alt="CEO"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-[15px] font-bold tracking-[0.05em] text-[#00261a]">
                          Elena Voss
                        </p>
                        <p className="text-xs uppercase tracking-[0.18em] text-[#717974]">
                          CEO, Harvestora Global
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="hidden lg:block relative min-h-[480px] overflow-hidden">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvc1ckoE-GJSRD3gviJDsoCKXYuPv69YNEClhqgmeffBDrEFkMedTONahpSgl1fmwSvVUwjDAgEtK9Q6QXtnxhV_r8upPWI3r2Ts-VFBQr-za6qBi6hOqlcjUnW97tI6wc8n1VvucU9Ie4-co52zNJzGbBTP5053NsBry3t4OzPVw-EkqcPytCiqlo_s4BsN8Va98d2ktKDkCU6SYjMFBwt7nX9aa23BmwKK6ar5tgmMVFSOlQFDsasgz7MC5rP1mgQzLdmegko3tc"
                      alt="CEO Elena Voss"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />

                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BENEFITS ── */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-16">
            <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] text-center mb-16">
              The Harvestora Advantage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {benefits.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-[#f8faf9] transition-colors border-b-4 border-transparent hover:border-[#775a19]"
                >
                  <div className="w-16 h-16 rounded-full bg-[#beedd7] flex items-center justify-center mb-6 text-[#00261a]">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 30 }}
                    >
                      {icon}
                    </span>
                  </div>
                  <h4 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-3">
                    {title}
                  </h4>
                  <p className="text-[16px] leading-[1.6] text-[#414944]">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPEN POSITIONS ── */}
        <section className="py-24 bg-[#f8faf9]" id="positions">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a]">
                Available Opportunities
              </h2>
              <div className="flex bg-[#edeeed] rounded-full p-1">
                {roleFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveRole(f)}
                    className={`px-6 py-2 rounded-full text-[14px] font-semibold tracking-[0.05em] transition-colors ${
                      activeRole === f
                        ? "bg-[#00261a] text-white"
                        : "text-[#414944] hover:text-[#00261a]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#c0c8c3]/30">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f4f3] border-b border-[#c0c8c3]/50">
                    {["Role Title", "Department", "Location", "Action"].map(
                      (h, i) => (
                        <th
                          key={h}
                          className={`px-8 py-5 text-[14px] font-semibold tracking-[0.05em] text-[#414944] uppercase ${i === 3 ? "text-right" : ""}`}
                        >
                          {h}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c0c8c3]/20">
                  {positions.map(({ title, sub, dept, location }) => (
                    <tr
                      key={title}
                      className="hover:bg-[#fed488]/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
                    >
                      <td className="px-8 py-6">
                        <p className="text-[18px] font-semibold text-[#00261a]">
                          {title}
                        </p>
                        <p className="text-sm text-[#414944]">{sub}</p>
                      </td>
                      <td className="px-8 py-6 text-[16px] text-[#191c1c]">
                        {dept}
                      </td>
                      <td className="px-8 py-6 text-[16px] text-[#191c1c]">
                        <span className="flex items-center gap-2">
                          <span
                            className="material-symbols-outlined text-[#775a19]"
                            style={{ fontSize: 18 }}
                          >
                            location_on
                          </span>
                          {location}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button className="px-6 py-2 border border-[#00261a] text-[#00261a] hover:bg-[#00261a] hover:text-white rounded-full text-[14px] font-semibold tracking-[0.05em] transition-all">
                          View Role
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-[16px] leading-[1.6] text-[#414944] mb-4">
                Don't see a perfect fit? We're always looking for talent.
              </p>
              <a
                href="#apply"
                className="text-[#00261a] font-bold underline decoration-[#775a19] underline-offset-4 hover:text-[#775a19] transition-colors"
              >
                Send a General Application
              </a>
            </div>
          </div>
        </section>

        {/* ───────────────── APPLY SECTION ───────────────── */}
        <section className="relative py-24 overflow-hidden" id="apply">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB4XNSOeZJkvzX8cBCuiwWE71ZY_zrfYICrm2KndNeQUrJ_EyAKH1DTfNbaHqAPdurePV1w24JR25RL-gmwMRMiB7XWL9ZIk8b005hRvG7bOTKxDQ82ezsThjlR2H7YJmIMjrvRKtBr1WwzkiaLqOaZnkj6fCa1D3not0EMiPgCB6XK6Y-f-pi_zIz9Duj0dnBC6RgapVul8J-q_34mJxL_WsJkWeGNP7IzzyBxsPsEOAwKg7eYnvGf-fmzNNLftwqg7vKw0LSe_z5"
              alt="Corporate Building"
              className="w-full h-full object-cover scale-105"
            />

            <div className="absolute inset-0 bg-[#00261a]/85" />

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#775a19]/20 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0f3d2e]/40 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
            <div className="max-w-5xl mx-auto rounded-[32px] overflow-hidden border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* LEFT SIDE */}
                <div className="relative p-10 md:p-14 bg-gradient-to-br from-[#00261a]/95 to-[#0f3d2e]/90 text-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#775a19]/20 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffdea5]/15 border border-[#ffdea5]/20 text-[#ffdea5] text-[12px] font-semibold tracking-[0.15em] uppercase mb-8">
                      <span className="material-symbols-outlined text-[18px]">
                        work
                      </span>
                      Global Talent Network
                    </span>

                    <h2
                      className="text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.03em] font-bold mb-6"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      Start Your
                      <span className="block text-[#ffdea5]">
                        Journey With Us
                      </span>
                    </h2>

                    <p className="text-[17px] leading-[1.8] text-white/70 max-w-md mb-12">
                      Join a new generation of professionals shaping the future
                      of sustainable global trade, industrial organic exports,
                      and precision supply chains.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-8 mb-12">
                      {[
                        { value: "72 Hrs", label: "Response Time" },
                        { value: "40+", label: "Global Markets" },
                        { value: "1,200+", label: "Team Members" },
                        { value: "15%", label: "R&D Investment" },
                      ].map(({ value, label }) => (
                        <div key={label}>
                          <p className="text-[28px] font-bold text-[#ffdea5]">
                            {value}
                          </p>

                          <p className="text-xs uppercase tracking-[0.15em] text-white/50 mt-1">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-5">
                      {[
                        "Executive recruitment review process",
                        "Remote & international opportunities",
                        "Fast-track leadership programs",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#ffdea5]/10 flex items-center justify-center mt-0.5">
                            <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">
                              check
                            </span>
                          </div>

                          <p className="text-white/75 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="bg-white p-10 md:p-14">
                  <div className="mb-10">
                    <span className="inline-flex items-center gap-2 text-[#775a19] text-[12px] font-semibold tracking-[0.15em] uppercase mb-4">
                      <span className="material-symbols-outlined text-[18px]">
                        person_add
                      </span>
                      Application Form
                    </span>

                    <h3 className="text-[34px] leading-[1.1] font-bold text-[#00261a] mb-4">
                      Submit Your Credentials
                    </h3>

                    <p className="text-[#414944] leading-[1.8] text-[16px]">
                      Our recruitment team reviews every application personally.
                      We aim to respond within 72 hours.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        label: "Full Name",
                        type: "text",
                        placeholder: "John Doe",
                      },
                      {
                        label: "Corporate Email",
                        type: "email",
                        placeholder: "john@enterprise.com",
                      },
                    ].map(({ label, type, placeholder }) => (
                      <div key={label}>
                        <label className="block text-[13px] font-semibold tracking-[0.12em] uppercase text-[#00261a] mb-3">
                          {label}
                        </label>

                        <input
                          type={type}
                          placeholder={placeholder}
                          className="w-full h-14 px-5 rounded-2xl border border-[#d8ddda] bg-[#f8faf9] focus:bg-white focus:border-[#775a19] focus:ring-4 focus:ring-[#775a19]/10 outline-none transition-all text-[16px]"
                        />
                      </div>
                    ))}

                    {/* Select */}
                    <div className="md:col-span-2">
                      <label className="block text-[13px] font-semibold tracking-[0.12em] uppercase text-[#00261a] mb-3">
                        Department of Interest
                      </label>

                      <div className="relative">
                        <select className="w-full h-14 px-5 rounded-2xl border border-[#d8ddda] bg-[#f8faf9] focus:bg-white focus:border-[#775a19] focus:ring-4 focus:ring-[#775a19]/10 outline-none appearance-none transition-all text-[16px]">
                          <option>Export Sales & Commerce</option>

                          <option>Supply Chain & Logistics</option>

                          <option>Quality Control & Science</option>

                          <option>Sustainability & CSR</option>

                          <option>Corporate Functions</option>
                        </select>

                        <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-[#717974] pointer-events-none">
                          expand_more
                        </span>
                      </div>
                    </div>

                    {/* Upload */}
                    <div className="md:col-span-2">
                      <label className="block text-[13px] font-semibold tracking-[0.12em] uppercase text-[#00261a] mb-3">
                        Upload CV / Portfolio
                      </label>

                      <div className="group relative border-2 border-dashed border-[#d8ddda] rounded-3xl p-10 text-center bg-[#f8faf9] hover:bg-white hover:border-[#775a19] transition-all duration-300 cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#ffdea5]/10 to-transparent transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col items-center">
                          <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <span
                              className="material-symbols-outlined text-[#775a19]"
                              style={{ fontSize: 40 }}
                            >
                              cloud_upload
                            </span>
                          </div>

                          <h4 className="text-[20px] font-semibold text-[#00261a] mb-2">
                            Upload Your Resume
                          </h4>

                          <p className="text-[#414944] text-[15px] leading-[1.7] mb-2">
                            Drag & drop your file here or{" "}
                            <span className="font-bold text-[#775a19]">
                              browse files
                            </span>
                          </p>

                          <p className="text-xs tracking-[0.08em] uppercase text-[#717974]">
                            PDF or DOCX — Max 10MB
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 pt-2">
                      <button className="group relative w-full h-16 rounded-2xl overflow-hidden bg-[#00261a] text-white text-[16px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,38,26,0.4)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#775a19] to-[#ffdea5] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#261900] transition-colors duration-300">
                          Submit Application
                          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                            arrow_forward
                          </span>
                        </span>
                      </button>

                      <p className="mt-5 text-center text-[12px] tracking-[0.08em] uppercase text-[#717974]">
                        By applying you agree to our global recruitment policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
