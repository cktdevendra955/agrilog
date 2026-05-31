"use client";
import { useState } from "react";

const thumbnails = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAMXRXF7aoI5P8VI5Obgph3-YPlzp4HDR3chjLYMF06e0t6f4ve5pAJgPktYMyPavgaxhGjX6wGDpmfKLcdxcO3vqU1UR-uLl4Tun2D0S_8YNblSbaBmo6s79EK4lAocZdKp7g-qy4CKBjsP1oP-cbAKs3qdRUR4cG4KF7Ont8a9xNyTR1PVrhmrKdctNYFVQpfNNJPadFx5yV3JGhzessxGMtNsQz6V_15LMNoygKUqh33qrQDNpvtTF3IbJO7tkS8IGQwCFzeVRMz",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD5nYJMRA_HV1_CTJXIMegT7Hnfebpr_Fpxj-1ylBSvLRZZCAYvC5a3_UrrO7Q-EAvxNmo3TGgz2HfGiloygkNlEM2Ev-WCDd550-3ty5wmJRz6NhOd21Azg-wiSXe4Lq4s5iaetNP0w4so-rXV4HS_N-ywaV37hBtviADaf7yHI3t-dvlyNpUPYBxkgoa3MfxcB2kNk-jbzjQA6qu8ppZAVjaoJDH_6aQ71F9lJtJpyerKCpEgaX7JXxC1lxi-Ii_Tai3KXqSuvJZX",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8elKwdkUtso7l0HCcx2hmCigj-dT-hSz6pRkswBE7vMG8di7BvWXYEeABFEeNqO8AaIRpE-x5Orzqpmm3NbIlZ4XZnb4rujbJUGFn9fCj4tfSrrvZbzAVfMw0nrE0N5fQLfGCc5BfOkSL6iwFuMESVcP5zan2E3wMeUmTO6Twv8jOZCGG8buus8qMc1DM7eeqWJMUuKCk7S8YysuwVpA8PyIyZOC2kU2PUT0_ybImQyzTwiYv4atLLGXjwRdxriHzgEYlE_GhkNAb",
];

const specs = [
  { param: "Curcumin Content", req: "Min. 5.0% - 6.5%", method: "HPLC Method" },
  { param: "Moisture Content", req: "Max. 10.0%", method: "Oven Drying" },
  { param: "Lead (Pb)", req: "Nill / Non-Detectable", method: "ICP-MS" },
  { param: "Total Ash", req: "Max 7.0%", method: "ISO 928" },
];

const logistics = [
  { label: "MOQ", value: "1 Metric Ton (MT)" },
  { label: "Packaging", value: "25kg HDPE Bags", sub: "Lined / Bulk Containers" },
  { label: "Shelf Life", value: "24 Months" },
  { label: "Lead Time", value: "14-21 Days" },
];

const certifications = [
  { icon: "workspace_premium", label: "NOP Organic" },
  { icon: "verified_user", label: "APEDA" },
  { icon: "science", label: "Lab Tested" },
  { icon: "eco", label: "FSSAI" },
];

const related = [
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmxYIxEWdC-7ulIhy-iDqvHht1M7vCDtahAVMNMfXsK7DWpvbtg4eP2gZAHAeGEUSywTbT-CtJMSwO8-j6IQXSD61WDrJ7lJ8HK3InYZi-8E0sIqk_XHJTxWxqdSXfQw5Ymobw5JHNdvrLD9Q-XK6SbvNb6lJ_PLYfBB3SnRkqOe1HPnm19tGTlbTZdxlg-fTWSgBCNj0qIjv3L6ZcxJmj5_OMOur54rYgKOakaKT_7CFjLs-w0b7D8K9Pwz5yv2tr5A0jYap8Ma2C",
    name: "Organic Dried Ginger", desc: "High-pungency ginger flakes and powder sourced from the Western Ghats.", tag: "99.5% Purity",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5I8C1LpdBVWuQbo2tTvIr3SXH-zunkdZQjOPJ-3oCQhYSXC6-eoiX4djhMaqcu0n-0zfN1rRJ1Z94HDW1jMiDbJhAnrLOx6a2_7SM3u3KX3QLUZsIjVksdzffF8QCJ9YhBZp_4cbl2hJC0wtfiFJ-NjzM3Hy89Q0tWsrMikcPGtxDqOh2pJmMMqRd795SmacTg_7i6lSyVqpV3bh1CsK36VpjGXAeHgTbTFZRYV3YbQ3_BnvI2p7qTRZXdKxdKnMzab1bs0uvqJK_",
    name: "Organic Garlic Bulbs", desc: "Superior grade garlic with high Allicin content, properly cured for long-haul export.", tag: "Cold Chain Ready",
  },
  {
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCp7h8H7Z__K-gYN-XnW36MGBYCUBgXHcBkLg85Lqr7DNPWWpKieBMrdNi7_EeXgtCLspKcBPeKcjp721NnPl_U9W9BKIQHu7txFD9tRYNSiE22X-xf8aNkbhDcj9LA3a-0zrpe-LfTf8xLz_eoXTLJnKbH3JLVSASojwX47S28Kodx2Sjt8XTWW0dc7_WmOQxiODLyav1H4_qaePq3gTFJ7tEa-ZsHkfkXMYtZs7Yiq8Nj2908SCuJl7JWxfFFDfuIDVRLOrYCLNII",
    name: "Guntur Red Chilli", desc: "Premium S4 Guntur chillies known for their intense heat and rich natural color.", tag: "Stemless / S17 Grade",
  },
];

