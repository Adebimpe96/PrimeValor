import React from 'react'
import NetworkMotif from './NetworkMotif.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy-900 overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 bg-grain pointer-events-none" />
      <div className="container-px relative grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow mb-6">HR &amp; Workforce Advisory</p>
          <h1 className="font-display text-ivory-warm text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-medium">
            People decisions,
            <br />
            made with <span className="italic text-brass-400">precision</span>.
          </h1>
          <p className="mt-7 text-ivory-warm/70 text-lg max-w-md leading-relaxed">
            Primevalor Consulting helps organizations hire well, develop their people,
            and stay compliant — while giving candidates a clear path from application
            to offer.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center bg-brass-500 text-navy-900 font-medium text-sm px-7 py-3.5 hover:bg-brass-400 transition-colors"
            >
              Talk to our team
            </a>
            <a
              href="#services"
              className="inline-flex items-center text-ivory-warm/80 text-sm font-medium px-2 py-3.5 hover:text-brass-400 transition-colors"
            >
              Explore services →
            </a>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 max-w-md border-t border-navy-700 pt-8">
            <div>
              <dt className="font-mono text-[11px] tracking-widest2 uppercase text-ivory-warm/50">Sectors</dt>
              <dd className="font-display text-2xl text-ivory-warm mt-1">12+</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-widest2 uppercase text-ivory-warm/50">Placements</dt>
              <dd className="font-display text-2xl text-ivory-warm mt-1">500+</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-widest2 uppercase text-ivory-warm/50">Years</dt>
              <dd className="font-display text-2xl text-ivory-warm mt-1">10+</dd>
            </div>
          </dl>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <NetworkMotif className="w-full max-w-md md:max-w-lg" />
        </div>
      </div>
    </section>
  )
}
