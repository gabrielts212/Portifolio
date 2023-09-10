import React from "react";
import { Flex, Text, Heading, Box, SimpleGrid } from "@chakra-ui/react";

const newsList = [
  {
    heading: "Sobre Mim",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit. ",
  },
];

const programar = () => {
  return (
    <Box w="100%" h="80%" color="#777" bg=" white ">
      <Box flexDir="column" align="center" h="50%">
        {newsList.map((news, index) => {
          return (
            <Box flexDir="column" {...news} key={index} w="80%" pb="50">
              <Flex flexDir="column" align="center" pb="5" pt="10">
                <Heading
                  as="h2"
                  id="Portifolio"
                  size="25"
                  fontFamily="poppins"
                  fontSize="2.3rem"
                  fontWeight="600"
                >
                  {news.heading}
                </Heading>
                <Text
                  pt="2"
                  fontFamily="poppins"
                  fontWeight="600"
                  fontSize="20px"
                >
                  {news.content}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default programar;
