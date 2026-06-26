---
name: picfix-blog
description: Use when the user asks to write, create, or add a blog article for picfix.xyz. Covers the full pipeline: writing the TSX article (first-person, with personal stories and honest PicFix critiques), taking tool page screenshots with browser-act, polishing for human tone, updating the blog index and sitemap, and verifying the build. Trigger keywords: "写 blog", "写文章", "blog article", "picfix blog".
---

# PicFix Blog 文章写作流水线

一次性完成：文章 + 截图 + 索引 + sitemap + build 验证。

## Step 0: 确认文章信息

先向用户确认：
- **slug**（url 路径，如 `compress-for-discord-emoji`）
- **标题**（H1 + meta title）
- **描述**（meta description，1-2 句）
- **主角工具 ID**（如 `compress`、`resize`，用于 CTA 按钮和底部标签）
- **关联工具 ID**（1-2 个其他工具，用于交叉链接和底部标签）
- **词数目标**：默认 1500-2000

## Step 1: 写文章 TSX

路径：`src/app/blog/<slug>/page.tsx`

### 固定结构（拷贝下文模板，填充内容）

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { siteUrl } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'TITLE_HERE',
  description: 'DESC_HERE',
  alternates: { canonical: `${siteUrl}/blog/SLUG_HERE` },
  openGraph: {
    title: 'TITLE_HERE',
    description: 'OG_DESC_HERE',
    url: `${siteUrl}/blog/SLUG_HERE`,
    type: 'article',
  },
}

export default function ComponentName() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      {/* === HEADER === */}
      <header>
        <Link href="/blog" className="text-sm text-zinc-400 hover:text-blue-600">
          ← Blog
        </Link>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          TITLE_HERE
        </h1>
        <div className="mt-3 flex items-center gap-3 text-sm text-zinc-400">
          <time dateTime="YYYY-MM-DD">Month DD, YYYY</time>
          <span>·</span>
          <span>N min read</span>
        </div>
        <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
          INTRO_PARAGRAPH_WITH_PERSONAL_HOOK
        </p>
        <img
          src="/blog/SCREENSHOT_FILE"
          alt="ALT_TEXT_DESCRIBING_SCREENSHOT"
          className="mt-6 w-full rounded-lg border border-zinc-200"
        />
      </header>

      {/* === BODY === */}
      <article className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
        {/* Section template — repeat for each major point */}
        <section>
          <h2 className="text-2xl font-semibold text-zinc-900">
            SECTION_HEADING
          </h2>
          <p className="mt-3">PARAGRAPH</p>
          {/* 内联工具链接示例： */}
          {/* <Link href="/tools/compress" className="text-blue-600 hover:underline">PicFix compressor</Link> */}
          {/* 表格、列表等用已有文章的样式 */}
        </section>

        {/* CTA section — 必须 */}
        <section className="rounded-lg border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-lg font-semibold text-blue-900">
            CTA_HEADING
          </h2>
          <p className="mt-2 text-blue-800">
            CTA_DESCRIPTION
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/tools/PRIMARY_TOOL"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              BUTTON_LABEL →
            </Link>
            <Link
              href="/tools/SECONDARY_TOOL"
              className="inline-flex items-center rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100"
            >
              SECONDARY_LABEL →
            </Link>
          </div>
        </section>
      </article>

      {/* === FOOTER: Tools mentioned === */}
      <footer className="mt-16 border-t border-zinc-200 pt-8">
        <h3 className="text-sm font-semibold text-zinc-500">Tools mentioned</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/tools/TOOL_ID"
            className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600 hover:border-blue-300 hover:text-blue-600"
          >
            TOOL_DISPLAY_NAME
          </Link>
          {/* 每个相关工具一条 */}
        </div>
      </footer>
    </div>
  )
}
```

### 内容规则

1. **第一人称**：全部用 "I"、"my"、"our tool"，不用 "we"、"the author"
2. **个人故事**：至少一个真实踩坑/失败经历作为 hook（如 "I spent 20 minutes wondering why..."）
3. **缺点直说**：PicFix 的局限性要正面承认——不支持 GIF、Canvas 编码器决定输出质量上限、对文本密集图不适合 JPEG 等
4. **数据免责**：任何对比数据（如 "80% smaller"、"quality 85"）后面加一句说明这是单次测试结果、不同图片结果不同
5. **交叉链接**：提到任何操作时，链接到对应的 `/tools/<id>` 页面
6. **不提 AI**：不用 "AI"、"artificial intelligence"、"machine learning" 等词
7. **不用 emoji**：标题和正文不要 emoji（但 Footer 中 "Tools mentioned" 标签保留已有样式）

### 可用工具引用

| id | 显示名称 | href |
|----|---------|------|
| compress | Image Compressor | /tools/compress |
| resize | Image Resizer | /tools/resize |
| convert | Image Converter | /tools/convert |
| watermark | Add Watermark | /tools/watermark |
| rotate | Rotate & Flip | /tools/rotate |
| base64 | Base64 Encode/Decode | /tools/base64 |
| round | Round Corners | /tools/round |
| blur | Blur Image | /tools/blur |
| exif | EXIF Viewer & Cleaner | /tools/exif |

## Step 2: 截图

文章需要 1 张工具页截图，嵌在 header 中。

### 2.1 创建 stealth 浏览器

```bash
browser-act browser create --name picfix-screenshots --stealth
```

### 2.2 截图

```bash
# 截取工具页全屏截图
browser-act screenshot fullpage \
  --name picfix-screenshots \
  --url https://picfix.xyz/tools/TOOL_ID \
  --output /home/los/Projects/picfix/picfix.xyz/public/blog/TOOL_ID-tool.jpg
