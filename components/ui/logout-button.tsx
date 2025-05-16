'use client'

import { useRouter } from 'next/navigation'

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    const res = await fetch('/api/logout')
    if (res.redirected) {
      router.push(res.url)
    } else {
      alert('Logout failed')
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-zinc-500 transition-colors hover:underline"
    >
      Logout
    </button>
  )
}
