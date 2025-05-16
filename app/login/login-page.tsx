'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const [pass, setPass] = useState('')
  const [loading, setLoading] = useState(false)
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/works'

  const handleLogin = async () => {
    setLoading(true)

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ pass }),
    })

    if (res.ok) {
      setTimeout(() => {
        window.location.replace(from)
      }, 100)
    } else {
      alert('Wrong password')
      setLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center bg-white py-20 dark:bg-black">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="mb-4 text-xl">Please enter password to access :)</h1>
        <input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          className="rounded border border-zinc-500 px-4 py-2 text-center text-zinc-600 dark:text-zinc-400"
          disabled={loading}
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`rounded px-4 py-2 text-white transition-colors ${
            loading
              ? 'cursor-not-allowed bg-zinc-400'
              : 'bg-zinc-800 hover:bg-zinc-700'
          }`}
        >
          {loading ? 'Unlocking...' : 'Unlock'}
        </button>
      </div>
    </div>
  )
}
