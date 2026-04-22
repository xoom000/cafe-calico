import { useState, useEffect } from 'react'
import { businessInfo } from '../data/menu'

const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#about' },
  { label: 'Hours', href: '#hours' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className={`font-display text-xl font-semibold transition-colors ${scrolled ? 'text-foreground' : 'text-background'}`}>
          {businessInfo.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? 'text-foreground/80' : 'text-background/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={businessInfo.phoneHref}
          className={`text-sm font-medium transition-colors hidden sm:block ${
            scrolled ? 'text-primary hover:text-primary/80' : 'text-background/90 hover:text-background'
          }`}
        >
          {businessInfo.phone}
        </a>
      </div>
    </header>
  )
}
