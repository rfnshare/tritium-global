import type { Metadata } from 'next'
import { getAllServices } from '@/lib/content'
import { MDXRenderer } from '@/components/ui/MDXRenderer'

export const metadata: Metadata = {
  title: 'Services',
  description: 'End-to-end software development, cloud & DevOps, data engineering, and dedicated team services from Tritium Global.',
}

const icons: Record<string, string> = {
  software: '⚙️',
  cloud: '☁️',
  data: '📊',
  team: '👥',
}

export default function ServicesPage() {
  const services = getAllServices()

  return (
    <div className="section-pad mx-auto max-w-7xl py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        What we do
      </p>
      <h1 className="text-4xl font-medium tracking-tight mb-4 text-zinc-900">
        Our services
      </h1>
      <p className="text-muted mb-16 max-w-lg text-base leading-relaxed">
        From a full product build to an embedded team — we match our engagement model to what you actually need.
      </p>

      <div className="space-y-0">
        {services.map((service, i) => (
          <div
            key={service.slug}
            id={service.slug}
            className="py-14 border-t border-zinc-100 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12"
          >
            {/* Left col */}
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-2xl mb-5 border border-brand-100">
                {icons[service.icon] ?? '🔧'}
              </div>
              <h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-3">
                {service.title}
              </h2>
              <p className="text-muted text-base leading-relaxed mb-5">{service.tagline}</p>
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
            </div>

            {/* Right col — MDX content */}
            <div className="pt-1">
              <p className="text-base text-muted leading-relaxed mb-6">{service.description}</p>
              <MDXRenderer source={service.content} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
