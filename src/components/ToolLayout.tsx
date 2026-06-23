import Link from 'next/link'
import type { Tool } from '@/lib/tools'
import JsonLd from './JsonLd'
import { getToolJsonLd, getBreadcrumbJsonLd } from '@/lib/seo'

export default function ToolLayout({
  tool,
  children,
  faq,
}: {
  tool: Tool
  children: React.ReactNode
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
