import React from "react";
import { Flex, Text, Heading, Box, SimpleGrid } from "@chakra-ui/react";

const newsList = [
  {
    heading: "Sobre Mim",
    content:
      "Olá! Meu nome é Gabriel, e sou desenvolvedor  front-end. Sou formado em Análise e Desenvolvimento de Sistemas (ADS) e tenho um ano de experiência trabalhando com desenvolvimento web. Minha jornada no mundo do desenvolvimento começou com a descoberta do JavaScript, a linguagem que me permitiu dar vida às minhas ideias criativas na web. Rapidamente me aprofundei em frameworks como React, que me impressionou com sua capacidade de criar interfaces de usuário dinâmicas e interativas. Depois de dominar o React, embarquei na jornada de aprendizado do Next.js, uma estrutura que me permitiu construir aplicativos web de alto desempenho de forma eficiente. A possibilidade de renderização no lado do servidor e uma experiência de desenvolvimento otimizada. Com a estética e a facilidade de uso em mente, mergulhei de cabeça no Chakra UI. Adorei como ele simplifica o processo de criação de interfaces atraentes e responsivas, economizando tempo e permitindo que eu me concentre no que realmente importa a funcionalidade do aplicativo. "
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
