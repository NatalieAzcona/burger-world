import React, { useContext, useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { GameContext } from "../context/GameContext";

const useCountdown = ({sec, onComplete}) => {
  const { dispatch } = useContext(GameContext);
  const [count, setCount] = useState(sec);

  useEffect(() => {

  //Si llega a 0, pasamos onComplete
    if (count === 0) {
      dispatch({ type: onComplete });
      return;
    }
      
    if (count <= 0) return; 
    
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  //Resetea el contador con dependencia en sec: 60 o 5
  useEffect(() => {
    setCount(sec);
  }, [sec]);

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


//al desmontar play te cargas la partida y el tiempo da igual porque se corta alli.