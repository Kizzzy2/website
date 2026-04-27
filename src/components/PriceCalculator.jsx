import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './PriceCalculator.css'

const vehicles = [
  { id: 'sedan',   label: 'Sedan / Coupe',  icon: '🚗', mult: 1 },
  { id: 'suv',     label: 'SUV / Truck',    icon: '🚙', mult: 1.2 },
  { id: 'luxury',  label: 'Luxury / Exotic',icon: '🏎️', mult: 1.5 },
  { id: 'fleet',   label: 'Fleet Vehicle',  icon: '🚌', mult: 'quote' },
]

const services = [
  {
    id: 'full',
    name: 'Full Detail',
    desc: 'Interior + Exterior, clay bar, polish, sealant',
    base: 250,
    suv: 300,
    promo: true,
    duration: '4–6 hrs',
  },
  {
    id: 'interior',
    name: 'Interior Only',
    desc: 'Steam clean, shampoo, leather condition, odor treatment',
    base: 200,
    suv: 200,
    duration: '2–4 hrs',
  },
  {
    id: 'exterior',
    name: 'Exterior Only',
    desc: 'Foam cannon, hand wash, clay, polish, sealant',
    base: 175,
    suv: 175,
    duration: '2–3 hrs',
  },
  {
    id: 'ceramic',
    name: 'Ceramic Coating',
    desc: '9H coating, 2–5 year protection, UV shield',
    base: 800,
    suv: 1000,
    luxury: 1200,
    duration: '1–2 days',
    premium: true,
  },
]

function getPrice(service, vehicle) {
  if (vehicle.mult === 'quote') return null
  if (vehicle.id === 'luxury' && service.luxury) return service.luxury
  if (vehicle.id === 'suv') return service.suv
  return service.base
}

export default function PriceCalculator() {
  const [vehicleId, setVehicleId] = useState(null)
  const [serviceId, setServiceId] = useState(null)
  const [ref, visible] = useScrollReveal()

  const vehicle = vehicles.find(v => v.id === vehicleId)
  const service = services.find(s => s.id === serviceId)
  const price = vehicle && service ? getPrice(service, vehicle) : null

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
                    {s.promo && <span className="calc-promo-badge">$100 OFF</span>}
                    {s.premium && <span className="calc-premium-badge">Premium</span>}
                  </div>
                  <div className="calc-service-desc">{s.desc}</div>
                  <div className="calc-service-duration">⏱ {s.duration}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className={`calc-result${price !== null || (vehicle?.mult === 'quote' && serviceId) ? ' calc-result-show' : ''}`}>
            {vehicle?.mult === 'quote' ? (
              <>
                <div className="calc-result-label">Fleet pricing is custom</div>
                <div className="calc-result-sub">We'll build a recurring program for your fleet.</div>
                <a href="/pricing#quote" className="btn-primary calc-result-btn">Get Fleet Quote →</a>
              </>
            ) : price !== null ? (
              <>
                <div className="calc-result-label">Your Estimate</div>
                <div className="calc-price">
                  <span className="calc-price-from">from</span>
                  <span className="calc-price-num">${price}</span>
                </div>
                {service?.promo && (
                  <div className="calc-promo-note">🔥 $100 OFF promo active — book now before it ends</div>
                )}
                <div className="calc-result-sub">20% deposit to lock in your slot. We confirm within the hour.</div>
                <a href="/pricing#book" className="btn-primary calc-result-btn">Book This Now →</a>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}
