import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const headerTitles = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Sobre",
    url: "/about",
  },
];

const Headersobre = () => {
  return (
    <Flex
      bg="#070b21"
      w="100%"
      h="80px"
      color="#777"
      position="relative"
      as="h2"
      id="Header"
    >
      <Flex align="center" gap="5" ml="6">
        {headerTitles.map((title, index) => {
          return (
            <Flex {...title} key={index}>
              <Text
                cursor="pointer"
                _hover={{
                  // Define as propriedades CSS que você deseja aplicar quando o mouse estiver sobre o botão
                  transform: "scale(1.4)", // Aumenta o tamanho em 20%
                  transition: "transform 0.1s", // Adiciona uma transição suave para a animação
                }}
                paddingRight="2rem"
                fontSize="20"
                fontFamily="poppins"
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

export default Headersobre;
