import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import useGetScores from "../hooks/useGetScores";

const Ranking = () => {
  const { state } = useContext(GameContext);
  const { playerName, score, difficulty } = state;

  const scores = useGetScores(difficulty);
  const index = scores?.findIndex(
    (e) => e.playerName === playerName && e.score === score,
  );
  const position = index + 1;

  const inicio = Math.max(0, position - 5);
  const fin = inicio + 10;
  const visibleScores = scores?.slice(inicio, fin);

  return (
    <div>
      {index === -1 ? (
        <p>Error al cargar tu récord</p>
      ) : (
        <p>Tu posición es {position}</p>
      )}
      <ul>
        {visibleScores?.map((e) => (
          <li key={e._id}>{e.playerName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
