import React from 'react'

const platforms = [
  {
    tag: 'For candidates',
    title: 'Application Tracking Portal',
    body: 'Submit job applications and follow their progress in real time — from review to interview to offer, all in one place.',
  },
  {
    tag: 'For employers & candidates',
    title: 'Background Check Platform',
    body: 'A fast, secure way to initiate and review background checks as part of a transparent hiring process.',
  },
]

export default function PlatformsPreview() {
  return (
    <section id="platforms" className="bg-ivory py-24 md:py-32">
      <div className="container-px">
        <div className="max-w-xl mb-16">
          <p className="eyebrow mb-5">Connected platforms</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 leading-tight font-medium">
            Beyond consulting — tools that carry the process through.
          </h2>
          <p className="mt-5 text-slate-soft leading-relaxed">
            We're building out two dedicated platforms to support candidates and employers
            beyond this site. Both are in progress and will link here once live.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-navy-900/10">
          {platforms.map((p) => (
            <div key={p.title} className="bg-ivory-warm p-10 flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="eyebrow">{p.tag}</span>
                <h3 className="font-display text-2xl text-navy-900 font-medium mt-4 leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-slate-soft leading-relaxed max-w-sm">{p.body}</p>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 self-start border border-navy-900/15 text-slate-soft text-xs font-mono tracking-widest2 uppercase px-4 py-2.5">
                Coming soon
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
