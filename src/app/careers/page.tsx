"use client";
import { useState } from "react";

const benefits = [
  { icon: "flight_takeoff", title: "Global Mobility", desc: "Access opportunities in our hubs in London, Singapore, Nairobi, and Geneva. We facilitate seamless international relocation." },
  { icon: "school", title: "Development", desc: "Annual education stipends of $5,000 for certifications, advanced degrees, or specialized language training." },
  { icon: "monetization_on", title: "Billion-Dollar Mission", desc: "Participate in equity programs and performance bonuses as we scale toward our $5B valuation target." },
];

const positions = [
  { title: "Director of Export Sales", sub: "EMEA Region Portfolio", dept: "Commerce", location: "Geneva, CH" },
  { title: "Lead Quality Control Analyst", sub: "Organic Certification Division", dept: "R&D / Science", location: "Nairobi, KE" },
  { title: "Senior Supply Chain Strategist", sub: "Precision Logistics Network", dept: "Operations", location: "Singapore" },
  { title: "Precision Agronomist", sub: "Climate-Adaptive Crop Systems", dept: "Agriculture", location: "São Paulo, BR" },
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
        <header className="relative w-full h-[819px] flex items-center overflow-hidden bg-[#0f3d2e]">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTtLTBNgikAJhzuTKLF1AcSd1vLFVGh4yum6lVZdgXfeb0jvLBmlTYkxeaa-HgGG7W4lOzbgO46QHAZuYySDAN5Sl7-2G9JVvhfpHBcqtmQPsX-CUE7N0q6gRSXlS0Is3YMaajm9hC6i9mFLw5-sM6afhrs22b_-gH1RyopmVZ6L9WOnV6Ly8F8HvzmjWV340VSN01-lGW1YK19Omy5DwD66hl-zLCBDCjNuTYh3Plyrn0B-VzfJDiQp1KuJfvvcpx4uxdRDQvMFe"
            alt="Corporate office"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative max-w-[1280px] mx-auto px-16 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1 rounded-full bg-[#fed488] text-[#785a1a] text-[14px] font-semibold tracking-[0.05em] mb-6">
                GLOBAL CAREERS
              </span>
              <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-8">
                Join the Global <span className="text-[#ffdea5]">Organic Revolution</span>
              </h1>
              <p className="text-[18px] leading-[1.6] text-[#a2d1bb] mb-10">
                We are bridging the gap between nature's purity and industrial precision. Join a team of 1,200+ professionals across 40 countries.
              </p>
              <div className="flex gap-4">
                <a href="#positions" className="px-8 py-4 bg-[#beedd7] text-[#002116] text-[14px] font-semibold tracking-[0.05em] rounded-full bezier-transition shadow-lg hover:bg-white">
                  Explore Roles
                </a>
                <a href="#culture" className="px-8 py-4 glass-card text-white text-[14px] font-semibold tracking-[0.05em] rounded-full bezier-transition hover:bg-white/20">
                  Our Culture
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* ── CULTURE BENTO GRID ── */}
        <section className="py-24 bg-[#f8faf9]" id="culture">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div className="max-w-xl">
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-4">Cultivating Excellence</h2>
                <p className="text-[16px] leading-[1.6] text-[#414944]">Our culture is a blend of scientific rigor and organic respect. We foster an environment where innovation thrives at the intersection of tradition and technology.</p>
              </div>
              <div className="flex gap-4 text-[#00261a] text-[14px] font-semibold tracking-[0.05em]">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[#775a19]">verified</span> ISO Certified</div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[#775a19]">public</span> Carbon Neutral</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Innovation card — wide */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl h-[400px] glass-card p-10 flex flex-col justify-end">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuChaDdaN4pB_SJTkTc3O61HnUSpD1xMmvimca4rC8OyEZFK6mE9bLPM7j7CajCD0qf9g_eS3C0HQrCPKYbbmqujFviyFcHz94yaL58KC-Llgnkx_QBdzHklxsGYoa36p9vp2E1sWxXUENWD6YK-8ogpdP_RzqIh4UMLA4ICUMz-gO04qU3HZnZlKt-SwCIeynrANvMrBYGnQzW5upD36UgiU5j4DW3YRJhk3MUtl8GDZ5H4ibuaFQWKTCJphFtG61Zda39jkhhgdsg-"
                  alt="Innovation lab"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-20"
                />
                <div className="relative z-10">
                  <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-2">Sustainable Innovation</h3>
                  <p className="text-[16px] leading-[1.6] text-[#414944] max-w-md">We invest over 15% of annual revenue into R&D, ensuring our export logistics and organic preservation methods lead the industry.</p>
                </div>
              </div>

              {/* Global Impact card */}
              <div className="group relative overflow-hidden rounded-xl h-[400px] bg-[#00261a] p-10 flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-t from-[#00261a] via-transparent to-transparent z-10" />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkDjL-hCiKHy0raOlFwJZvOo4GNRXsAH1wt_c7vV7MZdqYH2a099FwdEqzcowhnKldRQzHWvLr7wx3TbqeicFApPwsilIItbpv5WjlE1AOPzqN8HgH6eWdpgZz_0Jc3atU9EGdCfhNk6Um6Jn7ZSCjj5IZ8sHak3EPupkgV8RK_-5Wk8Lajpdzco8sqn1DcpZ_CFC9kV2Wlk4k9-H62n8qtNctVCWbVOQZNcS4riEeDbdIMgAZQWnoBxbaFvP9vIVZjTzIOIL1DIES"
                  alt="Global port"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-20">
                  <h3 className="text-[24px] leading-[1.3] font-semibold text-white mb-2">Global Impact</h3>
                  <p className="text-[16px] leading-[1.6] text-[#a2d1bb]">From rural cooperatives in Ghana to industrial hubs in Tokyo, our work feeds and heals millions.</p>
                </div>
              </div>

              {/* Sustainable Growth */}
              <div className="group relative overflow-hidden rounded-xl h-[400px] border border-[#c0c8c3] p-10 flex flex-col justify-between hover:bg-[#f3f4f3] transition-colors duration-300">
                <span className="material-symbols-outlined text-[#775a19]" style={{ fontSize: 48 }}>trending_up</span>
                <div>
                  <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-2">Sustainable Growth</h3>
                  <p className="text-[16px] leading-[1.6] text-[#414944]">We believe in career longevity. 70% of our leadership team started in entry-level positions within the firm.</p>
                </div>
              </div>

              {/* Mission / CEO quote */}
              <div className="md:col-span-2 group relative overflow-hidden rounded-xl h-[400px] glass-card p-10 flex items-center gap-10">
                <div className="flex-1">
                  <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-4">The Harvestora Mission</h3>
                  <p className="text-[16px] leading-[1.6] text-[#414944] mb-6">
                    "Our mission is to democratize access to organic precision. We don't just ship products; we transport the integrity of the earth to global markets."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#fed488]" />
                    <div>
                      <p className="text-[14px] font-semibold tracking-[0.05em] text-[#00261a]">Elena Voss</p>
                      <p className="text-xs text-[#414944] uppercase tracking-widest">CEO, Harvestora Global</p>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block w-1/3 h-full rounded-[4px] bg-[#e7e8e7] overflow-hidden">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvc1ckoE-GJSRD3gviJDsoCKXYuPv69YNEClhqgmeffBDrEFkMedTONahpSgl1fmwSvVUwjDAgEtK9Q6QXtnxhV_r8upPWI3r2Ts-VFBQr-za6qBi6hOqlcjUnW97tI6wc8n1VvucU9Ie4-co52zNJzGbBTP5053NsBry3t4OzPVw-EkqcPytCiqlo_s4BsN8Va98d2ktKDkCU6SYjMFBwt7nX9aa23BmwKK6ar5tgmMVFSOlQFDsasgz7MC5rP1mgQzLdmegko3tc"
                    alt="CEO Elena Voss"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
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
                <div key={title} className="flex flex-col items-center text-center p-8 rounded-2xl hover:bg-[#f8faf9] transition-colors border-b-4 border-transparent hover:border-[#775a19]">
                  <div className="w-16 h-16 rounded-full bg-[#beedd7] flex items-center justify-center mb-6 text-[#00261a]">
                    <span className="material-symbols-outlined" style={{ fontSize: 30 }}>{icon}</span>
                  </div>
                  <h4 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-3">{title}</h4>
                  <p className="text-[16px] leading-[1.6] text-[#414944]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OPEN POSITIONS ── */}
        <section className="py-24 bg-[#f8faf9]" id="positions">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
              <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a]">Available Opportunities</h2>
              <div className="flex bg-[#edeeed] rounded-full p-1">
                {roleFilters.map((f) => (
                  <button
                    key={f}
                    onClick={() => setActiveRole(f)}
                    className={`px-6 py-2 rounded-full text-[14px] font-semibold tracking-[0.05em] transition-colors ${
                      activeRole === f ? "bg-[#00261a] text-white" : "text-[#414944] hover:text-[#00261a]"
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
                    {["Role Title", "Department", "Location", "Action"].map((h, i) => (
                      <th key={h} className={`px-8 py-5 text-[14px] font-semibold tracking-[0.05em] text-[#414944] uppercase ${i === 3 ? "text-right" : ""}`}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#c0c8c3]/20">
                  {positions.map(({ title, sub, dept, location }) => (
                    <tr key={title} className="hover:bg-[#fed488]/5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                      <td className="px-8 py-6">
                        <p className="text-[18px] font-semibold text-[#00261a]">{title}</p>
                        <p className="text-sm text-[#414944]">{sub}</p>
                      </td>
                      <td className="px-8 py-6 text-[16px] text-[#191c1c]">{dept}</td>
                      <td className="px-8 py-6 text-[16px] text-[#191c1c]">
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#775a19]" style={{ fontSize: 18 }}>location_on</span>
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
              <p className="text-[16px] leading-[1.6] text-[#414944] mb-4">Don't see a perfect fit? We're always looking for talent.</p>
              <a href="#apply" className="text-[#00261a] font-bold underline decoration-[#775a19] underline-offset-4 hover:text-[#775a19] transition-colors">
                Send a General Application
              </a>
            </div>
          </div>
        </section>

        {/* ── APPLY SECTION ── */}
        <section className="py-24 relative overflow-hidden" id="apply">
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAB4XNSOeZJkvzX8cBCuiwWE71ZY_zrfYICrm2KndNeQUrJ_EyAKH1DTfNbaHqAPdurePV1w24JR25RL-gmwMRMiB7XWL9ZIk8b005hRvG7bOTKxDQ82ezsThjlR2H7YJmIMjrvRKtBr1WwzkiaLqOaZnkj6fCa1D3not0EMiPgCB6XK6Y-f-pi_zIz9Duj0dnBC6RgapVul8J-q_34mJxL_WsJkWeGNP7IzzyBxsPsEOAwKg7eYnvGf-fmzNNLftwqg7vKw0LSe_z5"
              alt="Corporate building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#00261a]/80 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-16">
            <div className="max-w-3xl mx-auto glass-card p-12 rounded-3xl">
              <div className="text-center mb-10">
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-4">Start Your Journey</h2>
                <p className="text-[16px] leading-[1.6] text-[#414944]">Submit your credentials to our global talent pool. Our executive recruitment team reviews all submissions within 72 hours.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: "Full Name", type: "text", placeholder: "John Doe" },
                  { label: "Email Address", type: "email", placeholder: "john@enterprise.com" },
                ].map(({ label, type, placeholder }) => (
                  <div key={label}>
                    <label className="block text-[14px] font-semibold tracking-[0.05em] text-[#00261a] mb-2">{label}</label>
                    <input type={type} placeholder={placeholder} className="w-full bg-white/50 border border-[#c0c8c3] focus:ring-2 focus:ring-[#775a19]/20 focus:border-[#00261a] px-4 py-3 rounded-[4px] transition-all outline-none text-[16px]" />
                  </div>
                ))}

                <div className="col-span-2">
                  <label className="block text-[14px] font-semibold tracking-[0.05em] text-[#00261a] mb-2">Department of Interest</label>
                  <select className="w-full bg-white/50 border border-[#c0c8c3] focus:ring-2 focus:ring-[#775a19]/20 focus:border-[#00261a] px-4 py-3 rounded-[4px] transition-all outline-none appearance-none text-[16px]">
                    <option>Export Sales & Commerce</option>
                    <option>Supply Chain & Logistics</option>
                    <option>Quality Control & Science</option>
                    <option>Sustainability & CSR</option>
                    <option>Corporate Functions</option>
                  </select>
                </div>

                <div className="col-span-2">
                  <label className="block text-[14px] font-semibold tracking-[0.05em] text-[#00261a] mb-2">Upload CV / Portfolio</label>
                  <div className="border-2 border-dashed border-[#c0c8c3] rounded-xl p-8 text-center bg-white/30 hover:bg-white/50 transition-colors cursor-pointer group">
                    <span className="material-symbols-outlined text-[#414944] group-hover:text-[#00261a] transition-colors" style={{ fontSize: 48 }}>cloud_upload</span>
                    <p className="mt-2 text-[16px] leading-[1.6] text-[#414944]">
                      Drag and drop your file here, or <span className="text-[#00261a] font-bold">browse</span>
                    </p>
                    <p className="text-xs text-[#717974] mt-1">PDF or DOCX (Max 10MB)</p>
                  </div>
                </div>

                <div className="col-span-2 mt-4">
                  <button className="w-full py-4 bg-[#00261a] text-white text-[18px] font-semibold rounded-xl hover:shadow-xl transition-all border-b-4 border-[#775a19]/50 active:translate-y-1">
                    Submit Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

       

      </div>
    </>
  );
}
