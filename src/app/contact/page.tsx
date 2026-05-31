const offices = [
  {
    title: "Global HQ (India)",
    badge: "Main Hub",
    borderColor: "border-[#00261a]",
    address: "Export Tower, Suite 402, Financial District, Mumbai, MH 400051",
    phone: "+91 22 4590 0000",
    phoneHref: "tel:+912245900000",
    email: "trade@harvestora.com",
    emailHref: "mailto:trade@harvestora.com",
  },
  {
    title: "Regional Hub (UAE)",
    borderColor: "border-[#775a19]",
    address: "Trade Center 1, Level 15, Sheikh Zayed Road, Dubai, UAE",
    phone: "+971 4 230 0000",
    phoneHref: "tel:+97142300000",
    email: "dubai@harvestora.com",
    emailHref: "mailto:dubai@harvestora.com",
  },
  {
    title: "Trade Desk (Europe)",
    borderColor: "border-[#c0c8c3]",
    address: "Herengracht 450, 1017 CA Amsterdam, Netherlands",
    phone: "+31 20 790 0000",
    phoneHref: "tel:+31207900000",
    email: "eu@harvestora.com",
    emailHref: "mailto:eu@harvestora.com",
  },
];

const certs = [
  { icon: "verified_user", label: "ISO 9001:2015" },
  { icon: "eco", label: "USDA ORGANIC", fill: true },
  { icon: "public", label: "FAIR TRADE" },
  { icon: "security", label: "SGS CERTIFIED", fill: true },
  { icon: "workspace_premium", label: "HACCP AUDITED" },
];

