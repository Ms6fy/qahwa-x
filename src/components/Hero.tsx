"use client";

import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6">
        {/* Animated gradient background */}
        <div
          className="pointer-events-none absolute inset-0 animate-gradient-drift"
style={{
  background:
    "linear-gradient(135deg, #F4E7CF 0%, #F4E7CF 60%, #D9C8A9 100%)",
}}
        />

        {/* Decorative orbs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-pulse-subtle absolute top-[15%] left-[10%] h-64 w-64 rounded-full bg-slate/4" />

          <div
            className="animate-pulse-subtle absolute right-[15%] bottom-[20%] h-48 w-48 rounded-full bg-slate/3"
            style={{ animationDelay: "2s" }}
          />

          <div
            className="animate-pulse-subtle absolute top-[60%] left-[60%] h-32 w-32 rounded-full bg-slate/5"
            style={{ animationDelay: "3.5s" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <p className="reveal reveal-hero font-body mb-6 text-xs font-medium tracking-[0.3em] text-slate uppercase md:mb-8 md:text-sm">
            Coffee • Matcha • Sandos • Music
          </p>

          <h1
            className="reveal reveal-hero font-heading text-5xl lowercase text-dusty-blue sm:text-7xl md:text-8xl lg:text-9xl"
            style={{ transitionDelay: "0.2s" }}
          >
            Beyond
            <br />
            ORDINARY
          </h1>

          <p
            className="reveal reveal-hero font-body mx-auto mt-8 max-w-lg text-base font-light leading-relaxed tracking-wide text-slate md:mt-10 md:text-lg"
            style={{ transitionDelay: "0.4s" }}
          >
            Because normal is boring.
          </p>

          {/* Hero Reel Preview */}
          <div
            className="reveal reveal-scale mx-auto mt-14 max-w-2xl md:mt-20"
            style={{ transitionDelay: "0.6s" }}
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border border-slate/10 bg-cream-dark/60">
              <Image
                alt="Qahwa X Reel"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 960px, 100vw"
                src="/images/hero.jpg"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/10 to-charcoal/60" />

              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/40 bg-cream/90 backdrop-blur-sm transition-transform duration-300 hover:scale-110 md:h-20 md:w-20"
                  aria-label="Watch Reel"
                >
                  <svg
                    className="ml-1 h-6 w-6 text-slate md:h-7 md:w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                <span className="font-body text-[10px] tracking-[0.25em] text-slate/70 uppercase">
                  Watch Reel
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="reveal absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="animate-bounce-down flex flex-col items-center gap-2">
            <span className="font-body text-[10px] tracking-[0.3em] text-slate/50 uppercase">
              Scroll
            </span>

            <svg
              className="h-4 w-4 text-slate/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Instagram Reel Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute -right-4 -top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold shadow-lg"
            >
              ×
            </button>

            {/* نفس أبعاد المثال تقريباً */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
              <iframe
                src="https://www.instagram.com/reel/DTEDt8pjCGF/embed/"
                width="500"
                height="560"
                frameBorder="0"
                scrolling="yes"
                allowTransparency={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title="Instagram Reel"
                className="block"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}