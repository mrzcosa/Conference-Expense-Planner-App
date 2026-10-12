import { Mic2, Minus, PanelsTopLeft, Plus, Projector, Signpost, Volume2 } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../../features/planner/plannerSlice.js'
import { formatCurrency } from '../../utils/currency.js'

export default function AddonCard({ addon }) {
  const dispatch = useDispatch()
  const quantity = useSelector((state) => state.planner.addonQuantities[addon.id] ?? 0)
  const icons = { Volume2, Mic2, PanelsTopLeft, Projector, Signpost }
  const Icon = icons[addon.icon]

  return (
    <article className={`addon-card ${quantity ? 'addon-card-selected' : ''}`}>
      <div className="addon-top">
        <span className="addon-icon">{Icon && <Icon size={21} strokeWidth={1.7} />}</span>
        <div className="quantity-control compact">
          <button aria-label={`Remove one ${addon.name}`} disabled={quantity === 0} onClick={() => dispatch(decrementQuantity({ category: 'addon', id: addon.id }))}><Minus size={14} /></button>
          <span aria-live="polite">{quantity}</span>
          <button aria-label={`Add one ${addon.name}`} onClick={() => dispatch(incrementQuantity({ category: 'addon', id: addon.id }))}><Plus size={14} /></button>
        </div>
      </div>
      <h3>{addon.name}</h3>
      <p>{addon.description}</p>
      <div className="addon-card-bottom">
        <span>{formatCurrency(addon.price)} <small>/ unit</small></span>
        {quantity > 0 && <b>{formatCurrency(quantity * addon.price)}</b>}
      </div>
    </article>
  )
}
