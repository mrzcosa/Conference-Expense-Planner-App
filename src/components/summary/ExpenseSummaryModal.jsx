import { ArrowDownToLine, X } from 'lucide-react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getPlannerTotals } from '../../utils/plannerCalculations.js'
import { formatCurrency } from '../../utils/currency.js'
import ExpenseSummaryTable from './ExpenseSummaryTable.jsx'

export default function ExpenseSummaryModal({ onClose }) {
  const planner = useSelector((state) => state.planner)
  const totals = getPlannerTotals(planner)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [onClose])

  function handlePrint() {
    window.print()
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <section className="summary-modal" role="dialog" aria-modal="true" aria-labelledby="summary-title">
        <div className="modal-topline"><span>YOUR EVENT, AT A GLANCE</span><button className="modal-close" onClick={onClose} aria-label="Close expense summary"><X size={19} /></button></div>
        <div className="modal-heading">
          <div><p className="eyebrow">THE BREAKDOWN</p><h2 id="summary-title">Your conference estimate.</h2></div>
          <p>A considered plan, with every detail accounted for.</p>
        </div>
        <ExpenseSummaryTable planner={planner} />
        <div className="summary-totals">
          <div><span>Room expenses</span><strong>{formatCurrency(totals.roomTotal)}</strong></div>
          <div><span>Add-on expenses</span><strong>{formatCurrency(totals.addonTotal)}</strong></div>
          <div><span>Meal expenses</span><strong>{formatCurrency(totals.mealTotal)}</strong></div>
          <div className="summary-grand-total"><span>Grand total <small>for the conference</small></span><strong>{formatCurrency(totals.grandTotal)}</strong></div>
        </div>
        <div className="modal-footer">
          <p>Estimate shown in USD. Final venue rates may vary.</p>
          <button className="print-button" onClick={handlePrint}><ArrowDownToLine size={15} /> Print summary</button>
        </div>
      </section>
    </div>
  )
}
