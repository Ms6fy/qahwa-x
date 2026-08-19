"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(91,114,130,0.1)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex h-18 items-center justify-between md:h-20">
            <a href="#" aria-label="E11VN home" className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="E11VN logo"
                width={72}
                height={32}
                className="h-8 w-auto md:h-9"
                src="/images/logo.png"
              />
            </a>

            <div className="hidden items-center gap-10 md:flex">
              <a
                href="#menu"
                className="font-body text-sm font-medium tracking-widest text-slate uppercase transition-colors duration-300 hover:text-charcoal"
              >
                Menu
              </a>
              <a
                href="#vibe"
                className="font-body text-sm font-medium tracking-widest text-slate uppercase transition-colors duration-300 hover:text-charcoal"
              >
                The Vibe
              </a>
              <a
                href="#location"
                className="font-body text-sm font-medium tracking-widest text-slate uppercase transition-colors duration-300 hover:text-charcoal"
              >
                Location
              </a>
            </div>

            <button
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="block h-[1.5px] w-6 bg-charcoal" />
              <span className="block h-[1.5px] w-6 bg-charcoal" />
              <span className="block h-[1.5px] w-6 bg-charcoal" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-cream transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {["Menu", "The Vibe", "Location"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace("the ", "")}`}
            className="font-heading text-3xl text-charcoal transition-colors hover:text-slate"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </>
  );
}
