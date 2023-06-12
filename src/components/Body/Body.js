import React from 'react'
import { Flex, Text, Heading, Box, List, ListItem,UnorderedList,DrawerHeader,SimpleGrid,Divider } from "@chakra-ui/react";
import Image from "next/image"; 
import Instagram from "../assets/images/Instagram.png";
const icons = [

  {
    icon: Instagram,
    alt: "Instagram",
  },
  {
    icon: Instagram,
    alt: "Instagram",
  },
  {
    icon: Instagram,
    alt: "Instagram",
  },
  {
    icon: Instagram,
    alt: "Instagram",
  },

  // {
  //   icon: Linkedin,
  //   alt: "Linkedin",
  // },

  // {
  //   icon: Facebook,
  //   alt: "Facebook",
  // },

];


const newsList = [
  {
    heading: "Meu Porfolio",
    content:
      "Criamos um site/blog fictício, e nosso personagem é um fotógrafo. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      
  },
  {
    heading: "MEU TRABALHO",
    content:
      "Aqui tem um dos meus últimos trabalhos.",
  },
  
];

const Body = () => {
  return (
<Flex w="100%" h="100%" bg="red" >
<Flex  w="50%" justify="center"  >

<Flex  flexDir="column">
          {newsList.map((news, index) => {
            return (
              <Flex flexDir="column" {...news} key={index}>
                  <Flex flexDir="column">
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
        </Flex>



</Flex> 
<Flex pt="20"  >


  <SimpleGrid   columns={[1, 2, 4]} pt="10rem" pb="5" >
    <Box  gap={3.5} display={["none", "none", "none", "flex", "flex"]} >
          {icons.map((icon, index) => {
            return (
              <Text {...icon} key={index}  cursor="pointer">
                <Image src={icon.icon} alt={icon.alt}/>
              </Text>
            );
          })}
      
    </Box>
  </SimpleGrid>

</Flex>
</Flex>


 
  )
}

export default Body