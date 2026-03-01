# 🌏 PurvaYatra — East India Tourism Platform

A complete, client-side digital tourism platform for East India built with **Vite + React + Tailwind CSS**.

## Features

- 🏛️ **Destinations** — 12 destinations with filtering by category, difficulty, state, and search
- 🎭 **Experiences** — Browse destinations by tourism type (Heritage, Eco, Adventure, etc.)
- 🍽️ **Restaurants** — Curated restaurants with cuisine, price range, and veg filters
- 🍲 **Recipes** — Traditional East India recipes with step-by-step modal view
- 💡 **Fun Facts** — 15+ fascinating facts filterable by category and state
- 🗺️ **Plan Trip** — 3-step trip planning form with preferences, budget, and contact info
- 🔍 **URL-based search** — Search state persists in URL for sharing/linking

## Tech Stack

- **Vite** — Fast build tool and dev server
- **React 18** — UI library with hooks
- **React Router v6** — Client-side routing
- **Tailwind CSS v3** — Utility-first styling
- **Pure client-side** — No backend required

## Project Structure

```
src/
├── constants/
│   └── index.js          # ALL data — destinations, restaurants, recipes, facts, etc.
├── utils/
│   └── index.js          # Filter, sort, and utility functions
├── hooks/
│   └── index.js          # useFilter, useScrollTop, useLocalStorage
├── components/
│   ├── Navbar.jsx         # Sticky transparent → solid navbar
│   ├── Footer.jsx         # Multi-column footer
│   ├── UI.jsx             # Shared: Badge, StarRating, SearchBar, FilterChip, etc.
│   └── DestinationCard.jsx # Reusable destination card
└── pages/
    ├── HomePage.jsx
    ├── DestinationsPage.jsx
    ├── DestinationDetailPage.jsx
    ├── ExperiencesPage.jsx
    ├── RestaurantsPage.jsx
    ├── RecipesPage.jsx
    ├── FunFactsPage.jsx
    └── PlanTripPage.jsx
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Extending the Platform

### Adding more destinations
Open `src/constants/index.js` and add to the `DESTINATIONS` array following the existing schema:
```js
{
  id: 13,
  name: "Your Place",
  state: "State Name",
  category: ["heritage", "eco"], // use ids from TOURISM_CATEGORIES
  image: "https://...",
  description: "...",
  highlights: ["..."],
  bestTime: "Oct–Mar",
  duration: "2–3 days",
  difficulty: "Easy" | "Moderate" | "Hard",
  rating: 4.5,
  reviews: 1000,
  lat: 0.0,
  lng: 0.0,
}
```

### Adding restaurants / recipes / facts
Same pattern — just extend the arrays in `src/constants/index.js`.

## Design System

- **Color palette**: Stone (dark backgrounds) + Amber (accent/brand)
- **Dark theme** throughout for premium feel
- **Typography**: Georgia serif for body text
- **Components**: All reusable from `src/components/UI.jsx`
