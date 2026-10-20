**English** · [Español](README.es.md)

# Burger World 🍔

A burger-themed memory game. The player memorizes the order ticket for a few seconds, then has to rebuild the exact burger using drag & drop. When time runs out, the score is saved to a ranking.

## Demo

- 🎮 Play: [burger-world-nine.vercel.app](https://burger-world-nine.vercel.app)
- 🔌 API: [burger-world.onrender.com](https://burger-world.onrender.com)

## Installation and usage

### Prerequisites

- Node.js 18+
- Backend running on `http://localhost:3000` with the endpoints:
  - `GET /scores?difficulty=easy|medium|hard`
  - `POST /scores/newScore`

### Running the project

```bash
npm install
npm run dev
```

## How to play

1. Enter your name and choose a difficulty (easy, medium, hard)
2. Memorize the burger on the ticket — you only have a few seconds
3. Rebuild the burger by dragging the ingredients in the right order
4. When time runs out, your score is saved and you can check the ranking

## Tech stack

| Library                | Purpose                     |
| ----------------------- | ---------------------------- |
| React 19 + Vite         | Framework and bundler         |
| React Router v7         | Page navigation               |
| Chakra UI v3            | Components and design system  |
| react-hook-form         | Start screen form              |
| @tanstack/react-query | Ranking data fetching          |
| @dnd-kit                | Drag & drop for ingredients    |
| framer-motion           | Animations                     |

## Project requirements covered

### 3 pages with React Router

- `/` — Home with the start form
- `/play` — Game screen
- `/ranking` — Score table

### Game state (useReducer)

Global state is managed with `useReducer` in `GameProvider`. It includes: `phase`, `score`, `targetBurger`, `playerName`, `difficulty`, and `scoreSubmitted`.

The game phases are: `showing → building → success/error → score`.

### useEffect for data requests

`Score.jsx` uses `useEffect` to send the score to the API when the round ends:

```js
useEffect(() => {
  if (!scoreSubmitted) {
    mutate({ playerName, score, difficulty });
    dispatch({ type: "SCORE_SUBMITTED" });
  }
}, []);
```

The ranking `GET` uses **React Query** (`useQuery`), which handles the fetching lifecycle internally without writing a manual `useEffect`.

### Own API

The project talks to its own REST API with two endpoints: reading the ranking by difficulty and writing new scores.

### Form with react-hook-form

`InitialForm.jsx` manages the player's name and difficulty with built-in validation.

### Reusable components

`IngredientPiece`, `OrderTicket`, `Draggable`, `DropZone`, `GameInfo`, `Layout`, `NavBar`, among others.

### Custom hooks

- `useCountdown` — timer that auto-dispatches when it reaches 0
- `useGetScores` — fetches the ranking by difficulty
- `usePostScore` — sends the score to the API

### useContext

`GameContext` is consumed by `Play`, `Score`, `Ranking`, `InitialForm`, and `useCountdown`.

## Project structure

```
src/
├── components/
│   ├── game/       # Game pieces (drag & drop, ticket, ingredients)
│   └── layout/     # Header, Footer, NavBar, Layout
├── context/        # GameContext (createContext)
├── provider/       # GameProvider (useReducer + Provider)
├── reducer/        # gameReducer + initial state
├── hooks/          # useCountdown, useGetScores, usePostScore
├── pages/          # Home, Play, Score, Ranking
├── utils/          # buildHamburger, compareHamburger
├── data/           # ingredients, levels, scoreMessages
└── theme.js        # Chakra UI color tokens
```
