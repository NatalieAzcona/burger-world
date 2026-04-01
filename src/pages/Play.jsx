import { useContext, useEffect } from "react";
import OrderTicket from "../components/game/OrderTicket";
import { GameContext } from "../context/GameContext";
import BurgerBuilder from "../components/game/BurgerBuilder";
import WrongBurger from "../components/game/WrongBurger";
import CorrectBurger from "../components/game/CorrectBurger";
import useCountdown from "../hooks/useCountdown";
import { useNavigate } from "react-router-dom";
import Score from "../pages/Score";


const Play = () => {
  const { state } = useContext(GameContext);
  
  const gameTimer = useCountdown({sec: 60, onComplete: "GAME_OVER"});
  
  //si no hay dificulty que redirija
  const navigate = useNavigate()
  useEffect(() => {
    if (!state.difficulty) navigate("/")
  }, [])
  
  const views = {
    showing: <OrderTicket gameTimer={gameTimer} />,
    building: <BurgerBuilder gameTimer={gameTimer} />,
    error: <WrongBurger gameTimer={gameTimer} />,
    success: <CorrectBurger gameTimer={gameTimer} />,
    score: <Score />,
  };

  return (
    <>
      {views[state.phase]}
    </>
  );
};
export default Play;


//la ruta solo puedes entrar si hay un nivel.
// al finalizar el juego, poner el mensaje de score "tenemos noticias" dentro de play. Y Score lo convierto en ranking. Para no tener acceso hasta que no termines de jugar