import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import ConvertClient from './convert-client'
import type { UseCase, RelatedTool } from '@/components/ToolLayout'

const tool = tools.find((t) => t.id === 'convert')!

const useCases: UseCase[] = [
  {
    title: 'WebP to JPG — For Older Apps',
    description: 'Many older apps, email clients, and CMS platforms still do not support WebP. Convert to JPG at quality 90% for near-lossless compatibility with any software.',
  },
  {
    title: 'iPhone HEIC to PNG — For Windows',
    description: 'Windows does not natively open iPhone HEIC photos. Convert to PNG for lossless quality or JPEG for smaller files. Batch convert multiple vacation photos in seconds.',
  },
  {
    title: 'PNG to WebP — Save 60–80% Storage',
    description: 'WebP typically reduces PNG file size by 60-80% with minimal quality loss. Ideal for websites where every kilobyte affects load time and Core Web Vitals scores.',
    link: { id: 'compress', text: 'Fine-tune compression' },
  },
  {
    title: 'JPG to AVIF — Maximum Compression',
    description: 'AVIF offers the best compression ratio available today — often 50% smaller than WebP. Check browser support first: Chrome and Firefox support it, Safari added support in 2024.',
  },
  {
    title: 'SVG to PNG — For Thumbnails',
    description: 'SVG icons are sharp at any size but most platforms require PNG for thumbnails and previews. Convert at 2x the display size for retina screens — e.g. 512px for a 256px slot.',
  },
]

const relatedTools: RelatedTool[] = [
  { id: 'compress', reason: 'Compress the converted file for web use' },
  { id: 'resize', reason: 'Resize after converting if dimensions changed' },
  { id: 'exif', reason: 'Conversion may preserve metadata — strip if needed' },
]

export const metadata: Metadata = getToolMetadata('convert')

export default function ConvertPage() {
  return (
    <ToolLayout
      tool={tool}
      useCases={useCases}
      relatedTools={relatedTools}
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
