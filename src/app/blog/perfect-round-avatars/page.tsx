import type { Metadata } from 'next'
import Link from 'next/link'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Create Perfect Round Avatars for GitHub, Discord, Twitter',
  description:
    'How to make round profile pictures for GitHub, Discord, Twitter, and Slack. Resize, crop circle, and optimize avatars to platform specs.',
  alternates: { canonical: `${siteUrl}/blog/perfect-round-avatars` },
  openGraph: {
    title: 'Create Perfect Round Avatars for GitHub, Discord, Twitter',
    description:
      'Step-by-step guide to creating round profile pictures for every major platform. Size specs, formatting tips, and tools.',
    url: `${siteUrl}/blog/perfect-round-avatars`,
    type: 'article',
  },
}

export default function PerfectRoundAvatars() {
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
          Create Perfect Round Avatars for GitHub, Discord, Twitter
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-zinc-400">
          <time dateTime="2026-06-24">June 24, 2026</time>
          <span>·</span>
          <span>7 min read</span>
        </div>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          I uploaded a perfectly square profile picture to Discord and it
          looked great on desktop. On mobile, my face was cropped off at the
          chin. Then I checked Twitter and the same image was showing as a
          circle with my name cut off. Each platform handles avatar cropping
          differently, and what looks good on one looks broken on another.
          Here is how to make avatars that work everywhere.
        </p>
        <img
          src="/blog/round-tool.jpg"
          alt="PicFix round corners tool interface showing adjustable corner radius preview"
          className="mt-6 w-full rounded-lg border border-zinc-200"
        />
      </header>

      <article className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Platform Avatar Specs in 2026
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-left">
                  <th className="py-2 pr-4 font-medium text-zinc-900">Platform</th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">Display Shape</th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">Recommended Size</th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">Max File Size</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">GitHub</td>
                  <td className="py-2 pr-4">Round</td>
                  <td className="py-2 pr-4">512×512</td>
                  <td className="py-2 pr-4">10 MB</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Discord</td>
                  <td className="py-2 pr-4">Round</td>
                  <td className="py-2 pr-4">512×512</td>
                  <td className="py-2 pr-4">8 MB</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Twitter / X</td>
                  <td className="py-2 pr-4">Round</td>
                  <td className="py-2 pr-4">400×400</td>
                  <td className="py-2 pr-4">2 MB</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Slack</td>
                  <td className="py-2 pr-4">Round</td>
                  <td className="py-2 pr-4">500×500</td>
                  <td className="py-2 pr-4">5 MB</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">LinkedIn</td>
                  <td className="py-2 pr-4">Square (rounded)</td>
                  <td className="py-2 pr-4">400×400</td>
                  <td className="py-2 pr-4">8 MB</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Instagram</td>
                  <td className="py-2 pr-4">Circle (profile)</td>
                  <td className="py-2 pr-4">320×320</td>
                  <td className="py-2 pr-4">Not specified</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-zinc-500">
            Sizes based on current platform guidelines as of mid-2026. These
            change. When in doubt, 512×512 covers everything except Twitter.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Step 1: Square Crop Your Source Image
          </h2>
          <p className="mt-3">
            Every platform starts with a square source. If your image is not
            square, the platform will crop it — and the crop is rarely where
            you want it. Most platforms center-crop, which means your face ends
            up in the center. If your subject is off-center, important content
            gets cut.
          </p>
          <p className="mt-2">
            Use PicFix&apos;s{' '}
            <Link
              href="/tools/resize"
              className="text-blue-600 hover:underline"
            >
              resize tool
            </Link>{' '}
            to crop your image to a perfect square. Set width and height to the
            same value (512×512 is the safest universal size). Position your
            subject in the center of the frame with some breathing room around
            the edges.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Step 2: Round the Corners
          </h2>
          <p className="mt-3">
            Once you have a square image, apply rounded corners. For avatars,
            you want maximum roundness — set the corner radius to 50% of the
            image width, which produces a perfect circle.
          </p>
          <p className="mt-2">
            PicFix&apos;s{' '}
            <Link
              href="/tools/round"
              className="text-blue-600 hover:underline"
            >
              round corners tool
            </Link>{' '}
            does exactly this. Upload your square image, slide the radius to
            maximum, and download the result. The preview shows exactly how the
            final circle will look.
          </p>
          <p className="mt-2">
            One limitation: PicFix rounds the corners of the image file itself,
            but GitHub and Discord apply their own circular mask on top. If
            your image has a background color, the rounded corners help it
            blend nicely with the platform&apos;s circular frame. If your image has
            a transparent background, the circle will float cleanly regardless.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Step 3: Optimize for Each Platform
          </h2>
          <p className="mt-3">
            After creating your round avatar, optimize it per platform:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              <strong>GitHub:</strong> 512×512 PNG with transparent background.
              GitHub applies its own circular crop, so a transparent background
              blends with any theme (light or dark).
            </li>
            <li>
              <strong>Discord:</strong> 512×512 PNG or JPEG under 8 MB. Discord
              compresses avatars aggressively, so keep detail high in the
              center of the image.
            </li>
            <li>
              <strong>Twitter:</strong> 400×400 JPEG under 2 MB. The strictest
              limits. Use PicFix&apos;s{' '}
              <Link
                href="/tools/compress"
                className="text-blue-600 hover:underline"
              >
                compressor
              </Link>{' '}
              to fit under the cap while keeping quality acceptable.
            </li>
            <li>
              <strong>Slack:</strong> 500×500 PNG. Slack displays avatars
              crisply — no noticeable compression artifacts.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Step 4: Compress for Fast Loading
          </h2>
          <p className="mt-3">
            Avatars load on every page view, every message, every comment. A
            500KB avatar wastes bandwidth and slows down page load for your
            followers. Compress without visible quality loss.
          </p>
          <p className="mt-2">
            For a 512×512 avatar, aim for under 100KB. At this size, quality
            remains excellent for profile photos. PicFix&apos;s compress tool can
            reduce a 300KB avatar to 60-80KB with no visible difference at
            avatar display size (32-128 pixels on screen).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Background Transparency vs Solid Color
          </h2>
          <p className="mt-3">
            A key decision: should your avatar background be transparent or
            filled?
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              <strong>Transparent (PNG):</strong> Blends with any theme. Best
              for logos, icons, and subjects that are naturally separated from
              background. GitHub and Discord both support it well. Slack
              sometimes shows a dark checkerboard behind transparent areas
              during upload — it resolves once saved.
            </li>
            <li>
              <strong>Solid background:</strong> Predictable appearance across
              all platforms. If your avatar has a white background, it looks
              the same on light and dark mode (the white edge merges with the
              light theme but stands out on dark).
            </li>
          </ul>
          <p className="mt-2">
            I use transparent for personal avatars and solid color (brand
            color) for project/organization avatars.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Quick Avatar Creation Flow
          </h2>
          <ol className="mt-3 list-decimal pl-6 space-y-1">
            <li>Open PicFix <Link href="/tools/resize" className="text-blue-600 hover:underline">resize tool</Link> and crop to 512×512 square</li>
            <li>Open PicFix <Link href="/tools/round" className="text-blue-600 hover:underline">round corners tool</Link> and set radius to 100% for a perfect circle</li>
            <li>Download as PNG for transparent background, or JPEG for smaller file</li>
            <li>Open PicFix <Link href="/tools/compress" className="text-blue-600 hover:underline">compress tool</Link> and reduce to under 100KB</li>
            <li>Upload to your platform of choice</li>
          </ol>
          <p className="mt-2">
            The whole process takes about two minutes. I refresh my avatars
            every few months and this flow has not changed in years.
          </p>
        </section>

        <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            Create your round avatar now
          </h2>
          <p className="mt-2 text-blue-800">
            Use PicFix&apos;s free tools to resize, round, and compress your
            profile picture. All in your browser, nothing uploaded. A perfect
            avatar in under two minutes.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools/round"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Round Image →
            </Link>
            <Link
              href="/tools/resize"
              className="inline-flex items-center rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              Resize to 512×512 →
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
            href="/tools/round"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Round Corners
          </Link>
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
