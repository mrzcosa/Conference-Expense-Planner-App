import { Check, Utensils, Users } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { meals } from '../../data/products.js'
import { setAttendees, toggleMeal } from '../../features/planner/plannerSlice.js'
import { formatCurrency } from '../../utils/currency.js'
import SectionHeader from '../common/SectionHeader.jsx'

export default function MealsSection() {
  const dispatch = useDispatch()
  const { attendees, selectedMeals } = useSelector((state) => state.planner)
  const total = meals.reduce(
    (sum, meal) => sum + (selectedMeals.includes(meal.id) ? meal.price * attendees : 0),
    0,
  )

  function handleAttendeeChange(event) {
    const value = event.target.value
    if (value === '') {
      dispatch(setAttendees(0))
      return
    }
    dispatch(setAttendees(value))
  }

  return (
    <section className="planner-section meals-section" id="meals">
      <SectionHeader
        eyebrow="03 — A SEAT AT THE TABLE"
        title="Good conversations happen over good food."
        description="Build a menu around your day. Pricing is per person, per selected meal."
        action={<div className="section-count"><Utensils size={15} /> Catering</div>}
      />
      <div className="meal-attendees">
        <div className="meal-attendees-icon"><Users size={18} /></div>
        <div className="attendee-copy"><strong>How many guests are you welcoming?</strong><span>We’ll use this for your catering estimate.</span></div>
        <label className="attendee-input">
          <span className="sr-only">Number of attendees</span>
          <input
            type="number"
            inputMode="numeric"
            min="0"
            step="1"
            value={attendees}
            onChange={handleAttendeeChange}
            onBlur={(event) => {
              if (event.target.value === '' || Number(event.target.value) < 0) dispatch(setAttendees(0))
            }}
          />
          <span>guests</span>
        </label>
      </div>
      <div className="meal-list">
        {meals.map((meal) => {
          const selected = selectedMeals.includes(meal.id)
          const subtotal = selected ? meal.price * attendees : 0
          return (
            <label key={meal.id} className={`meal-row ${selected ? 'meal-row-selected' : ''}`}>
              <input type="checkbox" checked={selected} onChange={() => dispatch(toggleMeal(meal.id))} />
              <span className="meal-checkbox" aria-hidden="true">{selected && <Check size={13} />}</span>
              <span className="meal-name"><strong>{meal.name}</strong><small>{meal.time}</small></span>
              <span className="meal-rate">{formatCurrency(meal.price)} <small>/ person</small></span>
              <span className="meal-calc">{selected && attendees > 0 ? `${attendees} guests × ${formatCurrency(meal.price)}` : selected ? 'Add guests to estimate' : 'Not selected'}</span>
              <strong className="meal-subtotal">{selected ? formatCurrency(subtotal) : '—'}</strong>
            </label>
          )
        })}
      </div>
      <div className="section-total">
        <span><span className="total-dot" /> Catering subtotal</span>
        <div><strong>{formatCurrency(total)}</strong><span className="total-caption">{selectedMeals.length} meals selected</span></div>
      </div>
    </section>
  )
}
