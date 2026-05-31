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
        <header className="relative h-[716px] flex items-center overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHwNY1EPsQpci2_ezJfWcL_qV-jooMN76EE3TIdK9XHCix-Bdq0BKmsq1m4n_LtnIYSSF__LRXp-e3TJRicfu0aiDNoyKLK4k74qu7DxBe4Q7a2357lvSw-xCMl0yZLiqr06OVpixG5vKYAMovjbr0ELUIusw2HrSf3Z1iDiwRZFu0lGpuA2HEwHK71fvKY7dZ_iujlSB_S06Cuh4JZ2e6p9PK1_cXhq7TLUOC1Niw28Ks7pVXRzM_rpY-mE-2gxDL8zppmay8wp9R"
            alt="Laboratory hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00261a]/80 to-transparent" />
          <div className="relative max-w-[1280px] mx-auto px-16 w-full">
            <div className="max-w-2xl">
              <span className="text-[14px] font-semibold tracking-widest text-[#ffdea5] uppercase mb-4 block">
                Quality Without Compromise
              </span>
              <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-white mb-6">
                Our Commitment to Global Quality Standards
              </h1>
              <p className="text-[18px] leading-[1.6] text-white/90 mb-8">
                Bridging the gap between organic vitality and industrial precision through rigorous validation and international compliance.
              </p>
              <div className="flex gap-4">
                <div className="glass-card px-6 py-3 rounded-xl flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00261a]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-[14px] font-semibold tracking-[0.05em] text-[#00261a]">ISO 22000 Certified</span>
                </div>
                <div className="glass-card px-6 py-3 rounded-xl flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#00261a]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                  <span className="text-[14px] font-semibold tracking-[0.05em] text-[#00261a]">USDA Organic Seal</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── TRUST WALL: CERTIFICATIONS ── */}
        <section className="py-24 bg-[#f8faf9]">
          <div className="max-w-[1280px] mx-auto px-16">
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
        <section className="py-24 bg-[#f3f4f3]">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <span className="text-[14px] font-semibold tracking-widest text-[#775a19] uppercase mb-4 block">
                  Analytical Precision
                </span>
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-6">
                  NABL Accredited Laboratory Testing
                </h2>
                <p className="text-[18px] leading-[1.6] text-[#414944] mb-8">
                  Every batch undergoes rigorous chemical and microbial analysis to ensure zero contamination. We treat agriculture with pharmaceutical seriousness.
                </p>
                <div className="space-y-6">
                  {labTests.map(({ icon, title, desc }) => (
                    <div key={title} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-[#775a19]" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                      <div>
                        <h4 className="text-[18px] font-semibold text-[#00261a] mb-1">{title}</h4>
                        <p className="text-[16px] leading-[1.6] text-[#414944]">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="absolute -top-4 -left-4 w-64 h-64 bg-[#775a19]/10 rounded-full blur-3xl" />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjGHREcweA7tE2SyAfnRvNz4OHfDl6rNQAUlp1c6L_OEWqLJCwoAWYHI7815Gv7jxIez6pXKdDD3Dq_88T1szCTY8RIf5HV-3XzTPs_06HcRWDzx9r9lsXO0AX3jyBP1u3mKskn-K0adc_MpdllmJvXh-8l8_EoNH5Qm4-fgOyGwY_CoKkY3R32GKJ64_bnp52xGiXmijOH2ESEXmIzYBu9bUXn9B1dplS-l82V0YgJ91uzUESLjXpgsGpteLpkbmOng6RBeGDi6qH"
                  alt="Lab testing"
                  className="rounded-xl shadow-2xl relative z-10 w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── EXPORT COMPLIANCE CHECKLIST ── */}
        <section className="py-24 bg-[#f8faf9]">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="bg-[#00261a] p-12 rounded-2xl flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-white mb-4">
                  Export Compliance Audit
                </h2>
                <p className="text-[16px] leading-[1.6] text-white/70">
                  Our 100% adherence to international organic farming and processing standards is non-negotiable.
                </p>
                <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
                  <span className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#ffdea5]">100%</span>
                  <p className="text-[14px] font-semibold tracking-[0.05em] text-white">Regulatory Acceptance Rate</p>
                </div>
              </div>
              <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {complianceItems.map((item) => (
                  <div key={item} className="flex items-center gap-4 p-4 border border-white/10 rounded-[4px]">
                    <span className="material-symbols-outlined text-[#ffdea5]">check_circle</span>
                    <span className="text-[16px] leading-[1.6] text-white">{item}</span>
                  </div>
                ))}
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
