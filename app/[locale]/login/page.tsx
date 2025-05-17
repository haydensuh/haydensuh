import { LoginForm } from '@/app/[locale]/login/login-form'
import type { Locale } from '@/lib/i18n-config'

export default async function LoginPage({ params }: { params: any }) {
  const locale = params?.locale as Locale

  return (
    <div className="flex w-full flex-col font-[family-name:var(--font-inter-tight)]">
      <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-12">
        <LoginForm locale={locale} />
      </div>
    </div>
  )
}
