import type { Metadata } from 'next'
import Link from 'next/link'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Instagram Image Size Guide 2026: All Dimensions Tested',
  description:
    'Exact dimensions for Instagram posts, Stories, Reels, carousels, and profile pictures. Avoid cropping and quality loss with these proven sizes.',
  alternates: { canonical: `${siteUrl}/blog/instagram-image-size-guide` },
  openGraph: {
    title: 'Instagram Image Size Guide 2026: All Dimensions Tested',
    description:
      'Updated for 2026: every Instagram image dimension in one place, with cropping tips and compression advice.',
    url: `${siteUrl}/blog/instagram-image-size-guide`,
    type: 'article',
  },
}

export default function InstagramImageSizeGuide() {
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
          Instagram Image Size Guide 2026: All Dimensions Tested
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-zinc-400">
          <time dateTime="2026-06-24">June 24, 2026</time>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          I have ruined at least a dozen posts by uploading the wrong
          dimensions — Instagram crops unpredictably and the compression
          algorithm is brutal. Once a 4K export from Lightroom hit the feed
          looking like a 2006 flip phone photo. I tested every dimension on the
          latest Instagram app (June 2026) to give you the exact numbers so you
          do not repeat my mistakes.
        </p>
        <img
          src="/blog/resize-tool.jpg"
          alt="PicFix free image resizer tool showing custom dimension fields for exact pixel sizing"
          className="mt-6 w-full rounded-lg border border-zinc-200"
        />
      </header>

      <article className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
        {/* Master reference */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Quick Reference: All Instagram Image Sizes
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-left">
                  <th className="py-2 pr-4 font-medium text-zinc-900">
                    Type
                  </th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">
                    Resolution
                  </th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">
                    Aspect Ratio
                  </th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">
                    Max File Size
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Square post</td>
                  <td className="py-2 pr-4">1080 × 1080</td>
                  <td className="py-2 pr-4">1:1</td>
                  <td className="py-2 pr-4">8 MB</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Portrait post</td>
                  <td className="py-2 pr-4">1080 × 1350</td>
                  <td className="py-2 pr-4">4:5</td>
                  <td className="py-2 pr-4">8 MB</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Landscape post</td>
                  <td className="py-2 pr-4">1080 × 566</td>
                  <td className="py-2 pr-4">1.91:1</td>
                  <td className="py-2 pr-4">8 MB</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Story / Reel</td>
                  <td className="py-2 pr-4">1080 × 1920</td>
                  <td className="py-2 pr-4">9:16</td>
                  <td className="py-2 pr-4">4 GB</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Carousel (square)</td>
                  <td className="py-2 pr-4">1080 × 1080</td>
                  <td className="py-2 pr-4">1:1</td>
                  <td className="py-2 pr-4">8 MB per slide</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">
                    Carousel (portrait)
                  </td>
                  <td className="py-2 pr-4">1080 × 1350</td>
                  <td className="py-2 pr-4">4:5</td>
                  <td className="py-2 pr-4">8 MB per slide</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Profile picture</td>
                  <td className="py-2 pr-4">320 × 320</td>
                  <td className="py-2 pr-4">1:1</td>
                  <td className="py-2 pr-4">N/A</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">
                    Reel cover (feed)
                  </td>
                  <td className="py-2 pr-4">1080 × 1080</td>
                  <td className="py-2 pr-4">1:1</td>
                  <td className="py-2 pr-4">8 MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Square post detail */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Square Posts: 1080 × 1080 (1:1)
          </h2>
          <p className="mt-3">
            The classic Instagram post. Instagram accepts up to 1440 × 1440, but
            the platform downsamples everything to 1080 pixels wide on display.
            Uploading larger than 1080 means Instagram compresses it — often
            with visible quality loss. Upload exactly 1080 × 1080 for the
            sharpest result.
          </p>
          <p className="mt-2">
            Instagram compresses JPEG aggressively. To minimize their
            re-compression artifacts, upload at JPEG quality 100%. The platform
            will re-encode at their settings anyway, but starting from the
            highest quality source gives the best final result.
          </p>
        </section>

        {/* Portrait */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Portrait Posts: 1080 × 1350 (4:5)
          </h2>
          <p className="mt-3">
            Portrait orientation fills more screen space in the feed, which
            means more time on your post as users scroll. The maximum allowed
            portrait ratio is 4:5 — anything taller gets cropped. Upload at
            1080 × 1350 to use the full allowed height without cropping.
          </p>
          <p className="mt-2">
            If you upload a 9:16 (1080 × 1920) image, Instagram crops it to 4:5
            in the feed. The full 9:16 version only shows when a user taps to
            expand. To make sure all important content is visible in the feed,
            design within the 1080 × 1350 safe zone, not 1080 × 1920.
          </p>
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="text-sm font-medium text-amber-800">
              Pro tip: If you shoot photos in 4:5 with your phone camera, resize
              to exactly 1080 × 1350 with{' '}
              <Link
                href="/tools/resize"
                className="text-amber-700 hover:underline"
              >
                PicFix&apos;s resizer
              </Link>{' '}
              before uploading. Your phone may export at 3024 × 3780 — way
              larger than needed, and Instagram will crush the quality.
            </p>
          </div>
        </section>

        {/* Landscape */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Landscape Posts: 1080 × 566 (1.91:1)
          </h2>
          <p className="mt-3">
            Landscape photos get the least screen real estate in the feed.
            Maximum aspect ratio is 1.91:1 — slightly wider than 16:9 (which is
            1.78:1). Upload at 1080 × 566. If your source is 16:9 (1920 ×
            1080), resize to 1080 × 608 — Instagram will accept it but display
            with small letterbox bars.
          </p>
          <p className="mt-2">
            The practical advice: if you have a landscape image, consider
            whether it works better cropped to 4:5 portrait or 1:1 square. Both
            occupy more vertical space in users&apos; feeds than 1.91:1
            landscape.
          </p>
        </section>

        {/* Stories */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Stories and Reels: 1080 × 1920 (9:16)
          </h2>
          <p className="mt-3">
            Stories and Reels use full phone screen — 9:16 portrait. Upload at
            1080 × 1920. This is the same aspect ratio as most phone cameras in
            portrait mode. Instagram applies less compression to Reels than to
            feed posts, so your quality will generally be better.
          </p>
          <p className="mt-2">
            Key safe zones to keep in mind for Stories:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              <strong>Top 14%</strong> (roughly top 270px): header area with
              your profile picture, username, and timestamp. Do not place
              critical text or buttons here.
            </li>
            <li>
              <strong>Bottom 10%</strong> (roughly bottom 190px): the message
              reply bar and swipe-up/CTA area. Leave this clear for interactive
              elements.
            </li>
            <li>
              <strong>Safe center:</strong> the middle 76% of the screen is
              always visible.
            </li>
          </ul>
        </section>

        {/* Carousels */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Carousels: All Slides Must Match
          </h2>
          <p className="mt-3">
            Carousel posts allow up to 10 slides, but every slide in a carousel
            must use the same aspect ratio. If your first slide is 1:1, all
            subsequent slides are cropped to 1:1. You cannot mix square and
            portrait slides in one carousel.
          </p>
          <p className="mt-2">
            Best practice: pick your aspect ratio first, resize all images to
            match before uploading. Use{' '}
            <Link
              href="/tools/resize"
              className="text-blue-600 hover:underline"
            >
              PicFix&apos;s resize tool
            </Link>{' '}
            to batch-process all slides to identical dimensions.
          </p>
        </section>

        {/* Compression advice */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Stop Instagram From Ruining Your Quality
          </h2>
          <p className="mt-3">
            Instagram re-compresses everything. You cannot stop it, but after
            many failed uploads I have learned how to minimize the damage:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              Upload at exactly the target resolution — Instagram&apos;s resize
              algorithm is worse than most desktop tools. Resize yourself
              first.
            </li>
            <li>
              Use JPEG quality 100% or PNG — give Instagram the best source
              possible.
            </li>
            <li>
              Export from your editing software in sRGB color space, not Adobe
              RGB or ProPhoto RGB. Instagram displays in sRGB; other color
              spaces may shift colors.
            </li>
            <li>
              Sharp images degrade less. Add subtle sharpening before upload —
              Instagram&apos;s compression softens edges.
            </li>
          </ul>
        </section>

        {/* CTA */}
        <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            Resize for Instagram in seconds
          </h2>
          <p className="mt-2 text-blue-800">
            PicFix&apos;s free image resizer handles every Instagram dimension
            above. Type your target size, upload, download — no sign-up, no
            uploads to a server. Also{' '}
            <Link
              href="/tools/round"
              className="font-medium text-blue-600 hover:underline"
            >
              round your profile picture
            </Link>{' '}
            while you are at it.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools/resize"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Resize Images →
            </Link>
            <Link
              href="/tools/compress"
              className="inline-flex items-center rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              Compress Before Upload →
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
          <Link
            href="/tools/round"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Image Rounder
          </Link>
        </div>
      </footer>
    </div>
  )
}
