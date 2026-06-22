import React, { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Platforms', href: '#platforms' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur shadow-lg shadow-navy-950/20' : 'bg-transparent'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-20">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-xl md:text-2xl text-ivory-warm tracking-wide">
            Primevalor
          </span>
          <span className="hidden sm:inline font-mono text-[10px] tracking-widest2 uppercase text-brass-400">
            Consulting
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-body text-sm text-ivory-warm/80 hover:text-brass-400 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center border border-brass-500 text-brass-400 hover:bg-brass-500 hover:text-navy-900 transition-colors text-sm font-medium px-5 py-2.5"
        >
          Get in touch
        </a>

        <button
          className="md:hidden text-ivory-warm w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-px w-6 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-navy-900 border-t border-navy-700">
          <ul className="container-px py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-body text-base text-ivory-warm/90 hover:text-brass-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center border border-brass-500 text-brass-400 text-sm font-medium px-5 py-2.5"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
