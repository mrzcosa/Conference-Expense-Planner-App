import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-image" />
      <div className="hero-content page-container">
        <div className="hero-copy">
          <div className="hero-kicker"><Sparkles size={14} /> MAKE ROOM FOR GREAT IDEAS</div>
          <h1>Bring your next<br />big gathering <em>to life.</em></h1>
          <p>
            Find your space, choose the details, and see your conference budget come together —
            all in one thoughtful plan.
          </p>
          <Link to="/planner" className="hero-button">
            Get started <ArrowRight size={17} />
          </Link>
          <div className="hero-note"><span /> A clear plan for a remarkable event</div>
        </div>
        <div className="hero-caption">
          <span>01 / 03</span>
          <span>THE ART OF GATHERING</span>
          <span>Find your perfect setting</span>
        </div>
        <a className="scroll-cue" href="#how-it-works" aria-label="Scroll to learn how it works">
          <ArrowDown size={17} />
        </a>
      </div>
    </section>
  )
}
