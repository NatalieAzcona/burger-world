# Burger World 🍔

Juego de memoria basado en hamburguesas. El jugador memoriza el ticket del pedido durante unos segundos y luego debe reconstruir la hamburguesa exacta usando drag & drop. Al finalizar el tiempo, la puntuación se guarda en un ranking.

## Demo

- 🎮 Jugar: [burger-world-nine.vercel.app](https://burger-world-nine.vercel.app)
- 🔌 API: [burger-world.onrender.com](https://burger-world.onrender.com)

## Instalación y uso

### Requisitos previos

- Node.js 18+
- Backend corriendo en `http://localhost:3000` con los endpoints:
  - `GET /scores?difficulty=easy|medium|hard`
  - `POST /scores/newScore`

### Arrancar el proyecto

```bash
npm install
npm run dev
```

## Cómo se juega

1. Introduce tu nombre y elige la dificultad (fácil, medio, difícil)
2. Memoriza la hamburguesa del ticket — tienes pocos segundos
3. Reconstruye la hamburguesa arrastrando los ingredientes al orden correcto
4. Al acabar el tiempo, se guarda tu puntuación y puedes ver el ranking

## Tecnologías

| Librería              | Uso                             |
| --------------------- | ------------------------------- |
| React 19 + Vite       | Framework y bundler             |
| React Router v7       | Navegación entre páginas        |
| Chakra UI v3          | Componentes y sistema de diseño |
| react-hook-form       | Formulario de inicio            |
| @tanstack/react-query | Fetching del ranking            |
| @dnd-kit              | Drag & drop de ingredientes     |
| framer-motion         | Animaciones                     |

## Requisitos del proyecto cubiertos

### 3 páginas con React Router

- `/` — Home con formulario de inicio
- `/play` — Pantalla de juego
- `/ranking` — Tabla de puntuaciones

### Estados del juego (useReducer)

El estado global se gestiona con `useReducer` en `GameProvider`. Incluye: `phase`, `score`, `targetBurger`, `playerName`, `difficulty` y `scoreSubmitted`.

Las fases del juego son: `showing → building → success/error → score`.

### useEffect para peticiones de datos

En `Score.jsx` se usa `useEffect` para enviar la puntuación a la API al terminar la partida:

```js
useEffect(() => {
  if (!scoreSubmitted) {
    mutate({ playerName, score, difficulty });
    dispatch({ type: "SCORE_SUBMITTED" });
  }
}, []);
```

Para el GET del ranking se usa **React Query** (`useQuery`), que gestiona internamente el ciclo de fetching sin necesidad de escribir un `useEffect` manual.

### API propia

El proyecto se conecta a una API REST propia con dos endpoints: lectura del ranking por dificultad y escritura de nuevas puntuaciones.

### Formulario con react-hook-form

`InitialForm.jsx` gestiona nombre del jugador y dificultad con validación integrada.

### Componentes reutilizables

`IngredientPiece`, `OrderTicket`, `Draggable`, `DropZone`, `GameInfo`, `Layout`, `NavBar`, entre otros.

### Custom hooks

- `useCountdown` — temporizador con dispatch automático al llegar a 0
- `useGetScores` — fetching del ranking por dificultad
- `usePostScore` — envío de puntuación a la API

### useContext

`GameContext` es consumido por `Play`, `Score`, `Ranking`, `InitialForm` y `useCountdown`.

## Estructura del proyecto

```
src/
├── components/
│   ├── game/       # Piezas del juego (drag & drop, ticket, ingredientes)
│   └── layout/     # Header, Footer, NavBar, Layout
├── context/        # GameContext (createContext)
├── provider/       # GameProvider (useReducer + Provider)
├── reducer/        # gameReducer + estado inicial
├── hooks/          # useCountdown, useGetScores, usePostScore
├── pages/          # Home, Play, Score, Ranking
├── utils/          # buildHamburger, compareHamburger
├── data/           # ingredients, levels, scoreMessages
└── theme.js        # Tokens de color de Chakra UI
```
