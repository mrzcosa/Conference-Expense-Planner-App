import { addons, meals, rooms } from '../data/products.js'

export function getPlannerTotals(planner) {
  const roomTotal = rooms.reduce(
    (total, room) => total + room.price * (planner.roomQuantities[room.id] ?? 0),
    0,
  )
  const addonTotal = addons.reduce(
    (total, addon) => total + addon.price * (planner.addonQuantities[addon.id] ?? 0),
    0,
  )
  const mealTotal = meals.reduce(
    (total, meal) =>
      total +
      (planner.selectedMeals.includes(meal.id) ? meal.price * planner.attendees : 0),
    0,
  )

  return { roomTotal, addonTotal, mealTotal, grandTotal: roomTotal + addonTotal + mealTotal }
}
