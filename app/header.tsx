'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-1">
          <img
            src="https://res.cloudinary.com/hazelsuh-site/image/upload/computer_mouse_line_aiq22c.svg"
            alt="logo"
            width={16}
            height={16}
            className="rounded-full"
          />
          <Link href="/" className="font-medium text-black dark:text-white">
            Hayden Suh
          </Link>
        </div>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Product Designer with frontend literacy
        </TextEffect>
      </div>
    </header>
  )
}
