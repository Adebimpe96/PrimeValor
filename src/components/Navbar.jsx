import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Our Products', href: '/#products' },
  { label: 'Prime Insights', href: '/insights' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    if (href.startsWith('/#') && isHome) {
      const id = href.replace('/#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ivory/95 backdrop-blur shadow-md shadow-navy-900/10' : 'bg-ivory'
      }`}
    >
      <nav className="container-px flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Primevalor Consulting"
            className="h-12 w-auto"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              {l.href.startsWith('/') && !l.href.startsWith('/#') ? (
                <Link
                  to={l.href}
                  className="font-body text-bold text-navy-950/80 hover:text-brass-600 transition-colors font-medium"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  onClick={() => handleNav(l.href)}
                  className="font-body text-bold text-navy-950/80 hover:text-brass-600 transition-colors font-medium"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href="/#contact"
          className="hidden md:inline-flex items-center bg-navy-900 text-ivory-warm hover:bg-navy-800 transition-colors text-sm font-medium px-5 py-2.5"
        >
          Free consultation
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-navy-900 w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-px w-6 bg-current transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-px w-6 bg-current transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-current transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ivory border-t border-navy-900/10">
          <ul className="container-px py-6 flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                {l.href.startsWith('/') && !l.href.startsWith('/#') ? (
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="font-body text-base text-navy-900/80 hover:text-brass-600 font-medium"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    onClick={() => handleNav(l.href)}
                    className="font-body text-base text-navy-900/80 hover:text-brass-600 font-medium"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
            <li>
              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center bg-navy-900 text-ivory-warm text-sm font-medium px-5 py-2.5"
              >
                Free consultation
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
