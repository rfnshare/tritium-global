import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import type { Project, Service, BlogPost } from '@/types/content'

const contentDir = path.join(process.cwd(), 'src/content')

function readMDXDir(folder: string): string[] {
  const dir = path.join(contentDir, folder)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'))
}

export function getAllProjects(): Project[] {
  return readMDXDir('projects')
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, 'projects', file), 'utf-8')
      const { data, content } = matter(raw)
      return { slug: file.replace('.mdx', ''), content, ...data } as Project
    })
    .sort((a, b) => a.order - b.order)
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(contentDir, 'projects', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, content, ...data } as Project
}

export function getAllServices(): Service[] {
  return readMDXDir('services')
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, 'services', file), 'utf-8')
      const { data, content } = matter(raw)
      return { slug: file.replace('.mdx', ''), content, ...data } as Service
    })
    .sort((a, b) => a.order - b.order)
}

export function getServiceBySlug(slug: string): Service | null {
  const filePath = path.join(contentDir, 'services', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, content, ...data } as Service
}

export function getAllBlogPosts(): BlogPost[] {
  return readMDXDir('blog')
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, 'blog', file), 'utf-8')
      const { data, content } = matter(raw)
      return { slug: file.replace('.mdx', ''), content, ...data } as BlogPost
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, 'blog', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { slug, content, ...data } as BlogPost
}
