import Link from 'next/link'
import type { Project } from '@/types/content'

const industryColors: Record<string, string> = {
  'Commercial Real Estate': 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/30 dark:text-blue-400 dark:border-blue-900',
  'Residential Construction': 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/30 dark:text-orange-400 dark:border-orange-900',
  'Cloud & DevOps': 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-400 dark:border-purple-900',
  'Data Engineering': 'bg-brand-50 text-brand-700 border-brand-200 dark:bg-brand-900/30 dark:text-brand-400 dark:border-brand-900',
}

export function Projects({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="section-pad mx-auto max-w-7xl py-24 border-t border-zinc-100 dark:border-zinc-800">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        Project experience
      </p>
      <h2 className="text-3xl font-medium tracking-tight mb-3 text-zinc-900 dark:text-zinc-50">
        Real work, real systems
      </h2>
      <p className="text-muted mb-12 max-w-lg text-base leading-relaxed">
        We don't just take briefs — we take ownership. Here's a selection of what we've built, managed, and shipped.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="mb-4">
              <span
                className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full border ${
                  industryColors[project.industry] ?? 'bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700'
                }`}
              >
                {project.industry}
              </span>
            </div>
            <h3 className="font-medium text-base mb-2 text-zinc-900 dark:text-zinc-100 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/projects"
          className="text-sm text-brand-600 dark:text-brand-400 font-medium hover:underline underline-offset-2"
        >
          View all projects →
        </Link>
      </div>
    </section>
  )
}
