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
import Teste from "../assets/images/teste.jpg";
import Image from "next/image";
const BodyProject = () => {
  return (
    <Flex h="100%" w="100%" bg="aqua" align="center" justifyContent="center">
      <Box display="inline-block" align="center">
        <Image src={Teste} alt="Imagem" />
        <Box
          position="absolute"
          top="25%"
          left="45%"
          fontSize="30px"
          bg="rgba(0, 0, 0, 0.5)"
          padding="10px"
        >
          Meu Portifolio
        </Box>
      </Box>
    </Flex>
  );
};

export default BodyProject;
