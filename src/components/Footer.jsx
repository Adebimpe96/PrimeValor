import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-10">
      <div className="container-px flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-ivory-warm/70 text-sm">
          Primevalor Consulting
        </span>
        <span className="font-mono text-xs text-ivory-warm/35">
          © {new Date().getFullYear()} Primevalor Consulting. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
