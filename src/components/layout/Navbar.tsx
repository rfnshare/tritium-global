'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Data Showcase', href: '/#data-showcase' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/#about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-[0_1px_4px_0_rgb(0,0,0,0.06)] dark:shadow-[0_1px_4px_0_rgb(0,0,0,0.3)]'
          : 'bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900'
      )}
    >
      <nav className="section-pad mx-auto max-w-7xl flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="6.5" stroke="#9FE1CB" strokeWidth="1.5" />
              <circle cx="9" cy="9" r="2.5" fill="#9FE1CB" />
            </svg>
          </div>
          <span className="font-medium text-[0.95rem] tracking-tight text-zinc-900 dark:text-zinc-100">
            Tritium Global
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm transition-colors',
                pathname === link.href
                  ? 'text-brand-600 font-medium'
                  : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="text-sm font-medium px-4 py-2 rounded-lg bg-brand-600 text-white hover:bg-brand-800 transition-colors"
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 section-pad py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm py-0.5 transition-colors',
                pathname === link.href
                  ? 'text-brand-600 font-medium'
                  : 'text-zinc-600 dark:text-zinc-400'
              )}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-1 text-sm font-medium px-4 py-2.5 rounded-lg bg-brand-600 text-white text-center"
            onClick={() => setMobileOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      )}
    </header>
  )
}
