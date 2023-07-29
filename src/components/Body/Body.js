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
} from "@chakra-ui/react";
import Image from "next/image";
import Projeto1 from "../assets/images/projeto1.png";
import Projeto2 from "../assets/images/projeto2.png";
import Projeto3 from "../assets/images/projeto3.png";

const icons = [
  {
    icon: Projeto1,
    alt: "Instagram",
    url: 'https://landing-page-indol-mu.vercel.app/',
  },
  {
    icon: Projeto2,
    alt: "Instagram",
    url: 'https://shoes-lyegkccbt-gabrielts212.vercel.app/',
  },
  {
    icon: Projeto3,
    alt: "Instagram",
    url: 'https://lovt-doz1vxtow-gabrielts212.vercel.app/',
  },
];

const newsList = [
  {
    heading: "Meu Porfolio",
    content:
      "Criamos um site/blog fictício, e nosso personagem é um fotógrafo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    heading: "MEU TRABALHO",
    content: "Aqui tem um dos meus últimos trabalhos.",
  },
];

const Body = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      color="#777"
      bg=" #131516"
      SimpleGrid
      minChildWidth="120px"
      spacing="40px"
    >
      <Flex flexDir="column" align="center" h="50%">
        {newsList.map((news, index) => {
          return (
            <Flex flexDir="column" {...news} key={index} w="80%" pb="50">
              <Flex flexDir="column" align="center" pb="5" pt="10">
                <Heading
                  size="xs"
                  fontFamily="Roboto"
                  fontWeight="600"
                  fontSize="16px"
                >
                  {news.heading}
                </Heading>
                <Text
                  pt="2"
                  fontSize="16px"
                  fontFamily="Roboto"
                  fontWeight="400"
                >
                  {news.content}
                </Text>
              </Flex>
            </Flex>
          );
        })}

        <Flex>
          <Flex gap="40" pb="10">
            {icons.map((icon, index) => {
              return (
                <Text
                  {...icon}
                  key={index}
                  cursor="pointer"
                  height="460px"
                  w="460px"
                >
                  <a href={icon.url}>

                  <Image src={icon.icon} alt={icon.alt} />
                  </a>
                </Text>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Body;
