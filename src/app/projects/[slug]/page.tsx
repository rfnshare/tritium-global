import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllProjects, getProjectBySlug } from '@/lib/content'
import { MDXRenderer } from '@/components/ui/MDXRenderer'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: 'Not Found' }
  return { title: project.title, description: project.description }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <div className="section-pad mx-auto max-w-4xl py-20">
      <Link href="/projects" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-10 inline-flex items-center gap-1.5">
        ← All projects
      </Link>

      <div className="mt-6 mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
          {project.industry}
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 mb-5 leading-snug">
          {project.title}
        </h1>
        <p className="text-lg text-muted leading-relaxed max-w-2xl">{project.description}</p>
      </div>

      <div className="flex flex-wrap gap-2 mb-12 pb-10 border-b border-zinc-100 dark:border-zinc-800">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
            {tag}
          </span>
        ))}
      </div>

      <MDXRenderer source={project.content} />
    </div>
  )
}
