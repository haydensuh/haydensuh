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
    name: '기업과 투자자의 투자 유치 지원 서비스 고도화',
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
    name: '기업과 투자자의 투자 유치 지원 서비스 고도화',
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
    company: '더식스데이',
    title: 'UI/UX Designer',
    start: '2020.04',
    end: '2020.09',
    link: '',
    id: 'work3',
  },
  {
    company: '(주)서울문고 (Bandi/Lunis)',
    title: 'UI/UX Designer',
    start: '2018.08',
    end: '2020.04',
    link: '',
    id: 'work4',
  },
  {
    company: '(주)롯데쇼핑',
    title: 'Web Designer',
    start: '2017.08',
    end: '2018.02',
    link: '',
    id: 'work5',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/works/zuzu01',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
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
