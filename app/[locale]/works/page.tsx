// app/[locale]/works/page.tsx (Server Component)
import type { Locale } from '@/lib/i18n-config'
import ClientWorksPage from './ClientWorksPage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function WorksPage({ params }: { params: any }) {
  const locale = params?.locale as Locale
  return <ClientWorksPage locale={locale} />
}
