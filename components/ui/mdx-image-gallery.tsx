'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ChevronLeft, ChevronRight, XIcon } from 'lucide-react'

type GalleryItem = {
  src: string
  alt?: string
  caption?: string
}

type GalleryContextValue = {
  register: (item: GalleryItem) => number
  openAt: (index: number) => void
}

const GalleryContext = createContext<GalleryContextValue | null>(null)

function getImgSrc(el: HTMLImageElement): string | null {
  return el.currentSrc || el.getAttribute('src')
}

export function MDXImageGalleryProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const indexBySrcRef = useRef<Map<string, number>>(new Map())

  const register = useCallback((item: GalleryItem) => {
    const existing = indexBySrcRef.current.get(item.src)
    if (existing !== undefined) {
      // If we learn more metadata later (caption/alt), merge it in.
      setItems((prev) => {
        const current = prev[existing]
        if (!current) return prev
        const merged: GalleryItem = {
          ...current,
          alt: current.alt ?? item.alt,
          caption: current.caption ?? item.caption,
        }
        if (merged.alt === current.alt && merged.caption === current.caption) {
          return prev
        }
        const next = [...prev]
        next[existing] = merged
        return next
      })
      return existing
    }

    const nextIndex = indexBySrcRef.current.size
    indexBySrcRef.current.set(item.src, nextIndex)
    setItems((prev) => {
      // If registration races, keep order stable.
      if (prev.some((x) => x.src === item.src)) return prev
      return [...prev, item]
    })
    return nextIndex
  }, [])

  const openAt = useCallback((index: number) => {
    setOpenIndex(index)
  }, [])

  const close = useCallback(() => setOpenIndex(null), [])

  const prev = useCallback(() => {
    setOpenIndex((idx) => {
      if (idx === null) return idx
      if (items.length === 0) return null
      return (idx - 1 + items.length) % items.length
    })
  }, [items.length])

  const next = useCallback(() => {
    setOpenIndex((idx) => {
      if (idx === null) return idx
      if (items.length === 0) return null
      return (idx + 1) % items.length
    })
  }, [items.length])

  useEffect(() => {
    if (openIndex === null) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [close, next, openIndex, prev])

  const value = useMemo(() => ({ register, openAt }), [openAt, register])

  const active = openIndex === null ? null : items[openIndex]
  // `active` implies `openIndex !== null`, but TS can’t always narrow it across expressions.
  const activeIndex = openIndex ?? 0

  return (
    <GalleryContext.Provider value={value}>
      {children}

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={close}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
            role="presentation"
          >
            <div className="absolute left-0 top-0 inline-flex h-10 items-center rounded-full bg-white/10 px-3 text-sm font-medium text-white backdrop-blur">
              {activeIndex + 1} / {items.length}
            </div>
            <button
              type="button"
              onClick={close}
              className="absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
              aria-label="Close gallery"
            >
              <XIcon className="h-5 w-5" />
            </button>

            <div className="flex items-center justify-center pt-12">
              <button
                type="button"
                onClick={prev}
                className="mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <figure className="m-0">
                <img
                  src={active.src}
                  alt={active.alt ?? ''}
                  className="max-h-[75vh] w-auto max-w-[calc(100vw-8rem)] rounded-xl bg-zinc-100 object-contain dark:bg-zinc-800"
                />
              </figure>

              <button
                type="button"
                onClick={next}
                className="ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/20"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {items.length > 1 ? (
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {items.map((it, idx) => (
                  <button
                    key={it.src}
                    type="button"
                    onClick={() => openAt(idx)}
                    className={[
                      'shrink-0 overflow-hidden rounded-lg ring-1 ring-white/15 transition-opacity',
                      idx === openIndex ? 'opacity-100' : 'opacity-50',
                    ].join(' ')}
                    aria-label={`Open image ${idx + 1}`}
                  >
                    <img
                      src={it.src}
                      alt={it.alt ?? ''}
                      className="h-16 w-24 object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </GalleryContext.Provider>
  )
}

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>

export function GalleryImage(
  props: ImgProps & {
    caption?: string
  },
) {
  const ctx = useContext(GalleryContext)
  // Support caption via Cover prop or data-caption on <img>.
  const dataCaption =
    typeof (props as unknown as Record<string, unknown>)['data-caption'] ===
    'string'
      ? String((props as unknown as Record<string, unknown>)['data-caption'])
      : undefined

  const { src, alt, caption, ...rest } = props
  const resolvedCaption =
    caption ?? dataCaption ?? rest.title ?? alt ?? undefined
  const [index, setIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!ctx) return
    if (!src) return
    const idx = ctx.register({
      src: String(src),
      alt: alt ?? undefined,
      caption: resolvedCaption,
    })
    setIndex(idx)
  }, [alt, ctx, resolvedCaption, src])

  if (!ctx || !src) {
    return <img src={src} alt={alt ?? ''} {...rest} />
  }

  return (
    <button
      type="button"
      className="block w-full"
      onClick={() => (index === null ? null : ctx.openAt(index))}
      aria-label="Open image gallery"
    >
      <img
        src={String(src)}
        alt={alt ?? ''}
        {...rest}
        data-mdx-gallery-managed="true"
        className={[
          'cursor-zoom-in',
          typeof rest.className === 'string' ? rest.className : '',
        ].join(' ')}
      />
    </button>
  )
}

/**
 * Auto-binds gallery behavior to raw <img> tags rendered inside MDX, including JSX <img />.
 * - Registers all images in DOM order
 * - Adds click handler + zoom cursor
 * - Observes DOM mutations to keep list in sync
 */
export function MDXImageGalleryAutoBind({
  children,
}: {
  children: React.ReactNode
}) {
  const ctx = useContext(GalleryContext)
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ctx) return
    const root = rootRef.current
    if (!root) return

    const handlers = new Map<HTMLImageElement, (e: MouseEvent) => void>()

    const bind = () => {
      const imgs = Array.from(root.querySelectorAll('img')).filter((img) => {
        if (img.getAttribute('data-mdx-gallery-managed') === 'true')
          return false
        const src = getImgSrc(img)
        return Boolean(src)
      })

      // Register in DOM order + store index on element.
      imgs.forEach((img) => {
        const src = getImgSrc(img)
        if (!src) return
        const alt = img.getAttribute('alt') ?? undefined
        const caption =
          img.getAttribute('data-caption') ??
          img.getAttribute('title') ??
          alt ??
          undefined

        const idx = ctx.register({ src, alt: alt ?? undefined, caption })
        img.dataset.mdxGalleryIndex = String(idx)
        img.style.cursor = 'zoom-in'

        if (!handlers.has(img)) {
          const onClick = (e: MouseEvent) => {
            // Avoid double opens if some other handler exists.
            e.preventDefault()
            e.stopPropagation()
            const indexStr = img.dataset.mdxGalleryIndex
            if (!indexStr) return
            const index = Number(indexStr)
            if (Number.isNaN(index)) return
            ctx.openAt(index)
          }
          img.addEventListener('click', onClick)
          handlers.set(img, onClick)
        }
      })

      // Cleanup handlers for removed images
      for (const [img, handler] of handlers.entries()) {
        if (!root.contains(img)) {
          img.removeEventListener('click', handler)
          handlers.delete(img)
        }
      }
    }

    bind()

    const observer = new MutationObserver(() => bind())
    observer.observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src', 'data-caption', 'title', 'alt'],
    })

    return () => {
      observer.disconnect()
      for (const [img, handler] of handlers.entries()) {
        img.removeEventListener('click', handler)
      }
      handlers.clear()
    }
  }, [ctx])

  return <div ref={rootRef}>{children}</div>
}
