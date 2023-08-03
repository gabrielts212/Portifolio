import React from "react";
import {
  Flex,
  Text,
  Heading,
  Box,
  List,
  ListItem,
  UnorderedList,
  DrawerHeader,
  SimpleGrid,
  Divider,
  Link,
} from "@chakra-ui/react";

const headerTitles = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Sobre",
    url: "/about",
  },
  {
    title: "Portifolio",
    url: "/#Portifolio",
  },
];

const Header = () => {
  return (
    <Flex bg="#000" w="100%" h="80px" color="#777" position="relative" as="h2" id="Header">
      <Flex align="center" gap="10" ml="5">
        {headerTitles.map((title, index) => {
          return (
            <Flex {...title} key={index} >
              <Text
               
                cursor="pointer"
                _hover={{ bg: "white" }}
                paddingRight="1rem"
                fontSize="23"
                gap="10"
                fontFamily="Roboto"
                fontWeight="600"
              >
                <a href={title.url}>{title.title}</a>
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Header;
