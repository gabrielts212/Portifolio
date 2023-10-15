import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "./../../../public/favicon.ico";

const headerTitles = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Sobre",
    url: "/about",
  },
  {
    title: "Portfólio",
    url: "/#Portifolio",
  },
];

const Header = () => {
  return (
    <Flex
      bg="#070b21"
      w="100%"
      h={["100px", "80px"]}
      color="#777"
      position="relative"
      as="h2"
      id="Header"
      align="center"
      justify="space-between"
      paddingX={["2", "5"]}
    >
      <Flex align="center">
        <Box cursor="pointer" marginRight={["1rem", "2rem"]}   >
          <motion.div whileHover={{ scale: 1.2, rotate: 360, opacity: 0.7 }}  >
            <Image
              src={Logo}
              alt="Logo"
              width={50}
              height={50}
              cursor="pointer"
             
            />
          </motion.div>
        </Box>
        <Flex
          align="center"
          display={["none", "flex"]}
        >
          {headerTitles.map((title, index) => (
            <Text
              key={index}
              cursor="pointer"
              _hover={{
                transform: "scale(1.2)",
                transition: "transform 0.5s",
              }}
              paddingRight={["1rem", "2rem"]}
              fontSize={["16px", "20px"]}
              fontFamily="poppins"
              fontWeight="600"
            >
              <a href={title.url}>{title.title}</a>
            </Text>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
