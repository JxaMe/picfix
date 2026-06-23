import type { Metadata } from 'next'
import Link from 'next/link'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Why You Must Strip EXIF Data Before Posting Photos Online',
  description:
    'EXIF data can leak your GPS location, camera serial number, and the exact time you took a photo. How to check, remove, and protect your privacy before posting.',
  alternates: { canonical: `${siteUrl}/blog/strip-exif-data` },
  openGraph: {
    title: 'Why You Must Strip EXIF Data Before Posting Photos Online',
    description:
      'Every photo you post online carries hidden data. Learn what EXIF reveals and how to strip it in seconds.',
    url: `${siteUrl}/blog/strip-exif-data`,
    type: 'article',
  },
}

export default function StripExifData() {
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
          Why You Must Strip EXIF Data Before Posting Photos Online
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-zinc-400">
          <time dateTime="2026-06-24">June 24, 2026</time>
          <span>·</span>
          <span>7 min read</span>
        </div>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          I dropped a photo from my phone into an EXIF viewer on a whim and saw
          my exact apartment coordinates, the precise second I took it, and my
          phone model and serial number — all hidden in a file I had emailed to
          five people that week. Every photo you take carries this data. Here is
          exactly what it           reveals and how to strip it before you share.
        </p>
        <img
          src="/blog/exif-tool.jpg"
          alt="PicFix EXIF metadata viewer showing GPS coordinates camera model and timestamp extracted from a photo"
          className="mt-6 w-full rounded-lg border border-zinc-200"
        />
      </header>

      <article className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
        {/* What EXIF reveals */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            What EXIF Data Can Reveal About You
          </h2>
          <p className="mt-3">
            EXIF (Exchangeable Image File Format) is metadata embedded in every
            JPEG, TIFF, and RAW photo file. It was designed to help cameras and
            software exchange information. But it also creates a detailed
            fingerprint of every photo you take:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-left">
                  <th className="py-2 pr-4 font-medium text-zinc-900">
                    Data Field
                  </th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">
                    What It Reveals
                  </th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">
                    Risk Level
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">GPS Coordinates</td>
                  <td className="py-2 pr-4">
                    Exact latitude, longitude, and altitude where the photo was
                    taken — down to a few meters
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-red-600 font-medium">Critical</span>
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Date and Time</td>
                  <td className="py-2 pr-4">
                    Precise timestamp including seconds and timezone
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-amber-600 font-medium">High</span>
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">
                    Camera Make & Model
                  </td>
                  <td className="py-2 pr-4">
                    Device manufacturer, model name, sometimes firmware version
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-zinc-500 font-medium">Low</span>
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Serial Number</td>
                  <td className="py-2 pr-4">
                    Unique camera body and lens serial numbers — can be used to
                    link multiple photos to the same device
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-amber-600 font-medium">High</span>
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Camera Settings</td>
                  <td className="py-2 pr-4">
                    Aperture, shutter speed, ISO, focal length, flash mode,
                    exposure compensation
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-zinc-500 font-medium">Low</span>
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Software</td>
                  <td className="py-2 pr-4">
                    Which editing software was used, including version number
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-zinc-500 font-medium">Low</span>
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Thumbnail</td>
                  <td className="py-2 pr-4">
                    An embedded preview image — may show the original photo
                    before cropping or edits
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-amber-600 font-medium">Medium</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Copyright</td>
                  <td className="py-2 pr-4">
                    Owner name and usage terms (if set in-camera)
                  </td>
                  <td className="py-2 pr-4">
                    <span className="text-zinc-500 font-medium">Low</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Real-world consequences */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            This Has Actually Happened
          </h2>
          <p className="mt-3 text-sm text-zinc-500">
            These are documented cases — not hypotheticals. I did not personally
            experience any of these (thankfully), but each one is a real news
            story from the last few years.
          </p>
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <h3 className="font-semibold text-red-800">
                Home address leaked from listing photos
              </h3>
              <p className="mt-1 text-sm text-red-700">
                In 2023, a seller on Facebook Marketplace posted photos of their
                apartment taken with GPS enabled. A buyer extracted the
                coordinates from the EXIF data and showed up unannounced. The
                seller had not shared their address in the listing.
              </p>
            </div>
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <h3 className="font-semibold text-red-800">
                Celebrity location doxxing
              </h3>
              <p className="mt-1 text-sm text-red-700">
                Multiple celebrities have had their home addresses or current
                locations revealed by fans extracting GPS data from photos posted
                on social media. Twitter/X, Instagram, and Reddit strip EXIF on
                upload — but direct file hosting services, forums, and email do
                not.
              </p>
            </div>
            <div className="rounded-lg border border-red-100 bg-red-50 p-4">
              <h3 className="font-semibold text-red-800">
                Stolen camera tracked via serial number
              </h3>
              <p className="mt-1 text-sm text-red-700">
                A photographer had their camera stolen and later found photos
                taken with it posted online. The camera&apos;s serial number in
                the EXIF data matched their stolen equipment, leading police to
                recover it. In this case EXIF helped — but the same data can be
                used to identify a photographer who wishes to remain anonymous.
              </p>
            </div>
          </div>
        </section>

        {/* Which platforms strip EXIF */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            Which Platforms Strip EXIF Automatically?
          </h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 text-left">
                  <th className="py-2 pr-4 font-medium text-zinc-900">
                    Platform
                  </th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">
                    Strips EXIF?
                  </th>
                  <th className="py-2 pr-4 font-medium text-zinc-900">
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Twitter / X</td>
                  <td className="py-2 pr-4 text-green-700">Yes</td>
                  <td className="py-2 pr-4">
                    Strips all metadata on upload
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Instagram</td>
                  <td className="py-2 pr-4 text-green-700">Yes</td>
                  <td className="py-2 pr-4">
                    Strips all metadata during processing
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Facebook</td>
                  <td className="py-2 pr-4 text-green-700">Yes</td>
                  <td className="py-2 pr-4">
                    Strips but may keep date/time
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Reddit</td>
                  <td className="py-2 pr-4 text-green-700">Yes</td>
                  <td className="py-2 pr-4">Strips on upload</td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Imgur</td>
                  <td className="py-2 pr-4 text-green-700">Yes</td>
                  <td className="py-2 pr-4">
                    Strips EXIF, keeps basic image metadata
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Discord</td>
                  <td className="py-2 pr-4 text-red-600">No</td>
                  <td className="py-2 pr-4">
                    Files uploaded to Discord retain EXIF
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">WhatsApp</td>
                  <td className="py-2 pr-4 text-red-600">Partial</td>
                  <td className="py-2 pr-4">
                    Strips GPS but may keep other fields
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Telegram</td>
                  <td className="py-2 pr-4 text-red-600">No</td>
                  <td className="py-2 pr-4">
                    Sends files as-is, EXIF intact
                  </td>
                </tr>
                <tr className="border-b border-zinc-100">
                  <td className="py-2 pr-4 font-medium">Email attachments</td>
                  <td className="py-2 pr-4 text-red-600">No</td>
                  <td className="py-2 pr-4">
                    Full EXIF preserved — strip before attaching
                  </td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Your own website</td>
                  <td className="py-2 pr-4 text-red-600">No</td>
                  <td className="py-2 pr-4">
                    Unless your CMS strips it, EXIF stays
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            My rule: never rely on the platform to protect your privacy. Social
            media apps strip EXIF because their legal teams insist on it. But
            Discord, Telegram, email, forums, and your own website send your
            files raw. Strip it yourself every time. It takes five seconds and
            there is no downside.
          </p>
        </section>

        {/* How to check */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            How to Check What EXIF Your Photo Contains
          </h2>
          <p className="mt-3">
            Before stripping, it helps to know what is there. Use PicFix&apos;s{' '}
            <Link
              href="/tools/exif"
              className="text-blue-600 hover:underline"
            >
              free EXIF viewer
            </Link>
            :
          </p>
          <ol className="mt-2 list-decimal pl-6 space-y-2">
            <li>Drop your photo onto the tool</li>
            <li>
              See every EXIF tag in a readable table — GPS coordinates, camera
              model, timestamp, everything
            </li>
            <li>
              If GPS coordinates are present, click to open them in Google Maps
              to see exactly what location is revealed
            </li>
            <li>Click &quot;Strip EXIF&quot; to download a metadata-free copy</li>
          </ol>
          <p className="mt-2">
            All processing stays in your browser — the photo is never uploaded
            to a server. This is important because uploading to an online EXIF
            viewer defeats the purpose of privacy.
          </p>
        </section>

        {/* What to keep */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            What EXIF Data You Might Want to Keep
          </h2>
          <p className="mt-3">
            Not all EXIF data is bad. Some fields are useful and harmless:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>
              <strong>Copyright and credit info</strong> — lets people know who
              owns the image and how to attribute it.
            </li>
            <li>
              <strong>ICC color profile</strong> — ensures colors display
              correctly across devices. Never strip this.
            </li>
            <li>
              <strong>Image orientation</strong> — tells viewers which way to
              rotate the image. If stripped, photos may display sideways.
            </li>
            <li>
              <strong>Camera settings</strong> — if you are a photography
              educator sharing examples, keeping aperture/ISO/shutter speed is
              helpful to your audience.
            </li>
          </ul>
          <p className="mt-2">
            The safest approach: strip everything except the ICC profile and
            orientation. Add back copyright info if you want attribution. Strip
            GPS, timestamps, and serial numbers unconditionally.
          </p>
        </section>

        {/* CTA */}
        <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            Check your photos now
          </h2>
          <p className="mt-2 text-blue-800">
            Drop a photo into PicFix&apos;s EXIF tool and see exactly what
            hidden data it carries. Strip it with one click — all in your
            browser, never uploaded to a server. Your privacy is the point.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools/exif"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              View & Strip EXIF →
            </Link>
            <Link
              href="/tools/blur"
              className="inline-flex items-center rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              Blur Sensitive Content →
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
            href="/tools/exif"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            EXIF Viewer
          </Link>
          <Link
            href="/tools/blur"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            Image Blur
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
