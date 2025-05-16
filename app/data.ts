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

type BlogPostList = {
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
]

export const ALL_WORKS: AllWorks[] = [
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
]

export const WORK_EXPERIENCE: WorkExperience[] = [
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
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'A Recommendation Is Not Enough',
    description: 'Rethinking AI UX through business purpose suggestions',
    link: '/blog/post-chat-ui',
    uid: 'post-chat-ui',
  },
  // {
  //   title: '계약은 복잡하지만 작성은 간결하게',
  //   description: '주주간계약서 작성 기능을 설계하며 배운 것들',
  //   link: '/blog/shareholder-contract-experience',
  //   uid: 'shareholder-contract-experience',
  // },
  {
    title: 'How Do We Define Satisfaction?',
    description: 'Defining satisfaction through operational definition',
    link: '/blog/zuzu-operational-definition',
    uid: 'zuzu-operational-definition',
  },
]

export const ALL_BLOG_POSTS: BlogPostList[] = [
  {
    title: 'A Recommendation Is Not Enough',
    description: 'Rethinking AI UX through business purpose suggestions',
    link: '/blog/post-chat-ui',
    uid: 'post-chat-ui',
  },
  // {
  //   title: '계약은 복잡하지만 작성은 간결하게',
  //   description: '주주간계약서 작성 기능을 설계하며 배운 것들',
  //   link: '/blog/shareholder-contract-experience',
  //   uid: 'shareholder-contract-experience',
  // },
  {
    title: 'How Do We Define Satisfaction?',
    description: 'Defining satisfaction through operational definition',
    link: '/blog/zuzu-operational-definition',
    uid: 'zuzu-operational-definition',
  },
]

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
