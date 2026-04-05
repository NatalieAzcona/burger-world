import React, { useContext } from "react";
import { Box, Text } from "@chakra-ui/react";
import { GameContext } from "../../context/GameContext";

const GameInfo = () => {
  const { state } = useContext(GameContext);
  const { score, difficulty, playerName } = state;

  return (
    <Box
      p={4}
      minW="140px"
      border="3px solid"
      borderColor="choco"
      bg="#fff8f6"
      borderRadius="2xl"
      boxShadow="0 4px 0 0 var(--chakra-colors-bun)"
    >
      <Text fontWeight="bold" color="choco">Nombre: {playerName}</Text>
      <Text color="choco">Score: {score}</Text>
      <Text color="choco">Modo: {difficulty}</Text>
    </Box>
  );
};

export default GameInfo;
