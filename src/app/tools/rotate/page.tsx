import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import RotateClient from './rotate-client'

const tool = tools.find((t) => t.id === 'rotate')!

export const metadata: Metadata = getToolMetadata('rotate')

export default function RotatePage() {
  return (
    <ToolLayout
      tool={tool}
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
