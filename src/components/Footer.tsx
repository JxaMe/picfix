export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-zinc-500 sm:flex-row sm:text-left">
        <p>&copy; {new Date().getFullYear()} PicFix. Free online image tools.</p>
        <p>Images stay on your device. 100% private.</p>
      </div>
    </footer>
  )
}
