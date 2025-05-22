import { ClientWrapper } from './ClientBlogPage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogPage({ params }: any) {
  const { locale, slug } = params
  return <ClientWrapper locale={locale} slug={slug} />
}
