import { ArrowUpRight, CalendarDays } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link className="brand footer-brand" to="/">
        <span className="brand-mark"><CalendarDays size={18} /></span>
        <span>Conference Expense Planner</span>
      </Link>
      <p>Thoughtful events start with a clear plan.</p>
      <a href="#top">Back to top <ArrowUpRight size={14} /></a>
      <span className="footer-copyright">© {new Date().getFullYear()} Conference Planner</span>
    </footer>
  )
}
