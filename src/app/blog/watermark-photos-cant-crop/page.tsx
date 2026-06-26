import type { Metadata } from 'next'
import Link from 'next/link'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'How to Watermark Photos That Cannot Be Cropped Out',
  description:
    'Anti-crop watermark techniques: position, opacity, tiling, and tools. Make your watermarks impossible to remove without ruining the image.',
  alternates: { canonical: `${siteUrl}/blog/watermark-photos-cant-crop` },
  openGraph: {
    title: 'How to Watermark Photos That Cannot Be Cropped Out',
    description:
      'Stop people from cropping your watermark out. Techniques for positioning, opacity, and tiling that make watermarks stick.',
    url: `${siteUrl}/blog/watermark-photos-cant-crop`,
    type: 'article',
  },
}

export default function WatermarkPhotosCantCrop() {
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
          How to Watermark Photos That Cannot Be Cropped Out
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-zinc-400">
          <time dateTime="2026-06-24">June 24, 2026</time>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          I used to watermark my photography portfolio with a small text in the
          bottom-right corner. Then someone cropped it off, posted my photo on
          their own site, and I only found out because a friend recognized it.
          The watermark was useless. Here is what actually works.
        </p>
        <img
          src="/blog/watermark-tool.jpg"
          alt="PicFix watermark tool interface showing opacity slider and position options"
          className="mt-6 w-full rounded-lg border border-zinc-200"
        />
      </header>

      <article className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Why Most Watermarks Fail
          </h2>
          <p className="mt-3">
            A watermark that sits in a corner is trivial to remove. Even
            someone with basic photo editing skills can crop it out in under
            ten seconds. The more sophisticated approach is content-aware fill
            or clone stamp — tools that most photo editors have. A watermark
            that can be removed in one click is not a watermark, it is
            decoration.
          </p>
          <p className="mt-2">
            The goal of an effective watermark is not to be impossible to
            remove. That does not exist — with enough effort, anyone can remove
            any watermark. The goal is to make removal more expensive than
            finding another image to steal.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Technique 1: Center-Overlay with Low Opacity
          </h2>
          <p className="mt-3">
            Place the watermark directly over the center of the image at 30-50%
            opacity. Crop it out and you lose the entire center of the photo —
            which is usually the most important part.
          </p>
          <p className="mt-2">
            This is the most common anti-crop technique for a reason. It works.
            The downside is that it obscures the image somewhat. For portfolio
            previews this is acceptable. For high-resolution sales, you provide
            clean copies after purchase.
          </p>
          <p className="mt-2">
            PicFix&apos;s{' '}
            <Link
              href="/tools/watermark"
              className="text-blue-600 hover:underline"
            >
              watermark tool
            </Link>{' '}
            lets you position the watermark anywhere on the image and control
            opacity. Set it to center at around 35% opacity and you have a
            decent anti-crop watermark in seconds.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Technique 2: Tiled Repeat Watermark
          </h2>
          <p className="mt-3">
            Instead of one watermark, fill the entire image with a repeating
            pattern of your logo or text at low opacity. Cropping becomes
            pointless because every crop area still contains the watermark.
          </p>
          <p className="mt-2">
            This works best for:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Stock photography previews</li>
            <li>Design portfolios shown before client payment</li>
            <li>Blog post featured images that get scraped</li>
            <li>Product images on e-commerce sites</li>
          </ul>
          <p className="mt-2">
            The key is keeping opacity low enough that the image is still
            viewable, but high enough that the pattern is visible in every
            section. I find 20-30% works well for most images.
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            PicFix currently supports a single text or image watermark, not
            tiling. For tiled watermarks, you can use Photoshop actions or
            dedicated batch watermarking tools. I will update this guide when
            PicFix adds tiling support.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Technique 3: Blend into the Image Content
          </h2>
          <p className="mt-3">
            Place the watermark across a busy, detailed area of the image and
            use blend modes to integrate it. A watermark on a plain sky is
            trivial to edit out. A watermark across textured foliage or
            patterned fabric requires hours of manual cleanup.
          </p>
          <p className="mt-2">
            The anti-crop benefit here is indirect: if someone tries to crop,
            they also lose the detailed area that makes the photo valuable. If
            they try to clone-stamp the watermark out, the detailed texture
            makes their job significantly harder.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Technique 4: Semi-Transparent Banner Across the Image
          </h2>
          <p className="mt-3">
            A horizontal or diagonal band of text running across the full width
            of the image. The band is wide enough that cropping it out removes
            a significant portion of the photo.
          </p>
          <p className="mt-2">
            This is popular among event photographers and real estate
            photographers. A diagonal &quot;© Your Name&quot; across the entire
            image makes it useless for unauthorized use because the stolen
            version still clearly carries your branding.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            What About AI Watermark Removal?
          </h2>
          <p className="mt-3">
            AI-based watermark removal tools exist and they are getting better.
            The current generation can handle simple text watermarks on
            uniform backgrounds. They struggle with:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>Watermarks integrated into detailed areas of the image</li>
            <li>Low-opacity watermarks that overlap important content</li>
            <li>Tiled repeating patterns</li>
          </ul>
          <p className="mt-2">
            The arms race between watermarking and watermark removal is ongoing.
            For now, the most resilient approach is technique 2 (tiled repeat)
            combined with technique 1 (center overlay) — make removal
            cost more than the image is worth.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            My Watermark Settings
          </h2>
          <p className="mt-3">
            After having my work stolen multiple times, here is what I settled
            on:
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-green-200 bg-green-50 p-4">
              <p className="font-semibold text-green-900">
                For portfolio previews
              </p>
              <p className="mt-1 text-sm text-green-800">
                Center overlay, 35% opacity, contains both my logo and
                &quot;© picfix.xyz&quot; text. Enough to browse, annoying
                enough to deter theft.
              </p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="font-semibold text-blue-900">
                For client proofs
              </p>
              <p className="mt-1 text-sm text-blue-800">
                Diagonal banner across the full image, 40% opacity. The client
                can evaluate composition but cannot use the proof publicly.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-4">
              <p className="font-semibold text-zinc-900">
                For social media
              </p>
              <p className="mt-1 text-sm text-zinc-600">
                Small watermark in a corner, 50% opacity. Honest admission: this
                is the weakest protection. Social media already strips
                watermarks via compression, so I prioritize visibility over
                security here.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            Watermark your photos now
          </h2>
          <p className="mt-2 text-blue-800">
            Use PicFix&apos;s free watermark tool to add anti-crop text or image
            watermarks. Position it center, adjust opacity, and make it stick.
            All in your browser — no uploads, no lossy recompression from a
            server round-trip.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools/watermark"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Add Watermark →
            </Link>
            <Link
              href="/tools/resize"
              className="inline-flex items-center rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              Resize for Web →
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
            href="/tools/watermark"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Add Watermark
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
