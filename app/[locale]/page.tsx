import ClientPage from './ClientPage'
import type { Locale } from '@/lib/i18n-config'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: { params: any }) {
  const locale = params?.locale as Locale
  return <ClientPage locale={locale} />
}
