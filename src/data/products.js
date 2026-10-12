import { rooms } from './rooms.js'
export { rooms }

export const addons = [
  {
    id: 'speakers',
    name: 'Speakers',
    price: 35,
    icon: 'Volume2',
    description: 'Room-filling, balanced audio',
  },
  {
    id: 'microphones',
    name: 'Microphones',
    price: 45,
    icon: 'Mic2',
    description: 'Clear sound for every speaker',
  },
  {
    id: 'whiteboards',
    name: 'Whiteboards',
    price: 80,
    icon: 'PanelsTopLeft',
    description: 'For ideas worth sharing',
  },
  {
    id: 'projectors',
    name: 'Projectors',
    price: 200,
    icon: 'Projector',
    description: 'A bright, crisp presentation',
  },
  {
    id: 'signage',
    name: 'Signage',
    price: 80,
    icon: 'Signpost',
    description: 'Guide guests with confidence',
  },
]

export const meals = [
  { id: 'breakfast', name: 'Breakfast', price: 50, time: '8:00 – 10:00 AM' },
  { id: 'lunch', name: 'Lunch', price: 60, time: '12:00 – 2:00 PM' },
  { id: 'high-tea', name: 'High Tea', price: 25, time: '3:00 – 4:30 PM' },
  { id: 'dinner', name: 'Dinner', price: 70, time: '6:00 – 8:00 PM' },
]
