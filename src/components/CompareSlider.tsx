'use client'

import { useRef, useState, useCallback, useEffect } from 'react'

export default function CompareSlider({
  before,
  after,
}: {
  before: string
  after: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const update = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)))
  }, [])

  const onDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    dragging.current = true
    update(e.clientX)
  }, [update])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    dragging.current = true
    update(e.touches[0].clientX)
  }, [update])

  useEffect(() => {
    const move = (e: MouseEvent) => { if (dragging.current) update(e.clientX) }
    const touchMove = (e: TouchEvent) => { if (dragging.current) update(e.touches[0].clientX) }
    const up = () => { dragging.current = false }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
    window.addEventListener('touchmove', touchMove, { passive: false })
    window.addEventListener('touchend', up)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseup', up)
      window.removeEventListener('touchmove', touchMove)
      window.removeEventListener('touchend', up)
    }
  }, [update])

  return (
    <div ref={containerRef} className="relative overflow-hidden rounded-lg border border-zinc-200 select-none bg-zinc-100" style={{ minHeight: 260, touchAction: 'none' }}>
      <img src={after} alt="After" className="absolute inset-0 h-full w-full object-contain" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={before} alt="Before" className="h-full w-full object-contain" />
      </div>
      <div
        className="absolute inset-y-0 z-10 w-0.5 cursor-col-resize bg-white shadow-md"
        style={{ left: `${pos}%` }}
        onMouseDown={onDown}
        onTouchStart={onTouchStart}
      >
        <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md ring-1 ring-zinc-200">
          <svg className="h-4 w-4 text-zinc-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}
