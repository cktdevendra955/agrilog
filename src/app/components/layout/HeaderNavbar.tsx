"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { HEADER_NAVIGATION } from "../../constants/navigation";

const HeaderNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LOGO */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[#00261a] sm:text-2xl"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Harvestora Global
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 lg:flex">
            {HEADER_NAVIGATION.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-2 text-[15px] font-medium text-[#414944] transition-colors duration-200 hover:text-[#00261a]"
                >
                  <Icon
                    size={16}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden items-center gap-4 lg:flex">          
            <button className="rounded-md border-b-2 border-[#775a19] bg-[#00261a] px-5 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#0f3d2e]">
              Request Quote
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center rounded-md p-2 text-[#00261a] transition hover:bg-gray-100 lg:hidden"
          >
            <Menu size={26} />
          </button>
        </nav>
      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* MOBILE SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* TOP */}
        <div className="flex items-center justify-between border-b border-black/5 px-5 py-5">
          <Link
            href="/"
            className="text-lg font-bold text-[#00261a]"
            style={{ fontFamily: "Sora, sans-serif" }}
          >
            Harvestora Global
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md p-2 transition hover:bg-gray-100"
          >
            <X size={24} className="text-[#00261a]" />
          </button>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col px-5 py-6">
          {HEADER_NAVIGATION.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 border-b border-black/5 py-4 text-[15px] font-medium text-[#414944] transition-colors hover:text-[#00261a]"
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4">
            <button className="w-full rounded-md border-b-2 border-[#775a19] bg-[#00261a] px-5 py-3 text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#0f3d2e]">
              Request Quote
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default HeaderNavbar;