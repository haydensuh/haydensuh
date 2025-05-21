import { notFound } from 'next/navigation'
import { useMDXComponents } from '@/mdx-components'

export default async function BlogPage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const { locale, slug } = params

  try {
    const { default: Post } = await import(
      `@/content/blog/${slug}/${locale}.mdx`
    )
    const components = useMDXComponents({})

    return (
      <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl py-12">
        <Post components={components} />
      </article>
    )
  } catch {
    return notFound()
  }
}
