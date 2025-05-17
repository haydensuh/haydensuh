import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => (
      <figure className="rounded-xl bg-zinc-50 dark:bg-zinc-900">
        <img src={src} alt={alt} className="rounded-xl" />
        <figcaption className="text-center">{caption}</figcaption>
      </figure>
    ),
    Image: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => (
      <figure className="rounded-xl bg-zinc-50 dark:bg-zinc-900">
        <img src={src} alt={alt} className="rounded-xl" />
        <figcaption className="text-center">{caption}</figcaption>
      </figure>
    ),
  }
}
