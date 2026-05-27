import { levels } from "../data/levels";
import { buildHamburger } from "../utils/buildHamburger";

export const Game_Initial = {
  phase: "showing",
  score: 0,
  targetBurger: null,
  playerName: "",
  difficulty: null,
  scoreSubmitted: false,
  timeLeft: 60
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        phase: "showing",
        score: 0,
        playerName: action.data.playerName,
        difficulty: action.data.difficulty,
        targetBurger: buildHamburger(levels[action.data.difficulty].layers),
        timeLeft: 60
      };
    case "START_BUILDING":
      return { ...state, phase: "building" };
    case "BURGER_COMPLETE":
      return {
        ...state,
        phase: "success",
        score: state.score + 1,
        targetBurger: buildHamburger(levels[state.difficulty].layers),
        timeLeft: Math.min(state.timeLeft + 10, 99)
      };
    case "WRONG_ATTEMPT":
      return {
        ...state,
        phase: "error",
        targetBurger: buildHamburger(levels[state.difficulty].layers),
        timeLeft: Math.max(state.timeLeft - 10, 5)
      };
    case "NEXT_BURGER":
      return {
        ...state,
        phase: "showing",
        targetBurger: buildHamburger(levels[state.difficulty].layers),
      };

    case "GAME_OVER":
      return { ...state, phase: "score", scoreSubmitted: false };
    case "SCORE_SUBMITTED":
      return { ...state, scoreSubmitted: true };

    case "TICK":
      return { ...state, timeLeft: state.timeLeft - 1 };
       
    default:
      return state;
  }
};
