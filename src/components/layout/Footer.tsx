import Link from 'next/link'
import { siteInfo } from '@/lib/site'

const navLinks = {
  Company: [
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  Products: [
    { label: 'eShoopi', href: '/products/eshoopi' },
  ],
  Connect: [
    { label: siteInfo.contact.email, href: `mailto:${siteInfo.contact.email}` },
    { label: siteInfo.contact.phone, href: `tel:${siteInfo.contact.phone.replace(/\s|-/g, '')}` },
    { label: 'Partnership inquiry', href: '/contact?type=partnership' },
  ],
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 mt-24">
      <div className="section-pad mx-auto max-w-7xl py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand col */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="6.5" stroke="#9FE1CB" strokeWidth="1.5" />
                <circle cx="9" cy="9" r="2.5" fill="#9FE1CB" />
              </svg>
            </div>
            <span className="font-medium text-sm text-zinc-900 dark:text-zinc-100">
              Tritium Global
            </span>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
            {siteInfo.tagline}
          </p>

          {/* Address */}
          <div className="mb-5">
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {siteInfo.address.line1}<br />
              {siteInfo.address.line2}<br />
              {siteInfo.address.country}
            </p>
            <a
              href={siteInfo.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-1.5 text-xs text-brand-600 hover:text-brand-800 dark:hover:text-brand-400 transition-colors"
            >
              View on Google Maps ↗
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={siteInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-200 dark:hover:border-brand-800 transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href={siteInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-200 dark:hover:border-brand-800 transition-colors"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(navLinks).map(([group, items]) => (
          <div key={group}>
            <h4 className="text-[0.65rem] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-4">
              {group}
            </h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="section-pad border-t border-zinc-200 dark:border-zinc-800 mx-auto max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} Tritium Global. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          Dhaka, Bangladesh · {siteInfo.contact.email}
        </p>
      </div>
    </footer>
  )
}
