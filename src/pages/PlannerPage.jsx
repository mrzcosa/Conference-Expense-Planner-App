import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import AddonsSection from '../components/addons/AddonsSection.jsx'
import Button from '../components/common/Button.jsx'
import Footer from '../components/common/Footer.jsx'
import Navbar from '../components/common/Navbar.jsx'
import MealsSection from '../components/meals/MealsSection.jsx'
import RoomSection from '../components/rooms/RoomSection.jsx'
import ExpenseSummaryModal from '../components/summary/ExpenseSummaryModal.jsx'
import { resetPlanner } from '../features/planner/plannerSlice.js'
import { getPlannerTotals } from '../utils/plannerCalculations.js'
import { formatCurrency } from '../utils/currency.js'

export default function PlannerPage() {
  const location = useLocation()
  const [summaryOpen, setSummaryOpen] = useState(() => Boolean(location.state?.openSummary))
  const planner = useSelector((state) => state.planner)
  const dispatch = useDispatch()
  const { roomTotal, addonTotal, mealTotal, grandTotal } = getPlannerTotals(planner)

  useEffect(() => {
    if (location.hash) {
      requestAnimationFrame(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.hash, location.state])

  return (
    <>
      <Navbar plannerMode onShowDetails={() => setSummaryOpen(true)} />
      <main className="planner-main">
        <section className="planner-hero page-container">
          <Link to="/" className="back-link"><ArrowLeft size={14} /> Back to overview</Link>
          <div className="planner-hero-row">
            <div>
              <p className="eyebrow"><Sparkles size={13} /> YOUR CONFERENCE, CONSIDERED</p>
              <h1>Let’s make this<br /><em>one to remember.</em></h1>
              <p className="planner-lead">Choose your space, shape the experience, and keep an eye on the details as they come together.</p>
            </div>
            <div className="planner-hero-note"><span className="note-rule" /><p>Start anywhere.<br />Your estimate updates<br />with every choice.</p></div>
          </div>
          <div className="planner-progress">
            <a href="#venue"><span>01</span> Venue</a><i />
            <a href="#addons"><span>02</span> Add-ons</a><i />
            <a href="#meals"><span>03</span> Catering</a><i />
            <button onClick={() => setSummaryOpen(true)}><span>04</span> Your estimate <ArrowRight size={14} /></button>
          </div>
        </section>
        <div className="planner-content page-container">
          <RoomSection />
          <AddonsSection />
          <MealsSection />
          <section className="estimate-banner">
            <div className="estimate-label"><span className="estimate-spark"><Sparkles size={17} /></span><div><p>YOUR CURRENT ESTIMATE</p><strong>Thoughtful plans, clear numbers.</strong></div></div>
            <div className="estimate-amount"><span>Grand total</span><strong>{formatCurrency(grandTotal)}</strong></div>
            <div className="estimate-actions">
              <button className="reset-button" onClick={() => dispatch(resetPlanner())}><RotateCcw size={14} /> Start over</button>
              <Button onClick={() => setSummaryOpen(true)}>Review estimate <ArrowRight size={15} /></Button>
            </div>
            <div className="estimate-mini-totals"><span>Rooms {formatCurrency(roomTotal)}</span><span>Equipment {formatCurrency(addonTotal)}</span><span>Catering {formatCurrency(mealTotal)}</span></div>
          </section>
        </div>
      </main>
      <Footer />
      {summaryOpen && <ExpenseSummaryModal onClose={() => setSummaryOpen(false)} />}
    </>
  )
}
