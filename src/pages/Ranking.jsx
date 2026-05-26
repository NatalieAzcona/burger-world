import { useContext, useEffect } from "react";
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

  const { data: scores, isLoading, isError } = useGetScores(difficulty);
  const index = scores?.findIndex(
    (e) => e.playerName === playerName && e.score === score,
  );
  const position = index >= 0 ? index + 1 : null;

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

          {isLoading && (
            <Text color="choco" textAlign="center">
              Cargando...
            </Text>
          )}

          {isError && (
            <Text color="ketchup" textAlign="center">
              El servidor no está disponible
            </Text>
          )}

          {!isLoading && !isError && (
            <VStack gap={2} align="stretch">
              {position && (
                <Text color="choco" textAlign="center">
                  Tu posición es {position}
                </Text>
              )}
              {visibleScores?.length > 0 ? (
                visibleScores.map((e, i) => (
                  <Text key={e._id} color="choco">
                    {i + 1}. {e.playerName} | Score: {e.score}
                  </Text>
                ))
              ) : (
                <Text color="choco" textAlign="center">
                  No hay puntuaciones todavía
                </Text>
              )}
            </VStack>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default Ranking;
