// app/[locale]/works/[slug]/page.tsx (Server Component)
import { ClientWorkDetailPage } from './ClientWorkDetailPage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function WorkDetailPage({ params }: { params: any }) {
  const { locale, slug } = await params
  return <ClientWorkDetailPage locale={locale} slug={slug} />
}
