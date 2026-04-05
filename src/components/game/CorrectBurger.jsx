import { useContext } from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { GameContext } from "../../context/GameContext";
import "../../assets/styles/emoji.scss";

const CorrectBurger = () => {
  const { state, dispatch } = useContext(GameContext);
  const score = state.score;

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minH="80vh">
      <Box
        maxW="480px"
        w="100%"
        p={8}
        border="3px solid"
        borderColor="choco"
        bg="#f0faf3"
        borderRadius="3xl"
        boxShadow="0 10px 0 0 var(--chakra-colors-choco), inset 0 2px 0 rgba(255,255,255,0.6)"
        textAlign="center"
      >
        <VStack gap={4}>
          <Heading color="choco">¡Al cliente le encanta cómo cocinas!</Heading>
          <Text color="choco">Score: <strong>{score}</strong></Text>
          <div className="emoji smile">
            <figure className="face">
              <span className="eyes">
                <span className="eye"></span>
                <span className="eye"></span>
              </span>
              <span className="mouth"></span>
            </figure>
          </div>
          <Button
            onClick={() => dispatch({ type: "NEXT_BURGER" })}
            bg="ketchup"
            color="white"
            border="3px solid"
            borderRadius="full"
            borderColor="choco"
            boxShadow="0 4px 0 0 var(--chakra-colors-choco)"
            _hover={{ bg: "berry", transform: "translateY(-1px)" }}
          >
            ¡A por otra hamburguesa!
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default CorrectBurger;
