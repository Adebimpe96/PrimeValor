import React from 'react'

const services = [
  {
    title: 'Recruitment & Talent Acquisition',
    body: 'End-to-end hiring support — role design, sourcing, structured interviews, and offer management.',
  },
  {
    title: 'HR Strategy & Compliance',
    body: 'Policy frameworks, labor law compliance, and HR systems tailored to how your business actually runs.',
  },
  {
    title: 'Learning & Development',
    body: 'Training programs and leadership development that build capability at every level of your organization.',
  },
  {
    title: 'Performance & Culture',
    body: 'Performance management systems and culture initiatives that keep your people engaged and accountable.',
  },
  {
    title: 'Payroll & Benefits Advisory',
    body: 'Guidance on compensation structuring, benefits design, and payroll processes that stay compliant and competitive.',
  },
  {
    title: 'Outplacement & Transition',
    body: 'Support for organizations and individuals navigating restructuring, with dignity and a clear path forward.',
  },
]

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
              key={s.title}
              className="bg-navy-900 p-8 hover:bg-navy-800 transition-colors group"
            >
              <div className="w-9 h-px bg-brass-500 mb-6 group-hover:w-14 transition-all duration-300" />
              <h3 className="font-display text-lg text-ivory-warm font-medium leading-snug">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-ivory-warm/60 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
