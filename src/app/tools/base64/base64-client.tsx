'use client'

import { useState, useCallback, useRef } from 'react'
import { readFileAsDataURL } from '@/lib/utils'

type Mode = 'encode' | 'decode'

export default function Base64Client() {
  const [mode, setMode] = useState<Mode>('encode')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [base64, setBase64] = useState('')
  const [decodedUrl, setDecodedUrl] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleFile = useCallback(async (f: File) => {
    setError(null)
    setCopied(false)

    if (!f.type.startsWith('image/')) {
      setError('Please select an image file.')
      return
    }

    if (f.size > 100 * 1024 * 1024) {
      setError('File is too large. Please choose an image under 100MB.')
      return
    }

    setFile(f)
    try {
      const dataUrl = await readFileAsDataURL(f)
      setPreview(dataUrl)
      const b64 = dataUrl.split(',')[1]
      setBase64(b64)
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

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(base64)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setError('Failed to copy to clipboard.')
    }
  }, [base64])

  const decodeBase64 = useCallback(() => {
    setError(null)
    setDecodedUrl(null)

    const text = textareaRef.current?.value.trim()
    if (!text) {
      setError('Please paste a Base64 string.')
      return
    }

    try {
      const url = `data:image/png;base64,${text.replace(/^data:image\/\w+;base64,/, '')}`
      const img = new Image()
      img.onload = () => {
        setDecodedUrl(url)
      }
      img.onerror = () => {
        setError('Invalid Base64 data. Make sure it is a valid image Base64 string.')
      }
      img.src = url
    } catch {
      setError('Invalid Base64 data.')
    }
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <button
          onClick={() => { setMode('encode'); setError(null); setFile(null); setPreview(null); setBase64(''); setCopied(false) }}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === 'encode'
              ? 'bg-blue-600 text-white'
              : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
          }`}
        >
          Encode Image to Base64
        </button>
        <button
          onClick={() => { setMode('decode'); setError(null); setDecodedUrl(null) }}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            mode === 'decode'
              ? 'bg-blue-600 text-white'
              : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
          }`}
        >
          Decode Base64 to Image
        </button>
      </div>

      {mode === 'encode' && (
        <>
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

          {file && preview && (
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-zinc-900">{file.name}</p>
                </div>
                <button
                  onClick={() => { setFile(null); setPreview(null); setBase64(''); setCopied(false) }}
                  className="ml-4 shrink-0 text-sm text-zinc-400 hover:text-zinc-700"
                >
                  Remove
                </button>
              </div>
              <img src={preview} alt="Preview" className="mt-3 h-20 w-20 rounded-lg border border-zinc-200 object-cover" />
            </div>
          )}

          {base64 && (
            <div className="rounded-xl border border-zinc-200 bg-white p-4">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-zinc-900">Base64 String</h2>
                <button
                  onClick={copyToClipboard}
                  className={`rounded-lg px-3 py-1 text-xs font-medium transition-colors ${
                    copied
                      ? 'bg-green-100 text-green-700'
                      : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                  }`}
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <textarea
                readOnly
                value={base64}
                rows={6}
                className="w-full rounded-lg border border-zinc-300 bg-zinc-50 p-3 text-xs font-mono text-zinc-700 focus:outline-none"
              />
            </div>
          )}
        </>
      )}

      {mode === 'decode' && (
        <div className="rounded-xl border border-zinc-200 bg-white p-4">
          <label className="mb-1.5 block text-sm font-medium text-zinc-700">
            Paste Base64 String
          </label>
          <textarea
            ref={textareaRef}
            rows={6}
            className="mb-3 w-full rounded-lg border border-zinc-300 p-3 text-xs font-mono text-zinc-700 focus:border-blue-500 focus:outline-none"
            placeholder="Paste your Base64 encoded image string here..."
          />
          <button
            onClick={decodeBase64}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            Decode to Image
          </button>

          {decodedUrl && (
            <div className="mt-4">
              <img src={decodedUrl} alt="Decoded" className="max-h-64 rounded-lg border border-zinc-200 object-contain" />
              <a
                href={decodedUrl}
                download="decoded.png"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Decoded Image
              </a>
            </div>
          )}
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
