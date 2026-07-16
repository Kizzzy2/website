import { useState, useEffect } from 'react'
import './FloatingCTA.css'

const quizSteps = [
  {
    q: "How's the inside of your car?",
    opts: [
      { label: '✅ Pretty clean', value: 'clean-interior' },
      { label: '🍟 Could use a refresh', value: 'moderate-interior' },
      { label: '😬 It needs serious help', value: 'dirty-interior' },
    ],
  },
  {
    q: "And the outside?",
    opts: [
      { label: '✅ Looking good', value: 'clean-exterior' },
      { label: '💧 Water spots & dust', value: 'moderate-exterior' },
      { label: '🪣 Swirls, grime, oxidation', value: 'dirty-exterior' },
    ],
  },
  {
    q: "What matters most?",
    opts: [
      { label: '🛡️ Long-term protection', value: 'protection' },
      { label: '✨ Look amazing NOW', value: 'shine' },
      { label: '🌿 Fresh interior feel', value: 'interior' },
    ],
  },
]

function getRecommendation(answers) {
  const [interior, exterior, priority] = answers
  if (priority === 'protection') {
    return {
      service: 'Ceramic Coating',
      desc: 'Based on your answers, ceramic coating will protect your paint for years and keep it looking fresh with minimal effort.',
      price: 'From $599',
      link: 'https://labshine-ops.vercel.app/book',
    }
  }
  if (priority === 'interior' || interior === 'dirty-interior') {
    return {
      service: 'Full Detail Reset',
      desc: 'Your interior needs love — our Full Detail Reset steam cleans, shampoos, and conditions every surface inside and out.',
      price: 'From $185',
      link: 'https://labshine-ops.vercel.app/book',
    }
  }
  if (exterior === 'dirty-exterior' || interior === 'dirty-interior') {
    return {
      service: 'Full Detail Reset',
      desc: 'You need the full treatment — inside and out. Our most popular service will have your car looking showroom-ready.',
      price: 'From $185',
      link: 'https://labshine-ops.vercel.app/book',
    }
  }
  if (exterior === 'moderate-exterior' || exterior === 'dirty-exterior') {
    return {
      service: 'Maintenance Wash & Wax',
      desc: 'Your exterior needs a refresh. Foam cannon wash, iron removal, hand wax, and tire dressing will restore the shine.',
      price: 'From $125',
      link: 'https://labshine-ops.vercel.app/book',
    }
  }
  return {
    service: 'Full Detail Reset',
    desc: "Even if things look decent, a full detail will reveal what you've been missing. Most popular for good reason.",
    price: 'From $185',
    link: 'https://labshine-ops.vercel.app/book',
  }
}

export default function FloatingCTA() {
  const [open, setOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const [result, setResult] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function pickAnswer(val) {
    const next = [...answers, val]
    if (step < quizSteps.length - 1) {
      setAnswers(next)
      setStep(s => s + 1)
    } else {
      setResult(getRecommendation(next))
    }
  }

  function resetQuiz() {
    setStep(0)
    setAnswers([])
    setResult(null)
  }

  function openQuiz() {
    resetQuiz()
    setQuizOpen(true)
    setOpen(false)
  }

  return (
    <>
      {/* Floating pill button */}
      <div className={`float-pill${scrolled ? ' float-pill-show' : ''}${open ? ' float-pill-open' : ''}`}>
        {/* Expanded menu */}
        {open && (
          <div className="float-menu">
            <a href="tel:3464529991" className="float-action float-action-call">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              Call Now
            </a>
            <a href="sms:3464529991" className="float-action float-action-text">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
              Text Us
            </a>
            <button className="float-action float-action-quiz" onClick={openQuiz}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
              Find My Service
            </button>
          </div>
        )}
        <button
          className="float-toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Contact LabShine"
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
          ) : (
            <span className="float-toggle-content">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/></svg>
              <span>Book / Call</span>
            </span>
          )}
        </button>
      </div>

      {/* Quiz Modal */}
      {quizOpen && (
        <div className="quiz-overlay" onClick={(e) => e.target === e.currentTarget && setQuizOpen(false)}>
          <div className="quiz-modal">
            <button className="quiz-close" onClick={() => setQuizOpen(false)}>✕</button>

            {!result ? (
              <>
                <div className="quiz-header">
                  <div className="quiz-badge">Find My Service</div>
                  <div className="quiz-progress">
                    {quizSteps.map((_, i) => (
                      <div key={i} className={`quiz-dot${i <= step ? ' filled' : ''}`} />
                    ))}
                  </div>
                  <h3 className="quiz-question">{quizSteps[step].q}</h3>
                </div>
                <div className="quiz-options">
                  {quizSteps[step].opts.map(opt => (
                    <button key={opt.value} className="quiz-opt" onClick={() => pickAnswer(opt.value)}>
                      {opt.label}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button className="quiz-back" onClick={() => { setStep(s => s - 1); setAnswers(a => a.slice(0, -1)) }}>
                    ← Back
                  </button>
                )}
              </>
            ) : (
              <div className="quiz-result">
                <div className="quiz-badge">We Recommend</div>
                <div className="quiz-result-service">{result.service}</div>
                <p className="quiz-result-desc">{result.desc}</p>
                <div className="quiz-result-price">{result.price}</div>
                <div className="quiz-result-actions">
                  <a href={result.link} className="btn-primary">Book This →</a>
                  <button className="btn-outline quiz-restart" onClick={resetQuiz}>Retake Quiz</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
