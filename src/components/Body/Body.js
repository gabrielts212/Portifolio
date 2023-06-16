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
// import Instagram from "../assets/images/Instagram.png";
import Road from "../assets/images/road.jpg";
import Cathedral from "../assets/images/cathedral.jpg";
import Bridge from "../assets/images/Bridge.jpg";
import European from "../assets/images/european.jpg";

const icons = [
  {
    icon: European,
    alt: "Instagram",
  },
  {
    icon: Cathedral,
    alt: "Instagram",
  },
  {
    icon: Road,
    alt: "Instagram",
  },
  {
    icon: Bridge,
    alt: "Instagram",
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
    <Flex w="100%" h="100%">
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
          <Flex gap="40" pb="60">
            {icons.map((icon, index) => {
              return (
                <Text
                  {...icon}
                  key={index}
                  cursor="pointer"
                  height="260px"
                  w="260px"
                >
                  <Image src={icon.icon} alt={icon.alt} />
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
