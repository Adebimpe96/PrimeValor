import React from 'react'

const team = [
  { name: 'Adaeze Okonkwo', role: 'Founder & Principal Consultant', initials: 'AO' },
  { name: 'Tunde Bakare', role: 'Head of Recruitment', initials: 'TB' },
  { name: 'Ifeoma Chukwu', role: 'HR Compliance Lead', initials: 'IC' },
  { name: 'Segun Adewale', role: 'Learning & Development Lead', initials: 'SA' },
]

export default function Team() {
  return (
    <section id="team" className="bg-navy-900 py-24 md:py-32">
      <div className="container-px">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-5">The people behind Primevalor</p>
          <h2 className="font-display text-3xl md:text-4xl text-ivory-warm leading-tight font-medium">
            A small team, deliberately.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m) => (
            <div key={m.name} className="group">
              <div className="aspect-[4/5] bg-navy-800 border border-navy-700 flex items-center justify-center group-hover:border-brass-500/50 transition-colors">
                <span className="font-display text-4xl text-brass-400/70">{m.initials}</span>
              </div>
              <h3 className="font-display text-lg text-ivory-warm font-medium mt-5">{m.name}</h3>
              <p className="text-sm text-ivory-warm/55 mt-1">{m.role}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-sm text-ivory-warm/40 font-mono">
          Placeholder names &amp; photos — swap in your real team before launch.
        </p>
      </div>
    </section>
  )
}
