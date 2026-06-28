import React from 'react'

const values = [
  {
    num: '01',
    title: 'Integrity first',
    body: 'Every recommendation we make is grounded in what is right for your people, not what is easiest for us.',
  },
  {
    num: '02',
    title: 'Evidence over instinct',
    body: 'We back hiring and policy decisions with data, structured assessment, and proven frameworks.',
  },
  {
    num: '03',
    title: 'Built to last',
    body: 'We design HR systems your team can run without us — clear, documented, and sustainable.',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-ivory py-24 md:py-32">
      <div className="container-px grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-5">Who We Are</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 leading-tight font-medium">
            An HR partner that treats people as the strategy, not the overhead.
          </h2>
          <p className="mt-6 text-slate-soft leading-relaxed">
            Primevalor Consulting works with businesses of every size to build HR functions
            that actually serve their people — from recruitment and onboarding to performance,
            compliance, and culture. We sit alongside your team as an extension of it, not a
            vendor passing through.
          </p>
        </div>

        <div className="md:col-span-7 md:pl-8">
          <div className="divide-y divide-navy-900/10 border-t border-b border-navy-900/10">
            {values.map((v) => (
              <div key={v.num} className="py-7 flex gap-8 items-start">
                <span className="font-mono text-sm text-brass-500 pt-1">{v.num}</span>
                <div>
                  <h3 className="font-display text-xl text-navy-900 font-medium">{v.title}</h3>
                  <p className="mt-2 text-slate-soft leading-relaxed max-w-lg">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
