import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-10">
      <div className="container-px flex flex-col sm:flex-row items-center justify-between gap-4">
        <img src="/logo.png" alt="Primevalor Consulting" className="h-10 w-auto opacity-90" />
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
