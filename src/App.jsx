import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import PlannerPage from './pages/PlannerPage.jsx'
import RoomDetailsPage from './pages/RoomDetailsPage.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/planner" element={<PlannerPage />} />
      <Route path="/rooms/:slug" element={<RoomDetailsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  )
}
