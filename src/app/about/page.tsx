import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'About PicFix — free online image tools that process files entirely in your browser. No uploads, 100% private.',
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
        About PicFix
      </h1>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-700">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">Why PicFix?</h2>
          <p>
            Most online image tools upload your files to their servers for processing.
            PicFix is different — every tool runs entirely in your browser.
            Your images never leave your device. No server sees them. No one can access them.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">How It Works</h2>
          <p>
            PicFix uses the HTML5 Canvas API and modern browser APIs to compress, resize, convert,
            and edit images directly on your device. Because processing happens locally, it&apos;s
            fast, unlimited, and completely private. No file size caps, no sign-up walls, no uploads.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">Our Mission</h2>
          <p>
            We believe online tools should respect your privacy by default. You shouldn&apos;t have to
            trust a stranger&apos;s server just to resize a photo. PicFix proves that powerful image
            processing can happen entirely in your browser — no compromises, no uploads, no data collection.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">Features</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Image compression (JPEG, PNG, WebP, AVIF)</li>
            <li>Resize and crop with presets for social media</li>
            <li>Format conversion between PNG, JPEG, WebP, AVIF, GIF, BMP</li>
            <li>Watermark with custom text and positioning</li>
            <li>Rotate, flip, and transform</li>
            <li>Round corners and blur effects</li>
            <li>EXIF metadata viewer and cleaner</li>
            <li>Base64 encode/decode</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">Contact</h2>
          <p>
            Have feedback or feature requests? Email us at hello@picfix.xyz.
          </p>
        </section>
      </div>
    </div>
  )
}