export default function ContactPage() {
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
        .glass-panel {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .gold-glow:focus { box-shadow: 0 0 0 2px rgba(119,90,25,0.3); }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">

        {/* ── NAVBAR ── */}
         

        {/* ── HERO ── */}
        <header className="relative pt-24 pb-12 overflow-hidden bg-[#f3f4f3]">
          <div className="absolute inset-0 z-0 opacity-20">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOU62kCTvR6d1KKB29g11JKvSnLYP2XpGv7L5qJ_QrgvtDRp0lOIAzJq3nsJBeUi3NuRF17UGLqz5EGIRc88u1nu6oOumx7xQMJh-8WVd45W1B4gKAbJ__PsVqWDEzbOegO57Hs8ZWsPiMViPG2vucU-vrrylT6qLnDPWgQbN_5fe_H_r6KEF4Vw5c888-_ZPHYSdSR239IxiYAXtOhJnFVFYLvd-dJUWRQJFNWK9EvhXY9rr8M85A8H9NlVFM7w7GEXuAkQgf6ftb"
              alt="Organic commodities"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-[1280px] mx-auto px-16 relative z-10 text-center">
            <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-6">
              Connect with Our <br /> Global Export Desk
            </h1>
            <p className="text-[18px] leading-[1.6] text-[#414944] max-w-2xl mx-auto">
              Bridging the gap between organic agriculture and industrial precision. Reach our dedicated trade specialists for tailored commodity solutions.
            </p>
          </div>
        </header>

        <main className="max-w-[1280px] mx-auto px-16 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* ── CONTACT FORM ── */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-10 rounded-xl shadow-lg border border-[#c0c8c3]/30">
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-8">Trade Inquiry</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { label: "Full Name", type: "text", placeholder: "John Doe", span: false },
                    { label: "Company Name", type: "text", placeholder: "Global Trade Corp", span: false },
                    { label: "Country of Operation", type: "text", placeholder: "United Arab Emirates", span: false },
                  ].map(({ label, type, placeholder }) => (
                    <div key={label} className="space-y-2">
                      <label className="text-[14px] font-semibold tracking-[0.05em] text-[#414944] block">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        className="gold-glow w-full px-4 py-3 bg-white/60 border border-[#c0c8c3] rounded-[4px] focus:border-[#00261a] focus:bg-white outline-none transition-all text-[16px]"
                      />
                    </div>
                  ))}

                  {/* Commodity select */}
                  <div className="space-y-2">
                    <label className="text-[14px] font-semibold tracking-[0.05em] text-[#414944] block">Commodity Interest</label>
                    <select className="gold-glow w-full px-4 py-3 bg-white/60 border border-[#c0c8c3] rounded-[4px] focus:border-[#00261a] focus:bg-white outline-none transition-all text-[16px]">
                      <option value="" disabled>Select Commodity</option>
                      <option>Organic Arabica Coffee</option>
                      <option>Premium Basmati Rice</option>
                      <option>Industrial Grade Soybeans</option>
                      <option>Organic Cocoa Butter</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[14px] font-semibold tracking-[0.05em] text-[#414944] block">Estimated Quantity (MT)</label>
                    <input
                      type="number"
                      min="1"
                      placeholder="500"
                      className="gold-glow w-full px-4 py-3 bg-white/60 border border-[#c0c8c3] rounded-[4px] focus:border-[#00261a] focus:bg-white outline-none transition-all text-[16px]"
                    />
                  </div>

                  {/* Message */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[14px] font-semibold tracking-[0.05em] text-[#414944] block">Message / Specification Details</label>
                    <textarea
                      rows={4}
                      placeholder="Detail your specific requirements..."
                      className="gold-glow w-full px-4 py-3 bg-white/60 border border-[#c0c8c3] rounded-[4px] focus:border-[#00261a] focus:bg-white outline-none transition-all text-[16px]"
                    />
                  </div>

                  {/* Submit */}
                  <div className="md:col-span-2 pt-4">
                    <button className="w-full py-4 bg-[#00261a] text-white text-[24px] leading-[1.3] font-semibold rounded-[4px] border-b-[3px] border-[#775a19] shadow-xl hover:-translate-y-0.5 hover:shadow-2xl active:translate-y-0 transition-all duration-300">
                      Send Inquiry to Export Desk
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── SIDEBAR: CHANNELS + OFFICES ── */}
            <div className="lg:col-span-5 space-y-12">

              {/* Direct Channels */}
              <div className="space-y-4">
                <h3 className="text-[14px] font-semibold tracking-widest text-[#775a19] uppercase">Direct Channels</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: "forum", bg: "bg-[#00261a]", iconColor: "text-white", title: "WhatsApp Business", sub: "Real-time trading support", cta: "Connect" },
                    { icon: "event", bg: "bg-[#fed488]", iconColor: "text-[#785a1a]", title: "Trade Consultation", sub: "Schedule a 15min discovery call", cta: "Book Now" },
                  ].map(({ icon, bg, iconColor, title, sub, cta }) => (
                    <a key={title} href="#" className="flex items-center gap-4 p-6 bg-[#f3f4f3] rounded-xl border border-[#c0c8c3] hover:border-[#775a19] hover:bg-white transition-all group">
                      <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                        <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
                      </div>
                      <div className="flex-grow">
                        <p className="text-[18px] font-semibold text-[#00261a]">{title}</p>
                        <p className="text-[#414944] text-sm">{sub}</p>
                      </div>
                      <div className="flex items-center gap-2 text-[#775a19] text-[14px] font-semibold tracking-[0.05em] group-hover:gap-4 transition-all">
                        <span>{cta}</span>
                        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Global Offices */}
              <div className="space-y-6">
                <h3 className="text-[14px] font-semibold tracking-widest text-[#775a19] uppercase">Global Office Locations</h3>
                <div className="space-y-4">
                  {offices.map(({ title, badge, borderColor, address, phone, phoneHref, email, emailHref }) => (
                    <div key={title} className={`p-6 glass-panel rounded-[4px] border-l-4 ${borderColor} hover:shadow-md transition-shadow`}>
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-[24px] leading-[1.3] font-semibold text-[#00261a]">{title}</p>
                        {badge && (
                          <span className="px-2 py-0.5 bg-[#00261a]/10 text-[#00261a] text-[10px] font-bold rounded uppercase">{badge}</span>
                        )}
                      </div>
                      <p className="text-[#414944] mb-4 text-sm leading-relaxed">{address}</p>
                      <div className="flex flex-col gap-3 text-sm border-t border-[#c0c8c3]/20 pt-4">
                        <a href={phoneHref} className="flex items-center gap-3 hover:text-[#00261a] transition-colors">
                          <span className="material-symbols-outlined text-[#775a19]" style={{ fontSize: 18 }}>call</span>
                          {phone}
                        </a>
                        <a href={emailHref} className="flex items-center gap-3 hover:text-[#00261a] transition-colors">
                          <span className="material-symbols-outlined text-[#775a19]" style={{ fontSize: 18 }}>mail</span>
                          {email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* ── MAP SECTION ── */}
        <section className="w-full h-[500px] relative overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[#00261a]/85 z-10 pointer-events-none" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEFnrJroseAi5aGbRsXnV6EgTkXKyxbfKVjYUfWs_C9gLkbcnPTSkE7mHI9fhPxkFlfj6VyFVgWDDU_XrbdWtnh9GNztOSv46uXbdjzIuK7sgnQtTpakVz93VYZ0DNSFi0LwYlYqVDIR4mMBK69zBYM6C3D27qRhKTZUOjLitO9AiRvCUjCVU9mqJVLytdLgi9IakN21Yw4DdMUm55HOTMdvln7-WjIE6nf5rc4tScr1JJdK_CiKrscRzmAirjYuDs8ybRCERe4b16"
            alt="Global trade route map"
            className="w-full h-full object-cover"
          />
          <div className="relative z-20 text-center px-6">
            <span className="text-[14px] font-semibold tracking-[0.3em] text-[#775a19] uppercase mb-4 block">Strategic Integration</span>
            <h2 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6">Our Global Network Reach</h2>
            <div className="h-1 w-24 bg-[#775a19] mx-auto mb-8" />
            <p className="text-white/80 max-w-xl mx-auto text-[16px] leading-[1.6]">
              Connecting certified producers with international markets through optimized logistics corridors.
            </p>
          </div>
        </section>

        {/* ── TRUST WALL ── */}
        <section className="bg-[#f3f4f3] py-20 border-y border-[#c0c8c3]/10">
          <div className="max-w-[1280px] mx-auto px-16">
            <p className="text-[14px] font-semibold tracking-[0.2em] text-[#414944] text-center mb-16 uppercase">
              Global Export Certifications &amp; Standards
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
              {certs.map(({ icon, label, fill }) => (
                <div key={label} className="flex flex-col items-center gap-4 group">
                  <span
                    className="material-symbols-outlined text-[#00261a] group-hover:scale-110 transition-transform"
                    style={{ fontSize: 48, ...(fill ? { fontVariationSettings: "'FILL' 1" } : {}) }}
                  >{icon}</span>
                  <span className="text-[12px] font-bold text-[#191c1c] tracking-[0.05em]">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        

      </div>
    </>
  );
}
