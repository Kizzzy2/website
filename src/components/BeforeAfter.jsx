import { useState, useRef, useCallback } from 'react'
import './BeforeAfter.css'

export default function BeforeAfter({ before, after, beforeLabel = 'Before', afterLabel = 'After' }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const calcPos = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPos((x / rect.width) * 100)
  }, [])

  const onMouseDown = (e) => {
    dragging.current = true
    calcPos(e.clientX)
  }
  const onMouseMove = (e) => { if (dragging.current) calcPos(e.clientX) }
  const onMouseUp = () => { dragging.current = false }

  const onTouchStart = (e) => {
    dragging.current = true
    calcPos(e.touches[0].clientX)
  }
  const onTouchMove = (e) => {
    if (dragging.current) {
      e.preventDefault()
      calcPos(e.touches[0].clientX)
    }
  }
  const onTouchEnd = () => { dragging.current = false }

  return (
    <div
      className="ba-container"
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* After (base layer) */}
      <div className="ba-after" style={{ backgroundImage: `url(${after})` }}>
        <span className="ba-label ba-label-after">{afterLabel}</span>
      </div>
      {/* Before (clipped layer) */}
      <div className="ba-before" style={{ backgroundImage: `url(${before})`, clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <span className="ba-label ba-label-before">{beforeLabel}</span>
      </div>
      {/* Divider */}
      <div className="ba-divider" style={{ left: `${pos}%` }}>
        <div className="ba-handle">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M6 10L2 7v6l4-3zm8 0l4-3v6l-4-3z" fill="white"/>
            <rect x="9" y="2" width="2" height="16" fill="white" rx="1"/>
          </svg>
        </div>
      </div>
      <div className="ba-hint">← Drag to compare →</div>
    </div>
  )
}
