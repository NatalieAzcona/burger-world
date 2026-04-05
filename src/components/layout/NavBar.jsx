import { Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "Home", to: "/" },
  { label: "Play", to: "/play" },
  { label: "Score", to: "/score" },
];

const NavBar = () => {
  return (
    <Flex
      as="nav"
      className="main-nav"
      gap={3}
      align="center"
      wrap="wrap"
      bg="#fff8f6"
      p={2}
      border="3px solid"
      borderColor="choco"
      borderRadius="3xl"
      boxShadow="0 6px 0 0 var(--chakra-colors-bun), inset 0 1px 0 rgba(255,255,255,0.6)"
    >
      {links.map((item) => (
        <NavLink key={item.to} to={item.to} end={item.to === "/"}>
          {({ isActive }) => (
            <Link
              as="span"
              px={4.5}
              py={2}
              border="2px solid"
              borderColor={isActive ? "choco" : "ketchup"}
              bg={isActive ? "ketchup" : "#fff1ef"}
              color={isActive ? "white" : "choco"}
              fontWeight={isActive ? "bold" : "semibold"}
              textTransform="uppercase"
              letterSpacing="0.6px"
              borderRadius="full"
              textDecoration="none"
              boxShadow={
                isActive
                  ? "0 3px 0 0 var(--chakra-colors-choco)"
                  : "0 2px 0 0 var(--chakra-colors-bun)"
              }
              transition="all 0.16s ease"
              _hover={{
                textDecoration: "none",
                color: isActive ? "white" : "choco",
                bg: isActive ? "berry" : "#ffe2dd",
                transform: "translateY(-1px)",
              }}
            >
              {item.label}
            </Link>
          )}
        </NavLink>
      ))}
    </Flex>
  );
};

export default NavBar;
