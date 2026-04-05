import { buildHamburger } from "../utils/buildHamburger";
import { levels } from "../data/levels";

export const Game_Initial = {
  phase: "showing",
  score: 0,
  streak: 0,
  targetBurger: null,
  playerName: "",
  difficulty: "easy",
};

export const gameReducer = (state, action) => {
  switch (action.type) {
    case "START_GAME":
      return {
        ...state,
        phase: "showing",
        streak: 0,
        score: 0,
        playerName: action.data.playerName,
        difficulty: action.data.difficulty,
        targetBurger: buildHamburger(levels[action.data.difficulty].layers),
      };
    case "START_BUILDING":
      return { ...state, phase: "building" };
    case "BURGER_COMPLETE":
      return {
        ...state,
        phase: "success",
        streak: state.streak + 1,
        score: state.score + 1,
        targetBurger: buildHamburger(levels[state.difficulty].layers),
      }; //tengo que poner showing porque pasa al siguiente estado
    case "WRONG_ATTEMPT":
      return {
        ...state,
        phase: "error",
        streak: state.streak - 1,
        targetBurger: buildHamburger(levels[state.difficulty].layers),
      };
    case "NEXT_BURGER":
      return {
        ...state,
        phase: "showing",
        targetBurger: buildHamburger(levels[state.difficulty].layers),
      };
    case "GAME_OVER":
      return { ...state, phase: "gameover" };

    default:
      return state;
  }
};
