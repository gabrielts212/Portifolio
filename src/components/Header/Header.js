import React from 'react'
import { Flex, Text, Heading, Box, List, ListItem,UnorderedList,DrawerHeader,SimpleGrid,Divider } from "@chakra-ui/react";


const headerTitles = [
    {
      title: "Home",
    },
    {
      title: "Sobre",
    },
    {
      title: "Portifolio",
    },
  ];


const Header = () => {
  return (
    <Flex  bg="gray" w="100%"h="100px" position="fixed"  gap="10" >
     
     <Flex   align="center" gap="10" >
          {headerTitles.map((title, index) => {
            return (
              <Flex {...title} key={index}  >
                  {/* <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link> */}
                <Text  cursor="pointer"  _hover={{bg: "white" }}  paddingRight="1rem" fontFamily="Poppins" fontSize="23" gap="10">
                  {title.title}
                </Text>
              </Flex>
            );
          })}
        </Flex>
    
    </Flex>
  )
}

export default Header