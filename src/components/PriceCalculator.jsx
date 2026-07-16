import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './PriceCalculator.css'

const vehicles = [
  { id: 'sedan',   label: 'Sedan / Coupe',   icon: '🚗', mult: 1 },
  { id: 'suv',     label: 'SUV / Truck',      icon: '🚙', mult: 1 },
  { id: 'luxury',  label: 'Luxury / Exotic',  icon: '🏎️', mult: 1 },
  { id: 'fleet',   label: 'Fleet Vehicle',    icon: '🚌', mult: 'quote' },
]

const services = [
  {
    id: 'wash',
    name: 'Maintenance Wash & Wax',
    desc: 'Foam cannon wash, hand wax, iron removal, tire dressing',
    prices: { sedan: 125, suv: 145, luxury: 165 },
    duration: '1–2 hrs',
  },
  {
    id: 'full',
    name: 'Full Detail Reset',
    desc: 'Interior + exterior, clay bar, machine polish, sealant',
    prices: { sedan: 185, suv: 225, luxury: 265 },
    duration: '4–6 hrs',
    popular: true,
  },
  {
    id: 'show',
    name: 'Premium Show Detail',
    desc: 'Multi-stage correction, competition interior, machine wax',
    prices: { sedan: 325, suv: 395, luxury: 495 },
    duration: '8–12 hrs',
    premium: true,
  },
  {
    id: 'ceramic',
    name: 'Ceramic Coating',
    desc: '2yr Pro ($599), 5yr Premium ($1,099), 9yr Crystal ($2,499)',
    prices: null,
    duration: '1–3 days',
    premium: true,
  },
]

function getPrice(service, vehicleId) {
  if (!service.prices) return null
  return service.prices[vehicleId] ?? service.prices.sedan
}

export default function PriceCalculator() {
  const [vehicleId, setVehicleId] = useState(null)
  const [serviceId, setServiceId] = useState(null)
  const [ref, visible] = useScrollReveal()

  const vehicle = vehicles.find(v => v.id === vehicleId)
  const service = services.find(s => s.id === serviceId)
  const price = vehicle && service ? getPrice(service, vehicleId) : null
  const showQuote = vehicle?.mult === 'quote' || (service?.id === 'ceramic' && vehicleId)

  return (
    <section className="calc-section" ref={ref}>
      <div className="container">
        <div className={`section-header reveal${visible ? ' visible' : ''}`}>
          <span className="section-label">Instant Estimate</span>
          <h2>What Will It <span className="cyan">Cost?</span></h2>
          <p>Pick your vehicle and service — get your price in seconds. No hidden fees.</p>
        </div>

        <div className={`calc-wrap reveal${visible ? ' visible' : ''}`}>
          {/* Step 1 */}
          <div className="calc-step">
            <div className="calc-step-label">1 — Select Your Vehicle</div>
            <div className="calc-vehicles">
              {vehicles.map(v => (
                <button
                  key={v.id}
                  className={`calc-vehicle-btn${vehicleId === v.id ? ' active' : ''}`}
                  onClick={() => setVehicleId(v.id)}
                >
                  <span className="calc-vehicle-icon">{v.icon}</span>
                  <span>{v.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 */}
          <div className={`calc-step${!vehicleId ? ' calc-step-dim' : ''}`}>
            <div className="calc-step-label">2 — Choose Your Service</div>
            <div className="calc-services">
              {services.map(s => (
                <button
                  key={s.id}
                  className={`calc-service-btn${serviceId === s.id ? ' active' : ''}${s.premium ? ' premium' : ''}`}
                  onClick={() => vehicleId && setServiceId(s.id)}
                  disabled={!vehicleId}
                >
                  <div className="calc-service-top">
                    <span className="calc-service-name">{s.name}</span>
                    {s.popular && <span className="calc-promo-badge">Most Popular</span>}
                    {s.premium && !s.popular && <span className="calc-premium-badge">Premium</span>}
                  </div>
                  <div className="calc-service-desc">{s.desc}</div>
                  <div className="calc-service-duration">⏱ {s.duration}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className={`calc-result${price !== null || showQuote ? ' calc-result-show' : ''}`}>
            {showQuote ? (
              <>
                <div className="calc-result-label">{vehicle?.mult === 'quote' ? 'Fleet pricing is custom' : 'Ceramic Coating — Custom Quote'}</div>
                <div className="calc-result-sub">{vehicle?.mult === 'quote' ? "We'll build a recurring program for your fleet." : 'Pricing starts at $599. We\'ll give you an exact quote based on your vehicle and paint condition.'}</div>
                <a href="/pricing#quote" className="btn-primary calc-result-btn">Get a Free Quote →</a>
              </>
            ) : price !== null ? (
              <>
                <div className="calc-result-label">Your Estimate</div>
                <div className="calc-price">
                  <span className="calc-price-from">from</span>
                  <span className="calc-price-num">${price}</span>
                </div>
                <div className="calc-result-sub">Book online — we confirm within the hour.</div>
                <a href="https://labshine-ops.vercel.app/book" target="_blank" rel="noopener noreferrer" className="btn-primary calc-result-btn">Book This Now →</a>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
