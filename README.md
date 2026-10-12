# Conference Expense Planner

A responsive React + Vite app for planning conference venues, AV equipment, and catering. Selections are managed with Redux Toolkit and the expense estimate updates immediately.

## Run locally

From this project directory:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Stack

- React and JavaScript (JSX), built with Vite
- Tailwind CSS 4
- React Router for the landing and planner pages
- Redux Toolkit and React Redux for planner selections
- Lucide React icons

## Planner features

- Room selection with capacities, daily prices, and quantity controls
- AV equipment quantities and live subtotals
- Attendee count and selectable per-person meal options
- Expense summary modal with empty state, USD totals, and print support
- Responsive layout, section navigation, and a reset action

Product prices and option data live in `src/data/products.js`. Planner state and derived totals are separated into `src/features/planner/` and `src/utils/`.
