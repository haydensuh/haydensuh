import { ClientWrapper } from './ClientBlogPage'

export default function BlogPage({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const { locale, slug } = params

  return <ClientWrapper locale={locale} slug={slug} />
}
