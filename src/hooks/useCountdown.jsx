import React, { useContext, useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { GameContext } from "../context/GameContext";

const useCountdown = ({sec, onComplete, activePhase, currentPhase}) => {
  const { dispatch } = useContext(GameContext);
  const [count, setCount] = useState(sec);

  useEffect(() => {
    if (count === 0 && currentPhase === activePhase) {
      dispatch({ type: onComplete });
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  //Resetear al cambiar de fase
  useEffect(() => {
    setCount(sec);
  }, [currentPhase]);

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
      bg="#fff8f6"
    >
      <Text fontWeight="bold" fontSize="2xl" color="choco" key={count} animation="pulse 0.3s ease-out">
        {count}
      </Text>
    </Box>
  );
};

export default useCountdown;
