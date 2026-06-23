import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import Base64Client from './base64-client'
import type { UseCase, RelatedTool } from '@/components/ToolLayout'

const tool = tools.find((t) => t.id === 'base64')!

const useCases: UseCase[] = [
  {
    title: 'HTML Email Signatures — Inline Images',
    description: 'Base64 encodes images directly into HTML so email clients load them without external requests. Keep encoded images under 2KB — larger images bloat the email body and may trigger spam filters.',
  },
  {
    title: 'CSS Background Icons — Small Only',
    description: 'For tiny icons under 2KB, base64 in CSS eliminates an HTTP request. Above 2KB, external files are faster — browsers cache them between pages, and they do not inflate your stylesheet.',
  },
  {
    title: 'JSON API Payloads — Embed Images',
    description: 'When your API must return an image inline with other data, base64 encoding packs it into JSON without a separate image server. Only use for images under 10KB to keep API response times fast.',
  },
  {
    title: 'Debug Base64 Strings — Decode to Verify',
    description: 'Paste a base64 string to decode it back into an image. Useful for inspecting what an encoded data URI actually contains before embedding it in your code.',
  },
]

const relatedTools: RelatedTool[] = [
  { id: 'compress', reason: 'Compress images before encoding — smaller base64 is always better' },
  { id: 'resize', reason: 'Resize to smallest needed dimensions before encoding' },
]

export const metadata: Metadata = getToolMetadata('base64')

export default function Base64Page() {
  return (
    <ToolLayout
      tool={tool}
      useCases={useCases}
      relatedTools={relatedTools}
      faq={[
        {
          question: 'What is Base64 encoding for images?',
          answer:
            'Base64 encoding converts binary image data into a text string of ASCII characters. This is useful for embedding images directly in HTML, CSS, or JSON files without needing external image files or additional HTTP requests.',
        },
        {
          question: 'When should I use Base64 images?',
          answer:
            'Base64 is ideal for small images like icons, logos, and sprites that are embedded in HTML or CSS. For larger images, Base64 increases file size by about 33% and slows down page loading — regular image files are better.',
        },
        {
          question: 'How do I use the decoded image?',
          answer:
            'After decoding a Base64 string, you can preview it in the browser and download it as a PNG file. You can also copy the data URL directly from the Base64 string to use in your code.',
        },
        {
          question: 'Is my image uploaded to a server?',
          answer:
            'No. All encoding and decoding happens entirely in your browser. Your images and Base64 data never leave your device.',
        },
      ]}
    >
      <Base64Client />
    </ToolLayout>
  )
}
