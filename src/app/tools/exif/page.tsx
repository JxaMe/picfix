import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import ExifClient from './exif-client'
import type { UseCase, RelatedTool } from '@/components/ToolLayout'

const tool = tools.find((t) => t.id === 'exif')!

const useCases: UseCase[] = [
  {
    title: 'Strip GPS Before Sharing Photos',
    description: 'Every smartphone photo includes GPS coordinates in EXIF data. Before posting to social media or forums, strip location data to protect your home address, workplace, and daily routes.',
    link: { id: 'blur', text: 'Also blur identifiable faces' },
  },
  {
    title: 'Check Shutter Count — Buying Used Cameras',
    description: 'Shutter count in EXIF reveals how heavily a camera has been used — similar to mileage on a car. A count far above the rated lifespan means the shutter may fail soon.',
  },
  {
    title: 'Remove Date and Time — Avoid Doxxing',
    description: 'EXIF timestamps can reveal your timezone, daily schedule, and when you are away from home. Strip dates before posting photos taken at home or during vacations.',
  },
  {
    title: 'View Camera Settings — Learn From Pros',
    description: 'Study focal length, aperture, ISO, and shutter speed from photos you admire. EXIF reveals exactly how a shot was captured — the fastest way to improve your own photography.',
  },
  {
    title: 'Verify Image Authenticity',
    description: 'Check if EXIF shows editing software (Photoshop, Lightroom) and modification dates. An image claiming to be "straight from camera" should show no software tags in metadata.',
  },
]

const relatedTools: RelatedTool[] = [
  { id: 'blur', reason: 'Blur visible identifiers before sharing photos' },
  { id: 'compress', reason: 'Compress after stripping metadata for sharing' },
  { id: 'convert', reason: 'Conversion may add or drop metadata — verify after' },
]

export const metadata: Metadata = getToolMetadata('exif')

export default function ExifPage() {
  return (
    <ToolLayout
      tool={tool}
      useCases={useCases}
      relatedTools={relatedTools}
      faq={[
        {
          question: 'What is EXIF data?',
          answer:
            'EXIF (Exchangeable Image File Format) data is metadata embedded in photos by cameras and smartphones. It includes information like camera model, date taken, GPS location, ISO, aperture, shutter speed, and more.',
        },
        {
          question: 'Why should I remove EXIF data?',
          answer:
            'EXIF data can reveal private information like your exact GPS location, camera serial number, and when the photo was taken. Removing it protects your privacy before sharing images online.',
        },
        {
          question: 'Does EXIF stripping reduce image quality?',
          answer:
            'PicFix re-encodes the image at 95% JPEG quality to strip EXIF data. This results in virtually indistinguishable quality while removing all metadata. The file size may also decrease slightly.',
        },
        {
          question: 'What image formats contain EXIF?',
          answer:
            'EXIF is primarily found in JPEG and TIFF files. PNG and WebP files generally do not contain EXIF data. If you upload a non-JPEG file, the tool will tell you no EXIF data was found.',
        },
        {
          question: 'Is my image uploaded to a server?',
          answer:
            'No. All EXIF reading and removal happens entirely in your browser. Your images and their metadata never leave your device.',
        },
      ]}
    >
      <ExifClient />
    </ToolLayout>
  )
}
