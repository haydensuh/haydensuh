'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { Locale } from '@/lib/i18n-config'

export function LoginForm({ locale }: { locale: Locale }) {
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || `/${locale}/works`

  const handleLogin = async () => {
    setLoading(true)

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ pass }),
    })

    if (res.ok) {
      setTimeout(() => {
        window.location.replace(from)
      }, 100)
    } else {
      alert(locale === 'ko' ? '비밀번호가 틀렸습니다.' : 'Wrong password')
      setLoading(false)
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
          disabled={loading}
          className="rounded border px-4 py-2 text-center text-black disabled:opacity-50 dark:text-white"
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`rounded px-4 py-2 text-white transition-colors ${
            loading
              ? 'cursor-not-allowed bg-zinc-400'
              : 'bg-black hover:bg-zinc-800 dark:bg-white dark:text-black'
          }`}
        >
          {loading
            ? locale === 'ko'
              ? '확인 중...'
              : 'Unlocking...'
            : locale === 'ko'
              ? '확인'
              : 'Enter'}
        </button>
      </div>
    </div>
  )
}
