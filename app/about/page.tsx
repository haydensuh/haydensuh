'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BackButton } from '@/components/ui/back-button'

type AccordionItemProps = {
  title: string
  children: React.ReactNode
}

type AboutSectionData = {
  title: string
  content: React.ReactNode
}

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

const LinkIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
    >
      <path
        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-zinc-200 pb-2 dark:border-zinc-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-end justify-between"
      >
        <h4 className="inline-block font-medium">{title}</h4>
        <svg
          className={`mb-3 h-4 w-4 transform transition-transform duration-500 ease-out ${
            isOpen ? 'rotate-45' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              y: 0,
            }}
            exit={{
              height: 0,
              opacity: 0,
              y: 0,
            }}
            transition={{
              height: {
                duration: 0.4,
                ease: [0.04, 0.62, 0.23, 0.98],
              },
              opacity: {
                duration: 0.25,
                ease: 'linear',
              },
            }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const ABOUT_SECTIONS: AboutSectionData[] = [
  {
    title: 'Background',
    content: (
      <p className="text-zinc-600 dark:text-zinc-400">
        I began my career in visual communication design, but it didn't take
        long before I was drawn to how people think, hesitate, and decide. That
        curiosity led me into UX, where I've spent the past 6 years designing
        structured, human-centered workflows in complex domains like e-commerce,
        legal tech and startup financing. <br />I currently work at ZUZU,
        leading design for legal automation tools — from AI-powered funtions to
        shareholder portals and investor matching. My role often blends product
        strategy, UX, and system thinking, ensuring that messy real-world
        scenarios translate into calm, confident user flows.
      </p>
    ),
  },
  {
    title: 'Design Philosophy',
    content: (
      <>
        <p className="text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold">From complexity to clarity —</span>{' '}
          that's the foundation of everything I design.
        </p>
        <ul className="list-disc pl-4 text-zinc-600 dark:text-zinc-400">
          <li>
            I prioritize structured choices, contextual cues, and progressive
            disclosure, so users can stay focused and informed without cognitive
            fatigue.
          </li>
          <li>
            I believe great UX isn't just about visual polish. It's about
            guiding users through complexity without overwhelming them.
          </li>
          <li>
            I love working where business logic meets human behavior — mapping
            out workflows, asking "What matters at this step?", and designing
            tools that empower, not confuse.
          </li>
        </ul>
        <p className="text-zinc-600 dark:text-zinc-400">
          At the heart of my work is empathy: the belief that on the other side
          of every screen is a person with their own mental model, goals, and
          constraints.
        </p>
      </>
    ),
  },
  {
    title: 'Now & Next',
    content: (
      <>
        <p className="text-zinc-600 dark:text-zinc-400">
          Right now, I'm focused on:
        </p>
        <ul className="list-disc pl-4 text-zinc-600 dark:text-zinc-400">
          <li>
            Designing AI-assisted workflows that feel natural and transparent
          </li>
          <li>Building modular form systems for legal contracts and filings</li>
          <li>
            Supporting users with varying levels of legal and digital literacy
          </li>
          <li>
            Bridging design and development through hands-on frontend
            implementation
          </li>
        </ul>
        <p className="text-zinc-600 dark:text-zinc-400">
          Looking ahead, I'm exploring{' '}
          <span className="font-bold">HCI research</span> and inclusive design
          at scale. <br />I believe that truly impactful products are not just
          functional — they're understandable, accessible, and empowering for
          all.
        </p>
      </>
    ),
  },
  {
    title: 'Outside work',
    content: (
      <p className="text-zinc-600 dark:text-zinc-400">
        I find inspiration in quiet moments and new perspectives — through
        books, thoughtful travel, and time spent observing the world. I love
        ideas and details that make people say, "Oh, that makes sense."
        <br />
        Also, proudly team pineapple on pizza.
      </p>
    ),
  },
]

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

        <h3 className="mb-2 text-lg font-medium">Hayden Suh</h3>

        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          I currently work at{' '}
          <a
            href="https://zuzu.network"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-zinc-500 dark:hover:text-zinc-400"
          >
            ZUZU
            <LinkIcon />
          </a>{' '}
          as a Product Designer focused on improving end-to-end workflows for
          corporate management.
        </p>

        <div className="prose dark:prose-invert space-y-3">
          {ABOUT_SECTIONS.map((section) => (
            <AccordionItem key={section.title} title={section.title}>
              {section.content}
            </AccordionItem>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
