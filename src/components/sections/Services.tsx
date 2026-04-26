import Link from 'next/link'
import type { Service } from '@/types/content'

const icons: Record<string, string> = {
  software: '⚙️',
  cloud: '☁️',
  data: '📊',
  team: '👥',
}

/* Business-outcome descriptions layered onto the taglines */
const outcomeHints: Record<string, string> = {
  'end-to-end-software': 'One vendor, full accountability.',
  'cloud-devops': 'Infrastructure that runs, so you don\'t have to worry.',
  'data-engineering': 'Your data — finally usable.',
  'dedicated-team': 'Senior capacity, zero hiring overhead.',
}

export function Services({ services }: { services: Service[] }) {
  return (
    <section className="section-pad mx-auto max-w-7xl py-24 border-t border-zinc-100 dark:border-zinc-800">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        What we do
      </p>
      <h2 className="text-3xl font-medium tracking-tight mb-3 text-zinc-900 dark:text-zinc-50">
        Four ways we deliver value
      </h2>
      <p className="text-muted mb-12 max-w-lg text-base leading-relaxed">
        From a full product build to an embedded dedicated team — we match our engagement model to what you actually need.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services#${service.slug}`}
            className="group relative block p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-brand-300 dark:hover:border-brand-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden"
          >
            {/* Subtle brand tint on hover — via pseudo approach with a div */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 to-brand-50/0 group-hover:from-brand-50/40 dark:group-hover:from-brand-900/20 group-hover:to-transparent transition-all duration-300 rounded-2xl pointer-events-none" />

            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-brand-50 dark:bg-brand-900/30 flex items-center justify-center text-xl mb-5 border border-brand-100 dark:border-brand-900 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 transition-colors">
                {icons[service.icon] ?? '🔧'}
              </div>
              <h3 className="font-medium text-base mb-1.5 text-zinc-900 dark:text-zinc-100 group-hover:text-brand-700 dark:group-hover:text-brand-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-1">{service.tagline}</p>
              {outcomeHints[service.slug] && (
                <p className="text-xs font-medium text-brand-600 dark:text-brand-500 mb-4">
                  {outcomeHints[service.slug]}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
