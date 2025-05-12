'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-1">
          <img
            src="https://res.cloudinary.com/hazelsuh-site/image/upload/logo_cvb1n5.png"
            alt="logo"
            width={24}
            height={24}
            className="rounded-full dark:bg-zinc-800"
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
          delay={0.2}
        >
          Product Designer
        </TextEffect>
      </div>
    </header>
  )
}
