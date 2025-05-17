import { Header } from '../header'
import { Footer } from '../footer'

export default function EnLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: 'en' | 'ko' }
}) {
  return (
    <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
      <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-12">
        <Header locale={params.locale} />
        {children}
        <Footer />
      </div>
    </div>
  )
}
