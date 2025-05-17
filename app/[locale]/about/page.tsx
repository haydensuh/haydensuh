import type { Locale } from '@/lib/i18n-config'
import ClientAboutPage from './ClientAboutPage'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function AboutPage({ params }: { params: any }) {
  const locale = params?.locale as Locale
  return <ClientAboutPage locale={locale} />
}
