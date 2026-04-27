import { useEffect, useRef } from 'react'

export default function BookingWidget() {
  const containerRef = useRef(null)
  const scriptLoaded  = useRef(false)

  useEffect(() => {
    if (scriptLoaded.current) return
    scriptLoaded.current = true

    const script = document.createElement('script')
    script.src = 'https://detailpilot.com/widget/labshine-auto-detailing-llc.js'
    script.setAttribute('data-mode', 'inline')
    script.async = true
    if (containerRef.current) {
      containerRef.current.appendChild(script)
    }
  }, [])

  return (
    <div id="book" ref={containerRef}>
      <div data-detailpilot-widget-container="true" />
    </div>
  )
}
