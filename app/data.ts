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

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link?: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: '투자 유치 지원 서비스 고도화',
    description: '기투자자 기반 브로커(추천인) 시스템 설계',
    link: '/works/invest-relation',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/001_hv86py.png',
    id: 'invest-relation',
  },
  {
    name: '회사 등록 플로우 개선',
    description: '기다릴 필요 없이 바로 온보딩이 가능하도록',
    link: '/works/company-registration',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321250_taty9w.png',
    id: 'company-registration',
  },
]

export const ALL_WORKS: AllWorks[] = [
  {
    name: '투자 유치 지원 서비스 고도화',
    description: '기투자자 기반 브로커(추천인) 시스템 설계',
    link: '/works/invest-relation',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/001_hv86py.png',
    id: 'invest-relation',
  },
  {
    name: '회사 등록 플로우 개선',
    description: '기다릴 필요 없이 바로 온보딩이 가능하도록',
    link: '/works/company-registration',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321250_taty9w.png',
    id: 'company-registration',
  },
  {
    name: '소집통지서 기능 개선',
    description: '안건 내용 커스터마이징 기능 도입',
    link: '/works/meeting-notice-agenda-details-edit',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321251_piuaqp.png',
    id: 'meeting-notice-agenda-details-edit',
  },
  {
    name: '이해관계자 통합 관리',
    description: '이해관계자 통합 관리 시스템 설계',
    link: '/works/stakeholder-management',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321252_w4ykax.png',
    id: 'stakeholder-management',
  },
  {
    name: '사업 목적 ai 추천',
    description: '사업 개요를 바탕으로 ai 자동 추천',
    link: '/works/business-purpose-ai-recommendation',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/Frame_427321252_w4ykax.png',
    id: 'business-purpose-ai-recommendation',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: '(주)코드박스 (ZUZU)',
    title: 'Product Designer',
    start: '2024.04',
    end: '재직 중',
    link: 'https://zuzu.network/',
    id: 'work1',
  },
  {
    company: '(주)LF Food',
    title: 'Product Designer',
    start: '2020.10',
    end: '2023.12',
    link: 'https://www.lffood.co.kr/',
    id: 'work2',
  },
  {
    company: '(주)더식스데이 (2021년 GS리테일에 인수)',
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
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '추천은 출력이 아니다',
    description: '사업목적 추천 기능을 설계하며 다시 생각한, AI 인터페이스',
    link: '/blog/post-chat-ui',
    uid: 'blog001',
  },
  {
    title: '계약은 복잡하지만 작성은 간결하게',
    description: '주주간계약서 작성 기능을 설계하며 배운 것들',
    link: '/blog/shareholder-contract-experience',
    uid: 'blog002',
  },
  // {
  //   title: 'Why I left my job to start my own company',
  //   description:
  //     'A deep dive into my decision to leave my job and start my own company',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-2',
  // },
  // {
  //   title: 'What I learned from my first year of freelancing',
  //   description:
  //     'A look back at my first year of freelancing and what I learned',
  //   link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
  //   uid: 'blog-3',
  // },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/haydensuh/haydensuh',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hazelsuh',
  },
]

export const EMAIL = 'hyunjung.s.suh@gmail.com'
