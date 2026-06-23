import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'PicFix terms of service — free online image tools, no uploads, no accounts required.',
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
        Terms of Service
      </h1>
      <p className="mt-1 text-sm text-zinc-400">Last updated: {new Date().toISOString().split('T')[0]}</p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-700">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">1. Service Description</h2>
          <p>
            PicFix is a free online image processing service. All tools are provided as-is, free of charge,
            without warranty of any kind. We process images entirely in your browser — no images are uploaded
            to our servers.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">2. Acceptable Use</h2>
          <p>
            You agree not to use PicFix for any unlawful purpose or in violation of any applicable laws.
            You are responsible for the content of the images you process through our tools.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">3. Intellectual Property</h2>
          <p>
            All content, code, and design on PicFix is owned by us. You retain all rights to your images.
            Since we never receive or store your files, we claim no rights over them.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">4. Disclaimer</h2>
          <p>
            PicFix is provided &ldquo;as is&rdquo; without warranties of any kind, either express or implied.
            We do not guarantee that the service will be uninterrupted, error-free, or meet your requirements.
            We are not responsible for any loss of data or damages resulting from use of the service.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">5. Changes</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of PicFix after changes
            constitutes acceptance of the new terms.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900">6. Contact</h2>
          <p>
            Questions about these terms? Contact us at support@picfix.xyz.
          </p>
        </section>
      </div>
    </div>
  )
}
