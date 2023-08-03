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
  backgroundImage,
  Immage,
  Divider,
} from "@chakra-ui/react";
// import Teste from "../assets/images/teste.jpg";
// import Image from "next/image";
const BodyProject = () => {
  return (
    // <Box h="100%" w="100%" align="center" justifyContent="center" >
    //   <Text
    //     position="relative"
    //     // top="30%" // Centraliza verticalmente o texto
    //     // left="50%" // Centraliza horizontalmente o texto
    //     // transform="translate(-50%, -50%)" // Move o texto de forma a centralizá-lo
    //     align="center" justifyContent="center"
    //     color="white"
    //     fontSize="2.5rem" // Tamanho do texto
    //     fontFamily="Roboto"
    //     fontWeight="600"
    //     bg="rgba(0, 0, 0, 0.5)"
    //   >
    //     Meu Portifolio
    //   </Text>
    //   {/* <Image src={Teste} alt="Imagem" /> */}
    // </Box>

<Box

  backgroundImage="url('teste.jpg')" // Substitua pelo caminho da sua imagem
  backgroundSize="cover" // Ajusta o tamanho da imagem para cobrir todo o contêiner
  backgroundPosition="center" // Centraliza a imagem no contêiner
  backgroundRepeat="no-repeat" // Impede a repetição da imagem
  w="100%" // Largura do contêiner (pode ajustar como desejar)
  h="800px" // Altura do contêiner (pode ajustar como desejar)
  display="flex" // Usa flexbox para posicionar o texto
  alignItems="center" // Alinha o texto verticalmente no centro
  justifyContent="center" // Alinha o texto horizontalmente no centro
  // bg="black"
>
  <Text  bg="rgba(0, 0, 0, 0.5)" color="white"
   fontSize="2.5rem" // Tamanho do texto
   fontFamily="Roboto"
   fontWeight="600">
  Meu Portifolio
        
  </Text>
</Box>


  );
};

export default BodyProject;
