import type { MetadataRoute } from 'next'
import { tools } from '@/lib/tools'
import { siteUrl } from '@/lib/seo'

const blogSlugs = [
  'compress-for-discord-emoji',
  'webp-vs-png-vs-avif',
  'instagram-image-size-guide',
  'compress-jpeg-no-quality-loss',
  'strip-exif-data',
  'iphone-heic-to-jpg',
  'watermark-photos-cant-crop',
  'blur-sensitive-info',
  'perfect-round-avatars',
  'youtube-thumbnail-size',
  'rotate-image-online',
  'image-to-base64',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const toolPages = tools.map((tool) => ({
    url: `${siteUrl}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...toolPages,
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    ...blogPages,
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ]
}
