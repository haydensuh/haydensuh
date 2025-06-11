import { Header } from '../header'
import { Footer } from '../footer'

export default function EnLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: 'en' | 'ko' }
}) {
  // 로케일에 따라 다른 폰트 적용
  const fontClass =
    params.locale === 'ko'
      ? 'font-[family-name:var(--font-pretendard)]'
      : 'font-[family-name:var(--font-geist)]'

  return (
    <div className={`flex min-h-screen w-full flex-col ${fontClass}`}>
      <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-12">
        <Header locale={params.locale} />
        {children}
        <Footer />
      </div>
    </div>
  )
}
