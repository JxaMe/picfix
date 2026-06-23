import Link from 'next/link'
import type { Tool } from '@/lib/tools'
import { tools } from '@/lib/tools'
import JsonLd from './JsonLd'
import { getToolJsonLd, getBreadcrumbJsonLd } from '@/lib/seo'

export interface UseCase {
  title: string
  description: string
  link?: { id: string; text: string }
}

export interface RelatedTool {
  id: string
  reason: string
}

export default function ToolLayout({
  tool,
  children,
  useCases,
  relatedTools,
  faq,
}: {
  tool: Tool
  children: React.ReactNode
  useCases?: UseCase[]
  relatedTools?: RelatedTool[]
  faq?: { question: string; answer: string }[]
}) {
  return (
    <>
      <JsonLd data={getToolJsonLd(tool.id)!} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: 'Home', href: '/' },
          { name: tool.name, href: tool.href },
        ])}
      />

      {faq && faq.length > 0 && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: f.answer,
              },
            })),
          }}
        />
      )}

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        <nav className="mb-6 text-sm text-zinc-400">
          <Link href="/" className="hover:text-zinc-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-zinc-700">{tool.name}</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
            {tool.name}
          </h1>
          <p className="mt-2 text-zinc-600">{tool.longDescription}</p>
        </div>

        {children}

        {useCases && useCases.length > 0 && (
          <section className="mt-16 border-t border-zinc-200 pt-8">
            <h2 className="mb-6 text-xl font-semibold text-zinc-900">
              Common Use Cases
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {useCases.map((uc, i) => (
                <div key={i} className="rounded-lg border border-zinc-200 bg-white p-4">
                  <h3 className="font-medium text-zinc-900">{uc.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{uc.description}</p>
                  {uc.link && (
                    <Link
                      href={`/tools/${uc.link.id}`}
                      className="mt-2 inline-block text-sm text-blue-600 hover:text-blue-700"
                    >
                      {uc.link.text} →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {relatedTools && relatedTools.length > 0 && (
          <section className="mt-12 border-t border-zinc-200 pt-8">
            <h2 className="mb-4 text-lg font-semibold text-zinc-900">
              Related Tools
            </h2>
            <div className="flex flex-wrap gap-3">
              {relatedTools.map((rt) => {
                const related = tools.find((t) => t.id === rt.id)
                if (!related) return null
                return (
                  <Link
                    key={rt.id}
                    href={related.href}
                    className="group rounded-lg border border-zinc-200 bg-white px-4 py-3 hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
                  >
                    <span className="text-sm font-medium text-zinc-900 group-hover:text-blue-700">
                      {related.name}
                    </span>
                    <span className="ml-2 text-xs text-zinc-400">—</span>
                    <span className="ml-1 text-xs text-zinc-500">{rt.reason}</span>
                  </Link>
                )
              })}
            </div>
          </section>
        )}

        {faq && faq.length > 0 && (
          <section className="mt-16 border-t border-zinc-200 pt-8">
            <h2 className="mb-6 text-xl font-semibold text-zinc-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faq.map((item, i) => (
                <div key={i}>
                  <h3 className="font-medium text-zinc-900">{item.question}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  )
}
