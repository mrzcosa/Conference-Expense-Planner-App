import { Check, Minus, Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../../features/planner/plannerSlice.js'
import { formatCurrency } from '../../utils/currency.js'

export default function RoomBookingPanel({ room }) {
  const dispatch = useDispatch()
  const quantity = useSelector((state) => state.planner.roomQuantities[room.id] ?? 0)
  const subtotal = room.price * quantity
  return <aside className="room-booking-panel" id="book-room"><p className="eyebrow">BUILD YOUR PLAN</p><h2>Reserve this space</h2><div className="booking-rate"><strong>{formatCurrency(room.price)}</strong><span>per room / day</span></div><div className="booking-quantity"><div><strong>Number of rooms</strong><small>Adjust your selection</small></div><div className="quantity-control"><button aria-label={`Remove one ${room.name}`} disabled={quantity === 0} onClick={() => dispatch(decrementQuantity({ category: 'room', id: room.id }))}><Minus size={15} /></button><span aria-live="polite">{quantity}</span><button aria-label={`Add one ${room.name}`} onClick={() => dispatch(incrementQuantity({ category: 'room', id: room.id }))}><Plus size={15} /></button></div></div><div className="booking-subtotal"><span>Room subtotal</span><strong>{formatCurrency(subtotal)}</strong></div><button className={`booking-add ${quantity ? 'booking-added' : ''}`} onClick={() => { if (!quantity) dispatch(incrementQuantity({ category: 'room', id: room.id })) }} disabled={quantity > 0}>{quantity ? <><Check size={16} /> Added to your plan</> : 'Add to plan'}</button><p className="booking-note">Your room selection is saved with the rest of your planner.</p></aside>
}
