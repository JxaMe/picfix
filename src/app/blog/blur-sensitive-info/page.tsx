import type { Metadata } from 'next'
import Link from 'next/link'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'How to Blur Sensitive Info in Screenshots: 4 Methods',
  description:
    'Blur sensitive information in screenshots — pixelate, blur, cover, or remove. Step by step guide for privacy-safe screenshot sharing.',
  alternates: { canonical: `${siteUrl}/blog/blur-sensitive-info` },
  openGraph: {
    title: 'How to Blur Sensitive Info in Screenshots: 4 Methods',
    description:
      'Blur email addresses, names, and private data in screenshots. Compare pixelation, Gaussian blur, overlay, and removal.',
    url: `${siteUrl}/blog/blur-sensitive-info`,
    type: 'article',
  },
}

export default function BlurSensitiveInfo() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <header>
        <Link
          href="/blog"
          className="text-sm text-zinc-400 hover:text-blue-600"
        >
          ← Blog
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          How to Blur Sensitive Info in Screenshots: 4 Methods
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-zinc-400">
          <time dateTime="2026-06-24">June 24, 2026</time>
          <span>·</span>
          <span>7 min read</span>
        </div>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          I once posted a support ticket screenshot to a forum — cropped, no
          names visible, or so I thought. Someone zoomed in and read my email
          address in the browser&apos;s status bar that I had not noticed. That
          was the day I stopped using the marker tool and started taking blur
          seriously. Here is what I learned about redacting screenshots safely.
        </p>
        <img
          src="/blog/blur-tool.jpg"
          alt="PicFix blur tool interface showing adjustable Gaussian blur radius slider"
          className="mt-6 w-full rounded-lg border border-zinc-200"
        />
      </header>

      <article className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Why Blur Is Better Than the Marker Tool
          </h2>
          <p className="mt-3">
            Most people use the marker or crayon tool in their screenshot app
            to cover sensitive info. This is dangerous. The marker applies an
            opaque stroke on top of the image — but the underlying data is
            still there. If someone opens the image in an editor and adjusts
            levels or contrast, the hidden text can become readable again.
          </p>
          <p className="mt-2">
            A 2017 study demonstrated this: black marker over text in a
            screenshot could be reversed in most cases with a simple curves
            adjustment in Photoshop. Blur, when applied strongly enough, is
            harder to reverse because it discards pixel data permanently.
          </p>
          <p className="mt-2">
            The safest method is to replace the area entirely with a solid
            color block. Blur is a middle ground — convenient while being
            significantly more secure than drawing over it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Method 1: Gaussian Blur (Best Balance)
          </h2>
          <p className="mt-3">
            Gaussian blur applies a mathematical blur that averages pixels in a
            radius. At a high enough radius, text becomes unreadable and cannot
            be reconstructed.
          </p>
          <p className="mt-2">
            The key setting is the blur radius. For text redaction, use a
            minimum radius of 10-15 pixels. At radius 5, some characters remain
            identifiable. At radius 15, text is completely gone.
          </p>
          <p className="mt-2">
            PicFix&apos;s{' '}
            <Link
              href="/tools/blur"
              className="text-blue-600 hover:underline"
            >
              blur tool
            </Link>{' '}
            applies adjustable Gaussian blur. The limitation: it blurs the
            entire image, not a selected area. For local blur on specific
            regions, you need to crop the sensitive area first, blur it, then
            composite back. I hope PicFix adds a selective blur feature in the
            future.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Method 2: Pixelation / Mosaic
          </h2>
          <p className="mt-3">
            Pixelation replaces the sensitive area with large visible pixels.
            It is more visually obvious than blur, which some people prefer as
            proof that content was redacted.
          </p>
          <p className="mt-2">
            The safety of pixelation depends on block size. Small block sizes
            (4×4 or 8×8) can sometimes be reverse-engineered, especially for
            short text on a uniform background. Use at least 16×16 pixel blocks
            for text redaction.
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            PicFix does not currently have a pixelation tool. For pixelation,
            you can use Squoosh or GIMP. I am noting this as a feature gap.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Method 3: Solid Color Overlay (Most Secure)
          </h2>
          <p className="mt-3">
            Replace the sensitive area with a solid black, white, or gray
            rectangle. This is the most secure method because there is
            literally no information left to recover.
          </p>
          <p className="mt-2">
            The downside is that it is obvious something was removed, which may
            make your screenshot look suspicious. For most support forums and
            social media posts, this is actually desirable — it proves you
            deliberately redacted information rather than forgetting to include
            it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Method 4: Crop It Out
          </h2>
          <p className="mt-3">
            If the sensitive information is at the edge of the screenshot, crop
            it. Simple, zero artifacts, and no redaction needed. This works for
            browser toolbars, notification areas, and status bars.
          </p>
          <p className="mt-2">
            Use PicFix&apos;s{' '}
            <Link
              href="/tools/resize"
              className="text-blue-600 hover:underline"
            >
              resize tool
            </Link>{' '}
            to crop the area. Make sure you leave enough margin that the crop
            looks intentional rather than suspicious.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Common Mistakes
          </h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>
              <strong>Blurring too lightly.</strong> If I can still read the
              text by squinting, so can someone with a curves adjustment.
              Over-blur. It is better to blur too much than too little.
            </li>
            <li>
              <strong>Leaving context clues.</strong> Blurring a username but
              leaving the &quot;@&quot; symbol and the domain visible. The
              blur is meaningless if surrounding context reveals the content.
            </li>
            <li>
              <strong>Forgetting metadata.</strong> The screenshot itself may
              contain EXIF data or filenames that leak information. Strip
              metadata with PicFix&apos;s{' '}
              <Link
                href="/tools/exif"
                className="text-blue-600 hover:underline"
              >
                EXIF viewer
              </Link>{' '}
              before sharing.
            </li>
            <li>
              <strong>Using the same blur for different content types.</strong>
              A credit card number needs stronger blur than a generic
              username. Adjust radius per sensitivity level.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            My Redaction Workflow
          </h2>
          <p className="mt-3">
            These days I follow this sequence before sharing any screenshot
            publicly:
          </p>
          <ol className="mt-2 list-decimal pl-6 space-y-1">
            <li>Crop the screenshot to remove obvious UI elements</li>
            <li>
              Apply Gaussian blur at radius 15 to any text that should not be
              visible
            </li>
            <li>
              For highly sensitive info (email, phone, address), replace with a
              solid color block
            </li>
            <li>
              Strip EXIF metadata to remove camera/device info and timestamps
            </li>
            <li>Review the result at 200% zoom to confirm nothing is readable</li>
          </ol>
          <p className="mt-2">
            The whole process takes about 30 seconds and has saved me from
            at least two embarrassing leaks.
          </p>
        </section>

        <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            Blur your screenshots now
          </h2>
          <p className="mt-2 text-blue-800">
            Use PicFix&apos;s free blur tool to redact sensitive information.
            Adjustable Gaussian blur, no uploads required. Also check what
            hidden data your image carries with the EXIF viewer before sharing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools/blur"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Blur Image →
            </Link>
            <Link
              href="/tools/exif"
              className="inline-flex items-center rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              Check EXIF →
            </Link>
          </div>
        </section>
      </article>

      <footer className="mt-16 border-t border-zinc-200 pt-8">
        <h3 className="text-sm font-semibold text-zinc-500">
          Tools mentioned
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/tools/blur"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Image Blur
          </Link>
          <Link
            href="/tools/exif"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            EXIF Viewer
          </Link>
          <Link
            href="/tools/resize"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Image Resizer
          </Link>
        </div>
      </footer>
    </div>
  )
}
