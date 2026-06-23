'use client'

import { useState, useRef, useCallback } from 'react'
import { formatFileSize, readFileAsDataURL, loadImage } from '@/lib/utils'
import exifr from 'exifr'

const LABELS: Record<string, string> = {
  Make: 'Camera Make',
  Model: 'Camera Model',
  LensModel: 'Lens',
  ExposureTime: 'Exposure Time',
  FNumber: 'F-Number',
  FocalLength: 'Focal Length',
  FocalLengthIn35mmFormat: 'Focal Length (35mm)',
  ISO: 'ISO',
  ExposureProgram: 'Exposure Program',
  ExposureCompensation: 'Exposure Bias',
  WhiteBalance: 'White Balance',
  Flash: 'Flash',
  MeteringMode: 'Metering Mode',
  Orientation: 'Orientation',
  DateTimeOriginal: 'Date Taken',
  ModifyDate: 'Date Modified',
  Software: 'Software',
  Copyright: 'Copyright',
  GPSLatitude: 'GPS Latitude',
  GPSLongitude: 'GPS Longitude',
  GPSAltitude: 'GPS Altitude',
  ImageWidth: 'Image Width',
  ImageHeight: 'Image Height',
  XResolution: 'X Resolution',
  YResolution: 'Y Resolution',
  ColorSpace: 'Color Space',
  ApertureValue: 'Aperture',
  MaxApertureValue: 'Max Aperture',
  ShutterSpeedValue: 'Shutter Speed',
  BrightnessValue: 'Brightness',
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined) return '-'
  if (typeof value === 'number') {
    if (value < 0.01 && value > 0) return `1/${Math.round(1 / value)} s`
    return value > 1000 ? value.toLocaleString() : String(Math.round(value * 100) / 100)
  }
  if (value instanceof Date) return value.toLocaleString()
  return String(value)
}

export default function ExifClient() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [originalSize, setOriginalSize] = useState(0)
  const [exifData, setExifData] = useState<Record<string, unknown> | null>(null)
  const [cleanedUrl, setCleanedUrl] = useState<string | null>(null)
  const [cleanedSize, setCleanedSize] = useState(0)
  const [parsing, setParsing] = useState(false)
  const [cleaning, setCleaning] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFile = useCallback(async (f: File) => {
    setError(null)
    setExifData(null)
    setCleanedUrl(null)
    setCleaning(false)

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
      setParsing(true)

      const raw = await exifr.parse(f, { gps: true, tiff: true, xmp: true, translateKeys: false, translateValues: false })

      const data: Record<string, unknown> = {}

      if (raw && Object.keys(raw).length > 0) {
        for (const [key, val] of Object.entries(raw)) {
          if (val === undefined || val === null) continue
          const label = LABELS[key]
          if (label) {
            data[label] = val
          } else if (typeof key === 'string' && !key.startsWith('_')) {
            data[key] = val
          }
        }
      }

      data['File Name'] = f.name
      data['File Size'] = formatFileSize(f.size)
      data['Image Width'] = img.naturalWidth
      data['Image Height'] = img.naturalHeight

      if (Object.keys(data).length <= 4) {
        data['Note'] = 'No EXIF or metadata found in this file.'
      }

      setExifData(data)
      setParsing(false)
    } catch {
      setError('Failed to read EXIF data. Make sure the file contains metadata.')
      setParsing(false)
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

  const clearExif = useCallback(async () => {
    if (!preview) return
    setCleaning(true)
    setError(null)

    try {
      const img = await loadImage(preview)
      const canvas = canvasRef.current!
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(img, 0, 0)

      canvas.toBlob((blob) => {
        if (blob) {
          setCleanedUrl(URL.createObjectURL(blob))
          setCleanedSize(blob.size)
        } else {
          setError('Failed to clear EXIF data.')
        }
        setCleaning(false)
      }, 'image/jpeg', 0.95)
    } catch {
      setError('An error occurred.')
      setCleaning(false)
    }
  }, [preview])

  const displayEntries = exifData
    ? Object.entries(exifData).filter(([k]) => !k.startsWith('_'))
    : []

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
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <p className="text-sm font-medium text-zinc-700">Drop an image here or click to browse</p>
          <p className="mt-1 text-xs text-zinc-400">JPEG, PNG, HEIC, TIFF — any image with embedded EXIF</p>
          <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/heic,image/tiff,image/webp,image/*" onChange={handleChange} className="hidden" />
        </div>
      )}

      {file && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-zinc-900">{file.name}</p>
              <p className="text-xs text-zinc-400">{formatFileSize(originalSize)}</p>
            </div>
            <button
              onClick={() => { setFile(null); setPreview(null); setExifData(null); setCleanedUrl(null); setError(null) }}
              className="ml-4 shrink-0 text-sm text-zinc-400 hover:text-zinc-700"
            >
              Remove
            </button>
          </div>
        </div>
      )}

      {parsing && (
        <div className="flex items-center justify-center py-8">
          <svg className="h-5 w-5 animate-spin text-zinc-400" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="ml-2 text-sm text-zinc-500">Reading EXIF data...</span>
        </div>
      )}

      {exifData && !parsing && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <h2 className="mb-3 text-sm font-semibold text-zinc-900">EXIF Data</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {displayEntries.map(([key, val]) => (
                  <tr key={key} className="border-b border-zinc-100 last:border-0">
                    <td className="whitespace-nowrap py-2 pr-4 text-xs font-medium text-zinc-500">{key}</td>
                    <td className="break-all py-2 text-xs text-zinc-800">{formatValue(val)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 border-t border-zinc-200 pt-4">
            <p className="mb-2 text-xs text-zinc-500">
              Stripping EXIF removes all metadata (camera info, GPS location, date, etc.) while keeping image quality. The cleaned image is downloaded as JPEG at 95% quality.
            </p>
            <button
              onClick={clearExif}
              disabled={cleaning}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {cleaning ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Cleaning...
                </>
              ) : (
                'Strip EXIF & Download'
              )}
            </button>
          </div>
        </div>
      )}

      {cleanedUrl && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <h2 className="mb-3 text-sm font-semibold text-zinc-900">Clean Image</h2>
          <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
            <span>Original: {formatFileSize(originalSize)}</span>
            <svg className="h-3 w-3 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className="text-green-700">Cleaned: {formatFileSize(cleanedSize)}</span>
          </div>
          <a
            href={cleanedUrl}
            download="exif_cleaned.jpg"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Cleaned Image
          </a>
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          {error}
        </div>
      )}
    </div>
  )
}
