import React from 'react'

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy-900 overflow-hidden min-h-screen flex items-center">

      {/* Subtle ivory grain */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-60" />

      {/* Soft gold glow behind blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brass-300/20 blur-3xl pointer-events-none" />

      <div className="container-px relative w-full grid md:grid-cols-2 gap-8 items-center py-36">

        {/* LEFT — text */}
        <div className="relative z-10">
          <p className="eyebrow mb-6">HR &amp; Workforce Advisory</p>
          <h1 className="font-display text-ivory-warm text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-medium">
            People decisions,
            <br />
            made with{' '}
            <span className="italic text-brass-400">precision</span>.
          </h1>
          <p className="mt-7 text-ivory-warm/70 text-lg max-w-md leading-relaxed">
            Primevalor Consulting helps organizations hire well, develop their people,
            and stay compliant — while giving candidates a clear path from application
            to offer.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center bg-brass-500 text-navy-900 font-semibold text-sm px-7 py-3.5 hover:bg-brass-400 transition-colors"
            >
              Get a free consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center text-ivory-warm/80 text-sm font-medium hover:text-brass-400 transition-colors"
            >
              Explore services →
            </a>
          </div>

          {/* Stat chips */}
          <div className="mt-12 flex items-stretch gap-4">
            <div className="bg-brass-500 px-5 py-4 text-center">
              <p className="font-display text-2xl text-navy-900 font-medium">500+</p>
              <p className="font-mono text-[9px] tracking-widest2 uppercase text-navy-900/70 mt-0.5">Placements</p>
            </div>
            <div className="border border-navy-700 px-5 py-4 text-center">
              <p className="font-display text-2xl text-ivory-warm font-medium">10+</p>
              <p className="font-mono text-[9px] tracking-widest2 uppercase text-ivory-warm/50 mt-0.5">Years active</p>
            </div>
            <div className="border border-navy-700 px-5 py-4 text-center">
              <p className="font-display text-2xl text-ivory-warm font-medium">12+</p>
              <p className="font-mono text-[9px] tracking-widest2 uppercase text-ivory-warm/50 mt-0.5">Sectors served</p>
            </div>
          </div>
        </div>

        {/* RIGHT — large bold blob image */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative">

            {/* Outer ring */}
            <div
              className="absolute border-2 border-brass-500/25"
              style={{ inset: '-28px', borderRadius: '62% 38% 46% 54% / 60% 44% 56% 40%' }}
            />
            {/* Inner ring */}
            <div
              className="absolute border border-brass-400/15"
              style={{ inset: '-54px', borderRadius: '62% 38% 46% 54% / 60% 44% 56% 40%' }}
            />

            {/* Gold dot accents */}
            <span className="absolute -top-10 left-1/3 w-3.5 h-3.5 rounded-full bg-brass-500/50" />
            <span className="absolute top-1/4 -right-12 w-3 h-3 rounded-full bg-brass-500/35" />
            <span className="absolute -bottom-12 right-1/4 w-4 h-4 rounded-full bg-brass-400/25" />
            <span className="absolute bottom-1/3 -left-14 w-2 h-2 rounded-full bg-brass-500/45" />

            {/* Blob image — wide and bold */}
            <div
              className="relative overflow-hidden w-[720px] h-[700px]"
              style={{ borderRadius: '62% 38% 46% 54% / 60% 44% 56% 40%' }}
            >
              <img
                src="/hero-image.jpg"
                alt="Primevalor Consulting — diverse professionals collaborating"
                className="w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
