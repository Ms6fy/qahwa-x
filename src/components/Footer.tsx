export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="reveal reveal-up grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-4xl font-bold text-cream md:text-5xl">
              Qahwa X
            </h3>
            <p className="font-body mt-3 text-sm leading-relaxed text-cream/40">
              Coffee, Matcha, Sandos & Music.
              <br />
              Because normal is boring.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-body mb-4 text-xs font-medium tracking-[0.2em] text-cream/30 uppercase">
              Explore
            </h4>
            <div className="space-y-3">
              <a
                href="#menu"
                className="font-body block text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
              >
                Menu
              </a>
              <a
                href="#vibe"
                className="font-body block text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
              >
                The Vibe
              </a>
              <a
                href="#location"
                className="font-body block text-sm text-cream/60 transition-colors duration-300 hover:text-cream"
              >
                Location
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-body mb-4 text-xs font-medium tracking-[0.2em] text-cream/30 uppercase">
              Connect
            </h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/Qahwa_X"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/50 transition-all duration-300 hover:border-cream/30 hover:text-cream"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
             {/* Facebook */}
<a
  href="https://www.facebook.com/qahwax"
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/50 transition-all duration-300 hover:border-cream/30 hover:text-cream"
  aria-label="Facebook"
>
  <svg
    className="h-4 w-4"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.926-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z" />
  </svg>
</a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@qahwa_x"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/50 transition-all duration-300 hover:border-cream/30 hover:text-cream"
                aria-label="TikTok"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.17v-3.48a4.85 4.85 0 01-2.59-.75 4.87 4.87 0 01-1.41-1.25V6.69h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-cream/6 pt-8 text-center md:flex-row md:gap-4">
          <p className="font-body text-xs text-cream/25">
            &copy; 2026 Qahwa X. All rights reserved.
          </p>
          <p className="font-heading text-sm font-semibold tracking-[0.3em] text-cream/15 uppercase">
            Beyond Ordinary
          </p>
          <p className="font-body text-xs text-cream/30">
            Developed by{" "}
            <a
              href="https://www.instagram.com/ms6.fy/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-cream/20 underline-offset-4 transition-colors hover:text-cream hover:decoration-cream/60"
            >
              Mostafa Mahmoud
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
