import Link from 'next/link'

const links = {
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
    { label: 'support@tritiumglbl.com', href: 'mailto:support@tritiumglbl.com' },
    { label: '+880 1521-259370', href: 'tel:+8801521259370' },
    { label: 'Partnership inquiry', href: '/contact?type=partnership' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 mt-24">
      <div className="section-pad mx-auto max-w-7xl py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand col */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-7 h-7 rounded-lg bg-brand-600 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="6.5" stroke="#9FE1CB" strokeWidth="1.5" />
                <circle cx="9" cy="9" r="2.5" fill="#9FE1CB" />
              </svg>
            </div>
            <span className="font-medium text-sm text-zinc-900">Tritium Global</span>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed">
            Enterprise Software · Data Engineering · Cloud &amp; DevOps
          </p>
          <p className="text-xs text-zinc-400 mt-6 leading-relaxed">
            © {new Date().getFullYear()} Tritium Global.
            <br />All rights reserved.
          </p>
        </div>

        {/* Link columns */}
        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <h4 className="text-[0.65rem] font-semibold text-zinc-400 uppercase tracking-widest mb-4">
              {group}
            </h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
