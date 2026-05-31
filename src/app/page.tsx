export default function HarvestoraHome() {
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
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .hero-gradient {
          background: linear-gradient(to bottom, rgba(0, 38, 26, 0.4), rgba(0, 38, 26, 0.8));
        }
        body { font-family: 'Manrope', sans-serif; }
        h1, h2, h3, h4 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c]">
        {/* ── HERO ── */}
        <header className="relative flex min-h-screen items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ0S182czujoQeUlIShcRaltWxTs2qM1294i4zGdiaTeuXUzrlc7FoEnj1FjTTrMI-AIzc_Ii1IfBjMZLvQpVw_oQJhPky9RztbICQi_4gIUsVuxRCNPRdyUjOOVkEgrpTGin7GMEDzqx2oCXWvnbeNXPrcgk74oLghKQbqkHpfK1BYUFXLSV6vSvmV5nvHNkOiL8u3X-5KjqNqwF3XAET0tbzSE7eZuw7oPbAqASK5VvRsKeOgWQR7gPvjgLRm2foTmCx2Sil5P1c"
              alt="Organic tea plantations"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 hero-gradient" />
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-6 sm:space-y-8">
              {/* Heading */}
              <h1
                className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Premium Organic Products Exported Worldwide
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-base leading-relaxed text-[#a2d1bb] sm:text-lg lg:text-xl">
                Connecting Indian farmers to the global market with precision
                and integrity. Experience the pinnacle of organic spice and
                commodity export from India's richest soils.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:flex-wrap">
                <button className="flex items-center justify-center gap-2 border-b-2 border-[#ffdea5] bg-[#00261a] px-8 py-4 text-sm font-semibold tracking-[0.05em] text-white transition-all duration-300 hover:bg-[#0f3d2e]">
                  Request Quote
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    arrow_forward
                  </span>
                </button>

                <button className="glass-card flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold tracking-[0.05em] text-white transition-all duration-300 hover:bg-white/10">
                  View Commodities
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: 18 }}
                  >
                    grid_view
                  </span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ── FARM-TO-PORT JOURNEY ── */}
        <section className="bg-[#f3f4f3] py-16 lg:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="mb-10 lg:mb-16">
              <h2
                className="text-3xl font-semibold tracking-tight text-[#00261a] lg:text-4xl"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Farm-to-Port Journey
              </h2>

              <p className="mt-3 text-base text-[#414944]">
                Our transparent 7-step export workflow ensuring industrial
                precision.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {[
                {
                  step: "01",
                  icon: "agriculture",
                  label: "Organic Sourcing",
                },
                {
                  step: "02",
                  icon: "fact_check",
                  label: "Quality Labs",
                },
                {
                  step: "03",
                  icon: "precision_manufacturing",
                  label: "Processing",
                },
                {
                  step: "04",
                  icon: "inventory_2",
                  label: "Smart Packing",
                },
                {
                  step: "05",
                  icon: "description",
                  label: "Compliance",
                },
                {
                  step: "06",
                  icon: "directions_boat",
                  label: "Global Transit",
                },
                {
                  step: "07",
                  icon: "pin_drop",
                  label: "Port Delivery",
                },
              ].map(({ step, icon, label }) => (
                <div
                  key={step}
                  className="group glass-card flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-b-2 hover:border-[#ffdea5] hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#e7e8e7] text-[#00261a] transition-all duration-300 group-hover:bg-[#0f3d2e] group-hover:text-[#ffdea5]">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 28 }}
                    >
                      {icon}
                    </span>
                  </div>

                  {/* Step */}
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#775a19]">
                    Step {step}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-base font-bold leading-relaxed text-[#00261a]">
                    {label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT CATEGORIES ── */}
        <section className="bg-[#f8faf9] py-16 lg:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="mb-10 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h2
                  className="text-3xl font-semibold tracking-tight text-[#00261a] lg:text-4xl"
                  style={{ fontFamily: "Sora, sans-serif" }}
                >
                  Core Export Categories
                </h2>

                <p className="mt-3 text-base text-[#414944]">
                  Curated selection of premium organic exports.
                </p>
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.05em] text-[#775a19] transition-all hover:gap-3"
              >
                Explore Full Catalog
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: 18 }}
                >
                  arrow_forward
                </span>
              </a>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeXLp71YfE_PBVRMrW7BuE7xWyLRC6UiumM5ro9cYzZwxXNOfQa7v26GALjaxT_TFwFskSdsK6wpdonhHZM1Ms7e7kj6wcSEk5LFf4zYO_GqjEdC0auSEz5e2Uf6QhwltweeXvMfO2_WX0Yf61DsV1yL9jKzoGSIzTly1VWpPba14JCXxBARrFRFwo4nFTZ-k4jsZUY6ZQInu9lONfcTuZ1j29Kyh3GAwQ9TDyJQ-pswRTBbbCTYE-KboIKhBDnH4q0H_nfDpcCWhs",
                  title: "Indian Spices",
                  desc: "Organic Turmeric Exporter, Cumin, and Cardamom from the hills of Munnar.",
                  icon: "spa",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBK83yIapBKuDTLQLsMMgaDY363Xssh_vTXelxycpLAbwIAX8vvww0MOKDETlmGWHD28y-KQEKBVVe4l3z-ii9LZnZA0LcJhmmc0J_hGG788BgqtVKMRpTKMWPHeO5g_j5SEEvssojf_Zw4J1ShpXISA9m6LfI6HqUvAV6oaoSGMIjdp50l-p0ZBQPtevZM4SgCd6gqjOA1pJfImJQTJ-rWkn2KIobSYBM33pQXOGH7_NWNI7TmZfxyniphPl5P_35JrqC6DDJJ1Nbx",
                  title: "Fresh Produce",
                  desc: "Farm-fresh organic vegetables packed with cold-chain precision.",
                  icon: "eco",
                },
                {
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNXr_CSnU8XI8VjDGguiqlRSW_Sujs_ity2mizoR9vS4c9tqYMh4ngdAujmrVeHADOf9vhBdl-5UvipysWpuGTxYRfQQ4S2uj5MSOwcxhQ04F2dm2hb65GjKdsAsnMJPkqXIHIRcKL6pgBhajmEPFmdCdbDuTKEo0J1W5gU8c_Wjc_l6SRjDCacuXJgq3Iv0KI5-xCNlPd72OFhe-yDuzAV1rxJZlNoCt5D5cZMaPDsiPG7XwmnSwKrq_rmGQrxxmuRTt9b9rBeeZd",
                  title: "Global Commodities",
                  desc: "Grains, pulses, and oilseeds meeting international trade standards.",
                  icon: "public",
                },
              ].map(({ img, title, desc, icon }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden rounded-3xl"
                >
                  {/* Image */}
                  <div className="relative h-[420px] overflow-hidden">
                    <img
                      src={img}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00261a]/95 via-[#00261a]/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    {/* Icon */}
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-[#ffdea5] backdrop-blur-md transition-all duration-300 group-hover:bg-[#0f3d2e] group-hover:scale-110">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 28 }}
                      >
                        {icon}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-2xl font-semibold leading-tight text-white lg:text-3xl"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      {title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-[#a2d1bb] lg:text-base">
                      {desc}
                    </p>

                    {/* Button */}
                    <button className="mt-6 inline-flex w-fit items-center gap-2 border border-[#775a19] px-5 py-3 text-sm font-semibold tracking-[0.05em] text-[#ffdea5] transition-all duration-300 hover:bg-[#775a19]/20 hover:gap-3">
                      View Details
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 18 }}
                      >
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GLOBAL REACH ── */}
        <section className="bg-[#00261a] py-16 text-white lg:py-24">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
              {/* Left Content */}
              <div className="space-y-8">
                <div>
                  <h2
                    className="text-3xl font-semibold leading-tight text-[#ffdea5] lg:text-4xl"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    Our Global Reach
                  </h2>

                  <p className="mt-4 text-base leading-relaxed text-[#a2d1bb]/80 lg:text-lg">
                    Connecting Indian soil to over 40 countries across the
                    globe. Our established shipping routes ensure timely
                    delivery to the USA, UAE, Europe, and beyond.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="glass-card rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffdea5]/30">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ffdea5]/10 text-[#ffdea5]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 26 }}
                      >
                        public
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      40+ Countries
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#a2d1bb]/70">
                      Active global export network across Asia, Europe, UAE, and
                      USA.
                    </p>
                  </div>

                  <div className="glass-card rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#ffdea5]/30">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ffdea5]/10 text-[#ffdea5]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 26 }}
                      >
                        local_shipping
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white">
                      Smart Logistics
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#a2d1bb]/70">
                      Reliable shipping hubs and regional warehouses for fast
                      delivery.
                    </p>
                  </div>
                </div>

                {/* Shipping Labels */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffdea5]/10 text-[#ffdea5]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 20 }}
                      >
                        hub
                      </span>
                    </div>

                    <span className="text-sm font-semibold tracking-[0.05em]">
                      Active Shipping Hubs
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#c0c8c3]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 20 }}
                      >
                        warehouse
                      </span>
                    </div>

                    <span className="text-sm font-semibold tracking-[0.05em]">
                      Regional Warehouses
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Map */}
              <div className="relative lg:col-span-2">
                <div className="glass-card group relative flex aspect-video items-center justify-center overflow-hidden rounded-3xl border border-white/10">
                  {/* Background Image */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsE7LtRchA7SkYZFIPOoC2cfNYIEbsTxevVWElx4gHGYliRluQDYGmXQBAbBdpSonLqcbPnOJEzIpTr0neQYs1JZZWCHE8Yj2qVsDd9QUmMWmRuaIyJCjLu8lGW5uoiebPtVFoDUN5BnQRKYnw6f5vn4CHnBl6AOhG2ost5aPe5G0kIhUFWRhq3N2gPgpgaLKB0uWrcFsiQW4PWn52JLyWboyQTO9vKTFFkbaeahM5HNjlpDZ6OPaFOCkhaagZDE4G2tCAxGEfDLBA"
                    alt="Global map"
                    className="absolute inset-0 h-full w-full object-cover opacity-20 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00261a]/70 via-transparent to-[#00261a]/80" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffdea5]/10 text-[#ffdea5] backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ffdea5]/20">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 42 }}
                      >
                        public
                      </span>
                    </div>

                    <p
                      className="mt-6 max-w-md text-2xl font-semibold leading-snug text-[#ffdea5] lg:text-3xl"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      Live Trade Routes Interactive Map
                    </p>

                    <p className="mt-3 text-sm text-[#a2d1bb]/80 lg:text-base">
                      Monitoring global export logistics in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TRUST / CERTIFICATIONS ── */}
        <section className="bg-[#edeeed] py-16 lg:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#414944]">
                Accredited & Certified By
              </p>

              <h2
                className="mt-4 text-3xl font-semibold tracking-tight text-[#00261a] lg:text-4xl"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Trusted Global Export Standards
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#414944]">
                Ensuring compliance, quality assurance, and international export
                reliability through globally recognized certifications.
              </p>
            </div>

            {/* Certification Cards */}
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {[
                {
                  code: "IEC",
                  label: "Export License",
                  icon: "verified",
                },
                {
                  code: "FSSAI",
                  label: "Food Safety",
                  icon: "health_and_safety",
                },
                {
                  code: "APEDA",
                  label: "Agri-Exports",
                  icon: "agriculture",
                },
                {
                  code: "USDA",
                  label: "Organic",
                  icon: "eco",
                },
              ].map(({ code, label, icon }) => (
                <div
                  key={code}
                  className="group glass-card flex flex-col items-center rounded-3xl border border-[#c0c8c3]/30 bg-white/50 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#00261a]/5 text-[#00261a] transition-all duration-300 group-hover:bg-[#00261a] group-hover:text-[#ffdea5]">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: 30 }}
                    >
                      {icon}
                    </span>
                  </div>

                  {/* Code */}
                  <span
                    className="text-2xl font-bold text-[#00261a]"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {code}
                  </span>

                  {/* Label */}
                  <span className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#414944]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INQUIRY SECTION ── */}
        <section className="relative overflow-hidden py-16 lg:py-24">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8faf9] via-white to-[#edf3ef]" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-card overflow-hidden rounded-[32px] border border-white/20 shadow-2xl">
              <div className="flex flex-col lg:flex-row">
                {/* Left Content */}
                <div className="relative overflow-hidden bg-[#00261a] p-8 text-white sm:p-10 lg:w-1/2 lg:p-14">
                  {/* Decorative Blur */}
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ffdea5]/10 blur-3xl" />
                  <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#25D366]/10 blur-3xl" />

                  <div className="relative z-10">
                    {/* Badge */}
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ffdea5]/20 bg-[#ffdea5]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ffdea5]">
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 18 }}
                      >
                        public
                      </span>
                      Worldwide Export Support
                    </div>

                    {/* Heading */}
                    <h2
                      className="text-4xl font-bold leading-tight tracking-tight text-[#ffdea5] lg:text-5xl"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      Global Export Inquiry
                    </h2>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-[#a2d1bb]/80 lg:text-lg">
                      Ready to scale your organic supply? Connect with our trade
                      specialists for detailed quotes, logistics support, and
                      product certifications.
                    </p>

                    {/* Features */}
                    <div className="mt-10 space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffdea5]/10 text-[#ffdea5]">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 24 }}
                          >
                            schedule
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold text-white">
                            24-Hour Response Guarantee
                          </h4>

                          <p className="mt-1 text-sm text-[#a2d1bb]/70">
                            Fast communication with dedicated export managers.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffdea5]/10 text-[#ffdea5]">
                          <span
                            className="material-symbols-outlined"
                            style={{ fontSize: 24 }}
                          >
                            verified_user
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base font-semibold text-white">
                            Verified Trade Compliance
                          </h4>

                          <p className="mt-1 text-sm text-[#a2d1bb]/70">
                            International documentation and certified export
                            quality.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Button */}
                    <a
                      href="https://wa.me/harvestora"
                      className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{ fontSize: 22 }}
                      >
                        forum
                      </span>
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Right Form */}
                <div className="bg-white p-8 sm:p-10 lg:w-1/2 lg:p-14">
                  <div className="mb-8">
                    <h3
                      className="text-3xl font-semibold tracking-tight text-[#00261a]"
                      style={{ fontFamily: "Sora, sans-serif" }}
                    >
                      Request a Quote
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#414944]">
                      Fill in your requirements and our export specialists will
                      contact you shortly.
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* Name + Company */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#414944]">
                          Full Name
                        </label>

                        <input
                          type="text"
                          placeholder="John Doe"
                          className="h-14 w-full rounded-xl border border-[#d9dfdb] bg-[#f7f9f8] px-4 text-sm transition-all focus:border-[#00261a] focus:outline-none focus:ring-2 focus:ring-[#00261a]/10"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#414944]">
                          Company
                        </label>

                        <input
                          type="text"
                          placeholder="Global Trade Inc."
                          className="h-14 w-full rounded-xl border border-[#d9dfdb] bg-[#f7f9f8] px-4 text-sm transition-all focus:border-[#00261a] focus:outline-none focus:ring-2 focus:ring-[#00261a]/10"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#414944]">
                        Work Email
                      </label>

                      <input
                        type="email"
                        placeholder="john@company.com"
                        className="h-14 w-full rounded-xl border border-[#d9dfdb] bg-[#f7f9f8] px-4 text-sm transition-all focus:border-[#00261a] focus:outline-none focus:ring-2 focus:ring-[#00261a]/10"
                      />
                    </div>

                    {/* Select */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#414944]">
                        Commodity Interest
                      </label>

                      <select className="h-14 w-full rounded-xl border border-[#d9dfdb] bg-[#f7f9f8] px-4 text-sm transition-all focus:border-[#00261a] focus:outline-none focus:ring-2 focus:ring-[#00261a]/10">
                        <option>Organic Turmeric</option>
                        <option>Indian Spices Blend</option>
                        <option>Premium Grains</option>
                        <option>Dehydrated Vegetables</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-[#414944]">
                        Message
                      </label>

                      <textarea
                        rows={5}
                        placeholder="Volume and destination requirements..."
                        className="w-full rounded-xl border border-[#d9dfdb] bg-[#f7f9f8] px-4 py-4 text-sm transition-all focus:border-[#00261a] focus:outline-none focus:ring-2 focus:ring-[#00261a]/10"
                      />
                    </div>

                    {/* Submit */}
                    <button className="group mt-2 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#00261a] text-sm font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:bg-[#0b3d2d] hover:shadow-xl">
                      Submit Inquiry
                      <span
                        className="material-symbols-outlined transition-transform duration-300 group-hover:translate-x-1"
                        style={{ fontSize: 20 }}
                      >
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ── FOOTER ── */}
      </div>
    </>
  );
}
