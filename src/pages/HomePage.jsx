import { Check, ChevronRight, Compass, Layers3, ReceiptText } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../components/common/Footer.jsx'
import Navbar from '../components/common/Navbar.jsx'
import HeroSection from '../components/landing/HeroSection.jsx'

const steps = [
  { number: '01', title: 'Find your place', copy: 'Explore flexible rooms for everything from an intimate team day to a full-scale keynote.' },
  { number: '02', title: 'Make it yours', copy: 'Add the AV essentials, decide on your menu, and set the guest count.' },
  { number: '03', title: 'Know your numbers', copy: 'See a clear, live breakdown of your estimated event spend — no surprises.' },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <section className="intro-band" id="features">
          <div className="page-container intro-band-inner">
            <p>THE SPACE TO PLAN WITH PURPOSE</p>
            <h2>From first idea to final<br />headcount — <em>beautifully clear.</em></h2>
            <span className="intro-aside">A little more intention.<br />A lot less guesswork.</span>
          </div>
        </section>
        <section className="how-section page-container" id="how-it-works">
          <div className="how-heading">
            <div><p className="eyebrow">A BETTER WAY TO BRING PEOPLE TOGETHER</p><h2>Plan a gathering<br />that <em>feels effortless.</em></h2></div>
            <p>All the important choices, in one calm and considered place. Start with a room; finish with a plan you can stand behind.</p>
          </div>
          <div className="steps-grid">
            {steps.map((step, index) => {
              const icons = [Compass, Layers3, ReceiptText]
              const Icon = icons[index]
              return <article className="step-card" key={step.number}>
                <div className="step-top"><span>{step.number}</span><Icon size={21} strokeWidth={1.6} /></div>
                <h3>{step.title}</h3><p>{step.copy}</p>
                <div className="step-check"><Check size={13} /> Built around your event</div>
              </article>
            })}
          </div>
          <div className="home-cta">
            <div><p className="eyebrow">YOUR NEXT GREAT EVENT STARTS HERE</p><h3>Ready to make room for it?</h3></div>
            <Link to="/planner">Build your plan <ChevronRight size={16} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
