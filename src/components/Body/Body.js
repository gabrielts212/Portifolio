import React from "react";
import { Flex, Text, Heading, Box, Link, SimpleGrid, Center } from "@chakra-ui/react";
import Image from "next/image";
import Projeto1 from "../assets/images/projeto1.png";
import Projeto2 from "../assets/images/projeto2.png";
import Projeto3 from "../assets/images/projeto3.png";

const icons = [
  {
    icon: Projeto1,
    alt: "Instagram",
    url: "https://octopag-gabrielts212.vercel.app/",
  },
  {
    icon: Projeto2,
    alt: "Instagram",
    url: "https://shoes-lyegkccbt-gabrielts212.vercel.app/",
  },
  {
    icon: Projeto3,
    alt: "Instagram",
    url: "https://landing-page-indol-mu.vercel.app/",
  },
];

const newsList = [
  {
    heading: "Meu Portfólio",
    content: "Bem-vindo ao Meu portfólio, que tem como solução definitiva organizar e acessar todos os meus projetos hospedados na Vercel.",
  },
  {
    heading: "Meus Projetos",
    content: "Aqui tem alguns projetos que estão no ar pela Vercel.",
  },
];

const Body = () => {
  return (
    <Box w="100%" h="100%" color="#777" bg="white">
      <Flex flexDir="column" align="center" h="50%">
        {newsList.map((news, index) => {
          return (
            <Center key={index} w="100%">
              <Flex flexDir="column" {...news} w="80%" pb="50">
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
              </Flex>
            </Center>
          );
        })}

        <SimpleGrid
          columns={[1, 2, 3]}
          spacing="100px"
          justifyContent="space-around"
          mb="40"
        >
          {icons.map((icon, index) => {
            return (
              <Center key={index}>
                <Box
                  {...icon}
                  cursor="pointer"
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "transform 0.1s",
                  }}
                >
                  <Link href={icon.url} target="_blank" rel="noopener noreferrer">
                    <Image src={icon.icon} alt={icon.alt} />
                  </Link>
                </Box>
              </Center>
            );
          })}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Body;
