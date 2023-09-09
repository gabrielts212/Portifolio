// src/components/Navigation.js
import React from "react";
import { Link as ChakraLink, Flex, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Flex p={4} bg="blue.500" color="white">
      {/* <ChakraLink as={Link} to="/">Home</ChakraLink> */}
      <Spacer />
      <ChakraLink as={Link} to="/about">
        About
      </ChakraLink>
    </Flex>
  );
}

export default Navigation;
