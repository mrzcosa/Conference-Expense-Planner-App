import { addons, meals, rooms } from '../../data/products.js'
import { formatCurrency } from '../../utils/currency.js'

export default function ExpenseSummaryTable({ planner }) {
  const rows = [
    ...rooms
      .filter((room) => planner.roomQuantities[room.id] > 0)
      .map((room) => ({
        name: room.name,
        unitCost: room.price,
        quantity: `${planner.roomQuantities[room.id]} ${planner.roomQuantities[room.id] === 1 ? 'room' : 'rooms'}`,
        subtotal: room.price * planner.roomQuantities[room.id],
        type: 'Venue',
      })),
    ...addons
      .filter((addon) => planner.addonQuantities[addon.id] > 0)
      .map((addon) => ({
        name: addon.name,
        unitCost: addon.price,
        quantity: `${planner.addonQuantities[addon.id]} ${planner.addonQuantities[addon.id] === 1 ? 'unit' : 'units'}`,
        subtotal: addon.price * planner.addonQuantities[addon.id],
        type: 'Equipment',
      })),
    ...meals
      .filter((meal) => planner.selectedMeals.includes(meal.id))
      .map((meal) => ({
        name: meal.name,
        unitCost: meal.price,
        quantity: `${planner.attendees} ${planner.attendees === 1 ? 'attendee' : 'attendees'}`,
        subtotal: meal.price * planner.attendees,
        type: 'Catering',
      })),
  ]

  if (rows.length === 0) {
    return (
      <div className="summary-empty">
        <span className="empty-icon">✳</span>
        <strong>Your plan is a blank canvas.</strong>
        <p>Add a room, equipment, or a meal to see your expense breakdown.</p>
      </div>
    )
  }

  return (
    <div className="summary-table-wrap">
      <table className="summary-table">
        <thead>
          <tr><th>Item name</th><th>Unit cost</th><th>Quantity</th><th>Subtotal</th></tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.type}-${row.name}`}>
              <td><span className="summary-item-type">{row.type}</span><strong>{row.name}</strong></td>
              <td>{formatCurrency(row.unitCost)}{row.type === 'Catering' && <small> / person</small>}</td>
              <td>{row.quantity}</td>
              <td className="summary-subtotal">{formatCurrency(row.subtotal)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
