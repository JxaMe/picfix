import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import ResizeClient from './resize-client'
import type { UseCase, RelatedTool } from '@/components/ToolLayout'

const tool = tools.find((t) => t.id === 'resize')!

const useCases: UseCase[] = [
  {
    title: 'Instagram Post — 1080×1080',
    description: 'Square posts display at 1080×1080 pixels. Your photo may crop if wider than 1:1 — resize first, then upload. Instagram compresses heavily, so start with the highest quality source.',
  },
  {
    title: 'Twitter/X Header — 1500×500',
    description: 'Twitter header images are 1500×500 with a 3:1 aspect ratio. The center 600px vertically is obscured by your profile photo. Keep key content in the outer thirds.',
  },
  {
    title: 'YouTube Thumbnail — 1280×720',
    description: 'YouTube thumbnails are 1280×720 (16:9) and under 2MB. A well-sized thumbnail gets 30% more clicks. Use bold text and faces for best CTR.',
  },
  {
    title: 'Discord Server Icon — 128×128',
    description: 'Server icons display at 128×128. After resizing, apply rounded corners for a clean look on both desktop and mobile.',
    link: { id: 'round', text: 'Round the corners' },
  },
  {
    title: 'Etsy Listing — 2700×2025',
    description: 'Etsy recommends 2700×2025 for the 4:3 aspect ratio. After resizing, compress to under 1MB for fast loading.',
    link: { id: 'compress', text: 'Compress after resizing' },
  },
]

const relatedTools: RelatedTool[] = [
  { id: 'compress', reason: 'Compress resized photos for faster loading' },
  { id: 'round', reason: 'Round corners for avatars and profile pictures' },
  { id: 'convert', reason: 'Change format after resizing if needed' },
]

export const metadata: Metadata = getToolMetadata('resize')

export default function ResizePage() {
  return (
    <ToolLayout
      tool={tool}
      useCases={useCases}
      relatedTools={relatedTools}
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
