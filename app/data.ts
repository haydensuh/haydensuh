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
      name: 'Trusted Unlisted Stock Trading',
      description:
        'A seamless and legally secure unlisted stock trading service',
      link: '/works/unlisted-safe-trade',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321334_ddfwfc.png',
      id: 'unlisted-safe-trade',
    },
    {
      name: 'Shareholders’ Agreement Drafting Tool',
      description: 'Making complex contracts simple for everyone',
      link: '/works/shareholder-agreement',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/shareholder_agreement_f4bqqj.png',
      id: 'shareholder-agreement',
    },
  ],
  ko: [
    {
      name: '비상장주식 안전거래 서비스 with 증권플러스',
      description: '편리함과 법적 안전성을 갖춘 비상장 주식 거래 서비스',
      link: '/works/unlisted-safe-trade',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321334_ddfwfc.png',
      id: 'unlisted-safe-trade',
    },
    {
      name: '주주간계약서 작성 기능',
      description: '낯설고 어려운 계약서 작성을 누구나 쉽게',
      link: '/works/shareholder-agreement',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/shareholder_agreement_f4bqqj.png',
      id: 'shareholder-agreement',
    },
  ],
}

export const ALL_WORKS: Record<Locale, AllWorks[]> = {
  en: [
    {
      name: 'Trusted Unlisted Stock Trading',
      description:
        'A seamless and legally secure unlisted stock trading service',
      link: '/works/unlisted-safe-trade',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321334_ddfwfc.png',
      id: 'unlisted-safe-trade',
    },
    {
      name: 'Shareholders’ Agreement Drafting Tool',
      description: 'Making complex contracts simple for everyone',
      link: '/works/shareholder-agreement',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/shareholder_agreement_f4bqqj.png',
      id: 'shareholder-agreement',
    },
    // {
    //   name: 'Incorporation Support Center for Tax Firms',
    //   description:
    //     'One-stop flow from business registration to monthly bookkeeping',
    //   link: '/works/incorporation-center',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321335_xjn4pn.png',
    //   id: 'incorporation-center',
    // },
    // {
    //   name: 'ZUZU Onboarding Optimization',
    //   description: 'Survey-Based Routing Design and Flow Simplification',
    //   link: '/works/onboarding-optimization',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321250_taty9w.png',
    //   id: 'onboarding-optimization',
    // },
    {
      name: 'Enhancing Investor Engagement Services',
      description:
        'Designed a broker (referrer) system based on existing investors',
      link: '/works/investor-relation',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/001_hv86py.png',
      id: 'invest-relation',
    },
    // {
    //   name: 'Improving Meeting Notice Functionality',
    //   description: 'Introducing customizable agenda content',
    //   link: '/works/meeting-notice-agenda-details-edit',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321251_piuaqp.png',
    //   id: 'meeting-notice-agenda-details-edit',
    // },
    // {
    //   name: 'Monomart Business Membership Retention Enhancement',
    //   description: 'Reorder Feature Introduction & Member Growth',
    //   link: '/works/monomart-business-membership-retention',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321343_dckvuv.png',
    //   id: 'monomart-business-membership-retention',
    // },
    // {
    //   name: 'Integrated Stakeholder Management',
    //   description: 'Designing a unified stakeholder management system',
    //   link: '/works/stakeholder-management',
    //   id: 'stakeholder-management',
    // },
    // {
    //   name: 'AI-Powered Business Purpose Recommendation',
    //   description:
    //     'Automatically suggesting business purposes based on company descriptions',
    //   link: '/works/business-purpose-ai-recommendation',
    //   id: 'business-purpose-ai-recommendation',
    // },
  ],
  ko: [
    {
      name: '비상장주식 안전거래 서비스 with 증권플러스',
      description: '편리함과 법적 안전성을 갖춘 비상장 주식 거래 서비스',
      link: '/works/unlisted-safe-trade',
      image:
        'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321334_ddfwfc.png',
      id: 'unlisted-safe-trade',
    },
    // {
    //   name: '주주간계약서 작성 기능',
    //   description: '낯설고 어려운 계약서 작성을 누구나 쉽게',
    //   link: '/works/shareholder-agreement',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/shareholder_agreement_f4bqqj.png',
    //   id: 'shareholder-agreement',
    // },
    // {
    //   name: 'ZUZU 온보딩 최적화',
    //   description: '가입 설문 기반 라우팅 설계 및 플로우 단축',
    //   link: '/works/onboarding-optimization',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321250_taty9w.png',
    //   id: 'company-registration',
    // },
    // {
    //   name: '투자자 매칭 서비스 고도화',
    //   description: '기존 투자자 추천 기반 딜소싱 설계',
    //   link: '/works/investor-relation',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/001_hv86py.png',
    //   id: 'investor-relation',
    // },
    // {
    //   name: '법인설립지원센터(세무펌 전용 CRM)',
    //   description: '설립부터 기장까지 원스톱으로 연결',
    //   link: '/works/incorporation-center',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321335_xjn4pn.png',
    //   id: 'incorporation-center',
    // },
    // {
    //   name: '법인 설립 리브랜딩 및 사용성 개선',
    //   description: '법인 설립 사이트 분리 및 정보 입력 페이지 개선',
    //   link: '/works/incorporation-redesign',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321253_vsqk4g.png',
    //   id: 'incorporation-redesign',
    // },
    // {
    //   name: '소집통지 메일 커스텀',
    //   description: '소집통지서 내 안건 내용을 추가 및 삭제 가능하도록',
    //   link: '/works/meeting-notice-agenda-details-edit',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321251_piuaqp.png',
    //   id: 'meeting-notice-agenda-details-edit',
    // },
    // {
    //   name: '모노마트 사업자 회원 리텐션 향상',
    //   description: '재구매 기능 도입 및 사업자 회원 증대',
    //   link: '/works/monomart-business-membership-retention',
    //   image:
    //     'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321343_dckvuv.png',
    //   id: 'monomart-business-membership-retention',
    // },
    // {
    //   name: '이해관계자 통합 관리 시스템',
    //   description: '통합 이해관계자 관리 시스템 설계',
    //   link: '/works/stakeholder-management',
    //   id: 'stakeholder-management',
    // },
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
    {
      title: 'Making Shareholder Agreements Simple, Not Simplistic',
      description:
        'What I Learned While Designing the Shareholder Agreement Builder',
      link: '/blog/shareholder-contract-experience',
      uid: 'shareholder-contract-experience',
    },
  ],
  ko: [
    {
      title: 'AI 인터페이스 재설계 | 행동 가능한 UX',
      description: '사업목적 추천 기능을 설계하며 다시 생각한 AI 인터페이스',
      link: '/blog/post-chat-ui',
      uid: 'post-chat-ui',
    },
    {
      title: '만족도를 어떻게 정의할 것인가?',
      description: 'ZUZU의 법인 설립 기능을 통해 본 조작적 정의',
      link: '/blog/zuzu-operational-definition',
      uid: 'zuzu-operational-definition',
    },
    {
      title: '낯설고 어려운 주주간계약서 작성을 누구나 쉽게',
      description: '주주간계약서 작성 기능을 설계하며 배운 것들',
      link: '/blog/shareholder-contract-experience',
      uid: 'shareholder-contract-experience',
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
      description: 'ZUZU의 법인 설립 기능을 통해 본 조작적 정의',
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
    link: 'https://www.linkedin.com/in/haydensuh',
  },
]

export const EMAIL = 'hyunjung.s.suh@gmail.com'
