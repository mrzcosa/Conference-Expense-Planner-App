import { ArrowUpRight, Check, Minus, Plus, Users } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../../features/planner/plannerSlice.js'
import { formatCurrency } from '../../utils/currency.js'
import { Link } from 'react-router-dom'

export default function RoomCard({ room, index }) {
  const dispatch = useDispatch()
  const quantity = useSelector((state) => state.planner.roomQuantities[room.id] ?? 0)

  return (
    <article className={`room-card ${quantity ? 'room-card-selected' : ''}`}>
      <Link className="room-card-link" to={`/rooms/${room.slug}`} aria-label={`View details for ${room.name}`} />
      <div className="room-image-wrap">
        <img src={room.image} alt={room.name} loading="lazy" />
        <span className="room-index">0{index + 1}</span>
        {room.tag && <span className="room-tag">{room.tag}</span>}
        {quantity > 0 && <span className="room-selected"><Check size={13} /> Added</span>}
      </div>
      <div className="room-card-content">
        <div className="room-card-title">
          <div><h3>{room.name}</h3><p><Users size={14} /> Up to {room.capacity} guests</p></div>
          <ArrowUpRight className="room-arrow" size={17} />
        </div>
        <p className="room-description">{room.description}</p>
        <div className="room-card-bottom">
          <div className="price-block">
            <strong>{formatCurrency(room.price)}</strong>
            <span>per room / day</span>
          </div>
          <div className="quantity-control room-quantity-control" aria-label={`${room.name} quantity`}>
            <button
              aria-label={`Remove one ${room.name}`}
              onClick={() => dispatch(decrementQuantity({ category: 'room', id: room.id }))}
              disabled={quantity === 0}
            ><Minus size={15} /></button>
            <span aria-live="polite">{quantity}</span>
            <button
              aria-label={`Add one ${room.name}`}
              onClick={() => dispatch(incrementQuantity({ category: 'room', id: room.id }))}
            ><Plus size={15} /></button>
          </div>
        </div>
        {quantity > 0 && <div className="room-subtotal">{quantity} × {formatCurrency(room.price)} <b>{formatCurrency(quantity * room.price)}</b></div>}
      </div>
    </article>
  )
}
