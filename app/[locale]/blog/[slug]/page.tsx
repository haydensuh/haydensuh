import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/posts'

export default async function BlogPostPage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
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
