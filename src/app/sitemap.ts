import type { MetadataRoute } from 'next'
import { siteInfo } from '@/lib/site'
import { getAllBlogPosts, getAllProjects } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteInfo.url
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                         lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/services`,           lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/products/eshoopi`,   lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/projects`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`,               lastModified: now, changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/contact`,            lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const projectRoutes: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...blogRoutes, ...projectRoutes]
}
