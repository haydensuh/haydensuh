'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { Locale } from '@/lib/i18n-config'

export function LoginForm({ locale }: { locale: Locale }) {
  const [pass, setPass] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || `/${locale}/works`

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ pass }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.ok) {
      router.refresh()
      router.push(from)
    } else {
      alert(locale === 'ko' ? '비밀번호가 틀렸습니다.' : 'Wrong password')
    }
  }

  return (
    <div className="flex items-center justify-center bg-white py-20 dark:bg-black">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="mb-4 text-xl">
          {locale === 'ko'
            ? '비밀번호를 입력해주세요 :)'
            : 'Please enter password to access :)'}
        </h1>
        <input
          type="password"
          placeholder={locale === 'ko' ? '비밀번호' : 'Password'}
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="rounded border px-4 py-2"
        />
        <button
          onClick={handleLogin}
          className="rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
        >
          {locale === 'ko' ? '확인' : 'Enter'}
        </button>
      </div>
    </div>
  )
}
