import React from "react";
import { Flex, Text, Heading, Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const newsList = [
  {
    heading: "Meu Portfólio",
    content:
      "Criei um site/blog fictício para amarzenar todos os meus projetos que estão em produção. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit. ",
  },
];

const programar = () => {
  return (
    <Flex w="100%" h="100%" color="#777" bg=" #131516">
      <Flex flexDir="column" align="center" h="340px">
        {newsList.map((news, index) => {
          return (
            <Flex flexDir="column" {...news} key={index} w="90%" pb="50">
              <Flex flexDir="column" align="center" pb="5" pt="10">
                <Heading
                  as="h2"
                  id="Portifolio"
                  size="xs"
                  fontFamily="Roboto"
                  fontWeight="600"
                  fontSize="16px"
                >
                  {news.heading}
                </Heading>
                <Text pt="2" fontFamily="Roboto" fontWeight="400">
                  {news.content}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default programar;
