'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { formatFileSize, readFileAsDataURL, loadImage } from '@/lib/utils'
import CompareSlider from '@/components/CompareSlider'

interface FormatOption {
  mime: string
  ext: string
  label: string
  lossy: boolean
}

const formats: Record<string, FormatOption> = {
  png: { mime: 'image/png', ext: 'png', label: 'PNG', lossy: false },
  jpeg: { mime: 'image/jpeg', ext: 'jpg', label: 'JPEG', lossy: true },
  webp: { mime: 'image/webp', ext: 'webp', label: 'WebP', lossy: true },
  avif: { mime: 'image/avif', ext: 'avif', label: 'AVIF', lossy: true },
  gif: { mime: 'image/gif', ext: 'gif', label: 'GIF', lossy: false },
  bmp: { mime: 'image/bmp', ext: 'bmp', label: 'BMP', lossy: false },
}

export default function ConvertClient() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [originalSize, setOriginalSize] = useState(0)
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 })
  const [originalFormat, setOriginalFormat] = useState('')
  const [targetFormat, setTargetFormat] = useState('webp')
  const [quality, setQuality] = useState(80)
  const [result, setResult] = useState<{ url: string; size: number; format: string } | null>(null)
  const [converting, setConverting] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [avifSupported, setAvifSupported] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const c = document.createElement('canvas')
    c.width = 1
    c.height = 1
    const ctx = c.getContext('2d')
    if (!ctx) return
    ctx.fillRect(0, 0, 1, 1)
    c.toBlob((b) => {
      if (b) setAvifSupported(true)
    }, 'image/avif')
  }, [])

  const handleFile = useCallback(async (f: File) => {
    setError(null)
    setResult(null)

    if (!f.type.startsWith('image/')) {
      setError('Please select an image file.')
      return
    }

    if (f.size > 100 * 1024 * 1024) {
      setError('File is too large. Please choose an image under 100MB.')
      return
    }

    setFile(f)
    setOriginalSize(f.size)

    const detected = Object.entries(formats).find(([, fmt]) => fmt.mime === f.type)
    setOriginalFormat(detected?.[0].toUpperCase() ?? f.type.split('/')[1].toUpperCase())

    try {
      const dataUrl = await readFileAsDataURL(f)
      setPreview(dataUrl)
      const img = await loadImage(dataUrl)
      setDimensions({ w: img.naturalWidth, h: img.naturalHeight })
    } catch {
      setError('Failed to read the image file.')
    }
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    const f = e.dataTransfer.files[0]
    if (f) handleFile(f)
  }, [handleFile])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) handleFile(f)
  }, [handleFile])

  const convert = useCallback(async () => {
    if (!preview) return
    setConverting(true)
    setError(null)

    try {
      const img = await loadImage(preview)
      const canvas = canvasRef.current!
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)

      const fmt = formats[targetFormat]
      const mime = fmt.mime

      canvas.toBlob(
        (blob) => {
          if (blob) {
            setResult({
              url: URL.createObjectURL(blob),
              size: blob.size,
              format: fmt.label,
            })
          } else {
            setError(`Conversion to ${fmt.label} failed. This format may not be supported by your browser.`)
          }
          setConverting(false)
        },
        mime,
        fmt.lossy ? quality / 100 : undefined
      )
    } catch {
      setError('An error occurred during conversion.')
      setConverting(false)
    }
  }, [preview, targetFormat, quality])

  const ratio = originalSize && result ? ((1 - result.size / originalSize) * 100).toFixed(1) : null
  const selectedFormat = formats[targetFormat]
  const availableFormats = Object.entries(formats)
    .filter(([key]) => key !== 'avif' || avifSupported)
    .filter(([key]) => key !== originalFormat.toLowerCase())

  return (
    <div className="space-y-6">
      <canvas ref={canvasRef} className="hidden" />

      {!file && (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 transition-colors ${
            dragOver
              ? 'border-blue-400 bg-blue-50'
              : 'border-zinc-300 bg-white hover:border-zinc-400'
          }`}
        >
          <svg className="mb-3 h-10 w-10 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
          </svg>
          <p className="text-sm font-medium text-zinc-700">
            Drop an image here or click to browse
          </p>
          <p className="mt-1 text-xs text-zinc-400">
            PNG, JPEG, WebP, GIF, BMP, SVG — up to 100MB
          </p>
          <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
        </div>
      )}

      {file && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-zinc-900">{file.name}</p>
              <p className="text-xs text-zinc-400">
                {originalFormat} &middot; {dimensions.w}&times;{dimensions.h} &middot; {formatFileSize(originalSize)}
              </p>
            </div>
            <button
              onClick={() => { setFile(null); setPreview(null); setResult(null); setError(null) }}
              className="ml-4 shrink-0 text-sm text-zinc-400 hover:text-zinc-700"
            >
              Remove
            </button>
          </div>
          {preview && (
            <div className="mt-3 flex gap-3 overflow-hidden">
              <img src={preview} alt="Original" className="h-20 w-20 rounded-lg border border-zinc-200 object-cover" />
              {result && (
                <img src={result.url} alt="Converted" className="h-20 w-20 rounded-lg border border-zinc-200 object-cover" />
              )}
            </div>
          )}
        </div>
      )}

      {file && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-zinc-700">
              Convert to
            </label>
            <div className="flex flex-wrap gap-2">
              {availableFormats.map(([key, fmt]) => (
                <button
                  key={key}
                  onClick={() => setTargetFormat(key)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    targetFormat === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  {fmt.label}
                </button>
              ))}
            </div>
          </div>

          {selectedFormat.lossy && (
            <div className="mb-4">
              <label className="mb-1.5 flex items-center justify-between text-sm font-medium text-zinc-700">
                <span>Quality: {quality}%</span>
                <span className="text-xs text-zinc-400">
                  {quality >= 90 ? 'High' : quality >= 60 ? 'Balanced' : 'Smaller file'}
                </span>
              </label>
              <input
                type="range"
                min={10}
                max={100}
                step={1}
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200 accent-blue-600"
              />
              <div className="mt-1 flex justify-between text-xs text-zinc-400">
                <span>Smaller</span>
                <span>Better quality</span>
              </div>
            </div>
          )}

          <button
            onClick={convert}
            disabled={converting}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {converting ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Converting...
              </>
            ) : (
              `Convert to ${selectedFormat.label}`
            )}
          </button>
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      {result && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <h2 className="mb-3 text-sm font-semibold text-zinc-900">Result</h2>

          <div className="mb-4">
            <CompareSlider before={preview!} after={result.url} />
          </div>

          <div className="mb-3 flex items-center justify-between rounded-lg bg-zinc-50 p-3">
            <span className="text-sm text-zinc-600">
              {originalFormat} &mdash; {formatFileSize(originalSize)}
            </span>
            <svg className="h-4 w-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="text-sm font-medium text-green-700">
              {result.format} &mdash; {formatFileSize(result.size)}
            </span>
            {ratio && (
              <span className="ml-2 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                {Number(ratio) >= 0 ? `-${ratio}%` : `+${Math.abs(Number(ratio))}%`}
              </span>
            )}
          </div>

          <a
            href={result.url}
            download={`converted.${selectedFormat.ext}`}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download {selectedFormat.label}
          </a>
        </div>
      )}
    </div>
  )
}
