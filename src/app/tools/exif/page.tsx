import type { Metadata } from 'next'
import { getToolMetadata } from '@/lib/seo'
import { tools } from '@/lib/tools'
import ToolLayout from '@/components/ToolLayout'
import ExifClient from './exif-client'

const tool = tools.find((t) => t.id === 'exif')!

export const metadata: Metadata = getToolMetadata('exif')

export default function ExifPage() {
  return (
    <ToolLayout
      tool={tool}
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
