'use client'

import type { MDXComponents } from 'mdx/types'
import { GalleryImage } from '@/components/ui/mdx-image-gallery'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    img: (props) => <GalleryImage {...props} />,
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
          <GalleryImage
            src={src}
            alt={alt}
            caption={caption}
            className="rounded-xl bg-zinc-100 dark:bg-zinc-800"
          />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
  }
}
