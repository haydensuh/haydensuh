'use client'
import { useEffect, useState } from 'react'

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [authenticated, setAuthenticated] = useState(false)
  const [input, setInput] = useState('')
  const PASSWORD = '1234'

  if (!authenticated) {
    return (
      <div className="flex h-screen items-center justify-center bg-white dark:bg-black">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
            Enter Password
          </h1>
          <input
            type="password"
            placeholder="Password"
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
            Submit
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
