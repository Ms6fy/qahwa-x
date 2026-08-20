export default function Location() {
  return (
    <section id="location" className="bg-cream px-6 py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="reveal reveal-up mb-16 text-center md:mb-20">
          <p className="font-body mb-4 text-xs font-medium tracking-[0.3em] text-slate uppercase">
            Find Us
          </p>
          <h2 className="font-heading text-4xl font-bold text-slate md:text-5xl lg:text-6xl">
            Come Say Hey
          </h2>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <div>
            <div className="reveal reveal-left max-w-md">
              <div className="mb-10">
                <h3 className="font-heading mb-3 text-xl font-bold text-slate">
                  Location
                </h3>
                <p className="font-body text-base leading-relaxed text-slate">
                  Qahwa X Cafe
                  <br />
                 DownTown Mall , Sadat City , Egypt

                </p>
              </div>

              <div className="mb-10">
                <h3 className="font-heading mb-3 text-xl font-bold text-slate">
                  Hours
                </h3>
                <div className="font-body text-base text-slate">
                  <div className="flex justify-between">
                    <span>Daily</span>
                    <span className="font-medium text-charcoal">
                      9 AM — 12 AM
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-heading mb-3 text-xl font-bold text-slate">
                  Get in Touch
                </h3>
                <div className="font-body space-y-2 text-base text-slate">
                  <p>
                    <span className="mr-2 text-slate/40">IG</span>
                    <a
                      href="https://www.instagram.com/Qahwa_X"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-slate/20 underline-offset-4 transition-colors hover:text-charcoal hover:decoration-charcoal/30"
                    >
                      @qahwax
                    </a>
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate/10" />
                <span className="font-body text-[10px] tracking-[0.3em] text-slate/30 uppercase">
                  Beyond Ordinary
                </span>
                <div className="h-px flex-1 bg-slate/10" />
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <div className="reveal reveal-right group relative overflow-hidden rounded-2xl shadow-lg">
              <div className="transition-all duration-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d430.2808118680352!2d30.4992733!3d30.3723577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458bf9a60734eed%3A0x9f14a9d12e74cc83!2z2YLZh9mI2KkgWA!5e0!3m2!1sen!2seg!4v1787089022694!5m2!1sen!2seg"
                  width="100%"
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full grayscale transition-all duration-700 group-hover:grayscale-0"
                  title="Qahwa X Location"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-charcoal/5 opacity-100 transition-opacity duration-700 group-hover:opacity-0">
                <span className="font-body rounded-full bg-cream/90 px-5 py-2.5 text-xs font-medium tracking-widest text-slate shadow-sm uppercase backdrop-blur-sm">
                  Hover to explore
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