export default function ProductDetailPage() {
  const [activeThumb, setActiveThumb] = useState(0);
  const heroImg = "https://lh3.googleusercontent.com/aida-public/AB6AXuDDFdTXIpLqw0zPFsxxFqaQu_uGMbhk17ZrN03KdyfgdDkG7fB4T-FJesLj3rQ772T5uEVu1LGjoJWXOX6J-6B-HrL1_wvjSy-j03WBs5RT_HF5lTwzb-ykvrWLI_pdiQep_Pg8D1NNjhjZo_2pTUl0aarKREgmqAqK0Wem6VPYFzN0nNEB0Hvyp__9bnN-jqw9hat0ztHmSXfS4GRJErd1qQNXIBZqEyemCieE2DiP7LCapFhdNBWIqlUpB9o4Fn9k1YTP3GJJZIO-";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
          font-style: normal;
          display: inline-block;
          line-height: 1;
        }
        .glass-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">
 

        <main className="max-w-[1280px] mx-auto px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* ── LEFT: GALLERY + DETAILS ── */}
            <div className="lg:col-span-8 space-y-12">

              {/* Product Gallery */}
              <section className="space-y-4">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-[#edeeed]">
                  <img
                    src={activeThumb === 0 ? heroImg : thumbnails[activeThumb - 1]}
                    alt="Organic Turmeric Alleppey Finger"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-[#ffdea5] text-[#261900] px-3 py-1 rounded-full text-[14px] font-semibold tracking-[0.2em] uppercase shadow-lg">
                      Premium Grade
                    </span>
                    <span className="glass-card px-3 py-1 rounded-full text-[14px] font-semibold text-[#00261a] shadow-lg border border-white/40">
                      Organic Certified
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {/* Main thumbnail */}
                  <div
                    onClick={() => setActiveThumb(0)}
                    className={`aspect-square rounded-[4px] overflow-hidden border-2 cursor-pointer transition-colors ${activeThumb === 0 ? "border-[#775a19]" : "border-[#c0c8c3] hover:border-[#775a19]"}`}
                  >
                    <img src={heroImg} alt="Main" className="w-full h-full object-cover" />
                  </div>
                  {thumbnails.map((t, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveThumb(i + 1)}
                      className={`aspect-square rounded-[4px] overflow-hidden border-2 cursor-pointer transition-colors ${activeThumb === i + 1 ? "border-[#775a19]" : "border-[#c0c8c3] hover:border-[#775a19]"}`}
                    >
                      <img src={t} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="aspect-square rounded-[4px] overflow-hidden border border-[#c0c8c3] hover:border-[#775a19] cursor-pointer flex items-center justify-center bg-[#e7e8e7] text-[#414944] text-[14px] font-semibold tracking-[0.05em]">
                    +4 Photos
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="glass-card p-10 rounded-xl space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#775a19]" style={{ fontSize: 30 }}>precision_manufacturing</span>
                  <h2 className="text-[24px] leading-[1.3] font-semibold text-[#00261a]">Technical Specifications</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-[#c0c8c3]">
                        {["Parameter", "Requirement", "Test Method"].map((h) => (
                          <th key={h} className="py-4 text-left text-[14px] font-semibold tracking-[0.05em] text-[#414944] uppercase">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#c0c8c3]/30">
                      {specs.map(({ param, req, method }) => (
                        <tr key={param} className="hover:bg-[#ffdea5]/5 transition-colors">
                          <td className="py-4 font-bold text-[#00261a]">{param}</td>
                          <td className="py-4 text-[16px]">{req}</td>
                          <td className="py-4 text-[#414944] text-[16px]">{method}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Origin & Sourcing */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-[24px] leading-[1.3] font-semibold text-[#00261a]">Origin &amp; Sourcing</h2>
                  <p className="text-[#414944] text-[16px] leading-relaxed">
                    Harvested at the peak of maturity in the high-altitude terrains of the{" "}
                    <span className="text-[#00261a] font-bold">Munnar and Alleppey</span> regions. Our turmeric is cultivated using traditional Vedic farming techniques integrated with modern organic monitoring systems to ensure maximum Curcumin retention.
                  </p>
                  <ul className="space-y-2">
                    {["Single-Origin Traceability", "No Synthetic Pesticides", "Sun-Dried Processing"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-[14px] font-semibold tracking-[0.05em]">
                        <span className="material-symbols-outlined text-[#775a19]" style={{ fontVariationSettings: "'FILL' 1", fontSize: 18 }}>check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl overflow-hidden h-64 relative border border-[#c0c8c3] shadow-lg">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4vgpo18utesKaeACpPXJ3XXEhNfAkPW9THAsQ6bwLG2FLnTpSDrADUyv1VQc3rjZtTRJDM_kT7MNL0H59N1GaOZCjEDPLJHM-df7XC6ONQSLH2hhKPatGuES5ocAjv9qL5_y38YXEahGWtQegmzewb_tH7eU5Cea5ftCUxZLLeEjW-at2CZgtZl5nKXyxPd8DME0H-nVRu7dUviktOBYyu753dkRXxi5AGF5CcxG_QbUGr8JPUK_Ljw8MsFB1KhZNBCeLZsfEIMh6"
                    alt="Kerala region map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 glass-card px-4 py-2 rounded-[4px] text-[14px] font-bold text-[#00261a]">
                    Munnar, Kerala Region
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section className="space-y-6">
                <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a]">Global Compliance &amp; Certifications</h3>
                <div className="flex flex-wrap gap-6">
                  {certifications.map(({ icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2 glass-card p-6 rounded-xl w-32 shadow-sm">
                      <div className="w-16 h-16 bg-[#0f3d2e] rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#ffdea5]" style={{ fontVariationSettings: "'FILL' 1", fontSize: 30 }}>{icon}</span>
                      </div>
                      <span className="text-[14px] font-bold text-center tracking-[0.05em]">{label}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* ── RIGHT: SIDEBAR ── */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-8">

                {/* Export Inquiry Form */}
                <div className="bg-[#00261a] text-white p-8 rounded-xl shadow-2xl space-y-6">
                  <div>
                    <h3 className="text-[24px] leading-[1.3] font-semibold mb-2">Request Bulk Quote</h3>
                    <p className="text-white/70 text-[16px]">Connect with our export desk for dedicated pricing and logistics planning.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[14px] font-semibold tracking-[0.2em] text-white/50 uppercase">Company Name</label>
                      <input type="text" placeholder="Enter company name" className="w-full bg-white/10 border border-white/20 rounded-[4px] p-3 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#ffdea5] focus:outline-none transition-all text-[16px]" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[14px] font-semibold tracking-[0.2em] text-white/50 uppercase">Destination Country</label>
                      <input type="text" placeholder="e.g. Netherlands" className="w-full bg-white/10 border border-white/20 rounded-[4px] p-3 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#ffdea5] focus:outline-none transition-all text-[16px]" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[14px] font-semibold tracking-[0.2em] text-white/50 uppercase">Volume (MT)</label>
                        <input type="number" placeholder="Min 1" className="w-full bg-white/10 border border-white/20 rounded-[4px] p-3 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#ffdea5] focus:outline-none transition-all text-[16px]" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[14px] font-semibold tracking-[0.2em] text-white/50 uppercase">Port</label>
                        <input type="text" placeholder="CIF/FOB" className="w-full bg-white/10 border border-white/20 rounded-[4px] p-3 text-white placeholder:text-white/30 focus:ring-2 focus:ring-[#ffdea5] focus:outline-none transition-all text-[16px]" />
                      </div>
                    </div>
                    <button className="w-full bg-[#ffdea5] text-[#261900] font-bold py-4 rounded-[4px] shadow-lg hover:scale-[1.02] transition-all duration-300 text-[14px] tracking-[0.05em]">
                      Submit Export Inquiry
                    </button>
                  </div>
                </div>

                {/* Export Logistics */}
                <div className="glass-card p-8 rounded-xl space-y-6">
                  <h4 className="text-[14px] font-semibold text-[#00261a] uppercase tracking-widest flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#775a19]">local_shipping</span>
                    Export Logistics
                  </h4>
                  <div className="space-y-4">
                    {logistics.map(({ label, value, sub }) => (
                      <div key={label} className="flex justify-between items-center py-2 border-b border-[#c0c8c3]/30">
                        <span className="text-[#414944] text-[14px] font-semibold tracking-[0.05em]">{label}</span>
                        <div className="text-right">
                          <div className="font-bold text-[#00261a] text-[16px]">{value}</div>
                          {sub && <div className="text-xs text-[#414944]">{sub}</div>}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-[#edeeed] rounded-[4px] flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#775a19]">info</span>
                    <p className="text-xs text-[#414944] leading-relaxed">
                      Custom white-label packaging and vacuum sealing options available for retail-ready distribution partners.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── RELATED COMMODITIES ── */}
          <section className="mt-24 space-y-8">
            <div className="flex justify-between items-end">
              <div className="space-y-2">
                <span className="text-[#775a19] text-[14px] font-semibold tracking-widest uppercase">Global Network</span>
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a]">Related Premium Commodities</h2>
              </div>
              <a href="#" className="text-[#00261a] font-bold hover:text-[#775a19] transition-colors flex items-center gap-1 group text-[16px]">
                View Portfolio <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map(({ img, name, desc, tag }) => (
                <div key={name} className="glass-card rounded-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 relative overflow-hidden">
                    <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00261a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-2">{name}</h4>
                    <p className="text-[#414944] text-sm line-clamp-2">{desc}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-[#775a19] font-bold text-xs uppercase tracking-widest">{tag}</span>
                      <span className="material-symbols-outlined text-[#00261a]">arrow_outward</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

         

      </div>
    </>
  );
}
