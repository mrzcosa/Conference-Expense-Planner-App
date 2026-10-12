const image = (id, width = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=88`

export const rooms = [
  {
    id: 'auditorium', slug: 'auditorium-hall', name: 'Auditorium Hall', category: 'Grand event space', capacity: 200, price: 5500,
    image: image('photo-1505373877841-8d25f7d46678', 900),
    gallery: ['photo-1505373877841-8d25f7d46678', 'photo-1475721027785-f74eccf877e2', 'photo-1540575467063-178a50c2df87', 'photo-1511578314322-379afb476865'].map((id) => image(id)),
    description: 'A grand setting for keynotes and all-hands sessions.',
    details: 'An impressive, spacious setting for bringing a large audience together. Auditorium Hall is suited to keynote talks, major conferences, seminars, and company-wide presentations, with a generous layout that keeps attention on the program and the people leading it.', tag: 'Largest capacity',
    events: ['Keynotes', 'Large conferences', 'Seminars', 'Company-wide presentations'],
    setup: 'A large audience-focused format for shared presentations and talks.',
  },
  {
    id: 'conference', slug: 'conference-room', name: 'Conference Room', category: 'Executive meeting space', capacity: 15, price: 3500,
    image: image('photo-1497366754035-f200968a6e72', 900),
    gallery: ['photo-1497366754035-f200968a6e72', 'photo-1497366811353-6870744d04b2', 'photo-1497366216548-37526070297c', 'photo-1524758631624-e2822e304c36'].map((id) => image(id)),
    description: 'An intimate, fully equipped room for focused discussion.',
    details: 'A focused, intimate space for smaller groups to work through decisions together. Its conference-room setting is a natural fit for executive meetings, planning sessions, and thoughtful discussions where everyone can contribute.',
    events: ['Executive meetings', 'Planning sessions', 'Focused discussions'],
    setup: 'A close-knit meeting format suited to discussion around a shared table.',
  },
  {
    id: 'presentation', slug: 'presentation-room', name: 'Presentation Room', category: 'Flexible presentation space', capacity: 50, price: 700,
    image: image('photo-1556761175-b413da4baf72', 900),
    gallery: ['photo-1556761175-b413da4baf72', 'photo-1517245386807-bb43f82c33c4', 'photo-1505373877841-8d25f7d46678', 'photo-1519389950473-47ba0277781c'].map((id) => image(id)),
    description: 'A flexible space designed for talks and workshops.',
    details: 'A versatile space for sharing ideas with a medium-sized audience. Presentation Room works well for training, workshops, lectures, and presentations, giving hosts room to guide a session while keeping the group engaged.', tag: 'Great value',
    events: ['Training sessions', 'Workshops', 'Lectures', 'Presentations'],
    setup: 'A presenter-led arrangement suited to talks, learning, and group activities.',
  },
  {
    id: 'large-meeting', slug: 'large-meeting-room', name: 'Large Meeting Room', category: 'Team collaboration space', capacity: 10, price: 900,
    image: image('photo-1497366811353-6870744d04b2', 900),
    gallery: ['photo-1497366811353-6870744d04b2', 'photo-1497366754035-f200968a6e72', 'photo-1497366216548-37526070297c', 'photo-1524758631624-e2822e304c36'].map((id) => image(id)),
    description: 'A comfortable boardroom for small teams and breakouts.',
    details: 'A comfortable setting for small teams to collaborate, brainstorm, and break into focused discussions. The room offers a practical choice for teams looking for dedicated space to make progress together.',
    events: ['Team meetings', 'Brainstorming sessions', 'Breakout discussions'],
    setup: 'A small-group collaborative format for team conversation and planning.',
  },
  {
    id: 'small-meeting', slug: 'small-meeting-room', name: 'Small Meeting Room', category: 'Private discussion space', capacity: 5, price: 1100,
    image: image('photo-1497366216548-37526070297c', 900),
    gallery: ['photo-1497366216548-37526070297c', 'photo-1497366754035-f200968a6e72', 'photo-1497366811353-6870744d04b2', 'photo-1524758631624-e2822e304c36'].map((id) => image(id)),
    description: 'A quiet, private space for one-to-one conversations.',
    details: 'A quiet, compact space for conversations that benefit from privacy and focus. Small Meeting Room is well suited to interviews, one-to-one meetings, and private discussions with a small group.',
    events: ['Private discussions', 'Interviews', 'One-on-one meetings'],
    setup: 'A private, small-group format for direct conversation.',
  },
]

export const roomBySlug = (slug) => rooms.find((room) => room.slug === slug)
