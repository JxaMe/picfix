import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import WatermarkClient from './watermark-client'

const tool = tools.find((t) => t.id === 'watermark')!

export const metadata: Metadata = getToolMetadata('watermark')

export default function WatermarkPage() {
  return (
    <ToolLayout
      tool={tool}
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
