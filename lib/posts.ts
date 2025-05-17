// lib/posts.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// locale과 slug에 따라 .mdx 파일 불러오는 함수
export async function getPostBySlug(locale: string, slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(
    process.cwd(),
    'content/posts',
    locale,
    `${realSlug}.mdx`,
  )

  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    title: data.title || '',
    date: data.date || '',
    slug: realSlug,
    content,
  }
}
