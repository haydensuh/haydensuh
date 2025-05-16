'use client'
import { useEffect, useState } from 'react'
import { TextMorph } from '@/components/ui/text-morph'

export function CopyButton() {
  const [text, setText] = useState('Copy')

  const handleCopy = () => {
    const currentUrl = window.location.href
    navigator.clipboard.writeText(currentUrl)
    setText('Copied')
  }

  useEffect(() => {
    if (text === 'Copied') {
      const timer = setTimeout(() => {
        setText('Copy')
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [text])

  return (
    <button
      onClick={handleCopy}
      className="font-base flex items-center gap-1 text-center text-sm text-zinc-500 transition-colors dark:text-zinc-400"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}
