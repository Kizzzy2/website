import { useRef } from 'react'

export default function MagneticBtn({ children, className = 'btn-primary', href, strength = 0.35, ...props }) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top  + rect.height / 2
    const dx = (e.clientX - cx) * strength
    const dy = (e.clientY - cy) * strength
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = ''
    el.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)'
    setTimeout(() => { if (el) el.style.transition = '' }, 500)
  }

  const Tag = href ? 'a' : 'button'
  return (
    <Tag
      ref={ref}
      className={`magnetic-wrap ${className}`}
      href={href}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </Tag>
  )
}
