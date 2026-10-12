import { ArrowLeft, ArrowRight, Users } from 'lucide-react'
import { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/common/Footer.jsx'
import Navbar from '../components/common/Navbar.jsx'
import RelatedRooms from '../components/rooms/RelatedRooms.jsx'
import RoomAmenities from '../components/rooms/RoomAmenities.jsx'
import RoomBookingPanel from '../components/rooms/RoomBookingPanel.jsx'
import RoomGallery from '../components/rooms/RoomGallery.jsx'
import RoomSpecifications from '../components/rooms/RoomSpecifications.jsx'
import { roomBySlug } from '../data/rooms.js'
import { formatCurrency } from '../utils/currency.js'

export default function RoomDetailsPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const room = roomBySlug(slug)
  useEffect(() => { window.scrollTo(0, 0) }, [slug])
  if (!room) return <Navigate to="/planner#venue" replace />

  return <>
    <Navbar plannerMode onShowDetails={() => navigate('/planner', { state: { openSummary: true } })} />
    <main className="room-details-page">
      <div className="room-detail-heading page-container">
        <Link to="/planner#venue" className="back-link"><ArrowLeft size={14} /> Back to rooms</Link>
        <div className="room-title-row"><div><p className="eyebrow">{room.category}</p><h1>{room.name}</h1><p className="room-subtitle">{room.description}</p><div className="room-title-meta"><span><Users size={15} /> Up to {room.capacity} guests</span><i /><span>{room.category}</span></div></div><div className="room-title-price"><span>From</span><strong>{formatCurrency(room.price)}</strong><small>per room / day</small><a href="#book-room" className="room-book-anchor">Book this room <ArrowRight size={15} /></a></div></div>
      </div>
      <div className="room-detail-content page-container"><RoomGallery room={room} /><div className="room-overview-grid"><section className="room-description-section"><p className="eyebrow">THE SPACE</p><h2>Made for meaningful gatherings.</h2><p>{room.details}</p><h3>Recommended events</h3><div className="event-chips">{room.events.map((event) => <span key={event}>{event}</span>)}</div></section><RoomBookingPanel room={room} /></div><RoomAmenities /><RoomSpecifications room={room} /></div>
      <RelatedRooms currentRoom={room} />
    </main>
    <Footer />
  </>
}
