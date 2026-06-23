import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import RotateClient from './rotate-client'
import type { UseCase, RelatedTool } from '@/components/ToolLayout'

const tool = tools.find((t) => t.id === 'rotate')!

const useCases: UseCase[] = [
  {
    title: 'iPhone Photos — Fix Wrong Orientation',
    description: 'iPhone photos sometimes appear sideways when transferred to Windows or uploaded. Rotate 90° left or right to fix. Most iPhones store orientation in EXIF — this tool applies the physical rotation.',
  },
  {
    title: 'Scanned Documents — Straighten Pages',
    description: 'Scanned documents often come in slightly tilted. Rotate to bring text upright. For severe skew, rotate first, then crop to trim crooked edges.',
    link: { id: 'resize', text: 'Crop after rotating' },
  },
  {
    title: 'Instagram Carousel — Match Orientation',
    description: 'Carousel posts require all images to be the same orientation. Rotate landscape shots to portrait, or vice versa, before uploading. Consistency looks more professional.',
  },
]

const relatedTools: RelatedTool[] = [
  { id: 'resize', reason: 'Crop or resize after rotating to desired angle' },
  { id: 'compress', reason: 'Compress rotated photos before sharing' },
  { id: 'exif', reason: 'Rotation may update orientation EXIF — verify metadata' },
]

export const metadata: Metadata = getToolMetadata('rotate')

export default function RotatePage() {
  return (
    <ToolLayout
      tool={tool}
      useCases={useCases}
      relatedTools={relatedTools}
      faq={[
        {
          question: 'Can I rotate by custom angles?',
          answer:
            'Currently PicFix supports 90°, 180°, and 270° rotations. For precise custom angles, we recommend using a desktop image editor. We may add custom angle support in the future.',
        },
        {
          question: 'What is the difference between flip and rotate?',
          answer:
            'Rotation turns the image around its center (like turning a book). Flipping creates a mirror image — horizontal flip reverses left and right, vertical flip reverses top and bottom.',
        },
        {
          question: 'Will I lose quality when rotating?',
          answer:
            'Since all processing happens in your browser using Canvas API, 90° and 180° rotations are lossless. Non-right-angle rotations are not currently supported to maintain quality.',
        },
        {
          question: 'Is my image uploaded to a server?',
          answer:
            'No. All processing happens entirely in your browser. Your images never leave your device.',
        },
      ]}
    >
      <RotateClient />
    </ToolLayout>
  )
}
