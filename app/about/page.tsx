'use client'

import Link from 'next/link'

import { motion } from 'framer-motion'
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

export default function About() {
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

        <h3 className="mb-5 text-lg font-medium">About Me</h3>

        <div className="prose dark:prose-invert">
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            I'm a designer and developer focused on creating intuitive and
            high-performance web experiences. With a background in both design
            and development, I bridge the gap between aesthetic vision and
            technical implementation.
          </p>

          <h2 className="mt-8 text-xl font-semibold">My Approach</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            I believe in designing with purpose and developing with precision.
            Every project I undertake is an opportunity to create something that
            not only looks beautiful but also performs exceptionally well.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Skills & Expertise</h2>
          <ul className="list-disc pl-4 text-zinc-600 dark:text-zinc-400">
            <li>UI/UX Design</li>
            <li>Frontend Development</li>
            <li>Design Systems</li>
            <li>Performance Optimization</li>
            <li>Responsive Design</li>
            <li>Animation & Interaction</li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold">Philosophy</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            I approach each project with a focus on user experience,
            performance, and business impact. My goal is to create digital
            experiences that are not just visually appealing, but also
            intuitive, accessible, and aligned with business objectives.
          </p>
        </div>
      </motion.section>
    </motion.main>
  )
}
