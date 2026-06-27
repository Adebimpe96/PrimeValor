import React, { useState } from 'react'

const products = [
  {
    tag: 'For candidates & employers',
    name: 'PrimeLink',
    title: 'Job Matching Platform',
    body: 'A smart platform connecting qualified candidates with the right employers. Submit applications, track progress in real time, and move from first contact to offer — all in one place.',
  },
  {
    tag: 'For employers & candidates',
    name: 'PrimeCheck',
    title: 'Background Check Platform',
    body: 'A fast, secure, and transparent platform to initiate and manage background checks as part of a professional hiring process.',
  },
]

export default function OurProducts() {
  const [activeModal, setActiveModal] = useState(null)

  return (
    <section id="products" className="bg-ivory py-24 md:py-32">
      <div className="container-px">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-5">Our Products</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 leading-tight font-medium">
            Beyond consulting — platforms that carry the process through.
          </h2>
          <p className="mt-5 text-slate-soft leading-relaxed">
            We are building two dedicated platforms to support candidates and employers
            beyond this site. Click on a product to learn more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-navy-900/10">
          {products.map((p) => (
            <div key={p.name} className="bg-ivory-warm p-10 flex flex-col justify-between min-h-[240px]">
              <div>
                <span className="eyebrow">{p.tag}</span>
                <button
                  onClick={() => setActiveModal(p.name)}
                  className="block text-left mt-4 group"
                >
                  <h3 className="font-display text-2xl text-navy-900 font-bold leading-snug group-hover:text-brass-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-display text-lg text-navy-900/70 leading-snug">{p.title}</p>
                </button>
                <p className="mt-3 text-slate-soft leading-relaxed max-w-sm text-sm">{p.body}</p>
              </div>
              <button
                onClick={() => setActiveModal(p.name)}
                className="mt-8 inline-flex items-center gap-2 self-start border border-brass-500 text-brass-600 text-xs font-mono tracking-widest2 uppercase px-4 py-2.5 hover:bg-brass-500 hover:text-navy-900 transition-colors"
              >
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/70 backdrop-blur-sm px-4"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-ivory-warm max-w-md w-full p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 text-slate-soft hover:text-navy-900 text-xl leading-none"
              aria-label="Close"
            >
              ✕
            </button>
            <p className="eyebrow mb-4">{activeModal}</p>
            <h3 className="font-display text-2xl text-navy-900 font-medium mb-4">
              Product in development
            </h3>
            <p className="text-slate-soft leading-relaxed">
              This product development is in progress — it will go live soon. We'll announce it
              here and via our contact channels once it launches. Get in touch if you'd like to
              be notified first.
            </p>
            <a
              href="#contact"
              onClick={() => setActiveModal(null)}
              className="mt-8 inline-flex items-center bg-navy-900 text-ivory-warm text-sm font-medium px-6 py-3 hover:bg-navy-800 transition-colors"
            >
              Notify me when live
            </a>
          </div>
        </div>
      )}
    </section>
  )
}
