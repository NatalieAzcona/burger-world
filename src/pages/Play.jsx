import { useContext } from "react";
import OrderTicket from "../components/game/OrderTicket";
import { GameContext } from "../context/GameContext";
import BurgerBuilder from "../components/game/BurgerBuilder";
import WrongBurger from "../components/game/WrongBurger";
import CorrectBurger from "../components/game/CorrectBurger";
import GameOver from "../components/game/GameOver";
import useCountdown from "../hooks/useCountdown";

const Play = () => {
  const { state, dispatch } = useContext(GameContext);
  const countdown = useCountdown({sec: 5, onComplete: "START_BUILDING", activePhase: "showing" , currentPhase: state.phase});

  const views = {
    showing: <OrderTicket />,
    building: <BurgerBuilder />,
    error: <WrongBurger />,
    success: <CorrectBurger />,
    gameover: <GameOver />,
  };

  return (
    <>
      {state.phase === "showing" ? countdown : null}
      {views[state.phase]}
    </>
  );
};
export default Play;
