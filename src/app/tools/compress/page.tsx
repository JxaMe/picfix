import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import type { UseCase, RelatedTool } from '@/components/ToolLayout'
import CompressClient from './compress-client'

const tool = tools.find((t) => t.id === 'compress')!

const useCases: UseCase[] = [
  {
    title: 'Discord Emoji — Under 256KB',
    description:
      'Discord requires emoji files under 256KB. Resize to 128×128 first, then compress to JPEG quality 75-80%. For animated emoji, use GIF at 128×128.',
    link: { id: 'resize', text: 'Resize first' },
  },
  {
    title: 'Etsy Listing Photos — Under 1MB',
    description:
      'Etsy recommends images under 1MB for fast loading on mobile. Compress JPEG to quality 70-75% at 2700×2025. Product photos stay sharp while pages load faster.',
  },
  {
    title: 'Email Attachments — Under 5MB',
    description:
      'Most email providers cap attachments at 20-25MB total per message. Compress photos to JPEG quality 60-70% for sharing via email. Avoid WebP — many email clients do not render it.',
  },
  {
    title: 'Web Performance — Target Under 100KB',
    description:
      'For website images, aim for under 100KB per photo. Convert to WebP at quality 80% for 60-80% savings versus JPEG. Use responsive images with multiple sizes for each breakpoint.',
    link: { id: 'convert', text: 'Convert to WebP' },
  },
  {
    title: 'Social Media Uploads — Platform Limits',
    description:
      'Each platform compresses uploads differently — send the sharpest version you can. Twitter accepts up to 5MB, Instagram up to 8MB, Facebook up to 15MB. JPEG quality 85-92% is safe for all.',
  },
]

const relatedTools: RelatedTool[] = [
  { id: 'resize', reason: 'Resize to exact dimensions before compressing' },
  { id: 'convert', reason: 'Convert to WebP or AVIF for even smaller files' },
  { id: 'exif', reason: 'Strip metadata before sharing to save extra bytes' },
]

export const metadata: Metadata = getToolMetadata('compress')

export default function CompressPage() {
  return (
    <ToolLayout
      tool={tool}
      useCases={useCases}
      relatedTools={relatedTools}
      faq={[
        {
          question: 'How does image compression work?',
          answer:
            'PicFix uses the browser\'s Canvas API to re-encode your image with optimized settings. For JPEG and WebP, you can adjust the quality slider to find the perfect balance between file size and visual quality. PNG compression is lossless but we recommend WebP for the best size-to-quality ratio.',
        },
        {
          question: 'Is my image uploaded to a server?',
          answer:
            'No. All processing happens entirely in your browser using the HTML5 Canvas API. Your images never leave your device, making this 100% private and secure.',
        },
        {
          question: 'What image formats are supported?',
          answer:
            'PicFix supports JPEG, PNG, WebP, and AVIF (browser permitting) for both input and output. Input files can be any browser-supported image format including JPEG, PNG, GIF, WebP, BMP, and SVG.',
        },
        {
          question: 'What is the maximum file size?',
          answer:
            'There is no hard limit, but very large images may slow down your browser. For the best experience, we recommend images under 50MB. Since everything runs locally, performance depends on your device\'s memory and processing power.',
        },
        {
          question: 'Which format gives the smallest file size?',
          answer:
            'AVIF typically produces the smallest files, followed by WebP, then JPEG. PNG is lossless and generally produces larger files. We recommend WebP for most use cases as it offers excellent compression with wide browser support.',
        },
      ]}
    >
      <CompressClient />
    </ToolLayout>
  )
}
