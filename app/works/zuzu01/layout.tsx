'use client'
import { useEffect, useState } from 'react'

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
      {children}
    </main>
  )
}
