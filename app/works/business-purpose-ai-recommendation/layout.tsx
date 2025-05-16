'use client'
import { useEffect, useState } from 'react'
import { TextMorph } from '@/components/ui/text-morph'
import { BackButton } from '@/components/ui/back-button'

function CopyButton() {
  const [text, setText] = useState('Copy')
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    setTimeout(() => {
      setText('Copy')
    }, 2000)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(currentUrl)
      }}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="prose prose-zinc dark:prose-invert mx-auto py-12">
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="absolute top-20 right-4">
        <CopyButton />
      </div>
      {children}
    </main>
  )
}
