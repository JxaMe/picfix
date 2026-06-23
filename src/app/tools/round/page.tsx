import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import RoundClient from './round-client'
import type { UseCase, RelatedTool } from '@/components/ToolLayout'

const tool = tools.find((t) => t.id === 'round')!

const useCases: UseCase[] = [
  {
    title: 'GitHub / GitLab Avatar — Perfect Circle',
    description: 'Both platforms display avatars as circles. Resize to 256×256 first, then apply full radius rounded corners for a clean circle that works on both light and dark mode backgrounds.',
    link: { id: 'resize', text: 'Resize to 256×256' },
  },
  {
    title: 'Discord Server Icon — Full Radius',
    description: 'Discord icons are round on desktop and mobile. Start with an image slightly larger than 128×128, apply full-radius rounding, then resize to exact 128×128 for the sharpest result.',
    link: { id: 'resize', text: 'Resize to 128×128' },
  },
  {
    title: 'Blog Post Thumbnails — Soft Corners (4–8px)',
    description: 'A small 4-8px radius on blog thumbnails creates a softer, more polished look than sharp 90° corners. Popular on Medium, Substack, and modern design blogs.',
  },
  {
    title: 'Photography Portfolio — Keep Sharp Edges',
    description: 'Most photography portfolios use 0px radius — sharp edges frame the photograph cleanly. Rounding is for UI elements, not fine art. Skip this tool if you are posting to 500px or Flickr.',
  },
]

const relatedTools: RelatedTool[] = [
  { id: 'resize', reason: 'Resize to target dimensions before rounding' },
  { id: 'compress', reason: 'Compress rondel avatars for faster loading' },
]

export const metadata: Metadata = getToolMetadata('round')

export default function RoundPage() {
  return (
    <ToolLayout
      tool={tool}
      useCases={useCases}
      relatedTools={relatedTools}
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
