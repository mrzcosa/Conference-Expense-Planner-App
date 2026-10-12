import { ArrowRight, CalendarDays, ClipboardList, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from './Button.jsx'

export default function Navbar({ onShowDetails, plannerMode = false }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const links = plannerMode
    ? [
        ['Venue', 'venue'],
        ['Add-ons', 'addons'],
        ['Meals', 'meals'],
      ]
    : [
        ['How it works', 'how-it-works'],
        ['Features', 'features'],
      ]

  function goToSection(id) {
    setMenuOpen(false)
    if (location.pathname !== '/planner' && plannerMode) {
      navigate(`/planner#${id}`)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`site-nav ${plannerMode ? 'planner-nav' : 'home-nav'}`}>
      <Link className="brand" to="/" aria-label="Conference Planner home">
        <span className="brand-mark"><CalendarDays size={19} strokeWidth={2.2} /></span>
        <span className="brand-name">Conference <span className="brand-accent">Expense Planner</span></span>
      </Link>
      <button
        className="mobile-menu-toggle"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`} aria-label="Main navigation">
        {links.map(([label, id]) => (
          <button key={id} onClick={() => goToSection(id)}>{label}</button>
        ))}
        {plannerMode ? (
          <Button className="nav-summary" onClick={onShowDetails}>
            <ClipboardList size={16} /> Show details
          </Button>
        ) : (
          <Link to="/planner" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Start planning <ArrowRight size={15} />
          </Link>
        )}
      </nav>
    </header>
  )
}
