'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BackButton } from '@/components/ui/back-button'
import type { Locale } from '@/lib/i18n-config'

type Props = {
  locale: Locale
}

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

const ABOUT_SECTIONS_BY_LOCALE: Record<Locale, AboutSectionData[]> = {
  en: [
    {
      title: 'Background',
      content: (
        <p className="text-zinc-600 dark:text-zinc-400">
          I began my career in visual communication design, but it didn't take
          long before I was drawn to how people think, hesitate, and decide.
          That curiosity led me into UX, where I've spent the past 6 years
          designing structured, human-centered workflows in complex domains like
          e-commerce, legal tech and startup financing. <br />I currently work
          at ZUZU as a Product Designer, contributing to tools that support
          company operations — from AI-assisted features to shareholder
          management and investor matching systems. My role often blends product
          strategy, UX, and system thinking, ensuring that messy real-world
          scenarios translate into clear and reliable user flows.
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
              disclosure, so users can stay focused and informed without
              cognitive fatigue.
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
            At the heart of my work is empathy: the belief that on the other
            side of every screen is a person with their own mental model, goals,
            and constraints.
          </p>
        </>
      ),
    },
    // {
    //   title: 'Now & Next',
    //   content: (
    //     <>
    //       <p className="text-zinc-600 dark:text-zinc-400">
    //         Right now, I'm focused on:
    //       </p>
    //       <ul className="list-disc pl-4 text-zinc-600 dark:text-zinc-400">
    //         <li>Building modular form systems for legal contracts and filings</li>
    //         <li>
    //           Supporting users with varying levels of legal and digital literacy
    //         </li>
    //         <li>
    //           Designing AI-assisted workflows that feel natural and transparent
    //         </li>
    //         <li>
    //           Bridging design and development through hands-on frontend
    //           implementation
    //         </li>
    //       </ul>
    //       <p className="text-zinc-600 dark:text-zinc-400">
    //         Looking ahead, I'm exploring{' '}
    //         <span className="font-bold">HCI research</span> and inclusive design
    //         at scale. <br />I believe that truly impactful products are not just
    //         functional — they're understandable, accessible, and empowering for
    //         all.
    //       </p>
    //     </>
    //   ),
    // },
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
  ],
  ko: [
    {
      title: '배경',
      content: (
        <p className="text-zinc-600 dark:text-zinc-400">
          시각 커뮤니케이션 디자인을 전공했고 첫 커리어는 그래픽 디자인으로
          시작했습니다. 하지만 늘 사람의 행동과 생각을 관찰하는 일에 더
          끌렸습니다. 그리고 왜 망설이고 어떻게 결정을 내리는지에 대한 궁금증은
          자연스럽게 UX로 이어졌습니다. 이후 6년 동안 B2C 이커머스, B2B
          이커머스, 리걸테크, 스타트업 주주 관리 등과 같은 복잡한 도메인에서도
          사용자가 쉽게 이해하고 움직일 수 있는 흐름을 설계하기 위해
          고민해왔습니다. <br />
          지금은 ZUZU에서 일하며 AI 기능부터 주주 관리, 투자자 매칭 시스템까지
          회사 운영을 돕는 여러 서비스와 기능들을 만들고 있습니다. 제품 전략부터
          사용자 경험, 시스템적인 시야까지 복잡한 문제를 명확한 흐름으로 바꾸는
          데 집중합니다.
        </p>
      ),
    },
    {
      title: '디자인 철학',
      content: (
        <>
          <p className="text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold">'복잡함에서 명확함으로'</span>
          </p>
          <ul className="list-disc pl-4 text-zinc-600 dark:text-zinc-400">
            <li>
              저는 비즈니스 로직과 사람의 행동이 만나는 지점을 설계하는 일을
              좋아합니다. '이 단계에서 가장 중요한 것은 무엇일까?'를 끊임없이
              묻고 사용자를 혼란스럽게 하지 않는 도구를 만들고자 합니다.
            </li>
            <li>
              사용자가 인지적 피로 없이 흐름을 따라갈 수 있도록 구조화된
              선택지와 문맥에 맞는 안내, 단계적인 정보 제공을 우선합니다.
            </li>
            <li>
              좋은 UX는 단순히 예쁘게 만드는 게 아니라 복잡한 문제를 자연스럽게
              풀어주는 것이라고 믿습니다.
            </li>
          </ul>
          <p className="text-zinc-600 dark:text-zinc-400">
            제 디자인의 중심에는 <span className="font-semibold">사람</span>이
            있습니다. 화면 너머에는 각자의 사고방식과 목표, 제약을 가진 사용자가
            있다고 믿고 그들의 맥락을 이해하며 설계하려 노력합니다.
          </p>
        </>
      ),
    },
    // {
    //   title: 'Now & Next',
    //   content: (
    //     <>
    //       <p className="text-zinc-600 dark:text-zinc-400">
    //         Right now, I'm focused on:
    //       </p>
    //       <ul className="list-disc pl-4 text-zinc-600 dark:text-zinc-400">
    //         <li>Building modular form systems for legal contracts and filings</li>
    //         <li>
    //           Supporting users with varying levels of legal and digital literacy
    //         </li>
    //         <li>
    //           Designing AI-assisted workflows that feel natural and transparent
    //         </li>
    //         <li>
    //           Bridging design and development through hands-on frontend
    //           implementation
    //         </li>
    //       </ul>
    //       <p className="text-zinc-600 dark:text-zinc-400">
    //         Looking ahead, I'm exploring{' '}
    //         <span className="font-bold">HCI research</span> and inclusive design
    //         at scale. <br />I believe that truly impactful products are not just
    //         functional — they're understandable, accessible, and empowering for
    //         all.
    //       </p>
    //     </>
    //   ),
    // },
    {
      title: '업무 밖, 일상 속에서',
      content: (
        <p className="text-zinc-600 dark:text-zinc-400">
          저는 책을 읽거나 여행하면서 새로운 관점과 조용한 순간에서 영감을
          얻습니다. 일상 속에서 사람과 시스템을 관찰하며 '이거 정말 잘
          만들었다'는 생각이 드는 디테일에 관심이 많습니다.
          <br />
          그리고… <span className="font-semibold">파인애플 피자</span>와{' '}
          <span className="font-semibold">카페라떼</span>는 디자인의 원천입니다.
          🍍🍕☕️
        </p>
      ),
    },
  ],
}

