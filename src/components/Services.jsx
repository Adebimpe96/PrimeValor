import React from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services.js'

export default function Services() {
  return (
    <section id="services" className="bg-navy-900 py-24 md:py-32">
      <div className="container-px">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-5">What we do</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory-warm leading-tight font-medium">
            Services built around the full employee lifecycle.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-700">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-navy-900 p-8 hover:bg-navy-800 transition-colors group flex flex-col"
            >
              <div className="w-9 h-px bg-brass-500 mb-6 group-hover:w-14 transition-all duration-300" />
              <h3 className="font-display text-lg text-ivory-warm font-medium leading-snug flex-1">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-ivory-warm/60 leading-relaxed">{s.summary}</p>
              <Link
                to={`/services/${s.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-brass-400 text-xs font-mono tracking-widest2 uppercase hover:text-brass-300 transition-colors"
              >
                Full details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
