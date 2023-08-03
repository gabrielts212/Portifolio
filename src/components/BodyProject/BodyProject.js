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
    <Box h="100%" w="100%" align="center" justifyContent="center">
      <Text
        position="relative"
        // top="30%" // Centraliza verticalmente o texto
        // left="50%" // Centraliza horizontalmente o texto
        // transform="translate(-50%, -50%)" // Move o texto de forma a centralizá-lo
        align="center" justifyContent="center"
        color="white"
        fontSize="2.5rem" // Tamanho do texto
        fontFamily="Roboto"
        fontWeight="600"
        bg="rgba(0, 0, 0, 0.5)"
      >
        Meu Portifolio
      </Text>
      <Image src={Teste} alt="Imagem" />
    </Box>
  );
};

export default BodyProject;
