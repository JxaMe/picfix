import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import BlurClient from './blur-client'

const tool = tools.find((t) => t.id === 'blur')!

export const metadata: Metadata = getToolMetadata('blur')

export default function BlurPage() {
  return (
    <ToolLayout
      tool={tool}
      faq={[
        {
          question: 'What type of blur is applied?',
          answer:
            'PicFix applies a Gaussian blur effect using the browser\'s built-in Canvas filter. The blur radius controls the intensity — higher values create a stronger, smoother blur effect.',
        },
        {
          question: 'Can I blur only a part of the image?',
          answer:
            'Currently PicFix applies blur to the entire image. For selective or area-specific blurring, you may need a desktop image editor. We may add area-specific blur in a future update.',
        },
        {
          question: 'What are common uses for image blur?',
          answer:
            'Common uses include blurring backgrounds to make text readable, censoring sensitive information (faces, license plates, personal data), creating depth-of-field effects, and adding privacy protection to shared images.',
        },
        {
          question: 'Is my image uploaded to a server?',
          answer:
            'No. All processing happens entirely in your browser using the HTML5 Canvas API. Your images never leave your device, making this 100% private and secure.',
        },
      ]}
    >
      <BlurClient />
    </ToolLayout>
  )
}
