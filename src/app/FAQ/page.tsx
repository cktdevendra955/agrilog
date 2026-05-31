"use client";
import { useState } from "react";

const sidebarLinks = [
  { label: "Export Process", href: "#export-process", icon: "factory" },
  { label: "MOQ & Pricing", href: "#moq-pricing", icon: "payments" },
  { label: "Shipping & Logistics", href: "#shipping", icon: "local_shipping" },
  { label: "Certifications", href: "#certifications", icon: "verified" },
  { label: "Payment Terms", href: "#payment", icon: "credit_card" },
];

const faqSections = [
  {
    id: "export-process",
    icon: "factory",
    title: "Export Process",
    faqs: [
      {
        q: "What is the standard lead time from harvest to port?",
        a: "Our standard lead time typically ranges from 14 to 21 business days, depending on the commodity and the specific processing requirements. For industrial-scale organic grains, the process includes moisture stabilization, laboratory testing for purity, and final automated packaging. We provide a real-time tracking dashboard for all enterprise clients.",
        defaultOpen: true,
      },
      {
        q: "Do you offer white-label industrial packaging?",
        a: "Yes, Harvestora Global provides premium white-label solutions for industrial quantities. Our automated lines can handle custom branding on bulk sacks (25kg - 50kg) and FIBC (Flexible Intermediate Bulk Containers).",
      },
    ],
  },
  {
    id: "moq-pricing",
    icon: "payments",
    title: "MOQ & Pricing",
    faqs: [
      {
        q: "What is the Minimum Order Quantity for global shipping?",
        a: "For international sea freight, our standard MOQ is a 20ft FCL (Full Container Load). For specialized high-value organic powders or essential oils, we can facilitate LCL (Less than Container Load) shipments with a minimum of 500kg.",
      },
    ],
  },
  {
    id: "shipping",
    icon: "local_shipping",
    title: "Shipping & Logistics",
    faqs: [
      {
        q: "Which Incoterms do you typically operate under?",
        a: "While we can accommodate most Incoterms 2020, our default industrial quotes are based on FOB (Free On Board) or CIF (Cost, Insurance, and Freight). Our logistics team handles all customs documentation at the point of origin.",
      },
    ],
  },
];

