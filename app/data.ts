import type { Locale } from '@/lib/i18n-config'

type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type AllWorks = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Record<Locale, Project[]> = {
  en: [
    {
      name: 'Enhancing Investor Engagement Services',
      description:
        'Designed a broker (referrer) system based on existing investors',
      link: '/works/invest-relation',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/001_hv86py.png',
      id: 'invest-relation',
    },
    {
      name: 'Streamlining Company Registration Flow',
      description: 'Enabling immediate onboarding without waiting',
      link: '/works/company-registration',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321250_taty9w.png',
      id: 'company-registration',
    },
  ],
  ko: [
    {
      name: '투자자 매칭 서비스 고도화',
      description: '기투자자 기반 추천인 기능 도입',
      link: '/works/invest-relation',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/001_hv86py.png',
      id: 'invest-relation',
    },
    {
      name: '회사 등록 플로우 간소화',
      description: '기다리지 않고 바로 온보딩할 수 있도록',
      link: '/works/company-registration',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321250_taty9w.png',
      id: 'company-registration',
    },
  ],
}

export const ALL_WORKS: Record<Locale, AllWorks[]> = {
  en: [
    {
      name: 'Enhancing Investor Engagement Services',
      description:
        'Designed a broker (referrer) system based on existing investors',
      link: '/works/invest-relation',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/001_hv86py.png',
      id: 'invest-relation',
    },
    {
      name: 'Streamlining Company Registration Flow',
      description: 'Enabling immediate onboarding without waiting',
      link: '/works/company-registration',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321250_taty9w.png',
      id: 'company-registration',
    },
    {
      name: 'Improving Meeting Notice Functionality',
      description: 'Introducing customizable agenda content',
      link: '/works/meeting-notice-agenda-details-edit',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321251_piuaqp.png',
      id: 'meeting-notice-agenda-details-edit',
    },
    {
      name: 'Integrated Stakeholder Management',
      description: 'Designing a unified stakeholder management system',
      link: '/works/stakeholder-management',
      id: 'stakeholder-management',
    },
    {
      name: 'AI-Powered Business Purpose Recommendation',
      description:
        'Automatically suggesting business purposes based on company descriptions',
      link: '/works/business-purpose-ai-recommendation',
      id: 'business-purpose-ai-recommendation',
    },
  ],
  ko: [
    {
      name: '투자자 매칭 서비스 고도화',
      description: '기존 투자자 기반 추천인 기능 도입',
      link: '/works/invest-relation',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/001_hv86py.png',
      id: 'invest-relation',
    },
    {
      name: '회사 등록 플로우 간소화',
      description: '기다리지 않고 바로 온보딩할 수 있도록',
      link: '/works/company-registration',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321250_taty9w.png',
      id: 'company-registration',
    },
    {
      name: '회의 알림 기능 개선',
      description: '커스텀 아젠다 콘텐츠 도입',
      link: '/works/meeting-notice-agenda-details-edit',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321251_piuaqp.png',
      id: 'meeting-notice-agenda-details-edit',
    },
    {
      name: '이해관계자 통합관리 시스템',
      description: '통합 이해관계자 관리 시스템 설계',
      link: '/works/stakeholder-management',
      id: 'stakeholder-management',
    },
    {
      name: 'AI 기반 목적 추천',
      description: '회사 설명 기반 목적 자동 추천',
      link: '/works/business-purpose-ai-recommendation',
      id: 'business-purpose-ai-recommendation',
    },
  ],
}

