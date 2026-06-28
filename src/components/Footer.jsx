import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-10">
      <div className="container-px flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="bg-white/95 px-3 py-1.5 rounded-sm">
          <img src="/logo.png" alt="Primevalor Consulting" className="h-7 w-auto" />
        </div>
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
