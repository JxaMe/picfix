# AGENTS.md — PicFix

## 命令

```bash
npm run dev       # 开发服务器 localhost:3000
npm run build     # SSG 构建（输出纯静态页面）
npm run lint      # ESLint
npm run start     # 生产服务器
```

## 架构

- **Next.js 16 App Router**（仅 SSG）+ **Tailwind CSS v4** + **React 19**
- **无后端 / 无 API 路由 / 无数据库** — 全部静态页面，图片处理 100% 在浏览器通过 Canvas API 完成
- `@/*` → `./src/*`（见 `tsconfig.json` paths）

## 新增工具

三文件模式，参照已有工具复制改即可：

1. **`src/lib/tools.ts`** — 在 `tools` 数组中新增 `Tool` 对象
2. **`src/app/tools/<id>/page.tsx`** — 服务端组件，metadata + `<ToolLayout tool={tool} faq={...}><XxxClient /></ToolLayout>`
3. **`src/app/tools/<id>/<id>-client.tsx`** — `'use client'` 组件，包含 Canvas/FileReader 处理逻辑

所有客户端组件共享相同的状态/样板：drop zone、文件校验、canvas ref、错误处理、结果下载。直接复制最近的工具改。

## 关键约定

- **所有图片处理逻辑在 `*-client.tsx` 中**，Canvas 方法内联（无共享的 `processImage()` 工具函数）
- **`src/lib/utils.ts`** 只有 3 个辅助函数：`formatFileSize`、`readFileAsDataURL`、`loadImage`
- **`CompareSlider`**（`src/components/CompareSlider.tsx`）用于展示前后对比。只在有**视觉变化可对比**的工具中加它。**不要加到 base64**（输出是文本）和 **exif**（元数据清理前后图像像素完全一样）
- **EXIF 解析**在 `exif-client.tsx` 中是手写的 DataView 解析，不是用 `exifr`（虽然包已安装）
- **`src/lib/seo.ts`** 处理所有 SEO/元数据/JSON-LD — 新工具用 `getToolMetadata(id)` 和 `getToolJsonLd(id)`

## Tailwind CSS v4 注意事项

- 入口：`@import "tailwindcss"`（**不是**旧的 `@tailwind` 指令）
- PostCSS 插件：`@tailwindcss/postcss`
- 自定义主题：`globals.css` 中用 `@theme inline { ... }`
- 主要色系：zinc 为主，辅以 blue-600/700、green-50/100/700、red-50/200/700
- 字体：Geist Sans + Geist Mono，通过 `next/font/google` 加载

## 限制

- 所有工具输入**限制 100MB**，客户端校验
- `.codegraph/` 索引可用，查代码优先用 CodeGraph
