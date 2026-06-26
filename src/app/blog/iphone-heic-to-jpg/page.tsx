import type { Metadata } from 'next'
import Link from 'next/link'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'iPhone HEIC to JPG: Every Method, Ranked',
  description:
    'How to convert iPhone HEIC photos to JPG — change camera settings, use PicFix converter, AirDrop, or third-party apps. Tested and ranked by speed and quality.',
  alternates: { canonical: `${siteUrl}/blog/iphone-heic-to-jpg` },
  openGraph: {
    title: 'iPhone HEIC to JPG: Every Method, Ranked',
    description:
      'HEIC files save space but nothing opens them on Windows. Step-by-step guide to convert iPhone photos to JPG.',
    url: `${siteUrl}/blog/iphone-heic-to-jpg`,
    type: 'article',
  },
}

export default function IphoneHeicToJpg() {
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
          iPhone HEIC to JPG: Every Method, Ranked
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-zinc-400">
          <time dateTime="2026-06-24">June 24, 2026</time>
          <span>·</span>
          <span>8 min read</span>
        </div>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          I took a vacation, came home, and tried to email my photos from my
          phone to my work Windows laptop. Nothing opened. Every single file had
          a weird &quot;.heic&quot; extension that Windows treated as unknown. I
          spent an embarrassing amount of time before learning that this is the
          default iPhone camera format — and there are several ways to deal with
          it. Here is every method ranked by how often I actually use it.
        </p>
        <img
          src="/blog/convert-tool.jpg"
          alt="PicFix format converter tool showing PNG, JPEG, WebP, and AVIF output options"
          className="mt-6 w-full rounded-lg border border-zinc-200"
        />
      </header>

      <article className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            What Is HEIC and Why Does iPhone Use It?
          </h2>
          <p className="mt-3">
            HEIC (High Efficiency Image Container) is Apple&apos;s implementation
            of the HEIF format. It stores the same image data as JPEG in roughly
            half the file size. Apple switched to HEIC as default starting with
            iOS 11 and it has been the standard ever since.
          </p>
          <p className="mt-2">
            The problem is compatibility. HEIC works perfectly across Apple
            devices — iPhone, iPad, Mac — but Windows cannot open it natively.
            Android support is spotty. Many websites, CMS platforms, and
            enterprise tools reject HEIC files outright. If you share photos
            outside the Apple ecosystem, you need JPEG.
          </p>
          <p className="mt-2">
            For reference, a single 12MP photo from my iPhone 15 Pro takes about
            1.8MB as HEIC and around 3.5MB as JPEG. That is a significant saving
            on storage, but the tradeoff is that nobody else can open it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Method 1: Change iPhone Camera Settings (Best)
          </h2>
          <p className="mt-3">
            The most reliable solution: tell your iPhone to stop using HEIC.
          </p>
          <ol className="mt-2 list-decimal pl-6 space-y-2">
            <li>Open <strong>Settings</strong> → <strong>Camera</strong> → <strong>Formats</strong></li>
            <li>Change from &quot;High Efficiency&quot; to &quot;Most Compatible&quot;</li>
          </ol>
          <p className="mt-2">
            That is it. All future photos will be JPEG. There are two downsides:
            files are roughly 2× larger, and Live Photos are preserved as
            separate image and video files instead of a single HEIC container.
            For everyday use, the storage tradeoff is worth the compatibility.
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            Note: this only affects new photos. Old HEIC files stay HEIC.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Method 2: PicFix Format Converter (Fastest for Occasional Use)
          </h2>
          <p className="mt-3">
            If you already have HEIC files or only need to convert occasionally,
            use an online converter. PicFix&apos;s{' '}
            <Link
              href="/tools/convert"
              className="text-blue-600 hover:underline"
            >
              free format converter
            </Link>{' '}
            handles JPEG, PNG, WebP, and AVIF output — all in your browser,
            with no upload to any server.
          </p>
          <p className="mt-2">
            One honest limitation: the Canvas API that PicFix uses supports HEIC
            in some browsers (Safari on macOS, recent Chrome on Android) but not
            universally. If your browser does support it, you just drop the HEIC
            file and choose JPEG output. If not, convert HEIC to JPEG in your
            iPhone settings first, then use PicFix to optimize further.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Method 3: AirDrop to Mac
          </h2>
          <p className="mt-3">
            AirDrop from iPhone to Mac. On the receiving Mac, open the image in
            Preview and go to File → Export. Set format to JPEG. Quick, no third
            party involved, but requires a Mac within AirDrop range.
          </p>
          <p className="mt-2">
            If you use Image Capture on Mac instead of Photos, you can set the
            import format to JPEG at the bottom of the window. New imports land
            as JPEG automatically.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Method 4: Third-Party Apps
          </h2>
          <p className="mt-3">
            Several dedicated HEIC converters exist on the App Store and web.
            The ones worth mentioning:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              <strong>CopyTrans HEIC for Windows</strong> — adds HEIC support to
              Windows so it opens like any other file. Free.
            </li>
            <li>
              <strong>iMazing HEIC Converter</strong> — drag-and-drop desktop
              converter for macOS and Windows. Free.
            </li>
            <li>
              <strong>HEIC to JPEG (App Store)</strong> — converts in bulk on
              iPhone. There are many of these. Check privacy policies before
              uploading personal photos.
            </li>
          </ul>
          <p className="mt-2">
            I used CopyTrans on my work Windows laptop for a while. It works but
            adds yet another background service to a machine already running too
            many of them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Which Method Wins?
          </h2>
          <p className="mt-3">
            My ranking after living with this for two years:
          </p>
          <ol className="mt-2 list-decimal pl-6 space-y-1">
            <li>
              <strong>Change iPhone settings to Most Compatible</strong> — one
              time setup, zero ongoing friction. Storage penalty but total peace
              of mind.
            </li>
            <li>
              <strong>PicFix converter</strong> — best when you need to convert
              specific files on demand. No install, private, works on any
              device.
            </li>
            <li>
              <strong>AirDrop to Mac</strong> — convenient if both devices are
              nearby and you prefer native Apple tools.
            </li>
            <li>
              <strong>Third-party apps</strong> — useful for batch conversion or
              when the browser approach does not work. Watch for privacy.
            </li>
          </ol>
          <p className="mt-2 text-sm text-zinc-500">
            This ranking is based on my own workflow. If you take thousands of
            photos and need storage efficiency, keeping HEIC and batch-converting
            only on export might work better. Different use case.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            HEIC vs JPEG: Quick Comparison
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-left">
                  <th className="py-2 pr-4 font-medium text-zinc-900"></th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">HEIC</th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">JPEG</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">File size (12MP)</td>
                  <td className="py-2 pr-4">~1.8 MB</td>
                  <td className="py-2 pr-4">~3.5 MB</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Windows support</td>
                  <td className="py-2 pr-4 text-red-600">No</td>
                  <td className="py-2 pr-4 text-green-700">Yes</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Web uploads</td>
                  <td className="py-2 pr-4 text-red-600">Often rejected</td>
                  <td className="py-2 pr-4 text-green-700">Universal</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Quality</td>
                  <td className="py-2 pr-4">Better at same size</td>
                  <td className="py-2 pr-4">Standard</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Live Photos</td>
                  <td className="py-2 pr-4">Single file</td>
                  <td className="py-2 pr-4">Separate photo + video</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            Convert your HEIC photos now
          </h2>
          <p className="mt-2 text-blue-800">
            Use PicFix&apos;s free format converter to turn HEIC photos into JPEG,
            PNG, or WebP. No uploads, no accounts — your photos stay on your
            device. Once converted, you can also{' '}
            <Link
              href="/tools/compress"
              className="font-medium text-blue-600 hover:underline"
            >
              compress them further
            </Link>{' '}
            to save even more space for web use.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools/convert"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Convert to JPG →
            </Link>
            <Link
              href="/tools/compress"
              className="inline-flex items-center rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              Compress Further →
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
            href="/tools/convert"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Image Converter
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
