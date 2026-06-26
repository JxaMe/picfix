import type { Metadata } from 'next'
import Link from 'next/link'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Image to Base64: Free Online Converter for HTML, CSS & Email',
  description:
    'Convert images to Base64 strings for HTML, CSS, email, and JSON. Free online tool — no upload, runs entirely in your browser.',
  alternates: { canonical: `${siteUrl}/blog/image-to-base64` },
  openGraph: {
    title: 'Image to Base64: Free Online Converter for HTML, CSS & Email',
    description:
      'Step by step: convert any image to a Base64 string for embedding in HTML, CSS, email signatures, or JSON — all in your browser, no server upload.',
    url: `${siteUrl}/blog/image-to-base64`,
    type: 'article',
  },
}

export default function ImageToBase64() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Header */}
      <header>
        <Link
          href="/blog"
          className="text-sm text-zinc-400 hover:text-blue-600"
        >
          ← Blog
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Image to Base64: Free Online Converter for HTML, CSS & Email
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-zinc-400">
          <time dateTime="2026-06-26">June 26, 2026</time>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          I was building a landing page and needed my logo to appear in the
          HTML without loading a separate image file. One extra HTTP request
          on a slow connection can tank your Core Web Vitals. The answer was
          Base64 — convert the image to a text string and embed it directly.
          Here is exactly how to do it, and when it makes sense.
        </p>
        <img
          src="/blog/base64-tool.jpg"
          alt="PicFix free online image to Base64 converter tool interface showing encode and decode options"
          className="mt-6 w-full rounded-lg border border-zinc-200"
        />
      </header>

      {/* Article body */}
      <article className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
        {/* Section: What is Base64 */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            What Is Base64?
          </h2>
          <p className="mt-3">
            Base64 is a way to represent binary data — like an image — as a
            string of text. It takes every 3 bytes of the original file and
            converts them into 4 ASCII characters. The result looks like a
            random block of letters, numbers, and symbols, but it is actually
            your image encoded as plain text.
          </p>
          <p className="mt-3">
            Why would you want to turn a perfectly good image into text?
            Because some contexts only accept text: HTML attributes, CSS
            values, JSON payloads, email bodies, XML documents, SVG files.
            Base64 lets you squeeze an image into those formats without
            needing a separate file or URL.
          </p>
          <p className="mt-3">
            The trade-off is simple: the encoded string is roughly 33% larger
            than the original file. A 100KB image becomes about 133KB of
            Base64 text. For small images — logos, icons, thumbnails — this
            is usually fine. For a 5MB photo, it is not.
          </p>
        </section>

        {/* Section: When you need it */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            When Do You Need Image to Base64?
          </h2>

          <h3 className="mt-6 text-xl font-medium text-zinc-800">
            HTML inline images
          </h3>
          <p className="mt-2">
            Instead of{' '}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
              {'<img src="logo.png">'}
            </code>
            , you write{' '}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
              {'<img src="data:image/png;base64,iVBOR...">'}
            </code>
            . The image loads without a separate HTTP request. This matters
            for small assets on high-latency connections — your logo on a
            landing page, for example.
          </p>

          <h3 className="mt-6 text-xl font-medium text-zinc-800">
            CSS background images
          </h3>
          <p className="mt-2">
            Same idea: instead of{' '}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
              background-image: url(&apos;pattern.png&apos;)
            </code>
            , you use{' '}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
              background-image: url(data:image/png;base64,...)
            </code>
            . Useful for small patterns, icons, or decorative elements that
            are part of your CSS.
          </p>

          <h3 className="mt-6 text-xl font-medium text-zinc-800">
            Email signatures
          </h3>
          <p className="mt-2">
            Many email clients block externally hosted images by default.
            Embedding your logo as Base64 in the HTML signature means it
            displays even when remote images are blocked. Not all email
            clients support this — Outlook is notoriously bad at it — but
            Gmail, Apple Mail, and most web clients handle it fine.
          </p>

          <h3 className="mt-6 text-xl font-medium text-zinc-800">
            JSON APIs and data transfer
          </h3>
          <p className="mt-2">
            When your API needs to send or receive images as part of a JSON
            payload, Base64 is the standard encoding. You cannot embed raw
            binary in JSON — it only supports text. A common pattern is{' '}
            <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
              {'{"avatar": "data:image/jpeg;base64,..."}'}
            </code>
            .
          </p>

          <h3 className="mt-6 text-xl font-medium text-zinc-800">
            SVG files
          </h3>
          <p className="mt-2">
            SVG is an XML format. You can embed raster images inside SVG
            using Base64. This is how many icon systems work — the SVG
            wrapper contains the raster icon data as a Base64 string.
          </p>
        </section>

        {/* Section: Step by step */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            How to Convert Image to Base64 with PicFix
          </h2>
          <ol className="mt-3 list-decimal pl-6 space-y-3">
            <li>
              Open PicFix&apos;s{' '}
              <Link
                href="/tools/base64"
                className="text-blue-600 hover:underline"
              >
                Base64 Encode/Decode tool
              </Link>
              .
            </li>
            <li>
              Drop your image into the upload area. PNG, JPEG, WebP, GIF, and
              BMP all work.
            </li>
            <li>
              PicFix immediately shows the Base64 string. You get two output
              options:
              <ul className="mt-2 list-disc pl-6 space-y-1">
                <li>
                  <strong>Raw Base64 string</strong> — just the encoded text,
                  no prefix. Use this when you need the raw data for an API
                  or custom format.
                </li>
                <li>
                  <strong>Data URI</strong> — prefixed with{' '}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
                    data:image/png;base64,
                  </code>
                  . Use this directly in HTML{' '}
                  <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
                    src
                  </code>{' '}
                  attributes or CSS.
                </li>
              </ul>
            </li>
            <li>
              Click the copy button. Paste it wherever you need it.
            </li>
            <li>
              To go the other direction — decode a Base64 string back to an
              image — paste the string into the decode field and download the
              result.
            </li>
          </ol>
          <p className="mt-4 text-sm text-zinc-500">
            Everything happens in your browser. The image never leaves your
            device — no server upload, no third-party access.
          </p>
        </section>

        {/* Section: Format differences */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            PNG vs JPEG vs WebP: Which Format to Encode
          </h2>
          <p className="mt-3">
            The Base64 encoding process is format-agnostic — it just reads
            the raw bytes and converts them. But the choice of source format
            matters for the output size:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>
              <strong>PNG</strong> — lossless, supports transparency. Use for
              logos, icons, and images with sharp edges. The Base64 string
              will be larger than JPEG for photos.
            </li>
            <li>
              <strong>JPEG</strong> — lossy, smaller files. Use for photos and
              complex images where perfect quality is not critical. The Base64
              string will be significantly shorter than PNG.
            </li>
            <li>
              <strong>WebP</strong> — modern format, smaller than both PNG and
              JPEG at similar quality. Best choice for minimizing Base64
              string length. Browser support for WebP data URIs is excellent
              in 2026.
            </li>
            <li>
              <strong>GIF</strong> — supports animation but Base64 encoding
              only captures the first frame. If you need animated GIFs in
              Base64, the animation will be lost.
            </li>
          </ul>
          <p className="mt-3">
            If file size is your primary concern,{' '}
            <Link
              href="/tools/compress"
              className="text-blue-600 hover:underline"
            >
              compress the image first
            </Link>{' '}
            before encoding. A 50KB JPEG becomes a much more manageable
            Base64 string than a 500KB one. If your source image needs
            format conversion — say you have a BMP and want WebP — use{' '}
            <Link
              href="/tools/convert"
              className="text-blue-600 hover:underline"
            >
              PicFix format converter
            </Link>{' '}
            first.
          </p>
        </section>

        {/* Section: Pros and cons */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Base64 Pros and Cons: The Honest Version
          </h2>

          <h3 className="mt-6 text-xl font-medium text-zinc-800">
            Pros
          </h3>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li>
              <strong>Fewer HTTP requests.</strong> The image is part of the
              HTML or CSS file. One request instead of two.
            </li>
            <li>
              <strong>No CORS issues.</strong> Since the image is inline, you
              do not need to worry about cross-origin resource sharing
              policies.
            </li>
            <li>
              <strong>Works offline.</strong> Once the HTML is loaded, the
              image is there — no dependency on an external URL.
            </li>
            <li>
              <strong>Private.</strong> The image data is embedded, not fetched
              from a third-party server.
            </li>
          </ul>

          <h3 className="mt-6 text-xl font-medium text-zinc-800">
            Cons
          </h3>
          <ul className="mt-2 list-disc pl-6 space-y-2">
            <li>
              <strong>33% size increase.</strong> Base64 encoding inflates the
              original file by a third. For large images, this is wasteful.
            </li>
            <li>
              <strong>No browser caching.</strong> A regular image file is
              cached by the browser independently. A Base64 string is part of
              the HTML document — if the HTML is re-downloaded, the image
              data is re-downloaded too, even if the image has not changed.
            </li>
            <li>
              <strong>Slower rendering.</strong> The browser must decode the
              Base64 string before it can display the image. For large images,
              this adds a noticeable delay.
            </li>
            <li>
              <strong>Harder to maintain.</strong> Changing an image means
              re-generating the entire Base64 string and updating the code.
              With a regular image file, you just replace the file.
            </li>
            <li>
              <strong>Not suitable for large images.</strong> A 2MB photo
              becomes a 2.6MB text string. That is a lot of inline data.
            </li>
          </ul>

          <p className="mt-4">
            <strong>The rule of thumb:</strong> use Base64 for small,
            critical images — logos, icons, decorative elements under 20KB.
            For everything else, a regular image file with proper caching is
            better.
          </p>
        </section>

        {/* Section: Common mistakes */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Common Base64 Mistakes to Avoid
          </h2>
          <ol className="mt-3 list-decimal pl-6 space-y-3">
            <li>
              <strong>Encoding large photos.</strong> A 5MB image becomes
              ~6.7MB of Base64 text. Your HTML file will be enormous. Compress
              first, or skip Base64 entirely for anything over 50KB.
            </li>
            <li>
              <strong>Forgetting the data URI prefix.</strong> Raw Base64
              without{' '}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
                data:image/png;base64,
              </code>{' '}
              will not render in an HTML{' '}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm">
                src
              </code>{' '}
              attribute. PicFix gives you both formats — pick the right one.
            </li>
            <li>
              <strong>Using Base64 for images that change frequently.</strong>
              If you update your logo every week, Base64 means re-deploying
              your entire HTML every time. Static image files are easier to
              swap.
            </li>
            <li>
              <strong>Ignoring cacheability.</strong> Static image files can be
              served with long cache headers. Base64 strings inside HTML
              cannot. For repeat visitors, regular images load faster after
              the first visit.
            </li>
          </ol>
        </section>

        {/* Section: When not to use */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            When to Skip Base64 Entirely
          </h2>
          <p className="mt-3">
            Base64 is a useful tool, but it is not always the right one. Skip
            it when:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>
              The image is larger than 50KB — use a regular{' '}
              <Link
                href="/tools/compress"
                className="text-blue-600 hover:underline"
              >
                compressed image
              </Link>{' '}
              with caching instead.
            </li>
            <li>
              The image changes frequently — regular files are easier to
              update and cache.
            </li>
            <li>
              You need the image on multiple pages — each page with Base64
              duplicates the data.
            </li>
            <li>
              You are building for performance at scale — HTTP/2 and CDN
              caching make separate image files faster than Base64 in most
              real-world scenarios.
            </li>
          </ul>
          <p className="mt-3">
            Modern web performance best practices generally favor separate
            image files with proper caching and CDN delivery over Base64
            encoding. Base64 shines in specific, narrow use cases — not as a
            universal replacement for image files.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            Ready to convert your image?
          </h2>
          <p className="mt-2 text-blue-800">
            PicFix encodes and decodes Base64 entirely in your browser — no
            upload, no server, no third-party access. Supports PNG, JPEG,
            WebP, GIF, and BMP. Also try{' '}
            <Link
              href="/tools/compress"
              className="font-medium text-blue-600 hover:underline"
            >
              compressing first
            </Link>{' '}
            to get a shorter Base64 string.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools/base64"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Image to Base64 →
            </Link>
            <Link
              href="/tools/compress"
              className="inline-flex items-center rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              Compress First →
            </Link>
          </div>
        </section>
      </article>

      {/* Related tools */}
      <footer className="mt-16 border-t border-zinc-200 pt-8">
        <h3 className="text-sm font-semibold text-zinc-500">
          Tools mentioned
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/tools/base64"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Base64 Encode/Decode
          </Link>
          <Link
            href="/tools/compress"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Image Compressor
          </Link>
          <Link
            href="/tools/convert"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Image Converter
          </Link>
        </div>
      </footer>
    </div>
  )
}
