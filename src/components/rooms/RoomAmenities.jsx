import { Building2, Check, Wifi, Snowflake, Monitor, Projector, Mic2, PanelsTopLeft, Plug, Headset } from 'lucide-react'
import { addons } from '../../data/products.js'
import { formatCurrency } from '../../utils/currency.js'

const optionalIcons = { speakers: Mic2, microphones: Mic2, whiteboards: PanelsTopLeft, projectors: Projector, signage: Monitor }

export default function RoomAmenities() {
  return (
    <section className="room-amenities-section">
      <p className="eyebrow">YOUR BOOKING</p><h2>What’s Included in Your Booking</h2>
      <p className="room-section-intro">The listed rate covers private use of the selected room for one day. Specific equipment is offered separately as optional add-ons.</p>
      <div className="amenity-grid">
        <article className="amenity-card"><span><Building2 size={19} /></span><div><strong>Private room rental</strong><p>Use of your selected space for the booked day.</p></div><Check className="amenity-check" size={16} /></article>
      </div>
      <div className="optional-equipment"><h3>Optional equipment and services</h3><p>Choose these separately in the planner; they are not included in the room rate.</p><div className="optional-addons">{addons.map((addon) => { const Icon = optionalIcons[addon.id] || Plug; return <div key={addon.id}><Icon size={16} /><span>{addon.name}</span><strong>+{formatCurrency(addon.price)}</strong></div> })}<div><Wifi size={16} /><span>Wi-Fi access</span><small>Not specified as included</small></div><div><Snowflake size={16} /><span>Air conditioning</span><small>Not specified as included</small></div><div><Plug size={16} /><span>Power outlets</span><small>Not specified as included</small></div><div><Headset size={16} /><span>Event support</span><small>Not specified as included</small></div></div></div>
    </section>
  )
}
