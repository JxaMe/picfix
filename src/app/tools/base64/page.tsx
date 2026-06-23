import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import Base64Client from './base64-client'

const tool = tools.find((t) => t.id === 'base64')!

export const metadata: Metadata = getToolMetadata('base64')

export default function Base64Page() {
  return (
    <ToolLayout
      tool={tool}
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
