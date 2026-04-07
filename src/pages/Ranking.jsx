import React, { useContext, useEffect } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { GameContext } from "../context/GameContext";
import useGetScores from "../hooks/useGetScores";
import { useNavigate } from "react-router-dom";

const Ranking = () => {
  const { state } = useContext(GameContext);
  const { playerName, score, difficulty } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.difficulty) navigate("/");
  }, []);

  const scores = useGetScores(difficulty);
  const index = scores?.findIndex(
    (e) => e.playerName === playerName && e.score === score,
  );
  const position = index + 1;

  //top 10 en score
  const visibleScores = scores?.slice(0, 10);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="80vh">
      <Box
        maxW="480px"
        w="100%"
        p={8}
        border="3px solid"
        borderColor="choco"
        bg="paper"
        borderRadius="3xl"
        boxShadow="0 10px 0 0 var(--chakra-colors-bun), inset 0 2px 0 rgba(255,255,255,0.6)"
      >
        <VStack gap={4} align="stretch">
          <Heading color="choco" textAlign="center">
            Top 10 modo: {difficulty}
          </Heading>
          {index === -1 ? (
            <Text color="choco" textAlign="center">
              Error al cargar tu récord
            </Text>
          ) : (
            <Text color="choco" textAlign="center">
              Tu posición es {position}
            </Text>
          )}
          <VStack gap={2} align="stretch">
            {visibleScores?.map((e) => (
              <Text key={e._id} color="choco">
                {visibleScores.indexOf(e) + 1}. {e.playerName} | Score:{" "}
                {e.score}
              </Text>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Ranking;
