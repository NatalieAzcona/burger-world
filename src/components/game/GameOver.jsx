import React, { useContext, useEffect } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";

const GameOver = () => {
  const { state } = useContext(GameContext);
  const { playerName } = state;
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/score"), 3000);
  }, []);

  return (
    <Box
      p={8}
      border="3px solid"
      borderColor="choco"
      bg="mustard"
      borderRadius="3xl"
      boxShadow="0 10px 0 0 var(--chakra-colors-choco)"
      textAlign="center"
      mx="auto"
      mt={6}
    >
      <VStack gap={3}>
        <Heading color="choco">¡Se ha acabado el tiempo, {playerName}!</Heading>
        <Text color="choco" fontSize="lg">Estamos calculando qué tan bien cocinas...</Text>
      </VStack>
    </Box>
  );
};

export default GameOver;
