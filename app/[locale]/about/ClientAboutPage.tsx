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
            <span className="font-semibold">From complexity to clarity</span>
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
    {
      title: 'What Drives Me',
      content: (
        <ul className="list-disc space-y-2 pl-4 text-zinc-600 dark:text-zinc-400">
          <li>
            <span className="font-semibold">Curiosity to Explore:</span> I find
            energy in trying things out, observing patterns, and meeting the
            unfamiliar — even when it doesn’t seem immediately useful. If an
            idea isn’t harmful, I’d rather try it first.
          </li>
          <li>
            <span className="font-semibold">Power of Questions:</span> I make a
            habit of holding onto questions and searching for the gaps in how
            things work. I’m especially interested in uncovering assumptions —
            the things we think we know, but don’t.
          </li>
          <li>
            <span className="font-semibold">Emotional Insight:</span> I believe
            that the ability to sense and express emotion plays a powerful role
            in design — it's often what turns interaction into connection.
          </li>
          <li>
            <span className="font-semibold">Thoughtful Judgment:</span> I value
            time spent thinking over chasing quick wins. Even when a process
            seems inefficient, I believe that struggle often leads to growth and
            better decisions.
          </li>
          <li>
            <span className="font-semibold">Adaptability:</span> Change is
            inevitable, so I don’t hesitate to let go of what's familiar and
            adjust myself to new environments. I enjoy embracing the unfamiliar
            and trying new things.
          </li>
        </ul>
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
              저는 서비스가 어떻게 돌아가는지와 사람이 실제로 어떻게
              행동하는지가 어긋나는 순간을 유심히 보는 편입니다. 로직상으로는
              맞지만 막상 쓰는 입장에서는 헷갈리는 지점들을 찾아내는 것을
              좋아합니다.
            </li>
            <li>
              그래서 작업을 할 때마다 '이 단계에서 사용자가 굳이 고민해야 할 게
              뭘까?'를 먼저 생각합니다. 가능하다면 고민할 지점을 줄이고 지금
              알아야 할 것만 자연스럽게 보이도록 정리하려고 합니다. 선택지는
              너무 많지 않게, 안내는 상황에 맞게, 정보는 한 번에 몰리지
              않도록요.
            </li>
          </ul>
          <p className="text-zinc-600 dark:text-zinc-400">
            저에게 좋은 UX는 잘 만든 화면이 아니라, 사용자가 굳이 설명을 듣지
            않아도 다음 행동으로 넘어갈 수 있는 상태입니다. 화면 너머에는 항상
            각자 다른 상황과 목표를 가진{' '}
            <span className="font-semibold">사람</span>이 있다고 생각하고 그
            사람이 어떤 맥락에서 이 화면을 보고 있을지를 머릿 속에 그리고
            설계하려고 합니다.
          </p>
        </>
      ),
    },
    {
      title: '나를 움직이는 힘',
      content: (
        <ul className="list-disc space-y-2 pl-4 text-zinc-600 dark:text-zinc-400">
          <li>
            <span className="font-semibold">탐험력:</span> 시도하고 관찰하며
            새로운 것을 만나는 데서 힘을 얻습니다. 당장 쓸모가 없어보이더라도
            나쁜 것이 아니라면 일단 해보려 합니다.
          </li>
          <li>
            <span className="font-semibold">질문력:</span> 마음속의 질문을
            놓치지 않고 문제의 빈틈을 찾아내는 데 집중합니다. 특히 사업 모델이나
            사용자 여정에서 '모르는데 알고 있다고 착각하는 것'을 짚어내고자
            합니다.
          </li>
          <li>
            <span className="font-semibold">교감력:</span> 감정을 섬세하게
            전달하거나 읽어내는 힘이 디자인에 중요한 연결고리가 된다고 믿습니다.
          </li>
          <li>
            <span className="font-semibold">판단력:</span> 성과보다 사고하는
            시간을 더 중요하게 여깁니다. 비효율적으로 보이더라도 직접 고민해보는
            과정을 통해 성숙해지는 것을 믿습니다.
          </li>
          <li>
            <span className="font-semibold">적응력:</span> 변화는 피할 수 없기에
            익숙한 것을 내려놓고 새로운 환경에 나를 맞추는 데 주저하지 않습니다.
            새로운 것을 받아들이고 시도하는 것을 좋아합니다.
          </li>
        </ul>
      ),
    },
    {
      title: '업무 밖, 일상 속에서',
      content: (
        <p className="text-zinc-600 dark:text-zinc-400">
          책을 읽거나 여행하면서 새로운 관점과 조용한 순간에서 영감을 얻습니다.
          일상 속에서 사람과 시스템을 관찰하며 '이거 정말 잘 만들었다'는 생각이
          드는 디테일에 관심이 많습니다.
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
                href="https://www.dunamu.com/en"
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

        <div className="prose dark:prose-invert space-y-3 max-w-none">
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
