export type ToolCategory = 'optimize' | 'transform' | 'convert' | 'effects' | 'metadata'

export interface Tool {
  id: string
  name: string
  description: string
  longDescription: string
  keywords: string[]
  icon: string
  category: ToolCategory
  href: string
  seo: {
    title: string
    description: string
  }
}

export const tools: Tool[] = [
  {
    id: 'compress',
    name: 'Compress Image',
    description: 'Reduce image file size without losing quality',
    longDescription:
      'Compress PNG, JPEG, WebP, and AVIF images online for free. Reduce file size while maintaining visual quality. Perfect for websites, emails, and social media. No upload needed — your images stay private on your device.',
    keywords: [
      'compress image',
      'reduce image size',
      'compress jpg',
      'compress png',
      'compress webp',
      'image optimizer',
      'reduce photo size',
    ],
    icon: '📦',
    category: 'optimize',
    href: '/tools/compress',
    seo: {
      title: 'Free Online Image Compressor — Compress PNG, JPEG, WebP | PicFix',
      description:
        'Compress images online for free. Reduce PNG, JPEG, WebP, and AVIF file sizes without uploading to a server. 100% private, works in your browser.',
    },
  },
  {
    id: 'resize',
    name: 'Resize & Crop',
    description: 'Scale images to exact dimensions or crop',
    longDescription:
      'Resize and crop images online for free. Set exact width and height, maintain aspect ratio, or crop to specific dimensions. Perfect for social media, thumbnails, and print.',
    keywords: [
      'resize image',
      'crop image',
      'resize photo',
      'scale image',
      'image dimensions',
      'resize picture',
    ],
    icon: '✂️',
    category: 'transform',
    href: '/tools/resize',
    seo: {
      title: 'Free Online Image Resizer — Resize & Crop Images | PicFix',
      description:
        'Resize and crop images online for free. Set exact dimensions, maintain aspect ratio, or crop to fit. No upload required — 100% private browser-based tool.',
    },
  },
  {
    id: 'convert',
    name: 'Format Converter',
    description: 'Convert between PNG, JPG, WebP, AVIF and more',
    longDescription:
      'Convert images between formats online for free. Supports JPEG, PNG, WebP, AVIF, GIF, and BMP. High-quality conversion with no file size limits.',
    keywords: [
      'convert image',
      'jpg to png',
      'png to jpg',
      'image converter',
      'webp converter',
      'convert picture',
    ],
    icon: '🔄',
    category: 'convert',
    href: '/tools/convert',
    seo: {
      title: 'Free Online Image Converter — Convert JPG, PNG, WebP | PicFix',
      description:
        'Convert images between formats online for free. JPG to PNG, PNG to JPG, WebP, AVIF, and more. No upload needed — private browser-based conversion.',
    },
  },
  {
    id: 'watermark',
    name: 'Add Watermark',
    description: 'Add text or image watermark to protect your work',
    longDescription:
      'Add watermarks to your images online for free. Protect your photos and designs with custom text or image watermarks. Control opacity, position, size, and rotation.',
    keywords: [
      'add watermark',
      'watermark image',
      'protect photo',
      'photo watermark',
      'text watermark',
    ],
    icon: '💧',
    category: 'effects',
    href: '/tools/watermark',
    seo: {
      title: 'Free Online Watermark Tool — Add Watermark to Images | PicFix',
      description:
        'Add text or image watermarks to protect your photos online for free. Customize opacity, position, and size. No upload needed — 100% private.',
    },
  },
  {
    id: 'rotate',
    name: 'Rotate & Flip',
    description: 'Rotate, flip horizontal or vertical',
    longDescription:
      'Rotate and flip images online for free. Rotate by 90°, 180°, or 270°, flip horizontally or vertically. Perfect for correcting photo orientation.',
    keywords: [
      'rotate image',
      'flip image',
      'rotate photo',
      'mirror image',
      'flip picture',
    ],
    icon: '🔄',
    category: 'transform',
    href: '/tools/rotate',
    seo: {
      title: 'Free Online Image Rotator — Rotate & Flip Images | PicFix',
      description:
        'Rotate and flip images online for free. Rotate by 90°, 180°, 270° or flip horizontally and vertically. No upload required — instant browser-based tool.',
    },
  },
  {
    id: 'base64',
    name: 'Base64 Encode/Decode',
    description: 'Convert images to Base64 string and back',
    longDescription:
      'Encode images to Base64 strings or decode Base64 to images online for free. Useful for embedding images in HTML, CSS, or JSON without external files.',
    keywords: [
      'base64 image',
      'image to base64',
      'base64 decoder',
      'encode image',
      'base64 converter',
    ],
    icon: '🔣',
    category: 'convert',
    href: '/tools/base64',
    seo: {
      title: 'Free Image to Base64 Converter — Encode & Decode | PicFix',
      description:
        'Convert images to Base64 strings and decode Base64 to images online for free. Perfect for embedding images in HTML, CSS, and JSON. 100% private.',
    },
  },
  {
    id: 'round',
    name: 'Round Corners',
    description: 'Apply rounded corners to images',
    longDescription:
      'Round image corners online for free. Apply smooth rounded corners with adjustable radius. Create circular images or soft-edged thumbnails. Perfect for avatars, badges, and UI elements.',
    keywords: [
      'round corners image',
      'rounded corners',
      'circle image',
      'round photo',
      'image border radius',
    ],
    icon: '⬜',
    category: 'effects',
    href: '/tools/round',
    seo: {
      title: 'Free Online Image Corner Rounder — Round Images | PicFix',
      description:
        'Round image corners online for free. Adjustable radius, circular crop, and smooth edges. No upload needed — 100% private browser-based tool.',
    },
  },
  {
    id: 'blur',
    name: 'Blur Image',
    description: 'Apply blur effect to images',
    longDescription:
      'Blur images online for free. Apply adjustable Gaussian blur to entire images or specific areas. Great for backgrounds, censoring sensitive content, or creative effects.',
    keywords: [
      'blur image',
      'blur photo',
      'gaussian blur',
      'blur background',
      'blur effect',
    ],
    icon: '🌫️',
    category: 'effects',
    href: '/tools/blur',
    seo: {
      title: 'Free Online Image Blur Tool — Blur Photos & Images | PicFix',
      description:
        'Blur images and photos online for free. Adjustable Gaussian blur effect. Perfect for backgrounds, censoring, or creative effects. No upload needed.',
    },
  },
  {
    id: 'exif',
    name: 'EXIF Viewer & Cleaner',
    description: 'View and remove photo metadata, GPS, camera info',
    longDescription:
      'View and remove EXIF metadata from your photos online for free. See camera settings, GPS location, date taken, and more. Strip all private data before sharing images online. 100% private — no upload needed.',
    keywords: [
      'exif viewer',
      'exif remover',
      'remove metadata',
      'exif data',
      'photo metadata',
      'remove gps from photo',
      'exif cleaner',
    ],
    icon: '📋',
    category: 'metadata',
    href: '/tools/exif',
    seo: {
      title: 'Free Online EXIF Viewer & Metadata Remover | PicFix',
      description:
        'View and remove EXIF metadata from photos online for free. See camera info, GPS location, dates. Strip private data before sharing. 100% private browser-based tool.',
    },
  },
]

export function getTool(id: string): Tool | undefined {
  return tools.find((t) => t.id === id)
}

export function getToolByHref(href: string): Tool | undefined {
  return tools.find((t) => t.href === href)
}

export const categories: { key: ToolCategory; label: string }[] = [
  { key: 'optimize', label: 'Optimize' },
  { key: 'transform', label: 'Transform' },
  { key: 'convert', label: 'Convert' },
  { key: 'effects', label: 'Effects' },
  { key: 'metadata', label: 'Metadata' },
]
