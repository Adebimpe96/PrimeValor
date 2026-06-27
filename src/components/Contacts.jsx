import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Formspree endpoint for handling form submissions
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgqblbk'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [privacyChecked, setPrivacyChecked] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!privacyChecked) return
    setStatus('sending')
    const form = e.target
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
        setPrivacyChecked(false)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="bg-ivory py-24 md:py-32">
      <div className="container-px grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow mb-5">Get in touch</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy-900 leading-tight font-medium">
            Tell us what your team needs.
          </h2>
          <p className="mt-6 text-slate-soft leading-relaxed max-w-sm">
            Whether it's a single hire or a full HR build-out, send us a message and a
            consultant will respond within one business day.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 bg-brass-50 border border-brass-300/40 px-5 py-3">
            <span className="text-brass-500 text-lg">✦</span>
            <span className="text-navy-900 text-sm font-medium">First consultation is free</span>
          </div>

          <dl className="mt-10 space-y-5">
            <div>
              <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-soft/60">Email</dt>
              <dd className="text-navy-900 mt-1">Pvconsulting.co@gmail.com</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-soft/60">Phone</dt>
              <dd className="text-navy-900 mt-1">+234 704 415 5115</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-soft/60">Office</dt>
              <dd className="text-navy-900 mt-1">Lagos, Nigeria</dd>
            </div>
          </dl>
        </div>

        <div className="md:col-span-7 md:pl-8">
          {status === 'success' ? (
            <div className="border border-navy-900/15 p-10 text-center">
              <p className="font-display text-2xl text-navy-900">Message sent.</p>
              <p className="mt-2 text-slate-soft">Thank you — we'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Full name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Phone number" name="phone" type="tel" required />
                <Field label="Company (optional)" name="company" type="text" />
              </div>
              <div>
                <label className="font-mono text-[11px] tracking-widest2 uppercase text-slate-soft/70">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full bg-transparent border border-navy-900/20 px-4 py-3 text-navy-900 placeholder:text-slate-soft/40 focus:border-brass-500 outline-none transition-colors resize-none"
                  placeholder="What can we help with?"
                />
              </div>

              {/* Privacy consent */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={privacyChecked}
                  onChange={(e) => setPrivacyChecked(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-brass-500 shrink-0 cursor-pointer"
                  required
                />
                <label htmlFor="privacy" className="text-sm text-slate-soft leading-relaxed cursor-pointer">
                  I have read and agree to the{' '}
                  <Link
                    to="/privacy-policy"
                    target="_blank"
                    className="text-brass-500 hover:underline"
                  >
                    Privacy Policy
                  </Link>{' '}
                  and consent to Primevalor Consulting collecting and processing my personal data
                  for the purpose of responding to my inquiry.
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || !privacyChecked}
                className="inline-flex items-center bg-navy-900 text-ivory-warm font-medium text-sm px-7 py-3.5 hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-700">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, required }) {
  return (
    <div>
      <label className="font-mono text-[11px] tracking-widest2 uppercase text-slate-soft/70">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full bg-transparent border border-navy-900/20 px-4 py-3 text-navy-900 focus:border-brass-500 outline-none transition-colors"
      />
    </div>
  )
}
