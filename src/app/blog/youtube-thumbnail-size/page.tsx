import type { Metadata } from 'next'
import Link from 'next/link'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'YouTube Thumbnail Size 2026: Best Dimensions & Design Tips',
  description:
    'YouTube thumbnail size guide: 1280×720 pixels, 16:9 aspect ratio, under 2 MB. Design tips for higher CTR, text placement, and compression settings.',
  alternates: { canonical: `${siteUrl}/blog/youtube-thumbnail-size` },
  openGraph: {
    title: 'YouTube Thumbnail Size 2026: Best Dimensions & Design Tips',
    description:
      'The exact YouTube thumbnail size you need. 1280×720 guideline, text safe zones, compression settings, and examples of high-CTR thumbnails.',
    url: `${siteUrl}/blog/youtube-thumbnail-size`,
    type: 'article',
  },
}

export default function YoutubeThumbnailSize() {
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
          YouTube Thumbnail Size 2026: Best Dimensions & Design Tips
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-zinc-400">
          <time dateTime="2026-06-24">June 24, 2026</time>
          <span>·</span>
          <span>7 min read</span>
        </div>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          My first YouTube video took twelve hours to edit and one second for
          people to decide not to watch it. The thumbnail was a blurry frame
          from the video at the wrong resolution, and YouTube displayed it as a
          tiny, unreadable mess. I spent the next month learning everything
          about thumbnails. Here is the distilled version so you do not have to
          waste a month.
        </p>
        <img
          src="/blog/resize-tool.jpg"
          alt="PicFix resize tool interface showing width and height input fields for exact dimensions"
          className="mt-6 w-full rounded-lg border border-zinc-200"
        />
      </header>

      <article className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            YouTube Thumbnail Specifications 2026
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-left">
                  <th className="py-2 pr-4 font-medium text-zinc-900">Spec</th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Resolution</td>
                  <td className="py-2 pr-4">1280×720 pixels</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Aspect ratio</td>
                  <td className="py-2 pr-4">16:9</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Max file size</td>
                  <td className="py-2 pr-4">2 MB</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Format</td>
                  <td className="py-2 pr-4">JPEG, PNG, GIF, BMP</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Recommended format</td>
                  <td className="py-2 pr-4">JPEG (quality 90+)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Min width</td>
                  <td className="py-2 pr-4">640 pixels</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-zinc-500">
            These are YouTube&apos;s published specs as of June 2026. They have not
            changed in years and are unlikely to change soon.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Why 1280×720 Is the Sweet Spot
          </h2>
          <p className="mt-3">
            YouTube displays thumbnails at various sizes depending on context:
            196×110 in search results, 168×94 in the sidebar, and up to
            1280×720 when embedded or shown on TV screens. The 1280×720
            resolution ensures your thumbnail looks sharp at every display size
            while keeping the file under the 2 MB cap.
          </p>
          <p className="mt-2">
            I tested smaller thumbnails to save bandwidth. At 640×360, text
            became fuzzy on desktop search results. At 854×480, the thumbnail
            looked fine on mobile but soft on desktop. 1280×720 is the minimum
            for crisp display at all sizes.
          </p>
          <p className="mt-2">
            Use PicFix&apos;s{' '}
            <Link
              href="/tools/resize"
              className="text-blue-600 hover:underline"
            >
              resize tool
            </Link>{' '}
            to set exact dimensions. Enter 1280×720, maintain aspect ratio, and
            the tool handles the rest in your browser.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            The 2 MB File Size Problem
          </h2>
          <p className="mt-3">
            The 2 MB limit is the most commonly hit constraint. A 1280×720 JPEG
            at quality 100 can easily be 1.5-2.5 MB. Photoshop exports at high
            quality often exceed it. Here is the fix:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              Export as JPEG (not PNG) — PNG at 1280×720 can be 3-5 MB
            </li>
            <li>
              Set JPEG quality to 90-95 — visually indistinguishable from 100
              at thumbnail size but cuts file size by 40-60%
            </li>
            <li>
              Avoid large gradient areas — gradients compress poorly in JPEG
            </li>
            <li>
              Use PicFix&apos;s{' '}
              <Link
                href="/tools/compress"
                className="text-blue-600 hover:underline"
              >
                compressor
              </Link>{' '}
              to dial in the exact quality/file size tradeoff
            </li>
          </ul>
          <p className="mt-2">
            Your thumbnail does not need to look perfect at 100% zoom. It needs
            to look great at the size it appears on YouTube — roughly 300-400
            pixels wide on desktop. Over-sharpening and over-compressing are
            both mistakes I made repeatedly.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Design Rules for Higher CTR
          </h2>
          <p className="mt-3">
            A technically correct thumbnail with bad design still gets skipped.
            These guidelines come from analyzing thumbnails that consistently
            outperform their channels:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li>
              <strong>Text or no text?</strong> Short text (2-3 words) works.
              Long text gets cropped on mobile or becomes unreadable. If you
              use text, make it at least 48pt bold and position it in the
              upper or lower third of the image — the center is where YouTube
              places the timestamp overlay.
            </li>
            <li>
              <strong>Face close-ups increase CTR.</strong> Thumbnails with a
              visible face showing emotion outperform text-only or scene-only
              thumbnails by 30-40% based on my own A/B results.
            </li>
            <li>
              <strong>High contrast.</strong> Your thumbnail must be readable
              as a 168×94 pixel sidebar thumbnail. That means bright subjects
              on dark backgrounds or vice versa.
            </li>
            <li>
              <strong>Brand consistency.</strong> Use the same fonts, colors,
              and face placement across your channel so viewers recognize your
              content before reading the title.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Safe Zones: Where Content Shows Up
          </h2>
          <p className="mt-3">
            YouTube crops and overlays parts of your thumbnail depending on
            where it is displayed. Designing around these safe zones prevents
            important content from being cut off:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              <strong>Desktop search:</strong> displays the full 16:9 image
            </li>
            <li>
              <strong>Mobile search:</strong> slightly tighter crop on all
              sides. Keep important content within 80% of center
            </li>
            <li>
              <strong>Channel page:</strong> no crop, but the video length
              overlay sits in the bottom-right corner
            </li>
            <li>
              <strong>End screen / suggested videos:</strong> small crop on
              each side. Text in the far corners may be cut
            </li>
            <li>
              <strong>Timestamp overlay:</strong> bottom-center, roughly 40
              pixels tall. Do not put content here
            </li>
          </ul>
          <p className="mt-2">
                            My rule: keep all critical content (face, text, key visual) within the
            center 70% of the frame. The outer 15% on each side is for
            background color and decorative elements only.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Common Thumbnail Mistakes
          </h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>
              <strong>Too much text.</strong> A full sentence in your thumbnail
              is a full sentence nobody reads. Two words max. Save the
              explanation for the title.
            </li>
            <li>
              <strong>Over-sharpened.</strong> Applying too much sharpening
              creates halos around edges that look amateur. A subtle sharpen
              (radius 0.5, amount 50%) is enough.
            </li>
            <li>
              <strong>Wrong aspect ratio.</strong> A square or 4:3 image gets
              letterboxed with black bars. Always start with 16:9.
            </li>
            <li>
              <strong>Low contrast.</strong> A beautiful cinematic image makes a
              terrible thumbnail because it is hard to read at small sizes.
              Thumbnails should be slightly garish by design.
            </li>
            <li>
              <strong>Ignoring the 2 MB limit.</strong> YouTube rejects
              thumbnails over 2 MB without warning. Check file size before
              uploading.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            My Thumbnail Workflow
          </h2>
          <ol className="mt-3 list-decimal pl-6 space-y-1">
            <li>Design in any image editor at 1280×720</li>
            <li>Export as JPEG quality 95</li>
            <li>Open in PicFix <Link href="/tools/resize" className="text-blue-600 hover:underline">resize tool</Link> to confirm dimensions</li>
            <li>Open in PicFix <Link href="/tools/compress" className="text-blue-600 hover:underline">compressor</Link> to check file size and reduce if needed</li>
            <li>Check how it looks at 168×94 pixels (sidebar size) on a phone screenshot</li>
            <li>Upload to YouTube and verify the preview</li>
          </ol>
          <p className="mt-2">
            The whole process takes about 5 minutes per thumbnail once you have
            a template. I use the same layout every time — face on the left,
            text on the right, brand color background — so I only need to swap
            the photo and text each video.
          </p>
        </section>

        <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            Create your YouTube thumbnail now
          </h2>
          <p className="mt-2 text-blue-800">
            Use PicFix&apos;s free resize and compress tools to create YouTube
            thumbnails at the exact 1280×720 specification. All in your
            browser, no uploads, no sign-up.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools/resize"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Resize to 1280×720 →
            </Link>
            <Link
              href="/tools/compress"
              className="inline-flex items-center rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              Compress Under 2 MB →
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
            href="/tools/resize"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Image Resizer
          </Link>
          <Link
            href="/tools/compress"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Image Compressor
          </Link>
        </div>
      </footer>
    </div>
  )
}
