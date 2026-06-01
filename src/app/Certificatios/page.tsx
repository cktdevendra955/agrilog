export default function CertificationsPage() {
  const certCards = [
    { icon: "language", title: "IEC", desc: "Import Export Code enabling global trade fluidity across 60+ nations." },
    { icon: "restaurant", title: "FSSAI", desc: "Food Safety and Standards Authority validation for industrial health." },
    { icon: "agriculture", title: "APEDA", desc: "Agricultural & Processed Food Products Export Development Authority." },
    { icon: "psychiatry", title: "USDA", desc: "100% Organic certified for European and North American markets." },
    { icon: "security", title: "ISO 22000", desc: "International Food Safety Management Systems excellence." },
  ];

  const labTests = [
    { icon: "biotech", title: "Pesticide Residue Analysis", desc: "Screening for over 400+ banned chemical compounds to ensure 100% purity." },
    { icon: "science", title: "Heavy Metal Trace Screening", desc: "Advanced spectroscopy for detecting lead, arsenic, and cadmium levels." },
    { icon: "microbiology", title: "Microbial Load Verification", desc: "Stringent testing for Salmonella, E. Coli, and fungal pathogens." },
  ];

  const complianceItems = [
    "Soil Health Certification",
    "Traceable Supply Batching",
    "Phytosanitary Certification",
    "Non-GMO Verification",
    "Cold Chain Maintenance",
    "Fumigation Standards",
  ];

  const journeySteps = [
    { num: 1, title: "Soil Testing", desc: "Baseline analysis before planting to ensure optimal organic mineral content." },
    { num: 2, title: "Farm Audit", desc: "On-site inspections of farming practices and harvest methods." },
    { num: 3, title: "Lab Analysis", desc: "Post-harvest testing for pesticide residue and global purity standards." },
    { num: 4, title: "Seal Inspection", desc: "Final inspection and container sealing under third-party surveillance." },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          vertical-align: middle;
          font-style: normal;
          line-height: 1;
        }
        .glass-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.3);
        }
        .gold-border-hover {
          border-bottom: 2px solid transparent;
          transition: border-color 0.3s cubic-bezier(0.23,1,0.32,1);
        }
        .gold-border-hover:hover { border-bottom-color: #775a19; }
        .timeline-node { position: relative; }
        .timeline-node::after {
          content: '';
          position: absolute;
          width: 12px;
          height: 12px;
          background: #775a19;
          border-radius: 50%;
          left: 50%;
          transform: translateX(-50%);
          bottom: -34px;
        }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">

        {/* ── NAVBAR ── */}
       

        {/* ── HERO ── */}
        
<header className="relative min-h-screen lg:h-[820px] flex items-center overflow-hidden bg-[#00261a]">
  
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHwNY1EPsQpci2_ezJfWcL_qV-jooMN76EE3TIdK9XHCix-Bdq0BKmsq1m4n_LtnIYSSF__LRXp-e3TJRicfu0aiDNoyKLK4k74qu7DxBe4Q7a2357lvSw-xCMl0yZLiqr06OVpixG5vKYAMovjbr0ELUIusw2HrSf3Z1iDiwRZFu0lGpuA2HEwHK71fvKY7dZ_iujlSB_S06Cuh4JZ2e6p9PK1_cXhq7TLUOC1Niw28Ks7pVXRzM_rpY-mE-2gxDL8zppmay8wp9R"
      alt="Laboratory hero"
      className="w-full h-full object-cover scale-105"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#00160f]/95 via-[#00261a]/75 to-[#00261a]/20" />

    {/* Extra blur circles */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#775a19]/20 rounded-full blur-3xl" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#beedd7]/10 rounded-full blur-3xl" />
  </div>

  {/* Content */}
  <div className="relative z-20 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 w-full py-32">
    
    <div className="max-w-3xl">

      {/* Top Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8">
        <div className="w-8 h-8 rounded-full bg-[#ffdea5]/20 flex items-center justify-center">
          <span
            className="material-symbols-outlined text-[#ffdea5]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
        </div>

        <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.18em] uppercase text-[#ffdea5]">
          Global Quality Assurance
        </span>
      </div>

      {/* Heading */}
      <h1
        className="text-[42px] sm:text-[54px] md:text-[72px] leading-[0.95] tracking-[-0.04em] font-bold text-white mb-8"
        style={{ fontFamily: "Sora, sans-serif" }}
      >
        Our Commitment
        <br />
        to{" "}
        <span className="text-[#ffdea5]">
          Global Quality
        </span>
      </h1>

      {/* Description */}
      <p className="text-[18px] md:text-[21px] leading-[1.8] text-[#dce9e2] max-w-2xl mb-12">
        Bridging the gap between organic vitality and industrial precision
        through rigorous testing, international compliance, and advanced
        agricultural science.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-5 mb-16">

        <a
          href="#standards"
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#ffdea5] text-[#261900] text-[15px] font-bold tracking-[0.05em] hover:scale-[1.03] transition-all duration-300 shadow-2xl"
        >
          Explore Standards
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>

        <a
          href="#certifications"
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white text-[15px] font-semibold tracking-[0.05em] hover:bg-white/20 transition-all duration-300"
        >
          View Certifications
          <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">
            workspace_premium
          </span>
        </a>
      </div>

      {/* Certification Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {[
          {
            icon: "verified",
            title: "ISO 22000",
            desc: "International food safety compliance",
          },
          {
            icon: "eco",
            title: "USDA Organic",
            desc: "Certified organic export integrity",
          },
          {
            icon: "science",
            title: "Lab Verified",
            desc: "Third-party purity & quality testing",
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-6 hover:bg-white/15 hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#ffdea5]/15 border border-[#ffdea5]/20 flex items-center justify-center mb-5 group-hover:bg-[#775a19] transition-all duration-300">
              <span
                className="material-symbols-outlined text-[#ffdea5] group-hover:text-white transition-colors"
                style={{ fontVariationSettings: "'FILL' 1", fontSize: 30 }}
              >
                {icon}
              </span>
            </div>

            <h3 className="text-[20px] font-bold text-white mb-2">
              {title}
            </h3>

            <p className="text-[14px] leading-[1.7] text-white/70">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Bottom Fade */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f8faf9] to-transparent z-10" />
</header>

        {/* ── TRUST WALL: CERTIFICATIONS ── */}
        <section className="py-24 bg-[rgb(248,250,249)]">
          <div className=" mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-4">
                Accreditation &amp; Compliance
              </h2>
              <div className="h-1 w-24 bg-[#775a19] mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {certCards.map(({ icon, title, desc }) => (
                <div key={title} className="glass-card p-8 rounded-xl gold-border-hover flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-[#beedd7] rounded-full flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[#00261a]" style={{ fontSize: 30 }}>{icon}</span>
                  </div>
                  <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] mb-3">{title}</h3>
                  <p className="text-[16px] leading-[1.6] text-[#414944] mb-6">{desc}</p>
                  <a href="#" className="mt-auto text-[14px] font-semibold tracking-[0.05em] text-[#775a19] border-b border-[#775a19]/30 hover:border-[#775a19]">
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LAB TESTING ── */}
{/* ── NABL LAB SECTION ── */}
<section className="py-24 bg-[#f8faf9] overflow-hidden relative">
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#775a19]/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#00261a]/5 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

  <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT CONTENT */}
      <div>

        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-[#ffdea5]/40 text-[#775a19] px-4 py-1 rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-6">
          <span className="material-symbols-outlined text-[18px]">
            biotech
          </span>
          Analytical Precision
        </span>

        {/* Heading */}
        <h2
          className="text-[38px] md:text-[48px] leading-[1.05] tracking-[-0.03em] font-bold text-[#00261a] mb-6"
          style={{ fontFamily: "Sora, sans-serif" }}
        >
          NABL Accredited Laboratory Testing
        </h2>

        {/* Description */}
        <p className="text-[17px] md:text-[18px] leading-[1.9] text-[#414944] mb-12 max-w-xl">
          Every export batch undergoes rigorous chemical, microbial, and
          purity analysis to guarantee contamination-free organic integrity.
          We approach agriculture with pharmaceutical-level precision.
        </p>

        {/* Feature List */}
        <div className="space-y-5">

          {labTests.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-[#d9deda] hover:border-[#775a19] hover:shadow-xl transition-all duration-500"
            >

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#f3f4f3] group-hover:bg-[#775a19] flex items-center justify-center transition-all duration-300 shrink-0">
                <span
                  className="material-symbols-outlined text-[#775a19] group-hover:text-white transition-colors"
                  style={{
                    fontSize: 28,
                    fontVariationSettings: "'FILL' 1",
                  }}
                >
                  {icon}
                </span>
              </div>

              {/* Text */}
              <div>
                <h4 className="text-[20px] font-bold text-[#00261a] mb-2">
                  {title}
                </h4>

                <p className="text-[15px] leading-[1.8] text-[#414944]">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 gap-6 mt-12">

          <div className="bg-white border border-[#d9deda] rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
            <p className="text-[42px] font-bold text-[#775a19] mb-2">
              100%
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-[#717974]">
              Batch Traceability
            </p>
          </div>

          <div className="bg-white border border-[#d9deda] rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
            <p className="text-[42px] font-bold text-[#775a19] mb-2">
              24h
            </p>
            <p className="text-xs uppercase tracking-[0.15em] text-[#717974]">
              Rapid Analysis Cycle
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="relative">

        {/* Decorative Card */}
        <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-[#ffdea5]/30 blur-3xl" />

        {/* Main Image */}
        <div className="group relative rounded-[32px] overflow-hidden shadow-2xl">

          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjGHREcweA7tE2SyAfnRvNz4OHfDl6rNQAUlp1c6L_OEWqLJCwoAWYHI7815Gv7jxIez6pXKdDD3Dq_88T1szCTY8RIf5HV-3XzTPs_06HcRWDzx9r9lsXO0AX3jyBP1u3mKskn-K0adc_MpdllmJvXh-8l8_EoNH5Qm4-fgOyGwY_CoKkY3R32GKJ64_bnp52xGiXmijOH2ESEXmIzYBu9bUXn9B1dplS-l82V0YgJ91uzUESLjXpgsGpteLpkbmOng6RBeGDi6qH"
            alt="Lab testing"
            className="w-full h-[720px] object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00261a]/70 via-transparent to-transparent" />

          {/* Floating Card */}
          <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">

            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#ffdea5]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#ffdea5] text-[30px]">
                  verified
                </span>
              </div>

              <div>
                <p className="text-white font-bold tracking-[0.05em]">
                  NABL Certified Facility
                </p>

                <p className="text-white/60 text-sm">
                  Internationally compliant laboratory infrastructure
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">

              <div>
                <p className="text-[28px] font-bold text-[#ffdea5]">
                  50+
                </p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/60">
                  Tests
                </p>
              </div>

              <div>
                <p className="text-[28px] font-bold text-[#ffdea5]">
                  ISO
                </p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/60">
                  Validated
                </p>
              </div>

              <div>
                <p className="text-[28px] font-bold text-[#ffdea5]">
                  99.9%
                </p>
                <p className="text-[11px] uppercase tracking-[0.15em] text-white/60">
                  Purity
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ── EXPORT COMPLIANCE CHECKLIST ── */}
<section className="py-24 bg-[#f8faf9] overflow-hidden relative">
  
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-[#775a19]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
  <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#00261a]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

  <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">

    <div className="relative overflow-hidden rounded-[36px] bg-[#00261a] border border-white/10 shadow-2xl">

      {/* Decorative Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,222,165,0.12),transparent_30%)]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-12 lg:p-16">

        {/* LEFT PANEL */}
        <div className="lg:col-span-4 flex flex-col justify-between">

          <div>

            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-[#ffdea5] px-4 py-1 rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-6">
              <span className="material-symbols-outlined text-[18px]">
                verified
              </span>
              Global Compliance
            </span>

            {/* Heading */}
            <h2
              className="text-[38px] md:text-[48px] leading-[1.05] tracking-[-0.03em] font-bold text-white mb-6"
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Export Compliance Audit
            </h2>

            {/* Description */}
            <p className="text-[17px] leading-[1.9] text-white/70 max-w-md">
              Our commitment to international food safety, organic integrity,
              and pharmaceutical-grade validation ensures seamless global
              acceptance across every export destination.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-5">

            <div className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur-xl">
              <p className="text-[52px] font-bold text-[#ffdea5] leading-none mb-3">
                100%
              </p>

              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                Regulatory Acceptance
              </p>
            </div>

            <div className="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur-xl">
              <p className="text-[52px] font-bold text-[#ffdea5] leading-none mb-3">
                40+
              </p>

              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                Export Nations
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT GRID */}
        <div className="lg:col-span-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {complianceItems.map((item, index) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#ffdea5]/40 transition-all duration-500 p-6 backdrop-blur-md"
              >

                {/* Glow Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-[#ffdea5]/5 to-transparent transition-opacity duration-500" />

                <div className="relative z-10 flex items-start gap-4">

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#ffdea5]/10 border border-[#ffdea5]/10 flex items-center justify-center shrink-0 group-hover:bg-[#775a19] transition-all duration-300">
                    <span
                      className="material-symbols-outlined text-[#ffdea5] group-hover:text-white transition-colors"
                      style={{
                        fontSize: 28,
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      check_circle
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex items-center justify-between gap-4 mb-2">

                      <span className="text-[12px] uppercase tracking-[0.18em] text-[#ffdea5]/60 font-bold">
                        0{index + 1}
                      </span>

                      <span className="w-2 h-2 rounded-full bg-[#ffdea5]" />
                    </div>

                    <h3 className="text-[18px] font-bold text-white leading-[1.5]">
                      {item}
                    </h3>

                    <p className="text-[14px] leading-[1.7] text-white/55 mt-2">
                      Fully validated according to international export
                      regulations and global organic compliance protocols.
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Bottom Note */}
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#775a19]/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#ffdea5] text-[30px]">
                  policy
                </span>
              </div>

              <div>
                <h4 className="text-[18px] font-bold text-white mb-1">
                  Enterprise-Level Validation
                </h4>

                <p className="text-[14px] text-white/60">
                  Third-party audited quality systems for USA, EU, UAE & APAC markets.
                </p>
              </div>
            </div>

            <button className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#ffdea5] text-[#00261a] font-bold tracking-[0.05em] hover:bg-white transition-all duration-300">
              Download Compliance Report

              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
        {/* ── QUALITY JOURNEY TIMELINE ── */}
        <section className="py-24 bg-[#f8faf9]">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="text-center mb-20">
              <span className="text-[14px] font-semibold tracking-widest text-[#775a19] uppercase mb-4 block">
                End-to-End Governance
              </span>
              <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a]">
                The Harvestora Quality Journey
              </h2>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4">
              <div className="absolute top-6 left-0 w-full h-0.5 bg-[#0f3d2e]/20 hidden md:block" />
              {journeySteps.map(({ num, title, desc }) => (
                <div key={num} className="relative z-10 flex-1 text-center md:px-4">
                  <div className="timeline-node w-12 h-12 bg-[#00261a] rounded-full mx-auto flex items-center justify-center mb-12 shadow-lg">
                    <span className="text-white font-bold">{num}</span>
                  </div>
                  <h4 className="text-[18px] font-semibold text-[#00261a] mb-2">{title}</h4>
                  <p className="text-[16px] leading-[1.6] text-[#414944]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       

      </div>
    </>
  );
}
