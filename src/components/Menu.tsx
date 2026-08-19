"use client";

import { useState, useEffect, useRef } from "react";
import { menuCategories } from "@/lib/menu-data";


export default function Menu() {
  const [active, setActive] = useState("hot-coffee");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;
    const items = menuRef.current.querySelectorAll(".menu-item-reveal");
    items.forEach((item, i) => {
      (item as HTMLElement).style.transitionDelay = `${i * 50}ms`;
      void (item as HTMLElement).offsetHeight;
      requestAnimationFrame(() => {
        item.classList.add("revealed");
      });
    });
  }, [active]);

  const activeCategory = menuCategories.find((c) => c.id === active);

  return (
    <section id="menu" className="bg-cream px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <div className="reveal reveal-up mb-16 text-center md:mb-20">
          <p className="font-body mb-4 text-xs font-medium tracking-[0.3em] text-slate uppercase">
            Our Menu
          </p>
          <h2 className="font-heading text-4xl font-bold text-slate md:text-5xl lg:text-6xl">
            Crafted for You
          </h2>
        </div>

        {/* Category tabs */}
        <div className="reveal reveal-up mb-12 md:mb-16">
          <div className="no-scrollbar -mx-6 flex gap-1 overflow-x-auto px-6 pb-4 md:mx-0 md:flex-wrap md:justify-center md:gap-2 md:px-0 md:pb-0">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`relative shrink-0 rounded-full px-5 py-2.5 font-body text-xs font-medium tracking-wider uppercase transition-all duration-300 md:px-6 md:py-3 md:text-sm ${
                  active === cat.id
                    ? "bg-charcoal text-cream shadow-lg"
                    : "bg-cream-dark/60 text-slate hover:bg-cream-dark hover:text-charcoal"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu items */}
        {activeCategory && (
          <div ref={menuRef} key={active}>
           {/* Category header */}
<div className="mb-10 text-center md:mb-14">
  <h3 className="font-heading text-2xl font-bold text-slate md:text-3xl">
    {activeCategory.label}
  </h3>
</div>

            {/* Items grid */}
            <div className="grid gap-2 md:grid-cols-2 md:gap-3">
              {activeCategory.items.map((item) => (
                <div
                  key={item.name}
                  className="menu-item-reveal reveal reveal-up transition-all duration-300"
                >
                  <div className="group relative rounded-lg p-4 transition-all duration-300 hover:bg-warm-white/60">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-heading text-base font-semibold text-slate md:text-lg">
                          {item.name}
                        </h4>
                        {item.description && (
  <p className="font-body mt-1 text-[11px] tracking-[0.15em] text-slate/40 uppercase">
    {item.description}
  </p>
)}
                        {item.variants && (
                          <p className="font-body mt-1.5 text-[11px] tracking-wide text-slate/50 uppercase">
                            {item.variants}
                          </p>
                        )}
                      </div>
                      <div className="shrink-0">
                        <span className="font-heading text-sm font-semibold text-slate md:text-base">
                          {item.price}
                        </span>
                        <span className="font-body ml-1 text-[10px] text-slate/40 uppercase">
                          EGP 
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-2 md:grid-cols-2 md:gap-3">
  ...
</div>

<div className="mt-8 text-center">
  <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-slate">
    Customize Your Drink
  </p>

  <div className="mt-3 space-y-1 text-xs tracking-wide text-slate/60">
    <p>Coconut Milk • Oat Milk +20 EGP</p>
    <p>Add Flavour +20 EGP</p>
    <p>Extra Sauce +25 EGP</p>
    <p>Extra Espresso Shot +25 EGP</p>
    <p>Add Boba +20 EGP</p>
  </div>
</div>
          </div>
        )}
      </div>
    </section>
  );
}
