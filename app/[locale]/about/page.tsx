import type { Locale } from '@/lib/i18n-config'
import ClientAboutPage from './ClientAboutPage'

export default function AboutPage({ params }: { params: any }) {
  const locale = params?.locale as Locale
  return <ClientAboutPage locale={locale} />
}
