import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import WatermarkClient from './watermark-client'
import type { UseCase, RelatedTool } from '@/components/ToolLayout'

const tool = tools.find((t) => t.id === 'watermark')!

const useCases: UseCase[] = [
  {
    title: 'Photographer Portfolio — Logo Watermark',
    description: 'Place a small logo PNG at bottom-right with 10-15% opacity. Too large or too opaque distracts from the photo. Position: 20px margin from both bottom and right edges.',
  },
  {
    title: 'E-commerce Product Images — Text Watermark',
    description: 'Add text watermarks across product images at 15% opacity to prevent scraping. Center placement with light opacity is visible enough to deter theft without ruining the product view.',
    link: { id: 'resize', text: 'Resize product photos first' },
  },
  {
    title: 'Client Proof Images — Prominent Watermark',
    description: 'For client proofs, use text "DRAFT" or "PROOF" centered at 30-40% opacity. Large enough to prevent use, transparent enough to let the client evaluate the work.',
  },
  {
    title: 'Social Media Branding — Subtle Corner Mark',
    description: 'Brand logo at bottom-left, 10% opacity. Visible when looking for it but not the first thing viewers notice. Consistency in placement and size builds brand recognition over time.',
  },
]

const relatedTools: RelatedTool[] = [
  { id: 'resize', reason: 'Size images to platform dimensions before watermarking' },
  { id: 'convert', reason: 'Change format after adding watermark if needed' },
  { id: 'exif', reason: 'Watermark does not remove hidden metadata — strip EXIF too' },
]

export const metadata: Metadata = getToolMetadata('watermark')

export default function WatermarkPage() {
  return (
    <ToolLayout
      tool={tool}
      useCases={useCases}
      relatedTools={relatedTools}
      faq={[
        {
          question: 'Can I use an image as a watermark?',
          answer:
            'Currently PicFix supports text watermarks only. You can customize the text, position, opacity, and font size. Image watermark support is coming soon.',
        },
        {
          question: 'Is my image uploaded to a server?',
          answer:
            'No. All processing happens entirely in your browser using the HTML5 Canvas API. Your images never leave your device, making this 100% private and secure.',
        },
        {
          question: 'Can I adjust the watermark position?',
          answer:
            'Yes. You can place the watermark in any corner (top-left, top-right, bottom-left, bottom-right) or centered on the image. Each position uses a 24px padding from the edge.',
        },
        {
          question: 'What file format is the output?',
          answer:
            'The output is downloaded as PNG to preserve transparency and quality. If you need a different format, use our Format Converter tool after adding the watermark.',
        },
      ]}
    >
      <WatermarkClient />
    </ToolLayout>
  )
}
