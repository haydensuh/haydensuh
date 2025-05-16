'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function LoginPage() {
  const [pass, setPass] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || '/works'

  const handleLogin = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ pass }),
    })

    if (res.ok) {
      router.refresh()
      router.push(from)
    } else {
      alert('Wrong password')
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
        />
        <button
          onClick={handleLogin}
          className="rounded bg-zinc-800 px-4 py-2 text-white hover:bg-zinc-700"
        >
          Unlock
        </button>
      </div>
    </div>
  )
}
