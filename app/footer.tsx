'use client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { TextLoop } from '@/components/ui/text-loop'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const THEMES_OPTIONS = [
  {
    label: 'Light',
    id: 'light',
    icon: <SunIcon className="h-4 w-4" />,
  },
  {
    label: 'Dark',
    id: 'dark',
    icon: <MoonIcon className="h-4 w-4" />,
  },
  {
    label: 'System',
    id: 'system',
    icon: <MonitorIcon className="h-4 w-4" />,
  },
]

function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <AnimatedBackground
      className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
      defaultValue={theme}
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.2,
      }}
      enableHover={false}
      onValueChange={(id) => {
        setTheme(id as string)
      }}
    >
      {THEMES_OPTIONS.map((theme) => {
        return (
          <button
            key={theme.id}
            className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
            type="button"
            aria-label={`Switch to ${theme.label} theme`}
            data-id={theme.id}
          >
            {theme.icon}
          </button>
        )
      })}
    </AnimatedBackground>
  )
}

function LocaleSwitch() {
  const pathname = usePathname()
  const router = useRouter()

  const toggleLocale = () => {
    const newLocale = pathname.startsWith('/en') ? 'ko' : 'en'
    const newPath = pathname.replace(/^\/(en|ko)/, '') || '/'
    router.push(`/${newLocale}${newPath}`)
  }

  const label = pathname.startsWith('/en') ? '한' : 'En'

  return (
    <button
      onClick={toggleLocale}
      className="mx-4 hover:text-zinc-800 dark:hover:text-zinc-300"
    >
      {label}
    </button>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
      <div className="flex items-center justify-between">
        <a href="https://github.com/haydensuh/haydensuh" target="_blank">
          <TextLoop className="text-xs text-zinc-500">
            <span>© 2025 Hayden Suh.</span>
            <span>Built with Motion-Primitives.</span>
          </TextLoop>
        </a>
        <div className="flex items-center text-xs text-zinc-400">
          <LocaleSwitch />
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  )
}
