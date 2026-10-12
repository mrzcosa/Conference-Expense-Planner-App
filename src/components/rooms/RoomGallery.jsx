import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Images, X } from 'lucide-react'

const fallback = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85'

export default function RoomGallery({ room }) {
  const [selected, setSelected] = useState(0)
  const [open, setOpen] = useState(false)
  const move = (direction) => setSelected((current) => (current + direction + room.gallery.length) % room.gallery.length)

  useEffect(() => {
    if (!open) return undefined
    const keyHandler = (event) => {
      if (event.key === 'Escape') setOpen(false)
      if (event.key === 'ArrowLeft') setSelected((current) => (current - 1 + room.gallery.length) % room.gallery.length)
      if (event.key === 'ArrowRight') setSelected((current) => (current + 1) % room.gallery.length)
    }
    window.addEventListener('keydown', keyHandler)
    return () => window.removeEventListener('keydown', keyHandler)
  }, [open, room.gallery.length])

  const imageError = (event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallback }
  return (
    <>
      <section className="details-gallery" aria-label={`${room.name} photos`}>
        <div className="details-gallery-main">
          <img src={room.gallery[selected]} alt={`${room.name} view ${selected + 1}`} onError={imageError} />
          <button className="view-all-photos" onClick={() => setOpen(true)}><Images size={15} /> View all photos</button>
        </div>
        <div className="details-gallery-thumbs">
          {room.gallery.map((photo, index) => <button key={photo} onClick={() => setSelected(index)} aria-label={`Show photo ${index + 1}`} aria-pressed={selected === index} className={selected === index ? 'gallery-thumb gallery-thumb-active' : 'gallery-thumb'}><img src={photo} alt="" onError={imageError} /></button>)}
        </div>
      </section>
      {open && <div className="room-lightbox" role="dialog" aria-modal="true" aria-label={`${room.name} photo gallery`} onClick={() => setOpen(false)}>
        <button className="lightbox-close" aria-label="Close gallery" onClick={() => setOpen(false)}><X /></button>
        <button className="lightbox-nav" aria-label="Previous photo" onClick={(event) => { event.stopPropagation(); move(-1) }}><ChevronLeft /></button>
        <figure onClick={(event) => event.stopPropagation()}><img src={room.gallery[selected]} alt={`${room.name} view ${selected + 1}`} onError={imageError} /><figcaption>{room.name} · {selected + 1} of {room.gallery.length}</figcaption></figure>
        <button className="lightbox-nav" aria-label="Next photo" onClick={(event) => { event.stopPropagation(); move(1) }}><ChevronRight /></button>
      </div>}
    </>
  )
}
