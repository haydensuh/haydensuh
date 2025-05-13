'use client'

import { useRouter } from 'next/navigation'

interface BackButtonProps {
  label?: string
}

export function BackButton({ label = '← Go Back' }: BackButtonProps) {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="not-prose inline-flex items-center text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
    >
      {label}
    </button>
  )
}
