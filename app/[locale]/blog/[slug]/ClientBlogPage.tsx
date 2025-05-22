'use client'

import { useMDXComponents } from '@/mdx-components'
import { MDXComponents } from 'mdx/types'
import { useEffect, useState } from 'react'

export function ClientWrapper({
  locale,
  slug,
}: {
  locale: string
  slug: string
}) {
  const [Post, setPost] = useState<React.ComponentType<{
    components?: MDXComponents
  }> | null>(null)
  const components = useMDXComponents({})

  useEffect(() => {
    const load = async () => {
      try {
        const mod = await import(`@/content/blog/${slug}/${locale}.mdx`)
        setPost(() => mod.default)
      } catch (err) {
        console.error('MDX 파일 로드 실패:', err)
      }
    }

    load()
  }, [locale, slug])

  if (!Post) return <div>Loading...</div>

  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl py-12">
      <Post components={components} />
    </article>
  )
}
