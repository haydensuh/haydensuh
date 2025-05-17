'use client'

import { ALL_BLOG_POSTS } from '../../data'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedBackground } from '@/components/ui/animated-background'
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

        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {AllBlogPosts.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
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
    </motion.main>
  )
}
