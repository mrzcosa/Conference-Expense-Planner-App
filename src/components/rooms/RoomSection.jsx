import { ArrowRight, Building2 } from 'lucide-react'
import { useSelector } from 'react-redux'
import { rooms } from '../../data/rooms.js'
import { formatCurrency } from '../../utils/currency.js'
import RoomCard from './RoomCard.jsx'
import SectionHeader from '../common/SectionHeader.jsx'

export default function RoomSection() {
  const quantities = useSelector((state) => state.planner.roomQuantities)
  const total = rooms.reduce((sum, room) => sum + room.price * (quantities[room.id] ?? 0), 0)

  return (
    <section className="planner-section" id="venue">
      <SectionHeader
        eyebrow="01 — THE SETTING"
        title="A space for every kind of gathering."
        description="Choose a room to match the way your people connect. Add as many as your program needs."
        action={<div className="section-count"><Building2 size={15} /> {rooms.length} spaces</div>}
      />
      <div className="room-grid">
        {rooms.map((room, index) => <RoomCard key={room.id} room={room} index={index} />)}
      </div>
      <div className="section-total">
        <span><span className="total-dot" /> Room subtotal</span>
        <div><strong>{formatCurrency(total)}</strong><ArrowRight size={16} /></div>
      </div>
    </section>
  )
}
