type Project = {
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
  link: string
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
    name: 'ZUZU',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: '/works/zuzu01',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/v1733208684/238423_zibcwg.png',
    id: 'project1',
  },
  {
    name: 'Monomart',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/v1733208879/23948_i4hjqv.png',
    id: 'project2',
  },
]

export const allWorks: Project[] = [
  {
    name: 'ZUZU',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: '/works/zuzu01',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/v1733208684/238423_zibcwg.png',
    id: 'work1',
  },
  {
    name: 'Monomart',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/v1733208879/23948_i4hjqv.png',
    id: 'work2',
  },
  {
    name: 'Monomart',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/v1733208879/23948_i4hjqv.png',
    id: 'work3',
  },
  {
    name: 'Monomart',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/v1733208879/23948_i4hjqv.png',
    id: 'work4',
  },
  {
    name: 'Monomart',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image:
      'https://res.cloudinary.com/hazelsuh-site/image/upload/v1733208879/23948_i4hjqv.png',
    id: 'work5',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'ZUZU (Kodebox)',
    title: 'Product Designer',
    start: '2024.04',
    end: 'Present',
    link: 'https://zuzu.network/',
    id: 'work1',
  },
  {
    company: 'LF Food',
    title: 'Product Designer',
    start: '2020.10',
    end: '2023.12',
    link: 'https://www.lffood.co.kr/',
    id: 'work2',
  },
  {
    company: 'The 6th day',
    title: 'UI/UX Designer',
    start: '2020.04',
    end: '2020.09',
    link: 'https://www.dolobox.com/',
    id: 'work3',
  },
  {
    company: 'Bandi/Lunis(Seoul Book Center)',
    title: 'Web Designer(UI/UX/BX)',
    start: '2018.08',
    end: '2020.04',
    link: '',
    id: 'work4',
  },
  {
    company: 'Lotte Shopping Co., Ltd.',
    title: 'Graphic Web Designer',
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