export default function ClientAboutPage({ locale }: Props) {
  const sections =
    ABOUT_SECTIONS_BY_LOCALE[locale] ?? ABOUT_SECTIONS_BY_LOCALE['en']

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

        <h3 className="mb-2 text-lg font-medium">
          {locale === 'en' ? 'Hayden Suh' : '서현정'}
        </h3>

        <p className="mb-5 text-zinc-600 dark:text-zinc-400">
          {locale === 'en' ? (
            <>
              I’m a Product Designer at Kodebox , a subsidiary of{' '}
              <a
                href="https://www.dunamu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-zinc-500 dark:hover:text-zinc-400"
              >
                Dunamu
                <LinkIcon />
              </a>{' '}
              . <br />I design user experiences for{' '}
              <a
                href="https://zuzu.network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-zinc-500 dark:hover:text-zinc-400"
              >
                ZUZU
                <LinkIcon />
              </a>{' '}
              , a service that supports startups across the entire company
              lifecycle — from incorporation and operations to investor matching
              and AI-assisted workflows. My focus is on making complex legal and
              operational processes more approachable and intuitive.
            </>
          ) : (
            <>
              현재{' '}
              <a
                href="https://www.dunamu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-zinc-500 dark:hover:text-zinc-400"
              >
                두나무
                <LinkIcon />
              </a>{' '}
              의 자회사인 Kodebox에서 프로덕트 디자이너로 일하며 법인 설립, 법인
              운영부터 투자자 매칭 시스템, AI 기반 기능까지 회사 운영 전반을
              지원하는{' '}
              <a
                href="https://zuzu.network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center hover:text-zinc-500 dark:hover:text-zinc-400"
              >
                ZUZU <LinkIcon />
              </a>{' '}
              의 사용자 경험을 설계하고 있습니다. 스타트업이 회사를 설립하고
              운영하면서 겪는 복잡한 절차들을 더 빠르고 간편하게 해결할 수
              있도록 돕습니다.
            </>
          )}
        </p>

        <div className="prose dark:prose-invert space-y-3">
          {sections.map((section) => (
            <AccordionItem key={section.title} title={section.title}>
              {section.content}
            </AccordionItem>
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}
