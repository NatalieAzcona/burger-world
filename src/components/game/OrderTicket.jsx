import { IngredientPiece } from "./IngredientsCard";
import "../../assets/styles/ingredients.scss";
import { GameContext } from "../../context/GameContext";
import { useContext } from "react";
import "./OrderTicket.scss";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

const OrderTicket = ({ timeLeft }) => {
  const { state } = useContext(GameContext);
  const { targetBurger } = state;

  return (
    <Box
      maxW="560px"
      mx="auto"
      mt={6}
      p={6}
      border="3px solid"
      borderColor="choco"
      bg="#fff8f6"
      borderRadius="3xl"
      boxShadow="0 10px 0 0 var(--chakra-colors-bun), inset 0 2px 0 rgba(255,255,255,0.6)"
    >
      <VStack gap={4} align="center">
        <h3>El cliente te ha pedido esta hamburguesa: </h3>
        <p>{timeLeft}</p>
        <div className="hamburger">
          {targetBurger &&
            targetBurger.map((ingredient, index) => (
              <IngredientPiece key={index} className={ingredient.className} />
            ))}
        </div>
      </VStack>
    </Box>
  );
};

export default OrderTicket;
