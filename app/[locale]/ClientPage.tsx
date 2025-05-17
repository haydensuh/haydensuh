'use client'

import { useMemo } from 'react'
import { motion } from 'motion/react'
import { XIcon, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import { AnimatedBackground } from '@/components/ui/animated-background'

import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
} from '../data'
import { Locale } from '@/lib/i18n-config'

type Props = {
  locale: Locale
}

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

export default function ClientPage({ locale }: Props) {
  const projects = useMemo(() => PROJECTS[locale as Locale] ?? [], [locale])
  const workExperience = useMemo(
    () => WORK_EXPERIENCE[locale as Locale] ?? [],
    [locale],
  )
  const blogPosts = useMemo(() => BLOG_POSTS[locale as Locale] ?? [], [locale])

  return (
    <motion.main
      className="space-y-24"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 },
        },
      }}
    >
      {/* 1. 소개 */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-zinc-600 dark:text-zinc-400">
          From complexity to clarity — I design to drive real impact with
          empathy, clarity, and intent.
        </p>
      </motion.section>

      {/* 2. 프로젝트 */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-medium">Selected Projects</h3>
          <Link
            href={`/${locale}/works`}
            className="group flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400"
          >
            View all{' '}
            <ArrowRightIcon
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects?.map((project) => (
            <div key={project.name} className="space-y-2">
              {project.video ? (
                <ProjectVideo src={project.video} />
              ) : (
                <Link
                  href={`/${locale}${project.link}`}
                  className="group block"
                >
                  <div className="relative rounded-2xl bg-zinc-50 ring-1 ring-zinc-200/50 transition-all ring-inset group-hover:scale-[1.01] dark:bg-zinc-900 dark:ring-zinc-800/50">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="block aspect-video w-full rounded-xl object-cover"
                      style={{ pointerEvents: 'auto' }}
                    />
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

      {/* 3. 경력 */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-2">
          {workExperience.map((job) => (
            <a
              key={job.id}
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            >
              <Spotlight
                className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
                size={64}
              />
              <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
                <div className="flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <h4 className="font-normal dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      {job.start} - {job.end}
                    </p>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {job.company}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.section>

      {/* 4. 블로그 */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mb-3 text-lg font-medium">Blog</h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          >
            {blogPosts.map((post) => (
              <Link
                key={post.uid}
                href={`/${locale}${post.link}`}
                className="-mx-3 rounded-xl px-3 py-3"
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-normal dark:text-zinc-100">
                    {post.title}
                  </h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      {/* 5. 소개 */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-medium">About</h3>
          <Link
            href={`/${locale}/about`}
            className="group flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-400"
          >
            Learn more
            <ArrowRightIcon
              size={14}
              className="transition-transform duration-150 ease-in-out group-hover:translate-x-1"
            />
          </Link>
        </div>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Driving intuitive and high-performance web experiences by aligning
          design execution with business impact — bridging design and
          development through frontend literacy and hands-on implementation.
        </p>
      </motion.section>

      {/* 6. 연락처 */}
      <motion.section
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          Feel free to contact me at{' '}
          <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </p>
        <div className="flex items-center justify-start space-x-3">
          {SOCIAL_LINKS.map((link) => (
            <Magnetic
              key={link.label}
              springOptions={{ bounce: 0 }}
              intensity={0.3}
            >
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
              >
                {link.label}
              </a>
            </Magnetic>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
