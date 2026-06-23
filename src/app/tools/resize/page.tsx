import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import ResizeClient from './resize-client'

const tool = tools.find((t) => t.id === 'resize')!

export const metadata: Metadata = getToolMetadata('resize')

export default function ResizePage() {
  return (
    <ToolLayout
      tool={tool}
      faq={[
        {
          question: 'How do I resize an image?',
          answer:
            'Upload your image, enter the desired width and height in pixels, and click "Resize Image". You can lock the aspect ratio to prevent distortion, or unlock it to stretch the image to exact dimensions.',
        },
        {
          question: 'What is the difference between "Crop to fill" and "Fit within"?',
          answer:
            '"Crop to fill" scales the image to completely fill the target dimensions, cropping any overflow. "Fit within" scales the image to fit entirely within the target dimensions, adding white padding if the aspect ratio differs.',
        },
        {
          question: 'Is my image uploaded to a server?',
          answer:
            'No. All processing happens entirely in your browser using the HTML5 Canvas API. Your images never leave your device, making this 100% private and secure.',
        },
        {
          question: 'What image formats are supported?',
          answer:
            'You can upload any browser-supported image format including JPEG, PNG, GIF, WebP, BMP, and SVG. The output is downloaded as PNG to preserve quality.',
        },
        {
          question: 'What are the common social media image sizes?',
          answer:
            'Square (1080x1080) works for Instagram posts, Twitter (1200x675) for Twitter cards, Facebook (1200x630) for link previews, and YouTube Thumbnails (1280x720). Use the quick presets for one-click sizing.',
        },
      ]}
    >
      <ResizeClient />
    </ToolLayout>
  )
}
