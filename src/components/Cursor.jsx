import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const pos      = useRef({ x: -100, y: -100 })
  const ring     = useRef({ x: -100, y: -100 })
  const rafId    = useRef(null)
  const [type, setType]     = useState('default')  // default | hover | text | click
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }

    const onDown = () => setType(t => t === 'hover' ? 'click' : 'click')
    const onUp   = () => {
      // re-detect
      const el = document.elementFromPoint(pos.current.x, pos.current.y)
      setType(detectType(el))
    }

    const onEnter = (e) => setType(detectType(e.target))
    const onLeave = ()  => setType('default')

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup',   onUp)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout',  onLeave)

    // Lerp loop
    const lerp = (a, b, t) => a + (b - a) * t
    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup',   onUp)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout',  onLeave)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={`cursor-dot  cursor-${type}${visible ? ' cursor-visible' : ''}`} />
      <div ref={ringRef} className={`cursor-ring cursor-ring-${type}${visible ? ' cursor-visible' : ''}`} />
    </>
  )
}

function detectType(el) {
  if (!el) return 'default'
  const tag = el.tagName?.toLowerCase()
  const role = el.getAttribute('role')
  // text inputs
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return 'text'
  // links and buttons
  if (tag === 'a' || tag === 'button' || role === 'button') {
    if (el.classList.contains('btn-primary') || el.classList.contains('btn-outline')) return 'hover'
    return 'hover'
  }
  // parent checks
  const parent = el.closest('a, button, [role="button"], .service-card, .calc-vehicle-btn, .calc-service-btn, .quiz-opt, .area-tag, .pricing-card')
  if (parent) return 'hover'
  return 'default'
}
