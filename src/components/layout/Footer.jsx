import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      borderTop="3px solid"
      borderColor="choco"
      py={3}
      px={5}
      bg="linear-gradient(0deg, #fff7f7 0%, #fff7f7 50%, #ffdede 50%, #ffdede 100%)"
      borderTopRadius="3xl"
      boxShadow="0 -6px 0 0 rgba(201, 137, 75, 0.7), inset 0 1px 0 rgba(255,255,255,0.75)"
    >
      <Text
        m={0}
        textAlign="center"
        color="choco"
        fontSize="sm"
        fontWeight="bold"
        letterSpacing="0.4px"
      >
        Burger World | {new Date().getFullYear()} | Hecho con React
      </Text>
    </Box>
  );
};

export default Footer;
