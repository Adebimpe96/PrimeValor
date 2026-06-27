import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-10">
      <div className="container-px flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-ivory-warm/70 text-sm">
          Primevalor Consulting
        </span>
        <div className="flex items-center gap-6">
          <Link
            to="/privacy-policy"
            className="font-mono text-xs text-ivory-warm/35 hover:text-brass-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <span className="font-mono text-xs text-ivory-warm/35">
            © {new Date().getFullYear()} Primevalor Consulting. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
