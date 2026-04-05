import { useReducer } from "react";
import { Game_Initial, gameReducer } from "../reducer/Game.Reducer";
import { GameContext } from "../context/GameContext";

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, Game_Initial);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
