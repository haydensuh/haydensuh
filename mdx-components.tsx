import type { MDXComponents } from 'mdx/types'

type FigureProps = {
  src: string
  alt: string
  caption: string
}

const Figure = ({ src, alt, caption }: FigureProps) => (
  <figure className="rounded-xl bg-zinc-50 dark:bg-zinc-900">
    <img src={src} alt={alt} className="rounded-xl" />
    <figcaption className="mt-2 text-center text-sm text-zinc-500">
      {caption}
    </figcaption>
  </figure>
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: Figure,
    Image: Figure,
  }
}
