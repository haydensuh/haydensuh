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
    }) => {
      return (
        <figure>
          <img
            src={src}
            alt={alt}
            className="rounded-xl bg-zinc-100 dark:bg-zinc-800"
          />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
  }
}
