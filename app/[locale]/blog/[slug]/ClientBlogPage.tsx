'use client'

import { useMDXComponents } from '@/mdx-components'
import { MDXComponents } from 'mdx/types'
import { useEffect, useState } from 'react'
import { BackButton } from '@/components/ui/back-button'
import { CopyButton } from '@/components/ui/copy-button'
import {
  MDXImageGalleryAutoBind,
  MDXImageGalleryProvider,
} from '@/components/ui/mdx-image-gallery'
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
    <MDXImageGalleryProvider>
      <MDXImageGalleryAutoBind>
        <article className="prose prose-neutral dark:prose-invert max-w-none py-12">
          <div className="mb-8">
            <BackButton />
          </div>
          <div className="absolute top-10 right-4">
            <CopyButton />
          </div>
          <Post components={components} />
        </article>
      </MDXImageGalleryAutoBind>
    </MDXImageGalleryProvider>
  )
}
