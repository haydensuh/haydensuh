import { ClientWrapper } from './ClientBlogPage'
import type { ReactElement } from 'react'

export default function BlogPage({
  params,
}: {
  params: { locale: string; slug: string }
}): ReactElement {
  const { locale, slug } = params
  return <ClientWrapper locale={locale} slug={slug} />
}
