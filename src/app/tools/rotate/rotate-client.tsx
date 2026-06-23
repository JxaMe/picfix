'use client'

import { useState, useRef, useCallback } from 'react'
import { formatFileSize, readFileAsDataURL, loadImage } from '@/lib/utils'
import CompareSlider from '@/components/CompareSlider'

type Angle = 0 | 90 | 180 | 270

export default function RotateClient() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [originalSize, setOriginalSize] = useState(0)
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 })
  const [angle, setAngle] = useState<Angle>(0)
  const [flipH, setFlipH] = useState(false)
  const [flipV, setFlipV] = useState(false)
  const [result, setResult] = useState<{ url: string; size: number } | null>(null)
  const [processing, setProcessing] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const originalRef = useRef<HTMLImageElement | null>(null)

  const handleFile = useCallback(async (f: File) => {
    setError(null)
    setResult(null)
    setAngle(0)
    setFlipH(false)
    setFlipV(false)

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
      originalRef.current = img
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

  const applyTransform = useCallback(async () => {
    if (!preview || !originalRef.current) return
    setProcessing(true)
    setError(null)

    try {
      const img = originalRef.current
      const canvas = canvasRef.current!
      const ctx = canvas.getContext('2d')!

      const rad = (angle * Math.PI) / 180
      const cos = Math.abs(Math.cos(rad))
      const sin = Math.abs(Math.sin(rad))

      const w = img.naturalWidth
      const h = img.naturalHeight
      const cw = Math.ceil(w * cos + h * sin)
      const ch = Math.ceil(w * sin + h * cos)

      canvas.width = cw
      canvas.height = ch

      ctx.translate(cw / 2, ch / 2)
      ctx.rotate(rad)
      ctx.scale(flipH ? -1 : 1, flipV ? -1 : 1)
      ctx.drawImage(img, -w / 2, -h / 2)

      canvas.toBlob((blob) => {
        if (blob) {
          setResult({ url: URL.createObjectURL(blob), size: blob.size })
        } else {
          setError('Failed to apply transformation.')
        }
        setProcessing(false)
      }, file?.type === 'image/jpeg' ? 'image/jpeg' : 'image/png')
    } catch {
      setError('An error occurred.')
      setProcessing(false)
    }
  }, [preview, angle, flipH, flipV, file])

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
          <p className="text-sm font-medium text-zinc-700">Drop an image here or click to browse</p>
          <p className="mt-1 text-xs text-zinc-400">PNG, JPEG, WebP, GIF, BMP, SVG — up to 100MB</p>
          <input ref={inputRef} type="file" accept="image/*" onChange={handleChange} className="hidden" />
        </div>
      )}

      {file && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-zinc-900">{file.name}</p>
              <p className="text-xs text-zinc-400">
                {dimensions.w}&times;{dimensions.h} &middot; {formatFileSize(originalSize)}
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
                <img src={result.url} alt="Transformed" className="h-20 w-20 rounded-lg border border-zinc-200 object-cover" />
              )}
            </div>
          )}
        </div>
      )}

      {file && !result && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-zinc-700">Rotate</label>
            <div className="flex flex-wrap gap-2">
              {([0, 90, 180, 270] as Angle[]).map((a) => (
                <button
                  key={a}
                  onClick={() => setAngle(a)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    angle === a
                      ? 'bg-blue-600 text-white'
                      : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                  }`}
                >
                  {a === 0 ? 'None' : `${a}°`}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-1.5 block text-sm font-medium text-zinc-700">Flip</label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFlipH(!flipH)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  flipH
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                Flip Horizontal
              </button>
              <button
                onClick={() => setFlipV(!flipV)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  flipV
                    ? 'bg-blue-600 text-white'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                Flip Vertical
              </button>
            </div>
          </div>

          <button
            onClick={applyTransform}
            disabled={processing || (angle === 0 && !flipH && !flipV)}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {processing ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Applying...
              </>
            ) : (
              'Apply Transform'
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

          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
            <span>Size: {formatFileSize(result.size)}</span>
          </div>
          <a
            href={result.url}
            download={`transformed.${file?.type === 'image/jpeg' ? 'jpg' : 'png'}`}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Image
          </a>
          <button
            onClick={() => { setResult(null); setPreview(preview) }}
            className="mt-3 w-full rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-200"
          >
            Edit Again
          </button>
        </div>
      )}
    </div>
  )
}
