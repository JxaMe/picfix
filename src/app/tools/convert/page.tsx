import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import ConvertClient from './convert-client'

const tool = tools.find((t) => t.id === 'convert')!

export const metadata: Metadata = getToolMetadata('convert')

export default function ConvertPage() {
  return (
    <ToolLayout
      tool={tool}
      faq={[
        {
          question: 'What image formats are supported for conversion?',
          answer:
            'PicFix supports conversion between PNG, JPEG, WebP, AVIF, GIF, and BMP. Simply upload your image and select the target format. AVIF requires a browser that supports it (Chrome, Firefox, and Edge do).',
        },
        {
          question: 'Which format should I choose?',
          answer:
            'WebP offers the best balance of quality and file size for web use. JPEG is widely compatible but lossy. PNG is lossless and supports transparency. AVIF provides the smallest files but has limited browser support. BMP and GIF are supported for legacy compatibility.',
        },
        {
          question: 'Is my image uploaded to a server?',
          answer:
            'No. All conversion happens entirely in your browser using the HTML5 Canvas API. Your images never leave your device, making this 100% private and secure.',
        },
        {
          question: 'Does conversion reduce image quality?',
          answer:
            'For lossy formats (JPEG, WebP, AVIF), you can adjust the quality slider. PNG and BMP are lossless. GIF is lossless for indexed images but limited to 256 colors.',
        },
        {
          question: 'What is the maximum file size?',
          answer:
            'There is no hard limit, but very large images may slow down your browser. For the best experience, we recommend images under 50MB. Since everything runs locally, performance depends on your device.',
        },
      ]}
    >
      <ConvertClient />
    </ToolLayout>
  )
}
