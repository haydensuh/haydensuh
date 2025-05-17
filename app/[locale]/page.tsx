import ClientPage from './ClientPage'
import type { Locale } from '@/lib/i18n-config'

export default function Page({ params }: { params: any }) {
  const locale = params?.locale as Locale
  return <ClientPage locale={locale} />
}
