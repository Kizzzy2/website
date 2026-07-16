export default function BookingWidget() {
  return (
    <div id="quote" style={{ width: '100%' }}>
      <iframe
        src="https://labshine-ops.vercel.app/inquire"
        width="100%"
        height="760"
        style={{ border: 0, display: 'block' }}
        title="Get a Free Quote"
        loading="lazy"
      />
    </div>
  )
}
