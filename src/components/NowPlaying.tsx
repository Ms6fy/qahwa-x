"use client";

export default function NowPlaying() {
  return (
    <div className="fixed right-5 bottom-5 z-40 md:right-8 md:bottom-8">
      <button
        className="flex items-center gap-3 rounded-full bg-charcoal px-5 py-3 shadow-lg transition-colors duration-300 hover:bg-charcoal-light"
        tabIndex={0}
      >
        <div className="flex items-end gap-[3px]">
          <div
            className="w-[3px] rounded-full bg-slate-light"
            style={{ height: 6 }}
          />
          <div
            className="w-[3px] rounded-full bg-slate-light"
            style={{ height: 10 }}
          />
          <div
            className="w-[3px] rounded-full bg-slate-light"
            style={{ height: 8 }}
          />
          <div
            className="w-[3px] rounded-full bg-slate-light"
            style={{ height: 6 }}
          />
        </div>
        <span className="font-body text-xs font-medium tracking-wider text-cream uppercase">
          Now Playing
        </span>
      </button>
    </div>
  );
}
