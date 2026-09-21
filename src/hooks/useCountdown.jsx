import { useContext, useEffect, useRef, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { GameContext } from "../context/GameContext";

const useCountdown = () => {
  const { state, dispatch } = useContext(GameContext);
  const preCheckTimeLeft = useRef(state.timeLeft);
  const prevPhase = useRef(state.phase);
  const [timeDelta, setTimeDelta] = useState(null);

  useEffect(() => {
    const isResultPhase = state.phase === "success" || state.phase === "error";

    //Si llega a 0, pasamos a onComplete (salvo que estemos viendo la review del cliente)
    if (state.timeLeft === 0) {
      if (!isResultPhase) dispatch({ type: "GAME_OVER" });
      return;
    }

    if (state.timeLeft <= 0) return;

    const interval = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [state.timeLeft, state.phase]);

  useEffect(() => {
    const isResultPhase = state.phase === "success" || state.phase === "error";
    const justEnteredResultPhase = isResultPhase && prevPhase.current !== state.phase;

    if (justEnteredResultPhase) {
      const diff = state.timeLeft - preCheckTimeLeft.current;
      if (diff !== 0) setTimeDelta({ diff, key: Date.now() });
    } else if (!isResultPhase) {
      preCheckTimeLeft.current = state.timeLeft;
      setTimeDelta(null);
    }

    prevPhase.current = state.phase;
  }, [state.phase, state.timeLeft]);

  return (
    <Box position="relative" width="80px" height="80px">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="80px"
        height="80px"
        borderRadius="full"
        border="3px solid"
        borderColor="choco"
        boxShadow="0 4px 0 0 var(--chakra-colors-choco)"
        bg="paper"
      >
        <Text
          fontWeight="bold"
          fontSize="2xl"
          color="choco"
          key={state.timeLeft}
          animation="pulse 0.3s ease-out"
        >
          {state.timeLeft}
        </Text>
      </Box>
      {timeDelta && (
        <Text
          key={timeDelta.key}
          position="absolute"
          top="-10px"
          right="-16px"
          fontWeight="bold"
          fontSize="lg"
          color={timeDelta.diff > 0 ? "#3fb95c" : "ketchup"}
          animation="popIn 0.5s ease-out"
        >
          {timeDelta.diff > 0 ? `+${timeDelta.diff}` : timeDelta.diff}
        </Text>
      )}
    </Box>
  );
};

export default useCountdown;
