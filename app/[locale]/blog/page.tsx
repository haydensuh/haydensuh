'use client'

import { ALL_BLOG_POSTS } from '../../data'
import Link from 'next/link'
import { Pin } from 'lucide-react'
import { motion } from 'framer-motion'
import { BackButton } from '@/components/ui/back-button'
import { usePathname } from 'next/navigation'
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

function formatUpdatedAt(locale: 'en' | 'ko', updatedAt?: string) {
  if (!updatedAt) return ''
  const date = new Date(updatedAt)
  if (Number.isNaN(date.getTime())) return updatedAt
  return new Intl.DateTimeFormat(locale === 'ko' ? 'ko-KR' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date)
}
export default function BlogPage() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] as 'en' | 'ko'

  const AllBlogPosts = ALL_BLOG_POSTS[locale]
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

        <h3 className="mb-5 text-lg font-medium">All Posts</h3>

        <div>
          {AllBlogPosts.map((post, index) => (
            <Link
              key={post.uid}
              href={`/${locale}${post.link}`}
              className="group -mx-4 flex flex-col gap-4 rounded-xl px-4 py-4 transition hover:bg-zinc-50 dark:hover:bg-zinc-800/40 sm:flex-row sm:items-start sm:justify-between"
            >
              <div className="min-w-0 flex-1">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-normal text-zinc-900 dark:text-zinc-100">
                      {post.title}
                    </h4>
                    {index === 0 ? (
                      <span className="inline-flex items-center rounded-full bg-zinc-200/70 px-2 py-0.5 text-[11px] font-medium text-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-200">
                        <Pin className="mr-1 h-3 w-3" />
                        {locale === 'en' ? 'Pinned' : 'Pinned'}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>
                </div>
                <p className="mt-2 text-sm text-zinc-400 dark:text-zinc-500">
                  {formatUpdatedAt(locale, post.updatedAt)}
                </p>
              </div>

              {post.image ? (
                <img
                  src={post.image}
                  alt=""
                  className="h-48 w-full rounded-xl object-cover outline outline-1 outline-zinc-200 dark:outline-zinc-800 sm:h-20 sm:w-32"
                  loading="lazy"
                />
              ) : null}
            </Link>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
