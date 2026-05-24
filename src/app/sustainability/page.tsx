"use client";

export default function SustainabilityPage() {
  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Manrope:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        .material-symbols-outlined {
          font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0,
            "opsz" 24;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .text-shadow-subtle {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-surface-container-lowest/70 backdrop-blur-xl border-b border-white/30 shadow-sm">
        <div className="max-w-[1280px] mx-auto px-16 flex justify-between items-center h-20">
          <div className="text-2xl font-semibold text-primary tracking-tight">
            Harvestora Global
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a className="text-body-md" href="#">
              Commodities
            </a>

            <a
              className="text-primary border-b-2 border-secondary font-bold pb-1"
              href="#"
            >
              Sustainability
            </a>

            <a className="text-body-md" href="#">
              Global Network
            </a>

            <a className="text-body-md" href="#">
              Supply Chain
            </a>

            <a className="text-body-md" href="#">
              Certifications
            </a>
          </div>

          <button className="px-6 py-2.5 bg-primary text-white rounded-full border-b-2 border-secondary">
            Request Quote
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBay1vsWUHYzkWUcSq-BmrLsql2peAFd5ELC3KdIhgOxCVRZTGTHNAwZUnD0StJi_fNcHlHUF-fHz5jxgGs26i-cd1r0wAPHJ_Z9wJ98C36w4n5-ljBHfbLUEEH0NfO_FdGWYW0hfNwNNL2xJLcJEIeKKZ5-LMPUqdbWZD9ndDPTv1lJdpJZRUPGbG8agvWwo1RyIz3oXORhJguxMy5WagfdLsj6q1g1ceztleuwEZfCZybkePEy3ScbLD-9F-Vyahka49iR2I4j-b9"
              alt=""
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
          </div>

          <div className="relative z-10 max-w-[1280px] mx-auto px-16 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1 mb-6 bg-yellow-200 text-black rounded-full text-sm font-semibold">
                OUR GLOBAL COMMITMENT
              </span>

              <h1
                className="text-6xl font-bold text-white mb-6 leading-tight text-shadow-subtle"
              >
                Cultivating a Sustainable Future
              </h1>

              <p className="text-xl text-white/90 mb-10 max-w-lg">
                Bridging the gap between ancestral organic wisdom and modern
                industrial precision to nourish the world responsibly.
              </p>

              <div className="flex gap-4">
                <button className="px-8 py-4 bg-black text-white rounded-full border-b-2 border-yellow-500 shadow-lg">
                  Read Our 2024 Impact Report
                </button>

                <button className="px-8 py-4 glass-card text-black rounded-full">
                  Explore Initiatives
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Organic Philosophy */}
        <section className="py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-semibold mb-8 text-primary">
                  Our Organic Philosophy
                </h2>

                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                      <span className="material-symbols-outlined">
                        energy_savings_leaf
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Soil Health Mastery
                      </h3>

                      <p>
                        We treat soil as a living organism, utilizing
                        regenerative crop rotation and natural composting to
                        enhance nutrient density.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                      <span className="material-symbols-outlined">
                        potted_plant
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Chemical-Free Integrity
                      </h3>

                      <p>
                        Strict zero-synthetic pesticide policies ensure that our
                        exports remain as pure as nature intended.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                      <span className="material-symbols-outlined">
                        compost
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold mb-2">
                        Biodiversity Corridors
                      </h3>

                      <p>
                        Integrating wildflower buffers and natural habitats
                        within our farms to support local pollinators and
                        wildlife.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuByvWH-CdgY8rJOjyG-LlRKCoHCV0zg3MhiK5n3Owl8yF1SjYh6KngDdopzS25cspYp7BCXPhFKJx23WxEBUTMa2tOiMLn4uN3OR0XQKX8C8D2lOCDkZoKI884yjYGIKEHujBlOFkenRYFi24_sC2333RV6PrH1DiGZf3j_Fn_8JEFOVa4MqffKN-RdLFyDAnJ_H3vGhoqmJ-nQvAud1TT5dMCKl_SYHhbKXNazN-qUAkIxlTueHkJx7QAYv374kHH3u-XG0vBvHPyi"
                    alt=""
                  />
                </div>

                <div className="absolute -bottom-8 -left-8 glass-card p-8 max-w-xs shadow-xl rounded-xl">
                  <p className="text-5xl font-bold text-yellow-700 leading-none mb-2">
                    98%
                  </p>

                  <p className="text-sm font-semibold">
                    REDUCTION IN SYNTHETIC INPUTS SINCE 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Chain */}
        <section className="py-24 bg-black text-white">
          <div className="max-w-[1280px] mx-auto px-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold mb-4">
                Eco-Friendly Supply Chain
              </h2>

              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                From the field to the final destination, every step is optimized
                for the planet.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-10 rounded-xl">
                <span className="material-symbols-outlined text-5xl mb-6">
                  local_shipping
                </span>

                <h3 className="text-2xl font-semibold mb-4">
                  Carbon-Neutral Shipping
                </h3>

                <p>
                  Utilizing bio-fueled maritime routes and electric regional
                  fleets to offset 100% of transport emissions.
                </p>
              </div>

              <div className="glass-card p-10 rounded-xl">
                <span className="material-symbols-outlined text-5xl mb-6">
                  inventory_2
                </span>

                <h3 className="text-2xl font-semibold mb-4">
                  Biodegradable Packaging
                </h3>

                <p>
                  Transitioning to mushroom-based and plant-fiber insulation for
                  all industrial export containers.
                </p>
              </div>

              <div className="glass-card p-10 rounded-xl">
                <span className="material-symbols-outlined text-5xl mb-6">
                  solar_power
                </span>

                <h3 className="text-2xl font-semibold mb-4">
                  Renewable Facilities
                </h3>

                <p>
                  Our global processing hubs operate on 85% wind and solar
                  energy, with a goal of 100% by 2026.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full pt-16 pb-8 bg-black text-white">
          <div className="max-w-[1280px] mx-auto px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-semibold mb-6">
                Harvestora Global
              </div>

              <p className="text-white/70">
                Defining the next era of industrial organic agriculture through
                transparency and precision.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-6 uppercase tracking-wider">
                Services
              </h4>

              <ul className="space-y-4">
                <li>
                  <a href="#">Global Offices</a>
                </li>

                <li>
                  <a href="#">Quality Assurance</a>
                </li>

                <li>
                  <a href="#">Trade Compliance</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 uppercase tracking-wider">
                Reports
              </h4>

              <ul className="space-y-4">
                <li>
                  <a href="#">Sustainability Report</a>
                </li>

                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Career Portal</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 uppercase tracking-wider">
                Newsletter
              </h4>

              <div className="flex flex-col gap-4">
                <p className="text-white/70 text-sm">
                  Join our network for monthly sustainability insights.
                </p>

                <div className="relative">
                  <input
                    className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 outline-none"
                    placeholder="Email address"
                    type="email"
                  />

                  <button className="absolute right-2 top-2 p-1.5 bg-yellow-300 text-black rounded-md">
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[1280px] mx-auto px-16 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2024 Harvestora Global Enterprise. All rights reserved.
            </p>

            <div className="flex gap-6">
              <span className="material-symbols-outlined cursor-pointer">
                language
              </span>

              <span className="material-symbols-outlined cursor-pointer">
                share
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
