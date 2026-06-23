import { siteName } from '@/lib/seo'

export const metadata = {
  title: `Blog — ${siteName}`,
  description: 'Guides, comparisons, and how-tos for image tools. Learn to compress, resize, convert, and optimize images for every platform.',
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
