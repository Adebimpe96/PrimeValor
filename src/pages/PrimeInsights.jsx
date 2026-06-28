import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const placeholderArticles = [
  {
    category: 'Recruitment',
    title: 'How to Reduce Time-to-Hire Without Compromising Quality',
    excerpt:
      'A structured recruitment process does not have to be slow. Here are the frameworks top organizations use to hire faster and better.',
    date: 'Coming soon',
  },
  {
    category: 'HR Strategy',
    title: 'What Every Growing SME Needs to Know About HR Compliance in Nigeria',
    excerpt:
      'Many businesses only discover their compliance gaps during a dispute or audit. We break down what you need before that moment arrives.',
    date: 'Coming soon',
  },
  {
    category: 'Learning & Development',
    title: 'Building a Learning Culture That Outlasts Any Training Budget',
    excerpt:
      'Sustainable learning is not about spending — it is about systems. How to embed continuous development into your organization\'s DNA.',
    date: 'Coming soon',
  },
  {
    category: 'Performance & Culture',
    title: 'Why Most Performance Reviews Fail — and What to Do Instead',
    excerpt:
      'Annual appraisals alone rarely drive improvement. The organizations that get performance right are doing something different.',
    date: 'Coming soon',
  },
  {
    category: 'Payroll & Benefits',
    title: 'Compensation Benchmarking: Are You Paying Competitively?',
    excerpt:
      'Underpaying drives turnover. Overpaying strains your budget. Here is how to find and hold the right position in your market.',
    date: 'Coming soon',
  },
  {
    category: 'Workforce Transition',
    title: 'Managing Workforce Restructuring with Dignity and Legal Clarity',
    excerpt:
      'Redundancy is never easy — but how you handle it defines your employer brand. A guide to responsible workforce transition.',
    date: 'Coming soon',
  },
]

export default function PrimeInsights() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-ivory">
      <div className="bg-navy-900 pt-28 pb-16">
        <div className="container-px">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-ivory-warm/60 hover:text-brass-400 text-sm font-mono tracking-wide transition-colors"
          >
            ← Back to home
          </Link>
          <p className="eyebrow mt-8 mb-4">Knowledge & Insights</p>
          <h1 className="font-display text-3xl md:text-5xl text-ivory-warm font-medium leading-tight max-w-2xl">
            Prime Insights
          </h1>
          <p className="mt-5 text-ivory-warm/65 text-lg max-w-xl leading-relaxed">
            Practical thinking on HR, recruitment, workforce strategy, and the future of work —
            written by the Primevalor team.
          </p>
        </div>
      </div>

      <div className="container-px py-16">
        <div className="bg-brass-50 border border-brass-300/40 px-8 py-6 mb-16 flex items-start gap-4">
          <span className="text-brass-500 text-xl mt-0.5">✦</span>
          <p className="text-slate-soft leading-relaxed">
            Articles are being prepared and will be published here shortly. The previews below
            reflect upcoming topics — subscribe via the contact form to be notified when they go live.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-navy-900/10">
          {placeholderArticles.map((article, i) => (
            <article key={i} className="bg-ivory p-8 flex flex-col hover:bg-ivory-warm transition-colors">
              <span className="eyebrow mb-4">{article.category}</span>
              <h2 className="font-display text-xl text-navy-900 font-medium leading-snug flex-1">
                {article.title}
              </h2>
              <p className="mt-4 text-slate-soft text-sm leading-relaxed">{article.excerpt}</p>
              <div className="mt-6 pt-5 border-t border-navy-900/10 flex items-center justify-between">
                <span className="font-mono text-xs text-ivory-warm/85 bg-navy-900/40 px-3 py-1">
                  {article.date}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="bg-navy-900 py-20">
        <div className="container-px text-center">
          <h2 className="font-display text-2xl md:text-3xl text-ivory-warm font-medium mb-4">
            Have a topic you'd like us to cover?
          </h2>
          <p className="text-ivory-warm/60 mb-8 max-w-md mx-auto">
            Send us a suggestion through the contact form — we write based on what matters to our clients.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center bg-brass-500 text-navy-900 font-medium text-sm px-7 py-3.5 hover:bg-brass-400 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  )
}
