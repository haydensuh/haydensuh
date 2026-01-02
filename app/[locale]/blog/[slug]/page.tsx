import { ClientWrapper } from './ClientBlogPage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPage({ params }: any) {
  const { locale, slug } = await params
  return <ClientWrapper locale={locale} slug={slug} />
}
