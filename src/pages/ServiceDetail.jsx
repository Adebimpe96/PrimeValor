import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { services } from '../data/services.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = services.find((s) => s.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center">
          <p className="font-display text-2xl text-navy-900">Service not found.</p>
          <Link to="/" className="mt-4 inline-block text-brass-500 underline">Back to home</Link>
        </div>
      </div>
    )
  }

  const currentIndex = services.findIndex((s) => s.slug === slug)
  const prev = services[currentIndex - 1]
  const next = services[currentIndex + 1]

  return (
    <div className="min-h-screen bg-ivory">
      {/* Back nav */}
      <div className="bg-navy-900 pt-28 pb-16">
        <div className="container-px">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-ivory-warm/60 hover:text-brass-400 text-sm font-mono tracking-wide transition-colors"
          >
            ← Back to home
          </Link>
          <p className="eyebrow mt-8 mb-4">Our Services</p>
          <h1 className="font-display text-3xl md:text-5xl text-ivory-warm font-medium leading-tight max-w-2xl">
            {service.title}
          </h1>
          <p className="mt-4 text-brass-400 font-mono text-sm tracking-wide">{service.tagline}</p>
        </div>
      </div>

      {/* Intro */}
      <div className="container-px py-16 border-b border-navy-900/10">
        <p className="text-slate-soft text-lg leading-relaxed max-w-2xl">{service.description}</p>
      </div>

      {/* Service items */}
      <div className="container-px py-16">
        <p className="eyebrow mb-10">Specific Services</p>
        <div className="grid md:grid-cols-2 gap-px bg-navy-900/10">
          {service.items.map((item, i) => (
            <div key={i} className="bg-ivory p-8 hover:bg-ivory-warm transition-colors">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs text-brass-500 pt-1 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg text-navy-900 font-medium">{item.title}</h3>
                  <p className="mt-2 text-slate-soft leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy-900 py-20">
        <div className="container-px text-center">
          <h2 className="font-display text-2xl md:text-3xl text-ivory-warm font-medium mb-6">
            Ready to get started?
          </h2>
          <p className="text-ivory-warm/65 mb-10 max-w-md mx-auto">
            Speak with our consultants about how we can tailor this service to your organization.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-brass-500 text-navy-900 font-medium text-sm px-7 py-3.5 hover:bg-brass-400 transition-colors"
          >
            Book a free consultation
          </Link>
        </div>
      </div>

      {/* Prev / Next navigation */}
      <div className="border-t border-navy-900/10 grid md:grid-cols-2">
        {prev ? (
          <Link
            to={`/services/${prev.slug}`}
            className="p-8 hover:bg-ivory-warm transition-colors border-r border-navy-900/10"
          >
            <span className="eyebrow block mb-2">Previous service</span>
            <span className="font-display text-navy-900 text-lg">{prev.title}</span>
          </Link>
        ) : <div />}
        {next && (
          <Link
            to={`/services/${next.slug}`}
            className="p-8 hover:bg-ivory-warm transition-colors text-right"
          >
            <span className="eyebrow block mb-2">Next service</span>
            <span className="font-display text-navy-900 text-lg">{next.title}</span>
          </Link>
        )}
      </div>
    </div>
  )
}
