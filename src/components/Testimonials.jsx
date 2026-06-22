import React from 'react'

const testimonials = [
  {
    quote:
      "Primevalor rebuilt our entire hiring process in six weeks. We went from a 90-day time-to-hire to under 30, without lowering our bar.",
    name: 'Folake Adeyemi',
    role: 'COO, Lagos-based fintech',
  },
  {
    quote:
      "What stood out was how quickly they understood our culture, not just our org chart. The HR policies they wrote actually sound like us.",
    name: 'Michael Eze',
    role: 'Founder, logistics startup',
  },
  {
    quote:
      "They handled a sensitive restructuring with more care and clarity than I expected. Our team felt informed every step of the way.",
    name: 'Grace Olawale',
    role: 'HR Director, manufacturing firm',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-navy-900 py-24 md:py-32">
      <div className="container-px">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-5">Client feedback</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory-warm leading-tight font-medium">
            Trusted by teams who needed it done right.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-navy-700">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-navy-900 p-8 flex flex-col justify-between">
              <span className="font-display text-5xl text-brass-500/40 leading-none">&ldquo;</span>
              <blockquote className="mt-4 flex-1">
                <p className="text-ivory-warm/85 leading-relaxed">{t.quote}</p>
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-navy-700">
                <p className="text-ivory-warm font-medium text-sm">{t.name}</p>
                <p className="text-ivory-warm/50 text-xs font-mono tracking-wide mt-1">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
