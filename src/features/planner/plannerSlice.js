import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  roomQuantities: {},
  addonQuantities: {},
  attendees: 0,
  selectedMeals: [],
}

const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    incrementQuantity(state, action) {
      const { category, id } = action.payload
      const quantities = category === 'room' ? state.roomQuantities : state.addonQuantities
      quantities[id] = (quantities[id] ?? 0) + 1
    },
    decrementQuantity(state, action) {
      const { category, id } = action.payload
      const quantities = category === 'room' ? state.roomQuantities : state.addonQuantities
      quantities[id] = Math.max(0, (quantities[id] ?? 0) - 1)
    },
    setAttendees(state, action) {
      const value = Number(action.payload)
      state.attendees = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0
    },
    toggleMeal(state, action) {
      const mealId = action.payload
      state.selectedMeals = state.selectedMeals.includes(mealId)
        ? state.selectedMeals.filter((id) => id !== mealId)
        : [...state.selectedMeals, mealId]
    },
    resetPlanner() {
      return initialState
    },
  },
})

export const {
  incrementQuantity,
  decrementQuantity,
  setAttendees,
  toggleMeal,
  resetPlanner,
} = plannerSlice.actions
export default plannerSlice.reducer
