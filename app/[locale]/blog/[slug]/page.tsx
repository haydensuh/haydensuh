import React from 'react'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/posts'
import type { Locale } from '@/lib/i18n-config'

type Params = {
  params: {
    locale: Locale
    slug: string
  }
}

export default async function BlogPostPage({
  params,
}: Params): Promise<React.ReactElement> {
  const { locale, slug } = params
  const post = await getPostBySlug(locale, slug)

  if (!post) return notFound()

  return (
    <article className="prose">
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  )
}
