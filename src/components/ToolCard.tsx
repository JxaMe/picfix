import Link from 'next/link'
import type { Tool } from '@/lib/tools'

const categoryColors: Record<string, string> = {
  optimize: 'bg-blue-50 text-blue-700',
  transform: 'bg-green-50 text-green-700',
  convert: 'bg-purple-50 text-purple-700',
  effects: 'bg-orange-50 text-orange-700',
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.href}
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-5 transition-all hover:border-zinc-300 hover:shadow-sm"
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl" role="img" aria-hidden="true">
          {tool.icon}
        </span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${categoryColors[tool.category]}`}
        >
          {tool.category}
        </span>
      </div>
      <div>
        <h2 className="text-base font-semibold text-zinc-900 group-hover:text-blue-600">
          {tool.name}
        </h2>
        <p className="mt-1 text-sm leading-snug text-zinc-500">
          {tool.description}
        </p>
      </div>
    </Link>
  )
}
