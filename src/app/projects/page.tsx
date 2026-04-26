import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllProjects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Real work Tritium Global has delivered — enterprise software, cloud DevOps, and data engineering across Bangladesh and beyond.',
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="section-pad mx-auto max-w-7xl py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        Project experience
      </p>
      <h1 className="text-4xl font-medium tracking-tight mb-4 text-zinc-900">
        Real work, real systems
      </h1>
      <p className="text-muted mb-14 max-w-lg text-base leading-relaxed">
        A selection of what we've built, managed, and delivered for clients in Bangladesh and globally.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group block p-6 rounded-2xl border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all"
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-brand-600 mb-3">
              {project.industry}
            </p>
            <h2 className="font-medium text-base mb-2 text-zinc-900 group-hover:text-brand-600 transition-colors leading-snug">
              {project.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-5">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
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
    </div>
  )
}