```

### 2.3 嵌入文章

截图中 `<img>` 的 `alt` 属性要写具体：
- 好：`"PicFix free online image compressor tool interface showing quality slider and before/after preview"`
- 差：`"screenshot of compress tool"`

## Step 3: 更新索引和 sitemap

### 3.1 `src/app/blog/page.tsx`

在 `articles` 数组末尾添加新条目：

```ts
{
  slug: 'SLUG_HERE',
  title: 'FULL_TITLE_HERE',
  description: 'DESCRIPTION_HERE',
  toolId: 'PRIMARY_TOOL_ID',
  date: 'YYYY-MM',
},
```

### 3.2 `src/app/sitemap.ts`

在现有 blog 条目后添加：

```ts
{
  url: `${siteUrl}/blog/SLUG_HERE`,
  lastModified: new Date(),
  changeFrequency: 'monthly' as const,
  priority: 0.7,
},
```

## Step 4: Build 验证

```bash
cd /home/los/Projects/picfix/picfix.xyz && npm run build
```

- 确认无错误
- 确认静态页面数量增加（每篇新文章 +1 页面）
- 确认每个新 slug 都在输出中

## Step 5: 推送

```bash
cd /home/los/Projects/picfix/picfix.xyz && git add -A && git commit -m "add blog: SLUG_HERE" && git push
```

## 已有文章参考

| slug | 词数 | 主角工具 |
|------|------|---------|
| compress-for-discord-emoji | ~1800 | compress |
| webp-vs-png-vs-avif | ~2000 | convert |
| instagram-image-size-guide | ~1700 | resize |
| compress-jpeg-no-quality-loss | ~1800 | compress |
| strip-exif-data | ~1900 | exif |

## 待写文章（按优先级）

按 plan 中的 Blog 内容优先级顺序，已完成 1-5，剩余 6-10：

6. `iphone-heic-to-jpg` — "iPhone HEIC to JPG: Every Method, Ranked" (convert)
7. `watermark-photos-cant-crop` — "How to Watermark Photos That Can't Be Cropped Out" (watermark)
8. `blur-sensitive-info` — "How to Blur Sensitive Info in Screenshots: 4 Methods" (blur)
9. `perfect-round-avatars` — "Create Perfect Round Avatars for GitHub Discord Twitter" (round)
10. `youtube-thumbnail-size` — "YouTube Thumbnail Size 2026" (resize)