const popularTags = ["Incoterms 2024", "ISO 22000", "Bulk Shipping"];

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="glass-card overflow-hidden transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 cursor-pointer hover:bg-[#00261a]/5 transition-colors text-left"
      >
        <h3 className="text-[24px] leading-[1.3] font-semibold text-[#00261a] pr-8">{q}</h3>
        <span
          className="material-symbols-outlined text-[#00261a] flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          expand_more
        </span>
      </button>
      {open && (
        <div className="p-8 pt-0 border-t border-[#c0c8c3]/30">
          <p className="text-[16px] leading-[1.6] text-[#414944]">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [activeSection, setActiveSection] = useState("export-process");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=Manrope:wght@400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
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
        .hero-gradient { background: linear-gradient(135deg, #f8faf9 0%, #e7e8e7 100%); }
        body { font-family: 'Manrope', sans-serif; }
        h1,h2,h3,h4,h5 { font-family: 'Sora', sans-serif; }
      `}</style>

      <div className="bg-[#f8faf9] text-[#191c1c] min-h-screen">

        

        <main>

          {/* ── HERO & SEARCH ── */}
          <section className="hero-gradient pt-24 pb-16 px-5 md:px-16">
            <div className="max-w-[1280px] mx-auto text-center">
              <span className="text-[14px] font-semibold tracking-widest text-[#775a19] uppercase mb-4 block">
                Knowledge Base
              </span>
              <h1 className="text-[48px] leading-[1.1] tracking-[-0.02em] font-bold text-[#00261a] mb-8 max-w-3xl mx-auto">
                Technical Export Support &amp; FAQs
              </h1>

              {/* Search */}
              <div className="max-w-2xl mx-auto relative group">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-[#717974]">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  type="text"
                  placeholder="Search technical documentation, logistics, or pricing..."
                  className="w-full pl-14 pr-6 py-6 bg-white border border-[#c0c8c3] focus:border-[#00261a] focus:ring-4 focus:ring-[#775a19]/20 transition-all text-[18px] rounded-none shadow-sm outline-none"
                />
                <div className="absolute inset-y-0 right-4 flex items-center">
                  <kbd className="hidden md:inline-flex items-center gap-1 px-3 py-1 bg-[#e7e8e7] text-[#414944] text-[14px] font-semibold border border-[#c0c8c3] rounded-[4px]">
                    <span>CMD</span><span>K</span>
                  </kbd>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <span className="text-[14px] font-semibold tracking-[0.05em] text-[#414944]">Popular Tags:</span>
                {popularTags.map((tag) => (
                  <a key={tag} href="#" className="px-3 py-1 bg-white border border-[#c0c8c3] text-[14px] font-semibold tracking-[0.05em] text-[#00261a] hover:bg-[#00261a] hover:text-white transition-colors">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* ── FAQ CATEGORIES ── */}
          <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* Sidebar */}
              <aside className="hidden lg:block lg:col-span-3">
                <nav className="sticky top-32 space-y-2">
                  <h3 className="text-[14px] font-semibold tracking-widest text-[#717974] uppercase mb-6">Support Index</h3>
                  {sidebarLinks.map(({ label, href, icon }) => {
                    const isActive = activeSection === href.replace("#", "");
                    return (
                      <a
                        key={label}
                        href={href}
                        onClick={() => setActiveSection(href.replace("#", ""))}
                        className={`flex items-center justify-between p-4 text-[14px] font-semibold tracking-[0.05em] transition-colors ${
                          isActive ? "bg-[#00261a] text-white" : "hover:bg-[#e7e8e7]"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{icon}</span>
                          {label}
                        </span>
                        {isActive && <span className="material-symbols-outlined text-[#775a19]">arrow_right_alt</span>}
                      </a>
                    );
                  })}
                </nav>
              </aside>

              {/* FAQ Accordion Content */}
              <div className="lg:col-span-9 space-y-16">
                {faqSections.map(({ id, icon, title, faqs }) => (
                  <div key={id} className="scroll-mt-32" id={id}>
                    <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-[#00261a] mb-8 flex items-center gap-4">
                      <span className="material-symbols-outlined text-[#775a19]" style={{ fontSize: 32 }}>{icon}</span>
                      {title}
                    </h2>
                    <div className="space-y-4">
                      {faqs.map(({ q, a, defaultOpen }) => (
                        <FaqItem key={q} q={q} a={a} defaultOpen={defaultOpen} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── EXPERT SUPPORT ── */}
          <section className="bg-[#00261a] py-24">
            <div className="max-w-[1280px] mx-auto px-5 md:px-16 text-center">
              <h2 className="text-[32px] leading-[1.2] tracking-[-0.01em] font-semibold text-white mb-6">Didn't find your answer?</h2>
              <p className="text-[18px] leading-[1.6] text-white/70 mb-12 max-w-2xl mx-auto">
                Our trade consultants and logistics experts are available 24/7 to provide technical guidance for your specific enterprise needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: "mail", title: "Technical Inquiry", desc: "Send a detailed request to our quality assurance department.", cta: "Open Contact Form", ctaIcon: "open_in_new" },
                  { icon: "chat", title: "Global Live Support", desc: "Direct access to our logistics desk via WhatsApp Business.", cta: "Chat on WhatsApp", ctaIcon: "send" },
                ].map(({ icon, title, desc, cta, ctaIcon }) => (
                  <div key={title} className="glass-card p-10 text-left border border-white/10">
                    <span className="material-symbols-outlined text-[#775a19] mb-4 block" style={{ fontSize: 36 }}>{icon}</span>
                    <h4 className="text-[24px] leading-[1.3] font-semibold text-white mb-2">{title}</h4>
                    <p className="text-white/60 mb-6 text-[16px]">{desc}</p>
                    <a href="#" className="inline-flex items-center text-[#775a19] text-[14px] font-semibold tracking-[0.05em] hover:underline gap-2">
                      {cta} <span className="material-symbols-outlined" style={{ fontSize: 18 }}>{ctaIcon}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── QUOTE IMAGE STRIP ── */}
          <section className="h-[400px] relative w-full overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-X7NGsP8emVZXB8BuyCALg-vMh1l7Vpu10s3bCyVbsi9ti2EmrV0P5puKJt7T8kzi64FSCB46DZAdQRSeRrTayrb6ZjEP5EwpUpsVo2diVNdso0i10QfbY2FodOm93Q-IyNt4d9xFpS89nUITBGkm28dvafThxRO3zZCvNl8sqOZMCC5_zk0k763DSOGXzhvn5Sy0AFYHjIzE6HRvSogqoBGdhq8qR7T_cke-KQs_P83aUlzPfcA58Q3cDcaVpt0ri5ovEd2bdYyA"
              alt="Industrial organic warehouse"
              className="w-full h-full object-cover grayscale opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#00261a]/20 backdrop-blur-[2px]">
              <div className="text-center max-w-[1280px] mx-auto px-5">
                <p className="text-[32px] leading-[1.2] tracking-[-0.01em] text-white italic font-light tracking-wide">
                  "Precision in every grain, transparency in every trade."
                </p>
              </div>
            </div>
          </section>

        </main>
                

      </div>
    </>
  );
}	
