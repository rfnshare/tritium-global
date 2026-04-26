import Link from 'next/link'
import type { Service } from '@/types/content'

const icons: Record<string, string> = {
  software: '⚙️',
  cloud: '☁️',
  data: '📊',
  team: '👥',
}

export function Services({ services }: { services: Service[] }) {
  return (
    <section className="section-pad mx-auto max-w-7xl py-24 border-t border-zinc-100">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        What we do
      </p>
      <h2 className="text-3xl font-medium tracking-tight mb-3 text-zinc-900">
        Four ways we deliver value
      </h2>
      <p className="text-muted mb-12 max-w-lg text-base leading-relaxed">
        From a full product build to a dedicated embedded team — we match our model to your problem.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services#${service.slug}`}
            className="group block p-6 rounded-2xl border border-zinc-200 hover:border-brand-200 hover:bg-brand-50/30 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-xl mb-5 border border-brand-100">
              {icons[service.icon] ?? '🔧'}
            </div>
            <h3 className="font-medium text-base mb-2 text-zinc-900 group-hover:text-brand-700 transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-4">{service.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 text-zinc-600 border border-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
