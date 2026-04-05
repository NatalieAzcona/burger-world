import { Box, Heading, VStack } from "@chakra-ui/react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Box
      as="header"
      borderBottom="3px solid"
      borderColor="choco"
      px={5}
      pt={4}
      pb={3}
      bg="linear-gradient(0deg, #ffdede 0%, #ffdede 50%, #fff7f7 50%, #fff7f7 100%)"
      borderBottomRadius="3xl"
      boxShadow="0 8px 0 0 rgba(201, 137, 75, 0.7), inset 0 2px 0 rgba(255,255,255,0.75)"
    >
      <VStack align="start" gap={1} mb={3}>
        <Heading
          as="h1"
          size="lg"
          color="choco"
          m={0}
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="1px"
        >
          ¡Bienvenido a Burger World!
        </Heading>
      </VStack>
      <NavBar />
    </Box>
  );
};

export default Header;
