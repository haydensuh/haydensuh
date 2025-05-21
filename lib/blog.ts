// lib/blog.ts
import fs from 'fs/promises'
import path from 'path'

export async function getPostContent(
  slug: string,
  locale: string,
): Promise<string | null> {
  const filepath = path.join(
    process.cwd(),
    'content',
    'blog',
    slug,
    `${locale}.mdx`,
  )
  try {
    return await fs.readFile(filepath, 'utf8')
  } catch {
    return null
  }
}
