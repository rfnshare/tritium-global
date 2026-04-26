import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/content'
import { MDXRenderer } from '@/components/ui/MDXRenderer'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return { title: 'Not Found' }
  return { title: post.title, description: post.excerpt }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className="section-pad mx-auto max-w-3xl py-20">
      <Link href="/blog" className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-10 inline-flex items-center gap-1.5">
        ← All posts
      </Link>

      <div className="mt-6 mb-10">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <time className="text-xs text-zinc-400 dark:text-zinc-500">
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </time>
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs text-brand-600 dark:text-brand-500 font-medium">{tag}</span>
          ))}
        </div>
        <h1 className="text-4xl font-medium tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug mb-5">
          {post.title}
        </h1>
        <p className="text-lg text-muted leading-relaxed">{post.excerpt}</p>
      </div>

      <div className="border-t border-zinc-100 dark:border-zinc-800 pt-10">
        <MDXRenderer source={post.content} />
      </div>
    </div>
  )
}
