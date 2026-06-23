'use client'

import { useState, useRef, useCallback } from 'react'
import { formatFileSize, readFileAsDataURL, loadImage } from '@/lib/utils'
import CompareSlider from '@/components/CompareSlider'

type FitMode = 'fill' | 'fit'

const presets = [
  { label: 'Square', w: 1080, h: 1080 },
  { label: 'Instagram', w: 1080, h: 1350 },
  { label: 'Twitter', w: 1200, h: 675 },
  { label: 'Facebook', w: 1200, h: 630 },
  { label: 'YouTube', w: 1280, h: 720 },
  { label: '4K', w: 3840, h: 2160 },
]

export default function ResizeClient() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [originalSize, setOriginalSize] = useState(0)
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 })
  const [newW, setNewW] = useState(0)
  const [newH, setNewH] = useState(0)
  const [lockRatio, setLockRatio] = useState(true)
  const [fitMode, setFitMode] = useState<FitMode>('fill')
  const [result, setResult] = useState<{ url: string; size: number; w: number; h: number } | null>(null)
  const [processing, setProcessing] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const ratioRef = useRef(1)

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

    try {
      const dataUrl = await readFileAsDataURL(f)
      setPreview(dataUrl)
      const img = await loadImage(dataUrl)
      const w = img.naturalWidth
      const h = img.naturalHeight
      setDimensions({ w, h })
      setNewW(w)
      setNewH(h)
      ratioRef.current = w / h
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

  const handleWidthChange = useCallback((val: number) => {
    setNewW(val)
    if (lockRatio) {
      setNewH(Math.round(val / ratioRef.current))
    }
  }, [lockRatio])

  const handleHeightChange = useCallback((val: number) => {
    setNewH(val)
    if (lockRatio) {
      setNewW(Math.round(val * ratioRef.current))
    }
  }, [lockRatio])

  const applyPreset = useCallback((w: number, h: number) => {
    setNewW(w)
    setNewH(h)
    if (!lockRatio) {
      ratioRef.current = w / h
    }
  }, [lockRatio])

  const process = useCallback(async () => {
    if (!preview || !newW || !newH) return
    setProcessing(true)
    setError(null)

    try {
      const img = await loadImage(preview)
      const canvas = canvasRef.current!
      const ctx = canvas.getContext('2d')!

      canvas.width = newW
      canvas.height = newH

      if (fitMode === 'fill') {
        ctx.drawImage(img, 0, 0, newW, newH)
      } else {
        const scale = Math.min(newW / img.naturalWidth, newH / img.naturalHeight)
        const drawW = img.naturalWidth * scale
        const drawH = img.naturalHeight * scale
        const dx = (newW - drawW) / 2
        const dy = (newH - drawH) / 2

        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, newW, newH)
        ctx.drawImage(img, dx, dy, drawW, drawH)
      }

      canvas.toBlob((blob) => {
        if (blob) {
          setResult({
            url: URL.createObjectURL(blob),
            size: blob.size,
            w: newW,
            h: newH,
          })
        } else {
          setError('Failed to process image.')
        }
        setProcessing(false)
      }, file?.type === 'image/jpeg' ? 'image/jpeg' : 'image/png')
    } catch {
      setError('An error occurred while processing.')
      setProcessing(false)
    }
  }, [preview, newW, newH, fitMode, file])

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
                {dimensions.w} &times; {dimensions.h} &middot; {formatFileSize(originalSize)}
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
                <img src={result.url} alt="Result preview" className="h-20 w-20 rounded-lg border border-zinc-200 object-cover" />
              )}
            </div>
          )}
        </div>
      )}

      {file && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          {/* Dimensions */}
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700">Width (px)</label>
              <input
                type="number"
                min={1}
                max={10000}
                value={newW || ''}
                onChange={(e) => handleWidthChange(Number(e.target.value))}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700">Height (px)</label>
              <input
                type="number"
                min={1}
                max={10000}
                value={newH || ''}
                onChange={(e) => handleHeightChange(Number(e.target.value))}
                className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Lock ratio */}
          <div className="mb-4 flex items-center gap-4">
            <button
              onClick={() => setLockRatio(!lockRatio)}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                lockRatio
                  ? 'bg-blue-600 text-white'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {lockRatio ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75c0 1.24 1.01 2.25 2.25 2.25z" />
                )}
              </svg>
              {lockRatio ? 'Aspect ratio locked' : 'Aspect ratio unlocked'}
            </button>

            <div className="flex rounded-lg border border-zinc-200">
              <button
                onClick={() => setFitMode('fill')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  fitMode === 'fill'
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                Crop to fill
              </button>
              <button
                onClick={() => setFitMode('fit')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  fitMode === 'fit'
                    ? 'bg-zinc-900 text-white'
                    : 'text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                Fit within
              </button>
            </div>
          </div>

          {/* Presets */}
          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-medium text-zinc-500">Quick presets</label>
            <div className="flex flex-wrap gap-1.5">
              {presets.map((p) => (
                <button
                  key={p.label}
                  onClick={() => applyPreset(p.w, p.h)}
                  className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                    newW === p.w && newH === p.h
                      ? 'bg-blue-600 text-white'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {p.label} &mdash; {p.w}&times;{p.h}
                </button>
              ))}
              <button
                onClick={() => { setNewW(dimensions.w); setNewH(dimensions.h) }}
                className="rounded-lg px-2.5 py-1 text-xs font-medium text-zinc-600 transition-colors hover:bg-zinc-100"
              >
                Original &mdash; {dimensions.w}&times;{dimensions.h}
              </button>
            </div>
          </div>

          <button
            onClick={process}
            disabled={processing || !newW || !newH}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {processing ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Processing...
              </>
            ) : (
              'Resize Image'
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

          <div className="mb-3 flex items-center gap-3 text-sm text-zinc-600">
            <span>Original: {dimensions.w}&times;{dimensions.h}</span>
            <svg className="h-4 w-4 shrink-0 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="font-medium text-zinc-900">Result: {result.w}&times;{result.h}</span>
          </div>
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
            <span>Size: {formatFileSize(result.size)}</span>
          </div>
          <a
            href={result.url}
            download={`resized-${result.w}x${result.h}.${file?.type === 'image/jpeg' ? 'jpg' : 'png'}`}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resized Image
          </a>
        </div>
      )}
    </div>
  )
}
