import type { Metadata } from 'next'
import { tools } from './tools'

const siteUrl = 'https://picfix.xyz'
const siteName = 'PicFix'
const siteDescription = 'Free online image processing tools. Compress, resize, convert, and edit images directly in your browser — no uploads, 100% private.'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PicFix — Free Online Image Processing Tools',
    template: '%s | PicFix',
  },
  description: siteDescription,
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    siteName,
    title: 'PicFix — Free Online Image Processing Tools',
    description: siteDescription,
    url: siteUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PicFix — Free Online Image Processing Tools',
    description: siteDescription,
  },
}

export function getToolMetadata(toolId: string): Metadata {
  const tool = tools.find((t) => t.id === toolId)
  if (!tool) return {}

  return {
    title: tool.seo.title.replace(` | PicFix`, ''),
    description: tool.seo.description,
    openGraph: {
      title: tool.seo.title,
      description: tool.seo.description,
      url: `${siteUrl}${tool.href}`,
    },
    twitter: {
      title: tool.seo.title,
      description: tool.seo.description,
    },
  }
}

export function getToolJsonLd(toolId: string) {
  const tool = tools.find((t) => t.id === toolId)
  if (!tool) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    url: `${siteUrl}${tool.href}`,
    description: tool.seo.description,
    applicationCategory: 'Multimedia',
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  }
}

export function getBreadcrumbJsonLd(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  }
}

export { siteUrl, siteName }
