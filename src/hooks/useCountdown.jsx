import { useContext, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { GameContext } from "../context/GameContext";

const useCountdown = () => {
  const { state, dispatch } = useContext(GameContext);


  useEffect(() => {
    //Si llega a 0, pasamos onComplete
    if (state.timeLeft === 0) {
      dispatch({ type: "GAME_OVER" });
      return;
    }

    if (state.timeLeft <= 0) return;

    const interval = setInterval(() => {
      dispatch({type: "TICK"});
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [state.timeLeft]);

  return (
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
  );
};

export default useCountdown;
