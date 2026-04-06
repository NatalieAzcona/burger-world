import { IngredientPiece } from "./IngredientPiece";
import { GameContext } from "../../context/GameContext";
import { useContext } from "react";
import { Box, Button, VStack } from "@chakra-ui/react";

const OrderTicket = ({ gameTimer }) => {
  const { state, dispatch } = useContext(GameContext);
  const { targetBurger } = state;

  return (
    <>
      {gameTimer}
      <Box
        maxW="560px"
        mx="auto"
        mt={6}
        p={6}
        border="3px solid"
        borderColor="choco"
        bg="paper"
        borderRadius="3xl"
        boxShadow="0 10px 0 0 var(--chakra-colors-bun), inset 0 2px 0 rgba(255,255,255,0.6)"
      >
        <VStack gap={4} align="center">
          <h3>El cliente te ha pedido esta hamburguesa: </h3>
          <div className="hamburger">
            {targetBurger &&
              targetBurger.map((ingredient, index) => (
                <IngredientPiece key={index} className={ingredient.className} />
              ))}
          </div>
          <Button
            onClick={() => dispatch({ type: "START_BUILDING" })}
            bg="ketchup"
            color="white"
            border="3px solid"
            borderRadius="full"
            borderColor="choco"
            boxShadow="0 4px 0 0 var(--chakra-colors-choco)"
            _hover={{ bg: "berry", transform: "translateY(-1px)" }}
          >
            ¡Ya la memoricé!
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default OrderTicket;
