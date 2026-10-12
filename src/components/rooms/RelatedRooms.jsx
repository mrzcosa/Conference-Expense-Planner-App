import { ArrowRight, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { rooms } from '../../data/rooms.js'
import { formatCurrency } from '../../utils/currency.js'

export default function RelatedRooms({ currentRoom }) {
  return <section className="related-rooms page-container"><div className="related-heading"><div><p className="eyebrow">FIND YOUR FIT</p><h2>Explore Other Rooms</h2></div><Link to="/planner#venue">All rooms <ArrowRight size={15} /></Link></div><div className="related-grid">{rooms.filter((room) => room.id !== currentRoom.id).map((room) => <Link className="related-room-card" to={`/rooms/${room.slug}`} key={room.id}><img src={room.image} alt="" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85' }} /><div><h3>{room.name}</h3><p><Users size={13} /> Up to {room.capacity} guests</p><strong>{formatCurrency(room.price)} <small>/ room / day</small></strong></div></Link>)}</div></section>
}
