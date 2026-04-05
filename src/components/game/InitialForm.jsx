import React, { useContext } from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../context/GameContext";

const InitialForm = () => {
  const { dispatch } = useContext(GameContext);
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      playerName: "",
      difficulty: "easy",
    },
  });

  const onSubmit = (data) => {
    dispatch({ type: "START_GAME", data: data }); //data al contexto
    navigate("/play"); //envío al play
  };

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
      <VStack
        as="form"
        onSubmit={handleSubmit(onSubmit)}
        align="stretch"
        gap={4}
      >
        <Box>
          <Text
            as="label"
            className="game-title"
            htmlFor="playerName"
            display="block"
            mb={2}
            fontWeight="bold"
            color="choco"
          >
            ¿Cuál es tu burgernombre?
          </Text>
          <Input
            bg="white"
            border="2px solid"
            borderColor="bun"
            borderRadius="full"
            _focusVisible={{
              borderColor: "ketchup",
              boxShadow: "0 0 0 2px var(--chakra-colors-ketchup)",
            }}
            _placeholder={{ color: "bun" }}
            placeholder="¿Hamburguesio..?"
            type="text"
            id="playerName"
            {...register("playerName", {
              required: "No olvides escribir tu nombre :)",
              minLength: 2,
            })}
          />
        </Box>

        <Box>
          <Heading as="h2" size="md" color="choco" mb={2}>
            ¿Cómo quieres la carne?
          </Heading>
          <VStack align="start" gap={2}>
            <Box
              as="label"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={3}
              p={3}
              border="2px solid"
              borderColor="ketchup"
              borderRadius="full"
              bg="#fff7f7"
              _hover={{ bg: "#ffefef" }}
              cursor="pointer"
              w="full"
            >
              <HStack gap={2}>
                <input type="radio" value="easy" {...register("difficulty")} />
                <Text color="choco" fontWeight="semibold">
                  Poco hecha 🔥
                </Text>
              </HStack>
            </Box>
            <Box
              as="label"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={3}
              p={3}
              border="2px solid"
              borderColor="ketchup"
              borderRadius="full"
              bg="#fff7f7"
              _hover={{ bg: "#ffefef" }}
              cursor="pointer"
              w="full"
            >
              <HStack gap={2}>
                <input
                  type="radio"
                  value="medium"
                  {...register("difficulty")}
                />
                <Text color="choco" fontWeight="semibold">
                  Al punto 🔥🔥
                </Text>
              </HStack>
            </Box>
            <Box
              as="label"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              gap={3}
              p={3}
              border="2px solid"
              borderColor="ketchup"
              borderRadius="full"
              bg="#fff7f7"
              _hover={{ bg: "#ffefef" }}
              cursor="pointer"
              w="full"
            >
              <HStack gap={2}>
                <input type="radio" value="hard" {...register("difficulty")} />
                <Text color="choco" fontWeight="semibold">
                  Muy hecha 🔥🔥🔥
                </Text>
              </HStack>
            </Box>
          </VStack>
        </Box>

        <Button
          type="submit"
          alignSelf="start"
          bg="ketchup"
          color="white"
          border="3px solid"
          borderRadius="full"
          borderColor="choco"
          boxShadow="0 4px 0 0 var(--chakra-colors-choco)"
          _hover={{ bg: "berry", transform: "translateY(-1px)" }}
        >
          Jugar
        </Button>
      </VStack>
    </Box>
  );
};

export default InitialForm;
