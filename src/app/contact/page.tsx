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
        {/* ── CONTACT HERO HEADER ── */}
<header className="relative overflow-hidden bg-[#f8faf9] pt-28 pb-24">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOU62kCTvR6d1KKB29g11JKvSnLYP2XpGv7L5qJ_QrgvtDRp0lOIAzJq3nsJBeUi3NuRF17UGLqz5EGIRc88u1nu6oOumx7xQMJh-8WVd45W1B4gKAbJ__PsVqWDEzbOegO57Hs8ZWsPiMViPG2vucU-vrrylT6qLnDPWgQbN_5fe_H_r6KEF4Vw5c888-_ZPHYSdSR239IxiYAXtOhJnFVFYLvd-dJUWRQJFNWK9EvhXY9rr8M85A8H9NlVFM7w7GEXuAkQgf6ftb"
      alt="Organic commodities"
      className="w-full h-full object-cover opacity-20"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#f8faf9]/70 via-[#f8faf9]/90 to-[#f8faf9]" />
  </div>

  {/* Decorative Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#775a19]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#00261a]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

  {/* Content */}
  <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">

    <div className="max-w-4xl mx-auto text-center">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-[#ffdea5]/40 text-[#775a19] px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-8">
        <span className="material-symbols-outlined text-[18px]">
          public
        </span>
        Global Trade Network
      </div>

      {/* Heading */}
      <h1
        className="text-[44px] md:text-[64px] leading-[1.02] tracking-[-0.04em] font-bold text-[#00261a] mb-8"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        Connect with Our
        <br />

        <span className="text-[#775a19]">
          Global Export Desk
        </span>
      </h1>

      {/* Description */}
      <p className="text-[18px] md:text-[20px] leading-[1.9] text-[#414944] max-w-3xl mx-auto mb-14">
        Bridging the gap between organic agriculture and industrial precision.
        Reach our dedicated trade specialists for enterprise export solutions,
        global sourcing partnerships, and compliance-driven commodity supply.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5">

        <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#00261a] text-white font-bold tracking-[0.05em] hover:bg-[#0f3d2e] transition-all duration-300 shadow-xl">
          Contact Trade Desk

          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>

        <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-[#d9deda] bg-white/80 backdrop-blur text-[#00261a] font-bold tracking-[0.05em] hover:border-[#775a19] hover:shadow-lg transition-all duration-300">
          Download Company Profile

          <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
            south
          </span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">

        {[
          { value: "40+", label: "Export Nations" },
          { value: "1,200+", label: "Enterprise Clients" },
          { value: "ISO", label: "Certified Systems" },
          { value: "24/7", label: "Trade Support" },
        ].map(({ value, label }) => (
          <div
            key={label}
            className="group bg-white/70 backdrop-blur border border-[#d9deda] rounded-3xl p-6 hover:-translate-y-2 hover:shadow-2xl hover:border-[#775a19] transition-all duration-500"
          >

            <p className="text-[34px] md:text-[40px] font-bold text-[#775a19] mb-2">
              {value}
            </p>

            <p className="text-xs uppercase tracking-[0.18em] text-[#717974]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</header>

        <main className="mx-auto px-16 py-24">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14">

    {/* ───────────────── CONTACT FORM ───────────────── */}
    <div className="xl:col-span-7">
      <div className="relative overflow-hidden rounded-3xl border border-[#d9deda] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.06)]">

        {/* top glow */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#775a19] via-[#ffdea5] to-[#775a19]" />

        {/* decorative blur */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#775a19]/10 blur-3xl" />

        <div className="relative z-10 p-8 md:p-12">

          {/* heading */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#ffdea5]/30 text-[#775a19] text-xs font-bold tracking-[0.15em] uppercase mb-5">
              <span className="material-symbols-outlined text-[18px]">
                handshake
              </span>
              Global Trade Inquiry
            </span>

            <h2
              className="text-[34px] md:text-[42px] leading-[1.1] font-bold tracking-[-0.03em] text-[#00261a] mb-5"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Connect With Our Export Desk
            </h2>

            <p className="text-[16px] md:text-[18px] leading-[1.8] text-[#414944] max-w-2xl">
              Speak directly with our commodity specialists for tailored export
              solutions, compliance guidance, and global sourcing partnerships.
            </p>
          </div>

          {/* form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              {
                label: "Full Name",
                type: "text",
                placeholder: "John Doe",
                icon: "person",
              },
              {
                label: "Company Name",
                type: "text",
                placeholder: "Global Trade Corp",
                icon: "apartment",
              },
              {
                label: "Country of Operation",
                type: "text",
                placeholder: "United Arab Emirates",
                icon: "public",
              },
              {
                label: "Corporate Email",
                type: "email",
                placeholder: "john@enterprise.com",
                icon: "mail",
              },
            ].map(({ label, type, placeholder, icon }) => (
              <div key={label} className="space-y-3">
                <label className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#414944]">
                  {label}
                </label>

                <div className="group relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#717974] group-focus-within:text-[#775a19] transition-colors">
                    {icon}
                  </span>

                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full h-14 pl-14 pr-4 rounded-2xl border border-[#d9deda] bg-[#f8faf9] focus:bg-white focus:border-[#775a19] focus:ring-4 focus:ring-[#775a19]/10 outline-none transition-all text-[16px] text-[#00261a]"
                  />
                </div>
              </div>
            ))}

            {/* commodity */}
            <div className="space-y-3">
              <label className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#414944]">
                Commodity Interest
              </label>

              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#717974]">
                  inventory_2
                </span>

                <select className="w-full h-14 pl-14 pr-4 rounded-2xl border border-[#d9deda] bg-[#f8faf9] focus:bg-white focus:border-[#775a19] focus:ring-4 focus:ring-[#775a19]/10 outline-none appearance-none transition-all text-[16px] text-[#00261a]">
                  <option>Select Commodity</option>
                  <option>Organic Arabica Coffee</option>
                  <option>Premium Basmati Rice</option>
                  <option>Industrial Grade Soybeans</option>
                  <option>Organic Cocoa Butter</option>
                </select>

                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-[#717974] pointer-events-none">
                  expand_more
                </span>
              </div>
            </div>

            {/* quantity */}
            <div className="space-y-3">
              <label className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#414944]">
                Estimated Quantity (MT)
              </label>

              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#717974]">
                  scale
                </span>

                <input
                  type="number"
                  placeholder="500"
                  className="w-full h-14 pl-14 pr-4 rounded-2xl border border-[#d9deda] bg-[#f8faf9] focus:bg-white focus:border-[#775a19] focus:ring-4 focus:ring-[#775a19]/10 outline-none transition-all text-[16px] text-[#00261a]"
                />
              </div>
            </div>

            {/* textarea */}
            <div className="md:col-span-2 space-y-3">
              <label className="text-[13px] font-bold tracking-[0.12em] uppercase text-[#414944]">
                Message / Specification Details
              </label>

              <textarea
                rows={6}
                placeholder="Describe your sourcing requirements, packaging specifications, target markets, certifications, or logistics expectations..."
                className="w-full rounded-3xl border border-[#d9deda] bg-[#f8faf9] px-5 py-4 focus:bg-white focus:border-[#775a19] focus:ring-4 focus:ring-[#775a19]/10 outline-none transition-all text-[16px] text-[#00261a] resize-none"
              />
            </div>

            {/* submit */}
            <div className="md:col-span-2 pt-2">
              <button className="group relative overflow-hidden w-full h-16 rounded-2xl bg-[#00261a] text-white font-bold text-[17px] tracking-[0.04em] shadow-xl hover:-translate-y-1 transition-all duration-300">

                <div className="absolute inset-0 bg-gradient-to-r from-[#775a19] to-[#ffdea5] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-[#261900] transition-colors">
                  Send Inquiry to Export Desk

                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </button>
            </div>
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
        <section className="relative overflow-hidden py-28 md:py-36">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEFnrJroseAi5aGbRsXnV6EgTkXKyxbfKVjYUfWs_C9gLkbcnPTSkE7mHI9fhPxkFlfj6VyFVgWDDU_XrbdWtnh9GNztOSv46uXbdjzIuK7sgnQtTpakVz93VYZ0DNSFi0LwYlYqVDIR4mMBK69zBYM6C3D27qRhKTZUOjLitO9AiRvCUjCVU9mqJVLytdLgi9IakN21Yw4DdMUm55HOTMdvln7-WjIE6nf5rc4tScr1JJdK_CiKrscRzmAirjYuDs8ybRCERe4b16"
      alt="Global trade route map"
      className="w-full h-full object-cover scale-105"
    />

    {/* overlays */}
    <div className="absolute inset-0 bg-[#00261a]/85" />

    <div className="absolute inset-0 bg-gradient-to-b from-[#00261a]/30 via-[#00261a]/70 to-[#00261a]" />

    {/* glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#775a19]/10 rounded-full blur-3xl" />
  </div>

  {/* Floating blur */}
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ffdea5]/10 rounded-full blur-3xl z-10" />

  {/* Content */}
  <div className="relative z-20 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">

    <div className="max-w-4xl mx-auto text-center">

      {/* badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8">
        <span className="material-symbols-outlined text-[#ffdea5] text-[20px]">
          public
        </span>

        <span className="text-[12px] md:text-[13px] font-bold tracking-[0.25em] uppercase text-[#ffdea5]">
          Strategic Integration
        </span>
      </div>

      {/* heading */}
      <h2
        className="text-[40px] md:text-[58px] lg:text-[72px] leading-[0.98] tracking-[-0.05em] font-bold text-white mb-8"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        Our Global
        <span className="block text-[#ffdea5]">
          Network Reach
        </span>
      </h2>

      {/* divider */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-16 h-[2px] bg-[#775a19]" />

        <div className="w-3 h-3 rounded-full bg-[#ffdea5]" />

        <div className="w-16 h-[2px] bg-[#775a19]" />
      </div>

      {/* description */}
      <p className="text-[17px] md:text-[20px] leading-[1.9] text-white/75 max-w-3xl mx-auto mb-14">
        Connecting certified organic producers with international markets
        through optimized logistics corridors, precision sourcing systems,
        and sustainable export infrastructure across multiple continents.
      </p>

      {/* stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {[
          {
            value: "40+",
            label: "Countries",
            icon: "public",
          },
          {
            value: "1200+",
            label: "Partners",
            icon: "groups",
          },
          {
            value: "250K+",
            label: "MT Exported",
            icon: "local_shipping",
          },
          {
            value: "98%",
            label: "On-Time Delivery",
            icon: "verified",
          },
        ].map(({ value, label, icon }) => (
          <div
            key={label}
            className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500"
          >

            <div className="w-14 h-14 rounded-2xl bg-[#ffdea5]/10 border border-[#ffdea5]/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#775a19] transition-all duration-300">

              <span className="material-symbols-outlined text-[#ffdea5] group-hover:text-white transition-colors text-[28px]">
                {icon}
              </span>
            </div>

            <h3 className="text-[32px] md:text-[38px] font-bold text-white mb-2 tracking-[-0.03em]">
              {value}
            </h3>

            <p className="text-[12px] md:text-[13px] uppercase tracking-[0.18em] text-white/60 font-semibold">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* ── TRUST WALL ── */}
        <section className="bg-[#f3f4f3] py-20 border-y border-[#c0c8c3]/10">
          <div className=" mx-auto px-16">
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
