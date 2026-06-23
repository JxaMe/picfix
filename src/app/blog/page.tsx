import Link from 'next/link'
import { tools } from '@/lib/tools'

const articles = [
  {
    slug: 'compress-for-discord-emoji',
    title: 'Best Free Image Compressor for Discord Emojis: Under 256KB',
    description: 'How to compress images to under 256KB for Discord custom emoji uploads. Tested: PicFix vs TinyPNG vs Squoosh.',
    toolId: 'compress',
    date: '2026-06',
  },
  {
    slug: 'webp-vs-png-vs-avif',
    title: 'WebP vs PNG vs AVIF: Which Format Saves the Most Space?',
    description: 'Real file size comparison across 50 images. Choose the right format for web performance, quality, and browser support.',
    toolId: 'convert',
    date: '2026-06',
  },
  {
    slug: 'instagram-image-size-guide',
    title: 'Instagram Image Size Guide 2026: All Dimensions Tested',
    description: 'Exact dimensions for Instagram posts, Stories, Reels, and carousels. Avoid cropping and quality loss.',
    toolId: 'resize',
    date: '2026-06',
  },
]

export default function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Blog
      </h1>
      <p className="mt-3 text-lg text-zinc-500">
        Guides, comparisons, and how-tos for image editing — tested with real files.
      </p>

      <div className="mt-10 space-y-8">
        {articles.map((a) => {
          const tool = tools.find((t) => t.id === a.toolId)
          return (
            <article key={a.slug}>
              <time className="text-xs text-zinc-400">{a.date}</time>
              <h2 className="mt-1 text-xl font-semibold text-zinc-900">
                <Link href={`/blog/${a.slug}`} className="hover:text-blue-600">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-1 text-zinc-600">{a.description}</p>
              {tool && (
                <Link
                  href={tool.href}
                  className="mt-2 inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-blue-600"
                >
                  <span>🛠</span> Try {tool.name}
                </Link>
              )}
            </article>
          )
        })}
      </div>

      <div className="mt-16 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
        <p className="text-sm text-zinc-500">
          More articles coming soon. Each guide tested with real images on real platforms — no AI-only content.
        </p>
      </div>
    </div>
  )
}
