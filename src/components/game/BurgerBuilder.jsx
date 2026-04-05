import { DragDropProvider } from "@dnd-kit/react";
import React, { useContext, useState } from "react";
import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { GameContext } from "../../context/GameContext";
import compareHamburger from "../../utils/compareHamburger";
import "./BurgerBuilder.scss";
import useCountdown from "../../hooks/useCountdown";
import GameInfo from "./GameInfo";
import IngredientsPanel from "./ingredientsPanel";
import DropZone from "./DropZone";

const BurgerBuilder = () => {
  const { state, dispatch } = useContext(GameContext);
  const { targetBurger } = state; //aqui la hamburguesa del ticket
  const [builtBurger, setBuiltBurger] = useState([]); //aqui la hamburguesa que construiremos en array
  const countdown = useCountdown({sec: 60, onComplete: "GAME_OVER", activePhase: "building", currentPhase: state.phase});

  return (
    <>
      <HStack justify="space-between" align="flex-start" w="100%" px={4}>
        {countdown}
        <GameInfo />
      </HStack>
      <DragDropProvider
        onDragEnd={(e) => {
          if (e.operation.target === null) return;
          const newBurger = [...builtBurger, e.operation.source.id]; //guardo porque es asíncrono y no lo pilla de una
          setBuiltBurger(newBurger);
        }}
      >
        <Box
          maxW="fit-content"
          mx="auto"
          mt={6}
          p={6}
          border="3px solid"
          borderColor="choco"
          bg="#fff8f6"
          borderRadius="3xl"
          boxShadow="0 10px 0 0 var(--chakra-colors-bun), inset 0 2px 0 rgba(255,255,255,0.6)"
        >
          <VStack gap={4}>
            <div className="burger-builder">
              <IngredientsPanel />
              <DropZone builtBurger={builtBurger} />
            </div>
            <HStack>
            <Button
              onClick={() => {
                const builtBurgerUndo = [...builtBurger];
                builtBurgerUndo.pop();
                setBuiltBurger(builtBurgerUndo);
              }}
              bg="ash"
              color="white"
              border="3px solid"
              borderRadius="full"
              borderColor="choco"
              boxShadow="0 4px 0 0 var(--chakra-colors-choco)"
              _hover={{ bg: "gray.500", transform: "translateY(-1px)" }}
            >
              Deshacer
            </Button>
            <Button
              onClick={() => {
                const compared = compareHamburger(targetBurger, builtBurger);
                compared
                  ? dispatch({ type: "BURGER_COMPLETE" })
                  : dispatch({ type: "WRONG_ATTEMPT" });
              }}
              bg="ketchup"
              color="white"
              border="3px solid"
              borderRadius="full"
              borderColor="choco"
              boxShadow="0 4px 0 0 var(--chakra-colors-choco)"
              _hover={{ bg: "berry", transform: "translateY(-1px)" }}
            >
              Comprobar
            </Button>
          </HStack>
          </VStack>
        </Box>
      </DragDropProvider>
    </>
  );
};

export default BurgerBuilder;

//event.operation.source.id es el ingrediente que se arrastra
//event.operation.target.id es donde se suelta (burger-zone)

//NOTA: usamos index en builtBurger porque React se está confundiendo con el i repetido */
