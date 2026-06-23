import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import BlurClient from './blur-client'
import type { UseCase, RelatedTool } from '@/components/ToolLayout'

const tool = tools.find((t) => t.id === 'blur')!

const useCases: UseCase[] = [
  {
    title: 'Censor Personal Info in Screenshots',
    description: 'Gaussian blur with radius 10-20px effectively hides text, email addresses, and API keys in screenshots. Do not use a black bar — it can be partially reversed with contrast adjustment.',
  },
  {
    title: 'Blur Faces Before Posting — Especially Children',
    description: 'Before sharing group photos publicly, blur faces of people who did not consent to be posted. Radius 15-25px at full strength makes identification impossible while keeping the scene context.',
    link: { id: 'exif', text: 'Also remove EXIF location data' },
  },
  {
    title: 'Blur License Plates — Before Listing Cars',
    description: 'When selling a car online, blur the license plate to prevent plate cloning and identity theft. Use radius 12-18px centered directly over the plate area.',
  },
  {
    title: 'Background Blur — Portrait Mode Effect',
    description: 'Selectively blur the background around a subject to create a shallow depth-of-field portrait effect without an expensive lens. Works best with a clear separation between subject and background.',
  },
]

const relatedTools: RelatedTool[] = [
  { id: 'exif', reason: 'Blur hides visual data — strip EXIF to hide metadata too' },
  { id: 'compress', reason: 'Compress blurred images before sharing' },
]

export const metadata: Metadata = getToolMetadata('blur')

export default function BlurPage() {
  return (
    <ToolLayout
      tool={tool}
      useCases={useCases}
      relatedTools={relatedTools}
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
