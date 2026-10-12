import { Users, Tag, CalendarDays, LayoutPanelTop, DollarSign } from 'lucide-react'
import { formatCurrency } from '../../utils/currency.js'

export default function RoomSpecifications({ room }) {
  const items = [
    [Users, 'Maximum capacity', `Up to ${room.capacity} guests`],
    [Tag, 'Room type', room.category],
    [CalendarDays, 'Recommended for', room.events.slice(0, 2).join(', ')],
    [LayoutPanelTop, 'Suggested setup', room.setup],
    [DollarSign, 'Rate', `${formatCurrency(room.price)} / room / day`],
  ]
  return <section className="room-specs-section"><p className="eyebrow">AT A GLANCE</p><h2>Room specifications</h2><div className="room-specs-grid">{items.map(([Icon, label, value]) => <div className="room-spec-card" key={label}><span><Icon size={17} /></span><div><small>{label}</small><strong>{value}</strong></div></div>)}</div></section>
}
