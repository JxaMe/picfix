import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import CompressClient from './compress-client'

const tool = tools.find((t) => t.id === 'compress')!

export const metadata: Metadata = getToolMetadata('compress')

export default function CompressPage() {
  return (
    <ToolLayout
      tool={tool}
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
