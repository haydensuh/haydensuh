import { Header } from '../header'
import { Footer } from '../footer'
import type { ReactNode } from 'react'

type Locale = 'ko' | 'en'
const SUPPORTED_LOCALES = new Set<Locale>(['ko', 'en'])

function asLocale(x: string): Locale {
  return SUPPORTED_LOCALES.has(x as Locale) ? (x as Locale) : 'ko' // fallback
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  // Next의 validator가 params를 Promise로 볼 수 있어서 union으로 받음
  params: { locale: string } | Promise<{ locale: string }>
}) {
  const resolved = await params
  const locale = asLocale(resolved.locale)

  const fontClass =
    locale === 'ko'
      ? 'font-[family-name:var(--font-pretendard)]'
      : 'font-[family-name:var(--font-geist)]'

  return (
    <div className={`flex min-h-screen w-full flex-col ${fontClass}`}>
      <div className="relative mx-auto w-full max-w-screen-md flex-1 px-4 pt-12">
        <Header locale={locale} />
        {children}
        <Footer />
      </div>
    </div>
  )
}
