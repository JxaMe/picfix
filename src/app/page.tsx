import ToolCard from '@/components/ToolCard'
import { tools, categories } from '@/lib/tools'

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Free Online Image Tools
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-zinc-500">
          Compress, resize, convert, and edit images directly in your browser.
          No uploads, no sign-ups, 100% private.
        </p>
      </section>

      {categories.map((cat) => {
        const catTools = tools.filter((t) => t.category === cat.key)
        if (catTools.length === 0) return null
        return (
          <section key={cat.key} className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-zinc-700 capitalize">
              {cat.label}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {catTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
