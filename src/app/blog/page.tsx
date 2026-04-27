import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllBlogPosts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights on data engineering, software delivery, and cloud infrastructure from the Tritium Global team.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Tritium Global',
    description: 'Insights on data engineering, software delivery, and cloud infrastructure from the Tritium Global team.',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Tritium Global',
    description: 'Insights on data engineering, software delivery, and cloud infrastructure from the Tritium Global team.',
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="section-pad mx-auto max-w-4xl py-20">
      <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 mb-3">
        Insights
      </p>
      <h1 className="text-4xl font-medium tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">
        Blog
      </h1>
      <p className="text-muted mb-14 max-w-lg text-base leading-relaxed">
        Thoughts on data engineering, software delivery, and building systems that last.
      </p>

      <div className="space-y-0">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block py-8 border-t border-zinc-100 dark:border-zinc-800 -mx-4 px-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <time className="text-xs text-zinc-400 dark:text-zinc-500">
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric', month: 'long', year: 'numeric',
                })}
              </time>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              {post.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs text-brand-600 dark:text-brand-500 font-medium">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="font-medium text-lg text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors leading-snug">
              {post.title}
            </h2>
            <p className="text-sm text-muted leading-relaxed">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
