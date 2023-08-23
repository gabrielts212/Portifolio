import React from "react";
import { Flex, Text, Heading, Box, SimpleGrid } from "@chakra-ui/react";
// import Image from "next/image";

const newsList = [
  {
    heading: "Meu Portfólio",
    content:
      "Criei um site/blog fictício para amarzenar todos os meus projetos que estão em produção. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit. ",
  },
];

const programar = () => {
  return (
    <Flex w="100%" h="80vh" color="#777" bg=" #131516"pt="10">
      <Box flexDir="column" align="center" h="50%" justify="flex-end" >
        {newsList.map((news, index) => {
          return (
            <Box flexDir="column" {...news} key={index} w="80%" pb="50"justify="flex-end">
              <Flex flexDir="column"  >
                <Heading
                  as="h2"
                  id="Portifolio"
                  size="xs"
                  fontFamily="Roboto"
                  fontWeight="800"
                  fontSize="50px"
                >
                  {news.heading}
                </Heading>
                <Text pt="2" fontFamily="Roboto" fontWeight="800"fontSize="20px">
                  {news.content}
                </Text>
              </Flex>
            </Box>
          );
        })}
      </Box>
     </Flex>
  );
};

export default programar;
