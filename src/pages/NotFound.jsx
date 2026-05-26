import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

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
          <Heading color="choco" fontSize="6xl">
            404
          </Heading>
          <Heading color="choco">Página no encontrada</Heading>
          <Text color="choco">Esta ruta no existe en nuestro menú</Text>
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
            Volver al inicio
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default NotFound;