export const WORK_EXPERIENCE = {
  en: [
    {
      company: 'Kodebox Co.,Ltd. (ZUZU)',
      title: 'Product Designer',
      start: '2024.04',
      end: 'Present',
      link: 'https://zuzu.network/',
      id: 'work1',
    },
    {
      company: 'LF FOOD CORP.',
      title: 'Product Designer',
      start: '2020.10',
      end: '2023.12',
      link: 'https://www.lffood.co.kr/',
      id: 'work2',
    },
    {
      company: 'The 6th Day Co., Ltd. (Acquired by GS Retail in 2021)',
      title: 'UI/UX Designer',
      start: '2020.04',
      end: '2020.09',
      link: 'https://www.aboutpet.co.kr/shop/home/',
      id: 'work3',
    },
    {
      company: 'Seoul Book Center Co., Ltd. (Bandi/lunis)',
      title: 'UI/UX Designer',
      start: '2018.08',
      end: '2020.04',
      link: 'https://www.bandinlunis.com/front/main.do',
      id: 'work4',
    },
    {
      company: "Lotte Shopping Co., Ltd. (Lohb's)",
      title: 'Web Designer',
      start: '2017.08',
      end: '2018.02',
      link: 'https://www.lotteon.com/p/display/main/lottelohbs?mall_no=7',
      id: 'work5',
    },
  ],
  ko: [
    {
      company: '(주)코드박스 (ZUZU)',
      title: 'Product Designer',
      start: '2024.04',
      end: '현재',
      link: 'https://zuzu.network/',
      id: 'work1',
    },
    {
      company: '(주)엘에프푸드',
      title: 'Product Designer',
      start: '2020.10',
      end: '2023.12',
      link: 'https://www.lffood.co.kr/',
      id: 'work2',
    },
    {
      company: '(주)더식스데이 (2021년 GS 리테일 인수)',
      title: 'UI/UX Designer',
      start: '2020.04',
      end: '2020.09',
      link: 'https://www.aboutpet.co.kr/shop/home/',
      id: 'work3',
    },
    {
      company: '(주)서울문고 (반디앤루니스)',
      title: 'UI/UX Designer',
      start: '2018.08',
      end: '2020.04',
      link: 'https://www.bandinlunis.com/front/main.do',
      id: 'work4',
    },
    {
      company: '(주)롯데쇼핑 (롭스)',
      title: 'Web Designer',
      start: '2017.08',
      end: '2018.02',
      link: 'https://www.lotteon.com/p/display/main/lottelohbs?mall_no=7',
      id: 'work5',
    },
  ],
}

export const BLOG_POSTS = {
  en: [
    {
      title: 'A Recommendation Is Not Enough',
      description: 'Rethinking AI UX through business purpose suggestions',
      link: '/blog/post-chat-ui',
      uid: 'post-chat-ui',
    },
    {
      title: 'How Do We Define Satisfaction?',
      description: 'Defining satisfaction through operational definition',
      link: '/blog/zuzu-operational-definition',
      uid: 'zuzu-operational-definition',
    },
  ],
  ko: [
    {
      title: '추천은 출력이 아니다',
      description: '사업목적 추천 기능을 설계하며 다시 생각한 AI 인터페이스',
      link: '/blog/post-chat-ui',
      uid: 'post-chat-ui',
    },
    {
      title: '만족도를 어떻게 정의할 것인가?',
      description: 'ZUZU의 법인 설립 기능을 예로 본 조작적 정의',
      link: '/blog/zuzu-operational-definition',
      uid: 'zuzu-operational-definition',
    },
  ],
}

export const ALL_BLOG_POSTS = {
  en: [
    {
      title: 'A Recommendation Is Not Enough',
      description: 'Rethinking AI UX through business purpose suggestions',
      link: '/blog/post-chat-ui',
      uid: 'post-chat-ui',
    },
    {
      title: 'How Do We Define Satisfaction?',
      description: 'Defining satisfaction through operational definition',
      link: '/blog/zuzu-operational-definition',
      uid: 'zuzu-operational-definition',
    },
  ],
  ko: [
    {
      title: '추천은 출력이 아니다',
      description: '사업목적 추천 기능을 설계하며 다시 생각한 AI 인터페이스',
      link: '/blog/post-chat-ui',
      uid: 'post-chat-ui',
    },
    {
      title: '만족도를 어떻게 정의할 것인가?',
      description: 'ZUZU의 법인 설립 기능을 예로 본 조작적 정의',
      link: '/blog/zuzu-operational-definition',
      uid: 'zuzu-operational-definition',
    },
  ],
}
export const SOCIAL_LINKS: SocialLink[] = [
  // {
  //   label: 'Github',
  //   link: 'https://github.com/haydensuh/haydensuh',
  // },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hazelsuh',
  },
]

export const EMAIL = 'hyunjung.s.suh@gmail.com'
