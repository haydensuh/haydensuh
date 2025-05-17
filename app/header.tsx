'use client'

import { useEffect, useState } from 'react'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { LogoutButton } from '@/components/ui/logout-button'

type HeaderProps = {
  locale: 'en' | 'ko'
}

export function Header({ locale }: HeaderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth_token='))
      ?.split('=')[1]
    setIsAuthenticated(token === 'valid')
  }, [])

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
          <Link
            href={`/${locale}`}
            className="font-medium text-black dark:text-white"
          >
            {locale === 'ko' ? '서현정 포트폴리오' : 'Hayden Suh'}
          </Link>
          {isAuthenticated && <LogoutButton />}
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
