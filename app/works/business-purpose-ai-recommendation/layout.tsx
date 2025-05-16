'use client'
import { BackButton } from '@/components/ui/back-button'
import { CopyButton } from '@/components/copy-button'

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="prose prose-zinc dark:prose-invert mx-auto py-12">
      <div className="mb-8">
        <BackButton />
      </div>
      <div className="absolute top-10 right-4">
        <CopyButton />
      </div>
      {children}
    </main>
  )
}
