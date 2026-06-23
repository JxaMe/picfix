import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'PicFix privacy policy — we do not upload or store your images. All processing happens locally in your browser.',
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
        Privacy Policy
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Last updated: {new Date().toISOString().split('T')[0]}</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-700">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">1. No Image Uploads</h2>
          <p>
            PicFix processes all images entirely in your browser using the HTML5 Canvas API and FileReader.
            Your images are never uploaded to any server. They never leave your device. We have no way to see,
            access, or store your files.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">2. Data We Collect</h2>
          <p className="mb-2">
            We collect no personal data. We do not require accounts, emails, or sign-ups.
          </p>
          <p>
            We use Google Analytics to understand site traffic (page views, referrer, browser type).
            Google Analytics uses cookies. You can opt out via the{' '}
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">3. Advertising</h2>
          <p className="mb-2">
            We use Google AdSense to display advertisements. Google uses cookies to serve ads based on
            your prior visits to this or other websites. Google&apos;s use of advertising cookies enables it
            and its partners to serve ads based on your visit to PicFix and/or other sites on the Internet.
          </p>
          <p>
            You may opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline">
              Google Ads Settings
            </a>{' '}
            or{' '}
            <a href="https://optout.aboutads.info/" className="text-blue-600 hover:underline">
              www.aboutads.info
            </a>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">4. Cookies</h2>
          <p>
            We use essential cookies for site functionality and third-party cookies for analytics
            (Google Analytics) and advertising (Google AdSense). You can disable cookies in your
            browser settings, though some features may not function properly.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">5. Third-Party Services</h2>
          <p>
            PicFix uses the following third-party services that may collect data as described in their
            respective privacy policies: Google Analytics, Google AdSense. These services are hosted on
            our pages via scripts.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">6. Contact</h2>
          <p>
            For privacy-related questions, contact us at privacy@picfix.xyz.
          </p>
        </section>
      </div>
    </div>
  )
}
