import React, { useState } from 'react'

// Formspree endpoint for handling form submissions
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgqblbk'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault()
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

          <dl className="mt-12 space-y-5">
            <div>
              <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-soft/60">Email</dt>
              <dd className="text-navy-900 mt-1">Pvconsulting.co@gmail.com</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-widest2 uppercase text-slate-soft/60">Phone</dt>
              <dd className="text-navy-900 mt-1">07044155115</dd>
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
              <Field label="Company (optional)" name="company" type="text" />
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

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center bg-navy-900 text-ivory-warm font-medium text-sm px-7 py-3.5 hover:bg-navy-800 transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending…' : 'Send message'}
              </button>

              {status === 'error' && (
                <p className="text-sm text-red-700">
                  Something went wrong sending your message. Please try again, or email us directly.
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
