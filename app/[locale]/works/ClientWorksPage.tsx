// app/[locale]/works/ClientWorksPage.tsx
'use client'

import { useMemo } from 'react'
import type { Locale } from '@/lib/i18n-config'
import { ALL_WORKS } from '@/app/data'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { BackButton } from '@/components/ui/back-button'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

type Props = { locale: Locale }

function ProjectVideo({ src }: { src: string }) {
  return (
    <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
      <MorphingDialogTrigger>
        <video
          src={src}
          autoPlay
          loop
          muted
          className="aspect-video w-full cursor-zoom-in rounded-xl"
        />
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
          <video
            src={src}
            autoPlay
            loop
            muted
            className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
          />
        </MorphingDialogContent>
        <MorphingDialogClose className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1">
          <XIcon className="h-5 w-5 text-zinc-500" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export default function ClientWorksPage({ locale }: Props) {
  const works = useMemo(() => ALL_WORKS[locale] ?? [], [locale])

  return (
    <motion.main
      className="space-y-12 py-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-6"
      >
        <div className="mb-8">
          <BackButton />
        </div>

        <h3 className="mb-5 text-lg font-medium">All Projects</h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {works.map((project) => (
            <div key={project.name} className="space-y-2">
              {project.video ? (
                <ProjectVideo src={project.video} />
              ) : (
                <Link
                  href={`/${locale}${project.link}`}
                  className="group block"
                >
                  <div className="relative rounded-2xl bg-zinc-50 ring-1 ring-zinc-200/50 transition-all ring-inset group-hover:scale-[1.01] dark:bg-zinc-900 dark:ring-zinc-800/50">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="block aspect-video w-full rounded-xl object-cover"
                        style={{ pointerEvents: 'auto' }}
                      />
                    ) : (
                      <div className="flex aspect-video w-full items-center justify-center rounded-xl text-zinc-500 dark:text-zinc-400">
                        Coming soon...
                      </div>
                    )}
                  </div>
                  <div className="px-1 py-2">
                    <div className="font-base relative inline-block font-[450] text-zinc-900 dark:text-zinc-50">
                      {project.name}
                      <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 transition-all duration-200 group-hover:max-w-full" />
                    </div>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
