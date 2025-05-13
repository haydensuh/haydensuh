'use client'
import { useEffect, useState } from 'react'
import { TextMorph } from '@/components/ui/text-morph'
import Link from 'next/link'
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
  const [authenticated, setAuthenticated] = useState(false)
  const [input, setInput] = useState('')
  const PASSWORD = 'hjsuh7890'

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center bg-white py-20 dark:bg-black">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            Please enter password to access :)
          </h1>
          <input
            type="password"
            placeholder="Enter password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="rounded border px-4 py-2 text-center text-black"
          />
          <button
            onClick={() => {
              if (input === PASSWORD) {
                setAuthenticated(true)
              } else {
                alert('Incorrect password')
              }
            }}
            className="rounded bg-zinc-800 px-4 py-2 text-white hover:bg-zinc-700"
          >
            Unlock
          </button>
        </div>
      </div>
    )
  }

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
