import { useContext, useEffect } from "react";
import { Box, Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { GameContext } from "../context/GameContext";
import scoreMessages from "../data/scoreMessages";
import { useNavigate } from "react-router-dom";
import usePostScore from "../hooks/usePostScore";

const Score = () => {
  const { state, dispatch } = useContext(GameContext);
  const { playerName, score, difficulty, scoreSubmitted } = state;
  const scoreMessage = scoreMessages.find((n) => score <= n.maxScore); //para el mensaje del score
  const navigate = useNavigate();

  //tanstack - post score
  const { mutate, isError } = usePostScore();
  useEffect(() => {
    if (!scoreSubmitted) {
      mutate({ playerName, score, difficulty });
      dispatch({ type: "SCORE_SUBMITTED" });
    }
  }, []);

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
        textAlign="center"
      >
        <VStack gap={4}>
          <Heading color="choco">
            ¡Tenemos noticias para ti, {playerName}!
          </Heading>
          <Text color="choco">
            Tu score es <strong>{score}</strong> para un nivel{" "}
            <strong>{difficulty}</strong>
          </Text>
          <Text color="choco" fontSize="lg">
            {scoreMessage.message}
          </Text>
          {isError && (
            <Text color="ketchup" fontSize="sm">
              No se pudo guardar tu puntuación (servidor no disponible)
            </Text>
          )}
          <HStack gap={4} mt={2}>
            <Button
              onClick={() => navigate("/ranking")}
              bg="ash"
              color="white"
              border="3px solid"
              borderRadius="full"
              borderColor="choco"
              boxShadow="0 4px 0 0 var(--chakra-colors-choco)"
              _hover={{ bg: "gray.500", transform: "translateY(-1px)" }}
            >
              Ranking
            </Button>
            <Button
              onClick={() => navigate("/")}
              bg="ketchup"
              color="white"
              border="3px solid"
              borderRadius="full"
              borderColor="choco"
              boxShadow="0 4px 0 0 var(--chakra-colors-choco)"
              _hover={{ bg: "berry", transform: "translateY(-1px)" }}
            >
              Jugar de nuevo
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Score;
