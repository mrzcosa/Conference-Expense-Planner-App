import { Sparkles } from 'lucide-react'
import { useSelector } from 'react-redux'
import { addons } from '../../data/products.js'
import { formatCurrency } from '../../utils/currency.js'
import AddonCard from './AddonCard.jsx'
import SectionHeader from '../common/SectionHeader.jsx'

export default function AddonsSection() {
  const quantities = useSelector((state) => state.planner.addonQuantities)
  const total = addons.reduce((sum, addon) => sum + addon.price * (quantities[addon.id] ?? 0), 0)

  return (
    <section className="planner-section" id="addons">
      <SectionHeader
        eyebrow="02 — THE DETAILS"
        title="Everything you need to make it seamless."
        description="The finishing touches that make every session sound, look, and feel right."
        action={<div className="section-count"><Sparkles size={15} /> {addons.length} essentials</div>}
      />
      <div className="addons-grid">
        {addons.map((addon) => <AddonCard key={addon.id} addon={addon} />)}
      </div>
      <div className="section-total">
        <span><span className="total-dot" /> Add-ons subtotal</span>
        <div><strong>{formatCurrency(total)}</strong><span className="total-caption">All equipment</span></div>
      </div>
    </section>
  )
}
