import Image from "next/image";

export default function Vibe() {
  return (
    <section id="vibe" className="bg-cream px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="reveal reveal-up mb-16 text-center md:mb-20">
          <p className="font-body mb-4 text-xs font-medium tracking-[0.3em] text-slate uppercase">
            The Vibe
          </p>
          <h2 className="font-heading text-4xl font-bold text-slate md:text-5xl lg:text-6xl">
            Hungry, Thirsty
            <br />
            or Bored?
          </h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div className="lg:sticky lg:top-32">
            <div className="reveal reveal-left max-w-lg">
              <h3 className="font-heading mb-6 text-2xl font-bold text-slate md:text-3xl">
                BREWED WITH PURPOSE.
                <br />
                DEFINED BY QUALITY.
              </h3>
              <p className="font-body mb-6 text-base leading-relaxed text-slate md:text-lg">
  At Qahwa X, coffee is more than a beverage—it is a craft. Every bean is
  carefully chosen, every recipe thoughtfully refined, and every cup served
  with precision and passion.
</p>

<p className="font-body text-base leading-relaxed text-slate md:text-lg">
  From rich espresso classics to specialty creations, we are dedicated to
  delivering an experience defined by quality, consistency, and attention to
  detail. Because great coffee should never be ordinary.
</p>

              {/* Divider */}
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate/15" />
                <span className="font-heading text-sm font-semibold tracking-widest text-slate/40 uppercase">
                  QX
                </span>
                <div className="h-px flex-1 bg-slate/15" />
              </div>

              <p className="font-body mt-10 text-sm leading-relaxed text-slate/70 md:text-base">
                Exceptional coffee, genuine hospitality, and moments worth savoring —
that’s what makes every visit feel like Qahwa X.
              </p>
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="reveal reveal-right relative overflow-hidden rounded-2xl bg-charcoal shadow-2xl">
              <div className="relative aspect-4/5 w-full md:aspect-4/3">
                <Image
                  alt="The vibe at E11VN — music, coffee and friends"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 560px, 100vw"
                  src="/images/vibe.jpg"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-body text-xs font-medium tracking-[0.25em] text-cream/70 uppercase">
  Quality In Every Detail
</p>

<p className="font-heading mt-2 text-xl font-semibold text-cream md:text-2xl">
  Crafted coffee. Memorable moments.
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
