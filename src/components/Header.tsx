import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900">
          PicFix
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <span className="hidden rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 sm:inline">
            100% Private · No Uploads
          </span>
          <Link href="/about" className="text-zinc-500 hover:text-zinc-900">
            About
          </Link>
          <Link href="/" className="text-zinc-600 hover:text-zinc-900">
            All Tools
          </Link>
        </div>
      </nav>
    </header>
  )
}
