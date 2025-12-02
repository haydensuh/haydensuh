import { LoginForm } from '@/app/[locale]/login/login-form'
import type { Locale } from '@/lib/i18n-config'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function LoginPage({ params }: { params: any }) {
  const locale = params?.locale as Locale

  // 로케일에 따라 다른 폰트 적용
  const fontClass = locale === 'ko' ? 'font-korean' : 'font-sans'

  return (
    <div className={`flex w-full flex-col ${fontClass}`}>
      <div className="relative mx-auto w-full max-w-screen-md flex-1 px-4 pt-12">
        <LoginForm locale={locale} />
      </div>
    </div>
  )
}
