import { MDXRemote } from 'next-mdx-remote/rsc'

export async function MDXRenderer({ source }: { source: string }) {
  return (
    <div className="prose-content">
      <MDXRemote source={source} />
    </div>
  )
}
