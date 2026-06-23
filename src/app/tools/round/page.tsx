import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import RoundClient from './round-client'

const tool = tools.find((t) => t.id === 'round')!

export const metadata: Metadata = getToolMetadata('round')

export default function RoundPage() {
  return (
    <ToolLayout
      tool={tool}
      faq={[
        {
          question: 'Can I make a circular image?',
          answer:
            'Yes! Set the corner radius to at least half of the smaller dimension of your image. The tool will automatically clamp the radius to create a perfect circle or rounded rectangle.',
        },
        {
          question: 'What is the maximum corner radius?',
          answer:
            'The maximum radius is half of the smaller dimension of your image. For example, a 200×200 pixel image has a maximum radius of 100px, which produces a perfect circle.',
        },
        {
          question: 'Will my image background be transparent?',
          answer:
            'Yes, the output is saved as PNG with transparency. The corners become transparent, making it perfect for overlaying on different backgrounds or creating profile pictures.',
        },
        {
          question: 'Is my image uploaded to a server?',
          answer:
            'No. All processing happens entirely in your browser using the HTML5 Canvas API. Your images never leave your device.',
        },
      ]}
    >
      <RoundClient />
    </ToolLayout>
  )
}
