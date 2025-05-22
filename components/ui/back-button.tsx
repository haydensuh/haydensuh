'use client'

import { ArrowLeftIcon } from 'lucide-react'
import { useRouter, useParams } from 'next/navigation'

interface BackButtonProps {
  label?: string
}

export function BackButton({ label }: BackButtonProps) {
  const router = useRouter()
  const params = useParams()
  const defaultLabel =
    (params?.locale as string) === 'ko' ? '뒤로가기' : 'Go Back'

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="not-prose group inline-flex cursor-pointer items-center text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
    >
      <ArrowLeftIcon
        size={14}
        className="transition-transform duration-150 ease-in-out group-hover:-translate-x-1"
      />{' '}
      {label || defaultLabel}
    </button>
  )
}
